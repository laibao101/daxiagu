import qiniu from "qiniu";
import nanoid from 'nanoid';
import {resolve} from 'path';
import fs from 'fs';
import mongoose from 'mongoose';
import {qiniuConfig} from '../config';
import '../database/schema/pic';

const Pic = mongoose.model('Pic');

const mac = new qiniu.auth.digest.Mac(qiniuConfig.AK, qiniuConfig.SK);
const options = {
    scope: qiniuConfig.bucket,
    expires: 7200
};
const putPolicy = new qiniu.rs.PutPolicy(options);

const uploadToken = putPolicy.uploadToken(mac);

const config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z2;

const uploadToQiniu = async (filename) => {
    const localFile = resolve('pics', filename);
    const formUploader = new qiniu.form_up.FormUploader(config);
    const putExtra = new qiniu.form_up.PutExtra();
    const key = nanoid() + '.png';
    console.log(`开始上传，文件名: ${key}`);
    // 文件上传
    return new Promise((resolve, reject) => {
        formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr, respBody, respInfo) {
            if (respErr) {
                reject(respErr);
                throw respErr;
            }
            if (respInfo.statusCode === 200) {
                resolve(respBody);
                console.log(`文件 ${key} 上传成功`);
            } else {
                reject(respBody);
            }
        });
    });
};

export const startUpload = async () => {
    const files = fs.readdirSync(resolve('pics'), 'utf8');
    for (let i = 0, file = null; file = files[i++];) {
        try {
            const result = await uploadToQiniu(file);
            await savePic(result);
        } catch (err) {
            console.log('err=>', err);
        }
    }
};

const savePic = async (picInfo) => {
    const pic = new Pic({
        picKey: picInfo.key,
        picHash: picInfo.hash,
    });
    await pic.save();
    console.log(`文件 ${picInfo.key} 保存成功`);
};

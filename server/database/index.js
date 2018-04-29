import mongoose from 'mongoose';
import glob from 'glob';
import {resolve} from 'path';
import {db} from '../config';

mongoose.Promise = global.Promise;
const url = `mongodb://laibao:laibao@ds014658.mlab.com:14658/daxiagu`;

export const initSchemas = () => {
    glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach(require);
};

export const connect = async () => {
    let maxConnectTimes = 0;

    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV === 'dev') {
            mongoose.set('debug', true);
        }

        mongoose.connect(url);

        mongoose.connection.on('disconnected', () => {
            if (++maxConnectTimes < 5) {
                mongoose.connect(url);
            } else {
                throw new Error('数据库错误');
            }
        });

        mongoose.connection.on('error', err => {
            reject(err);
        });

        mongoose.connection.once('open', () => {
            console.log('Connected to MongoDB -> ', url);
            resolve();
        });
    });
};

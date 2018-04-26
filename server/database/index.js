import mongoose from 'mongoose';
import {db} from '../config';

mongoose.Promise = global.Promise;
const url = `mongodb://${db.host}:${db.port}/${db.database}`;

export const connect = async () => {
    let maxConnectTimes = 0;

    return new Promise((resolve, reject) => {
        if (process.env.NODE_ENV !== 'prod') {
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

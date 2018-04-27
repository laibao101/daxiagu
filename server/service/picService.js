import mongoose from 'mongoose';
const Pic = mongoose.model('Pic');

export default class picService {
    async getAllPics() {
        return await Pic.find({});
    }
}

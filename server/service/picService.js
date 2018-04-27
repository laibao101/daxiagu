import mongoose from 'mongoose';
const Pic = mongoose.model('Pic');

export default class PicService {
    async getAllPics() {
        return await Pic.find({}).populate('tags comments');
    }

    async getPic(_id) {
        return await Pic.findOne({_id}).populate('tags comments');
    }

    async getPicsTogal() {
        return await Pic.find({}).count();
    }
}

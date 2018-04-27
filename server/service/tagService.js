import mongoose from 'mongoose';
const Tag = mongoose.model('Tag');
const Pic = mongoose.model('Pic');

export default class TagService {
    async addTag(tagName, picId) {
        const tag = new Tag({
            tag: tagName,
            pic: picId,
        });
        const tagRes = await tag.save();
        const pic = await Pic.findOne({_id: picId});
        const tags = pic.tags.concat(tagRes._id);
        return await pic.update({tags})
    }
}

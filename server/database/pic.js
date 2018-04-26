import mongoose from 'mongoose';
const {Schema} = mongoose;
const {ObjectId} = Schema.Types;

const PicScheme = new Schema({
    picUrl: {
        type: String,
        unique: true,
    },
    like: Number,
    comments: [{
        type:ObjectId,
        ref: 'Comment'
    }],
    tags: [{
        type:ObjectId,
        ref: 'Tag'
    }],
    meta: {
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            default: Date.now(),
        }
    }
});

PicScheme.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }

    next()
});

mongoose.model('Pic', PicScheme);

import mongoose from 'mongoose';
const {Schema} = mongoose;
const {ObjectId} = Schema.Types;

const CommentScheme = new Schema({
    comment: String,
    like: Number,
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

CommentScheme.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }

    next()
});

mongoose.model('Comment', CommentScheme);

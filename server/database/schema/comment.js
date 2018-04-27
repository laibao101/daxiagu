import mongoose from 'mongoose';
const {Schema} = mongoose;

const CommentScheme = new Schema({
    comment: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
        default: 0,
    },
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

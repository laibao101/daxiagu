import mongoose from 'mongoose';
const {Schema} = mongoose;

const TagScheme = new Schema({
    tag: {
        type: String,
        require: true,
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

TagScheme.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }

    next()
});

mongoose.model('Tag', TagScheme);

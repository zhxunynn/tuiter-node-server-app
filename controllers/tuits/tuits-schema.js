import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    avatar: String,
    dislikes: Number,
    time: String,
    handle: String,
    replies: Number,
    retuits: Number,
    username: String,
}, {collection: 'tuits'});
export default schema;
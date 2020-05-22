const {Schema, model} = require('mongoose');


const blogsSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    entry: { type: String, required: true },
    img: { type: String },
}, {timestamps: true});


module.exports = model('Blog', blogsSchema);
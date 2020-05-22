const {Schema, model} = require('mongoose');


const logsSchema = new Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    entry: { type: String, required: true },
    img: { type: String },
}, {timestamps: true});


module.exports = model('Blog', logsSchema);
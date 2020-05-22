const {Schema, model} = require('mongoose');


const recipesSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    entry: {
        ingredients: { type: String, required: true },
        directions: { type: String, required: true },
    },
    img: { type: String },
}, {timestamps: true});


module.exports = model('Recipe', recipesSchema);
const {Schema, model} = require('mongoose');


const logsSchema = new Schema({
    title: { type: String, required: true },
    entry: { type: String, required: true },
    shipIsBroken: { type: Boolean, default: true },
}, {timestamps: true});


module.exports = model('Log', logsSchema);
const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    resource :{
            type: String,
            required: true
            },
    code :{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("data", dataSchema);


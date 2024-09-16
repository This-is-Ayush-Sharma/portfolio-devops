const { Schema, model } = require("mongoose");
const { type } = require("os");

const contacts = Schema({
    email:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});

module.exports = model("Contacts", contacts);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const MessageSchema = new Schema({
    name:{
        type : String,
        required : true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports = Message = mongoose.model('message',MessageSchema);
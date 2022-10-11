const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    criteria:[{
        type:{
            type:String,
            required:true
        },
        text:{
            type:String,
            required:true
        },
        variable:{
            type:Object,
            required:true
        }
    }]
});

const stockData = mongoose.model('stockdata',stockSchema);

module.exports = stockData;
const mongoose = require('mongoose');
const stockData = require('./model/stockSchema');
const DB = 'mongodb+srv://harshoswal:Harsh%40123@cluster0.xy2s3p1.mongodb.net/stockinformation?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log('db connection successful');
}).catch((e)=>{
    console.log(e);
});

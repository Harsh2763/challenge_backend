const mongoose = require('mongoose');
const express = require('express');
const router = require('./Routes/routes');

require('./db/conn');

//getting schema definition
const stockData = require('./db/model/stockSchema');
const port = process.env.PORT || 8000;
const app = express();

//Routes to all pages (Here we can use router (node js package) and controller so  set we can '/page' as default route)
app.use(router);



//let result;
/* 
 app.get('/',(req,res)=>{
    res.send('result');
});

 app.get('/page/top_gainers',async (req,res)=>{
     result = await stockData.findOne({id:1});
    res.send(result)
}); 

app.get('/page/intraday_buying',async(req,res)=>{
     result = await stockData.findOne({id:2});
    res.send(result)
});

app.get('/page/open_high',async(req,res)=>{
     result = await stockData.findOne({id:3});
    res.send(result);
});

app.get('/page/open_high_params',async(req,res)=>{
     result = await stockData.findOne({id:3});
    result=result.criteria[0].variable.$1.values; 
    res.send(result);
});

app.get('/page/cci_reversal',async(req,res)=>{
     result = await stockData.findOne({id:4});
    res.send(result)
});

app.get('/page/cci_period_params',async(req,res)=>{
    result = await stockData.findOne({id:4});
    result = result.criteria[0].variable.$1;
    res.send(result)
});

app.get('/page/cci_array_params',async(req,res)=>{
    result = await stockData.findOne({id:4});
    res.send(result.criteria[0].variable.$2.values)
});

app.get('/page/rsi_overbought',async(req,res)=>{
     result = await stockData.findOne({id:5});
    res.send(result)
});

app.get('/page/rsi_period_params',async(req,res)=>{
    result = await stockData.findOne({id:5});
   res.send(result.criteria[2].variable.$4)
});

app.get('/page/rsi_params_one',async(req,res)=>{
    result = await stockData.findOne({id:5});
   res.send(result.criteria[0].variable.$1.values)
});

app.get('/page/rsi_params_two',async(req,res)=>{
    result = await stockData.findOne({id:5});
   res.send(result.criteria[1].variable.$2.values)
});

app.get('/page/rsi_params_three',async(req,res)=>{
    result = await stockData.findOne({id:5});
   res.send(result.criteria[1].variable.$3.values)
});

app.get('/page/data',async(req,res)=>{
     result = await stockData.find();
    res.send(result);
});
 */


app.listen(port,()=>{
    console.log("Connected to port 8000");
});

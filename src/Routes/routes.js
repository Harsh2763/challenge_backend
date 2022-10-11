const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const stockData = require('../db/model/stockSchema');
require('../db/conn');
let result;



router.get('/',async(req,res)=>{
    result = await stockData.find();
   res.send(result);
});



module.exports = router;
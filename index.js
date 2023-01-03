const express =require('express');
const db =require("./db")
const product = require("./Controllers/ProductControllers")
const app = express();
var router = require("express").Router();


app.use(express.json());

app.use("/" , router);
router.post('/createUser',(request, response)=>{
    console.log("req", request.body);
    product.createProduct(request.body)
    response.send("oky")
})


app.get('/',(req , res)=>{
    res.send("WELLCOM TO EXPRESS AND NODE JS")
})



app.listen(8080,()=>{
    console.log('listening to port 8080')
})



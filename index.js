const express =require('express');
const db =require("./db")
const user = require("./Controllers/UserControllers")
const sale = require("./Controllers/SaleControllers")
const purchase = require("./Controllers/purchaseControllers")
const product = require("./Controllers/ProductControllers")
const category = require("./Controllers/CategoryControllers")
const brand = require("./Controllers/BrandControllers")
const app = express();
var router = require("express").Router();


app.use(express.json());

app.use("/" , router);
router.post('/createUser',(request, response)=>{
    console.log("req", request.body);
    user.createUser(request.body)
    response.send("oky")
})
router.post('/createPurchase',(request, response)=>{
    console.log("req", request.body);
    purchase.createPurchase(request.body)
    response.send("oky")
})
app.use("/" , router);
router.post('/createProduct',(request, response)=>{
    console.log("req", request.body);
    product.createProduct(request.body)
    response.send("oky")
})
router.post('/createSale',(request, response)=>{
    console.log("req", request.body);
    sale.createSale(request.body)
    response.send("oky")
})
router.post('/createCategory',(request, response)=>{
    console.log("req", request.body);
    category.createCategory(request.body)
    response.send("Data enter sucessfully")
})
router.post('/createBrand',(request, response)=>{
    console.log("req", request.body);
    brand.createBrand(request.body)
    response.send("Data enter sucessfully")
})


app.get('/',(req , res)=>{
    res.send("WELLCOM TO EXPRESS AND NODE JS")
})



app.listen(8080,()=>{
    console.log('listening to port 8080')
})



const Product = require("../Models/product.model")

class PRODUCT {
    createProduct = async (req) =>{
        let product =req 
        console.log(product)
        try{
            const res=await new Product(product).save();
            return res;
        }
        catch(error){
            throw new Error (error);
        }
    };
}

module.exports = new PRODUCT();
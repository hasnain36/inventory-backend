const Brand = require("../Models/brand.model")

class BRAND {
    createBrand = async (req) =>{
        let brand =req 
        console.log(brand)
        try{
            const res=await new Brand(brand).save();
            return res;
        }
        catch(error){
            throw new Error (error);
        }
    };
}

module.exports = new BRAND();
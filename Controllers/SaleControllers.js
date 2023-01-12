const Sale = require("../Models/Sale.model")

class SALE {
    createSale = async (req) =>{
        let sale =req 
        console.log(sale)
        try{
            const res=await new Sale(sale).save();
            return res;
        }
        catch(error){
            throw new Error (error);
        }
    };
}

module.exports = new Sale();
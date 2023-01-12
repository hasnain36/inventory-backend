const Category = require("../Models/category.model")

class CATEGORY {
    createCategory = async (req) =>{
        let category =req 
        console.log(category)
        try{
            const res=await new Category(category).save();
            return res;
        }
        catch(error){
            throw new Error (error);
        }
    };
}

module.exports = new CATEGORY();
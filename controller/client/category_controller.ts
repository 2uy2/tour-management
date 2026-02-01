import { Request,Response } from "express";
import Category from "../../models/category_model";



//get /tours
export const index= async(req:Request,res:Response)=>{
     // select * from categories 
    // WHERE deleted = false AND status = "active"
    const categories = await Category.findAll({
        raw:false,
        where:{
            deleted:false,
            status:"active"
        }
    })
    
   res.render("client/pages/categories/index",{
    pageTitle:"danh mục tour",
    categories:categories
   })
}
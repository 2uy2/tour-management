import { Request,Response } from "express";




//get /cart
export const index= async(req:Request,res:Response)=>{
    res.render("client/pages/cart/index",{
        pageTitle:"giỏ hàng"
    })
}
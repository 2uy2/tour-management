import { Request,Response } from "express";
import Tour from "../../models/tour_model";


//get /tours
export const index= async(req:Request,res:Response)=>{
    // select * from tours 
    // WHERE deleted = false AND status = "active"
    const tours = await Tour.findAll({
        raw:false,
        where:{
            deleted:false,
            status:"active"
        }
    })
    
    res.render("client/pages/tours/index",{
        tours:tours
    });
}
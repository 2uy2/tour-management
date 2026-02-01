import { Request,Response } from "express";
import Tour from "../../models/tour_model";


//get /tours
export const index= async(req:Request,res:Response)=>{
    const tours = await Tour.findAll({
        raw:false
    })
    
    res.render("client/pages/tours/index",{
        tours:tours
    });
}
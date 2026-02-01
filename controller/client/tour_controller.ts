import { Request,Response } from "express";
import sequelize from "../../config.ts/database";
import { json, QueryTypes } from "sequelize";


//get /tours/slugCategory
export const index= async(req:Request,res:Response)=>{
    
    const slugCategory = req.params.slugCategory;
    const tours = await sequelize.query(`
        SELECT tours.*, ROUND(price *(1 - discount/100),0) AS price_special 
        FROM tours
        JOIN tours_categories ON tours.id = tours_categories.tour_id
        JOIN categories ON tours_categories.category_id =categories.id
        WHERE
            categories.slug = '${slugCategory}'
            AND categories.deleted = false
            AND categories.status = 'active'
            AND tours.deleted =false
            AND tours.status ='active';
        `,{
            type:QueryTypes.SELECT //định nghĩa kiểu  truy vấn
        })
        
    tours.forEach(item=>{
        if(item["images"]){
            const images = JSON.parse(item["images"]);
            item["image"]= images[0];
        }
        item["price_special"]=parseFloat(item["price_special"]); // chuyển từ dạng string sang dạng số
    })
    
    res.render("client/pages/tours/index",{
        tours:tours,
        pageTitle:"Danh sách tour"
    });
}
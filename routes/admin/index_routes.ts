import { Express } from "express";
import { systemConfig } from "../../config.ts/config";
import { categoryRoutes } from "./category_routes";




const adminRoutes = (app:Express):void =>{
    app.use(`/${systemConfig.prefixAdmin}/categories`, categoryRoutes);
    
}
export default adminRoutes; 
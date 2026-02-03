import { Express } from "express";
import { systemConfig } from "../../config.ts/config";
import { categoryRoutes } from "./category_routes";
import { tourRoutes } from "./tour_routes";




const adminRoutes = (app:Express):void =>{
    app.use(`/${systemConfig.prefixAdmin}/categories`, categoryRoutes);
    app.use(`/${systemConfig.prefixAdmin}/tours`,tourRoutes)
}
export default adminRoutes; 
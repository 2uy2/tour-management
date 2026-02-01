import { Express } from "express";
import { tourRoutes } from "./tour_route";
import { categoryRoutes } from "./category_routes";



const clientRoutes = (app:Express):void =>{
    app.use('/tours',tourRoutes);
    app.use('/categories',categoryRoutes);
    
}
export default clientRoutes; 
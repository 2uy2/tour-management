import { Express } from "express";
import { tourRoutes } from "./tour_route";
import { categoryRoutes } from "./category_routes";
import { cartRoutes } from "./cart_routes";



const clientRoutes = (app:Express):void =>{
    app.use('/tours',tourRoutes);
    app.use('/categories',categoryRoutes);
    app.use('/cart',cartRoutes);
    
}
export default clientRoutes; 
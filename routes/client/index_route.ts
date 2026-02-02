import { Express } from "express";
import { tourRoutes } from "./tour_route";
import { categoryRoutes } from "./category_routes";
import { cartRoutes } from "./cart_routes";
import { orderRoute } from "./order_routes";



const clientRoutes = (app:Express):void =>{
    app.use('/tours',tourRoutes);
    app.use('/categories',categoryRoutes);
    app.use('/cart',cartRoutes);
    app.use('/order',orderRoute)
    
}
export default clientRoutes; 
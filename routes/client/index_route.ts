import { Express } from "express";
import { tourRoutes } from "./tour_route";



const clientRoutes = (app:Express):void =>{
    app.use('/tours',tourRoutes);
    
}
export default clientRoutes; 
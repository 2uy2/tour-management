import express , {Express,Request,Response} from "express";
import dotenv from "dotenv"
import sequelize from "./config.ts/database";
import Tour from "./models/tour_model";

dotenv.config();
sequelize;

const app:Express = express();
const port: number | string = process.env.PORT;

//setting cho pug
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get("/tours",async(req:Request,res:Response)=>{
    const tours = await Tour.findAll({
        raw:true
    });
    res.render("client/pages/tours/index",{
        tours:tours
    });
})

app.listen(port ,()=>{
    console.log(`app listening on port ${port}`);
})
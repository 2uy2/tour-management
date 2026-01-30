import express , {Express,Request,Response} from "express";
import dotenv from "dotenv"

dotenv.config();

const app:Express = express();
const port: number | string = process.env.PORT;



//setting cho pug
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');


app.get("/tours",(req:Request,res:Response)=>{
    res.render("client/pages/tours/index");
})

app.listen(port ,()=>{
    console.log(`app listening on port ${port}`);
})
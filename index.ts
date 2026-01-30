import express , {Express,Request,Response} from "express";
import dotenv from "dotenv"

const app:Express = express();
const port: number | string = process.env.PORT;

dotenv.config();

app.get("/",(req:Request,res:Response)=>{
    res.send("trang chủ");
})

app.listen(port ,()=>{
    console.log(`app listening on port `);
})
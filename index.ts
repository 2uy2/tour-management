import express , {Express,Request,Response} from "express";
import dotenv from "dotenv"

dotenv.config();

const app:Express = express();
const port: number | string = process.env.PORT;



app.get("/tours",(req:Request,res:Response)=>{
    res.send("danh sách tour");
})

app.listen(port ,()=>{
    console.log(`app listening on port ${port}`);
})
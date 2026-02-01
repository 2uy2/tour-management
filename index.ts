import express , {Express,Request,Response} from "express";
import dotenv from "dotenv"
import clientRoutes from "./routes/client/index_route";

dotenv.config();

const app:Express = express();
const port: number | string = process.env.PORT;

//setting cho pug
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

//client routes
clientRoutes(app);

app.listen(port ,()=>{
    console.log(`app listening on port ${port}`);
})
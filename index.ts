import express , {Express} from "express";
import dotenv from "dotenv"
import moment from "moment";
import clientRoutes from "./routes/client/index_route";

dotenv.config();

const app:Express = express();
const port: number | string = process.env.PORT;

//tạo folder tĩnh
app.use(express.static("public"));

//setting cho pug
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

//app local variable
app.locals.moment=moment

//client routes
clientRoutes(app);

app.listen(port ,()=>{
    console.log(`app listening on port ${port}`);
})
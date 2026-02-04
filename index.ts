import express , {Express} from "express";
import dotenv from "dotenv"
import moment from "moment";
import bodyParser from "body-parser";
import clientRoutes from "./routes/client/index_route";
import adminRoutes from "./routes/admin/index_routes";
import { systemConfig } from "./config.ts/config";
import path from "path";


dotenv.config();

const app:Express = express();
const port: number | string = process.env.PORT;

app.use(express.static(`${__dirname}/public`));

// parse application/json
// tự động JSON.parse() gán vào req.body
app.use(bodyParser.json()); 
app.use(express.json()); // cho JSON
app.use(express.urlencoded({ extended: true })); // cho form submit

//tạo folder tĩnh
app.use(express.static("public"));

//setting cho pug
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

//app local variable
app.locals.moment=moment

//client routes
clientRoutes(app);
//admin routes

//app locals variables, áp biến đó cho toàn cục,
app.locals.prefixAdmin = systemConfig.prefixAdmin;
adminRoutes(app);

app.listen(port ,()=>{
    console.log(`app listening on port ${port}`);
})
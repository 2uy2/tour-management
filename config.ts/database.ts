import {Sequelize} from "sequelize"
import dotenv from "dotenv"

dotenv.config();

const sequelize = new Sequelize(
 process.env.DATABASE_NAME, // tên database
 process.env.DATABASE_USERNAME,//user name đăng nhập
 process.env.DATABASE_PASSWORD, // password
  {
    host: process.env.DATABASE_HOST, // link hosting
    dialect: 'mysql' //tên ứng dụng
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection success.');
}).catch((error) => {
   console.error('connect error ', error);
});

export default sequelize;


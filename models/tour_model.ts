import { DataTypes } from "sequelize"; // DataTypes import từ thư viện sequelize 
import sequelize from "../config.ts/database";

//tham số thứ nhất là tên model muôn đặt,tham số thứ hai là định nghĩa danh sách các biến và kiểu dữ liệu biến đó,tham số thứ 3 là tên bảng
const Tour = sequelize.define("Tour",{
    id:{
        type:DataTypes.INTEGER,//DataTypes import từ thư viện sequelize ,kiểu dữ liệu là INTEGER
        autoIncrement:true, //tự động tăng
        allowNull:false, // khôgn được phép để trống
        primaryKey:true , //khoá chính,
    },
    title:{
        type:DataTypes.STRING(255),
        allowNull:false,

    },
    code:{
        type:DataTypes.STRING(20),
    },
    images:{
        type:DataTypes.TEXT('long') //nhiều ảnh nên sẽ là longtext (mysql), qua đây sẽ là text long
    },
    price:{
        type:DataTypes.INTEGER
    },
    discount:{
        type:DataTypes.INTEGER,
    },
    information:{
        type:DataTypes.TEXT('long'),
    },
    schedule:{
        type:DataTypes.TEXT('long'),
    },
    timeStart:{
        type:DataTypes.DATE,
    },
    stock:{
        type:DataTypes.INTEGER,
    },
    status:{
        type:DataTypes.STRING(20),
    },
    position:{
        type:DataTypes.INTEGER,
    },
    slug:{
        type:DataTypes.STRING(255),
    },
    deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    deletedAt:{
        type:DataTypes.DATE,
    },

},{
    tableName:"tours",
    timestamps:true // tự động quản lý createAT và updateAt
})

export default Tour;
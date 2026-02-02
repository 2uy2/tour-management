import { Request, Response } from "express";
import Order from "../../models/order_model";
import { generateOrderCode } from "../../helpers/generate_helper";

//post /order
export const index = async (req: Request, res: Response) => {

    const info = req.body.info;
    const cart = req.body.cart;


    // Lưu data vào bảng orders
    

    const order = await Order.create({
        code: "",
        fullName: info.fullName,
        phone: info.phone,
        note: info.note,
        status: "initial",
    });
    const orderId = order.dataValues.id;

    const code = generateOrderCode(orderId);

    await Order.update({
        code: code
    }, {
        where: {
            id: orderId
        }
    });

    res.json({
        code: "success",
        message: "Đặt hàng thành công!",
        orderCode: code
    });
};
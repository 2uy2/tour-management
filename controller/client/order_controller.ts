import { Request, Response } from "express";

// [POST] /order
export const index = async (req: Request, res: Response) => {
  

  res.json({
    code: 200,
    message: "Đặt hàng thành công!"
  });
};
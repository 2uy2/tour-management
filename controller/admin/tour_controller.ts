import { Request, Response } from "express";
import Tour from "../../models/tour_model";


export const index = async (req: Request, res: Response) => {
    // SELECT * FROM tours WHERE deleted = false;
    const tours = await Tour.findAll({
        where: {
            deleted: false,
        },
        raw: true
    });

    tours.forEach(item => {
        if (item["images"]) {
            const images = JSON.parse(item["images"]); //đổi thành dạng array
            item["image"] = images[0]; //lấy ảnh đầu tiên làm thumbnail
        }
        item["price_special"] = (item["price"] * (1 - item["discount"] / 100));
    });

    console.log(tours);

    res.render("admin/pages/tours/index", {
        pageTitle: "Danh sách tour",
        tours: tours
    });
};
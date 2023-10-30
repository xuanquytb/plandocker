const express = require("express");

const Router = express.Router();

const { find_all_favourite, Favourite, InsertFavourite, find_check_favourite, un_favourite } = require("../Models/favourite");

const verifyToken = require("../Middliware/Auth/verifyToken");

Router.get("/all", verifyToken, async (req, res) => {
    try {
        const favourite = await find_all_favourite(req.userId);
        if (!favourite) {
            return res.status(202).json({ success: false, message: "Server Error" });
        } else {
            return res.status(200).json({ success: true, favourite });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});
Router.post("/check-favourite", verifyToken, async (req, res) => {
    const { idP } = req.body;
    try {
        const favourite = await find_check_favourite(req.userId, idP);

        if (favourite.length === 1) {
            return res.status(202).json({ success: false, isFavourite: true, idFavo: favourite && favourite[0].idFavo });
        } else {
            return res.status(200).json({ success: true, isFavourite: false, idFavo: favourite && favourite[0].idFavo });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});
Router.post("/un-favourite", verifyToken, async (req, res) => {
    const { idP } = req.body;
    try {
        const favourite = await un_favourite(req.userId, idP);
        if (favourite.affectedRows === 0) {
            return res.status(202).json({ success: false });
        } else {
            return res.status(200).json({ success: true });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});

Router.post("/addFavourite", verifyToken, async (req, res) => {
    const { idProduct } = req.body;

    if (!idProduct) {
        res.status(400).json({
            success: true,
            message: "Thiếu tham số",
        });
    } else {
        try {
            const newFavourite = new Favourite({
                idUser: req.userId,
                idProduct,
            });
            const result = await InsertFavourite(newFavourite);

            if (result) {
                const favourite = await find_all_favourite(req.userId);
                res.status(200).json({
                    success: true,
                    message: "Đã thêm vào danh sách yêu thích",
                    favourite,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Thêm vào danh sách yêu thích thất bại",
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Xảy ra lỗi : " + error,
            });
        }
    }
});

module.exports = Router;

const express = require("express");

const Router = express.Router();

const { find_all_payment } = require("../Models/payment");



Router.get("/allPayment", async (req, res) => {
    try {
        const payment = await find_all_payment();
        if (!payment) {
            return res.status(202).json({ success: true, message: "Không có phương thức thanh toán" });
        } else {
            return res.status(200).json({ success: true, payment });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});

module.exports = Router;

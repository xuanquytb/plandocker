const express = require("express");

const Router = express.Router();

const { find_all_banner } = require("../Models/banner");

Router.get("/all", async (req, res) => {
  try {
    const banner = await find_all_banner();
    if (!banner) {
      return res.status(202).json({ success: false, message: "Server Error" });
    } else {
      return res.status(200).json({ success: true, banner });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

module.exports = Router;

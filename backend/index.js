require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const RouterImages = require("./Middliware/uploadImage");
const RouterAuth = require("./Router/Auth");
const RouterCategory = require("./Router/Category");
const RouterProduct = require("./Router/Product");
const RouterCard = require("./Router/Card");
const RouterOrder = require("./Router/OrderDetail.route");
const RouterFavourite = require("./Router/Favourite.route");
const RouterBanner = require("./Router/Banner.route");
const RouterPayment = require("./Router/payment");

const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use("/api/auth", RouterAuth);
app.use("/api/category", RouterCategory);
app.use("/api/product", RouterProduct);
app.use("/api/images", RouterImages);
app.use("/api/card", RouterCard);
app.use("/api/Order", RouterOrder);
app.use("/api/payment", RouterPayment);
app.use("/api/favourite", RouterFavourite);
app.use("/api/banner", RouterBanner);

app.get("/api/procucts/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `/public/products/${req.params.id}`));
});
app.get("/api/user/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `/public/user/${req.params.id}`));
});
app.get("/api/banner/:id", (req, res) => {
  res.sendFile(path.join(__dirname, `/public/banner/${req.params.id}`));
});

app.listen(process.env.PORT, () =>
  console.log("Máy chủ đã chạy tại công 8080")
);

const express = require("express");

const Router = express.Router();

const {
  find_by_name_row_product,
  find_all_Product,
  delete_By_Id,
  InsertProduct,
  UpdateProduct,
  find_view_by_Id,
  find_all_Product_with_name,
  find_all_Product_sold,

  Product,
  find_all_Pro_By_IdCate,
  UpdateProductLike,
} = require("../Models/product");

const verifyToken = require("../Middliware/Auth/verifyToken");

Router.delete("/:id", verifyToken, async (req, res) => {
  try {
    if (req.role.nameRole === "Administrators") {
      const result = await delete_By_Id(req.params.id);
      if (result !== 0) {
        return res
          .status(202)
          .json({ success: false, message: "Xóa thất bại" });
      } else {
        return res
          .status(200)
          .json({ success: true, message: "Xóa thành công" });
      }
    } else {
      return res.status(405).json({
        success: false,
        message: "Tài khoản không được cấp phép",
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

Router.get("/find/:id", async (req, res) => {
  try {
    const product = await find_view_by_Id(req.params.id);
    if (!product) {
      return res
        .status(202)
        .json({ success: false, message: "Product not found" });
    } else {
      return res.status(200).json({ success: true, product });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

Router.get("/findProByCate/:id", async (req, res) => {
  try {
    const product = await find_all_Pro_By_IdCate(req.params.id);
    if (!product) {
      return res
        .status(202)
        .json({ success: false, message: "Product not found" });
    } else {
      return res.status(200).json({ success: true, product });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

Router.get("/Search/:value", async (req, res) => {
  try {
    const products = await find_all_Product_with_name(req.params.value);
    if (!products) {
      return res
        .status(202)
        .json({ success: false, message: "Products not found" });
    } else {
      return res.status(200).json({ success: true, products });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

Router.get("/all", async (req, res) => {
  try {
    const products = await find_all_Product();

    if (!products) {
      return res.status(202).json({ success: false, message: "Server Error" });
    } else {
      return res.status(200).json({ success: true, products });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});
Router.get("/countlike", async (req, res) => {
  try {
    const products = await find_product_like();

    if (!products) {
      return res.status(202).json({ success: false, message: "Server Error" });
    } else {
      return res.status(200).json({ success: true, products });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});
Router.get("/allProductSold", async (req, res) => {
  try {
    const products = await find_all_Product_sold();
    if (!products) {
      return res
        .status(202)
        .json({ success: false, message: "Product not found" });
    } else {
      return res.status(200).json({ success: true, products });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

Router.post("/addProduct", verifyToken, async (req, res) => {
  if (req.role.id === 1 || req.role.id === 3) {
    const {
      price,
      priceIn,
      nameProduct,
      description,
      warranty,
      quantity,
      promotional,
      status,
      image,
      gallery,
      idInvoiceIn,
      idCategory,
      idUnit,
      idManufacturer,
      idOrigin,
    } = req.body;

    if (
      !price ||
      !priceIn ||
      !nameProduct ||
      !description ||
      !warranty ||
      !quantity ||
      !promotional ||
      !status ||
      !image ||
      !idInvoiceIn ||
      !idCategory ||
      !idUnit ||
      !idManufacturer ||
      !idOrigin ||
      !gallery
    ) {
      res.status(400).json({
        success: true,
        message: "Nhập thiếu thông tin",
      });
    } else {
      const nameProductRe = await find_by_name_row_product(
        "nameProduct",
        nameProduct
      );
      if (nameProductRe.length > 0) {
        res.status(400).json({
          success: false,
          message: "Sản phẩm đã tồn tại",
        });
      } else {
        try {
          const newProductItem = new Product({
            price,
            priceIn,
            nameProduct,
            description,
            warranty,
            quantityIn: quantity,
            quantity,
            promotional,
            status,
            image,
            gallery: gallery.toString(),
            idInvoiceIn: 1,
            idCategory,
            idUnit,
            idManufacturer,
            idOrigin,
          });
          const newProductRe = await InsertProduct(newProductItem);
          const products = await find_all_Product();
          if (newProductRe) {
            res.status(200).json({
              success: true,
              message: "Thêm thành công",
              nameProduct: nameProduct,
              products,
            });
          } else {
            res.status(400).json({
              success: false,
              message: "Thêm thất bại",
            });
          }
        } catch (error) {
          res.status(400).json({
            success: false,
            message: "Xảy ra lỗi : " + error,
          });
        }
      }
    }
  } else {
    return res.status(405).json({
      success: false,
      message: "Tài khoản không được cấp phép",
    });
  }
});

Router.put("/updateProduct/:id", verifyToken, async (req, res) => {
  if (req.role.id === 1 || req.role.id === 3) {
    const {
      nameProduct,
      description,
      warranty,
      quantity,
      promotional,
      price,
      status,
      nameCategory,
      nameBrand,
      nameOrigin,
    } = req.body;
    if (
      !nameProduct ||
      !description ||
      !warranty ||
      !quantity ||
      !promotional ||
      !price ||
      !status ||
      !nameCategory ||
      !nameBrand ||
      !nameOrigin
    ) {
      res.status(400).json({
        success: true,
        message: "Nhập thiếu thông tin",
      });
    } else {
      try {
        const updateProductItem = {
          id: req.params.id,
          nameProduct,
          description,
          warranty: warranty.split(" ")[0],
          quantity,
          promotional,
          price,
          status,
          nameCategory,
          nameBrand,
          nameOrigin,
        };
        const updateProductRe = await UpdateProduct(updateProductItem);
        const products = await find_all_Product();
        if (updateProductRe.affectedRows > 0) {
          res.status(200).json({
            success: true,
            message: "Cập nhật thành công",
            products: products,
          });
        } else {
          res.status(400).json({
            success: false,
            message: "Cập nhật thất bại",
          });
        }
      } catch (error) {
        res.status(400).json({
          success: false,
          message: "Xảy ra lỗi : " + error,
        });
      }
    }
  }
});

Router.put("/like/:id", verifyToken, async (req, res) => {
  const { count } = req.body;

  try {
    const updateProductRe = await UpdateProductLike(req.params.id, count);
    const products = await find_all_Product();
    if (updateProductRe.affectedRows > 0) {
      res.status(200).json({
        success: true,
        message: "Cập nhật thành công",
        products: products,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Cập nhật thất bại",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Xảy ra lỗi : " + error,
    });
  }
});

module.exports = Router;

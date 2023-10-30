const express = require("express");
const path = require("path");

const multer = require("multer");
const { UpdateUserAvata } = require("../../Models/user");

const Router = express.Router();

// Cấu hình đường dẫn lưu hình ảnh và tên file
const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/products");
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split("/")[1];
        callback(null, `image-${Date.now()}.${ext}`);
    },
});
const multerConfigUser = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/user");
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split("/")[1];
        callback(null, `image-${Date.now()}.${ext}`);
    },
});

// Kiểm tra có phải hình ảnh không
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true);
    } else {
        callback(new Error("Chỉ hình ảnh mới được chấp nhận"));
    }
};

const upload = multer({
    storage: multerConfig,
    fileFilter: isImage,
});
const uploadImageUser = multer({
    storage: multerConfigUser,
    fileFilter: isImage,
});

// lấy file dạng fields cho phép upload 1 file hoặc là nhiều file theo name
const cpUpload = upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "gallery", maxCount: 8 },
]);

// Post Router để upload hình ảnh sản phẩm
Router.post("/upload/products", cpUpload, async (req, res) => {
    res.status(200).json({ success: true, msg: "Upload thành công", fileName: req.files.gallery[0].filename });
});

// Post Router để upload hình ảnh khách hàng
const cpUploadUser = uploadImageUser.fields([{ name: "avatar", maxCount: 1 }]);
Router.post("/upload/user/:id", cpUploadUser, async (req, res) => {
    console.log(req.files);
    const result = await UpdateUserAvata(req.files.avatar[0].filename, req.params.id);
    if (result) {
        res.status(200).json({
            success: true,
            message: "Cập nhật thành công",
        });
    } else {
        res.status(200).json({
            success: false,
            message: "Cập nhật thất bại",
        });
    }
});

module.exports = Router;

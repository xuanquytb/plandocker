const express = require("express");

const Router = express.Router();

const {
    find_all_Category,
    find_by_Id,
    find_by_name_row_category,
    delete_By_Id,
    InsertCategory,
    UpdateCategory,
    Category,
} = require("../Models/category");
// const { find_Emp_by_name_row } = require("../models/Employee");

const verifyToken = require("../Middliware/Auth/verifyToken");

// Router.get("/", verifyToken, async (req, res) => {
//     try {
//         const user = await find_by_name_row("id", req.userId);
//         if (!user) {
//             return res.status(202).json({ success: false, message: "User not found" });
//         } else {
//             return res.status(200).json({ success: true, user, role: req.role });
//         }
//     } catch (error) {
//         return res.status(500).json({ success: false, message: "Server Error" });
//     }
// });

Router.delete("/:id", verifyToken, async (req, res) => {
    try {
        if (req.role.nameRole === "Administrators") {
            const result = await delete_By_Id(req.params.id);
            if (result !== 0) {
                return res.status(202).json({ success: false, message: "Xóa thất bại" });
            } else {
                return res.status(200).json({ success: true, message: "Xóa thành công" });
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

// Router.get("/allCategory", async (req, res) => {
//     const result = await find_Emp_by_name_row("id", req.userId);
//     if (result) {
//         try {
//             const categorys = await find_all_Category();
//             if (!categorys) {
//                 return res.status(202).json({ success: false, message: "User not found" });
//             } else {
//                 return res.status(200).json({ success: true, categorys });
//             }
//         } catch (error) {
//             return res.status(500).json({ success: false, message: "Server Error" });
//         }
//     } else {
//         return res.status(405).json({
//             success: false,
//             message: "Tài khoản không tồn tại",
//         });
//     }
// });

Router.get("/all", async (req, res) => {
    try {
        const categorys = await find_all_Category();
        if (!categorys) {
            return res.status(202).json({ success: false, message: "Lỗi cơ sở dữ liệu" });
        } else {
            return res.status(200).json({ success: true, categorys });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});

Router.post("/addCategory", verifyToken, async (req, res) => {
    if (req.role.id === 1 || req.role.id === 3) {
        const { nameCategory, description } = req.body;

        if (!nameCategory || !description) {
            res.status(400).json({
                success: true,
                message: "Nhập thiếu thông tin",
            });
        } else {
            const nameCategoryRe = await find_by_name_row_category("nameCategory", nameCategory);
            if (nameCategoryRe.length > 0) {
                res.status(400).json({
                    success: false,
                    message: "Ngành hàng đã tồn tại",
                });
            } else {
                try {
                    const newCategoryItem = new Category({
                        nameCategory,
                        image: "default.jpg",
                        description,
                    });
                    const newCategoryRe = await InsertCategory(newCategoryItem);
                    const categorys = await find_all_Category();
                    if (newCategoryRe) {
                        res.status(200).json({
                            success: true,
                            message: "Thêm thành công",
                            categorys,
                            nameCategory: nameCategory,
                        });
                    } else {
                        res.status(400).json({
                            success: false,
                            message: "Thêm thất bại",
                            categorys,
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

// Router.put("/updateCategory/:id", verifyToken, async (req, res) => {
//     if (req.role.id === 1 || req.role.id === 3) {
//         const { nameCategory, description } = req.body;
//         if (!nameCategory || !description) {
//             res.status(400).json({
//                 success: true,
//                 message: "Nhập thiếu thông tin",
//             });
//         } else {
//             const nameCategoryRe = await find_by_name_row_category("nameCategory", nameCategory);
//             try {
//                 const newCategoryItem = new Category({
//                     nameCategory,
//                     description,
//                 });
//                 const newCategoryRe = await UpdateCategory(newCategoryItem, req.params.id);
//                 const Categorys = await find_all_Category(newCategoryItem, req.params.id);
//                 if (newCategoryRe) {
//                     res.status(200).json({
//                         success: true,
//                         message: "Cập nhật thành công",
//                         categorys: Categorys,
//                     });
//                 } else {
//                     res.status(400).json({
//                         success: false,
//                         message: "Cập nhật thất bại",
//                     });
//                 }
//             } catch (error) {
//                 res.status(400).json({
//                     success: false,
//                     message: "Xảy ra lỗi : " + error,
//                 });
//             }
//         }
//     } else {
//         return res.status(405).json({
//             success: false,
//             message: "Tài khoản không được cấp phép",
//         });
//     }
// });

module.exports = Router;

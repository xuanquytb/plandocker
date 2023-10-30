const express = require("express");

const Router = express.Router();

const {
    find_all_OrderDetail,
    InsertOrderDetail,
    UpdateOrderDetail_State,
    find_all_OrderDetail_by_idCustomer,
    find_max_id,
    find_sum_monney,
    find_sum_monney_by_day,
    find_sum_countUser,
    find_by_idCard_By_idPayorder,
    find_all_count_Order_Cus,
    orderDetail,
    find_cardDetail_showOrder,
} = require("../Models/orderDetail");
const { UpdateIdOrder, Updatedetailstate, find_Card_and_detailCard } = require("../Models/card");
const { UpdateQuantityProduct, UpdateSoldProduct } = require("../Models/product");
const { find_Emp_by_name_row } = require("../Models/Employee");

const verifyToken = require("../Middliware/Auth/verifyToken");

Router.get("/", verifyToken, async (req, res) => {
    try {
        const user = await find_by_name_row("id", req.userId);
        if (!user) {
            return res.status(202).json({ success: false, message: "User not found" });
        } else {
            return res.status(200).json({ success: true, user, role: req.role });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});
Router.get("/findIdCard/:idPayment", verifyToken, async (req, res) => {
    console.log(req.params.idPayment);
    try {
        const idCard = await find_by_idCard_By_idPayorder(req.params.idPayment);
        if (!idCard) {
            return res.status(202).json({ success: false, message: "Không có dữ liệu" });
        } else {
            return res.status(200).json({ success: true, value: idCard });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});
Router.delete("/:id", verifyToken, async (req, res) => {
    const result = await find_Emp_by_name_row("id", req.userId);
    if (result) {
        try {
            if (req.role.nameRole === "Administrators") {
                const result = await delete_By_Id(req.params.id);
                if (result != 1) {
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
    } else {
        return res.status(405).json({
            success: false,
            message: "Tài khoản không tồn tại",
        });
    }
});

Router.get("/allOrderAdmin", verifyToken, async (req, res) => {
    try {
        if (req.role.nameRole === "Administrators") {
            const orders = await find_all_OrderDetail();
            if (!orders) {
                return res.status(202).json({ success: false, message: "User not found" });
            } else {
                return res.status(200).json({ success: true, orders });
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

Router.get("/allSummoney", verifyToken, async (req, res) => {
    try {
        if (req.role.nameRole === "Administrators") {
            const monney = await find_sum_monney();

            if (!monney) {
                return res.status(202).json({
                    success: false,
                    message: "Không tìm thấy dữ liệu yêu cầu",
                });
            } else {
                return res.status(200).json({ success: true, monney });
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

Router.get("/allSummoney/day", verifyToken, async (req, res) => {
    let today = new Date();
    let valueToday = today.toLocaleDateString("en-GB").split("/").reverse().join("/");

    try {
        if (req.role.nameRole === "Administrators") {
            const monney = await find_sum_monney_by_day(valueToday);

            if (!monney) {
                return res.status(202).json({
                    success: false,
                    message: "Không tìm thấy dữ liệu yêu cầu",
                });
            } else {
                return res.status(200).json({ success: true, monney });
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

Router.get("/countOrderCus", verifyToken, async (req, res) => {
    try {
        if (req.role.nameRole === "Administrators") {
            const countOrderUser = await find_all_count_Order_Cus();

            if (!countOrderUser) {
                return res.status(202).json({
                    success: false,
                    message: "Không tìm thấy dữ liệu yêu cầu",
                });
            } else {
                return res.status(200).json({ success: true, countOrderUser });
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

Router.get("/allOrderCustomer", verifyToken, async (req, res) => {
    try {
        const orders = await find_all_OrderDetail_by_idCustomer(req.userId);

        if (!orders) {
            return res.status(202).json({ success: false, message: "User not found" });
        } else {
            return res.status(200).json({ success: true, orders });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});

Router.post("/addOrderDetail", verifyToken, async (req, res) => {
    const { idCard, idCustomer, sumPayment, idPayment, address } = req.body;

    if (!idCustomer || !sumPayment || !idPayment || !address) {
        res.status(400).json({
            success: true,
            message: "Thiếu thông tin",
        });
    } else {
        try {
            const newOrderDetail = {
                idCustomer,
                sumPayment,
                address,
                idPayment,
            };
            const max_id = await find_max_id();
            const ReIdOrder = await UpdateIdOrder(idCard, max_id.max + 1);
            const Redetailstate = await Updatedetailstate(idCard);
            const newOrderDetailRe = await InsertOrderDetail(newOrderDetail);

            if (newOrderDetailRe) {
                const resUpdate = await find_Card_and_detailCard(idCard, max_id.max + 1);
                resUpdate.forEach(async (element) => {
                    const updateProduct = await UpdateQuantityProduct(element.idProduct, element.quantity);
                    const soldProduct = await UpdateSoldProduct(element.idProduct, element.quantity);
                });
                res.status(200).json({
                    success: true,
                    message: "Đặt hàng thành công",
                    newOrderDetail: newOrderDetailRe,
                });
            } else {
                res.status(400).json({
                    success: false,
                    message: "Đặt hàng thất bại",
                });
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Xảy ra lỗi máy chủ: " + error,
            });
        }
    }
});


function getInvoiceNo(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function buildHttpQuery(data) {
    let httpQuery = new URLSearchParams();

    const ordered = Object.keys(data).sort().reduce(
        (obj, key) => {
            obj[key] = data[key];
            return obj;
        },
        {}
    );

    Object.keys(ordered).forEach(function (parameterName) {
        httpQuery.append(parameterName, ordered[parameterName]);
    });
    return httpQuery.toString();
}

function buildSignature(data, secret) {
    let crypto = require('crypto');
    let token = crypto.createHmac("sha256", secret).update(data).digest().toString('base64');
    return token;
}

Router.post("/addOrderPayOnlineDetail", verifyToken, async (req, res) => {
    const { idCard, idCustomer, sumPayment, idPayment, address } = req.body;

    if (!idCustomer || !sumPayment || !idPayment || !address) {
        res.status(400).json({
            success: true,
            message: "Thiếu thông tin",
        });
    } else {
        try {
            let time = Math.round(Date.now() / 1000);
            let invoiceNo = getInvoiceNo(8);
            let amount = sumPayment; // This value is better than 3000 VND. We only use currency is "VND"
            let description9pay = `${idCard}-${idCustomer}-${idPayment}`;
            let returnUrl = 'http://dimatrade.asia';
            let parameters = {
                "merchantKey": process.env.merchant_key,
                "time": time,
                "invoice_no": invoiceNo,
                "amount": amount,
                "description": description9pay,
                "return_url": returnUrl,
                "back_url": returnUrl,
            };
            
            let httpQuery = buildHttpQuery(parameters);
            let message = "POST" + "\n" + process.env.end_point + "/payments/create" + "\n" + time + "\n" + httpQuery;
            let signature = buildSignature(message, process.env.merchant_secrt_key);
            let baseEncode = Buffer.from(JSON.stringify(parameters)).toString('base64');
            let httpBuild = {
                "baseEncode": baseEncode,
                "signature": signature
            };
            let directUrl = process.env.end_point + "/portal?" + buildHttpQuery(httpBuild);
            return res.status(200).json({ success: true, directUrl });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Xảy ra lỗi máy chủ: " + error,
            });
        }
    }
});

Router.put("/updateState/:id", verifyToken, async (req, res) => {
    if (req.role.id === 1 || req.role.id === 3) {
        const { state } = req.body;
        if (!state) {
            res.status(400).json({
                success: true,
                message: "Thiếu thông tin",
            });
        } else {
            try {
                const resultUpdate = await UpdateOrderDetail_State(state, req.params.id);
                const orders = await find_all_OrderDetail();
                if (resultUpdate) {
                    res.status(200).json({
                        success: true,
                        message: "Cập nhật thành công",
                        orders,
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
    } else {
        return res.status(405).json({
            success: false,
            message: "Tài khoản không được cấp phép",
        });
    }
});

Router.put("/updateStateCus/:id", async (req, res) => {

    const { state } = req.body;

    if (!state) {
        res.status(400).json({
            success: true,
            message: "Thiếu thông tin",
        });
    } else {
        try {
            const resultUpdate = await UpdateOrderDetail_State(state, req.params.id);
            const orders = await find_all_OrderDetail();
            if (resultUpdate) {
                res.status(200).json({
                    success: true,
                    message: "Cập nhật thành công",
                    orders,
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

});

Router.post("/allItemOrder", verifyToken, async (req, res) => {
    const { idCard, idPayOrder } = req.body;
    try {
        const orderPayment = await find_cardDetail_showOrder(idCard, idPayOrder);

        if (orderPayment.length <= 0) {
            return res.status(202).json({
                success: true,
                message: "Đơn hàng không có sản phẩm",
                orderPayment,
            });
        } else {
            return res.status(200).json({ success: true, orderPayment });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server Error" });
    }
});

Router.put("/updateStateDetailOrder/:id", verifyToken, async (req, res) => {
    if (req.role.id === 2) {
        const { state } = req.body;
        if (!state) {
            res.status(400).json({
                success: true,
                message: "Thiếu thông tin",
            });
        } else {
            try {
                const orders = await find_all_OrderDetail();
                const resultUpdate = await UpdateOrderDetail_State(state, req.params.id);
                if (resultUpdate) {
                    res.status(200).json({
                        success: true,
                        message: "Cập nhật thành công",
                        orders,
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
    } else {
        return res.status(405).json({
            success: false,
            message: "Tài khoản không được cấp phép",
        });
    }
});

module.exports = Router;

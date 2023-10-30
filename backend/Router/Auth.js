const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Router = express.Router();

const {
  find_by_username,
  find_by_name_row,
  Users,
  InsertUser,
  UpdateUserIdCard,
  find_all_Administrators,
  find_all_Customer,
  find_sum_countUser,
} = require("../Models/user");
const { find_by_id_role, find_by_name_row_role } = require("../Models/role");
const { InsertCard, findCardByUserId } = require("../Models/card");

const verifyToken = require("../Middliware/Auth/verifyToken");

const GenerateToken = (payload) => {
  const token = jwt.sign(payload, process.env.secret_token, {
    expiresIn: "1d",
  });
  return token;
};

Router.get("/verify", verifyToken, async (req, res) => {
  try {
    const user = await find_by_name_row("id", req.userId);

    if (!user) {
      return res
        .status(202)
        .json({ success: false, message: "User not found" });
    } else {
      const Role = await find_by_id_role(user[0].idRole);
      const card = await findCardByUserId(user[0].id);

      const accessToken = GenerateToken({
        userId: user[0].id,
        role: Role,
        idCard: card[0].id,
        roleArr: [Role.id],
        role: Role,
      });
      return res.status(200).json({
        success: true,
        user: user[0],
        token: accessToken,
        role: [Role.id],
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

Router.post("/isAdmin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await find_by_username(username);

    if (!user) {
      return res
        .status(202)
        .json({ success: false, message: "User not found" });
    } else {
      const validPassword = await argon2.verify(user.passwordEn, password);
      if (validPassword) {
        return res
          .status(200)
          .json({ success: true, status: 1 === user.idRole });
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

Router.get("/findAll", verifyToken, async (req, res) => {
  try {
    const user = await find_all_Administrators();

    return res.status(200).json({ success: true, user: user });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

Router.post("/register", async (req, res) => {
  const { username, password, fullname, nameRole, email, phone, address } =
    req.body;

  if (!username || !password || !nameRole || !email) {
    res.status(400).json({
      success: true,
      message: "Nhập thiếu thông tin",
    });
  } else {
    const user = await find_by_name_row("username", username);
    if (user.length > 0) {
      return res.status(202).json({
        success: false,
        message: "Tài khoản đã được sử dụng",
      });
    } else {
      const emailValid = await find_by_name_row("email", email);

      if (emailValid.length > 0) {
        return res.status(202).json({
          success: false,
          message: "Email đã được sử dụng",
        });
      } else {
        const phoneValid = await find_by_name_row("phone", phone);
        if (phoneValid.length > 0) {
          return res.status(202).json({
            success: false,
            message: "Số điện thoại đã được sử dụng",
          });
        } else {
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          const role = await find_by_name_row_role("nameRole", nameRole);

          const newUser = new Users({
            username,
            password: hashPassword,
            fullname,
            email,
            phone,
            address,
            idRole: role.id,
          });
          try {
            const result = await InsertUser(newUser);
            const cardNew = {
              userid: result.id,
            };

            const card = await InsertCard(cardNew);
            const resultUpdate = await UpdateUserIdCard(result.id, card.id);

            if (result) {
              const token = GenerateToken({
                userId: result.id,
                role: role,
                cardId: card.id,
              });
              const userNew = await find_by_name_row("id", result.id);
              res.status(200).json({
                success: true,
                tokenAccess: token,
                message: "Thêm thành công",
                user: userNew,
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
    }
  }
});

Router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(500).json({
      success: false,
      message: "Nhập thiếu thông tin Tài khoản/Mật khẩu",
    });
  } else {
    try {
      const user = await find_by_username(username);
      if (!user) {
        res.status(500).json({
          success: false,
          message: "Tài khoản/Mật khẩu không chính xác",
        });
      } else {
        const Role = await find_by_id_role(user.idRole);

        const validPassword = await bcrypt.compare(password, user.passwordEn);
        const card = await findCardByUserId(user.id);
        if (Role.nameRole === "Customer") {
          if (validPassword) {
            const accessToken = GenerateToken({
              userId: user.id,
              role: Role,
              idCard: card[0].id,
            });
            res.status(200).json({
              success: true,
              message: "Đăng nhập thành công",
              token: accessToken,
              user: user,
              role: [Role.id],
            });
          } else {
            res.status(200).json({
              success: false,
              message: "Tài khoản/Mật khẩu không chính xác",
            });
          }
        } else {
          if (validPassword) {
            const accessToken = GenerateToken({
              userId: user.id,
              role: Role,
              idCard: card[0].id,
            });
            res.status(200).json({
              success: true,
              message: "Đăng nhập thành công",
              token: accessToken,
              user: user,
              idCard: card[0].id,
              role: [Role.id],
            });
          } else {
            res.status(200).json({
              success: false,
              message: "Tài khoản/Mật khẩu không chính xác",
            });
          }
        }
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Xảy ra lỗi : " + error,
      });
    }
  }
});

Router.get("/customer", verifyToken, async (req, res) => {
  try {
    const users = await find_all_Customer();
    if (!users) {
      return res
        .status(202)
        .json({ success: false, message: "User not found" });
    } else {
      return res.status(200).json({ success: true, users });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

Router.get("/countUser", verifyToken, async (req, res) => {
  try {
    if (req.role.nameRole === "Administrators") {
      const countUser = await find_sum_countUser();
      if (!countUser) {
        return res.status(202).json({
          success: false,
          message: "Không tìm thấy dữ liệu yêu cầu",
        });
      } else {
        return res
          .status(200)
          .json({ success: true, countUser: countUser?.countUser });
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

module.exports = Router;

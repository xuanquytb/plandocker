const authPage = (premission) => {
  return (req, res, next) => {
    const { userId } = req.body;
    if (!userId) {
      return res.status(403).json("Vui lòng đăng nhập!!");
    }
    const { user } = {
      user: {
        name: "",
        role: ["ADM", "MOD"],
      },
    };
    if (!user) {
      return res.status(403).json("Tài khoản không hợp lệ!!");
    }
    const { role } = user;
    if (!premission?.incluces(role)) {
      return res
        .status(403)
        .json("Bạn không có quyền truy cập vào tài nguyên này!!");
    }
    next();
  };
};

module.exports = {
  authPage,
};

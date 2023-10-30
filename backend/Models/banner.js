const dbConn = require("../Middliware/Connect/index");
const Banner = function (banner) {
  this.nameBanner = banner.nameBanner;
  this.image = banner.image;
};

const find_all_banner = function (nameRow, value) {
  return new Promise((resolve, reject) => {
    dbConn.query(`SELECT * FROM banner`, (err, element) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(element);
      }
    });
  });
};

module.exports = {
  Banner,
  find_all_banner,
};

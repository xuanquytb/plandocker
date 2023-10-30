const dbConn = require("../Middliware/Connect");

const find_all_payment = () => {
    return new Promise(function (resolve, reject) {
        dbConn.query(`select * from payment`, function (err, elementor) {
            if (err) {
                return reject(err);
            }
            return resolve(elementor);
        });
    });
};

module.exports = { find_all_payment };

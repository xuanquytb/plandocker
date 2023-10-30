const dbConn = require("../Middliware/Connect/index");

const Favourite = function (role) {
    this.idUser = role.idUser;
    this.idProduct = role.idProduct;
};

const find_all_favourite = function (idUser) {
    return new Promise((resolve, reject) => {
        dbConn.query(`SELECT * FROM webecommerce.view_favourite where idUser = ${idUser};`, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};
const find_check_favourite = function (idUser, idProduct) {
    return new Promise((resolve, reject) => {
        dbConn.query(`SELECT * FROM webecommerce.view_favourite where idUser = ${idUser} and id = ${idProduct};`, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};
const un_favourite = function (idUser, idProduct) {
    return new Promise((resolve, reject) => {
        dbConn.query(`DELETE FROM webecommerce.favourite WHERE id = ${idProduct};`, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

const InsertFavourite = function (favouriteNew) {
    return new Promise((resolve, reject) => {
        dbConn.query("Insert Into favourite SET ?", favouriteNew, (err, elements) => {
            if (err) {
                return reject(err);
            } else {
                return resolve({ id: elements.insertId, ...elements });
            }
        });
    });
};

module.exports = {
    find_all_favourite,
    InsertFavourite,
    find_check_favourite,
    un_favourite,
    Favourite,
};

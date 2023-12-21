const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todolist'
})
//

function getProduct() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM products', (err, rows, fields) => {
            if (err) {
                console.log("1111111111 lỗi")
                return
            }
            resolve(rows)
        })
    })
}
//
function addProduct(a) {

    var sql = `INSERT INTO products (name,status) VALUES ('${a}','0')`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("thêm thành công");
    });
}
// //
function deleteProduct(id) {
    var sql = `DELETE FROM products WHERE id = '${id}'`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("xóa thành công");
    });
}
// //
function updateProduct(id,name,status) {
    var sql = `UPDATE products SET name = '${name}' WHERE id = '${id}'`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("sửa thành công");
    });
    if(status == 0){
        var sql = `UPDATE products SET status = '1' WHERE id = '${id}'`;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("sửa status thành công");
        });
        return
    } else {
        var sql = `UPDATE products SET status = '0' WHERE id = '${id}'`;
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("sửa status thành công");
        });
    }
}
module.exports = {
    getProduct,
    addProduct,
    deleteProduct,
    updateProduct
}

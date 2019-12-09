var mysql = require('mysql');
// var pool = mysql.createPool({
//     host    : "54.241.138.21",
//     user    : "admin",
//     password: "",
//     port    : "3306",
//     database : "twitter"
// });
// pool.getConnection((err, connection) => {
//     if (err) {
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//             console.error('Database connection was closed.')
//         }
//         if (err.code === 'ER_CON_COUNT_ERROR') {
//             console.error('Database has too many connections.')
//         }
//         if (err.code === 'ECONNREFUSED') {
//             console.error('Database connection was refused.')
//         }
//     }
    
//     if (connection) {
//         console.log("connection established")
//         connection.release()
//     return}
// })
// module.exports = pool;

var connection = mysql.createConnection({
    host    : "54.241.138.21",
    user    : "user",
    password: "root",
    port    : "3306",
    database : "twitter"
});

connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');

});



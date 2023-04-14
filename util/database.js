const mysql = require('mysql2');

const pool = mysql.createPool({
    host : '139.150.75.164',
    user:'Foodpang',
    database : 'FoodpangDB',
    password : 'Foodpang!@#123'
});

module.exports = pool.promise();
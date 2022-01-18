var mysql = require('mysql');

var connexion = mysql.createConnection({
    host: 'localhost',
    port:'8889',
    user: 'root',
    password:'root',
    database:'people_and_stats'
});

module.exports = connexion;
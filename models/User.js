// Reference of dbconnection.js
var db = require('../dbconnection');

var User = {
    
    getAllUsers: function (callback) {
        return db.query('SELECT * FROM user',callback);
    },

    getUserById: function (id, callback) {
        return db.query('SELECT * FROM user where Id=?',[id],callback);
    },

    addUser: function (Task, callback) {
        return db.query('INSERT INTO user VALUES(?,?,?)',[User.Id, User.Title, User.Status], callback);
    },

    deleteUser: function (id, callback) {
        return db.query("DELETE FROM user WHERE Id=?", [id], callback);
    },

    updateUser: function (id, Task, callback) {
        return db.query('UPDATE user SET Title=?,Status=? WHERE Id=?', [User.Title, User.Status, id], callback);
    }
};

module.exports = User;
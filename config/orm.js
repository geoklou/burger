var connection = require("../config/connection.js");

var orm = {

selectAll: function(input, cb){
    var queryString = "SELECT * FROM " + input + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
},

insertOne: function(table, cols, vals, cb){
    // var queryString = "INSERT INTO " + table ;
// var queryString = 'INSERT INTO ?? (??) VALUES (??)'
 var queryString = "INSERT INTO " + table + "(burger_name) values ('') ";
  //  var queryString = "INSERT INTO " + table + "(burger_name) values (burger_name) ; ";
    
    // connection.query(queryString, [burgers, col_burger_name, burger_name, cb], function(err, result){
    //   if (err) {
    //     throw err;
    //   }
    //   cb(result);
    // })

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      console.log(queryString);
      cb(result);
    })
}
  // ,

// updateOne: function(){

// }

};

module.exports = orm;
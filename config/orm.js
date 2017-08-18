var connection = require("../config/connection.js");

//helper for sql - add ?
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

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
//concate query string with sql query
var queryString = "INSERT INTO " + table ;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

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
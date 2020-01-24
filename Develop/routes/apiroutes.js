var util = require("util");
var fs = require("fs");
var readFileAsync = util.promisify(fs.readFile);

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        readFileAsync("Develop/db/db.json", "utf8")
            .then(function(data){
                console.log(data);
            })
    })
}
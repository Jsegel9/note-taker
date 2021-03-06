var util = require("util");
var fs = require("fs");
var readFileAsync = util.promisify(fs.readFile);
var writeFileAsync = util.promisify(fs.writeFile);

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        readFileAsync("Develop/db/db.json", "utf8")
            .then(function(data){
                console.log(data);
                res.send(data);
            })
    });
    app.post("/api/notes", function(req,res){
        fs.appendFile("Develop/db/db.json", req.body)
      console.log(req.body)  
      res.send("saved")
    })
    app.delete("/api/notes/:id", function(req, res){
        console.log("deleting");
    })
}
var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        console.log("test")
        // res.sendFile(path.join(__dirname, "..\public\index.html"))
    });
}
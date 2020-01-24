var express = require('express');
var htmlRoutes = require("./Develop/routes/htmlroutes")

var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
htmlRoutes(app);
// apiRoutes(app);

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:' + PORT);
});

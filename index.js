const express = require("express");
const app = express();
const eta = require("eta");
const bodyParser = require('body-parser');

app.engine("eta", eta.renderFile);
eta.configure({ views: "./views", cache: true });
app.set("views", "./views");
app.set("view cache", true);
app.set("view engine", "eta");
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function (req, res) {
    res.render("index.eta", { menu: "index" });
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});
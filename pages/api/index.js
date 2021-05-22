import fs from "fs";
import path from "path";

var express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "../../views"));
app.get("/api*", (req, res) => {
    const filePath = path.resolve(".", "public/svg/react_icon.svg");
    const svgBuffer = fs.readFileSync(filePath);
    // res.send(svgBuffer);
    res.setHeader("Content-Type", "image/svg+xml");
    res.render("index", { one: "two" });

    // res.send("HI!");
});

module.exports = app;

import fs from "fs";
import path from "path";

var express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("../../src/ejs"));
app.get("/api/svg", (req, res) => {
    const filePath = path.resolve(".", "public/svg/dokdo.svg");
    const svgBuffer = fs.readFileSync(filePath);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svgBuffer);
});

module.exports = app;

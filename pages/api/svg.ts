import fs from "fs";
import path from "path";

var express = require("express");
const app = express();


app.get("/api/svg", (req, res) => {
    const {type} = req.query;
    res.setHeader("Content-Type", "image/svg+xml");
    const svgPath = path.resolve(".", `public/svg/${type}.svg`);
    const svgBuffer = fs.readFileSync(svgPath);
    res.send(svgBuffer)
});


module.exports = app;

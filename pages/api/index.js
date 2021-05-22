import fs from "fs";
import path from "path";

var express = require("express");
const app = express();

app.get("/api", (req, res) => {
    const filePath = path.resolve(".", "public/svg/react_icon.svg");
    const svgBuffer = fs.readFileSync(filePath);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="980" height="200" role="img" aria-label="license: Apache">
<text>Ha</text>
</svg>
    `);

    // res.send("HI!");
});

module.exports = app;

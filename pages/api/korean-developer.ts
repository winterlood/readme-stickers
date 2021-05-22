import { korean_developer, sticker } from "../../server/render";

var express = require("express");
const app = express();

app.get("/api/korean-developer", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    const {name} = req.query;
    korean_developer(res,name);
});

module.exports = app;

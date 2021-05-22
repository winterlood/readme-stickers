import {  sticker } from "../../server/render";

var express = require("express");
const app = express();

app.get("/api/sticker", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    const {type} = req.query;
    sticker(res,type);
});

module.exports = app;

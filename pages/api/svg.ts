import { api_types } from "@global_types";
import fs from "fs";
import path from "path";

var express = require("express");
const app = express();

const getSvgPath = (type:api_types.stickerType):string=>{
    switch(type){
        case 'dokdo':{
            return path.resolve(".", "public/svg/dokdo.svg");
        }
        default:{
           throw new Error("ERROR!");
        }
    }
}

app.get("/api/svg", (req, res) => {
    const {type}:{type:api_types.stickerType} = req.query;
    res.setHeader("Content-Type", "image/svg+xml");
    const svgPath = getSvgPath(type);
    const svgBuffer = fs.readFileSync(svgPath);
    res.send(svgBuffer)
});


module.exports = app;

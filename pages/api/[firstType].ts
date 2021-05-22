import { api_types } from "@global_types";
import { korean_developer, sticker } from "../../server/render";

var express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("../../src/ejs"));

app.get("/api*", (req, res) => {
    const {firstType}:{firstType:api_types.firstType} = req.query;

    switch(firstType){
        case 'sticker':{
            const {type}:{type:api_types.stickerType} = req.query;
            sticker(res,type);
            break;
        }
        case 'korean-developer':{
            const {name}:api_types.koreanDeveloperType = req.query;
            korean_developer(res,name);
        }
        case'pin':{
            break;
        }
        default:{
            res.send('no first type');
            return;
        }
    }
});

module.exports = app;

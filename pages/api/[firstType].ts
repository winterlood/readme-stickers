import { api_types } from "@global_types";

var express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("../../src/ejs"));

app.get("/api*", (req, res) => {
    const {firstType}:{firstType:api_types.firstType} = req.query;

    switch(firstType){
        case 'sticker':{
            const {type}:{type:api_types.stickerType} = req.query;
            res.setHeader("Content-Type", "image/svg+xml");
            res.render(firstType,{sticker:`svg?type=${type}`})
            break;
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

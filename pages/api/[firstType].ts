import { korean_developer, sticker } from "../../server/render";

var express = require("express");
const app = express();
// app.set("view engine", "ejs");
// app.use(express.static(__dirname + "../views"));
// app.set("views", __dirname + "../views");

app.get("/api*", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");

    const {firstType} = req.query;
 
    switch(firstType){
        case 'sticker':{
            const {type} = req.query;
            sticker(res,type);
            break;
        }
        case 'korean-developer':{
            const {name} = req.query;
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

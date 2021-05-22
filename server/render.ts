import { api_types } from "@global_types";

export const sticker = (res,type:api_types.stickerType)=> {
    res.setHeader("Content-Type", "image/svg+xml");
    res.render('sticker',{sticker:`svg?type=${type}`})
}

export const korean_developer = (res,name)=>{
    res.setHeader("Content-Type", "image/svg+xml");
    res.render('korean-developer',{name:name,flag:`svg?type=round_ko`})
}

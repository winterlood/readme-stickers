import {Request,Response} from 'express'

// RENDER METHODS
import kodeveloper from 'server/kodeveloper';

export default (req:Request,res:Response)=>{
    // @ts-ignore
    const {name,theme}:{name:string;theme:string} = req.query;
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(kodeveloper(name,theme));
}
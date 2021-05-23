import {Request,Response} from 'express'

// RENDER METHODS
import  { koreposMedium } from 'server/korepos';

export default (req:Request,res:Response)=>{
   // @ts-ignore
   const {repo,owner,theme}:{repo:string;owner:string;theme:string} = req.query;
   res.setHeader("Content-Type", "image/svg+xml");
   res.send(koreposMedium(repo,owner,theme));
}
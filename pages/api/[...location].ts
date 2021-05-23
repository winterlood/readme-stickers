import {Request,Response} from 'express'

// RENDER METHODS
import kodeveloper from 'server/kodeveloper';
import  { koreposMedium, koreposWideTop } from 'server/korepos';



export default (req:Request,res:Response)=>{
    console.log(req.url)
    console.log(req.query)

    //@ts-ignore
    const {location}:{location:Array<string>} = req.query;
    const reqLocation = location.join('/');
    switch(reqLocation){
        case 'test':{
       
        }
        case 'kodeveloper':{
            // @ts-ignore
            const {name,theme}:{name:string;theme:string} = req.query;
            res.setHeader("Content-Type", "image/svg+xml");
            res.send(kodeveloper(name,theme));
            break;
        }
        case 'korepos/wide/top':{
            // @ts-ignore
            const {repo,owner,theme}:{repo:string;owner:string;theme:string} = req.query;
            res.setHeader("Content-Type", "image/svg+xml");
            res.send(koreposWideTop(repo,owner,theme));
            break;
        }
        case 'korepos/medium':{
            // @ts-ignore
            const {repo,owner,theme}:{repo:string;owner:string;theme:string} = req.query;
            res.setHeader("Content-Type", "image/svg+xml");
            res.send(koreposMedium(repo,owner,theme));
            break;
        }
        case 'korepos/wide/bottom':{
            // @ts-ignore
            const {reponame,repourl,theme}:{reponame:string;repourl:string;theme:string} = req.query;
            res.setHeader("Content-Type", "image/svg+xml");
            res.send(koreposWideTop(reponame,repourl,theme));
            break;
        }
        default:{
            res.send('FAIL')
        }
    }
}
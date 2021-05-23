import round_ko from 'public/svg/round_ko';
import ko_divider from 'public/svg/ko_divider'

export const koreposMedium =(repo:string,owner:string,theme:string)=>{

    
    var bgColor = theme === 'dark'? 'black':'#fffefe';
    var nameColor = theme === 'dark' ? 'white' : 'black'; 
    var descriptColor = theme === 'dark' ? 'rgb(200, 200, 200)' : 'rgb(73, 73, 73)';


    return  `
    <svg 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns="http://www.w3.org/2000/svg"
    width="501"
    height="150"
    viweBox="0 0 500 120"
    fill="white"
    >
        <style>
           .repo{
               font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill:${nameColor}
           }
           .label{ font: 400 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${descriptColor}}
        </style>
        <rect
        data-testid="card-bg"
        x="0.5"
        y="0.5"
        rx="4.5"
        height="99%"
        width="500"
        fill='${bgColor}'
        stroke-opacity="1"
        />
    <svg x="123" y="0" width="48%">
    ${ko_divider}
    </svg>

    <text class="label" text-anchor="middle" x="245" y="115">STARTED IN KOREA</text>
    <text class="repo" text-anchor="middle" x="245" y="140">${owner}/${repo}</text>

  </svg>
            `   
}

export const koreposWide = (repo:string,owner:string,theme:string)=>{
    var ko_round_icon = round_ko;

    var bgColor = theme === 'dark'? 'black':'#fffefe';
    var nameColor = theme === 'dark' ? 'white' : 'black'; 
    var descriptColor = theme === 'dark' ? 'rgb(200, 200, 200)' : 'rgb(73, 73, 73)';

    return  `
    <svg 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
  xmlns="http://www.w3.org/2000/svg"
    width="500"
    height="150"
    viweBox="0 0 500 120"
    >
        <style>
           .repo{
               font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill:${nameColor}
           }
           .label{ font: 400 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${descriptColor}}
        </style>

    <svg x="123" y="0" width="50%">
    ${ko_divider}
    </svg>

    <text class="label" text-anchor="middle" x="250" y="115">STARTED IN KOREA</text>
    <text class="repo" text-anchor="middle" x="250" y="140">${owner}/${repo}</text>

  </svg>
            `   
};

import round_ko from 'public/svg/round_ko';
import ko_divider from 'public/svg/ko_divider'
// export const koreposMedium =(repo:string,owner:string,theme:string)=>{
//     var ko_round_icon = round_ko;

    
//     var bgColor = theme === 'dark'? 'black':'#fffefe';
//     var nameColor = theme === 'dark' ? 'white' : 'black'; 
//     var descriptColor = theme === 'dark' ? 'rgb(200, 200, 200)' : 'rgb(73, 73, 73)';

    
//     return  `
//     <svg xmlns="http://www.w3.org/2000/svg"
//     xmlns:xlink="http://www.w3.org/1999/xlink"  height="80" role="img" 
//     aria-label="license: Apache">
//     <style>
//        .name{
//            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; fill:${nameColor}
//        }
//        .label{ font: 400 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: ${descriptColor}}
//     </style>
//     <rect
//     data-testid="card-bg"
//     x="0.5"
//     y="0.5"
//     rx="4.5"
//     height="99%"
//     stroke="#e4e2e2"
//     width="450"
//     fill='${bgColor}'
//     stroke-opacity="1"
//     />
//     <svg  x='10' y='5'  width="60" height="60">
//     ${round_ko}
//     </svg>
//            <text class="label" x='80' y='30'>REPOS :: STARTED IN KOREA</text>
//            <text class="name" x='80' y='53'>${owner}/${repo} </text>

//     </svg>
//             `   
// }
export const koreposMedium =(repo:string,owner:string,theme:string)=>{
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
}

export const koreposWideTop = (repo:string,owner:string,theme:string)=>{
    var ko_round_icon = round_ko;

    
    var bgColor = theme === 'dark'? 'black':'#fffefe';
    var nameColor = theme === 'dark' ? 'white' : 'black'; 
    var descriptColor = theme === 'dark' ? 'rgb(200, 200, 200)' : 'rgb(73, 73, 73)';

            return `
            
            <svg 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            xmlns="http://www.w3.org/2000/svg"> 
    
       ${ko_divider}

            </svg>

          `
};



// <text 
// text-anchor="middle" 
// alignment-baseline="middle" 
// transform="translate(350, 350)"> Lorem

// </text> 


// <svg xmlns="http://www.w3.org/2000/svg" width="32" height="45">
//   <defs>
//     <filter id="a" width="154.5%" height="509.1%" x="-27.3%" y="-204.5%" filterUnits="objectBoundingBox">
//       <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
//     </filter>
//   </defs>
//   <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
//     <ellipse cx="15" cy="37.467" fill="#999" fill-opacity=".9" filter="url(#a)" rx="11" ry="1.467"/>
//     <path fill="#006893" fill-rule="nonzero" stroke="#006893" d="M15 0C6.448 0 0 6.759 0 15.726c0 11.28 13.944 21.44 14.537 21.867.138.1.302.149.463.149a.784.784 0 0 0 .463-.15C16.055 37.167 30 27.007 30 15.727 30 6.76 23.552 0 15 0z"/>
//   </g>

//   <svg x="6" y="6" width="20" height="20" viewBox="0 0 24 24" fill="#fff"><title>bicycle</title><path d="M5.5,6.137a1,1,0,0,0,0,2H6.909a.249.249,0,0,1,.231.156l.637,1.568a.251.251,0,0,1-.036.25l-.35.437a.25.25,0,0,1-.3.07A4.894,4.894,0,0,0,5,10.137a5,5,0,1,0,4.856,6.19.25.25,0,0,1,.243-.19h.4a1,1,0,0,0,.807-.409l4.281-5.837a.247.247,0,0,1,.236-.1.252.252,0,0,1,.2.161l.281.762a.251.251,0,0,1-.095.293,4.978,4.978,0,1,0,2.79-.87,3.824,3.824,0,0,0-.549.046.25.25,0,0,1-.27-.161L16.92,6.6a.249.249,0,0,1,.174-.329l1.742-.435a1,1,0,0,0-.485-1.941L15.8,4.532a1.5,1.5,0,0,0-1.042,1.974l.08.217a.253.253,0,0,1-.008.193.25.25,0,0,1-.142.129L9.764,8.8a.251.251,0,0,1-.316-.141l-.113-.279A.178.178,0,0,1,9.5,8.137a1,1,0,0,0,0-2Zm-.5,12a3,3,0,1,1,2.658-4.364.25.25,0,0,1-.222.364H5a1,1,0,0,0,0,2H7.436a.25.25,0,0,1,.222.364A2.985,2.985,0,0,1,5,18.137Zm5.049-4.076a.1.1,0,0,1-.174-.036,4.941,4.941,0,0,0-.927-1.916.249.249,0,0,1,0-.309l.609-.761a.252.252,0,0,1,.111-.08L12.5,9.95a.25.25,0,0,1,.286.383ZM19,18.137a3,3,0,0,1-3-3,2.959,2.959,0,0,1,.8-2.022.249.249,0,0,1,.417.084l.842,2.284a1,1,0,1,0,1.876-.692l-.964-2.617a.028.028,0,0,1,0-.025A.028.028,0,0,1,19,12.137a3,3,0,0,1,0,6Z"/></svg>

// </svg>


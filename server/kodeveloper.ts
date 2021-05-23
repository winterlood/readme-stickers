import round_ko from '../public/svg/round_ko';
export default (name:string,theme:string)=>{
    var name = name;

    var bgColor = theme === 'dark'? 'black':'#fffefe';
    var nameColor = theme === 'dark' ? 'white' : 'black'; 
    var descriptColor = theme === 'dark' ? 'rgb(200, 200, 200)' : 'rgb(73, 73, 73)';

  return  `
  <svg xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink" width="350" height="80" role="img" 
  aria-label="license: Apache">
  <style>
     .name{
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
  stroke="#e4e2e2"
  width="350"
  fill='${bgColor}'
  stroke-opacity="1"
  />
  <svg  x='10' y='5'  width="60" height="60">
  ${round_ko}
  </svg>
         <text class="name" x='80' y='35'> ${name} </text>
         <text class="label" x='80' y='55'>DEVELOPER IN REPUBLIC OF KOREA</text>
  </svg>
          `  
}

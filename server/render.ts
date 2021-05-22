
export const sticker = (res,type)=> {
    res.setHeader("Content-Type", "image/svg+xml");
    var sticker = `https://readme-stickers.vercel.app/api/svg?type=${type}`

    res.send(`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200" role="img" 
aria-label="license: Apache">
    <image href='${sticker}'   width="180" />
</svg>
    `)
}

export const korean_developer = (res,name)=>{
    var flag = `https://readme-stickers.vercel.app/api/svg?type=round_ko`
    var name = name;

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(
        `
<svg xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" width="500" height="80" role="img" 
aria-label="license: Apache">
<style>
   .name{
       font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
   }
   .label{ font: 400 13px 'Segoe UI', Ubuntu, Sans-Serif; fill: rgb(73, 73, 73) }
</style>
<rect
data-testid="card-bg"
x="0.5"
y="0.5"
rx="4.5"
height="99%"
stroke="#e4e2e2"
width="350"
fill="#fffefe"
stroke-opacity="1"
/>
   <image href='${flag}'  x='10' y='5'  width="60" />
       <text class="name" x='80' y='35'> ${name} </text>
       <text class="label" x='80' y='55'>DEVELOPER IN REPUBLIC OF KOREA</text>
</svg>
        `
    )
}


const {chromium}=require('playwright');const fs=require('fs');
const [g,c,gp]=fs.readFileSync(process.argv[2],'utf8').trim().split('\n');
const svg=`<svg viewBox="0 0 180 180" width="360" height="360"><defs><mask id="m"><rect width="180" height="180" fill="#fff"/><g fill="#000">${gp}</g></mask></defs><path fill="#ee3232" mask="url(#m)" d="${g}"/><g fill="#b82a32">${c}</g></svg>`;
const fav='data:image/png;base64,'+fs.readFileSync(process.argv[3]).toString('base64');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1100,height:380}});
await p.setContent(`<body style="margin:0;background:#fff;display:flex;gap:10px">${svg}<img src="${fav}" width=360 height=360 style="image-rendering:auto"><div style="position:relative;width:360px;height:360px"><img src="${fav}" width=360 height=360 style="position:absolute;opacity:.5">${svg.replace('<svg','<svg style="position:absolute;opacity:.5"')}</div></body>`);
await p.screenshot({path:process.argv[4]});await b.close()})();

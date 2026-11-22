// textclash: finds (1) loader wordmarks that wrap/stack, (2) text that collides with drawn graphics or other text
// during the loader and every scroll step of the home page, at 1440x900 and 390x844.
// usage: node _kit/tools/textclash.js <slug> [outdir]   -> prints FLAG lines, writes crops to outdir (default /tmp/tc_<slug>)
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const [slug,outArg]=process.argv.slice(2);const out=outArg||('/tmp/tc_'+slug);fs.mkdirSync(out,{recursive:true});
const root=require('path').resolve(__dirname,'../..');const b=await chromium.launch();let flags=0;const seen=new Set();const ana=await b.newPage();
const collect=()=>{const R=[];const vw=innerWidth,vh=innerHeight;
 const leafs=[...document.querySelectorAll('body *')].filter(e=>{if(['SCRIPT','STYLE','svg','path'].includes(e.tagName))return false;
  return [...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim().length>0)||e.tagName==='text'||e.tagName==='tspan';});
 for(const e of leafs){const cs=getComputedStyle(e);if(cs.visibility==='hidden'||cs.display==='none')continue;
  let op=1,a=e;while(a&&a.nodeType===1){op*=+getComputedStyle(a).opacity;a=a.parentElement;}if(op<0.6)continue;
  const rg=document.createRange();rg.selectNodeContents(e);const rs=[...rg.getClientRects()].filter(r=>r.width>2&&r.height>4);
  for(const r of rs){if(r.bottom<0||r.top>vh||r.right<0||r.left>vw)continue;R.push({x:r.left,y:r.top,w:r.width,h:r.height,t:(e.textContent||'').trim().slice(0,40)});}}
 const G=[];for(const g of document.querySelectorAll('svg,canvas,img')){const r=g.getBoundingClientRect();const cs=getComputedStyle(g);if(cs.visibility==='hidden'||+cs.opacity<0.3)continue;
  if(r.width<120||r.height<80)continue;if(r.width*r.height>0.8*vw*vh)continue;if(r.bottom<0||r.top>vh)continue;G.push(r);}
 return R.filter(b=>G.some(r=>b.x<r.right&&b.x+b.w>r.left&&b.y<r.bottom&&b.y+b.h>r.top));};
const hideCSS='*{-webkit-text-fill-color:transparent!important;color:transparent!important;text-shadow:none!important;-webkit-text-stroke:0!important;caret-color:transparent!important} svg text,svg tspan{fill:transparent!important;stroke:transparent!important}';
async function check(p,tag,W){const boxes=await p.evaluate(collect);if(!boxes.length)return;
 const id=await p.addStyleTag({content:hideCSS});await p.waitForTimeout(60);const buf=await p.screenshot();await p.evaluate(()=>{const s=[...document.querySelectorAll('style')].pop();s.remove();});
 const res=await ana.evaluate(async([b64,boxes])=>{const im=new Image();im.src='data:image/png;base64,'+b64;await im.decode();const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const g=c.getContext('2d');g.drawImage(im,0,0);const D=g.getImageData(0,0,c.width,c.height).data,IW=c.width,IH=c.height;
  const lum=(x,y)=>{const i=(y*IW+x)*4;return .3*D[i]+.59*D[i+1]+.11*D[i+2];};const o=[];
  for(const bx of boxes){const x0=Math.max(0,Math.round(bx.x+2)),y0=Math.max(0,Math.round(bx.y+2)),x1=Math.min(IW-1,Math.round(bx.x+bx.w-2)),y1=Math.min(IH-1,Math.round(bx.y+bx.h-2));
   if(x1-x0<4||y1-y0<4)continue;const v=[];for(let y=y0;y<=y1;y++)for(let x=x0;x<=x1;x++)v.push(lum(x,y));const sv=[...v].sort((a,b)=>a-b);const med=sv[sv.length>>1];
   let hit=0;for(const L of v)if(Math.abs(L-med)>38)hit++;const fr=hit/v.length;if(fr>0.02&&hit>15)o.push([bx,fr]);}return o;},[buf.toString('base64'),boxes]);
 for(const [bx,fr] of res){const key=bx.t+'|'+W;if(seen.has(key))continue;seen.add(key);flags++;const f=`${out}/${tag}_${flags}.png`;
   await p.screenshot({path:f,clip:{x:Math.max(0,bx.x-60),y:Math.max(0,bx.y-40),width:Math.max(10,Math.min(bx.w+120,W-Math.max(0,bx.x-60))),height:bx.h+80}}).catch(()=>{});
   console.log(`FLAG graphic-under-text ${tag} "${bx.t}" ${(fr*100).toFixed(0)}% ${f}`);}
 // text-on-text: boxes overlapping each other (different strings)
 for(let i=0;i<boxes.length;i++)for(let j=i+1;j<boxes.length;j++){const a=boxes[i],c=boxes[j];if(a.t===c.t)continue;
  const ix=Math.min(a.x+a.w,c.x+c.w)-Math.max(a.x,c.x),iy=Math.min(a.y+a.h,c.y+c.h)-Math.max(a.y,c.y);
  if(ix>3&&iy>3&&ix*iy>0.15*Math.min(a.w*a.h,c.w*c.h)){if(a.t.includes(c.t)||c.t.includes(a.t))continue;const key=a.t+'x'+c.t+W;if(seen.has(key))continue;seen.add(key);flags++;console.log(`FLAG text-on-text ${tag} "${a.t}" x "${c.t}"`);}}}
for(const W of [1440,390]){const H=W>500?900:844;const p=await b.newPage({viewport:{width:W,height:H}});
 await p.goto('file://'+root+'/'+slug+'/index.html');
 for(const t of [500,500,400]){await p.waitForTimeout(t);
  // loader wordmark stacking: any short text element inside a fixed full-screen overlay whose chars span >2 lines
  const st=await p.evaluate(()=>{const o=[];for(const e of document.querySelectorAll('body *')){const cs=getComputedStyle(e);if(cs.position!=='fixed'||+cs.zIndex<100)continue;
    for(const s of e.querySelectorAll('*')){const tx=s.textContent.trim();if(!tx||tx.length>40||s.children.length===0)continue;const tops=new Set([...s.querySelectorAll('*')].filter(c=>c.children.length===0&&c.textContent.trim().length===1).map(c=>Math.round((c.offsetTop+(c.offsetParent?c.offsetParent.offsetTop:0))/4)));if(tops.size>3)o.push(tx+' ('+tops.size+' lines)');}}return [...new Set(o)];});
  for(const s of st){flags++;console.log(`FLAG loader-wordmark-stacked ${W} "${s}"`);}
  await check(p,`L${W}_${t}`,W);}
 await p.waitForTimeout(2500);const tot=await p.evaluate(()=>document.documentElement.scrollHeight);let i=0;
 for(let y=0;y<tot&&i<40;y+=H*0.5,i++){await check(p,`S${W}_${String(i).padStart(2,'0')}`,W);for(let k=0;k<(H*0.5)/100;k++){await p.mouse.wheel(0,100);await p.waitForTimeout(25);}await p.waitForTimeout(700);}
 await p.close();}
await b.close();console.log(flags?`textclash ${slug}: ${flags} flag(s) - check every crop by eye`:`textclash ${slug}: OK`);})();

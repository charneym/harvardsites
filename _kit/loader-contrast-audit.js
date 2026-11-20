// loader-contrast-audit: node _kit/loader-contrast-audit.js <slug...>; flags text <3:1 on the loading screen (run from repo root)
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const out=[];
for(const s of process.argv.slice(2)){let p;try{p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto('file://'+require('path').resolve(s)+'/index.html',{waitUntil:'commit'});
let worst=null;
for(const t of [500,700,700]){await p.waitForTimeout(t);
const r=await p.evaluate(()=>{
 const lum=c=>{const m=c.match(/[\d.]+/g);if(!m)return null;const [r,g,b,a]=m.map(Number);const f=v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)};return {L:.2126*f(r)+.7152*f(g)+.0722*f(b),a:a===undefined?1:a}};
 const bgOf=e=>{for(let n=e;n;n=n.parentElement){const c=getComputedStyle(n).backgroundColor;const l=lum(c);if(l&&l.a>0.9)return l.L;}return 1};
 const ovs=[...document.querySelectorAll('body *')].filter(e=>{const cs=getComputedStyle(e);if(cs.position!=='fixed'||cs.display==='none'||cs.visibility==='hidden'||+cs.opacity<0.5)return false;const r=e.getBoundingClientRect();return r.width>=innerWidth*0.9&&r.height>=innerHeight*0.9&&lum(cs.backgroundColor)&&lum(cs.backgroundColor).a>0.9});
 let res=[];
 for(const o of ovs){for(const e of o.querySelectorAll('*')){if(!e.childNodes.length||![...e.childNodes].some(n=>n.nodeType==3&&n.textContent.trim()))continue;const cs=getComputedStyle(e);if(cs.visibility==='hidden'||cs.display==='none')continue;let op=1;for(let n=e;n&&n!==o.parentElement;n=n.parentElement)op*=+getComputedStyle(n).opacity;if(op<0.6)continue;const r=e.getBoundingClientRect();if(r.width<2||r.bottom<0||r.top>innerHeight)continue;const fg=lum(cs.color);if(!fg)continue;const bg=bgOf(e);const hi=Math.max(fg.L,bg),lo=Math.min(fg.L,bg);const cr=(hi+.05)/(lo+.05);res.push([cr,e.textContent.trim().slice(0,30),parseFloat(cs.fontSize)]);}}
 res.sort((a,b)=>a[0]-b[0]);return res[0]||null;});
 if(r&&(!worst||r[0]<worst[0]))worst=r;}
 if(worst&&worst[0]<3)out.push(s+' '+worst[0].toFixed(2)+' "'+worst[1]+'" '+worst[2]+'px');}catch(e){out.push(s+' ERR')}finally{p&&await p.close()}}
 console.log(out.join('\n'));await b.close();})();

// node _kit/v4/framesx.js SLUG OUTDIR MODE [w] [h]
//   MODE loader : fresh visit, frames 0.8-3.0 s every 100 ms, plus a JSON of what is visible per frame (panel top, header top, h1 / hero photo opacity)
//   MODE nav    : frames 1.0-2.4 s every 50 ms after a nav click
//   MODE storyend: frames every 2% of scroll from 90% of the pin to 10% past it, with the last story photo's box per frame
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
(async()=>{const [slug,out,mode,W='1440',H='900']=process.argv.slice(2);fs.mkdirSync(out,{recursive:true});const b=await chromium.launch();
const URL='file://'+path.resolve(__dirname,'../..',slug,'index.html');
const c=await b.newContext({viewport:{width:+W,height:+H},deviceScaleFactor:1});const p=await c.newPage();await p.route(/^https?:/,r=>r.abort());
const M=[];const shot=async n=>p.screenshot({path:`${out}/${mode}-${n}.png`});
const vis=()=>p.evaluate(()=>{const q=s=>document.querySelector(s);const eff=e=>{if(!e)return null;let o=1;for(let x=e;x&&x!==document.documentElement;x=x.parentElement){const c=getComputedStyle(x);if(c.visibility==='hidden'||c.display==='none')return 0;o*=+c.opacity;const f=/opacity\(([\d.]+)/.exec(c.filter);if(f)o*=+f[1]}return +o.toFixed(2)};
  const pre=q('#pre'),h1=q('#view h1, h1'),ln=h1&&h1.querySelector('.ln');const ph=q('[data-v4-photo] img, #field, .hero img, .hero canvas');
  return {pre:pre?Math.round(pre.getBoundingClientRect().bottom):0,hdr:q('#hdr')?Math.round(q('#hdr').getBoundingClientRect().bottom):null,h1:ln?eff(ln)*(ln.getBoundingClientRect().top<innerHeight?1:0):eff(h1),photo:eff(ph)}});
if(mode==='loader'){const t0=Date.now();await p.goto(URL,{waitUntil:'commit'});
  for(let t=800;t<=3000;t+=100){const w=t-(Date.now()-t0);if(w>0)await p.waitForTimeout(w);M.push([t,await vis().catch(e=>String(e))]);await shot(t)}}
if(mode==='nav'){await p.goto(URL);await p.waitForTimeout(4500);const t0=Date.now();
  await p.evaluate(()=>{const a=[...document.querySelectorAll('header nav a[href^="#/"]')].filter(a=>a.offsetWidth&&!/contact/i.test(a.textContent))[0];a.click()});
  for(let t=1000;t<=2400;t+=50){const w=t-(Date.now()-t0);if(w>0)await p.waitForTimeout(w);await shot(t)}}
if(mode==='storyend'){await p.goto(URL);await p.waitForTimeout(4000);
  const pin=await p.evaluate(()=>{const s=ScrollTrigger.getAll().find(s=>s.pin);return {start:s.start,end:s.end}});
  for(let k=90;k<=110;k+=2){const y=Math.round(pin.start+(pin.end-pin.start)*k/100);
    await p.evaluate(y=>{const l=window.V4lenis||window.__lenis;if(l)l.scrollTo(y,{immediate:true,force:true});window.scrollTo(0,y)},y);await p.waitForTimeout(1500);
    M.push([k,await p.evaluate(()=>{const f=[...document.querySelectorAll('[data-v4-story] .step figure, #story .story-r')].pop();if(!f)return null;const im=f.querySelector('img')||f;const r=im.getBoundingClientRect(),rf=f.getBoundingClientRect();return {fig:[Math.round(rf.left),Math.round(rf.top),Math.round(rf.width),Math.round(rf.height)],img:[Math.round(r.left),Math.round(r.top),Math.round(r.width),Math.round(r.height)],pinned:!!f.closest('.pinned')}})]);await shot(k)}}
fs.writeFileSync(`${out}/${mode}.json`,JSON.stringify(M));console.log(slug,mode,JSON.stringify(M));await b.close()})();

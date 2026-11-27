// node _kit/v4/motionframes.js SLUG OUTDIR : frames at fixed timestamps for side-by-side comparison with /desoutter/
//   loader-fresh-<ms>.png  0.8-2.0 s every 100 ms (first visit in the session)
//   loader-repeat-<ms>.png 0.8-2.0 s every 100 ms (second load, sessionStorage key set)
//   nav-<ms>.png           0.9-2.0 s every 100 ms after clicking the first nav item
//   story-<ms>.png         0-1.2 s every 150 ms after scrolling just past a step boundary (step 1 -> 2)
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
(async()=>{const [slug,out]=process.argv.slice(2);fs.mkdirSync(out,{recursive:true});const b=await chromium.launch();
const URL='file://'+path.resolve(__dirname,'../..',slug,'index.html');
const c=await b.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1});const p=await c.newPage();await p.route(/^https?:/,r=>r.abort());
const errs=[];p.on('pageerror',e=>errs.push(e.message));
const seq=async(name,t0,from,to,step)=>{for(let t=from;t<=to+1;t+=step){const w=t-(Date.now()-t0);if(w>0)await p.waitForTimeout(w);await p.screenshot({path:`${out}/${name}-${t}.png`})}};
let t0=Date.now();await p.goto(URL,{waitUntil:'commit'});await seq('loader-fresh',t0,800,2000,100);await p.waitForTimeout(2500);
t0=Date.now();await p.reload({waitUntil:'commit'});await seq('loader-repeat',t0,800,2000,100);await p.waitForTimeout(2500);
t0=Date.now();await p.evaluate(()=>{const a=[...document.querySelectorAll('header nav a[href^="#/"]')].filter(a=>a.offsetWidth&&!/contact/i.test(a.textContent))[0];a.click()});await seq('nav',t0,900,2000,100);
await p.waitForTimeout(800);await p.goto(URL.replace(/#.*/,'')+'#/',{waitUntil:'load'});await p.reload();await p.waitForTimeout(3000);
const pin=await p.evaluate(()=>{const s=ScrollTrigger.getAll().find(s=>s.pin);return s?{start:s.start,end:s.end,n:document.querySelectorAll('[data-v4-story] .steps > .step, #story .step').length}:null});
if(pin){const go=y=>p.evaluate(y=>{const l=window.V4lenis||window.__lenis;window.scrollTo(0,y);if(l)l.scrollTo(y,{immediate:true,force:true});else{const L=document.documentElement;}},y);
  const n=pin.n||4,yb=k=>Math.round(pin.start+(pin.end-pin.start)*k/n);
  await go(yb(1)-Math.round((pin.end-pin.start)*.1/n));await p.waitForTimeout(1800);
  await p.mouse.move(700,450);t0=Date.now();await p.mouse.wheel(0,Math.round((pin.end-pin.start)*.2/n));await seq('story',t0,0,1200,150)}
fs.writeFileSync(`${out}/info.json`,JSON.stringify({pin,errs}));console.log(slug,JSON.stringify({pin,errs}));await b.close()})();

// node motionshot.js SLUG OUTDIR : screenshots at fixed moments (loader, nav click, scroll reveals, story) + a JSON of measured states
const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const [slug,out]=process.argv.slice(2);fs.mkdirSync(out,{recursive:true});const b=await chromium.launch();
const URL='file://'+require('path').resolve(__dirname,'../..',slug,'index.html');const M={};
const ctxN=async()=>{const c=await b.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1});const p=await c.newPage();await p.route(/^https?:/,r=>r.abort());p.errs=[];p.on('pageerror',e=>p.errs.push(e.message));return [c,p]};
const st=p=>p.evaluate(()=>{const q=s=>document.querySelector(s);const pre=q('#pre');const h=q('#hdr');const h1=q('h1');const op=e=>{if(!e)return null;let o=1;for(let x=e;x;x=x.parentElement){const c=getComputedStyle(x);o*=+c.opacity;if(c.visibility==='hidden')return 0}return +o.toFixed(2)};
 return {pre:pre?{top:Math.round(pre.getBoundingClientRect().top),op:+getComputedStyle(pre).opacity}:'gone',hdrTop:h&&Math.round(h.getBoundingClientRect().top),h1:op(h1&&(h1.querySelector('.ln,div')||h1))}});
/* 1. loader */
{const [c,p]=await ctxN();const t0=Date.now();await p.goto(URL,{waitUntil:'commit'});M.loader={};
 for(const t of [200,500,800,1100,1500,2000,2500]){const w=t-(Date.now()-t0);if(w>0)await p.waitForTimeout(w);M.loader[t]=await st(p).catch(e=>String(e));await p.screenshot({path:`${out}/loader-${t}.png`})}
 /* 2. nav click (same session: second visit shows the veil) */
 await p.waitForTimeout(2500);const t1=Date.now();await p.evaluate(()=>{const a=[...document.querySelectorAll('header nav a[href^="#/"]')].filter(a=>a.offsetWidth&&!/contact/i.test(a.textContent))[0];a.click()});M.nav={};
 for(const t of [300,600,900,1300]){const w=t-(Date.now()-t1);if(w>0)await p.waitForTimeout(w);M.nav[t]=await p.evaluate(()=>({xcTop:Math.round(document.getElementById('xc').getBoundingClientRect().top),xt:getComputedStyle(document.getElementById('xt')).visibility}));await p.screenshot({path:`${out}/nav-${t}.png`})}
 M.errs=p.errs;await c.close()}
/* 3. scroll reveals mid-entry + 4. story */
{const [c,p]=await ctxN();await p.goto(URL);await p.waitForTimeout(3500);
 const H=await p.evaluate(()=>innerHeight);
 await p.mouse.move(700,450);for(let i=0;i<4;i++){await p.mouse.wheel(0,250);await p.waitForTimeout(16)}
 await p.waitForTimeout(450);await p.screenshot({path:`${out}/reveal-mid.png`});await p.waitForTimeout(1600);await p.screenshot({path:`${out}/reveal-end.png`});
 const pin=await p.evaluate(()=>{const s=ScrollTrigger.getAll().find(s=>s.pin);return s?{start:s.start,end:s.end}:null});M.pin=pin;
 if(pin)for(const k of [0,15,35,50,70,95]){const y=Math.round(pin.start+(pin.end-pin.start)*k/100);await p.evaluate(y=>{const l=window.V4lenis||null;if(l)l.scrollTo(y,{immediate:true,force:true});window.scrollTo(0,y)},y);await p.waitForTimeout(1300);await p.screenshot({path:`${out}/story-${k}.png`})}
 M.errs2=p.errs;await c.close()}
fs.writeFileSync(`${out}/m.json`,JSON.stringify(M,null,1));console.log(JSON.stringify(M));await b.close()})();

const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const [w,h] of [[1440,900],[390,844]]){const p=await b.newPage({viewport:{width:w,height:h}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/user/harvardsites/vasculonics/index.html');await p.waitForTimeout(8000);
const items=['Science','Pipeline','Team','Milestones','Contact'];
for(const it of items){
 if(w<861){await p.click('#burger');await p.waitForTimeout(900);await p.click(`#mm a:text-is("${it}")`)} else await p.click(`header .nav a:has-text("${it}")`);
 await p.waitForTimeout(3200);
 const r=await p.evaluate(()=>({hash:location.hash,bo:!!document.querySelector('.bo.on'),h1:(document.querySelector('.bo.on h1')||{}).textContent||'',y:Math.round(scrollY),ctc:Math.round(document.getElementById('contact').getBoundingClientRect().top)}));
 console.log(w,it,JSON.stringify(r));
 if(r.bo){await p.goBack();await p.waitForTimeout(2500)} else {await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(800)}}
console.log(w,'errs',errs);await p.close()}
await b.close()})();

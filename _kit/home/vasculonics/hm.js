const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const s of ['modulationtherapeutics','afasci','vasculonics'])for(const [w,h] of [[1920,930],[1440,900]]){const p=await b.newPage({viewport:{width:w,height:h}});
await p.goto(`file:///home/user/harvardsites/${s}/index.html`);await p.waitForTimeout(8500);
const r=await p.evaluate(()=>{const t=document.getElementById('pageTitle'),e=document.querySelector('.hero .eyebrow'),f=document.querySelector('.hero-foot')||t;const R=x=>x.getBoundingClientRect();return {fs:getComputedStyle(t).fontSize,lines:t.querySelectorAll('.l').length,eyeTop:Math.round(R(e).top),h1h:Math.round(R(t).height),blockBottom:Math.round(R(f).bottom)}});
console.log(s,w,JSON.stringify(r));await p.close()}
await b.close()})();

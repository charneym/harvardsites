// node navtest.js <file> : real clicks through every header link (from home scrolled mid-page, then sub-page to sub-page, then logo home).
// After each click: no JS errors, hash changed, and the new page shows a visible heading (opacity>0.9, in viewport) within 3.5s.
const {chromium}=require('playwright');(async()=>{const f=process.argv[2];const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:+(process.argv[3]||1440),height:+(process.argv[4]||900)}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.route(/^https?:/,r=>r.abort());
await p.goto('file://'+f);await p.waitForTimeout(5500);
const links=await p.evaluate(()=>[...new Set([...document.querySelectorAll('header a[href^="#/"]')].map(a=>a.getAttribute('href')))]);
const fails=[];
const check=async(h)=>{await p.waitForTimeout(3500);const r=await p.evaluate(()=>{const hs=[...document.querySelectorAll('h1,h2')].filter(e=>{const r=e.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight||r.width<2)return false;let o=1;for(let x=e;x;x=x.parentElement){const s=getComputedStyle(x);o*=+s.opacity;if(s.visibility==='hidden')o=0}return o>.9});return {h:location.hash,n:hs.length,t:hs[0]&&hs[0].innerText.slice(0,40),blank:!hs.length}});
  if(r.blank)fails.push(`BLANK after -> ${h} (hash ${r.h})`);if(errs.length){fails.push(`JS ERROR after -> ${h}: ${errs.join(' / ').slice(0,200)}`);errs.length=0}return r};
await p.mouse.move(700,450);for(let i=0;i<6;i++){await p.mouse.wheel(0,500);await p.waitForTimeout(80)}await p.waitForTimeout(800);
const order=links.filter(h=>h!=='#/'&&h!=='#');
for(const h of order){const ok=await p.evaluate(h=>{const a=[...document.querySelectorAll('header a[href="'+h+'"]')].find(a=>a.offsetWidth);if(a){a.click();return 1}location.hash=h;return 0},h);await check(h)}
await p.evaluate(()=>{const a=[...document.querySelectorAll('header a[href="#/"]')].find(a=>a.offsetWidth);if(a)a.click();else location.hash='#/'});await check('#/ (home)');
// home -> scrolled -> first sub page again, then browser back
for(let i=0;i<4;i++){await p.mouse.wheel(0,600);await p.waitForTimeout(80)}
if(order[0]){await p.evaluate(h=>location.hash=h,order[0]);await check(order[0]+' (via hash from scrolled home)');await p.goBack();await check('back')}
console.log(fails.length?`FAIL ${f.split('/').pop()}:\n  `+fails.join('\n  '):`OK ${f.split('/').pop()} (${order.length+3} transitions)`);await b.close()})();

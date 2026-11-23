const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage();
for(const s of process.argv.slice(2)){await p.goto('file://'+require('path').resolve(__dirname,'../..')+'/'+s+'/index.html');await p.waitForTimeout(3000);
const hrefs=await p.$$eval('nav a',a=>[...new Set(a.map(x=>x.getAttribute('href')).filter(h=>h&&h.startsWith('#/')))]);
let bad=[];for(const h of ['',...hrefs]){if(h){await p.evaluate(h=>location.hash=h,h);await p.waitForTimeout(1500);}
const t=await p.evaluate(()=>document.body.innerText);const m=t.match(/.{0,30}&(#\d+|amp|quot|rsquo|lsquo|ndash|mdash|nbsp);.{0,20}/g);if(m)bad.push(h+': '+m.slice(0,3).join(' | '));}
console.log(s,bad.length?bad.join(' || '):'clean');}await b.close()})()

// node render.js out.png [query]  — renders render.html headless (static server on :8765 serving _kit)
const {chromium}=require('playwright');
(async()=>{const out=process.argv[2]||'hero.png',qs=process.argv[3]||'';
 const b=await chromium.launch();
 const u=new URLSearchParams(qs),p=await b.newPage({viewport:{width:+u.get('w')||1400,height:+u.get('h')||1100}});p.on('console',m=>console.log(m.text()));p.on('pageerror',e=>console.log('ERR',e.message));
 await p.goto('http://localhost:8765/home/heimelectronic/render.html?'+qs);await p.waitForFunction('window.DONE',null,{timeout:120000});
 await p.locator('canvas').screenshot({path:out,omitBackground:true});await b.close()})();

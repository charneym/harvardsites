// node _kit/tools/p7full.js slug out.jpg [width] : scroll through, then a scaled full-page strip
const {chromium}=require('playwright');const path=require('path');
const [slug,out,wd]=process.argv.slice(2);const W=+(wd||1440);
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:W,height:900}});
await p.goto('file://'+path.resolve(__dirname,'../../'+slug+'/index.html')+'#/');await p.waitForTimeout(3500);
const H=await p.evaluate(()=>document.documentElement.scrollHeight);
for(let y=0;y<H;y+=500){await p.mouse.wheel(0,500);await p.waitForTimeout(220)}
await p.waitForTimeout(1500);await p.evaluate(()=>{document.querySelectorAll('[data-r],.rv').forEach(e=>{e.style.opacity=1;e.style.transform='none'})});
await p.screenshot({path:out,fullPage:true,type:'jpeg',quality:40,scale:'css'});await b.close()})();

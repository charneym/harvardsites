// node _kit/tools/p7story.js slug outdir [width] : the pinned story at 6 progress points
const {chromium}=require('playwright');const path=require('path');
const [slug,out,wd]=process.argv.slice(2);const W=+(wd||1440),H=W<800?844:900;
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:W,height:H}});
await p.goto('file://'+path.resolve(__dirname,'../../'+slug+'/index.html')+'#/');await p.waitForTimeout(4000);
const top=await p.evaluate(()=>{const s=document.querySelector('#story');const e=s.parentElement.classList.contains('pin-spacer')?s.parentElement:s;return e.getBoundingClientRect().top+scrollY});
for(const f of [.06,.22,.42,.58,.78,.96]){const y=Math.round(top+f*H*2.8);await p.evaluate(y=>{try{lenis.scrollTo(y,{immediate:true,force:true})}catch(e){scrollTo(0,y)}},y);await p.waitForTimeout(1300);
 await p.screenshot({path:`${out}/${slug}-st${W}-${Math.round(f*100)}.jpg`,quality:60})}
await b.close()})();

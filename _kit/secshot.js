// node secshot.js <file> <outprefix> <w> <h> <sel1,sel2,...>
// Scrolls to each selector with a real wheel-driven scroll (lenis-friendly) and screenshots it.
const {chromium}=require('playwright');
const [,,file,pre,w='1440',h='900',sels='']=process.argv;
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:+w,height:+h}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file://'+require('path').resolve(file));await p.waitForTimeout(9000);
for(const s of sels.split(',').filter(Boolean)){
  const top=await p.evaluate(sel=>{const e=document.querySelector(sel);if(!e)return -1;const sp=e.closest('.pin-spacer')||e;return sp.getBoundingClientRect().top+scrollY},s);
  if(top<0){console.log('missing',s);continue}
  let guard=0;
  while(guard++<400){const y=await p.evaluate(()=>scrollY);if(Math.abs(y-top)<24)break;
    await p.mouse.wheel(0,Math.max(-900,Math.min(900,top-y)));await p.waitForTimeout(90)}
  await p.waitForTimeout(1400);
  await p.screenshot({path:pre+'-'+s.replace(/[^a-z0-9]/gi,'')+'.png'});
}
console.log('JS errors:',errs.slice(0,6));await b.close();})();

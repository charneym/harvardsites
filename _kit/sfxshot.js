// node sfxshot.js <file> <sectionSelector> <outprefix> [frames=16] [w=1440] [h=900]
// Scrolls through a pinned section with real wheel events and captures frames -> one contact sheet
const {chromium}=require('playwright');const [,,file,sel,pre,fr='16',w='1440',h='900']=process.argv;
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:+w,height:+h}});await p.goto('file://'+file);await p.waitForTimeout(5000);
const top=await p.evaluate(s=>{const e=document.querySelector(s);const sp=e.closest('.pin-spacer')||e;return sp.getBoundingClientRect().top+scrollY},sel);
const span=await p.evaluate(s=>{const e=document.querySelector(s);const sp=e.closest('.pin-spacer');return sp?sp.offsetHeight-innerHeight:innerHeight},sel);
await p.mouse.move(+w/2,+h/2);
// approach in wheel steps
let y=await p.evaluate(()=>scrollY);const target0=top-(+h)*0.5;
while(y<target0-5){await p.mouse.wheel(0,Math.min(300,target0-y));await p.waitForTimeout(60);y=await p.evaluate(()=>scrollY)}
const imgs=[];const N=+fr;const startY=top-(+h)*0.5,endY=top+span;
for(let i=0;i<N;i++){const ty=startY+(endY-startY)*i/(N-1);
  for(let k=0;k<40;k++){const cy=await p.evaluate(()=>scrollY);const d=ty-cy;if(Math.abs(d)<4)break;await p.mouse.wheel(0,Math.max(-250,Math.min(250,d)));await p.waitForTimeout(50)}
  await p.waitForTimeout(900);const f=`${pre}-${String(i).padStart(2,'0')}.png`;await p.screenshot({path:f});imgs.push(f)}
await b.close();console.log(imgs.length+' frames')})();

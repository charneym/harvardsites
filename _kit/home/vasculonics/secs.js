const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const [w,h]=[+process.argv[3],+process.argv[4]];const p=await b.newPage({viewport:{width:w,height:h}});
await p.goto('file:///home/user/harvardsites/vasculonics/index.html');await p.waitForTimeout(8000);
for(const id of ['about','pipeline','team','milestones','contact']){
 const y=await p.evaluate(id=>{const e=document.getElementById(id);return e.getBoundingClientRect().top+scrollY},id);
 for(let s=0;s<y;s+=400){await p.mouse.wheel(0,400);await p.waitForTimeout(120)}
 await p.evaluate(y=>window.scrollTo(0,y),y);await p.waitForTimeout(2200);await p.screenshot({path:`${process.argv[2]}/s-${w}-${id}.png`});}
await p.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));await p.waitForTimeout(2500);await p.screenshot({path:`${process.argv[2]}/s-${w}-foot.png`});
await b.close()})();

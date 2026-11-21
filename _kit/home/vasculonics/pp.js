const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const w=+process.argv[3],h=+process.argv[4];const p=await b.newPage({viewport:{width:w,height:h}});
await p.goto('file:///home/user/harvardsites/vasculonics/index.html');await p.waitForTimeout(8000);
for(let i=0;i<60;i++){await p.mouse.wheel(0,300);await p.waitForTimeout(80)}
for(const [id,off] of [['pipeline',0],['pipeline',900],['pipeline',1700]]){for(let k=0;k<3;k++){const y=await p.evaluate(id=>document.getElementById(id).getBoundingClientRect().top,id);await p.mouse.wheel(0,y+off*(k==0?1:0));await p.waitForTimeout(900);if(k==0)break}
 await p.waitForTimeout(1800);await p.screenshot({path:`${process.argv[2]}/pp-${w}-${off}.png`});}
await b.close()})();

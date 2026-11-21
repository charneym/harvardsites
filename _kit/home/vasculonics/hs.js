const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];
for(const [w,h] of [[1920,930],[1440,900],[390,844]]){const p=await b.newPage({viewport:{width:w,height:h}});p.on('pageerror',e=>errs.push(String(e)));
await p.goto('file:///home/user/harvardsites/vasculonics/index.html');await p.waitForTimeout(9000);
await p.screenshot({path:`${process.argv[2]}/h${w}.png`});await p.close()}
console.log('errs',errs);await b.close()})();

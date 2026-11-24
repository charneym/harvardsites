const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:900,height:400},deviceScaleFactor:1});
await p.goto('file://'+__dirname+'/logo.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(500);
const el=await p.$('#L');await el.screenshot({path:process.argv[2],omitBackground:true});await b.close()})();

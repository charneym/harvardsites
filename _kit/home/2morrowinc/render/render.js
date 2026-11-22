const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1400,height:1300},deviceScaleFactor:2});
await p.goto('file://'+__dirname+'/render.html');await p.waitForTimeout(800);await p.screenshot({path:__dirname+'/phones.png',omitBackground:true});await b.close()})();

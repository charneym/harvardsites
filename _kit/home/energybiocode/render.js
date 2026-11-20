const {chromium}=require('playwright');const fs=require('fs'),path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1400,height:1500},deviceScaleFactor:+(process.argv[3]||1)});
const svg=fs.readFileSync(path.join(__dirname,'lungs.svg'),'utf8');
await p.setContent('<html><body style="margin:0;background:#0a1a22">'+svg+'</body></html>');
await p.screenshot({path:process.argv[2]||'/tmp/e.png',clip:{x:0,y:0,width:1400,height:1500}});await b.close()})();

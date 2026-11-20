const {chromium}=require('playwright');const fs=require('fs'),path=require('path');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1400,height:1500},deviceScaleFactor:+(process.argv[3]||1)});
const svg=fs.readFileSync(path.join(__dirname,'kidney.svg'),'utf8');
await p.setContent('<html><body style="margin:0;background:#0a1f44">'+svg+'</body></html>');
await p.screenshot({path:process.argv[2]||'/tmp/k.png',clip:{x:0,y:0,width:1400,height:1500}});await b.close()})();

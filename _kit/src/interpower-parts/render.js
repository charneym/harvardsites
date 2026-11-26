// node render.js out.png "query"   — renders interpower.render.html with real alpha
const {chromium}=require('playwright');const path=require('path');
(async()=>{const [,,out,q='']=process.argv;const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-webgl','--ignore-gpu-blocklist','--allow-file-access-from-files']});
const W=+(new URLSearchParams(q).get('w')||1800),H=+(new URLSearchParams(q).get('h')||1800);
const p=await b.newPage({viewport:{width:W,height:H}});p.on('pageerror',e=>console.log('ERR',e.message));p.on('console',m=>console.log(m.text()));
await p.goto('file://'+path.resolve(__dirname,'../interpower.render.html')+'?'+q);await p.waitForFunction('window.DONE',null,{timeout:120000});
await p.screenshot({path:out,omitBackground:true});await b.close();console.log('ok',out)})();

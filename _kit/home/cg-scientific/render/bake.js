// node bake.js out.png [w] [h]  (serve _kit on :8765 first)
const {chromium}=require('playwright');
(async()=>{const [out,w,h]=[process.argv[2],+(process.argv[3]||2880),+(process.argv[4]||1800)];
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:1});p.on('console',m=>console.log('console',m.text()));p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto(`http://127.0.0.1:8765/home/cg-scientific/render/chip.html?w=${w}&h=${h}`);
await p.waitForFunction('window.DONE===true',null,{timeout:300000});
await p.screenshot({path:out});await b.close()})();

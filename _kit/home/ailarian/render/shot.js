// node shot.js out.png "query"   (expects python http.server on :8765 serving _kit)
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage({viewport:{width:2000,height:1400}});
p.on('console',m=>console.log('C',m.text()));p.on('pageerror',e=>console.log('E',e.message));
await p.goto('http://127.0.0.1:8765/home/ailarian/render/insert.html?'+(process.argv[3]||''));await p.waitForFunction('window.DONE',null,{timeout:240000});
const d=await p.evaluate(()=>document.querySelector('canvas').toDataURL('image/png'));require('fs').writeFileSync(process.argv[2],Buffer.from(d.split(',')[1],'base64'));await b.close()})();

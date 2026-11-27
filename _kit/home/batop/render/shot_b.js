const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage({viewport:{width:+(process.env.W||2400),height:+(process.env.H||1700)}});
p.on('console',m=>console.log('C',m.text()));p.on('pageerror',e=>console.log('E',e.message));
await p.goto('file://'+__dirname+'/wafer_b.html?'+(process.argv[3]||''));await p.waitForFunction('window.DONE',null,{timeout:180000});
const d=await p.evaluate(()=>document.querySelector('canvas').toDataURL('image/png'));require('fs').writeFileSync(process.argv[2],Buffer.from(d.split(',')[1],'base64'));await b.close()})();

const {chromium}=require('playwright');(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--allow-file-access-from-files']});
const q=process.argv[3]||'';const W=1300,H=1500;const p=await b.newPage({viewport:{width:W,height:H}});
p.on('console',m=>console.log('C',m.text()));p.on('pageerror',e=>console.log('E',e.message));
const out=[];for(const bg of ['%23000000','%23ffffff']){await p.goto('file://'+__dirname+'/br.html?bg='+bg+'&'+q);await p.waitForFunction('window.DONE',null,{timeout:240000});
out.push(await p.evaluate(()=>document.querySelector('canvas').toDataURL('image/png')))}
require('fs').writeFileSync(process.argv[2]+'_k.png',Buffer.from(out[0].split(',')[1],'base64'));require('fs').writeFileSync(process.argv[2]+'_w.png',Buffer.from(out[1].split(',')[1],'base64'));await b.close()})();

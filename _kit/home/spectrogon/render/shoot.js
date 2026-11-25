const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage();
const w=process.argv[2]||1600,h=process.argv[3]||1000;
p.on('console',m=>console.log(m.text()));p.on('pageerror',e=>console.log('ERR',e.message));
await p.goto('file://'+__dirname+'/grating.html?w='+w+'&h='+h);await p.waitForFunction('window.DONE',null,{timeout:600000});
const d=await p.evaluate(()=>document.getElementById('c').toDataURL('image/png'));fs.writeFileSync(__dirname+'/raw.png',Buffer.from(d.split(',')[1],'base64'));await b.close();})();

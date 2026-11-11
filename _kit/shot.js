// Usage: node shot.js file.html out-prefix [width=1440] [height=900] [route=#/] [scrollSteps=0]
// Takes a viewport screenshot after load, then optionally scrolls N viewports taking a screenshot at each. Reports JS errors.
const { chromium } = require('playwright');
(async()=>{const [,,file,pre,w='1440',h='900',route='',steps='0']=process.argv;const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:+w,height:+h}});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('file://'+file+route);await p.waitForTimeout(3500);await p.screenshot({path:pre+'-0.png'});
for(let i=1;i<=+steps;i++){await p.mouse.wheel(0,+h*0.9);await p.waitForTimeout(1600);await p.screenshot({path:pre+'-'+i+'.png'});}
console.log('JS errors:',errs.filter(e=>!/net::ERR|Failed to load resource/.test(e)).slice(0,10));await b.close();})();

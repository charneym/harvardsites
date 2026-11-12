// Usage: node shot.js file.html out-prefix [width=1440] [height=900] [route=#/] [scrollSteps=0]
// Takes a viewport screenshot after load, then optionally scrolls N viewports taking a screenshot at each. Reports JS errors.
const { chromium } = require('playwright');
(async()=>{const [,,file,pre,w='1440',h='900',route='',steps='0']=process.argv;const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:+w,height:+h}});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.goto('file://'+require('path').resolve(file)+(route&&!route.startsWith('#')?'#'+route:route));await p.waitForTimeout(1500);
// settle: wait (max 9s) until no full-screen overlay (loader/transition cover) is still showing
for(let i=0;i<30;i++){const busy=await p.evaluate(()=>[...document.querySelectorAll('body *')].some(e=>{const s=getComputedStyle(e);if(s.position!=='fixed'||s.visibility==='hidden'||+s.opacity<0.3)return false;const r=e.getBoundingClientRect();return r.width>=innerWidth*0.9&&r.height>=innerHeight*0.9&&r.top<innerHeight*0.5&&r.bottom>innerHeight*0.5&&!e.matches('canvas,video')&&(+s.zIndex||0)>=10}));if(!busy)break;await p.waitForTimeout(300)}
await p.waitForTimeout(1200);await p.screenshot({path:pre+'-0.png'});
for(let i=1;i<=+steps;i++){await p.mouse.wheel(0,+h*0.9);await p.waitForTimeout(1600);await p.screenshot({path:pre+'-'+i+'.png'});}
console.log('JS errors:',errs.filter(e=>!/net::ERR|Failed to load resource/.test(e)).slice(0,10));await b.close();})();

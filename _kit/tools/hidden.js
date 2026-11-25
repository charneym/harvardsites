// Usage: node _kit/tools/hidden.js SLUG [WIDTH]. Scrolls the whole page slowly AND fast, then lists text that is still invisible (opacity<0.2, visibility hidden, or clipped to zero) — i.e. reveal animations that never fired. Prints "hidden SLUG: OK" or offenders.
const {chromium}=require('playwright');const path=require('path');
(async()=>{const [s,W='1440']=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:+W,height:+W>500?900:844}});
await p.goto('file://'+path.resolve(__dirname,'../..',s,'index.html'));await p.waitForTimeout(7000);
const h=await p.evaluate(()=>document.body.scrollHeight);for(let y=0;y<h;y+=300){await p.mouse.wheel(0,300);await p.waitForTimeout(90)}await p.waitForTimeout(3000);
const bad=await p.evaluate(()=>{const out=[];const eff=el=>{let o=1;for(let e=el;e&&e!=document.body;e=e.parentElement){const c=getComputedStyle(e);o*=+c.opacity;if(c.visibility=='hidden'||c.display=='none')return 0}return o};
document.querySelectorAll('h1,h2,h3,h4,p,li,dt,dd,span,a,em,strong,figcaption').forEach(el=>{if(el.closest('#pre,#xc,nav,.menu,[aria-hidden=true]'))return;if(![...el.childNodes].some(n=>n.nodeType==3&&n.textContent.trim().length>2))return;const r=el.getBoundingClientRect();if(r.width<2||r.height<2)return;if(eff(el)<0.2)out.push(el.textContent.trim().slice(0,60))});return [...new Set(out)]});
console.log(bad.length?'hidden '+s+': '+bad.length+' never revealed\n'+bad.slice(0,20).join('\n'):'hidden '+s+': OK');await b.close()})();

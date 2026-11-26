// right-edge overflow check (WAVE_BRIEF): 360/390/414, scroll the whole page, any visible text past the viewport?
const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();
for(const w of [360,390,414]){const p=await b.newPage({viewport:{width:w,height:800}});await p.goto('file:///home/user/harvardsites/jelonnek/index.html');await p.waitForTimeout(6000);
const H=await p.evaluate(()=>document.documentElement.scrollHeight);for(let y=0;y<H;y+=600){await p.mouse.wheel(0,600);await p.waitForTimeout(120)}await p.waitForTimeout(800);
const r=await p.evaluate(()=>{const W=document.documentElement.clientWidth,out=[];const tw=document.createTreeWalker(document.body,4);let n;const g=document.createRange();
while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;const e=n.parentElement;const s=getComputedStyle(e);if(s.visibility==='hidden'||+s.opacity===0||e.closest('#pre,[aria-hidden=true] svg'))continue;g.selectNodeContents(n);for(const q of g.getClientRects()){if(q.width>0&&q.right>W+1)out.push(n.nodeValue.trim().slice(0,40)+' '+Math.round(q.right))}}
return {sw:document.documentElement.scrollWidth,cw:W,out:out.slice(0,10)}});console.log(w,JSON.stringify(r));await p.close()}
await b.close()})();

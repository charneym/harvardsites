// node shots.js W H outprefix [mode]  mode: hero | story | loader | full
const {chromium}=require('playwright');
(async()=>{const [W,H,out,mode='hero']=process.argv.slice(2);const b=await chromium.launch();
const p=await b.newPage({viewport:{width:+W,height:+H}});const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///home/user/harvardsites/ailarian/index.html#/');
if(mode==='loader'){for(const t of [300,800,1500,2600]){await p.waitForTimeout(t===300?300:(t-(t===800?300:t===1500?800:1500)));await p.screenshot({path:`${out}-l${t}.png`})}}
else{await p.waitForTimeout(9000);
 if(mode==='hero')await p.screenshot({path:out+'-hero.png'});
 if(mode==='story'){const top=await p.evaluate(()=>{const s=document.getElementById('story');const pa=s.parentElement.classList.contains('pin-spacer')?s.parentElement:s;return {y:pa.getBoundingClientRect().top+scrollY,h:pa.offsetHeight}});
  for(const f of [0.02,0.2,0.3,0.5,0.6,0.85,0.98]){await p.evaluate(y=>{window.scrollTo(0,y)},top.y+f*(top.h-(+H)));await p.waitForTimeout(1600);await p.screenshot({path:`${out}-s${Math.round(f*100)}.png`})}}
 if(mode==='full'){const hh=await p.evaluate(()=>document.documentElement.scrollHeight);for(let y=0,i=0;y<hh;y+=+H,i++){await p.evaluate(y=>window.scrollTo(0,y),y);await p.waitForTimeout(1300);await p.screenshot({path:`${out}-f${String(i).padStart(2,'0')}.png`})}}
}
console.log('errs',errs.length,errs.slice(0,3).join(' | '));await b.close()})();

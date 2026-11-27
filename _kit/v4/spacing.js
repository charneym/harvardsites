// node _kit/v4/spacing.js SLUG [width]  : empty <li>/<p>, and consecutive blocks in #view whose boxes touch (< 8px apart) while one of them is text.
// Prints "spacing SLUG: OK" or the offenders.
const {chromium}=require('playwright');const path=require('path');
(async()=>{const [slug,W='1440']=process.argv.slice(2);const b=await chromium.launch();const p=await b.newPage({viewport:{width:+W,height:900}});
await p.goto('file://'+path.resolve(__dirname,'../..',slug,'index.html'));await p.waitForTimeout(3500);
const H=await p.evaluate(()=>document.body.scrollHeight);for(let y=0;y<H;y+=400){await p.evaluate(y=>{const l=window.V4lenis;if(l)l.scrollTo(y,{immediate:true,force:true});else scrollTo(0,y)},y);await p.waitForTimeout(120)}await p.waitForTimeout(2500);
const bad=await p.evaluate(()=>{const out=[],root=document.getElementById('view')||document.body;
  const name=e=>e.tagName.toLowerCase()+(e.id?'#'+e.id:'')+(e.className&&typeof e.className==='string'?'.'+e.className.trim().split(/\s+/)[0]:'');
  const where=e=>{const s=e.closest('section,[id]');return s?name(s):''};
  root.querySelectorAll('li,p').forEach(e=>{if(e.closest('[aria-hidden=true],.rail'))return;if(!e.textContent.trim()&&!e.querySelector('img,svg,a,input,button'))out.push('empty '+name(e)+' in '+where(e))});
  const BL=/^(P|UL|OL|TABLE|DL|BLOCKQUOTE|FIGURE|DIV|H2|H3|H4)$/;
  root.querySelectorAll('*').forEach(par=>{const cs=getComputedStyle(par);if(/flex|grid/.test(cs.display)||par.closest('[aria-hidden=true],.pinned'))return;
    const kids=[...par.children].filter(k=>BL.test(k.tagName)&&getComputedStyle(k).display!=='none'&&k.offsetHeight>0);
    for(let i=1;i<kids.length;i++){const a=kids[i-1],c=kids[i];const ra=a.getBoundingClientRect(),rc=c.getBoundingClientRect();
      if(/^H[2-4]$/.test(a.tagName))continue; /* a heading and its own text may sit close */const txt=a.tagName==='P'||c.tagName==='P';if(!txt)continue;
      const gap=rc.top-ra.bottom;if(gap<8&&gap>-2)out.push(name(a)+' -> '+name(c)+' gap '+gap.toFixed(1)+'px in '+where(c)+' ("'+a.textContent.trim().slice(-40)+'")')}});
  return [...new Set(out)]});
console.log(bad.length?'spacing '+slug+': '+bad.length+'\n  '+bad.join('\n  '):'spacing '+slug+': OK');await b.close()})();

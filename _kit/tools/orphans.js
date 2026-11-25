// Usage: node _kit/tools/orphans.js SLUG [widths...]  (default 1920 1886 1440 1280 768 390)
// Flags headings (h1-h3) on the home page and on every build-out page (#/more/*) that leave a single word alone on a line
// (a widow/orphan) once laid out. Words are measured with Range rects after reveals settle; story steps that are inactive by
// design are checked too (they are laid out, only transparent). Prints "orphans SLUG: OK" or each offender with its lines.
const {chromium}=require('playwright');const path=require('path');
(async()=>{const [s,...ws]=process.argv.slice(2);const W=ws.length?ws.map(Number):[1920,1886,1440,1280,768,390];
const b=await chromium.launch();const out=[];
const scan=()=>{const res=[];const roots=[...document.querySelectorAll('.bo.on')];const root=roots.length?roots[0]:document.getElementById('view');
  root.querySelectorAll('h1,h2,h3').forEach(h=>{const cs=getComputedStyle(h);if(cs.display==='none'||!h.getClientRects().length)return;
    const words=[];const tw=document.createTreeWalker(h,NodeFilter.SHOW_TEXT);let n;while((n=tw.nextNode())){const t=n.nodeValue;const re=/\S+/g;let m;
      while((m=re.exec(t))){const r=document.createRange();r.setStart(n,m.index);r.setEnd(n,m.index+m[0].length);const rr=[...r.getClientRects()].filter(x=>x.width>0);if(rr.length)words.push([m[0],Math.round(rr[0].top+rr[0].height/2)])}}
    // merge per-letter spans into words: consecutive fragments with no whitespace between belong together (gradient letters)
    const text=h.textContent.replace(/\s+/g,' ').trim();const tokens=text.split(' ');if(tokens.length<3)return;
    // line of each token = line of its first character fragment
    let idx=0,frag=0;const lines=[];const acc=[];for(const tk of tokens){let need=tk.length,y=null;while(need>0&&frag<words.length){if(y===null)y=words[frag][1];need-=words[frag][0].length;frag++}
      acc.push([tk,y])}
    acc.forEach(([tk,y])=>{let L=lines.find(l=>Math.abs(l.y-y)<6);if(!L){L={y,w:[]};lines.push(L)}L.w.push(tk)});
    lines.sort((a,b)=>a.y-b.y);if(lines.length<2)return;
    const lone=lines.filter(l=>l.w.length===1&&l.w[0].replace(/[^\w]/g,'').length>0);
    if(lone.length)res.push(lines.map(l=>l.w.join(' ')).join(' / '))});return res};
for(const w of W){const p=await b.newPage({viewport:{width:w,height:w>500?900:844}});
  await p.goto('file://'+path.resolve(__dirname,'../..',s,'index.html'));await p.waitForTimeout(6000);
  const H=await p.evaluate(()=>document.body.scrollHeight);for(let y=0;y<H;y+=500){await p.mouse.wheel(0,500);await p.waitForTimeout(60)}await p.waitForTimeout(2500);
  for(const r of await p.evaluate(scan))out.push(`${w} home: ${r}`);
  const items=await p.evaluate(()=>window.BuildOut?BuildOut.items().map(i=>i.slug):[]);
  for(const it of items){await p.evaluate(it=>BuildOut.open(it),it);await p.waitForTimeout(3200);for(const r of await p.evaluate(scan))out.push(`${w} #/more/${it}: ${r}`);await p.goBack();await p.waitForTimeout(1800)}
  await p.close()}
console.log(out.length?`orphans ${s}: ${out.length}\n`+[...new Set(out)].join('\n'):`orphans ${s}: OK`);await b.close()})();

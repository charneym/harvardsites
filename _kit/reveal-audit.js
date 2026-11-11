// node reveal-audit.js <file> [route] [w] [h]
// Ground-truth reveal check: scrolls the page with real wheel input and, for every content element,
// compares its state BEFORE it enters the viewport with its state AFTER it has settled in view.
// State = per-node (element + up to 24 descendants) opacity product (up to <body>) and position relative to its
// nearest section. If nothing changed, the element did NOT animate in. Also checks the first screen of
// sub-pages: content there must not be fully visible at t=60ms after load (it must animate in).
const {chromium}=require('playwright');const [,,file,route='',w='1440',h='900']=process.argv;
(async()=>{const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-webgl','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:+w,height:+h}});
await p.addInitScript(()=>{window.__sig=function(){
  const sel='h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,dt,dd,td,th,label,button,a[class],img,picture,figure,canvas,video,[class*=card],[class*=stat],[class*=tile],[class*=eyebrow],[class*=kicker],[class*=label],[class*=tag],[class*=logo],[class*=photo],[class*=portrait],[class*=avatar],[class*=bio],[class*=row],[class*=item]';
  const out=[];const all=document.querySelectorAll(sel);
  const op=e=>{let o=1;for(let x=e;x&&x!==document.body;x=x.parentElement){const s=getComputedStyle(x);o*=+s.opacity;if(s.visibility==='hidden')o=0;const f=s.filter;const m=f&&f.match(/opacity\(([\d.]+)\)/);if(m)o*=+m[1];const cp=s.clipPath;if(cp&&cp!=='none'&&!/inset\(0(px)?( 0(px)?)*\)/.test(cp))o*=0.5}return o};
  for(let i=0;i<all.length;i++){const el=all[i];if(el.closest('nav,header,footer,[aria-hidden=true],.sr-only'))continue;
    const r=el.getBoundingClientRect();if(r.width<2||r.height<2)continue;
    const sec=el.closest('section,main>div,article,[class*=sec]')||document.body;const sr=sec.getBoundingClientRect();
    const nodes=[el,...[...el.querySelectorAll('*')].filter(k=>k.getBoundingClientRect().width>1).slice(0,24)];
    const v=nodes.map(n=>{const nr=n.getBoundingClientRect();let mk=0;for(let x=n.parentElement;x&&x!==sec;x=x.parentElement){const s=getComputedStyle(x);if(s.overflow==='hidden'||s.overflowY==='hidden'||s.overflowY==='clip'||s.overflow==='clip'){const q=x.getBoundingClientRect();if(nr.top>=q.bottom-1||nr.bottom<=q.top+1){mk=1;break}}}
      return [Math.round(op(n)*100),Math.round(nr.top-sr.top),Math.round(nr.left-sr.left),mk]});
    if(!el.__k)el.__k=(window.__kc=(window.__kc||0)+1);out.push({i:el.__k,top:r.top,bot:r.bottom,v,t:(el.innerText||el.alt||el.tagName).trim().replace(/\s+/g,' ').slice(0,50),tag:el.tagName.toLowerCase()+'.'+((typeof el.className==='string'?el.className:'').split(' ')[0])})}
  return out}});
await p.goto('file://'+file+(route?'#'+route:''));
const H=+h;
// first screen of the route: must animate (except the home hero handled by loader) -> compare 60ms vs 5s
await p.waitForTimeout(60);const early=await p.evaluate(()=>window.__sig());
await p.waitForTimeout(5500);const late=await p.evaluate(()=>window.__sig());
const diff=(a,b)=>a.v.length!==b.v.length||a.v.some((x,k)=>Math.abs(x[0]-b.v[k][0])>25||Math.abs(x[1]-b.v[k][1])>5||Math.abs(x[2]-b.v[k][2])>5||x[3]!==b.v[k][3]);
const fails=[];
if(route){const E=new Map(early.map(e=>[e.i,e]));for(const l of late){if(l.top<0||l.top>H)continue;const e=E.get(l.i);if(e&&!diff(e,l)&&l.v[0][0]>50)fails.push(`FIRST-SCREEN @${Math.round(l.top)} ${l.tag} "${l.t}"`)}}
// scroll pass
await p.mouse.move(+w/2,+h/2);
const before=new Map(),done=new Set();let last=-1,stuck=0;
for(let step=0;step<400;step++){
  const sig=await p.evaluate(()=>window.__sig());
  for(const s of sig){
    if(s.top>H*1.08&&s.top<H*2.2&&!before.has(s.i))before.set(s.i,s);
    if(s.top>H*0.05&&s.bot<H*0.95&&before.has(s.i)&&!done.has(s.i)){
      if(!s._seen){}
    }
  }
  // settle check for those in view
  await p.waitForTimeout(1300);
  const sig2=await p.evaluate(()=>window.__sig());
  for(const s of sig2){if(s.top>H*0.05&&s.bot<H*0.9&&before.has(s.i)&&!done.has(s.i)){done.add(s.i);const a=before.get(s.i);if(!diff(a,s)&&s.v[0][0]>50)fails.push(`@scroll ${s.tag} "${s.t}"`)}}
  await p.mouse.wheel(0,H*0.45);await p.waitForTimeout(250);
  const y=await p.evaluate(()=>scrollY);if(y===last){if(++stuck>2)break}else stuck=0;last=y;
}
// dedupe by text
const seen=new Set(),res=fails.filter(f=>{const k=f.replace(/^@\S+ |^FIRST-SCREEN @\d+ /,'');if(seen.has(k))return false;seen.add(k);return true});
console.log(res.length?`NOT ANIMATED (${res.length}) ${file.split('/').pop()} ${route}:\n`+res.slice(0,50).join('\n'):`OK ${file.split('/').pop()} ${route||'home'} (${done.size} checked)`);
await b.close()})();

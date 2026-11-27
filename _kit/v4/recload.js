// node _kit/v4/recload.js SLUG OUTDIR : records a fresh first visit (new context, empty cache, no sessionStorage) as video at 1440x900
// and logs, every animation frame from document start, what is visible: logo, bar, panel, header, H1 lines, lede, hero visual.
// Writes OUTDIR/video.webm, OUTDIR/frames/ (ffmpeg, 30 fps), OUTDIR/log.json and prints the event list (first/last time each thing moves).
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');const {execSync}=require('child_process');
(async()=>{const [slug,out]=process.argv.slice(2);fs.mkdirSync(out+'/frames',{recursive:true});const b=await chromium.launch();
const c=await b.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1,recordVideo:{dir:out,size:{width:1440,height:900}}});
await c.addInitScript(()=>{window.__L=[];const T0=performance.timeOrigin;
  const eff=e=>{if(!e||!e.isConnected)return null;let o=1;for(let x=e;x&&x!==document.documentElement;x=x.parentElement){const s=getComputedStyle(x);if(s.display==='none'||s.visibility==='hidden')return 0;o*=+s.opacity;const f=/opacity\(([\d.]+)/.exec(s.filter);if(f)o*=+f[1]}return +o.toFixed(2)};
  const top=e=>e&&e.isConnected?Math.round(e.getBoundingClientRect().top):null;
  function f(){const q=s=>document.querySelector(s);const pre=q('#pre');
    const logo=q('#pre [data-v4-logo] > *')||q('#pre .mk');const bar=q('#pre .bar');const hdr=q('#hdr');
    const h1=q('[data-v4-hero] h1, #view .hero h1, #pageTitle');const ln=h1&&h1.querySelector('.ln');const lede=q('[data-v4-hero] .lede, #view .hero .lede, #view .hero p');
    const vis=q('[data-v4-photo]')||q('#field');
    window.__L.push({t:Math.round(performance.now()),pre:pre&&pre.isConnected?Math.round(pre.getBoundingClientRect().bottom):0,preO:eff(pre),logo:eff(logo),logoY:top(logo),bar:eff(bar),hdr:hdr?Math.round(hdr.getBoundingClientRect().bottom):null,
      h1:ln?eff(ln)*(ln.getBoundingClientRect().top<innerHeight?1:0):eff(h1),h1y:ln?top(ln):top(h1),lede:eff(lede),vis:eff(vis)});
    if(performance.now()<3600)requestAnimationFrame(f)}
  requestAnimationFrame(f)});
const p=await c.newPage();await p.route(/^https?:/,r=>r.abort());
await p.goto('file://'+path.resolve(__dirname,'../..',slug,'index.html'));await p.waitForTimeout(3700);
const L=await p.evaluate(()=>window.__L);const v=p.video();await c.close();const vp=await v.path();fs.renameSync(vp,out+'/video.webm');
fs.writeFileSync(out+'/log.json',JSON.stringify(L));
try{execSync(`ffmpeg -loglevel error -y -i ${out}/video.webm -vf fps=30 ${out}/frames/f%03d.png`)}catch(e){console.log('ffmpeg',e.message)}
/* events: when each signal first starts changing and when it settles */
const ev=(k,fn)=>{let s=null,e=null;for(let i=1;i<L.length;i++){const a=fn(L[i-1]),bb=fn(L[i]);if(a!==bb&&a!=null&&bb!=null){if(s==null)s=L[i-1].t;e=L[i].t}}return [k,s,e]};
const E=[ev('logo out (opacity)',r=>r.logo),ev('logo moves (y)',r=>r.logoY),ev('bar out',r=>r.bar),ev('panel lift (bottom edge)',r=>r.pre),ev('header in',r=>r.hdr),ev('H1 lines in',r=>r.h1),ev('lede in',r=>r.lede),ev('hero visual in',r=>r.vis)];
console.log(slug+' (ms from navigation start; first change -> settled)');E.forEach(([k,s,e])=>console.log('  '+k.padEnd(26)+(s==null?'—':s+' -> '+e)));await b.close()})();

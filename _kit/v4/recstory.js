// node _kit/v4/recstory.js SLUG OUTDIR : fresh context (empty cache), records video while wheel-scrolling through the whole pinned story
// in small steps over ~6 s, logs the effective opacity of every story image on every animation frame, extracts 30 fps frames, and
// reports per image the opacity runs (rise / fall / hold) and any 1 -> 0 -> 1 flash. Exit 1 on a flash.
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');const {execSync}=require('child_process');
(async()=>{const [slug,out]=process.argv.slice(2);fs.mkdirSync(out+'/frames',{recursive:true});const b=await chromium.launch();
const c=await b.newContext({viewport:{width:1440,height:900},deviceScaleFactor:1,recordVideo:{dir:out,size:{width:1440,height:900}}});
const p=await c.newPage();await p.route(/^https?:/,r=>r.abort());
/* IMGDELAY=ms: every image request waits that long, like a first visit over a real network (file:// otherwise loads instantly) */
const DL=+(process.env.IMGDELAY||0);if(DL)await p.route(/\.(webp|jpe?g|png|avif)(\?|$)/i,async r=>{await new Promise(z=>setTimeout(z,DL));await r.continue()});
await p.goto('file://'+path.resolve(__dirname,'../..',slug,'index.html'));await p.waitForTimeout(+(process.env.WAIT||4200));
const pin=await p.evaluate(()=>{const s=ScrollTrigger.getAll().find(s=>s.pin);return {start:s.start,end:s.end}});
/* FROMTOP=1: a real first pass, wheeling down from the top of the page straight after the loader */
const y0=process.env.FROMTOP?0:Math.max(0,pin.start-900);await p.evaluate(y=>{window.V4lenis.scrollTo(y,{immediate:true,force:true})},y0);await p.waitForTimeout(800);
await p.evaluate(()=>{window.__S=[];const imgs=[...document.querySelectorAll('[data-v4-story] .step img')];const t0=performance.now();
  const eff=e=>{let o=1;for(let x=e;x&&x!==document.documentElement;x=x.parentElement){const s=getComputedStyle(x);if(s.display==='none'||s.visibility==='hidden')return 0;o*=+s.opacity}return +o.toFixed(3)};
  (function f(){window.__S.push([Math.round(performance.now()-t0),Math.round(scrollY),imgs.map(eff),imgs.map(i=>i.complete&&i.naturalWidth>0?1:0)]);if(performance.now()-t0<16000)requestAnimationFrame(f)})()});
const t0=Date.now();await p.mouse.move(700,450);const total=pin.end-y0+700,steps=process.env.FROMTOP?170:120;for(let i=0;i<steps;i++){await p.mouse.wheel(0,total/steps);await p.waitForTimeout(50)}
await p.waitForTimeout(+(process.env.TAIL||2000));const S=await p.evaluate(()=>window.__S);const v=p.video();await c.close();fs.renameSync(await v.path(),out+'/video.webm');
fs.writeFileSync(out+'/opacity.json',JSON.stringify(S));
try{execSync(`ffmpeg -loglevel error -y -i ${out}/video.webm -vf fps=30 ${out}/frames/f%03d.png`)}catch(e){console.log('ffmpeg',e.message)}
const n=S[0][2].length;let flash=0;const lines=[];
/* a blank: the photo is shown (opacity > .1) before its pixels exist */
let blank=0;S.forEach(r=>r[2].forEach((o,k)=>{if(o>.1&&!r[3][k])blank++}));
for(let k=0;k<n;k++){const seq=S.map(r=>[r[0],r[2][k],r[3][k]]);const runs=[];let dir=0,st=seq[0];
  for(let i=1;i<seq.length;i++){const d=Math.sign(+(seq[i][1]-seq[i-1][1]).toFixed(3));if(d!==0&&d!==dir){if(dir!==0)runs.push([dir>0?'rise':'fall',st[0],seq[i-1][0],st[1],seq[i-1][1]]);dir=d;st=seq[i-1]}}
  if(dir!==0)runs.push([dir>0?'rise':'fall',st[0],seq[seq.length-1][0],st[1],seq[seq.length-1][1]]);
  /* a flash: a fall of >=.3 followed within 600 ms by a rise of >=.3 (or a rise then fall then rise) */
  for(let i=0;i+1<runs.length;i++){const a=runs[i],c2=runs[i+1];if(a[0]==='fall'&&c2[0]==='rise'&&a[3]-a[4]>=.3&&c2[4]-c2[3]>=.3&&c2[1]-a[2]<600)flash++}
  lines.push(`img${k+1} (loaded at ${(seq.find(r=>r[2])||[null])[0]} ms): `+(runs.length?runs.map(r=>`${r[0]} ${r[3]}->${r[4]} @${r[1]}-${r[2]}ms`).join(', '):'no change'))}
console.log(slug+' story opacity runs per image ('+S.length+' frames'+(DL?', images delayed '+DL+' ms':'')+'):\n  '+lines.join('\n  ')+'\n  frames with a shown-but-unloaded photo: '+blank+'\n'+(flash||blank?'FAIL '+flash+' flash(es) (fall then rise), '+blank+' blank frame(s)':'OK no flash: every image is monotonic per step change, never shown before it has loaded'));
await b.close();process.exit(flash||blank?1:0)})();

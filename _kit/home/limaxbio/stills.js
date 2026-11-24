/* Renders the static fallbacks of the gel shader (makeGel in field.js), used when WebGL is unavailable or for reduced motion:
   gel-still.webp, the full hero frame (calm ground at left/bottom/top baked in), 2400x1500; gel-panel.webp, the Technology panel. Run: node _kit/home/limaxbio/stills.js */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const src=fs.readFileSync(path.join(__dirname,'field.js'),'utf8');const mk=src.slice(src.indexOf('function makeGel'),src.indexOf('var field=('));
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:1200,height:750}});p.on('pageerror',e=>console.log('ERR',e.message));
await p.setContent('<html><body style="margin:0"><canvas id="c" width="2400" height="1500"></canvas><script>'+mk+'</script></body></html>');
const url=await p.evaluate(()=>{const c=document.getElementById('c');const g=makeGel(c,{dark:true});g.draw(14,{IN:1,mob:false});return c.toDataURL('image/png')});
const tmp=path.join(__dirname,'.gel-still.png');fs.writeFileSync(tmp,Buffer.from(url.split(',')[1],'base64'));
require('child_process').execFileSync('python3',['-c',"from PIL import Image;import sys;Image.open(sys.argv[1]).convert('RGB').save(sys.argv[2],quality=86,method=6)",tmp,path.join(__dirname,'gel-still.webp')]);
fs.unlinkSync(tmp);console.log('wrote gel-still.webp');
/* the Technology panel's still: the same gel framed closer, vignetted, 1500x1200 */
const u2=await p.evaluate(()=>{const o=document.getElementById('c');const c=o.cloneNode();c.width=1500;c.height=1200;o.replaceWith(c);const g=makeGel(c,{zoom:1.15,off:[3.1,1.7],vig:true});g.draw(31,{IN:1});return c.toDataURL('image/png')});
fs.writeFileSync(tmp,Buffer.from(u2.split(',')[1],'base64'));
require('child_process').execFileSync('python3',['-c',"from PIL import Image;import sys;Image.open(sys.argv[1]).convert('RGB').save(sys.argv[2],quality=86,method=6)",tmp,path.join(__dirname,'gel-panel.webp')]);
fs.unlinkSync(tmp);console.log('wrote gel-panel.webp');await b.close()})();

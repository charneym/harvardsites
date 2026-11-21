/* Offline render of the Cascade Metrix hero (HOME_BRIEF update option c, rule DP: a crafted render of the mechanism).
   Subject: the AutoPlexer principle as CMX describes it (cascademetrix.com/solution; NIH RePORTER 2R44GM146498 abstract):
   blood is drawn automatically from the patient's central venous line through a closed loop, past whole-blood sensors
   (lactate, glucose, hematocrit), and returned, so no blood is lost. Shown as a generic clear moulded flow cell with a
   serpentine channel over three electrode wells, fed and drained by two catheter lines. It is NOT a depiction of the
   company's actual prototype. Ground = page ink #0a1226, so the art has no edge against the page (DJ).
   Output: render.png. Run: node _kit/home/cascade-metrix/render.js [out] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=2600,H=2000;
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.05;
rn.outputColorSpace=THREE.SRGBColorSpace;document.body.appendChild(rn.domElement);
const INK=new THREE.Color('#0a1226');
const sc=new THREE.Scene();sc.background=INK;
/* studio environment: long softboxes in a dark room so clear acrylic picks up clean highlights */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x04070f);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(18,.2,5,0xfff6ee,5.5,-2,12,3);box(.2,5,16,0x9fb6e0,1.6,14,3,-2);box(.2,4,12,0xffd0c8,.7,-14,2.5,-1);box(24,5,.2,0xe8eef8,1.1,0,6,-16);
sc.environment=pm.fromScene(env,0.03).texture;
const key=new THREE.DirectionalLight(0xfff4ea,1.4);key.position.set(-4,10,6);sc.add(key);

/* ---------- substrate: dark glass-epoxy board with gold electrodes and traces (canvas texture) ---------- */
const BW=6.6,BD=3.3;            /* board size in world units */
const N=4096,NH=Math.round(N*BD/BW);const cv=document.createElement('canvas');cv.width=N;cv.height=NH;const g=cv.getContext('2d');
const px=x=>(x/BW+.5)*N, pz=z=>(z/BD+.5)*NH, S=N/BW;
g.fillStyle='#1a2130';g.fillRect(0,0,N,NH);
/* faint woven glass texture */
g.globalAlpha=.05;g.strokeStyle='#9aa6c0';g.lineWidth=2;for(let i=0;i<N;i+=9){g.beginPath();g.moveTo(i,0);g.lineTo(i,NH);g.stroke()}for(let j=0;j<NH;j+=9){g.beginPath();g.moveTo(0,j);g.lineTo(N,j);g.stroke()}g.globalAlpha=1;
const GOLD='#d9b26a',GOLDD='#a9813f';
const WELLS=[-1.55,0,1.55];  /* sensor wells along x, at z=-.15 */
const WZ=0;
/* edge contacts along the back edge */
const PADS=[];for(let i=0;i<9;i++){const x=-2.2+i*.55;PADS.push(x);const gr=g.createLinearGradient(0,pz(-1.47),0,pz(-1.17));gr.addColorStop(0,GOLD);gr.addColorStop(1,GOLDD);g.fillStyle=gr;g.fillRect(px(x)-S*.15,pz(-1.47),S*.3,S*.3)}
/* each well: working electrode disc, reference arc, counter arc, with traces to three contacts */
g.lineCap='round';
WELLS.forEach((wx,k)=>{const cx=px(wx),cz=pz(WZ),r=S*.2;
  const tgt=[PADS[k*3],PADS[k*3+1],PADS[k*3+2]];
  const starts=[[cx,cz],[cx-r*1.35,cz-r*.6],[cx+r*1.35,cz-r*.6]];
  g.strokeStyle=GOLDD;g.lineWidth=S*.035;
  starts.forEach((s,i)=>{const tx=px(tgt[i]),ty=pz(-1.2);g.beginPath();g.moveTo(s[0],s[1]);g.lineTo(s[0],pz(-.62)-i*S*.05);g.lineTo(tx,pz(-.98));g.lineTo(tx,ty);g.stroke()});
  const rg=g.createRadialGradient(cx-r*.3,cz-r*.3,r*.1,cx,cz,r);rg.addColorStop(0,'#f1d79a');rg.addColorStop(1,GOLDD);g.fillStyle=rg;g.beginPath();g.arc(cx,cz,r,0,Math.PI*2);g.fill();
  g.strokeStyle='#c8ccd6';g.lineWidth=S*.05;g.beginPath();g.arc(cx,cz,r*1.45,Math.PI*1.05,Math.PI*1.45);g.stroke();
  g.strokeStyle=GOLD;g.beginPath();g.arc(cx,cz,r*1.45,Math.PI*1.55,Math.PI*1.95);g.stroke();
});
/* fiducials and fine silkscreen ticks */
g.strokeStyle='rgba(220,226,240,.35)';g.lineWidth=5;[[-3.0,1.35],[3.0,1.35],[3.0,-1.35]].forEach(([x,z])=>{g.beginPath();g.arc(px(x),pz(z),S*.06,0,Math.PI*2);g.stroke()});
const tex=new THREE.CanvasTexture(cv);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=16;
const rough=document.createElement('canvas');rough.width=N;rough.height=NH;const gr2=rough.getContext('2d');gr2.drawImage(cv,0,0);
const board=new THREE.Mesh(new RoundedBoxGeometry(BW,.16,BD,4,.05),[0,0,0,0,0,0].map((_,i)=>new THREE.MeshPhysicalMaterial({color:i===2?0xffffff:0x161c28,map:i===2?tex:null,roughness:.42,metalness:.15,clearcoat:.6,clearcoatRoughness:.25})));
/* RoundedBoxGeometry has one group; use the textured material for everything */
board.material=new THREE.MeshPhysicalMaterial({map:tex,roughness:.38,metalness:.2,clearcoat:.7,clearcoatRoughness:.22});
board.position.y=-.08;
/* UVs of RoundedBoxGeometry top face map 0..1 across x/z; flip v so z grows down the canvas */
tex.flipY=true;
const dev=new THREE.Group();dev.add(board);

/* ---------- clear moulded flow cell on top of the board ---------- */
const CW=5.6,CH=.62,CD=1.95,CZ=.05;
const cellM=new THREE.MeshPhysicalMaterial({color:0xffffff,transmission:1,thickness:.6,roughness:.06,ior:1.49,clearcoat:1,clearcoatRoughness:.04,attenuationColor:new THREE.Color('#dfe8f6'),attenuationDistance:6,specularIntensity:1});
const cell=new THREE.Mesh(new RoundedBoxGeometry(CW,CH,CD,6,.12),cellM);cell.position.set(0,CH/2+.002,CZ);dev.add(cell);

/* the blood channel: in from the left port, serpentine over the three wells, back out to the left port */
const BL=new THREE.MeshPhysicalMaterial({color:new THREE.Color('#8e0c18'),roughness:.18,clearcoat:1,clearcoatRoughness:.08,sheen:.4,sheenColor:new THREE.Color('#ff6a6a'),emissive:new THREE.Color('#2a0205')});
const y0=.2;
const pts=[[-2.55,-.62],[-2.0,-.62],[-1.85,-.6],[-1.62,-.38],[-1.55,0],[-1.2,.06],[0,0],[1.2,-.04],[1.55,0],[2.05,.05],[2.3,.3],[2.1,.6],[1.6,.66],[0,.68],[-2.0,.66],[-2.55,.66]];
const curve=new THREE.CatmullRomCurve3(pts.map(([x,z])=>new THREE.Vector3(x,y0,z)),false,'catmullrom',.15);
dev.add(new THREE.Mesh(new THREE.TubeGeometry(curve,600,.075,24,false),BL));
/* sensor windows: shallow clear wells over each electrode, rimmed by the moulding */
WELLS.forEach(wx=>{const ring=new THREE.Mesh(new THREE.TorusGeometry(.32,.022,16,96),new THREE.MeshPhysicalMaterial({color:0xcfd8ea,roughness:.15,metalness:.0,transmission:.6,thickness:.2,clearcoat:1}));ring.rotation.x=-Math.PI/2;ring.position.set(wx,CH+.004,WZ);dev.add(ring);
  const pool=new THREE.Mesh(new THREE.CylinderGeometry(.2,.2,.1,64),BL);pool.position.set(wx,.06,WZ);dev.add(pool)});
/* luer ports on the left end */
const portM=new THREE.MeshPhysicalMaterial({color:0xeef2f8,transmission:.85,thickness:.4,roughness:.12,ior:1.5,clearcoat:1});
[-.62,.66].forEach(z=>{const p=new THREE.Mesh(new THREE.CylinderGeometry(.17,.2,.5,48),portM);p.rotation.z=Math.PI/2;p.position.set(-CW/2-.2,y0,z);dev.add(p);
  const core=new THREE.Mesh(new THREE.CylinderGeometry(.08,.08,.55,32),BL);core.rotation.z=Math.PI/2;core.position.set(-CW/2-.2,y0,z);dev.add(core)});
/* the two catheter lines: clear PVC tube with blood inside, sweeping away to the back left and dissolving into the ground */
const tubeM=new THREE.MeshPhysicalMaterial({color:0xffffff,transmission:1,thickness:.15,roughness:.1,ior:1.45,clearcoat:1,clearcoatRoughness:.05});
function line(z,dz){const c=new THREE.CatmullRomCurve3([[-CW/2-.4,y0,z],[-CW/2-1.0,y0-.02,z+dz*.15],[-CW/2-1.6,y0-.05,z+dz*.7-.5],[-CW/2-1.9,y0-.08,z+dz*1.3-1.4],[-CW/2-1.95,y0-.1,z+dz*1.8-2.6]].map(a=>new THREE.Vector3(...a)),false,'centripetal');
  dev.add(new THREE.Mesh(new THREE.TubeGeometry(c,300,.12,32,false),tubeM));dev.add(new THREE.Mesh(new THREE.TubeGeometry(c,300,.07,24,false),BL))}
line(-.62,-.35);line(.66,.25);
/* soft contact shadow under the board */
const sh=document.createElement('canvas');sh.width=sh.height=512;const sg=sh.getContext('2d');const sr=sg.createRadialGradient(256,256,20,256,256,256);sr.addColorStop(0,'rgba(0,0,0,.75)');sr.addColorStop(1,'rgba(0,0,0,0)');sg.fillStyle=sr;sg.fillRect(0,0,512,512);
const shm=new THREE.Mesh(new THREE.PlaneGeometry(BW*1.5,BD*1.7),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(sh),transparent:true,depthWrite:false}));shm.rotation.x=-Math.PI/2;shm.position.y=-.17;dev.add(shm);
dev.rotation.y=.42;dev.position.set(1.1,0,.2);sc.add(dev);
sc.fog=new THREE.Fog(INK,15.5,24);
const cam=new THREE.PerspectiveCamera(24,W/H,.1,100);cam.position.set(0,10.2,12.6);cam.lookAt(1.0,-.3,0);
rn.render(sc,cam);rn.render(sc,cam);
window.__done=rn.domElement.toDataURL('image/png');
</script></body></html>`;
(async()=>{
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:800,height:600}});
p.on('console',m=>console.log('page:',m.text()));p.on('pageerror',e=>console.log('err',e.message));
await p.route('http://r.local/**',async r=>{const u=new URL(r.request().url());const f=path.join(K,'node_modules',decodeURIComponent(u.pathname));
 if(u.pathname==='/index.html')return r.fulfill({body:PAGE,contentType:'text/html'});
 r.fulfill({body:fs.readFileSync(f),contentType:'text/javascript'})});
await p.goto('http://r.local/index.html');
await p.waitForFunction(()=>window.__done,null,{timeout:900000});
const out=process.argv[2]||path.join(__dirname,'render.png');
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
console.log('wrote',out);await b.close();})();

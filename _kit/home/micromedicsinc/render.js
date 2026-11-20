/* Offline render of the Micromedics hero (HOME_BRIEF update option c, rule DP: a crafted render of the real mechanism).
   Subject: the mPancreas principle as Micromedics describes it (NSF SBIR award 2537342 abstract; TechBriefs 2025 entry):
   human islets held in a central chamber on a thin permeable membrane, fed by precisely controlled microfluidic channels
   that branch like a capillary bed (the "biomimetic" design), with on-chip biosensor electrodes (glucose, oxygen,
   lactate). A clear moulded chip on the page's own slate ink, so the art has no edge against the page (DJ). It is a
   generic lab chip, not a depiction of their actual prototype. Output: render.png. Run: node _kit/home/micromedicsinc/render.js [out] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=2700,H=2200;
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.0;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=true;rn.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();sc.background=new THREE.Color('#0b1215');
/* studio environment: softboxes in a dark room, so clear plastic picks up long clean highlights */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x05090b);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(16,.2,6,0xfff7ef,5.0,-3,12,3);box(.2,5,16,0x7fd3c9,1.8,14,3,-2);box(.2,4,12,0x8aa8c8,1.0,-14,2.5,-1);box(24,6,.2,0xeef3f2,1.2,0,6,-16);
sc.environment=pm.fromScene(env,0.02).texture;
/* ---------- the chip artwork, drawn at high resolution on the chip's mid-plane ---------- */
const N=4096;const cv=document.createElement('canvas');cv.width=N;cv.height=N;const g=cv.getContext('2d');g.clearRect(0,0,N,N);
const C=[N/2,N/2],RC=N*.25;   /* chamber centre and radius in texture px */
const MED='#c8566a',MEDL='#e48a95',OUT='#b4485e';
let seed=7;const R=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
const SEGS=[];function seg(a,b,w,col){SEGS.push([a,b,w,col])}
function flush(){g.lineCap='round';[[1.16,'#5e1c2b'],[1,null],[.3,'rgba(255,214,220,.22)']].forEach(([k,c])=>SEGS.forEach(([a,b,w,col])=>{g.strokeStyle=c||col;g.lineWidth=w*k;g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()}))}
/* a bifurcating tree from a port to the chamber rim: each generation halves toward the chamber, Murray-like widths */
function tree(port,ang0,ang1,col){
  const leaves=16;const tg=[];for(let i=0;i<leaves;i++){const a=ang0+(ang1-ang0)*(i+.5)/leaves;tg.push([C[0]+Math.cos(a)*RC,C[1]+Math.sin(a)*RC])}
  function rec(lo,hi,from,w,depth){
    const sub=tg.slice(lo,hi);const cx=sub.reduce((s,p)=>s+p[0],0)/sub.length,cy=sub.reduce((s,p)=>s+p[1],0)/sub.length;
    if(hi-lo===1){seg(from,tg[lo],w,col);return}
    const k=depth===0?.42:.5;const node=[from[0]+(cx-from[0])*k,from[1]+(cy-from[1])*k];
    seg(from,node,w,col);const m=(lo+hi)>>1;rec(lo,m,node,w*.79,depth+1);rec(m,hi,node,w*.79,depth+1)}
  rec(0,leaves,port,92,0)}
const PIN=[N*.1,N*.1],POUT=[N*.9,N*.9];
tree(PIN,Math.PI*1.02,Math.PI*1.48,MED);
tree(POUT,Math.PI*.02,Math.PI*.48,OUT);
flush();
/* the perfusion ring just outside the chamber wall */
g.strokeStyle='#c96a7a';g.lineWidth=30;g.beginPath();g.arc(C[0],C[1],RC+4,0,Math.PI*2);g.stroke();
/* the membrane seat under the chamber: a frosted disc with a fine woven texture */
g.save();g.beginPath();g.arc(C[0],C[1],RC-14,0,Math.PI*2);g.clip();
const mg=g.createRadialGradient(C[0]-RC*.2,C[1]-RC*.25,RC*.1,C[0],C[1],RC);mg.addColorStop(0,'rgba(206,188,182,.8)');mg.addColorStop(1,'rgba(128,112,110,.66)');g.fillStyle=mg;g.fillRect(C[0]-RC,C[1]-RC,RC*2,RC*2);
g.globalAlpha=.12;g.strokeStyle='#5a504b';g.lineWidth=2;for(let i=-RC;i<RC;i+=11){g.beginPath();g.moveTo(C[0]+i,C[1]-RC);g.lineTo(C[0]+i+RC*.3,C[1]+RC);g.stroke()}
g.globalAlpha=1;g.restore();
g.strokeStyle='rgba(255,255,255,.35)';g.lineWidth=8;g.beginPath();g.arc(C[0],C[1],RC-14,0,Math.PI*2);g.stroke();
/* biosensor electrodes: three gold pads in the outlet channel's path, traces to edge contacts */
const GOLD='#c99a3e';
[[0,'G'],[1,'O'],[2,'L']].forEach(([i])=>{const x=N*.6+i*150,y=N*.83-i*150;
  g.fillStyle=GOLD;g.beginPath();g.arc(x,y,46,0,Math.PI*2);g.fill();
  g.strokeStyle=GOLD;g.lineWidth=14;g.beginPath();g.moveTo(x,y);g.lineTo(x-210+i*40,N*.955);g.lineTo(x-210+i*40,N*.985);g.stroke();
  g.fillRect(x-250+i*40,N*.955,80,140)});
/* alignment crosses near the corners, as on a real moulded part */
g.fillStyle='rgba(255,255,255,.3)';[[N*.06,N*.94],[N*.94,N*.06]].forEach(p=>{g.fillRect(p[0]-50,p[1]-4,100,8);g.fillRect(p[0]-4,p[1]-50,8,100)});
const tex=new THREE.CanvasTexture(cv);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=16;
/* ---------- the chip: a clear moulded slab, 1 unit = 10 mm ---------- */
const L=6,T=.36,chip=new THREE.Group();sc.add(chip);
const body=new THREE.Mesh(new RoundedBoxGeometry(L,T,L,10,.12),new THREE.MeshPhysicalMaterial({color:0xe8f0f0,metalness:0,roughness:.025,transparent:true,opacity:.07,clearcoat:1,clearcoatRoughness:.02,ior:1.53,specularIntensity:1,envMapIntensity:2.4,depthWrite:false}));
chip.add(body);
const art=new THREE.Mesh(new THREE.PlaneGeometry(L*.97,L*.97),new THREE.MeshStandardMaterial({map:tex,emissiveMap:tex,emissive:0xffffff,emissiveIntensity:.12,transparent:true,roughness:.5,metalness:0,depthWrite:false,envMapIntensity:.2}));
art.rotation.x=-Math.PI/2;art.position.y=-.06;art.renderOrder=-1;chip.add(art);
const u2w=(u,v)=>[(u/N-.5)*L*.97,(v/N-.5)*L*.97];
/* the chamber: a clear cylindrical well of pale culture medium above the membrane */
const rcw=RC/N*L*.97;
const well=new THREE.Mesh(new THREE.CylinderGeometry(rcw*.985,rcw*.985,T*.8,160,1,true),new THREE.MeshPhysicalMaterial({color:0xf3e6e6,transparent:true,opacity:.18,roughness:.04,clearcoat:1,side:THREE.DoubleSide,depthWrite:false,envMapIntensity:1.6}));
well.position.y=.08;chip.add(well);
const medium=new THREE.Mesh(new THREE.CylinderGeometry(rcw*.97,rcw*.97,T*.6,160),new THREE.MeshPhysicalMaterial({color:0xf2c9cc,transparent:true,opacity:.2,roughness:.08,clearcoat:.6,depthWrite:false,envMapIntensity:.8}));
medium.position.y=.04;medium.renderOrder=2;chip.add(medium);
/* the islets: lumpy spheroids of cells, 50-400 um in life, cream to amber, resting on the membrane */
const isl=new THREE.MeshPhysicalMaterial({color:0xd9ab6e,roughness:.42,sheen:.6,sheenColor:new THREE.Color('#fff2dc'),sheenRoughness:.4,clearcoat:.35,clearcoatRoughness:.3,transmission:.12,thickness:.2,envMapIntensity:.9});
const isl2=isl.clone();isl2.color=new THREE.Color(0xc48a4c);
function islet(r){const geo=new THREE.IcosahedronGeometry(r,9);const p=geo.attributes.position,v=new THREE.Vector3();const ph=[R()*9,R()*9,R()*9];
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const n=v.clone().normalize();
    /* cobbled surface: many small cell bumps on a gently irregular body */
    const b=.06*Math.sin(n.x*7+ph[0])*Math.sin(n.y*7+ph[1])*Math.sin(n.z*7+ph[2])+.03*Math.abs(Math.sin(n.x*23+ph[1])*Math.sin(n.y*21+ph[2])*Math.sin(n.z*22+ph[0]))+.018*Math.abs(Math.sin(n.x*41+ph[2])*Math.sin(n.y*39+ph[0])*Math.sin(n.z*43+ph[1]));
    v.copy(n.multiplyScalar(r*(1+b)));v.y*=.86;p.setXYZ(i,v.x,v.y,v.z)}
  geo.computeVertexNormals();return geo}
const placed=[];let tries=0;
while(placed.length<58&&tries<6000){tries++;const r=.05+Math.pow(R(),1.8)*.11;const a=R()*Math.PI*2,d=Math.sqrt(R())*(rcw-.12-r);
  const x=Math.cos(a)*d,z=Math.sin(a)*d;if(placed.some(q=>Math.hypot(q[0]-x,q[1]-z)<q[2]+r+.025))continue;placed.push([x,z,r]);
  const m=new THREE.Mesh(islet(r),R()<.4?isl2:isl);m.position.set(x,-.05+r*.82,z);m.rotation.set(R()*6,R()*6,R()*6);m.castShadow=true;m.receiveShadow=true;chip.add(m)}
/* ports: tubing fittings over the inlet and outlet */
function port(u,v){const [x,z]=u2w(u,v);
  const f=new THREE.Mesh(new THREE.CylinderGeometry(.2,.23,.32,96),new THREE.MeshPhysicalMaterial({color:0xdfe7e6,transparent:true,opacity:.32,roughness:.06,clearcoat:1,depthWrite:false,envMapIntensity:2}));f.position.set(x,T/2+.16,z);chip.add(f);
  const bore=new THREE.Mesh(new THREE.CylinderGeometry(.085,.085,.5,64),new THREE.MeshPhysicalMaterial({color:0xc8566a,roughness:.15,clearcoat:1,envMapIntensity:.6}));bore.position.set(x,T/2+.06,z);chip.add(bore)}
port(PIN[0],PIN[1]);port(POUT[0],POUT[1]);
/* bench: only a soft shadow shows */
const fl=new THREE.Mesh(new THREE.PlaneGeometry(80,80),new THREE.ShadowMaterial({opacity:.35}));fl.rotation.x=-Math.PI/2;fl.position.y=-T/2-.002;fl.receiveShadow=true;sc.add(fl);
/* light: a warm soft key from upper left, a teal rim from the back right, a cool fill */
const key=new THREE.SpotLight(0xfff3ea,190,40,.4,1,1.4);key.position.set(-3,11,4);key.target=chip;key.castShadow=true;key.shadow.mapSize.set(4096,4096);key.shadow.radius=6;key.shadow.bias=-.0002;
Object.assign(key.shadow.camera,{left:-8,right:8,top:8,bottom:-8});sc.add(key);
const rim=new THREE.SpotLight(0x5cc6bb,120,34,.6,1);rim.position.set(9,4,-8);rim.target=chip;sc.add(rim);
const fill=new THREE.SpotLight(0x6f8fb0,60,34,.7,1);fill.position.set(-9,3.5,-3);fill.target=chip;sc.add(fill);
chip.rotation.y=-.62;
const cam=new THREE.PerspectiveCamera(25,W/H,.1,100);cam.position.set(0,11.6,12.4);cam.lookAt(0,-.25,0);
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

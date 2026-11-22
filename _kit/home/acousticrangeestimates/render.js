/* Offline render of the Acoustic Range Estimates hero (HOME_BRIEF update option c: a crafted render of the real product).
   Subject: the thermoAcoustic Range Verifier (tARV) as described on acousticrangeestimates.com/tarv and in the Red Journal
   2026 paper: a black receiver housing (150 x 95 x 110 mm, 0.7 kg) clamped around a wireless ultrasound probe, with six
   sonar receivers packed around the probe's imaging face, a hexagonal radiation-detector window and a side mount.
   The probe is drawn generic and unbranded (no third-party marks). Rendered with ALPHA (no ground: DJ/DP).
   Run: node _kit/home/acousticrangeestimates/render.js [out.png] [view] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=1500,H=1800;
const out=process.argv[2]||path.join(__dirname,'render.png');
const PAGE=`<!doctype html><html><body style="margin:0;background:transparent">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,premultipliedAlpha:false});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,0);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=.92;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=true;document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
/* studio environment: a soft room plus a cool blue strip (the logo blue) for the rim reflections */
const pm=new THREE.PMREMGenerator(rn);const env=new RoomEnvironment();
const strip=new THREE.Mesh(new THREE.BoxGeometry(1,8,14),new THREE.MeshBasicMaterial({color:new THREE.Color(0x2a6cff).multiplyScalar(2.5)}));strip.position.set(9,2,-6);env.add(strip);
const strip2=new THREE.Mesh(new THREE.BoxGeometry(14,.4,6),new THREE.MeshBasicMaterial({color:new THREE.Color(0xfff4e6).multiplyScalar(6)}));strip2.position.set(-3,9,4);env.add(strip2);
sc.environment=pm.fromScene(env,0.02).texture;sc.environmentIntensity=.55;

/* procedural micro texture: fine grain for the printed/blasted black housing */
function noiseTex(n,amp,base){const c=document.createElement('canvas');c.width=c.height=n;const x=c.getContext('2d'),d=x.createImageData(n,n);
  for(let i=0;i<n*n;i++){const v=base+(Math.random()-.5)*amp;d.data[i*4]=d.data[i*4+1]=d.data[i*4+2]=v;d.data[i*4+3]=255}
  x.putImageData(d,0,0);const t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(3,3);return t}
const grain=noiseTex(512,60,128);
const M={
 shell:new THREE.MeshPhysicalMaterial({color:0xcfc9bc,roughness:.46,clearcoat:.35,clearcoatRoughness:.3,sheen:.2,sheenColor:0xffffff}),
 black:new THREE.MeshPhysicalMaterial({color:0x17181c,roughness:.62,bumpMap:grain,bumpScale:.35,roughnessMap:grain,clearcoat:.08}),
 black2:new THREE.MeshPhysicalMaterial({color:0x101114,roughness:.5,bumpMap:grain,bumpScale:.2}),
 face:new THREE.MeshPhysicalMaterial({color:0x1d1f24,roughness:.45,clearcoat:.4,clearcoatRoughness:.25}),
 lens:new THREE.MeshPhysicalMaterial({color:0x34363b,roughness:.32,clearcoat:.6,clearcoatRoughness:.15}),
 brass:new THREE.MeshStandardMaterial({color:0xc9a25a,metalness:1,roughness:.28}),
 steel:new THREE.MeshStandardMaterial({color:0xb9bec6,metalness:1,roughness:.3}),
 cer:new THREE.MeshPhysicalMaterial({color:0x2a2d33,roughness:.25,clearcoat:.8,clearcoatRoughness:.1}),
 glass:new THREE.MeshPhysicalMaterial({color:0xffffff,roughness:.05,transmission:.92,thickness:2,ior:1.5,transparent:true,opacity:.35,clearcoat:1}),
 plate:new THREE.MeshPhysicalMaterial({color:0xa9b3b6,roughness:.3,metalness:.75}),
 led:new THREE.MeshBasicMaterial({color:new THREE.Color(0x4a86ff).multiplyScalar(2.2)})
};
function rr(w,h,r){const s=new THREE.Shape(),x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s}
/* extrude a plan shape upward along +Y, from y0 to y0+d, with a soft bevel */
function up(shape,y0,d,bev,mat,seg){const g=new THREE.ExtrudeGeometry(shape,{depth:d-2*bev,bevelEnabled:bev>0,bevelThickness:bev,bevelSize:bev,bevelSegments:seg||8,curveSegments:40});
  g.rotateX(-Math.PI/2);g.translate(0,y0+bev,0);g.computeVertexNormals();const m=new THREE.Mesh(g,mat);m.castShadow=m.receiveShadow=true;return m}
const dev=new THREE.Group();sc.add(dev);
/* units: mm. y=0 is the imaging face, the probe rises along +Y */
/* the probe body: a pebble-like shell, tapering a little toward the top, with a softly domed cap */
{const g=new THREE.Group();
 const prof=[];for(let i=0;i<=40;i++){const t=i/40,y=58+t*112;prof.push([t,y])}
 const sh=up(rr(58,42,19),56,96,9,M.shell,12);g.add(sh);
 const cap=up(rr(52,38,17),146,28,13,M.shell,14);g.add(cap);
 /* a thin parting line between body and cap */
 const ring=up(rr(55.4,39.6,18),150,1.2,0,new THREE.MeshStandardMaterial({color:0x9a958b,roughness:.6}));g.add(ring);
 dev.add(g)}
/* the receiver housing: two blocks with a parting gap, chamfered, black */
dev.add(up(rr(98,74,9),3,30,2.4,M.black));
dev.add(up(rr(96,72,8.6),34.2,34,2.4,M.black));
/* the collar where the housing grips the probe */
dev.add(up(rr(68,52,15),66,10,3,M.black2));
/* the face plate */
dev.add(up(rr(102,78,11),-1.5,5.5,1.8,M.face));
/* the probe's acoustic lens, slightly proud of the face */
{const g=new THREE.ExtrudeGeometry(rr(54,13,6.5),{depth:2,bevelEnabled:true,bevelThickness:2.2,bevelSize:2,bevelSegments:10,curveSegments:32});
 g.rotateX(Math.PI/2);g.translate(0,-1.2,0);const m=new THREE.Mesh(g,M.lens);dev.add(m)}
/* six sonar receivers around the imaging face: brass rings, dark ceramic faces */
[[-31,22],[0,24],[31,22],[-31,-22],[0,-24],[31,-22]].forEach(([x,z])=>{
  const ring=new THREE.Mesh(new THREE.CylinderGeometry(9.2,9.2,4.2,64),M.brass);ring.position.set(x,-3,z);dev.add(ring);
  const lip=new THREE.Mesh(new THREE.TorusGeometry(8.2,1,16,64),M.brass);lip.rotation.x=Math.PI/2;lip.position.set(x,-5.1,z);dev.add(lip);
  const disc=new THREE.Mesh(new THREE.CylinderGeometry(7.4,7.4,1.2,64),M.cer);disc.position.set(x,-5,z);dev.add(disc)});
/* hexagonal radiation-detector window on the front face of the upper block */
{const hx=new THREE.Shape();for(let i=0;i<6;i++){const a=Math.PI/6+i*Math.PI/3,x=Math.cos(a)*15,y=Math.sin(a)*15;i?hx.lineTo(x,y):hx.moveTo(x,y)}hx.closePath();
 const hole=new THREE.Path();for(let i=0;i<6;i++){const a=Math.PI/6+i*Math.PI/3,x=Math.cos(a)*12,y=Math.sin(a)*12;i?hole.lineTo(x,y):hole.moveTo(x,y)}hole.closePath();hx.holes.push(hole);
 const fr=new THREE.Mesh(new THREE.ExtrudeGeometry(hx,{depth:2.4,bevelEnabled:true,bevelThickness:.8,bevelSize:.8,bevelSegments:4}),M.face);fr.position.set(20,51,36);dev.add(fr);
 const inner=new THREE.Shape();for(let i=0;i<6;i++){const a=Math.PI/6+i*Math.PI/3,x=Math.cos(a)*12.2,y=Math.sin(a)*12.2;i?inner.lineTo(x,y):inner.moveTo(x,y)}inner.closePath();
 const pl=new THREE.Mesh(new THREE.ShapeGeometry(inner),M.plate);pl.position.set(20,51,36.6);dev.add(pl);
 const gl=new THREE.Mesh(new THREE.ExtrudeGeometry(inner,{depth:1.2,bevelEnabled:false}),M.glass);gl.position.set(20,51,37.4);dev.add(gl)}
/* status LED */
{const l=new THREE.Mesh(new THREE.SphereGeometry(1.6,24,16),M.led);l.position.set(-34,58,36.6);dev.add(l);
 const p=new THREE.PointLight(0x3b7bff,40,40,2);p.position.set(-34,58,42);dev.add(p)}
/* side mount: a knurled knob on a short boss (left side) */
{const g=new THREE.Group();const boss=new THREE.Mesh(new THREE.CylinderGeometry(9,10,8,48),M.black2);boss.rotation.z=Math.PI/2;boss.position.x=-4;g.add(boss);
 const kn=new THREE.Mesh(new THREE.CylinderGeometry(15,15,11,72),M.face);kn.rotation.z=Math.PI/2;kn.position.x=-13;g.add(kn);
 for(let i=0;i<24;i++){const a=i/24*Math.PI*2,b=new THREE.Mesh(new THREE.BoxGeometry(10,2.2,2.2),M.face);b.position.set(-13,Math.cos(a)*15.2,Math.sin(a)*15.2);b.rotation.x=a;g.add(b)}
 const cp=new THREE.Mesh(new THREE.CylinderGeometry(6,6,1.6,40),M.steel);cp.rotation.z=Math.PI/2;cp.position.x=-19.2;g.add(cp);
 g.position.set(-49,40,0);dev.add(g)}
/* gold SMA connectors on the right side */
[[44,14],[44,-12]].forEach(([y,z])=>{const g=new THREE.Group();
  const nut=new THREE.Mesh(new THREE.CylinderGeometry(4.4,4.4,4,6),M.brass);nut.rotation.z=Math.PI/2;nut.position.x=2;g.add(nut);
  const bar=new THREE.Mesh(new THREE.CylinderGeometry(3.1,3.1,9,32),M.brass);bar.rotation.z=Math.PI/2;bar.position.x=8;g.add(bar);
  const tip=new THREE.Mesh(new THREE.CylinderGeometry(2.2,2.2,2,24),M.cer);tip.rotation.z=Math.PI/2;tip.position.x=13;g.add(tip);
  g.position.set(48,y,z);dev.add(g)});
/* screws at the housing corners */
[[-42,30],[42,30],[-42,-30],[42,-30]].forEach(([x,z])=>{const s=new THREE.Mesh(new THREE.CylinderGeometry(2.2,2.2,.8,24),M.steel);s.position.set(x,2.8-4.6,z);dev.add(s)});
/* pose: tipped toward the viewer so the receiver face reads, turned a little */
const V=${JSON.stringify(process.argv[3]||'a')};
dev.position.y=-70;dev.rotation.set(0.0,0,0);
const piv=new THREE.Group();sc.add(piv);piv.add(dev);
piv.rotation.set(V==='b'?-.62:-.52,-.62,.2);
const cam=new THREE.PerspectiveCamera(22,W/H,10,4000);cam.position.set(0,0,760);cam.lookAt(0,0,0);
/* lights: warm key upper-left, cool blue rim from behind-right, faint fill */
const key=new THREE.DirectionalLight(0xfff2e2,2.0);key.position.set(-300,420,380);key.castShadow=true;key.shadow.mapSize.set(2048,2048);key.shadow.camera.left=key.shadow.camera.bottom=-150;key.shadow.camera.right=key.shadow.camera.top=150;key.shadow.bias=-.0004;sc.add(key);
const rim=new THREE.DirectionalLight(0x5a8cff,1.5);rim.position.set(300,160,-520);sc.add(rim);
const rim2=new THREE.DirectionalLight(0x9cc0ff,1.2);rim2.position.set(-380,-60,-300);sc.add(rim2);
const fill=new THREE.HemisphereLight(0xdfe8ff,0x0a1020,.35);sc.add(fill);
rn.render(sc,cam);
window.__done=rn.domElement.toDataURL('image/png');
</script></body></html>`;
(async()=>{const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});const p=await b.newPage({viewport:{width:W,height:H}});
p.on('console',m=>console.log('page:',m.text()));p.on('pageerror',e=>console.log('err:',e.message));
await p.route('http://r.local/**',async r=>{const u=new URL(r.request().url());const f=path.join(K,'node_modules',decodeURIComponent(u.pathname));
 if(u.pathname==='/index.html')return r.fulfill({body:PAGE,contentType:'text/html'});
 r.fulfill({body:fs.readFileSync(f),contentType:'text/javascript'})});
await p.goto('http://r.local/index.html');
await p.waitForFunction(()=>window.__done,null,{timeout:180000});
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
await b.close();console.log('wrote',out)})();

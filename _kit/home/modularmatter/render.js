/* Offline render of the hero (HOME_BRIEF update, option c: a crafted render of the real product).
   Subject: Modular Matter's universally adjustable modular prosthesis socket, as the sources describe it (NSF SBIR 2528353
   abstract; UMD Clark School news 2023-01-27): a below-knee socket assembled from discrete, mass-producible modules made by
   selective laser sintering (matte nylon), conforming to the residual limb, over a liner, coupled to a standard pylon and
   foot. Module layout and proportions are illustrative, not Modular Matter's drawings.
   Output: hero.webp (2100x3000). Run: node _kit/home/modularmatter/render.js */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=2100,H=3000;
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const W=${W},H=${H};
let s=7717;const R=()=>{s=(s*16807)%2147483647;return (s-1)/2147483646};const RR=(a,b)=>a+(b-a)*R();
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.0;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=true;rn.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
const pm=new THREE.PMREMGenerator(rn);const env=pm.fromScene(new RoomEnvironment(),0.04).texture;
sc.environment=env;sc.environmentIntensity=.07;
const INK=new THREE.Color('#101012');
sc.background=INK.clone();
/* floor: same ink, faint sheen, takes the shadow */
const fl=new THREE.Mesh(new THREE.PlaneGeometry(120,120),new THREE.ShadowMaterial({color:0x000000,opacity:.55}));
fl.rotation.x=-Math.PI/2;fl.position.y=-3.79;fl.receiveShadow=true;sc.add(fl);

const leg=new THREE.Group();
/* socket profile: r(y) for the shell, y from 0 (distal) to ~2.5 (brim); slightly oval (medio-lateral wider) */
const Y0=.55,Y1=2.6;
const rad=y=>{const t=Math.min(1,Math.max(0,y/2.5));return .30+.42*Math.pow(t,.72)};
const OX=1.0,OZ=.9;
/* liner: soft grey silicone, visible through the gaps and rolled over the brim */
{const pts=[];for(let i=0;i<=40;i++){const y=.1+i/40*(Y1+.1-.1);pts.push(new THREE.Vector2(rad(y)-.045,y))}
 const lg=new THREE.LatheGeometry(pts,96);lg.scale(OX,1,OZ);
 const lm=new THREE.MeshPhysicalMaterial({color:0x35373b,roughness:.7,metalness:0,sheen:.35,sheenColor:new THREE.Color('#c9ccd2'),sheenRoughness:.5,side:THREE.DoubleSide});
 const m=new THREE.Mesh(lg,lm);m.castShadow=true;m.receiveShadow=true;leg.add(m);
 const tor=new THREE.Mesh(new THREE.TorusGeometry(rad(Y1+.1)-.02,.05,24,128),lm);tor.rotation.x=Math.PI/2;tor.scale.set(OX,OZ,1);tor.position.y=Y1+.1;leg.add(tor)}
/* distal cup: one smooth sintered piece that carries the adapter */
{const pts=[new THREE.Vector2(0,-.02)];for(let i=0;i<=24;i++){const a=i/24*Math.PI/2;pts.push(new THREE.Vector2(Math.sin(a)*(rad(Y0)+.03),.32-Math.cos(a)*.34))}
 pts.push(new THREE.Vector2(rad(Y0+.06)+.03,Y0+.06));pts.push(new THREE.Vector2(rad(Y0+.06)-.02,Y0+.06));
 const g=new THREE.LatheGeometry(pts,96);g.scale(OX,1,OZ);
 const m=new THREE.Mesh(g,new THREE.MeshPhysicalMaterial({color:0x1f2023,roughness:.72,metalness:0,clearcoat:.15,clearcoatRoughness:.6}));m.castShadow=true;m.receiveShadow=true;leg.add(m)}
/* the modules: discrete sintered tiles in rows, each set tangent to the limb shape, with small gaps between them,
   in the logo's two greys; a dark pin joins each corner */
/* sintered nylon: a fine powder grain as a bump map */
const nc=document.createElement('canvas');nc.width=nc.height=512;{const x=nc.getContext('2d'),id=x.createImageData(512,512);for(let i=0;i<id.data.length;i+=4){const v=110+R()*60;id.data[i]=id.data[i+1]=id.data[i+2]=v;id.data[i+3]=255}x.putImageData(id,0,0)}
const grain=new THREE.CanvasTexture(nc);grain.wrapS=grain.wrapT=THREE.RepeatWrapping;grain.repeat.set(1.5,1.5);
const mk=c=>new THREE.MeshPhysicalMaterial({color:c,roughness:.78,metalness:0,bumpMap:grain,bumpScale:1.6,sheen:.3,sheenColor:new THREE.Color('#8e9098'),sheenRoughness:.6});
const mods=[mk(0x2e2f33),mk(0x34353a),mk(0x2a2b2f)];
const pinM=new THREE.MeshPhysicalMaterial({color:0x8a8d94,roughness:.3,metalness:1});
const NR=8,NC=17,GAP=.016,TH=.065;
for(let r=0;r<NR;r++){const ya=Y0+(Y1-Y0)*r/NR,yb=Y0+(Y1-Y0)*(r+1)/NR,ym=(ya+yb)/2;
 const off=(r%2)*.5;
 for(let c=0;c<NC;c++){const ta=(c+off)/NC*Math.PI*2,tb=(c+1+off)/NC*Math.PI*2,tm=(ta+tb)/2;
  const ra=rad(ym)+TH/2;
  const pa=new THREE.Vector3(Math.cos(ta)*ra*OX,ym,Math.sin(ta)*ra*OZ),pb=new THREE.Vector3(Math.cos(tb)*ra*OX,ym,Math.sin(tb)*ra*OZ);
  const wdt=pa.distanceTo(pb)-GAP,hgt=Math.hypot(yb-ya,rad(yb)-rad(ya))-GAP;
  const g=new RoundedBoxGeometry(wdt,hgt,TH,4,.02);
  const mi=Math.floor(R()*3);
  const m=new THREE.Mesh(g,mods[mi]);
  m.position.set(Math.cos(tm)*ra*OX,ym,Math.sin(tm)*ra*OZ);
  /* orient: local x along the tangent, local z along the outward normal, tipped back with the taper */
  const n=new THREE.Vector3(Math.cos(tm)/OX,0,Math.sin(tm)/OZ).normalize();
  const slope=Math.atan2(rad(yb)-rad(ya),yb-ya);
  const tan=new THREE.Vector3().subVectors(pb,pa).normalize();
  const up=new THREE.Vector3(0,1,0).applyAxisAngle(tan,-slope*Math.sign(1));
  const zz=new THREE.Vector3().crossVectors(tan,up).normalize();if(zz.dot(n)<0){zz.negate();}
  const yy=new THREE.Vector3().crossVectors(zz,tan).normalize();
  m.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(tan,yy,zz));
  m.castShadow=true;m.receiveShadow=true;leg.add(m);
  /* corner pin at the lower-left of each module */
  const pr=rad(ya)+TH*.9;const pin=new THREE.Mesh(new THREE.CylinderGeometry(.016,.016,.03,16),pinM);
  pin.position.set(Math.cos(ta)*pr*OX,ya,Math.sin(ta)*pr*OZ);pin.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),n);leg.add(pin);
 }}
/* adapters and pylon: satin titanium */
const ti=new THREE.MeshPhysicalMaterial({color:0xb9bcc2,roughness:.3,metalness:1,envMapIntensity:1.2});
const tiD=new THREE.MeshPhysicalMaterial({color:0x7d8087,roughness:.38,metalness:1});
{const pl=new THREE.Mesh(new THREE.CylinderGeometry(.27,.27,.07,64),tiD);pl.position.y=-.05;leg.add(pl);
 const py=new THREE.Mesh(new THREE.CylinderGeometry(.11,.2,.2,4,1),ti);py.rotation.y=Math.PI/4;py.position.y=-.18;leg.add(py);
 const cl=new THREE.Mesh(new THREE.CylinderGeometry(.19,.19,.32,48),tiD);cl.position.y=-.42;leg.add(cl);
 for(const a of [0,Math.PI/2,Math.PI,Math.PI*1.5]){const sc2=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,.08,12),pinM);sc2.rotation.z=Math.PI/2;sc2.rotation.y=a;sc2.position.set(Math.cos(a)*.2,-.4,Math.sin(a)*.2);sc2.lookAt(0,-.4,0);sc2.rotateX(Math.PI/2);leg.add(sc2)}
 const tube=new THREE.Mesh(new THREE.CylinderGeometry(.115,.115,1.5,64),ti);tube.position.y=-1.33;tube.castShadow=true;leg.add(tube);
 const cl2=new THREE.Mesh(new THREE.CylinderGeometry(.19,.19,.3,48),tiD);cl2.position.y=-2.2;leg.add(cl2);
 const py2=new THREE.Mesh(new THREE.CylinderGeometry(.2,.12,.18,4,1),ti);py2.rotation.y=Math.PI/4;py2.position.y=-2.43;leg.add(py2)}
/* the foot: a carbon-fibre keel and heel plate, low profile */
{const carbon=new THREE.MeshPhysicalMaterial({color:0x0f1012,roughness:.5,metalness:0,clearcoat:.25,clearcoatRoughness:.45,envMapIntensity:.4});
 const ex={depth:.78,bevelEnabled:true,bevelThickness:.03,bevelSize:.03,bevelSegments:4,curveSegments:48};
 const k=new THREE.Shape();k.moveTo(-.25,-2.50);k.lineTo(.3,-2.50);k.bezierCurveTo(.55,-2.73,.9,-3.40,2.05,-3.64);k.lineTo(2.1,-3.74);
 k.bezierCurveTo(.8,-3.56,.42,-2.88,.18,-2.64);k.lineTo(-.25,-2.64);k.closePath();
 const kg=new THREE.ExtrudeGeometry(k,ex);kg.translate(0,0,-.39);const km=new THREE.Mesh(kg,carbon);km.castShadow=true;leg.add(km);
 const h=new THREE.Shape();h.moveTo(-.95,-3.6);h.bezierCurveTo(-.8,-3.76,-.4,-3.78,.2,-3.78);h.lineTo(2.12,-3.78);h.lineTo(2.12,-3.71);h.lineTo(.2,-3.71);h.bezierCurveTo(-.35,-3.71,-.72,-3.68,-.86,-3.56);h.closePath();
 const hg=new THREE.ExtrudeGeometry(h,ex);hg.translate(0,0,-.39);const hm=new THREE.Mesh(hg,carbon);hm.castShadow=true;leg.add(hm);
 const blk=new THREE.Mesh(new RoundedBoxGeometry(.62,.16,.7,4,.04),tiD);blk.position.set(0,-2.58,0);leg.add(blk)}
leg.rotation.y=-.62;leg.position.y=.1;sc.add(leg);
/* studio lights: a soft key from upper left, a cool rim from behind right, a coral kicker (the brand accent) on the far edge */
const key=new THREE.SpotLight(0xfff1e4,1500,60,.3,.8,1.6);key.position.set(-9,6,7);key.target=leg;key.castShadow=true;key.shadow.mapSize.set(4096,4096);key.shadow.radius=8;key.shadow.bias=-.0003;sc.add(key);
const rim=new THREE.DirectionalLight(0xcfe0ff,5);rim.position.set(6,5,-7);sc.add(rim);
const co=new THREE.PointLight(0xfc6f5c,14,14,1.5);co.position.set(5,2.2,-3.5);sc.add(co);
const fill=new THREE.PointLight(0xdde4ee,1.2,16,1.6);fill.position.set(-2,0,7);sc.add(fill);
const top=new THREE.SpotLight(0xffffff,160,40,.5,1,1.6);top.position.set(1,12,3);top.target=leg;sc.add(top);
const cam=new THREE.PerspectiveCamera(19,W/H,.1,100);cam.position.set(1.0,2.6,23);cam.lookAt(.3,-.35,0);
rn.render(sc,cam);
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
await p.waitForFunction(()=>window.__done,null,{timeout:600000});
const url=await p.evaluate(async()=>{const im=new Image();im.src=window.__done;await im.decode();const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const x=c.getContext('2d');x.drawImage(im,0,0);
 const id=x.getImageData(0,0,c.width,c.height),d=id.data;let s=99;for(let i=0;i<d.length;i+=4){s=(s*16807)%2147483647;const n=((s/2147483647)-.5)*4;d[i]+=n;d[i+1]+=n;d[i+2]+=n}x.putImageData(id,0,0);return c.toDataURL('image/webp',.9)});
fs.writeFileSync(path.join(__dirname,'hero.webp'),Buffer.from(url.split(',')[1],'base64'));
console.log('hero.webp',fs.statSync(path.join(__dirname,'hero.webp')).size);await b.close();})();

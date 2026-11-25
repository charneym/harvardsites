/* Offline render of the Lybra Bio hero (HOME_BRIEF update option c: a crafted render of the real product).
   Subject: the LybraPatch, a hydrogel microneedle patch (NIH RePORTER 1R43AI194889-01 abstract) of cone-shaped needles made of
   hyaluronic acid crosslinked with PEG (MIT News, 2024-05-09). Unbranded, illustrative geometry; translucent hydrogel with physical
   transmission, studio light on the page's own teal ink (#0c1a1f) so the art has no edge against the page (DJ).
   Output: render.png -> hero.webp. Run: node _kit/home/lybrabio/render.js */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=+(process.env.RW||2000),H=+(process.env.RH||1700);
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
const W=${W},H=${H};const MODE='${process.env.MODE||'lit'}';
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.0;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=true;rn.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.appendChild(rn.domElement);
const INK='#0c1a1f';
const sc=new THREE.Scene();sc.background=new THREE.Color(INK);
const pm=new THREE.PMREMGenerator(rn);sc.environment=pm.fromScene(new RoomEnvironment(),0.04).texture;sc.environmentIntensity=.6;
const fl=new THREE.Mesh(new THREE.PlaneGeometry(80,80),MODE==='lit'?new THREE.MeshStandardMaterial({color:0x14323a,roughness:.9,metalness:0,envMapIntensity:.03}):new THREE.ShadowMaterial({opacity:.55}));fl.rotation.x=-Math.PI/2;fl.receiveShadow=true;sc.add(fl);
/* backing: a square with softly rounded corners, extruded with a small bevel */
const S=10,RC=.9,TH=.42;
const sh=new THREE.Shape();const a=S/2;
sh.moveTo(-a+RC,-a);sh.lineTo(a-RC,-a);sh.quadraticCurveTo(a,-a,a,-a+RC);sh.lineTo(a,a-RC);sh.quadraticCurveTo(a,a,a-RC,a);
sh.lineTo(-a+RC,a);sh.quadraticCurveTo(-a,a,-a,a-RC);sh.lineTo(-a,-a+RC);sh.quadraticCurveTo(-a,-a,-a+RC,-a);
const bg=new THREE.ExtrudeGeometry(sh,{depth:TH,bevelEnabled:true,bevelThickness:.08,bevelSize:.08,bevelSegments:6,curveSegments:24});
bg.rotateX(-Math.PI/2);
/* needles: cones with a softly rounded tip and a slight flare at the base */
function needle(){const p=[];const hgt=2.0,r0=.4,n=26;
  p.push(new THREE.Vector2(r0+.07,0));p.push(new THREE.Vector2(r0,.06));
  for(let i=1;i<=n;i++){const t=i/n;const y=.06+t*(hgt-.06);let r=r0*(1-t);if(t>.93){const u=(t-.93)/.07;r=Math.max(r,.018*Math.sqrt(1-u*u))}p.push(new THREE.Vector2(Math.max(r,1e-4),y))}
  p.push(new THREE.Vector2(1e-4,hgt+.004));
  return new THREE.LatheGeometry(p,48)}
const N=9,P=1.02;const ng=[];const base=needle();
for(let i=0;i<N;i++)for(let j=0;j<N;j++){const g=base.clone();g.translate((i-(N-1)/2)*P,TH+.08,(j-(N-1)/2)*P);ng.push(g)}
const needles=mergeGeometries(ng);
const gelM=new THREE.MeshPhysicalMaterial({color:0xffffff,transmission:1,thickness:1.8,ior:1.36,roughness:.12,
  attenuationColor:new THREE.Color('#7cc3cf'),attenuationDistance:2.2,clearcoat:1,clearcoatRoughness:.04,specularIntensity:1,envMapIntensity:1.6});
const needM=gelM.clone();needM.roughness=.08;needM.thickness=1.0;needM.attenuationDistance=1.8;
const pg=new THREE.Group();
const bm=new THREE.Mesh(bg,gelM);bm.castShadow=true;bm.receiveShadow=true;pg.add(bm);
const nm=new THREE.Mesh(needles,needM);nm.castShadow=true;nm.receiveShadow=true;pg.add(nm);
pg.rotation.y=.62;pg.position.y=.0;sc.add(pg);
/* light: warm key from upper left, cool teal rim from behind, a gold kicker low right (the logo's accent) */
const key=new THREE.SpotLight(0xfff5ea,340,80,.42,1,1.3);key.position.set(-10,24,10);key.target=pg;key.castShadow=true;key.shadow.mapSize.set(4096,4096);key.shadow.radius=10;key.shadow.bias=-.0004;sc.add(key);
const rim=new THREE.SpotLight(0x7cc9d8,700,80,.5,.8,1.3);rim.position.set(9,9,-14);rim.target=pg;sc.add(rim);
const kick=new THREE.PointLight(0xfdc351,14,30,1.6);kick.position.set(9,3,8);sc.add(kick);
const fill=new THREE.PointLight(0xdfeef0,8,30,1.6);fill.position.set(-2,6,16);sc.add(fill);
const cam=new THREE.PerspectiveCamera(24,W/H,.1,200);cam.position.set(0,16,27);cam.lookAt(0,.5,0);
if(MODE==='mask'){sc.environment=null;sc.background=new THREE.Color('#000');fl.visible=false;const wm=new THREE.MeshBasicMaterial({color:0xffffff});pg.children.forEach(m=>m.material=wm)}
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
await p.waitForFunction(()=>window.__done,null,{timeout:900000});
const out=process.argv[2]||path.join(__dirname,'render.png');
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
console.log('wrote',out);await b.close();})();

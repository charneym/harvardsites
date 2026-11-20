/* Offline render of the ImCare hero (HOME_BRIEF update option c / rule DP: a crafted render of the real subject).
   Subject: blood collection tubes after centrifugation, the sample Seravue® tests: clear serum above a gel separator over
   packed red cells (ImCare: LC-SPIK is measured in serum from "a simple blood sample"; NIH RePORTER 1R43CA302053 abstract).
   Plain, unbranded ridged caps in the logo lavender; clear plastic with physical transmission; studio light on the page's own
   plum ink (#140c1c), so the art has no edge against the page (DJ). Output: hero.webp. Run: node _kit/home/imcarebiotech/render.js */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=2000,H=2200;
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=.95;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=true;rn.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();sc.background=new THREE.Color('#140c1c');
const pm=new THREE.PMREMGenerator(rn);sc.environment=pm.fromScene(new RoomEnvironment(),0.03).texture;sc.environmentIntensity=.55;
/* the bench: only its soft shadow shows, so the ground stays the page ink */
const fl=new THREE.Mesh(new THREE.PlaneGeometry(60,60),new THREE.ShadowMaterial({opacity:.22}));fl.rotation.x=-Math.PI/2;fl.receiveShadow=true;sc.add(fl);
const R=.62,HT=8.6,WALL=.045;
function lathe(rOut,h,bottomR){const p=[];const n=24;for(let i=0;i<=n;i++){const a=-Math.PI/2+i/n*Math.PI/2;p.push(new THREE.Vector2(Math.cos(a)*rOut+1e-4,bottomR+Math.sin(a)*bottomR))}p.push(new THREE.Vector2(rOut,h));return p}
function liquid(r,y0,y1){/* a column of liquid inside the tube; y0=0 means it fills the round bottom */
  const p=[];const n=20;if(y0<=0){for(let i=0;i<=n;i++){const a=-Math.PI/2+i/n*Math.PI/2;p.push(new THREE.Vector2(Math.cos(a)*r+1e-4,r+Math.sin(a)*r))}}else p.push(new THREE.Vector2(1e-4,y0),new THREE.Vector2(r,y0));
  p.push(new THREE.Vector2(r,y1-.05),new THREE.Vector2(r*.96,y1),new THREE.Vector2(1e-4,y1-.035));return new THREE.LatheGeometry(p,96)}
const plastic=new THREE.MeshPhysicalMaterial({color:0xf4eefa,transparent:true,opacity:.1,roughness:.03,metalness:0,clearcoat:1,clearcoatRoughness:.02,specularIntensity:1,envMapIntensity:1.6,depthWrite:false});
const serum=new THREE.MeshPhysicalMaterial({color:0xffd585,transmission:.8,thickness:1.2,ior:1.34,roughness:.03,attenuationColor:new THREE.Color('#d08a26'),attenuationDistance:.8,emissive:0x6a3c0a,emissiveIntensity:.3,clearcoat:1,clearcoatRoughness:.03,specularIntensity:1,envMapIntensity:1.0});
const gel=new THREE.MeshPhysicalMaterial({color:0xbdb3aa,roughness:.4,sheen:.4,sheenColor:new THREE.Color('#ffffff'),envMapIntensity:.6});
const cells=new THREE.MeshPhysicalMaterial({color:0x1e0208,roughness:.16,clearcoat:.6,clearcoatRoughness:.12,sheen:.3,sheenColor:new THREE.Color('#a01a26'),envMapIntensity:.7});
const capM=new THREE.MeshPhysicalMaterial({color:0xa47dd4,roughness:.42,metalness:0,sheen:.35,sheenColor:new THREE.Color('#f3ecf9'),sheenRoughness:.5,clearcoat:.15,envMapIntensity:.7});
function capGeo(){const g=new THREE.CylinderGeometry(.74,.72,1.75,192,8,false);const p=g.attributes.position,v=new THREE.Vector3();
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const r=Math.hypot(v.x,v.z);if(r<.5)continue;const a=Math.atan2(v.z,v.x);
    const ridge=(v.y<.62&&v.y>-.72)?.022*Math.pow(Math.max(0,Math.cos(a*36)),2):0;const lip=v.y>.7?-.035:0;const k=(r+ridge+lip)/r;p.setXYZ(i,v.x*k,v.y,v.z*k)}
  g.computeVertexNormals();return g}
function tube(serumTop,gelTop,cellTop){const t=new THREE.Group();
  const outer=new THREE.Mesh(new THREE.LatheGeometry(lathe(R,HT,R),128),plastic);outer.castShadow=true;t.add(outer);
  const ri=R-WALL;
  const c=new THREE.Mesh(liquid(ri,0,cellTop),cells);c.castShadow=true;t.add(c);
  const gl=new THREE.Mesh(liquid(ri,cellTop,gelTop),gel);t.add(gl);
  const s=new THREE.Mesh(liquid(ri,gelTop,serumTop),serum);t.add(s);
  const cap=new THREE.Mesh(capGeo(),capM);cap.position.y=HT+.55;cap.castShadow=true;t.add(cap);
  const top=new THREE.Mesh(new THREE.CylinderGeometry(.6,.6,.04,96),new THREE.MeshPhysicalMaterial({color:0xb48fd6,roughness:.55}));top.position.y=HT+1.42;t.add(top);
  const well=new THREE.Mesh(new THREE.CylinderGeometry(.22,.22,.05,64),new THREE.MeshPhysicalMaterial({color:0x8f6ab3,roughness:.6}));well.position.y=HT+1.43;t.add(well);
  return t}
const g=new THREE.Group();
const a=tube(6.4,3.75,3.45);a.position.set(-.35,0,1.9);a.rotation.y=.3;g.add(a);
const b=tube(5.9,3.5,3.2);b.position.set(-1.9,0,-1.3);b.rotation.y=1.2;g.add(b);
const c=tube(6.1,3.9,3.6);c.position.set(1.55,0,-.4);c.rotation.y=2.1;g.add(c);
sc.add(g);
/* studio light: a soft warm key from upper left, a lavender rim from behind right, a cool fill */
const key=new THREE.SpotLight(0xfff3ea,680,60,.36,.9,1.4);key.position.set(-6,26,9);key.target=g;key.castShadow=true;key.shadow.mapSize.set(4096,4096);key.shadow.radius=8;key.shadow.bias=-.0003;sc.add(key);
const rim=new THREE.SpotLight(0xd5b8ea,700,60,.5,.8,1.4);rim.position.set(8,10,-11);rim.target=g;sc.add(rim);
const rim2=new THREE.PointLight(0xb48fd6,40,20,1.5);rim2.position.set(-6,5,-6);sc.add(rim2);
const streak=new THREE.DirectionalLight(0xffffff,2.6);streak.position.set(-12,7,9);sc.add(streak);
const fill=new THREE.PointLight(0xe8e0f4,14,22,1.6);fill.position.set(2,4,12);sc.add(fill);
const cam=new THREE.PerspectiveCamera(26,W/H,.1,200);cam.position.set(-3.8,14,27);cam.lookAt(0,5.1,0);
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

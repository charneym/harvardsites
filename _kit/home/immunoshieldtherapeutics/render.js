/* Offline render of the hero (HOME_BRIEF update, option c: a crafted render of the real product).
   Subject: an ImmunoShield hydrogel injection-molded macroencapsulation device, the flat spiral channel geometry
   shown in ASU's coverage of the company's hydrogel injection molding (ASU News, 4 Nov 2024: "Models developed for
   hydrogel injection molding"), here holding pancreatic islets (NIH SBIR R43/R44 DK136496). A clear, faintly blue
   hydrogel with physical transmission and refraction, lit like a studio product shot on a dark wet bench.
   Output: hero.webp (2880x1800). Run: node _kit/home/immunoshieldtherapeutics/render.js */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=2880,H=1800;
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
const W=${W},H=${H};
let s=4242;const R=()=>{s=(s*16807)%2147483647;return (s-1)/2147483646};const RR=(a,b)=>a+(b-a)*R();
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.15;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=true;rn.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
const pm=new THREE.PMREMGenerator(rn);const env=pm.fromScene(new RoomEnvironment(),0.03).texture;
sc.environment=env;sc.environmentIntensity=.45;
/* backdrop: deep navy studio sweep, a little lighter behind the device */
const bg=document.createElement('canvas');bg.width=1024;bg.height=640;const b=bg.getContext('2d');
let g=b.createRadialGradient(700,300,0,700,300,760);g.addColorStop(0,'#173a55');g.addColorStop(.45,'#0d2436');g.addColorStop(1,'#050e17');b.fillStyle=g;b.fillRect(0,0,1024,640);
const bt=new THREE.CanvasTexture(bg);bt.colorSpace=THREE.SRGBColorSpace;sc.background=bt;
/* the bench: a dark, faintly glossy surface the device rests on */
const fl=new THREE.Mesh(new THREE.PlaneGeometry(80,80),new THREE.MeshPhysicalMaterial({color:0x0b1a2a,roughness:.78,metalness:0,envMapIntensity:.08}));
fl.rotation.x=-Math.PI/2;fl.receiveShadow=true;sc.add(fl);
/* the device: a flat Archimedean spiral channel of hydrogel with its injection inlet (sprue) running out to one side */
const turns=4.3,r0=.55,pitch=.62,tubeR=.21,pts=[];
for(let i=0;i<=900;i++){const t=i/900*turns*2*Math.PI;const r=r0+pitch*t/(2*Math.PI);pts.push(new THREE.Vector3(Math.cos(t)*r,tubeR,Math.sin(t)*r))}
const last=pts[pts.length-1];const tEnd=turns*2*Math.PI;const tang=new THREE.Vector3(-Math.sin(tEnd),0,Math.cos(tEnd));
for(let i=1;i<=40;i++){pts.push(last.clone().addScaledVector(tang,i*.07).add(new THREE.Vector3(0,0,0)))}
/* turn the lead-out into a straight sprue */
const curve=new THREE.CatmullRomCurve3(pts,false,'centripetal');
let tg=new THREE.TubeGeometry(curve,2400,tubeR,48,false);
/* subtle surface waviness so it reads as a cast soft material, not CAD */
{const p=tg.attributes.position,n=tg.attributes.normal,v=new THREE.Vector3(),nn=new THREE.Vector3();for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);nn.fromBufferAttribute(n,i);
 const d=.0022*Math.sin(v.x*3.1+v.z*1.7)+.0012*Math.sin(v.z*6.7-v.x*2.2);v.addScaledVector(nn,d);
 if(v.y<.035)v.y=.035+(v.y-.035)*.25; /* flattened where it rests on the bench */
 p.setXYZ(i,v.x,v.y,v.z)}tg.computeVertexNormals()}
const gel=new THREE.MeshPhysicalMaterial({color:0xffffff,transmission:1,thickness:.22,ior:1.2,roughness:.05,metalness:0,
 attenuationColor:new THREE.Color('#9fd3ea'),attenuationDistance:3.2,clearcoat:1,clearcoatRoughness:.04,specularIntensity:1,
 sheen:.25,sheenColor:new THREE.Color('#d8c2ea'),sheenRoughness:.5,envMapIntensity:.9,side:THREE.FrontSide});
const dev=new THREE.Group();const tube=new THREE.Mesh(tg,gel);tube.castShadow=true;dev.add(tube);
/* end caps */
const cap=new THREE.Mesh(new THREE.SphereGeometry(tubeR,48,24),gel);cap.position.copy(pts[0]);dev.add(cap);
const cap2=cap.clone();cap2.position.copy(pts[pts.length-1]);dev.add(cap2);
/* islets: small, slightly lumpy cream-amber spheroids packed along the channel, each a cluster of cells */
function islet(rad){let ge=new THREE.IcosahedronGeometry(rad,4);ge=mergeVertices(ge);const p=ge.attributes.position,v=new THREE.Vector3();
 const a=RR(0,9),bq=RR(0,9);for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const u=v.clone().normalize();
  const k=1+.09*Math.sin(u.x*9+a)*Math.sin(u.y*8+bq)+.05*Math.sin(u.z*17+a*2)+.03*Math.sin((u.x+u.y)*29);v.multiplyScalar(k);p.setXYZ(i,v.x,v.y,v.z)}
 ge.computeVertexNormals();return ge}
const islM=new THREE.MeshPhysicalMaterial({color:0xe2b680,roughness:.55,metalness:0,sheen:.5,sheenColor:new THREE.Color('#ffe6c4'),sheenRoughness:.4,emissive:0x40220c,emissiveIntensity:.35});
const islM2=islM.clone();islM2.color=new THREE.Color('#d9a877');
const L=curve.getLength();
for(let d=.3;d<L-3.0;d+=RR(.26,.6)){const u=d/L,p=curve.getPointAt(u),tn=curve.getTangentAt(u);const side=new THREE.Vector3(-tn.z,0,tn.x);
 const rad=RR(.045,.085);const m=new THREE.Mesh(islet(rad),R()<.5?islM:islM2);
 m.position.copy(p).addScaledVector(side,RR(-1,1)*(tubeR-rad-.04)).add(new THREE.Vector3(0,RR(-.07,.06),0));m.rotation.set(RR(0,6),RR(0,6),RR(0,6));m.castShadow=false;dev.add(m)}
dev.rotation.y=-.35;sc.add(dev);
/* studio lights: a soft key from upper left, a cool rim from behind, and the logo mauve kicking the far edge */
const key=new THREE.SpotLight(0xfff4e8,520,40,.42,.95,1.6);key.position.set(-5,11,6);key.target=dev;key.castShadow=true;key.shadow.mapSize.set(4096,4096);
key.shadow.radius=6;key.shadow.bias=-.0004;sc.add(key);
const rim=new THREE.DirectionalLight(0xa9dcf2,2.4);rim.position.set(3,4,-9);sc.add(rim);
const mv=new THREE.PointLight(0xc695d4,18,14,1.6);mv.position.set(5.5,1.2,-2.5);sc.add(mv);
const fill=new THREE.PointLight(0x8fc8e6,5,12,1.6);fill.position.set(-1,3.5,5);sc.add(fill);
/* camera: oblique three-quarter view, the device right of centre */
const cam=new THREE.PerspectiveCamera(30,W/H,.1,100);cam.position.set(-1.9,9.4,14.8);cam.lookAt(-3.4,-.2,.5);
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
/* post: gentle grain and save as webp via a canvas */
const url=await p.evaluate(async()=>{const im=new Image();im.src=window.__done;await im.decode();const c=document.createElement('canvas');c.width=im.width;c.height=im.height;const x=c.getContext('2d');x.drawImage(im,0,0);
 const id=x.getImageData(0,0,c.width,c.height),d=id.data;let s=99;for(let i=0;i<d.length;i+=4){s=(s*16807)%2147483647;const n=((s/2147483647)-.5)*5;d[i]+=n;d[i+1]+=n;d[i+2]+=n}x.putImageData(id,0,0);return c.toDataURL('image/webp',.9)});
fs.writeFileSync(path.join(__dirname,'hero.webp'),Buffer.from(url.split(',')[1],'base64'));
console.log('hero.webp',fs.statSync(path.join(__dirname,'hero.webp')).size);await b.close();})();

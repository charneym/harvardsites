/* Offline render of the MiTeGen hero (HOME_BRIEF update option c: a crafted render of the firm's real product).
   Subject: a MicroMount, the product MiTeGen was founded on in 2004 to commercialise ("Thorne founded MiTeGen, LLC to
   commercialize MicroMounts, based on research and development at Cornell", mitegen.com management team): a curved
   amber polyimide film with an aperture, on a stainless pin in a magnetic goniometer base, holding a protein crystal in
   a film of cryoprotectant, frosted from the cold. Generic geometry, no branding. Rendered with ALPHA (no ground, DJ/DP).
   Output: render.png. Run: node _kit/home/mitegen/render.js [out] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=2000,H=2000;
const PAGE=`<!doctype html><html><body style="margin:0;background:transparent">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,premultipliedAlpha:false});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,0);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.05;
rn.outputColorSpace=THREE.SRGBColorSpace;
document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
/* studio environment: a dark room with long cool softboxes and a rim in the logo blue */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x03070c);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(18,.3,5,0xf2f7ff,4.0,-2,12,4);        /* overhead strip */
box(.3,8,14,0x2695cc,1.6,14,1,-6);box(.3,2.4,16,0xe8f4ff,2.4,13,7,2); /* blue rim + white strip, right */
box(.3,5,10,0x9fd4f0,1.2,-14,2,2);       /* cool fill, left */
box(22,4,.3,0xe6eef6,1.0,0,4,16);        /* broad front card */
box(14,.25,8,0xfff1e0,1.8,4,-10,6);      /* warm kicker from below (amber film glows) */
sc.environment=pm.fromScene(env,0.03).texture;

const mt=new THREE.Group();
const V=(r,y)=>new THREE.Vector2(r,y);
function lathe(pts,mat,seg=256){const m=new THREE.Mesh(new THREE.LatheGeometry(pts,seg),mat);mt.add(m);return m}
const steel=new THREE.MeshPhysicalMaterial({color:0xb9c2ca,metalness:1,roughness:.24,envMapIntensity:1.35});
const steelB=new THREE.MeshPhysicalMaterial({color:0x8f99a3,metalness:1,roughness:.42,envMapIntensity:1.1});
const pinM=new THREE.MeshPhysicalMaterial({color:0xd5dce2,metalness:1,roughness:.12,envMapIntensity:1.5});
/* magnetic goniometer base: a turned steel cap with chamfers and a fine groove (1 unit ~ 1 mm) */
lathe([V(0,0),V(1.02,0),V(1.1,.08),V(1.1,1.02),V(1.06,1.06),V(1.06,1.12),V(1.1,1.16),V(1.1,1.5),V(1.02,1.58),V(.62,1.6),V(0,1.6)],steel);
lathe([V(.62,1.6),V(.6,1.62),V(.6,2.35),V(.55,2.42),V(.3,2.45),V(0,2.45)],steelB);
/* the stainless pin, tapering to hold the film */
lathe([V(0,2.4),V(.14,2.4),V(.14,6.7),V(.1,7.0),V(0,7.0)],pinM,128);
/* the polyimide MicroMount: a teardrop film with an aperture, curved across its width for stiffness */
const film=new THREE.MeshPhysicalMaterial({color:0xc0650f,metalness:0,roughness:.3,clearcoat:1,clearcoatRoughness:.12,transparent:true,opacity:.8,
  sheen:.5,sheenColor:new THREE.Color('#ffcf7a'),envMapIntensity:1.2,side:THREE.DoubleSide,emissive:new THREE.Color('#5a2a04'),emissiveIntensity:.35});
const CY=8.55,RO=.62,RI=.4;
const sh=new THREE.Shape();sh.moveTo(-.1,6.6);sh.lineTo(.1,6.6);sh.bezierCurveTo(.12,7.2,.24,7.75,.392,8.075);
sh.absarc(0,CY,RO,-0.88,Math.PI+0.88,false);sh.bezierCurveTo(-.24,7.75,-.12,7.2,-.1,6.6);
const hole=new THREE.Path();hole.absarc(0,CY,RI,0,Math.PI*2,true);sh.holes.push(hole);
const fg=new THREE.ExtrudeGeometry(sh,{depth:.025,bevelEnabled:false,curveSegments:96});
(function(){const p=fg.attributes.position;for(let i=0;i<p.count;i++){const x=p.getX(i);p.setZ(i,p.getZ(i)-0.55*x*x)}fg.computeVertexNormals()})();
mt.add(new THREE.Mesh(fg,film));
/* the cryoprotectant film spanning the aperture: a thin clear lens */
const liq=new THREE.MeshPhysicalMaterial({color:0xdff3ff,metalness:0,roughness:.02,clearcoat:1,transparent:true,opacity:.3,envMapIntensity:3.2});
const lg=new THREE.SphereGeometry(RI*1.06,96,48);lg.scale(1,1,.28);const lq=new THREE.Mesh(lg,liq);lq.position.set(0,CY,-.06);mt.add(lq);
/* the protein crystal: a tetragonal prism with pyramidal caps (lysozyme habit), clear with a faint cool tint */
import('three/addons/geometries/ConvexGeometry.js').then(({ConvexGeometry})=>{
const a=.2,h=.15,c=.21,P=[];for(const s of [-1,1]){for(const [x,z] of [[a,0],[0,a],[-a,0],[0,-a]])P.push(new THREE.Vector3(x,s*h,z));P.push(new THREE.Vector3(0,s*(h+c),0))}
const cg=new ConvexGeometry(P);
const xt=new THREE.MeshPhysicalMaterial({color:0xcfeeff,metalness:0,roughness:.03,clearcoat:1,clearcoatRoughness:.02,transparent:true,opacity:.6,
  iridescence:.35,iridescenceIOR:1.4,envMapIntensity:2.6,flatShading:true,side:THREE.DoubleSide});
const cr=new THREE.Mesh(cg,xt);cr.position.set(.03,CY+.02,-.04);cr.rotation.set(.25,.75,1.05);mt.add(cr);
const ed=new THREE.LineSegments(new THREE.EdgesGeometry(cg,1),new THREE.LineBasicMaterial({color:0xeaf8ff,transparent:true,opacity:.55}));ed.position.copy(cr.position);ed.rotation.copy(cr.rotation);mt.add(ed);
/* frost: fine bright specks on the film and base from the cold */
const fm=new THREE.MeshPhysicalMaterial({color:0xf4fbff,roughness:.6,transparent:true,opacity:.5,envMapIntensity:1.2});
const fgeo=new THREE.IcosahedronGeometry(.008,0);let seed=7;const R=()=>(seed=(seed*16807)%2147483647)/2147483647;
for(let i=0;i<260;i++){const t=R()*Math.PI*2,r=RI+.02+R()*(RO-RI-.03),x=Math.cos(t)*r,y=CY+Math.sin(t)*r;const m=new THREE.Mesh(fgeo,fm);
  m.position.set(x,y,-0.55*x*x+.03);const s=.6+R()*1.6;m.scale.set(s,s,s);mt.add(m)}
for(let i=0;i<120;i++){const y=4.6+R()*2.0,t=R()*Math.PI*2,m=new THREE.Mesh(fgeo,fm);m.position.set(Math.cos(t)*.145,y,Math.sin(t)*.145);mt.add(m)}

/* pose: the pin on a diagonal, tip up and to the left (toward the headline side, which it never reaches), seen slightly from the front */
mt.position.y=-4.6;
const holder=new THREE.Group();holder.add(mt);sc.add(holder);
holder.rotation.set(.62,-.5,0);holder.rotateOnWorldAxis(new THREE.Vector3(0,0,1),.62);

const key=new THREE.SpotLight(0xf2f8ff,300,50,.5,1,1.3);key.position.set(-7,10,10);sc.add(key);
const rim=new THREE.SpotLight(0x2a9ad6,140,40,.45,1,1.2);rim.position.set(9,5,-9);sc.add(rim);
const fill=new THREE.SpotLight(0xffe2bf,90,40,.7,1,1.4);fill.position.set(2,-10,8);sc.add(fill);

const cam=new THREE.PerspectiveCamera(36,W/H,.1,100);cam.position.set(0,.2,15.5);cam.lookAt(0,0,0);
rn.render(sc,cam);rn.render(sc,cam);
window.__done=rn.domElement.toDataURL('image/png');
});
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

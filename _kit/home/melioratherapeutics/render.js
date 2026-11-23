/* Offline render of the Meliora Therapeutics hero (HOME_BRIEF option c: a crafted render of the subject).
   Subject: a small-molecule drug, Meliora's modality (small-molecule oncology therapies), as a polished ball-and-stick model:
   porcelain-white carbons, nitrogens in their coral, fluorine in a pale brand blue, satin metal bonds. The molecule is illustrative
   (mol.py), not a disclosed Meliora compound. Rendered with real alpha (transparent ground), so no box edge can show (DJ/DP).
   Run: node render.js out.png [W] [H] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=+(process.argv[3]||1800),H=+(process.argv[4]||1800);
const MOL=fs.readFileSync(path.join(__dirname,'mol.json'),'utf8');
const PAGE=`<!doctype html><html><body style="margin:0;background:transparent">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
const W=${W},H=${H},M=${MOL};
const rn=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,premultipliedAlpha:false});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,0);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.0;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=false;document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
/* studio: dark navy room, a large cool softbox above-left, a coral strip right, a faint blue card below */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x02060f);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(12,.5,7,0xf2f7ff,2.6,-3,11,3);box(.5,7,9,0xe35058,1.3,12,1,-1);box(9,.4,6,0x2a4f9a,.9,0,-10,2);box(4,4,.3,0xffffff,1.6,-6,4,11);
sc.environment=pm.fromScene(env,0.04).texture;
const key=new THREE.DirectionalLight(0xffffff,1.3);key.position.set(-5,8,9);sc.add(key);
const rim=new THREE.DirectionalLight(0xff8a8f,.9);rim.position.set(8,-2,-6);sc.add(rim);
const fill=new THREE.DirectionalLight(0x9db8f0,.35);fill.position.set(2,-6,6);sc.add(fill);
const mat={
 C:new THREE.MeshPhysicalMaterial({color:0xeef3fa,roughness:.32,metalness:0,clearcoat:1,clearcoatRoughness:.08,sheen:.2,sheenColor:new THREE.Color(0xc8d8f5)}),
 N:new THREE.MeshPhysicalMaterial({color:0xf0626a,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.06}),
 O:new THREE.MeshPhysicalMaterial({color:0xd24550,roughness:.28,metalness:0,clearcoat:1,clearcoatRoughness:.06}),
 F:new THREE.MeshPhysicalMaterial({color:0x8fb3ec,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.06})};
const bm=new THREE.MeshPhysicalMaterial({color:0xd3dcec,roughness:.26,metalness:.7,clearcoat:.6,clearcoatRoughness:.1});
const RAD={C:.40,N:.42,O:.42,F:.38};
const G=new THREE.Group();sc.add(G);
const P=M.atoms.map(a=>new THREE.Vector3(a[1],a[2],a[3]));
M.atoms.forEach((a,i)=>{const s=new THREE.Mesh(new THREE.SphereGeometry(RAD[a[0]],96,64),mat[a[0]]);s.position.copy(P[i]);G.add(s)});
const up=new THREE.Vector3(0,1,0);
function cyl(p,q,r,off){const d=new THREE.Vector3().subVectors(q,p),L=d.length();const g=new THREE.CylinderGeometry(r,r,L,40,1,true);const m=new THREE.Mesh(g,bm);
  m.position.copy(p).addScaledVector(d,.5).add(off);m.quaternion.setFromUnitVectors(up,d.clone().normalize());G.add(m)}
const cam=new THREE.PerspectiveCamera(24,W/H,.1,200);cam.position.set(0,0,34);cam.lookAt(0,0,0);
M.bonds.forEach(([i,j,o])=>{const p=P[i],q=P[j];
  if(o===1){cyl(p,q,.14,new THREE.Vector3());return}
  const d=new THREE.Vector3().subVectors(q,p).normalize();let n=new THREE.Vector3().crossVectors(d,new THREE.Vector3(0,0,1));if(n.length()<.1)n.set(1,0,0);n.normalize().multiplyScalar(.13);
  cyl(p,q,.085,n);cyl(p,q,.085,n.clone().negate())});
/* pose: a gentle three-quarter tilt so the rings read as rings and the model has depth */
G.rotation.set(-.32,.42,-.18);
const bb=new THREE.Box3().setFromObject(G);const c=bb.getCenter(new THREE.Vector3());G.position.sub(c);
const sz=bb.getSize(new THREE.Vector3());const fit=Math.max(sz.x/(W/H),sz.y)/ (2*Math.tan(THREE.MathUtils.degToRad(12)))*1.12;cam.position.set(0,0,fit+sz.z/2);cam.lookAt(0,0,0);
rn.render(sc,cam);rn.render(sc,cam);
window.__done=rn.domElement.toDataURL('image/png');
</script></body></html>`;
(async()=>{
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:800,height:600}});
p.on('console',m=>console.log('page:',m.text()));p.on('pageerror',e=>console.log('err',e.message));
await p.route('http://r.local/**',async r=>{const u=new URL(r.request().url());
 if(u.pathname==='/index.html')return r.fulfill({body:PAGE,contentType:'text/html'});
 r.fulfill({body:fs.readFileSync(path.join(K,'node_modules',decodeURIComponent(u.pathname))),contentType:'text/javascript'})});
await p.goto('http://r.local/index.html');
await p.waitForFunction(()=>window.__done,null,{timeout:900000});
const out=process.argv[2]||path.join(__dirname,'render.png');
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
console.log('wrote',out);await b.close();})();

/* Offline render of the Sindri Materials hero (HOME_BRIEF update option c: a crafted render of the firm's real product).
   Subject: a Sindri graphene cryo-EM grid as sold (sindrimaterials.com/collections/graphene-cryo-em-grids): a 3.05 mm
   300-mesh gold grid disc with a solid rim, its ~36x36 square windows covered by R1.2/1.3 holey carbon carrying
   continuous monolayer graphene, seen in a slow tilt under studio light. Generic geometry, no branding. Real alpha (DJ/DP).
   Output: render.png. Run: node _kit/home/sindrimaterials/render.js [out] */
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
/* studio environment: dark room, long cool softboxes overhead, a warm card low left, a cyan rim (the logo's cube) */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x05080d);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(20,.4,6,0xf4f7ff,4.6,-3,13,3);box(8,.3,8,0xfff3e0,2.4,0,9,9);
box(.4,9,16,0x16b4f0,1.7,14,2,-5);box(.3,2.2,16,0xeaf6ff,2.6,13,8,2);
box(.3,6,12,0xffe6c4,1.5,-14,1,3);
box(5,3,.3,0xe9eef5,2.2,-5,4,16);box(3,6,.3,0xfff0dc,1.6,6,-3,16);
box(16,.3,9,0xffd9a8,1.2,3,-11,6);
sc.environment=pm.fromScene(env,0.03).texture;

const grid=new THREE.Group();
const T=.022,RIN=1.33,ROUT=1.525,P=3.05/36,B=.026;   /* 1 unit = 1 mm: disc, rim, 300-mesh pitch, bar width */
const gold=new THREE.MeshPhysicalMaterial({color:0xf1bf63,metalness:1,roughness:.17,envMapIntensity:1.6,clearcoat:.2,clearcoatRoughness:.3});
const goldR=new THREE.MeshPhysicalMaterial({color:0xe9b65a,metalness:1,roughness:.2,envMapIntensity:1.5});
/* rim: a turned annulus with softened edges */
const V=(r,y)=>new THREE.Vector2(r,y);
grid.add(new THREE.Mesh(new THREE.LatheGeometry([V(RIN,0),V(ROUT-.012,0),V(ROUT,.008),V(ROUT,T-.008),V(ROUT-.012,T),V(RIN,T),V(RIN,0)],512),goldR));
/* the mesh bars, each clipped to the rim */
const n=Math.ceil(RIN*2/P)+2;
for(let k=-n/2;k<=n/2;k++){const x=k*P;if(Math.abs(x)>RIN-.004)continue;const L=2*Math.sqrt((RIN+.01)**2-x*x);
  const g1=new THREE.BoxGeometry(B,T*.92,L);const m1=new THREE.Mesh(g1,gold);m1.position.set(x,T*.46,0);grid.add(m1);
  const g2=new THREE.BoxGeometry(L,T*.92,B);const m2=new THREE.Mesh(g2,gold);m2.position.set(0,T*.46,x);grid.add(m2)}
/* the holey-carbon film with its graphene layer across every window: a thin, slightly translucent carbon-grey sheet,
   each window a touch different in tone, with a faint thin-film sheen */
const cvs=document.createElement('canvas');cvs.width=cvs.height=2048;const cx=cvs.getContext('2d');
cx.fillStyle='#30343c';cx.fillRect(0,0,2048,2048);let sd=11;const R=()=>(sd=(sd*16807)%2147483647)/2147483647;
const px=2048/(RIN*2)*P;for(let i=0;i<40;i++)for(let j=0;j<40;j++){const v=R();cx.fillStyle='rgba('+(v<.5?'20,22,28,':'120,126,138,')+(.04+R()*.08).toFixed(3)+')';
  cx.fillRect(1024+(i-20)*px,1024+(j-20)*px,px,px)}
const tex=new THREE.CanvasTexture(cvs);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=8;
const film=new THREE.MeshPhysicalMaterial({map:tex,metalness:0,roughness:.18,transparent:true,opacity:.86,clearcoat:.6,clearcoatRoughness:.1,
  iridescence:.55,iridescenceIOR:1.6,iridescenceThicknessRange:[260,520],envMapIntensity:1.1,side:THREE.DoubleSide});
const fg=new THREE.CircleGeometry(RIN+.004,256);fg.rotateX(-Math.PI/2);const fm=new THREE.Mesh(fg,film);fm.position.y=-.003;grid.add(fm);

/* pose: tilted back toward the light, mesh on a diagonal */
const holder=new THREE.Group();holder.add(grid);sc.add(holder);
grid.rotation.y=.42;holder.rotation.set(1.1,0,-.28);

const key=new THREE.SpotLight(0xfff4e2,440,60,.5,1,1.3);key.position.set(-6,12,9);sc.add(key);
const rim=new THREE.SpotLight(0x22b6f0,160,40,.45,1,1.2);rim.position.set(9,4,-8);sc.add(rim);
const fill=new THREE.SpotLight(0xdfeeff,80,40,.7,1,1.4);fill.position.set(3,-8,9);sc.add(fill);

const cam=new THREE.PerspectiveCamera(36,W/H,.1,100);cam.position.set(0,0,7.4);cam.lookAt(0,0,0);
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

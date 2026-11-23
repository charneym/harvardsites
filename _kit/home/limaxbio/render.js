/* Offline render of the LiMax Biosciences hero (HOME_BRIEF update option c: a crafted render of the real material).
   Subject: a piece of swollen hydrogel, the dual polymer network LiMax builds its adhesives from: a translucent, water-clear
   gel block with soft swollen edges and a wet clearcoat, and inside it the cross-linked polymer network itself (coiled
   chains meeting at cross-link junctions, with a few trapped bubbles), lit in the brand's teal -> blue -> violet.
   Generic geometry, no branding. Real alpha (DJ/DP). Run: node _kit/home/limaxbio/render.js [out.png] [W] [H] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=+(process.argv[3]||1800),H=+(process.argv[4]||1500);
const PAGE=`<!doctype html><html><body style="margin:0;background:transparent">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,premultipliedAlpha:false});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,0);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.0;
rn.outputColorSpace=THREE.SRGBColorSpace;document.body.appendChild(rn.domElement);
let seed=7;const R=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646};
const sc=new THREE.Scene();sc.fog=new THREE.Fog(0x020108,8.2,11.4);
/* studio: near-black room, a long teal softbox upper left, a blue strip overhead, a violet card right and behind */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x020108);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(8,1.6,5,0x2fd1bd,2.6,-7,10,6);box(.4,7,9,0x2fb5a5,2.4,-13,4,4);
box(10,1.2,4,0x5d9cf0,1.6,3,12,-3);box(.4,8,12,0x8a4fd6,3.0,13,1,-4);box(6,4,.3,0x4931c6,2.2,6,-2,-14);
box(4,2.5,.3,0xe8f6ff,2.6,-4,5,14);box(14,.3,7,0x1a3c7a,1.0,0,-11,4);
sc.environment=pm.fromScene(env,0.14).texture;

const G=new THREE.Group();sc.add(G);
/* the gel: a swollen rounded block, its faces bulged by swelling and gently uneven */
const SX=1.42,SY=1.0,SZ=1.18;
const geo=new RoundedBoxGeometry(SX*2,SY*2,SZ*2,12,.5);const P=geo.attributes.position,v=new THREE.Vector3();
for(let i=0;i<P.count;i++){v.fromBufferAttribute(P,i);const nx=v.x/SX,ny=v.y/SY,nz=v.z/SZ;
  const bul=1+.07*(1-Math.min(1,nx*nx))*(1-Math.min(1,ny*ny))+.05*(1-Math.min(1,ny*ny))*(1-Math.min(1,nz*nz))+.04*(1-Math.min(1,nx*nx))*(1-Math.min(1,nz*nz));
  const n=.018*Math.sin(v.x*3.1+v.y*1.7)+.014*Math.sin(v.y*4.3-v.z*2.2)+.012*Math.sin(v.z*5.1+v.x*2.6);
  v.multiplyScalar(bul+n);v.y-=.05*Math.max(0,-ny)*Math.abs(nx);P.setXYZ(i,v.x,v.y,v.z)}
geo.computeVertexNormals();
/* the gel skin: wet, glossy reflections only (added on top), so the water-clear body shows the network inside */
const gelM=new THREE.MeshPhysicalMaterial({color:0x000000,metalness:0,roughness:.05,clearcoat:1,clearcoatRoughness:.03,specularIntensity:1,envMapIntensity:.62,
  transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});
const gel=new THREE.Mesh(geo,gelM);gel.renderOrder=5;G.add(gel);
/* the network: cross-link junctions spread through the gel, each joined to its nearest neighbours by a coiled chain */
const nodes=[];let tries=0;
while(nodes.length<175&&tries<20000){tries++;const p=new THREE.Vector3((R()*2-1)*SX*.9,(R()*2-1)*SY*.86,(R()*2-1)*SZ*.86);
  const q=new THREE.Vector3(p.x/SX,p.y/SY,p.z/SZ);if(Math.pow(Math.abs(q.x),4)+Math.pow(Math.abs(q.y),4)+Math.pow(Math.abs(q.z),4)>.9)continue;
  if(nodes.some(o=>o.distanceTo(p)<.25))continue;nodes.push(p)}
const edges=new Set();nodes.forEach((a,i)=>{const d=nodes.map((b,j)=>[a.distanceTo(b),j]).filter(x=>x[1]!==i).sort((x,y)=>x[0]-y[0]);
  const k=3+(R()<.4?1:0);for(let m=0;m<k;m++){if(d[m][0]>.62)break;const e=i<d[m][1]?i+'-'+d[m][1]:d[m][1]+'-'+i;edges.add(e)}});
const C0=new THREE.Color(0x2fc4b2),C1=new THREE.Color(0x3a7bd5),C2=new THREE.Color(0x8a4fd6);
function hue(x){const t=Math.min(1,Math.max(0,(x/SX+1)/2*1.1-.12));return t<.5?C0.clone().lerp(C1,t*2):C1.clone().lerp(C2,(t-.5)*2)}
function chainMesh(pts,r,mat){const c=new THREE.CatmullRomCurve3(pts,false,'centripetal');const tg=new THREE.TubeGeometry(c,pts.length*7,r,7,false);
  const col=[];const pp=tg.attributes.position;for(let i=0;i<pp.count;i++){const h=hue(pp.getX(i));col.push(h.r,h.g,h.b)}
  tg.setAttribute('color',new THREE.Float32BufferAttribute(col,3));return new THREE.Mesh(tg,mat)}
const chM=new THREE.MeshPhysicalMaterial({vertexColors:true,color:0x7a8090,roughness:.28,metalness:0,clearcoat:.8,clearcoatRoughness:.15,emissive:0xffffff,emissiveIntensity:0,envMapIntensity:.7});
chM.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\\n totalEmissiveRadiance = vColor.rgb*0.55;')};
function coil(a,b,amp,n){const pts=[a.clone()];const d=b.clone().sub(a);const L=d.length();const u=d.clone().normalize();
  const p1=new THREE.Vector3(R()-.5,R()-.5,R()-.5).cross(u).normalize();const p2=u.clone().cross(p1);const ph=R()*6.28,fr=2+R()*2.5;
  for(let i=1;i<n;i++){const t=i/n;const env=Math.sin(Math.PI*t);const q=a.clone().addScaledVector(d,t);
    q.addScaledVector(p1,env*amp*(Math.sin(ph+t*fr*6.28)+(R()-.5)*.6)*L).addScaledVector(p2,env*amp*(Math.cos(ph*1.3+t*fr*5.1)+(R()-.5)*.6)*L);pts.push(q)}
  pts.push(b.clone());return pts}
edges.forEach(e=>{const [i,j]=e.split('-').map(Number);G.add(chainMesh(coil(nodes[i],nodes[j],.06,9),.0115,chM))});
/* the second, looser network threading through the first (dual network): fewer, longer, finer chains */
for(let k=0;k<26;k++){const a=nodes[Math.floor(R()*nodes.length)];let b=null,best=9;nodes.forEach(o=>{const dd=o.distanceTo(a);if(dd>.75&&dd<1.05&&Math.abs(dd-.9)<best){best=Math.abs(dd-.9);b=o}});
  if(b)G.add(chainMesh(coil(a,b,.11,14),.0065,chM))}
/* cross-link junctions */
const jg=new THREE.IcosahedronGeometry(1,3);
nodes.forEach(p=>{const m=new THREE.Mesh(jg,new THREE.MeshPhysicalMaterial({color:hue(p.x),roughness:.22,clearcoat:1,emissive:hue(p.x),emissiveIntensity:.55,envMapIntensity:1.2}));
  m.position.copy(p);m.scale.setScalar(.026+R()*.012);G.add(m)});
/* trapped bubbles and water: bright-rimmed spheres (fresnel only) */
const bubM=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{c:{value:new THREE.Color(0xbfe9ff)}},
  vertexShader:'varying vec3 n;varying vec3 vv;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);vv=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',
  fragmentShader:'uniform vec3 c;varying vec3 n;varying vec3 vv;void main(){float f=pow(1.-abs(dot(n,vv)),3.);float s=pow(max(dot(reflect(-vv,n),normalize(vec3(-.5,.7,.5))),0.),40.);gl_FragColor=vec4(c*(f*.55+s*1.6),1.);}'});
for(let k=0;k<22;k++){const p=new THREE.Vector3((R()*2-1)*SX*.8,(R()*2-1)*SY*.75,(R()*2-1)*SZ*.75);const m=new THREE.Mesh(jg,bubM);m.position.copy(p);m.scale.setScalar(.018+R()*.05);G.add(m)}
/* soft inner glow so the body reads as a lit, water-filled volume, not empty glass */
const glowM=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.BackSide,
  uniforms:{a:{value:new THREE.Color(0x2fb5a5)},b:{value:new THREE.Color(0x8a4fd6)}},
  vertexShader:'varying vec3 n;varying vec3 vv;varying vec3 lp;void main(){lp=position;vec4 mv=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);vv=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',
  fragmentShader:'uniform vec3 a;uniform vec3 b;varying vec3 n;varying vec3 vv;varying vec3 lp;void main(){float f=pow(abs(dot(n,vv)),1.6);vec3 col=mix(a,b,clamp(lp.x/3.4+.5,0.,1.));gl_FragColor=vec4(col*f*.30,1.);}'});
const gm=new THREE.Mesh(geo,glowM);gm.scale.setScalar(.97);G.add(gm);
/* the swollen surface: a soft fresnel rim in the brand gradient, so the gel's outline reads against the dark */
const rimM=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
  uniforms:{a:{value:new THREE.Color(0x2fb5a5)},m:{value:new THREE.Color(0x3a7bd5)},b:{value:new THREE.Color(0x8a4fd6)}},
  vertexShader:'varying vec3 n;varying vec3 vv;varying vec3 lp;void main(){lp=position;vec4 mv=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);vv=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',
  fragmentShader:'uniform vec3 a;uniform vec3 m;uniform vec3 b;varying vec3 n;varying vec3 vv;varying vec3 lp;void main(){float f=pow(1.-abs(dot(n,vv)),2.4);float t=clamp(lp.x/3.4+.5+lp.y*.08,0.,1.);vec3 col=t<.5?mix(a,m,t*2.):mix(m,b,t*2.-1.);gl_FragColor=vec4(col*f*.75,1.);}'});
const rm=new THREE.Mesh(geo,rimM);rm.renderOrder=4;G.add(rm);
/* water beading on the swollen top face */
G.updateMatrixWorld(true);const rc=new THREE.Raycaster();const dropM=new THREE.MeshPhysicalMaterial({color:0x000000,roughness:.02,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.6,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false});
for(let k=0;k<34;k++){const x=(R()*2-1)*SX*.85,z=(R()*2-1)*SZ*.85;rc.set(new THREE.Vector3(x,5,z),new THREE.Vector3(0,-1,0));const h=rc.intersectObject(gel)[0];if(!h)continue;
  const r=.022+Math.pow(R(),2.2)*.07;const d=new THREE.Mesh(jg,dropM);d.position.copy(h.point).addScaledVector(h.face.normal,r*.18);d.scale.set(r,r*.5,r);G.add(d);
  const dr=new THREE.Mesh(jg,rimM);dr.position.copy(d.position);dr.scale.copy(d.scale);G.add(dr)}
G.rotation.set(.58,-.7,.1);
const key=new THREE.SpotLight(0x8ff0e0,320,60,.55,1,1.3);key.position.set(-7,9,8);sc.add(key);
const top=new THREE.SpotLight(0x6aa2ff,180,60,.6,1,1.3);top.position.set(2,12,2);sc.add(top);
const rim=new THREE.SpotLight(0x9b5cf0,260,50,.5,1,1.2);rim.position.set(9,2,-7);sc.add(rim);
const low=new THREE.SpotLight(0x4931c6,120,40,.7,1,1.4);low.position.set(4,-8,6);sc.add(low);
sc.add(new THREE.AmbientLight(0x10142a,1.2));
const cam=new THREE.PerspectiveCamera(30,W/H,.1,100);cam.position.set(0,.2,9.4);cam.lookAt(0,0,0);
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

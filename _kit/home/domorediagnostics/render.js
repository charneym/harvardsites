/* Offline render of the DoMore Diagnostics hero (HOME_BRIEF option c: a crafted render of the real object).
   Subject: the thing Histotype Px reads, a routine H&E-stained tissue slide: a 75 x 25 mm glass slide with a frosted label end,
   a coverslip, and under it a stained section of colorectal adenocarcinoma. The section texture is quilted (quilt.py) from
   DoMore's own published H&E image, so the micro-structure is real tissue. Rendered on pure black and composited with
   'lighter' in field.js, so no box edge can appear (DJ/DP). Run: node render.js tissue.png out.png [W] [H] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const TEX=path.resolve(process.argv[2]);const W=+(process.argv[4]||2000),H=+(process.argv[5]||1400);
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,1);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.05;
rn.outputColorSpace=THREE.SRGBColorSpace;document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
/* studio for the glass: black room, a long cool-white softbox above, a lavender strip left, a violet card behind right */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x000000);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(14,.6,3.2,0xf4eefc,2.2,0,11,-2);box(.5,6,12,0xb48ae0,1.6,-12,4,0);box(.5,6,10,0x7d3fb8,2.0,12,3,-3);box(10,4,.4,0x5a2a8a,1.2,0,2,-13);box(5,.5,2,0xffffff,1.4,-3,10,6);
sc.environment=pm.fromScene(env,0.03).texture;
const G=new THREE.Group();sc.add(G);
const tl=new THREE.TextureLoader();
tl.load('http://r.local/__tex.png',tex=>{
tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=16;
/* slide glass: thin, near-clear, reflective; the edges carry the faint green of soda-lime glass */
const SL=7.5,SW=2.5,ST=.1;
const gGeo=new RoundedBoxGeometry(SL,ST,SW,3,.012);
const glass=new THREE.MeshPhysicalMaterial({color:0x0a0c0b,metalness:0,roughness:.04,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.1,transparent:true,opacity:.55,depthWrite:false});
const gl=new THREE.Mesh(gGeo,glass);gl.renderOrder=0;G.add(gl);
/* polished edges: light piping along the rim */
const eM=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
  vertexShader:'varying vec3 n;varying vec3 lp;void main(){lp=position;n=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'varying vec3 n;varying vec3 lp;void main(){float side=1.-abs(n.y);float k=side*(.55+.45*smoothstep(-3.7,3.7,lp.x));gl_FragColor=vec4(vec3(.62,.80,.70)*k*.55,1.);}'});
const ed=new THREE.Mesh(gGeo,eM);ed.renderOrder=3;G.add(ed);
/* frosted label end (lavender frost), matte */
const fc=document.createElement('canvas');fc.width=512;fc.height=640;const fx=fc.getContext('2d');const id=fx.createImageData(512,640);
for(let i=0;i<id.data.length;i+=4){const v=200+Math.random()*55;id.data[i]=v;id.data[i+1]=v;id.data[i+2]=v;id.data[i+3]=255}fx.putImageData(id,0,0);
const ft=new THREE.CanvasTexture(fc);ft.colorSpace=THREE.SRGBColorSpace;
const fr=new THREE.Mesh(new THREE.BoxGeometry(1.95,.006,SW-.02),new THREE.MeshStandardMaterial({color:0x3d2e5c,map:ft,roughness:.97,metalness:0,envMapIntensity:.2,bumpMap:ft,bumpScale:.6}));
fr.position.set(-SL/2+1.0,ST/2+.003,0);G.add(fr);
/* the stained section, lying on the glass */
const TW=3.55,TH=TW*1000/1500;
const tM=new THREE.MeshBasicMaterial({map:tex,transparent:true,toneMapped:false,color:0xdcd6e2,depthWrite:false});
const ts=new THREE.Mesh(new THREE.PlaneGeometry(TW,TH),tM);ts.rotation.x=-Math.PI/2;ts.position.set(.95,ST/2+.002,0);ts.renderOrder=3;G.add(ts);
/* coverslip over the section */
const cGeo=new RoundedBoxGeometry(5.0,.018,2.3,2,.004);
const cs=new THREE.Mesh(cGeo,new THREE.MeshPhysicalMaterial({color:0x000000,roughness:.03,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.0,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
cs.position.set(1.05,ST/2+.012,0);cs.renderOrder=4;G.add(cs);
const ce=new THREE.Mesh(cGeo,eM);ce.position.copy(cs.position);ce.renderOrder=5;G.add(ce);
const shM=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
  vertexShader:'varying vec2 u;void main(){u=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader:'varying vec2 u;void main(){float d=u.x*.8+u.y*.45;float b=exp(-pow((d-.62)/.08,2.))*.15+exp(-pow((d-.80)/.025,2.))*.08+.025;float e=smoothstep(0.,.04,u.x)*smoothstep(1.,.96,u.x)*smoothstep(0.,.05,u.y)*smoothstep(1.,.95,u.y);gl_FragColor=vec4(vec3(.93,.90,1.)*b*e,1.);}'});
const sh=new THREE.Mesh(new THREE.PlaneGeometry(7.5,2.5),shM);sh.rotation.x=-Math.PI/2;sh.position.set(0,.075,0);sh.renderOrder=6;G.add(sh);
G.rotation.set(0,.62,0);
const key=new THREE.SpotLight(0xfff6ff,190,60,.5,1,1.3);key.position.set(-4,10,7);sc.add(key);
const rim=new THREE.SpotLight(0xa070e0,160,50,.5,1,1.2);rim.position.set(8,4,-6);sc.add(rim);
sc.add(new THREE.AmbientLight(0x1a1026,1.0));
const cam=new THREE.PerspectiveCamera(28,W/H,.1,100);cam.position.set(0,10.6,10.9);cam.lookAt(0,-.1,0);
rn.render(sc,cam);rn.render(sc,cam);
window.__done=rn.domElement.toDataURL('image/png');});
</script></body></html>`;
(async()=>{
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:800,height:600}});
p.on('console',m=>console.log('page:',m.text()));p.on('pageerror',e=>console.log('err',e.message));
await p.route('http://r.local/**',async r=>{const u=new URL(r.request().url());
 if(u.pathname==='/index.html')return r.fulfill({body:PAGE,contentType:'text/html'});
 if(u.pathname==='/__tex.png')return r.fulfill({body:fs.readFileSync(TEX),contentType:'image/png'});
 r.fulfill({body:fs.readFileSync(path.join(K,'node_modules',decodeURIComponent(u.pathname))),contentType:'text/javascript'})});
await p.goto('http://r.local/index.html');
await p.waitForFunction(()=>window.__done,null,{timeout:900000});
const out=process.argv[3]||path.join(__dirname,'render.png');
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
console.log('wrote',out);await b.close();})();

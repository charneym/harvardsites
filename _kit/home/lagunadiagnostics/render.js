/* Offline render of the Laguna Diagnostics hero (HOME_BRIEF option c: a crafted render of the real object).
   Subject: the thing their test reads, a single blood draw: an evacuated blood collection tube (plain, unbranded, no label)
   with a ridged cap in Laguna orange, about two thirds full of whole blood. Studio light on pure black so field.js can
   composite it with 'lighter' (no box edge can appear, DJ/DP). Run: node render.js out.png [W] [H] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=+(process.argv[3]||1500),H=+(process.argv[4]||1900);
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,1);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.0;
rn.outputColorSpace=THREE.SRGBColorSpace;document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
/* studio: black room, tall cool softbox left, warm strip right, top light */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x000000);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(.6,16,5,0xeef2ff,2.4,-11,2,3);box(.5,14,2.5,0xffd2a0,1.5,11,1,-2);box(8,.5,8,0xffffff,1.6,0,12,0);box(6,10,.5,0x2a3cff,0.25,4,1,-12);box(3,8,.5,0xffffff,1.0,-4,0,12);
sc.environment=pm.fromScene(env,0.02).texture;
const G=new THREE.Group();sc.add(G);
/* tube profile (units: cm). 13 mm OD, 100 mm long, round bottom */
const R=0.65,Ri=0.58,L=10.0,seg=160;
function prof(r,y0,y1){const p=[];for(let i=0;i<=24;i++){const a=-Math.PI/2+i/24*Math.PI/2;p.push(new THREE.Vector2(Math.max(.0001,r*Math.cos(a)),y0+r+r*Math.sin(a)))}p.push(new THREE.Vector2(r,y1));return p}
/* outer wall: rim-lit glass (additive fresnel), plus a reflective clear coat */
const wallGeo=new THREE.LatheGeometry(prof(R,0,L-.2),seg);
const fres=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide,
 vertexShader:'varying vec3 n;varying vec3 v;varying float yy;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);n=normalize(normalMatrix*normal);yy=position.y;gl_Position=projectionMatrix*mv;}',
 fragmentShader:'varying vec3 n;varying vec3 v;varying float yy;void main(){float f=pow(1.-abs(dot(n,v)),3.2);gl_FragColor=vec4(vec3(.78,.84,1.)*f*.75,1.);}'});
const wall=new THREE.Mesh(wallGeo,fres);wall.renderOrder=5;G.add(wall);
const coat=new THREE.Mesh(wallGeo,new THREE.MeshPhysicalMaterial({color:0x000000,roughness:.04,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.25,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
coat.renderOrder=6;G.add(coat);
/* whole blood: deep red, glossy, filling to 6.4 cm with a meniscus */
const FH=6.4;const bp=prof(Ri,.07,FH);bp.push(new THREE.Vector2(Ri*.6,FH-.05));bp.push(new THREE.Vector2(0.0001,FH-.07));
const blood=new THREE.Mesh(new THREE.LatheGeometry(bp,seg),new THREE.MeshPhysicalMaterial({color:0x3a0206,roughness:.12,metalness:0,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:.85,emissive:0x0c0001}));
blood.renderOrder=1;G.add(blood);
/* inner blood glow toward the edges (light through the wall) */
const bg=new THREE.Mesh(new THREE.LatheGeometry(bp,seg),new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
 vertexShader:'varying vec3 n;varying vec3 v;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}',
 fragmentShader:'varying vec3 n;varying vec3 v;void main(){float f=pow(1.-abs(dot(n,v)),2.);gl_FragColor=vec4(vec3(.42,.02,.03)*f*.5,1.);}'}));
bg.renderOrder=2;G.add(bg);
/* a faint film of blood on the glass just above the fill line */
/* cap: ridged plastic in Laguna orange, slightly wider than the tube */
const cp=[];const CR=.78,CH=2.3,cy0=L-1.25;cp.push(new THREE.Vector2(.0001,cy0));cp.push(new THREE.Vector2(CR*.92,cy0));cp.push(new THREE.Vector2(CR,cy0+.08));
for(let i=0;i<=200;i++){const t=i/200;const y=cy0+.08+t*(CH-.3);const rr=CR+(t>.12&&t<.88?.008*Math.cos(t*Math.PI*2*34):0);cp.push(new THREE.Vector2(rr,y))}
cp.push(new THREE.Vector2(CR-.05,cy0+CH-.12));cp.push(new THREE.Vector2(CR-.22,cy0+CH));cp.push(new THREE.Vector2(.0001,cy0+CH));
const cap=new THREE.Mesh(new THREE.LatheGeometry(cp,seg),new THREE.MeshPhysicalMaterial({color:0xd96a00,roughness:.5,metalness:0,clearcoat:.2,clearcoatRoughness:.5,envMapIntensity:.7}));
G.add(cap);
/* grey rubber stopper visible just under the cap, inside the glass */
const st=new THREE.Mesh(new THREE.CylinderGeometry(Ri,Ri,.55,seg),new THREE.MeshStandardMaterial({color:0x2a2a2e,roughness:.7,envMapIntensity:.6}));st.position.y=cy0-.22;G.add(st);
G.position.y=-L/2;const P=new THREE.Group();P.add(G);sc.add(P);
P.rotation.set(0.12,0,-0.30);
const key=new THREE.SpotLight(0xfff4ec,200,60,.45,1,1.2);key.position.set(-7,9,9);sc.add(key);
const rim=new THREE.SpotLight(0x6f86ff,220,50,.5,1,1.2);rim.position.set(8,3,-7);sc.add(rim);
const warm=new THREE.SpotLight(0xffa040,35,50,.6,1,1.2);warm.position.set(6,-6,6);sc.add(warm);
sc.add(new THREE.AmbientLight(0x10141f,1.0));
const cam=new THREE.PerspectiveCamera(30,W/H,.1,100);cam.position.set(0,2.2,24.5);cam.lookAt(0,0,0);
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

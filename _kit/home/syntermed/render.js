/* Offline render of the Syntermed hero (HOME_BRIEF update option c: a crafted render of the real subject).
   Subject: the left ventricle as Syntermed's Cardiac Toolbox shows it, a 3D myocardial perfusion surface coloured
   on the nuclear-medicine heat scale (white/gold = normal uptake, red = reduced), here with a small inferior-apical
   defect, and the coronary arteries in the logo's blue lying on the epicardium. Not patient data; a crafted model.
   Rendered with ALPHA (no ground, DJ/DP). Output: render.png. Run: node _kit/home/syntermed/render.js [out] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=1800,H=2000;
const PAGE=`<!doctype html><html><body style="margin:0;background:transparent">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,premultipliedAlpha:false});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,0);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=.9;
rn.outputColorSpace=THREE.SRGBColorSpace;document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x03070d);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(18,.3,6,0xfff6e8,3.2,-2,12,4);box(.3,8,14,0x2c78d8,1.4,14,1,-4);box(.3,6,10,0xffe7b0,.9,-14,2,3);box(22,5,.3,0xe8eef8,.6,0,3,16);box(14,.2,8,0x6aa8ff,.9,3,-10,5);
sc.environment=pm.fromScene(env,0.03).texture;

/* ---------- myocardium: an ellipsoidal shell, open at the base (1 unit ~ 1.5 cm) ---------- */
const NA=360,NY=220,YB=3.05;
function smooth(a,b,x){x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*(3-2*x)}
function n3(x,y,z){return Math.sin(x*3.1+y*1.7)*Math.cos(z*2.3-y*.9)*.5+Math.sin(x*7.3-z*5.1+y*3.7)*.25}
/* perfusion 0..1 at angle a (0 = anterior), height y (0 apex .. YB base) */
const DEF_A=.75,DEF_Y=1.05;
function perf(a,y){
  let v=.73+.08*n3(Math.cos(a)*2,y,Math.sin(a)*2)+.05*Math.cos(a*2+.7)+.03*n3(Math.cos(a)*5,y*2.4,Math.sin(a)*5);
  v-=.06*smooth(2.2,3.05,y);                      /* the base reads a little lower, as on real maps */
  let da=Math.atan2(Math.sin(a-DEF_A),Math.cos(a-DEF_A)),dy=y-DEF_Y;
  v-=.42*Math.exp(-(da*da)/(2*.55*.55)-(dy*dy)/(2*.8*.8));
  return Math.max(.05,Math.min(1,v));
}
/* nuclear "heat" scale: black - deep red - red - orange - gold - pale yellow - white */
const ST=[[0,[8,2,4]],[.22,[90,6,10]],[.42,[196,30,18]],[.6,[240,110,20]],[.76,[250,196,30]],[.9,[255,236,140]],[1,[255,252,232]]];
function heat(t){for(let i=1;i<ST.length;i++){if(t<=ST[i][0]){const a=ST[i-1],b=ST[i],k=(t-a[0])/(b[0]-a[0]);return a[1].map((c,j)=>Math.pow((c+(b[1][j]-c)*k)/255,2.2))}}return ST[ST.length-1][1].map(c=>Math.pow(c/255,2.2))}
function shellR(y,A,B){const c=3.55,u=(c-y)/B;return A*Math.sqrt(Math.max(0,1-u*u))}
/* a gentle anatomical asymmetry: the free wall bulges, the septum is flatter */
function asym(a){return 1+.06*Math.cos(a-Math.PI*.5)-.04*Math.cos(2*a)}
const RA0=-2.5,RA1=-.3;
function rvw(a,y){let d=Math.atan2(Math.sin(a),Math.cos(a));if(d<RA0||d>RA1)return 0;const u=(d-RA0)/(RA1-RA0);return Math.pow(Math.sin(Math.PI*u),.7)*smooth(.7,1.9,y)*(1-.25*smooth(2.6,3.05,y))}
function surface(A,B,y0,inner){
  const pos=[],col=[],idx=[];
  for(let j=0;j<=NY;j++){const t=j/NY,y=y0+(YB-y0)*Math.pow(t,1.15);
    for(let i=0;i<=NA;i++){const a=i/NA*Math.PI*2,rv=inner?0:rvw(a,y),r=shellR(y,A,B)*asym(a)*(1+.42*rv);
      pos.push(Math.sin(a)*r,y,Math.cos(a)*r);
      let c=heat(perf(a,y)*(1-.55*rv));if(inner)c=c.map(v=>v*.32);col.push(...c)}}
  for(let j=0;j<NY;j++)for(let i=0;i<NA;i++){const p=j*(NA+1)+i,q=p+NA+1;if(!inner)idx.push(p,p+1,q,p+1,q+1,q);else idx.push(p,q,p+1,p+1,q,q+1)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));g.setIndex(idx);g.computeVertexNormals();return g}
const heart=new THREE.Group();
const OA=1.42,OB=3.55,IA=.86,IB=2.85;
const mOut=new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:.58,metalness:0,clearcoat:.32,clearcoatRoughness:.3,sheen:.2,sheenColor:new THREE.Color('#ffe0a0'),envMapIntensity:.9});
heart.add(new THREE.Mesh(surface(OA,OB,0,false),mOut));
/* emissive glow layer: the uptake itself seems to glow, as a SPECT render does */
const glow=new THREE.Mesh(surface(OA*1.002,OB*1.001,0,false),new THREE.MeshBasicMaterial({vertexColors:true,transparent:true,opacity:.22,blending:THREE.AdditiveBlending,depthWrite:false}));heart.add(glow);
heart.add(new THREE.Mesh(surface(IA,IB,3.55-IB,true),new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:.6,side:THREE.DoubleSide,envMapIntensity:.4})));
/* the cut rim at the base, joining the two walls */
(function(){const pos=[],col=[],idx=[];for(let i=0;i<=NA;i++){const a=i/NA*Math.PI*2,ro=shellR(YB,OA,OB)*asym(a),ri=shellR(YB,IA,IB)*asym(a),c=heat(perf(a,YB)).map(v=>v*.8);
  pos.push(Math.sin(a)*ro,YB,Math.cos(a)*ro,Math.sin(a)*ri,YB,Math.cos(a)*ri);col.push(...c,...c.map(v=>v*.5))}
  for(let i=0;i<NA;i++){const p=i*2;idx.push(p,p+1,p+2,p+1,p+3,p+2)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(col,3));g.setIndex(idx);g.computeVertexNormals();
  heart.add(new THREE.Mesh(g,new THREE.MeshPhysicalMaterial({vertexColors:true,roughness:.5,side:THREE.DoubleSide})))})();
/* coronary arteries on the epicardium, in the logo blue: the LAD down the anterior groove, the circumflex around the base, diagonals */
const vMat=new THREE.MeshPhysicalMaterial({color:0x1557b0,roughness:.3,metalness:.1,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.4});
function on(a,y,lift){const r=(shellR(y,OA,OB)*asym(a)*(1+.42*rvw(a,y)))+lift;return new THREE.Vector3(Math.sin(a)*r,y,Math.cos(a)*r)}
function vessel(pts,r0,r1){const cv=new THREE.CatmullRomCurve3(pts);const N=260,g=new THREE.TubeGeometry(cv,N,1,20,false);
  const p=g.attributes.position,c=new THREE.Vector3();
  for(let i=0;i<=N;i++){const t=i/N,rr=r0+(r1-r0)*t,P=cv.getPointAt(t);for(let k=0;k<=20;k++){const ix=i*21+k;c.fromBufferAttribute(p,ix).sub(P).multiplyScalar(rr).add(P);p.setXYZ(ix,c.x,c.y,c.z)}}
  g.computeVertexNormals();heart.add(new THREE.Mesh(g,vMat))}
const AL=-.3;
vessel(Array.from({length:14},(_,k)=>{const y=3.1-k*.235;return on(AL+.12*Math.sin(k*.6)-k*.012,Math.max(.05,y),.035)}),.045,.02);
vessel(Array.from({length:12},(_,k)=>on(AL+.12+k*.22,2.97-k*.03,.035)),.042,.026);
vessel(Array.from({length:8},(_,k)=>on(AL+.08+k*.07,2.6-k*.27,.03)),.03,.016);
vessel(Array.from({length:8},(_,k)=>on(AL+.18+k*.1,1.9-k*.2,.03)),.028,.014);
vessel(Array.from({length:7},(_,k)=>on(AL-1.2-k*.05,2.9-k*.3,.03)),.03,.016);
/* pose: apex down and toward the viewer's left, base tilted up and away, so the open base just shows */
heart.position.y=-1.75;const holder=new THREE.Group();holder.add(heart);sc.add(holder);
holder.rotation.set(.16,0,0);holder.rotateOnWorldAxis(new THREE.Vector3(0,0,1),-.62);holder.rotateOnWorldAxis(new THREE.Vector3(0,1,0),.5);
const key=new THREE.SpotLight(0xfff2e0,150,50,.5,1,1.3);key.position.set(-7,10,10);sc.add(key);
const rim=new THREE.SpotLight(0x3d8cff,140,40,.5,1,1.2);rim.position.set(9,4,-8);sc.add(rim);
const fill=new THREE.SpotLight(0xffd59a,60,40,.7,1,1.4);fill.position.set(2,-9,8);sc.add(fill);
const cam=new THREE.PerspectiveCamera(21,W/H,.1,100);cam.position.set(0,.4,17);cam.lookAt(0,0,0);
rn.render(sc,cam);rn.render(sc,cam);window.__done=rn.domElement.toDataURL('image/png');
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

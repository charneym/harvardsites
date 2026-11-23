/* Offline render of the LiMax Biosciences hero, v4 (client round 4): a calm version of LiMax's own brand image. One smooth,
   flowing, translucent ribbon of hydrogel in their teal -> blue -> violet gradient, softly lit (fresnel edges, a glossy sheen,
   a faint inner glow), with a delicate polymer network inside: few, fine strands between soft glowing nodes, fading with depth.
   Rendered additively over black; alpha is recovered from the light itself, so it sits on the page ink with no box (DJ/DP).
   Run: node _kit/home/limaxbio/render4.js [out.png] [W] [H] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=+(process.argv[3]||2000),H=+(process.argv[4]||1400);
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js"}}</script>
<script type="module">
import * as THREE from 'three';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,1);document.body.appendChild(rn.domElement);
let seed=11;const R=()=>{seed=(seed*16807)%2147483647;return (seed-1)/2147483646};
const sc=new THREE.Scene();
const cam=new THREE.PerspectiveCamera(30,W/H,.1,100);cam.position.set(0,.8,10.2);cam.lookAt(0,-.02,0);
const C0=new THREE.Color(0x2fb5a5),C1=new THREE.Color(0x3a7bd5),C2=new THREE.Color(0x8a4fd6);
const grad=u=>u<.5?C0.clone().lerp(C1,u*2):C1.clone().lerp(C2,(u-.5)*2);
/* the ribbon: a long band that rises and falls once and a half and turns slowly about its own length */
function rib(u,v){const x=(u-.5)*5.6;const y=.62*Math.sin(u*Math.PI*1.35+.35)-.12;const z=.7*Math.cos(u*Math.PI*1.05+.2)-.2;
  const th=u*Math.PI*.95-.55;const w=.9*(.04+.96*Math.pow(Math.sin(Math.PI*Math.min(1,Math.max(0,u))),.7));
  const rip=.035*Math.sin(u*17.+v*2.)*Math.sin(Math.PI*u);
  return new THREE.Vector3(x,y+v*w*Math.cos(th)+rip,z+v*w*Math.sin(th))}
const NU=420,NV=70;
function ribGeo(off){const pos=[],uvs=[],idx=[];
  for(let j=0;j<=NV;j++)for(let i=0;i<=NU;i++){const u=i/NU,v=j/NV*2-1;const p=rib(u,v);
    if(off){const e=.002;const pu=rib(u+e,v).sub(rib(u-e,v)),pv=rib(u,v+e).sub(rib(u,v-e));p.addScaledVector(pu.cross(pv).normalize(),off)}
    pos.push(p.x,p.y,p.z);uvs.push(u,v)}
  for(let j=0;j<NV;j++)for(let i=0;i<NU;i++){const a=j*(NU+1)+i,b=a+1,c=a+NU+1,d=c+1;idx.push(a,c,b,b,c,d)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));g.setIndex(idx);g.computeVertexNormals();return g}
const ribM=(k)=>new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide,
  uniforms:{c0:{value:C0},c1:{value:C1},c2:{value:C2},k:{value:k}},
  vertexShader:'varying vec2 vu;varying vec3 n;varying vec3 vv;varying float dz;void main(){vu=uv;vec4 mv=modelViewMatrix*vec4(position,1.);n=normalize(normalMatrix*normal);vv=normalize(-mv.xyz);dz=-mv.z;gl_Position=projectionMatrix*mv;}',
  fragmentShader:'uniform vec3 c0;uniform vec3 c1;uniform vec3 c2;uniform float k;varying vec2 vu;varying vec3 n;varying vec3 vv;varying float dz;'+
   'void main(){float u=vu.x;vec3 col=u<.5?mix(c0,c1,u*2.):mix(c1,c2,u*2.-1.);vec3 nn=faceforward(n,-vv,n);float nv=abs(dot(nn,vv));'+
   'float fr=pow(1.-nv,2.6);vec3 L=normalize(vec3(-.4,.8,.6));float sp=pow(max(dot(reflect(-L,nn),vv),0.),46.);'+
   'float edge=smoothstep(.78,1.,abs(vu.y));float ends=smoothstep(0.,.16,u)*smoothstep(1.,.84,u);float depth=clamp(1.25-(dz-9.)*.32,.4,1.);'+
   'vec3 c=col*(.26+.95*fr+.30*edge)+mix(vec3(1.),col,.35)*sp*.75;gl_FragColor=vec4(c*ends*depth*k,1.);}'});
sc.add(new THREE.Mesh(ribGeo(.05),ribM(1.)));sc.add(new THREE.Mesh(ribGeo(-.05),ribM(.7)));
/* the network inside: a few nodes spread through the band, each joined to its nearest neighbours by a fine strand */
const nodes=[];let tries=0;/* each node keeps its (u,v) so strands can run along the band */
while(nodes.length<96&&tries<8000){tries++;const u=.08+R()*.84,v=(R()*2-1)*.8*Math.pow(Math.sin(Math.PI*u),.5);const p=rib(u,v);p.z+=(R()-.5)*.06;
  if(nodes.some(q=>q.p.distanceTo(p)<.33))continue;nodes.push({p,u,v})}
const lp=[],lc=[];const done=new Set();
function dep(p){return Math.min(1,Math.max(.25,1.25-(cam.position.distanceTo(p)-9.)*.32))}
nodes.forEach((a,i)=>{nodes.map((b,j)=>[a.p.distanceTo(b.p),j]).filter(x=>x[1]!==i).sort((x,y)=>x[0]-y[0]).slice(0,3).forEach(([d,j])=>{
  if(d>.62)return;const key=Math.min(i,j)+'-'+Math.max(i,j);if(done.has(key))return;done.add(key);const b=nodes[j];
  const N=14;for(let s=0;s<N;s++){const t0=s/N,t1=(s+1)/N;const sag=0;
    const q0=rib(a.u+(b.u-a.u)*t0,a.v+(b.v-a.v)*t0),q1=rib(a.u+(b.u-a.u)*t1,a.v+(b.v-a.v)*t1);
    lp.push(q0.x,q0.y,q0.z,q1.x,q1.y,q1.z);const c0=grad(a.u+(b.u-a.u)*t0).multiplyScalar(.5*dep(q0)),c1=grad(a.u+(b.u-a.u)*t1).multiplyScalar(.5*dep(q1));lc.push(c0.r,c0.g,c0.b,c1.r,c1.g,c1.b)}})});
const lg=new THREE.BufferGeometry();lg.setAttribute('position',new THREE.Float32BufferAttribute(lp,3));lg.setAttribute('color',new THREE.Float32BufferAttribute(lc,3));
sc.add(new THREE.LineSegments(lg,new THREE.LineBasicMaterial({vertexColors:true,transparent:true,blending:THREE.AdditiveBlending,depthWrite:false})));
/* soft nodes: a small bright core in a wide faint halo */
const cv=document.createElement('canvas');cv.width=cv.height=128;const x2=cv.getContext('2d');const gr=x2.createRadialGradient(64,64,0,64,64,64);
gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.08,'rgba(255,255,255,.85)');gr.addColorStop(.22,'rgba(255,255,255,.22)');gr.addColorStop(1,'rgba(255,255,255,0)');x2.fillStyle=gr;x2.fillRect(0,0,128,128);
const tx=new THREE.CanvasTexture(cv);
nodes.forEach(n=>{const s=new THREE.Sprite(new THREE.SpriteMaterial({map:tx,color:grad(n.u).lerp(new THREE.Color(1,1,1),.25).multiplyScalar(.9*dep(n.p)),transparent:true,blending:THREE.AdditiveBlending,depthWrite:false}));
  s.position.copy(n.p);const k=.10+R()*.10;s.scale.set(k,k,1);sc.add(s)});
rn.render(sc,cam);
window.__done=rn.domElement.toDataURL('image/png');
</script></body></html>`;
(async()=>{
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist']});
const p=await b.newPage({viewport:{width:800,height:600}});
p.on('pageerror',e=>console.log('err',e.message));
await p.route('http://r.local/**',async r=>{const u=new URL(r.request().url());if(u.pathname==='/index.html')return r.fulfill({body:PAGE,contentType:'text/html'});
 r.fulfill({body:fs.readFileSync(path.join(K,'node_modules',decodeURIComponent(u.pathname))),contentType:'text/javascript'})});
await p.goto('http://r.local/index.html');
await p.waitForFunction(()=>window.__done,null,{timeout:900000});
const out=process.argv[2]||path.join(__dirname,'render.png');
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
console.log('wrote',out);await b.close();})();

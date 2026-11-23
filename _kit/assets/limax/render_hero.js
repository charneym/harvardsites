/* Limax hero (HOME_BRIEF update 2c: a crafted render of the real product).
   Subject: a Limax tough adhesive hydrogel patch, the "slug-inspired" sealant film (limaxbiosciences.com: "tough adhesive
   hydrogels"), one corner peeling up so it reads as an adhesive patch at a glance. A clear gel with physical transmission;
   inside it the polymer network glows in the brand gradient sampled from their live site (#0fc7bd -> #1479e6 -> #5254e8
   -> #b211e1). Dark wet bench in the page ink #06070b so the frame edge is the page colour (DP/DJ).
   Output: limax/hero.webp. Run: node _kit/assets/limax/render_hero.js */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=2400,H=1800;
const OUT=process.argv[2]||path.join(K,'..','limax','hero.png');
const PAGE=`<!doctype html><html><body style="margin:0;background:#06070b">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {TessellateModifier} from 'three/addons/modifiers/TessellateModifier.js';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
const W=${W},H=${H};
let s=7;const R=()=>{s=(s*16807)%2147483647;return (s-1)/2147483646};const RR=(a,b)=>a+(b-a)*R();
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.05;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=true;rn.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
const pm=new THREE.PMREMGenerator(rn);sc.environment=pm.fromScene(new RoomEnvironment(),0.04).texture;sc.environmentIntensity=.55;
/* backdrop: page ink at every edge, a faint blue-violet glow behind the patch (like their own hero art) */
const bg=document.createElement('canvas');bg.width=1200;bg.height=900;const b=bg.getContext('2d');
b.fillStyle='#06070b';b.fillRect(0,0,1200,900);
let g=b.createRadialGradient(640,430,0,640,430,520);g.addColorStop(0,'rgba(36,60,150,.55)');g.addColorStop(.45,'rgba(40,30,110,.22)');g.addColorStop(1,'rgba(6,7,11,0)');
b.fillStyle=g;b.fillRect(0,0,1200,900);
const bt=new THREE.CanvasTexture(bg);bt.colorSpace=THREE.SRGBColorSpace;sc.background=bt;
/* the bench: dark, faintly wet */
const fl=new THREE.Mesh(new THREE.PlaneGeometry(60,60),new THREE.MeshBasicMaterial({color:0x06070b,toneMapped:false}));
fl.rotation.x=-Math.PI/2;sc.add(fl);
const sh=new THREE.Mesh(new THREE.PlaneGeometry(60,60),new THREE.ShadowMaterial({opacity:.55}));sh.rotation.x=-Math.PI/2;sh.position.y=.003;sh.receiveShadow=true;sc.add(sh);
/* a soft blue-violet pool of light on the bench under the patch, fading to page ink well inside the frame */
{const c=document.createElement('canvas');c.width=c.height=1024;const x=c.getContext('2d');
 let gg=x.createRadialGradient(512,512,0,512,512,512);gg.addColorStop(0,'rgba(30,70,190,.85)');gg.addColorStop(.35,'rgba(60,40,170,.38)');gg.addColorStop(.7,'rgba(30,20,90,.10)');gg.addColorStop(1,'rgba(0,0,0,0)');
 x.fillStyle=gg;x.fillRect(0,0,1024,1024);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;
 const pool=new THREE.Mesh(new THREE.PlaneGeometry(9,6.5),new THREE.MeshBasicMaterial({map:t,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,toneMapped:false}));
 pool.rotation.x=-Math.PI/2;pool.position.set(.35,.002,-.2);pool.renderOrder=-1;sc.add(pool);}
/* the patch: a thin rounded slab, gently undulating, one corner curling up off the bench */
const PW=3.4,PD=2.3,PT=.2;
let geo=new RoundedBoxGeometry(PW,PT,PD,5,.09);if(geo.index)geo=geo.toNonIndexed();
geo.deleteAttribute('uv');geo.deleteAttribute('normal');
geo=new TessellateModifier(.045,9).modify(geo);geo=mergeVertices(geo,1e-4);
{const pos=geo.attributes.position,v=new THREE.Vector3();
 const pv=new THREE.Vector3(1,0,-.82).normalize();            /* peel direction: toward the far right corner */
 for(let i=0;i<pos.count;i++){v.fromBufferAttribute(pos,i);
   const x=v.x,z=v.z;
   let y=v.y+PT/2+.004+.025*Math.sin(x*2.1+.6)*Math.cos(z*1.7);
   /* peel: distance past a fold line, curled up along a circle */
   const d=(x/(PW/2))*pv.x+(z/(PD/2))*pv.z-0.6;
   if(d>0){const L=d*1.25, Rc=.55, a=L/Rc;      /* arc length mapped onto a curl of radius Rc */
     const lift=Rc*(1-Math.cos(a)), back=L-Rc*Math.sin(a);
     y+=lift; v.x-=back*pv.x*.55; v.z-=back*pv.z*.55;
     y+=(v.y)*(Math.cos(a)-1)*.5;}
   pos.setXYZ(i,v.x,y,v.z);}
 geo.computeVertexNormals();}
const gel=new THREE.MeshPhysicalMaterial({color:0xe9fbff,transmission:1,thickness:.35,roughness:.04,ior:1.34,
  attenuationColor:new THREE.Color('#9eeaf4'),attenuationDistance:6,clearcoat:1,clearcoatRoughness:.04,
  iridescence:.55,iridescenceIOR:1.3,iridescenceThicknessRange:[180,520],specularIntensity:1,envMapIntensity:1.25});
const patch=new THREE.Mesh(geo,gel);patch.castShadow=true;sc.add(patch);
/* the polymer network inside the gel: fine strands in the brand gradient, following the slab's own deformation */
const stops=[[0,'#0fc7bd'],[.22,'#00b7e0'],[.5,'#1479e6'],[.77,'#5254e8'],[1,'#b211e1']].map(([t,c])=>[t,new THREE.Color(c)]);
function grad(t){t=Math.min(1,Math.max(0,t));for(let i=1;i<stops.length;i++){if(t<=stops[i][0]){const[a,ca]=stops[i-1],[bb,cb]=stops[i];return ca.clone().lerp(cb,(t-a)/(bb-a))}}return stops[stops.length-1][1].clone()}
function deform(x,yy,z){ /* same mapping as the slab, for a point at height yy within it */
  const pv=new THREE.Vector3(1,0,-.82).normalize();
  let y=yy+.004+.025*Math.sin(x*2.1+.6)*Math.cos(z*1.7);
  const d=(x/(PW/2))*pv.x+(z/(PD/2))*pv.z-0.6;
  if(d>0){const L=d*1.25,Rc=.55,a=L/Rc;y+=Rc*(1-Math.cos(a));const back=L-Rc*Math.sin(a);x-=back*pv.x*.55;z-=back*pv.z*.55;}
  return new THREE.Vector3(x,y,z)}
const net=new THREE.Group();sc.add(net);
for(let k=0;k<95;k++){
  const pts=[];let x=RR(-PW/2+.15,PW/2-.15),z=RR(-PD/2+.15,PD/2-.15);let ang=RR(0,Math.PI*2);
  const n=30;
  for(let i=0;i<n;i++){ang+=RR(-.55,.55);let nx=x+Math.cos(ang)*.085,nz=z+Math.sin(ang)*.085;
    if(Math.abs(nx)>PW/2-.13){ang=Math.PI-ang;nx=x+Math.cos(ang)*.085}
    if(Math.abs(nz)>PD/2-.13){ang=-ang;nz=z+Math.sin(ang)*.085}
    x=nx;z=nz;
    pts.push(deform(x,PT*(.38+.24*R()),z));}
  const cur=new THREE.CatmullRomCurve3(pts);
  const tg=new THREE.TubeGeometry(cur,160,.0075,6,false);
  const cols=[];const p=tg.attributes.position;
  for(let i=0;i<p.count;i++){const c=grad((p.getX(i)+PW/2)/PW*.8+(p.getZ(i)+PD/2)/PD*.2);cols.push(c.r,c.g,c.b)}
  tg.setAttribute('color',new THREE.Float32BufferAttribute(cols,3));
  net.add(new THREE.Mesh(tg,new THREE.MeshBasicMaterial({vertexColors:true})));
  /* a few cross-link beads */
  if(k%2===0)for(let j=0;j<3;j++){const q=pts[Math.floor(R()*n)];
    const bead=new THREE.Mesh(new THREE.SphereGeometry(.017,12,10),new THREE.MeshBasicMaterial({color:grad((q.x+PW/2)/PW)}));bead.position.copy(q);net.add(bead)}
}
/* water droplets beaded on the bench beside the patch (it bonds where it is wet) */
const dropM=new THREE.MeshPhysicalMaterial({color:0xffffff,transmission:1,thickness:.12,roughness:.02,ior:1.33,clearcoat:1,envMapIntensity:1.4});
[[-2.25,.95,.10],[-2.05,1.25,.06],[-2.5,.55,.05],[2.15,1.35,.07],[1.95,1.62,.045],[-1.6,1.55,.05],[2.55,.9,.05]].forEach(([x,z,r])=>{
  const dg=new THREE.SphereGeometry(r,32,20,0,Math.PI*2,0,Math.PI/2);const m=new THREE.Mesh(dg,dropM);m.scale.y=.55;m.position.set(x,0,z);sc.add(m)});
/* light: a cool key from above, teal from the left, violet rim from behind right (the brand's two ends) */
const key=new THREE.DirectionalLight(0xffffff,.75);key.position.set(-5,6,-3);key.castShadow=true;key.shadow.mapSize.set(2048,2048);
key.shadow.camera.left=-4;key.shadow.camera.right=4;key.shadow.camera.top=4;key.shadow.camera.bottom=-4;key.shadow.radius=6;sc.add(key);
const tl=new THREE.SpotLight(0x0fc7bd,40,16,.35,.9);tl.position.set(-6,2.2,1.2);tl.target.position.set(0,0,0);sc.add(tl,tl.target);
const vl=new THREE.SpotLight(0x7a3cf0,45,14,.32,.9);vl.position.set(3.5,1.4,-5.5);vl.target.position.set(1.2,.6,-.6);sc.add(vl,vl.target);
const bl=new THREE.PointLight(0x1479e6,6,6);bl.position.set(.4,1.2,-1.6);sc.add(bl);
/* camera: oblique three-quarter, patch filling the middle of the frame */
const cam=new THREE.PerspectiveCamera(30,W/H,.1,100);cam.position.set(-.6,5.0,6.6);cam.lookAt(.15,.25,-.1);
rn.render(sc,cam);
window.__png=rn.domElement.toDataURL('image/png');
</script></body></html>`;
(async()=>{
  const b=await chromium.launch({executablePath:'/usr/bin/google-chrome',args:['--use-angle=swiftshader','--ignore-gpu-blocklist']});
  const p=await b.newPage();p.on('console',m=>console.log('page:',m.text()));p.on('pageerror',e=>console.log('ERR',e.message));
  await p.route('http://r.local/**',async r=>{const u=new URL(r.request().url());
    if(u.pathname==='/index.html')return r.fulfill({contentType:'text/html',body:PAGE});
    const f=path.join(K,'node_modules',decodeURIComponent(u.pathname));
    r.fulfill({contentType:'application/javascript',body:fs.readFileSync(f)})});
  await p.goto('http://r.local/index.html');
  await p.waitForFunction(()=>window.__png,null,{timeout:600000});
  const d=await p.evaluate(()=>window.__png);fs.writeFileSync(OUT,Buffer.from(d.split(',')[1],'base64'));
  console.log('wrote',OUT);await b.close();
})();

/* Offline render of the CDO2 hero (HOME_BRIEF update option c: a crafted render of the firm's own mechanism).
   Subject: one lithium-ion pouch cell, the object CDO2 images (cdo2.com: "quantum current density imaging ... visualize and
   monitor the current flow within battery cells"; GtR 42D5E8FA: the CDA-16 analyser's 16 cm x 16 cm sensor array generates
   "a current density image of a cell under test"). Above the cell floats a thin glass imaging plane carrying its current
   density map: current enters at the two tabs and spreads across the electrode, brightest at the tabs, drawn in the brand
   purple ramp with fine flow lines. The fine dot grid on the glass marks sensor positions. Calm, one object (DS).
   Ground = page ink #0c0810 so the art has no edge against the page (DJ); feathered in finish.py.
   Run: node _kit/home/cdo2/render.js [out.png] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=1800,H=1500;
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.25;
rn.outputColorSpace=THREE.SRGBColorSpace;document.body.appendChild(rn.domElement);
const INK=new THREE.Color('#0c0810');
const sc=new THREE.Scene();sc.background=INK;
/* studio environment: a broad warm-white softbox above-left, a violet rim behind right, a dim floor bounce */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x030205);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(10,.2,6,0xf6f2f8,2.2,-2,9,2);box(.2,6,10,0xb070c0,.7,9,2,-3);box(6,6,.2,0xe8e2ee,.8,-4,3,9);box(12,.2,12,0x2a1a30,.6,0,-6,0);
sc.environment=pm.fromScene(env,0.03).texture;
const key=new THREE.DirectionalLight(0xfff6fb,1.6);key.position.set(-4,8,5);sc.add(key);
const rim=new THREE.DirectionalLight(0xc070d0,.9);rim.position.set(6,3,-6);sc.add(rim);

/* ---------- the current density map (canvas) ---------- */
const CW=1024,CH=1400;   /* map of the cell face, long axis = y; tabs at the top edge */
const TABS=[[.3,0],[.7,0]];
function J(u,v){ /* |current density| of a toy potential flow: two sources at the tabs, collected evenly by the electrode */
  let jx=0,jy=0;TABS.forEach(function(t){const dx=u-t[0],dy=(v-t[1])*CW/CH*1.0+.02,r2=dx*dx+dy*dy;jx+=dx/r2;jy+=dy/r2});
  return [jx,jy];}
const mc=document.createElement('canvas');mc.width=CW;mc.height=CH;const g=mc.getContext('2d');
const id=g.createImageData(CW,CH);
const RAMP=[[0,[22,8,26]],[.25,[74,18,78]],[.5,[146,39,143]],[.72,[206,92,190]],[.88,[244,170,226]],[1,[255,240,250]]];
function ramp(x){x=Math.max(0,Math.min(1,x));for(let i=1;i<RAMP.length;i++)if(x<=RAMP[i][0]){const a=RAMP[i-1],b=RAMP[i],f=(x-a[0])/(b[0]-a[0]);return a[1].map((c,k)=>c+(b[1][k]-c)*f)}return RAMP[RAMP.length-1][1]}
for(let y=0;y<CH;y++)for(let x=0;x<CW;x++){const u=x/CW,v=y/CH;const j=J(u,v),m=Math.hypot(j[0],j[1]);
  let s=(Math.log(m)-Math.log(1.6))/(Math.log(45)-Math.log(1.6));s=.04+.96*Math.pow(Math.max(0,Math.min(1,s)),1.45);
  /* a soft border so the map sits inside the electrode area */
  const e=Math.min(u,1-u,v,1-v);const ed=Math.min(1,e/.04);
  const c=ramp(s*.95);const i=(y*CW+x)*4;id.data[i]=c[0];id.data[i+1]=c[1];id.data[i+2]=c[2];id.data[i+3]=Math.round(255*ed*.94)}
g.putImageData(id,0,0);
/* flow lines: integrate the field from the tabs outward */
g.globalCompositeOperation='lighter';g.lineWidth=1.6;
TABS.forEach(function(t,ti){for(let k=0;k<15;k++){const a=Math.PI*(.06+.88*k/14);let u=t[0]+.012*Math.cos(a),v=.01+.012*Math.sin(a);
  g.beginPath();g.moveTo(u*CW,v*CH);for(let s=0;s<900;s++){const j=J(u,v),m=Math.hypot(j[0],j[1]);u+=j[0]/m*.0016;v+=j[1]/m*.0016*CH/CW*.75;
    if(u<.02||u>.98||v>.985||v<0)break;g.lineTo(u*CW,v*CH)}
  g.strokeStyle='rgba(255,226,248,.20)';g.stroke()}});
/* sensor grid dots */
g.globalCompositeOperation='source-over';g.fillStyle='rgba(255,240,252,.22)';
for(let i=0;i<16;i++)for(let j=0;j<22;j++){g.beginPath();g.arc((i+.5)/16*CW,(j+.5)/22*CH,2.2,0,7);g.fill()}
const mapT=new THREE.CanvasTexture(mc);mapT.colorSpace=THREE.SRGBColorSpace;mapT.anisotropy=16;

/* ---------- foil texture for the pouch (soft wrinkles) ---------- */
const fc=document.createElement('canvas');fc.width=fc.height=1024;const f=fc.getContext('2d');
f.fillStyle='#808080';f.fillRect(0,0,1024,1024);
for(let i=0;i<260;i++){const x=Math.random()*1024,y=Math.random()*1024,r=30+Math.random()*120,gr=f.createRadialGradient(x,y,0,x,y,r);const c=Math.random()<.5?255:0;
  gr.addColorStop(0,'rgba('+c+','+c+','+c+',.05)');gr.addColorStop(1,'rgba('+c+','+c+','+c+',0)');f.fillStyle=gr;f.fillRect(x-r,y-r,2*r,2*r)}
const foilT=new THREE.CanvasTexture(fc);foilT.wrapS=foilT.wrapT=THREE.RepeatWrapping;

/* ---------- the pouch cell ---------- */
const cell=new THREE.Group();
const BW=.16,BL=.22,BT=.011,FL=.012; /* body width, length, thickness, seal flange */
const foil=new THREE.MeshPhysicalMaterial({color:0xd6d3da,metalness:.9,roughness:.34,roughnessMap:foilT,bumpMap:foilT,bumpScale:.6,clearcoat:.4,clearcoatRoughness:.3});
const body=new THREE.Mesh(new RoundedBoxGeometry(BW,BT,BL,6,BT*.48),foil);body.position.y=BT/2;cell.add(body);
/* the flat sealed flange around the body (slightly wider, very thin), longer at the tab end */
const flange=new THREE.Mesh(new RoundedBoxGeometry(BW+2*FL,.0016,BL+2*FL+.018,3,.0007),foil);flange.position.set(0,BT*.5,-.009);cell.add(flange);
/* tabs: aluminium and nickel-plated copper, with the yellow sealant band */
const tabM=[new THREE.MeshPhysicalMaterial({color:0xeeecef,metalness:.85,roughness:.38}),new THREE.MeshPhysicalMaterial({color:0xe2d6c6,metalness:.85,roughness:.4})];
const seal=new THREE.MeshStandardMaterial({color:0xc9a64a,metalness:.1,roughness:.55});
[-1,1].forEach(function(s,i){const tw=.036,tl=.04;const t=new THREE.Mesh(new THREE.BoxGeometry(tw,.0009,tl),tabM[i]);t.position.set(s*BW*.2,BT*.5,-(BL/2+FL+.018+tl/2-.006));cell.add(t);
  const b=new THREE.Mesh(new THREE.BoxGeometry(tw+.004,.0022,.007),seal);b.position.set(s*BW*.2,BT*.5,-(BL/2+FL+.018-.002));cell.add(b)});
sc.add(cell);
/* ---------- the current density image, printed on the cell's top face (as CDO2 show it on their own renders) ---------- */
const mapM=new THREE.Mesh(new THREE.PlaneGeometry(BW-.018,BL-.018),new THREE.MeshStandardMaterial({map:mapT,emissiveMap:mapT,emissive:0xffffff,emissiveIntensity:.42,transparent:true,roughness:.32,metalness:.1,depthWrite:false}));
mapM.rotation.x=-Math.PI/2;mapM.position.set(0,BT+.0002,0);
/* a soft violet pool on the floor under the cell, fading into the ink */
const pc=document.createElement('canvas');pc.width=pc.height=512;const p2=pc.getContext('2d');const pg=p2.createRadialGradient(256,256,0,256,256,256);
pg.addColorStop(0,'rgba(146,39,143,.30)');pg.addColorStop(.5,'rgba(90,24,92,.10)');pg.addColorStop(1,'rgba(12,8,16,0)');p2.fillStyle=pg;p2.fillRect(0,0,512,512);
const pool=new THREE.Mesh(new THREE.PlaneGeometry(.6,.6),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(pc),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));pool.rotation.x=-Math.PI/2;pool.position.y=-.002;
const grp=[cell,mapM,pool];
const root=new THREE.Group();grp.forEach(function(o){sc.remove(o);root.add(o)});root.rotation.y=-.62;sc.add(root);
const cam=new THREE.PerspectiveCamera(24,W/H,.01,20);cam.position.set(.0,.62,.66);cam.lookAt(0,.0,-.012);
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

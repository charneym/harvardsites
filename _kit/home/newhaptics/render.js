/* Offline render of the NewHaptics hero (HOME_BRIEF update option c: a crafted render of the firm's real product).
   Subject: a multiline refreshable braille display in the form of NewHaptics' Codex (newhaptics.com/codex): a dark
   tablet-sized body, 4 lines of 32 eight-dot braille cells, line selectors beside the braille, a Perkins-style 8-dot
   keyboard with split spacebars, a D-pad with centre select and navigation thumb keys, white keys on a black body as in
   their own product photo. The raised pins spell real Grade 1 braille. Rendered with ALPHA (no ground of its own, DJ/DP),
   so it sits on the page ink with no edge. 1 unit = 1 inch (Codex: 13.75 x 7.5 x 1.38 in).
   Output: render.png. Run: node _kit/home/newhaptics/render.js [out] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=2600,H=1700;
const PAGE=`<!doctype html><html><body style="margin:0;background:transparent">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,premultipliedAlpha:false});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,0);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.0;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=true;rn.shadowMap.type=THREE.PCFSoftShadowMap;
document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
/* studio environment: a dark room with long soft boxes so the body's bevels and the keys carry clean highlights */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x050505);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(26,.3,7,0xfff8f0,3.2,0,14,-2);     /* overhead strip */
box(.3,6,22,0xf3eef0,1.4,-16,4,0);     /* left card */
box(.3,4,18,0xe7dce0,1.1,16,5,-4);     /* right rim */
box(24,5,.3,0xf6f1ec,.7,0,5,18);       /* front card */
box(24,3,.3,0xd8ccd0,.9,0,6,-18);      /* back rim */
sc.environment=pm.fromScene(env,0.04).texture;

const dev=new THREE.Group();sc.add(dev);
const BW=13.75,BD=7.5,BH=1.0;
/* materials: matte black anodised body, satin black top plate, ivory keys, ivory pins */
const body=new THREE.MeshPhysicalMaterial({color:0x151415,metalness:.55,roughness:.42,clearcoat:.2,clearcoatRoughness:.5,envMapIntensity:1.1});
const top=new THREE.MeshPhysicalMaterial({color:0x121112,metalness:.35,roughness:.55,envMapIntensity:.9});
const plate=new THREE.MeshPhysicalMaterial({color:0x2a282a,metalness:.2,roughness:.38,clearcoat:.6,clearcoatRoughness:.2,envMapIntensity:1.0});
const key=new THREE.MeshPhysicalMaterial({color:0xefece6,metalness:0,roughness:.38,clearcoat:.35,clearcoatRoughness:.35,sheen:.3,sheenColor:new THREE.Color('#ffffff'),envMapIntensity:.9});
const pinUp=new THREE.MeshPhysicalMaterial({color:0xf4f1ea,metalness:0,roughness:.3,clearcoat:.5,clearcoatRoughness:.2,envMapIntensity:1.0});
const pinDn=new THREE.MeshPhysicalMaterial({color:0x3e3b3d,metalness:.1,roughness:.5,envMapIntensity:.6});
const dark=new THREE.MeshStandardMaterial({color:0x070707,roughness:.9});

/* body: a rounded slab, its top face at y=0 */
const bg=new RoundedBoxGeometry(BW,BH,BD,8,.34);const bm=new THREE.Mesh(bg,body);bm.position.y=-BH/2;bm.castShadow=true;dev.add(bm);
/* a slightly inset top plate gives the parting line around the top */
const tg=new RoundedBoxGeometry(BW-.16,.04,BD-.16,6,.02);const tm=new THREE.Mesh(tg,top);tm.position.y=-.005;dev.add(tm);

/* ---- braille field: 4 lines x 32 eight-dot cells, NewHaptics' "optimally spaced" multiline braille ---- */
const DOT=.0984,CELL=.26,LINE=.45;            /* 2.5 mm dot pitch; cell and line spacing */
const FX0=-3.55,FZ0=-2.92;                     /* first dot of the first cell */
const FW=31*CELL+DOT+.5,FD=3*LINE+3*DOT+.46;
const fr=new RoundedBoxGeometry(FW+.16,.05,FD+.16,4,.02);const frm=new THREE.Mesh(fr,new THREE.MeshPhysicalMaterial({color:0x3a383a,metalness:.6,roughness:.3,envMapIntensity:1.2}));
frm.position.set(FX0-.25+FW/2,-.01,FZ0-.23+FD/2);dev.add(frm);
const pl=new RoundedBoxGeometry(FW,.05,FD,4,.015);const plm=new THREE.Mesh(pl,plate);plm.position.set(FX0-.25+FW/2,.005,FZ0-.23+FD/2);plm.receiveShadow=true;dev.add(plm);
const PY=.03;
/* Grade 1 braille (dots 1-6; 7 and 8 under the cursor) */
const L={a:[1],b:[1,2],c:[1,4],d:[1,4,5],e:[1,5],f:[1,2,4],g:[1,2,4,5],h:[1,2,5],i:[2,4],j:[2,4,5],k:[1,3],l:[1,2,3],m:[1,3,4],n:[1,3,4,5],o:[1,3,5],p:[1,2,3,4],q:[1,2,3,4,5],r:[1,2,3,5],s:[2,3,4],t:[2,3,4,5],u:[1,3,6],v:[1,2,3,6],w:[2,4,5,6],x:[1,3,4,6],y:[1,3,4,5,6],z:[1,3,5,6]};
const TXT=["newhaptics codex","four lines of braille","read faster and with less","interruption with codex"];
const POS={1:[0,0],2:[0,1],3:[0,2],4:[1,0],5:[1,1],6:[1,2],7:[0,3],8:[1,3]};
const up=[],dn=[];
for(let li=0;li<4;li++)for(let ci=0;ci<32;ci++){
  const ch=(TXT[li][ci]||' ');let on=(L[ch]||[]).slice();
  if(li===0&&ci===16)on=[7,8];             /* the braille cursor after the first line */
  for(let d=1;d<=8;d++){const p=POS[d];const x=FX0+ci*CELL+p[0]*DOT,z=FZ0+li*LINE+p[1]*DOT;(on.includes(d)?up:dn).push([x,z])}}
function inst(list,geo,mat,y){const m=new THREE.InstancedMesh(geo,mat,list.length);const o=new THREE.Object3D();
  list.forEach((q,i)=>{o.position.set(q[0],y,q[1]);o.updateMatrix();m.setMatrixAt(i,o.matrix)});m.castShadow=true;dev.add(m);return m}
/* a raised pin: a short post with a rounded dome; a lowered pin sits nearly flush */
const pinG=new THREE.SphereGeometry(.031,20,12,0,Math.PI*2,0,Math.PI*.55);pinG.scale(1,1.05,1);
const postG=new THREE.CylinderGeometry(.031,.031,.03,20);
inst(up,pinG,pinUp,PY+.03);inst(up,postG,pinUp,PY+.015);
const lowG=new THREE.CylinderGeometry(.029,.029,.012,18);inst(dn,lowG,pinDn,PY+.004);

/* ---- keys ---- */
function rkey(w,d,h,x,z,ry=0,mat=key,r=.07){const g=new RoundedBoxGeometry(w,h,d,5,Math.min(r,h/2-.001));const m=new THREE.Mesh(g,mat);m.position.set(x,h/2-.02,z);m.rotation.y=ry;m.castShadow=true;m.receiveShadow=true;dev.add(m);
  const well=new THREE.Mesh(new RoundedBoxGeometry(w+.07,.03,d+.07,3,.012),dark);well.position.set(x,-.004,z);well.rotation.y=ry;dev.add(well);return m}
/* line selectors beside each line of braille, and two scroll keys further right */
for(let li=0;li<4;li++)rkey(.38,.17,.12,FX0+31*CELL+.72,FZ0+li*LINE+DOT*1.5,0,key,.05);
rkey(.3,.24,.12,FX0+31*CELL+1.45,FZ0+.35,0,key,.06);rkey(.3,.24,.12,FX0+31*CELL+1.45,FZ0+LINE*2+.45,0,key,.06);
/* panning / reading keys to the left of the braille */
rkey(.34,.17,.11,-5.75,-2.85,-.3,key,.05);rkey(.34,.17,.11,-5.1,-2.72,.3,key,.05);
rkey(.34,.17,.11,-5.75,-2.3,-.3,key,.05);rkey(.34,.17,.11,-5.1,-2.18,.3,key,.05);
rkey(.34,.17,.11,-5.75,-1.75,-.3,key,.05);rkey(.34,.17,.11,-5.1,-1.63,.3,key,.05);
/* Perkins-style 8-dot keyboard: four keys per hand on a gentle arc */
const KZ=.15;
[[-4.95,.05,.14],[-3.75,-.12,.06],[-2.55,-.12,-.04],[-1.4,.06,-.12]].forEach(k=>rkey(1.02,.62,.2,k[0],KZ+k[1],k[2]));
[[1.4,.06,.12],[2.55,-.12,.04],[3.75,-.12,-.06],[4.95,.05,-.14]].forEach(k=>rkey(1.02,.62,.2,k[0],KZ+k[1],k[2]));
/* split spacebars and the navigation thumb keys along the front */
rkey(1.9,.6,.2,-1.15,2.05,.05);rkey(1.9,.6,.2,1.15,2.05,-.05);
rkey(1.05,.55,.18,-4.05,1.55,.12);rkey(1.05,.55,.18,-2.85,1.95,.06);rkey(1.05,.55,.18,2.85,1.95,-.06);rkey(1.05,.55,.18,4.05,1.55,-.12);
/* D-pad with centre select */
(function(){const cx=0,cz=.85;const c=new THREE.Mesh(new THREE.CylinderGeometry(.16,.16,.12,40),key);c.position.set(cx,.04,cz);c.castShadow=true;dev.add(c);
  const sh=new THREE.Shape();sh.moveTo(-.17,0);sh.lineTo(.17,0);sh.lineTo(0,.26);sh.closePath();
  const tg=new THREE.ExtrudeGeometry(sh,{depth:.1,bevelEnabled:true,bevelThickness:.02,bevelSize:.02,bevelSegments:3});tg.rotateX(-Math.PI/2);
  [[0,-.42,0],[0,.42,Math.PI],[-.46,0,Math.PI/2],[.46,0,-Math.PI/2]].forEach(a=>{const m=new THREE.Mesh(tg,key);m.position.set(cx+a[0],-.01,cz+a[1]);m.rotation.y=a[2];m.castShadow=true;dev.add(m)})})();
/* speaker grille: fine concentric grooves at the front left */
(function(){for(let i=0;i<6;i++){const r=.08+i*.07;const m=new THREE.Mesh(new THREE.TorusGeometry(r,.012,8,80),dark);m.rotation.x=-Math.PI/2;m.position.set(-6.0,0,2.55);m.scale.set(1.35,1,1);dev.add(m)}})();
/* the cable socket on the left edge */
(function(){const m=new THREE.Mesh(new THREE.CylinderGeometry(.16,.16,.25,32),new THREE.MeshPhysicalMaterial({color:0x8a8687,metalness:.9,roughness:.25,envMapIntensity:1.4}));m.rotation.z=Math.PI/2;m.position.set(-BW/2-.08,-.45,-2.4);dev.add(m)})();

/* soft contact shadow, alpha only */
const sp=new THREE.Mesh(new THREE.PlaneGeometry(40,40),new THREE.ShadowMaterial({opacity:.55}));sp.rotation.x=-Math.PI/2;sp.position.y=-BH-.001;sp.receiveShadow=true;sc.add(sp);

/* lights: soft key from upper left front, a cool rim from behind right, a low fill */
const kl=new THREE.DirectionalLight(0xfff6ee,2.4);kl.position.set(-6,14,8);kl.castShadow=true;kl.shadow.mapSize.set(4096,4096);
Object.assign(kl.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});kl.shadow.radius=6;kl.shadow.bias=-.0004;sc.add(kl);
const rim=new THREE.SpotLight(0xefe6ea,90,60,.5,1,1.2);rim.position.set(10,8,-12);sc.add(rim);
const fill=new THREE.HemisphereLight(0xffffff,0x202020,.35);sc.add(fill);

dev.rotation.y=.32;
const cam=new THREE.PerspectiveCamera(22,W/H,.1,200);cam.position.set(-2.2,17.5,23);cam.lookAt(0,-.6,-.1);
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

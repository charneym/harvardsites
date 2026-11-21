/* Offline render of the BiRed Imaging hero (HOME_BRIEF update option c: a crafted render of the real object).
   Subject: an infrared (thermal) camera lens, the optic at the heart of BiRed's imaging: "the device takes multi-view
   infrared (IR) and optical images of the breast in the prone position" (NSF SBIR award 2451205 outcomes report).
   A generic machined LWIR lens: black anodised barrel, knurled focus ring, a thin ring in the logo's red, and the
   dark germanium front element with its coated, faintly iridescent sheen. It is not BiRed's actual prototype and carries
   no third-party branding. Rendered with ALPHA (no ground of its own, DJ/DP), so it sits on the page ink with no edge.
   Output: render.png. Run: node _kit/home/biredimaging/render.js [out] */
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
/* studio environment: a dark room with long softboxes, one of them the logo red, so the glass and metal carry clean highlights */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x060405);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(18,.25,5,0xfff4ec,4.2,-2,12,4);      /* overhead strip */
box(.25,7,14,0xe2262b,.8,14,1,-6);box(.25,2.2,16,0xfff1ea,2.2,13,7,2);      /* red rim, right */
box(.25,5,10,0xffb3ba,1.1,-14,2,2);      /* soft pink fill, left */
box(22,4,.25,0xf4e9e4,1.0,0,4,16);       /* broad front card, faint */
box(14,.2,8,0xffe2cc,2.6,4,-10,6);box(.25,4,10,0xfff1ea,1.4,12,-5,4);         /* warm kicker from below */
sc.environment=pm.fromScene(env,0.03).texture;

/* ---------- the lens: lathe profiles around +y (1 unit = 10 mm) ---------- */
const lens=new THREE.Group();sc.add(lens);
const V=(r,y)=>new THREE.Vector2(r,y);
function lathe(pts,mat,seg=360){const m=new THREE.Mesh(new THREE.LatheGeometry(pts,seg),mat);lens.add(m);return m}
const anod=new THREE.MeshPhysicalMaterial({color:0x161314,metalness:.72,roughness:.36,clearcoat:.25,clearcoatRoughness:.4,envMapIntensity:1.25});
const satin=new THREE.MeshPhysicalMaterial({color:0x2b2627,metalness:.92,roughness:.22,envMapIntensity:1.5});
const rubber=new THREE.MeshPhysicalMaterial({color:0x0f0d0e,metalness:.05,roughness:.62,sheen:.4,sheenColor:new THREE.Color('#3a2a2b'),envMapIntensity:.9});
const red=new THREE.MeshPhysicalMaterial({color:0xd8242a,metalness:.35,roughness:.3,clearcoat:.8,clearcoatRoughness:.15,envMapIntensity:1.1});
/* rear mount and body */
lathe([V(0,-.05),V(1.32,-.05),V(1.34,0),V(1.34,.32),V(1.5,.34),V(1.52,.52),V(1.6,.54),V(1.62,1.38),V(1.6,1.42),V(0,1.42)],anod);
/* bayonet: a satin metal mount ring at the back */
lathe([V(1.18,-.22),V(1.36,-.22),V(1.36,-.04),V(1.18,-.04)],satin);
/* knurled focus ring: ridges displaced around the circumference */
(function(){const seg=1440,ridges=144,g=new THREE.CylinderGeometry(1.74,1.74,1.22,seg,24,true);const p=g.attributes.position,v=new THREE.Vector3();
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i);const a=Math.atan2(v.z,v.x);const yy=v.y/0.61;
    const k=Math.pow(Math.abs(Math.cos(a*ridges/2)),.6);const edge=Math.min(1,(1-Math.abs(yy))*7);
    const r=1.7+.04*k*edge;v.x=Math.cos(a)*r;v.z=Math.sin(a)*r;p.setXYZ(i,v.x,v.y,v.z)}
  g.computeVertexNormals();const m=new THREE.Mesh(g,rubber);m.position.y=2.07;lens.add(m)})();
lathe([V(1.6,1.42),V(1.7,1.44),V(1.7,1.46),V(1.6,1.46)],satin);
lathe([V(1.6,2.68),V(1.7,2.68),V(1.7,2.7),V(1.6,2.72)],satin);
/* fore-body, the thin red ring, then the flared front bezel */
lathe([V(0,2.72),V(1.64,2.72),V(1.66,2.76),V(1.66,3.5),V(1.66,3.52),V(0,3.52)],anod);
lathe([V(1.66,3.52),V(1.675,3.53),V(1.675,3.6),V(1.66,3.61)],red);
lathe([V(0,3.61),V(1.66,3.61),V(1.68,3.64),V(1.86,4.02),V(1.88,4.12),V(1.86,4.18),V(1.6,4.2),V(1.5,4.16),V(1.42,4.06),V(1.38,3.95),V(0,3.95)],anod);
/* a satin chamfer on the bezel lip catches a fine highlight */
lathe([V(1.86,4.16),V(1.885,4.12),V(1.875,4.19),V(1.6,4.215),V(1.58,4.2)],satin);
/* retaining ring around the element */
lathe([V(1.37,3.95),V(1.39,3.99),V(1.33,4.0),V(1.29,3.98),V(1.29,3.94)],satin);
/* the germanium front element: a shallow convex cap, metallic dark grey with a thin-film AR coating */
(function(){const R=3.2,h=1.3,cap=R-Math.sqrt(R*R-h*h);
  const g=new THREE.SphereGeometry(R,256,64,0,Math.PI*2,0,Math.asin(h/R));
  const ge=new THREE.MeshPhysicalMaterial({color:0x2c2a33,metalness:.9,roughness:.05,clearcoat:1,clearcoatRoughness:.02,
    iridescence:1,iridescenceIOR:1.9,iridescenceThicknessRange:[380,470],envMapIntensity:1.7});
  const m=new THREE.Mesh(g,ge);m.position.y=3.94-(R-cap);lens.add(m)})();
/* inside the barrel behind the element: matte black so nothing shows through */
lathe([V(0,3.9),V(1.3,3.9),V(1.3,3.92),V(0,3.92)],new THREE.MeshBasicMaterial({color:0x050404}));
/* a red index dot on the fore-body */
(function(){const d=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.02,48),red);d.rotation.z=Math.PI/2;d.position.set(1.665,3.1,0);
  const piv=new THREE.Group();piv.add(d);piv.rotation.y=-.35;lens.add(piv)})();

/* point the lens toward the viewer and a little left (toward the headline), seen from slightly above */
lens.position.y=-2.05;
const holder=new THREE.Group();holder.add(lens);sc.add(holder);
holder.rotation.set(Math.PI/2-.42,0,0);holder.rotateOnWorldAxis(new THREE.Vector3(0,1,0),-.62);

/* lights: warm key from upper left, a red rim from the right rear, a pink fill */
const key=new THREE.SpotLight(0xfff0e6,330,50,.5,1,1.3);key.position.set(-7,10,10);sc.add(key);
const rim=new THREE.SpotLight(0xe2262b,90,40,.45,1,1.2);rim.position.set(9,5,-9);sc.add(rim);
const fill=new THREE.SpotLight(0xffc9cf,120,40,.7,1,1.4);fill.position.set(2,-10,8);sc.add(fill);

const cam=new THREE.PerspectiveCamera(24,W/H,.1,100);cam.position.set(0,1.2,16.5);cam.lookAt(0,0,0);
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

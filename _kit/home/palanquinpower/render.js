/* Offline render of the Palanquin Power hero (HOME_BRIEF update option c: a crafted render of the subject).
   Subject: one data-centre server rack, the place where Palanquin's rack-level power conversion lives (palanquinpower.com:
   "reduce losses during rack-level power conversion in data centers"; NSF SBIR 2528149: 400/800 V DC bus to 50 V DC
   at the server inputs). A generic open-frame 42U rack in a 3/4 view, holding 1U/2U servers, a GPU chassis and a power
   shelf, with status LEDs in the brand royal blue. It is NOT a depiction of the company's own hardware.
   Ground = page ink #070b18, so the art has no edge against the page (DJ).
   Output: render.png. Run: node _kit/home/palanquinpower/render.js [out] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=1600,H=2200;
const PAGE=`<!doctype html><html><body style="margin:0;background:#000">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
rn.setPixelRatio(1);rn.setSize(W,H);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=1.45;
rn.outputColorSpace=THREE.SRGBColorSpace;document.body.appendChild(rn.domElement);
const INK=new THREE.Color('#070b18');
const sc=new THREE.Scene();sc.background=INK;
/* studio environment: a tall cool softbox at front-left, a soft blue rim at back-right, a dim top */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x020309);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(4,14,.2,0xeef2ff,2.6,-6,4,9);box(.2,12,6,0x8aa0e0,.35,9,3,-5);box(14,.2,8,0xdfe6f5,.9,0,12,0);box(.2,8,10,0xb8c6ee,.5,-10,2,-2);
sc.environment=pm.fromScene(env,0.04).texture;
const key=new THREE.DirectionalLight(0xf2f5ff,2.4);key.position.set(-3,5,9);sc.add(key);
const rim=new THREE.DirectionalLight(0x6f8ff0,.35);rim.position.set(7,5,-6);sc.add(rim);

/* ---------- textures for faceplates ---------- */
const U=.0445; /* one rack unit, metres */
const RW=.6,RD=1.07,RH=42*U;        /* rack outer */
const IW=.4826*.93;                  /* 19-inch panel width (between ears) */
const PXM=1400;                      /* texture px per metre */
function cvs(w,h){const c=document.createElement('canvas');c.width=Math.round(w*PXM);c.height=Math.round(h*PXM);return c}
function T(c){const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=16;return t}
const BLUE='#6f8fff',BLUEc='#4169E1';
function plate(g,w,h,base){g.fillStyle=base;g.fillRect(0,0,w,h);const gr=g.createLinearGradient(0,0,0,h);gr.addColorStop(0,'rgba(255,255,255,.05)');gr.addColorStop(.5,'rgba(255,255,255,0)');gr.addColorStop(1,'rgba(0,0,0,.18)');g.fillStyle=gr;g.fillRect(0,0,w,h)}
function holes(g,x,y,w,h,p,r,col){g.fillStyle=col;for(let j=y+p/2,row=0;j<y+h;j+=p*.866,row++)for(let i=x+p/2+(row%2)*p/2;i<x+w;i+=p){g.beginPath();g.arc(i,j,r,0,7);g.fill()}}
function led(e,x,y,r,col){e.fillStyle=col;e.shadowColor=col;e.shadowBlur=r*4;e.beginPath();e.arc(x,y,r,0,7);e.fill();e.shadowBlur=0}
/* each faceplate: colour canvas + emissive canvas */
function face(kind,u){const w=IW,h=u*U-.0012;const c=cvs(w,h),e=cvs(w,h);const g=c.getContext('2d'),q=e.getContext('2d');const X=c.width,Y=c.height;
  q.fillStyle='#000';q.fillRect(0,0,X,Y);
  plate(g,X,Y,kind==='psu'?'#323846':'#2a2f3b');
  if(kind==='1u'){ /* ten 2.5-inch bays */
    const bx=X*.08,bw=X*.075;for(let i=0;i<10;i++){const x=bx+i*(bw+X*.007);g.fillStyle='#0b0d12';g.fillRect(x,Y*.16,bw,Y*.68);g.fillStyle='#262b38';g.fillRect(x+2,Y*.2,bw-4,Y*.12);holes(g,x+3,Y*.36,bw-6,Y*.44,7,1.6,'#05060a');led(q,x+bw-8,Y*.26,3.2,i%4===2?'#9fb4ff':BLUE)}
    holes(g,X*.9,Y*.15,X*.07,Y*.7,8,2,'#06070b');led(q,X*.045,Y*.5,3.2,BLUE);
  }else if(kind==='2u'){ /* twelve 3.5-inch bays, 3 x 4 */
    const bx=X*.07,bw=X*.19,bh=(Y*.86)/3;for(let r=0;r<3;r++)for(let i=0;i<4;i++){const x=bx+i*(bw+X*.012),y=Y*.07+r*bh;g.fillStyle='#0a0c11';g.fillRect(x,y+1,bw,bh-3);g.fillStyle='#22273a';g.fillRect(x+3,y+4,bw*.22,bh-9);holes(g,x+bw*.27,y+5,bw*.7,bh-11,7,1.7,'#05060a');led(q,x+bw*.11,y+bh*.3,2.6,BLUE);led(q,x+bw*.11,y+bh*.62,2,'#3049b0')}
    led(q,X*.035,Y*.3,3.4,BLUE);
  }else if(kind==='gpu'){ /* honeycomb intake grille */
    g.fillStyle='#0c0e14';g.fillRect(X*.05,Y*.08,X*.9,Y*.84);holes(g,X*.06,Y*.1,X*.88,Y*.8,17,6.6,'#020306');
    g.fillStyle='#1c2130';g.fillRect(X*.05,Y*.08,X*.9,Y*.03);led(q,X*.94,Y*.16,3.4,BLUE);led(q,X*.92,Y*.16,2.4,'#3049b0');
  }else if(kind==='psu'){ /* power shelf: six hot-swap rectifier modules */
    const n=6,mw=X*.84/n;for(let i=0;i<n;i++){const x=X*.08+i*mw;g.fillStyle='#0d1017';g.fillRect(x+2,Y*.1,mw-4,Y*.8);
      g.strokeStyle='#2a3142';g.lineWidth=2;g.beginPath();g.arc(x+mw*.42,Y*.5,Y*.3,0,7);g.stroke();holes(g,x+mw*.42-Y*.28,Y*.22,Y*.56,Y*.56,6,1.5,'#04050a');
      g.fillStyle='#3a4256';g.fillRect(x+mw*.8,Y*.2,mw*.08,Y*.6);led(q,x+mw*.84,Y*.3,2.6,BLUE);led(q,x+mw*.84,Y*.5,2.2,BLUE);led(q,x+mw*.84,Y*.7,2,'#3049b0')}
  }else if(kind==='sw'){ /* top-of-rack switch: ports */
    for(let r=0;r<2;r++)for(let i=0;i<24;i++){const x=X*.06+i*X*.032+Math.floor(i/6)*X*.012,y=Y*(.18+r*.36);g.fillStyle='#05060a';g.fillRect(x,y,X*.026,Y*.28);led(q,x+X*.013,y-3,1.6,(i*7+r*3)%5?BLUE:'#2a3a90')}
    led(q,X*.95,Y*.5,3,BLUE);
  }else{ /* blank */
    holes(g,X*.04,Y*.2,X*.92,Y*.6,9,1.8,'#0a0c10');
  }
  /* rack ears */
  return {map:T(c),em:T(e)};
}
const cache={};function F(k,u){const id=k+u;return cache[id]||(cache[id]=face(k,u))}
const rack=new THREE.Group();
const steel=new THREE.MeshPhysicalMaterial({color:0x0e1118,roughness:.42,metalness:.75,clearcoat:.3,clearcoatRoughness:.4});
const steel2=new THREE.MeshPhysicalMaterial({color:0x161a24,roughness:.55,metalness:.6});
/* frame: four posts, top and bottom, one solid side panel (right, visible), the left side open */
const post=(x,z)=>{const m=new THREE.Mesh(new RoundedBoxGeometry(.045,RH+.1,.045,3,.006),steel);m.position.set(x,RH/2+.05,z);rack.add(m)};
post(-RW/2+.0225,RD/2-.03);post(RW/2-.0225,RD/2-.03);post(-RW/2+.0225,-RD/2+.03);post(RW/2-.0225,-RD/2+.03);
const top=new THREE.Mesh(new RoundedBoxGeometry(RW,.05,RD,3,.008),steel);top.position.set(0,RH+.1,0);rack.add(top);
const bot=new THREE.Mesh(new RoundedBoxGeometry(RW,.08,RD,3,.008),steel);bot.position.set(0,.04,0);rack.add(bot);
/* perforated side panel texture */
const sp=cvs(RD,RH);const sg=sp.getContext('2d');plate(sg,sp.width,sp.height,'#2a303c');holes(sg,sp.width*.06,sp.height*.03,sp.width*.88,sp.height*.94,14,4,'#0b0d14');
const side=new THREE.Mesh(new THREE.BoxGeometry(.012,RH,RD-.07),new THREE.MeshPhysicalMaterial({map:T(sp),roughness:.62,metalness:.3,clearcoat:.1}));
side.position.set(RW/2-.006,RH/2+.08,0);rack.add(side);
/* front mounting rails with square holes */
const rl=cvs(.03,RH);const rg=rl.getContext('2d');rg.fillStyle='#1b202c';rg.fillRect(0,0,rl.width,rl.height);rg.fillStyle='#05060a';for(let i=0;i<42*3;i++){rg.fillRect(rl.width*.3,(i+.3)*rl.height/(42*3),rl.width*.4,rl.height/(42*3)*.4)}
[-1,1].forEach(s=>{const m=new THREE.Mesh(new THREE.BoxGeometry(.03,RH,.004),new THREE.MeshStandardMaterial({map:T(rl),roughness:.45,metalness:.7}));m.position.set(s*(IW/2+.017),RH/2+.08,RD/2-.07);rack.add(m)});
/* equipment, bottom to top (in U) */
const LAY=[['blank',1],['psu',2],['2u',2],['2u',2],['gpu',4],['gpu',4],['blank',1],['1u',1],['1u',1],['1u',1],['1u',1],['2u',2],['gpu',4],['gpu',4],['blank',1],['1u',1],['1u',1],['1u',1],['psu',2],['blank',1],['sw',1],['sw',1],['blank',1]];
let y=.08+U*.5;
LAY.forEach(([k,u])=>{const f=F(k,u);const h=u*U-.0012,dd=k==='blank'?.02:RD-.2;
  const mats=[steel2,steel2,steel2,steel2,new THREE.MeshPhysicalMaterial({map:f.map,emissiveMap:f.em,emissive:new THREE.Color(1,1,1),emissiveIntensity:2.6,roughness:.42,metalness:.35,clearcoat:.25,clearcoatRoughness:.35}),steel2];
  const m=new THREE.Mesh(new THREE.BoxGeometry(IW,h,dd),mats);m.position.set(0,y+h/2-U*.5+.0006,RD/2-.075-dd/2);rack.add(m);
  /* ears */
  [-1,1].forEach(s=>{const e=new THREE.Mesh(new THREE.BoxGeometry(.018,h,.004),steel);e.position.set(s*(IW/2+.009),y+h/2-U*.5+.0006,RD/2-.072);rack.add(e)});
  y+=u*U});
/* a faint glow on the floor from the LEDs, and a contact shadow */
const shc=document.createElement('canvas');shc.width=shc.height=512;const shg=shc.getContext('2d');const sr=shg.createRadialGradient(256,256,10,256,256,256);sr.addColorStop(0,'rgba(0,0,0,.85)');sr.addColorStop(1,'rgba(0,0,0,0)');shg.fillStyle=sr;shg.fillRect(0,0,512,512);
const shm=new THREE.Mesh(new THREE.PlaneGeometry(RW*2.4,RD*2),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(shc),transparent:true,depthWrite:false}));shm.rotation.x=-Math.PI/2;shm.position.y=.001;rack.add(shm);
const glc=document.createElement('canvas');glc.width=glc.height=512;const gg=glc.getContext('2d');const gr=gg.createRadialGradient(256,256,10,256,256,256);gr.addColorStop(0,'rgba(65,105,225,.22)');gr.addColorStop(1,'rgba(65,105,225,0)');gg.fillStyle=gr;gg.fillRect(0,0,512,512);
const glm=new THREE.Mesh(new THREE.PlaneGeometry(RW*2.6,RD*1.4),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(glc),transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));glm.rotation.x=-Math.PI/2;glm.position.set(0,.002,RD/2+.35);rack.add(glm);
rack.rotation.y=-.62;sc.add(rack);
sc.fog=new THREE.Fog(INK,7.5,11);
const cam=new THREE.PerspectiveCamera(26,W/H,.05,50);cam.position.set(-1.5,1.55,5.9);cam.lookAt(0,1.0,0);
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

/* Offline render of the ViVita Technologies hero (HOME_BRIEF update option c: a crafted render of the real product).
   Subject: a transcatheter heart valve whose three leaflets are cut from unfixed, antigen-removed pericardium, the
   application of ViVita's NIH SBIR award 1R43HL180206 ("Unfixed, xenogeneic extracellular matrix for crimp
   damage-resistant and regenerative transcatheter heart valve prostheses": TAVRs made from BARE-Thin porcine
   pericardium). A generic self-expanding diamond-cell frame in satin nitinol, a tissue skirt and three closed cusps
   meeting in the Y of coaptation, the tissue carrying a fine wavy collagen texture. Not a third-party product and
   not ViVita's own prototype. Rendered with ALPHA (no ground of its own, DJ/DP), seen from above the outflow side.
   Output: render.png. Run: node _kit/home/vivitatechnologies/render.js [out] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const K=path.resolve(__dirname,'../..');const W=+process.env.RW||1800,H=+process.env.RH||1800;
const PAGE=`<!doctype html><html><body style="margin:0;background:transparent">
<script type="importmap">{"imports":{"three":"http://r.local/three/build/three.module.js","three/addons/":"http://r.local/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three';
const W=${W},H=${H};
const rn=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true,premultipliedAlpha:false});
rn.setPixelRatio(1);rn.setSize(W,H);rn.setClearColor(0x000000,0);rn.toneMapping=THREE.ACESFilmicToneMapping;rn.toneMappingExposure=.92;
rn.outputColorSpace=THREE.SRGBColorSpace;rn.shadowMap.enabled=true;rn.shadowMap.type=THREE.PCFSoftShadowMap;document.body.appendChild(rn.domElement);
const sc=new THREE.Scene();
/* studio: dark room, warm overhead strip, a long softbox in the logo's brick red on one side */
const pm=new THREE.PMREMGenerator(rn);const env=new THREE.Scene();env.background=new THREE.Color(0x070505);
function box(w,h,d,c,i,x,y,z){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshBasicMaterial({color:new THREE.Color(c).multiplyScalar(i)}));m.position.set(x,y,z);env.add(m)}
box(16,.3,5,0xfff3ea,3.2,-2,12,3);
box(.3,6,14,0xc0504d,1.0,14,2,-4);box(.3,2,14,0xfff0e8,1.8,13,7,2);
box(.3,5,10,0xf1c9c2,.9,-14,3,3);
box(20,4,.3,0xf4e9e4,.7,0,3,16);
box(12,.25,8,0xffe0cc,1.2,3,-10,5);
sc.environment=pm.fromScene(env,0.03).texture;

/* collagen texture: fine crimped fibres running mostly one way, as in pericardium (bump + a faint colour mottling) */
function fibreTex(n,col){const cv=document.createElement('canvas');cv.width=cv.height=n;const g=cv.getContext('2d');
  g.fillStyle=col?'#e9d3c6':'#808080';g.fillRect(0,0,n,n);
  let s=7;const rnd=()=>{s=(s*16807)%2147483647;return s/2147483647};
  if(col){for(let i=0;i<900;i++){const x=rnd()*n,y=rnd()*n,r=20+rnd()*120;const gr=g.createRadialGradient(x,y,0,x,y,r);
    const c=rnd()<.5?'rgba(214,170,160,':'rgba(246,230,220,';gr.addColorStop(0,c+(.10+rnd()*.12)+')');gr.addColorStop(1,c+'0)');g.fillStyle=gr;g.fillRect(x-r,y-r,2*r,2*r)}}
  for(let i=0;i<(col?1400:2600);i++){const y0=rnd()*n,amp=1+rnd()*2.5,wl=10+rnd()*10,ph=rnd()*6.3,len=n*(.15+rnd()*.5),x0=rnd()*n,tilt=(rnd()-.5)*.18;
    g.beginPath();for(let x=0;x<=len;x+=2){const yy=y0+x*tilt+Math.sin(ph+x/wl*6.283)*amp;x===0?g.moveTo(x0+x,yy):g.lineTo(x0+x,yy)}
    const l=rnd()<.5;g.strokeStyle=col?(l?'rgba(250,238,230,.10)':'rgba(196,150,140,.08)'):(l?'rgba(255,255,255,.5)':'rgba(0,0,0,.45)');g.lineWidth=.6+rnd()*1.0;g.stroke()}
  const t=new THREE.CanvasTexture(cv);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=8;if(col)t.colorSpace=THREE.SRGBColorSpace;return t}
const bump=fibreTex(2048,false),albedo=fibreTex(2048,true);
const tissue=new THREE.MeshPhysicalMaterial({color:0xe8dcd2,map:albedo,bumpMap:bump,bumpScale:.7,roughness:.58,metalness:0,
  sheen:.2,sheenRoughness:.6,sheenColor:new THREE.Color('#f6e2d8'),clearcoat:.6,clearcoatRoughness:.22,side:THREE.DoubleSide,envMapIntensity:.5});
const skirtM=tissue.clone();skirtM.color=new THREE.Color('#d9c0b4');
const niti=new THREE.MeshPhysicalMaterial({color:0xb9b2ad,metalness:1,roughness:.24,envMapIntensity:1.35});

const R=1,valve=new THREE.Group();sc.add(valve);
/* ---- frame: diamond cells, 12 around, 4 rows, flared slightly at both ends (y up) ---- */
const N=12,ROWS=[ -0.05,0.32,0.69,1.06,1.43 ];
function rad(y){return R*(1+.07*Math.pow(Math.max(0,(0.3-y)/0.35),2)+.05*Math.pow(Math.max(0,(y-1.1)/0.35),2))}
function node(k,j){const a=(j+(k%2?.5:0))/N*Math.PI*2,y=ROWS[k],r=rad(y);return new THREE.Vector3(Math.cos(a)*r,y,Math.sin(a)*r)}
function strut(p,q){const pts=[];for(let i=0;i<=10;i++){const v=p.clone().lerp(q,i/10);const r=rad(v.y),a=Math.atan2(v.z,v.x);pts.push(new THREE.Vector3(Math.cos(a)*r,v.y,Math.sin(a)*r))}
  const m=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),24,.0145,10,false),niti);valve.add(m)}
for(let k=0;k<ROWS.length-1;k++)for(let j=0;j<N;j++){const p=node(k,j);
  if(k%2){strut(p,node(k+1,j));strut(p,node(k+1,j+1))}else{strut(p,node(k+1,j));strut(p,node(k+1,(j-1+N)%N))}}
/* crowns: small rounded joints at every node */
for(let k=0;k<ROWS.length;k++)for(let j=0;j<N;j++){const s=new THREE.Mesh(new THREE.SphereGeometry(.02,16,12),niti);s.position.copy(node(k,j));valve.add(s)}

/* ---- tissue skirt inside the lower frame, with a scalloped top following the leaflet attachment ---- */
const TOP=1.36,DEEP=.72,CO=[0,1,2].map(i=>i*Math.PI*2/3+Math.PI/2);
function attachY(a){let best=1e9;for(const c of CO){let d=Math.atan2(Math.sin(a-c),Math.cos(a-c));best=Math.min(best,Math.abs(d))}
  const u=1-best/(Math.PI/3);return TOP-DEEP*(1-Math.pow(1-u,2))}
(function(){const sa=256,sb=40,pos=[],uv=[],idx=[];for(let i=0;i<=sa;i++){const a=i/sa*Math.PI*2,yt=attachY(a)+.015;
  for(let j=0;j<=sb;j++){const y=-.02+(yt+.02)*j/sb,r=rad(y)-.024;pos.push(Math.cos(a)*r,y,Math.sin(a)*r);uv.push(i/sa*6,y*1.4)}}
  for(let i=0;i<sa;i++)for(let j=0;j<sb;j++){const A=i*(sb+1)+j,B=A+sb+1;idx.push(A,B,A+1,B,B+1,A+1)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();valve.add(new THREE.Mesh(g,skirtM))})();

/* ---- three leaflets: attached along the scallop, free edges meeting in the Y at the centre (closed valve) ---- */
function leaflet(ci){const c=CO[ci]+Math.PI/3;/* belly centre angle (between two commissures) */
  const nu=160,ns=90,pos=[],uv=[],idx=[];
  for(let i=0;i<=nu;i++){const u=-1+2*i/nu,a=c+u*Math.PI/3,ra=rad(attachY(a))-.03;
    const A=new THREE.Vector3(Math.cos(a)*ra,attachY(a),Math.sin(a)*ra);
    /* free edge: from the commissure (|u|=1) to the centre (u=0) along the coaptation line */
    const ce=c+Math.sign(u||1)*Math.PI/3,fr=Math.abs(u)*(rad(TOP)-.035),fy=TOP-.13*(1-Math.abs(u))-.05*(1-u*u);
    const F=new THREE.Vector3(Math.cos(ce)*fr,fy,Math.sin(ce)*fr);
    for(let j=0;j<=ns;j++){const s=j/ns,P=A.clone().lerp(F,s);
      /* belly: the cusp sags toward the ventricle in the middle, and fills out toward the wall */
      const bel=Math.sin(Math.PI*Math.pow(s,.85))*(1-u*u*.85);P.y-=.38*bel*(1-.25*u*u);
      const out=new THREE.Vector3(P.x,0,P.z);const L=out.length();if(L>1e-4){out.multiplyScalar(1/L);P.addScaledVector(out,.05*bel*(1-s))}
      /* a fine crease along the coaptation zone */
      if(s>.86)P.y+=.03*Math.pow((s-.86)/.14,2);
      pos.push(P.x,P.y,P.z);uv.push(u*1.3+ci*.37,s*1.1+ci*.21)}}
  for(let i=0;i<nu;i++)for(let j=0;j<ns;j++){const A=i*(ns+1)+j,B=A+ns+1;idx.push(A,B,A+1,B,B+1,A+1)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeVertexNormals();
  valve.add(new THREE.Mesh(g,tissue))}
[0,1,2].forEach(leaflet);
/* commissure posts: short doubled tissue tabs where neighbouring cusps meet the frame */
CO.forEach(a=>{const r=rad(TOP)-.02;const m=new THREE.Mesh(new THREE.BoxGeometry(.05,.16,.012),skirtM);m.position.set(Math.cos(a)*r,TOP-.05,Math.sin(a)*r);m.lookAt(0,TOP-.05,0);valve.add(m)});

valve.position.y=-.7;valve.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true}});
valve.rotation.y=.25;

const key=new THREE.SpotLight(0xfff1e8,120,40,.5,.6,1.2);key.position.set(-7.5,6.5,2.5);key.castShadow=true;key.shadow.mapSize.set(4096,4096);key.shadow.radius=3;key.shadow.bias=-.0004;key.shadow.camera.near=4;key.shadow.camera.far=20;sc.add(key);
const rim=new THREE.SpotLight(0xc0504d,30,40,.5,1,1.2);rim.position.set(7,3,-7);sc.add(rim);
const fill=new THREE.SpotLight(0xffd8cf,8,40,.8,1,1.4);fill.position.set(4,-4,7);sc.add(fill);
sc.add(new THREE.AmbientLight(0xffece6,.04));

const cam=new THREE.PerspectiveCamera(22,W/H,.1,100);cam.position.set(0,4.4,6.0);cam.lookAt(0,-.08,0);
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

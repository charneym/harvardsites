// VARIANT B (TOP-FIX 2026-11-27; run: node render_b.js out.png 1101 1101 3, crop to the sent hero's 840x828 frame, then python3 shadow.py out.png hero.webp 100): render.js with neutral light only (BL grey instead of blue); the key stays upper left = the headline side.
/* Offline render of the Helioscopie hero (HOME_BRIEF update option c, PRINCIPLES DS/DD/DT): HELIOSPHERE, the firm's own
   air-filled intragastric balloon, as on helioscopie.fr/heliosphere (the product packshot): a pearly, translucent silicone sphere
   (about 105 mm, under 15 g) with its blue filling valve set in a clear round patch and the thin clear filling tube running over
   its surface. One calm object on the page ink. Raymarched in GLSL with studio softbox reflections and a milky translucency;
   real alpha, no box edge (DJ/DP).
   Run: node _kit/home/helioscopie/render.js out.png 1200 1200 3 */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1200),H=+(process.argv[4]||1200),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1,0,0,0,c,s,0,-s,c);}
mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0,-s,0,1,0,s,0,c);}
int MID=0;
vec3 V=normalize(vec3(.46,.50,.73));
vec3 SN=normalize(vec3(.25,.93,-.27)); /* the bag's weld seam */
vec3 TN;  /* normal of the plane holding the tube's great circle (contains V) */
float A0=-.3,A1=2.05; /* tube arc, angles in that plane measured from V */
vec3 E1,E2;
float tube(vec3 p){float h=dot(p,TN);vec3 q=p-TN*h;float ang=atan(dot(q,E2),dot(q,E1));
  float rr=1.026;
  if(ang>=A0&&ang<=A1)return length(vec2(length(q)-rr,h))-.017;
  float ae=ang<A0?A0:A1;vec3 e=(E1*cos(ae)+E2*sin(ae))*rr;return length(p-e)-.017;}
float map(vec3 p){
  /* a sphere, very slightly flattened along one axis, as an inflated bag is */
  vec3 ps=p*vec3(1.,1.015,1.);float body=length(ps)-1.;
  float t=tube(p);
  float vz=dot(p,V);vec3 vr=p-V*vz;
  float patch=max(length(vr)-.125,abs(vz-1.003)-.008);patch-= .004;
  float plug=max(length(vr)-.052,abs(vz-1.03)-.034)-.010;
  float seam=length(vec2(length(p-SN*dot(p,SN))-1.0,dot(p,SN)))-.0035;
  float d=body;MID=0;
  if(seam<d){d=seam;MID=4;}
  if(patch<d){d=patch;MID=2;}
  if(t<d){d=t;MID=1;}
  if(plug<d){d=plug;MID=3;}
  return d;}
float mapd(vec3 p){int m=MID;float d=map(p);MID=m;return d;}
vec3 nrm(vec3 p){vec2 e=vec2(.0006,0.);return normalize(vec3(mapd(p+e.xyy)-mapd(p-e.xyy),mapd(p+e.yxy)-mapd(p-e.yxy),mapd(p+e.yyx)-mapd(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 BL=vec3(.68,.68,.68); /* TOP-FIX B 2026-11-27: the cool fill, rim and bounce strip are neutral now (was .48,.70,.92) */
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.010,.016,.026)+vec3(.03,.04,.06)*max(d.y,0.);
  c+=vec3(1.,.99,.97)*6.*box2(vec2(az,el),vec2(-.75,.62),vec2(.42,.30),.10);
  c+=vec3(.95,.97,1.)*3.*box2(vec2(az,el),vec2(1.1,.22),vec2(.14,.36),.08);
  c+=BL*.9*box2(vec2(az,el),vec2(2.4,.05),vec2(.40,.6),.30);
  c+=vec3(1.,.93,.62)*.35*box2(vec2(az,el),vec2(-2.2,-.1),vec2(.4,.4),.35);
  c+=vec3(.7,.74,.8)*.25*box2(vec2(az,el),vec2(0.,-.9),vec2(1.2,.25),.4);
  return c;}
vec3 L1=normalize(vec3(-.6,.72,.55)),L2=normalize(vec3(.85,.25,.25)),L3=normalize(vec3(.2,-.6,.5));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float sha(vec3 p,vec3 l){float r=1.,t=.01;for(int i=0;i<48;i++){float h=mapd(p+l*t);r=min(r,12.*h/t);t+=clamp(h,.003,.05);if(r<.01||t>2.)break;}return clamp(r,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<260;i++){vec3 p=ro+rd*t;d=map(p);if(d<.0002){hit=true;break;}t+=d*.9;if(t>9.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd;int m=MID;vec3 n=nrm(p);
  float nv=max(dot(n,v),0.);
  vec3 base;float rough,alpha,F0s;
  if(m==0||m==4){base=vec3(.84,.87,.90);rough=.14;F0s=.06;alpha=.66+.32*pow(1.-nv,1.3);if(m==4)alpha=.9;}
  else if(m==1){base=vec3(.86,.90,.95);rough=.10;F0s=.05;alpha=.80;}
  else if(m==2){base=vec3(.93,.95,.97);rough=.10;F0s=.05;alpha=.92;}
  else {base=vec3(.06,.26,.82);rough=.32;F0s=.05;alpha=1.;}
  vec3 F=vec3(F0s)+(1.-F0s)*pow(1.-nv,5.);
  vec3 col=vec3(0.);
  for(int i=0;i<3;i++){vec3 l=i==0?L1:(i==1?L2:L3);float k=i==0?1.05:(i==1?.38:.14);vec3 lc=i==2?BL:vec3(1.);
    float nl=dot(n,l);float dl=max(nl,0.);float wrap=max((nl+.6)/1.6,0.);float kd=(m==0||m==4)?.72:1.;float sh=(i==0&&m!=0)?mix(.4,1.,sha(p+n*.004,l)):1.;
    if(i==0&&m==0)sh=mix(.55,1.,sha(p+n*.004,l));
    col+=lc*k*sh*(kd*base/PI*2.6*mix(dl,wrap,m==3?.2:.65)+F*ggx(n,v,l,rough)*1.4);}
  /* milky translucency: the bag glows softly where the key light passes through it */
  if(m!=3){col+=vec3(1.,.98,.95)*.16*pow(max(dot(-n,L1)*.5+.5,0.),2.);col+=BL*.10*pow(1.-nv,2.);
    /* light carried through the bag gathers low and opposite the key, as in a filled balloon */
    col+=vec3(.95,.97,1.)*.22*smoothstep(.2,1.,dot(n,normalize(vec3(.35,-.75,.55))))*nv;
    col+=vec3(1.)*.06*(n.y*.5+.5);}
  vec3 r=reflect(rd,n);vec3 e=env(r);
  col+=e*(F+(m==3?0.:.07))*(m==3?.5:.95);
  col+=base*.03;
  return vec4(col,alpha);}
void main(){
  vec3 a=normalize(cross(V,normalize(vec3(-.75,-.45,.35))));TN=a;E1=V;E2=normalize(cross(TN,E1));
  vec3 ro0=vec3(0.,0.,5.6),ta=vec3(0.,0.,0.);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+1.95*ww);
    vec4 s=trace(ro0,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*.80),vec3(1./2.2));
  gl_FragColor=vec4(c,acc.a);}
`;
const PAGE=`<!doctype html><html><body style="margin:0;background:transparent"><canvas id="c" width="${W}" height="${H}"></canvas><script>
const cv=document.getElementById('c');const gl=cv.getContext('webgl',{preserveDrawingBuffer:true,premultipliedAlpha:false,alpha:true,antialias:false});
function sh(t,s){const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(o));return o}
const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'));
gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,${JSON.stringify(FS)}));gl.linkProgram(pr);if(!gl.getProgramParameter(pr,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(pr));gl.useProgram(pr);
const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
const al=gl.getAttribLocation(pr,'a');gl.enableVertexAttribArray(al);gl.vertexAttribPointer(al,2,gl.FLOAT,false,0,0);
gl.uniform2f(gl.getUniformLocation(pr,'R'),${W},${H});
gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.SCISSOR_TEST);
const T=40;let y=0;(function tile(){if(y>=${H}){window.__done=cv.toDataURL('image/png');return}gl.scissor(0,y,${W},T);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);gl.finish();y+=T;setTimeout(tile,0)})();
</script></body></html>`;
(async()=>{
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--disable-gpu-watchdog']});
const p=await b.newPage({viewport:{width:800,height:600}});
p.on('console',m=>{if(!/Performance/.test(m.text()))console.log('page:',m.text())});p.on('pageerror',e=>{console.log('err',e.message);process.exit(1)});
await p.setContent(PAGE);
await p.waitForFunction(()=>window.__done,null,{timeout:3600000,polling:1000});
const out=process.argv[2]||path.join(__dirname,'render.png');
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
console.log('wrote',out);await b.close();})();

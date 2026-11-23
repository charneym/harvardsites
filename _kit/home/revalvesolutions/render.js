/* Offline render of the ReValve Solutions hero (HOME_BRIEF update option c; PRINCIPLES DS/DT/DD): a transcatheter mitral valve,
   the kind of device ReValve's PALMETTO study evaluates (ClinicalTrials.gov NCT07885839, "TMVR with the ReValve System"): a
   self-expanding diamond-cell nitinol frame with an atrial flange, a fabric skirt, and three pericardial leaflets closed on a
   star of coaptation lines, seen from the atrial side. A representative valve, not a drawing of ReValve's own (unpublished)
   design. One calm metal-and-tissue object, raymarched in GLSL with studio softbox reflections; real alpha, no box edge (DJ/DP).
   Run: node _kit/home/revalvesolutions/render.js out.png 1400 1300 3 [zoom] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1400),H=+(process.argv[4]||1300),SS=+(process.argv[5]||3),ZOOM=(process.argv[6]||'2.05');
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
const float RB=.58,HC=.36,Y0=-.54,Y1=.18,HF=.27,SW=.0105,ST=.011;
const float NC=12.;
int MID=0;float SV=0.,TV=0.;
mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1,0,0,0,c,s,0,-s,c);}
mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0,-s,0,1,0,s,0,c);}
mat3 ROT;
float fl(float x){return abs(fract(x+.5)-.5);}
float yfl(float s){return Y1+.035+.11*s/HF-.05*(s/HF)*(s/HF);}
/* the leaflet surface (closed): three cusps meeting on a star of coaptation lines */
float lth(float ph){float a=mod(ph-PI/2.,2.*PI/3.)-PI/3.;return a;}
float fleaf(float rho,float ph){float a=lth(ph),k=a/(PI/3.);float r=clamp(rho/(RB-.014),0.,1.);
  float yatt=-.17+.30*k*k;float yc=-.075;
  float f=mix(yc,yatt,pow(r,1.35));
  f+=.05*sin(PI*pow(r,.8))*(1.-k*k);            /* each cusp bellies gently up toward the atrium */
  float dl=(PI/3.-abs(a))*rho;           /* arc distance to the nearest coaptation line */
  f-=.026*exp(-dl*dl/(.013*.013))*smoothstep(.0,.15,r)*(1.-smoothstep(.9,1.,r));
  return f;}
float map(vec3 p){
  vec3 q=ROT*p;float rho=length(q.xz),ph=atan(q.z,q.x);float pn=ph*NC/(2.*PI);
  float d=1e9;MID=0;
  /* body: a diamond-cell nitinol lattice on a cylinder */
  {float u=pn+q.y/HC,v=pn-q.y/HC;float g=length(vec2(NC/(2.*PI*RB),1./HC));
   float dd=min(fl(u),fl(v))/g;float db=max(max(dd-SW,abs(rho-RB)-ST),max(Y0-.004-q.y,q.y-Y1-.004));
   if(db<d){d=db;MID=1;}}
  /* atrial flange: the same lattice opening outward in a shallow cone, with a rounded bend into the body */
  {float s=rho-RB;float u=pn+.5+s/HF*1.,v=pn+.5-s/HF*1.;float g=length(vec2(NC/(2.*PI*RB),1./HF));
   float dd=min(fl(u),fl(v))/g;float dy=(q.y-yfl(clamp(s,0.,HF)))*.92;
   float df=max(max(dd-SW,abs(dy)-ST),max(-s-.002,s-HF-.004));
   /* the bend: a short quarter-round joining the body's top crown to the flange's inner crown */
   vec2 bc=vec2(RB+.035,Y1);vec2 w=vec2(rho,q.y)-bc;float aa=atan(w.y,w.x);
   float inq=step(PI*.5,aa+PI)*step(aa,PI);float dbn=abs(length(w)-.035)-ST;
   float ub=pn+.5,dd2=fl(ub)/length(vec2(NC/(2.*PI*RB),0.))*1.;dbn=max(max(dbn,dd2-SW*1.15),max(-w.y-.001,w.x));
   df=min(df,dbn);
   if(df<d){d=df;MID=2;}}
  /* fabric skirt inside the body and across the inner flange */
  {float dsk=max(abs(rho-(RB-.016))-.0028,max(Y0+.03-q.y,q.y-(Y1+.01)));
   float s=rho-RB;float dfk=max(abs(q.y-yfl(clamp(s,0.,HF))+.016)-.0026,max(-s+.0,s-HF*.58));
   float dk=min(dsk,dfk);if(dk<d){d=dk;MID=3;SV=ph;TV=q.y+s;}}
  /* three pericardial leaflets */
  if(rho<RB-.012){float f=fleaf(rho,ph);float dl=(abs(q.y-f)-.0055)*.55;if(dl<d){d=dl;MID=4;SV=rho;TV=ph;}}
  else{float dl=length(vec2(rho-(RB-.012),max(abs(q.y-fleaf(RB-.012,ph))-.0055,0.)))*.55;if(dl<d){d=dl;MID=4;}}
  return d;}
float mapd(vec3 p){int m=MID;float s=SV,t=TV;float d=map(p);MID=m;SV=s;TV=t;return d;}
vec3 nrm(vec3 p){vec2 e=vec2(.0007,0.);return normalize(vec3(mapd(p+e.xyy)-mapd(p-e.xyy),mapd(p+e.yxy)-mapd(p-e.yxy),mapd(p+e.yyx)-mapd(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 BL=vec3(.42,.66,.82);
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.004,.010,.020)+vec3(.02,.03,.05)*max(d.y,0.);
  c+=vec3(1.,.99,.97)*2.3*box2(vec2(az,el),vec2(-.6,.85),vec2(.65,.28),.25);
  c+=vec3(.92,.96,1.)*1.0*box2(vec2(az,el),vec2(.9,.30),vec2(.30,.20),.16);
  c+=BL*1.0*box2(vec2(az,el),vec2(2.3,.05),vec2(.35,.5),.25);
  c+=vec3(.7,.75,.8)*.35*box2(vec2(az,el),vec2(0.,-.9),vec2(1.2,.25),.4);
  c+=vec3(.55,.62,.70)*.55*box2(vec2(az,el),vec2(3.0,.55),vec2(1.0,.35),.5);c+=vec3(.10,.14,.19)*(.5+.5*d.y);
  return c;}
vec3 L1=normalize(vec3(-.55,.8,.45)),L2=normalize(vec3(.8,.35,.3)),L3=normalize(vec3(.3,-.5,.6));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<5;i++){float h=.014*float(i);o+=(h-mapd(p+n*h))*s;s*=.65;}return clamp(1.-3.*o,0.,1.);}
float sha(vec3 p,vec3 l){float r=1.,t=.01;for(int i=0;i<48;i++){float h=mapd(p+l*t);r=min(r,10.*h/t);t+=clamp(h,.004,.06);if(r<.01||t>2.)break;}return clamp(r,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  /* bound: a sphere round the valve */
  float bb=dot(ro,rd),cc=dot(ro,ro)-1.25*1.25,hh=bb*bb-cc;if(hh<0.)return vec4(0.);
  float t=max(0.,-bb-sqrt(hh)),tm=-bb+sqrt(hh),d;bool hit=false;
  for(int i=0;i<300;i++){vec3 p=ro+rd*t;d=map(p);if(d<.0002){hit=true;break;}t+=d*.8;if(t>tm)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd;int mid=MID;float sv=SV,tv=TV;vec3 n=nrm(p);if(dot(n,v)<0.&&mid>=3)n=-n;
  vec3 base;float rough,metal,sss=0.;
  if(mid<=2){base=vec3(.84,.87,.90);rough=.30;metal=1.;}
  else if(mid==3){float w1=fl(sv*260.),w2=fl(tv*150.);float wv=smoothstep(.1,.4,min(w1,w2));
    base=vec3(.70,.74,.78)*(.93+.07*wv);rough=.8;metal=0.;sss=.25;}
  else{float fib=.5+.5*sin(sv*180.+sin(tv*7.)*3.);base=mix(vec3(.80,.70,.57),vec3(.88,.80,.68),fib*.5);rough=.40;metal=0.;sss=.18;}
  float oc=ao(p,n);vec3 col=vec3(0.);
  float nv=max(dot(n,v),0.);vec3 F0=mix(vec3(.04),base,metal);vec3 F=F0+(1.-F0)*pow(1.-nv,5.);
  for(int i=0;i<3;i++){vec3 l=i==0?L1:(i==1?L2:L3);float k=i==0?1.25:(i==1?.38:.2);vec3 lc=i==2?BL:vec3(1.);
    float dl=max(dot(n,l),0.);float wr=max((dot(n,l)+.5)/1.5,0.)*sss;float sh=i==0?sha(p+n*.003,l):1.;
    col+=lc*k*sh*((1.-metal)*base/PI*3.*mix(dl,wr+dl*(1.-sss),sss)+F*ggx(n,v,l,max(rough,.08))*.9);}
  vec3 r=reflect(rd,n);vec3 e=env(r);
  col+=e*F*mix(1.,.35,rough)*oc;
  col+=(1.-metal)*base*.07*oc;
  col+=BL*.32*pow(1.-nv,3.)*oc;
  col*=mix(.5,1.,oc);
  return vec4(col,1.);}
void main(){
  ROT=ry(.30)*rx(-.72);
  vec3 ro0=vec3(0.,0.,4.6),ta=vec3(0.,-.02,0.);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+${ZOOM}*ww);
    vec4 s=trace(ro0,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*.72),vec3(1./2.2));
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
const T=60;let y=0;(function tile(){if(y>=${H}){window.__done=cv.toDataURL('image/png');return}gl.scissor(0,y,${W},T);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);gl.finish();y+=T;setTimeout(tile,0)})();
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

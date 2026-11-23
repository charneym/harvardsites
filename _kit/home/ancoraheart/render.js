/* Offline render of the Ancora Heart hero (HOME_BRIEF update option c, PRINCIPLES DS/DD): the AccuCinch implant itself, as shown in
   Ancora Heart's own procedure renders (ancoraheart.com/physicians, "Cinch"): a series of white, knurled spacers threaded on a fine
   cable, an anchor between each pair (a small helical coil that seats in the left-ventricle wall), and a nitinol lock at the end,
   the cable tail running on from the last spacer. One calm metal-and-polymer object, lying in an open arc as it does along the
   ventricle wall before it is cinched. Raymarched in GLSL with studio softbox reflections; real alpha, no box edge (DJ/DP).
   Run: node _kit/home/ancoraheart/render.js out.png 1400 1100 3 */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1400),H=+(process.argv[4]||1100),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
const float RR=1.0,RC=.016,RS=.050,A0=-2.55,A1=2.45;
const int NS=8;
float DPHI=(A1-A0)/float(NS);
float HL=.36*.5*(A1-A0)/float(NS)*1.0;
int MID=0;float SV=0.,TV=0.,FADE=1.;
mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1,0,0,0,c,s,0,-s,c);}
mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0,-s,0,1,0,s,0,c);}
mat3 rz(float a){float c=cos(a),s=sin(a);return mat3(c,s,0,-s,c,0,0,0,1);}
mat3 ROT;
float sdCap(vec3 p,vec3 a,vec3 b,float r){vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h)-r;}
/* local frame on the ring at angle c: s along the tangent (arc length), u radial outward, y plane normal */
vec3 ringLocal(vec3 q,float c){float ph=atan(q.z,q.x);float da=ph-c;float rho=length(q.xz);return vec3(da*RR,rho-RR,q.y);}
float map(vec3 p){
  vec3 q=ROT*p;float ph=atan(q.z,q.x);float rho=length(q.xz);
  float d=1e9;MID=0;
  /* cable along the arc */
  float pc=clamp(ph,A0-.06,A1);vec3 cp=vec3(cos(pc)*RR,0.,sin(pc)*RR);float dc=length(q-cp)-RC;
  if(dc<d){d=dc;MID=1;}
  /* tail: the cable runs on from the A1 end, curving gently away */
  vec3 E=vec3(cos(A1),0.,sin(A1))*RR,T=normalize(vec3(-sin(A1),0.,cos(A1))),Nn=-vec3(cos(A1),0.,sin(A1));
  vec3 B1=E+T*.40,B2=E+T*.62+Nn*.30+vec3(0.,.22,0.);
  float dt=1e9;vec3 pp=E;for(int i=1;i<=8;i++){float u=float(i)/8.;vec3 np=mix(mix(E,B1,u),mix(B1,B2,u),u);dt=min(dt,sdCap(q,pp,np,RC));pp=np;}
  if(dt<d){d=dt;MID=4;}
  /* spacers (nearest three) */
  float kf=floor((ph-A0)/DPHI);
  for(int j=-1;j<=1;j++){float k=clamp(kf+float(j),0.,float(NS-1));float c=A0+(k+.5)*DPHI;vec3 l=ringLocal(q,c);
    float r2=length(l.yz);vec2 w=vec2(abs(l.x)-HL,r2-RS);float ds=length(max(w,0.))+min(max(w.x,w.y),0.)-.010;
    if(ds<d){d=ds;MID=2;SV=l.x;TV=atan(l.z,l.y);}
  }
  /* anchors between spacers: a washer round the cable and a short helical coil pointing out into the wall */
  float bf=floor((ph-A0)/DPHI+.5);
  for(int j=-1;j<=1;j++){float k=clamp(bf+float(j),1.,float(NS-1));float c=A0+k*DPHI;vec3 l=ringLocal(q,c);
    float r2=length(l.yz);float dw=length(vec2(l.x,r2-.040))-.0095;
    /* coil: axis = radial outward (l.y), from u=.035 to u=.16 */
    vec2 pq=vec2(l.x,l.z);float a=atan(pq.y,pq.x);float pit=.030;float u=l.y-.03;
    float kk=floor((u-pit*a/(2.*PI))/pit+.5);float hy=pit*(kk+a/(2.*PI));
    float dh=length(vec2(length(pq)-.022,u-hy))-.0062;dh=max(dh,abs(u-.052)-.052);
    float da=min(dw,dh);if(da<d){d=da;MID=3;}
  }
  /* the lock at the A0 end */
  {float c=A0-.085;vec3 l=ringLocal(q,c);float r2=length(l.yz);vec2 w=vec2(abs(l.x)-.055,r2-.044);
   float dl=length(max(w,0.))+min(max(w.x,w.y),0.)-.008;float dr=length(vec2(l.x+.060,r2-.050))-.010;dl=min(dl,dr);
   if(dl<d){d=dl;MID=5;}}
  return d;}
float mapd(vec3 p){int m=MID;float s=SV,t=TV;float d=map(p);MID=m;SV=s;TV=t;return d;}
vec3 nrm(vec3 p){vec2 e=vec2(.0006,0.);return normalize(vec3(mapd(p+e.xyy)-mapd(p-e.xyy),mapd(p+e.yxy)-mapd(p-e.yxy),mapd(p+e.yyx)-mapd(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 BL=vec3(.48,.73,.80);
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.004,.010,.018)+vec3(.02,.03,.045)*max(d.y,0.);
  c+=vec3(1.,.99,.97)*2.4*box2(vec2(az,el),vec2(-.6,.85),vec2(.65,.28),.25);
  c+=vec3(.92,.96,1.)*1.0*box2(vec2(az,el),vec2(.9,.30),vec2(.30,.20),.16);
  c+=BL*1.1*box2(vec2(az,el),vec2(2.3,.05),vec2(.35,.5),.25);
  c+=vec3(.7,.75,.8)*.35*box2(vec2(az,el),vec2(0.,-.9),vec2(1.2,.25),.4);
  return c;}
vec3 L1=normalize(vec3(-.6,.75,.45)),L2=normalize(vec3(.8,.3,.3)),L3=normalize(vec3(.3,-.5,.6));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<5;i++){float h=.012*float(i);o+=(h-mapd(p+n*h))*s;s*=.65;}return clamp(1.-3.*o,0.,1.);}
float sha(vec3 p,vec3 l){float r=1.,t=.01;for(int i=0;i<40;i++){float h=mapd(p+l*t);r=min(r,10.*h/t);t+=clamp(h,.004,.08);if(r<.01||t>2.)break;}return clamp(r,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<220;i++){vec3 p=ro+rd*t;d=map(p);if(d<.00025){hit=true;break;}t+=d*.9;if(t>9.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd;int mid=MID;float sv=SV,tv=TV;vec3 n=nrm(p);vec3 q=ROT*p;
  vec3 base;float rough,metal;
  if(mid==2){
    float band=smoothstep(HL-.030,HL-.022,abs(sv));
    /* diamond knurl on the polymer body */
    float k1=abs(fract(sv*42.+tv*3.18)-.5),k2=abs(fract(sv*42.-tv*3.18)-.5);float kn=min(k1,k2);
    float gr=1.-smoothstep(.06,.16,kn);
    base=mix(vec3(.86,.89,.91)*(1.-.22*gr),vec3(.80,.82,.84),band);rough=mix(.38,.16,band);metal=band;
    n=normalize(n+(1.-band)*.10*gr*normalize(cross(n,vec3(.3,.7,.2))));
  }else if(mid==1||mid==4){base=vec3(.78,.80,.82);rough=.25;metal=.85;}
  else if(mid==3){base=vec3(.80,.82,.85);rough=.18;metal=1.;}
  else{base=vec3(.74,.77,.80);rough=.15;metal=1.;}
  float fade=1.;if(mid==4){float ds=length(q-vec3(cos(A1),0.,sin(A1))*RR);fade=1.-smoothstep(.25,.75,ds);}
  float oc=ao(p,n);vec3 col=vec3(0.);
  float nv=max(dot(n,v),0.);vec3 F0=mix(vec3(.04),base,metal);vec3 F=F0+(1.-F0)*pow(1.-nv,5.);
  for(int i=0;i<3;i++){vec3 l=i==0?L1:(i==1?L2:L3);float k=i==0?1.25:(i==1?.35:.18);vec3 lc=i==2?BL:vec3(1.);
    float dl=max(dot(n,l),0.);float sh=i==0?sha(p+n*.003,l):1.;
    col+=lc*k*dl*sh*((1.-metal)*base/PI*3.+F*ggx(n,v,l,max(rough,.08))*.9);}
  vec3 r=reflect(rd,n);vec3 e=env(r);
  col+=e*F*mix(1.,.45,rough)*oc;
  col+=(1.-metal)*base*.06*oc;
  /* rim in the brand light blue */
  col+=BL*.35*pow(1.-nv,3.)*oc;
  col*=mix(.55,1.,oc);
  return vec4(col,fade);}
void main(){
  ROT=ry(.55)*rx(-1.02)*rz(.20);
  ROT=ry(.35)*rz(-.10)*rx(.50);
  vec3 ro0=vec3(0.,0.,4.5),ta=vec3(0.03,.0,0.);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+2.4*ww);
    vec4 s=trace(ro0,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*.70),vec3(1./2.2));
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

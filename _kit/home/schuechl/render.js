/* Offline render of the Schüchl hero (HOME_BRIEF update option c, PRINCIPLES DS/DD/DT): one of the firm's own automatic
   VAKUUM casting machines (type UGM, after the product photos on schuechl.de/Prodaus-de.html and Firma-de.html): the blue
   chamber door with its two chamfered windows in riveted grey frames, the clamping lever, the light-grey control column with
   display, push buttons and emergency stop, the louvred base. Through the windows, the warm-lit chamber: the mixing cup tilts and
   a thin amber resin stream runs down into the funnel of a silicone mould, which is how vacuum casting works.
   Raymarched in GLSL, three-quarter view, studio light; real alpha, no box edge (DJ/DP).
   Run: node _kit/home/schuechl/render.js out.png 1000 1150 3 */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1000),H=+(process.argv[4]||1150),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
int MID=0;
float sdBox(vec3 p,vec3 b){vec3 q=abs(p)-b;return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.);}
float rBox(vec3 p,vec3 b,float r){return sdBox(p,b-r)-r;}
float b2(vec2 p,vec2 b){vec2 d=abs(p)-b;return length(max(d,0.))+min(max(d.x,d.y),0.);}
/* chamfered window outline (2D), as the cut octagonal windows on the UGM doors */
float win(vec2 p,vec2 c,vec2 h,float ch){vec2 q=abs(p-c);return max(b2(q,h),(q.x+q.y-(h.x+h.y-ch))*.70710678);}
float cylZ(vec3 p,float r,float h){vec2 d=vec2(length(p.xy)-r,abs(p.z)-h);return min(max(d.x,d.y),0.)+length(max(d,0.));}
float cylY(vec3 p,float r,float h){vec2 d=vec2(length(p.xz)-r,abs(p.y)-h);return min(max(d.x,d.y),0.)+length(max(d,0.));}
float cap(vec3 p,vec3 a,vec3 b,float r){vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h)-r;}
float capT(vec3 p,vec3 a,vec3 b,float ra,float rb){vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h)-mix(ra,rb,h);}
const vec2 WU=vec2(-.27,.40),HU=vec2(.25,.245),WL=vec2(-.27,-.33),HL=vec2(.25,.275);
const float CH=.085,OX=-.17;
/* the mixing cup, tilted to pour */
const float CA=.82;
vec3 CC=vec3(-.34+OX,.40,.10);
float map(vec3 p){
  float d=1e5,t;MID=0;
  /* cabinet */
  t=rBox(p-vec3(0.,.02,0.),vec3(.72,.90,.46),.018);
  /* the chamber behind the door */
  float cav=sdBox(p-vec3(-.27,.02,.06),vec3(.40,.84,.43));
  t=max(t,-cav);
  d=t;MID=0;
  /* door, with its two windows cut out */
  float wu=win(p.xy,WU,HU,CH),wl=win(p.xy,WL,HL,CH),ww=min(wu,wl);
  t=max(rBox(p-vec3(-.27,.02,.488),vec3(.43,.86,.027),.012),-ww);
  if(t<d){d=t;MID=0;}
  /* riveted window frames */
  float ring=abs(ww-.016)-.027;
  t=max(ring,abs(p.z-.519)-.008)-.004;
  if(t<d){d=t;MID=2;}
  {vec2 q;float tg,rv;
   q=p.xy-(wu<wl?WU:WL);vec2 hh=wu<wl?HU:HL;
   tg=abs(q.y)>hh.y-.04?q.x:q.y;tg=mod(tg+.06,.12)-.06;
   rv=length(vec3(tg,ww-.016,(p.z-.531)*1.6))-.0068;
   if(rv<d){d=rv;MID=2;}}
  /* inner glass bezel: a thin dark rubber seal just inside each frame */
  t=max(abs(ww+.006)-.006,abs(p.z-.505)-.006);
  if(t<d){d=t;MID=7;}
  /* hinges */
  t=min(cylY(p-vec3(-.715,.55,.49),.019,.075),cylY(p-vec3(-.715,-.55,.49),.019,.075));
  if(t<d){d=t;MID=2;}
  /* clamping lever: pivot block, bar and knob */
  t=rBox(p-vec3(.105,.03,.528),vec3(.035,.06,.022),.008);
  if(t<d){d=t;MID=2;}
  t=cap(p,vec3(.105,.03,.552),vec3(.245,.075,.575),.0125);
  if(t<d){d=t;MID=2;}
  t=length(p-vec3(.255,.078,.577))-.028;
  if(t<d){d=t;MID=7;}
  /* light-grey control column */
  t=rBox(p-vec3(.445,.02,.468),vec3(.262,.875,.012),.006);
  if(t<d){d=t;MID=1;}
  /* display */
  t=rBox(p-vec3(.445,.665,.482),vec3(.125,.058,.006),.004);
  if(t<d){d=t;MID=12;}
  t=max(abs(b2(p.xy-vec2(.445,.665),vec2(.136,.069)))-.006,abs(p.z-.483)-.006);
  if(t<d){d=t;MID=7;}
  /* push buttons with steel bezels */
  for(int j=0;j<2;j++)for(int i=0;i<3;i++){
    vec3 bc=vec3(.32+.125*float(i),.47-.15*float(j),.48);
    float bz=cylZ(p-bc,.036,.006)-.002;if(bz<d){d=bz;MID=2;}
    float bt=cylZ(p-bc-vec3(0.,0.,.014),.026,.012)-.003;
    if(bt<d){d=bt;MID=j==0?(i==0?10:(i==1?11:7)):(i==0?13:(i==1?11:7));}}
  /* emergency stop on its yellow plate */
  t=rBox(p-vec3(.445,.08,.481),vec3(.08,.08,.006),.004);
  if(t<d){d=t;MID=9;}
  t=cylZ(p-vec3(.445,.08,.50),.034,.016)-.003;
  if(t<d){d=t;MID=8;}
  t=cylZ(p-vec3(.445,.08,.525),.056,.008)-.008;
  if(t<d){d=t;MID=8;}
  /* louvres */
  {float yy=clamp(floor((p.y+.80)/.05+.5),0.,9.);vec3 q=p-vec3(.445,-.80+yy*.05,.484);
   t=rBox(q,vec3(.19,.007,.008),.003);if(t<d){d=t;MID=1;}}
  /* plinth and feet */
  t=rBox(p-vec3(0.,-.925,0.),vec3(.70,.035,.44),.01);
  if(t<d){d=t;MID=7;}
  vec3 fq=vec3(abs(p.x)-.6,p.y+.985,abs(p.z)-.35);
  t=cylY(fq,.045,.03)-.004;
  if(t<d){d=t;MID=2;}
  /* ---- inside the chamber ---- */
  /* the mixing cup: a white PP beaker, tilted, with resin inside */
  {vec3 q=p-CC;float c=cos(CA),s=sin(CA);q.xy=mat2(c,-s,s,c)*q.xy;
   float outer=cylY(q,.074,.085)-.003;float inner=cylY(q-vec3(0.,.02,0.),.066,.085);
   t=max(outer,-inner);if(t<d){d=t;MID=5;}
   float res=max(inner,(p.y-(CC.y-.012)));res=max(res,outer);
   if(res<d){d=res;MID=4;}
   /* holder arm to the back wall */
   t=cap(p,CC+vec3(-.02,-.02,-.05),CC+vec3(-.02,-.02,-.38),.012);if(t<d){d=t;MID=2;}}
  /* the resin stream: off the lip, falling into the funnel */
  vec3 L0=vec3(-.235+OX,.368,.10);
  t=capT(p,L0,L0+vec3(.016,-.05,0.),.0105,.0085);
  t=min(t,capT(p,L0+vec3(.016,-.05,0.),vec3(-.217+OX,-.06,.10),.0085,.0058));
  t=min(t,capT(p,vec3(-.217+OX,-.06,.10),vec3(-.217+OX,-.30,.10),.0058,.0052));
  if(t<d){d=t;MID=4;}
  /* funnel, with a small pool of resin */
  {vec3 q=p-vec3(-.217+OX,-.335,.10);float r=mix(.016,.062,clamp((q.y+.035)/.07,0.,1.));
   float fun=max(abs(length(q.xz)-r)-.004,abs(q.y)-.035);
   fun=min(fun,cylY(q-vec3(0.,-.06,0.),.012,.03));
   if(fun<d){d=fun;MID=5;}
   float pool=max(length(q.xz)-r+.002,abs(q.y-.006)-.012);
   if(pool<d){d=pool;MID=4;}}
  /* the silicone mould, two halves taped shut, on the turntable */
  {vec3 q=p-vec3(-.24+OX,-.47,.10);
   t=rBox(q,vec3(.15,.088,.13),.022);
   t=max(t,-max(abs(q.y)-.003,-(abs(q.x)-.13)));
   if(t<d){d=t;MID=6;}
}
  t=cylY(p-vec3(-.24+OX,-.57,.10),.21,.008)-.003;
  if(t<d){d=t;MID=2;}
  return d;}
float mapd(vec3 p){int m=MID;float d=map(p);MID=m;return d;}
vec3 nrm(vec3 p){vec2 e=vec2(.0005,0.);return normalize(vec3(mapd(p+e.xyy)-mapd(p-e.xyy),mapd(p+e.yxy)-mapd(p-e.yxy),mapd(p+e.yyx)-mapd(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.012,.016,.024)+vec3(.04,.05,.07)*max(d.y,0.);
  c+=vec3(1.,.99,.97)*5.*box2(vec2(az,el),vec2(-.70,.60),vec2(.45,.30),.12);
  c+=vec3(.95,.97,1.)*2.4*box2(vec2(az,el),vec2(1.05,.25),vec2(.16,.40),.08);
  c+=vec3(.62,.74,.92)*.6*box2(vec2(az,el),vec2(2.5,.05),vec2(.40,.6),.30);
  c+=vec3(.7,.74,.8)*.2*box2(vec2(az,el),vec2(0.,-.9),vec2(1.2,.25),.4);
  return c;}
vec3 L1=normalize(vec3(-.55,.70,.62)),L2=normalize(vec3(.9,.28,.2)),L3=normalize(vec3(.1,-.4,.8));
vec3 LP=vec3(-.30,.78,.20); /* the chamber lamp */
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float sha(vec3 p,vec3 l,float mx){float r=1.,t=.004;for(int i=0;i<56;i++){float h=mapd(p+l*t);r=min(r,10.*h/t);t+=clamp(h,.003,.06);if(r<.01||t>mx)break;}return clamp(r,0.,1.);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<6;i++){float h=.012*float(i);o+=(h-mapd(p+n*h))*s;s*=.75;}return clamp(1.-3.2*o,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
bool inside(vec3 p){return sdBox(p-vec3(-.27,.02,.06),vec3(.40,.84,.43))<.002&&p.z<.47;}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<300;i++){vec3 p=ro+rd*t;d=map(p);if(d<.00025){hit=true;break;}t+=d*.92;if(t>12.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd;int m=MID;vec3 n=nrm(p);
  float nv=max(dot(n,v),0.);
  vec3 base;float rough=.4,F0s=.04,em=0.;
  if(m==0){base=vec3(.022,.085,.36);rough=.26;F0s=.05;}
  else if(m==1){base=vec3(.44,.46,.48);rough=.36;}
  else if(m==2){base=vec3(.55,.57,.60);rough=.22;F0s=.5;}
  else if(m==3){base=vec3(.80,.80,.78);rough=.6;}
  else if(m==4){base=vec3(.95,.48,.08);rough=.06;F0s=.05;}
  else if(m==5){base=vec3(.88,.88,.86);rough=.35;}
  else if(m==6){base=vec3(.78,.74,.64);rough=.4;}
  else if(m==7){base=vec3(.035,.037,.04);rough=.35;}
  else if(m==8){base=vec3(.62,.03,.02);rough=.22;}
  else if(m==9){base=vec3(.95,.70,.05);rough=.35;}
  else if(m==10){base=vec3(.04,.42,.12);rough=.2;}
  else if(m==11){base=vec3(.86,.87,.88);rough=.2;}
  else if(m==12){base=vec3(.02,.03,.04);rough=.08;F0s=.06;}
  else if(m==13){base=vec3(.05,.22,.70);rough=.2;}
  else {base=vec3(.12,.16,.24);rough=.3;}
  bool ins=inside(p);
  if(ins&&m==0){base=vec3(.74,.73,.70);rough=.55;F0s=.03;}
  if(m==14&&ins){base=vec3(.30,.32,.34);rough=.3;}
  vec3 F=vec3(F0s)+(1.-F0s)*pow(1.-nv,5.);
  vec3 col=vec3(0.);float a=ao(p,n);
  if(!ins){
    for(int i=0;i<3;i++){vec3 l=i==0?L1:(i==1?L2:L3);float k=i==0?1.05*mix(.5,1.15,smoothstep(1.7,.1,length(p.xy-vec2(-.55,.75)))):(i==1?.20:.10)*mix(.7,1.,smoothstep(-.9,.9,p.y));
      float dl=max(dot(n,l),0.);float sh=i==2?1.:mix(.25,1.,sha(p+n*.002,l,2.));
      col+=k*sh*(base/PI*2.8*dl*(1.-F0s*.8)+F*ggx(n,v,l,rough)*1.3);}
    col+=base*(.03+.04*n.y)*a;
    vec3 r=reflect(rd,n);col+=env(r)*F*(m==2?.8:.6)*a;
    if(m==0||m==1)col+=env(r)*.012*a;
  }else{
    /* the lit chamber: a warm lamp at its top, soft bounce from the white walls */
    vec3 lv=LP-p;float ld=length(lv);vec3 l=lv/ld;float att=1.4/(1.+5.*ld*ld);
    float sh=mix(.35,1.,sha(p+n*.002,l,ld));
    col+=vec3(1.,.92,.78)*1.35*att*sh*(base/PI*3.*max(dot(n,l),0.)+F*ggx(n,v,l,max(rough,.08))*1.6);
    col+=base*vec3(1.,.95,.88)*.16*a;
    if(m==4){col+=vec3(1.,.42,.05)*.22*(.4+.6*pow(1.-nv,1.5));col+=vec3(1.,.6,.2)*.25*pow(max(dot(-n,l)*.5+.5,0.),3.);}
    if(m==6){col+=vec3(.95,.88,.72)*.10*(.5+.5*pow(1.-nv,2.));}
    /* the window glass in front: a faint cool reflection and a soft diagonal sheen */
    vec3 r=reflect(rd,vec3(0.,0.,1.));float fg=.04+.96*pow(1.-abs(rd.z),5.);
    col=col*.93+env(r)*fg*.5;
    vec2 g=p.xy;float sw=smoothstep(.06,0.,abs((g.x+g.y*.55)-(-.10)))*.05+smoothstep(.03,0.,abs((g.x+g.y*.55)-(.02)))*.025;
    col+=vec3(.85,.9,1.)*sw;}
  if(m==12){/* display: dark glass, a soft teal readout */
    vec2 q=p.xy-vec2(.445,.665);float seg=box2(q,vec2(.02,0.),vec2(.075,.026),.006);col+=vec3(.15,.75,.85)*.55*seg*(.75+.25*step(.5,fract((q.x+.1)*48.)));}
  if(m==10)col+=vec3(.05,.5,.15)*.15;
  return vec4(col,1.);}
void main(){
  vec3 ro0=vec3(2.30,1.10,4.15),ta=vec3(.0,-.04,0.);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+1.80*ww);
    vec4 s=trace(ro0,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*.95),vec3(1./2.2));
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

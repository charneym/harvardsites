/* Offline render of the UltraMEND hero (HOME_BRIEF update option c, PRINCIPLES DS/DD): their NSF SBIR Phase I scaffold
   (award 2604948): a thin, frosted polymer patch carrying a regular array of high-aspect-ratio polymer micropillars, the
   pillar walls loaded with fine metallic nanoparticles (two dissimilar metals in neighbouring pillars, shown only as subtle speckle).
   Raymarched SDF with soft shadows and AO; real alpha around the object (no box edge, DJ/DP).
   Run from _kit: node home/ultramend/render.js out.png 1400 1100 2 */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1800),H=+(process.argv[4]||1350),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float h2(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=a*vn(p);p=p*2.03+vec3(1.3,.7,2.1);a*=.5;}return s;}
const float S=.13;const float NP=7.;const float PR=.034;const float PH=.42;const float BH=.045;const float BW=1.0;
float sdRBox(vec3 p,vec3 b,float r){vec3 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.)-r;}
float pillar(vec3 p){
  vec2 id=clamp(floor(p.xz/S+.5),-NP,NP);vec3 q=p;q.xz-=id*S;
  /* a slightly tapered cylinder with a softly domed top, standing on the base */
  float r=PR*(1.-.10*clamp(q.y/PH,0.,1.));
  float d=length(q.xz)-r;float dy=q.y-PH;
  float cyl=max(d,max(dy,-q.y));
  float cap=length(vec3(q.x,max(q.y-(PH-.02),0.),q.z))-r;  /* rounded rim */
  cyl=max(cyl,cap);
  return cyl;}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float base(vec3 p){return sdRBox(p-vec3(0.,-BH,0.),vec3(BW,BH,BW),.03);}
float map(vec3 p){
  float b=base(p);
  if(p.y>PH+.05)return min(b,p.y-PH);         /* early out above the forest */
  return smin(b,pillar(p),.025);}
int matId(vec3 p){return pillar(p)<base(p)-.002?1:0;}
vec3 nrm(vec3 p){vec2 e=vec2(.0007,0.);return normalize(vec3(map(p+e.xyy)-map(p-e.xyy),map(p+e.yxy)-map(p-e.yxy),map(p+e.yyx)-map(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 s,float k){vec2 d=abs(p-c)-s;return 1.-smoothstep(0.,k,max(d.x,d.y));}
const vec3 CY=vec3(.16,.74,.88);
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.004,.010,.016);
  c+=vec3(1.,.99,.97)*2.2*box2(vec2(az,el),vec2(-.7,.9),vec2(.6,.35),.25);
  c+=CY*1.0*box2(vec2(az,el),vec2(2.2,.25),vec2(.35,.45),.25);
  c+=vec3(1.,.99,.97)*2.4*box2(vec2(az,el),vec2(-1.9,.15),vec2(.16,.7),.10);
  c+=vec3(.9,.97,1.)*1.2*box2(vec2(az,el),vec2(.9,.1),vec2(.10,.6),.08);
  return c;}
vec3 L1=normalize(vec3(-.25,.85,.55)),L2=normalize(vec3(.75,.30,-.55)),L3=normalize(vec3(.1,.5,.9));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<6;i++){float h=.025*float(i);o+=(h-map(p+n*h))*s;s*=.7;}return clamp(1.-2.4*o,0.,1.);}
float shadow(vec3 ro,vec3 rd){float res=1.,t=.01;for(int i=0;i<64;i++){float h=map(ro+rd*t);res=min(res,10.*h/t);t+=clamp(h,.008,.12);if(res<.002||t>2.5)break;}return clamp(res,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<300;i++){vec3 p=ro+rd*t;d=map(p);if(d<.0003){hit=true;break;}t+=d*.9;if(t>14.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd,n=nrm(p);
  int m=matId(p);
  float a=ao(p,n);
  /* frosted, faintly cyan medical polymer */
  vec3 alb=vec3(.62,.80,.88)*(.94+.08*fbm(p*7.));
  float rough=.22;float spec=.30;
  if(m==1){
    vec2 id=floor(p.xz/S+.5);float pair=mod(id.x+id.y,2.);
    /* metallic nanoparticles in the pillar wall: fine speckle, two slightly different metals in neighbouring pillars */
    float sp=smoothstep(.80,.93,vn(p*300.+vec3(id*7.,0.)));
    vec3 met=mix(vec3(.80,.82,.85),vec3(.86,.72,.58),pair);
    alb=mix(alb*mix(vec3(1.,1.,1.),vec3(1.03,.99,.95),pair),met*.6,sp*.7);
    spec=mix(.32,1.6,sp);rough=mix(.22,.12,sp);
    alb*=.92+.10*smoothstep(0.,PH,p.y);
  }
  float sh=shadow(p+n*.004,L1);
  vec3 col=vec3(0.);
  for(int i=0;i<3;i++){vec3 l=i==0?L1:(i==1?L2:L3);float k=i==0?1.55:(i==1?.34:.10);float s=i==0?sh:1.;
    vec3 lc=i==1?mix(vec3(1.),CY,.7):vec3(1.,.99,.97);
    float nl=dot(n,l);float wrap=max((nl+.12)/1.12,0.);
    col+=alb*lc*k*wrap*mix(.35,1.,s);
    col+=lc*ggx(n,v,l,rough)*k*spec*max(nl,0.)*s;}
  /* light scattering through the thin polymer */
  col+=alb*CY*.10*pow(max(dot(-n,L1)*.5+.5,0.),2.);
  float F=.04+.96*pow(1.-max(dot(n,v),0.),5.);
  col+=env(reflect(-v,n))*(F*.8+.05);
  col+=vec3(.85,.95,1.)*.22*smoothstep(PH-.03,PH,p.y)*float(m==1);
  col+=alb*vec3(.02,.04,.05);
  float ndv=max(dot(n,v),0.);col+=mix(vec3(.80,.92,1.),CY,.55)*.30*pow(1.-ndv,2.5)*(.4+.6*a);
  col*=.30+.70*a;
  col*=mix(1.,.42,smoothstep(4.2,6.4,t));
  float spot=exp(-dot(p.xz-vec2(.25,.35),p.xz-vec2(.25,.35))*.9);col*=.35+.95*spot;
  return vec4(col,1.);}
void main(){
  vec3 ro0=vec3(2.6,2.9,4.2)*1.18,ta=vec3(0.,.02,0.);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+2.6*ww);
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

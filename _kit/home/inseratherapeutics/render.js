/* Offline render of the Insera Therapeutics hero (HOME_BRIEF update option c, PRINCIPLES DS/DD/DI).
   Subject: the mechanism of the CLEAR Aspiration System at work: one translucent artery segment, gently curved, with a slim
   aspiration catheter (warm metal marker band at its tip) entering from the left and a dark, wet thrombus just ahead of its
   mouth, its tail already drawn in. Raymarched in GLSL: thin glass-like vessel wall (Fresnel layers, front and back), satin
   polymer catheter, crimson clot with wet GGX highlights; both ends of the vessel fade into the page ink with real alpha (DJ/DP).
   Run: node _kit/home/inseratherapeutics/render.js out.png 1500 1000 3 */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1500),H=+(process.argv[4]||1000),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=a*vn(p);p=p*2.03+vec3(1.3,.7,2.1);a*=.5;}return s;}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float sdEll(vec3 p,vec3 r){float k0=length(p/r),k1=length(p/(r*r));return k0*(k0-1.)/k1;}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
const float RR=7.;          /* bend radius of the vessel centreline */
const float RO=.60,WT=.028; /* vessel radius (mid-wall) and half wall thickness */
const float ST=-.30;        /* catheter tip, in arc length */
mat3 rotZ(float a){float c=cos(a),s=sin(a);return mat3(c,s,0.,-s,c,0.,0.,0.,1.);}
mat3 rotX(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}
/* local tube coordinates: s = arc length along the centreline, q = cross-section offset */
vec3 tube(vec3 p){p=rotZ(-.16)*p;vec2 c=vec2(p.x,p.z+RR);float ph=atan(c.x,c.y);return vec3(ph*RR,length(c)-RR,p.y);}
float shell(vec3 p){vec3 t=tube(p);return abs(length(t.yz)-RO)-WT;}
float clotD(vec3 t){
  vec3 b=vec3(t.x-.62,t.y,t.z);float d=sdEll(b,vec3(.95,.50,.50));
  /* tail, tapering back into the catheter mouth */
  float u=clamp((t.x-(ST-.18))/(.62-(ST-.18)),0.,1.);float rr=mix(.10,.36,u*u);
  float tl=max(length(t.yz-vec2(-.01,.0))-rr,max((ST-.18)-t.x,t.x-.62));
  d=smin(d,tl,.16);
  d+=(fbm(vec3(t.x*2.2,t.y*3.6,t.z*3.6))-.5)*.13+(vn(vec3(t.x*8.,t.y*9.,t.z*9.))-.5)*.014;
  return d;}
vec2 inner(vec3 p){vec3 t=tube(p);float r=length(t.yz);
  float cat=max(abs(r-.205)-.034,t.x-ST);
  float lip=max(length(vec2(r-.205,t.x-ST+.0))-.036,-1.);cat=min(cat,lip);
  float mk=max(r-.243,abs(t.x-(ST-.13))-.055);mk=max(mk,-(r-.17));
  float cl=clotD(t)*.8;
  vec2 o=vec2(cat,1.);if(mk<o.x)o=vec2(mk,2.);if(cl<o.x)o=vec2(cl,3.);return o;}
vec3 nI(vec3 p){vec2 e=vec2(.0012,0.);return normalize(vec3(inner(p+e.xyy).x-inner(p-e.xyy).x,inner(p+e.yxy).x-inner(p-e.yxy).x,inner(p+e.yyx).x-inner(p-e.yyx).x));}
vec3 nS(vec3 p){vec2 e=vec2(.0012,0.);return normalize(vec3(shell(p+e.xyy)-shell(p-e.xyy),shell(p+e.yxy)-shell(p-e.yxy),shell(p+e.yyx)-shell(p-e.yyx)));}
const vec3 L1=normalize(vec3(-.55,.75,.55));const vec3 L2=normalize(vec3(.8,.15,-.6));
vec3 env(vec3 r){float y=r.y;vec3 c=mix(vec3(.010,.012,.035),vec3(.10,.13,.24),smoothstep(-.3,.9,y));
  c+=vec3(1.,.97,.92)*pow(max(dot(r,normalize(vec3(-.5,.8,.4))),0.),24.)*2.2;
  c+=vec3(.45,.65,.85)*pow(max(dot(r,normalize(vec3(.9,.2,-.4))),0.),10.)*.8;return c;}
float ggx(vec3 n,vec3 v,vec3 l,float a){vec3 h=normalize(v+l);float nh=max(dot(n,h),0.),a2=a*a,dd=nh*nh*(a2-1.)+1.;return a2/(PI*dd*dd)*max(dot(n,l),0.);}
float fadeS(vec3 p){float s=tube(p).x;return smoothstep(3.0,1.55,s)*smoothstep(-3.1,-1.6,s);}
vec4 trace(vec3 ro,vec3 rd){
  vec3 acc=vec3(0.);float A=0.,t=.5;bool inS=false;
  for(int i=0;i<300;i++){
    vec3 p=ro+rd*t;float ds=shell(p);vec2 di=inner(p);
    if(inS){if(ds>.002){inS=false;}t+=max(abs(ds),.004);continue;}
    if(di.x<.0008){
      vec3 n=nI(p),v=-rd;vec3 c;float fd=fadeS(p);
      float nl=max(dot(n,L1),0.),wl=max(dot(n,L1)*.5+.5,0.);
      if(di.y<1.5){vec3 alb=vec3(.80,.84,.90);c=alb*(.10+.85*nl)*vec3(1.,.98,.95)+alb*vec3(.35,.5,.75)*max(dot(n,L2),0.)*.35;
        c+=vec3(1.)*ggx(n,v,L1,.22)*.25;float F=.04+.96*pow(1.-max(dot(n,v),0.),5.);c=mix(c,env(reflect(rd,n)),F*.5);}
      else if(di.y<2.5){vec3 alb=vec3(.85,.55,.30);c=alb*(.12+.8*nl)*.6+alb*env(reflect(rd,n))*.9+vec3(1.,.85,.6)*ggx(n,v,L1,.18)*.6;}
      else{vec3 alb=vec3(.13,.009,.017);float sss=pow(wl,1.7);c=alb*(.05+.9*sss)+vec3(.35,.02,.03)*max(dot(n,L2),0.)*.25;
        float F=.03+.97*pow(1.-max(dot(n,v),0.),5.);c+=vec3(1.,.93,.9)*(ggx(n,v,L1,.13)*.42+ggx(n,v,normalize(vec3(-.2,.9,.5)),.09)*.22);c+=env(reflect(rd,n))*F*.6;}
      c*=.25+.75*fd;acc+=(1.-A)*c*fd;A+=(1.-A)*fd;break;}
    if(ds<.0008){
      vec3 n=nS(p),v=-rd;float fd=fadeS(p);float cs=abs(dot(n,v));float F=.035+.965*pow(1.-cs,5.);
      vec3 nn=dot(n,v)<0.?-n:n;
      vec3 tint=vec3(.92,.62,.62);
      vec3 c=tint*(.05+.40*max(dot(nn,L1),0.))+env(reflect(rd,nn))*F*1.6+vec3(1.)*ggx(nn,v,L1,.07)*.30+vec3(.6,.8,1.)*ggx(nn,v,L2,.10)*.12;
      float a=clamp((.07+.75*pow(1.-cs,2.5)+F*.4),0.,.92)*fd;
      acc+=(1.-A)*c*a/max(a,1e-4)*a;A+=(1.-A)*a;
      inS=true;t+=.004;continue;}
    t+=min(ds,di.x)*.9;if(t>14.)break;}
  return vec4(A>0.?acc/A:vec3(0.),A);}
void main(){
  vec3 ro0=vec3(-.3,2.3,8.6),ta=vec3(.05,-.12,-.45);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+2.2*ww);
    vec4 s=trace(ro0,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*.9),vec3(1./2.2));
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

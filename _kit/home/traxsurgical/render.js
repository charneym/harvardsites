/* Offline render of the Trax Surgical hero (HOME_BRIEF update option c, PRINCIPLES DS/DD): ONE calm, recognisable object.
   Subject: a Trax-style cannulated headless compression bone screw, as described on traxsurgical.com: titanium, colour-coded
   (gold anodised, the colour their site shows), self-tapping tip with cutting flutes, sharp double-lead leading threads,
   a smooth shank, finer-pitch tapered trailing threads (compression through differential pitch), a cannulation through
   the whole screw and a star drive at the trailing end. Raymarched in GLSL with metallic GGX and a studio environment;
   real alpha around the object (no box, DJ/DP).
   Run: node render.js out.png 1600 1100 3 */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1600),H=+(process.argv[4]||1100),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float smax(float a,float b,float k){return -smin(-a,-b,k);}
/* the screw lies along x: tip at x=-1.35, trailing end at x=+1.30 */
const float XT=-1.35,XE=1.30;
float thr(float ph){float t=abs(fract(ph)-.5)*2.;return smoothstep(.98,.30,t);}          /* 1 at the crest, 0 at the root, rounded */
float screw(vec3 p){
  float x=p.x,r=length(p.yz),a=atan(p.z,p.y)/(2.*PI);
  /* leading (tip) threads: core .145, double lead, pitch .17 */
  float lead=smoothstep(-.42,-.52,x);
  float tipK=smoothstep(XT,XT+.34,x);                                            /* the tip tapers */
  float coreL=mix(.075,.145,tipK);
  float hL=.105*thr(x/.17-2.*a)*mix(.35,1.,tipK);
  /* trailing threads: core tapers .17 -> .225, single lead, pitch .105 (finer: differential pitch) */
  float trail=smoothstep(.50,.62,x);
  float coreT=mix(.17,.225,smoothstep(.55,1.22,x));
  float hT=.06*thr(x/.105-a);
  float shank=.145+.02*smoothstep(.40,.62,x);
  float R0=mix(shank,coreL+hL,lead);
  R0=mix(R0,coreT+hT*(1.-smoothstep(1.20,1.26,x)),trail);
  float d=(r-R0)*.42;
  /* ends: blunt conical point and a chamfered flat trailing face */
  d=max(d,(XT-x));
  d=smax(d,x-XE,.012);
  d=max(d,(r+(x-XE)*1.4-.265)*.7);
  /* cutting flutes at the tip: two flat notches */
  float fl=max(abs(p.z+.02)-.035,-(p.y-.03))+(x-(XT+.36))*.0;
  float flute=max(max(-p.y+.035,abs(p.z)-.05),x-(XT+.40));
  d=smax(d,-flute,.01);
  /* cannulation through the screw, star (hexalobe) drive in the trailing end */
  d=max(d,-(r-.045));
  float star=r-(.115+.022*cos(6.*atan(p.z,p.y)));
  d=smax(d,-max(star,XE-.20-x),.006);
  return d;}
mat3 rotY(float a){float c=cos(a),s=sin(a);return mat3(c,0,-s,0,1,0,s,0,c);}
mat3 rotZ(float a){float c=cos(a),s=sin(a);return mat3(c,s,0,-s,c,0,0,0,1);}
mat3 rotX(float a){float c=cos(a),s=sin(a);return mat3(1,0,0,0,c,s,0,-s,c);}
mat3 M;
float map(vec3 p){vec3 q=M*p;return screw(vec3(q.x*.82,q.yz*1.32))*.72;}
vec3 nrm(vec3 p){vec2 e=vec2(.0007,0.);return normalize(vec3(map(p+e.xyy)-map(p-e.xyy),map(p+e.yxy)-map(p-e.yxy),map(p+e.yyx)-map(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));
  vec3 c=vec3(.010,.016,.040)+vec3(.03,.05,.10)*smoothstep(-.6,.8,d.y);
  c+=vec3(1.,.98,.95)*3.2*box2(vec2(az,el),vec2(-.65,.85),vec2(.70,.28),.25);      /* big softbox above left */
  c+=vec3(.85,.92,1.)*1.6*box2(vec2(az,el),vec2(1.25,.25),vec2(.18,.55),.12);      /* tall strip, right */
  c+=vec3(.30,.42,.80)*.9*box2(vec2(az,el),vec2(-2.2,-.1),vec2(.6,.5),.4);          /* navy bounce, behind */
  c+=vec3(.9,.95,1.)*.5*box2(vec2(az,el),vec2(.2,-.55),vec2(1.2,.12),.2);           /* low fill card */
  return c;}
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<6;i++){float h=.012*float(i);o+=(h-map(p+n*h))*s;s*=.7;}return clamp(1.-3.5*o,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec3 L1=normalize(vec3(-.6,.75,.45)),L2=normalize(vec3(.9,.15,.2)),L3=normalize(vec3(.1,-.5,.8));
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<520;i++){vec3 p=ro+rd*t;d=map(p);if(d<.00025){hit=true;break;}t+=d;if(t>14.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd,n=nrm(p),q=M*p;q=vec3(q.x*.82,q.yz*1.32);
  float o=ao(p,n);
  float rr=length(q.yz);
  float inner=1.-smoothstep(.040,.060,rr)*(1.-step(q.x,1.28)*smoothstep(.16,.14,rr)*step(1.09,q.x));
  /* gold anodised titanium: fine machining marks around the axis */
  float mach=vn(vec3(q.x*420.,rr*30.,0.))*.5+vn(vec3(q.x*90.,0.,rr*8.))*.5;
  vec3 F0=vec3(1.,.70,.24)*(.92+.10*mach);
  float rough=.20+.06*mach;
  float nv=max(dot(n,v),1e-3);
  vec3 F=F0+(1.-F0)*pow(1.-nv,5.);
  vec3 col=env(reflect(-v,n))*F*.9;
  for(int i=0;i<3;i++){vec3 l=i==0?L1:(i==1?L2:L3);float k=i==0?1.6:(i==1?.9:.35);
    float nl=max(dot(n,l),0.);col+=F*ggx(n,v,l,rough)*k*nl*.6+F0*.05*k*nl;}
  col*=.25+.75*o;
  col*=1.-.85*inner;
  return vec4(col,1.);}
void main(){
  M=rotX(.55)*rotZ(-.50)*rotY(.42);
  vec3 ro=vec3(0.,0.,8.0),ta=vec3(0.,0.,0.);
  vec3 ww=normalize(ta-ro),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+3.4*ww);
    vec4 s=trace(ro,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*.85),vec3(1./2.2));
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

/* Offline render of the Regentis Biomaterials hero (HOME_BRIEF update option c, PRINCIPLES DS/DD).
   Subject: the knee end of a thighbone (distal femur): two smooth condyles under a glossy, pale articular cartilage cap,
   bone shaft rising into the dark. In the cartilage of the medial condyle sits one focal lesion filled flush with a
   water-clear, faintly teal GelrinC hydrogel implant (their procedure: the liquid fills the lesion and is UV-cured in place).
   Raymarched in GLSL: SDF bone, wrap-lit cartilage with wet GGX highlights, Fresnel gel with a darker floor seen through it;
   the shaft and the edges fade into the page ink with real alpha (no box edge, DJ/DP).
   Run: node _kit/home/regentis/render.js out.png 1000 1400 3; then hero.webp = out.png with alpha multiplied by a smoothstep ramp over the top 30% (so the shaft dissolves fully). */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1800),H=+(process.argv[4]||1350),SS=+(process.argv[5]||3);
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
float smax(float a,float b,float k){return -smin(-a,-b,k);}
float sdEll(vec3 p,vec3 r){float k0=length(p/r),k1=length(p/(r*r));return k0*(k0-1.)/k1;}
/* the lesion: centre on the medial (left, +x towards camera-left) condyle's front-lower face */
vec3 LC=vec3(-.40,-.47,.50);const float LR=.19;
float bone(vec3 p){
  /* condyles: two ellipsoids, long axis front-back, slightly diverging */
  vec3 q1=p-vec3(-.43,-.30,.02),q2=p-vec3(.45,-.27,-.02);
  float c1=sdEll(q1,vec3(.38,.40,.70)),c2=sdEll(q2,vec3(.37,.39,.68));
  float d=smin(c1,c2,.30);
  /* metaphysis: flares up from the condyles into the shaft */
  float ty=clamp((p.y+.05)/1.25,0.,1.);float wx=mix(.84,.30,smoothstep(0.,1.,ty)),wz=mix(.50,.27,smoothstep(0.,1.,ty));
  float m=length(vec2(p.x/wx,(p.z+.02)/wz))-1.;m*=min(wx,wz);m=smax(m,-p.y-.22,.18);
  d=smin(d,m,.26);
  /* shaft */
  float sh=length(vec2(p.x,p.z+.02))-(.29-.012*p.y);d=smin(d,smax(sh,-p.y+.2,.3),.25);
  /* trochlear groove in front, and a shallow intercondylar notch underneath at the back */
  d=smax(d,-(length(vec2(p.x*1.3,p.z-.80))-.15),.16);
  d=smax(d,-(length(vec2(p.x*1.4,p.y+.86))-.22),.10);
  return d;}
float sdLes(vec3 p){return length(p-LC)-LR;}
float gelBump(vec3 p){float r=length(p-LC);return .018*smoothstep(LR,0.,r)*smoothstep(LR,0.,r)*(1.+.25*(vn(p*30.)-.5));}
float map(vec3 p){float d=bone(p);
  /* the lesion: a shallow cup cut in the cartilage, the gel fills it and domes very slightly (meniscus) */
  float r=length(p-LC);float rim=smoothstep(LR+.025,LR-.01,r);
  d+= .010*rim - .022*smoothstep(LR+.03,LR+.005,r)*smoothstep(LR-.04,LR-.005,r)*0. - gelBump(p);
  d+=.0008*(fbm(p*30.)-.5)*(1.-smoothstep(-.3,.1,-p.y)*0.);
  return d*.8;}
vec3 nrm(vec3 p){vec2 e=vec2(.0012,0.);return normalize(vec3(map(p+e.xyy)-map(p-e.xyy),map(p+e.yxy)-map(p-e.yxy),map(p+e.yyx)-map(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 TEAL=vec3(.26,.61,.57),TEALL=vec3(.56,.75,.77);
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.003,.012,.012);
  c+=vec3(1.,.99,.97)*2.6*box2(vec2(az,el),vec2(-.55,.75),vec2(.55,.30),.22);
  c+=vec3(.90,.97,1.)*1.1*box2(vec2(az,el),vec2(.85,.35),vec2(.30,.18),.14);
  c+=TEALL*1.2*box2(vec2(az,el),vec2(2.0,.15),vec2(.25,.5),.2);
  return c;}
vec3 L1=normalize(vec3(-.75,.55,.55)),L2=normalize(vec3(.85,.25,.25)),L3=normalize(vec3(.2,-.6,.5));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<5;i++){float h=.03*float(i);o+=(h-map(p+n*h))*s;s*=.6;}return clamp(1.-2.2*o,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
float cartMask(vec3 p,vec3 n){
  /* articular cartilage covers the condyles' lower, front and back faces and the trochlea; bone above */
  float lw=1.-smoothstep(-.26,.06,p.y+.10*smoothstep(.2,.8,p.z)-.12*smoothstep(.45,.85,p.z));
  float fz=smoothstep(.30,.55,p.z)*(1.-smoothstep(.10,.34,p.y-.0))*(1.-smoothstep(.40,.60,abs(p.x)));
  float m=max(lw,fz);m*=1.-.0*n.y;return clamp(m+.12*(fbm(p*6.)-.5),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<260;i++){vec3 p=ro+rd*t;d=map(p);if(d<.0004){hit=true;break;}t+=d;if(t>12.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd,n=nrm(p);
  float fade=1.-smoothstep(1.0,2.35,p.y);                  /* the shaft dissolves upward into the dark */
  float a=ao(p,n);
  float cm=cartMask(p,n);
  float r=length(p-LC);float gm=smoothstep(LR+.004,LR-.010,r);
  /* bone: warm ivory, porous, matte */
  vec3 balb=vec3(.62,.55,.45)*(.82+.30*fbm(p*9.))*(1.-.18*smoothstep(.45,.75,fbm(p*30.)));
  /* cartilage: pale blue-white, smooth, slightly translucent */
  vec3 calb=vec3(.64,.70,.72)*(.94+.08*fbm(p*4.));
  vec3 alb=mix(balb,calb,cm);
  vec3 col=vec3(0.);
  float rough=mix(.55,.40,cm);
  for(int i=0;i<3;i++){vec3 l=i==0?L1:(i==1?L2:L3);float k=i==0?1.15:(i==1?.22:.10);
    float nl=dot(n,l);float wrap=max((nl+.25*cm)/(1.+.25*cm),0.);
    col+=alb*k*wrap;
    col+=vec3(1.)*ggx(n,v,l,rough)*k*mix(.03,.30,cm)*max(nl,0.);}
  col+=alb*vec3(.035,.05,.05);                            /* teal-tinted bounce from the room */
  float F=.04+.96*pow(1.-max(dot(n,v),0.),5.);
  col+=env(reflect(-v,n))*F*mix(.05,.30,cm);
  col+=calb*vec3(.10,.08,.07)*cm*smoothstep(.2,-.3,dot(n,L1));   /* light glowing through the cartilage */
  col*=.35+.65*a;
  if(gm>0.){
    /* the gel: clear, faintly teal; reflection on top, the cup floor seen through it; a fine bright meniscus at the rim */
    vec3 rr=refract(rd,n,1./1.34);float depth=.03+.05*smoothstep(LR,0.,r);
    vec3 floorc=vec3(.42,.36,.30)*(.55+.45*fbm((p+rr*depth)*26.))*(.35+.65*max(dot(n,L1),0.));
    float dn=smoothstep(LR,0.,r);vec3 g=mix(calb*.95*(.45+.55*max(dot(n,L1),0.)),TEAL*.75,.22+.40*dn)*(.85+.15*fbm(p*40.));
    float Fg=.025+.975*pow(1.-max(dot(n,v),0.),5.);
    g=g*(1.-Fg)+env(reflect(-v,n))*(Fg*1.4+.06);
    g+=vec3(.92,.98,1.)*(ggx(n,v,L1,.05)*.16+ggx(n,v,normalize(vec3(-.3,.8,.6)),.035)*.22)+vec3(.85,.95,1.)*ggx(n,v,L2,.07)*.06;
    float rimL=smoothstep(.012,0.,abs(r-LR+.006));g+=vec3(.85,.95,.95)*rimL*.30;g*=1.-.25*smoothstep(LR-.05,LR-.012,r)*(1.-rimL);
    col=mix(col,g,gm);}
  col*=.30+.70*fade;
  return vec4(col,fade);}
void main(){
  vec3 ro0=vec3(-1.55,-.85,6.4),ta=vec3(-.02,.50,.05);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+2.25*ww);
    vec4 s=trace(ro0,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*.62),vec3(1./2.2));
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

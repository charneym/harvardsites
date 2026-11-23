/* Offline render of the LiMax Biosciences hero, v2 (coordinator/client review: calm, premium, instantly their product).
   Subject: a water-clear tough-adhesive hydrogel patch, a thin sheet with soft rounded edges, gently domed, one corner peeling
   up as if just lifted off wet tissue. Raymarched in GLSL: physically based refraction through the gel (ior 1.34, two
   interfaces plus one internal reflection), Schlick Fresnel reflections of a dark studio lit by a white softbox and long
   teal / blue / violet strip lights (their brand gradient), faint water-like absorption, and a barely-there microscopic
   polymer texture inside. No wires, no box. Real alpha (DJ/DP).
   Run: node _kit/home/limaxbio/render2.js [out.png] [W] [H] [SS] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1800),H=+(process.argv[4]||1350),SS=+(process.argv[5]||2);
const FS=`
precision highp float;
uniform vec2 R;uniform vec2 OFF;
#define PI 3.14159265
vec3 TEAL=vec3(.184,.710,.647),CYAN=vec3(.267,.639,.773),BLUE=vec3(.227,.482,.835),VIO=vec3(.541,.310,.839),INDI=vec3(.286,.192,.776);
mat3 rotY(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s, 0.,1.,0., s,0.,c);}
mat3 rotX(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0., 0.,c,s, 0.,-s,c);}
mat3 rotZ(float a){float c=cos(a),s=sin(a);return mat3(c,s,0., -s,c,0., 0.,0.,1.);}
/* the patch */
const vec2 HS=vec2(1.32,.98);const float CR=.42,TH=.13,ER=.11;
float disp(vec2 q){
  float dome=-.10*(q.x*q.x/(HS.x*HS.x)+q.y*q.y/(HS.y*HS.y));           /* soft swell, edges a little lower */
  float u=(q.x/HS.x*.66-q.y/HS.y*.75);                                  /* towards the peeling corner (+x,+z) */
  float lift=smoothstep(.18,1.38,u);lift=lift*lift*.6;
  float rip=.012*sin(q.x*5.1+q.y*3.3)+.008*sin(q.x*8.7-q.y*6.1);         /* the faint unevenness of a cast gel */
  return dome+lift+rip;}
float sdPatch(vec3 p){
  vec2 q=p.xz;float y=p.y-disp(q);
  /* the lifted corner curls: thin the slab a touch where it bends so it reads as a sheet */
  vec2 d=abs(q)-(HS-CR);float r2=length(max(d,0.))+min(max(d.x,d.y),0.)-CR;
  float h=TH-ER;vec2 w=vec2(r2+ER,abs(y)-h);
  return length(max(w,0.))+min(max(w.x,w.y),0.)-ER;}
float sdBead(vec3 p){
  /* a swollen gel bead: oblate, a little fuller at the top and flatter underneath where it sags, with the faint, slow
     unevenness of a soft solid */
  float ry=p.y>0.?.72:.58;vec3 r=vec3(1.12,ry,1.0);
  float w=.018*sin(p.x*2.3+p.z*1.7)+.012*sin(p.z*3.1-p.y*2.2+1.3)+.010*sin(p.x*3.7+p.y*2.9);
  float k0=length(p/r),k1=length(p/(r*r));return k0*(k0-1.)/k1-w;}
mat3 M;  /* world -> bead */
float map(vec3 p){return sdBead(M*p)*.8;}vec3 nrm(vec3 p){vec2 e=vec2(.0015,0.);return normalize(vec3(map(p+e.xyy)-map(p-e.xyy),map(p+e.yxy)-map(p-e.yxy),map(p+e.yyx)-map(p-e.yyx)));}
/* studio: near-black room, a broad soft white box above, long strip lights in the brand colours */
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 env(vec3 d){
  vec3 c=vec3(.006,.004,.016);
  float az=atan(d.x,-d.z),el=asin(clamp(d.y,-1.,1.));
  c+=vec3(.92,.96,1.)*1.6*box2(vec2(az,el),vec2(-.25,1.05),vec2(.55,.22),.16);              /* overhead softbox */
  c+=mix(mix(TEAL,BLUE,smoothstep(-.9,0.,az)),VIO,smoothstep(0.,.9,az))*1.7*box2(vec2(az,el),vec2(0.,.42),vec2(1.0,.12),.07)+vec3(.9,.95,1.)*.55*box2(vec2(az,el),vec2(-.1,.44),vec2(.5,.035),.03);  /* broad graded softbox ahead: the sweep across the top face */
  c+=TEAL*3.2*box2(vec2(az,el),vec2(-1.55,.35),vec2(.10,.42),.10);                           /* teal strip, left */
  c+=CYAN*1.6*box2(vec2(az,el),vec2(-.95,.62),vec2(.06,.30),.08);
  c+=BLUE*2.2*box2(vec2(az,el),vec2(.55,.78),vec2(.45,.07),.10);                             /* blue strip, overhead right */
  c+=VIO*3.4*box2(vec2(az,el),vec2(1.62,.28),vec2(.10,.45),.10);                             /* violet strip, right */
  c+=INDI*1.2*box2(vec2(az,el),vec2(2.6,-.05),vec2(.5,.25),.25);                             /* indigo bounce behind */
  c+=mix(TEAL,VIO,smoothstep(-1.2,1.2,az))*.02*smoothstep(.2,-.4,el);                        /* faint coloured floor bounce */
  return c;}
float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
/* barely visible polymer texture: thin ridges of 3D noise, only inside the gel */
float web(vec3 p){float n=vn(p*16.)*.65+vn(p*27.+3.1)*.35;float r=1.-abs(2.*n-1.);return pow(r,22.);}
float fres(float c,float f0){return f0+(1.-f0)*pow(1.-c,5.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 shade(vec2 frag){
  vec2 uv=(frag-.5*R)/R.y;
  vec3 ro=vec3(0.,1.25,5.6),ta=vec3(0.,.02,0.);vec3 ww=normalize(ta-ro),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec3 rd=normalize(uv.x*uu+uv.y*vv+2.4*ww);
  float t=0.,d;bool hit=false;
  for(int i=0;i<260;i++){d=map(ro+rd*t);if(d<.0004){hit=true;break;}t+=d;if(t>14.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,n=nrm(p);float ci=clamp(dot(-rd,n),0.,1.);
  float F=fres(ci,.022);
  vec3 col=env(reflect(rd,n))*F;
  /* into the gel */
  vec3 r1=refract(rd,n,1./1.34);vec3 q=p-n*.004;float tl=0.;vec3 tex=vec3(0.);
  float path=0.;
  for(int bounce=0;bounce<2;bounce++){
    float s=.002;for(int i=0;i<140;i++){float dd=-map(q+r1*s);if(dd<.0004)break;s+=max(dd,.0015);if(s>4.)break;}
    /* texture along the segment */
    for(int k=0;k<14;k++){vec3 x=M*(q+r1*s*(float(k)+.5)/14.);float wv=web(x);tex+=mix(TEAL,VIO,smoothstep(-1.2,1.2,x.x))*wv*s/14.;}
    path+=s;q=q+r1*s;vec3 n2=-nrm(q);
    vec3 r2=refract(r1,n2,1.34);
    if(dot(r2,r2)>.0){float c2=clamp(dot(r1,-n2),0.,1.);float F2=fres(c2,.022);
      vec3 tr=exp(-path*vec3(.30,.10,.12));                 /* water-clear, a hint of cyan absorption */
      col+=(1.-F)*(1.-F2)*tr*env(r2);
      r1=reflect(r1,n2);q=q+n2*.003;col*=1.;  /* keep the internally reflected part for one more pass */
      col+=0.*F2;
      if(bounce==0){/* weight of the internal reflection */ }
      break;}
    r1=reflect(r1,n2);q=q+n2*.003;           /* total internal reflection: keep travelling inside */
  }
  col+=tex*.035;
  /* soft rim light along the silhouette in the gradient, as light caught in the edge */
  float rim=pow(1.-ci,5.);vec3 rimc=mix(TEAL,VIO,smoothstep(-1.6,1.6,(M*p).x*1.1+(M*p).z*.4));
  col+=rimc*rim*.30;
  /* a body tint so the clear gel reads as a volume, not a hole */
  col+=mix(CYAN,VIO,smoothstep(-1.4,1.4,(M*p).x))*.004*(1.+path);
  return vec4(col,1.);}
void main(){
  M=rotZ(.08)*rotX(-.06)*rotY(.5);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec4 s=shade(gl_FragCoord.xy+OFF+(vec2(float(i),float(j))+.5)/n-.5);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;
  vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*1.05),vec3(1./2.2));
  gl_FragColor=vec4(c,acc.a);}
`;
const PAGE=`<!doctype html><html><body style="margin:0;background:transparent"><canvas id="c" width="${W}" height="${H}"></canvas><script>
const cv=document.getElementById('c');const gl=cv.getContext('webgl',{preserveDrawingBuffer:true,premultipliedAlpha:false,alpha:true,antialias:false});
function sh(t,s){const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(o));return o}
const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'));
gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,${JSON.stringify(FS)}));gl.linkProgram(pr);if(!gl.getProgramParameter(pr,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(pr));gl.useProgram(pr);
const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
const al=gl.getAttribLocation(pr,'a');gl.enableVertexAttribArray(al);gl.vertexAttribPointer(al,2,gl.FLOAT,false,0,0);
gl.uniform2f(gl.getUniformLocation(pr,'R'),${W},${H});gl.uniform2f(gl.getUniformLocation(pr,'OFF'),0,0);
gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.SCISSOR_TEST);
const T=120;let y=0;(function tile(){if(y>=${H}){window.__done=cv.toDataURL('image/png');return}gl.scissor(0,y,${W},T);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);gl.finish();y+=T;setTimeout(tile,0)})();
</script></body></html>`;
(async()=>{
const b=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--disable-gpu-watchdog']});
const p=await b.newPage({viewport:{width:800,height:600}});
p.on('console',m=>console.log('page:',m.text()));p.on('pageerror',e=>console.log('err',e.message));
await p.setContent(PAGE);
await p.waitForFunction(()=>window.__done,null,{timeout:1800000,polling:1000});
const out=process.argv[2]||path.join(__dirname,'render.png');
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
console.log('wrote',out);await b.close();})();

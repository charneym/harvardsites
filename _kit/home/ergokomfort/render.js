/* Offline render of the Ergokomfort hero (HOME_BRIEF update option c, PRINCIPLES DS/DD/DT): the firm's own product, the
   ERGOKOMFORT FN-PLUS workplace mat as specified on ergokomfort.de/arbeitsplatzmatten (about 96 x 66 cm, 12 mm, grey foamed
   polyurethane, a field of flat round buttons, a bevelled ramp on every side). One calm object lying on an unseen floor, lit
   by a studio softbox; raymarched in GLSL, real alpha including its soft contact shadow, so no box edge (DJ/DP).
   Run: node _kit/home/ergokomfort/render.js out.png 1400 1000 3 */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1400),H=+(process.argv[4]||1100),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
/* the ERGOKOMFORT FN-PLUS: about 96 x 66 cm, 12 mm, grey foamed PUR, flat round buttons, a bevelled ramp on every side */
const float HX=.96,HZ=.66,TH=.030,BV=.075,PITCH=.048,BR=.0165,BH=.0026,CR=.05;
float rb2(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
float HIT=0.;
float slab(vec3 p){
  float e=-rb2(p.xz,vec2(HX,HZ),CR);           /* inward distance from the outer edge */
  float top=TH*clamp(e/BV,0.,1.);              /* the bevel ramps up over BV, then the flat top */
  top=mix(top,TH,0.)+.0016*smoothstep(0.,.006,e)*(1.-smoothstep(BV-.004,BV+.004,e))*0.;
  float d=max(-e, max(-p.y, p.y-top));
  return d*.55;}
float btn(vec3 p){
  float e=-rb2(p.xz,vec2(HX,HZ),CR);
  vec2 g=p.xz/PITCH;vec2 c=(fract(g+.5)-.5)*PITCH;
  float inside=step(BV+.012,e);
  float r=length(c)-BR;float h=p.y-(TH+BH);
  float d=length(max(vec2(r,h),0.))+min(max(r,h),0.)-.0022;
  d=max(d,TH-.002-p.y);
  return inside>.5?d:1.;}
float map(vec3 p){float a=slab(p),b=btn(p);HIT=b<a?1.:0.;return min(a,b);}
float mapd(vec3 p){float s=HIT;float d=map(p);HIT=s;return d;}
vec3 nrm(vec3 p){vec2 e=vec2(.0004,0.);return normalize(vec3(mapd(p+e.xyy)-mapd(p-e.xyy),mapd(p+e.yxy)-mapd(p-e.yxy),mapd(p+e.yyx)-mapd(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 GR=vec3(.20,.70,.30);
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.006,.009,.008)+vec3(.03,.035,.034)*max(d.y,0.);
  c+=vec3(1.,.99,.97)*1.8*box2(vec2(az,el),vec2(-.7,.95),vec2(.80,.35),.35);
  c+=vec3(.95,.97,1.)*.6*box2(vec2(az,el),vec2(1.2,.35),vec2(.35,.22),.25);
  c+=GR*.35*box2(vec2(az,el),vec2(2.6,.15),vec2(.5,.4),.35);
  return c;}
vec3 L1=normalize(vec3(-.55,.85,.35)),L2=normalize(vec3(.75,.35,-.2));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<5;i++){float h=.004*float(i);o+=(h-mapd(p+n*h))*s;s*=.7;}return clamp(1.-6.*o,0.,1.);}
float sha(vec3 p,vec3 l){float r=1.,t=.004;for(int i=0;i<64;i++){float h=mapd(p+l*t);r=min(r,14.*h/t);t+=clamp(h,.002,.05);if(r<.01||t>2.)break;}return clamp(r,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  /* start at the bounding box */
  for(int i=0;i<400;i++){vec3 p=ro+rd*t;d=map(p);if(d<.00015){hit=true;break;}t+=d;if(t>12.)break;}
  if(!hit){
    /* a soft contact shadow on the (invisible) floor, as real alpha */
    if(rd.y<0.){float tf=-ro.y/rd.y;vec3 q=ro+rd*tf;float e=rb2(q.xz,vec2(HX,HZ),CR);
      float s=(1.-smoothstep(0.,.16,e))*.62+(1.-smoothstep(0.,.03,e))*.25;
      float s2=1.-sha(q+vec3(0.,.001,0.),L1);s=max(s,s2*.35*(1.-smoothstep(0.,.5,e)));
      return vec4(vec3(0.),clamp(s,0.,.85));}
    return vec4(0.);}
  vec3 p=ro+rd*t,v=-rd;float hb=HIT;vec3 n=nrm(p);
  /* foamed PUR, mid grey; a faint micro-grain so it reads as a soft material, not plastic */
  float gr=fract(sin(dot(floor(p.xz*900.),vec2(12.9898,78.233)))*43758.5453);
  vec3 base=vec3(.135,.14,.145)*(.94+.1*gr);float rough=.66;
  /* a studio pool of light: brightest toward the near-left corner, falling off across the mat */
  float pool=mix(.30,1.35,exp(-dot(p.xz-vec2(-.35,.25),p.xz-vec2(-.35,.25))*1.1));
  float oc=ao(p,n);vec3 col=vec3(0.);
  float nv=max(dot(n,v),0.);vec3 F=vec3(.035)+(1.-vec3(.035))*pow(1.-nv,5.);
  for(int i=0;i<2;i++){vec3 l=i==0?L1:L2;float k=i==0?1.5:.30;
    float dl=max(dot(n,l),0.);float sh=i==0?mix(.15,1.,sha(p+n*.0015,l)):1.;
    col+=k*sh*(i==0?pool:1.)*(base/PI*3.*dl+F*ggx(n,v,l,rough)*.9);}
  vec3 r=reflect(rd,n);col+=env(r)*F*.6*oc;
  col+=base*.06*oc;
  col+=GR*.05*pow(1.-nv,3.)*oc;
  col*=mix(.45,1.,oc);
  return vec4(col,1.);}
void main(){
  vec3 ta=vec3(0.,0.,0.);
  float az=.78,el=.50,dist=5.6;
  vec3 ro0=ta+dist*vec3(sin(az)*cos(el),sin(el),cos(az)*cos(el));
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+2.9*ww);
    vec4 s=trace(ro0,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*1.12),vec3(1./2.2));
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

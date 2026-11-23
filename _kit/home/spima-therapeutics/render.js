/* Offline render of the SPIMA Therapeutics hero (HOME_BRIEF 2c: a crafted render of their real molecule; PRINCIPLES DS:
   one calm, recognisable object). Subject: a single stapled alpha-helical peptide, drawn the way structural biologists draw
   a helix (a cartoon ribbon at the C-alpha radius, 3.6 residues per turn, pitch 5.4 A), in glossy teal graded to mint (their
   logo teal and the teal->mint of their own site image), with the hydrocarbon staple bridging residues i and i+4 on the
   face toward the viewer, the "site-specific chemical brace" of spima-therapeutics.com/pipeline. Raymarched in GLSL with
   GGX highlights, soft AO and a mint rim; rendered with real alpha so it sits on the page ink with no box edge (DP/DJ).
   Run: node _kit/home/spima-therapeutics/render.js [out.png] [W] [H] [SS] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1400),H=+(process.argv[4]||1400),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
const float SIDE=${process.env.SIDE||'1.38'};
const float HR=1.0, HP=2.35, HL=4.25, HW=.40, HT=.085, RR=.05;
float CA=cos(atan(HP/(2.*PI*HR)));
mat3 rotZ(float a){float c=cos(a),s=sin(a);return mat3(c,s,0.,-s,c,0.,0.,0.,1.);}
mat3 rotX(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}
mat3 rotY(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}
mat3 M; /* world -> local */
vec3 hp(float th){return vec3(HR*cos(th),HP*th/(2.*PI),HR*sin(th));}
float sdHelix(vec3 q){
  float r=length(q.xz),th=atan(q.z,q.x);
  float dy=q.y-HP*th/(2.*PI);dy-=HP*floor(dy/HP+.5);
  float e=clamp((HL-abs(q.y))/1.1,0.,1.);e=e*e*(3.-2.*e);
  float w=HW*(.18+.82*e),t=HT*(.6+.4*e);
  vec2 b=abs(vec2(r-HR,dy*CA))-vec2(t,w)+RR;
  float d=length(max(b,0.))+min(max(b.x,b.y),0.)-RR;
  return max(d*.55,abs(q.y)-HL);}
float sdCap(vec3 p,vec3 a,vec3 b,float r){vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h)-r;}
float TA,TB;
vec3 SA,SB,SC,A0,B0;
float sdStaple(vec3 q){
  /* the hydrocarbon brace as ball-and-stick: a zig-zag carbon chain arching between the two anchor residues */
  float d=1e9;vec3 prev=SA;vec3 ax=vec3(0.,1.,0.);
  for(int i=0;i<=8;i++){float t=float(i)/8.;vec3 c=mix(mix(SA,SC,t),mix(SC,SB,t),t);
    vec3 tg=normalize(mix(SC-SA,SB-SC,t));vec3 side=normalize(cross(tg,normalize(c-mix(A0,B0,.5))));
    c+=side*(mod(float(i),2.)<.5?-.11:.11)*sin(t*PI);
    d=min(d,length(q-c)-.115);if(i>0)d=min(d,sdCap(q,prev,c,.045));prev=c;}
  d=min(d,sdCap(q,A0,SA,.05));d=min(d,sdCap(q,B0,SB,.05));
  return d;}
vec2 map(vec3 p){vec3 q=M*p;float a=sdHelix(q),b=sdStaple(q);return a<b?vec2(a,0.):vec2(b,1.);}
vec3 nrm(vec3 p){vec2 e=vec2(.0015,0.);return normalize(vec3(map(p+e.xyy).x-map(p-e.xyy).x,map(p+e.yxy).x-map(p-e.yxy).x,map(p+e.yyx).x-map(p-e.yyx).x));}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<=5;i++){float h=.06*float(i);o+=(h-map(p+n*h).x)*s;s*=.6;}return clamp(1.-1.6*o,0.,1.);}
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.),d=nh*nh*(a*a-1.)+1.;
  float nl=max(dot(n,l),0.),nv=max(dot(n,v),1e-3);float k=a*.5;float g=nl/(nl*(1.-k)+k)*nv/(nv*(1.-k)+k);
  float f=.04+.96*pow(1.-max(dot(h,v),0.),5.);return a*a/(PI*d*d)*g*f/(4.*nv+1e-3);}
float shadow(vec3 p,vec3 l){float s=1.,t=.03;for(int i=0;i<40;i++){float h=map(p+l*t).x;s=min(s,8.*h/t);t+=clamp(h,.02,.3);if(s<.01||t>8.)break;}return clamp(s,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.;vec2 h;
  for(int i=0;i<260;i++){h=map(ro+rd*t);if(h.x<.0008||t>30.)break;t+=h.x;}
  if(t>30.||h.x>.004)return vec4(0.);
  vec3 p=ro+rd*t,n=nrm(p),v=-rd,q=M*p;
  vec3 L1=normalize(vec3(-.55,.75,.6)),L2=normalize(vec3(.8,-.15,-.55)),L3=normalize(vec3(.1,-.9,.3));
  float o=ao(p,n),sh=shadow(p+n*.01,L1);
  vec3 col;
  if(h.y<.5){
    float g=smoothstep(-HL,HL,q.y);
    vec3 base=mix(vec3(.012,.085,.115),vec3(.060,.400,.360),pow(g,1.3));
    vec3 nl=normalize(vec3(q.x,0.,q.z)*M);
    float inner=smoothstep(.2,-.4,dot(n,nl));
    base=mix(base,base*1.6+vec3(.02,.06,.05),inner*.6);
    float ndl=dot(n,L1);
    float dif=max(ndl,0.)*(.2+.8*sh);
    col=base*(.05+1.0*dif)*o;
    col+=base*vec3(.4,.6,.7)*max(dot(n,L3),0.)*.3*o;
    /* thin ribbon: light passing through it reads as a soft mint translucency */
    col+=vec3(.05,.55,.45)*pow(max(-ndl,0.),1.5)*.22*o;
    float fr=pow(1.-max(dot(n,v),0.),4.);
    col+=vec3(.25,.95,.80)*max(dot(n,L2),0.)*.42*(.3+.7*fr);
    col+=vec3(1.,.97,.93)*ggx(n,v,L1,.18)*1.4*sh;
    col+=vec3(.85,.97,1.)*ggx(n,v,L1,.06)*.5*sh;
    col+=vec3(.7,.95,1.)*ggx(n,v,normalize(vec3(.3,.9,.6)),.1)*.25;
    col+=vec3(.15,.6,.55)*fr*.2*o;
  }else{
    vec3 base=vec3(.86,.66,.36);
    float dif=max(dot(n,L1),0.)*(.3+.7*sh);
    col=base*(.08+1.05*dif)*o;
    float fr=pow(1.-max(dot(n,v),0.),3.);
    col+=vec3(.35,.95,.82)*max(dot(n,L2),0.)*.3;
    col+=vec3(1.,.96,.9)*ggx(n,v,L1,.14)*1.5*sh;
    col+=vec3(1.,.85,.6)*fr*.12;
  }
  return vec4(col,1.);}
void main(){
  M=rotY(.32)*rotX(-.22)*rotZ(.62);
  /* staple anchors: residues i and i+4 (400 degrees apart) on the front face */
  vec3 cl=M*vec3(0.,0.,1.);float phi=atan(cl.z,cl.x)+SIDE;
  TA=phi-radians(200.);TA+=2.*PI*floor((-3.0-TA)/(2.*PI)+.5);TB=TA+radians(400.);
  A0=hp(TA);B0=hp(TB);
  vec3 ra=normalize(vec3(A0.x,0.,A0.z)),rb=normalize(vec3(B0.x,0.,B0.z));
  SA=A0+ra*.38;SB=B0+rb*.38;SC=(SA+SB)*.5+normalize(ra+rb)*.92;
  vec3 ro0=vec3(0.,0.,15.),ta=vec3(0.);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  float fd=length(ta-ro0),ap=.05;
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd0=normalize(uv.x*uu+uv.y*vv+1.62*ww);vec3 fp=ro0+rd0*fd/dot(rd0,ww);
    float a=(float(i*${SS}+j)+.5)*2.39996,rr=sqrt((float(i*${SS}+j)+.5)/(n*n));
    vec3 ro=ro0+(uu*cos(a)+vv*sin(a))*rr*ap;vec3 rd=normalize(fp-ro);
    vec4 s=trace(ro,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*1.0),vec3(1./2.2));
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
p.on('console',m=>{if(!/Performance/.test(m.text()))console.log('page:',m.text())});p.on('pageerror',e=>console.log('err',e.message));
await p.setContent(PAGE);
await p.waitForFunction(()=>window.__done,null,{timeout:3600000,polling:1000});
const out=process.argv[2]||path.join(__dirname,'render.png');
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
console.log('wrote',out);await b.close();})();

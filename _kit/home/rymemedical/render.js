/* Offline render of the Ryme Medical hero (HOME_BRIEF update option c, PRINCIPLES DS/DD).
   Subject: the human airway tree seen from the front: the trachea with its cartilage rings, the carina, the two main bronchi
   and their first lobar branches, in pale living tissue. On the left main bronchus (viewer's right) a band of the wall is
   frosted, lit by the cold balloon inside it: Ryme's targeted lung denervation, a balloon catheter that freezes the nerves
   around the airway (HRA research summary, REC 24/SC/0123). Raymarched SDF, wrap-lit tissue, frost with sparkle;
   the trachea top and the branch tips fade into the page ink with real alpha (no box edge, DJ/DP).
   Run: node _kit/home/rymemedical/render.js out.png 1100 1300 3 */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1100),H=+(process.argv[4]||1300),SS=+(process.argv[5]||3);
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
/* tapered capsule; returns distance, and the param along the axis in .y */
vec2 tube(vec3 p,vec3 a,vec3 b,float ra,float rb,float ring,float rph){
  vec3 pa=p-a,ba=b-a;float L=length(ba);float h=clamp(dot(pa,ba)/(L*L),0.,1.);
  float r=mix(ra,rb,h);
  /* cartilage rings: soft raised bands every ~0.075 units along the axis */
  float s=h*L/.078+rph;float rg=smoothstep(.15,.85,.5+.5*cos(s*2.*PI));rg=rg*rg;
  r+=ring*rg*ra;
  return vec2(length(pa-ba*h)-r,h);}
/* the tree, in units where the trachea is ~0.2 in radius; x to viewer's right, y up, z towards viewer */
vec3 CAR=vec3(0.,.30,0.);
vec3 RMB=vec3(-.40,-.12,.04),LMB=vec3(.66,-.10,-.04);
float FZ,FZL;      /* frost mask of the last evaluation, set by map */
float map(vec3 p){
  float d=tube(p,vec3(0.,2.1,-.02),CAR+vec3(0.,.08,0.),.215,.205,.032,0.).x;
  vec2 rm=tube(p,CAR,RMB,.175,.150,.022,.3);d=smin(d,rm.x,.07);
  vec2 lm=tube(p,CAR,LMB,.160,.135,.022,.55);d=smin(d,lm.x,.07);
  /* right: upper lobe bronchus, bronchus intermedius, middle and lower lobe */
  d=smin(d,tube(p,RMB,vec3(-.78,.18,.10),.105,.080,.012,0.).x,.05);
  vec3 BI=vec3(-.52,-.62,.02);
  d=smin(d,tube(p,RMB,BI,.135,.115,.016,.2).x,.05);
  d=smin(d,tube(p,BI,vec3(-.20,-1.26,.18),.080,.060,.0,0.).x,.04);
  d=smin(d,tube(p,BI,vec3(-.66,-1.16,-.02),.105,.080,.0,0.).x,.04);
  d=smin(d,tube(p,vec3(-.78,.18,.10),vec3(-.86,.48,.02),.075,.055,.0,0.).x,.035);
  d=smin(d,tube(p,vec3(-.78,.18,.10),vec3(-1.06,.16,.12),.070,.050,.0,0.).x,.035);
  /* left: upper and lower lobe */
  vec3 LU=vec3(.98,.20,.02),LL=vec3(.86,-.70,.00);
  d=smin(d,tube(p,LMB,LU,.110,.085,.012,0.).x,.05);
  d=smin(d,tube(p,LMB,LL,.120,.095,.012,.1).x,.05);
  d=smin(d,tube(p,LU,vec3(.98,.52,-.02),.070,.050,.0,0.).x,.035);
  d=smin(d,tube(p,LU,vec3(1.24,.16,.10),.065,.048,.0,0.).x,.035);
  d=smin(d,tube(p,LL,vec3(.70,-1.12,.12),.075,.055,.0,0.).x,.035);
  d=smin(d,tube(p,LL,vec3(1.04,-1.08,-.04),.075,.055,.0,0.).x,.035);
  d=smin(d,tube(p,vec3(-.66,-1.16,-.02),vec3(-.92,-1.30,.04),.060,.040,.0,0.).x,.03);
  d=smin(d,tube(p,vec3(-.66,-1.16,-.02),vec3(-.58,-1.50,-.06),.060,.040,.0,0.).x,.03);
  d=smin(d,tube(p,vec3(.86,-.70,.0),vec3(1.20,-.62,.06),.062,.042,.0,0.).x,.03);
  /* frost band: the middle of the left main bronchus */
  float fz=smoothstep(.17,.07,abs(lm.y-.55))*smoothstep(.05,-.02,lm.x);
  FZ=fz;FZL=lm.y*smoothstep(.12,.0,lm.x);
  d+=.0025*(fbm(p*28.)-.5);
  d-=fz*.004*(vn(p*90.)-.3);
  return d*.85;}
vec3 nrm(vec3 p){vec2 e=vec2(.0012,0.);return normalize(vec3(map(p+e.xyy)-map(p-e.xyy),map(p+e.yxy)-map(p-e.yxy),map(p+e.yyx)-map(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 ICE=vec3(.48,.80,.96),ICED=vec3(.29,.58,.82);
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.004,.010,.022);
  c+=vec3(1.,.98,.96)*2.4*box2(vec2(az,el),vec2(-.55,.75),vec2(.55,.30),.22);
  c+=vec3(.85,.93,1.)*1.0*box2(vec2(az,el),vec2(.85,.35),vec2(.30,.18),.14);
  c+=ICE*1.0*box2(vec2(az,el),vec2(2.0,.15),vec2(.25,.5),.2);
  return c;}
vec3 L1=normalize(vec3(-.65,.60,.62)),L2=normalize(vec3(.85,.20,.30)),L3=normalize(vec3(.2,-.6,.5));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<5;i++){float h=.03*float(i);o+=(h-map(p+n*h))*s;s*=.6;}return clamp(1.-2.2*o,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<220;i++){vec3 p=ro+rd*t;d=map(p);if(d<.0005){hit=true;break;}t+=d;if(t>14.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd,n=nrm(p);map(p);float fz=FZ;
  /* the trachea dissolves upward, the branch tips outward, into the dark */
  float fade=(1.-smoothstep(1.05,1.95,p.y))*(1.-smoothstep(.62,1.10,length(vec2((p.x-.12)*.95,(p.y+.10)*.86))));
  float a=ao(p,n);
  /* living tissue: pale rose-ivory, a little mottled, slightly wet */
  vec3 alb=vec3(.84,.56,.53)*(.86+.22*fbm(p*7.));
  alb=mix(alb,vec3(.88,.72,.68),.30*smoothstep(.4,.8,fbm(p*3.+3.)));
  vec3 col=vec3(0.);
  for(int i=0;i<3;i++){vec3 l=i==0?L1:(i==1?L2:L3);float k=i==0?1.10:(i==1?.30:.12);
    float nl=dot(n,l);float wrap=max((nl+.22)/1.22,0.);
    col+=alb*k*wrap;
    col+=vec3(1.)*ggx(n,v,l,.42)*k*.15*max(nl,0.);}
  col+=alb*vec3(.03,.04,.07);
  float F=.04+.96*pow(1.-max(dot(n,v),0.),5.);
  col+=env(reflect(-v,n))*F*.12;
  col+=vec3(.55,.18,.14)*.10*pow(1.-max(dot(n,v),0.),2.);      /* blood-warm subsurface at the silhouette */
  col*=.40+.60*a;
  if(fz>0.){
    /* the frosted band: rime white over a cold blue glow from the balloon inside */
    float cr=vn(p*140.)*vn(p*60.+7.);
    vec3 fr=mix(ICED*.50,vec3(.80,.90,.98),.35+.40*fbm(p*40.))*(.50+.50*max(dot(n,L1),0.)+.22);
    fr+=ICE*.55*pow(max(dot(n,v),0.),1.2)*(.7+.3*fbm(p*12.));
    fr+=env(reflect(-v,n))*F*.6;
    fr+=vec3(1.)*smoothstep(.50,.72,cr)*1.3*max(dot(n,L1),.2);
    col=mix(col,fr,fz*.88);col+=ICE*.10*smoothstep(.30,.0,abs(FZL-.55))*(1.-fz);}
  col*=.55+.45*fade;
  return vec4(col,fade);}
void main(){
  vec3 ro0=vec3(.9,.35,6.4),ta=vec3(.10,.15,0.);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+2.0*ww);
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

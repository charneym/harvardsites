// VARIANT B (TOP-FIX 2026-11-27; run: node render_b.js out.png 1604 1260 3, crop to the sent hero's 1231x1036 frame, then python3 shadow.py out.png hero.webp 100 - .16 .86 .03: a flat soft band on the floor under the arc, not a ghost arc inside it): render.js with neutral light only (BL fill/rim/strip grey instead of blue); key stays upper left = the headline side.
/* Offline render of the Q3 Medical hero (HOME_BRIEF update option c, PRINCIPLES DS/DD/DT): the ARCHIMEDES biodegradable
   biliary and pancreatic stent itself, as shown on q3medical.com/biodegradable.html (prod_archimedes.jpg): a satin, pearl-white
   polymer band twisted into a helix (the "Archimedes screw" that gives it its name), lying in an open arc, with a flat untwisted
   tab at its proximal end and a tapered distal tip. One calm object on the page ink. Raymarched in GLSL with studio softbox
   reflections and a soft wrap/subsurface term for the polymer; real alpha, no box edge (DJ/DP).
   Run: node _kit/home/q3medical/render.js out.png 1400 1100 3 */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1400),H=+(process.argv[4]||1100),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
const float RR=1.0,A0=-2.95,A1=0.50,HW=.100,HT=.036,TW=7.6;
mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1,0,0,0,c,s,0,-s,c);}
mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0,-s,0,1,0,s,0,c);}
mat3 rz(float a){float c=cos(a),s=sin(a);return mat3(c,s,0,-s,c,0,0,0,1);}
mat3 ROT;
float SV=0.;
float rbox(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
/* half-width along the band: a flat, slightly flared tab at A0, a long taper to the tip at A1 */
float hwAt(float c){float tab=smoothstep(A0+.42,A0+.05,c);float tip=smoothstep(A1-.95,A1,c);return HW*(1.+.30*tab)*(1.-.58*tip*tip);}
float thAt(float c){float tip=smoothstep(A1-.6,A1,c);return HT*(1.-.35*tip);}
/* twist angle: none along the tab, then the helix */
float twAt(float c){float s=c-A0;float r=smoothstep(.18,.62,s);return TW*max(s-.30,0.)*r+.25;}
/* distance to the band's cross-section at ring angle c, plus the longitudinal coordinate in that frame */
float sec(vec3 q,float c,out float a){vec3 P=vec3(cos(c),0.,sin(c))*RR,U=vec3(cos(c),0.,sin(c)),T=vec3(-sin(c),0.,cos(c));
  vec3 d=q-P;a=dot(d,T);float u=dot(d,U),v=d.y;float th=twAt(c);float cs=cos(th),sn=sin(th);
  vec2 p=vec2(cs*u+sn*v,-sn*u+cs*v);float hw=hwAt(c),ht=thAt(c);return rbox(p,vec2(hw,ht),min(ht*.95,hw));}
float map(vec3 p){
  vec3 q=ROT*p;float ph=atan(q.z,q.x);float a;
  if(ph>=A0&&ph<=A1){SV=(ph-A0)/(A1-A0);return sec(q,ph,a)*.55;}
  /* outside the arc: distance to whichever end is nearer, as a rounded extrusion cap */
  float a0,a1;float d0=sec(q,A0,a0),d1=sec(q,A1,a1);
  float e0=-a0,e1=a1;
  float r0=length(vec2(max(d0,0.),max(e0,0.)))+min(max(d0,e0),0.);
  float r1=length(vec2(max(d1+.004,0.),max(e1,0.)))+min(max(d1,e1),0.);
  /* round the tip: shrink the cap a touch with distance past the end */
  if(r0<r1){SV=0.;return (r0-.006)*.6;}SV=1.;return (r1-.006)*.6;}
float mapd(vec3 p){float s=SV;float d=map(p);SV=s;return d;}
vec3 nrm(vec3 p){vec2 e=vec2(.0005,0.);return normalize(vec3(mapd(p+e.xyy)-mapd(p-e.xyy),mapd(p+e.yxy)-mapd(p-e.yxy),mapd(p+e.yyx)-mapd(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 BL=vec3(.70,.70,.70); /* TOP-FIX B 2026-11-27: the cool fill, bounce strip and rim are neutral now (was .55,.74,.88) */
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.006,.010,.016)+vec3(.03,.035,.045)*max(d.y,0.);
  c+=vec3(1.,.99,.97)*2.0*box2(vec2(az,el),vec2(-.6,.85),vec2(.70,.30),.30);
  c+=vec3(.95,.97,1.)*.9*box2(vec2(az,el),vec2(.9,.30),vec2(.30,.22),.20);
  c+=BL*.8*box2(vec2(az,el),vec2(2.3,.05),vec2(.40,.5),.30);
  c+=vec3(.7,.74,.8)*.30*box2(vec2(az,el),vec2(0.,-.9),vec2(1.2,.25),.4);
  return c;}
vec3 L1=normalize(vec3(-.6,.75,.50)),L2=normalize(vec3(.8,.3,.3)),L3=normalize(vec3(.3,-.5,.6));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<5;i++){float h=.010*float(i);o+=(h-mapd(p+n*h))*s;s*=.65;}return clamp(1.-3.5*o,0.,1.);}
float sha(vec3 p,vec3 l){float r=1.,t=.01;for(int i=0;i<48;i++){float h=mapd(p+l*t);r=min(r,10.*h/t);t+=clamp(h,.004,.06);if(r<.01||t>2.5)break;}return clamp(r,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<320;i++){vec3 p=ro+rd*t;d=map(p);if(d<.0002){hit=true;break;}t+=d;if(t>9.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd;float sv=SV;vec3 n=nrm(p);
  /* satin pearl polymer, faintly warmer toward the tab */
  vec3 base=mix(vec3(.90,.89,.87),vec3(.87,.89,.91),sv);float rough=.30;
  float oc=ao(p,n);vec3 col=vec3(0.);
  float nv=max(dot(n,v),0.);vec3 F0=vec3(.04);vec3 F=F0+(1.-F0)*pow(1.-nv,5.);
  for(int i=0;i<3;i++){vec3 l=i==0?L1:(i==1?L2:L3);float k=i==0?1.15:(i==1?.34:.16);vec3 lc=i==2?BL:vec3(1.);
    float nl=dot(n,l);float dl=max(nl,0.);float wrap=max((nl+.45)/1.45,0.);float sh=i==0?mix(.22,1.,sha(p+n*.003,l)):1.;
    col+=lc*k*sh*(base/PI*3.*mix(dl,wrap,.30)+F*ggx(n,v,l,rough)*.8);}
  /* soft translucency: light scattering through the thin polymer */
  col+=vec3(1.,.97,.92)*.10*pow(max(dot(-n,L1),0.),1.5);
  vec3 r=reflect(rd,n);vec3 e=env(r);
  col+=e*F*.55*oc;
  col+=base*.035*oc;
  col+=BL*.22*pow(1.-nv,3.)*oc;
  col*=mix(.6,1.,oc);
  float fade=1.;
  return vec4(col,fade);}
void main(){
  ROT=ry(.20)*rx(-1.22)*rz(.10);
  vec3 ro0=vec3(0.,0.,5.2),ta=vec3(0.,.0,0.);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+2.25*ww);
    vec4 s=trace(ro0,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*.74),vec3(1./2.2));
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

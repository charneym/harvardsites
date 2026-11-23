/* Offline render of the GI Windows Surgical hero (HOME_BRIEF update option c, PRINCIPLES DS/DD).
   Subject: one Flexagon self-forming magnet, assembled: eight titanium-grey magnet segments linked at hinge pins into a closed
   octagon (the shape the GI Windows mark is drawn from), seen from above at a calm three-quarter angle. Raymarched in GLSL:
   SDF bars with concave ends wrapped around each pin, brushed metal (GGX + studio softbox reflections, one faint warm rim
   from the brand yellow); real alpha everywhere outside the metal (no box edge, DJ/DP).
   Run: node _kit/home/giwindows/render.js out.png 1400 1100 3, then hero.webp from out.png. */
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
float sdRB(vec3 p,vec3 b,float r){vec3 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.)-r;}
float sdCyl(vec3 p,float r,float h,float e){vec2 d=vec2(length(p.xz)-r+e,abs(p.y)-h+e);return min(max(d.x,d.y),0.)+length(max(d,0.))-e;}
const float RV=1.0;            /* circumradius to the hinge pins */
const float S=PI/4.;
vec2 rot(vec2 p,float a){float c=cos(a),s=sin(a);return vec2(c*p.x-s*p.y,s*p.x+c*p.y);}
/* edge frame: the segment's centre on +x, running along z */
vec3 edgeF(vec3 p,out float id){float a=atan(p.z,p.x);float k=floor((a+S*.5)/S);id=k;vec2 q=rot(p.xz,-k*S);return vec3(q.x,p.y,q.y);}
vec3 vertF(vec3 p){float a=atan(p.z,p.x)-S*.5;float k=floor((a+S*.5)/S);vec2 q=rot(p.xz,-(k*S+S*.5));return vec3(q.x,p.y,q.y);}
float AP=RV*cos(PI/8.),HL=RV*sin(PI/8.);
int MAT;
float bar(vec3 p){float id;vec3 q=edgeF(p,id);vec3 c=q-vec3(AP,0.,0.);
  float d=sdRB(c,vec3(.085,.07,HL-.035),.022);
  /* concave ends wrapping each pin, like the mark */
  vec3 e1=vec3(c.x,c.y,abs(c.z)-HL);d=max(d,-(length(e1.xz)-.098));
  /* two small recessed pockets on the top face */
  vec3 pk=vec3(c.x,c.y-.07,abs(c.z)-.15);d=max(d,-sdRB(pk,vec3(.03,.018,.045),.008));
  /* a fine seam along the outer face */
  d=max(d,-sdRB(vec3(c.x-.085,c.y,c.z),vec3(.006,.006,HL-.08),.002));
  return d;}
float pin(vec3 p){vec3 q=vertF(p);vec3 c=q-vec3(RV,0.,0.);
  float d=sdCyl(c,.062,.078,.016);
  /* link plates top and bottom joining the neighbouring bars */
  float pl=sdRB(vec3(c.x+.01,abs(c.y)-.052,c.z),vec3(.05,.012,.10),.008);
  d=min(d,pl);
  d=max(d,-(length(vec2(c.x,c.z))-.022)+0.*c.y);  /* bored centre */
  d=max(d,-sdCyl(c-vec3(0.,.08,0.),.03,.02,.002));
  return d;}
float map(vec3 p){float a=bar(p),b=pin(p);MAT=a<b?0:1;return min(a,b);}
vec3 nrm(vec3 p){vec2 e=vec2(.0007,0.);return normalize(vec3(map(p+e.xyy)-map(p-e.xyy),map(p+e.yxy)-map(p-e.yxy),map(p+e.yyx)-map(p-e.yyx)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));
  vec3 c=vec3(.015,.015,.016)+vec3(.22)*smoothstep(-.1,1.,d.y);
  c+=vec3(1.,.99,.97)*3.0*box2(vec2(az,el),vec2(-.6,1.05),vec2(.75,.25),.25);   /* big overhead softbox */
  c+=vec3(.95,.97,1.)*1.4*box2(vec2(az,el),vec2(1.3,.45),vec2(.25,.30),.18);     /* side strip */
  c+=vec3(.94,.80,.18)*.45*box2(vec2(az,el),vec2(-2.4,.25),vec2(.30,.35),.25);   /* faint warm rim, brand yellow */
  c+=vec3(.6)*box2(vec2(az,el),vec2(2.6,.9),vec2(.4,.18),.2);
  return c;}
vec3 L1=normalize(vec3(-.5,.9,.35)),L2=normalize(vec3(.8,.35,-.3));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
float ao(vec3 p,vec3 n){float o=0.,s=1.;for(int i=1;i<5;i++){float h=.02*float(i);o+=(h-map(p+n*h))*s;s*=.6;}return clamp(1.-3.*o,0.,1.);}
float shd(vec3 p,vec3 l){float r=1.,t=.01;for(int i=0;i<40;i++){float h=map(p+l*t);r=min(r,10.*h/t);t+=clamp(h,.01,.2);if(r<.01||t>3.)break;}return clamp(r,0.,1.);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<200;i++){vec3 p=ro+rd*t;d=map(p);if(d<.0003){hit=true;break;}t+=d*.9;if(t>12.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd;map(p);int m=MAT;vec3 n=nrm(p);
  float id;vec3 q=edgeF(p,id);
  /* brushed grain along each bar */
  float br=vn(vec3(q.x*260.,q.y*260.,q.z*6.)+id*7.);
  vec3 F0=m==0?vec3(.62,.625,.635):vec3(.54,.545,.55);
  F0*=.97+.04*br;
  float rough=m==0?.26+.05*br:.22;
  float a=ao(p,n);
  vec3 col=vec3(0.);
  vec3 ls[2];ls[0]=L1;ls[1]=L2;
  for(int i=0;i<2;i++){vec3 l=ls[i];float k=i==0?1.6:.45;float nl=max(dot(n,l),0.);
    float s=i==0?shd(p+n*.002,l):1.;
    vec3 h=normalize(v+l);vec3 F=F0+(1.-F0)*pow(1.-max(dot(h,v),0.),5.);
    col+=F*ggx(n,v,l,rough)*k*nl*s*.25+F0*.05*nl*k*s;}
  vec3 r=reflect(-v,n);
  vec3 Fe=F0+(1.-F0)*pow(1.-max(dot(n,v),0.),5.)*(1.-rough);
  /* blur the environment by roughness: average a few jittered lookups */
  vec3 e=vec3(0.);for(int j=0;j<6;j++){vec3 o=vec3(h3(p*91.+float(j))-.5,h3(p*57.+float(j)*3.)-.5,h3(p*33.+float(j)*5.)-.5);e+=env(normalize(r+o*rough*.9));}
  col+=Fe*e/6.*.75;
  col*=.25+.75*a;
  return vec4(col,1.);}
void main(){
  vec3 ro0=vec3(1.35,3.15,4.05),ta=vec3(0.,-.06,0.);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+2.9*ww);
    vec4 s=trace(ro0,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*1.45),vec3(1./2.2));
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

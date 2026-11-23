/* Offline render of the LiMax Biosciences hero, v3 (client: show the product doing its job, PRINCIPLES DS).
   Subject: a close-up of a thin, water-clear tough-adhesive hydrogel patch sealing a small cut on glistening, wet soft tissue.
   The patch bridges the incision and conforms to the tissue's curve (edges thinning to nothing on the surface), slightly
   stretched; one bead of blood is held back at its edge, so the cut is sealed and the bleeding has stopped.
   Raymarched in GLSL: tissue as a heightfield with wrap-lit subsurface-style shading, wet GGX highlights and fine moist glints;
   the gel with Fresnel reflection, refraction through to the tissue beneath, and a soft teal -> violet rim on its edges only;
   depth of field by aperture jitter. The swatch fades into the page ink with real alpha (no box edge, DJ/DP).
   Run: node _kit/home/limaxbio/render3.js [out.png] [W] [H] [SS] */
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const W=+(process.argv[3]||1800),H=+(process.argv[4]||1350),SS=+(process.argv[5]||3);
const FS=`
precision highp float;
uniform vec2 R;
#define PI 3.14159265
vec3 TEAL=vec3(.184,.710,.647),BLUE=vec3(.227,.482,.835),VIO=vec3(.541,.310,.839);
float h3(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*vn(vec3(p,1.7));p=p*2.03+vec2(1.3,.7);a*=.5;}return s;}
/* the cut runs along CD through the origin; the patch is a rounded rectangle centred on it */
const float CA=.36;vec2 CD=vec2(cos(CA),sin(CA));vec2 CN=vec2(-sin(CA),cos(CA));
vec2 loc(vec2 q){return vec2(dot(q,CD),dot(q,CN));}
float hBase(vec2 q){float r2=dot(q,q);
  return -.17*r2+.05*(fbm(q*1.1)-.5)+.016*(fbm(q*4.3+3.)-.5);}
float cutProf(vec2 q){vec2 l=loc(q);float along=1.-smoothstep(.62,.80,abs(l.x));float w=.04*(.55+.45*along);
  return along*(1.-smoothstep(0.,w,abs(l.y)));}
float hT(vec2 q){return hBase(q)-.07*cutProf(q);}
/* patch footprint (smooth 0..1), with soft rounded corners */
float pMask(vec2 q){vec2 l=loc(q)-vec2(.02,0.);vec2 hs=vec2(.98,.46);float cr=.26;
  vec2 d=abs(l)-(hs-cr);float r=length(max(d,0.))+min(max(d.x,d.y),0.)-cr;return 1.-smoothstep(-.11,0.,r);}
const float PT=.022;
float hP(vec2 q){float m=pMask(q);return hBase(q)+PT*m*m*(3.-2.*m)+.0015*m*sin(loc(q).x*9.);}   /* conforms; faint stretch ripples */
float hS(vec2 q){return pMask(q)>.002?max(hT(q),hP(q)):hT(q);}
/* the blood bead, held at the patch edge near one end of the cut */
vec3 BC(){vec2 q=CD*1.09+CN*.05;return vec3(q.x,hT(q)+.034,q.y);}
const float BR=.066;
float sdBead(vec3 p){vec3 d=p-BC();d.y*=1.55;return (length(d)-BR)/1.55;}
float map(vec3 p){return min((p.y-hS(p.xz))*.6,sdBead(p));}
vec3 nS(vec2 q,int which){vec2 e=vec2(.0016,0.);float a,b,c,d;
  if(which==1){a=hP(q+e.xy);b=hP(q-e.xy);c=hP(q+e.yx);d=hP(q-e.yx);}else{a=hT(q+e.xy);b=hT(q-e.xy);c=hT(q+e.yx);d=hT(q-e.yx);}
  return normalize(vec3(-(a-b)/(2.*e.x),1.,-(c-d)/(2.*e.x)));}
float box2(vec2 p,vec2 c,vec2 h,float s){vec2 d=abs(p-c)-h;float o=length(max(d,0.))+min(max(d.x,d.y),0.);return 1.-smoothstep(-s,s,o);}
/* studio: white softboxes for tissue and gel, teal and violet strips that only the gel's edges catch */
vec3 envW(vec3 d){float az=atan(d.x,-d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=vec3(.004,.003,.008);
  c+=vec3(1.,.98,.96)*3.0*box2(vec2(az,el),vec2(-.35,.95),vec2(.6,.28),.18);
  c+=vec3(.95,.97,1.)*1.4*box2(vec2(az,el),vec2(.5,.55),vec2(.35,.12),.10);return c;}
vec3 envG(vec3 d){float az=atan(d.x,-d.z),el=asin(clamp(d.y,-1.,1.));vec3 c=envW(d);
  c+=TEAL*3.0*box2(vec2(az,el),vec2(-1.6,.25),vec2(.14,.40),.12);
  c+=BLUE*1.6*box2(vec2(az,el),vec2(0.,.30),vec2(.9,.06),.08);
  c+=vec3(.92,.96,1.)*.6*box2(vec2(az,el),vec2(-.1,.62),vec2(.9,.16),.14);
  c+=VIO*3.2*box2(vec2(az,el),vec2(1.6,.22),vec2(.14,.40),.12);return c;}
vec3 L1=normalize(vec3(-.45,.75,-.75)),L2=normalize(vec3(.6,.5,.35));
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
vec3 tissue(vec3 p,vec3 v,float under){
  vec2 q=p.xz;vec3 n=nS(q,0);
  /* moist micro-relief perturbs the normal for glints */
  float e=.005;float m0=fbm(q*24.),m1=fbm((q+vec2(e,0.))*24.),m2=fbm((q+vec2(0.,e))*24.);
  vec3 nm=normalize(n+vec3(-(m1-m0),0.,-(m2-m0))*2.0);
  float cp=cutProf(q);
  vec3 alb=mix(vec3(.56,.11,.13),vec3(.36,.035,.06),smoothstep(.35,.75,fbm(q*2.2+7.)));
  alb=mix(alb,vec3(.72,.30,.30),.22*smoothstep(.55,.85,fbm(q*6.+1.)));                 /* paler, fattier flecks */
  float vein=smoothstep(.035,.0,abs(fbm(q*1.6+11.)-.5))*.5;alb=mix(alb,vec3(.42,.08,.14),vein*.5);
  alb=mix(alb,vec3(.36,.03,.06),smoothstep(.15,.7,cp));                                /* the cut: deep red inside */
  vec3 sss=vec3(1.,.28,.22);
  vec3 col=vec3(0.);
  for(int i=0;i<2;i++){vec3 l=i==0?L1:L2;float k=i==0?.95:.30;
    float nl=dot(n,l);float wrap=max((nl+.3)/1.3,0.);
    col+=alb*k*wrap;col+=alb*sss*k*.22*smoothstep(.2,-.4,nl);                          /* light bleeding through the tissue */
    float sp=ggx(nm,v,l,.11)*(i==0?.12:0.)*k*smoothstep(.0,.35,dot(n,v))+ggx(n,v,l,.30)*(i==0?.11:.04)*k;col+=vec3(sp)*(1.-under*.6);}
  col+=alb*vec3(.05,.035,.045);
  float F=.03+.97*pow(1.-max(dot(nm,v),0.),5.);col+=envW(reflect(-v,nm))*min(F,.12)*.38*(1.-under*.7);  /* the wet film */
  col*=1.-.55*cp;
  return col;}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
vec4 trace(vec3 ro,vec3 rd){
  float t=0.,d;bool hit=false;
  for(int i=0;i<300;i++){vec3 p=ro+rd*t;d=map(p);if(d<.0003){hit=true;break;}t+=d;if(t>14.)break;}
  if(!hit)return vec4(0.);
  vec3 p=ro+rd*t,v=-rd;vec2 q=p.xz;
  float fade=1.-smoothstep(1.0,1.45,length(q*vec2(.84,1.1)));      /* the swatch dissolves into the dark */
  vec3 col;
  if(sdBead(p)<.002){                                                 /* blood bead: glossy, dark, a crisp highlight */
    vec3 c=BC();vec3 dd=p-c;dd.y*=1.55*1.55;vec3 n=normalize(dd);
    float F=.04+.96*pow(1.-max(dot(n,v),0.),5.);
    col=vec3(.28,.01,.03)*(.25+.75*max(dot(n,L1),0.))+vec3(.5,.02,.04)*.25*pow(1.-max(dot(n,v),0.),2.);
    col+=envW(reflect(rd,n))*F*1.4+vec3(1.)*ggx(n,v,L1,.08)*.04;
  }else if(pMask(q)>.002&&hP(q)>hT(q)+.0008){                         /* the gel */
    vec3 n=nS(q,1);float ci=max(dot(n,v),0.);float F=.022+.978*pow(1.-ci,5.);
    col=envG(reflect(rd,n))*F*.5;
    vec3 r1=refract(rd,n,1./1.34);vec3 x=p;float s=0.;
    for(int i=0;i<80;i++){x=p+r1*s;if(x.y<hT(x.xz))break;s+=.003+max(0.,(x.y-hT(x.xz)))*.4;}
    vec3 tc=tissue(x,v,1.);
    col+=(1.-F)*tc*vec3(.94,.98,1.)*exp(-s*1.2);
    float m=pMask(q);float edge=smoothstep(.95,.15,m)*m*4.;                       /* the thinning rim of the patch */
    vec2 l=loc(q);vec3 rimc=mix(TEAL,VIO,smoothstep(-1.,1.,l.x));
    col*=1.-.22*edge;col+=rimc*edge*(.3+.7*pow(1.-ci,2.))*.32;
    col+=vec3(.9,.95,1.)*ggx(n,v,L1,.05)*.05;                                       /* a faint sheen */
  }else{
    col=tissue(p,v,0.);
  }
  col*=.35+.65*fade;
  return vec4(col,fade);}
void main(){
  vec3 ro0=vec3(.0,3.7,3.9),ta=vec3(.0,-.18,.05);
  vec3 ww=normalize(ta-ro0),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  float fd=length(ta-ro0),ap=.022;
  vec4 acc=vec4(0.);float n=float(${SS});
  for(int j=0;j<${SS};j++)for(int i=0;i<${SS};i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd0=normalize(uv.x*uu+uv.y*vv+1.9*ww);vec3 fp=ro0+rd0*fd/dot(rd0,ww);
    float a=(float(i*${SS}+j)+.5)*2.39996,rr=sqrt((float(i*${SS}+j)+.5)/(n*n));
    vec3 ro=ro0+(uu*cos(a)+vv*sin(a))*rr*ap;vec3 rd=normalize(fp-ro);
    vec4 s=trace(ro,rd);acc+=vec4(s.rgb*s.a,s.a);}
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
p.on('console',m=>{if(!/Performance/.test(m.text()))console.log('page:',m.text())});p.on('pageerror',e=>console.log('err',e.message));
await p.setContent(PAGE);
await p.waitForFunction(()=>window.__done,null,{timeout:3600000,polling:1000});
const out=process.argv[2]||path.join(__dirname,'render.png');
fs.writeFileSync(out,Buffer.from((await p.evaluate(()=>window.__done)).split(',')[1],'base64'));
console.log('wrote',out);await b.close();})();

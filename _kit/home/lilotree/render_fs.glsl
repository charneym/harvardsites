precision highp float;
uniform vec2 R;
#define PI 3.14159265
const float HB=1.0,TH=.045,HS=.0075;
const float AZ=.70,EL=.80,DIST=7.0,FOC=2.55;
float rbox(vec2 p,vec2 b,float r){vec2 q=abs(p)-b+r;return length(max(q,0.))+min(max(q.x,q.y),0.)-r;}
float sdSeg(vec2 p,vec2 a,vec2 b){vec2 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h);}
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float vn(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
/* layout distances on the top face: x=pad (gold), y=trace (copper under mask), z=via (tented), w=silk; hole/clear in out */
vec4 lay(vec2 p,out float hole){
  float pad=1e3,trc=1e3,via=1e3,silk=1e3;
  /* BGA land pattern, 9x9 on a 0.11 pitch, with dog-bone fan-out to tented vias */
  float P=.11;vec2 c=floor(p/P+.5);
  for(int dy=-1;dy<=1;dy++)for(int dx=-1;dx<=1;dx++){
    vec2 ij=c+vec2(float(dx),float(dy));
    if(max(abs(ij.x),abs(ij.y))<=4.){
      vec2 pc=ij*P;pad=min(pad,length(p-pc)-.034);
      if(!(ij.x==0.&&ij.y==0.)){vec2 s=vec2(ij.x>=0.?1.:-1.,ij.y>=0.?1.:-1.);vec2 vc=pc+s*P*.5;
        trc=min(trc,sdSeg(p,pc,vc)-.0075);via=min(via,length(p-vc)-.019);}
    }}
  /* a fine-pitch ring of rectangular SMD pads on all four sides, each run out to a staggered round test pad */
  vec2 q=abs(p.x)>abs(p.y)?vec2(abs(p.x),p.y):vec2(abs(p.y),p.x);
  float k=clamp(floor(q.y/.07+.5),-7.,7.);float t=q.y-k*.07;
  pad=min(pad,rbox(vec2(q.x-.70,t),vec2(.046,.0175),.004));
  float rE=mod(abs(k),2.)<.5?.855:.94;
  trc=min(trc,sdSeg(vec2(q.x,t),vec2(.74,0.),vec2(rE,0.))-.0085);
  pad=min(pad,length(vec2(q.x-rE,t))-.026);
  /* silkscreen: the component outline and its pin-1 dot */
  silk=abs(rbox(p,vec2(.6),.0))-.0042;
  silk=min(silk,length(p-vec2(-.553,.553))-.012);
  /* plated mounting holes in the corners */
  float hr=length(abs(p)-vec2(.9));pad=min(pad,hr-.056);hole=hr-.031;
  return vec4(pad,trc,via,silk);}
float hgt(vec2 p){float ho;vec4 d=lay(p,ho);
  float h=.42*(1.-smoothstep(-.004,.003,d.y));
  float v=clamp(-d.z/.019,0.,1.);h=max(h,.75*sqrt(v));
  float cl=1.-smoothstep(-.001,.001,d.x-.007);h=mix(h,-.35,cl);   /* mask clearance around each pad */
  float pd=1.-smoothstep(-.006,.0,d.x);h=mix(h,1.05,pd);
  h=mix(h,h+.25,1.-smoothstep(-.001,.001,d.w));
  h=mix(h,-3.,1.-smoothstep(-.004,.0,ho));
  return h;}
vec3 env(vec3 d){float az=atan(d.x,d.z),el=asin(clamp(d.y,-1.,1.));
  vec3 c=vec3(.010,.016,.040)+vec3(.04,.05,.09)*max(d.y,0.);
  float a0=AZ-PI;
  float b1=1.-smoothstep(.0,.14,max(abs(az-a0+.32)-.30,abs(el-.86)-.16));
  c+=vec3(1.,.96,.92)*(1.2+.5*(1.-smoothstep(.0,.3,abs(az-a0+.32))))*b1;
  c+=vec3(.50,.40,.36)*.22*(1.-smoothstep(.0,.9,abs(el-.75)));
  float b2=1.-smoothstep(.0,.2,max(abs(az-a0-1.25)-.18,abs(el-.35)-.35));
  c+=vec3(.75,.85,1.)*1.2*b2;
  float b3=1.-smoothstep(.0,.3,max(abs(az-AZ+1.6)-.35,abs(el-.4)-.4));
  c+=vec3(.55,.95,.65)*.35*b3;
  return c;}
vec3 L1;vec3 L2;
float ggx(vec3 n,vec3 v,vec3 l,float r){vec3 h=normalize(v+l);float a=r*r,nh=max(dot(n,h),0.);float dd=nh*nh*(a*a-1.)+1.;return a*a/(PI*dd*dd);}
vec3 aces(vec3 x){return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);}
bool box(vec3 ro,vec3 rd,vec3 b,out float t,out vec3 n){vec3 m=1./rd,k=abs(m)*b,nn=-m*ro;vec3 t1=nn-k,t2=nn+k;float tN=max(max(t1.x,t1.y),t1.z),tF=min(min(t2.x,t2.y),t2.z);
  if(tN>tF||tF<0.)return false;t=tN;n=-sign(rd)*step(t1.yzx,t1.xyz)*step(t1.zxy,t1.xyz);return true;}
vec4 shade(vec3 ro,vec3 rd){
  float t;vec3 n;if(!box(ro,rd,vec3(HB,TH,HB),t,n))return vec4(0.);
  vec3 p=ro+rd*t,v=-rd;vec3 col=vec3(0.);
  if(n.y>.5){
    vec2 u=p.xz;float ho;vec4 d=lay(u,ho);
    float e=.0016;float hx=(hgt(u+vec2(e,0))-hgt(u-vec2(e,0)))/(2.*e),hz=(hgt(u+vec2(0,e))-hgt(u-vec2(0,e)))/(2.*e);
    vec3 N=normalize(vec3(-hx*HS,1.,-hz*HS));
    float gn=vn(u*900.)*.6+vn(u*260.)*.4;
    float isPad=1.-smoothstep(-.0012,.0012,d.x);
    float isCl=(1.-smoothstep(-.001,.001,d.x-.007))*(1.-isPad);
    float isTr=1.-smoothstep(-.0012,.0012,d.y);
    float isVia=1.-smoothstep(-.0012,.0012,d.z);
    float isSk=1.-smoothstep(-.0012,.0012,d.w);
    float isHo=1.-smoothstep(-.0015,.0015,ho);
    float nv=max(dot(N,v),0.);
    /* solder mask: glossy deep green, lighter over copper */
    vec3 mA=mix(vec3(.012,.085,.036),vec3(.04,.17,.06),max(isTr,isVia*.8));
    mA*=.96+.08*vn(u*40.);
    vec3 mask=vec3(0.);
    float Fm=.045+(1.-.045)*pow(1.-nv,5.);
    mask+=mA*(.25+1.1*max(dot(N,L1),0.))+vec3(.9)*Fm*ggx(N,v,L1,.30)*.9;
    mask+=env(reflect(rd,N))*Fm*.55+mA*env(N)*.25;
    vec3 sub=vec3(.20,.17,.09)*(.5+.6*max(dot(N,L1),0.));
    vec3 sk=vec3(.80,.82,.79)*(.30+.85*max(dot(N,L1),0.))+env(reflect(rd,N))*.03;
    /* rose-gold immersion finish */
    vec3 F0=vec3(.98,.66,.48)*(.93+.12*gn);float rg=.16+.10*gn;
    vec3 Fg=F0+(1.-F0)*pow(1.-nv,5.);
    vec3 r=reflect(rd,N);
    vec3 gold=Fg*(env(r)*.62+ggx(N,v,L1,rg)*1.1*vec3(1.,.96,.9)+ggx(N,v,L2,rg)*.4*vec3(.8,.9,1.))+F0*.035;
    col=mask;col=mix(col,sub,isCl);col=mix(col,sk,isSk*(1.-isPad));col=mix(col,gold,isPad);
    /* the barrel of the plated hole: dark, with a warm wall at the near edge */
    col=mix(col,vec3(.012,.010,.012)+F0*.05*smoothstep(-.031,-.022,ho),isHo);
  }else if(n.y<-.5){col=vec3(.01,.03,.015);}
  else{
    /* board edge: FR-4 laminate between thin mask skins, two inner copper planes */
    float y=(p.y+TH)/(2.*TH);float s=p.x*n.z+p.z*n.x;
    vec3 fr=vec3(.36,.33,.18)*(.85+.25*vn(vec2(s*300.,y*30.)));
    fr=mix(fr,vec3(.05,.16,.06),step(.93,y)+step(y,.07));
    float cu=max(1.-smoothstep(.0,.025,abs(y-.36)),1.-smoothstep(.0,.025,abs(y-.64)));fr=mix(fr,vec3(.75,.45,.28),cu*.8);
    float dl=max(dot(n,L1),0.);col=fr*(.22+.9*dl)+env(reflect(rd,n))*.03;
  }
  return vec4(col,1.);}
void main(){
  L1=normalize(vec3(-.35,.85,.40));L2=normalize(vec3(.7,.35,-.2));
  vec3 ro=vec3(sin(AZ)*cos(EL),sin(EL),cos(AZ)*cos(EL))*DIST,ta=vec3(0.,-.02,0.);
  vec3 ww=normalize(ta-ro),uu=normalize(cross(ww,vec3(0,1,0))),vv=cross(uu,ww);
  vec4 acc=vec4(0.);float n=float(SSN);
  for(int j=0;j<SSN;j++)for(int i=0;i<SSN;i++){
    vec2 o=(vec2(float(i),float(j))+.5)/n-.5;
    vec2 uv=(gl_FragCoord.xy+o-.5*R)/R.y;
    vec3 rd=normalize(uv.x*uu+uv.y*vv+FOC*ww);
    vec4 s=shade(ro,rd);acc+=vec4(s.rgb*s.a,s.a);}
  acc/=n*n;vec3 c=acc.a>0.?acc.rgb/acc.a:vec3(0.);
  c=pow(aces(c*.95),vec3(1./2.2));
  gl_FragColor=vec4(c,acc.a);}

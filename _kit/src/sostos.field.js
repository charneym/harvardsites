/* ================= HERO FIELD (sostos): a crafted render of the object their CATOS-LU assay runs in, a strip of eight
   clear PCR tubes (CATOS-LU is a qRT-PCR gene-expression assay: Guo et al., EBioMedicine 2018), standing in a slow, calm
   three-quarter turn on the deep navy ground. The tubes are clear polypropylene (fresnel-weighted transparency, a frosted
   cap on each), and the reaction mix in each conical tip glows in Sostos blue at its own quiet level, as in a real-time
   PCR read. A WebGL fragment shader raymarches the strip; the ground is the page ink exactly (DO/DP: no box, no edge).
   No pointer interaction (CZ). Reduced motion: one still frame. No WebGL: a pre-rendered still (strip-still.webp).
   Same API as the template's field (start/stop/once/intro/setDim/snapDim/setScroll/running/focus). ================= */
function makeStrip(cv){
  var gl=null;
  try{gl=cv.getContext("webgl",{alpha:false,antialias:false,depth:false,premultipliedAlpha:false,preserveDrawingBuffer:true,powerPreference:"high-performance"})}catch(e){}
  if(!gl)return null;
  var VS="attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
  var FS=[
  "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif",
  "uniform vec2 R,C;uniform float S,T,IN,TL;",
  "const float SP=.25;",
  "float sdCC(vec3 p,float h,float r1,float r2){vec2 q=vec2(length(p.xz),p.y);vec2 k1=vec2(r2,h),k2=vec2(r2-r1,2.*h);vec2 ca=vec2(q.x-min(q.x,(q.y<0.)?r1:r2),abs(q.y)-h);vec2 cb=q-k1+k2*clamp(dot(k1-q,k2)/dot(k2,k2),0.,1.);float s=(cb.x<0.&&ca.y<0.)?-1.:1.;return s*sqrt(min(dot(ca,ca),dot(cb,cb)));}",
  "float sdCy(vec3 p,float r,float y0,float y1){vec2 d=vec2(length(p.xz)-r,max(y0-p.y,p.y-y1));return min(max(d.x,d.y),0.)+length(max(d,0.));}",
  "float sdBx(vec3 p,vec3 b){vec3 q=abs(p)-b;return length(max(q,0.))+min(max(q.x,max(q.y,q.z)),0.);}",
  "float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}",
  /* one tube in its own cell: conical tip, straight wall, rim lip; the cap; and the liquid in the tip */
  "vec2 tube(vec3 q){float cone=sdCC(q-vec3(0.,-.19,0.),.19,.02,.086)-.006;float wall=sdCy(q,.092,-.01,.36);float body=smin(cone,wall,.03);",
  " float lip=sdCy(q,.106,.352,.374)-.003;float cap=min(sdCy(q,.086,.392,.44)-.008,sdCy(q,.06,.43,.455)-.006);float d=min(body,lip);return d<cap?vec2(d,0.):vec2(cap,1.);}",
  "float liq(vec3 q){return max(sdCC(q-vec3(0.,-.182,0.),.182,.011,.077),q.y+.035);}",
  "float cid(float x){return clamp(floor(x/SP),-4.,3.);}",
  "vec2 mapS(vec3 p){float i0=cid(p.x);vec2 r=vec2(9.,0.);for(int k=-1;k<=1;k++){float i=clamp(i0+float(k),-4.,3.);vec2 t=tube(vec3(p.x-(i+.5)*SP,p.y,p.z));if(t.x<r.x)r=t;}",
  /* the web that joins the strip at the rim, and the hinge web between the caps */
  " float web=max(sdBx(p-vec3(0.,.363,0.),vec3(4.*SP,.006,.014)),abs(p.x)-3.5*SP);float hw=max(sdBx(p-vec3(0.,.383,-.1),vec3(4.*SP,.011,.005)),abs(p.x)-3.5*SP-.02);",
  " if(web<r.x)r=vec2(web,0.);if(hw<r.x)r=vec2(hw,1.);return r;}",
  "vec2 mapL(vec3 p){float i0=cid(p.x);vec2 r=vec2(9.,0.);for(int k=-1;k<=1;k++){float i=clamp(i0+float(k),-4.,3.);float d=liq(vec3(p.x-(i+.5)*SP,p.y,p.z));if(d<r.x)r=vec2(d,i);}return r;}",
  "vec3 nS(vec3 p){vec2 e=vec2(.0012,0.);return normalize(vec3(mapS(p+e.xyy).x-mapS(p-e.xyy).x,mapS(p+e.yxy).x-mapS(p-e.yxy).x,mapS(p+e.yyx).x-mapS(p-e.yyx).x));}",
  "vec3 nL(vec3 p){vec2 e=vec2(.0012,0.);return normalize(vec3(mapL(p+e.xyy).x-mapL(p-e.xyy).x,mapL(p+e.yxy).x-mapL(p-e.yxy).x,mapL(p+e.yyx).x-mapL(p-e.yyx).x));}",
  "float lvl(float i){float h=fract(sin((i+5.)*12.9898)*43758.5453);return .38+.62*h;}",
  "mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}",
  "mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}",
  "void main(){vec2 uv=(gl_FragCoord.xy-C)/S;vec3 bg=vec3(6.,14.,36.)/255.;",
  " vec3 col=bg;",
  " float yw=-.5+.13*sin(T*.11)+TL;mat3 M=rx(.30)*ry(yw);mat3 Mi=mat3(M[0].x,M[1].x,M[2].x,M[0].y,M[1].y,M[2].y,M[0].z,M[1].z,M[2].z);",
  " vec3 ro=Mi*vec3(uv,3.2)+vec3(0.,.05,0.),rd=normalize(Mi*vec3(uv*.08,-1.));",
  /* ray / bounding box (object space) */
  " vec3 bmin=vec3(-4.*SP-.03,-.40,-.14),bmax=vec3(4.*SP+.03,.47,.14);vec3 iv=1./rd;vec3 t0=(bmin-ro)*iv,t1=(bmax-ro)*iv;vec3 tn=min(t0,t1),tf=max(t0,t1);float ta=max(max(tn.x,tn.y),tn.z),tb=min(min(tf.x,tf.y),tf.z);",
  " if(tb>max(ta,0.)){",
  "  float t=max(ta,0.);vec2 hs=vec2(-1.);for(int i=0;i<72;i++){if(t>tb)break;vec2 m=mapS(ro+rd*t);if(m.x<.0012){hs=vec2(t,m.y);break;}t+=max(m.x*.9,.0015);}",
  "  float tl=max(ta,0.),dm=9.,di=0.;vec2 hl2=vec2(-1.);for(int i=0;i<64;i++){if(tl>tb)break;vec2 m=mapL(ro+rd*tl);if(m.x<dm){dm=m.x;di=m.y;}if(m.x<.0012){hl2=vec2(tl,m.y);break;}tl+=max(m.x*.9,.0015);}",
  "  vec3 L1=normalize(vec3(-.5,.75,.55)),L2=normalize(vec3(.85,.1,.4)),vw=vec3(0.,0.,1.);",
  /* what is behind the shell: the glowing reaction mix, or the ground with a soft blue bloom near each tip */
  "  float lv=lvl(di)*(.88+.12*sin(T*.5+di*1.7));vec3 gc=mix(vec3(.13,.36,.86),vec3(.52,.84,1.),lv*.7);",
  "  vec3 behind=col+gc*exp(-max(dm,0.)*26.)*.30*lv;",
  "  if(hl2.x>0.){vec3 p=ro+rd*hl2.x;vec3 n=M*nL(p);float fr=pow(1.-max(dot(n,vw),0.),2.);float lv2=lvl(hl2.y)*(.88+.12*sin(T*.5+hl2.y*1.7));vec3 g=mix(vec3(.13,.36,.86),vec3(.52,.84,1.),lv2*.7);",
  "   behind=g*(.55+.75*lv2)*(.7+.5*fr)+vec3(.9,.97,1.)*pow(max(dot(n,normalize(L1+vw)),0.),40.)*.5;}",
  "  vec3 c=behind;",
  "  if(hs.x>0.&&(hl2.x<0.||hs.x<hl2.x+.4)){vec3 p=ro+rd*hs.x;vec3 n=M*nS(p);float fr=pow(1.-max(dot(n,vw),0.),2.5);",
  "   float df=max(dot(n,L1),0.),df2=max(dot(n,L2),0.);float s1=pow(max(dot(n,normalize(L1+vw)),0.),70.),s2=pow(max(dot(n,normalize(L2+vw)),0.),36.);vec3 L3=normalize(vec3(-.62,.04,.78));float s3=pow(max(dot(n,normalize(L3+vw)),0.),120.);",
  "   vec3 rr=reflect(-vw,n);vec3 env=mix(vec3(.03,.05,.11),vec3(.70,.80,.96),smoothstep(-.2,.9,rr.y));",
  "   if(hs.y<.5){float a=.05+.7*fr;vec3 tint=vec3(.80,.88,1.)*(.18+.45*df+.2*df2)+env*.55;c=mix(behind,tint,a)+behind*.12+vec3(1.)*s1*1.1+vec3(.65,.8,1.)*s2*.5+vec3(.95,.98,1.)*s3*.9;}",
  "   else{float a=.16+.6*fr;vec3 fro=vec3(.84,.90,1.)*(.16+.5*df+.2*df2)+env*.5;c=mix(behind,fro,a)+vec3(1.)*s1*1.+vec3(.95,.98,1.)*s3*.7;}}",
  "  col=mix(col,c,IN);",
  " }",
  " col=bg+(1.-exp(-max(col-bg,0.)*1.3))*(1.-bg);gl_FragColor=vec4(col,1.);}"].join("\n");
  function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(o));return o}
  var pr=gl.createProgram();try{gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS));gl.linkProgram(pr)}catch(e){if(window.console)console.warn(e);return null}
  if(!gl.getProgramParameter(pr,gl.LINK_STATUS))return null;gl.useProgram(pr);
  var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  var al=gl.getAttribLocation(pr,"a");gl.enableVertexAttribArray(al);gl.vertexAttribPointer(al,2,gl.FLOAT,false,0,0);
  var U={};["R","C","S","T","IN","TL"].forEach(function(k){U[k]=gl.getUniformLocation(pr,k)});
  return {draw:function(t,s){gl.viewport(0,0,cv.width,cv.height);gl.uniform2f(U.R,cv.width,cv.height);gl.uniform2f(U.C,s.cx,s.cy);gl.uniform1f(U.S,s.sc);
      gl.uniform1f(U.T,t);gl.uniform1f(U.IN,s.IN);gl.uniform1f(U.TL,s.tl);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}};
}
var field=(function(){
  var cv=$("#field"),w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false,lastF=0,q=1,slow=0,lastRaf=0,ema=16,slowN=0;
  var IN={v:1},dim=1,dimT=1,SP={v:0},mob=false;
  var G=makeStrip(cv);
  if(!G){cv.style.display="none";var bg=document.querySelector(".fieldbg");if(bg)bg.classList.add("still")}
  function now(){return RM?9:(performance.now()-t0)/1000}
  /* composition: the molecule centred in the open area right of the text (~69% of the width), below the nav; on phones,
     in the band above the headline */
  function geo(){var cx,cy,sc,tl;if(mob){cx=w*.5;cy=h*(1-.225);sc=Math.min(h*.2,w*.44);tl=0}
    else{cx=w*.705;cy=h*.5;sc=Math.min(h*.6,w*.255);tl=0}
    var sy=SP.v*h*.18;return {cx:cx*q,cy:(cy+sy)*q,sc:sc*q,tl:tl}}
  function size(){w=document.documentElement.clientWidth||innerWidth;h=innerHeight;mob=w<861;
    var dpr=Math.min(window.devicePixelRatio||1,1.5);q=Math.min(dpr,mob?1.25:1.05);cv.width=Math.max(2,Math.round(w*q));cv.height=Math.max(2,Math.round(h*q));if(!running)frame(true)}
  function frame(once){
    var tn=performance.now();if(!once&&running){var dt=tn-lastRaf;lastRaf=tn;if(dt>0&&dt<1000)ema=ema*.9+dt*.1;
      /* a slow machine (software GL, throttled CPU): render smaller and less often rather than hold up the page */
      if(!slow&&ema>55&&++slowN>8)slow=1;
      if(tn-lastF<(slow?110:46)||document.getElementById("pre")&&shown){raf=requestAnimationFrame(function(){frame(false)});return}}lastF=tn;
    dim+=(dimT-dim)*.08;cv.style.opacity=shown?String(.5+.5*dim):"";
    if(G){var g=geo();g.IN=IN.v;var a=performance.now();G.draw(now(),g);
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;if(RM){frame(true);running=false;return}raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=p},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},
    running:function(){return running},focus:function(){var g=geo();return [g.cx/q,h-g.cy/q]}};
})();

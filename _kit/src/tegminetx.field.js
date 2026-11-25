/* ================= HERO FIELD (tegminetx): a crafted render of what TegMine makes, one antibody-drug conjugate: an IgG
   antibody (two Fab arms of heavy and light chain domains, the hinge and the Fc stem) in translucent glass in TegMine blue
   (#69A1D1, their logo colour), with four small drug payloads on short linkers along the stem glowing softly. It turns slowly
   and calmly on the deep navy ground; the ground is the page ink exactly (DO/DP: no box, no edge). A WebGL fragment shader
   raymarches it. No pointer interaction. Reduced motion: one still frame. No WebGL: a pre-rendered still (adc-still.webp).
   Same API as the template's field (start/stop/once/intro/setDim/snapDim/setScroll/running/focus). ================= */
function makeAb(cv){
  var gl=null;
  try{gl=cv.getContext("webgl",{alpha:false,antialias:false,depth:false,premultipliedAlpha:false,preserveDrawingBuffer:true,powerPreference:"high-performance"})}catch(e){}
  if(!gl)return null;
  var VS="attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
  var FS=[
  "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif",
  "uniform vec2 R,C;uniform float S,T,IN,TL;",
  "float sdE(vec3 p,vec3 r){float k0=length(p/r);float k1=length(p/(r*r));return k0*(k0-1.)/max(k1,1e-4);}",
  "float sdCap(vec3 p,vec3 a,vec3 b,float r){vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h)-r;}",
  "float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}",
  "const vec2 D=vec2(.7894,.6139);const vec2 N=vec2(-.6139,.7894);const vec3 H=vec3(0.,.05,0.);",
  "vec3 toL(vec3 p,vec3 c){vec3 q=p-c;return vec3(dot(q.xy,N),dot(q.xy,D),q.z);}",
  /* the protein, mirrored about the stem: Fab = constant + variable domains of the heavy and the light chain; Fc = CH2, CH3 */
  "float prot(vec3 q){vec3 rf=vec3(.084,.142,.096);",
  " float s=sdE(toL(q,H+vec3(D*.215+N*.071,.032)),rf);",
  " s=smin(s,sdE(toL(q,H+vec3(D*.49+N*.071,.032)),rf),.05);",
  " s=smin(s,sdE(toL(q,H+vec3(D*.215-N*.071,-.032)),rf*vec3(.95,.97,.95)),.05);",
  " s=smin(s,sdE(toL(q,H+vec3(D*.49-N*.071,-.032)),rf*vec3(.95,.97,.95)),.05);",
  " s=smin(s,sdE(q-vec3(.076,-.21,.012),vec3(.084,.15,.1)),.05);",
  " s=smin(s,sdE(q-vec3(.078,-.5,.0),vec3(.09,.15,.104)),.05);",
  " s=smin(s,sdCap(q,vec3(.05,-.07,0.),H+vec3(D*.09,0.),.038),.05);",
  " s=smin(s,sdCap(q,vec3(.15,-.19,.03),vec3(.205,-.19,.055),.009),.02);",
  " s=smin(s,sdCap(q,vec3(.16,-.47,-.03),vec3(.218,-.47,-.06),.009),.02);",
  " return s+.0055*sin(q.x*47.)*sin(q.y*41.+1.3)*sin(q.z*45.);}",
  "float bead(vec3 q){return min(length(q-vec3(.226,-.19,.064))-.033,length(q-vec3(.24,-.47,-.07))-.033);}",
  "vec2 map(vec3 p){vec3 q=vec3(abs(p.x),p.y,p.z);float a=prot(q),b=bead(q);return a<b?vec2(a,0.):vec2(b,1.);}",
  "vec3 nrm(vec3 p){vec2 e=vec2(.0015,0.);return normalize(vec3(map(p+e.xyy).x-map(p-e.xyy).x,map(p+e.yxy).x-map(p-e.yxy).x,map(p+e.yyx).x-map(p-e.yyx).x));}",
  "mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}",
  "mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}",
  "void main(){vec2 uv=(gl_FragCoord.xy-C)/S;vec3 bg=vec3(12.,26.,40.)/255.;vec3 col=bg;",
  " float yw=.42*sin(T*.085)+TL;mat3 M=rx(.16+.06*sin(T*.06))*ry(yw);mat3 Mi=mat3(M[0].x,M[1].x,M[2].x,M[0].y,M[1].y,M[2].y,M[0].z,M[1].z,M[2].z);",
  " vec3 ro=Mi*vec3(uv,3.2)+vec3(0.,-.06,0.),rd=normalize(Mi*vec3(uv*.08,-1.));",
  " vec3 bmin=vec3(-.76,-.7,-.2),bmax=vec3(.76,.62,.2);vec3 iv=1./rd;vec3 t0=(bmin-ro)*iv,t1=(bmax-ro)*iv;vec3 tn=min(t0,t1),tf=max(t0,t1);float ta=max(max(tn.x,tn.y),tn.z),tb=min(min(tf.x,tf.y),tf.z);",
  " if(tb>max(ta,0.)){",
  "  float t=max(ta,0.);vec2 hs=vec2(-1.);float bm=9.;for(int i=0;i<90;i++){if(t>tb)break;vec3 pp=ro+rd*t;vec2 m=map(pp);bm=min(bm,bead(vec3(abs(pp.x),pp.y,pp.z)));if(m.x<.0012){hs=vec2(t,m.y);break;}t+=max(m.x*.9,.0015);}",
  "  vec3 L1=normalize(vec3(-.5,.75,.55)),L2=normalize(vec3(.85,.1,.4)),L3=normalize(vec3(-.62,.04,.78)),vw=vec3(0.,0.,1.);",
  "  float pu=.8+.2*sin(T*.7);vec3 gc=vec3(.80,.93,1.);",
  "  vec3 c=col+gc*exp(-max(bm,0.)*30.)*.22*pu;",
  "  if(hs.x>0.){vec3 p=ro+rd*hs.x;vec3 n=M*nrm(p);float fr=pow(1.-max(dot(n,vw),0.),2.2);",
  "   float df=max(dot(n,L1),0.),df2=max(dot(n,L2),0.);float s1=pow(max(dot(n,normalize(L1+vw)),0.),60.),s2=pow(max(dot(n,normalize(L2+vw)),0.),30.),s3=pow(max(dot(n,normalize(L3+vw)),0.),110.);",
  "   vec3 rr=reflect(-vw,n);vec3 env=mix(vec3(.03,.06,.10),vec3(.66,.80,.93),smoothstep(-.2,.9,rr.y));",
  "   if(hs.y<.5){vec3 base=vec3(.41,.63,.82);vec3 body=base*(.22+.72*df+.28*df2)+env*.42;float a=.58+.42*fr;",
  "    c=mix(c+base*.14,body,a)+vec3(.74,.87,1.)*fr*.45+vec3(1.)*s1*1.3+vec3(.7,.84,1.)*s2*.5+vec3(.95,.98,1.)*s3*.9;}",
  "   else{c=gc*(.78+.3*df)*pu+vec3(1.)*s1*.8+gc*fr*.4;}}",
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
  var G=makeAb(cv);
  if(!G){cv.style.display="none";var bg=document.querySelector(".fieldbg");if(bg)bg.classList.add("still")}
  function now(){return RM?9:(performance.now()-t0)/1000}
  /* composition: the conjugate centred in the open area right of the text (~69% of the width), below the nav with headroom;
     on phones, in the band above the headline */
  function geo(){var cx,cy,sc,tl=0;if(mob){cx=w*.5;cy=h*(1-.215);sc=Math.min(h*.19,w*.42)}
    else{cx=w*.69;cy=h*.47;sc=Math.min(h*.56,w*.25)}
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
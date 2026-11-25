/* ================= HERO FIELD (nerxbiosciences): a crafted render of the subject of their science, one DNA double helix,
   lacquer-glossy, shaded blue at the top to red at the base exactly as the helix in the NĒRx logo, turning slowly on its
   own axis on the dark ground. A WebGL fragment shader raymarches the two sugar-phosphate backbones (tubes on a true helix,
   with minor and major grooves) and the base-pair rungs (paler, as in the logo); the strands taper to fine ends so the
   whole molecule sits inside the open area right of the headline (DO/DP: no box, no edge, the ground is the page ink).
   No pointer interaction (CZ). Reduced motion: one still frame. No WebGL: a pre-rendered still (helix-still.webp).
   Same API as the template's field (start/stop/once/intro/setDim/snapDim/setScroll/running/focus). ================= */
function makeHelix(cv){
  var gl=null;
  try{gl=cv.getContext("webgl",{alpha:false,antialias:false,depth:false,premultipliedAlpha:false,preserveDrawingBuffer:true,powerPreference:"high-performance"})}catch(e){}
  if(!gl)return null;
  var VS="attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
  var FS=[
  "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif",
  "uniform vec2 R,C;uniform float S,T,IN,TL;",
  "const float RAD=.25,K=8.4,L=1.,RT=.066,RR=.026,PH2=2.25,DY=.0748;",
  /* object space: helix axis = y. strand j has phase PH (0 or PH2) */
  "vec3 hp(float t,float ph){float a=K*t+ph;return vec3(RAD*cos(a),t,RAD*sin(a));}",
  "float taper(float t){return smoothstep(L+.02,L-.30,abs(t));}",
  /* nearest point on a strand by Newton steps from t=y */
  "vec2 strand(vec3 q,float ph){float t=q.y;for(int i=0;i<5;i++){float a=K*t+ph;vec3 h=vec3(RAD*cos(a),t,RAD*sin(a));vec3 d1=vec3(-RAD*K*sin(a),1.,RAD*K*cos(a));vec3 d2=vec3(-RAD*K*K*cos(a),0.,-RAD*K*K*sin(a));vec3 e=h-q;float f=dot(e,d1),fp=dot(d1,d1)+dot(e,d2);t-=f/fp;}",
  " t=clamp(t,-L,L);return vec2(length(q-hp(t,ph))-RT*(.25+.75*taper(t)),t);}",
  "float sdSeg(vec3 p,vec3 a,vec3 b,float r){vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);return length(pa-ba*h)-r;}",
  /* fast march field: the strand's horizontal slice distance, scaled by the helix's Lipschitz bound (cheap: one sin/cos per strand) */
  "const float CA=.43;",
  "float sf(vec3 q,float ph){float rho=length(q.xz);float dp=mod(atan(q.z,q.x)-K*q.y-ph+3.14159265,6.2831853)-3.14159265;return length(vec2(rho-RAD,RAD*dp*CA))-RT*(.25+.75*taper(q.y));}",
  "float rung(vec3 q,float sp){float i=floor(q.y/DY+.5);float y=i*DY;if(abs(y)>=L-.10)return 9.;vec3 a=hp(y,sp),b=hp(y,sp+PH2);vec3 m=mix(a,b,.5);float tr=taper(y);return min(sdSeg(q,a,m-(b-a)*.012,RR*tr),sdSeg(q,m+(b-a)*.012,b,RR*tr));}",
  "vec2 mapF(vec3 q,float sp){float d1=min(sf(q,sp),sf(q,sp+PH2)),d2=rung(q,sp);return d1<d2?vec2(d1,0.):vec2(d2,1.);}",
  "mat3 rot(vec3 ax,float a){ax=normalize(ax);float s=sin(a),c=cos(a),o=1.-c;return mat3(c+ax.x*ax.x*o,ax.y*ax.x*o+ax.z*s,ax.z*ax.x*o-ax.y*s,ax.x*ax.y*o-ax.z*s,c+ax.y*ax.y*o,ax.z*ax.y*o+ax.x*s,ax.x*ax.z*o+ax.y*s,ax.y*ax.z*o-ax.x*s,c+ax.z*ax.z*o);}",
  "vec3 tone(float t){vec3 blu=vec3(.22,.46,.74),vio=vec3(.50,.30,.60),red=vec3(.80,.07,.12);float u=clamp(t*.5+.5,0.,1.);return u>.5?mix(vio,blu,smoothstep(.5,.95,u)):mix(red,vio,smoothstep(.05,.5,u));}",
  "void main(){vec2 uv=(gl_FragCoord.xy-C)/S;vec3 bg=vec3(.027,.035,.059);",
  /* a faint cool halo behind the molecule, long and eased (no edge) */
  " float hl=exp(-dot(uv*vec2(.85,.62),uv*vec2(.85,.62))*1.2);vec3 col=bg+vec3(.035,.05,.085)*hl*IN;",
  " mat3 M=rot(vec3(0.,0.,1.),TL)*rot(vec3(1.,0.,0.),.22);mat3 Mi=mat3(M[0].x,M[1].x,M[2].x,M[0].y,M[1].y,M[2].y,M[0].z,M[1].z,M[2].z);",
  " vec3 ro=Mi*vec3(uv,3.2),rd=normalize(Mi*vec3(uv*.06,-1.));",
  /* bounding cylinder r=RAD+RT, |y|<L */
  " float rb=RAD+RT+.01;float A=rd.x*rd.x+rd.z*rd.z,B=2.*(ro.x*rd.x+ro.z*rd.z),Cc=ro.x*ro.x+ro.z*ro.z-rb*rb,D=B*B-4.*A*Cc;",
  " if(D>0.&&A>1e-5){float sq=sqrt(D),t0=(-B-sq)/(2.*A),t1=(-B+sq)/(2.*A);float sp=T*.16;float t=max(t0,0.);vec3 hit=vec3(-1.);",
  "  for(int i=0;i<56;i++){if(t>t1)break;vec3 p=ro+rd*t;if(abs(p.y)>L+.02){t+=.03;continue;}vec2 m=mapF(p,sp);if(m.x<.0016){hit=vec3(t,m.y,0.);break;}t+=max(m.x*.85,.0008);}",
  "  if(hit.x>0.){vec3 p=ro+rd*hit.x;vec3 n;float tz;",
  /* exact normal: from the nearest point on the backbone's centre line (Newton), or on the rung's axis */
  "   vec2 e1=strand(p,sp),e2=strand(p,sp+PH2);float i=floor(p.y/DY+.5);float yr=i*DY;",
  "   if(hit.y>.5){vec3 a=hp(yr,sp),b=hp(yr,sp+PH2);vec3 pa=p-a,ba=b-a;float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);n=normalize(pa-ba*h);tz=yr;}",
  "   else{float ph=e1.x<e2.x?sp:sp+PH2;float tt=e1.x<e2.x?e1.y:e2.y;n=normalize(p-hp(tt,ph));tz=tt;}",
  "   hit.z=tz;",
  "   vec3 nw=M*n,vw=vec3(0.,0.,1.);vec3 pw=M*p;",
  "   vec3 base=tone(hit.z);if(hit.y>.5)base=mix(base,vec3(.96,.95,.98),.45);",
  "   vec3 L1=normalize(vec3(-.55,.7,.6)),L2=normalize(vec3(.9,-.2,.35));",
  "   float df=max(dot(nw,L1),0.),df2=max(dot(nw,L2),0.);float sp1=pow(max(dot(nw,normalize(L1+vw)),0.),48.),sp2=pow(max(dot(nw,normalize(L2+vw)),0.),30.);",
  "   float fr=pow(1.-max(dot(nw,vw),0.),3.);",
  /* depth: the far side of the helix falls back into shade */
  "   float dep=smoothstep(-.32,.32,pw.z);",
  "   vec3 rr=reflect(-vw,nw);vec3 env=mix(vec3(.02,.025,.04),vec3(.75,.82,.95),smoothstep(-.1,.95,rr.y))*(.08+.5*fr);",
  "   vec3 c=base*(.16+.95*df+.30*df2)*(.45+.55*dep)+vec3(1.,.97,.95)*sp1*1.1*(.5+.5*dep)+vec3(.55,.70,1.)*sp2*.45+env*(.5+.5*dep)+vec3(.45,.6,.95)*fr*.2*dep;",
  "   float ends=smoothstep(L+.02,L-.5,abs(hit.z));c*=.12+.88*ends;",
  "   col=mix(col,c,IN);}",
  " }",
  " col=1.-exp(-col*1.25);gl_FragColor=vec4(pow(col,vec3(.97)),1.);}"].join("\n");
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
  var cv=$("#field"),w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false,lastF=0,q=1,slow=0;
  var IN={v:1},dim=1,dimT=1,SP={v:0},mob=false;
  var G=makeHelix(cv);
  if(!G){cv.style.display="none";var bg=document.querySelector(".fieldbg");if(bg)bg.classList.add("still")}
  function now(){return RM?9:(performance.now()-t0)/1000}
  /* composition: the molecule centred in the open area right of the text (~69% of the width), below the nav; on phones,
     in the band above the headline */
  function geo(){var cx,cy,sc,tl;if(mob){cx=w*.5;cy=h*(1-.218);sc=Math.min(h*.125,w*.33);tl=-.42}
    else{cx=w*.69;cy=h*.525;sc=Math.min(h*.335,w*.25);tl=-.40}
    var sy=SP.v*h*.18;return {cx:cx*q,cy:(cy+sy)*q,sc:sc*q,tl:tl}}
  function size(){w=document.documentElement.clientWidth||innerWidth;h=innerHeight;mob=w<861;
    var dpr=Math.min(window.devicePixelRatio||1,1.5);q=Math.min(dpr,mob?1.25:1.05)*(slow?.7:1);cv.width=Math.max(2,Math.round(w*q));cv.height=Math.max(2,Math.round(h*q));if(!running)frame(true)}
  function frame(once){
    var tn=performance.now();if(!once&&running&&tn-lastF<30){raf=requestAnimationFrame(function(){frame(false)});return}lastF=tn;
    dim+=(dimT-dim)*.08;cv.style.opacity=shown?String(.5+.5*dim):"";
    if(G){var g=geo();g.IN=IN.v;var a=performance.now();G.draw(now(),g);
      /* a slow GPU: render smaller rather than stutter */
      if(!once&&!slow&&performance.now()-a>45){slow=1;size()}
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

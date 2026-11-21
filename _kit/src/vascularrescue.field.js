/* ================= HERO FIELD: a crafted render of the mechanism AVAD automates (HOME_BRIEF update, option c): the Seldinger
   moment. A steel access needle has entered a vein; the guidewire threads out of its tip along the lumen, seen through the
   translucent vessel wall. The artery that AVAD's Doppler tells apart from the vein runs beside it and pulses slowly.
   Raymarched in one cheap fragment pass (a few signed-distance tubes, no noise loops), bounded so pixels outside the subject
   are the page ink exactly: no box, no seam (DP/DJ). Vessel colours come from the brand: the arterial pink of the logo
   (#FA5B89), a deep wine vein, and the logo teal (#4A978E) as the rim light. Desktop: centred in the open area right of the
   text (~70%); phones: in the band above the text, fading out before it (CW). It moves on its own (wire, pulse), so no pointer
   response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),w=0,h=0,dpr=1,running=false,raf=0,t0=performance.now(),shown=false,G=null;
  var IN={v:1},dim=1,dimT=1,SP={v:0},WIRE={v:1};
  var BG=[16/255,21/255,22/255];
  var gl=cv.getContext("webgl",{antialias:false,alpha:false,preserveDrawingBuffer:true,premultipliedAlpha:false});
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var VS="attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
  var FS=[
"precision highp float;",
"uniform vec3 bg;uniform vec2 C;uniform float S;uniform float DPR;uniform float T;uniform float A;uniform float WP;uniform vec4 FD;uniform float H;",
"const vec3 TEAL=vec3(.29,.59,.56);",
"float cvn(float x){return -.03+.07*sin(x*1.35+.35);}",
"float car(float x){return -.43+.05*sin(x*1.15+1.9);}",
"float pulse(){float ph=fract(T/1.05);return exp(-pow((ph-.12)/.07,2.))+.35*exp(-pow((ph-.34)/.06,2.));}",
"mat3 rot(){float y=.30+.05*sin(T*.11),x=.24;float cy=cos(y),sy=sin(y),cx=cos(x),sx=sin(x);",
"  return mat3(cy,0.,-sy, 0.,1.,0., sy,0.,cy)*mat3(1.,0.,0., 0.,cx,sx, 0.,-sx,cx);}",
"float vein(vec3 p){float d=length(vec2(p.y-cvn(p.x),p.z))-.175;return max(d,abs(p.x)-2.8);}",
"float art(vec3 p){float r=.104*(1.+.06*pulse());float d=length(vec2(p.y-car(p.x),p.z-.26))-r;return max(d,abs(p.x)-2.8);}",
"vec3 TIP(){return vec3(.02,cvn(.02)-.015,0.);}",
"vec3 DIR(){return normalize(vec3(.80,.56,-.22));}",
"float needle(vec3 p){vec3 tp=TIP(),D=DIR();float L=1.9;float hh=clamp(dot(p-tp,D),0.,L);float r=.026*min(1.,(hh+.004)/.11);",
"  return (length(p-tp-D*hh)-r)*.8;}",
"float wire(vec3 p){float xe=.02-1.05*WP;float px=clamp(p.x,xe,.02);",
"  float yy=cvn(px)-.012+.012*smoothstep(.02,-.25,px);return (length(vec3(p.x-px,p.y-yy,p.z))-.0115)*.85;}",
"float solids(vec3 p,out float m){float a=needle(p),b=wire(p);m=a<b?1.:2.;return min(a,b);}",
"float vess(vec3 p,out float m){float a=vein(p),b=art(p);m=a<b?3.:4.;return min(a,b);}",
"vec3 nS(vec3 p){float m;vec2 e=vec2(.0015,-.0015);return normalize(e.xyy*solids(p+e.xyy,m)+e.yyx*solids(p+e.yyx,m)+e.yxy*solids(p+e.yxy,m)+e.xxx*solids(p+e.xxx,m));}",
"vec3 nV(vec3 p){float m;vec2 e=vec2(.002,-.002);return normalize(e.xyy*vess(p+e.xyy,m)+e.yyx*vess(p+e.yyx,m)+e.yxy*vess(p+e.yxy,m)+e.xxx*vess(p+e.xxx,m));}",
"vec3 env(vec3 r){float u=r.y*.5+.5;vec3 c=mix(bg*1.2,vec3(.70,.74,.76),pow(smoothstep(.45,1.,u),2.2));c+=TEAL*.5*pow(max(-r.x,0.),3.);c+=vec3(.98,.55,.68)*.18*pow(max(r.x*.7-r.y*.3,0.),4.);return c;}",
"vec3 L1=normalize(vec3(-.55,.78,-.45));",
"vec3 metal(vec3 p,vec3 n,vec3 rd,float m){vec3 r=reflect(rd,n);float fr=pow(1.-max(dot(n,-rd),0.),3.);",
"  vec3 c=env(r)*(m<1.5?vec3(.78,.81,.84):vec3(.80,.90,.88));float d=max(dot(n,L1),0.);c=c*(.55+.55*d);",
"  c+=vec3(1.)*pow(max(dot(r,L1),0.),60.)*.9;c+=TEAL*fr*.5;return c;}",
"vec3 wall(vec3 p,vec3 n,vec3 rd,float m){vec3 base=m<3.5?vec3(.52,.17,.34):vec3(.90,.27,.43);",
"  float flow=m<3.5?.5+.5*sin(p.x*7.-T*.9):.5+.5*sin(p.x*9.-T*2.6);",
"  float d=max(dot(n,L1),0.),wr=max(dot(n,L1)*.5+.5,0.);vec3 hv=normalize(L1-rd);float sp=pow(max(dot(n,hv),0.),48.);",
"  float fr=pow(1.-max(dot(n,-rd),0.),2.4);",
"  float fl=max(dot(n,normalize(vec3(.6,-.5,-.4))),0.);vec3 c=base*(.14+.66*d+.20*wr)+base*.10*flow+vec3(1.,.92,.95)*sp*.55+TEAL*fr*.6+TEAL*fl*.16;",
"  if(m>3.5)c+=vec3(.95,.35,.5)*.22*pulse()*(1.-fr);return c;}",
"void main(){vec2 fc=gl_FragCoord.xy/DPR;vec2 uv=(fc-C)/S;",
"  vec2 q=uv/vec2(1.5,1.08);float rad=length(q);",
"  float fade=(1.-smoothstep(.56,1.,rad))*smoothstep(-1.28,-.62,uv.x)*(1.-smoothstep(.95,1.4,uv.x));",
"  if(fade<=0.||A<=0.){gl_FragColor=vec4(bg,1.);return;}",
"  mat3 R=rot();vec3 ro=R*vec3(0.,0.,-6.),rd=R*normalize(vec3(uv,6.));",
"  float t=4.4,ts=-1.,tv=-1.,m1=0.,m2=0.,m;",
"  for(int i=0;i<96;i++){vec3 p=ro+rd*t;float a=solids(p,m);if(a<.0007){ts=t;m1=m;break;}t+=a;if(t>8.)break;}",
"  t=4.4;for(int i=0;i<72;i++){vec3 p=ro+rd*t;float a=vess(p,m);if(a<.001){tv=t;m2=m;break;}t+=a*.9;if(t>8.)break;}",
"  vec3 col=bg;float hit=0.;",
"  if(ts>0.){vec3 p=ro+rd*ts;col=metal(p,nS(p),rd,m1);hit=1.;}",
"  if(tv>0.&&(ts<0.||tv<ts)){vec3 p=ro+rd*tv;vec3 n=nV(p);vec3 wc=wall(p,n,rd,m2);float fr=pow(1.-max(dot(n,-rd),0.),2.);",
"    if(ts>0.){float th=clamp((ts-tv)/.36,0.,1.);float al=.30+.45*fr+.12*th;col=mix(col*vec3(.95,.62,.72),wc,al);}else col=wc;hit=1.;}",
"  if(hit<.5){gl_FragColor=vec4(bg,1.);return;}",
"  float fy=fc.y;float mf=FD.x>.5?smoothstep(FD.y,FD.z,fy):1.;",
"  float k=A*fade*mf;",
"  float dn=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-.5;col+=dn/255.*k;",
"  gl_FragColor=vec4(mix(bg,col,k),1.);}"].join("\n");
  var prog=null,U={};
  function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)){console.warn(gl.getShaderInfoLog(o));return null}return o}
  function init(){
    if(!gl)return false;
    var v=sh(gl.VERTEX_SHADER,VS),f=sh(gl.FRAGMENT_SHADER,FS);if(!v||!f)return false;
    prog=gl.createProgram();gl.attachShader(prog,v);gl.attachShader(prog,f);gl.linkProgram(prog);if(!gl.getProgramParameter(prog,gl.LINK_STATUS))return false;
    var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
    gl.useProgram(prog);var l=gl.getAttribLocation(prog,"a");gl.enableVertexAttribArray(l);gl.vertexAttribPointer(l,2,gl.FLOAT,false,0,0);
    ["bg","C","S","DPR","T","A","WP","FD","H"].forEach(function(u){U[u]=gl.getUniformLocation(prog,u)});
    return true}
  var ok=false;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){/* phones: the band between the nav and the eyebrow, measured */
      var eb=document.querySelector(".hero .eyebrow"),bot=eb?eb.getBoundingClientRect().top+window.scrollY-14:h*.4;
      bot=Math.max(200,Math.min(bot,h*.52));var top=72;
      var S=Math.min(w*.40,(bot-top)*.56);
      return {mob:true,U:bot,S:S,kx:w*.5,ky:top+(bot-top)*.5}}
    var S=Math.min(cw*.165,h*.33);
    return {mob:false,U:h,S:S,kx:side+cw*.735,ky:h*.53}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(gl)gl.viewport(0,0,cv.width,cv.height);if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!gl)return;
    var t=RM?2.:(now-t0)/1000;dim+=(dimT-dim)*.08;var e=sm(IN.v);
    cv.style.opacity=shown?String(.55+.45*dim):"";
    if(!ok||!G){gl.clearColor(BG[0],BG[1],BG[2],1);gl.clear(gl.COLOR_BUFFER_BIT);return}
    var sy=G.mob?(window.scrollY||0):SP.v*h*.06;
    gl.uniform3f(U.bg,BG[0],BG[1],BG[2]);gl.uniform2f(U.C,G.kx,h-(G.ky-sy));gl.uniform1f(U.S,G.S);gl.uniform1f(U.DPR,dpr);gl.uniform1f(U.T,t);
    gl.uniform1f(U.A,e);gl.uniform1f(U.WP,sm(WIRE.v));gl.uniform1f(U.H,h);
    if(G.mob)gl.uniform4f(U.FD,1,h-G.U+sy-6,h-G.U+sy+40,0);else gl.uniform4f(U.FD,0,0,1,0);
    gl.disable(gl.SCISSOR_TEST);gl.clearColor(BG[0],BG[1],BG[2],1);gl.clear(gl.COLOR_BUFFER_BIT);
    var bx=Math.floor((G.kx-1.62*G.S)*dpr),by=Math.floor((h-(G.ky-sy)-1.2*G.S)*dpr);gl.enable(gl.SCISSOR_TEST);gl.scissor(Math.max(0,bx),Math.max(0,by),Math.ceil(3.24*G.S*dpr),Math.ceil(2.4*G.S*dpr));
    gl.drawArrays(gl.TRIANGLES,0,3);
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  ok=init();
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;WIRE.v=1;return}IN.v=0;WIRE.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"});gsap.to(WIRE,{v:1,duration:d*2.2,delay:d*.5,ease:"power1.inOut"})},
    setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

/* ================= HERO FIELD v5 (client round 5): a full-bleed, living material, not an object. A WebGL fragment shader paints a
   slow, glossy, viscous gel surface in raking light, like a macro of clear gel or liquid glass: a domain-warped height field,
   lit from the right at a low angle so soft specular ridges and caustic highlights drift across it, on a near-black ground,
   the light picked up in LiMax's teal -> blue -> violet. The pointer presses the gel: a gentle, damped ripple that relaxes back.
   The left of the frame (behind the type) and the bottom band (behind the pillars) are kept calm. Reduced motion: one still
   frame. No WebGL: a pre-rendered still (gel-still.webp). The same shader, framed closer, fills the Technology panel
   (makeGel). Same API as the template's field (start/stop/once/intro/setDim/snapDim/setScroll/running/focus). ================= */
function makeGel(cv,opt){
  opt=opt||{};var gl=null;
  try{gl=cv.getContext("webgl",{alpha:false,antialias:false,depth:false,premultipliedAlpha:false,preserveDrawingBuffer:true,powerPreference:"low-power"})}catch(e){}
  if(!gl)return null;
  var VS="attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";
  var FS=[
  "#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif",
  "uniform vec2 R;uniform float T,IN,ZOOM,DARK,MOB,VIG;uniform vec2 OFF;uniform vec4 RP[4];",
  "float hs(vec2 p){p=fract(p*vec2(.1031,.1030));p+=dot(p,p.yx+33.33);return fract((p.x+p.y)*p.x);}",
  "float vn(vec2 p){vec2 i=floor(p),f=fract(p);vec2 u=f*f*f*(f*(f*6.-15.)+10.);return mix(mix(hs(i),hs(i+vec2(1.,0.)),u.x),mix(hs(i+vec2(0.,1.)),hs(i+vec2(1.,1.)),u.x),u.y);}",
  "float fb(vec2 p){float s=0.,a=.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);for(int i=0;i<3;i++){s+=a*vn(p);p=m*p;a*=.45;}return s;}",
  /* the gel's surface: slow, smooth swells (warped sine bands, like a viscous liquid settling), plus the pointer's damped ripples */
  "float Hf(vec2 p){vec2 q=p*ZOOM*1.75+OFF;",
  /* long flowing folds, warped by slow low-frequency noise: a viscous surface settling */
  " float w1=fb(q*.30+vec2(T*.010,T*.004)),w2=fb(q*.46+vec2(3.1,-T*.008));",
  " float h=.62*sin(q.x*2.7+q.y*1.1+w1*4.2+T*.10)+.26*sin(q.x*5.2-q.y*1.5+w2*3.0-T*.08)+.08*sin(q.x*9.5+q.y*2.4+w1*2.+T*.14);",
  " h*=.5;",
  " for(int i=0;i<4;i++){vec4 r=RP[i];float age=T-r.z;if(r.w>0.&&age>0.&&age<7.){float d=length(p-r.xy);",
  "  h+=r.w*exp(-age*.85)*exp(-d*d*5.)*sin(d*20.-age*4.2)*smoothstep(0.,.3,age);}}",
  " return h;}",
  "vec3 grad(float t){vec3 a=vec3(.184,.710,.647),b=vec3(.267,.639,.773),c=vec3(.227,.482,.835),d=vec3(.541,.310,.839);",
  " return t<.33?mix(a,b,t/.33):t<.66?mix(b,c,(t-.33)/.33):mix(c,d,(t-.66)/.34);}",
  "void main(){vec2 p=(gl_FragCoord.xy-.5*R)/R.y;float e=1.6/R.y;",
  " float h0=Hf(p),hx=Hf(p+vec2(e,0.)),hX=Hf(p-vec2(e,0.)),hy=Hf(p+vec2(0.,e)),hY=Hf(p-vec2(0.,e));",
  " float K=.17;vec2 g=vec2(hx-hX,hy-hY)/(2.*e);vec3 n=normalize(vec3(-g*K,1.));",
  " vec3 V=vec3(0.,0.,1.);vec3 L1=normalize(vec3(.82,.30,.48));float ndl=dot(n,L1),b0=L1.z;",
  /* raking light: the flank of each fold that turns toward the light catches it; the troughs fall into shadow */
  " float rake=smoothstep(.10,.42,ndl-b0);float shade=smoothstep(.0,.25,b0-ndl);",
  " float nh=max(dot(n,normalize(L1+V)),0.);float sp=pow(nh,30.)*.20+pow(nh,260.)*1.3;vec3 rr=reflect(-V,n);",
  " float sy=smoothstep(-.95,-.45,rr.y)*smoothstep(.95,.45,rr.y);float d1=(rr.x-.235)/.036,d2=(rr.x+.26)/.026;",
  " float strip=exp(-d1*d1)*sy,strip2=exp(-d2*d2)*sy;",
  " vec3 L2=normalize(vec3(-.78,-.30,.50));float s2=pow(max(dot(n,normalize(L2+V)),0.),90.);",
  " float t=clamp(.50+p.x*.52+n.x*.35-n.y*.15,0.,1.);vec3 c=grad(t);",
  " vec3 L=c*(rake*.26+sp*1.0+strip*.95+strip2*.30)+vec3(.92,.96,1.)*(sp*.40+strip*.26)+vec3(.184,.710,.647)*s2*.15;",
  /* calm ground: behind the type (left), under the pillars (bottom) and under the nav (top); on phones, below the top band */
  " vec2 u=gl_FragCoord.xy/R;",
  " float m=mix(1.,mix(smoothstep(.30,.84,u.x)*smoothstep(.0,.30,u.y)*smoothstep(1.,.84,u.y)+.06,smoothstep(.40,.80,u.y),MOB),DARK);",
  " float v=mix(1.,smoothstep(.95,.35,length((u-.5)*vec2(1.,.9))),VIG);",
  " L*=m*v*IN;L=1.-exp(-L*1.35);",
" gl_FragColor=vec4(vec3(.008,.004,.031)+L,1.);}"].join("\n");
  function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(o));return o}
  var pr=gl.createProgram();try{gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,FS));gl.linkProgram(pr)}catch(e){return null}
  if(!gl.getProgramParameter(pr,gl.LINK_STATUS))return null;gl.useProgram(pr);
  var b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  var al=gl.getAttribLocation(pr,"a");gl.enableVertexAttribArray(al);gl.vertexAttribPointer(al,2,gl.FLOAT,false,0,0);
  var U={};["R","T","IN","ZOOM","DARK","MOB","VIG","OFF","RP"].forEach(function(k){U[k]=gl.getUniformLocation(pr,k)});
  var rp=new Float32Array(16);
  return {
    draw:function(t,s){gl.viewport(0,0,cv.width,cv.height);gl.uniform2f(U.R,cv.width,cv.height);gl.uniform1f(U.T,t);gl.uniform1f(U.IN,s.IN);
      gl.uniform1f(U.ZOOM,opt.zoom||1);gl.uniform1f(U.DARK,opt.dark?1:0);gl.uniform1f(U.MOB,s.mob?1:0);gl.uniform1f(U.VIG,opt.vig?1:0);
      gl.uniform2f(U.OFF,(opt.off||[0,0])[0],(opt.off||[0,0])[1]);gl.uniform4fv(U.RP,s.rp||rp);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)},
    lose:function(){try{var x=gl.getExtension("WEBGL_lose_context");if(x)x.loseContext()}catch(e){}}};
}
var field=(function(){
  var cv=$("#field"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false,lastF=0;
  var IN={v:1},dim=1,dimT=1,SP={v:0},mob=false,tFix=0;
  var G=makeGel(cv,{dark:true,zoom:1.0,off:[0,0]});
  var rp=new Float32Array(16),ri=0;
  if(!G){cv.style.display="none";var bg=document.querySelector(".fieldbg");if(bg){bg.style.background="#020108 url(gel-still.webp) center/cover no-repeat"}}
  function now(){return RM?14:(performance.now()-t0)/1000}
  function size(){dpr=Math.min(window.devicePixelRatio||1,1.5);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;mob=w<861;
    var q=(mob?.62:.58)*dpr;cv.width=Math.max(2,Math.round(w*q));cv.height=Math.max(2,Math.round(h*q));if(!running)frame(true)}
  function frame(once){
    var tn=performance.now();if(!once&&running&&tn-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=tn;
    dim+=(dimT-dim)*.08;cv.style.opacity=shown?String(.55+.45*dim):"";
    if(G){G.draw(now(),{IN:IN.v*(1-SP.v*.25),mob:mob,rp:rp});
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  /* the pointer presses the gel: a damped ripple where it moves, at most one every 160ms */
  var lx=-1,ly=-1,lt=0;
  addEventListener("pointermove",function(e){if(!G||RM||!running||e.pointerType==="touch")return;if(window.scrollY>innerHeight*.9)return;
    var tn=performance.now();if(tn-lt<160)return;var dx=e.clientX-lx,dy=e.clientY-ly,d=Math.sqrt(dx*dx+dy*dy);if(lx>=0&&d<26)return;
    var sp=lx<0?.4:Math.min(1,d/(tn-lt)*.9);lx=e.clientX;ly=e.clientY;lt=tn;
    rp[ri*4]=(e.clientX-w/2)/h;rp[ri*4+1]=(h/2-e.clientY)/h;rp[ri*4+2]=now();rp[ri*4+3]=.010+.022*sp;ri=(ri+1)%4},{passive:true});
  function start(){if(running||document.hidden)return;running=true;if(RM){frame(true);running=false;return}raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},
    running:function(){return running},focus:function(){return [w*.78,h*.42]}};
})();
/* the Technology panel: the same gel, framed closer, running only while it is on screen */
(function(){var inst=[];
  function boot(){$$("canvas.gelp").forEach(function(cv){if(cv.__g)return;var g=makeGel(cv,{zoom:1.15,off:[3.1,1.7],vig:true});cv.__g=g||1;
    if(!g){cv.parentNode.classList.add("still");return}
    var on=false,raf=0,t0=performance.now()-9000,last=0;
    function size(){var r=cv.getBoundingClientRect(),q=Math.min(devicePixelRatio||1,1.5)*.7;cv.width=Math.max(2,Math.round(r.width*q));cv.height=Math.max(2,Math.round(r.height*q));g.draw(RM?14:(performance.now()-t0)/1000,{IN:1})}
    function loop(tn){if(!on)return;if(tn-last>33){last=tn;g.draw((tn-t0)/1000,{IN:1})}raf=requestAnimationFrame(loop)}
    size();addEventListener("resize",size);
    if(!RM&&"IntersectionObserver" in window)new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting&&!on){on=true;raf=requestAnimationFrame(loop)}else if(!x.isIntersecting){on=false;cancelAnimationFrame(raf)}})}).observe(cv);
    inst.push(cv)})}
  /* home renders into #view, and the build-out pages clone sections into the body: boot any new panel wherever it appears */
  var bT=0,mo=new MutationObserver(function(){clearTimeout(bT);bT=setTimeout(boot,60)});
  document.addEventListener("DOMContentLoaded",function(){mo.observe(document.body,{childList:true,subtree:true});boot()});
  addEventListener("load",boot);setTimeout(boot,1200);
})();

/* ================= HERO FIELD: a crafted render of CollaMedix's real product (HOME_BRIEF update, option c): a CollaFabric
   braided tube, the pure electrocompacted collagen biotextile that CollaSleeve is made from, slid over a suture as in a rotator
   cuff repair. Built here in WebGL: 2 x 12 ribbon threads in a regular one-over-one tubular braid (each thread undulates over
   and under the threads it crosses), with open macroporous gaps, a pearly collagen material with fine fibril striations along
   each thread (aligned collagen), anisotropic silk sheen, a cool key, a cyan rim in the CollaMedix logo blue. The ground is the
   page ink exactly, so there is no box (DP/DJ). Desktop: the braid stands diagonally, whole, centred in the open area right of
   the text (~71%); phones: in the band under the nav, fading out above the text. It turns slowly on its own axis. ============ */
var field=(function(){
  var cv=$("#field"),w=0,h=0,dpr=1,running=false,raf=0,t0=performance.now(),shown=false,G=null;
  var IN={v:1},dim=1,dimT=1,SP={v:0};
  var BG=[7/255,22/255,40/255];
  var gl=cv.getContext("webgl",{antialias:true,alpha:false,preserveDrawingBuffer:true,premultipliedAlpha:false});
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* ---- the braid ---- */
  var NS=10,R=.5,K=2.1,HU=.038,AW=.092,BT=.034,L=5.0,SX=.55,SEG=96,RING=5;
  var LT=L+2*SX;/* overall length incl. the suture ends */
  function build(){
    var P=[],I=[],TAU=Math.PI*2;
    function push(px,py,pz,nx,ny,nz,tx,ty,tz,u,v,o,s){P.push(px,py,pz,nx,ny,nz,tx,ty,tz,u,v,o,s)}
    function ctr(dir,phi,x){var th=phi+dir*K*x,r=R+dir*HU*Math.cos(NS*K*x);return [x,r*Math.cos(th),r*Math.sin(th),th]}
    for(var s=0;s<2*NS;s++){
      var dir=s<NS?1:-1,phi=TAU*(s%NS)/NS,base=P.length/13;
      for(var i=0;i<=SEG;i++){
        var x=-L/2+L*i/SEG,c=ctr(dir,phi,x),c2=ctr(dir,phi,x+1e-3);
        var tx=c2[0]-c[0],ty=c2[1]-c[1],tz=c2[2]-c[2],tl=Math.sqrt(tx*tx+ty*ty+tz*tz);tx/=tl;ty/=tl;tz/=tl;
        /* radial outward, made orthogonal to the tangent */
        var rx=0,ry=Math.cos(c[3]),rz=Math.sin(c[3]),d=rx*tx+ry*ty+rz*tz;rx-=d*tx;ry-=d*ty;rz-=d*tz;var rl=Math.sqrt(rx*rx+ry*ry+rz*rz);rx/=rl;ry/=rl;rz/=rl;
        var bx=ty*rz-tz*ry,by=tz*rx-tx*rz,bz=tx*ry-ty*rx;/* across the ribbon, in the surface */
        /* over-or-under: 1 on the outside of a crossing, 0 underneath */
        var ov=.5+.5*dir*Math.cos(NS*K*x);
        for(var j=0;j<RING;j++){
          var a=TAU*j/RING,ca=Math.cos(a),sa=Math.sin(a);
          /* a flattened ribbon: a squarish ellipse (superellipse-ish) */
          var cs=Math.sign(ca)*Math.pow(Math.abs(ca),.85),ss=Math.sign(sa)*Math.pow(Math.abs(sa),.85);
          var px=c[0]+rx*BT*cs+bx*AW*ss,py=c[1]+ry*BT*cs+by*AW*ss,pz=c[2]+rz*BT*cs+bz*AW*ss;
          var nx=rx*ca/BT+bx*sa/AW,ny=ry*ca/BT+by*sa/AW,nz=rz*ca/BT+bz*sa/AW,nl=Math.sqrt(nx*nx+ny*ny+nz*nz);
          push(px,py,pz,nx/nl,ny/nl,nz/nl,tx,ty,tz,x,ss,ov,(s+.5)/(2*NS))}}
      for(i=0;i<SEG;i++)for(j=0;j<RING;j++){var a0=base+i*RING+j,a1=base+i*RING+(j+1)%RING,b0=a0+RING,b1=a1+RING;I.push(a0,b0,a1,a1,b0,b1)}}
    /* the suture: a fine braided core running through, a little past both ends, with a gentle sag */
    var base2=P.length/13,SS=120,SR=.055;
    for(var i2=0;i2<=SS;i2++){
      var x2=-LT/2+LT*i2/SS,yy=-.06*Math.cos(x2/LT*Math.PI)+(Math.abs(x2)>L/2?-.05*Math.pow((Math.abs(x2)-L/2)/SX,2):0),zz=.02*Math.sin(x2*1.3);
      for(var j2=0;j2<RING;j2++){var a2=TAU*j2/RING,ny2=Math.cos(a2),nz2=Math.sin(a2);push(x2,yy+ny2*SR,zz+nz2*SR,0,ny2,nz2,1,0,0,x2,a2,1,-1)}}
    for(i2=0;i2<SS;i2++)for(j2=0;j2<RING;j2++){var q0=base2+i2*RING+j2,q1=base2+i2*RING+(j2+1)%RING;I.push(q0,q0+RING,q1,q1,q0+RING,q1+RING)}
    return {v:new Float32Array(P),i:new Uint16Array(I)}}
  var VS="attribute vec3 p;attribute vec3 n;attribute vec3 tg;attribute vec4 u;uniform mat3 M;uniform vec4 Q;uniform vec2 O;"+
    "varying vec3 vn;varying vec3 vt;varying vec4 vu;varying vec3 vp;varying float vr;"+
    "void main(){vec3 r=M*p;vn=M*n;vt=M*tg;vu=u;vp=p;vr=length(p.yz);float pf=1./(1.-r.z*Q.z);gl_Position=vec4(r.x*Q.x*pf+O.x,r.y*Q.y*pf+O.y,-r.z*.12,1.);}";
  var FS="precision highp float;varying vec3 vn;varying vec3 vt;varying vec4 vu;varying vec3 vp;varying float vr;uniform vec3 bg;uniform float A;uniform float RV;uniform vec4 FD;uniform float DPR;uniform float LH;"+
    "float hs(float x){return fract(sin(x*127.1)*43758.5453);}"+
    "void main(){vec3 N=normalize(vn);if(N.z<0.)N=-N;vec3 T=normalize(vt);vec3 V=vec3(0.,0.,1.);"+
    "vec3 L1=normalize(vec3(-.55,.62,.62)),L2=normalize(vec3(.75,-.3,.45)),L3=normalize(vec3(.1,.95,-.3));"+
    "float sut=step(vu.w,-.5);float ov=vu.z;float id=vu.w;"+
    /* fibril striations along each thread: fine lines across the ribbon width, slightly wavy */
    "float st=.5+.5*sin(vu.y*44.+sin(vu.x*2.3+id*40.)*1.4);float st2=.5+.5*sin(vu.y*71.+id*9.);"+
    "float fil=pow(abs(sin((vu.y+1.)*4.712)),.45);float alb=(.70+.30*fil)*(.95+.04*st2)+.04*(hs(id)-.5);"+
    "vec3 base=mix(vec3(.94,.90,.83)*alb,vec3(.78,.86,.92),sut);"+
    "float d1=max(dot(N,L1),0.),d2=max(dot(N,L2),0.),d3=max(dot(N,L3),0.);"+
    /* Kajiya-Kay sheen along the fibres */
    "vec3 H=normalize(L1+V);float th=dot(T,H);float sk=sqrt(max(1.-th*th,0.));float sp=pow(sk,60.)*(.35+.65*fil);"+
    "vec3 H2=normalize(L2+V);float th2=dot(T,H2);float sp2=pow(sqrt(max(1.-th2*th2,0.)),40.);"+
    "float fr=pow(1.-max(dot(N,V),0.),2.4);"+
    /* occlusion: threads that pass underneath and the inside of the tube are darker */
    "float rad=dot(N,normalize(vec3(0.,vp.y,vp.z)));float ao=mix(.62,1.,ov)*mix(.45,1.,smoothstep(-.6,.5,rad));ao=mix(ao,.85,sut);"+
    "vec3 col=base*(.14+1.25*d1+.18*d3)*ao+vec3(0.,.55,.80)*.18*d2*ao+vec3(1.,.98,.94)*sp*.42*ao+vec3(0.,.72,.91)*sp2*.25*ao+vec3(0.,.62,.86)*fr*.36*ao;"+
    "col+=vec3(.02,.05,.09);col=pow(max(col,0.),vec3(.82));"+
    /* the braid is laid down from one end in the intro */
    "float rv=smoothstep(RV,RV-.35,vp.x);"+
    "float fy=gl_FragCoord.y/DPR;float fade=FD.x>.5?smoothstep(FD.y,FD.z,fy):1.;"+
    "col=mix(bg,col,A*fade*rv);gl_FragColor=vec4(col,1.);}";
  var prog=null,vb=null,ib=null,cnt=0,U={};
  function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)){console.warn(gl.getShaderInfoLog(o));return null}return o}
  function init(){
    if(!gl)return false;
    var v=sh(gl.VERTEX_SHADER,VS),f=sh(gl.FRAGMENT_SHADER,FS);if(!v||!f)return false;
    prog=gl.createProgram();gl.attachShader(prog,v);gl.attachShader(prog,f);gl.linkProgram(prog);if(!gl.getProgramParameter(prog,gl.LINK_STATUS))return false;
    var D=build();cnt=D.i.length;
    vb=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vb);gl.bufferData(gl.ARRAY_BUFFER,D.v,gl.STATIC_DRAW);
    ib=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ib);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,D.i,gl.STATIC_DRAW);
    gl.useProgram(prog);
    ["p","n","tg","u"].forEach(function(a,i){var l=gl.getAttribLocation(prog,a);gl.enableVertexAttribArray(l);gl.vertexAttribPointer(l,i<3?3:4,gl.FLOAT,false,52,i*12)});
    ["M","Q","O","bg","A","RV","FD","DPR"].forEach(function(u){U[u]=gl.getUniformLocation(prog,u)});
    gl.enable(gl.DEPTH_TEST);gl.enable(gl.CULL_FACE);gl.cullFace(gl.FRONT);
    return true}
  var ok=false;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861,D=2*(R+HU+BT);
    if(mob){/* phones: the band between the nav and the eyebrow, measured */
      var eb=document.querySelector(".hero .eyebrow"),bot=eb?eb.getBoundingClientRect().top+window.scrollY-18:h*.36;
      bot=Math.max(180,Math.min(bot,h*.5));var top=78,tilt=.36;
      var sc=Math.min((w*.9)/(LT*Math.cos(tilt)+D*Math.sin(tilt)),((bot-top)*.8)/(LT*Math.sin(tilt)+D*Math.cos(tilt)));
      return {mob:true,U:bot,sc:sc,tilt:tilt,kx:w*.5,ky:(top+bot)/2}}
    var tilt=1.02;
    var sc=Math.min((h*.70)/(LT*Math.sin(tilt)+D*Math.cos(tilt)),(cw*.38)/(LT*Math.cos(tilt)+D*Math.sin(tilt)));
    return {mob:false,U:h,sc:sc,tilt:tilt,kx:side+cw*.715,ky:h*.55}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(gl)gl.viewport(0,0,cv.width,cv.height);if(!running)frame(true)}
  function mat(spin,yaw,tilt){/* R = Rz(tilt) * Ry(yaw) * Rx(spin), column-major mat3 */
    var a=Math.cos(spin),b=Math.sin(spin),c=Math.cos(yaw),d=Math.sin(yaw),e=Math.cos(tilt),f=Math.sin(tilt);
    var X=[[1,0,0],[0,a,b],[0,-b,a]];/* columns of Rx */
    function ry(v){return [c*v[0]+d*v[2],v[1],-d*v[0]+c*v[2]]}
    function rz(v){return [e*v[0]-f*v[1],f*v[0]+e*v[1],v[2]]}
    var m=[];X.forEach(function(col){var r=rz(ry(col));m.push(r[0],r[1],r[2])});return new Float32Array(m)}
  var lastF=0,lastR=0,slow=0,hold=true;
  function frame(once){
    var now=performance.now(),dt=now-lastR;lastR=now;if(!once&&dt<1000)slow=slow*.85+(dt>90?.15:0);
    /* while the loader covers the page, and on very slow machines, draw rarely so the page's own animation keeps its pace */
    var gap=(hold&&document.getElementById("pre"))?600:slow>.5?320:31;
    if(!once&&running&&now-lastF<gap){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!gl){return}
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;var e=sm(IN.v);
    cv.style.opacity=shown?String(.55+.45*dim):"";
    gl.clearColor(BG[0],BG[1],BG[2],1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    if(!ok||!G)return;
    var spin=.4+t*.07,yaw=-.32+.07*Math.sin(t*Math.PI*2/40);
    gl.uniformMatrix3fv(U.M,false,mat(spin,yaw,G.tilt));
    gl.uniform4f(U.Q,G.sc*2/w,G.sc*2/h,.035,0);
    var sy=G.mob?(window.scrollY||0):SP.v*h*.06;var ox=(G.kx/w)*2-1,oy=1-(G.ky-sy)/h*2;
    gl.uniform2f(U.O,ox,oy);
    gl.uniform3f(U.bg,BG[0],BG[1],BG[2]);gl.uniform1f(U.A,Math.min(1,e*1.6));gl.uniform1f(U.DPR,dpr);
    gl.uniform1f(U.RV,-LT/2-.4+(LT+.8)*e);
    if(G.mob)gl.uniform4f(U.FD,1,h-G.U+sy-10,h-G.U+sy+14,0);else gl.uniform4f(U.FD,0,0,1,0);
    gl.drawElements(gl.TRIANGLES,cnt,gl.UNSIGNED_SHORT,0);
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  ok=init();
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(d>=1)hold=false;if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d*1.6,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

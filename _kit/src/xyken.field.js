/* ================= HERO FIELD: a crafted render of Xyken's real product output (HOME_BRIEF update, option c): an AFO scan,
   the lower leg and foot as the SnugFit O&P app captures it (weight-bearing, flat sole), drawn as a faceted scan mesh in WebGL.
   The geometry is built here from a signed-distance foot (heel, arch, ball, toe box, ankle, calf) meshed with surface nets, so
   it has the fine triangulated skin of a real phone scan. A steel-blue material with a cool key, a soft fill and an Xyken-blue
   rim; one thin scan line rises slowly over it (the scan in progress). The ground is the page ink exactly, so there is no box
   (DP/DJ); the calf eases into the ink at the top. Desktop: the scan is centred in the open area right of the text (~70%);
   phones: in the top band, fading out above the text (CW). It turns slowly on its own, so no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),w=0,h=0,dpr=1,running=false,raf=0,t0=performance.now(),shown=false,G=null;
  var IN={v:1},dim=1,dimT=1,SP={v:0};
  var BG=[12/255,22/255,36/255];
  var gl=cv.getContext("webgl",{antialias:true,alpha:false,preserveDrawingBuffer:true,premultipliedAlpha:false});
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* ---- the foot: signed distance, units ~ foot length 1 ---- */
  function len(x,y,z){return Math.sqrt(x*x+y*y+z*z)}
  function rcone(px,py,pz,ax,ay,az,bx,by,bz,r1,r2){/* capsule with radius r1 at a, r2 at b */
    var bax=bx-ax,bay=by-ay,baz=bz-az,pax=px-ax,pay=py-ay,paz=pz-az,L2=bax*bax+bay*bay+baz*baz;
    var t=(pax*bax+pay*bay+paz*baz)/L2;t=t<0?0:t>1?1:t;
    return len(pax-bax*t,pay-bay*t,paz-baz*t)-(r1+(r2-r1)*t)}
  function ell(px,py,pz,cx,cy,cz,rx,ry,rz){var x=(px-cx)/rx,y=(py-cy)/ry,z=(pz-cz)/rz;var k0=len(x,y,z),k1=len(x/rx,y/ry,z/rz);return k1>0?k0*(k0-1)/k1:-Math.min(rx,ry,rz)}
  function smin(a,b,k){var hh=Math.max(k-Math.abs(a-b),0)/k;return Math.min(a,b)-hh*hh*k*.25}
  function sdf(x,y,z){
    /* the leg: ankle to just below the knee, slightly oval, calf belly behind */
    var zl=z*1.06;
    var d=rcone(x,y,zl,.0,.2,0,-.015,.62,0,.074,.11);
    d=smin(d,rcone(x,y,zl,-.025,.52,-.005,-.02,1.02,0,.108,.118),.12);
    d=smin(d,ell(x,y,z,-.055,.72,0,.1,.2,.09),.09);/* calf belly */
    /* malleoli */
    d=smin(d,ell(x,y,z,-.01,.19,.07,.04,.04,.03),.05);
    d=smin(d,ell(x,y,z,-.025,.17,-.075,.04,.04,.03),.05);
    /* heel */
    d=smin(d,ell(x,y,z,-.075,.095,0,.105,.1,.085),.07);
    /* midfoot and arch: wide, low */
    d=smin(d,ell(x,y,z,.2,.08,.01,.24,.085,.1),.08);
    /* dorsum, ankle front down to the ball */
    d=smin(d,rcone(x,y,z*1.15,.05,.18,0,.42,.075,.01,.075,.055),.08);
    /* ball and toe box (in a sock the toes read as one form) */
    d=smin(d,ell(x,y,z,.5,.05,.02,.13,.055,.125),.07);
    d=smin(d,ell(x,y,z,.62,.046,.015,.12,.05,.108),.06);
    /* the medial arch lifts off the ground a little */
    var arch=ell(x,y,z,.2,-.02,-.09,.15,.05,.06);d=Math.max(d,-arch+.004);
    /* weight-bearing: the sole is flat on the ground */
    d=Math.max(d,-(y-.004));
    /* the scan ends below the knee */
    d=Math.max(d,y-.94);
    return d}
  /* ---- surface nets ---- */
  function build(){
    var S=.0125,X0=-.26,X1=.82,Y0=-.03,Y1=1.03,Z0=-.2,Z1=.2;
    var nx=Math.ceil((X1-X0)/S)+1,ny=Math.ceil((Y1-Y0)/S)+1,nz=Math.ceil((Z1-Z0)/S)+1;
    var F=new Float32Array(nx*ny*nz),i,j,k,n=0;
    for(k=0;k<nz;k++)for(j=0;j<ny;j++)for(i=0;i<nx;i++)F[n++]=sdf(X0+i*S,Y0+j*S,Z0+k*S);
    function id(i,j,k){return i+nx*(j+ny*k)}
    var VI=new Int32Array((nx-1)*(ny-1)*(nz-1)).fill(-1),P=[];
    var E=[[0,0,0,1,0,0],[0,1,0,1,1,0],[0,0,1,1,0,1],[0,1,1,1,1,1],[0,0,0,0,1,0],[1,0,0,1,1,0],[0,0,1,0,1,1],[1,0,1,1,1,1],[0,0,0,0,0,1],[1,0,0,1,0,1],[0,1,0,0,1,1],[1,1,0,1,1,1]];
    for(k=0;k<nz-1;k++)for(j=0;j<ny-1;j++)for(i=0;i<nx-1;i++){
      var sx=0,sy=0,sz=0,c=0;
      for(var e=0;e<12;e++){var q=E[e],a=F[id(i+q[0],j+q[1],k+q[2])],b=F[id(i+q[3],j+q[4],k+q[5])];
        if((a<0)!==(b<0)){var t=a/(a-b);sx+=q[0]+(q[3]-q[0])*t;sy+=q[1]+(q[4]-q[1])*t;sz+=q[2]+(q[5]-q[2])*t;c++}}
      if(c){VI[i+(nx-1)*(j+(ny-1)*k)]=P.length/3;P.push(X0+(i+sx/c)*S,Y0+(j+sy/c)*S,Z0+(k+sz/c)*S)}}
    function cid(i,j,k){return VI[i+(nx-1)*(j+(ny-1)*k)]}
    var T=[];
    function quad(a,b,c2,d2,flip){if(a<0||b<0||c2<0||d2<0)return;if(flip)T.push(a,c2,b,a,d2,c2);else T.push(a,b,c2,a,c2,d2)}
    for(k=1;k<nz-1;k++)for(j=1;j<ny-1;j++)for(i=1;i<nx-1;i++){
      var v0=F[id(i,j,k)],s0=v0<0;
      if(i<nx-1&&(F[id(i+1,j,k)]<0)!==s0)quad(cid(i,j-1,k-1),cid(i,j,k-1),cid(i,j,k),cid(i,j-1,k),s0);
      if(j<ny-1&&(F[id(i,j+1,k)]<0)!==s0)quad(cid(i-1,j,k-1),cid(i-1,j,k),cid(i,j,k),cid(i,j,k-1),s0);
      if(k<nz-1&&(F[id(i,j,k+1)]<0)!==s0)quad(cid(i-1,j-1,k),cid(i,j-1,k),cid(i,j,k),cid(i-1,j,k),s0);
    }
    /* smooth normals from the field gradient, flat normals per triangle (the facets of a scan) */
    var NV=new Float32Array(P.length),hh=.004;
    for(var v=0;v<P.length;v+=3){var x=P[v],y=P[v+1],z=P[v+2];
      var gx=sdf(x+hh,y,z)-sdf(x-hh,y,z),gy=sdf(x,y+hh,z)-sdf(x,y-hh,z),gz=sdf(x,y,z+hh)-sdf(x,y,z-hh),l=Math.sqrt(gx*gx+gy*gy+gz*gz)||1;
      NV[v]=gx/l;NV[v+1]=gy/l;NV[v+2]=gz/l}
    var out=new Float32Array(T.length*9),o=0;
    for(var t=0;t<T.length;t+=3){
      var A=T[t]*3,B=T[t+1]*3,C=T[t+2]*3;
      var ux=P[B]-P[A],uy=P[B+1]-P[A+1],uz=P[B+2]-P[A+2],wx=P[C]-P[A],wy=P[C+1]-P[A+1],wz=P[C+2]-P[A+2];
      var fx=uy*wz-uz*wy,fy=uz*wx-ux*wz,fz=ux*wy-uy*wx,fl=Math.sqrt(fx*fx+fy*fy+fz*fz)||1;fx/=fl;fy/=fl;fz/=fl;
      /* keep facet normals on the outside */
      if(fx*NV[A]+fy*NV[A+1]+fz*NV[A+2]<0){fx=-fx;fy=-fy;fz=-fz}
      [A,B,C].forEach(function(p){out[o++]=P[p];out[o++]=P[p+1];out[o++]=P[p+2];out[o++]=NV[p];out[o++]=NV[p+1];out[o++]=NV[p+2];out[o++]=fx;out[o++]=fy;out[o++]=fz});
    }
    return out}
  var VS="attribute vec3 p;attribute vec3 n;attribute vec3 f;uniform mat4 M;uniform vec4 Q;uniform vec2 O;varying vec3 vn;varying vec3 vf;varying vec3 vp;varying vec3 wp;"+
    "void main(){vec4 r=M*vec4(p-vec3(.25,.45,0.),1.);vn=mat3(M)*n;vf=mat3(M)*f;vp=p;wp=r.xyz;float zc=r.z+Q.z;vec4 c=vec4(r.x*Q.x,r.y*Q.y,0.,zc);c.z=(zc-Q.w)/(Q.w*4.)*zc;c.xy+=O*zc;gl_Position=c;}";
  var FS="precision highp float;varying vec3 vn;varying vec3 vf;varying vec3 vp;varying vec3 wp;uniform vec3 bg;uniform float T;uniform float A;uniform float SY;uniform vec4 FD;uniform float DPR;"+
    "void main(){vec3 N=normalize(mix(normalize(vn),normalize(vf),.42));vec3 V=normalize(vec3(-wp.x*.25,-wp.y*.25,-3.2)-wp);"+
    "vec3 L1=normalize(vec3(-.55,.75,-.6)),L2=normalize(vec3(.8,.15,-.35));"+
    "float d1=max(dot(N,L1),0.),d2=max(dot(N,L2),0.);vec3 H=normalize(L1+V);float sp=pow(max(dot(N,H),0.),38.);"+
    "float fr=pow(1.-max(dot(N,V),0.),2.6);"+
    "vec3 base=vec3(.64,.72,.80);vec3 col=base*(.10+.78*d1)+vec3(.30,.46,.62)*.32*d2+vec3(.92,.96,1.)*sp*.32+vec3(.18,.56,.86)*fr*.85;"+
    "col+=vec3(.05,.09,.13)*(N.y*.5+.5);"+
    "float s=exp(-pow((vp.y-SY)/.006,2.));float s2=exp(-pow((vp.y-SY)/.05,2.))*step(vp.y,SY);col+=vec3(.42,.78,1.)*s*1.4+vec3(.10,.42,.75)*s2*.35;"+
    "float top=smoothstep(.62,.93,vp.y);col=mix(col,bg,top);"+
    "float fy=gl_FragCoord.y/DPR;float fade=FD.x>.5?smoothstep(FD.y,FD.z,fy):1.;"+
    "col=mix(bg,col,A*fade);gl_FragColor=vec4(col,1.);}";
  var prog=null,buf=null,cnt=0,U={};
  function sh(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)){console.warn(gl.getShaderInfoLog(o));return null}return o}
  function init(){
    if(!gl)return false;
    var v=sh(gl.VERTEX_SHADER,VS),f=sh(gl.FRAGMENT_SHADER,FS);if(!v||!f)return false;
    prog=gl.createProgram();gl.attachShader(prog,v);gl.attachShader(prog,f);gl.linkProgram(prog);if(!gl.getProgramParameter(prog,gl.LINK_STATUS))return false;
    var data=build();cnt=data.length/9;buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
    gl.useProgram(prog);
    ["p","n","f"].forEach(function(a,i){var l=gl.getAttribLocation(prog,a);gl.enableVertexAttribArray(l);gl.vertexAttribPointer(l,3,gl.FLOAT,false,36,i*12)});
    ["M","Q","O","bg","T","A","SY","FD","DPR"].forEach(function(u){U[u]=gl.getUniformLocation(prog,u)});
    gl.enable(gl.DEPTH_TEST);gl.enable(gl.CULL_FACE);gl.cullFace(gl.BACK);gl.disable(gl.CULL_FACE);
    return true}
  var ok=false;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){/* phones: the band between the nav and the eyebrow, measured */
      var eb=document.querySelector(".hero .eyebrow"),bot=eb?eb.getBoundingClientRect().top+window.scrollY-18:h*.36;
      bot=Math.max(180,Math.min(bot,h*.5));var top=74,hh=(bot-top)*.86;
      return {mob:true,side:side,cw:cw,U:bot,hh:hh,kx:w*.52,ky:(top+bot)/2+4}}
    var hh=Math.min(h*.70,cw*.36);/* on-screen height of the scan */
    return {mob:false,side:side,cw:cw,U:h,hh:hh,kx:side+cw*.71,ky:h*.54}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(gl)gl.viewport(0,0,cv.width,cv.height);if(!running)frame(true)}
  function mat(yaw,pitch){var cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);
    /* R = Rx(pitch) * Ry(yaw), column-major */
    return new Float32Array([cy,sp*sy,-cp*sy,0, 0,cp,sp,0, sy,-sp*cy,cp*cy,0, 0,0,0,1])}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!gl){return}
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;var e=sm(IN.v);
    cv.style.opacity=shown?String(.55+.45*dim):"";
    gl.clearColor(BG[0],BG[1],BG[2],1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    if(!ok||!G)return;
    /* a three-quarter medial view, turning slowly through ~40 degrees and back */
    var yaw=-2.5+.26*Math.sin(t*Math.PI*2/48)+(1-e)*.5,pitch=.2;
    gl.uniformMatrix4fv(U.M,false,mat(yaw,pitch));
    var D=3.2,f=G.hh/h*2*D/1.02;/* scale so the model (height ~1) fills G.hh pixels */
    gl.uniform4f(U.Q,f*h/w,f,D,D);
    var sy=G.mob?(window.scrollY||0):SP.v*h*.06;var ox=(G.kx/w)*2-1,oy=1-(G.ky-sy)/h*2;
    gl.uniform2f(U.O,ox,oy);
    gl.uniform3f(U.bg,BG[0],BG[1],BG[2]);gl.uniform1f(U.T,t);gl.uniform1f(U.A,e);gl.uniform1f(U.DPR,dpr);
    /* the scan line rises from the sole to the calf and starts again */
    var ph=RM?.45:((t/9)%1);gl.uniform1f(U.SY,-.05+ph*1.0);
    if(G.mob)gl.uniform4f(U.FD,1,h-G.U+sy-10,h-G.U+sy+14,0);else gl.uniform4f(U.FD,0,0,1,0);
    gl.drawArrays(gl.TRIANGLES,0,cnt);
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  ok=init();
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

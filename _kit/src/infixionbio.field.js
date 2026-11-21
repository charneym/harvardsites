/* ================= HERO FIELD: a crafted render of iNFixion's subject (HOME_BRIEF update, option c): the DNA double helix of a
   gene, as in their own logo mark, rendered in WebGL as a real material object: two sugar-phosphate backbones as smooth tubes
   (one in the logo's cyan, one in a pale steel blue) wound with a true major and minor groove, joined by base-pair rungs, under a
   cool key light, a soft fill and a cyan rim. The geometry is built here (tubes along the helix, capped rung cylinders). It turns
   slowly about its own axis, so there is no pointer response (CZ). The ground is the page ink exactly, so no box edge (DP/DJ);
   both ends ease into the ink over a long distance. Desktop: centred in the open area right of the text (~70%), fully below the
   nav; phones: in the top band, fading out above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),w=0,h=0,dpr=1,running=false,raf=0,t0=performance.now(),shown=false,G=null;
  var IN={v:1},dim=1,dimT=1,SP={v:0};
  var BG=[9/255,21/255,33/255];
  var gl=cv.getContext("webgl",{antialias:true,alpha:false,preserveDrawingBuffer:true,premultipliedAlpha:false});
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* ---- the helix: axis along y, height 1 (y -0.5..0.5), radius R ---- */
  var TURNS=2.6,R=.105,GROOVE=2.3,RT=.026,RR=.0105;
  var CA=[0/255,154/255,222/255],CB=[.74,.82,.9];
  function hp(t,off){var a=t*TURNS*Math.PI*2+off;return [Math.cos(a)*R,t-.5,Math.sin(a)*R]}
  function build(){
    var V=[];
    function push(p,n,c,s){V.push(p[0],p[1],p[2],n[0],n[1],n[2],c[0],c[1],c[2],s)}
    function norm(v){var l=Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2])||1;return [v[0]/l,v[1]/l,v[2]/l]}
    function cross(a,b){return [a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}
    /* backbone tubes */
    function tube(off,col,sid){
      var NS=360,NR=18,rings=[];
      for(var i=0;i<=NS;i++){var t=i/NS,p=hp(t,off),q=hp(Math.min(1,t+.001),off),o=hp(Math.max(0,t-.001),off);
        var T=norm([q[0]-o[0],q[1]-o[1],q[2]-o[2]]),N=norm(cross(T,[0,1,0])),B=cross(N,T);
        if(Math.abs(N[0])+Math.abs(N[1])+Math.abs(N[2])<.1){N=[1,0,0];B=cross(N,T)}
        var ring=[];for(var k=0;k<NR;k++){var a=k/NR*Math.PI*2,ca=Math.cos(a),sa=Math.sin(a);
          var n=[N[0]*ca+B[0]*sa,N[1]*ca+B[1]*sa,N[2]*ca+B[2]*sa];ring.push([[p[0]+n[0]*RT,p[1]+n[1]*RT,p[2]+n[2]*RT],n])}
        rings.push(ring)}
      for(i=0;i<NS;i++)for(var k2=0;k2<NR;k2++){var a0=rings[i][k2],a1=rings[i][(k2+1)%NR],b0=rings[i+1][k2],b1=rings[i+1][(k2+1)%NR];
        push(a0[0],a0[1],col,sid);push(b0[0],b0[1],col,sid);push(a1[0],a1[1],col,sid);
        push(a1[0],a1[1],col,sid);push(b0[0],b0[1],col,sid);push(b1[0],b1[1],col,sid)}
      /* round end caps */
      [0,NS].forEach(function(ii){var t=ii/NS,p=hp(t,off),dir=ii?1:-1;for(var k=0;k<NR;k++){var A=rings[ii][k],Bq=rings[ii][(k+1)%NR];
        var c=[p[0],p[1]+dir*RT*.8,p[2]];push(A[0],A[1],col,sid);push(Bq[0],Bq[1],col,sid);push(c,[0,dir,0],col,sid)}})
    }
    tube(0,CA,0);tube(GROOVE,CB,1);
    /* base-pair rungs: two halves, each the colour of its own strand, meeting near the axis */
    var NB=Math.round(TURNS*10.5);
    for(var b=0;b<NB;b++){var t=(b+.5)/NB,P=hp(t,0),Q=hp(t,GROOVE);
      var M=[(P[0]+Q[0])/2,(P[1]+Q[1])/2,(P[2]+Q[2])/2];
      [[P,M,CA,2],[M,Q,CB,3]].forEach(function(s){var A=s[0],Bp=s[1],D=norm([Bp[0]-A[0],Bp[1]-A[1],Bp[2]-A[2]]);
        var N=norm(cross(D,[0,1,0])),Bn=cross(D,N),NR=12;
        for(var k=0;k<NR;k++){var a0=k/NR*Math.PI*2,a1=(k+1)/NR*Math.PI*2;
          var n0=[N[0]*Math.cos(a0)+Bn[0]*Math.sin(a0),N[1]*Math.cos(a0)+Bn[1]*Math.sin(a0),N[2]*Math.cos(a0)+Bn[2]*Math.sin(a0)];
          var n1=[N[0]*Math.cos(a1)+Bn[0]*Math.sin(a1),N[1]*Math.cos(a1)+Bn[1]*Math.sin(a1),N[2]*Math.cos(a1)+Bn[2]*Math.sin(a1)];
          function at(p,n){return [p[0]+n[0]*RR,p[1]+n[1]*RR,p[2]+n[2]*RR]}
          var c=s[2].map(function(x){return x*.86+.08});
          push(at(A,n0),n0,c,s[3]);push(at(Bp,n0),n0,c,s[3]);push(at(A,n1),n1,c,s[3]);
          push(at(A,n1),n1,c,s[3]);push(at(Bp,n0),n0,c,s[3]);push(at(Bp,n1),n1,c,s[3])}})}
    return new Float32Array(V)}
  var VS="attribute vec3 p;attribute vec3 n;attribute vec3 c;attribute float s;uniform mat4 M;uniform vec4 Q;uniform vec2 O;varying vec3 vn;varying vec3 vc;varying vec3 vp;varying vec3 wp;"+
    "void main(){vec4 r=M*vec4(p,1.);vn=mat3(M)*n;vc=c;vp=p;wp=r.xyz;float zc=r.z+Q.z;vec4 cc=vec4(r.x*Q.x,r.y*Q.y,0.,zc);cc.z=(zc-Q.w*.7)/(Q.w)*zc*.5;cc.xy+=O*zc;gl_Position=cc;}";
  var FS="precision highp float;varying vec3 vn;varying vec3 vc;varying vec3 vp;varying vec3 wp;uniform vec3 bg;uniform float A;uniform vec4 FD;uniform float DPR;uniform float PH;"+
    "void main(){vec3 N=normalize(vn);vec3 V=normalize(vec3(0.,0.,-3.2)-wp);if(dot(N,V)<0.)N=-N;"+
    "vec3 L1=normalize(vec3(-.6,.7,-.55)),L2=normalize(vec3(.85,-.1,-.3));"+
    "float d1=max(dot(N,L1),0.),d2=max(dot(N,L2),0.);vec3 H=normalize(L1+V);float sp=pow(max(dot(N,H),0.),56.);vec3 H2=normalize(L2+V);float sp2=pow(max(dot(N,H2),0.),24.);"+
    "float fr=pow(1.-max(dot(N,V),0.),2.4);"+
    "vec3 col=vc*(.08+.80*d1)+vc*vec3(.55,.7,.85)*.28*d2+vec3(.95,.98,1.)*sp*.55+vec3(.6,.85,1.)*sp2*.12+vec3(.0,.6,.87)*fr*.7;"+
    "float depth=smoothstep(-.14,.14,wp.z);col*=mix(1.,.5,depth);"+
    /* a soft glint travels up the cyan strand: transcription read along the gene */
    "float g=exp(-pow((vp.y-PH)/.05,2.));col+=vec3(.35,.8,1.)*g*.35*step(vc.r,.2);"+
    "float ends=smoothstep(.5,.3,abs(vp.y));"+
    "float fy=gl_FragCoord.y/DPR;float fade=FD.x>.5?smoothstep(FD.y,FD.z,fy):1.;"+
    "col=mix(bg,col,A*fade*ends);gl_FragColor=vec4(col,1.);}";
  var prog=null,buf=null,cnt=0,U={};
  function shd(t,s){var o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS)){console.warn(gl.getShaderInfoLog(o));return null}return o}
  function init(){
    if(!gl)return false;
    var v=shd(gl.VERTEX_SHADER,VS),f=shd(gl.FRAGMENT_SHADER,FS);if(!v||!f)return false;
    prog=gl.createProgram();gl.attachShader(prog,v);gl.attachShader(prog,f);gl.linkProgram(prog);if(!gl.getProgramParameter(prog,gl.LINK_STATUS))return false;
    var data=build();cnt=data.length/10;buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
    gl.useProgram(prog);
    [["p",3,0],["n",3,12],["c",3,24],["s",1,36]].forEach(function(a){var l=gl.getAttribLocation(prog,a[0]);if(l<0)return;gl.enableVertexAttribArray(l);gl.vertexAttribPointer(l,a[1],gl.FLOAT,false,40,a[2])});
    ["M","Q","O","bg","A","FD","DPR","PH"].forEach(function(u){U[u]=gl.getUniformLocation(prog,u)});
    gl.enable(gl.DEPTH_TEST);gl.disable(gl.CULL_FACE);
    return true}
  var ok=false;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){var eb=document.querySelector(".hero .eyebrow"),bot=eb?eb.getBoundingClientRect().top+window.scrollY-18:h*.36;
      bot=Math.max(180,Math.min(bot,h*.5));var top=78,hh=Math.min(w*.9,(bot-top)/.56);
      return {mob:true,side:side,cw:cw,U:bot,hh:hh,kx:w*.5,ky:(top+bot)/2+2,tilt:1.25}}
    var hh=Math.min(h*.74,cw*.46);
    return {mob:false,side:side,cw:cw,U:h,hh:hh,kx:side+cw*.71,ky:Math.max(h*.55,96+hh*.5*.95),tilt:.34}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(gl)gl.viewport(0,0,cv.width,cv.height);if(!running)frame(true)}
  /* R = Rz(tilt) * Rx(pitch) * Ry(spin), column-major */
  function mat(spin,pitch,tilt){
    function mul(a,b){var o=new Array(9);for(var i=0;i<3;i++)for(var j=0;j<3;j++){o[i*3+j]=a[i*3]*b[j]+a[i*3+1]*b[3+j]+a[i*3+2]*b[6+j]}return o}
    var cy=Math.cos(spin),sy=Math.sin(spin),cp=Math.cos(pitch),sp=Math.sin(pitch),cz=Math.cos(tilt),sz=Math.sin(tilt);
    var Ry=[cy,0,sy, 0,1,0, -sy,0,cy],Rx=[1,0,0, 0,cp,-sp, 0,sp,cp],Rz=[cz,-sz,0, sz,cz,0, 0,0,1];
    var m=mul(Rz,mul(Rx,Ry));/* row-major m; WebGL wants column-major */
    return new Float32Array([m[0],m[3],m[6],0, m[1],m[4],m[7],0, m[2],m[5],m[8],0, 0,0,0,1])}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!gl)return;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;var e=sm(IN.v);
    cv.style.opacity=shown?String(.55+.45*dim):"";
    gl.clearColor(BG[0],BG[1],BG[2],1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    if(!ok||!G)return;
    var spin=t*.16+(1-e)*.9,pitch=.12;
    gl.uniformMatrix4fv(U.M,false,mat(spin,pitch,G.tilt));
    var D=3.2,f=G.hh/h*2*D/1.0;
    gl.uniform4f(U.Q,f*h/w,f,D,D);
    var sy=G.mob?(window.scrollY||0):SP.v*h*.06;var ox=(G.kx/w)*2-1,oy=1-(G.ky-sy)/h*2;
    gl.uniform2f(U.O,ox,oy);
    gl.uniform3f(U.bg,BG[0],BG[1],BG[2]);gl.uniform1f(U.A,e);gl.uniform1f(U.DPR,dpr);
    gl.uniform1f(U.PH,RM?.1:(-.6+((t/11)%1)*1.2));
    if(G.mob)gl.uniform4f(U.FD,1,h-G.U+sy-10,h-G.U+sy+16,0);else gl.uniform4f(U.FD,0,0,1,0);
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

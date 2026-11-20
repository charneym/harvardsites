/* ================= HERO FIELD: a train of machined steel gears turning slowly in a cool navy light. Gears have been GarMark's
   own image for years (the banner of their site); here they are rendered as real, precision-cut parts: involute-style teeth,
   lathe-turned faces, recessed webs with lightening holes, bored hubs with keyways, a fixed key light from the upper right
   that streaks across the turned metal as the parts rotate, and a soft, out-of-focus gear behind for depth. The teeth mesh
   exactly (shared module, phase-locked). It animates on its own; no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,BG=null,GR=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function off(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* layout: on desktop the train sits right of the text column, the big gear cropped by the bottom edge;
     on phones it sits in the upper band, clear of the text below (CW) */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var m=mob?Math.min(w*.0158,h*.0084):Math.min(h*.0172,cw*.0128);
    var A={N:44,x:mob?w*.7:side+cw*.79,y:mob?h*.36:h*.86};
    return {mob:mob,side:side,cw:cw,m:m,A:A};
  }
  /* tooth outline: root circle, convex flanks narrowing toward the tip (involute-like), flat tip */
  function gearPath(g,N,m,cx,cy){
    var rp=m*N/2,ra=rp+m,rr=rp-1.25*m,p=2*Math.PI/N,hwR=.31*p,hwP=.25*p,hwA=.16*p;
    function hw(r){var u=(r-rr)/(ra-rr);/* quadratic through (0,hwR) (.556,hwP) (1,hwA) */var u1=(rp-rr)/(ra-rr);
      var a=((hwA-hwR)-(hwP-hwR)/u1)/(1-u1),b=(hwP-hwR)/u1-a*u1;return hwR+b*u+a*u*u}
    g.beginPath();
    for(var k=0;k<N;k++){var a0=k*p;
      var s0=a0-.5*p;g[k?"lineTo":"moveTo"](cx+rr*Math.cos(s0),cy+rr*Math.sin(s0));
      for(var i=0;i<=6;i++){var r=rr+(ra-rr)*i/6,a=a0-hw(r);g.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a))}
      g.arc(cx,cy,ra,a0-hwA,a0+hwA);
      for(i=6;i>=0;i--){r=rr+(ra-rr)*i/6;a=a0+hw(r);g.lineTo(cx+r*Math.cos(a),cy+r*Math.sin(a))}
      g.arc(cx,cy,rr,a0+hwR,a0+.5*p)}
    g.closePath();
    return {rp:rp,ra:ra,rr:rr};
  }
  function ring(g,cx,cy,r){g.moveTo(cx+r,cy);g.arc(cx,cy,r,0,Math.PI*2)}
  /* one gear, lit neutrally (lighting is applied per frame in world space) */
  function gearSprite(N,m,holes,seed,tone){
    var rp=m*N/2,ra=rp+m,pad=Math.max(4,m*2),S=2*(ra+pad),A=off(S,S),g=A[1],cx=S/2,cy=S/2,R=rng(seed),k;
    var P=gearPath(g,N,m,cx,cy);
    /* base metal */
    var base=g.createRadialGradient(cx,cy,0,cx,cy,ra);base.addColorStop(0,tone[0]);base.addColorStop(1,tone[1]);
    g.fillStyle=base;g.fill();
    g.save();g.clip();
    /* lathe marks: fine concentric rings of varied brightness */
    for(var r=m*.6;r<ra;r+=Math.max(.6,m*.09)){var v=R();g.strokeStyle=v>.5?"rgba(225,235,248,"+(.025+.05*R()).toFixed(3)+")":"rgba(4,12,24,"+(.03+.06*R()).toFixed(3)+")";g.lineWidth=.6+R()*.8;g.beginPath();ring(g,cx,cy,r);g.stroke()}
    /* tooth band: a slightly darker chamfered rim just inside the root */
    var rimO=P.rr-.15*m,rimI=P.rr-1.15*m;
    g.fillStyle="rgba(6,14,26,.16)";g.beginPath();ring(g,cx,cy,P.ra+2);g.moveTo(cx+rimO,cy);g.arc(cx,cy,rimO,0,Math.PI*2,true);g.fill("evenodd");
    /* recessed web between rim and hub */
    var webO=rimI,hubR=Math.max(m*2.2,rp*.3),webI=hubR+m*.7;
    var wg=g.createRadialGradient(cx,cy,webI,cx,cy,webO);wg.addColorStop(0,"rgba(6,14,28,.34)");wg.addColorStop(1,"rgba(6,14,28,.5)");
    g.fillStyle=wg;g.beginPath();ring(g,cx,cy,webO);g.moveTo(cx+webI,cy);g.arc(cx,cy,webI,0,Math.PI*2,true);g.fill("evenodd");
    /* the recess walls: a bright lip on the outer edge, a shadowed lip on the inner edge */
    g.lineWidth=Math.max(1,m*.16);g.strokeStyle="rgba(214,228,244,.32)";g.beginPath();ring(g,cx,cy,webO);g.stroke();
    g.strokeStyle="rgba(2,8,18,.55)";g.lineWidth=Math.max(1,m*.22);g.beginPath();ring(g,cx,cy,webO-m*.18);g.stroke();
    g.strokeStyle="rgba(214,228,244,.28)";g.lineWidth=Math.max(1,m*.14);g.beginPath();ring(g,cx,cy,webI);g.stroke();
    /* hub boss */
    var hb=g.createRadialGradient(cx-hubR*.3,cy-hubR*.3,0,cx,cy,hubR);hb.addColorStop(0,tone[2]);hb.addColorStop(1,tone[0]);
    g.fillStyle=hb;g.beginPath();ring(g,cx,cy,hubR);g.fill();
    for(r=hubR*.25;r<hubR;r+=Math.max(.6,m*.07)){g.strokeStyle="rgba("+(R()>.5?"230,238,250,.06":"4,12,24,.08")+")";g.lineWidth=.7;g.beginPath();ring(g,cx,cy,r);g.stroke()}
    g.strokeStyle="rgba(230,238,250,.35)";g.lineWidth=Math.max(1,m*.12);g.beginPath();ring(g,cx,cy,hubR);g.stroke();
    /* bolt circle on the hub */
    var bc=hubR*.68,bn=N>30?8:6;for(k=0;k<bn;k++){var ba=k/bn*Math.PI*2+.2,bx=cx+bc*Math.cos(ba),by=cy+bc*Math.sin(ba),br=Math.max(1.6,m*.34);
      g.fillStyle="rgba(4,10,20,.6)";g.beginPath();g.arc(bx,by,br,0,Math.PI*2);g.fill();g.fillStyle="rgba(196,212,232,.5)";g.beginPath();g.arc(bx-br*.2,by-br*.2,br*.55,0,Math.PI*2);g.fill()}
    g.restore();
    /* bore and keyway: cut clean through */
    var bore=hubR*.36;g.globalCompositeOperation="destination-out";g.beginPath();g.arc(cx,cy,bore,0,Math.PI*2);g.fill();g.fillRect(cx-bore*.22,cy-bore*1.28,bore*.44,bore*.5);
    /* lightening holes through the web */
    var hr=0,hc=0;if(holes){hc=(webO+webI)/2;hr=Math.min((webO-webI)*.36,hc*Math.sin(Math.PI/holes)*.62);
      g.beginPath();for(k=0;k<holes;k++){var ha=k/holes*Math.PI*2;g.moveTo(cx+hc*Math.cos(ha)+hr,cy+hc*Math.sin(ha));g.arc(cx+hc*Math.cos(ha),cy+hc*Math.sin(ha),hr,0,Math.PI*2)}g.fill()}
    g.globalCompositeOperation="source-over";
    /* bevelled edges of bore and holes */
    g.lineWidth=Math.max(1,m*.2);g.strokeStyle="rgba(200,216,236,.38)";g.beginPath();ring(g,cx,cy,bore+g.lineWidth/2);g.stroke();
    if(holes){g.beginPath();for(k=0;k<holes;k++){ha=k/holes*Math.PI*2;g.moveTo(cx+hc*Math.cos(ha)+hr+g.lineWidth/2,cy+hc*Math.sin(ha));g.arc(cx+hc*Math.cos(ha),cy+hc*Math.sin(ha),hr+g.lineWidth/2,0,Math.PI*2)}g.stroke()}
    /* the tooth edge itself catches a thin line of light */
    gearPath(g,N,m,cx,cy);g.lineWidth=Math.max(.8,m*.1);g.strokeStyle="rgba(222,234,248,.4)";g.stroke();
    /* silhouette for the cast shadow */
    var St=off(S,S),stg=St[1];gearPath(stg,N,m,cx,cy);stg.fillStyle="#000";stg.fill();
    /* the cast shadow is blurred once here, never per frame */
    var Sh=off(S,S),sg=Sh[1];sg.setTransform(1,0,0,1,0,0);sg.filter="blur("+Math.round(m*1.2*dpr)+"px)";sg.drawImage(St[0],0,0);
    var Sd=off(S,S),sd=Sd[1];gearPath(sd,N,m,cx,cy);sd.fillStyle="#0e1f35";sd.fill();sd.lineWidth=Math.max(.8,m*.08);sd.strokeStyle="rgba(150,178,212,.22)";sd.stroke();
    return {cv:A[0],sh:Sh[0],sd:Sd[0],S:S,N:N,m:m,rp:rp,ra:ra};
  }
  function build(){
    GR=[];var A=G.A,m=G.m,mob=G.mob;
    /* the train: the big gear drives; a mid gear meshes up and to the left; a small gear meshes off the mid gear to the right */
    var tone=["#4d6b8f","#203a5c","#93afd2"],toneD=["#3c5878","#182f4c","#7896bc"];
    var defs=mob?[[44,A,null,0,6,tone],[24,null,0,-2.42,5,tone],[14,null,1,-.5,0,toneD]]
               :[[44,A,null,0,6,tone],[24,null,0,-2.2,5,tone],[14,null,1,-.38,0,toneD]];
    defs.forEach(function(d,i){var sp=gearSprite(d[0],m,d[4],11+i*7,d[5]);var o={sp:sp,N:d[0],x:0,y:0,par:d[2],phi:d[3]};
      if(d[1]){o.x=d[1].x;o.y=d[1].y}else{var P=GR[d[2]],dist=(P.N+o.N)*m/2;o.x=P.x+dist*Math.cos(o.phi);o.y=P.y+dist*Math.sin(o.phi)}GR.push(o)});
    /* a large gear far behind, out of focus */
    var bsp=gearSprite(36,m*(mob?1.5:1.7),6,97,["#2a4566","#13263f","#4d6c92"]);
    var Bc=off(bsp.S,bsp.S);Bc[1].setTransform(1,0,0,1,0,0);Bc[1].filter="blur("+Math.round((mob?5:9)*dpr)+"px)";Bc[1].drawImage(bsp.cv,0,0);
    BG={cv:Bc[0],S:bsp.S,x:mob?w*.08:w*.99,y:mob?h*.02:h*.04,a:.42};
    /* backdrop: navy field with a cool key light from the upper right, and a little grain */
    var B=off(w,h),g=B[1];
    var bg=g.createLinearGradient(0,0,0,h);bg.addColorStop(0,"#0b1c31");bg.addColorStop(1,"#071322");g.fillStyle=bg;g.fillRect(0,0,w,h);
    var kx=mob?w*.85:G.side+G.cw*.9,ky=mob?h*.02:h*.1,kl=g.createRadialGradient(kx,ky,0,kx,ky,Math.max(w,h)*.8);
    kl.addColorStop(0,"rgba(130,170,218,.5)");kl.addColorStop(.35,"rgba(52,92,142,.26)");kl.addColorStop(1,"rgba(10,26,46,0)");g.fillStyle=kl;g.fillRect(0,0,w,h);
    var R=rng(5),n=Math.round(w*h/900);for(var i=0;i<n;i++){g.fillStyle=R()>.5?"rgba(255,255,255,.025)":"rgba(0,0,0,.05)";g.fillRect(R()*w,R()*h,1,1)}
    BG.back=B[0];
    G.L=[kx,ky];
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();
    T=off(Math.ceil(GR[0].sp.S)+2,Math.ceil(GR[0].sp.S)+2);if(!running)frame(true)}
  var T=null;
  /* angles: gear 0 turns slowly; each driven gear is phase-locked to its parent so the teeth interleave */
  function angles(t){var th=[];GR.forEach(function(o,i){if(o.par===null){th.push(t*.05+SP.v*.35);return}var P=GR[o.par],tp=th[o.par];
    th.push(o.phi+Math.PI-Math.PI/o.N-(tp-o.phi)*P.N/o.N)});return th}
  function drawGear(o,th,e){
    var sp=o.sp,S=sp.S,tg=T[1],tc=T[0],half=S/2;
    /* cast shadow, offset away from the key light */
    c.save();c.globalAlpha=e*.55;c.translate(o.x-G.m*.9,o.y+G.m*1.4);c.rotate(th);c.drawImage(sp.sh,-half,-half,S,S);c.restore();
    /* the part's thickness: its side wall, seen below and left of the face */
    var tx=-G.m*.32,ty=G.m*.5;for(var q=3;q>=1;q--){c.save();c.globalAlpha=e;c.translate(o.x+tx*q/3,o.y+ty*q/3);c.rotate(th);c.drawImage(sp.sd,-half,-half,S,S);c.restore()}
    /* the part, then world-fixed lighting laid over it (source-atop keeps it on the metal) */
    tg.setTransform(1,0,0,1,0,0);tg.clearRect(0,0,tc.width,tc.height);tg.setTransform(dpr,0,0,dpr,0,0);
    tg.save();tg.translate(half,half);tg.rotate(th);tg.drawImage(sp.cv,-half,-half,S,S);tg.restore();
    tg.globalCompositeOperation="source-atop";
    var ang=Math.atan2(G.L[1]-o.y,G.L[0]-o.x);
    var lin=tg.createLinearGradient(half+Math.cos(ang)*half,half+Math.sin(ang)*half,half-Math.cos(ang)*half,half-Math.sin(ang)*half);
    lin.addColorStop(0,"rgba(200,220,246,.34)");lin.addColorStop(.42,"rgba(120,150,190,0)");lin.addColorStop(1,"rgba(2,8,18,.62)");tg.fillStyle=lin;tg.fillRect(0,0,S,S);
    /* anisotropic sheen of turned metal: a soft bow-tie of light pointing at the lamp */
    if(tg.createConicGradient){var cg=tg.createConicGradient(ang,half,half);
      cg.addColorStop(0,"rgba(230,240,252,.42)");cg.addColorStop(.05,"rgba(226,238,252,.08)");cg.addColorStop(.12,"rgba(226,238,252,0)");
      cg.addColorStop(.38,"rgba(226,238,252,0)");cg.addColorStop(.5,"rgba(170,196,230,.12)");cg.addColorStop(.62,"rgba(226,238,252,0)");
      cg.addColorStop(.88,"rgba(226,238,252,0)");cg.addColorStop(.95,"rgba(226,238,252,.08)");cg.addColorStop(1,"rgba(230,240,252,.42)");
      tg.fillStyle=cg;tg.fillRect(0,0,S,S)}
    tg.globalCompositeOperation="source-over";
    c.globalAlpha=e;c.drawImage(tc,0,0,tc.width,tc.height,o.x-half,o.y-half,tc.width/dpr,tc.height/dpr);
  }
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?6:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;c.drawImage(BG.back,0,0);
    c.setTransform(dpr,0,0,dpr,0,0);
    /* the soft gear behind, turning the other way */
    c.save();c.globalAlpha=e*BG.a;c.translate(BG.x,BG.y);c.rotate(-t*.03-SP.v*.2);c.drawImage(BG.cv,-BG.S/2,-BG.S/2,BG.S,BG.S);c.restore();
    var th=angles(t);for(var i=GR.length-1;i>=0;i--)drawGear(GR[i],th[i],e);
    /* a faint haze in the key light, drifting */
    var hz=c.createRadialGradient(G.L[0],G.L[1],0,G.L[0],G.L[1],Math.max(w,h)*.55);hz.addColorStop(0,"rgba(150,186,228,"+(.1+.03*Math.sin(t*.3)).toFixed(3)+")");hz.addColorStop(1,"rgba(150,186,228,0)");
    c.globalAlpha=e;c.fillStyle=hz;c.fillRect(0,0,w,h);
    /* text side kept calm: a scrim on the left (desktop) or a fade under the art (phones) */
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(6,16,30,.82)");lv.addColorStop(.55,"rgba(6,16,30,.5)");lv.addColorStop(1,"rgba(6,16,30,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    else{var tf=c.createLinearGradient(0,0,0,h*.13);tf.addColorStop(0,"rgba(8,19,34,.96)");tf.addColorStop(.6,"rgba(8,19,34,.7)");tf.addColorStop(1,"rgba(8,19,34,0)");c.fillStyle=tf;c.fillRect(0,0,w,h*.13);
      var fv=c.createLinearGradient(0,h*.4,0,h*.56);fv.addColorStop(0,"rgba(8,19,34,0)");fv.addColorStop(1,"rgba(8,19,34,.94)");c.fillStyle=fv;c.fillRect(0,h*.4,w,h*.6)}
    var vg=c.createRadialGradient(w*.55,h*.5,Math.min(w,h)*.35,w*.55,h*.5,Math.max(w,h)*.85);vg.addColorStop(0,"rgba(4,10,20,0)");vg.addColorStop(1,"rgba(4,10,20,.5)");c.fillStyle=vg;c.fillRect(0,0,w,h);
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*60)/60},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[GR[1].x,GR[1].y]:[w/2,h/2]}};
})();

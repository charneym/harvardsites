/* ================= HERO FIELD: first light over the Georgia Piedmont, and a red dog on the ridge. Red Dog Equity is an
   Atlanta firm named for the "Red Dog" business leader of Tom Wolfe's A Man in Full (a Georgia novel). Their own standing
   dog (traced from their logo) stands on a granite rise, backlit by a low sun; pine-topped ridges recede in haze, mist
   drifts in the hollows and the grass moves. It animates on its own (mist, grass, light), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,RID=[],oFg=null,GR=[],BIRD=[],MOTE=[];
  var PB=new Path2D(DOG_B),PL=new Path2D(DOG_L);
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.37,w*.86):h;
    var hz=mob?U*.6:h*.6;
    var S=mob?U*.5:Math.min(h*.4,cw*.3);
    var cx=mob?w*.72:side+cw*.76;
    var yb=mob?U*.85:h*.84;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,cx:cx,yb:yb,sun:mob?w*.3:side+cw*.5};
  }
  function mk(){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.round(h*dpr);var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function ridgeY(R,x,base,amp){return base-amp*(.55+.25*Math.sin(x*R[0]+R[1])+.15*Math.sin(x*R[2]+R[3])+.07*Math.sin(x*R[4]+R[5]))}
  /* a loblolly pine: tall straight trunk, the crown a ragged cluster of tufts at the top */
  function pine(g,x,base,ht,col,R){
    g.strokeStyle=col;g.lineWidth=Math.max(.6,ht*.022);g.beginPath();g.moveTo(x,base);g.lineTo(x+ht*.01,base-ht*.86);g.stroke();
    g.fillStyle=col;var n=7+Math.floor(R()*6),a0=g.globalAlpha;
    for(var i=0;i<n;i++){var cy=base-ht*(.62+R()*.36),cx=x+(R()-.5)*ht*.26,rx=ht*(.025+R()*.045),ry=rx*(.4+R()*.3);
      g.globalAlpha=a0*(.55+R()*.45);g.beginPath();g.ellipse(cx,cy,rx,ry,(R()-.5)*.8,0,Math.PI*2);g.fill()}
    g.globalAlpha=a0;
    for(var j=0;j<3;j++){var by=base-ht*(.55+R()*.3),dir=R()<.5?-1:1;g.lineWidth=Math.max(.5,ht*.01);g.beginPath();g.moveTo(x,by);g.lineTo(x+dir*ht*(.1+R()*.08),by-ht*.05);g.stroke()}
  }
  function build(){
    var hz=G.hz,U=G.U,mob=G.mob,A=mk(),g=A[1];oSky=A[0];
    /* the sky: their deep oxblood overhead, burning to ember and a pale gold band at the horizon */
    var sky=g.createLinearGradient(0,0,0,hz);
    sky.addColorStop(0,"#120708");sky.addColorStop(.3,"#2a0f13");sky.addColorStop(.55,"#5a1a20");sky.addColorStop(.74,"#9a3a2e");sky.addColorStop(.88,"#d27a4a");sky.addColorStop(1,"#f2c48a");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    g.fillStyle="#f2c48a";g.fillRect(0,hz,w,h-hz);
    var sr=Math.max(w*.5,U*.9),sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,sr);
    sg.addColorStop(0,"rgba(255,232,186,.85)");sg.addColorStop(.12,"rgba(255,196,130,.45)");sg.addColorStop(.4,"rgba(236,120,80,.16)");sg.addColorStop(1,"rgba(200,80,60,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.62);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(0,0,w,h*2);g.restore();
    /* long thin clouds lit from beneath */
    var Rc=rng(7);for(var i=0;i<14;i++){var cy=hz*(.12+Rc()*.7),cx=Rc()*w,cwid=w*(.08+Rc()*.2),ch=U*(.006+Rc()*.012),lit=cy>hz*.5,a=lit?.18+Rc()*.16:.1+Rc()*.1;
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);
      cg.addColorStop(0,lit?"rgba(250,170,120,"+a.toFixed(3)+")":"rgba(120,50,56,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(120,50,56,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* the sun's disc just above the farthest ridge */
    var bl=g.createRadialGradient(G.sun,hz+U*.01,0,G.sun,hz+U*.01,U*.09);bl.addColorStop(0,"rgba(255,238,206,.9)");bl.addColorStop(.35,"rgba(255,226,170,.5)");bl.addColorStop(1,"rgba(255,200,140,0)");g.fillStyle=bl;g.fillRect(G.sun-U*.1,hz-U*.1,U*.2,U*.2);
    /* receding Piedmont ridges: each layer warmer and paler with distance, pine-topped */
    RID=[];var L=mob?4:5,cols=[[226,150,112],[176,92,80],[118,52,52],[70,28,32],[38,15,18]];
    for(var k=0;k<L;k++){var B=mk(),bg=B[1],R=rng(31+k*17),rr=[.002+R()*.004,R()*6,.009+R()*.01,R()*6,.03+R()*.02,R()*6];
      var base=hz+(k+.5)*(U*(mob?.07:.055)),amp=U*(.03+k*.012),col=cols[k+(5-L)];
      var cs="rgb("+col.join(",")+")";bg.fillStyle=cs;bg.beginPath();bg.moveTo(-4,h);
      for(var x=-4;x<=w+4;x+=3)bg.lineTo(x,ridgeY(rr,x,base,amp));bg.lineTo(w+4,h);bg.closePath();bg.fill();
      /* pines along the crest, smaller and hazier with distance */
      var Rp=rng(97+k*13),ph=U*(.02+k*.016),step=Math.max(5,ph*.32);
      for(var px=-10;px<w+10;px+=step*(.5+Rp())){if(Rp()<.28)continue;var py=ridgeY(rr,px,base,amp)+ph*.08;pine(bg,px,py,ph*(.6+Rp()*.6),cs,Rp)}
      /* atmospheric light raking the crest on the sun side */
      var hg=bg.createLinearGradient(0,base-amp*1.4,0,base+U*.08);hg.addColorStop(0,"rgba(255,200,150,"+(.12-k*.02).toFixed(3)+")");hg.addColorStop(1,"rgba(255,200,150,0)");
      bg.globalCompositeOperation="source-atop";bg.fillStyle=hg;bg.fillRect(0,0,w,h);bg.globalCompositeOperation="source-over";
      var cvL=B[0];if(k<L-2){var Bb=mk();Bb[1].setTransform(1,0,0,1,0,0);Bb[1].filter="blur("+((1.2-k*.35)*dpr).toFixed(2)+"px)";Bb[1].drawImage(B[0],0,0);cvL=Bb[0]}
      RID.push({c:cvL,base:base})}
    /* foreground: a granite rise under the dog, dark, its edge rim-lit */
    var F=mk(),fg=F[1];oFg=F[0];var S=G.S,yb=G.yb,X0=G.cx;
    fg.fillStyle="#0d0607";fg.beginPath();fg.moveTo(-4,h);fg.lineTo(-4,yb+S*.22);
    var Rf=rng(5),pts=[];for(var x2=-4;x2<=w+4;x2+=6){var d=(x2-X0)/(S*1.4),ry=yb+S*.2-S*.2*Math.exp(-d*d)+Math.sin(x2*.011)*S*.025+(Rf()-.5)*1.5;pts.push([x2,ry]);fg.lineTo(x2,ry)}
    fg.lineTo(w+4,h);fg.closePath();fg.fill();
    fg.strokeStyle="rgba(255,190,130,.38)";fg.lineWidth=1.2;fg.beginPath();pts.forEach(function(p,i){if(p[0]<X0+S*.3){i?fg.lineTo(p[0],p[1]):fg.moveTo(p[0],p[1])}});fg.stroke();
    /* granite slabs in the rise: pale, rounded, catching a little light */
    var Rs=rng(41);for(var q=0;q<7;q++){var gx=X0+(Rs()-.5)*S*1.6,gy=yb+S*(.05+Rs()*.12),gw=S*(.12+Rs()*.2);
      var gg=fg.createLinearGradient(gx-gw,gy-gw*.2,gx+gw*.4,gy+gw*.2);gg.addColorStop(0,"rgba(120,70,62,.55)");gg.addColorStop(1,"rgba(20,10,12,0)");fg.fillStyle=gg;fg.beginPath();fg.ellipse(gx,gy,gw,gw*.16,-.05,Math.PI,0);fg.fill()}
    /* the dog, from their own mark: dark against the light, modelled in their red, rim-lit on the sun side */
    var k2=S/356,dx=X0-100.5*k2,dy=yb-356*k2;
    fg.save();fg.translate(dx,dy);fg.scale(k2,k2);
    fg.save();fg.translate(-1.6/k2*.35,-.6/k2*.35);fg.fillStyle="rgba(255,196,140,.75)";fg.fill(PB);fg.restore();
    fg.fillStyle="#1a0a0c";fg.fill(PB);
    fg.filter="blur("+(.9/k2).toFixed(2)+"px)";fg.globalAlpha=.34;fg.fillStyle="#c0283a";fg.fill(PL);fg.globalAlpha=1;fg.filter="none";
    var dg=fg.createLinearGradient(0,0,201,0);dg.addColorStop(0,"rgba(255,170,120,.18)");dg.addColorStop(.5,"rgba(255,170,120,0)");fg.globalCompositeOperation="source-atop";fg.fillStyle=dg;fg.fillRect(0,0,201,356);
    fg.restore();
    /* contact shadow under the paws */
    var sh=fg.createRadialGradient(X0,yb,0,X0,yb,S*.4);sh.addColorStop(0,"rgba(0,0,0,.55)");sh.addColorStop(1,"rgba(0,0,0,0)");fg.save();fg.translate(X0,yb);fg.scale(1,.1);fg.translate(-X0,-yb);fg.fillStyle=sh;fg.fillRect(X0-S*.5,yb-S*.5,S,S);fg.restore();
    G.dogTop=dy;G.pts=pts;
    /* grass blades along the rise, drawn live so they sway */
    GR=[];var Rg=rng(23);for(var b=0;b<(mob?90:220);b++){var gx2=Rg()*w,idx=Math.max(0,Math.min(pts.length-1,Math.round((gx2+4)/6)));
      if(Math.abs(gx2-X0)<S*.2&&Rg()<.7)continue;GR.push([gx2,pts[idx][1]+2,S*(.03+Rg()*.07),Rg()*6.28,(Rg()-.5)*.5])}
    BIRD=[];var Rb=rng(29);for(var bb=0;bb<(mob?2:4);bb++)BIRD.push([Rb(),.22+Rb()*.3,.6+Rb()*.6,Rb()*6.28]);
    MOTE=[];var Rm=rng(53);for(var m=0;m<(mob?24:60);m++)MOTE.push([Rm(),Rm(),Rm()*6.28,.4+Rm()]);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function mist(y,amp,a,t,sp,seed){var x0=((t*sp+seed)%1)*w;
    for(var i=-1;i<3;i++){var cx=x0+i*w*.5,g2=c.createRadialGradient(cx,y,0,cx,y,w*.32);g2.addColorStop(0,"rgba(246,206,170,"+a.toFixed(3)+")");g2.addColorStop(1,"rgba(246,206,170,0)");
      c.save();c.translate(cx,y);c.scale(1,amp/(w*.32));c.translate(-cx,-y);c.fillStyle=g2;c.fillRect(cx-w*.32,y-w*.32,w*.64,w*.64);c.restore()}}
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var U=G.U,S=G.S;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);
    for(var k=0;k<RID.length;k++){c.drawImage(RID[k].c,0,0);c.setTransform(dpr,0,0,dpr,0,0);
      if(k<RID.length-1)mist(RID[k].base+U*.03,U*(.02+k*.006),.16-k*.02,t,.004+k*.002,k*.37);c.setTransform(1,0,0,1,0,0)}
    c.setTransform(dpr,0,0,dpr,0,0);
    /* slow shafts of light from the sun */
    c.globalCompositeOperation="lighter";
    for(var r=0;r<5;r++){var ang=-2.6+r*.3+Math.sin(t*.05+r)*.03,len=U*.9,a=(.012+.008*Math.sin(t*.3+r*1.7));
      c.save();c.translate(G.sun,G.hz);c.rotate(ang);var lg=c.createLinearGradient(0,0,len,0);lg.addColorStop(0,"rgba(255,210,160,"+a.toFixed(3)+")");lg.addColorStop(1,"rgba(255,210,160,0)");c.fillStyle=lg;
      c.beginPath();c.moveTo(0,0);c.lineTo(len,-len*.03);c.lineTo(len,len*.03);c.closePath();c.fill();c.restore()}
    for(var q=0;q<MOTE.length;q++){var M=MOTE[q],mx=((M[0]+t*.004*M[3])%1)*w,my=G.hz*(.4+M[1]*.9)+Math.sin(t*.3+M[2])*8,ma=(.5+.5*Math.sin(t*M[3]+M[2]))*.35;
      c.fillStyle="rgba(255,226,180,"+ma.toFixed(3)+")";c.fillRect(mx,my,1.4,1.4)}
    c.globalCompositeOperation="source-over";
    c.setTransform(1,0,0,1,0,0);c.drawImage(oFg,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* grass sways in the morning air */
    c.lineCap="round";
    for(var gi=0;gi<GR.length;gi++){var B=GR[gi],sw=Math.sin(t*1.1+B[3]+B[0]*.004)*B[2]*.18+B[4]*B[2],lit=B[0]<G.cx;
      c.strokeStyle=lit?"rgba(150,70,52,.9)":"rgba(40,16,18,.95)";c.lineWidth=1;c.beginPath();c.moveTo(B[0],B[1]);c.quadraticCurveTo(B[0]+sw*.4,B[1]-B[2]*.6,B[0]+sw,B[1]-B[2]);c.stroke()}
    c.strokeStyle="rgba(40,14,16,.7)";c.lineWidth=1.1;c.beginPath();
    for(var bi=0;bi<BIRD.length;bi++){var Bd=BIRD[bi],bx=((Bd[0]+t*.008*Bd[2])%1)*w,by=G.hz*Bd[1]+Math.sin(t*.4+Bd[3])*U*.01,fl=Math.sin(t*3*Bd[2]+Bd[3])*3,bs=Math.max(4,U*.008);
      c.moveTo(bx-bs,by-fl*.4);c.quadraticCurveTo(bx-bs*.4,by-bs*.5-fl,bx,by);c.quadraticCurveTo(bx+bs*.4,by-bs*.5-fl,bx+bs,by-fl*.4)}c.stroke();
    /* a scrim behind the copy: left on desktop, the lower band on phones */
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.55,0);lv.addColorStop(0,"rgba(14,6,8,.66)");lv.addColorStop(1,"rgba(14,6,8,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    else{var mb=c.createLinearGradient(0,U*.9,0,U*1.04);mb.addColorStop(0,"rgba(13,6,7,0)");mb.addColorStop(1,"rgba(13,6,7,1)");c.fillStyle=mb;c.fillRect(0,U*.9,w,h);c.fillStyle="#0d0607";c.fillRect(0,U*1.04-1,w,h)}
    var vg=c.createLinearGradient(0,h*.82,0,h);vg.addColorStop(0,"rgba(13,6,7,0)");vg.addColorStop(1,"rgba(13,6,7,.6)");c.fillStyle=vg;c.fillRect(0,h*.82,w,h*.18);
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.yb-G.S*.45]:[w/2,h/2]}};
})();

/* ================= HERO FIELD: a rail line at dusk. Station Partners takes its name, mark and line ("Direction.
   Destination. Defined.") from the railway, so the hero is the real thing, painted: a single track running out across a
   valley floor to the wooded ridges of the New Jersey Highlands, the steel catching the last of the light, a line of
   telegraph poles beside it and a colour-light signal standing clear. The sky runs from the logo's navy to a pale band of
   afterglow. It moves on its own (clouds, mist, the signal lamp, distant lights), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oCl=null,oLand=null,grain=null,LT=[],MI=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.44,w*.92):h;
    var hz=mob?U*.6:h*.6;
    var hb=mob?U*1.06:h;                 /* the ground meets the bottom of the art band here */
    var vx=mob?w*.62:side+cw*.73;        /* where the line runs out to */
    var bx=mob?w*.7:side+cw*.7;          /* where it leaves the frame, nearest us */
    var f=hb-hz;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,hb:hb,vx:vx,bx:bx,f:f,S:mob?U:h,bend:(mob?w*.16:cw*.1)};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.round(W*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* perspective: depth d >= 1 (1 = the bottom edge); X lateral in track-gauge units, Y height above the rail head */
  function cxAt(d){return G.vx+(G.bx-G.vx)/d+G.bend*(1-1/d)*(1/d)*2.2}
  function P(d,X,Y){return [cxAt(d)+X*G.f*.34/d,G.hz+G.f*(1-(Y||0)*.34)/d]}
  function build(){
    var hz=G.hz,S=G.S,W=w,H=G.mob?G.hb+4:h;
    /* ---- sky ---- */
    var A=mk(W,hz+6),g=A[1];oSky=A[0];
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#05152a");sky.addColorStop(.3,"#0c2a48");sky.addColorStop(.56,"#2b4b6e");sky.addColorStop(.76,"#6f7f97");sky.addColorStop(.9,"#c3a88f");sky.addColorStop(1,"#e7c49a");
    g.fillStyle=sky;g.fillRect(0,0,W,hz+6);
    var sg=g.createRadialGradient(G.vx,hz,0,G.vx,hz,Math.max(W*.5,S*.9));sg.addColorStop(0,"rgba(255,214,160,.7)");sg.addColorStop(.25,"rgba(236,178,134,.25)");sg.addColorStop(1,"rgba(200,150,140,0)");
    g.save();g.translate(G.vx,hz);g.scale(1,.42);g.translate(-G.vx,-hz);g.fillStyle=sg;g.fillRect(0,-hz,W,hz*3);g.restore();
    /* ---- clouds, on a wider layer that drifts ---- */
    var B=mk(W*1.6,hz),cg=B[1];oCl=B[0];var Rc=rng(7);
    for(var i=0;i<40;i++){var cy=hz*(.1+Rc()*.8),cx=Rc()*W*1.6,cwid=W*(.08+Rc()*.24),ch=S*(.006+Rc()*.014),low=cy/hz,a=.07+Rc()*.12;
      cg.save();cg.translate(cx,cy);cg.scale(1,ch/cwid);var gr=cg.createRadialGradient(0,0,0,0,0,cwid);
      var col=low>.62?"255,206,168":low>.4?"150,160,186":"70,96,130";gr.addColorStop(0,"rgba("+col+","+a.toFixed(3)+")");gr.addColorStop(.6,"rgba("+col+","+(a*.45).toFixed(3)+")");gr.addColorStop(1,"rgba("+col+",0)");
      cg.fillStyle=gr;cg.beginPath();cg.arc(0,0,cwid,0,Math.PI*2);cg.fill();cg.restore()}
    /* ---- land: ridges, valley floor, the line, poles, signal ---- */
    var L=mk(W,H),lg=L[1];oLand=L[0];land(lg,H);
    /* lights in the valley, and mist bands */
    LT=[];var Rl=rng(23);for(var q=0;q<(G.mob?10:22);q++){var side=Rl()<.5?-1:1,dx=side*(S*.03+Rl()*W*.22);LT.push([G.vx+dx,hz-1-Rl()*S*.008,Rl()*6.28,.4+Rl()*.6])}
    MI=[];var Rm=rng(31);for(var m=0;m<5;m++)MI.push([Rm(),hz-S*(.005+Rm()*.04),W*(.25+Rm()*.3),S*(.008+Rm()*.012),.6+Rm()*.8]);
    var N=mk(256,256),ng=N[1],id=ng.createImageData(Math.round(256*dpr),Math.round(256*dpr)),Rn=rng(41);
    for(var k=0;k<id.data.length;k+=4){var v=Rn()*255|0;id.data[k]=id.data[k+1]=id.data[k+2]=v;id.data[k+3]=7}ng.putImageData(id,0,0);grain=N[0];
  }
  function ridge(g,base,amp,rough,col,seed,tree){
    var Rr=rng(seed),y=0,v=0,y2=0;g.fillStyle=col;g.beginPath();g.moveTo(-10,G.hz+2);
    var ph=Rr()*6.28,ph2=Rr()*6.28,ph3=Rr()*6.28;
    for(var x=-10;x<=w+10;x+=2){v+=(Rr()-.5)*rough*.25;v*=.985;y+=(v-y)*.03;
      var big=Math.sin(x/w*2.3+ph)*.45+Math.sin(x/w*5.1+ph2)*.2+Math.sin(x/w*11+ph3)*.06;var tt=tree?(Rr()-.5)*tree:0;y2+=(tt-y2)*.5;
      g.lineTo(x,base-amp*(.8+big+y*.6)-Math.abs(y2))}
    g.lineTo(w+10,G.hz+2);g.closePath();g.fill();
  }
  function land(g,H){
    var hz=G.hz,S=G.S,f=G.f,i;
    /* three ridges of the Highlands, cooler and paler with distance */
    ridge(g,hz,S*.06,.5,"rgba(104,120,146,.72)",3,0);
    ridge(g,hz,S*.036,.6,"rgba(58,76,102,.9)",5,S*.004);
    ridge(g,hz+1,S*.018,.8,"#24364c",11,S*.006);
    /* a low haze where the ridges meet the floor, lit from the afterglow */
    var hzg=g.createLinearGradient(0,hz-S*.05,0,hz+S*.01);hzg.addColorStop(0,"rgba(214,180,150,0)");hzg.addColorStop(.8,"rgba(214,180,150,.22)");hzg.addColorStop(1,"rgba(214,180,150,0)");g.fillStyle=hzg;g.fillRect(0,hz-S*.05,w,S*.06);
    /* the valley floor: meadow going dark toward us */
    var fg=g.createLinearGradient(0,hz,0,H);fg.addColorStop(0,"#3c4a52");fg.addColorStop(.05,"#26343c");fg.addColorStop(.3,"#16242e");fg.addColorStop(1,"#0a1622");
    g.fillStyle=fg;g.fillRect(0,hz,w,H-hz);
    /* afterglow lying on the near fields around the line */
    var ag=g.createRadialGradient(G.vx,hz,0,G.vx,hz,Math.max(w*.45,S*.8));ag.addColorStop(0,"rgba(214,170,130,.26)");ag.addColorStop(.4,"rgba(150,120,110,.08)");ag.addColorStop(1,"rgba(120,110,110,0)");
    g.save();g.translate(G.vx,hz);g.scale(1,.35);g.translate(-G.vx,-hz);g.fillStyle=ag;g.fillRect(0,hz,w,(H-hz)*3);g.restore();
    /* meadow texture: short strokes of grass, denser and longer nearer */
    var Rg=rng(13);g.lineWidth=1;
    for(i=0;i<(G.mob?900:2600);i++){var u=Math.pow(Rg(),1.8),y=hz+2+u*(H-hz),x=Rg()*w,len=1+u*u*14,tone=Rg();
      g.strokeStyle=tone<.5?"rgba(70,92,96,"+(.18+u*.2).toFixed(3)+")":"rgba(18,30,38,"+(.3+u*.3).toFixed(3)+")";
      g.beginPath();g.moveTo(x,y);g.lineTo(x+(Rg()-.5)*len*.4,y-len);g.stroke()}
    /* ballast bed */
    var dF=80,steps=[];for(var d=1;d<=dF;d*=1.03)steps.push(d);
    g.beginPath();steps.forEach(function(d,k){var p=P(d,-2.1,0);k?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});
    for(i=steps.length-1;i>=0;i--){var p2=P(steps[i],2.1,0);g.lineTo(p2[0],p2[1])}g.closePath();
    var bg=g.createLinearGradient(0,hz,0,H);bg.addColorStop(0,"#9a8a7c");bg.addColorStop(.06,"#5a5653");bg.addColorStop(.4,"#2e3035");bg.addColorStop(1,"#1b1e24");g.fillStyle=bg;g.fill();
    /* gravel: speckle inside the bed, scaled with depth */
    g.save();g.clip();var Rb=rng(17);
    for(i=0;i<(G.mob?2200:6000);i++){var dd=1+Math.pow(Rb(),2.4)*30,X=(Rb()*2-1)*2.1,pp=P(dd,X,0),r=Math.max(.4,2.4/dd),lt=Rb();
      g.fillStyle=lt<.35?"rgba(206,188,168,"+(.16/Math.sqrt(dd)+.04).toFixed(3)+")":"rgba(8,12,18,"+(.25).toFixed(3)+")";g.fillRect(pp[0],pp[1]+(Rb()-.5)*G.f*.02/dd,r*1.4,r)}
    g.restore();
    /* ties: dark timber, regular in depth */
    for(var dt=1.02;dt<46;dt+=.32*Math.max(1,dt*.04)){var a=P(dt,-1.5,0),b=P(dt,1.5,0),a2=P(dt+.1,-1.5,0),b2=P(dt+.1,1.5,0),fade=Math.min(1,dt/1.5);
      g.fillStyle="rgba(26,22,22,"+(.92*Math.min(1,10/dt+.3)).toFixed(3)+")";g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.lineTo(b2[0],b2[1]);g.lineTo(a2[0],a2[1]);g.closePath();g.fill();
      if(dt<12){g.strokeStyle="rgba(150,128,110,"+(.18/fade).toFixed(3)+")";g.lineWidth=Math.max(.5,1.2/dt);g.beginPath();g.moveTo(a2[0],a2[1]);g.lineTo(b2[0],b2[1]);g.stroke()}}
    /* the rails: dark web, the head catching the sky, brightest out toward the glow */
    [-1,1].forEach(function(sd){
      for(var k=0;k<steps.length-1;k++){var d0=steps[k],d1=steps[k+1],p0=P(d0,sd,0),p1=P(d1,sd,0),q0=P(d0,sd,-.16),lw=Math.max(.6,G.f*.03/d0);
        g.strokeStyle="#15181d";g.lineWidth=lw*1.6;g.beginPath();g.moveTo(q0[0],q0[1]);g.lineTo(p1[0],p1[1]+(q0[1]-p0[1])*d0/d1);g.stroke();
        var far=sm(1-1/d0),gl=(.6+.4*far);
        g.strokeStyle="rgba("+Math.round(150+105*far)+","+Math.round(160+66*far)+","+Math.round(176+12*far)+","+gl.toFixed(3)+")";g.lineWidth=Math.max(.5,lw*.55);
        g.beginPath();g.moveTo(p0[0],p0[1]);g.lineTo(p1[0],p1[1]);g.stroke()}});
    /* telegraph poles on the far side, wires sagging between */
    var tops=[];for(var dp=2.4;dp<60;dp+=2.2*Math.max(1,dp*.08)){var pb=P(dp,-4.6,0),pt=P(dp,-4.6,9.4),pw=Math.max(.6,G.f*.05/dp);
      g.strokeStyle="#0c141d";g.lineWidth=pw;g.beginPath();g.moveTo(pb[0],pb[1]);g.lineTo(pt[0],pt[1]);g.stroke();
      var ca=P(dp,-5.6,8.9),cb=P(dp,-3.6,8.9);g.lineWidth=pw*.7;g.beginPath();g.moveTo(ca[0],ca[1]);g.lineTo(cb[0],cb[1]);g.stroke();
      tops.push([ca,cb,P(dp,-4.6,8.9)])}
    g.strokeStyle="rgba(14,22,32,.75)";g.lineWidth=.8;
    for(i=0;i<tops.length-1;i++)[0,1,2].forEach(function(j){var A2=tops[i][j],B2=tops[i+1][j],sag=Math.abs(A2[0]-B2[0])*.08;g.beginPath();g.moveTo(A2[0],A2[1]);g.quadraticCurveTo((A2[0]+B2[0])/2,(A2[1]+B2[1])/2+sag,B2[0],B2[1]);g.stroke()});
    /* the signal: a mast on the near side, ladder, a two-lamp head */
    var ds=G.mob?2.1:2.5,sb=P(ds,3.2,0),st=P(ds,3.2,8.2),sw=Math.max(1.2,G.f*.07/ds),u=G.f*.34/ds;
    g.strokeStyle="#0b121a";g.lineWidth=sw;g.beginPath();g.moveTo(sb[0],sb[1]);g.lineTo(st[0],st[1]);g.stroke();
    g.lineWidth=Math.max(.6,sw*.3);g.beginPath();g.moveTo(sb[0]+u*.35,sb[1]);g.lineTo(st[0]+u*.35,st[1]+u*.6);
    for(var r2=sb[1]-u*.4;r2>st[1]+u*.8;r2-=u*.32){g.moveTo(sb[0],r2);g.lineTo(sb[0]+u*.35,r2)}g.stroke();
    g.fillStyle="#0b121a";g.fillRect(sb[0]-u*.5,sb[1]-u*.12,u*1.1,u*.16);
    var hx=st[0]-u*.02,hy=st[1]+u*.55,hw=u*.62,hh=u*1.35;G.sig=[hx,hy,hw,hh,u];
    g.beginPath();g.ellipse(hx,hy,hw*.62,hh*.62,0,0,Math.PI*2);g.fillStyle="#070b10";g.fill();
    g.strokeStyle="rgba(150,160,176,.25)";g.lineWidth=Math.max(.5,u*.03);g.stroke();
    [-1,1].forEach(function(k){var ly=hy+k*hh*.26;g.fillStyle="#020406";g.beginPath();g.arc(hx,ly,hw*.24,0,Math.PI*2);g.fill();
      g.strokeStyle="#0b121a";g.lineWidth=Math.max(1,u*.06);g.beginPath();g.arc(hx,ly-hw*.02,hw*.3,Math.PI*1.05,Math.PI*1.95);g.stroke()});
    g.fillStyle="rgba(120,40,36,.55)";g.beginPath();g.arc(hx,hy+hh*.26,hw*.18,0,Math.PI*2);g.fill();
    /* a lineside cabinet at the mast foot */
    var cb2=P(ds+.4,4.4,0);g.fillStyle="#0e161f";g.fillRect(cb2[0]-u*.25,cb2[1]-u*.55,u*.5,u*.55);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,S=G.S;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* clouds drift east very slowly */
    var off=-((t*4)%(w*.6));c.drawImage(oCl,off,0,w*1.6,hz);if(off<-w*.6+w)c.drawImage(oCl,off+w*1.6,0,w*1.6,hz);
    c.drawImage(oLand,0,0,w,G.mob?G.hb+4:h);
    /* mist lying along the foot of the ridges */
    for(var m=0;m<MI.length;m++){var M=MI[m],mx=((M[0]+t*.004*M[4])%1.4-.2)*w,mg=c.createRadialGradient(0,0,0,0,0,M[2]);
      c.save();c.translate(mx,M[1]);c.scale(1,M[3]/M[2]);mg.addColorStop(0,"rgba(196,186,180,.16)");mg.addColorStop(1,"rgba(196,186,180,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,M[2],0,6.29);c.fill();c.restore()}
    /* lights in the valley */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<LT.length;q++){var Q=LT[q],a=(.45+.35*Math.sin(t*.8*Q[3]+Q[2]))*Q[3];c.fillStyle="rgba(255,206,140,"+a.toFixed(3)+")";c.fillRect(Q[0],Q[1],1.6,1.4)}
    /* the signal lamp, clear: a steady green with a slow breath in its halo */
    var sg=G.sig,lx=sg[0],ly=sg[1]-sg[3]*.26,br=.8+.2*Math.sin(t*1.1),R=sg[4]*2.4;
    var hl=c.createRadialGradient(lx,ly,0,lx,ly,R);hl.addColorStop(0,"rgba(150,255,206,"+(.5*br).toFixed(3)+")");hl.addColorStop(.18,"rgba(90,220,170,"+(.18*br).toFixed(3)+")");hl.addColorStop(1,"rgba(60,180,150,0)");
    c.fillStyle=hl;c.fillRect(lx-R,ly-R,R*2,R*2);
    c.fillStyle="rgba(214,255,234,.95)";c.beginPath();c.arc(lx,ly,sg[2]*.17,0,6.29);c.fill();
    /* its green caught on the near rail head */
    var rr=P(G.mob?2.1:2.5,1,0),rg=c.createRadialGradient(rr[0],rr[1],0,rr[0],rr[1],S*.08);rg.addColorStop(0,"rgba(110,230,180,"+(.1*br).toFixed(3)+")");rg.addColorStop(1,"rgba(110,230,180,0)");c.fillStyle=rg;c.fillRect(rr[0]-S*.08,rr[1]-S*.08,S*.16,S*.16);
    c.globalCompositeOperation="source-over";
    /* painterly grain over everything */
    c.globalAlpha=e*.9;c.fillStyle=c.createPattern(grain,"repeat");c.setTransform(1,0,0,1,0,0);c.fillRect(0,0,cv.width,cv.height);c.setTransform(dpr,0,0,dpr,0,0);c.globalAlpha=e;
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.55,0);lv.addColorStop(0,"rgba(4,16,28,.66)");lv.addColorStop(1,"rgba(4,16,28,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(4,16,28,0)");bv.addColorStop(1,"rgba(4,16,28,.5)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3)}
    else{var mv=c.createLinearGradient(0,G.hb*.8,0,G.hb+4);mv.addColorStop(0,"rgba(6,26,44,0)");mv.addColorStop(1,"rgba(6,26,44,1)");c.fillStyle=mv;c.fillRect(0,G.hb*.8,w,G.hb*.2+4);c.fillStyle="#061a2c";c.fillRect(0,G.hb+3,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.vx,G.hz]:[w/2,h/2]}};
})();

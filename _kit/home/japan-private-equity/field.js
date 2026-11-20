/* ================= HERO FIELD: dawn on a quiet river, a vermilion arched wooden bridge crossing it. JPE's own site leads
   with a bridge, and the firm describes its role as the 橋渡し役 between owners and the next management. The scene is a real,
   specific subject: layered ink-wash ridges in morning haze, a low sun, mist moving between the hills, a pine on the near
   bank, and a taiko-style wooden bridge in the brand's red, mirrored in the water. Painted in soft layers (blur, haze,
   grain), not flat shapes. It animates on its own (mist, water, sun glitter) with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,oGrain=null,oMist=null,oRef=null;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.4,w*.95):h;
    var hz=mob?U*.74:h*.64;
    var S=mob?U*.72:Math.min(h*.62,cw*.44);
    /* the bridge: its two ends and the height of its arch */
    var bx0=mob?w*.16:side+cw*.44,bx1=mob?w*1.04:Math.min(w+20,side+cw*1.02);
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,bx0:bx0,bx1:bx1};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function blob(g,x,y,rx,ry,col){g.save();g.translate(x,y);g.scale(1,ry/rx);var gr=g.createRadialGradient(0,0,0,0,0,rx);gr.addColorStop(0,col);gr.addColorStop(1,col.replace(/[\d.]+\)$/,"0)"));g.fillStyle=gr;g.beginPath();g.arc(0,0,rx,0,Math.PI*2);g.fill();g.restore()}
  /* a ridge line: a few seeded sine octaves, so each range has its own believable profile */
  function ridge(seed,base,amp,freq){var R=rng(seed),ph=[R()*6.28,R()*6.28,R()*6.28,R()*6.28],fr=[1,2.3,5.1,11.7].map(function(k){return k*freq*(0.9+R()*.2)}),am=[1,.42,.16,.05];
    return function(x){var v=0;for(var i=0;i<4;i++)v+=Math.sin(x*fr[i]+ph[i])*am[i];return base-amp*(.55+.45*v)}}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(w,hz+2),g=A[1];oTop=A[0];
    /* dawn: sumi ink overhead warming to a pale gold over the hills */
    var sky=g.createLinearGradient(0,0,0,hz);
    sky.addColorStop(0,"#141110");sky.addColorStop(.18,"#2a2226");sky.addColorStop(.38,"#54424a");sky.addColorStop(.56,"#8d6a66");sky.addColorStop(.72,"#c99a7e");sky.addColorStop(.86,"#e8c49c");sky.addColorStop(1,"#f2dbb6");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    /* the low sun behind the ranges, right of centre, and its wide glow */
    var sx=G.mob?w*.7:G.side+G.cw*.74,sy=hz-S*.34;G.sun=[sx,sy];
    g.save();g.translate(sx,sy);g.scale(1,.5);var sg=g.createRadialGradient(0,0,0,0,0,w*.62);sg.addColorStop(0,"rgba(255,226,180,.62)");sg.addColorStop(.25,"rgba(246,190,150,.24)");sg.addColorStop(1,"rgba(220,160,140,0)");g.fillStyle=sg;g.fillRect(-w*1.2,-hz*3,w*2.4,hz*6);g.restore();
    blob(g,sx,sy,S*.12,S*.12,"rgba(255,236,206,.55)");
    g.fillStyle="rgba(255,244,224,.92)";g.beginPath();g.arc(sx,sy,S*.034,0,Math.PI*2);g.fill();
    /* brushed cloud: long soft strokes, lit from below near the sun */
    var Rc=rng(11);for(var i=0;i<30;i++){var cy=hz*(.08+Rc()*.55),cx=Rc()*w,cwd=w*(.05+Rc()*.15),near=cy>hz*.4,a=.04+Rc()*.08;
      blob(g,cx,cy,cwd,U*(.005+Rc()*.01),near?"rgba(244,204,170,"+a.toFixed(3)+")":"rgba(150,128,140,"+(a*.9).toFixed(3)+")")}
    /* the ranges, far to near: ink-wash layers, each softer and paler with distance, mist pooling at their feet */
    var L=[
      {s:3,b:hz-S*.30,a:S*.30,f:2.2/S,col:[176,140,138],al:.55,bl:3.2},
      {s:7,b:hz-S*.18,a:S*.26,f:3.1/S,col:[132,104,106],al:.7,bl:2.2},
      {s:19,b:hz-S*.08,a:S*.22,f:4.4/S,col:[86,68,72],al:.85,bl:1.3},
      {s:29,b:hz-S*.005,a:S*.14,f:6.5/S,col:[44,36,38],al:.95,bl:.6}];
    L.forEach(function(l,k){var f=ridge(l.s,l.b,l.a,l.f),P=mk(w,hz+2),pg=P[1];
      var gr=pg.createLinearGradient(0,l.b-l.a*1.2,0,hz);gr.addColorStop(0,"rgba("+l.col.join(",")+","+l.al+")");gr.addColorStop(1,"rgba("+l.col.map(function(v){return Math.round(v*.8)}).join(",")+","+Math.min(1,l.al+.05)+")");
      pg.fillStyle=gr;pg.beginPath();pg.moveTo(-10,hz+2);for(var x=-10;x<=w+10;x+=3)pg.lineTo(x,f(x));pg.lineTo(w+10,hz+2);pg.closePath();pg.fill();
      /* a warm rim where the sun catches the crest */
      pg.globalCompositeOperation="source-atop";var rim=pg.createRadialGradient(sx,sy,0,sx,sy,S*1.4);rim.addColorStop(0,"rgba(255,206,160,"+(.32-k*.06)+")");rim.addColorStop(1,"rgba(255,206,160,0)");pg.fillStyle=rim;pg.fillRect(0,0,w,hz+2);
      /* trees on the nearer slopes: a soft stipple */
      if(k>=2){var Rt=rng(l.s*7);for(var t=0;t<(k===3?260:140);t++){var tx=Rt()*w,ty=f(tx)+Rt()*S*.05,tr=S*(k===3?.012:.008)*(.6+Rt());blob(pg,tx,ty,tr,tr*.9,"rgba("+l.col.map(function(v){return Math.round(v*.6)}).join(",")+",.5)")}}
      /* mist rising off the foot of the range */
      pg.globalCompositeOperation="source-over";var mg=pg.createLinearGradient(0,l.b-l.a*.2,0,l.b+S*.04);mg.addColorStop(0,"rgba(240,214,190,0)");mg.addColorStop(1,"rgba(240,216,192,"+(.34-k*.05)+")");pg.fillStyle=mg;pg.fillRect(0,l.b-l.a*.2,w,S*.3);
      g.save();g.filter="blur("+(l.bl*Math.max(.6,U/900)).toFixed(1)+"px)";g.drawImage(P[0],0,0,w,hz+2);g.restore()});
    /* the near bank: a low dark shore across the water line, stone at the bridge footings */
    var nb=ridge(41,hz+1,S*.02,9/S);g.fillStyle="#1d1817";g.beginPath();g.moveTo(-10,hz+2);for(var x2=-10;x2<=w+10;x2+=4)g.lineTo(x2,nb(x2));g.lineTo(w+10,hz+2);g.fill();
    bridge(g);
    pine(g);
    /* haze over the whole painting, strongest where the light is */
    g.save();g.globalCompositeOperation="screen";blob(g,sx,hz-S*.15,w*.5,S*.25,"rgba(120,90,80,.22)");g.restore();
    /* a softened copy of the painting for the river to mirror */
    var Rf=mk(w,hz+2);oRef=Rf[0];Rf[1].filter="blur("+Math.max(1.2,U*.002).toFixed(1)+"px)";Rf[1].drawImage(oTop,0,0,w,hz+2);
    /* mist sprite, drifted in frame() */
    var M=mk(S*1.6,S*.2),mg2=M[1];oMist=M[0];oMist.cw=S*1.6;oMist.ch=S*.2;blob(mg2,S*.8,S*.1,S*.8,S*.09,"rgba(244,226,206,.5)");
    /* film grain */
    var Gr=mk(w,h),gg=Gr[1],Rg=rng(5);oGrain=Gr[0];
    for(var n=0;n<w*h/90;n++){var a2=Rg()*.05;gg.fillStyle=Rg()<.5?"rgba(255,246,230,"+a2.toFixed(3)+")":"rgba(10,8,6,"+(a2*1.3).toFixed(3)+")";gg.fillRect(Rg()*w,Rg()*h,1,1)}
  }
  /* the bridge: a taiko-style arched timber bridge in vermilion, on paired legs with cross-bracing, a railing with
     onion-capped posts (giboshi), lit warm from the sun side */
  function bridge(g){
    var x0=G.bx0,x1=G.bx1,hz=G.hz,S=G.S,span=x1-x0,end=hz-S*.045,rise=Math.min(S*.2,span*.15),th=Math.max(4,S*.022),rh=Math.max(6,S*.05);
    var Y=function(x){var u=(x-x0)/span;return end-rise*Math.sin(Math.PI*Math.max(0,Math.min(1,u)))};G.apex=[x0+span/2,end-rise];
    var V="#a82a1b",VD="#6e1910",VL="#d4553a";
    /* legs: paired round timbers down to the water at each bent, tied by two through-beams (nuki), in the deck's shadow */
    var nL=G.mob?5:6;
    for(var i=1;i<nL;i++){var lx=x0+span*i/nL,ly=Y(lx)+th,lw=Math.max(2.4,S*.014),gap=lw*1.9;
      [lx-gap,lx+gap].forEach(function(px,j){var lg=g.createLinearGradient(px-lw/2,0,px+lw/2,0);lg.addColorStop(0,"#5a140e");lg.addColorStop(.55,j?"#8e2416":"#7a1e13");lg.addColorStop(1,"#4a100b");
        g.fillStyle=lg;g.fillRect(px-lw/2,ly,lw,hz-ly);
        var sh=g.createLinearGradient(0,ly,0,ly+(hz-ly)*.5);sh.addColorStop(0,"rgba(20,8,6,.55)");sh.addColorStop(1,"rgba(20,8,6,0)");g.fillStyle=sh;g.fillRect(px-lw/2,ly,lw,(hz-ly)*.5)});
      g.fillStyle="#6e1a11";[.3,.62].forEach(function(q){var yy=ly+(hz-ly)*q;g.fillRect(lx-gap-lw*1.4,yy,gap*2+lw*2.8,Math.max(1.6,lw*.5))})}
    /* deck: a thick timber band following the arch, its face shaded */
    g.beginPath();for(var x=x0;x<=x1;x+=2)g.lineTo(x,Y(x));for(x=x1;x>=x0;x-=2)g.lineTo(x,Y(x)+th);g.closePath();
    var dg=g.createLinearGradient(0,end-rise,0,end+th);dg.addColorStop(0,V);dg.addColorStop(1,VD);g.fillStyle=dg;g.fill();
    g.strokeStyle="rgba(40,10,6,.35)";g.lineWidth=.8;g.beginPath();for(x=x0+6;x<x1;x+=Math.max(5,S*.012)){g.moveTo(x,Y(x)+th*.25);g.lineTo(x,Y(x)+th)}g.stroke();
    g.strokeStyle="rgba(255,170,120,.45)";g.lineWidth=1;g.beginPath();for(x=x0;x<=x1;x+=2)g.lineTo(x,Y(x)+.5);g.stroke();
    /* railing: posts, a top rail and a mid rail, giboshi on the end and centre posts */
    var nP=G.mob?12:18,pw=Math.max(1.6,S*.007);
    for(var p=0;p<=nP;p++){var px=x0+span*p/nP,py=Y(px);g.fillStyle=p%3?V:VD;g.fillRect(px-pw/2,py-rh,pw,rh);
      if(p===0||p===nP||p===nP/2||p===Math.round(nP/4)||p===Math.round(nP*3/4)){var r=pw*1.5;
        g.fillStyle="#2f2622";g.beginPath();g.moveTo(px-r,py-rh);g.quadraticCurveTo(px-r*1.2,py-rh-r*1.4,px,py-rh-r*2.6);g.quadraticCurveTo(px+r*1.2,py-rh-r*1.4,px+r,py-rh);g.fill();
        g.fillStyle="rgba(255,214,160,.5)";g.beginPath();g.arc(px+r*.35,py-rh-r*1.1,r*.3,0,Math.PI*2);g.fill()}}
    [[rh,Math.max(2,S*.008)],[rh*.45,Math.max(1.2,S*.005)]].forEach(function(rr){g.strokeStyle=V;g.lineWidth=rr[1];g.beginPath();for(var xx=x0;xx<=x1;xx+=2)g.lineTo(xx,Y(xx)-rr[0]);g.stroke()});
    g.strokeStyle="rgba(255,190,140,.55)";g.lineWidth=1;g.beginPath();for(x=x0;x<=x1;x+=2)g.lineTo(x,Y(x)-rh-Math.max(1,S*.004));g.stroke();
    /* the sun side glows warmer: a soft light wrapped over the right half */
    g.save();g.globalCompositeOperation="soft-light";blob(g,G.sun[0],end-rise*.5,span*.5,S*.2,"rgba(255,210,160,.6)");g.restore();
    /* stone footings where the bridge meets the banks */
    [x0,x1].forEach(function(fx){g.fillStyle="#3a302b";g.beginPath();g.moveTo(fx-S*.06,hz+1);g.lineTo(fx-S*.04,end+th*.4);g.lineTo(fx+S*.04,end+th*.4);g.lineTo(fx+S*.06,hz+1);g.fill();
      g.strokeStyle="rgba(255,220,190,.12)";g.lineWidth=1;g.beginPath();for(var k=1;k<4;k++){var yy=end+th*.4+(hz-end)*k/4;g.moveTo(fx-S*.05,yy);g.lineTo(fx+S*.05,yy)}g.stroke()});
    /* morning mist pooling around the legs, softening the bridge into the scene */
    var mg=g.createLinearGradient(0,end-rise*.3,0,hz);mg.addColorStop(0,"rgba(226,196,172,0)");mg.addColorStop(1,"rgba(226,196,172,.32)");g.fillStyle=mg;g.fillRect(x0-S*.1,end-rise*.3,span+S*.2,hz-end+rise*.3);
  }
  /* a Japanese black pine on the near bank, leaning toward the water: a curving trunk and flat cloud-pads of needles */
  function pine(g){
    var S=G.S,hz=G.hz,dir=G.mob?1:-1,bx=G.mob?w*.06:w-Math.max(30,G.side*.5),by=hz+1,sc=G.mob?.9:1.05,R=rng(53);
    var pts=[[bx,by],[bx+dir*S*.03*sc,by-S*.16*sc],[bx-dir*S*.02*sc,by-S*.32*sc],[bx+dir*S*.07*sc,by-S*.44*sc]];
    g.strokeStyle="#241c19";g.lineCap="round";
    for(var k=0;k<3;k++){g.lineWidth=S*(.022-k*.007)*sc;g.beginPath();g.moveTo(pts[k][0],pts[k][1]);g.quadraticCurveTo((pts[k][0]+pts[k+1][0])/2+dir*S*.02*sc,(pts[k][1]+pts[k+1][1])/2,pts[k+1][0],pts[k+1][1]);g.stroke()}
    var pads=[[bx+dir*S*.1*sc,by-S*.2*sc,.11],[bx-dir*S*.06*sc,by-S*.3*sc,.09],[bx+dir*S*.12*sc,by-S*.4*sc,.12],[bx+dir*S*.02*sc,by-S*.5*sc,.08],[bx+dir*S*.2*sc,by-S*.31*sc,.07]];
    pads.forEach(function(p){g.strokeStyle="#241c19";g.lineWidth=S*.006*sc;g.beginPath();g.moveTo(bx+dir*S*.02*sc,p[1]+S*.03*sc);g.quadraticCurveTo((bx+p[0])/2,p[1],p[0],p[1]+S*.01*sc);g.stroke();
      var r=S*p[2]*sc;for(var i=0;i<26;i++){var ox=(R()-.5)*r*1.8,oy=(R()-.5)*r*.32;blob(g,p[0]+ox,p[1]+oy,r*(.18+R()*.16),r*.1,"rgba(22,26,22,.85)")}
      for(i=0;i<10;i++){var ox2=(R()-.3)*r*1.4;blob(g,p[0]+ox2,p[1]-r*.12+(R()-.5)*r*.08,r*.14,r*.04,"rgba(214,150,110,.22)")}});
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,wb=G.mob?U*1.08:h,sw=Math.round(w*dpr);
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* mist drifting slowly across the feet of the ranges */
    var Rm=rng(17);for(var m=0;m<(G.mob?4:7);m++){var my=hz-S*(.04+Rm()*.24),sp=(6+Rm()*10)*(G.mob?.5:1),mx=((Rm()*w+t*sp)%(w+oMist.cw*1.2))-oMist.cw*.6;
      c.globalAlpha=e*(.35+.25*Math.sin(t*.2+m));c.drawImage(oMist,mx-oMist.cw/2,my-oMist.ch/2,oMist.cw,oMist.ch*(.7+Rm()*.6))}
    c.globalAlpha=e;
    /* the river: a darker, slowly moving mirror of the dawn */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#6e5651");wg.addColorStop(.25,"#3c302e");wg.addColorStop(.7,"#211b19");wg.addColorStop(1,"#15120f");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz);c.globalAlpha=e*.5;
    for(var y=0;y<RH;y+=2){var k=y/RH,off=Math.sin(y*.12+t*1.0)*(.4+k*5)+Math.sin(y*.04-t*.5)*(k*3.5),sy2=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oRef,0,sy2,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(21,18,15,.05)");dkn.addColorStop(.5,"rgba(21,18,15,.42)");dkn.addColorStop(1,"rgba(21,18,15,.88)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* the sun's path on the water: broken strokes of light */
    c.globalCompositeOperation="lighter";var Rr=rng(9),len=(wb-hz)*.8;
    for(var d=3;d<len;d+=Math.max(3,U*.006)){var kk=d/len,a=(1-kk)*.22*(.5+.5*Math.sin(t*2+d*.19)),ox=Math.sin(t*1.2+d*.08)*(1+kk*8),pw=S*(.05+kk*.12)*(.5+Rr()*.6);if(a<.01)continue;
      c.fillStyle="rgba(255,214,170,"+a.toFixed(3)+")";c.fillRect(G.sun[0]-pw/2+ox,hz+d,pw,1.3)}
    c.globalCompositeOperation="source-over";
    /* ripples */
    c.strokeStyle="rgba(240,214,190,.07)";c.lineWidth=1;c.beginPath();var Rp=rng(23);
    for(var r=0;r<(G.mob?22:48);r++){var ry=hz+Math.pow(Rp(),1.4)*(wb-hz),rx=((Rp()+t*.005*(1+Rp()))%1)*w,rl=S*(.04+Rp()*.1)*(1+(ry-hz)/(wb-hz));c.moveTo(rx,ry);c.lineTo(rx+rl,ry)}c.stroke();
    /* grain, then a quiet scrim on the text side */
    c.globalAlpha=e*.9;c.drawImage(oGrain,0,0,w,h);c.globalAlpha=e;
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(16,13,11,.74)");lv.addColorStop(.55,"rgba(16,13,11,.4)");lv.addColorStop(1,"rgba(16,13,11,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(21,18,15,0)");bv.addColorStop(1,"rgba(21,18,15,.6)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3)}
    else{var mb=c.createLinearGradient(0,wb-U*.3,0,wb);mb.addColorStop(0,"rgba(21,18,15,0)");mb.addColorStop(1,"rgba(21,18,15,1)");c.fillStyle=mb;c.fillRect(0,wb-U*.3,w,U*.3);c.fillStyle="#15120f";c.fillRect(0,wb-1,w,h-wb+2)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G&&G.apex?[G.apex[0],G.apex[1]]:[w/2,h/2]}};
})();

/* ================= HERO FIELD: the Terminal Tower at dusk over the Cuyahoga. Cleveland's 1930 Beaux-Arts tower (the
   landmark in Kirtland's own home-page photograph), floodlit against a green-to-khaki twilight drawn from the firm's
   logo green (#014e48) and its khaki (#9e9779). Low brick warehouses of the Flats line the river; the river mirrors the
   tower. It animates on its own (water, stars, the beacon, lit windows), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,ST=[],GL=[],WIN=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.37,w*.82):h;
    var hz=mob?U*.86:h*.7;
    var H=mob?U*.66:Math.min(h*.6,cw*.5);
    var cx=mob?w*.7:side+cw*.73;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,H:H,cx:cx,top:hz-H};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the tower, as stages bottom to top: [y0,y1,halfWidth] in units of H above the horizon */
  var STG=[[.075,.655,.072],[.655,.735,.06],[.735,.84,.047],[.84,.875,.037],[.875,.925,.024]];
  function build(){
    var hz=G.hz,H=G.H,U=G.U,cx=G.cx,A=mk(hz+4),g=A[1];oTop=A[0];
    function Y(v){return hz-v*H}
    /* twilight: deep logo-green overhead, through sage, to a khaki-gold afterglow on the horizon */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#06110f");sky.addColorStop(.28,"#0b2421");sky.addColorStop(.52,"#173a35");sky.addColorStop(.7,"#3c5a4c");sky.addColorStop(.84,"#7f8667");sky.addColorStop(.94,"#b9ad80");sky.addColorStop(1,"#d9c995");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+4);
    var gx=cx-H*.35,sg=g.createRadialGradient(gx,hz,0,gx,hz,Math.max(w*.45,H*1.3));sg.addColorStop(0,"rgba(240,214,150,.42)");sg.addColorStop(.4,"rgba(200,180,120,.14)");sg.addColorStop(1,"rgba(160,150,110,0)");
    g.save();g.translate(gx,hz);g.scale(1,.5);g.translate(-gx,-hz);g.fillStyle=sg;g.fillRect(0,0,w,hz*2);g.restore();
    /* thin evening cloud */
    var Rc=rng(11);for(var i=0;i<10;i++){var cy=hz*(.38+Rc()*.48),ccx=Rc()*w,cwid=w*(.08+Rc()*.2),ch=U*(.01+Rc()*.014),a=.04+Rc()*.05;
      g.save();g.translate(ccx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(226,212,170,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(226,212,170,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* far shore haze: a low, even band of distant roofs (no towers) */
    var Rr=rng(5);g.fillStyle="rgba(46,70,60,.55)";g.beginPath();g.moveTo(0,hz+2);for(var x=0;x<=w;x+=Math.max(6,H*.02)){g.lineTo(x,hz-H*(.03+Rr()*.035))}g.lineTo(w,hz+2);g.closePath();g.fill();
    /* the tower's halo of floodlight */
    var hg=g.createRadialGradient(cx,Y(.6),0,cx,Y(.6),H*.6);hg.addColorStop(0,"rgba(236,214,160,.16)");hg.addColorStop(1,"rgba(236,214,160,0)");g.fillStyle=hg;g.fillRect(cx-H*.7,Y(1.1),H*1.4,H*1.2);
    drawTower(g,Y);
    /* the Flats: low brick warehouses either side, along the water */
    WIN=[];
    function block(x0,x1,ht,seed,lit){var R=rng(seed),y0=hz-ht;var bg=g.createLinearGradient(0,y0,0,hz);bg.addColorStop(0,"#2a2a22");bg.addColorStop(1,"#12201d");g.fillStyle=bg;g.fillRect(x0,y0,x1-x0,ht+3);
      g.fillStyle="rgba(222,200,140,.22)";g.fillRect(x0,y0,x1-x0,Math.max(1,ht*.03));
      var cols=Math.max(2,Math.floor((x1-x0)/(H*.022))),rows=Math.max(1,Math.floor(ht/(H*.03)));
      for(var r=0;r<rows;r++)for(var k=0;k<cols;k++){if(R()>lit)continue;var wx=x0+(k+.5)*(x1-x0)/cols,wy=y0+ht*.18+r*(ht*.74/rows);WIN.push([wx,wy,R()*6.28,.4+R()*.8])}}
    var Rb=rng(29),bx=-10,bw;
    while(bx<w+10){bw=H*(.09+Rb()*.16);var near=Math.abs(bx+bw/2-cx)<H*.22;var ht=near?H*(.035+Rb()*.025):H*(.035+Rb()*.06);if(G.mob)ht*=1.1;block(bx,bx+bw,ht,Math.floor(Rb()*999)+1,.32);bx+=bw+H*(.004+Rb()*.02)}
    /* the river wall */
    g.fillStyle="#0e1c1a";g.fillRect(0,hz-Math.max(2,H*.012),w,Math.max(2,H*.012)+4);
    ST=[];var Rs=rng(3),n=G.mob?40:100;for(var s=0;s<n;s++){var sy=Math.pow(Rs(),1.5)*hz*.5;ST.push([Rs()*w,sy,.3+Rs()*.8,Rs()*6.28,.4+Rs()*1.2,1-sy/(hz*.5)])}
    GL=[];var Rg=rng(19);for(var q=0;q<(G.mob?30:70);q++)GL.push([Rg(),Rg(),Rg()*6.28,.5+Rg()]);
  }
  function drawTower(g,Y){
    var H=G.H,cx=G.cx,hz=G.hz,lw=Math.max(.6,H*.0016);
    /* the podium (the station and hotel block the tower rises from) */
    var pw=H*.3,py=Y(.075);var pg=g.createLinearGradient(0,py,0,hz);pg.addColorStop(0,"#5b5a45");pg.addColorStop(1,"#1d2a25");g.fillStyle=pg;g.fillRect(cx-pw,py,pw*2,hz-py+2);
    g.fillStyle="rgba(240,222,170,.35)";g.fillRect(cx-pw,py,pw*2,Math.max(1,H*.003));
    /* each stage: a lit west face, a shadowed east return, vertical piers */
    function face(y0,y1,hw,piers,glow){hw*=H;var a=Y(y0),b=Y(y1),dep=hw*.32;
      var fg=g.createLinearGradient(0,a,0,b);fg.addColorStop(0,glow[0]);fg.addColorStop(1,glow[1]);g.fillStyle=fg;g.fillRect(cx-hw,b,hw*2,a-b);
      var sg=g.createLinearGradient(0,a,0,b);sg.addColorStop(0,"#2b3a31");sg.addColorStop(1,"#3f4a3b");g.fillStyle=sg;g.beginPath();g.moveTo(cx+hw,a);g.lineTo(cx+hw+dep,a-dep*.25);g.lineTo(cx+hw+dep,b-dep*.25);g.lineTo(cx+hw,b);g.closePath();g.fill();
      var lg=g.createLinearGradient(cx-hw,0,cx+hw,0);lg.addColorStop(0,"rgba(255,240,200,.18)");lg.addColorStop(.5,"rgba(255,240,200,0)");lg.addColorStop(1,"rgba(10,20,18,.25)");g.fillStyle=lg;g.fillRect(cx-hw,b,hw*2,a-b);
      g.strokeStyle="rgba(40,46,36,.55)";g.lineWidth=lw;g.beginPath();for(var k=1;k<piers;k++){var x=cx-hw+k*2*hw/piers;g.moveTo(x,b+2);g.lineTo(x,a)}g.stroke();
      g.fillStyle="rgba(250,236,196,.55)";g.fillRect(cx-hw-lw,b-lw,hw*2+dep+lw*2,Math.max(1,lw*1.6))}
    face(.075,.655,.072,9,["#7d7556","#c9b98a"]);
    /* lit windows on the shaft */
    var R=rng(83);for(var r=0;r<34;r++)for(var k=0;k<9;k++){if(R()<.7)continue;var x=cx-.072*H+(k+.5)*(.144*H/9),y=Y(.09+r*.016);g.fillStyle="rgba(255,226,160,"+(.35+R()*.45).toFixed(2)+")";g.fillRect(x-H*.0028,y,H*.0056,H*.006)}
    /* corner urns at the first setback */
    [-1,1].forEach(function(s){var ux=cx+s*.066*H,uy=Y(.655);g.fillStyle="#b9ab7e";g.fillRect(ux-H*.006,uy-H*.022,H*.012,H*.022);g.beginPath();g.moveTo(ux-H*.006,uy-H*.022);g.lineTo(ux,uy-H*.034);g.lineTo(ux+H*.006,uy-H*.022);g.fill()});
    face(.655,.735,.06,7,["#b3a678","#dccb98"]);
    /* the colonnade: columns lit from within */
    face(.735,.84,.047,1,["#e2cf98","#f0dfaa"]);
    var a=Y(.735),b=Y(.84),hw=.047*H;g.fillStyle="rgba(60,64,48,.6)";for(var q=0;q<7;q++){var qx=cx-hw+(q+.5)*(2*hw/7);g.fillRect(qx-H*.0035,b+H*.006,H*.007,a-b-H*.012)}
    g.fillStyle="rgba(255,244,210,.35)";g.fillRect(cx-hw,b+H*.004,hw*2,H*.004);
    face(.84,.875,.037,5,["#cdbb88","#e4d29d"]);
    face(.875,.925,.024,5,["#d8c690","#efe0ae"]);
    /* the pyramidal cap, finial and mast */
    var c0=Y(.925),c1=Y(.965);g.fillStyle="#a99d73";g.beginPath();g.moveTo(cx-.026*H,c0);g.lineTo(cx-.006*H,c1);g.lineTo(cx+.006*H,c1);g.lineTo(cx+.034*H,c0-H*.003);g.closePath();g.fill();
    g.fillStyle="rgba(255,244,214,.5)";g.beginPath();g.moveTo(cx-.026*H,c0);g.lineTo(cx-.006*H,c1);g.lineTo(cx-.001*H,c1);g.lineTo(cx-.012*H,c0);g.closePath();g.fill();
    g.strokeStyle="#c8bb8c";g.lineWidth=Math.max(1,H*.003);g.beginPath();g.moveTo(cx,c1);g.lineTo(cx,Y(1));g.stroke();
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,H=G.H,cx=G.cx,wb=G.mob?U*.99:h;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    for(var i=0;i<ST.length;i++){var s=ST[i],a=s[5]*(.45+.55*Math.sin(t*s[4]+s[3]))*.6;if(a<.05)continue;c.fillStyle="rgba(240,238,220,"+a.toFixed(3)+")";c.fillRect(s[0],s[1],s[2],s[2])}
    /* warehouse windows, a few slowly coming and going */
    for(var k=0;k<WIN.length;k++){var wq=WIN[k],wa=.5+.4*Math.sin(t*.2*wq[3]+wq[2]);c.fillStyle="rgba(255,214,140,"+(wa*.75).toFixed(3)+")";c.fillRect(wq[0]-H*.003,wq[1],H*.006,H*.007)}
    /* the beacon on the mast */
    var by=hz-H,bl=.5+.5*Math.sin(t*2.2);if(bl>.6){var bg=c.createRadialGradient(cx,by,0,cx,by,H*.02);bg.addColorStop(0,"rgba(255,90,70,"+((bl-.6)*1.8).toFixed(2)+")");bg.addColorStop(1,"rgba(255,90,70,0)");c.fillStyle=bg;c.fillRect(cx-H*.02,by-H*.02,H*.04,H*.04)}
    /* the river: a darker mirror of the sky */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#4c5a46");wg.addColorStop(.2,"#1d332e");wg.addColorStop(.6,"#10221f");wg.addColorStop(1,"#0d1f1d");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz),sw=Math.round(w*dpr);c.globalAlpha=e*.5;
    for(var y=0;y<RH;y+=2){var kk=y/RH,off=Math.sin(y*.11+t*1.2)*(.6+kk*5)+Math.sin(y*.037-t*.6)*(kk*3),sy=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(13,31,29,.1)");dkn.addColorStop(.5,"rgba(13,31,29,.5)");dkn.addColorStop(1,"rgba(13,31,29,.88)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],gy=hz+Math.pow(gq[1],1.6)*(wb-hz)*.85+2,spread=H*(.12+gq[1]*.5),gx=cx+(gq[0]-.5)*spread*2,ga=(.5+.5*Math.sin(t*gq[3]*1.7+gq[2]))*(1-gq[1])*.2,gl=3+H*.03*(1-gq[1]);
      c.fillStyle="rgba(240,214,150,"+ga.toFixed(3)+")";c.fillRect(gx+Math.sin(t*.5+gq[2])*5,gy,gl,1)}
    c.globalCompositeOperation="source-over";
    if(G.mob){var fb=c.createLinearGradient(0,wb-H*.3,0,wb);fb.addColorStop(0,"rgba(13,31,29,0)");fb.addColorStop(1,"rgba(13,31,29,1)");c.fillStyle=fb;c.fillRect(0,wb-H*.3,w,H*.3+2);c.fillStyle="#0d1f1d";c.fillRect(0,wb,w,h-wb+2)}
    else{var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(6,16,14,.6)");lv.addColorStop(1,"rgba(6,16,14,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.hz-G.H*.75]:[w/2,h/2]}};
})();

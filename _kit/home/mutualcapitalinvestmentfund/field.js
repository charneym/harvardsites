/* ================= HERO FIELD: the Susquehanna at dawn, seen from the rocks above Wyalusing, Pennsylvania, the
   Route 6 town that is home to Mutual Capital Group. Rounded ridges of the Endless Mountains fade into the light,
   the river bends broad and silver across its farmed floodplain, and the dark ledge of the overlook frames the
   foreground. Colours come from the firm's two logo blues. It animates on its own (drifting valley mist, light on
   the water, a pair of birds), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,MI=[],GL=[],RV=null;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mob=w<861,H=mob?Math.min(h*.36,w*.8):h,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2);
    return {mob:mob,H:H,side:side,hz:H*(mob?.46:.47),sunX:mob?w*.68:w*.7};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* river centreline: y as a fraction of H for x in [0,1], and its half-width */
  function rv(x){var H=G.H;return H*(G.mob?.665:.655)+H*.05*Math.sin(x*3.4+.6)+H*.025*Math.sin(x*7.1+2)}
  function rw(x){return G.H*(.022+.016*x)}
  function build(){
    var H=G.H,hz=G.hz,A=mk(H+2),g=A[1];oTop=A[0];
    /* dawn sky: deep navy overhead, the logo blue, pale silver-blue at the ridgeline, a cream glow where the sun rises */
    var sky=g.createLinearGradient(0,0,0,hz+H*.06);sky.addColorStop(0,"#071629");sky.addColorStop(.28,"#0f3256");sky.addColorStop(.55,"#2f6994");sky.addColorStop(.8,"#8db4cf");sky.addColorStop(1,"#d9e6ee");
    g.fillStyle=sky;g.fillRect(0,0,w,H+2);
    var sg=g.createRadialGradient(G.sunX,hz,0,G.sunX,hz,Math.max(w*.5,H*.8));sg.addColorStop(0,"rgba(255,244,222,.95)");sg.addColorStop(.08,"rgba(250,236,210,.6)");sg.addColorStop(.3,"rgba(214,226,232,.22)");sg.addColorStop(1,"rgba(180,206,224,0)");
    g.save();g.translate(G.sunX,hz);g.scale(1,.6);g.translate(-G.sunX,-hz);g.fillStyle=sg;g.fillRect(-w,-H*3,w*3,H*6);g.restore();
    /* thin high cloud */
    var Rc=rng(11);for(var i=0;i<10;i++){var cy=hz*(.18+Rc()*.62),cx=Rc()*w,cw=w*(.08+Rc()*.18),ch=H*(.008+Rc()*.012),a=.05+Rc()*.08,near=Math.abs(cx-G.sunX)<w*.25;
      g.save();g.translate(cx,cy);g.scale(1,ch/cw);var cg=g.createRadialGradient(0,0,0,0,0,cw);cg.addColorStop(0,near?"rgba(255,240,220,"+(a*1.4).toFixed(3)+")":"rgba(200,220,236,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(200,220,236,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cw,0,Math.PI*2);g.fill();g.restore()}
    /* ridges of the Endless Mountains, far to near, with atmospheric haze between */
    var RG=[[hz-H*.05,H*.06,"#9fbcd0",3,.0026],[hz-H*.015,H*.07,"#7096b3",5,.0034],[hz+H*.02,H*.075,"#4a7395",8,.0042],[hz+H*.06,H*.07,"#2c5272",13,.005],[hz+H*.1,H*.055,"#1b3b58",17,.0062]];
    RG.forEach(function(r,k){var Rr=rng(r[3]),ph=Rr()*6,base=r[0],amp=r[1];g.fillStyle=r[2];g.beginPath();g.moveTo(-4,H+2);
      for(var x=-4;x<=w+6;x+=4){var u=x/w,y=base-amp*(.5+.32*Math.sin(x*r[4]+ph)+.14*Math.sin(x*r[4]*2.7+ph*2)+.04*Math.sin(x*r[4]*9+ph));if(k>=3)y-=Math.abs(Math.sin(x*.19+ph))*H*.0025;g.lineTo(x,y)}
      g.lineTo(w+6,H+2);g.closePath();g.fill();
      /* tree texture on the nearer ridges */
      if(k>=2){var Rt=rng(r[3]+40);g.fillStyle="rgba(8,22,38,"+(.05+k*.03).toFixed(3)+")";for(var n=0;n<w*.5;n++){var tx=Rt()*w,ty=base-amp*.2+Rt()*H*.08;g.fillRect(tx,ty,1.2,1.2+Rt()*2)}}
      /* haze over each ridge's foot */
      var hzG=g.createLinearGradient(0,base-amp*.4,0,base+H*.04);hzG.addColorStop(0,"rgba(200,220,234,0)");hzG.addColorStop(1,"rgba(200,220,234,"+(.32-k*.05).toFixed(3)+")");g.fillStyle=hzG;g.fillRect(0,base-amp*.4,w,amp*.4+H*.04)});
    /* the floodplain: fields in perspective, hedgerows, a farm road */
    var fp0=hz+H*.1,fp1=H*(G.mob?.86:.84);
    var fg=g.createLinearGradient(0,fp0,0,fp1);fg.addColorStop(0,"#3c6a88");fg.addColorStop(.5,"#24496a");fg.addColorStop(1,"#163450");g.fillStyle=fg;g.fillRect(0,fp0-H*.012,w,fp1-fp0+H*.02);
    var Rf=rng(29);for(var row=0;row<9;row++){var y0=fp0+(fp1-fp0)*Math.pow(row/9,1.25),y1=fp0+(fp1-fp0)*Math.pow((row+1)/9,1.25),x=-20;
      while(x<w){var fw=w*(.05+Rf()*.09)*(1+row*.12),tone=Rf();g.fillStyle=tone<.33?"rgba(150,190,210,.09)":tone<.66?"rgba(10,30,50,.1)":"rgba(120,160,150,.07)";
        var sk=(x-w*.5)*.04;g.beginPath();g.moveTo(x,y0);g.lineTo(x+fw,y0);g.lineTo(x+fw+sk,y1);g.lineTo(x+sk,y1);g.closePath();g.fill();
        if(Rf()<.22){var hg=g.createLinearGradient(0,y0-3,0,y0+1);hg.addColorStop(0,"rgba(10,28,46,0)");hg.addColorStop(1,"rgba(10,28,46,.32)");g.fillStyle=hg;g.fillRect(x+fw*.05,y0-3,fw*.9,4)}x+=fw}}
    /* the river: a broad silver bend mirroring the dawn */
    var top=[],bot=[];for(var xi=-10;xi<=w+10;xi+=4){var u2=xi/w,yc=rv(u2),hw=rw(u2);top.push([xi,yc-hw*.55]);bot.push([xi,yc+hw*.45])}
    RV={top:top,bot:bot};
    g.beginPath();g.moveTo(top[0][0],top[0][1]);top.forEach(function(p){g.lineTo(p[0],p[1])});for(var b=bot.length-1;b>=0;b--)g.lineTo(bot[b][0],bot[b][1]);g.closePath();
    var rgr=g.createLinearGradient(0,H*.58,0,H*.74);rgr.addColorStop(0,"#c7dbe7");rgr.addColorStop(.5,"#8fb2ca");rgr.addColorStop(1,"#4f7c9c");g.fillStyle=rgr;g.fill();
    g.save();g.clip();var rr=g.createRadialGradient(G.sunX,rv(G.sunX/w),0,G.sunX,rv(G.sunX/w),w*.3);rr.addColorStop(0,"rgba(255,246,228,.75)");rr.addColorStop(1,"rgba(255,246,228,0)");g.fillStyle=rr;g.fillRect(0,0,w,H);g.restore();
    /* riverbank trees along both shores */
    var Rb=rng(77),bh=0,bv2=0;g.fillStyle="rgba(14,36,58,.8)";g.beginPath();g.moveTo(top[0][0],top[0][1]);for(var q=0;q<top.length;q++){bv2+=(Rb()-.5)*.8;bv2*=.85;bh+=(bv2-bh)*.3;g.lineTo(top[q][0],top[q][1]-H*.006-Math.max(0,bh)*H*.006)}for(q=top.length-1;q>=0;q--)g.lineTo(top[q][0],top[q][1]+.5);g.closePath();g.fill();
    g.fillStyle="rgba(14,36,58,.55)";g.beginPath();g.moveTo(bot[0][0],bot[0][1]);for(q=0;q<bot.length;q++)g.lineTo(bot[q][0],bot[q][1]+H*.004+Math.abs(Math.sin(q*.7))*H*.002);for(q=bot.length-1;q>=0;q--)g.lineTo(bot[q][0],bot[q][1]-.5);g.closePath();g.fill();
    /* the overlook ledge, rocks and pines in the foreground */
    var lg=g.createLinearGradient(0,H*.72,0,H);lg.addColorStop(0,"#0d2236");lg.addColorStop(1,"#081626");g.fillStyle=lg;
    var Rl=rng(91);g.beginPath();g.moveTo(-4,H+2);var ly=0,lv=0;
    for(var lx=-4;lx<=w+4;lx+=3){var u3=lx/w;lv+=(Rl()-.5)*.6;lv*=.9;ly+=(lv-ly)*.2;var base2=G.mob?H*(.9+.06*u3):H*(.8+.17*Math.pow(u3,1.4));g.lineTo(lx,base2-ly*H*.006-(u3<.45?H*.03*(1-u3/.45):0))}
    g.lineTo(w+4,H+2);g.closePath();g.fill();
    /* strata on the ledge */
    g.strokeStyle="rgba(150,185,210,.09)";g.lineWidth=1;for(var s=0;s<7;s++){g.beginPath();var sy=H*(.86+s*.022);for(var sx=0;sx<w*(G.mob?1:.55);sx+=6){g.lineTo(sx,sy+Math.sin(sx*.02+s)*2+(sx/w)*H*.05)}g.stroke()}
    /* white pines on the ledge, right side */
    function spruce(x,y,hh){var Rp=rng(Math.round(x*7+y*3)),n=11,pts=[[x,y-hh]];
      for(var t=1;t<=n;t++){var ty=y-hh+hh*.92*t/n,wd=hh*.2*Math.pow(t/n,.9)*(.85+Rp()*.3);pts.push([x+wd,ty]);pts.push([x+wd*.45,ty-hh*.012])}
      g.fillStyle="#071524";g.beginPath();g.moveTo(x,y-hh);pts.forEach(function(p){g.lineTo(p[0],p[1])});g.lineTo(x+hh*.015,y);g.lineTo(x-hh*.015,y);
      for(t=pts.length-1;t>0;t--){g.lineTo(2*x-pts[t][0]+(Rp()-.5)*hh*.01,pts[t][1])}g.closePath();g.fill()}
    if(G.mob){spruce(w*.92,H*1.0,H*.36);spruce(w*.82,H*1.0,H*.24)}else{spruce(w*.9,H*1.01,H*.46);spruce(w*.955,H*1.0,H*.36);spruce(w*.84,H*1.0,H*.28);spruce(w*.995,H*.99,H*.3)}
    /* mist bands, pre-rendered */
    MI=[];var Rm=rng(5);for(var m=0;m<(G.mob?6:10);m++){var mw=w*(.25+Rm()*.35),mh=H*(.02+Rm()*.025),M=document.createElement("canvas");M.width=Math.round(mw*dpr);M.height=Math.round(mh*2*dpr);var mg=M.getContext("2d");mg.setTransform(dpr,0,0,dpr,0,0);
      mg.translate(mw/2,mh);mg.scale(1,mh/(mw/2));var mgr=mg.createRadialGradient(0,0,0,0,0,mw/2);mgr.addColorStop(0,"rgba(226,236,244,.55)");mgr.addColorStop(1,"rgba(226,236,244,0)");mg.fillStyle=mgr;mg.beginPath();mg.arc(0,0,mw/2,0,Math.PI*2);mg.fill();
      var lay=m%3;MI.push({c:M,w:mw,h:mh*2,x:Rm()*w,y:lay===0?hz+H*.035:lay===1?hz+H*.09+Rm()*H*.03:rv(.5)-H*.02+Rm()*H*.05,v:4+Rm()*7,a:.35+Rm()*.4})}
    GL=[];var Rg=rng(13);for(var k2=0;k2<(G.mob?40:90);k2++){var gu=Rg();GL.push([gu,Rg()*2-1,Rg()*6,.6+Rg()*1.4])}
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var H=G.H;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* drifting mist */
    for(var m=0;m<MI.length;m++){var mi=MI[m],x=((mi.x+t*mi.v)%(w+mi.w))-mi.w;c.globalAlpha=e*mi.a*(.75+.25*Math.sin(t*.2+m));c.drawImage(mi.c,x,mi.y-mi.h/2,mi.w,mi.h)}
    c.globalAlpha=e;
    /* light on the water */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],u=gq[0],gx=u*w,gy=rv(u)+gq[1]*rw(u)*.4,ga=(.5+.5*Math.sin(t*gq[3]+gq[2]))*(.08+.22*Math.max(0,1-Math.abs(gx-G.sunX)/(w*.35)));
      c.fillStyle="rgba(255,248,232,"+ga.toFixed(3)+")";c.fillRect(gx+Math.sin(t*.4+gq[2])*4,gy,3+rw(u)*.25,1)}
    c.globalCompositeOperation="source-over";
    /* two birds gliding over the valley */
    c.strokeStyle="rgba(10,26,43,.7)";c.lineWidth=1.3;
    for(var b=0;b<2;b++){var bp=((t*.012+b*.37)%1.2)-.1,bx=w*bp,by=G.hz*(.55+b*.12)+Math.sin(t*.5+b)*H*.01,fl=Math.sin(t*(2.2+b*.4)+b)*.5+.5,bs=H*(.009-b*.002);
      c.beginPath();c.moveTo(bx-bs*2,by-bs*fl);c.quadraticCurveTo(bx-bs,by-bs*(.4+fl*.6),bx,by);c.quadraticCurveTo(bx+bs,by-bs*(.4+fl*.6),bx+bs*2,by-bs*fl);c.stroke()}
    /* the copy column: a calm scrim on the left (desktop); a fade into the page below the art (phones) */
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+(w-2*G.side)*.55,0);lv.addColorStop(0,"rgba(7,20,35,.72)");lv.addColorStop(.6,"rgba(7,20,35,.35)");lv.addColorStop(1,"rgba(7,20,35,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(7,20,35,0)");bv.addColorStop(1,"rgba(7,20,35,.45)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4)}
    else{var mv=c.createLinearGradient(0,H*.8,0,H);mv.addColorStop(0,"rgba(10,26,43,0)");mv.addColorStop(1,"rgba(10,26,43,1)");c.fillStyle=mv;c.fillRect(0,H*.8,w,H*.2+1);c.fillStyle="#0a1a2b";c.fillRect(0,H,w,h-H)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.sunX,G.hz]:[w/2,h/2]}};
})();

/* ================= HERO FIELD: blue hour on the Texas prairie. A steel-lattice windmill and its stock tank stand
   in open grassland under the afterglow, flat-topped mesas fading at the horizon, and a single bright evening star,
   the lone star, hangs in the clearing sky. Painted in layers (gradient sky, hazy mesas, textured grass, rim-lit
   steel, a grain pass) in the firm's own blues: the logo's near-black and the old site's header blue (#264a94 to
   #6b8fd9). It animates on its own (the wheel turns in the breeze, the grass stirs, the star breathes), with no
   pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,oNear=null,ST=[],GR=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mob=w<861,H=mob?Math.min(h*.4,w*.86):h,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2);
    var hz=H*(mob?.62:.64);
    /* the windmill: base on the prairie a little below the horizon, tower ~40% of the frame */
    var wx=mob?w*.7:Math.min(w*.72,side+(w-2*side)*.78),wb=hz+H*(mob?.07:.06),th=H*(mob?.4:.4);
    return {mob:mob,H:H,side:side,hz:hz,glowX:mob?w*.62:w*.66,wx:wx,wb:wb,th:th,R:th*.155,
      star:[mob?w*.86:Math.min(w*.88,wx+H*.24),H*(mob?.13:.17)]};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function blob(g,x,y,rx,ry,col0,col1){g.save();g.translate(x,y);g.scale(1,ry/rx);var gr=g.createRadialGradient(0,0,0,0,0,rx);gr.addColorStop(0,col0);gr.addColorStop(1,col1);g.fillStyle=gr;g.beginPath();g.arc(0,0,rx,0,Math.PI*2);g.fill();g.restore()}
  function build(){
    var H=G.H,hz=G.hz,A=mk(H+2),g=A[1],i,x,y;oTop=A[0];
    /* sky: night navy overhead, the site's header blues, a pale silver band and a faint warm afterglow at the horizon */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#070e1f");sky.addColorStop(.22,"#0f1f45");sky.addColorStop(.48,"#264a94");sky.addColorStop(.7,"#486cb6");sky.addColorStop(.86,"#8fa9d9");sky.addColorStop(.96,"#d6dbe6");sky.addColorStop(1,"#ece6dc");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    g.save();g.translate(G.glowX,hz);g.scale(1,.42);var ag=g.createRadialGradient(0,0,0,0,0,Math.max(w*.55,H));ag.addColorStop(0,"rgba(248,232,208,.85)");ag.addColorStop(.1,"rgba(240,222,200,.45)");ag.addColorStop(.32,"rgba(190,200,226,.16)");ag.addColorStop(1,"rgba(140,170,220,0)");g.fillStyle=ag;g.fillRect(-w*2,-H*3,w*4,H*3.2);g.restore();
    /* faint stars in the darker sky (the bright one is drawn live) */
    var Rs=rng(7);for(i=0;i<(G.mob?60:150);i++){x=Rs()*w;y=Rs()*hz*.55;var dk=1-y/(hz*.55),a=(.08+Rs()*.4)*dk*dk;if(a<.03)continue;g.fillStyle="rgba(230,236,250,"+a.toFixed(3)+")";var s=Rs()<.1?1.4:.8;g.fillRect(x,y,s,s)}
    /* long, low streaks of cloud lit from below by the afterglow */
    var Rc=rng(23);for(i=0;i<11;i++){var cy=hz*(.5+Rc()*.42),cx=Rc()*w*1.1-w*.05,cw=w*(.1+Rc()*.22),ch=H*(.006+Rc()*.012),near=1-Math.min(1,Math.abs(cx-G.glowX)/(w*.5)),lo=cy/hz;
      blob(g,cx,cy,cw,ch,"rgba(18,30,62,"+(.08+Rc()*.1).toFixed(3)+")","rgba(18,30,62,0)");
      blob(g,cx+cw*.04,cy+ch*.55,cw*.8,ch*.5,"rgba(250,232,214,"+(.05+.22*near*lo).toFixed(3)+")","rgba(250,232,214,0)")}
    /* mesas and ridges at the horizon, far to near, with haze between */
    var MS=[[hz-H*.004,H*.05,"#6f88bc",.0019,3,.55],[hz+H*.004,H*.034,"#4d67a0",.0027,9,.4],[hz+H*.012,H*.022,"#31497e",.0041,17,.3]];
    MS.forEach(function(m,k){var Rm=rng(m[4]),ph=Rm()*9;g.fillStyle=m[2];g.beginPath();g.moveTo(-4,H+2);
      for(x=-4;x<=w+6;x+=3){var u=Math.sin(x*m[3]+ph)*.6+Math.sin(x*m[3]*2.3+ph*1.7)*.4,
        /* flat tops and steep shoulders: a soft clamp turns rolling noise into mesas */
        mesa=sm((u-(.1-k*.1))*3.2),yy=m[0]-m[1]*(.18+.82*mesa)-Math.sin(x*.07+ph)*H*.0008;g.lineTo(x,yy)}
      g.lineTo(w+6,H+2);g.closePath();g.fill();
      var hzG=g.createLinearGradient(0,m[0]-m[1],0,m[0]+H*.01);hzG.addColorStop(0,"rgba(214,220,234,0)");hzG.addColorStop(1,"rgba(214,220,234,"+m[5].toFixed(2)+")");g.fillStyle=hzG;g.fillRect(0,m[0]-m[1],w,m[1]+H*.012)});
    /* the prairie: lit pale near the horizon, falling to night blue in the foreground */
    var p0=hz+H*.012,pg=g.createLinearGradient(0,p0,0,H);pg.addColorStop(0,"#5f78ac");pg.addColorStop(.12,"#3b5486");pg.addColorStop(.4,"#1f3058");pg.addColorStop(1,"#0c1429");
    g.fillStyle=pg;g.fillRect(0,p0,w,H-p0+2);
    g.save();g.translate(G.glowX,p0);g.scale(1,.18);var pgl=g.createRadialGradient(0,0,0,0,0,w*.5);pgl.addColorStop(0,"rgba(236,224,206,.35)");pgl.addColorStop(1,"rgba(236,224,206,0)");g.fillStyle=pgl;g.fillRect(-w,-H,w*2,H*2);g.restore();
    /* painterly grass: short strokes in bands, smaller and paler toward the horizon */
    var Rg=rng(31),n=Math.round(w*(G.mob?7:9));
    for(i=0;i<n;i++){var v=Math.pow(Rg(),1.6),gy=p0+(H-p0)*v,sc=.25+v*1.6,gx=Rg()*w,len=(2+Rg()*6)*sc,lean=(Rg()-.4)*len*.5,
      lit=Math.max(0,1-Math.abs(gx-G.glowX)/(w*.6))*(1-v),tone=Rg();
      g.strokeStyle=tone<.55?"rgba(10,18,38,"+(.18+v*.3).toFixed(3)+")":"rgba("+(150+lit*90|0)+","+(170+lit*70|0)+","+(210+lit*30|0)+","+(.05+lit*.22+(1-v)*.05).toFixed(3)+")";
      g.lineWidth=.6+v*1.1;g.beginPath();g.moveTo(gx,gy);g.quadraticCurveTo(gx+lean*.4,gy-len*.6,gx+lean,gy-len);g.stroke()}
    /* mesquite clumps scattered across the far prairie: irregular canopies on short trunks, smaller with distance */
    var Rq=rng(91),nq=G.mob?7:14;for(i=0;i<nq;i++){var qd=Rq(),qy=p0+H*(.006+qd*qd*.12),qx=G.mob?Rq()*w:w*.5+Rq()*w*.5,qs=H*(.008+qd*.03);if(Math.abs(qx-G.wx)<G.th*.35&&qd<.5)continue;
      var qa=.55+qd*.4;g.fillStyle="rgba(14,22,44,"+qa.toFixed(2)+")";g.fillRect(qx-qs*.04,qy-qs*.5,qs*.08,qs*.5);
      for(var qq=0;qq<9;qq++){var ox=(Rq()-.5)*qs*1.6,oy=-qs*.5-Rq()*qs*.55;blob(g,qx+ox,qy+oy,qs*(.28+Rq()*.25),qs*(.16+Rq()*.12),"rgba(14,22,44,"+qa.toFixed(2)+")","rgba(14,22,44,0)")}
      blob(g,qx+qs*.25,qy-qs*.95,qs*.35,qs*.08,"rgba(236,224,206,"+(.12*(1-qd)).toFixed(3)+")","rgba(236,224,206,0)")}
    /* a ranch track running out toward the windmill */
    g.save();g.beginPath();var tx0=G.wx-G.th*.06,ty0=G.wb+H*.004;g.moveTo(tx0-2,ty0);g.bezierCurveTo(tx0-w*.05,ty0+H*.08,G.mob?w*.3:w*.42,H*.86,G.mob?w*.18:w*.3,H+4);g.lineTo(G.mob?w*.36:w*.47,H+4);g.bezierCurveTo(G.mob?w*.48:w*.56,H*.88,tx0+w*.01,ty0+H*.06,tx0+3,ty0);g.closePath();
    var tg=g.createLinearGradient(0,ty0,0,H);tg.addColorStop(0,"rgba(200,206,222,.32)");tg.addColorStop(.4,"rgba(120,136,170,.14)");tg.addColorStop(1,"rgba(60,74,108,.08)");g.fillStyle=tg;g.fill();g.restore();
    /* fence: cedar posts receding to the horizon, three strands of wire */
    var F=[];for(i=0;i<16;i++){var f=Math.pow(i/15,1.7),fx=(G.mob?-w*.05:w*.04)+(G.wx-G.th*.5-(G.mob?-w*.05:w*.04))*(1-Math.pow(1-i/15,1.5)),fy=H*.98-(H*.98-(hz+H*.025))*(1-Math.pow(1-i/15,.55));F.push([fx,fy,Math.max(3,(1-i/15)*H*.11+H*.012)])}
    F.reverse();
    g.strokeStyle="rgba(214,222,238,.22)";g.lineWidth=.7;for(var wi=0;wi<3;wi++){g.beginPath();F.forEach(function(p,k){var yy=p[1]-p[2]*(.35+wi*.25);if(!k)g.moveTo(p[0],yy);else{var q=F[k-1];g.quadraticCurveTo((p[0]+q[0])/2,(yy+q[1]-q[2]*(.35+wi*.25))/2+p[2]*.03,p[0],yy)}});g.stroke()}
    F.forEach(function(p){var pw=Math.max(1,p[2]*.07);g.fillStyle="#0a1124";g.beginPath();g.moveTo(p[0]-pw*.5,p[1]);g.lineTo(p[0]-pw*.42,p[1]-p[2]);g.lineTo(p[0]+pw*.45,p[1]-p[2]*1.02);g.lineTo(p[0]+pw*.55,p[1]);g.closePath();g.fill();
      g.fillStyle="rgba(230,214,196,.22)";g.fillRect(p[0]+pw*.2,p[1]-p[2],Math.max(.6,pw*.28),p[2])});
    /* the stock tank: a galvanised ring holding the bright sky */
    var sx=G.wx+G.th*.17,sy=G.wb+H*.012,sr=G.th*.17,sh=G.th*.045;
    g.fillStyle="#141f3a";g.beginPath();g.ellipse(sx,sy,sr,sr*.22,0,0,Math.PI);g.lineTo(sx-sr,sy-sh);g.ellipse(sx,sy-sh,sr,sr*.22,0,Math.PI,0,true);g.closePath();g.fill();
    var bg=g.createLinearGradient(sx-sr,0,sx+sr,0);bg.addColorStop(0,"rgba(150,170,210,.1)");bg.addColorStop(.5,"rgba(220,226,240,.28)");bg.addColorStop(.62,"rgba(150,170,210,.12)");bg.addColorStop(1,"rgba(40,60,100,.05)");g.fillStyle=bg;g.fillRect(sx-sr,sy-sh,sr*2,sh+sr*.2);
    g.strokeStyle="rgba(10,18,36,.35)";g.lineWidth=.7;for(i=1;i<4;i++){g.beginPath();g.ellipse(sx,sy-sh+sh*i/4,sr,sr*.22,0,0,Math.PI);g.stroke()}
    var wg=g.createLinearGradient(0,sy-sh-sr*.22,0,sy-sh+sr*.22);wg.addColorStop(0,"#e9e3d9");wg.addColorStop(.5,"#9fb3da");wg.addColorStop(1,"#4c69a6");g.fillStyle=wg;g.beginPath();g.ellipse(sx,sy-sh,sr*.97,sr*.2,0,0,Math.PI*2);g.fill();
    g.strokeStyle="rgba(232,236,246,.55)";g.lineWidth=1;g.beginPath();g.ellipse(sx,sy-sh,sr,sr*.22,0,0,Math.PI*2);g.stroke();
    /* the windmill tower (static): four tapering steel legs, X-bracing, girts, ladder and platform */
    var bx=G.wx,by=G.wb,TH=G.th,bw=TH*.17,tw=TH*.035,top=by-TH;
    function lg(f,side){return [bx+side*(bw+(tw-bw)*f),by-TH*f]}
    g.lineCap="round";
    /* rear legs, fainter */
    g.strokeStyle="rgba(12,20,40,.7)";g.lineWidth=Math.max(1,TH*.006);[-.55,.55].forEach(function(s){g.beginPath();var a=lg(0,s),b=lg(1,s);g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()});
    var LV=[0,.2,.38,.54,.68,.8,.9,1];
    g.strokeStyle="rgba(10,18,36,.9)";g.lineWidth=Math.max(.8,TH*.0035);
    for(i=0;i<LV.length-1;i++){var a1=lg(LV[i],-1),a2=lg(LV[i],1),b1=lg(LV[i+1],-1),b2=lg(LV[i+1],1);g.beginPath();g.moveTo(a1[0],a1[1]);g.lineTo(b2[0],b2[1]);g.moveTo(a2[0],a2[1]);g.lineTo(b1[0],b1[1]);g.moveTo(b1[0],b1[1]);g.lineTo(b2[0],b2[1]);g.stroke()}
    g.strokeStyle="#080f20";g.lineWidth=Math.max(1.4,TH*.011);[-1,1].forEach(function(s){g.beginPath();var a=lg(0,s),b=lg(1,s);g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.stroke()});
    /* rim light on the sunward leg */
    g.strokeStyle="rgba(240,226,206,.42)";g.lineWidth=Math.max(.6,TH*.003);g.beginPath();var r1=lg(0,1),r2=lg(1,1);g.moveTo(r1[0]+TH*.004,r1[1]);g.lineTo(r2[0]+TH*.003,r2[1]);g.stroke();
    /* pump rod down the centre, platform below the head */
    g.strokeStyle="rgba(8,15,32,.85)";g.lineWidth=Math.max(.8,TH*.004);g.beginPath();g.moveTo(bx,top);g.lineTo(bx,by);g.stroke();
    var pl=lg(.93,1);g.fillStyle="#080f20";g.fillRect(bx-(pl[0]-bx)*2.2,pl[1]-TH*.006,(pl[0]-bx)*4.4,TH*.012);
    g.strokeStyle="rgba(8,15,32,.8)";g.lineWidth=Math.max(.6,TH*.0025);g.beginPath();g.moveTo(bx-(pl[0]-bx)*2.2,pl[1]);g.lineTo(bx-(pl[0]-bx)*2.2,pl[1]-TH*.025);g.lineTo(bx+(pl[0]-bx)*2.2,pl[1]-TH*.025);g.lineTo(bx+(pl[0]-bx)*2.2,pl[1]);g.stroke();
    /* concrete footings and the pipe to the tank */
    g.fillStyle="rgba(200,206,222,.25)";[-1,1].forEach(function(s){var a=lg(0,s);g.fillRect(a[0]-TH*.012,a[1]-TH*.004,TH*.024,TH*.008)});
    g.strokeStyle="rgba(8,15,32,.8)";g.lineWidth=Math.max(1,TH*.005);g.beginPath();g.moveTo(bx,by-TH*.01);g.lineTo(sx-sr*.7,by-TH*.01);g.lineTo(sx-sr*.7,sy-sh-TH*.01);g.stroke();
    /* the near foreground: a dark bank of taller grass along the bottom edge */
    var A2=mk(H+2),n2=A2[1];oNear=A2[0];
    var fg=n2.createLinearGradient(0,H*.86,0,H);fg.addColorStop(0,"rgba(8,13,28,0)");fg.addColorStop(1,"rgba(8,13,28,.85)");n2.fillStyle=fg;n2.fillRect(0,H*.86,w,H*.14+2);
    /* grain: a fine paint texture over everything */
    var Rn=rng(57),gn=G.mob?4000:12000;for(i=0;i<gn;i++){n2.fillStyle=Rn()<.5?"rgba(255,255,255,.035)":"rgba(0,0,10,.06)";n2.fillRect(Rn()*w,Rn()*H,1,1)}
    /* live elements: foreground stems that stir in the breeze */
    GR=[];var Rf=rng(77),ns=G.mob?90:220;for(i=0;i<ns;i++){var gv=.84+Rf()*.16;GR.push({x:Rf()*w,y:H*gv,l:H*(.02+Rf()*.05)*(gv-.7)*3,p:Rf()*6,a:.35+Rf()*.5,lw:.8+Rf()*1.2,lit:Rf()})}
  }
  function wheel(t){
    /* the fan wheel, seen three-quarter on: 18 sails between an inner and outer ring, hub, tail vane */
    var H=G.H,TH=G.th,R=G.R,cx=G.wx-R*.08,cy=G.wb-TH*1.0,sq=.62,rot=RM?.3:t*.55;
    c.save();
    /* tail vane, behind the wheel */
    c.fillStyle="#0a1226";c.strokeStyle="rgba(8,14,30,.95)";c.lineWidth=Math.max(1,TH*.004);
    c.beginPath();c.moveTo(cx,cy);c.lineTo(cx+R*1.5,cy-R*.06);c.stroke();
    c.beginPath();c.moveTo(cx+R*1.2,cy-R*.18);c.lineTo(cx+R*2.15,cy-R*.46);c.quadraticCurveTo(cx+R*2.22,cy-R*.1,cx+R*2.15,cy+R*.26);c.lineTo(cx+R*1.2,cy+R*.08);c.closePath();c.fill();
    c.strokeStyle="rgba(240,226,206,.3)";c.lineWidth=.8;c.beginPath();c.moveTo(cx+R*1.2,cy-R*.18);c.lineTo(cx+R*2.15,cy-R*.46);c.stroke();
    /* gearbox */
    c.fillStyle="#080f20";c.fillRect(cx-R*.12,cy-R*.1,R*.36,R*.2);
    c.translate(cx,cy);c.scale(sq,1);
    var N=18,r0=R*.36,i;
    for(i=0;i<N;i++){var a=rot+i/N*Math.PI*2,a1=a-.11,a2=a+.11,ca=Math.cos(a),lit=.5+.5*Math.cos(a+.9);
      c.fillStyle="rgba("+(10+lit*30|0)+","+(18+lit*32|0)+","+(38+lit*44|0)+",.96)";
      c.beginPath();c.moveTo(Math.cos(a1)*r0,Math.sin(a1)*r0);c.lineTo(Math.cos(a1+.03)*R,Math.sin(a1+.03)*R);c.lineTo(Math.cos(a2+.05)*R,Math.sin(a2+.05)*R);c.lineTo(Math.cos(a2-.02)*r0,Math.sin(a2-.02)*r0);c.closePath();c.fill();
      if(lit>.75){c.strokeStyle="rgba(236,224,206,"+((lit-.75)*1.2).toFixed(3)+")";c.lineWidth=.8/sq;c.beginPath();c.moveTo(Math.cos(a2-.02)*r0,Math.sin(a2-.02)*r0);c.lineTo(Math.cos(a2+.05)*R,Math.sin(a2+.05)*R);c.stroke()}}
    c.strokeStyle="#0a1226";c.lineWidth=Math.max(1,TH*.005)/sq;c.beginPath();c.arc(0,0,R*.98,0,Math.PI*2);c.stroke();c.beginPath();c.arc(0,0,r0,0,Math.PI*2);c.stroke();c.beginPath();c.arc(0,0,R*.68,0,Math.PI*2);c.lineWidth=Math.max(.6,TH*.0025)/sq;c.stroke();
    for(i=0;i<6;i++){var b=rot+i/6*Math.PI*2;c.beginPath();c.moveTo(0,0);c.lineTo(Math.cos(b)*r0,Math.sin(b)*r0);c.stroke()}
    c.fillStyle="#080f20";c.beginPath();c.arc(0,0,R*.08,0,Math.PI*2);c.fill();
    c.restore();
  }
  function star(t){
    var x=G.star[0],y=G.star[1],H=G.H,br=RM?1:.86+.14*Math.sin(t*1.3)+.05*Math.sin(t*3.7),r=H*.05;
    var gl=c.createRadialGradient(x,y,0,x,y,r);gl.addColorStop(0,"rgba(255,252,244,"+(.9*br).toFixed(3)+")");gl.addColorStop(.06,"rgba(250,246,236,"+(.55*br).toFixed(3)+")");gl.addColorStop(.25,"rgba(200,214,244,"+(.12*br).toFixed(3)+")");gl.addColorStop(1,"rgba(160,190,240,0)");
    c.fillStyle=gl;c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();
    c.strokeStyle="rgba(250,248,240,"+(.28*br).toFixed(3)+")";c.lineWidth=.8;var sl=H*.022*br;c.beginPath();c.moveTo(x-sl,y);c.lineTo(x+sl,y);c.moveTo(x,y-sl*.8);c.lineTo(x,y+sl*.8);c.stroke();
    c.fillStyle="#fffdf6";c.beginPath();c.arc(x,y,Math.max(1.4,H*.0026),0,Math.PI*2);c.fill();
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
    star(t);wheel(t);
    /* foreground stems stirring */
    for(var k=0;k<GR.length;k++){var s=GR[k],sw=RM?0:Math.sin(t*1.1+s.p+s.x*.004)*s.l*.18;
      c.strokeStyle=s.lit>.8?"rgba(150,168,206,"+(s.a*.35).toFixed(3)+")":"rgba(6,11,24,"+s.a.toFixed(3)+")";c.lineWidth=s.lw;
      c.beginPath();c.moveTo(s.x,s.y);c.quadraticCurveTo(s.x+sw*.3,s.y-s.l*.6,s.x+sw,s.y-s.l);c.stroke()}
    c.setTransform(1,0,0,1,0,0);c.drawImage(oNear,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* the copy column: a calm scrim on the left (desktop); a fade into the page below the art (phones) */
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+(w-2*G.side)*.58,0);lv.addColorStop(0,"rgba(7,12,26,.74)");lv.addColorStop(.6,"rgba(7,12,26,.36)");lv.addColorStop(1,"rgba(7,12,26,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(7,12,26,0)");bv.addColorStop(1,"rgba(7,12,26,.5)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38)}
    else{var mv=c.createLinearGradient(0,H*.8,0,H);mv.addColorStop(0,"rgba(11,18,33,0)");mv.addColorStop(1,"rgba(11,18,33,1)");c.fillStyle=mv;c.fillRect(0,H*.8,w,H*.2+1);c.fillStyle="#0b1221";c.fillRect(0,H,w,h-H)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.star[0],G.star[1]]:[w/2,h/2]}};
})();

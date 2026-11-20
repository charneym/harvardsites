/* ================= HERO FIELD: a lone oak on a prairie rise at first light, the Front Range behind it. Progress Equity's
   own mark is an oak on a gentle hill; the firm is based in Denver. Painted, not drawn: the sky runs from the firm's
   navy to a dawn glow, the peaks catch alpenglow, and the oak is built from thousands of soft leaf dabs in the logo's
   green, lit warm from the low sun on the left. It moves on its own (canopy breathing in the air, drifting mist, a few
   birds), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oBack=null,oTree=null,oLeaf=null,BIRD=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function mix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}
  function rgba(k,a){return "rgba("+Math.round(k[0])+","+Math.round(k[1])+","+Math.round(k[2])+","+a.toFixed(3)+")"}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.4,w*.92):h;
    var yb=mob?U*.9:h*.8;
    var S=mob?U*.76:Math.min(h*.74,cw*.46);
    var cx=mob?w*.56:side+cw*.73;
    var hz=mob?U*.66:h*.64;
    return {mob:mob,side:side,cw:cw,U:U,yb:yb,S:S,cx:cx,hz:hz,sun:mob?-w*.1:side*.2};
  }
  function mk(){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(h*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* the crest of the rise the oak stands on, as in the firm's logo: a long, low arc */
  function hillY(x){var d=(x-G.cx)/(G.mob?w*.9:w*.62);return G.yb+G.S*.03+Math.pow(Math.abs(d),1.7)*G.S*.32}
  function build(){
    var A=mk(),g=A[1];oBack=A[0];var hz=G.hz,U=G.U,S=G.S,R=rng(7),i,x;
    var skyB=G.mob?U:h;
    /* sky: the firm's navy overhead, violet, then rose and a warm band over the plains */
    var sky=g.createLinearGradient(0,0,0,hz);
    sky.addColorStop(0,"#050b38");sky.addColorStop(.26,"#141d55");sky.addColorStop(.5,"#3b3f78");sky.addColorStop(.7,"#836f95");sky.addColorStop(.85,"#c99596");sky.addColorStop(.95,"#eab792");sky.addColorStop(1,"#f3cfa2");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    /* the low sun's glow, off to the left */
    var sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,w*.9);sg.addColorStop(0,"rgba(255,214,160,.55)");sg.addColorStop(.35,"rgba(240,170,140,.18)");sg.addColorStop(1,"rgba(200,150,150,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.55);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(-w,-h,w*3,h*3);g.restore();
    /* painterly cloud banks: overlapping soft strokes, lit rose from below */
    var Rc=rng(23);
    for(i=0;i<(G.mob?26:46);i++){var cy=hz*(.18+Rc()*.62),cx=Rc()*w*1.1-w*.05,len=w*(.08+Rc()*.2),th=U*(.006+Rc()*.012),low=cy/hz,
        col=mix([70,74,128],[236,170,150],sm((low-.35)/.55)),a=.05+Rc()*.09;
      for(var k=0;k<14;k++){var px=cx+(Rc()-.5)*len,py=cy+(Rc()-.5)*th*2.4,rx=len*(.18+Rc()*.3),ry=th*(.5+Rc()*.8);
        g.fillStyle=rgba(mix(col,[250,214,190],Rc()*.3*low),a*(.5+Rc()*.6));g.beginPath();g.ellipse(px,py,rx,ry,(Rc()-.5)*.06,0,6.283);g.fill()}
      /* the lit underside */
      if(low>.45){g.fillStyle=rgba([255,206,170],a*.9);g.beginPath();g.ellipse(cx,cy+th*.7,len*.32,th*.35,0,0,6.283);g.fill()}}
    /* a few last stars in the navy */
    var Rs=rng(31);for(i=0;i<(G.mob?18:40);i++){var sy=Rs()*hz*.3,sa=(1-sy/(hz*.3))*.5*Rs();g.fillStyle="rgba(240,236,255,"+sa.toFixed(3)+")";g.fillRect(Rs()*w,sy,1.1,1.1)}
    /* the Front Range: far peaks with snowfields catching alpenglow */
    function ridge(seed,base,amp,peaks,rough){var Rr=rng(seed),ph=[Rr()*6.28,Rr()*6.28,Rr()*6.28,Rr()*6.28],P=[];
      for(var x=-12;x<=w+12;x+=2){var u=x/w,y=0;peaks.forEach(function(p){var d=(u-p[0])/p[2];y+=p[1]*Math.exp(-d*d)});
        y+=rough*(Math.sin(u*23+ph[0])*.5+Math.sin(u*57+ph[1])*.28+Math.sin(u*131+ph[2])*.14+Math.sin(u*311+ph[3])*.07);
        P.push([x,base-Math.max(0,y)*amp])}return P}
    var far=ridge(3,hz,U*.2,G.mob?[[.1,.55,.1],[.35,.85,.07],[.5,.7,.09],[.78,.6,.12],[1,.5,.1]]:[[.04,.45,.08],[.2,.72,.07],[.33,.95,.05],[.42,.8,.06],[.58,.62,.08],[.74,.82,.06],[.9,.58,.09]],.08);
    var fc=g.createLinearGradient(0,hz-U*.2,0,hz);fc.addColorStop(0,"#4b4a7c");fc.addColorStop(.55,"#5e5a86");fc.addColorStop(1,"#9a8296");
    g.fillStyle=fc;g.beginPath();g.moveTo(-12,hz+2);far.forEach(function(p){g.lineTo(p[0],p[1])});g.lineTo(w+12,hz+2);g.closePath();g.fill();
    /* snowfields: one coherent band under the high ridges, its lower edge broken by smooth noise; alpenglow on the
       sunward (left-facing) slopes, cool lavender on the shaded ones */
    var snowline=hz-U*.09,Rn=rng(41),nph=[Rn()*6,Rn()*6,Rn()*6];
    for(i=1;i<far.length-1;i++){var p=far[i],above=snowline-p[1];if(above<=0)continue;
      var u=p[0]/w,nz=.55+.25*Math.sin(u*41+nph[0])+.14*Math.sin(u*97+nph[1])+.06*Math.sin(u*233+nph[2]);
      var L=above*Math.max(.12,nz)*.8,slope=(far[i+1][1]-far[i-1][1])/4,lit=sm(.5+slope*1.6);
      var top=mix([150,144,190],[252,214,196],lit),bot=mix([110,106,152],[214,160,160],lit);
      var sgd=g.createLinearGradient(0,p[1],0,p[1]+L);sgd.addColorStop(0,rgba(top,.8));sgd.addColorStop(.6,rgba(bot,.45));sgd.addColorStop(1,rgba(bot,0));
      g.fillStyle=sgd;g.fillRect(p[0]-1,p[1],2.2,L)}
    /* the ridgeline catching the first light */
    g.strokeStyle="rgba(255,222,200,.6)";g.lineWidth=1.2;g.beginPath();for(i=0;i<far.length-1;i++){var p1=far[i],p2=far[i+1];if(p2[1]>p1[1]&&p1[1]<snowline+U*.01){g.moveTo(p1[0],p1[1]);g.lineTo(p2[0],p2[1])}}g.stroke();
    /* haze pooling at the foot of the range */
    var hg=g.createLinearGradient(0,hz-U*.08,0,hz);hg.addColorStop(0,"rgba(214,170,170,0)");hg.addColorStop(1,"rgba(226,182,170,.75)");g.fillStyle=hg;g.fillRect(0,hz-U*.08,w,U*.08+2);
    /* the foothills: darker, forested, a softer edge */
    var mid=ridge(11,hz+U*.012,U*.06,[[.15,.6,.18],[.45,.4,.16],[.7,.65,.2],[.95,.5,.15]],.25);
    g.fillStyle="#3c3f63";g.beginPath();g.moveTo(-12,hz+U*.05);mid.forEach(function(p){g.lineTo(p[0],p[1])});g.lineTo(w+12,hz+U*.05);g.closePath();g.fill();
    var Rt=rng(53);for(i=0;i<mid.length;i+=2){var m=mid[i];for(var z=0;z<2;z++){g.fillStyle=rgba(Rt()<.5?[44,48,74]:[70,68,98],.5);g.beginPath();g.ellipse(m[0]+(Rt()-.5)*4,m[1]+2+Rt()*U*.02,1.5+Rt()*2.2,2+Rt()*3,0,0,6.283);g.fill()}}
    g.strokeStyle="rgba(232,170,150,.35)";g.lineWidth=1;g.beginPath();mid.forEach(function(p,j){j?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1])});g.stroke();
    /* the plains: a warm, misty band, then the prairie darkening toward us */
    var pl=g.createLinearGradient(0,hz,0,G.yb+S*.2);pl.addColorStop(0,"#8a7484");pl.addColorStop(.12,"#5d5a6c");pl.addColorStop(.45,"#2f3a3b");pl.addColorStop(1,"#141c22");
    g.fillStyle=pl;g.beginPath();g.moveTo(-12,hz+U*.03);mid.forEach(function(p){g.lineTo(p[0],Math.max(p[1],hz+U*.025))});g.lineTo(w+12,hz+U*.03);g.lineTo(w+12,skyB+2);g.lineTo(-12,skyB+2);g.closePath();g.fill();
    /* long field strokes across the plains, warm on the near-horizon */
    var Rp=rng(61);for(i=0;i<(G.mob?260:600);i++){var py2=hz+U*.03+Math.pow(Rp(),1.6)*(G.yb-hz),dd=(py2-hz)/(G.yb-hz),px2=Rp()*w;
      g.fillStyle=rgba(mix(mix([206,160,146],[120,128,104],Rp()),[46,64,52],sm(dd*1.3)),.1+Rp()*.16);g.beginPath();g.ellipse(px2,py2,w*(.02+Rp()*.06)*(1-dd*.5),.8+dd*2.4,0,0,6.283);g.fill()}
    /* a far line of cottonwoods along a creek, catching a little warm light on their tops */
    var Rw=rng(91),ty0=hz+U*.075;for(x=-10;x<w+10;x+=G.mob?3:2.4){var bandY=ty0+Math.sin(x/w*5.3+1)*U*.012+Math.sin(x/w*13)*U*.005;if(Rw()<.25)continue;
      var th=U*(.006+Rw()*.012);for(var q=0;q<3;q++){g.fillStyle=rgba(mix([30,40,44],[58,66,62],Rw()),.7);g.beginPath();g.ellipse(x+(Rw()-.5)*3,bandY-th*(.4+Rw()*.6),th*(.5+Rw()*.4),th*(.5+Rw()*.3),0,0,6.283);g.fill()}
      if(Rw()<.4){g.fillStyle=rgba([150,130,110],.35);g.beginPath();g.ellipse(x-th*.2,bandY-th*1.05,th*.35,th*.18,0,0,6.283);g.fill()}}
    /* the rise, in the logo's arc: dark grass with a golden crest on the sunward side */
    g.fillStyle="#18241f";g.beginPath();g.moveTo(-12,skyB+2);for(x=-12;x<=w+12;x+=4)g.lineTo(x,hillY(x));g.lineTo(w+12,skyB+2);g.closePath();g.fill();
    var hl=g.createLinearGradient(0,G.yb,0,skyB);hl.addColorStop(0,"rgba(92,112,80,.85)");hl.addColorStop(.35,"rgba(52,70,56,.6)");hl.addColorStop(1,"rgba(14,22,40,.2)");
    g.fillStyle=hl;g.beginPath();g.moveTo(-12,skyB+2);for(x=-12;x<=w+12;x+=4)g.lineTo(x,hillY(x));g.lineTo(w+12,skyB+2);g.closePath();g.fill();
    /* the low sun rakes the near side of the rise: warm, broken strokes of lit grass */
    var Rh=rng(83);for(i=0;i<(G.mob?260:620);i++){x=Rh()*w;var y1=hillY(x),dpt=Math.pow(Rh(),1.5)*(skyB-y1),lt=sm(1-x/(w*.95))*(1-dpt/(skyB-y1+1));
      g.fillStyle=rgba(mix([40,58,46],[188,164,104],lt*(.5+Rh()*.5)),.18+Rh()*.25);g.beginPath();g.ellipse(x,y1+dpt+2,4+Rh()*16,1+Rh()*1.6,(Rh()-.5)*.1,0,6.283);g.fill()}
    /* the tree's long morning shadow, thrown right across the rise */
    g.save();g.translate(G.cx+S*.55,hillY(G.cx)+S*.035);g.scale(1,.08);var shd=g.createRadialGradient(0,0,0,0,0,S*.8);shd.addColorStop(0,"rgba(6,12,20,.55)");shd.addColorStop(1,"rgba(6,12,20,0)");g.fillStyle=shd;g.beginPath();g.arc(0,0,S*.8,0,6.283);g.fill();g.restore();
    /* grass along the crest: short blades, gold where the light rakes across */
    var Rg=rng(71);for(x=-10;x<=w+10;x+=G.mob?1.6:1.2){var y0=hillY(x),lit=sm(1-(x-G.side)/(w*.9)),hh=(2+Rg()*6)*(G.mob?.8:1)*(S/500+.4);
      var col=Rg()<.5?mix([44,62,48],[196,168,110],lit*Rg()):mix([24,36,30],[120,124,84],lit*.6*Rg());
      g.strokeStyle=rgba(col,.55+Rg()*.4);g.lineWidth=.8;g.beginPath();g.moveTo(x,y0+2);g.quadraticCurveTo(x+(Rg()-.3)*2,y0-hh*.5,x+(Rg()-.35)*4,y0-hh);g.stroke()}
    /* the oak, on its own layers so the canopy can breathe */
    var T=mk(),L=mk();oTree=T[0];oLeaf=L[0];oak(T[1],L[1]);
    BIRD=[];var Rb=rng(29);for(var b=0;b<(G.mob?3:5);b++)BIRD.push([Rb(),.22+Rb()*.3,.6+Rb()*.6,Rb()*6.28]);
  }
  function oak(tg,lg){
    var S=G.S,x0=G.cx,y0=hillY(G.cx)+S*.02,R=rng(97),segs=[],tips=[];
    /* skeleton: a short, heavy trunk that divides low into wide, spreading limbs (an open-grown oak) */
    function grow(x,y,ang,len,wid,dep){
      var bend=(R()-.5)*.45,ex=x+Math.cos(ang)*len,ey=y+Math.sin(ang)*len,mx=x+Math.cos(ang+bend)*len*.55,my=y+Math.sin(ang+bend)*len*.55;
      segs.push([x,y,mx,my,ex,ey,wid,wid*.64,dep]);
      if(dep>=6){tips.push([ex,ey,dep]);return}
      var n=dep===0?5:(R()<.6?2:3),spread=dep===0?2.3:(dep===1?1.1:.9);
      for(var k=0;k<n;k++){var f=k/(n-1)-.5,a2=ang+f*spread+(R()-.5)*.3;
        if(dep===0)a2=-Math.PI/2+f*2.5+(R()-.5)*.15;
        a2=Math.max(-Math.PI+.12,Math.min(-.12,a2));
        /* outer limbs run long and nearly level, as on an open-grown oak */
        var lf=dep===0?(.62+Math.abs(f)*.5):(.64+R()*.14);
        grow(ex,ey,a2,len*lf,wid*.64,dep+1)}
      if(dep>=4)tips.push([ex,ey,dep]);
    }
    grow(x0,y0,-Math.PI/2+(R()-.5)*.06,S*.2,S*.085,0);
    /* bark: tapered strokes, dark with a warm lit edge on the sun side */
    function limb(g,s,col,off,scale){var wa=s[6]*scale,wb=s[7]*scale,dx=s[4]-s[0],dy=s[5]-s[1],L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L;
      g.fillStyle=col;g.beginPath();g.moveTo(s[0]+nx*wa/2+off,s[1]+ny*wa/2);g.quadraticCurveTo(s[2]+nx*(wa+wb)/4+off,s[3]+ny*(wa+wb)/4,s[4]+nx*wb/2+off,s[5]+ny*wb/2);
      g.lineTo(s[4]-nx*wb/2+off,s[5]-ny*wb/2);g.quadraticCurveTo(s[2]-nx*(wa+wb)/4+off,s[3]-ny*(wa+wb)/4,s[0]-nx*wa/2+off,s[1]-ny*wa/2);g.closePath();g.fill()}
    /* the root flare where the trunk meets the hill */
    tg.fillStyle="#151b19";tg.beginPath();tg.moveTo(x0-S*.1,y0+S*.014);tg.quadraticCurveTo(x0-S*.045,y0-S*.015,x0-S*.042,y0-S*.07);tg.lineTo(x0+S*.042,y0-S*.07);tg.quadraticCurveTo(x0+S*.046,y0-S*.015,x0+S*.11,y0+S*.016);tg.closePath();tg.fill();
    segs.forEach(function(s){limb(tg,s,"#171d1b",0,1)});
    segs.forEach(function(s){if(s[8]<3)limb(tg,s,"rgba(160,128,98,.34)",-s[6]*.24,.36)});
    var Rk=rng(5);for(var i=0;i<(G.mob?50:110);i++){var ty=y0-Rk()*S*.22,tx=x0+(Rk()-.5)*S*.07;tg.strokeStyle=Rk()<.5?"rgba(8,12,10,.6)":"rgba(130,108,86,.22)";tg.lineWidth=.8;tg.beginPath();tg.moveTo(tx,ty);tg.lineTo(tx+(Rk()-.5)*1.5,ty-3-Rk()*6);tg.stroke()}
    /* foliage: many small clusters at the twig ends plus the crown's envelope, painted as layered leaf dabs over a
       soft shadow underpaint. Shadow first, then mid greens, then sunlit greens and a little gold on the sunward faces. */
    var minX=1e9,maxX=-1e9,minY=1e9;tips.forEach(function(t){minX=Math.min(minX,t[0]);maxX=Math.max(maxX,t[0]);minY=Math.min(minY,t[1])});
    var cx0=(minX+maxX)/2,rx=(maxX-minX)/2+S*.05,cy0=minY+(y0-S*.26-minY)*.52,ry=(y0-S*.26-minY)*.56;
    var CL=[];tips.forEach(function(t){CL.push([t[0],t[1],S*(.045+R()*.03)])});
    var Rf=rng(131),nE=G.mob?70:130;for(i=0;i<nE;i++){var a=Rf()*6.283,d=Math.sqrt(Rf())*.92,px=cx0+Math.cos(a)*rx*d,py=cy0+Math.sin(a)*ry*d;
      /* an oak crown is a broad dome: keep the underside flatter and higher */
      if(py>cy0+ry*.6)continue;CL.push([px,py,S*(.05+Rf()*.035)])}
    /* paint in a shuffled order so no layering edge forms along any row of clusters */
    var Rz=rng(17);CL.forEach(function(k){k.push(Rz())});CL.sort(function(a,b){return a[3]-b[3]});
    var SH=[20,32,32],SH2=[30,48,48],MID=[54,80,62],GRN=[74,103,81],LIT=[124,142,92],GOLD=[212,186,122],Rd=rng(211);
    var LX=cx0-rx*.75,LY=cy0-ry*1.1;function light(px,py){/* light falls off with distance from the sun-facing shoulder of the crown, so its contours curve with the form */var d=Math.hypot((px-LX)/rx,(py-LY)/ry);return Math.max(0,Math.min(1,1.08-d*.42))}
    CL.forEach(function(k){var ug=lg.createRadialGradient(k[0],k[1],0,k[0],k[1],k[2]*.95);ug.addColorStop(0,rgba(SH,.95));ug.addColorStop(.8,rgba(SH,.85));ug.addColorStop(1,rgba(SH,0));
      lg.fillStyle=ug;lg.beginPath();lg.arc(k[0],k[1],k[2]*.95,0,6.283);lg.fill()});
    CL.forEach(function(k){var n=G.mob?44:72;
      for(var j=0;j<n;j++){var a=Rd()*6.283,d=Math.pow(Rd(),.6),px=k[0]+Math.cos(a)*k[2]*d*1.05,py=k[1]+Math.sin(a)*k[2]*d*.85;
        var local=sm(.5+(-Math.cos(a)*.5-Math.sin(a)*.7)*d*.7),L=Math.max(0,Math.min(1,light(px,py)*.6+local*.42+(Rd()-.5)*.3)),col,al=.84;
        /* a continuous ramp from shade to sun, jittered per dab, so no band edges form */
        col=L<.5?mix(SH,MID,sm(L/.5)*(.6+Rd()*.4)):mix(MID,LIT,sm((L-.5)/.5)*(.55+Rd()*.45));
        if(L>.82&&Rd()<.18)col=mix(LIT,GOLD,.35+Rd()*.5);
        var sz=S*(.006+Rd()*.008);lg.fillStyle=rgba(col,al);lg.beginPath();lg.ellipse(px,py,sz*1.35,sz*.8,Rd()*3.14,0,6.283);lg.fill()}});
    /* broken edge: loose leaves feathering out from the crown's silhouette */
    CL.forEach(function(k){var ex=(k[0]-cx0)/rx,ey=(k[1]-cy0)/ry;if(ex*ex+ey*ey<.62)return;
      for(var j=0;j<7;j++){var a=Math.atan2(ey,ex)+(Rd()-.5)*2.2,px=k[0]+Math.cos(a)*k[2]*(1.02+Rd()*.25),py=k[1]+Math.sin(a)*k[2]*(.85+Rd()*.2),L=Math.max(0,Math.min(1,light(px,py)*.9+(Rd()-.5)*.2)),sz=S*(.005+Rd()*.006);
      lg.fillStyle=rgba(L<.5?mix(SH,MID,L/.5):mix(MID,LIT,(L-.5)/.5),.8);lg.beginPath();lg.ellipse(px,py,sz*1.3,sz*.8,Rd()*3.14,0,6.283);lg.fill()}});
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var S=G.S,hz=G.hz,U=G.U;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oBack,0,0);
    /* mist drifting slowly over the plains */
    c.setTransform(dpr,0,0,dpr,0,0);
    for(var m=0;m<3;m++){var mx=((m*.37+t*.004*(1+m*.4))%1.4-.2)*w,my=hz+U*(.04+m*.025);var mg=c.createRadialGradient(mx,my,0,mx,my,w*.28);mg.addColorStop(0,"rgba(236,196,186,"+(.1-m*.02).toFixed(3)+")");mg.addColorStop(1,"rgba(236,196,186,0)");
      c.save();c.translate(mx,my);c.scale(1,.07);c.translate(-mx,-my);c.fillStyle=mg;c.fillRect(mx-w*.3,my-w*.3,w*.6,w*.6);c.restore()}
    /* the oak: trunk steady, the crown breathing a little in the morning air (anchored at the root) */
    var bx=G.cx,by=hillY(G.cx),sway=Math.sin(t*.55)*.006+Math.sin(t*1.3+1)*.0025;
    c.setTransform(1,0,0,1,0,0);c.drawImage(oTree,0,0);
    c.setTransform(1,0,sway,1,-sway*by*dpr,0);c.drawImage(oLeaf,0,0);
    c.setTransform(dpr,0,0,dpr,0,0);
    /* a few birds crossing high over the range */
    c.strokeStyle="rgba(30,34,64,.7)";c.lineWidth=1.1;c.beginPath();
    for(var bi=0;bi<BIRD.length;bi++){var B=BIRD[bi],bx2=((B[0]+t*.006*B[2])%1)*w,by2=hz*B[1]+Math.sin(t*.4+B[3])*U*.01,fl=Math.sin(t*3.2*B[2]+B[3])*2.6,bs=Math.max(3.5,U*.007);
      c.moveTo(bx2-bs,by2-fl*.4);c.quadraticCurveTo(bx2-bs*.4,by2-bs*.5-fl,bx2,by2);c.quadraticCurveTo(bx2+bs*.4,by2-bs*.5-fl,bx2+bs,by2-fl*.4)}c.stroke();
    /* a quiet scrim behind the headline on desktop */
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.55,0);lv.addColorStop(0,"rgba(5,11,56,.55)");lv.addColorStop(1,"rgba(5,11,56,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT,lw0=0;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(function(){var nw=document.documentElement.clientWidth||innerWidth;if(nw===lw0&&Math.abs(innerHeight-h)<120&&w<861)return;lw0=nw;size()},120)});lw0=document.documentElement.clientWidth||innerWidth;size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.yb-G.S*.5]:[w/2,h/2]}};
})();

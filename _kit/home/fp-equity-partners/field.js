/* ================= HERO FIELD: an old red-brick Lombard factory on a canal at dawn, the Alps behind it.
   F&P Equity Partners invests in Italian industrial companies ("l'incontro tra industria e finanza"), from its office in
   Milan. The scene is the plain north-west of the city at first light: Monte Rosa's snowfields catching the pink sun, rows
   of poplars in the mist, and a brick works with sawtooth (shed) roofs and a tall chimney, its windows lit for the first
   shift, mirrored in a still canal. Painted in soft layers (haze, grain, glow), never flat shapes. It animates on its own
   (mist, water, a wisp from the chimney), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,oGrain=null,oMist=null,LW=[],CH=null;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.4,w*.95):h;
    var hz=mob?U*.86:h*.68;
    var S=mob?U*.62:Math.min(h*.62,cw*.44);
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,fx:mob?w*.08:side+cw*.5};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function blob(g,x,y,rx,ry,col){g.save();g.translate(x,y);g.scale(1,ry/rx);var gr=g.createRadialGradient(0,0,0,0,0,rx);gr.addColorStop(0,col);gr.addColorStop(1,col.replace(/[\d.]+\)$/,"0)"));g.fillStyle=gr;g.beginPath();g.arc(0,0,rx,0,Math.PI*2);g.fill();g.restore()}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(hz+2),g=A[1];oTop=A[0];LW=[];
    /* dawn: the firm's deep navy overhead, its logo blue lower down, then rose and a pale gold band over the plain */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#03153a");sky.addColorStop(.22,"#112e5e");sky.addColorStop(.42,"#2f5288");sky.addColorStop(.58,"#6f7fa6");sky.addColorStop(.7,"#b597a6");sky.addColorStop(.82,"#e2b4a2");sky.addColorStop(1,"#f1d2ae");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    var sx=G.mob?w*.3:G.side+G.cw*.28;
    g.save();g.translate(sx,hz-S*.08);g.scale(1,.38);var sg=g.createRadialGradient(0,0,0,0,0,w*.55);sg.addColorStop(0,"rgba(255,226,180,.75)");sg.addColorStop(.35,"rgba(240,186,160,.22)");sg.addColorStop(1,"rgba(200,150,160,0)");g.fillStyle=sg;g.fillRect(-w*1.2,-hz*3.2,w*2.4,hz*6.4);g.restore();
    /* long brushed clouds, lit from below */
    var Rc=rng(7);for(var i=0;i<24;i++){var cy=hz*(.08+Rc()*.5),cx=Rc()*w,cwd=w*(.07+Rc()*.17),lit=cy>hz*.3,a=.05+Rc()*.08;
      blob(g,cx,cy,cwd,U*(.005+Rc()*.011),lit?"rgba(246,196,176,"+a.toFixed(3)+")":"rgba(120,146,196,"+(a*.9).toFixed(3)+")")}
    /* the Alps: a far blue range, then the Monte Rosa massif with its snowfields in alpenglow */
    var mbase=hz-S*.2;
    function ridge(seed,amp,yb,step,rough){var R=rng(seed),pts=[],y=0,v=0;for(var x=-20;x<=w+20;x+=step){v+=(R()-.5)*rough;v*=.9;pts.push([x,v])}return pts}
    var far=ridge(3,1,0,6,1.2);
    g.save();g.filter="blur("+(U*.002).toFixed(1)+"px)";
    g.fillStyle="rgba(122,138,176,.55)";g.beginPath();g.moveTo(-20,mbase+2);
    far.forEach(function(p){var x=p[0],k=x/w,hgt=S*(.1+.05*Math.sin(k*9+1)+.04*Math.sin(k*23))+p[1]*S*.04;g.lineTo(x,mbase-hgt)});g.lineTo(w+20,mbase+2);g.closePath();g.fill();g.restore();
    /* the massif: broad peaks with snow, rose on the lit faces, blue in the shade */
    var mx=G.mob?w*.62:G.side+G.cw*.62,mw=G.mob?w*.9:G.cw*.7,peaks=[[-.46,.17],[-.3,.24],[-.14,.31],[-.02,.36],[.08,.34],[.2,.3],[.36,.22],[.54,.15]];
    var P=[];for(var x=-20;x<=w+20;x+=3){var hgt=0;peaks.forEach(function(pk){var px=mx+pk[0]*mw,d=Math.abs(x-px)/(mw*.15);hgt=Math.max(hgt,S*pk[1]*Math.max(0,1-Math.pow(d,1.35)*.5))});
      hgt+=S*.01*Math.sin(x*.05)+S*.006*Math.sin(x*.17)+S*.003*Math.sin(x*.41);P.push([x,mbase-Math.max(S*.05,hgt)])}
    var mg=g.createLinearGradient(0,mbase-S*.42,0,mbase);mg.addColorStop(0,"#d9c3cf");mg.addColorStop(.45,"#9aa2c4");mg.addColorStop(1,"#6f7ea8");
    g.fillStyle=mg;g.beginPath();g.moveTo(-20,mbase+2);P.forEach(function(p){g.lineTo(p[0],p[1])});g.lineTo(w+20,mbase+2);g.closePath();g.fill();
    /* snow and light: each peak's sunlit flank (facing the sunrise, on the left) painted pink-gold, shadowed flanks cool */
    g.save();g.beginPath();g.moveTo(-20,mbase+2);P.forEach(function(p){g.lineTo(p[0],p[1])});g.lineTo(w+20,mbase+2);g.closePath();g.clip();
    var Rs=rng(19);
    for(var j=0;j<P.length-1;j++){var p0=P[j],p1=P[j+1],up=p1[1]<p0[1],depth=mbase-p0[1];if(depth<S*.07)continue;
      var sl=S*(.04+Rs()*.08)*(depth/(S*.4));g.strokeStyle=up?"rgba(255,224,214,"+(.5+Rs()*.35).toFixed(2)+")":"rgba(120,132,180,"+(.35+Rs()*.3).toFixed(2)+")";
      g.lineWidth=3.4;g.beginPath();g.moveTo(p0[0],p0[1]+1);g.lineTo(p0[0]+(up?-1:1)*sl*.25,p0[1]+sl);g.stroke()}
    var sn=g.createLinearGradient(0,mbase-S*.42,0,mbase-S*.1);sn.addColorStop(0,"rgba(255,236,228,.55)");sn.addColorStop(1,"rgba(255,236,228,0)");g.fillStyle=sn;g.fillRect(0,0,w,mbase);
    var hzg=g.createLinearGradient(0,mbase-S*.14,0,mbase);hzg.addColorStop(0,"rgba(214,180,186,0)");hzg.addColorStop(1,"rgba(222,190,184,.85)");g.fillStyle=hzg;g.fillRect(0,0,w,mbase+2);
    g.restore();
    /* the plain: a low band of haze, then rows of poplars receding, softer and bluer the farther they stand */
    var pl=g.createLinearGradient(0,mbase,0,hz);pl.addColorStop(0,"#c9a9aa");pl.addColorStop(1,"#6c6a78");g.fillStyle=pl;g.fillRect(0,mbase,w,hz-mbase+2);
    var rows=[[mbase+S*.01,.06,"rgba(150,140,160,.55)",1.4,41],[mbase+S*.04,.09,"rgba(108,104,126,.72)",1,43],[hz-S*.06,.14,"rgba(58,60,76,.9)",.6,47]];
    rows.forEach(function(r){var R=rng(r[4]);g.save();g.filter="blur("+(r[3]*U*.0016).toFixed(1)+"px)";
      for(var x=-10;x<w+10;x+=S*r[1]*.16*(.6+R()*.9)){if(R()<.18){x+=S*r[1]*.6;continue}var th=S*r[1]*(.7+R()*.5),tw=th*.16;
        g.fillStyle=r[2];g.beginPath();g.ellipse(x,r[0]-th*.5,tw,th*.5,0,0,Math.PI*2);g.fill()}g.restore();
      var mh=g.createLinearGradient(0,r[0]-S*.05,0,r[0]+2);mh.addColorStop(0,"rgba(226,196,190,0)");mh.addColorStop(1,"rgba(226,196,190,.5)");g.fillStyle=mh;g.fillRect(0,r[0]-S*.05,w,S*.05+2)});
    /* the brick works */
    factory(g,hz);
    /* the canal bank: a stone edge with a towpath */
    var bk=g.createLinearGradient(0,hz-U*.016,0,hz);bk.addColorStop(0,"#5a4e52");bk.addColorStop(1,"#2a2430");g.fillStyle=bk;g.fillRect(-10,hz-U*.016,w+20,U*.016+2);
    g.fillStyle="rgba(255,214,170,.3)";g.fillRect(-10,hz-U*.016,w+20,1);
    /* grain: a fixed painterly speckle */
    var Gr=mk(h),gg=Gr[1],Rn=rng(97);oGrain=Gr[0];var n=Math.round(w*h/(G.mob?60:40));
    for(var q=0;q<n;q++){var v=Rn();gg.fillStyle=v<.5?"rgba(0,0,0,"+(.05+Rn()*.06).toFixed(3)+")":"rgba(255,244,230,"+(.025+Rn()*.04).toFixed(3)+")";gg.fillRect(Rn()*w,Rn()*h,1+Rn()*1.4,1+Rn()*1.4)}
    /* mist bank, drawn once and drifted in the frame */
    var M=mk(U*.3),mg2=M[1],Rm=rng(53);oMist=M[0];
    for(var m=0;m<36;m++)blob(mg2,Rm()*w,U*(.12+Rm()*.1),w*(.08+Rm()*.14),U*(.012+Rm()*.02),"rgba(236,214,206,"+(.12+Rm()*.12).toFixed(3)+")");
  }
  function factory(g,base){
    var S=G.S,x0=G.fx,R=rng(29),FW=G.mob?w*1.05:Math.min(G.cw*.47,S*1.5),ground=base-G.U*.016;
    var bays=G.mob?7:9,bw=FW/bays,wallH=S*.26,top=ground-wallH;
    /* the long hall: brick walls warmed by the sunrise on the left, in shade to the right */
    var wg=g.createLinearGradient(x0,0,x0+FW,0);wg.addColorStop(0,"#a35a43");wg.addColorStop(.5,"#7e4537");wg.addColorStop(1,"#5a3330");
    g.fillStyle=wg;g.fillRect(x0,top,FW,wallH);
    var vg=g.createLinearGradient(0,top,0,ground);vg.addColorStop(0,"rgba(255,190,150,.16)");vg.addColorStop(1,"rgba(30,16,22,.35)");g.fillStyle=vg;g.fillRect(x0,top,FW,wallH);
    /* brick courses */
    g.strokeStyle="rgba(40,18,16,.16)";g.lineWidth=.5;g.beginPath();for(var y=top+2;y<ground;y+=Math.max(1.8,S*.006)){g.moveTo(x0,y);g.lineTo(x0+FW,y)}g.stroke();
    /* the sawtooth roofs: a steep glazed north face and a sloping tiled back on each bay */
    var rh=S*.13;
    for(var b=0;b<bays;b++){var bx=x0+b*bw;
      g.fillStyle="#4a3436";g.beginPath();g.moveTo(bx,top);g.lineTo(bx+bw*.82,top-rh);g.lineTo(bx+bw*.82,top);g.closePath();g.fill();
      var tg=g.createLinearGradient(bx,top-rh,bx+bw*.82,top);tg.addColorStop(0,"#b46a50");tg.addColorStop(1,"#7a4438");g.fillStyle=tg;
      g.beginPath();g.moveTo(bx,top);g.lineTo(bx+bw*.82,top-rh);g.lineTo(bx+bw*.82+1,top-rh*.94);g.lineTo(bx+3,top);g.closePath();g.fill();
      g.strokeStyle="rgba(255,214,180,.45)";g.lineWidth=1;g.beginPath();g.moveTo(bx,top);g.lineTo(bx+bw*.82,top-rh);g.stroke();
      /* the glazed face, catching the cold sky */
      var gl=g.createLinearGradient(0,top-rh,0,top);gl.addColorStop(0,"#9fb0d0");gl.addColorStop(1,"#4b5a7c");g.fillStyle=gl;g.fillRect(bx+bw*.82,top-rh,bw*.18,rh);
      g.strokeStyle="rgba(30,34,52,.6)";g.lineWidth=.7;g.beginPath();for(var m=1;m<3;m++){g.moveTo(bx+bw*.82+bw*.18*m/3,top-rh);g.lineTo(bx+bw*.82+bw*.18*m/3,top)}g.moveTo(bx+bw*.82,top-rh*.5);g.lineTo(bx+bw,top-rh*.5);g.stroke();
      /* pilasters and the arched windows of each bay, most lit for the first shift */
      g.fillStyle="rgba(60,26,22,.45)";g.fillRect(bx,top,Math.max(1.5,bw*.06),wallH);
      var ww=bw*.46,wh=wallH*.52,wx=bx+(bw-ww)/2,wy=top+wallH*.2,lit=R()<.8;
      g.fillStyle="#5c2f28";g.beginPath();g.moveTo(wx-2,wy+wh+2);g.lineTo(wx-2,wy+ww*.5);g.arc(wx+ww/2,wy+ww*.5,ww/2+2,Math.PI,0);g.lineTo(wx+ww+2,wy+wh+2);g.closePath();g.fill();
      var lg=g.createLinearGradient(0,wy,0,wy+wh);lg.addColorStop(0,lit?"rgba(255,222,160,.95)":"rgba(90,104,140,.9)");lg.addColorStop(1,lit?"rgba(240,160,92,.9)":"rgba(40,46,70,.9)");
      g.fillStyle=lg;g.beginPath();g.moveTo(wx,wy+wh);g.lineTo(wx,wy+ww*.5);g.arc(wx+ww/2,wy+ww*.5,ww/2,Math.PI,0);g.lineTo(wx+ww,wy+wh);g.closePath();g.fill();
      g.strokeStyle="rgba(50,26,22,.8)";g.lineWidth=Math.max(.6,S*.003);g.beginPath();for(var k=1;k<4;k++){g.moveTo(wx+ww*k/4,wy+ww*.5-(k==2?ww*.5:ww*.43));g.lineTo(wx+ww*k/4,wy+wh)}for(k=1;k<4;k++){g.moveTo(wx,wy+ww*.5+(wh-ww*.5)*k/4);g.lineTo(wx+ww,wy+ww*.5+(wh-ww*.5)*k/4)}g.stroke();
      if(lit){blob(g,wx+ww/2,wy+wh*.55,ww*1.3,wh*.8,"rgba(255,200,140,.16)");LW.push([wx+ww/2,ww,1])}
    }
    /* the office block at the front, two floors with a cornice and a name band */
    var ox=x0+FW*(G.mob?.02:.04),ow=bw*1.9,oh=wallH*1.5,ot=ground-oh;
    var og=g.createLinearGradient(ox,0,ox+ow,0);og.addColorStop(0,"#c8a58a");og.addColorStop(1,"#957660");g.fillStyle=og;g.fillRect(ox,ot,ow,oh);
    g.fillStyle="#6d5040";g.fillRect(ox-3,ot,ow+6,Math.max(3,S*.014));g.fillStyle="rgba(255,226,196,.5)";g.fillRect(ox-3,ot,ow+6,1);
    g.fillStyle="#8c6450";g.fillRect(ox,ot+oh*.47,ow,Math.max(2,S*.008));
    for(var f=0;f<2;f++)for(var cc=0;cc<4;cc++){var ex=ox+ow*(.08+cc*.235),ey=ot+oh*(.13+f*.47),ew=ow*.13,eh=oh*.27,on=R()<.55;
      var eg=g.createLinearGradient(0,ey,0,ey+eh);eg.addColorStop(0,on?"rgba(255,226,170,.95)":"rgba(110,124,156,.85)");eg.addColorStop(1,on?"rgba(236,170,104,.9)":"rgba(48,56,80,.9)");g.fillStyle=eg;g.fillRect(ex,ey,ew,eh);
      g.strokeStyle="rgba(240,230,214,.6)";g.lineWidth=Math.max(.6,S*.003);g.strokeRect(ex,ey,ew,eh);if(on)LW.push([ex+ew/2,ew,.6])}
    /* the chimney: tapered brick, a stone band near the top, rising behind the hall */
    var cx=x0+FW*(G.mob?.7:.72),cb=top-rh*.4,ch=S*(G.mob?.5:.5),ctop=cb-ch,cwb=S*.05,cwt=S*.032;
    var cg=g.createLinearGradient(cx-cwb/2,0,cx+cwb/2,0);cg.addColorStop(0,"#b8664a");cg.addColorStop(.55,"#8a4a3a");cg.addColorStop(1,"#5e3330");g.fillStyle=cg;
    g.beginPath();g.moveTo(cx-cwb/2,cb);g.lineTo(cx-cwt/2,ctop);g.lineTo(cx+cwt/2,ctop);g.lineTo(cx+cwb/2,cb);g.closePath();g.fill();
    g.strokeStyle="rgba(50,20,18,.18)";g.lineWidth=.5;g.beginPath();for(var yy=ctop+3;yy<cb;yy+=Math.max(2,S*.007)){var kk=(yy-ctop)/ch,hw=(cwt+(cwb-cwt)*kk)/2;g.moveTo(cx-hw,yy);g.lineTo(cx+hw,yy)}g.stroke();
    g.fillStyle="#d8c0a8";g.fillRect(cx-cwt*.62,ctop+ch*.04,cwt*1.24,Math.max(2,S*.01));g.fillStyle="#6a3a30";g.fillRect(cx-cwt*.66,ctop,cwt*1.32,Math.max(2,S*.012));
    g.strokeStyle="rgba(255,220,190,.5)";g.lineWidth=1;g.beginPath();g.moveTo(cx-cwb/2,cb);g.lineTo(cx-cwt/2,ctop);g.stroke();
    CH=[cx,ctop,cwt];
    /* a pale water tower on iron legs at the far end, and a tree or two by the gate */
    var tx=x0+FW*(G.mob?.92:.9),tb=top-rh*.2,tl=S*.2,tw2=S*.07;
    g.strokeStyle="#3a2c34";g.lineWidth=Math.max(1,S*.004);g.beginPath();g.moveTo(tx-tw2*.4,tb);g.lineTo(tx-tw2*.3,tb-tl);g.moveTo(tx+tw2*.4,tb);g.lineTo(tx+tw2*.3,tb-tl);g.moveTo(tx-tw2*.36,tb-tl*.5);g.lineTo(tx+tw2*.36,tb-tl*.5);g.stroke();
    var tk=g.createLinearGradient(tx-tw2/2,0,tx+tw2/2,0);tk.addColorStop(0,"#b9aaa8");tk.addColorStop(1,"#6e6470");g.fillStyle=tk;g.fillRect(tx-tw2/2,tb-tl-S*.07,tw2,S*.07);
    g.fillStyle="#4a3e48";g.beginPath();g.moveTo(tx-tw2*.56,tb-tl-S*.07);g.lineTo(tx,tb-tl-S*.1);g.lineTo(tx+tw2*.56,tb-tl-S*.07);g.closePath();g.fill();
    var Rt=rng(61);for(var t=0;t<(G.mob?2:4);t++){var px=t<2?x0-S*(.05+t*.09):x0+FW+S*(.04+(t-2)*.1),th=S*(.32+Rt()*.12);g.save();g.filter="blur(.6px)";
      for(var l=0;l<9;l++)blob(g,px+(Rt()-.5)*th*.12,ground-th*(.3+l*.07),th*.08,th*.14,"rgba(40,44,52,.55)");g.restore()}
    /* the warm spill under the lit windows onto the bank */
    blob(g,x0+FW*.45,ground,FW*.5,G.U*.008,"rgba(255,196,140,.22)");
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
    /* a faint wisp from the chimney, drifting with the morning air */
    if(CH){for(var s=0;s<14;s++){var k=((s/14)+t*.025)%1,px=CH[0]+k*S*.5+Math.sin(t*.4+s)*S*.01,py=CH[1]-k*S*.16,r=CH[2]*(.6+k*3.2);
      blob(c,px,py,r,r*.6,"rgba(236,220,214,"+(.16*(1-k)*Math.min(1,k*6)).toFixed(3)+")")}}
    /* mist drifting across the plain behind the works */
    var mo=(t*S*.006)%w;c.globalAlpha=e*.85;c.drawImage(oMist,0,0,sw,oMist.height,mo-w,hz-U*.24,w,U*.3);c.drawImage(oMist,0,0,sw,oMist.height,mo,hz-U*.24,w,U*.3);c.globalAlpha=e;
    /* the canal: a darker, moving mirror */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#6a6274");wg.addColorStop(.25,"#2b3656");wg.addColorStop(.65,"#0c1f42");wg.addColorStop(1,"#011330");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz);c.globalAlpha=e*.55;
    for(var y=0;y<RH;y+=2){var kk=y/RH,off=Math.sin(y*.13+t*1.0)*(.5+kk*5)+Math.sin(y*.045-t*.5)*(kk*3.5),sy2=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy2,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(1,19,48,.05)");dkn.addColorStop(.5,"rgba(1,19,48,.42)");dkn.addColorStop(1,"rgba(1,19,48,.88)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* broken streaks of window light, and the dawn on the water */
    c.globalCompositeOperation="lighter";var Rr=rng(5);
    for(var i=0;i<LW.length;i++){var P=LW[i],pw=P[1]*.7,str=P[2],len=(wb-hz)*(.3+.3*str);
      for(var d=2;d<len;d+=Math.max(3,U*.006)){var q=d/len,a=(1-q)*(.12+.1*str)*(.6+.4*Math.sin(t*2+d*.21+i)),ox=Math.sin(t*1.3+d*.09+i*2.1)*(1+q*6);if(a<.01)continue;
        c.fillStyle="rgba(255,206,150,"+a.toFixed(3)+")";c.fillRect(P[0]-pw/2*(1-q*.4)+ox,hz+d,pw*(1-q*.4)*(.6+Rr()*.5),1.3)}}
    var sx=G.mob?w*.3:G.side+G.cw*.28;
    for(d=2;d<(wb-hz)*.5;d+=Math.max(3,U*.007)){q=d/((wb-hz)*.5);a=(1-q)*.1*(.6+.4*Math.sin(t*1.7+d*.17));c.fillStyle="rgba(255,214,176,"+a.toFixed(3)+")";var ww2=S*(.5-q*.3)*(.5+Rr()*.5);c.fillRect(sx-ww2/2+Math.sin(t+d*.1)*4,hz+d,ww2,1.2)}
    c.globalCompositeOperation="source-over";
    c.strokeStyle="rgba(214,214,232,.08)";c.lineWidth=1;c.beginPath();var Rp=rng(23);
    for(var rr=0;rr<(G.mob?22:46);rr++){var ry=hz+Math.pow(Rp(),1.4)*(wb-hz),rx=((Rp()+t*.006*(1+Rp()))%1)*w,rl=S*(.04+Rp()*.1)*(1+(ry-hz)/(wb-hz));c.moveTo(rx,ry);c.lineTo(rx+rl,ry)}c.stroke();
    c.globalAlpha=e*.9;c.drawImage(oGrain,0,0,w,h);c.globalAlpha=e;
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(1,14,38,.74)");lv.addColorStop(.55,"rgba(1,14,38,.4)");lv.addColorStop(1,"rgba(1,14,38,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(1,19,48,0)");bv.addColorStop(1,"rgba(1,19,48,.55)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w*.6:G.side+G.cw*.72,G.hz-G.S*.3]:[w/2,h/2]}};
})();

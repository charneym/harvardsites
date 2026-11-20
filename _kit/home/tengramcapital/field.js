/* ================= HERO FIELD: downtown Westport across the Saugatuck River at dusk. Tengram's office is at 15 Riverside
   Avenue, on the west bank of the Saugatuck, looking across the water at the backs of the town's shops. The scene is that
   view: a row of clapboard and brick storefront buildings on a stone bulkhead, shop windows lit for the evening, a low
   arched bridge with its lamps on, and the river mirroring all of it. Painted in soft layers (haze, grain, glow) rather
   than flat shapes. It animates on its own (water, a moored boat, lights), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,oGrain=null,LW=[],LAMP=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.9):h;
    var hz=mob?U*.8:h*.66;
    var S=mob?U*.66:Math.min(h*.6,cw*.42);
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,x0:mob?-6:side+cw*.42,x1:w+8,bx1:mob?w*.14:side+cw*.4};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function blob(g,x,y,rx,ry,col){g.save();g.translate(x,y);g.scale(1,ry/rx);var gr=g.createRadialGradient(0,0,0,0,0,rx);gr.addColorStop(0,col);gr.addColorStop(1,col.replace(/[\d.]+\)$/,"0)"));g.fillStyle=gr;g.beginPath();g.arc(0,0,rx,0,Math.PI*2);g.fill();g.restore()}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(hz+2),g=A[1];oTop=A[0];LW=[];LAMP=[];
    /* dusk: Tengram's deep navy overhead, the logo blue softened into the evening, a warm band low over the town */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#0a1622");sky.addColorStop(.26,"#152d47");sky.addColorStop(.46,"#2f4f74");sky.addColorStop(.6,"#62728e");sky.addColorStop(.7,"#a3929a");sky.addColorStop(.8,"#d3a690");sky.addColorStop(1,"#e9c194");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    /* the last light behind the town, low and wide */
    g.save();g.translate(G.mob?w*.6:G.side+G.cw*.74,hz-S*.3);g.scale(1,.42);var sg=g.createRadialGradient(0,0,0,0,0,w*.6);sg.addColorStop(0,"rgba(250,204,150,.6)");sg.addColorStop(.4,"rgba(214,160,140,.18)");sg.addColorStop(1,"rgba(180,140,140,0)");g.fillStyle=sg;g.fillRect(-w,-hz*3.2,w*2,hz*6.4);g.restore();
    /* soft, brushed evening cloud: long strokes catching the light from below */
    var Rc=rng(7);for(var i=0;i<26;i++){var cy=hz*(.1+Rc()*.62),cx=Rc()*w,cwd=w*(.06+Rc()*.16),lit=cy>hz*.45,a=.05+Rc()*.09;
      blob(g,cx,cy,cwd,U*(.006+Rc()*.012),lit?"rgba(236,190,160,"+a.toFixed(3)+")":"rgba(120,150,184,"+(a*.9).toFixed(3)+")")}
    /* the evening star */
    g.fillStyle="rgba(255,250,236,.9)";g.beginPath();g.arc(G.mob?w*.82:G.side+G.cw*.9,hz*.16,Math.max(1.1,U*.0018),0,Math.PI*2);g.fill();
    blob(g,G.mob?w*.82:G.side+G.cw*.9,hz*.16,U*.012,U*.012,"rgba(255,240,210,.25)");
    /* the far bank: soft masses of trees behind the town, in two hazy layers */
    var Rt=rng(13),bankTop=hz-U*.012;
    g.save();g.filter="blur("+Math.max(1,U*.004).toFixed(1)+"px)";
    for(var t=0;t<40;t++){var tx=-20+Rt()*(w+40),tr=S*(.05+Rt()*.06);blob(g,tx,bankTop-S*(.2+Rt()*.14)*(.6+.4*Math.min(1,Math.max(0,(tx-G.x0)/(G.x1-G.x0)))),tr,tr*.75,"rgba(44,60,70,.6)")}
    for(t=0;t<60;t++){var tx2=-20+Rt()*(w+40),tr2=S*(.04+Rt()*.05);blob(g,tx2,bankTop-S*(.1+Rt()*.12)*(.6+.4*Math.min(1,Math.max(0,(tx2-G.x0)/(G.x1-G.x0)))),tr2,tr2*.8,"rgba(22,34,40,.8)")}
    g.restore();
    /* the town: a row of storefront buildings on the bank, receding to the left (nearer on the right) */
    var T=mk(hz+2),tg=T[1],Rb=rng(31),x=G.x0,types=["gable","brick","side","flat","gable","brick","side","gable","flat","brick","gable","side"],k=0,span=G.x1-G.x0;
    G.bank=function(xx){var p=Math.max(0,Math.min(1,(xx-G.x0)/span));return G.mob?[bankTop-(1-p)*U*.03,.8+.38*p]:[bankTop-(1-p)*U*.022,.58+.6*Math.pow(p,1.15)]};
    while(x<G.x1){var B=G.bank(x),sc=B[1],ty=types[k%types.length],bw=S*sc*(ty==="flat"?.34:ty==="brick"?.3:ty==="side"?.36:.22)*(.85+Rb()*.35),
      fl=ty==="brick"?(Rb()<.5?3:4):ty==="flat"?(Rb()<.5?1:2):2+(Rb()<.4?1:0);
      house(tg,x,B[0],bw,fl,ty,Rb,k,sc);x+=bw+S*sc*(Rb()<.25?.05+Rb()*.06:.004+Rb()*.012);k++}
    /* evening haze over the far end of the row, and a soft brushed edge */
    var hzG=tg.createLinearGradient(G.x0,0,G.x1,0);hzG.addColorStop(0,"rgba(80,100,128,.42)");hzG.addColorStop(.5,"rgba(80,100,128,.14)");hzG.addColorStop(1,"rgba(80,100,128,0)");
    tg.globalCompositeOperation="source-atop";tg.fillStyle=hzG;tg.fillRect(0,0,w,hz);
    var vg=tg.createLinearGradient(0,bankTop-S*1.1,0,bankTop);vg.addColorStop(0,"rgba(120,140,170,.18)");vg.addColorStop(1,"rgba(14,26,36,.12)");tg.fillStyle=vg;tg.fillRect(0,0,w,hz);tg.globalCompositeOperation="source-over";
    g.save();g.filter="blur("+(G.mob?.35:.5)+"px)";g.setTransform(1,0,0,1,0,0);g.drawImage(T[0],0,0);g.restore();g.setTransform(dpr,0,0,dpr,0,0);
    /* the stone bulkhead along the water, following the receding bank */
    var bk=g.createLinearGradient(0,bankTop-U*.02,0,hz);bk.addColorStop(0,"#4a5560");bk.addColorStop(.3,"#2c3640");bk.addColorStop(1,"#1a232c");g.fillStyle=bk;
    g.beginPath();g.moveTo(-10,hz+2);for(var bx=-10;bx<=w+10;bx+=8)g.lineTo(bx,G.bank(bx)[0]);g.lineTo(w+10,hz+2);g.closePath();g.fill();
    g.strokeStyle="rgba(246,206,160,.18)";g.lineWidth=.8;g.beginPath();for(bx=G.x0-4;bx<=w+10;bx+=8){var by=G.bank(bx)[0];bx===G.x0-4?g.moveTo(bx,by):g.lineTo(bx,by)}g.stroke();
    g.strokeStyle="rgba(0,0,0,.22)";g.lineWidth=.6;g.beginPath();var Rs=rng(41);for(var sx=0;sx<w;sx+=S*.03*(.7+Rs())){g.moveTo(sx,G.bank(sx)[0]+1);g.lineTo(sx,hz)}g.stroke();
    /* a few lamps along the river walk at the near end of the row */
    for(var lx=G.x0+S*.2;lx<w;lx+=S*.55){var lb=G.bank(lx),ls=lb[1];g.strokeStyle="#151d26";g.lineWidth=Math.max(1,S*.005*ls);g.beginPath();g.moveTo(lx,lb[0]+1);g.lineTo(lx,lb[0]-S*.1*ls);g.stroke();
      g.fillStyle="#151d26";g.fillRect(lx-S*.007*ls,lb[0]-S*.112*ls,S*.014*ls,S*.016*ls);LAMP.push([lx,lb[0]-S*.104*ls])}
    /* grain: a fixed painterly speckle over the whole scene */
    var Gr=mk(h),gg=Gr[1],Rn=rng(97);oGrain=Gr[0];var n=Math.round(w*h/(G.mob?60:40));
    for(var q=0;q<n;q++){var v=Rn();gg.fillStyle=v<.5?"rgba(0,0,0,"+(.05+Rn()*.06).toFixed(3)+")":"rgba(255,244,230,"+(.025+Rn()*.04).toFixed(3)+")";gg.fillRect(Rn()*w,Rn()*h,1+Rn()*1.4,1+Rn()*1.4)}
  }
  function house(g,x,base,bw,fl,ty,R,k,sc){
    var SS=G.S*sc,fh=SS*.1,gh=SS*.13,H=gh+fl*fh+(ty==="flat"?SS*.035:0),top=base-H,lightL=k%2?0:1;
    /* facade, lit faintly by the sky, with a warm edge where the town's glow reaches it */
    var col=ty==="brick"?["#6b4a44","#4c3532"]:ty==="flat"?["#7b8590","#58626e"]:["#8c99a8","#66717f"];
    if(R()<.3&&ty==="gable")col=["#a39c8f","#787166"];
    var fg=g.createLinearGradient(0,top,0,base);fg.addColorStop(0,col[0]);fg.addColorStop(1,col[1]);g.fillStyle=fg;g.fillRect(x,top,bw,H);
    var sh=g.createLinearGradient(x,0,x+bw,0);sh.addColorStop(0,"rgba(10,22,34,"+(lightL?.05:.28)+")");sh.addColorStop(1,"rgba(10,22,34,"+(lightL?.3:.06)+")");g.fillStyle=sh;g.fillRect(x,top,bw,H);
    if(ty==="gable"){
      /* clapboard lines and a pitched roof seen gable-end on */
      g.strokeStyle="rgba(20,30,40,.16)";g.lineWidth=.6;g.beginPath();for(var cl=top+3;cl<base-gh;cl+=Math.max(2.4,SS*.008)){g.moveTo(x,cl);g.lineTo(x+bw,cl)}g.stroke();
      var rh=bw*.42;g.fillStyle=col[0];g.beginPath();g.moveTo(x-1,top);g.lineTo(x+bw/2,top-rh);g.lineTo(x+bw+1,top);g.closePath();g.fill();
      g.fillStyle="rgba(10,22,34,.18)";g.beginPath();g.moveTo(x+bw/2,top-rh);g.lineTo(x+bw+1,top);g.lineTo(x+bw/2,top);g.closePath();g.fill();
      g.strokeStyle="#1d2733";g.lineWidth=Math.max(1.2,SS*.008);g.beginPath();g.moveTo(x-bw*.04,top+bw*.02);g.lineTo(x+bw/2,top-rh);g.lineTo(x+bw*1.04,top+bw*.02);g.stroke();
      g.strokeStyle="rgba(246,206,160,.35)";g.lineWidth=.8;g.beginPath();g.moveTo(x-bw*.04,top+bw*.02);g.lineTo(x+bw/2,top-rh);g.stroke();
      /* attic window */
      var aw=bw*.12;win(g,x+bw/2-aw/2,top-rh*.5,aw,rh*.32,R()<.5,R);
      if(R()<.5){g.fillStyle="#2a2f36";g.fillRect(x+bw*.72,top-rh*.62,bw*.07,rh*.4)}
    }else if(ty==="side"){
      /* a side-gabled roof seen along its length, with a chimney */
      g.strokeStyle="rgba(20,30,40,.16)";g.lineWidth=.6;g.beginPath();for(var c2=top+3;c2<base-gh;c2+=Math.max(2.4,SS*.008)){g.moveTo(x,c2);g.lineTo(x+bw,c2)}g.stroke();
      var rh2=SS*.13,rg=g.createLinearGradient(0,top-rh2,0,top);rg.addColorStop(0,"#2b3540");rg.addColorStop(1,"#1a232d");g.fillStyle=rg;
      g.beginPath();g.moveTo(x-SS*.012,top);g.lineTo(x+SS*.03,top-rh2);g.lineTo(x+bw-SS*.03,top-rh2);g.lineTo(x+bw+SS*.012,top);g.closePath();g.fill();
      g.fillStyle="rgba(246,206,160,.22)";g.fillRect(x+SS*.03,top-rh2,bw-SS*.06,1);
      g.fillStyle="#3c2b29";g.fillRect(x+bw*.72,top-rh2-SS*.05,SS*.03,SS*.06);
      var dmx=x+bw*.3;win(g,dmx,top-rh2*.78,SS*.035,rh2*.5,R()<.4,R);
    }else{
      /* cornice and parapet */
      g.fillStyle=ty==="brick"?"#3a2826":"#3d4650";g.fillRect(x-1.5,top,bw+3,Math.max(2,SS*.014));
      g.fillStyle="rgba(246,206,160,.25)";g.fillRect(x-1.5,top,bw+3,1);
      if(ty==="brick"){g.strokeStyle="rgba(20,10,10,.12)";g.lineWidth=.5;g.beginPath();for(var bl=top+4;bl<base-gh;bl+=Math.max(1.8,SS*.006)){g.moveTo(x,bl);g.lineTo(x+bw,bl)}g.stroke()}
    }
    /* upper-floor windows: sash windows, some lit for the evening */
    var cols=Math.max(2,Math.round(bw/(SS*.07))),cwid=bw/cols,ww=cwid*.38,wh=fh*.54;
    for(var f=0;f<fl;f++){var wy=top+(ty==="flat"?SS*.035:0)+f*fh+fh*.22;for(var cc=0;cc<cols;cc++)win(g,x+cc*cwid+(cwid-ww)/2,wy,ww,wh,R()<.32,R)}
    /* the ground floor: the shop itself, its display window glowing, a door, an awning on some */
    var gy=base-gh,sw=bw*.92,sx=x+bw*.04;
    g.fillStyle="#1b232c";g.fillRect(sx,gy+gh*.12,sw,gh*.88);
    var lit=R()<.85,dw=sw*.2,dx=sx+sw*(R()<.5?.08:.72);
    var dg=g.createLinearGradient(0,gy+gh*.2,0,base);
    dg.addColorStop(0,lit?"rgba(255,214,160,.95)":"rgba(70,86,104,.9)");dg.addColorStop(1,lit?"rgba(240,168,104,.85)":"rgba(40,52,66,.9)");
    g.fillStyle=dg;g.fillRect(sx+sw*.04,gy+gh*.24,sw*.92,gh*.68);
    if(lit){/* goods on shelves, read only as shapes and colour */
      for(var s2=SS*.01;s2<sw*.88;s2+=Math.max(5,SS*.03)*(.6+R())){var ph=gh*(.06+R()*.12);g.fillStyle="rgba("+(R()<.3?"59,157,219":R()<.5?"120,70,60":"40,40,46")+","+(.35+R()*.3).toFixed(2)+")";g.fillRect(sx+sw*.04+s2,gy+gh*.62-ph,Math.max(2,SS*.016)*(.6+R()),ph)}
      g.fillStyle="rgba(60,40,30,.35)";g.fillRect(sx+sw*.04,gy+gh*.62,sw*.92,1.2);
      LW.push([sx+sw*.5,sw*.8,1]);}
    g.fillStyle="#141b22";g.fillRect(dx,gy+gh*.22,dw,gh*.78);g.fillStyle=lit?"rgba(255,206,150,.55)":"rgba(80,96,112,.5)";g.fillRect(dx+dw*.18,gy+gh*.3,dw*.64,gh*.36);
    /* sign band */
    g.fillStyle=ty==="brick"?"#2a1f1e":"#28313b";g.fillRect(sx,gy,sw,gh*.13);
    if(R()<.45){var ag=g.createLinearGradient(0,gy,0,gy+gh*.24);var blue=R()<.6;ag.addColorStop(0,blue?"#2a7fbf":"#5d2f2c");ag.addColorStop(1,blue?"#1a5c8f":"#3e1f1e");g.fillStyle=ag;
      g.beginPath();g.moveTo(sx-2,gy+gh*.1);g.lineTo(sx+sw+2,gy+gh*.1);g.lineTo(sx+sw+5,gy+gh*.3);g.lineTo(sx-5,gy+gh*.3);g.closePath();g.fill();
      g.fillStyle="rgba(255,226,190,.35)";g.fillRect(sx-5,gy+gh*.3-1,sw+10,1)}
    /* the warm spill on the bulkhead below a lit shop */
    if(lit)blob(g,sx+sw/2,base+G.U*.004,sw*.6,G.U*.01,"rgba(255,200,140,.28)");
  }
  function win(g,x,y,ww,wh,lit,R){
    if(lit){var a=.7+R()*.3;var gr=g.createLinearGradient(0,y,0,y+wh);gr.addColorStop(0,"rgba(255,224,170,"+a.toFixed(2)+")");gr.addColorStop(1,"rgba(236,170,108,"+a.toFixed(2)+")");g.fillStyle=gr;g.fillRect(x,y,ww,wh);
      blob(g,x+ww/2,y+wh/2,ww*1.3,wh*.9,"rgba(255,206,150,.16)");LW.push([x+ww/2,ww,.45])}
    else{var ug=g.createLinearGradient(0,y,0,y+wh);ug.addColorStop(0,"rgba(120,140,166,.75)");ug.addColorStop(1,"rgba(32,44,58,.9)");g.fillStyle=ug;g.fillRect(x,y,ww,wh)}
    g.strokeStyle="rgba(236,232,222,.55)";g.lineWidth=Math.max(.6,G.S*.003);g.strokeRect(x,y,ww,wh);g.beginPath();g.moveTo(x,y+wh*.5);g.lineTo(x+ww,y+wh*.5);g.stroke();
  }
  function bridge(g,bankTop){
    var S=G.S,deck=bankTop-S*.07,x1=G.bx1,arch=S*.26,th=S*.03;
    /* deck and balustrade */
    var dg=g.createLinearGradient(0,deck-th,0,deck+th);dg.addColorStop(0,"#56616d");dg.addColorStop(1,"#323c47");g.fillStyle=dg;
    g.fillRect(-10,deck-th,x1+10,th*1.6);
    g.fillStyle="#3b4551";g.fillRect(-10,deck-th*2.2,x1+10,th*.5);
    g.strokeStyle="rgba(60,70,82,.9)";g.lineWidth=Math.max(.8,S*.004);g.beginPath();for(var b=0;b<x1;b+=S*.018){g.moveTo(b,deck-th*1.8);g.lineTo(b,deck-th)}g.stroke();
    /* spandrel and arches down to the water */
    g.fillStyle="#2c3641";g.beginPath();g.moveTo(-10,deck+th*.6);g.lineTo(x1,deck+th*.6);g.lineTo(x1+S*.02,G.hz);g.lineTo(-10,G.hz);g.closePath();g.fill();
    g.save();g.globalCompositeOperation="destination-out";
    for(var ax=x1-arch*.62;ax>-arch;ax-=arch*1.18){g.beginPath();g.moveTo(ax-arch/2,G.hz+1);g.lineTo(ax-arch/2,deck+th+S*.07);g.quadraticCurveTo(ax,deck+th*.9,ax+arch/2,deck+th+S*.07);g.lineTo(ax+arch/2,G.hz+1);g.closePath();g.fill()}
    g.restore();
    g.strokeStyle="rgba(246,206,160,.28)";g.lineWidth=1;g.beginPath();g.moveTo(-10,deck-th);g.lineTo(x1,deck-th);g.stroke();
    /* lamp posts along the rail */
    for(var lx=x1-S*.04;lx>0;lx-=S*.2){g.strokeStyle="#1c242d";g.lineWidth=Math.max(1,S*.006);g.beginPath();g.moveTo(lx,deck-th*2.2);g.lineTo(lx,deck-S*.13);g.stroke();
      g.fillStyle="#1c242d";g.fillRect(lx-S*.008,deck-S*.145,S*.016,S*.018);LAMP.push([lx,deck-S*.137])}
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,wb=G.mob?U*1.06:h,sw=Math.round(w*dpr);
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* the lamps: steady, soft halos */
    c.globalCompositeOperation="lighter";
    for(var l=0;l<LAMP.length;l++){var L=LAMP[l],fl=.85+.15*Math.sin(t*1.3+l*1.7);var lg=c.createRadialGradient(L[0],L[1],0,L[0],L[1],S*.07);lg.addColorStop(0,"rgba(255,226,170,"+(.75*fl).toFixed(3)+")");lg.addColorStop(.2,"rgba(255,200,140,"+(.22*fl).toFixed(3)+")");lg.addColorStop(1,"rgba(255,190,130,0)");c.fillStyle=lg;c.fillRect(L[0]-S*.07,L[1]-S*.07,S*.14,S*.14)}
    c.globalCompositeOperation="source-over";
    /* the river: a darker, moving mirror of the town */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#3c4a5c");wg.addColorStop(.2,"#223548");wg.addColorStop(.6,"#132433");wg.addColorStop(1,"#0e1a24");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz);c.globalAlpha=e*.5;
    for(var y=0;y<RH;y+=2){var k=y/RH,off=Math.sin(y*.13+t*1.1)*(.5+k*6)+Math.sin(y*.045-t*.55)*(k*4),sy2=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy2,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(14,26,36,.04)");dkn.addColorStop(.5,"rgba(14,26,36,.4)");dkn.addColorStop(1,"rgba(14,26,36,.85)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* long broken streaks of window and lamp light on the water */
    c.globalCompositeOperation="lighter";
    var Rr=rng(5);
    for(var i=0;i<LW.length+LAMP.length;i++){var isL=i>=LW.length,P=isL?LAMP[i-LW.length]:LW[i],px=P[0],pw=isL?S*.02:P[1]*.7,str=isL?.9:P[2],len=(wb-hz)*(isL?.55:.4+.3*str);
      for(var d=2;d<len;d+=Math.max(3,U*.006)){var kk=d/len,a=(1-kk)*(.16+.12*str)*(.6+.4*Math.sin(t*2.2+d*.21+i)),ox=Math.sin(t*1.4+d*.09+i*2.1)*(1+kk*6);if(a<.01)continue;
        c.fillStyle="rgba(255,206,150,"+a.toFixed(3)+")";c.fillRect(px-pw/2*(1-kk*.4)+ox,hz+d,pw*(1-kk*.4)*(.6+Rr()*.5),1.3)}}
    c.globalCompositeOperation="source-over";
    /* a small boat on its mooring, rocking a little */
    var bxp=G.mob?w*.7:G.side+G.cw*.62,byp=hz+(wb-hz)*.22,bs=S*.0024,rk=Math.sin(t*.9)*.03;
    c.save();c.translate(bxp,byp);c.rotate(rk);
    c.fillStyle="rgba(214,214,206,.88)";c.beginPath();c.moveTo(-26*bs,-3*bs);c.lineTo(28*bs,-3*bs);c.quadraticCurveTo(24*bs,4*bs,16*bs,5*bs);c.lineTo(-20*bs,5*bs);c.quadraticCurveTo(-25*bs,2*bs,-26*bs,-3*bs);c.fill();
    c.fillStyle="rgba(26,36,48,.9)";c.fillRect(-20*bs,3*bs,36*bs,2*bs);
    c.strokeStyle="rgba(200,196,186,.85)";c.lineWidth=Math.max(.8,bs*1.1);c.beginPath();c.moveTo(-2*bs,-3*bs);c.lineTo(-2*bs,-46*bs);c.moveTo(-2*bs,-12*bs);c.lineTo(20*bs,-6*bs);c.stroke();
    c.fillStyle="rgba(222,220,210,.75)";c.fillRect(-12*bs,-7*bs,10*bs,4*bs);
    c.restore();
    c.globalAlpha=e*.3;c.save();c.translate(bxp,byp+10*bs);c.scale(1,-1);c.rotate(-rk);c.fillStyle="rgba(214,214,206,.6)";c.fillRect(-24*bs,-8*bs,48*bs,6*bs);c.strokeStyle="rgba(200,196,186,.5)";c.beginPath();c.moveTo(-2*bs+Math.sin(t)*2,0);c.lineTo(-2*bs+Math.sin(t*1.3)*4,-40*bs);c.stroke();c.restore();c.globalAlpha=e;
    /* ripples across the surface */
    c.strokeStyle="rgba(200,214,226,.08)";c.lineWidth=1;c.beginPath();var Rp=rng(23);
    for(var r=0;r<(G.mob?24:50);r++){var ry=hz+Math.pow(Rp(),1.4)*(wb-hz),rx=((Rp()+t*.006*(1+Rp()))%1)*w,rl=S*(.04+Rp()*.1)*(1+(ry-hz)/(wb-hz));c.moveTo(rx,ry);c.lineTo(rx+rl,ry)}c.stroke();
    /* grain over everything; then a quiet scrim on the text side */
    c.globalAlpha=e*.9;c.drawImage(oGrain,0,0,w,h);c.globalAlpha=e;
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(8,18,28,.72)");lv.addColorStop(.55,"rgba(8,18,28,.38)");lv.addColorStop(1,"rgba(8,18,28,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(14,26,36,0)");bv.addColorStop(1,"rgba(14,26,36,.55)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w*.6:G.side+G.cw*.72,G.hz-G.S*.25]:[w/2,h/2]}};
})();

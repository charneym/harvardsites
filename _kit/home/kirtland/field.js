/* ================= HERO FIELD: a great banyan at dawn in Coral Gables, the "City Beautiful" whose banyan canopies line the
   streets around the firm's Almeria Avenue office. The sun rises low behind the tree and shows between its pillar roots;
   royal palms stand on the far horizon, mist lies on the lawn. Colours: the firm's logo navy for the sky and ground, its
   green for the foliage, its leaf-green arrow for the rim light. It animates on its own (leaves, light, mist, motes),
   with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oBack=null,oFront=null,oRoot=null,MOTES=[],GLINT=[],MIST=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.86):h;
    var hz=mob?U*.92:h*.85;
    var RX=mob?w*.44:Math.min(cw*.32,h*.6);
    var RY=RX*(mob?.4:.36);
    var cx=mob?w*.52:side+cw*.69;
    var cy=mob?U*.44:h*.38;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,RX:RX,RY:RY,cx:cx,cy:cy,sx:cx+RX*.16,sy:hz-(hz-cy)*.3};
  }
  function mk(){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.round(h*dpr);var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* canopy outline: a broad, lumpy dome, lower and flatter at the ends */
  function topY(u,R){return G.cy-G.RY*Math.pow(Math.max(0,1-u*u),.62)*(.86+.1*Math.sin(u*7.3+1.1)+.06*Math.sin(u*17+2))}
  function botY(u){return G.cy+G.RY*.42*Math.pow(Math.max(0,1-u*u),.35)+G.RY*.05*Math.sin(u*9+.4)}
  function build(){
    var hz=G.hz,RX=G.RX,RY=G.RY,cx=G.cx,cy=G.cy,sx=G.sx,sy=G.sy,i,k;
    /* ---- sky and land ---- */
    var A=mk(),g=A[1];oSky=A[0];
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#0a1a33");sky.addColorStop(.32,"#183660");sky.addColorStop(.6,"#3f5d84");sky.addColorStop(.8,"#8c97a6");sky.addColorStop(.93,"#d6c7aa");sky.addColorStop(1,"#efe2c6");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    var sg=g.createRadialGradient(sx,sy,0,sx,sy,Math.max(w*.5,RX*1.8));sg.addColorStop(0,"rgba(255,246,224,.95)");sg.addColorStop(.06,"rgba(252,236,204,.7)");sg.addColorStop(.25,"rgba(236,214,178,.28)");sg.addColorStop(.6,"rgba(190,190,190,.08)");sg.addColorStop(1,"rgba(160,170,190,0)");
    g.save();g.translate(sx,sy);g.scale(1,.7);g.translate(-sx,-sy);g.fillStyle=sg;g.fillRect(0,0,w,h);g.restore();
    /* high, thin dawn cloud */
    var Rc=rng(11);for(i=0;i<10;i++){var ccy=hz*(.18+Rc()*.5),ccx=Rc()*w,cwid=w*(.08+Rc()*.18),ch=G.U*(.008+Rc()*.012),a=.05+Rc()*.07;
      g.save();g.translate(ccx,ccy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(232,222,206,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(232,222,206,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* far horizon: a low line of hazy trees, then royal palms rising out of it */
    (function(){var Rr=rng(5),y=0,v=0;g.fillStyle="rgba(88,104,128,.55)";g.beginPath();g.moveTo(-4,hz+2);
      for(var x=-4;x<=w+4;x+=2){v+=(Rr()-.5)*.6;v*=.92;y+=(v-y)*.14;g.lineTo(x,hz-G.U*.016-Math.max(0,G.U*.012+y*G.U*.014))}g.lineTo(w+4,hz+2);g.closePath();g.fill()})();
    var Rp=rng(29),pal=G.mob?[[.04,.5],[.15,.62],[.93,.46]]:[[.03,.44],[.1,.58],[.17,.4],[.92,.52],[.97,.4]];
    pal.forEach(function(p){var px=p[0]*w,ph=G.U*p[1]*(G.mob?.42:.36),col="rgba(70,88,116,"+(.5+Rp()*.2).toFixed(2)+")";palm(g,px,hz-G.U*.012,ph,col,Rp)});
    /* lawn: lit haze at the horizon, falling to the logo navy */
    var lg=g.createLinearGradient(0,hz,0,h);lg.addColorStop(0,"#3f5a52");lg.addColorStop(.06,"#1f3d36");lg.addColorStop(.35,"#12302c");lg.addColorStop(1,"#0d2341");
    g.fillStyle=lg;g.fillRect(0,hz,w,h-hz+2);
    var gl=g.createRadialGradient(sx,hz,0,sx,hz,RX*1.3);gl.addColorStop(0,"rgba(236,214,170,.35)");gl.addColorStop(1,"rgba(236,214,170,0)");g.save();g.translate(sx,hz);g.scale(1,.18);g.translate(-sx,-hz);g.fillStyle=gl;g.fillRect(0,hz-RX,w,RX*2);g.restore();
    /* the tree's long morning shadow, falling toward us */
    var sh=g.createRadialGradient(cx,hz,0,cx,hz,RX*1.1);sh.addColorStop(0,"rgba(8,22,30,.6)");sh.addColorStop(1,"rgba(8,22,30,0)");g.save();g.translate(cx,hz);g.scale(1,.3);g.translate(-cx,-hz);g.fillStyle=sh;g.fillRect(cx-RX*1.2,hz,RX*2.4,RX*1.2);g.restore();
    /* grass blades along the horizon edge, against the light */
    var Rg=rng(17);g.strokeStyle="rgba(16,40,36,.85)";g.lineWidth=1;g.beginPath();for(var gx=0;gx<w;gx+=2.2){var bh=1+Rg()*G.U*.008;g.moveTo(gx,hz+1);g.lineTo(gx+(Rg()-.5)*2,hz+1-bh)}g.stroke();
    /* ---- the banyan: limbs, fused trunk, pillar roots, aerial roots ---- */
    var B=mk(),b=B[1];oRoot=B[0];
    var tc="#0b2222",Rt=rng(41),top=botY(0)-RY*.02,tw=RX*.17,tx0=cx-RX*.02;
    b.lineCap="round";b.lineJoin="round";
    function rimc(x){return "rgba(222,232,190,"+Math.max(.08,.5-Math.abs(x-sx)/(RX*1.4)).toFixed(3)+")"}
    /* limbs: tapered, curving out under the crown */
    var LIM=[[-.94,.02],[-.66,-.16],[-.38,.0],[.34,-.02],[.62,-.18],[.92,.0]];
    LIM.forEach(function(L){var ex=cx+L[0]*RX,ey=botY(L[0])-RY*.16+L[1]*RY*.5,sx0=tx0+L[0]*tw*.25,sy0=top+RY*.42,mx=cx+L[0]*RX*.42,my=top+RY*.02+L[1]*RY*.6,n=14,W0=RX*.042*(1-Math.abs(L[0])*.35);
      var up=[],dn=[];for(var j=0;j<=n;j++){var u=j/n,x=(1-u)*(1-u)*sx0+2*u*(1-u)*mx+u*u*ex,y=(1-u)*(1-u)*sy0+2*u*(1-u)*my+u*u*ey,wd=W0*(1-u*.82)/2;up.push([x,y-wd]);dn.push([x,y+wd])}
      b.fillStyle=tc;b.beginPath();up.forEach(function(p,j){j?b.lineTo(p[0],p[1]):b.moveTo(p[0],p[1])});for(var j2=n;j2>=0;j2--)b.lineTo(dn[j2][0],dn[j2][1]);b.closePath();b.fill();
      b.strokeStyle=rimc(ex);b.lineWidth=1;b.beginPath();up.forEach(function(p,j){j?b.lineTo(p[0],p[1]):b.moveTo(p[0],p[1])});b.stroke()});
    /* the trunk: a fluted, buttressed column of fused stems */
    var yb=hz+2,yt=top+RY*.3,P=[];
    for(var j=0;j<=24;j++){var u=j/24,y=yb+(yt-yb)*u,wd=tw*(.42+.58*Math.pow(1-u,3.2)+.18*Math.pow(u,4));P.push([y,wd])}
    b.fillStyle=tc;b.beginPath();P.forEach(function(p,j){var x=tx0-p[1]+Math.sin(j*.7)*tw*.02;j?b.lineTo(x,p[0]):b.moveTo(x,p[0])});for(j=24;j>=0;j--)b.lineTo(tx0+P[j][1]+Math.sin(j*.9)*tw*.02,P[j][0]);b.closePath();b.fill();
    /* flutes: the fused stems, as fine vertical ridges catching the light */
    var nF=G.mob?9:16;for(i=0;i<nF;i++){var f=(i+.5)/nF*2-1;b.strokeStyle=i%2?"rgba(30,62,56,.75)":"rgba(4,18,20,.7)";b.lineWidth=Math.max(.8,tw*.035);b.beginPath();
      for(j=0;j<=24;j++){var x=tx0+f*P[j][1]*.92+Math.sin(j*.5+i)*tw*.012;j?b.lineTo(x,P[j][0]):b.moveTo(x,P[j][0])}b.stroke()}
    [-1,1].forEach(function(sd){b.strokeStyle=rimc(tx0+sd*tw);b.lineWidth=1.2;b.beginPath();for(j=0;j<=24;j++){var x=tx0+sd*P[j][1]*.985;j?b.lineTo(x,P[j][0]):b.moveTo(x,P[j][0])}b.stroke()});
    /* pillar roots that reached the ground long ago, out under the crown */
    var PIL=G.mob?[-.76,-.52,.5,.74]:[-.82,-.64,-.47,.44,.6,.78];
    PIL.forEach(function(u){var x=cx+u*RX,y0=botY(u)-RY*.1,wd=RX*(.011+Rt()*.009),dx=(Rt()-.5)*RX*.02;
      b.fillStyle=tc;b.beginPath();b.moveTo(x-wd*.4,y0);b.quadraticCurveTo(x+dx-wd*.5,(y0+hz)/2,x+dx-wd*.9,hz+2);b.lineTo(x+dx+wd*.9,hz+2);b.quadraticCurveTo(x+dx+wd*.5,(y0+hz)/2,x+wd*.4,y0);b.closePath();b.fill();
      b.strokeStyle=rimc(x);b.lineWidth=1;b.beginPath();var sd=x<sx?1:-1;b.moveTo(x+sd*wd*.38,y0);b.quadraticCurveTo(x+dx+sd*wd*.48,(y0+hz)/2,x+dx+sd*wd*.85,hz+1);b.stroke()});
    /* aerial roots: fine hanging threads, most short, a few reaching down */
    var nA=G.mob?70:150;
    for(i=0;i<nA;i++){var u2=(Rt()*2-1)*.96,x2=cx+u2*RX,y2=botY(u2)-RY*.08,lng=Rt()<.18,len=(hz-y2)*(lng?(.7+Rt()*.3):(.08+Rt()*.4));
      var lg2=b.createLinearGradient(0,y2,0,y2+len);lg2.addColorStop(0,"rgba(11,34,34,.9)");lg2.addColorStop(1,"rgba(11,34,34,"+(lng?.6:0)+")");
      b.strokeStyle=lg2;b.lineWidth=Math.max(.6,RX*.0016*(.7+Rt()));b.beginPath();b.moveTo(x2,y2);b.quadraticCurveTo(x2+(Rt()-.5)*5,y2+len*.5,x2+(Rt()-.5)*4,y2+len);b.stroke()}
    /* ---- the crown: two layers of leaf clusters (back shade, front), backlit ---- */
    var C1=mk(),c1=C1[1];oBack=C1[0];var C2=mk(),c2=C2[1];oFront=C2[0];
    var Rl=rng(73),NC=G.mob?900:2000,rS=RX*(G.mob?.026:.021);
    GLINT=[];
    for(i=0;i<NC;i++){
      var u=(Rl()*2-1)*1.01,t1=topY(u),b1=botY(u),v=Rl(),x=cx+u*RX,y=t1+(b1-t1)*v,front=Rl()<.55,
        edge=Math.max(0,1-v/.16),r=rS*(.6+Rl()*.8)*(1-.3*Math.abs(u));
      var face=Math.max(0,Math.min(1,.55+(x-sx)/(RX*2.2)+(cy-y)/(RY*3)));
      var L=front?edge*face*.85+.12*(1-v):0;
      var c0=front?[13+L*34,36+L*52,38+L*30]:[9,28,33];
      var cg2=front?c2:c1;
      for(k=0;k<8;k++){var lx=x+(Rl()-.5)*r*1.8,ly=y+(Rl()-.5)*r*1.2,lr=r*(.28+Rl()*.26),d=(Rl()-.5)*.18;
        cg2.fillStyle="rgb("+Math.round(c0[0]*(1+d))+","+Math.round(c0[1]*(1+d))+","+Math.round(c0[2]*(1+d))+")";
        cg2.beginPath();cg2.ellipse(lx,ly,lr,lr*.6,Rl()*3.14,0,Math.PI*2);cg2.fill();
        if(front&&edge>.3&&Rl()<.35){cg2.strokeStyle="rgba(206,228,168,"+(.12+edge*face*.4).toFixed(3)+")";cg2.lineWidth=.8;cg2.beginPath();cg2.ellipse(lx,ly,lr,lr*.6,0,Math.PI*1.15,Math.PI*1.75);cg2.stroke()}}
      if(front&&edge>.2&&Rl()<.12)GLINT.push([x+(Rl()-.5)*r,y-r*.3,Rl()*6.28,.5+Rl()*1.1,.3+edge*face*.8])}
    /* motes drifting in the light under the crown, and mist on the lawn */
    MOTES=[];var Rm=rng(91);for(i=0;i<(G.mob?18:44);i++)MOTES.push([cx+(Rm()*2-1)*RX*1.1,botY(0)+(hz-botY(0))*Rm(),Rm()*6.28,.3+Rm()*.6,.6+Rm()*1.2]);
    MIST=[];var Rs=rng(57);for(i=0;i<7;i++)MIST.push([Rs()*w,hz+G.U*(.005+Rs()*.05),w*(.18+Rs()*.25),G.U*(.012+Rs()*.02),.05+Rs()*.08,(.4+Rs())*(Rs()<.5?1:-1)]);
  }
  function palm(g,x,base,H,col,R){var lean=(R()-.5)*.08,tx=x+H*lean,ty=base-H;
    g.strokeStyle=col;g.lineCap="round";g.lineWidth=Math.max(1,H*.022);g.beginPath();g.moveTo(x,base);g.quadraticCurveTo(x+H*lean*.3,base-H*.5,tx,ty);g.stroke();
    g.lineWidth=Math.max(1.2,H*.03);g.beginPath();g.moveTo(tx,ty+H*.07);g.lineTo(tx,ty);g.stroke();
    g.fillStyle=col;var n=9;for(var i=0;i<n;i++){var a=-Math.PI+(i/(n-1))*Math.PI+(R()-.5)*.25,L=H*(.2+R()*.07),dr=.6+R()*.5;
      var ex=tx+Math.cos(a)*L,ey=ty+Math.sin(a)*L*.55+L*.35*dr*(Math.abs(Math.cos(a)));
      var mx=tx+Math.cos(a)*L*.55,my=ty+Math.sin(a)*L*.5-L*.08;
      g.lineWidth=Math.max(.8,H*.012);g.beginPath();g.moveTo(tx,ty);g.quadraticCurveTo(mx,my,ex,ey);g.stroke();
      g.beginPath();g.moveTo(tx,ty);g.quadraticCurveTo(mx,my-L*.06,ex,ey);g.quadraticCurveTo(mx,my+L*.08,tx,ty);g.fill()}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,sx=G.sx,sy=G.sy,RX=G.RX,cw=Math.round(w*dpr),ch=Math.round(h*dpr);
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);
    /* slow shafts of light from the low sun */
    c.setTransform(dpr,0,0,dpr,0,0);c.globalCompositeOperation="lighter";
    for(var r=0;r<7;r++){var a0=-2.55+r*.36+Math.sin(t*.07+r)*.04,al=(.018+.014*Math.sin(t*.25+r*1.7))*(G.mob?.8:1),L=Math.max(w,h)*1.1;
      var rg=c.createLinearGradient(sx,sy,sx+Math.cos(a0)*L,sy+Math.sin(a0)*L);rg.addColorStop(0,"rgba(255,240,210,"+(al*2.2).toFixed(3)+")");rg.addColorStop(1,"rgba(255,240,210,0)");
      c.fillStyle=rg;c.beginPath();c.moveTo(sx,sy);c.lineTo(sx+Math.cos(a0-.05)*L,sy+Math.sin(a0-.05)*L);c.lineTo(sx+Math.cos(a0+.05)*L,sy+Math.sin(a0+.05)*L);c.closePath();c.fill()}
    c.globalCompositeOperation="source-over";
    /* the tree: roots fixed, the crown breathing very slightly in the morning air */
    c.setTransform(1,0,0,1,0,0);c.drawImage(oRoot,0,0);
    var s1=Math.sin(t*.55)*.9*dpr,s2=Math.sin(t*.7+1.3)*1.3*dpr,s3=Math.cos(t*.45)*.5*dpr;
    c.drawImage(oBack,s1,s3);c.drawImage(oFront,s2,s3*.6);
    c.setTransform(dpr,0,0,dpr,0,0);
    /* glints where the light comes through the leaves */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GLINT.length;q++){var gq=GLINT[q],ga=Math.max(0,Math.sin(t*gq[3]+gq[2]))*.38*gq[4];if(ga<.03)continue;
      c.fillStyle="rgba(214,236,170,"+ga.toFixed(3)+")";c.beginPath();c.arc(gq[0]+s2/dpr,gq[1],Math.max(.8,RX*.0032),0,6.283);c.fill()}
    for(var m=0;m<MOTES.length;m++){var mo=MOTES[m],mx=mo[0]+Math.sin(t*.2*mo[3]+mo[2])*14,my=mo[1]-((t*4*mo[3])%40)+Math.cos(t*.3+mo[2])*4,ma=(.35+.35*Math.sin(t*mo[4]+mo[2]))*Math.max(0,1-Math.hypot(mx-sx,my-sy)/(RX*1.2));
      if(ma<.03)continue;c.fillStyle="rgba(255,242,214,"+ma.toFixed(3)+")";c.fillRect(mx,my,1.4,1.4)}
    c.globalCompositeOperation="source-over";
    /* mist drifting over the lawn */
    for(var k=0;k<MIST.length;k++){var mi=MIST[k],mxx=((mi[0]+t*6*mi[5])%(w+mi[2]*2)+w+mi[2]*2)%(w+mi[2]*2)-mi[2];
      c.save();c.translate(mxx,mi[1]);c.scale(1,mi[3]/mi[2]);var mg=c.createRadialGradient(0,0,0,0,0,mi[2]);mg.addColorStop(0,"rgba(214,214,206,"+mi[4].toFixed(3)+")");mg.addColorStop(1,"rgba(214,214,206,0)");c.fillStyle=mg;c.beginPath();c.arc(0,0,mi[2],0,6.283);c.fill();c.restore()}
    /* the ground fades into the page below */
    var wb=G.mob?G.U*1.05:h;var fd=c.createLinearGradient(0,hz,0,wb);fd.addColorStop(0,"rgba(13,35,65,0)");fd.addColorStop(1,"rgba(13,35,65,.85)");c.fillStyle=fd;c.fillRect(0,hz,w,Math.max(0,wb-hz)+2);
    if(G.mob){c.fillStyle="#0d2341";c.fillRect(0,wb,w,h-wb+2)}
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(9,26,49,.5)");lv.addColorStop(1,"rgba(9,26,49,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT,lw0=0;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();

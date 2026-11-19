/* ================= HERO FIELD: the Arrigoni Bridge at dusk. Middletown's twin steel through-arches (1938) carry Route 66
   over the Connecticut River to Portland, a few blocks from the firm's Main Street office. The sky holds the firm's own
   terracotta; the river mirrors the bridge, its lamps and the traffic crossing it. It animates on its own (water, lamps,
   traffic, a few stars), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,ST=[],LAMPS=[],CARS=[],GL=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.34,w*.74):h;
    var hz=mob?U*.7:h*.645;
    var S=mob?w*.43:Math.min(cw*.285,h*.6);
    var cx=mob?w*.5:side+cw*.7;
    var R=S*.36,spY=hz-S*.035,dk=spY-R*.44,T=Math.max(3,S*.024);
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,cx:cx,R:R,spY:spY,dk:dk,T:T,
      xL:cx-S*(mob?1.32:1.24),xR:cx+S*(mob?1.32:1.62),sun:mob?cx+S*.35:cx+S*.25};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* arch i (0 west, 1 east): lower chord through the springings, rib deeper at the springings than at the crown */
  function arch(i,u){var x0=G.cx+(i-1)*G.S,q=4*u*(1-u),yb=G.spY-G.R*q,D=G.R*(.2-.1*q);return [x0+u*G.S,yb,yb-D]}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(hz+4),g=A[1];oTop=A[0];
    /* dusk over the river: plum overhead, the firm's terracotta low in the west, a peach afterglow behind the bridge */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#160e13");sky.addColorStop(.3,"#2a1820");sky.addColorStop(.55,"#542a33");sky.addColorStop(.74,"#8a3f40");sky.addColorStop(.88,"#c06a5a");sky.addColorStop(1,"#e2a07c");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+4);
    var sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,Math.max(w*.42,S*1.6));sg.addColorStop(0,"rgba(250,196,150,.5)");sg.addColorStop(.35,"rgba(232,150,118,.2)");sg.addColorStop(1,"rgba(200,110,96,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.55);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(0,0,w,hz*2);g.restore();
    /* long, thin evening cloud */
    var Rc=rng(7);for(var i=0;i<9;i++){var cy=hz*(.42+Rc()*.42),cx=Rc()*w,cwid=w*(.1+Rc()*.2),ch=U*(.012+Rc()*.016),a=.035+Rc()*.05;
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(246,184,160,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(246,184,160,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* the far shore (Portland): two wooded ridges in the haze */
    function ridge(base,amp,col,seed,bump){var Rr=rng(seed);g.fillStyle=col;g.beginPath();g.moveTo(0,hz+2);var ph=Rr()*6;
      for(var x=0;x<=w+6;x+=6){var y=base-amp*(.55+.25*Math.sin(x*.0021+ph)+.2*Math.sin(x*.0063+ph*2))-(bump?Math.abs(Math.sin(x*.09+Rr()*.4))*U*.006:0);g.lineTo(x,y)}
      g.lineTo(w,hz+2);g.closePath();g.fill()}
    ridge(hz,U*.05,"rgba(120,62,70,.5)",3,false);
    trees(hz,U*.016,"#3a2127",5);
    /* tree line: irregular canopy, smoothed noise rather than regular scallops */
    function trees(base,amp,col,seed){var Rr=rng(seed),y=0,v=0;g.fillStyle=col;g.beginPath();g.moveTo(-4,hz+2);
      for(var x=-4;x<=w+4;x+=2){v+=(Rr()-.5)*.55;v*=.93;y+=(v-y)*.12;var hh=amp*(1+.5*Math.sin(x*.004+seed)+.25*Math.sin(x*.05+seed*3))+y*amp*1.4;g.lineTo(x,base-Math.max(amp*.3,hh))}
      g.lineTo(w+4,hz+2);g.closePath();g.fill()}
    /* the near (Middletown) bank where the bridge comes ashore, and the Portland bank to the east */
    g.fillStyle="#24161a";
    /* Middletown side: a low wooded bank and the stone abutment where the deck comes ashore */
    (function(){var Rr=rng(61),y=0,v=0;g.beginPath();g.moveTo(-4,hz+3);for(var x=-4;x<=G.xL+S*.05;x+=2){v+=(Rr()-.5)*.5;v*=.93;y+=(v-y)*.12;g.lineTo(x,hz-U*.012-Math.max(0,U*.01+y*U*.012))}g.lineTo(G.xL+S*.09,hz+3);g.closePath();g.fill()})();
    g.fillStyle="#2a1a1f";g.beginPath();g.moveTo(G.xL-S*.3,hz+3);g.lineTo(G.xL-S*.06,G.dk+G.T*.5);g.lineTo(G.xL+S*.02,G.dk+G.T*.5);g.lineTo(G.xL+S*.07,hz+3);g.closePath();g.fill();
    if(G.xR<w+20){g.fillStyle="#24161a";g.fillRect(G.xR-S*.02,G.dk,S*.07,hz-G.dk+3);var Rq=rng(67),yq=0,vq=0;g.beginPath();g.moveTo(G.xR,hz+3);for(var x3=G.xR;x3<=w+4;x3+=2){vq+=(Rq()-.5)*.5;vq*=.93;yq+=(vq-yq)*.12;g.lineTo(x3,G.dk+G.T-U*.004-Math.max(0,yq*U*.012))}g.lineTo(w+4,hz+3);g.closePath();g.fill()}
    /* a soft darkening behind the copy column */
    drawBridge(g);
    ST=[];var Rs=rng(3),n=G.mob?36:90;for(var s=0;s<n;s++){var sy=Math.pow(Rs(),1.5)*hz*.46;ST.push([Rs()*w,sy,.3+Rs()*.8,Rs()*6.28,.4+Rs()*1.2,1-sy/(hz*.46)])}
    CARS=[];var Rk=rng(41);for(var k=0;k<(G.mob?5:9);k++)CARS.push([Rk(),Rk()<.5?1:-1,.6+Rk()*.5]);
    GL=[];var Rg=rng(19);for(var q=0;q<(G.mob?26:60);q++)GL.push([Rg(),Rg(),Rg()*6.28,.5+Rg()]);
  }
  function drawBridge(g){
    var S=G.S,R=G.R,spY=G.spY,dk=G.dk,T=G.T,hz=G.hz,lw=Math.max(.8,S*.0045),steel="#2a1a20",rim="rgba(252,196,166,.5)";
    g.lineCap="round";g.lineJoin="round";
    /* approach piers: tapered concrete, lit on the west face */
    function pier(x,top,wt,wb){var pg=g.createLinearGradient(x-wb,0,x+wb,0);pg.addColorStop(0,"#5a3438");pg.addColorStop(.45,"#3a2328");pg.addColorStop(1,"#22151a");g.fillStyle=pg;
      g.beginPath();g.moveTo(x-wt,top);g.lineTo(x+wt,top);g.lineTo(x+wb,hz+3);g.lineTo(x-wb,hz+3);g.closePath();g.fill()}
    var nW=G.mob?1:2,nE=G.mob?1:2;
    for(var a=1;a<=nW;a++){var px=G.cx-S-(G.cx-S-G.xL)*a/(nW+1);pier(px,dk+T,S*.012,S*.02)}
    for(var b=1;b<=nE;b++){var qx=G.cx+S+(G.xR-G.cx-S)*b/(nE+1);if(qx<w+10)pier(qx,dk+T,S*.012,S*.02)}
    /* the three main piers at the springings */
    for(var m=0;m<3;m++){var mx=G.cx+(m-1)*S;pier(mx,spY-S*.01,S*.03,S*.042)}
    /* arch ribs: chords, posts and Warren diagonals */
    var N=G.mob?14:22;
    for(var i=0;i<2;i++){
      g.strokeStyle=steel;g.lineWidth=lw;g.beginPath();
      for(var k=0;k<=N;k++){var P=arch(i,k/N),Q=arch(i,Math.min(1,(k+1)/N));g.moveTo(P[0],P[1]);g.lineTo(P[0],P[2]);if(k<N){g.moveTo(P[0],k%2?P[1]:P[2]);g.lineTo(Q[0],k%2?Q[2]:Q[1])}}
      g.stroke();
      g.lineWidth=lw*2.4;g.beginPath();for(var u=0;u<=60;u++){var A1=arch(i,u/60);u?g.lineTo(A1[0],A1[2]):g.moveTo(A1[0],A1[2])}g.stroke();
      g.beginPath();for(var u2=0;u2<=60;u2++){var A2=arch(i,u2/60);u2?g.lineTo(A2[0],A2[1]):g.moveTo(A2[0],A2[1])}g.stroke();
      /* afterglow catching the top chord */
      g.strokeStyle=rim;g.lineWidth=Math.max(.6,lw*.8);g.beginPath();for(var u3=2;u3<=58;u3++){var A3=arch(i,u3/60);u3>2?g.lineTo(A3[0],A3[2]-lw*1.1):g.moveTo(A3[0],A3[2]-lw*1.1)}g.stroke();
      /* hangers where the rib rises above the deck, spandrel posts where it dips below */
      g.strokeStyle=steel;g.lineWidth=Math.max(.6,lw*.7);g.beginPath();
      for(var k2=1;k2<N;k2++){var H1=arch(i,k2/N);if(H1[1]<dk-T*.2){g.moveTo(H1[0],H1[1]);g.lineTo(H1[0],dk)}else if(H1[2]>dk+T){g.moveTo(H1[0],dk+T);g.lineTo(H1[0],H1[2])}}
      g.stroke();
    }
    /* the deck: a girder band with a lit parapet */
    var x0=Math.max(-10,G.xL-S*.04),x1=Math.min(w+10,G.xR+S*.04);
    var dg=g.createLinearGradient(0,dk,0,dk+T);dg.addColorStop(0,"#3b252b");dg.addColorStop(1,"#1e1317");g.fillStyle=dg;g.fillRect(x0,dk,x1-x0,T);
    g.fillStyle="rgba(250,190,160,.38)";g.fillRect(x0,dk-Math.max(.8,T*.12),x1-x0,Math.max(.8,T*.12));
    g.strokeStyle="rgba(40,26,31,.9)";g.lineWidth=Math.max(.5,lw*.5);g.beginPath();g.moveTo(x0,dk-T*.55);g.lineTo(x1,dk-T*.55);g.stroke();
    /* lamp standards along the parapet */
    LAMPS=[];var step=S/(G.mob?4:7);for(var lx=G.xL+step*.5;lx<x1-4;lx+=step){LAMPS.push(lx);g.strokeStyle="rgba(40,26,31,.95)";g.lineWidth=Math.max(.6,lw*.6);g.beginPath();g.moveTo(lx,dk);g.lineTo(lx,dk-T*1.9);g.stroke()}
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,dk=G.dk,T=G.T,wb=G.mob?U*1.05:h;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    for(var i=0;i<ST.length;i++){var s=ST[i],a=s[5]*(.45+.55*Math.sin(t*s[4]+s[3]))*.7;if(a<.05)continue;c.fillStyle="rgba(255,236,226,"+a.toFixed(3)+")";c.fillRect(s[0],s[1],s[2],s[2])}
    /* the river: a darker mirror of the sky */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#6e3a3c");wg.addColorStop(.18,"#3e2328");wg.addColorStop(.6,"#22151a");wg.addColorStop(1,"#1d1517");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    /* reflection: the sky, shores and bridge, row by row, broken by slow ripples */
    var RH=Math.min(hz,wb-hz),sw=Math.round(w*dpr);c.globalAlpha=e*.46;
    for(var y=0;y<RH;y+=2){var k=y/RH,off=Math.sin(y*.11+t*1.3)*(.6+k*5)+Math.sin(y*.037-t*.7)*(k*3),sy=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(29,21,23,.12)");dkn.addColorStop(.5,"rgba(29,21,23,.5)");dkn.addColorStop(1,"rgba(29,21,23,.85)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* glints under the afterglow */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],gy=hz+Math.pow(gq[1],1.6)*(wb-hz)*.85+2,spread=S*(.5+gq[1]*1.6),gx=G.sun+(gq[0]-.5)*spread*2,ga=(.5+.5*Math.sin(t*gq[3]*1.7+gq[2]))*(1-gq[1])*.16,gl=4+S*.04*(1-gq[1]);
      c.fillStyle="rgba(250,190,150,"+ga.toFixed(3)+")";c.fillRect(gx+Math.sin(t*.5+gq[2])*6,gy,gl,1)}
    /* lamps, their halos, and their long broken reflections */
    for(var l=0;l<LAMPS.length;l++){var lx=LAMPS[l],ly=dk-T*1.9,fl=.85+.15*Math.sin(t*3+l*1.7);
      var hg=c.createRadialGradient(lx,ly,0,lx,ly,T*1.5);hg.addColorStop(0,"rgba(255,214,160,"+(.4*fl).toFixed(3)+")");hg.addColorStop(1,"rgba(255,170,120,0)");c.fillStyle=hg;c.fillRect(lx-T*1.5,ly-T*1.5,T*3,T*3);
      c.fillStyle="rgba(255,236,200,.95)";c.fillRect(lx-.8,ly-.8,1.6,1.6);
      for(var r=0;r<7;r++){var ry=hz+(dk>0?(hz-ly)*(.5+r*.32):0)+r*U*.01,rl=T*(1.6-r*.12);if(ry>wb)break;var rx=lx+Math.sin(t*1.4+r*1.3+l)*(1+r*.8);
        c.fillStyle="rgba(255,196,140,"+((.22-r*.026)*fl).toFixed(3)+")";c.fillRect(rx-.7,ry,1.4,rl)}}
    /* traffic: headlights eastbound, tail lights westbound */
    var span=G.xR-G.xL+S*.3;
    for(var v=0;v<CARS.length;v++){var cr=CARS[v],pos=((cr[0]+t*.028*cr[2]*(S/span)*3)%1),x=cr[1]>0?G.xL-S*.15+pos*span:G.xR+S*.15-pos*span,y=dk-T*(cr[1]>0?.42:.62);
      if(x<-6||x>w+6)continue;var col=cr[1]>0?"255,232,200":"255,96,80",ah=cr[1]>0?.85:.7;
      var cg=c.createRadialGradient(x,y,0,x,y,T*1.4);cg.addColorStop(0,"rgba("+col+","+(ah*.6).toFixed(2)+")");cg.addColorStop(1,"rgba("+col+",0)");c.fillStyle=cg;c.fillRect(x-T*1.4,y-T*1.4,T*2.8,T*2.8);
      c.fillStyle="rgba("+col+","+ah+")";c.fillRect(x-1.1,y-.6,2.2,1.2);
      c.fillStyle="rgba("+col+",.12)";c.fillRect(x-.6,hz+(hz-y)*.6,1.2,T*2)}
    c.globalCompositeOperation="source-over";
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.48,0);lv.addColorStop(0,"rgba(22,14,18,.55)");lv.addColorStop(1,"rgba(22,14,18,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.spY-G.R*.6]:[w/2,h/2]}};
})();

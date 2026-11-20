/* ================= HERO FIELD: the Samuel De Champlain Bridge over the St. Lawrence at blue hour. The firm shares the
   name, and the bridge carries Montréal's south-shore traffic past Nuns' Island. Seen from the water: the long viaduct
   recedes to the far shore, the single cable-stayed tower rises over the main span with its stays fanned to the deck,
   deck lamps and moving headlights run its length, and the river mirrors all of it. Painted in soft layers (haze, glow,
   grain), no flat shapes. It animates on its own (water, traffic, lamps), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,oGrain=null,LAMP=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.4,w*1.0):h;
    var hz=mob?U*.8:h*.64;
    var S=mob?U*.62:Math.min(h*.5,cw*.36);
    var vx=mob?w*.02:side+cw*.2,xt=mob?w*.7:side+cw*.76;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,vx:vx,xn:vx+(xt-vx)*1.5,dt:1.5,H:S*.3,T:S*1.42};
  }
  /* world depth d (1 = near) to screen */
  function X(d){return G.vx+(G.xn-G.vx)/d}
  function Y(hgt,d){return G.hz-hgt/d}
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function blob(g,x,y,rx,ry,col){g.save();g.translate(x,y);g.scale(1,ry/rx);var gr=g.createRadialGradient(0,0,0,0,0,rx);gr.addColorStop(0,col);gr.addColorStop(1,col.replace(/[\d.]+\)$/,"0)"));g.fillStyle=gr;g.beginPath();g.arc(0,0,rx,0,Math.PI*2);g.fill();g.restore()}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(hz+2),g=A[1];oTop=A[0];LAMP=[];
    /* blue hour: Champlain's navy overhead, the logo blue through the middle of the sky, a last warm band on the horizon */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#061626");sky.addColorStop(.24,"#0d2a48");sky.addColorStop(.46,"#25527c");sky.addColorStop(.62,"#5a7ea3");sky.addColorStop(.76,"#9aa9bb");sky.addColorStop(.88,"#d2b6a2");sky.addColorStop(1,"#e6c4a0");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    /* the afterglow, low and wide, behind the far end of the bridge */
    g.save();g.translate(G.mob?w*.3:G.vx+G.cw*.12,hz);g.scale(1,.36);var sg=g.createRadialGradient(0,0,0,0,0,w*.7);sg.addColorStop(0,"rgba(248,206,158,.55)");sg.addColorStop(.45,"rgba(210,170,160,.16)");sg.addColorStop(1,"rgba(180,150,150,0)");g.fillStyle=sg;g.fillRect(-w*1.2,-hz*3.4,w*2.4,hz*6.8);g.restore();
    /* long brushed clouds catching the light from below */
    var Rc=rng(11);for(var i=0;i<30;i++){var cy=hz*(.08+Rc()*.66),cx=Rc()*w,cwd=w*(.07+Rc()*.18),lit=cy>hz*.5,a=.05+Rc()*.09;
      blob(g,cx,cy,cwd,U*(.005+Rc()*.011),lit?"rgba(236,196,170,"+a.toFixed(3)+")":"rgba(120,152,190,"+(a*.85).toFixed(3)+")")}
    /* a few early stars */
    var Rs=rng(3);for(i=0;i<(G.mob?14:34);i++){var sx=Rs()*w,sy=Rs()*hz*.36,sa=.25+Rs()*.5;g.fillStyle="rgba(240,244,255,"+sa.toFixed(2)+")";g.fillRect(sx,sy,1.1,1.1)}
    /* the far shore: soft hazy treeline with the low hump of the mountain, and a scatter of distant lights */
    var Rt=rng(17);g.save();g.filter="blur("+Math.max(1,U*.004).toFixed(1)+"px)";
    blob(g,G.mob?w*.18:G.vx-G.cw*.02,hz-S*.02,S*.62,S*.11,"rgba(58,72,92,.75)");
    for(var t=0;t<70;t++){var tx=-30+Rt()*(w+60),tr=S*(.03+Rt()*.05);blob(g,tx,hz-S*(.012+Rt()*.02),tr,tr*.45,"rgba(30,44,60,.85)")}
    g.restore();
    g.fillStyle="#1a2a3a";g.fillRect(0,hz-S*.012,w,S*.012+2);
    for(t=0;t<(G.mob?40:110);t++){var lx=Rt()*w,la=.35+Rt()*.5,warm=Rt()<.75;g.fillStyle=warm?"rgba(255,214,160,"+la.toFixed(2)+")":"rgba(210,228,255,"+la.toFixed(2)+")";g.fillRect(lx,hz-S*.004-Rt()*S*.022,1.2,1.2)}
    /* evening haze sitting on the water line */
    var hg=g.createLinearGradient(0,hz-S*.12,0,hz);hg.addColorStop(0,"rgba(170,170,180,0)");hg.addColorStop(1,"rgba(190,176,172,.28)");g.fillStyle=hg;g.fillRect(0,hz-S*.12,w,S*.12+2);
    /* the bridge */
    var B=mk(hz+2),bg=B[1];bridge(bg);
    g.save();g.setTransform(1,0,0,1,0,0);g.filter="blur(.35px)";g.drawImage(B[0],0,0);g.restore();g.setTransform(dpr,0,0,dpr,0,0);
    /* grain: a fixed painterly speckle over the whole scene */
    var Gr=mk(h),gg=Gr[1],Rn=rng(97);oGrain=Gr[0];var n=Math.round(w*h/(G.mob?60:40));
    for(var q=0;q<n;q++){var v=Rn();gg.fillStyle=v<.5?"rgba(0,0,0,"+(.05+Rn()*.06).toFixed(3)+")":"rgba(255,244,230,"+(.025+Rn()*.04).toFixed(3)+")";gg.fillRect(Rn()*w,Rn()*h,1+Rn()*1.4,1+Rn()*1.4)}
  }
  function bridge(g){
    var S=G.S,H=G.H,T=G.T,dt=G.dt,th=S*.05,dFar=34,d0=.62,d;
    /* piers under the viaduct, nearest last; spacing even in the world, so they crowd toward the far shore */
    for(d=dFar;d>=d0;d-=(d>6?.5:d>2.5?.22:.16)){var px=X(d),pw=Math.max(.8,S*.034/d),top=Y(H,d)+th/d,col=Math.min(1,1.6/d);
      if(px>w+40)continue;
      var pg=g.createLinearGradient(px-pw,0,px+pw,0);pg.addColorStop(0,"rgba(150,150,156,"+(.5+.4*col).toFixed(2)+")");pg.addColorStop(.5,"rgba(92,100,112,.95)");pg.addColorStop(1,"rgba(40,50,64,.95)");
      g.fillStyle=pg;g.beginPath();g.moveTo(px-pw*.8,top);g.lineTo(px+pw*.8,top);g.lineTo(px+pw*1.05,G.hz+1);g.lineTo(px-pw*1.05,G.hz+1);g.closePath();g.fill();
      /* the pier cap */
      g.fillStyle="rgba(70,78,90,.95)";g.fillRect(px-pw*1.5,top-Math.max(.6,S*.008/d),pw*3,Math.max(1,S*.012/d))}
    /* the deck: a thick girder band receding to the shore, lit along its fascia by the west */
    var steps=[];for(d=d0;d<=dFar;d*=1.04)steps.push(d);
    var top=function(d){return Y(H,d)},bot=function(d){return Y(H,d)+th/d};
    g.beginPath();steps.forEach(function(dd,i){var x=X(dd),y=top(dd);i?g.lineTo(x,y):g.moveTo(x,y)});
    for(var i=steps.length-1;i>=0;i--)g.lineTo(X(steps[i]),bot(steps[i]));g.closePath();
    var dg=g.createLinearGradient(0,top(1),0,bot(1));dg.addColorStop(0,"#b8b3ad");dg.addColorStop(.35,"#8d9198");dg.addColorStop(1,"#3a4656");g.fillStyle=dg;g.fill();
    /* warm light raking the fascia, fading into the distance */
    var fg=g.createLinearGradient(X(d0),0,X(dFar),0);fg.addColorStop(0,"rgba(10,24,40,.18)");fg.addColorStop(.6,"rgba(240,200,160,.12)");fg.addColorStop(1,"rgba(220,190,170,.35)");g.fillStyle=fg;g.fill();
    /* parapet and the dark underside shadow */
    g.strokeStyle="rgba(232,226,214,.7)";g.lineWidth=1;g.beginPath();steps.forEach(function(dd,i){var x=X(dd),y=top(dd)-S*.012/dd;i?g.lineTo(x,y):g.moveTo(x,y)});g.stroke();
    g.strokeStyle="rgba(10,20,32,.7)";g.lineWidth=1.2;g.beginPath();steps.forEach(function(dd,i){var x=X(dd),y=bot(dd);i?g.lineTo(x,y):g.moveTo(x,y)});g.stroke();
    /* the stays: two planes fanned from the upper tower to the deck, back span (near) and main span (far) */
    var tx=X(dt),Tt=Y(T,dt);
    g.lineCap="round";
    for(var k=0;k<14;k++){var f=k/13,ah=T*(.62+.33*f),
        dm=dt+.18+f*1.7,db=dt-.12-f*.68;
      [[dm,.36],[db,.5]].forEach(function(p){var ex=X(p[0]),ey=top(p[0]);
        var sg=g.createLinearGradient(tx,Y(ah,dt),ex,ey);sg.addColorStop(0,"rgba(236,230,220,"+(p[1]+.12).toFixed(2)+")");sg.addColorStop(1,"rgba(200,206,214,"+(p[1]*.7).toFixed(2)+")");
        g.strokeStyle=sg;g.lineWidth=Math.max(.6,S*.0026);g.beginPath();g.moveTo(tx,Y(ah,dt));g.lineTo(ex,ey);g.stroke()})}
    /* the tower: one tall tapering shaft of pale concrete, lit warm on its western face */
    var bw=S*.05/dt,tw=S*.026/dt,base=G.hz+1;
    var tg=g.createLinearGradient(tx-bw,0,tx+bw,0);tg.addColorStop(0,"#e7d7c4");tg.addColorStop(.45,"#b9b4b0");tg.addColorStop(.55,"#7e8896");tg.addColorStop(1,"#3c4a5c");
    g.fillStyle=tg;g.beginPath();g.moveTo(tx-bw,base);g.bezierCurveTo(tx-bw,Y(T*.5,dt),tx-tw*1.1,Y(T*.8,dt),tx-tw,Tt);
    g.quadraticCurveTo(tx,Tt-S*.03/dt,tx+tw,Tt);g.bezierCurveTo(tx+tw*1.1,Y(T*.8,dt),tx+bw,Y(T*.5,dt),tx+bw,base);g.closePath();g.fill();
    /* the anchorage zone at the head of the tower and the deck crossing it */
    g.fillStyle="rgba(40,52,68,.1)";g.fillRect(tx-tw*.9,Y(T*.95,dt),tw*1.8,T*.33/dt);
    g.strokeStyle="rgba(250,236,214,.55)";g.lineWidth=1;g.beginPath();g.moveTo(tx-tw*.98,Tt+2);g.bezierCurveTo(tx-tw*1.1,Y(T*.8,dt),tx-bw,Y(T*.5,dt),tx-bw,Y(H,dt));g.stroke();
    var cx0=X(dt+.05),cx1=X(dt-.05);g.fillStyle="#8a8f98";g.fillRect(Math.min(cx0,cx1)-1,top(dt),Math.abs(cx1-cx0)+2,th/dt);
    /* deck lamps, every few spans */
    for(d=d0+.05;d<dFar*.6;d+=(d>5?.42:.2)){var lx=X(d),ly=top(d)-S*.05/d;if(lx>w+10)continue;
      g.strokeStyle="rgba(30,40,54,.8)";g.lineWidth=Math.max(.5,S*.003/d);g.beginPath();g.moveTo(lx,top(d)-S*.01/d);g.lineTo(lx,ly);g.stroke();LAMP.push([lx,ly,1/d])}
    /* floodlight on the tower foot */
    blob(g,tx,Y(T*.18,dt),bw*3,T*.2/dt,"rgba(255,226,186,.12)");
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0,CARS=(function(){var R=rng(71),a=[];for(var i=0;i<26;i++)a.push([R(),R()<.5?1:-1,.6+R()*.6]);return a})();
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,wb=G.mob?U*1.08:h,sw=Math.round(w*dpr);
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* traffic: headlights (white, coming) and tail lights (red, going) moving along the deck */
    c.globalCompositeOperation="lighter";
    for(var k=0;k<CARS.length;k++){var C=CARS[k],u=(C[0]+t*.012*C[2]*C[1]+10)%1,d=.7+Math.pow(u,2.2)*22,x=X(d),y=Y(G.H,d)-S*.016/d;if(x>w+6)continue;
      var r=Math.max(.6,S*.008/d),col=C[1]>0?"255,240,214":"255,90,70";c.fillStyle="rgba("+col+","+(.55+.4*Math.min(1,1/d)).toFixed(2)+")";c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();
      if(d<4)blob(c,x,y,r*5,r*3,"rgba("+col+",.18)")}
    /* the lamps: steady soft halos */
    for(var l=0;l<LAMP.length;l++){var L=LAMP[l],fl=.88+.12*Math.sin(t*1.2+l*1.7),R=Math.max(3,S*.05*L[2]);
      var lg=c.createRadialGradient(L[0],L[1],0,L[0],L[1],R);lg.addColorStop(0,"rgba(255,228,176,"+(.8*fl).toFixed(3)+")");lg.addColorStop(.22,"rgba(255,204,146,"+(.22*fl).toFixed(3)+")");lg.addColorStop(1,"rgba(255,190,130,0)");c.fillStyle=lg;c.fillRect(L[0]-R,L[1]-R,R*2,R*2)}
    c.globalCompositeOperation="source-over";
    /* the river: a darker, moving mirror */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#5a6c82");wg.addColorStop(.18,"#2a4560");wg.addColorStop(.6,"#11263b");wg.addColorStop(1,"#071a2b");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz);c.globalAlpha=e*.55;
    for(var y=0;y<RH;y+=2){var kk=y/RH,off=Math.sin(y*.13+t*1.1)*(.5+kk*6)+Math.sin(y*.045-t*.55)*(kk*4),sy2=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy2,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(7,26,43,.06)");dkn.addColorStop(.5,"rgba(7,26,43,.42)");dkn.addColorStop(1,"rgba(7,26,43,.86)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* broken streaks of lamp light on the water */
    c.globalCompositeOperation="lighter";
    var Rr=rng(5);
    for(var i=0;i<LAMP.length;i++){var P=LAMP[i],px=P[0],pw=Math.max(2,S*.03*P[2]),len=(wb-hz)*(.25+.45*Math.min(1,P[2]*1.4));
      for(var dd=2;dd<len;dd+=Math.max(3,U*.006)){var q=dd/len,a=(1-q)*(.1+.14*Math.min(1,P[2]))*(.6+.4*Math.sin(t*2.2+dd*.21+i)),ox=Math.sin(t*1.4+dd*.09+i*2.1)*(1+q*6);if(a<.01)continue;
        c.fillStyle="rgba(255,206,150,"+a.toFixed(3)+")";c.fillRect(px-pw/2+ox,hz+dd,pw*(.6+Rr()*.5),1.3)}}
    /* the afterglow's long reflection */
    var ag=c.createLinearGradient(0,hz,0,hz+(wb-hz)*.5);ag.addColorStop(0,"rgba(240,190,150,.16)");ag.addColorStop(1,"rgba(240,190,150,0)");c.fillStyle=ag;c.fillRect(0,hz,w,(wb-hz)*.5);
    c.globalCompositeOperation="source-over";
    /* ripples across the surface */
    c.strokeStyle="rgba(200,214,226,.08)";c.lineWidth=1;c.beginPath();var Rp=rng(23);
    for(var r=0;r<(G.mob?26:56);r++){var ry=hz+Math.pow(Rp(),1.4)*(wb-hz),rx=((Rp()+t*.006*(1+Rp()))%1)*w,rl=S*(.04+Rp()*.1)*(1+(ry-hz)/(wb-hz));c.moveTo(rx,ry);c.lineTo(rx+rl,ry)}c.stroke();
    /* grain over everything; then a quiet scrim on the text side */
    c.globalAlpha=e*.9;c.drawImage(oGrain,0,0,w,h);c.globalAlpha=e;
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(5,18,32,.74)");lv.addColorStop(.55,"rgba(5,18,32,.4)");lv.addColorStop(1,"rgba(5,18,32,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(7,26,43,0)");bv.addColorStop(1,"rgba(7,26,43,.55)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[X(G.dt),G.hz-G.S*.5]:[w/2,h/2]}};
})();

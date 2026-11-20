/* ================= HERO FIELD: the Pont de Bercy at sunrise. Adaxtra Capital's office is at 18, quai de la Rapée, on the
   right bank of the Seine beside the Pont de Bercy, the stone bridge whose upper deck is the arcaded viaduct of Métro line 6.
   The scene is that bridge seen from the quai at first light: the low sun behind it, its arches opening onto the glow,
   the viaduct on top, mist on the river and the whole bridge mirrored in the moving water. Painted in soft layers (haze,
   grain, glow) in the firm's navy and gold. It animates on its own (water, mist, a passing train), no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,oGrain=null,oMist=null;
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.345,w*.8):h;
    var hz=mob?U*.62:h*.64;
    var S=mob?U*.74:Math.min(h*.72,cw*.5);
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,x0:mob?-w*.08:side+cw*.47,x1:w+S*.1,sun:mob?w*.42:side+cw*.7};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function blob(g,x,y,rx,ry,col){g.save();g.translate(x,y);g.scale(1,ry/rx);var gr=g.createRadialGradient(0,0,0,0,0,rx);gr.addColorStop(0,col);gr.addColorStop(1,col.replace(/[\d.]+\)$/,"0)"));g.fillStyle=gr;g.beginPath();g.arc(0,0,rx,0,Math.PI*2);g.fill();g.restore()}
  /* perspective along the bridge: p=0 at the far (left) end, 1 at the near (right) end */
  function P(x){return Math.max(0,Math.min(1,(x-G.x0)/(G.x1-G.x0)))}
  function SC(x){return G.mob?.62+.5*P(x):.4+.72*Math.pow(P(x),1.15)}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(hz+2),g=A[1];oTop=A[0];
    /* dawn: Adaxtra navy overhead warming through slate into the logo's gold at the horizon */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#0b1f33");sky.addColorStop(.2,"#173556");sky.addColorStop(.4,"#3d5c7e");sky.addColorStop(.55,"#7f8796");sky.addColorStop(.68,"#c2a682");sky.addColorStop(.82,"#e8c58f");sky.addColorStop(1,"#f7dfab");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    /* the sun just risen behind the bridge: a wide low glow, then the disc */
    var sx=G.sun,sy=hz-S*(G.mob?.36:.32);
    g.save();g.translate(sx,sy);g.scale(1,.5);var sg=g.createRadialGradient(0,0,0,0,0,w*.7);sg.addColorStop(0,"rgba(255,230,176,.85)");sg.addColorStop(.3,"rgba(240,196,134,.34)");sg.addColorStop(1,"rgba(200,160,120,0)");g.fillStyle=sg;g.fillRect(-w*1.5,-hz*3,w*3,hz*6);g.restore();
    blob(g,sx,sy,S*.16,S*.16,"rgba(255,240,205,.6)");
    g.fillStyle="rgba(255,246,222,.95)";g.beginPath();g.arc(sx,sy,S*.032,0,Math.PI*2);g.fill();
    /* long brushed cloud catching the light from below */
    var Rc=rng(11);for(var i=0;i<30;i++){var cy=hz*(.08+Rc()*.66),cx=Rc()*w,cwd=w*(.05+Rc()*.17),lit=cy>hz*.42,a=.05+Rc()*.1;
      blob(g,cx,cy,cwd,U*(.005+Rc()*.012),lit?"rgba(246,206,150,"+a.toFixed(3)+")":"rgba(110,140,176,"+(a*.9).toFixed(3)+")")}
    /* the far bank in the haze: a soft band of Parisian roofs and trees, no detail, low against the glow */
    var Rf=rng(17),fb=hz-U*.006;g.save();g.filter="blur("+Math.max(1.2,U*.003).toFixed(1)+"px)";
    g.fillStyle="rgba(96,104,118,.55)";g.beginPath();g.moveTo(-10,fb);var fx=-10;
    while(fx<w+10){var bw=S*(.03+Rf()*.06),bh=S*(.035+Rf()*.05);g.lineTo(fx,fb-bh);if(Rf()<.6){g.lineTo(fx+bw*.12,fb-bh-S*.012);g.lineTo(fx+bw*.88,fb-bh-S*.012)}g.lineTo(fx+bw,fb-bh);fx+=bw}
    g.lineTo(w+10,fb);g.closePath();g.fill();
    for(var t=0;t<70;t++){var tx=Rf()*w,tr=S*(.018+Rf()*.03);blob(g,tx,fb-tr*.5,tr,tr*.7,"rgba(70,80,92,.55)")}
    g.restore();
    /* warm haze sitting on the water line */
    var hzg=g.createLinearGradient(0,hz-S*.12,0,hz);hzg.addColorStop(0,"rgba(246,214,160,0)");hzg.addColorStop(1,"rgba(246,214,160,.42)");g.fillStyle=hzg;g.fillRect(0,hz-S*.12,w,S*.12+2);
    bridge(g,hz);
    /* grain */
    var Gr=mk(h),gg=Gr[1],Rn=rng(97);oGrain=Gr[0];var n=Math.round(w*h/(G.mob?60:40));
    for(var q=0;q<n;q++){var v=Rn();gg.fillStyle=v<.5?"rgba(0,0,0,"+(.05+Rn()*.06).toFixed(3)+")":"rgba(255,244,226,"+(.025+Rn()*.04).toFixed(3)+")";gg.fillRect(Rn()*w,Rn()*h,1+Rn()*1.4,1+Rn()*1.4)}
    /* mist: a soft band that drifts across the river */
    var M=mk(S*.2),mg=M[1],Rm=rng(53);oMist=M[0];
    for(var m=0;m<40;m++)blob(mg,Rm()*w,S*.1+(Rm()-.5)*S*.06,w*(.05+Rm()*.12),S*(.012+Rm()*.02),"rgba(246,226,196,"+(.06+Rm()*.08).toFixed(3)+")");
  }
  /* the Pont de Bercy: stone arches on piers, the deck, and on top the arcaded viaduct of line 6 */
  function bridge(g,wl){
    var S=G.S,x0=G.x0,x1=G.x1;G.piers=[];
    function deckY(x){return wl-S*.25*SC(x)}
    function railY(x){return deckY(x)-S*.15*SC(x)}
    G.deckY=deckY;G.railY=railY;
    /* piers: spacing grows toward the viewer */
    var x=x0,k=0;while(x<x1+S*.4){G.piers.push(x);x+=S*.5*SC(x);k++}
    var stoneT="#5d6672",stoneB="#2a3442",rim="rgba(250,214,150,";
    /* the solid face of the bridge (deck band down to the water), arches cut out afterwards */
    g.save();
    var face=new Path2D();face.moveTo(x0,wl+1);
    for(var xx=x0;xx<=x1+S*.4;xx+=6)face.lineTo(xx,deckY(xx)-S*.025*SC(xx));
    face.lineTo(x1+S*.4,wl+1);face.closePath();
    var fg=g.createLinearGradient(0,wl-S*.4,0,wl);fg.addColorStop(0,stoneT);fg.addColorStop(1,stoneB);
    g.fillStyle=fg;g.fill(face);
    /* stone courses */
    g.clip(face);g.strokeStyle="rgba(10,20,32,.16)";g.lineWidth=.6;g.beginPath();
    for(var cr=1;cr<14;cr++){for(xx=x0;xx<=x1+S*.4;xx+=6){var yy=deckY(xx)+(wl-deckY(xx))*cr/14;xx===x0?g.moveTo(xx,yy):g.lineTo(xx,yy)}}g.stroke();
    g.restore();
    /* the arches: openings through which the dawn shows */
    g.save();g.globalCompositeOperation="destination-out";
    for(var i=0;i<G.piers.length-1;i++){var a=G.piers[i],b=G.piers[i+1],sc=SC((a+b)/2),pw=S*.05*sc,l=a+pw/2,r=b-pw/2,top=wl-S*.19*sc,spring=wl-S*.06*sc;
      g.beginPath();g.moveTo(l,wl+2);g.lineTo(l,spring);g.bezierCurveTo(l,top-(spring-top)*.3,r,top-(spring-top)*.3,r,spring);g.lineTo(r,wl+2);g.closePath();g.fill();
      G.arches=G.arches||[];}
    g.restore();
    /* inside each arch: the soffit in shadow at the edge, glow through the middle */
    for(i=0;i<G.piers.length-1;i++){var a2=G.piers[i],b2=G.piers[i+1],sc2=SC((a2+b2)/2),pw2=S*.05*sc2,l2=a2+pw2/2,r2=b2-pw2/2,top2=wl-S*.19*sc2,sp2=wl-S*.06*sc2;
      g.save();g.beginPath();g.moveTo(l2,wl+2);g.lineTo(l2,sp2);g.bezierCurveTo(l2,top2-(sp2-top2)*.3,r2,top2-(sp2-top2)*.3,r2,sp2);g.lineTo(r2,wl+2);g.closePath();g.clip();
      var ig=g.createLinearGradient(0,top2,0,wl);ig.addColorStop(0,"#d9b27e");ig.addColorStop(1,"#f7dca5");g.fillStyle=ig;g.fillRect(l2,top2-4,r2-l2,wl-top2+6);
      var sd=g.createLinearGradient(l2,0,r2,0);sd.addColorStop(0,"rgba(30,40,54,.75)");sd.addColorStop(.18,"rgba(30,40,54,.12)");sd.addColorStop(.82,"rgba(30,40,54,.12)");sd.addColorStop(1,"rgba(30,40,54,.75)");g.fillStyle=sd;g.fillRect(l2,top2-4,r2-l2,wl-top2+6);
      /* the far bank seen through the arch */
      g.fillStyle="rgba(120,118,118,.35)";g.fillRect(l2,wl-S*.018*sc2,r2-l2,S*.018*sc2);
      g.restore();
      /* voussoirs: a fine ring of stones around the arch, lit on top */
      g.strokeStyle="rgba(14,24,36,.35)";g.lineWidth=Math.max(.6,S*.0016*sc2);g.beginPath();
      for(var v=0;v<=16;v++){var tt=v/16,bx=(1-tt)*(1-tt)*(1-tt)*l2+3*(1-tt)*(1-tt)*tt*l2+3*(1-tt)*tt*tt*r2+tt*tt*tt*r2,by=(1-tt)*(1-tt)*(1-tt)*sp2+3*(1-tt)*(1-tt)*tt*(top2-(sp2-top2)*.3)+3*(1-tt)*tt*tt*(top2-(sp2-top2)*.3)+tt*tt*tt*sp2;
        var ang=Math.atan2(by-(sp2+S*.05*sc2),bx-(l2+r2)/2);g.moveTo(bx,by);g.lineTo(bx+Math.cos(ang)*S*.022*sc2,by+Math.sin(ang)*S*.022*sc2)}g.stroke();
      g.strokeStyle=rim+".35)";g.lineWidth=Math.max(.8,S*.002*sc2);g.beginPath();g.moveTo(l2,sp2);g.bezierCurveTo(l2,top2-(sp2-top2)*.3,r2,top2-(sp2-top2)*.3,r2,sp2);g.stroke();
      /* pier cutwater, a little lighter */
      var pg=g.createLinearGradient(b2-pw2/2,0,b2+pw2/2,0);pg.addColorStop(0,"rgba(255,230,180,.1)");pg.addColorStop(1,"rgba(0,0,0,.18)");g.fillStyle=pg;g.fillRect(b2-pw2/2,sp2,pw2,wl-sp2);
    }
    /* cornice along the deck, rim-lit by the sun behind */
    g.beginPath();for(xx=x0;xx<=x1+S*.4;xx+=6){var dy=deckY(xx)-S*.025*SC(xx);xx===x0?g.moveTo(xx,dy):g.lineTo(xx,dy)}
    g.strokeStyle=rim+".55)";g.lineWidth=Math.max(1,S*.004);g.stroke();
    /* the viaduct: a row of small arches on slender columns carrying the line 6 tracks */
    var vx=x0;while(vx<x1+S*.4){var vs=SC(vx),step=S*.075*vs,d0=deckY(vx)-S*.025*vs,ry=railY(vx),cwid=S*.012*vs;
      var vg=g.createLinearGradient(0,ry,0,d0);vg.addColorStop(0,"#56606c");vg.addColorStop(1,"#323c49");g.fillStyle=vg;
      g.beginPath();g.moveTo(vx,d0);g.lineTo(vx,ry);g.lineTo(vx+step,railY(vx+step));g.lineTo(vx+step,deckY(vx+step)-S*.025*SC(vx+step));
      var ar=ry+(d0-ry)*.32;g.lineTo(vx+step-cwid,deckY(vx+step)-S*.025*SC(vx+step));g.lineTo(vx+step-cwid,ar+(d0-ar)*.35);
      g.quadraticCurveTo(vx+step/2,ar-(d0-ar)*.1,vx+cwid,ar+(d0-ar)*.35);g.lineTo(vx+cwid,d0);g.closePath();g.fill();
      g.strokeStyle=rim+".22)";g.lineWidth=Math.max(.6,S*.0016*vs);g.beginPath();g.moveTo(vx+step-cwid,ar+(d0-ar)*.35);g.quadraticCurveTo(vx+step/2,ar-(d0-ar)*.1,vx+cwid,ar+(d0-ar)*.35);g.stroke();
      vx+=step}
    /* parapet and rail level, rim-lit */
    g.beginPath();for(xx=x0;xx<=x1+S*.4;xx+=6){var r0=railY(xx);xx===x0?g.moveTo(xx,r0):g.lineTo(xx,r0)}
    g.strokeStyle=rim+".7)";g.lineWidth=Math.max(1.2,S*.005);g.stroke();
    /* lamps along the road deck, still lit at dawn */
    G.lamps=[];for(i=0;i<G.piers.length;i++){var lx=G.piers[i],ls=SC(lx),ly=deckY(lx)-S*.025*ls;g.strokeStyle="#1c2531";g.lineWidth=Math.max(1,S*.003*ls);g.beginPath();g.moveTo(lx,ly);g.lineTo(lx,ly-S*.06*ls);g.stroke();G.lamps.push([lx,ly-S*.062*ls,ls])}
    /* the far end fades into the haze */
    g.save();g.globalCompositeOperation="source-atop";var hg=g.createLinearGradient(x0,0,x0+(x1-x0)*.6,0);hg.addColorStop(0,"rgba(200,180,160,.5)");hg.addColorStop(1,"rgba(200,180,160,0)");g.fillStyle=hg;g.fillRect(0,0,w,wl+2);g.restore();
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,wb=G.mob?U:h,sw=Math.round(w*dpr);
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    if(G.mob){c.fillStyle="#0c2236";c.fillRect(0,0,cv.width,cv.height)}
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* a line 6 train crossing the viaduct every so often, right to left */
    var per=16,ph=((t+4)%per)/per,tl=S*.75,tx=G.x1+S*.3-ph*(G.x1-G.x0+S*.3+tl*1.4);
    if(!RM||true){for(var car=0;car<5;car++){var cx0=tx+car*tl/5,cx1=cx0+tl/5-S*.006;if(cx1<G.x0||cx0>w)continue;
      var a0=Math.max(cx0,G.x0),a1=Math.min(cx1,G.x1+S*.4),s0=SC(a0),s1=SC(a1),r0=G.railY(a0),r1=G.railY(a1),hh0=S*.034*s0,hh1=S*.034*s1;
      c.fillStyle="rgba(150,160,168,.9)";c.beginPath();c.moveTo(a0,r0);c.lineTo(a0,r0-hh0);c.lineTo(a1,r1-hh1);c.lineTo(a1,r1);c.closePath();c.fill();
      c.fillStyle="rgba(250,214,150,.4)";c.beginPath();c.moveTo(a0,r0-hh0*.96);c.lineTo(a0,r0-hh0);c.lineTo(a1,r1-hh1);c.lineTo(a1,r1-hh1*.96);c.closePath();c.fill();
      c.fillStyle="rgba(255,226,170,.55)";for(var wn=a0+S*.01*s0;wn<a1-S*.01*s0;wn+=S*.02*s0){var wy=G.railY(wn),ws=SC(wn);c.fillRect(wn,wy-S*.026*ws,S*.009*ws,S*.01*ws)}}}
    /* the lamps: soft halos */
    c.globalCompositeOperation="lighter";
    for(var l=0;l<G.lamps.length;l++){var L=G.lamps[l],rr=S*.04*L[2];var lg=c.createRadialGradient(L[0],L[1],0,L[0],L[1],rr);lg.addColorStop(0,"rgba(255,230,180,.7)");lg.addColorStop(.25,"rgba(255,206,150,.16)");lg.addColorStop(1,"rgba(255,200,140,0)");c.fillStyle=lg;c.fillRect(L[0]-rr,L[1]-rr,rr*2,rr*2)}
    c.globalCompositeOperation="source-over";
    /* the Seine: a moving mirror of the bridge and the dawn */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#c9aa7c");wg.addColorStop(.18,"#5f6a76");wg.addColorStop(.55,"#1d3247");wg.addColorStop(1,"#0c2236");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz);c.globalAlpha=e*.55;
    for(var y=0;y<RH;y+=2){var k=y/RH,off=Math.sin(y*.13+t*1.1)*(.5+k*6)+Math.sin(y*.045-t*.55)*(k*4),sy2=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy2,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(12,34,54,0)");dkn.addColorStop(.5,"rgba(12,34,54,.3)");dkn.addColorStop(1,"rgba(12,34,54,.85)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* the sun's path on the water: broken gold streaks */
    c.globalCompositeOperation="lighter";var Rr=rng(5),len=(wb-hz)*.8;
    for(var d=2;d<len;d+=Math.max(3,U*.005)){var kk=d/len,a=(1-kk)*(.34)*(.55+.45*Math.sin(t*2.1+d*.19)),spread=S*(.02+kk*.12),n2=2+Math.round(kk*3);if(a<.01)continue;
      for(var q=0;q<n2;q++){var ox=(Rr()-.5)*spread*2+Math.sin(t*1.3+d*.08+q)*(2+kk*6);c.fillStyle="rgba(255,214,150,"+(a*(.6+Rr()*.4)).toFixed(3)+")";c.fillRect(G.sun+ox,hz+d,S*(.01+Rr()*.03)*(1-kk*.3),1.3)}}
    c.globalCompositeOperation="source-over";
    /* mist drifting over the river */
    var mo=(t*6)%w;c.globalAlpha=e*.9;c.drawImage(oMist,-mo,hz-S*.1,w,S*.2);c.drawImage(oMist,w-mo,hz-S*.1,w,S*.2);c.globalAlpha=e;
    /* ripples */
    c.strokeStyle="rgba(230,214,190,.08)";c.lineWidth=1;c.beginPath();var Rp=rng(23);
    for(var r=0;r<(G.mob?24:50);r++){var ry=hz+Math.pow(Rp(),1.4)*(wb-hz),rx=((Rp()+t*.006*(1+Rp()))%1)*w,rl=S*(.03+Rp()*.08)*(1+(ry-hz)/(wb-hz));c.moveTo(rx,ry);c.lineTo(rx+rl,ry)}c.stroke();
    /* grain; then a quiet scrim on the text side */
    c.globalAlpha=e*.9;c.drawImage(oGrain,0,0,w,h);c.globalAlpha=e;
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(8,24,39,.74)");lv.addColorStop(.55,"rgba(8,24,39,.4)");lv.addColorStop(1,"rgba(8,24,39,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(12,34,54,0)");bv.addColorStop(1,"rgba(12,34,54,.6)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var mb=c.createLinearGradient(0,wb-U*.2,0,wb);mb.addColorStop(0,"rgba(12,34,54,0)");mb.addColorStop(1,"rgba(12,34,54,1)");c.fillStyle=mb;c.fillRect(0,wb-U*.2,w,U*.2+1);c.fillStyle="#0c2236";c.fillRect(0,wb,w,h-wb+1)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.sun,G.hz-G.S*.2]:[w/2,h/2]}};
})();

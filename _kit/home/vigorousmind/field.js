/* ================= HERO FIELD: the firm's own product photography (HOME_BRIEF update 2a). The Vigorous Mind Robot (a temi
   robot running Vigorous Mind's software), cut out of the product photograph on vigorousmind.com and graded toward the logo
   navy, standing whole in the open area right of the headline under a cool pool of light, with a soft floor shadow. It
   glides almost imperceptibly toward the viewer and back over ~40s (a slow Ken Burns push); it moves on its own, so no
   pointer response (CZ). On phones it stands in the top band and the ink rises over its base before the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1630",AR=802/1800;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.46:h;
    /* desktop: the robot stands whole, ~78% of the screen tall, centred at ~70% of the width (DO) */
    var ih=mob?(U*.95-84):Math.min(h*.8,cw*.62/AR*.5),iw=ih*AR;
    var kx=mob?w*.5:side+cw*.72,fy=mob?U*.95:h*.93;   /* kx: the robot's centre line; fy: the floor it stands on */
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,fy:fy,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* a cool pool of light behind the robot, painted across the whole canvas so it never reads as a box (DJ) */
    var gx=G.kx,gy=G.mob?G.U*.5:h*.5,gr=Math.max(w,h)*(G.mob?.75:.62);
    var ag=c.createRadialGradient(gx,gy,0,gx,gy,gr);
    ag.addColorStop(0,"rgba(52,92,160,"+(.55*e).toFixed(3)+")");ag.addColorStop(.45,"rgba(28,56,112,"+(.32*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,22,48,0)");
    c.fillStyle=ag;c.fillRect(0,0,w,h);
    /* a faint floor: the light falls off below the horizon line the robot stands on */
    var fl=c.createLinearGradient(0,G.fy-G.ih*.12,0,G.fy+G.ih*.1);fl.addColorStop(0,"rgba(7,15,34,0)");fl.addColorStop(1,"rgba(7,15,34,.5)");c.fillStyle=fl;c.fillRect(0,G.fy-G.ih*.12,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.035*k)*(1+.03*(1-e));
      var dh=G.ih*sc,dw=dh*AR,x=G.kx-dw*.5,y=G.fy-dh-SP.v*G.ih*.05;
      /* the floor shadow, an ellipse under the base, then the robot itself */
      var sy=y+dh*.985,sr=dw*.62;
      c.save();c.translate(G.kx,sy);c.scale(1,.12);
      var sg=c.createRadialGradient(0,0,0,0,0,sr);sg.addColorStop(0,"rgba(2,6,16,"+(.75*e).toFixed(3)+")");sg.addColorStop(1,"rgba(2,6,16,0)");
      c.fillStyle=sg;c.fillRect(-sr,-sr,sr*2,sr*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the screen glows faintly, breathing, like a call in progress */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*.52,py=y+dh*.13,pr=dw*.62;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(170,205,255,"+(.05+.04*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(170,205,255,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!G.mob){
      /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
      var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(7,15,34,.92)");lv.addColorStop(.6,"rgba(7,15,34,.55)");lv.addColorStop(1,"rgba(7,15,34,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.18);tv.addColorStop(0,"rgba(7,15,34,.55)");tv.addColorStop(1,"rgba(7,15,34,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.18);
      var bv=c.createLinearGradient(0,h*.82,0,h);bv.addColorStop(0,"rgba(11,22,48,0)");bv.addColorStop(1,"rgba(11,22,48,.8)");c.fillStyle=bv;c.fillRect(0,h*.82,w,h*.18+1);
    }else{
      var tv2=c.createLinearGradient(0,0,0,G.bh*.22);tv2.addColorStop(0,"rgba(7,15,34,.6)");tv2.addColorStop(1,"rgba(7,15,34,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.22);
      var mv=c.createLinearGradient(0,G.bh*.93,0,G.bh);mv.addColorStop(0,"rgba(11,22,48,0)");mv.addColorStop(1,"rgba(11,22,48,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.93,w,G.bh*.07+1);
      c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.fy-G.ih*.5]:[w/2,h/2]}};
})();

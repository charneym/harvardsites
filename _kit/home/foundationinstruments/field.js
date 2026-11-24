/* ================= HERO FIELD (HOME_BRIEF update 2a): the firm's own product photography — their THM-Meter, a cut-out
   studio shot from foundationinstruments.com with real alpha — set whole and centred in the open area right of the text,
   on a low steel-blue light and a soft contact shadow so it stands on something rather than floating (DS/DD/DO/DP).
   The ground wash is painted across the whole canvas, never inside the image rect, so there is no box edge (DJ).
   It drifts very slowly on its own (a slow Ken Burns breath), so there is no pointer response (CZ).
   On phones it sits in the top band and the band fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#07141c",AR=1;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function eyeTop(){var e=document.querySelector(".hero .eyebrow");if(!e)return Math.min(h*.42,w*1.0);var r=e.getBoundingClientRect();return r.top+(window.scrollY||0)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var et=eyeTop(),U=mob?et:h;
    /* desktop: the analyser whole, centred in the open area right of the text (DO/DP), well below the nav.
       phones: whole, in the band between the nav and the eyebrow, clear of both (CW) */
    var top=92,bot=et-40,iw,ih;
    if(mob){ih=Math.max(60,Math.min(w*.66/AR,bot-top));iw=ih*AR}else{iw=Math.min(cw*.37,(h-250)*AR,640);ih=iw/AR}
    var kx=mob?w*.5:side+cw*.765,ky=mob?(top+bot)*.5+4:Math.max(h*.53,130+ih*.5);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:U,et:et};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G.mob&&Math.abs(eyeTop()-G.et)>2)G=geo();
    if(ok){
      /* a very slow breath: grow ~2% over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.02*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.008-SP.v*G.ih*.06;
      /* a low steel-blue light across the WHOLE canvas, so the photo has no rectangle of its own (DJ) */
      var ggx=G.kx,ggy=G.mob?G.ky:G.ky-G.ih*.06,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(30,84,120,"+(.5*e).toFixed(3)+")");ag.addColorStop(.32,"rgba(16,50,74,"+(.34*e).toFixed(3)+")");ag.addColorStop(.7,"rgba(9,28,40,"+(.14*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,20,28,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* the contact shadow the analyser stands on: a wide soft ellipse, eased out to nothing */
      c.save();c.globalAlpha=e;var sx=x+dw*.5,sy=y+dh*.975,srx=dw*.62,sry=dh*.075;
      c.translate(sx,sy);c.scale(1,sry/srx);var sg=c.createRadialGradient(0,0,0,0,0,srx);
      sg.addColorStop(0,"rgba(2,8,12,.78)");sg.addColorStop(.45,"rgba(2,8,12,.42)");sg.addColorStop(.8,"rgba(2,8,12,.1)");sg.addColorStop(1,"rgba(2,8,12,0)");
      c.fillStyle=sg;c.fillRect(-srx,-srx,srx*2,srx*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base, each eased out over a long distance */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);[[0,.92],[.3,.8],[.6,.45],[.85,.12],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(4,13,19,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.4);[[0,.5],[.2,.32],[.4,.17],[.6,.07],[.8,.02],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(4,13,19,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.4);
        var bv=c.createLinearGradient(0,h*.6,0,h);[[0,0],[.25,.03],[.5,.12],[.75,.3],[1,.6]].forEach(function(q){bv.addColorStop(q[0],"rgba(7,20,28,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.35);[[0,.5],[.25,.22],[.5,.06],[.75,.02],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(4,13,19,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.35);
        /* the band eases into the ink only below the analyser's own shadow, long before the text */
        var f0=G.ky+G.ih*.56,f1b=G.et+60;
        var mv=c.createLinearGradient(0,f0,0,f1b);[[0,0],[.25,.08],[.5,.3],[.75,.68],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(7,20,28,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,f0,w,f1b-f0+1);
        c.fillStyle=BG;c.fillRect(0,f1b,w,h);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

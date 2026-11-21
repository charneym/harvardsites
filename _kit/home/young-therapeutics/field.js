/* ================= HERO FIELD: a real photograph of the subject (HOME_BRIEF update 2b, preference (b)): a preserved human
   heart with its coronary arteries, by camilo jimenez on Unsplash (https://unsplash.com/photos/human-heart-OermHGSUzhI,
   images.unsplash.com/photo-1567974775951-4a1759f26045, Unsplash License). Young Therapeutics' lead programmes treat
   myocardial ischemia–reperfusion injury after a heart attack, which begins in exactly these arteries. The heart was cut out
   of its specimen jar to real alpha (no rectangle exists at any width: DJ/DP), the fluid's yellow cast removed and the
   tissue graded to a deep crimson with its tonal depth kept (no flat wash). It breathes in a slow Ken Burns drift with a
   faint, slow glow behind it; it moves on its own, so there is no pointer response (CZ). The subject sits whole, centred in
   the open area right of the text at ~72% of the width, well clear of the headline (DO/DP), with an ink wash over the text
   side (DI). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#060e1c",AR=1213/1600;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.06):h;
    /* the heart: whole in frame, centred in the open area right of the text */
    var d=mob?Math.min(h*.24,cw*.5/AR,U-110):Math.min(h*.70,cw*.34/AR);
    var kx=mob?w*.5:side+cw*.72,ky=mob?76+d*.5:h*.54;
    return {mob:mob,side:side,cw:cw,U:U,ih:d,iw:d*AR,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: in ~3.5% and a touch of drift over ~46s */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.018-SP.v*G.ih*.05;
      /* a deep teal-navy glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.4:h*.5,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      var gp=.85+.15*Math.sin(t*Math.PI*2/7);
      ag.addColorStop(0,"rgba(58,22,34,"+(.5*e*gp).toFixed(3)+")");ag.addColorStop(.45,"rgba(18,22,44,"+(.32*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,14,28,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      c.globalAlpha=1;
      /* the right edge eases into the page ink over a long distance, so the scrollbar gutter never shows a seam (DJ) */
      var rv=c.createLinearGradient(w*.8,0,w,0);rv.addColorStop(0,"rgba(6,14,28,0)");rv.addColorStop(.6,"rgba(6,14,28,.55)");rv.addColorStop(1,"rgba(6,14,28,1)");c.fillStyle=rv;c.fillRect(w*.8,0,w*.2+1,h);
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.52,0);lv.addColorStop(0,"rgba(4,10,21,.96)");lv.addColorStop(.64,"rgba(4,10,21,.62)");lv.addColorStop(1,"rgba(4,10,21,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(4,10,21,.62)");tv.addColorStop(1,"rgba(4,10,21,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(6,14,28,0)");bv.addColorStop(1,"rgba(6,14,28,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.2);tv2.addColorStop(0,"rgba(4,10,21,.5)");tv2.addColorStop(1,"rgba(4,10,21,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.2);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(6,14,28,0)");mv.addColorStop(1,"rgba(6,14,28,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
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

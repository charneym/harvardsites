/* ================= HERO FIELD: a real photograph (HOME_BRIEF update 2b, preference (b)): an airliner lifting off at dusk,
   landing lights on, runway lights below. Unsplash photo-1520437358207-323b43b50729, "A passenger airplane taking off from
   a runway at night with bright landing lights" by Josue Isai Ramos Figueroa (@jramos10), Juan Santamaria International
   Airport (https://unsplash.com/photos/airplane-taking-off-at-night-n2NBgIx3A28, Unsplash licence). It echoes the firm's own
   "fault-tolerant controls and flight testing" banner. Graded offline (scratch grade.py) toward the logo maroon over a warm
   ink with its tonal depth kept; the sky is darkened into the page ink with distance from the aircraft and the alpha fades
   on a long elliptical curve, so no rectangle edge exists at any width (DJ/DP). The aircraft is whole, centred in the open
   area right of the text at ~70% of the width and more than 100px clear of the headline (DO/DP); an ink wash covers the
   text side (DI). A very slow Ken Burns breath, no pointer response (CZ). On phones it sits in the top band (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#12090c";
  /* hero.webp geometry: the wingspan runs 0.211-0.852 of the width (centre .530), the aircraft and lights centre at .53 of the height */
  var SPAN=.641,CXF=.530,CYF=.50,AR=940/2600;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=h;
    if(mob){var eb=document.querySelector(".hero .eyebrow"),top=h*.5;
      if(eb){top=0;for(var n=eb;n;n=n.offsetParent)top+=n.offsetTop}
      U=Math.max(200,Math.min(top-6,w*1.06))}
    /* the wingspan: whole in frame, centred in the open area right of the text */
    var S=mob?Math.min(w*.92,(U-60)/.31):Math.min(cw*.47,h*1.05);
    var iw=S/SPAN,ih=iw*AR;
    var kx=mob?w*.5:side+cw*.71,ky=mob?60+(U-60)*.52:h*.53;
    return {mob:mob,side:side,cw:cw,U:U,iw:iw,ih:ih,S:S,kx:kx,ky:ky,bh:mob?U:h};
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
      /* a very slow breath: in ~3% and a touch of lift over ~48s */
      var k=.5-.5*Math.cos(t*Math.PI*2/48),sc=(1+.03*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*CXF,y=G.ky-dh*CYF-k*G.ih*.03-SP.v*G.ih*.08;
      /* a warm maroon glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.45:h*.5,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(74,20,32,"+(.42*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(40,12,20,"+(.24*e).toFixed(3)+")");ag.addColorStop(1,"rgba(18,9,12,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.48,0);lv.addColorStop(0,"rgba(12,6,8,.96)");lv.addColorStop(.64,"rgba(12,6,8,.62)");lv.addColorStop(1,"rgba(12,6,8,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(12,6,8,.62)");tv.addColorStop(1,"rgba(12,6,8,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(18,9,12,0)");bv.addColorStop(1,"rgba(18,9,12,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.26);tv2.addColorStop(0,"rgba(12,6,8,.5)");tv2.addColorStop(1,"rgba(12,6,8,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(18,9,12,0)");mv.addColorStop(1,"rgba(18,9,12,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();setTimeout(size,700);setTimeout(size,2500);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

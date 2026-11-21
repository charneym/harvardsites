/* ================= HERO FIELD: the firm's own product photography (HOME_BRIEF update, option a). iFIT's TT200 immediate-fit,
   adjustable transtibial socket (brushed shell, buckle closure, pylon), the studio cut-out from iFIT's 2026 product catalogue with its
   own alpha mask, so there is no rectangle at all (DP, DJ): the ground is the page ink. The pylon fades out downward over a long
   eased distance (baked into hero.webp). Drawn at or below its native 374x814 px (never upscaled), centred in the open area right
   of the text (~70% of the width) with nav headroom (DO); a soft violet glow sits behind it for tonal depth, and a deep ink wash
   keeps the headline side quiet (DI). A very slow drift (scale .97-1 and a few px of float); it moves on its own, so no pointer
   response (CZ). On phones it stands in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#120b2b",RGB="18,11,43";var IW=374,IH=814;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.15):h,ih,iw,kx,ky;
    if(mob){ih=Math.min(IH,U-92);iw=ih*IW/IH;kx=w*.5;ky=80+ih*.5}
    else{var top=Math.max(104,h*.12),bot=Math.max(40,h*.05);ih=Math.min(IH,h-top-bot);iw=ih*IW/IH;kx=side+cw*.70;ky=top+ih*.5}
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=Math.round(cv.getBoundingClientRect().width)||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function lg(x0,y0,x1,y1,stops){var g=c.createLinearGradient(x0,y0,x1,y1);stops.forEach(function(s){g.addColorStop(s[0],"rgba("+RGB+","+s[1]+")")});return g}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* a soft violet glow behind the socket (iFIT purple), long radial falloff to the ink */
    var gr=Math.max(G.iw*1.6,G.ih*.62),gl=c.createRadialGradient(G.kx,G.ky-G.ih*.08,0,G.kx,G.ky-G.ih*.08,gr);
    gl.addColorStop(0,"rgba(86,52,176,.42)");gl.addColorStop(.35,"rgba(70,40,150,.22)");gl.addColorStop(.7,"rgba(50,28,110,.07)");gl.addColorStop(1,"rgba("+RGB+",0)");
    c.fillStyle=gl;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(.97+.03*k)*(.97+.03*e);
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2,y=G.ky-dh/2+Math.sin(t*Math.PI*2/26)*3-SP.v*G.ih*.04;
      c.globalAlpha=e;c.drawImage(img,Math.round(x),Math.round(y),dw,dh);c.globalAlpha=1;
      var rw=Math.max(80,w*.1);c.fillStyle=lg(w-rw,0,w,0,[[0,0],[1,1]]);c.fillRect(w-rw,0,rw+1,h);
      if(!G.mob){
        c.fillStyle=lg(0,0,G.side+G.cw*.5,0,[[0,.9],[.55,.6],[.85,.15],[1,0]]);c.fillRect(0,0,w,h);
        c.fillStyle=lg(0,h*.78,0,h,[[0,0],[1,.75]]);c.fillRect(0,h*.78,w,h*.22+1);
      }else{
        c.fillStyle=lg(0,G.bh*.8,0,G.bh*1.04,[[0,0],[1,1]]);c.fillRect(0,G.bh*.8,w,G.bh*.24+1);
        c.fillStyle=BG;c.fillRect(0,G.bh*1.04,w,h-G.bh*1.04+1);
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

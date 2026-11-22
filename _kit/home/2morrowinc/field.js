/* ================= HERO FIELD: a crafted render of their real product (HOME_BRIEF update 2c; coordinator review): two
   generic, unbranded handsets in perspective showing 2Morrow's actual app screens, taken from the phone images on
   2morrowinc.com (Salty for Chronic Pain: "Hi Joan / Your Daily Content" and "My Values / Stamps"), the notch and frame of
   the source mock-ups removed and the screens re-housed. Rendered in Chromium with CSS 3D (render/render.html) and exported
   with real alpha, 1918x2078, always drawn below native size, so no box edge (DP/DJ). It sits whole in the open area right
   of the text (~70% of the content width), below the nav, on the plain ink with a very faint warm sunrise glow behind it
   (their logo). A slow float; it moves on its own, so no pointer response (CZ). On phones it sits in the top band, above the
   text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#061722",IW=1918,IH=2078;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function ez(g,rgb,a0,a1,n){n=n||8;for(var i=0;i<=n;i++){var u=i/n,s=u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a0+(a1-a0)*s).toFixed(3)+")")}return g}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.44,w*.96):h,ih,kx,ky;
    if(mob){U=h*.46-30;ih=Math.min(U-96,(w-2*side)*IH/IW*.9);kx=w*.5;ky=(96+U)/2}
    else{ih=Math.min(h*.74,cw*.4*IH/IW,IH/2);kx=side+cw*.7;ky=Math.max(h*.53,92+ih*.52)}
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:ih*IW/IH,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* a very faint warm sunrise glow behind the phones, painted across the whole canvas (never a rect edge) */
    var gr=Math.max(w,h)*(G.mob?.7:.62),gx=G.kx+G.iw*.05,gy=G.ky+G.ih*.18;
    var g1=c.createRadialGradient(gx,gy,0,gx,gy,gr);ez(g1,"242,160,40",.17*e,0,14);c.fillStyle=g1;c.fillRect(0,0,w,h);
    var g2=c.createRadialGradient(gx,gy-G.ih*.3,0,gx,gy-G.ih*.3,gr*.8);ez(g2,"0,136,176",.1*e,0,12);c.fillStyle=g2;c.fillRect(0,0,w,h);
    if(ok){
      /* a slow float: up and down ~1% of the height over ~9s */
      var f=Math.sin(t*Math.PI*2/9),sc=1+.03*(1-e);
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2,y=G.ky-dh/2+f*G.ih*.01+(1-e)*G.ih*.04-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(G.mob){var mv=ez(c.createLinearGradient(0,G.bh*.84,0,G.bh),"6,23,34",0,1,10);c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1)}
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

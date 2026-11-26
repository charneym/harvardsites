/* ================= HERO FIELD: DRN's own product photograph (HOME_BRIEF update 2a): a knurled aluminium cap with an internal
   thread, turned and knurled at their Luton factory (drn.co.uk > Gallery, 272.jpg, 800 x 800, shot on pure white). Offline the
   near-white ground was lifted to pure white and the part cropped with a white margin (630 x 614); it is drawn with a multiply
   blend onto the hero's own light grey, so the studio white IS the page ground: no box edge at any width (DP/DJ). Whole, never
   upscaled past its native size, centred in the open area right of the headline (DO), in a very slow Ken Burns breath. On
   phones it takes the top band (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#f2f2ee",AR=630/614,NW=630;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}
    var s=document.querySelector("#view .hero-foot .s");if(s){var sr=s.getBoundingClientRect();if(sr.width>0&&sr.right>r)r=sr.right}return r}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var HR=0;
  function geo(){
    var mob=w<861;
    if(mob){
      var ey=document.querySelector("#view .hero .eyebrow"),eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
      var top=84,bot=Math.max(230,eyT-40),ih=bot-top,iw=ih*AR;
      if(iw>Math.min(w*.88,NW)){iw=Math.min(w*.88,NW);ih=iw/AR}
      return {mob:1,ih:ih,iw:iw,kx:w*.5,ky:(top+bot)/2,bh:bot+24};
    }
    /* DO: the open area right of the H1 and lede (>=110px clear), centre held at 62-75% of the width */
    var L=Math.max(HR+Math.max(120,w*.07),w*.5),R=w-Math.max(56,w*.05),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);
    var half=Math.min(cx-L,R-cx),top=Math.max(104,h*.125),bot=h-Math.max(44,h*.06);
    var ih=Math.min(bot-top,2*half/AR*.94),iw=ih*AR;if(iw>NW){iw=NW;ih=NW/AR}
    return {mob:0,ih:ih,iw:iw,kx:cx,ky:(top+bot)/2,bh:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.55+.45*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.globalCompositeOperation="source-over";c.globalAlpha=1;c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: ~2.5% push-in over ~46s, eased back and forth, plus a small settle on intro */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.006-SP.v*G.ih*.04;
      /* no painted floor shadow: the photograph carries its own soft shadow */
      c.globalCompositeOperation="multiply";c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      c.globalCompositeOperation="source-over";c.globalAlpha=1;
      if(G.mob){c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1)}
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  try{document.fonts.ready.then(function(){setTimeout(size,60)})}catch(_){}setTimeout(size,1800);setTimeout(size,4200);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

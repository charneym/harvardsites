/* ================= HERO FIELD: Neater Solutions' own studio photograph of the Neater Eater Robotic (neater.co.uk > Neater Eater
   Robotic), HOME_BRIEF update 2a. The studio's grey sweep was fitted and subtracted so the backdrop is exactly the hero ground
   (#edebf1), and the edges carry a long baked alpha feather: no box edge can show (DP/DJ). Drawn at or below its native 810 x 773
   size (never upscaled), centred in the open area right of the headline (DO), with its own soft floor shadow. A very slow breath;
   no glow or vignette (it would read as an oval); no pointer response (CZ). On phones it takes the band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#edebf1",NW=810,NH=773,AR=NW/NH;
  /* the device inside the image (fractions of the image): x .16-.867, y .063-.824, with its visible shadow, centre .525/.44 */
  var SX0=.16,SX1=.867,SY0=.063,SY1=.824,SCX=.525,SCY=.44;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}
    var s=document.querySelector("#view .hero-foot .s");if(s){var sr=s.getBoundingClientRect();if(sr.width>0&&sr.right>r)r=sr.right}return r}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var HR=0;
  function geo(){
    var mob=w<861;
    if(mob){
      var ey=document.querySelector("#view .hero .eyebrow"),eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
      var top=100,bot=Math.max(250,eyT-26),sh=bot-top;
      var ih=Math.min(NH,sh/((SY1-SY0)*1.04)),iw=ih*AR;
      if(iw*(SX1-SX0)>w*.84){iw=w*.84/(SX1-SX0);ih=iw/AR}
      return {mob:1,ih:ih,iw:iw,kx:w*.5,ky:top+sh*.5,bh:bot+18};
    }
    /* DO: the open area right of the H1 and lede (>=120px clear of the device), its centre held at 62-75% of the width */
    var L=Math.max(HR+Math.max(120,w*.07),w*.5),R=w-Math.max(56,w*.05);
    var top=Math.max(110,h*.13),bot=h-Math.max(40,h*.06);
    var ih=Math.min(NH,(bot-top)/((SY1-SY0)*1.06)),iw=ih*AR;
    var sw=iw*(SX1-SX0);if(sw>w*.33){iw=w*.33/(SX1-SX0);ih=iw/AR;sw=iw*(SX1-SX0)}if(sw>(R-L)*.94){iw=(R-L)*.94/(SX1-SX0);ih=iw/AR;sw=iw*(SX1-SX0)}
    var cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);
    if(cx-sw/2<L)cx=L+sw/2;if(cx+sw/2>R)cx=R-sw/2;
    return {mob:0,ih:ih,iw:iw,kx:cx,ky:top+(bot-top)*.5,bh:h};
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
      /* a very slow breath: ~2% push-in over ~46s, plus a small settle on intro; never above native size */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=Math.min((1+.02*k)*(1+.03*(1-e)),NW/G.iw);
      var dw=G.iw*sc,dh=G.ih*sc;
      /* the device centre (not the image centre) sits on the composition point */
      var sx=(SX0+SX1)/2,sy=(SY0+SY1)/2;
      var x=G.kx-dw*sx,y=G.ky-dh*sy-k*G.ih*.006-SP.v*G.ih*.04;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      c.globalCompositeOperation="source-over";c.globalAlpha=1;
      if(G.mob){var mf=c.createLinearGradient(0,G.bh-90,0,G.bh);mf.addColorStop(0,"rgba(237,235,241,0)");mf.addColorStop(1,"rgba(237,235,241,1)");c.fillStyle=mf;c.fillRect(0,G.bh-90,w,90);c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1)}
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

/* ================= HERO FIELD: intra's own product photograph (HOME_BRIEF update 2a; intra-online.de home slider,
   bild_slider_01.jpg, 1600x533): a central venous catheter set (catheter with cm marks and its blue hub, J-tip guidewire,
   puncture needle) on a reflective studio ground. hero_flatten.py divides out the photo's grey studio gradient and lays the
   subject on one flat ground (#e2e5ea) that IS the canvas ground, so there is no box edge (DP/DJ); the top edge, where the
   extension lines run out of the original frame, eases out over a long ramp. Held in the open area right of the H1 (DO),
   at or below native size. Slow breath only, no pointer response. On phones it sits in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#e2e5ea",AR=1030/533,NW=1030;
  img.decoding="async";img.onload=function(){ok=true;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  var HR=0;
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mob=w<861;
    if(mob){
      var ey=document.querySelector("#view .hero .eyebrow"),eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
      var top=78,bot=Math.max(230,eyT-30),bh=bot-top,iw=Math.min(w*.98,bh*AR*1.05,NW*.98),ih=iw/AR;
      return {mob:1,iw:iw,ih:ih,kx:w*.5,ky:top+bh*.5,bh:bot+12};
    }
    /* DO: centred in the open area right of the H1, at 62-75% of the width */
    var L=Math.max(HR+Math.max(120,w*.07),w*.5),R=w-Math.max(40,w*.04),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);
    var half=Math.min(cx-L,R-cx),top=Math.max(110,h*.14),bot=h-Math.max(40,h*.07);
    var iw=Math.min(2*half*1.02,(bot-top)*AR*1.1,NW*.98),ih=iw/AR;
    return {mob:0,iw:iw,ih:ih,kx:cx,ky:top+(bot-top)*.5,bh:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.55+.45*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.globalAlpha=1;c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      /* a very slow breath: push in ~3% over ~40s, eased back and forth, plus the entrance settle */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.04*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.01-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(G.mob){var mv=c.createLinearGradient(0,G.bh-40,0,G.bh);mv.addColorStop(0,"rgba(226,229,234,0)");mv.addColorStop(1,"rgba(226,229,234,1)");c.fillStyle=mv;c.fillRect(0,G.bh-40,w,41);c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1)}
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

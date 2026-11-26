/* ================= HERO FIELD: Precision Dippings' own product photography (HOME_BRIEF update 2a): four of their dip-moulded dry
   suit neck seals (precisiondippings.co.uk > Marine, SureSeal), cut out of the studio shot with REAL alpha so they sit straight on
   the hero's cool white with no box edge (DP/DJ). Never upscaled past the 622 x 249 cut-out. A soft studio floor: a faint mirrored
   reflection that fades out over a long distance, a long low shadow and a glow in the logo sky blue behind them. A very slow breath,
   no pointer response (CZ). Centred in the open area right of the headline (DO); on phones they take the band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#f3f6f9",AR=622/249,NW=622,RF=null;
  img.decoding="async";img.onload=function(){ok=true;mkRef();if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}
    var s=document.querySelector("#view .hero-foot .s");if(s){var sr=s.getBoundingClientRect();if(sr.width>0&&sr.right>r)r=sr.right}return r}
  /* the reflection: the lower half of the photo, flipped, fading to nothing over its height */
  function mkRef(){try{var W=img.naturalWidth,H=img.naturalHeight,r=document.createElement("canvas");r.width=W;r.height=Math.round(H*.5);var x=r.getContext("2d");
    x.save();x.translate(0,H);x.scale(1,-1);x.drawImage(img,0,0);x.restore();
    x.globalCompositeOperation="destination-in";var gr=x.createLinearGradient(0,0,0,r.height);gr.addColorStop(0,"rgba(0,0,0,.9)");gr.addColorStop(.45,"rgba(0,0,0,.25)");gr.addColorStop(1,"rgba(0,0,0,0)");x.fillStyle=gr;x.fillRect(0,0,W,r.height);RF=r}catch(_){RF=null}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var HR=0;
  function geo(){
    var mob=w<861;
    if(mob){
      var ey=document.querySelector("#view .hero .eyebrow"),eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
      var top=80,bot=Math.max(240,eyT-34),iw=Math.min(w*.86,NW),ih=iw/AR;
      if(ih*1.5>bot-top){ih=(bot-top)/1.5;iw=ih*AR}
      return {mob:1,ih:ih,iw:iw,kx:w*.5,ky:top+(bot-top)*.42,bh:bot+24};
    }
    /* DO: the open area right of the H1 and lede (>=110px clear), centre held at 62-75% of the width */
    var L=Math.max(HR+Math.max(120,w*.07),w*.5),R=w-Math.max(56,w*.05),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);
    var half=Math.min(cx-L,R-cx),top=Math.max(104,h*.125),bot=h-Math.max(44,h*.06);
    var iw=Math.min(2*half*.96,NW),ih=iw/AR;
    return {mob:0,ih:ih,iw:iw,kx:cx,ky:top+(bot-top)*.47,bh:h};
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
      /* a glow in the logo sky blue behind the seals, breathing every ~10s, painted across the whole canvas (no edge) */
      var pu=.5+.5*Math.sin(t*Math.PI*2/10),gx=x+dw*.5,gy=y+dh*.5,gr=G.mob?dw*.8:Math.max(dw*1.05,260);
      var rg=c.createRadialGradient(gx,gy,0,gx,gy,gr);rg.addColorStop(0,"rgba(51,172,242,"+((.16+.04*pu)*e).toFixed(3)+")");rg.addColorStop(.6,"rgba(51,172,242,"+((.05+.015*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(51,172,242,0)");
      c.fillStyle=rg;c.fillRect(0,0,w,h);
      /* the studio floor: a long soft shadow under the row, then a faint mirrored reflection fading out */
      var fx=x+dw*.5,fy=y+dh*.985;c.save();c.translate(fx,fy);c.scale(1,.09);var fg=c.createRadialGradient(0,0,0,0,0,dw*.62);
      fg.addColorStop(0,"rgba(12,29,48,"+(.3*e).toFixed(3)+")");fg.addColorStop(.6,"rgba(12,29,48,"+(.1*e).toFixed(3)+")");fg.addColorStop(1,"rgba(12,29,48,0)");c.fillStyle=fg;c.fillRect(-dw,-dw,dw*2,dw*2);c.restore();
      if(RF){var s1=dh/img.naturalHeight;c.globalAlpha=e*.22;c.drawImage(RF,x,y+dh-48*s1,dw,dh*.5);c.globalAlpha=1}
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      c.globalCompositeOperation="source-over";c.globalAlpha=1;
      if(G.mob){var mf=c.createLinearGradient(0,G.bh-90,0,G.bh);mf.addColorStop(0,"rgba(243,246,249,0)");mf.addColorStop(1,"rgba(243,246,249,1)");c.fillStyle=mf;c.fillRect(0,G.bh-90,w,90);c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1)}
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

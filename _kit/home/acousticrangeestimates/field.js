/* ================= HERO FIELD: a crafted render of ARE's own product (HOME_BRIEF update 2c): the thermoAcoustic Range
   Verifier, its black receiver housing with six brass-ringed sonar receivers round the face of a generic wireless ultrasound
   probe. Rendered offline by render.js with real ALPHA (no ground, no box edge: DJ/DP), drawn on the page ink with a faint
   blue glow painted across the whole canvas. Placed from the MEASURED text edge (>=110px clear of the H1 and lede, DP),
   centred in the open area to the right (DO), fully below the header. A slow drift on its own; no pointer response (CZ).
   On phones it sits in the top band and the ink takes over before the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,AR=903/1239;
  var BG="#050c1c";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function textRight(){
    var r=0,els=[$("#pageTitle"),$("#hero .hero-foot .s"),$("#hero .eyebrow"),$("#hero .act")];
    /* text nodes only: the split headline lines are blocks as wide as the column, their glyphs are not */
    els.forEach(function(el){if(!el)return;try{var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n,rg=document.createRange();
      while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;rg.selectNodeContents(n);var b=rg.getBoundingClientRect();if(b.width)r=Math.max(r,b.right)}}catch(e){}});
    return r;
  }
  function geo(){
    var mob=w<861,hd=(($(".hdr")||$("#hdr")||{}).offsetHeight)||88;
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side;
    if(mob){
      var eb=$("#hero .eyebrow"),U=eb?eb.getBoundingClientRect().top+(window.scrollY||0)-18:h*.44,top=hd+10,ih=Math.max(40,Math.min(U-top-70,(w-40)/AR)),iw=ih*AR;
      return {mob:1,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:w*.5,ky:top+ih/2,bh:U};
    }
    var tr=textRight()||side+cw*.46,x0=Math.max(tr+110,side+cw*.5),x1=w-side;
    var top=hd+Math.max(28,h*.05),bot=h-Math.max(80,h*.09);
    /* ~70% of the open area (coordinator review): whole, with clear ink below it and well clear of the H1 */
    var ih=Math.max(40,Math.min((bot-top)*.78,(x1-x0)/AR*.8,h*.56)),iw=ih*AR;
    /* centre of the open area, pulled toward ~68% of the width when there is room */
    var kx=Math.max(x0+iw/2,Math.min(x1-iw/2,side+cw*.7)),ky=top+(bot-top)/2;
    return {mob:0,side:side,cw:cw,ih:ih,iw:iw,kx:kx,ky:ky,bh:h,x0:x0};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  /* the headline is split and laid out after fonts load: re-measure for a few seconds, then on resize only */
  var nG=0,gT=setInterval(function(){if(++nG>16)clearInterval(gT);if(w)G=geo()},500);
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      /* a slow breath: ~2.5% push and a few px of float over ~40s; never larger than the measured space */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(.975+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2,y=G.ky-dh/2-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low red heat glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge can read (DJ) */
      var ggx=G.kx+dw*.04,ggy=G.ky,ggr=Math.max(dw,dh)*1.05;
      var pu=.5+.5*Math.sin(t*Math.PI*2/9);
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      var ga=(.22+.05*pu)*e;[[0,1],[.25,.78],[.5,.45],[.72,.2],[.88,.06],[1,0]].forEach(function(q){ag.addColorStop(q[0],"rgba(26,82,220,"+(ga*q[1]).toFixed(3)+")")});
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a soft ink wash that ends well before the lens */
        var lv=c.createLinearGradient(0,0,G.x0+60,0);[[0,.5],[.3,.42],[.55,.26],[.75,.12],[.9,.04],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(3,8,18,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(5,12,28,0)");bv.addColorStop(1,"rgba(5,12,28,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28+1);
      }else{
        var mv=c.createLinearGradient(0,G.bh-150,0,G.bh+2);[[0,0],[.3,.12],[.55,.4],[.8,.78],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(5,12,28,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh-150,w,152);
        c.fillStyle=BG;c.fillRect(0,G.bh+2,w,h-G.bh);
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

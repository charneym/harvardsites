/* ================= HERO FIELD: Linio Biotech's own product photograph of a Tience® vial (linio-biotech.com, Science; HOME_BRIEF update 2a,
   PRINCIPLES DS: one calm, recognisable object). Offline (see _kit/dossiers/liniobiotech.md) the studio backdrop was flattened to one exact
   grey (#e5e4e3, the page ink) and the frame given a long eased alpha fade, so no box edge or seam can show (DP/DJ). The vial stands whole
   in the open area right of the text, at or below its native resolution, at least 130px clear of the headline (DO/DP), with a slow breath
   and no pointer response (CZ). On phones it sits in the band above the eyebrow and fades out before the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#e5e4e3",IW=1000,IH=1100,TH=0,VY0=160,VY1=960,VX0=310,VX1=690;
  img.decoding="async";img.onload=function(){ok=true;IW=img.naturalWidth;IH=img.naturalHeight;size()};img.src="hero.webp";
  var TR_=0,trN=0;function textR(){if(trN--<=0||!TR_){trN=40;var m=0;["#hero .hero-h","#hero .s","#hero .eyebrow","#hero .act"].forEach(function(q){var el=document.querySelector(q);if(!el)return;var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nd,r=document.createRange();while((nd=tw.nextNode())){if(!nd.nodeValue.trim())continue;r.selectNodeContents(nd);var b=r.getBoundingClientRect();if(b.width&&b.right>m)m=b.right}});if(m)TR_=m}return TR_||w*.5}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861,VH=VY1-VY0,VW=VX1-VX0;
    if(!mob){
      var tr=textR(),a0=tr+130,a1=w-side,top=108,bot=h-28,aw=Math.max(80,a1-a0);
      /* the vial itself (not the faded frame) sizes the shot: tall in the band under the nav, never upscaled */
      var sc=Math.min((bot-top)*.8/VH,aw*.8/VW,1);
      var cx=Math.min(Math.max((a0+a1)/2,side+cw*.7),a1-VW*sc*.5-20),vcy=top+(bot-top)*.5;
      return {mob:0,side:side,sc:sc,cx:cx,cy:vcy-((VY0+VY1)/2-IH/2)*sc,bh:h};
    }
    var eb=document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=Math.max(220,Math.min(ebt-16,h*.46)),tp=80,sc2=Math.min((U-tp-10)/VH,(w*.5)/VW,1);
    return {mob:1,side:side,sc:sc2,cx:w*.5,cy:tp+(U-tp)*.5-((VY0+VY1)/2-IH/2)*sc2,bh:U};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);TR_=0;trN=0;G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=G.sc*(1+.012*k)*(1+.03*(1-e));
      var dw=IW*sc,dh=IH*sc,cx=G.cx,cy=G.cy-k*dh*.008-SP.v*dh*.08+(1-e)*dh*.03;
      c.save();c.translate(cx,cy);c.rotate(TH);c.globalAlpha=e;c.drawImage(img,-dw/2,-dh/2,dw,dh);c.restore();c.globalAlpha=1;
      if(G.mob){
        var mv=c.createLinearGradient(0,G.bh*.78,0,G.bh);mv.addColorStop(0,"rgba(229,228,227,0)");mv.addColorStop(1,"rgba(229,228,227,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.78,w,G.bh*.22+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  /* the headline settles after fonts load: re-measure once it has */
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){setTimeout(size,400);setTimeout(size,2600)});
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();

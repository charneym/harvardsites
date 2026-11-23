/* ================= HERO FIELD: Multi4 Medical's own product render of the Multi4 instrument tip (multi4.se desktop hero, real alpha;
   HOME_BRIEF update 2a, PRINCIPLES DS: one calm, recognisable object). The cable's far tail eases out over a long fade (hero.webp), so the
   instrument is whole and nothing is cut by the viewport. Laid at a gentle diagonal, centred in the open area right of the text, at least
   120px clear of the headline (DP/DO), on the page's own warm grey (#e0dedc, their site ground): no box, no seam (DJ). Slow drift, no pointer (CZ).
   On phones it sits in the band above the eyebrow and fades out before the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#e0dedc",IW=1542,IH=520,TH=-.2;
  img.decoding="async";img.onload=function(){ok=true;IW=img.naturalWidth;IH=img.naturalHeight;size()};img.src="hero.webp";
  var TR_=0,trN=0;function textR(){if(trN--<=0||!TR_){trN=40;var m=0;["#hero .hero-h","#hero .s","#hero .eyebrow","#hero .act"].forEach(function(q){var el=document.querySelector(q);if(!el)return;var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nd,r=document.createRange();while((nd=tw.nextNode())){if(!nd.nodeValue.trim())continue;r.selectNodeContents(nd);var b=r.getBoundingClientRect();if(b.width&&b.right>m)m=b.right}});if(m)TR_=m}return TR_||w*.5}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var ca=Math.abs(Math.cos(TH)),sa=Math.abs(Math.sin(TH)),bw=IW*ca+IH*sa,bh=IW*sa+IH*ca;
    if(!mob){
      var tr=textR(),a0=tr+130,a1=w-side,top=104,bot=h-40,aw=Math.max(80,a1-a0);
      var sc=Math.min(aw/bw,(bot-top)*.86/bh,1.05);
      var cx=Math.min(Math.max((a0+a1)/2,w*.64),a1-bw*sc/2),cy=top+(bot-top)*.5;
      return {mob:0,side:side,sc:sc,cx:cx,cy:cy,bh:h};
    }
    var eb=document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=Math.max(220,Math.min(ebt-16,h*.46)),tp=78,sc2=Math.min((w-24)/bw,(U-tp)*.92/bh);
    return {mob:1,side:side,sc:sc2,cx:w*.5,cy:tp+(U-tp)*.5,bh:U};
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
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=G.sc*(1+.018*k)*(1+.035*(1-e));
      var dw=IW*sc,dh=IH*sc,cx=G.cx-k*dw*.008,cy=G.cy-k*dh*.03-SP.v*dh*.12+(1-e)*dh*.04;
      c.save();c.translate(cx,cy);c.rotate(TH+.012*Math.sin(t*Math.PI*2/36));c.globalAlpha=e;c.drawImage(img,-dw/2,-dh/2,dw,dh);c.restore();c.globalAlpha=1;
      if(G.mob){
        var mv=c.createLinearGradient(0,G.bh*.78,0,G.bh);mv.addColorStop(0,"rgba(224,222,220,0)");mv.addColorStop(1,"rgba(224,222,220,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.78,w,G.bh*.22+1);
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

/* ================= HERO FIELD: PakuMed's own studio photograph of a TITAN-PORT with its catheter (pakumed.de product page,
   PakuMed_Port_GrossKatGW_5964.jpg), the blue studio ground keyed out to real alpha (key.py) so it sits on the page ink #09212E
   with no box and no seam (DJ/DP). Whole and centred in the open area right of the text, at least 130px clear of the headline
   (DP/DO), never upscaled past its native 1000px. Slow drift, no pointer (CZ). On phones it sits in the band above the eyebrow (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#09212e",IW=1000,IH=311,TH=0;
  img.decoding="async";img.onload=function(){ok=true;IW=img.naturalWidth;IH=img.naturalHeight;size()};img.src="hero.webp";
  var TR_=0,trN=0;function textR(){if(trN--<=0||!TR_){trN=40;var m=0;["#hero .hero-h","#hero .s","#hero .eyebrow","#hero .act"].forEach(function(q){var el=document.querySelector(q);if(!el)return;var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),nd,r=document.createRange();while((nd=tw.nextNode())){if(!nd.nodeValue.trim())continue;r.selectNodeContents(nd);var b=r.getBoundingClientRect();if(b.width&&b.right>m)m=b.right}});if(m)TR_=m}return TR_||w*.5}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var ca=Math.abs(Math.cos(TH)),sa=Math.abs(Math.sin(TH)),bw=IW*ca+IH*sa,bh=IW*sa+IH*ca;
    if(!mob){
      var tr=textR(),a0=tr+130,a1=w-side,top=104,bot=h-40,aw=Math.max(80,a1-a0);
      var sc=Math.min(aw/bw,(bot-top)*.8/bh,.96);
      var cx=Math.min(Math.max((a0+a1)/2,w*.64),a1-bw*sc/2),cy=top+(bot-top)*.5;
      return {mob:0,side:side,sc:sc,cx:cx,cy:cy,bh:h};
    }
    var eb=document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=Math.max(260,Math.min(ebt-28,h*.5)),tp=84,sc2=Math.min((w-24)/bw,(U-tp)/bh);
    return {mob:1,side:side,sc:sc2,cx:w*.5,cy:tp+(U-tp)*.5,bh:U};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);TR_=0;trN=0;G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.imageSmoothingEnabled=true;c.imageSmoothingQuality="high";c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=G.sc*(1+.018*k)*(1+.035*(1-e));
      var sy=G.mob?(window.scrollY||0):0,dw=IW*sc,dh=IH*sc,cx=G.cx-k*dw*.008,cy=G.mob?G.cy-sy+(1-e)*dh*.04:G.cy-k*dh*.03-SP.v*dh*.12+(1-e)*dh*.04;/* phones: the image travels with the page (CW) */
      /* a soft studio light behind the port, easing out over a long radius (no edge: DJ) */
      var gr=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(dw*.75,260));gr.addColorStop(0,"rgba(0,159,227,"+(.10*e).toFixed(3)+")");gr.addColorStop(.45,"rgba(0,159,227,"+(.045*e).toFixed(3)+")");gr.addColorStop(1,"rgba(0,159,227,0)");
      c.fillStyle=gr;c.fillRect(0,0,w,h);
      c.save();c.translate(cx,cy);c.rotate(TH);c.globalAlpha=e;c.drawImage(img,-dw/2,-dh/2,dw,dh);c.restore();c.globalAlpha=1;
      if(G.mob){
        var mv=c.createLinearGradient(0,G.bh*.97-sy,0,G.bh-sy);mv.addColorStop(0,"rgba(9,33,46,0)");mv.addColorStop(1,"rgba(9,33,46,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.97-sy,w,G.bh*.03+1);
        c.fillStyle=BG;c.fillRect(0,G.bh-sy,w,h-G.bh+sy+1);
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

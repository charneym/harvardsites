/* ================= HERO FIELD: the firm's own photography (HOME_BRIEF update, option a): ParaTechs' studio photograph of
   eight mNSET devices for mice arranged as a star on black (paratechs.com, mNSET_Snow_black.jpg). Graded in hero.webp: the black
   studio ground is keyed out into real alpha (luminance key, colour un-mixed from the ground) and cooled slightly toward the
   palette, so the clear hubs and catheters sit on the site's ink with no box edge at all (DP/DJ).
   Placement is measured, not guessed (DO/DP): the subject is drawn whole, centred in the open area right of the headline
   (clamped to ~62-75% of the width), at least 110px clear of the measured H1/lede, fully below the nav, never upscaled.
   On phones it sits whole in the band between the nav and the headline (CW). Motion: a very slow turn (+-4 deg over ~70s) and
   a slight breath; it moves on its own, so no pointer response (CZ). A faint periwinkle backlight eases out over a long radius. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#080d1a",IW=2418,IH=2360;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function textBox(){
    var els=[$("#pageTitle"),$(".hero .hero-foot .s"),$(".hero .eyebrow")],R=0,T=1e9,B=0;
    els.forEach(function(el){if(!el)return;var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n;while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);
      Array.prototype.forEach.call(r.getClientRects(),function(q){if(q.width<1)return;R=Math.max(R,q.right)})}});
    var h1=$("#pageTitle");if(h1){var b=h1.getBoundingClientRect();T=b.top+(scrollY||0)}
    return {R:R,T:T};
  }
  function navB(){var hd=$("#hdr");return hd?Math.max(56,hd.getBoundingClientRect().height):80}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),mob=w<861,tb=textBox(),nb=navB();
    var D,cx,cy;
    if(!mob){
      var L=(tb.R||w*.5)+120,Rm=w-side-8;
      cx=Math.min(Math.max((L+Rm)/2,w*.62),w*.75);
      D=2*Math.min(cx-L,Rm-cx);
      var top=nb+44,bot=h-48;D=Math.min(D,bot-top,IW*.62);
      cy=Math.max(top+D/2,Math.min(h*.53,bot-D/2));
    }else{
      var avail=(tb.T<1e8?tb.T:h*.55)-104-(nb+12);
      D=Math.max(120,Math.min(w-40,avail));cx=w/2;cy=nb+12+D/2;
    }
    return {mob:mob,side:side,D:D,cx:cx,cy:cy};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      var cy=G.mob?G.cy-(window.scrollY||0):G.cy-SP.v*h*.06,D=G.D;
      /* backlight: a faint periwinkle glow that eases out over a long radius (no ring, no line) */
      var gr=c.createRadialGradient(G.cx,cy,0,G.cx,cy,D*.95);
      gr.addColorStop(0,"rgba(70,92,170,"+(.20*e).toFixed(3)+")");gr.addColorStop(.35,"rgba(50,70,145,"+(.10*e).toFixed(3)+")");gr.addColorStop(.7,"rgba(30,45,110,"+(.03*e).toFixed(3)+")");gr.addColorStop(1,"rgba(8,13,26,0)");
      c.fillStyle=gr;c.fillRect(G.cx-D,cy-D,2*D,2*D);
      var rot=(RM?0:Math.sin(t*Math.PI*2/70)*4)*Math.PI/180,sc=(1+.018*(.5-.5*Math.cos(t*Math.PI*2/46)))*(.97+.03*e);
      /* the image's longer side is scaled to D so every tip stays inside the measured square, even while turning */
      var k=D/Math.hypot(IW,IH)*1.36*sc,dw=IW*k,dh=IH*k;
      c.save();c.translate(G.cx,cy);c.rotate(rot);c.globalAlpha=e;c.drawImage(img,-dw/2,-dh/2,dw,dh);c.restore();c.globalAlpha=1;
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){setTimeout(size,60)});
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){size();if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();

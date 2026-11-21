/* ================= HERO FIELD: a crafted render of Sequitur's mechanism (HOME_BRIEF update 2c): one drop of whole blood
   resting in the sample opening of a single-use sensor strip, "accurate measurement of the metabolite in a single drop of
   blood" (NIH RePORTER SB1HD116629). Sphere-traced offline by render.py and saved with real alpha, so the art sits on the
   page ink with no ground of its own and no box edge (DJ/DP); its soft shadow eases out over a long distance.
   Desktop: the whole strip centred in the open area right of the text (~70% of the width), drawn at or below its native
   size, fully below the nav (DO). Phones: in the top band above the headline (CW). A very slow drift; it moves on its own,
   so no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#151413",IW=1,IH=1;
  /* object box inside hero.webp (fractions): left/right edge, anchor x, top-to-centre */
  var OL=.02,OR=.914,AX=.467,OY=.386,AY=.386;
  function textRight(){var m=0;['#pageTitle','.hero-foot .s'].forEach(function(s){var el=document.querySelector(s);if(!el)return;var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n;while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);[].forEach.call(r.getClientRects(),function(q){if(q.width>0)m=Math.max(m,q.right)})}});return m}
  img.decoding="async";img.onload=function(){ok=true;IW=img.naturalWidth;IH=img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var iw,kx,ky;
    if(mob){var U=Math.min(h*.42,w*.86);iw=Math.min(IW,w*.9/(OR-OL),U*1.25*IW/IH);kx=w/2+iw*(AX-(OL+OR)/2);ky=Math.max(84+iw*IH/IW*OY,U*.55);
      var ob=ky+iw*IH/IW*(.74-AY);return {mob:mob,iw:iw,ih:iw*IH/IW,kx:kx,ky:ky,bh:ob}}
    iw=Math.min(IW,cw*.5,(h-150)*.92*IW/IH);kx=side+cw*.735;ky=Math.max(96+iw*IH/IW*OY,h*.55);
    /* keep the strip at least ~120px clear of the headline and lede (DP): measure the text, then slide right or shrink */
    var tr=textRight(),ol=function(){return kx-iw*AX+iw*OL},orr=function(){return kx-iw*AX+iw*OR};
    if(tr&&ol()<tr+120){kx+=tr+120-ol();if(orr()>w-side){var room=(w-side)-(tr+120);iw=Math.max(200,room/(OR-OL));kx=tr+120+iw*AX-iw*OL}}
    return {mob:mob,iw:iw,ih:iw*IH/IW,kx:kx,ky:ky,bh:h};
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
      /* a very slow breath: ~2.5% over ~44s and back, the drop kept on its mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1-.025+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*AX,y=G.ky-dh*AY-SP.v*G.ih*.06+(1-e)*14;
      c.imageSmoothingQuality="high";c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(G.mob){var mv=c.createLinearGradient(0,G.bh,0,G.bh+90);mv.addColorStop(0,"rgba(21,20,19,0)");mv.addColorStop(1,"rgba(21,20,19,1)");c.fillStyle=mv;c.fillRect(0,G.bh,w,91);c.fillStyle=BG;c.fillRect(0,G.bh+90,w,h)}
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){setTimeout(function(){G=geo();if(!running)frame(true)},60)});
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

/* ================= HERO FIELD: the firm's own product photography (HOME_BRIEF update, option a): NeuroLux's studio photograph
   of its wireless system (Antenna Tuner box, the NeuroLux controller and the PDC module, neurolux.org/wp-content/uploads/2022/06/
   hardware_bluebg.png). The source has real alpha (the blue backlight glow is its own translucent layer), kept as real alpha in hero.webp
   (glow tail eased out near the frame, transparent margin), so the art meets the page ink with no box edge (DJ/DP). Placed whole in the open area right of the measured
   headline and lede (>=120px clear), under the nav with headroom (DO/DQ), with a very slow drift; no pointer response (CZ).
   Phones: a top band that fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#070c1a",IR="7,12,26";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function textRight(){
    var r=0,R=document.createRange();
    $$(".hero .hero-h .l, .hero .hero-foot .s, .hero .act, .hero .eyebrow").forEach(function(el){
      try{R.selectNodeContents(el);var rs=R.getClientRects();for(var i=0;i<rs.length;i++)r=Math.max(r,rs[i].right)}catch(e){}});
    return r;
  }
  function geo(){
    var mx=w>=1800?1560:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-mx)/2),cw=w-2*side,mob=w<861;
    if(mob){var U=Math.min(h*.44,w*1.0),iw=Math.min(w*.9,(U-70)*1.5),ih=iw/1.5;return {mob:true,U:U,iw:iw,ih:ih,kx:w*.5,ky:Math.max(64+ih*.5+6,U*.56),bh:U,side:side,cw:cw}}
    var tr=textRight()||side+cw*.46,L=Math.max(tr+120,side+cw*.5),Rt=side+cw-8;
    var iw=Math.min(Rt-L,(h-200)*.62*1.5,980),ih=iw/1.5;
    return {mob:false,side:side,cw:cw,iw:iw,ih:ih,kx:(L+Rt)/2,ky:Math.max(h*.52,96+30+ih*.5),bh:h,L:L};
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
      /* a very slow push-in, ~2.5% over ~40s and back, the system kept on its mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2,y=G.ky-dh/2-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x-dw*60/1800,y-dh*60/1200,dw*1920/1800,dh*1320/1200);c.globalAlpha=1;
      if(G.mob){
        var tv2=c.createLinearGradient(0,0,0,G.bh*.22);tv2.addColorStop(0,"rgba("+IR+",.6)");tv2.addColorStop(1,"rgba("+IR+",0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.22);
        var mv=c.createLinearGradient(0,G.bh*.86,0,G.bh);mv.addColorStop(0,"rgba("+IR+",0)");mv.addColorStop(1,"rgba("+IR+",1)");c.fillStyle=mv;c.fillRect(0,G.bh*.86,w,G.bh*.14+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  try{document.fonts.ready.then(function(){setTimeout(size,60);setTimeout(size,900)})}catch(e){}
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){setTimeout(size,30);if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

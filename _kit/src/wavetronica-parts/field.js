/* ================= HERO FIELD: a crafted render of WaveTronica's real product (HOME_BRIEF update 2c): the MIRACLE breast
   coil, after the photographs and product render on wavetronica.com: a white housing with two breast cups, the copper loop
   of each cup inlaid at its rim, its coax leads on strain-relief boots gathering into one sheathed cable and a system plug.
   Rendered offline with three.js (physically based materials, studio light, soft shadow) on the page ink itself (#0a1a2e,
   lossless), so the image ground IS the canvas ground and no edge can read (DP/DJ). Shown whole at or below native size,
   centred in the open area right of the text (DO), in a very slow drift. It moves on its own, so no pointer response (CZ).
   On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a1a2e",AR=1617/1038;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    /* phones: the coil sits whole in the band between the nav and the canvas fade (34svh), above the eyebrow (CW) */
    var S=h*.34-24,U=mob?S+40:h;
    var iw=mob?Math.min(w*.9,(S-82)/.83*AR):Math.min(cw*.5,h*.66*AR,1617),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.73,ky=mob?82+(S-82)*.5:Math.max(h*.54,112+ih*.5);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: grow ~2.5% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.025*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the logo's own blue as a low studio glow, painted over the WHOLE canvas after the render, so the render's ground
         and the canvas ground stay identical everywhere and no box edge can read (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.45:h*.5,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(40,96,170,"+(.16*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(24,60,112,"+(.08*e).toFixed(3)+")");ag.addColorStop(1,"rgba(10,26,46,0)");
      c.globalCompositeOperation="screen";c.fillStyle=ag;c.fillRect(0,0,w,h);c.globalCompositeOperation="source-over";
      /* a slow sweep of light along the cups, like a studio light passing */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=x+dw*(.35+.2*pu),py=y+dh*.38,pr=dw*.28;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(214,232,255,"+((.02+.02*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(214,232,255,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base, each eased out over a long distance */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.52,0);[[0,.9],[.3,.7],[.55,.4],[.8,.12],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(8,22,40,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.5],[.2,.32],[.4,.17],[.6,.07],[.8,.02],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(8,22,40,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.02],[.4,.08],[.6,.2],[.8,.42],[1,.8]].forEach(function(q){bv.addColorStop(q[0],"rgba(10,26,46,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.02],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(8,22,40,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.74,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(10,26,46,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.74,w,G.bh*.26+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
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
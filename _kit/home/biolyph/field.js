/* ================= HERO FIELD: a crafted render of the firm's own product (HOME_BRIEF update 2c): BIOLYPH LyoSpheres, the
   precise freeze-dried microliter spheres, stacked in a clear glass tube with a teal screw cap, as on biolyph.com's own
   LyoSphere tube image. Rendered offline by render.py (analytic ray tracer, real alpha) to hero.webp; here it floats in a very
   slow drift while a soft studio light breathes across the glass. It moves on its own, so no pointer response (CZ).
   Desktop: whole and centred in the open area right of the copy (~72% of the width), between the nav and the pillar band.
   Phones: in the top band above the text, fading into the ink before the copy (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#061a24";var IW=696,IH=1170;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){var top=96,ih=Math.min(h*.34,w*.9)-22,iw=ih*IW/IH,U=Math.round(104+Math.min(h*.34,w*.9));return {mob:1,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:w*.5,ky:top+ih/2,bh:U}}
    /* the open area right of the copy, between the nav (with headroom) and the pillar band */
    var y0=Math.max(104,h*.125),y1=h-Math.min(196,Math.max(156,h*.18)),ah=y1-y0;
    var ih=Math.min(ah,IH*1.0),iw=ih*IW/IH;
    return {mob:0,side:side,cw:cw,U:h,ih:ih,iw:iw,kx:side+cw*.73,ky:(y0+y1)/2,bh:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* a low cyan-teal glow painted across the WHOLE canvas, so nothing can read as a pasted box (DJ/DP) */
    var ggr=G.mob?G.ih*.66:Math.max(w,h)*.62,ag=c.createRadialGradient(G.kx,G.ky,0,G.kx,G.ky,ggr);
    ag.addColorStop(0,"rgba(18,88,118,"+(.5*e).toFixed(3)+")");ag.addColorStop(.45,"rgba(12,52,70,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,26,36,0)");
    c.fillStyle=ag;c.fillRect(0,0,w,h);
    if(ok){
      /* a slow float: drift up and down a few px and sway half a degree, over ~14s */
      var k=Math.sin(t*Math.PI*2/14),k2=Math.sin(t*Math.PI*2/19+1),sc=1+.03*(1-e);
      var dw=G.iw*sc,dh=G.ih*sc,cy=G.ky-k*G.ih*.008-SP.v*G.ih*.05+(1-e)*18;
      c.save();c.translate(G.kx,cy);c.rotate(k2*.008);c.globalAlpha=e;c.drawImage(img,-dw/2,-dh/2,dw,dh);
      /* a faint studio light breathing across the glass and spheres */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),py=-dh*(.25-.5*pu),pr=dw*.6;
      var rg=c.createRadialGradient(-dw*.05,py,0,-dw*.05,py,pr);rg.addColorStop(0,"rgba(210,240,250,"+(.035+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(210,240,250,0)");
      c.globalCompositeOperation="lighter";c.fillStyle=rg;c.fillRect(-pr-dw*.05,py-pr,pr*2,pr*2);c.globalCompositeOperation="source-over";
      c.restore();c.globalAlpha=1;
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!G.mob){
      /* the headline side stays quiet (DI): an ink wash from the left that eases out over a long distance, soft top and base */
      var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(6,26,36,.95)");lv.addColorStop(.5,"rgba(6,26,36,.7)");lv.addColorStop(.8,"rgba(6,26,36,.2)");lv.addColorStop(1,"rgba(6,26,36,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.14);tv.addColorStop(0,"rgba(6,26,36,.5)");tv.addColorStop(1,"rgba(6,26,36,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.14);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(6,26,36,0)");bv.addColorStop(1,"rgba(6,26,36,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28+1);
    }else{
      var tv2=c.createLinearGradient(0,0,0,G.bh*.14);tv2.addColorStop(0,"rgba(6,26,36,.5)");tv2.addColorStop(1,"rgba(6,26,36,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.14);
      var mv=c.createLinearGradient(0,G.bh-40,0,G.bh);mv.addColorStop(0,"rgba(6,26,36,0)");mv.addColorStop(1,"rgba(6,26,36,1)");c.fillStyle=mv;c.fillRect(0,G.bh-40,w,41);
      c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

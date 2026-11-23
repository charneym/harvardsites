/* ================= HERO FIELD: a real photograph of the thing BaroHawk manages, an IV infusion line and its drip chamber
   (Samuel Ramos on Unsplash, Unsplash License; not Perceptive Medical's device). make_hero.py cuts the line out of its room,
   grades it cool toward the logo navy and bakes long eased alpha fades (top: the bag continues out of frame; bottom: the
   tube) into hero.webp, so no box edge exists (DP/DJ). It hangs whole in the open area right of the text, below the nav,
   with a slow drift; one drop forms and falls in the chamber every few seconds. It moves on its own, so no pointer
   response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a0e2a";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(260,Math.min(ebt-12,h*.5)):h;
    var NAT=1700/Math.min(window.devicePixelRatio||1,2);var ih=Math.min(NAT,mob?(U-62)*.98:Math.min(h-150,cw*1.1)),iw=ih*663/1700;
    var kx=mob?w*.5:side+cw*.71,ky=mob?62+(U-62)*.5:118+ih*.5;   /* centre of the photo, in the open area right of the text, below the nav */
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.025*k)*(1+.04*(1-e)),rt=0,px=RM?0:Math.sin(t*Math.PI*2/60)*G.iw*.012;
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx+px,cy=G.ky-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low warm glow across the WHOLE canvas (never inside the image rect alone), so no edge can read as a box (DJ) */
      var ggr=Math.max(w,h)*.7,ag=c.createRadialGradient(cx,cy,0,cx,cy,ggr);
      ag.addColorStop(0,"rgba(34,58,110,"+(.40*e).toFixed(3)+")");ag.addColorStop(.45,"rgba(20,30,72,"+(.22*e).toFixed(3)+")");ag.addColorStop(1,"rgba(10,14,42,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.save();c.translate(cx,cy);c.rotate(rt);c.globalAlpha=e;c.drawImage(img,-dw*.5,-dh*.5,dw,dh);
      /* one drop forms at the chamber's orifice, falls and meets the fluid (image px: orifice 234,733; surface 862) */
      if(!RM){var k2=dw/663,ct=(t%3.2)/3.2,ox=(234-331.5)*k2,oy=(733-850)*k2,sy=(860-850)*k2,r0=4.2*k2,dy,rr,al;
        if(ct<.62){rr=r0*(.35+.65*sm(ct/.62));dy=oy+rr*.9;al=.9}else if(ct<.76){var f=(ct-.62)/.14;rr=r0;dy=oy+r0*.9+(sy-oy-r0*.9)*f*f;al=.9}else{rr=0;dy=sy;al=0}
        if(rr>0){var dg=c.createRadialGradient(ox-rr*.3,dy-rr*.35,0,ox,dy,rr*1.15);dg.addColorStop(0,"rgba(255,255,255,"+(.95*al*e).toFixed(3)+")");dg.addColorStop(.6,"rgba(200,222,240,"+(.55*al*e).toFixed(3)+")");dg.addColorStop(1,"rgba(160,195,225,0)");
          c.fillStyle=dg;c.beginPath();c.ellipse(ox,dy,rr*.9,rr*1.12,0,0,Math.PI*2);c.fill()}
        if(ct>=.76&&ct<.98){var g2=(ct-.76)/.22;c.strokeStyle="rgba(214,232,246,"+(.55*(1-g2)*e).toFixed(3)+")";c.lineWidth=Math.max(.8,1.1*k2);c.beginPath();c.ellipse(ox,sy,(3+16*g2)*k2,(1+3*g2)*k2,0,0,Math.PI*2);c.stroke()}}
      c.restore();c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(6,9,32,.92)");lv.addColorStop(.6,"rgba(6,9,32,.5)");lv.addColorStop(1,"rgba(6,9,32,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.42);tv.addColorStop(0.00,"rgba(6,9,32,"+(0.5500).toFixed(4)+")");tv.addColorStop(0.10,"rgba(6,9,32,"+(0.5346).toFixed(4)+")");tv.addColorStop(0.20,"rgba(6,9,32,"+(0.4928).toFixed(4)+")");tv.addColorStop(0.30,"rgba(6,9,32,"+(0.4312).toFixed(4)+")");tv.addColorStop(0.40,"rgba(6,9,32,"+(0.3564).toFixed(4)+")");tv.addColorStop(0.50,"rgba(6,9,32,"+(0.2750).toFixed(4)+")");tv.addColorStop(0.60,"rgba(6,9,32,"+(0.1936).toFixed(4)+")");tv.addColorStop(0.70,"rgba(6,9,32,"+(0.1188).toFixed(4)+")");tv.addColorStop(0.80,"rgba(6,9,32,"+(0.0572).toFixed(4)+")");tv.addColorStop(0.90,"rgba(6,9,32,"+(0.0154).toFixed(4)+")");tv.addColorStop(1.00,"rgba(6,9,32,"+(0.0000).toFixed(4)+")");c.fillStyle=tv;c.fillRect(0,0,w,(h*.42)-(0)+1);
        var bv=c.createLinearGradient(0,h*.42,0,h);bv.addColorStop(0.00,"rgba(10,14,42,"+(0.0000).toFixed(4)+")");bv.addColorStop(0.10,"rgba(10,14,42,"+(0.0238).toFixed(4)+")");bv.addColorStop(0.20,"rgba(10,14,42,"+(0.0884).toFixed(4)+")");bv.addColorStop(0.30,"rgba(10,14,42,"+(0.1836).toFixed(4)+")");bv.addColorStop(0.40,"rgba(10,14,42,"+(0.2992).toFixed(4)+")");bv.addColorStop(0.50,"rgba(10,14,42,"+(0.4250).toFixed(4)+")");bv.addColorStop(0.60,"rgba(10,14,42,"+(0.5508).toFixed(4)+")");bv.addColorStop(0.70,"rgba(10,14,42,"+(0.6664).toFixed(4)+")");bv.addColorStop(0.80,"rgba(10,14,42,"+(0.7616).toFixed(4)+")");bv.addColorStop(0.90,"rgba(10,14,42,"+(0.8262).toFixed(4)+")");bv.addColorStop(1.00,"rgba(10,14,42,"+(0.8500).toFixed(4)+")");c.fillStyle=bv;c.fillRect(0,h*.42,w,(h)-(h*.42)+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.2);tv2.addColorStop(0,"rgba(6,9,32,.7)");tv2.addColorStop(1,"rgba(6,9,32,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.2);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(10,14,42,0)");mv.addColorStop(1,"rgba(10,14,42,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

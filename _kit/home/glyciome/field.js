/* ================= HERO FIELD: a crafted render of Glyciome's real product (HOME_BRIEF update 2c): a dollop of clear,
   preservative-free prebiotic gel, the form of PreBioGyn, their lead product ("prebiotic intravaginal lubricant", NIH RePORTER
   2R44CA254543), on a dark glossy surface under studio light: soft-box reflections, refraction, a cyan caustic pooled under
   the gel in the logo's swirl colour #3bb8d8, a few suspended micro-bubbles. Ray-traced offline by render.py and baked with
   real alpha (decomposed against the page ink, so no edge can show: DP/DJ) to hero.webp; here it breathes in a slow drift and
   the caustic pulses gently. It moves on its own, so no pointer response (CZ). On phones it sits in the top band (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1519";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.0):h,dp=Math.min(window.devicePixelRatio||1,2);
    /* the gel sits at about (0.5, 0.55) of the 1600x1420 render and spans ~90% of its width; never drawn above native size */
    var iw=mob?Math.min(w*.94,1600/dp):Math.min(cw*.55,h*.98*(1600/1420),1600/dp),ih=iw*(1420/1600);
    var kx=mob?w*.5:side+cw*.7,ky=mob?70+(U-70)*.36:h*.53;  /* kx/ky: the gel's centre, in the open area right of the text (DO) */
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
      /* a very slow breath: push in ~4% and drift up a touch over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.55-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low teal glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.kx,ggy=G.mob?G.ky:h*.55,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(18,58,70,"+(.42*e).toFixed(3)+")");ag.addColorStop(.3,"rgba(15,42,51,"+(.26*e).toFixed(3)+")");ag.addColorStop(.62,"rgba(12,28,33,"+(.1*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,21,25,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the caustic under the gel breathes, like light refocusing through it */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*.47,py=y+dh*.63,pr=dw*.2;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(110,220,245,"+(.05+.06*pu).toFixed(3)+")");rg.addColorStop(.5,"rgba(80,200,232,"+(.02+.025*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(59,184,216,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(7,16,19,.9)");lv.addColorStop(.35,"rgba(7,16,19,.7)");lv.addColorStop(.65,"rgba(7,16,19,.3)");lv.addColorStop(.85,"rgba(7,16,19,.08)");lv.addColorStop(1,"rgba(7,16,19,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.24);tv.addColorStop(0,"rgba(7,16,19,.55)");tv.addColorStop(.6,"rgba(7,16,19,.15)");tv.addColorStop(1,"rgba(7,16,19,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.24);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(11,21,25,0)");bv.addColorStop(.5,"rgba(11,21,25,.3)");bv.addColorStop(1,"rgba(11,21,25,.8)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(7,16,19,.7)");tv2.addColorStop(1,"rgba(7,16,19,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh*.68,0,G.bh);mv.addColorStop(0,"rgba(11,21,25,0)");mv.addColorStop(.5,"rgba(11,21,25,.45)");mv.addColorStop(1,"rgba(11,21,25,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.68,w,G.bh*.32+1);
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

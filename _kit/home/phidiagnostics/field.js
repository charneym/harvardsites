/* ================= HERO FIELD: a crafted render of Phi Diagnostics' real subject (HOME_BRIEF update 2c, DP fallback): a closed
   circle of double-stranded DNA, the circular DNA the company's blood test reads, as a space-filling model built from B-DNA
   geometry (10.5 bp per turn, 168 bp, a gentle writhe). Backbone in the logo gold, bases in pale slate. Rendered offline by
   ring.py with real alpha into hero.webp; here it turns in a very slow drift. It moves on its own, so no pointer response
   (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#061226";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,390):h;
    /* desktop: the whole molecule centred at ~69% of the width, under the nav with headroom; phones: the top band */
    var AR=1350/844;
    var iw=mob?Math.min(w-64,(U-110)*AR):Math.min(w*.38,h*.6*AR,1060),ih=iw/AR;
    var kx=mob?w*.5:w*.72,ky=mob?72+(U-72)*.5-4:Math.max(h*.53,110+ih*.5);
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
      /* a very slow breath: ~3% push and a slight rotation, eased back and forth over ~40s */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.04*(1-e)),rot=(k-.5)*.035;
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky-k*G.ih*.01-SP.v*G.ih*.06;
      /* a low slate glow over the WHOLE canvas (never inside the image rect alone), so no box edge can read (DJ/DP) */
      var ggr=Math.max(w,h)*.7,ag=c.createRadialGradient(cx,cy,0,cx,cy,ggr);
      ag.addColorStop(0,"rgba(20,52,104,"+(.55*e).toFixed(3)+")");ag.addColorStop(.45,"rgba(10,30,62,"+(.32*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,18,38,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.save();c.translate(cx,cy);c.rotate(rot);c.globalAlpha=e;c.drawImage(img,-dw/2,-dh/2,dw,dh);
      /* a faint warm light moving across the surface */
      var pu=.5+.5*Math.sin(t*Math.PI*2/12),px=dw*(-.15+.2*pu),py=-dh*.18,pr=dw*.34;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,232,190,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,236,200,0)");
      c.globalCompositeOperation="lighter";c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalCompositeOperation="source-over";
      c.restore();c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long eased ink wash from the left */
        var lv=c.createLinearGradient(0,0,w*.6,0);lv.addColorStop(0,"rgba(4,11,24,.9)");lv.addColorStop(.5,"rgba(4,11,24,.55)");lv.addColorStop(1,"rgba(4,11,24,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(6,18,38,0)");bv.addColorStop(1,"rgba(6,18,38,.8)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var fy=G.ky+G.ih*.5,mv=c.createLinearGradient(0,fy-70,0,fy+70);mv.addColorStop(0,"rgba(6,18,38,0)");mv.addColorStop(1,"rgba(6,18,38,1)");c.fillStyle=mv;c.fillRect(0,fy-70,w,141);
        c.fillStyle=BG;c.fillRect(0,fy+70,w,h);
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

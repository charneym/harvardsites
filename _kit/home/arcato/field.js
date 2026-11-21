/* ================= HERO FIELD (HOME_BRIEF update 2b): a real photograph of Arcato's subject, a panoramic dental X-ray of
   the full dentition with the wisdom teeth ("teeth X-ray", Denti del giudizio, 1982, by Umanoide on Unsplash, Unsplash
   License: https://unsplash.com/photos/teeth-x-ray-KeVKEs1_RDU). Graded offline by grade.py: denoised, the soft-tissue haze
   flattened so enamel and bone carry the light, a navy -> brand blue -> cool bone tritone, and a long eased alpha that
   follows the teeth (real alpha, no box edge: DP/DJ). Here it drifts in a slow Ken Burns push. It moves on its own, so no
   pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#070c1f";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,390):h,AR=2200/1022;
    /* desktop: the whole dentition centred at ~71% of the width, under the nav with headroom; phones: the top band */
    var iw=mob?Math.min(w*.92,(U-96)*AR):Math.min(w*.46,(h-200)*AR,1320),ih=iw/AR;
    var kx=mob?w*.5:w*.715,ky=mob?72+(U-72)*.5:Math.max(h*.5,110+ih*.5);
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
      /* Ken Burns: a ~3% push and a slight lateral drift, eased back and forth over ~36s */
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.03*k)*(1+.04*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx+(k-.5)*G.iw*.012,cy=G.ky-SP.v*G.ih*.08;
      /* a low blue glow over the WHOLE canvas (never inside the image rect alone), so no box edge can read (DJ/DP) */
      var ggr=Math.max(w,h)*.7,ag=c.createRadialGradient(cx,cy,0,cx,cy,ggr);
      ag.addColorStop(0,"rgba(22,48,96,"+(.5*e).toFixed(3)+")");ag.addColorStop(.45,"rgba(12,24,52,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,12,31,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,cx-dw/2,cy-dh/2,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long eased ink wash from the left */
        var lv=c.createLinearGradient(0,0,w*.6,0);lv.addColorStop(0,"rgba(4,8,21,.9)");lv.addColorStop(.5,"rgba(4,8,21,.55)");lv.addColorStop(1,"rgba(4,8,21,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(7,12,31,0)");bv.addColorStop(1,"rgba(7,12,31,.8)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var fy=G.ky+G.ih*.5,mv=c.createLinearGradient(0,fy-30,0,fy+60);mv.addColorStop(0,"rgba(7,12,31,0)");mv.addColorStop(1,"rgba(7,12,31,1)");c.fillStyle=mv;c.fillRect(0,fy-30,w,91);
        c.fillStyle=BG;c.fillRect(0,fy+60,w,h);
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

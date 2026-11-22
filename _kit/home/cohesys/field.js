/* ================= HERO FIELD: Cohesys's own product photograph (HOME_BRIEF update 2a), from cohesys.ca: BoneTape, cut to
   shape, fixing a zygomatic fracture below the orbit of a skull model. make_hero.py crops it to the taped rim, keys out the
   white studio ground, grades it warm and bakes a long eased alpha feather (no box edge, DP/DJ) into hero.webp. Here it
   holds still in the open area right of the text with a slow Ken Burns drift; it moves on its own, so no pointer response
   (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#170a12";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(260,Math.min(ebt-12,h*.5)):h;
    var NAT=1439/Math.min(window.devicePixelRatio||1,2);var ih=Math.min(NAT,mob?(U-58)*.94:Math.min(h*.78,cw*.44)),iw=ih*1453/1439;
    var kx=mob?w*.5:side+cw*.73,ky=mob?58+(U-58)*.55:Math.max(h*.55,88+ih*.52);   /* centre of the render, in the open area right of the text */
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
      ag.addColorStop(0,"rgba(70,24,40,"+(.42*e).toFixed(3)+")");ag.addColorStop(.45,"rgba(40,14,26,"+(.24*e).toFixed(3)+")");ag.addColorStop(1,"rgba(23,10,18,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.save();c.translate(cx,cy);c.rotate(rt);c.globalAlpha=e;c.drawImage(img,-dw*.5,-dh*.5,dw,dh);c.restore();c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(15,6,11,.92)");lv.addColorStop(.6,"rgba(15,6,11,.5)");lv.addColorStop(1,"rgba(15,6,11,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.42);tv.addColorStop(0.00,"rgba(15,6,11,"+(0.5500).toFixed(4)+")");tv.addColorStop(0.10,"rgba(15,6,11,"+(0.5346).toFixed(4)+")");tv.addColorStop(0.20,"rgba(15,6,11,"+(0.4928).toFixed(4)+")");tv.addColorStop(0.30,"rgba(15,6,11,"+(0.4312).toFixed(4)+")");tv.addColorStop(0.40,"rgba(15,6,11,"+(0.3564).toFixed(4)+")");tv.addColorStop(0.50,"rgba(15,6,11,"+(0.2750).toFixed(4)+")");tv.addColorStop(0.60,"rgba(15,6,11,"+(0.1936).toFixed(4)+")");tv.addColorStop(0.70,"rgba(15,6,11,"+(0.1188).toFixed(4)+")");tv.addColorStop(0.80,"rgba(15,6,11,"+(0.0572).toFixed(4)+")");tv.addColorStop(0.90,"rgba(15,6,11,"+(0.0154).toFixed(4)+")");tv.addColorStop(1.00,"rgba(15,6,11,"+(0.0000).toFixed(4)+")");c.fillStyle=tv;c.fillRect(0,0,w,(h*.42)-(0)+1);
        var bv=c.createLinearGradient(0,h*.42,0,h);bv.addColorStop(0.00,"rgba(23,10,18,"+(0.0000).toFixed(4)+")");bv.addColorStop(0.10,"rgba(23,10,18,"+(0.0238).toFixed(4)+")");bv.addColorStop(0.20,"rgba(23,10,18,"+(0.0884).toFixed(4)+")");bv.addColorStop(0.30,"rgba(23,10,18,"+(0.1836).toFixed(4)+")");bv.addColorStop(0.40,"rgba(23,10,18,"+(0.2992).toFixed(4)+")");bv.addColorStop(0.50,"rgba(23,10,18,"+(0.4250).toFixed(4)+")");bv.addColorStop(0.60,"rgba(23,10,18,"+(0.5508).toFixed(4)+")");bv.addColorStop(0.70,"rgba(23,10,18,"+(0.6664).toFixed(4)+")");bv.addColorStop(0.80,"rgba(23,10,18,"+(0.7616).toFixed(4)+")");bv.addColorStop(0.90,"rgba(23,10,18,"+(0.8262).toFixed(4)+")");bv.addColorStop(1.00,"rgba(23,10,18,"+(0.8500).toFixed(4)+")");c.fillStyle=bv;c.fillRect(0,h*.42,w,(h)-(h*.42)+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.2);tv2.addColorStop(0,"rgba(15,6,11,.7)");tv2.addColorStop(1,"rgba(15,6,11,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.2);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(23,10,18,0)");mv.addColorStop(1,"rgba(23,10,18,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

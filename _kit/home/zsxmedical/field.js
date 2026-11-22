/* ================= HERO FIELD: the firm's own product photography (HOME_BRIEF update 2026-11-20, option a). A Zip-stitch bioabsorbable
   clip (ZSX Medical studio photograph from zsxmedical.com/technology), cut out of its blue felt ground with real alpha (edges
   decontaminated) so it sits on the deep navy ink with no box edge (DJ/DP). A soft blue back-light lifts the translucent polymer.
   Placed whole in the open area right of the measured headline (>=104px clear), below the nav with headroom; a slow breathing drift
   and tilt, no pointer response (CZ). On phones it sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,INK="#071d3a";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    /* DP/DO: the subject lives in the open area right of the measured headline and lede, at least 104px clear of them */
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.66)tr=side+cw*.5;
    var L=tr+120,R=w-side,ox=Math.max((L+R)/2,w*.66),ow=Math.min(R-L,2*(R-ox));
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.04:h,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function place(){
    var iw=img.naturalWidth,ih=img.naturalHeight,sc,cx,cy;
    if(!G.mob){sc=Math.min(G.ow*.86/iw,(h-250)/ih,.8);cx=G.ox-G.ow*.04;cy=Math.max(h*.54,118+ih*sc/2+30)}
    else{sc=Math.min(w*.62/iw,(G.bh-120)/ih,.6);cx=w*.5;cy=72+(G.bh-72)*.5}
    return {sc:sc,cx:cx,cy:cy,iw:iw,ih:ih};
  }
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var P=place(),k=.5-.5*Math.cos(t*Math.PI*2/40),sc=P.sc*(1+.02*k)*(1+.05*(1-e));
      var dw=P.iw*sc,dh=P.ih*sc,cx=P.cx,cy=P.cy-(k-.5)*dh*.02-SP.v*h*.05+(1-e)*dh*.04;
      /* a soft blue back-light, so the translucent clip reads against the navy ink */
      var gl=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(dw,dh)*.95);
      gl.addColorStop(0,"rgba(38,104,170,"+(.5*e)+")");gl.addColorStop(.42,"rgba(20,70,128,"+(.26*e)+")");gl.addColorStop(1,"rgba(7,29,58,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.save();c.translate(cx,cy);c.rotate((k-.5)*.03);c.globalAlpha=e;c.drawImage(img,-dw/2,-dh/2,dw,dh);c.restore();c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.48,1),0);lv.addColorStop(0,"rgba(4,19,41,.5)");lv.addColorStop(.7,"rgba(4,19,41,.18)");lv.addColorStop(1,"rgba(4,19,41,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.5,0,G.bh);mv.addColorStop(0,"rgba(7,29,58,0)");mv.addColorStop(1,"rgba(7,29,58,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.5,w,G.bh*.5+1);
        c.fillStyle=INK;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},
    focus:function(){if(!G||!ok)return [w/2,h/2];var P=place();return [P.cx,P.cy]}};
})();

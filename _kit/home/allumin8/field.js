/* ================= HERO FIELD: Allumin8's own product render (HOME_BRIEF 2a/2c, DS): the A8 Integr8 porous pedicle
   screw with its polyaxial ball head, taken from allumin8.com with its real alpha channel, so it sits on the page ink with
   no box edge (DP/DJ). One calm metal object, whole, in the open area right of the text, never above its native 947px
   width. It breathes in a very slow drift and never follows the pointer (CZ). A faint brand-green light pools under it.
   On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#070908",AR=1;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    if(w>=1800)side=Math.max(side,(w-1560)/2),cw=w-2*side;
    var U=mob?Math.min(h*.46,w*1.0):h;
    var ang=mob?-.4:-.2,ca=Math.cos(ang),sa=Math.abs(Math.sin(ang));
    /* the screw, whole, in the open area right of the text (DO/DP); never larger than its native width */
    var iw=mob?Math.min(w*.68,971):Math.min(cw*.46,971,(h-260)/(sa+ca/AR)),ih=iw/AR;
    var bw=iw*ca+ih*sa,bh=iw*sa+ih*ca;
    var kx=mob?w*.5:side+cw*.73,ky=mob?92+bh*.5:Math.max(h*.52,130+bh*.5);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,ang:ang,bbw:bw,bbh:bh};
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
      /* a very slow breath: grow ~3% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc;
      var gl=c.createRadialGradient(G.kx,G.ky+G.bbh*.12,0,G.kx,G.ky+G.bbh*.12,G.bbw*.62);
      [[0,.075],[.3,.05],[.6,.02],[.85,.006],[1,0]].forEach(function(q){gl.addColorStop(q[0],"rgba(54,255,7,"+(q[1]*e).toFixed(4)+")")});
      c.fillStyle=gl;c.fillRect(G.kx-G.bbw,G.ky-G.bbw,G.bbw*2,G.bbw*2);
      c.save();c.translate(G.kx,G.ky-k*G.ih*.06-SP.v*G.ih*.3);c.rotate(G.ang+.012*Math.sin(t*Math.PI*2/40));
      c.imageSmoothingQuality="high";c.globalAlpha=e;c.drawImage(img,-dw*.5,-dh*.5,dw,dh);c.restore();
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.52,0);lv.addColorStop(0,"rgba(5,6,5,.95)");lv.addColorStop(.62,"rgba(5,6,5,.6)");lv.addColorStop(1,"rgba(5,6,5,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(5,6,5,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.025],[.4,.1],[.6,.24],[.8,.48],[1,.85]].forEach(function(q){bv.addColorStop(q[0],"rgba(7,9,8,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,84);[[0,.5],[.5,.2],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(5,6,5,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,84);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(7,9,8,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

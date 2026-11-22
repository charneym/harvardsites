/* ================= HERO FIELD: the firm's own product photography (HOME_BRIEF update 2026-11-20, option a). The next-generation
   Break Wave therapy probe mated with its ultrasound imaging probe (SonoMotion studio photograph, sonomotion.com, 2026), cut out with
   real alpha from its seamless grey ground (third-party mark on the imaging probe retouched out), cool-graded, and its cables eased out over
   the lower third, so it sits on the navy ink with no box edge (DJ/DP). A soft logo-blue back-light separates the white housing from the ink.
   Placed whole in the open area right of the measured headline (>=104px clear), below the nav; slow breathing drift, no pointer response (CZ).
   On phones it sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,INK="#0b1a2a";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    /* DP/DO: the subject lives in the open area right of the measured headline and lede, at least 104px clear of them */
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+104,R=w-side,ox=(L+R)/2,ow=R-L;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function place(){
    var iw=img.naturalWidth,ih=img.naturalHeight,sc,cx,bot;
    if(!G.mob){sc=Math.min(G.ow*.86/iw,(h-150)/ih,.78);cx=G.ox;bot=Math.min(h+ih*sc*.03,(h+90)/2+ih*sc*.65)}
    else{sc=Math.min(w*.62/iw,(G.bh-84)/ih);cx=w*.5;bot=G.bh+ih*sc*.04}
    return {sc:sc,cx:cx,bot:bot,iw:iw,ih:ih};
  }
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var P=place(),k=.5-.5*Math.cos(t*Math.PI*2/48),sc=P.sc*(1+.018*k)*(1+.04*(1-e));
      var dw=P.iw*sc,dh=P.ih*sc,x=P.cx-dw/2-k*dw*.006,y=P.bot-dh+(1-k)*dh*.006-SP.v*h*.05;
      /* a soft logo-blue back-light behind the housing, so the white probe sits in light rather than on a flat ground */
      var hx=x+dw*.5,hy=y+dh*.34,gl=c.createRadialGradient(hx,hy,0,hx,hy,dw*.95);
      gl.addColorStop(0,"rgba(60,104,150,"+(.42*e)+")");gl.addColorStop(.5,"rgba(28,58,90,"+(.24*e)+")");gl.addColorStop(1,"rgba(11,26,42,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.46,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(7,18,30,.55)");lv.addColorStop(.7,"rgba(7,18,30,.2)");lv.addColorStop(1,"rgba(7,18,30,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(11,26,42,0)");bv.addColorStop(1,"rgba(11,26,42,.7)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.55,0,G.bh);mv.addColorStop(0,"rgba(11,26,42,0)");mv.addColorStop(1,"rgba(11,26,42,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.55,w,G.bh*.45+1);
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
    focus:function(){if(!G||!ok)return [w/2,h/2];var P=place();return [P.cx,P.bot-P.ih*P.sc*.66]}};
})();

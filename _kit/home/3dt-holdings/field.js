/* ================= HERO FIELD: a crafted render of 3DT's own device (HOME_BRIEF update, option c): the conductance sizing balloon
   catheter of 3DT's post-dilatation and valvuloplasty programmes (3dtholdings.com/research-development; NIH RePORTER HL120517,
   HL123186), with the ring electrodes on the inner member that read the balloon's size by Ohm's law, seen through the clear
   inflated balloon. Ray-marched offline by render.py with studio strip lights and the logo's olive in the fill and the
   measuring field, baked with real alpha to hero.webp, so it sits on the ink with no box edge at any width (DJ/DP).
   Placed whole in the open area right of the copy (DO), with the scrim only behind the text (DI). A slow drift and a faint
   breathing of the balloon; it moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into
   the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0d0d0a",IW=1200,IH=1520,EX=.53,EY=.47;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.05):h;
    var ih=mob?U*.74:Math.min(h*1.02,IH),iw=ih*(IW/IH);
    var kx=mob?w*.6:side+cw*.71,ky=mob?U*.4:h*.5;
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
      /* a very slow drift: push in ~3% over ~36s and back, the balloon kept on its mark, a few px of float */
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.03*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX,y=G.ky-dh*EY+Math.sin(t*Math.PI*2/14)*3-SP.v*G.ih*.06;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet: an ink wash that eases out over a long distance, so it never ends on a line */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.58,0);lv.addColorStop(0,"rgba(13,13,10,.9)");lv.addColorStop(.5,"rgba(13,13,10,.6)");lv.addColorStop(.8,"rgba(13,13,10,.18)");lv.addColorStop(1,"rgba(13,13,10,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var tv=c.createLinearGradient(0,0,0,G.bh*.3);tv.addColorStop(0,"rgba(13,13,10,.95)");tv.addColorStop(.45,"rgba(13,13,10,.4)");tv.addColorStop(1,"rgba(13,13,10,0)");c.fillStyle=tv;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.6,0,G.bh*.76);mv.addColorStop(0,"rgba(13,13,10,0)");mv.addColorStop(1,"rgba(13,13,10,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.6,w,G.bh*.16+1);c.fillStyle=BG;c.fillRect(0,G.bh*.76,w,G.bh*.24+1);
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

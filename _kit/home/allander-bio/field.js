/* ================= HERO FIELD: a crafted render of Allander's real molecule (HOME_BRIEF update 2c): the MH2 domain of human
   Smad7, the folded C-terminal domain carried by Allander's Tat-PYC-Smad7 biologic, from the AlphaFold model AF-O15105-F1.
   Rendered offline by render.py as a smooth molecular surface in tints of the logo blue (#004aab), baked with alpha to
   hero.webp; here it floats in a slow breath over a low blue glow painted across the whole canvas (no box edge, DJ/DP).
   It moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#07111f";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.42,w*1.05):h;
    /* desktop: the molecule is whole and centred in the open area right of the headline (~70% of the width, DO/DP) */
    var ih=mob?(U-58)*1.02:Math.min(h*.7,cw*.44/(1800/1615),760),iw=ih*(1800/1615);
    var kx=mob?w*.5:Math.min(w-side-iw*.5,w*.7),ky=mob?(58+U)/2+4:h*.53;
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
      /* a very slow breath: push in ~3% and float a few pixels over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5+Math.sin(t*Math.PI*2/23)*G.ih*.008-SP.v*G.ih*.06;
      /* a low blue glow, painted across the WHOLE canvas, so no edge of the render can read as a pasted box (DJ) */
      var ag=c.createRadialGradient(G.kx,G.ky,0,G.kx,G.ky,Math.max(w,h)*.72);
      ag.addColorStop(0,"rgba(16,52,112,"+(.55*e).toFixed(3)+")");ag.addColorStop(.42,"rgba(10,32,72,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,17,31,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left only, a soft top and base */
        var lx=Math.max(G.side+G.cw*.42,G.kx-dw*.62);
        var lv=c.createLinearGradient(0,0,lx,0);lv.addColorStop(0,"rgba(4,10,20,.92)");lv.addColorStop(.7,"rgba(4,10,20,.55)");lv.addColorStop(1,"rgba(4,10,20,0)");c.fillStyle=lv;c.fillRect(0,0,lx,h);
        var tv=c.createLinearGradient(0,0,0,h*.16);tv.addColorStop(0,"rgba(4,10,20,.6)");tv.addColorStop(1,"rgba(4,10,20,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.16);
        var bv=c.createLinearGradient(0,h*.82,0,h);bv.addColorStop(0,"rgba(7,17,31,0)");bv.addColorStop(1,"rgba(7,17,31,.8)");c.fillStyle=bv;c.fillRect(0,h*.82,w,h*.18+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.16);tv2.addColorStop(0,"rgba(4,10,20,.5)");tv2.addColorStop(1,"rgba(4,10,20,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.16);
        var mv=c.createLinearGradient(0,G.bh*.9,0,G.bh);mv.addColorStop(0,"rgba(7,17,31,0)");mv.addColorStop(1,"rgba(7,17,31,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.9,w,G.bh*.1+1);
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

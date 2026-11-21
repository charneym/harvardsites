/* ================= HERO FIELD: a crafted render of the real thing Serentrix works on (HOME_BRIEF update 2c): the TRPV1 ion
   channel, built from the cryo-EM structure PDB 5IS0 (rat TRPV1 in a lipid nanodisc, bound to the antagonist capsazepine;
   Gao et al., Nature 2016). Four subunits space-filled in the two blues of the Serentrix eye, the antagonist in its vanilloid
   pocket in the logo lime. Rendered offline by render.py with alpha to hero.webp; here it drifts in a slow Ken Burns breath.
   It moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#091119";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*.92):h;
    /* the channel fills its render; keep it whole, below the header, centred in the open area right of the text (DO/DP) */
    var ih=mob?Math.min(U-110,w*.8):Math.min((h-120)*.8,cw*.42),iw=ih*(1134/1086);
    var kx=mob?w*.5:side+cw*.72,ky=mob?78+ih/2:72+(h-72)*.5;
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
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low oxblood glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(20,62,98,"+(.5*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(13,34,54,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(9,17,25,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint cool sheen breathing across the channel, light moving over the model */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.45+.1*pu),py=y+dh*.32,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(200,232,255,"+(.03+.035*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(200,232,255,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(6,11,17,.95)");lv.addColorStop(.62,"rgba(6,11,17,.6)");lv.addColorStop(1,"rgba(6,11,17,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(6,11,17,.6)");tv.addColorStop(1,"rgba(6,11,17,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(9,17,25,0)");bv.addColorStop(1,"rgba(9,17,25,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.2);tv2.addColorStop(0,"rgba(6,11,17,.55)");tv2.addColorStop(1,"rgba(6,11,17,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.2);
        var mv=c.createLinearGradient(0,G.bh*.9,0,G.bh);mv.addColorStop(0,"rgba(9,17,25,0)");mv.addColorStop(1,"rgba(9,17,25,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.9,w,G.bh*.1+1);
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

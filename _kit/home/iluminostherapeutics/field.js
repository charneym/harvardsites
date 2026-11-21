/* ================= HERO FIELD: a crafted render of the real molecule (HOME_BRIEF update 2026-11-20, option c). A space-filling
   model of the Dyrk1a kinase domain, the enzyme Iluminos inhibits, from its 1.85 A crystal structure with the University of
   Arizona DYR-series inhibitor DYR530 in the ATP pocket (PDB 8T2H, RCSB; Montfort lab). Rendered offline atom by atom
   (dyrk.py: sphere shading, depth-based ambient occlusion; N-lobe and C-lobe in the greens of the Iluminos header, the
   inhibitor in the warm amber of their site gradient) on a transparent ground, so it sits on the ink with no box edge (DJ/DP).
   Slow breathing drift and a faint warm glow at the pocket; it moves on its own, so there is no pointer response (CZ). The
   molecule sits whole, centred in the open area right of the text (~70% of the width), with an ink wash over the text side
   (DI). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0d072d",AR=958/1266,LX=.54,LY=.40;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.06):h;
    /* the kinase: whole in frame, centred in the open area right of the text, below the nav */
    /* phones: the band between the nav (84px) and the eyebrow (34svh) */
    var mt=84,mb=Math.max(mt+150,h*.34-22);
    var ih=mob?Math.min((mb-mt)*.94,cw*.7/AR):Math.min(h*.62,cw*.36/AR);
    var kx=mob?w*.5:side+cw*.72,ky=mob?(mt+mb)/2:Math.max(h*.54,104+ih*.5);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:ih*AR,kx:kx,ky:ky,bh:mob?U:h};
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
      /* a very slow breath: in ~3.5% and a touch of drift over ~46s */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.018-SP.v*G.ih*.05;
      /* a deep teal-navy glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.4:h*.5,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(24,58,62,"+(.5*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(18,22,60,"+(.32*e).toFixed(3)+")");ag.addColorStop(1,"rgba(13,7,45,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint warm glow breathing at the ATP pocket, where the inhibitor sits */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*LX,py=y+dh*LY,pr=dw*.34;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(247,166,100,"+(.07+.05*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(247,166,100,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(8,4,31,.96)");lv.addColorStop(.64,"rgba(8,4,31,.62)");lv.addColorStop(1,"rgba(8,4,31,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(8,4,31,.62)");tv.addColorStop(1,"rgba(8,4,31,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(13,7,45,0)");bv.addColorStop(1,"rgba(13,7,45,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.26);tv2.addColorStop(0,"rgba(8,4,31,.72)");tv2.addColorStop(1,"rgba(8,4,31,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(13,7,45,0)");mv.addColorStop(1,"rgba(13,7,45,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

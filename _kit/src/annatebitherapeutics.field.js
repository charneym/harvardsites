/* ================= HERO FIELD: Annate's own render of the mechanism (HOME_BRIEF update 2, preference (a)/(c)):
   the cancer cell with bispecific antibodies (blue/green) docking ApoL1-carrying HDL particles (grey) on its surface,
   from annatebitherapeutics.com/images/cell_with_ab-1600x800.jpg (the poster frame of their own hero video). Its flat
   studio ground was keyed out to real alpha (colours un-premultiplied), and the frame edges feathered with curved masks,
   so the image ground is the page ink itself and no rectangle edge exists at any width (DJ/DP). The colours are their own
   (the cell blue and antibody green sit inside the logo palette), so no duotone wash is applied. It breathes in a slow
   drift and turns very slightly; there is no pointer response. Centred in the open area right of the text at ~73% of
   the width, whole and clear of the headline (DO/DP), with an ink wash over the text side (DI). On phones it sits in the
   top band above the copy (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a161c",AR=1100/880;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var iw,ih,kx,ky,U;
    if(mob){ih=Math.min(h*.36,(w-20)/AR);iw=ih*AR;kx=w*.5;ky=70+ih*.5;U=ky+ih*.5+8}
    else{U=h;iw=Math.min(h*.66*AR,cw*.46);ih=iw/AR;kx=side+cw*.745;ky=h*.54}
    return {mob:mob,side:side,cw:cw,U:U,iw:iw,ih:ih,kx:kx,ky:ky,bh:mob?U+96:h};
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
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.04*(1-e)),rot=(Math.sin(t*Math.PI*2/60))*.018;
      var dw=G.iw*sc,dh=G.ih*sc,cy=G.ky-k*G.ih*.012-SP.v*G.ih*.06;
      /* a deep teal glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.kx,ggy=G.mob?G.ky:h*.52,ggr=Math.max(w,h)*.75;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(24,72,74,"+(.5*e).toFixed(3)+")");ag.addColorStop(.42,"rgba(14,40,46,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(10,22,28,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.save();c.globalAlpha=e;c.translate(G.kx,cy);c.rotate(rot);c.drawImage(img,-dw*.5,-dh*.5,dw,dh);c.restore();
      /* a slow rim light moving over the membrane */
      var pu=.5+.5*Math.sin(t*Math.PI*2/14),px=G.kx-dw*.18+dw*.2*pu,py=cy-dh*.2,pr=dw*.32;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(190,236,226,"+((.03+.03*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(190,236,226,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(7,16,20,.96)");lv.addColorStop(.5,"rgba(7,16,20,.74)");lv.addColorStop(.8,"rgba(7,16,20,.28)");lv.addColorStop(1,"rgba(7,16,20,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.24);tv.addColorStop(0,"rgba(7,16,20,.6)");tv.addColorStop(1,"rgba(7,16,20,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.24);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(10,22,28,0)");bv.addColorStop(1,"rgba(10,22,28,.86)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,70);tv2.addColorStop(0,"rgba(7,16,20,.7)");tv2.addColorStop(1,"rgba(7,16,20,0)");c.fillStyle=tv2;c.fillRect(0,0,w,70);
        var mv=c.createLinearGradient(0,G.U,0,G.bh);mv.addColorStop(0,"rgba(10,22,28,0)");mv.addColorStop(1,"rgba(10,22,28,1)");c.fillStyle=mv;c.fillRect(0,G.U,w,G.bh-G.U+1);
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
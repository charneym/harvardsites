/* ================= HERO FIELD: a crafted render of the human brain, the organ Talos's CK2 inhibitors are designed
   to reach (HOME_BRIEF update 2, preference (c)/(b)): Unsplash photo-1711409645921-ef3db0501f96, "a close up of a human
   brain on a black background" by Shawn Day (https://unsplash.com/photos/a-close-up-of-a-human-brain-on-a-black-background-ii6BOPjAtVY,
   Unsplash licence). Its black ground was converted to real alpha (luminance key) and its tones remapped to the logo
   navy and the site's paper, keeping tonal depth, so no rectangle edge exists at any width (DJ/DP). It breathes in a
   slow drift; no pointer response (CZ). It sits centred in the open area right of the text at ~70% of the width, sized
   so its left edge stays >100px clear of the headline (DO/DP); an ink wash covers the text side (DI). On phones it
   sits in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0d2331",AR=1440/1137;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.06):h;
    /* the brain: whole in frame, centred in the open area right of the text, clear of the headline */
    var kx=mob?w*.5:side+cw*.70;
    /* the measured end of the headline/lede (DP: the brain starts >=110px right of it); fallback 47% of the content */
    var tx=side+cw*.47,hh=document.getElementById("pageTitle");
    if(!mob&&hh){try{var rg=document.createRange(),q=$$(".hero-h .l,.hero-foot p.s",document);q.forEach(function(el){rg.selectNodeContents(el);Array.prototype.forEach.call(rg.getClientRects(),function(r){if(r.width>0&&r.right<w*.9)tx=Math.max(tx,r.right)})})}catch(e){}}
    var iw,ih,ky;
    if(mob){ih=Math.min(cw*.8/AR,Math.max(150,Math.min(190,h*.21)));iw=ih*AR;ky=76+ih*.5}
    else{iw=Math.min(h*.58*AR,cw*.40,2*(kx-(tx+110)));ih=iw/AR;ky=h*.545}
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0,geoN=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!once&&++geoN%45===0&&!G.mob)G=geo();var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: in ~3.5% and a touch of drift over ~46s */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.018-SP.v*G.ih*.05;
      /* a deep teal-navy glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.4:h*.5,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(30,64,86,"+(.52*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(18,44,62,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(13,35,49,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a slow warm sheen crossing the cortex */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=x+dw*(.34+.3*pu),py=y+dh*.36,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(240,226,196,"+(.035+.035*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(240,226,196,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(9,26,37,.96)");lv.addColorStop(.64,"rgba(9,26,37,.62)");lv.addColorStop(1,"rgba(9,26,37,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(9,26,37,.62)");tv.addColorStop(1,"rgba(9,26,37,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(13,35,49,0)");bv.addColorStop(1,"rgba(13,35,49,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.26);tv2.addColorStop(0,"rgba(9,26,37,.72)");tv2.addColorStop(1,"rgba(9,26,37,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(13,35,49,0)");mv.addColorStop(1,"rgba(13,35,49,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

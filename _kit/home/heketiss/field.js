/* ================= HERO FIELD: a crafted render of HekeTiss' real product (HOME_BRIEF update 2026-11-20, option c). TrophiPatch as
   their own lab photo shows it: a soft, pink, open-pore gelatin sponge patch carrying donor adipose-derived stem cells, its far edge
   gently lifted, rendered offline (render.py: parametric slab, cellular pore field, translucent shading, depth of field). The render's
   ground is the page ink exactly and every edge eases into it, so there is no box edge (DJ/DP). Placed in the open area right of the
   measured headline and lede (DI/DO), at most at native size; a slow drift, no pointer response (CZ). On phones it sits in the top
   band below the nav and fades into the ink above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),SRC=null,ok=false;
  img.decoding="async";img.onload=function(){
    /* feather the render's own edges to transparent (an elliptical mask around the patch), so a 1-level codec rounding at its
       border can never show as a line on the ink (DJ/DP) */
    try{var iw=img.naturalWidth,ih=img.naturalHeight,oc=document.createElement("canvas");oc.width=iw;oc.height=ih;var o=oc.getContext("2d");
      o.drawImage(img,0,0);o.globalCompositeOperation="destination-in";o.save();o.translate(iw*.48,ih*.52);o.scale(iw*.5,ih*.5);
      var rg=o.createRadialGradient(0,0,0,0,0,1);rg.addColorStop(0,"#000");rg.addColorStop(.86,"#000");rg.addColorStop(1,"rgba(0,0,0,0)");rg.addColorStop(1,"rgba(0,0,0,0)");
      o.fillStyle=rg;o.fillRect(-2,-2,4,4);o.restore();SRC=oc}catch(e){SRC=img}
    ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    /* DP/DO: the molecule lives in the open area right of the measured headline and lede, at least 120px clear of them */
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+120,R=w-side,ox=(L+R)/2,ow=R-L;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#141011";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/48),cx,cy,sc;
      /* the patch spans ~x .14-.81 and y .22-.80 of the render; its centre is (.48,.52) */
      if(!G.mob){sc=Math.min(G.ow*.96/(.67*iw),(h-200)/(.58*ih),1);cx=G.ox;cy=86+(h-86)*.5}
      else{sc=Math.min(w*.92/(.67*iw),(G.bh-90)/(.58*ih),1);cx=w*.5;cy=66+(G.bh-66)*.5}
      sc*=(1+.03*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw*.48-k*dw*.01,y=cy-dh*.52+k*dh*.006-SP.v*h*.04;
      c.globalAlpha=e;c.drawImage(SRC||img,x,y,dw,dh);c.globalAlpha=1;
      /* the right edge of the viewport always closes into the ink, so nothing steps at the scrollbar gutter (DJ) */
      var rw=Math.max(80,w*.08),rv=c.createLinearGradient(w-rw,0,w,0);rv.addColorStop(0,"rgba(20,16,17,0)");rv.addColorStop(1,"rgba(20,16,17,1)");c.fillStyle=rv;c.fillRect(w-rw,0,rw+1,h);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.5,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(20,16,17,.6)");lv.addColorStop(.6,"rgba(20,16,17,.28)");lv.addColorStop(1,"rgba(20,16,17,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(20,16,17,0)");bv.addColorStop(1,"rgba(20,16,17,.7)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.5,0,G.bh);mv.addColorStop(0,"rgba(20,16,17,0)");mv.addColorStop(1,"rgba(20,16,17,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.5,w,G.bh*.5+1);
        c.fillStyle="#141011";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.ox,G.mob?62+(G.bh-62)*.5:86+(h-86)*.5]:[w/2,h/2]}};
})();

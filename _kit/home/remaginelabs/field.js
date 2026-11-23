/* ================= HERO FIELD: the firm's own product image (HOME_BRIEF update 2026-11-20, option a): Remagine Labs' render of
   its wearable patch in an exploded view (remaginelabs.com device_remagine.png, real alpha; red and green reservoirs graded down a
   little to sit with the palette). It is drawn over the page ink, so there is no box edge anywhere (DJ/DP); placed whole in the
   open area right of the measured headline and lede (DI/DO), never above native size, with a slow drift and no pointer response
   (CZ). On phones it sits in the top band below the nav and fades into the ink above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
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
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0a1120";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/48),cx,cy,sc;
      /* the subject spans ~x .05-.95 and y .04-.96 of the image; its centre is (.5,.5) */
      if(!G.mob){sc=Math.min(G.ow*.96/(.9*iw),(h-170)/(.92*ih),1);cx=G.ox;cy=86+(h-86)*.5}
      else{var mt=78,mb=Math.max(mt+160,h*.45-48);sc=Math.min(w*.84/(.9*iw),(mb-mt)/(.94*ih),1);cx=w*.5;cy=(mt+mb)/2}
      sc*=(1+.03*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw*.5-k*dw*.008,y=cy-dh*.5+k*dh*.006-SP.v*h*.04;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the right edge of the viewport always closes into the ink, so nothing steps at the scrollbar gutter (DJ) */
      var rw=Math.max(80,w*.08),rv=c.createLinearGradient(w-rw,0,w,0);rv.addColorStop(0,"rgba(10,17,32,0)");rv.addColorStop(1,"rgba(10,17,32,1)");c.fillStyle=rv;c.fillRect(w-rw,0,rw+1,h);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.5,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(10,17,32,.6)");lv.addColorStop(.6,"rgba(10,17,32,.28)");lv.addColorStop(1,"rgba(10,17,32,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(10,17,32,0)");bv.addColorStop(1,"rgba(10,17,32,.32)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28);
      }else{
        var m0=Math.max(78+160,h*.45-48),mv=c.createLinearGradient(0,m0,0,G.bh);mv.addColorStop(0,"rgba(10,17,32,0)");mv.addColorStop(1,"rgba(10,17,32,1)");c.fillStyle=mv;c.fillRect(0,m0,w,G.bh-m0+1);
        c.fillStyle="#0a1120";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.ox,G.mob?(78+Math.max(78+160,h*.45-48))/2:86+(h-86)*.5]:[w/2,h/2]}};
})();

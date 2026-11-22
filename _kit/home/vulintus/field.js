/* ================= HERO FIELD: the firm's own imagery (HOME_BRIEF update, option a/c): Vulintus's own photoreal render of its
   redesigned pellet dispenser (vulintus.com/news/pellet-dispenser-redesign). Graded in hero.webp: the flat blue studio backdrop
   keyed out by its chroma (glass and smoked acrylic keep their real transparency) and replaced by the site ink #121213, so the
   art meets the page with no box edge (DJ/DP). The dispenser stands whole in the open area right of the text (~68%), under the
   nav with headroom (DO/DQ), with a very slow drift. It moves on its own, so no pointer response (CZ). Phones: top band, fading
   into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#121213";var IW=1278,IH=1278,EX=.51,EY=.505;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mx=w>=1800?1560:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-mx)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    /* the dispenser itself spans ~55% of the frame's width and ~73% of its height */
    var ih=mob?Math.min(U*.82,w*.85):Math.min(h*.9,cw*.36/.55),iw=ih*(IW/IH);
    var kx=mob?w*.5:side+cw*.7,ky=mob?U*.52:Math.max(h*.54,92+ih*.39);
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
      /* a very slow drift: push in ~3% over ~40s and back, the dispenser kept on its mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX-k*G.iw*.01,y=G.ky-dh*EY-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(x>0){c.fillStyle=BG;c.fillRect(0,0,Math.ceil(x)+1,h);var eg=c.createLinearGradient(x,0,x+dw*.16,0);eg.addColorStop(0,"rgba(18,18,19,1)");eg.addColorStop(1,"rgba(18,18,19,0)");c.fillStyle=eg;c.fillRect(x,0,dw*.16+1,h)}
      var xr=x+dw;if(xr<w+dw*.16){var rg=c.createLinearGradient(xr-dw*.16,0,xr,0);rg.addColorStop(0,"rgba(18,18,19,0)");rg.addColorStop(1,"rgba(18,18,19,1)");c.fillStyle=rg;c.fillRect(xr-dw*.16,0,dw*.16+1,h);if(xr<w){c.fillStyle=BG;c.fillRect(Math.floor(xr)-1,0,w-xr+2,h)}}
      /* the right edge of the viewport always closes into the ink, so the photo never ends on a hard edge (DJ) */
      var rv=c.createLinearGradient(w-Math.max(90,w*.1),0,w,0);rv.addColorStop(0,"rgba(18,18,19,0)");rv.addColorStop(1,"rgba(18,18,19,.92)");c.fillStyle=rv;c.fillRect(w-Math.max(90,w*.1),0,Math.max(90,w*.1)+1,h);
      if(!G.mob){
        /* the headline side stays quiet: a deep ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(18,18,19,1)");lv.addColorStop(.6,"rgba(18,18,19,.85)");lv.addColorStop(1,"rgba(18,18,19,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(18,18,19,.7)");tv.addColorStop(1,"rgba(18,18,19,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.84,0,h);bv.addColorStop(0,"rgba(18,18,19,0)");bv.addColorStop(1,"rgba(18,18,19,.7)");c.fillStyle=bv;c.fillRect(0,h*.84,w,h*.16+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);tv2.addColorStop(0,"rgba(18,18,19,.75)");tv2.addColorStop(1,"rgba(18,18,19,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.82,0,G.bh);mv.addColorStop(0,"rgba(18,18,19,0)");mv.addColorStop(1,"rgba(18,18,19,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.82,w,G.bh*.18+1);
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

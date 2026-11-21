/* ================= HERO FIELD (HOME_BRIEF update, option b): a real photograph of the subject, an anatomical model of the
   human brain in sagittal section (Unsplash, photo-1559757148-5c350d0d3c56, Robina Weermeijer; free licence), cut out from its
   blurred studio background and graded in hero.webp to the brand's navy, with the ventricle region (corpus callosum, third
   ventricle, brainstem) kept in ivory: OsmoFlo works in the ventricles. Shown whole, at or below native resolution, centred
   in the open area right of the text (DO/DP), feathered into the ink on every edge (DJ). A very slow Ken Burns breath;
   it moves on its own, so no pointer response (CZ). On phones it sits whole in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a0f24";var IW=1460,IH=1250,EX=.5,EY=.47;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*.98):h;
    var ih,iw,kx,ky;
    if(mob){var top=64,bot=h*.4-6;ih=Math.min(bot-top-8,w*.82*IH/IW);iw=ih*IW/IH;kx=w*.5;ky=(top+bot)/2}
    else{ih=Math.min(h*.68,cw*.44*IH/IW,IH);iw=ih*IW/IH;kx=side+cw*.715;ky=h*.53}
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?h*.4+40:h};
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
      /* a very slow drift: push in ~4% over ~40s and back, the brain kept on its mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX-k*G.iw*.01,y=G.ky-dh*EY-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(x>0){c.fillStyle=BG;c.fillRect(0,0,Math.ceil(x)+1,h);var eg=c.createLinearGradient(x,0,x+dw*.04,0);eg.addColorStop(0,"rgba(10,15,36,1)");eg.addColorStop(1,"rgba(10,15,36,0)");c.fillStyle=eg;c.fillRect(x,0,dw*.04+1,h)}
      var xr=x+dw;if(xr<w+dw*.04){var rg=c.createLinearGradient(xr-dw*.04,0,xr,0);rg.addColorStop(0,"rgba(10,15,36,0)");rg.addColorStop(1,"rgba(10,15,36,1)");c.fillStyle=rg;c.fillRect(xr-dw*.04,0,dw*.04+1,h);if(xr<w){c.fillStyle=BG;c.fillRect(Math.floor(xr)-1,0,w-xr+2,h)}}
      /* the right edge of the viewport always closes into the ink, so the photo never ends on a hard edge (DJ) */
      var rv=c.createLinearGradient(w-Math.max(90,w*.1),0,w,0);rv.addColorStop(0,"rgba(10,15,36,0)");rv.addColorStop(1,"rgba(10,15,36,.92)");c.fillStyle=rv;c.fillRect(w-Math.max(90,w*.1),0,Math.max(90,w*.1)+1,h);
      if(!G.mob){
        /* the headline side stays quiet: a deep ink wash from the left, a soft top and base */
        var le=Math.max(G.side+G.cw*.3,x+dw*.06),lv=c.createLinearGradient(0,0,le,0);lv.addColorStop(0,"rgba(10,15,36,1)");lv.addColorStop(.6,"rgba(10,15,36,.92)");lv.addColorStop(1,"rgba(10,15,36,0)");c.fillStyle=lv;c.fillRect(0,0,le+1,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(10,15,36,.7)");tv.addColorStop(1,"rgba(10,15,36,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.8,0,h);bv.addColorStop(0,"rgba(10,15,36,0)");bv.addColorStop(1,"rgba(10,15,36,.9)");c.fillStyle=bv;c.fillRect(0,h*.8,w,h*.2+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.16);tv2.addColorStop(0,"rgba(10,15,36,.6)");tv2.addColorStop(1,"rgba(10,15,36,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.16);
        var mv=c.createLinearGradient(0,G.bh*.88,0,G.bh);mv.addColorStop(0,"rgba(10,15,36,0)");mv.addColorStop(1,"rgba(10,15,36,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.88,w,G.bh*.12+1);
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

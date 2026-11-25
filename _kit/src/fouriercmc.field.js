/* ================= HERO FIELD (fouriercmc): Fourier's own product photograph (HOME_BRIEF update, option a), from fouriercmc.com:
   a thin white thermoformed ceramic sheet formed over the components of a red circuit board, shot on black. Downsampled from
   their 4400px master (1400px, never upscaled), the reds eased a little, its black ground crushed to true black with a long
   elliptical feather to black baked in, and drawn with a screen blend, so black adds nothing and the ground is the page ink
   exactly: no box edge or halo exists anywhere (DJ, DP). Whole and centred in the
   open area right of the text (~70% of the width), below the nav, under an ink wash on the headline side only (DI, DO); a very
   slow push-in, no pointer response (CZ). On phones it sits in the top band above the headline (CW).
   Same API as the template's field (start/stop/once/intro/setDim/snapDim/setScroll/running/focus). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#101125",RGB="16,17,37";var IW=1400,IH=1016,EX=.5,EY=.5;
  /* a faint dither tile (0-2 levels) so the long washes never band into straight contour lines (DJ, DP) */
  var DT=document.createElement("canvas");DT.width=DT.height=128;(function(){var x=DT.getContext("2d"),d=x.createImageData(128,128);for(var i=0;i<d.data.length;i+=4){var v=Math.random();d.data[i]=d.data[i+1]=d.data[i+2]=v<.5?0:255;d.data[i+3]=Math.round(Math.random()*5)}x.putImageData(d,0,0)})();var DP=null;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var ih,iw;
    if(mob){iw=Math.min(w*1.02,IW);ih=iw*IH/IW;if(ih>h*.42){ih=h*.42;iw=ih*IW/IH}}
    else{iw=Math.min(cw*.6,(h-90)*1.05*IW/IH,IW);ih=iw*IH/IW}
    var kx=mob?w*.5:side+cw*.72,ky=mob?64+ih*.5:Math.max(h*.53,ih*.5+84);
    return {mob:mob,side:side,cw:cw,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?ky+ih*.5:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function lg(x0,y0,x1,y1,stops){var g=c.createLinearGradient(x0,y0,x1,y1);stops.forEach(function(s){g.addColorStop(s[0],"rgba("+RGB+","+s[1]+")")});return g}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow push-in: ~3% over ~46s and back */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.03*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX,y=G.ky-dh*EY-SP.v*G.ih*.05;
      c.globalAlpha=e;c.globalCompositeOperation="screen";c.drawImage(img,x,y,dw,dh);c.globalCompositeOperation="source-over";c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet: a deep ink wash from the left that eases out over a long distance, a soft top and base */
        c.fillStyle=lg(0,0,G.side+G.cw*.56,0,[[0,1],[.5,.88],[.8,.32],[1,0]]);c.fillRect(0,0,w,h);
        c.fillStyle=lg(0,0,0,h*.22,[[0,.7],[1,0]]);c.fillRect(0,0,w,h*.22);
        c.fillStyle=lg(0,h*.58,0,h,[[0,0],[.5,.35],[1,.92]]);c.fillRect(0,h*.58,w,h*.42+1);
      }else{
        c.fillStyle=lg(0,G.bh*.62,0,G.bh,[[0,0],[.6,.6],[1,1]]);c.fillRect(0,G.bh*.62,w,G.bh*.38+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!DP)DP=c.createPattern(DT,"repeat");c.fillStyle=DP;c.fillRect(0,0,w,h);
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

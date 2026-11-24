/* ================= HERO FIELD: a crafted render of the real subject (HOME_BRIEF update, option c; render.py): a sectioned block
   of human skin, the "window to dermal microvasculature" that Spear's optoacoustic mesoscopy reads (CORDIS MOSAIC), with a soft
   column of pulsed light entering the top and faint acoustic rings. Real alpha, so it sits on the page ink with no seam (DJ).
   Desktop: centred in the open area right of the text (~72% of the content width, DO), a quiet ink wash only behind the headline
   (DI); a very slow drift and breath. No pointer response (CZ). Phones: in the top band, fading into the ink above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#070c18",IW=1200,IH=1280,EX=.494,EY=.47;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.34:h;
    var ih=mob?Math.min(U*1.16,w*1.0):Math.min(h*.92,cw*.56,IH),iw=ih*(IW/IH);
    var kx=mob?w*.5:side+cw*.735,ky=mob?40+ih*EY:h*.53;
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
      /* a very slow breath: ~2.5% in and out over ~36s, the block kept on its mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX,y=G.ky-dh*EY-SP.v*G.ih*.05+k*G.ih*.006;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet: a long, eased ink wash from the left that ends well before the block */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(7,12,24,.9)");lv.addColorStop(.6,"rgba(7,12,24,.5)");lv.addColorStop(1,"rgba(7,12,24,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);mv.addColorStop(0,"rgba(7,12,24,0)");mv.addColorStop(1,"rgba(7,12,24,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

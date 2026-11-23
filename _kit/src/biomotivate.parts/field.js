/* ================= HERO FIELD: real photography (HOME_BRIEF update 2b). The summit is from the photography on
   biomotivate.com itself (the alpine peaks image the firm uses on its live site), echoing the three peaks of the
   Biomotivate mark: one calm, recognisable object. Prepared offline: the sky cut to real alpha along the ridge, graded
   from the logo slate (#22272f) to a warm paper white, every edge eased out over a long distance (DJ/DP), saved as
   hero.webp. Here it sits whole in the open area right of the text with the summit at ~64% width, and drifts in a very
   slow Ken Burns breath. It moves on its own, so no pointer response (CZ). On phones it sits in the top band (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#22272f",AR=1.23,SX=.265,SY=.177;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mw=w>=1800?1560:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-mw)/2),cw=w-2*side,mob=w<861;
    var iw,ih,x,y,sx,sy;
    if(!mob){
      sx=side+cw*.64;
      iw=Math.min((w-sx-6)/(1-SX),h*.86*AR,cw*.66);ih=iw/AR;
      sy=Math.max(h*.25,150);x=sx-SX*iw;y=sy-SY*ih;
    }else{
      iw=Math.min(w*1.14,620);ih=iw/AR;sx=w*.44;x=sx-SX*iw;sy=Math.max(112,innerHeight*.13);y=sy-SY*ih;
    }
    return {mob:mob,side:side,cw:cw,iw:iw,ih:ih,x:x,y:y,kx:sx,ky:sy,bh:mob?Math.round(innerHeight*.5):h};
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
      /* Ken Burns: grow ~4% about the summit and drift a touch, over ~60s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/60),sc=(1+.04*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-SX*dw-k*G.iw*.008,y=G.ky-SY*dh-SP.v*G.ih*.05;
      /* a faint alpenglow in the logo coral, painted across the WHOLE canvas (never inside the image rect alone) */
      var ggx=G.x+G.iw*.55,ggy=G.y+G.ih*.5,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(158,63,50,"+(.09*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(64,48,52,"+(.07*e).toFixed(3)+")");ag.addColorStop(1,"rgba(34,39,47,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(27,31,38,.96)");lv.addColorStop(.55,"rgba(27,31,38,.62)");lv.addColorStop(1,"rgba(27,31,38,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.4);[[0,.5],[.2,.32],[.4,.17],[.6,.07],[.8,.02],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(27,31,38,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.4);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.03],[.4,.1],[.6,.24],[.8,.5],[1,.88]].forEach(function(q){bv.addColorStop(q[0],"rgba(34,39,47,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.5,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(34,39,47,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.5,w,G.bh*.5+1);
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
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky+G.ih*.25]:[w/2,h/2]}};
})();

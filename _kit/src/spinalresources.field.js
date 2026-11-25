/* ================= HERO FIELD: the firm's own photography (HOME_BRIEF update, option a): SRI's photograph of six anodized
   Bezier Parametric Curve Transition Rods (their "All-rods" product image), cut out on real alpha (their drop shadow removed)
   and graded slightly down, so it sits straight on the page ink with no box, edge or seam (DJ/DP). Desktop: the rod family is
   centred in the open area right of the headline (~69% of the width), below the nav; a very slow drift and float (no pointer
   response, CZ). A soft blue light behind the rods gives depth. Phones: in the band above the headline. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#07090c",IW=1360,IH=879;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mob=w<861,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side;
    var iw,cx,cy;
    if(mob){iw=Math.min(w*.9,540);cx=w*.5;cy=Math.max(84+iw*IH/IW*.5,h*.2)}
    else{var room=(side+cw)-(side+cw*.5);iw=Math.min(room*1.02,h*.95*IW/IH,1060);cx=side+cw*.72;cy=h*.47+28;
      if(cx+iw*.5>w-24)cx=w-24-iw*.5}
    return {mob:mob,iw:iw,ih:iw*IH/IW,cx:cx,cy:cy};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* a soft light behind the rods, eased out over a long distance (never ends on a line) */
    var R=Math.max(G.iw,G.ih)*.75,rg=c.createRadialGradient(G.cx,G.cy,0,G.cx,G.cy,R);
    rg.addColorStop(0,"rgba(36,139,209,"+(.13*e).toFixed(3)+")");rg.addColorStop(.45,"rgba(36,139,209,"+(.06*e).toFixed(3)+")");rg.addColorStop(1,"rgba(36,139,209,0)");
    c.fillStyle=rg;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow drift: a ~3% push in over ~36s and back, and a gentle float */
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.03*k)*(1+.04*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.cx-dw/2+Math.sin(t*.21)*4,y=G.cy-dh/2+Math.sin(t*.27)*5-SP.v*G.ih*.08+(1-e)*18;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(G.mob){var mv=c.createLinearGradient(0,G.cy+G.ih*.2,0,G.cy+G.ih*.75);mv.addColorStop(0,"rgba(7,9,12,0)");mv.addColorStop(1,"rgba(7,9,12,.85)");c.fillStyle=mv;c.fillRect(0,G.cy+G.ih*.2,w,h)}
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},
    running:function(){return running},focus:function(){return [G.cx,h-G.cy]}};
})();

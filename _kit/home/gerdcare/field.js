/* ================= HERO FIELD: GerdCare's own product render (gerd-care.com asset beba14_ce88d7b6, 1000x662 PNG with real
   alpha): the eGERD belt with its two GerdCare electrode pads and the stimulator module (HOME_BRIEF update, option a/c: the
   firm's own image of its real product). Shown at or below native size (never upscaled), whole and centred in the open area
   right of the headline (~71% of the content width), fully below the nav (DO/DP/DQ). The ground is the page ink itself and
   the image is true alpha, so no panel edge exists (DJ); a faint periwinkle glow eases out behind the product only, never
   behind the headline (DI). Motion: a very slow float and breath-like scale, no pointer parallax (CZ). On phones the belt
   stands in a band above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0f1626",IW=986,IH=628;
  img.decoding="async";img.onload=function(){ok=true;IW=img.naturalWidth;IH=img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){
      var s=Math.min(1,(w*.74)/IW,(h*.26)/IH,Math.max(100,h*.33-Math.max(88,h*.11)-16)/IH),dw=IW*s,dh=IH*s,cy=Math.max(88,h*.11)+dh/2+6;
      return {mob:1,s:s,cx:w*.5,cy:cy,dw:dw,dh:dh};
    }
    var s=Math.min(1,cw*.4/IW,h*.58/IH),dw=IW*s,dh=IH*s,cx=side+cw*.71,cy=Math.max(h*.54,96+dh/2+40);
    return {mob:0,s:s,cx:cx,cy:cy,dw:dw,dh:dh};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=cv.getBoundingClientRect().width||document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      /* a breath-like scale (~1.5% over 9s) and a slow float; a touch of scroll parallax */
      var k=.5-.5*Math.cos(t*Math.PI*2/9),sc=(.985+.015*k)*(.97+.03*e);
      var fl=Math.sin(t*Math.PI*2/14)*4-SP.v*G.dh*.08+(1-e)*18;
      var dw=G.dw*sc,dh=G.dh*sc,x=G.cx-dw/2,y=G.cy-dh/2+fl;
      /* glow: periwinkle (the logo's second colour), easing out over a long radius, behind the product only */
      var R=Math.max(dw,dh)*.85,gl=c.createRadialGradient(G.cx,G.cy+dh*.05,0,G.cx,G.cy+dh*.05,R);
      [[0,.2],[.2,.15],[.4,.09],[.6,.045],[.8,.015],[1,0]].forEach(function(q){gl.addColorStop(q[0],"rgba(138,161,199,"+(q[1]*e)+")")});
      c.fillStyle=gl;c.fillRect(G.cx-R,G.cy+dh*.05-R,2*R,2*R);
      /* a soft floor shadow under the belt */
      c.save();c.translate(G.cx,G.cy+dh*.47);c.scale(1,.12);var sh=c.createRadialGradient(0,0,0,0,0,dw*.46);
      [[0,.45],[.5,.2],[1,0]].forEach(function(q){sh.addColorStop(q[0],"rgba(5,8,15,"+(q[1]*e)+")")});c.fillStyle=sh;c.beginPath();c.arc(0,0,dw*.46,0,Math.PI*2);c.fill();c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();

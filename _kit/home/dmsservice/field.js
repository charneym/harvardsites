/* ================= HERO FIELD: a plain neutral ground. The hero visual is the company's own product photo, framed in the
   hero (.hero-ph); the earlier render is gone (client 2026-11-27: "if they have photos use that"). The footer echo copies
   this canvas, so it shows nothing stale. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,shown=false,BG="#071a2c";
  function frame(){c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);frame()}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  var api={start:function(){running=true;frame()},stop:function(){running=false},once:frame,setScroll:function(){},intro:function(){},
    setDim:function(){},snapDim:function(){},running:function(){return running},focus:function(){return [w/2,h/2]}};
  return typeof Proxy=="function"?new Proxy(api,{get:function(o,k){return k in o?o[k]:function(){}}}):api;
})();
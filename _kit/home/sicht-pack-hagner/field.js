/* ================= HERO FIELD: a plain dark studio ground (PROD_BRIEF §2.3a). The hero visual is a render of sicht-pack HAGNER film
   (a render of their product, a roll of clear Polylux PET film on a kraft core, render2.py, variant B lighting; their site has no large product photo), cut out onto this ground in the hero itself (.hero-ph),
   so it scrolls up with the headline. The footer echo copies this canvas, so it shows nothing stale. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,shown=false,BG="#13112e";
  function frame(){c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);frame()}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  var api={start:function(){running=true;frame()},stop:function(){running=false},once:frame,setScroll:function(){},intro:function(){},
    setDim:function(){},snapDim:function(){},running:function(){return running},focus:function(){return [w/2,h/2]}};
  return typeof Proxy=="function"?new Proxy(api,{get:function(o,k){return k in o?o[k]:function(){}}}):api;
})();

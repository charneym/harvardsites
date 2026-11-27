/* ================= HERO FIELD: Atlas Spine's own product render (HOME_BRIEF update 2a/2c): the HiJAK cervical
   expandable cage, expanded, side view, from atlasspine.com (HiJAK Cervical_8mm_SIDE View_Expanded, real alpha, matted
   for the dark ground by matte.py). Drawn at or below its native 1400px, whole, in the open area right of the text, with
   a slow breath; it moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the
   ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},HY=0,G=null,img=new Image(),ok=false;
  var BG="#04192a",AR=1,PAD=120;/* hero.webp carries PAD px of transparent margin with the cast shadow baked in (shadow.py) */
  img.decoding="async";img.onload=function(){ok=true;AR=(img.naturalWidth-2*PAD)/(img.naturalHeight-2*PAD);G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    /* the cage fills its render: whole, in the open area right of the text (DO/DP) */
    var iw=mob?Math.min(w*.74,(U-150)*.9*AR,560):Math.min(cw*.39,h*.5*AR,660),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.74,ky=mob?132+ih*.5:Math.max(h*.54,110+ih*.5);
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
      /* a very slow breath: grow ~3% and drift up a touch over ~40s, eased back and forth (never above native size) */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012+HY;
      /* TOP-FIX B 2026-11-27: no blue glow and no sheen. Their real render is lit as shot (not relit); a very faint
         neutral falloff up and toward the headline side (about 3% brighter than the ink, never coloured), and a wide,
         soft cast shadow on an implied surface below (baked into hero.webp by shadow.py), so the cage sits rather than floats */
      var fx=G.mob?w*.5:x+dw*.2,fy=G.mob?G.bh*.38:y+dh*.2,fr=Math.max(w,h)*.62;
      var fo=c.createRadialGradient(fx,fy,0,fx,fy,fr);fo.addColorStop(0,"rgba(255,255,255,"+(.03*e).toFixed(4)+")");fo.addColorStop(.55,"rgba(255,255,255,"+(.011*e).toFixed(4)+")");fo.addColorStop(1,"rgba(255,255,255,0)");
      c.fillStyle=fo;c.fillRect(0,0,w,h);
      var PX=PAD/(img.naturalWidth-2*PAD),PY=PAD/(img.naturalHeight-2*PAD);
      c.globalAlpha=e;c.drawImage(img,x-dw*PX,y-dh*PY,dw*(1+2*PX),dh*(1+2*PY));c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(2,16,28,.95)");lv.addColorStop(.62,"rgba(2,16,28,.6)");lv.addColorStop(1,"rgba(2,16,28,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(2,16,28,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.025],[.4,.1],[.6,.24],[.8,.48],[1,.85]].forEach(function(q){bv.addColorStop(q[0],"rgba(4,25,42,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(2,16,28,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.74,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(4,25,42,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.74,w,G.bh*.26+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=p;
    /* TOP-FIX step 5 (2026-11-27): the hero object scrolls up 1:1 with the hero on desktop (RECIPE_NOTES section 6), back home once the hero has left */
    var hy=0,hr=G&&!G.mob?document.querySelector("#view #hero"):null;
    if(hr){var b=hr.getBoundingClientRect();if(b.bottom>0)hy=Math.min(0,b.top)}
    if(hy!==HY){HY=hy;frame(true)}},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

/* ================= HERO FIELD: a crafted render of the real subject (HOME_BRIEF update 2026-11-20, option c): synapses on a
   dendrite, as a two-channel confocal fluorescence image, the structure Naum's NIA SBIR programme sets out to protect and
   regrow. Rendered offline (render.py): a dendritic shaft with mushroom, thin and stubby spines in GFP green, presynaptic
   puncta in magenta apposed to the spine heads, a second dendrite out of focus behind. The render is emitted light on pure
   black, feathered to zero on every edge, and drawn with additive blending, so it has no ground and no edge at any width
   (DJ/DP). A slow Ken Burns breath, no pointer response (CZ). The subject sits centred in the open area right of the text
   at ~72% of the width, whole and well clear of the headline (DO/DP), with an ink wash over the text side (DI). On phones
   it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#080b10";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* every wash eases out over its whole length (smoothstep stops), so none ends on a line; washes are the page ink itself,
     never darker than it, so the open ground is one colour everywhere */
  function ez(g,rgb,a0,a1,t0,t1){for(var i=0;i<=12;i++){var u=i/12,k=sm(u);g.addColorStop(t0+(t1-t0)*u,"rgba("+rgb+","+(a0+(a1-a0)*k).toFixed(4)+")")}}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.06):h;
    /* the render square (its visible light fills the inner ~80%): centred in the open area right of the text */
    var d=mob?Math.min((U-70)*.92,cw*1.0):Math.min(h*.86,cw*.5);
    var kx=mob?w*.5:side+cw*.73,ky=mob?64+(U-64)*.47:h*.56;
    return {mob:mob,side:side,cw:cw,U:U,ih:d,iw:d,kx:kx,ky:ky,bh:mob?U:h};
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
      /* a very slow breath: in ~3.5% and a touch of drift over ~46s */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.018-SP.v*G.ih*.05;
      /* a deep teal-navy glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.4:h*.5,ggr=G.mob?Math.max(w,h)*.8:Math.min(Math.max(w,h)*.8,(w-ggx)*.9);
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ez(ag,"16,42,32",.42*e,0,0,1);
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.globalCompositeOperation="lighter";c.drawImage(img,x,y,dw,dh);c.globalCompositeOperation="source-over";
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);ez(lv,"8,11,16",.97,0,0,1);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.34);ez(tv,"8,11,16",.7,0,0,1);c.fillStyle=tv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);ez(bv,"8,11,16",0,.85,0,1);c.fillStyle=bv;c.fillRect(0,0,w,h);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);ez(tv2,"8,11,16",.72,0,0,1);c.fillStyle=tv2;c.fillRect(0,0,w,h);
        var mv=c.createLinearGradient(0,G.bh*.72,0,G.bh);ez(mv,"8,11,16",0,1,0,1);c.fillStyle=mv;c.fillRect(0,0,w,G.bh+1);
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

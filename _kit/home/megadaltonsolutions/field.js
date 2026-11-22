/* ================= HERO FIELD: Megadalton's own capsid render (megadaltonsolutions.com, "Our Solutions"), the kind of
   megadalton particle CD-MS weighs one ion at a time. Their render had a white fringe from its original backdrop; it was
   un-premultiplied from white and the alpha eased by a pixel, so it sits on the ink with real alpha (DP/DJ). 887px source,
   drawn at or below native size. It turns very slowly about its own axis under a fixed key light (shading painted on top, so
   the light does not turn with it) and breathes in a slow push; it moves on its own, so no pointer response (CZ). On phones it
   sits whole in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,off=document.createElement("canvas"),oc=off.getContext("2d");
  var BG="#0b0b0d",NW=887;
  img.decoding="async";img.onload=function(){ok=true;size()};img.src="hero.webp";
  function ez(g,rgb,a0,a1,n){n=n||8;for(var i=0;i<=n;i++){var u=i/n,s=u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a0+(a1-a0)*s).toFixed(3)+")")}return g}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mw=w>=1800?1560:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-mw)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.44,w*1.02):h;
    var d=mob?Math.min(w*.6,U-150,NW):Math.min(cw*.37,NW,(h-150)*.72);
    var kx=mob?w*.5:side+cw*.765,ky=mob?92+d*.5:h*.535;
    return {mob:mob,side:side,cw:cw,U:U,d:d,kx:kx,ky:ky,bh:mob?U:h};
  }
  /* bake the turning capsid with its fixed light into an offscreen canvas each frame (cheap: one image, two gradients) */
  function bake(ang,D){
    var S=Math.ceil(D*1.04*dpr);if(off.width!==S){off.width=S;off.height=S}
    oc.setTransform(1,0,0,1,0,0);oc.clearRect(0,0,S,S);oc.globalCompositeOperation="source-over";
    oc.translate(S/2,S/2);oc.rotate(ang);var k=S/1.04;oc.drawImage(img,-k/2,-k/2,k,k);oc.setTransform(1,0,0,1,0,0);
    oc.globalCompositeOperation="source-atop";
    var sh=oc.createRadialGradient(S*.66,S*.3,0,S*.62,S*.36,S*.72);
    sh.addColorStop(0,"rgba(255,246,236,.10)");sh.addColorStop(.35,"rgba(0,0,0,0)");sh.addColorStop(.72,"rgba(4,4,8,.32)");sh.addColorStop(1,"rgba(4,4,8,.62)");
    oc.fillStyle=sh;oc.fillRect(0,0,S,S);oc.globalCompositeOperation="source-over";
    return S;
  }
  /* a fine grain over the whole field breaks the 8-bit banding of the long scrims, so no straight contour can show (DP) */
  var NZ=(function(){var n=document.createElement("canvas");n.width=n.height=128;var x=n.getContext("2d"),d=x.createImageData(128,128),i,v;
    for(i=0;i<d.data.length;i+=4){v=Math.random()*255|0;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=10}x.putImageData(d,0,0);return c.createPattern(n,"repeat")})();
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.025*k)*(1+.04*(1-e));
      var D=G.d*sc,cx=G.kx,cy=G.ky-k*G.d*.012-SP.v*G.d*.08;
      /* a low warm glow and a faint cool rim, painted across the WHOLE canvas so nothing can read as a box (DJ) */
      var gr=Math.max(w,h)*.62,ag=c.createRadialGradient(cx,cy,0,cx,cy,gr);ez(ag,"120,14,10",.34*e,0,12);c.fillStyle=ag;c.fillRect(0,0,w,h);
      var bgx=cx+D*.18,bgy=cy-D*.2,bg=c.createRadialGradient(bgx,bgy,0,bgx,bgy,D*1.1);ez(bg,"30,110,160",.10*e,0,10);c.fillStyle=bg;c.fillRect(0,0,w,h);
      var S=bake(t*Math.PI*2/260,D),Dd=S/dpr;
      c.globalAlpha=e;c.drawImage(off,cx-Dd/2,cy-Dd/2,Dd,Dd);c.globalAlpha=1;
      if(!G.mob){
        var lv=ez(c.createLinearGradient(G.side,0,G.side+G.cw*.6,0),"6,6,7",.9,0,12);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=ez(c.createLinearGradient(0,0,0,h*.34),"6,6,7",.55,0,12);c.fillStyle=tv;c.fillRect(0,0,w,h);
        var bv=ez(c.createLinearGradient(0,h*.55,0,h),"11,11,13",0,.8,12);c.fillStyle=bv;c.fillRect(0,0,w,h);
      }else{
        var tv2=ez(c.createLinearGradient(0,0,0,G.bh*.26),"6,6,7",.5,0,10);c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var mv=ez(c.createLinearGradient(0,G.bh*.78,0,G.bh),"11,11,13",0,1,10);c.fillStyle=mv;c.fillRect(0,G.bh*.78,w,G.bh*.22+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      c.setTransform(1,0,0,1,0,0);c.fillStyle=NZ;c.fillRect(0,0,cv.width,cv.height);c.setTransform(dpr,0,0,dpr,0,0);
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

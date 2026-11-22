/* ================= HERO FIELD: a real photograph of the subject (HOME_BRIEF update 2b): the International Space Station's
   Cupola, looking down at Earth through its seven windows. Eascra has flown six missions to the ISS and manufactures its
   nanoparticles in orbit. NASA photograph on Unsplash (photo-1446776877081-d282a0f896e2, Unsplash License). Cut out with real
   alpha (the black of space falls away into the ink; the rim eases out over a long distance, so no box or ring edge, DP/DJ),
   1500px, drawn at or below native size. It turns very slowly, as the station does, so no pointer response (CZ). On phones it
   sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#060d16";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function ez(g,rgb,a0,a1,n){n=n||8;for(var i=0;i<=n;i++){var u=i/n,s=u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a0+(a1-a0)*s).toFixed(3)+")")}return g}
  function geo(){
    var mw=w>=1800?1560:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-mw)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.round(h*.5):h;
    /* d: the drawn size of the 1500px square cut-out; the Cupola itself fills about 0.9 of it */
    var d=mob?Math.min(w*.8,(U-150)*1.0,1500):Math.min(cw*.44,(h-170)*1.02,1500);
    var kx=mob?w*.5:side+cw*.735,ky=mob?100+(U-170)*.5:Math.max(h*.53,92+d*.5);
    return {mob:mob,side:side,cw:cw,U:U,d:d,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=IN.v<0?0:IN.v>1?1:IN.v;e=e*e*(3-2*e);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a slow sway of ±2.5° over ~60s and a gentle breath */
      var k=.5-.5*Math.cos(t*Math.PI*2/60),rot=(k-.5)*.087,sc=(1+.025*k)*(1+.04*(1-e));
      var dd=G.d*sc,cx=G.kx,cy=G.ky-SP.v*G.d*.05;
      /* earthlight: a low blue glow across the WHOLE canvas (never inside the image rect alone), so nothing reads as a box */
      var ag=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(w,h)*.7);
      ez(ag,"12,58,104",(G.mob?.2:.42)*e,0,14);c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.save();c.translate(cx,cy);c.rotate(rot);c.globalAlpha=e;c.drawImage(img,-dd/2,-dd/2,dd,dd);c.restore();c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=ez(c.createLinearGradient(G.side,0,G.side+G.cw*.6,0),"6,13,22",.92,0,12);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=ez(c.createLinearGradient(0,0,0,h*.3),"6,13,22",.45,0,12);c.fillStyle=tv;c.fillRect(0,0,w,h);
        var bv=ez(c.createLinearGradient(0,h*.62,0,h),"6,13,22",0,.8,12);c.fillStyle=bv;c.fillRect(0,0,w,h);
      }else{
        var tv2=ez(c.createLinearGradient(0,0,0,G.bh*.3),"6,13,22",.5,0,10);c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=ez(c.createLinearGradient(0,G.bh*.8,0,G.bh),"6,13,22",0,1,12);c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

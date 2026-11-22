/* ================= HERO FIELD: a crafted render of the knee joint CX-011 is injected into (HOME_BRIEF update 2c): the distal
   femur and its condyles, the tibial plateau, menisci and fibular head, with the articular cartilage (glossy blue-white) capping
   both bone ends: the tissue CarthroniX aims to regenerate. Ray-marched offline by _kit/home/carthronix/render.py (bone grain,
   ambient occlusion, soft shadows, rims in the logo rust and navy), real alpha (no box edge, DP/DJ), never upscaled; the cut
   shafts fade out along their length. It breathes in a slow drift and moves on its own, so no pointer response (CZ). On phones
   it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1230";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function ez(g,rgb,a0,a1,n){n=n||8;for(var i=0;i<=n;i++){var u=i/n,s=u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a0+(a1-a0)*s).toFixed(3)+")")}return g}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.39,w*.9):h;
    /* the render is 535x1349 (portrait); its ends are transparent fades, the joint line sits at ~42% of its height */
    var ih=mob?(U-64)*1.15:Math.min(h*1.08,1349),iw=ih*(535/1349);
    var kx=mob?w*.5:side+cw*.74,ky=mob?64+(U-64)*.5+ih*.04:h*.6;  /* kx/ky: the image centre, in the open area right of the text */
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
      /* a very slow breath: push in ~3% and drift up a touch over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.02-SP.v*G.ih*.06;
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.75,ggy=G.mob?G.bh*.46:h*.5,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ez(ag,"34,52,128",.5*e,0,12);
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      var hu=.5+.5*Math.sin(t*Math.PI*2/13),hx=x+dw*.5,hy=y+dh*.42,hr=Math.max(w,h)*.5;
      var hg=c.createRadialGradient(hx,hy,0,hx,hy,hr);ez(hg,"150,62,10",(.06+.03*hu)*e,0,12);
      c.fillStyle=hg;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=ez(c.createLinearGradient(G.side,0,G.side+G.cw*.5,0),"7,11,32",.9,0,12);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=ez(c.createLinearGradient(0,0,0,h*.4),"7,11,32",.85,0,12);c.fillStyle=tv;c.fillRect(0,0,w,h);
        var bv=ez(c.createLinearGradient(0,h*.5,0,h),"11,18,48",0,.85,12);c.fillStyle=bv;c.fillRect(0,0,w,h);
      }else{
        var tv2=ez(c.createLinearGradient(0,0,0,G.bh*.3),"7,11,32",.55,0,10);c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=ez(c.createLinearGradient(0,G.bh*.8,0,G.bh),"11,18,48",0,1,10);c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

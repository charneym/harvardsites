/* ================= HERO FIELD: real photography (HOME_BRIEF update 2b): a stained tissue section seen through a microscope
   eyepiece (Pexels photo 36816507, free licence, no attribution needed), graded by grade.py toward the Raiz palette (ink
   shadows, the violet stain pulled toward the logo cyan, highlights held down) and baked to hero.webp. The field of view sits
   right of the headline and bleeds off the right edge (the source photo cuts the circle there); the left side is a strong ink
   scrim, so nothing busy sits behind the H1 or lede. A very slow Ken Burns breath; no pointer response (CZ). On phones it
   sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a0c0f";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.45,w*1.0):h;
    /* the field of view's centre is at (0.527, 0.523) of the render; its diameter is 0.96 of the render width */
    var D=mob?Math.min(U-40,w*1.02):Math.min(h*.98,cw*.6),iw=D/.96,ih=iw*(1606/1500);
    var kx=mob?w-.40*iw:w-.40*iw,ky=mob?(70+U)/2+4:h*.53;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,D:D,bh:mob?U:h};
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
      /* a very slow breath: push in ~4% and drift a touch over ~46s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.527,y=G.ky-dh*.523-k*G.ih*.01-SP.v*G.ih*.06;
      c.save();c.beginPath();c.arc(x+dw*.527,y+dh*.523,dw*.482,0,Math.PI*2);c.clip();
      c.globalAlpha=e*.86;c.drawImage(img,x,y,dw,dh);c.restore();c.globalAlpha=1;
      /* a soft dark rim just inside the field of view, as in an eyepiece */
      var cx0=x+dw*.527,cy0=y+dh*.523,rr=dw*.482,rim=c.createRadialGradient(cx0,cy0,rr*.78,cx0,cy0,rr);
      rim.addColorStop(0,"rgba(10,12,15,0)");rim.addColorStop(1,"rgba(10,12,15,.55)");c.fillStyle=rim;c.beginPath();c.arc(cx0,cy0,rr+1,0,Math.PI*2);c.fill();
      if(!G.mob){
        /* the headline side stays quiet: a navy wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(10,12,15,.96)");lv.addColorStop(.62,"rgba(10,12,15,.7)");lv.addColorStop(1,"rgba(10,12,15,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(10,12,15,.6)");tv.addColorStop(1,"rgba(10,12,15,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(10,12,15,0)");bv.addColorStop(1,"rgba(10,12,15,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(10,12,15,.7)");tv2.addColorStop(1,"rgba(10,12,15,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh*.86,0,G.bh);mv.addColorStop(0,"rgba(10,12,15,0)");mv.addColorStop(1,"rgba(10,12,15,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.86,w,G.bh*.14+1);
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

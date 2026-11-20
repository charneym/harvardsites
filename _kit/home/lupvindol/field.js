/* ================= HERO FIELD: real photography (HOME_BRIEF update, option b): a studio portrait of a husky on black, Pexels photo
   20688806 (Pexels licence, free commercial use), graded to Lupvindol's ink with teal mids (the wolf of their own logo, and the
   dog of their lead programme), baked to hero.webp. The dog sits right of ~60% on desktop with a deep ink wash over the headline side; a very slow Ken Burns drift.
   It moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a0f0e";var IW=1600,IH=2396,EX=.53,EY=.4;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.05):h;
    var ih=mob?U*.98:Math.max(h*1.12,640),iw=ih*(IW/IH);
    var kx=mob?w*.5:Math.max(side+cw*.72,w*.5+iw*.3),ky=mob?U*.43:h*.44;
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
      /* a very slow drift: push in ~4% over ~40s and back, the dog kept on its mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX-k*G.iw*.01,y=G.ky-dh*EY-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(x>0){c.fillStyle=BG;c.fillRect(0,0,Math.ceil(x)+1,h);var eg=c.createLinearGradient(x,0,x+dw*.16,0);eg.addColorStop(0,"rgba(10,15,14,1)");eg.addColorStop(1,"rgba(10,15,14,0)");c.fillStyle=eg;c.fillRect(x,0,dw*.16+1,h)}
      var xr=x+dw;if(xr<w){c.fillStyle=BG;c.fillRect(Math.floor(xr)-1,0,w-xr+2,h);var rg=c.createLinearGradient(xr-dw*.16,0,xr,0);rg.addColorStop(0,"rgba(10,15,14,0)");rg.addColorStop(1,"rgba(10,15,14,1)");c.fillStyle=rg;c.fillRect(xr-dw*.16,0,dw*.16+1,h)}
      if(!G.mob){
        /* the headline side stays quiet: a deep ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(10,15,14,1)");lv.addColorStop(.55,"rgba(10,15,14,.9)");lv.addColorStop(.82,"rgba(10,15,14,.45)");lv.addColorStop(1,"rgba(10,15,14,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(10,15,14,.7)");tv.addColorStop(1,"rgba(10,15,14,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(10,15,14,0)");bv.addColorStop(1,"rgba(10,15,14,.9)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);tv2.addColorStop(0,"rgba(10,15,14,.75)");tv2.addColorStop(1,"rgba(10,15,14,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.7,0,G.bh);mv.addColorStop(0,"rgba(10,15,14,0)");mv.addColorStop(1,"rgba(10,15,14,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.7,w,G.bh*.3+1);
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

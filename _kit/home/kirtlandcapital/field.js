/* ================= HERO FIELD (HOME_BRIEF update 2026-11-20, option b): a real photograph, downtown Cleveland at night, Terminal Tower (the landmark in the firm's own former hero) and Key Tower above the Veterans Memorial Bridge.
   Source: "Cleveland Skyline at Night", Pexels photo 26776496, https://www.pexels.com/photo/cleveland-skyline-at-night-26776496/ (free licence).
   Graded in hero.webp to the site's palette: highlights compressed, exposure lowered, shadows pulled to the page ink so the
   photo melts into it (DJ). It sits right of ~45% on desktop under a deep ink scrim over the headline (DI); a very slow
   Ken Burns drift, no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0d1f1d",K="13,31,29";var IW=2400,IH=1600,EX=.6,EY=.42;
  function A(a){return "rgba("+K+","+a+")"}
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.52,w*1.0):h;
    var ih=mob?U*1.25:Math.max(h*1.08,w*.62*IH/IW),iw=ih*(IW/IH);
    if(mob&&iw<w*1.1){iw=w*1.1;ih=iw*IH/IW}
    var kx=mob?w*.45:w*.74,ky=mob?U*.55:h*.5;
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
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.045*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX-k*G.iw*.012,y=G.ky-dh*EY-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      var fe=Math.min(dw*.24,w*.2);
      if(x>0){c.fillStyle=BG;c.fillRect(0,0,Math.ceil(x)+1,h)}
      var eg=c.createLinearGradient(x,0,x+fe,0);eg.addColorStop(0,A(1));eg.addColorStop(1,A(0));c.fillStyle=eg;c.fillRect(Math.max(0,x)-1,0,fe+2,h);
      var xr=x+dw;if(xr<w+fe){var rg=c.createLinearGradient(xr-fe*.7,0,xr,0);rg.addColorStop(0,A(0));rg.addColorStop(1,A(1));c.fillStyle=rg;c.fillRect(xr-fe*.7,0,fe*.7+1,h);if(xr<w){c.fillStyle=BG;c.fillRect(Math.floor(xr)-1,0,w-xr+2,h)}}
      if(y>0){c.fillStyle=BG;c.fillRect(0,0,w,Math.ceil(y)+1);var tg=c.createLinearGradient(0,y,0,y+dh*.12);tg.addColorStop(0,A(1));tg.addColorStop(1,A(0));c.fillStyle=tg;c.fillRect(0,y-1,w,dh*.12+1)}
      var yb=y+dh;if(yb<h){c.fillStyle=BG;c.fillRect(0,Math.floor(yb)-1,w,h-yb+2)}
      var bfe=dh*.12;var bg2=c.createLinearGradient(0,yb-bfe,0,yb);bg2.addColorStop(0,A(0));bg2.addColorStop(1,A(1));c.fillStyle=bg2;c.fillRect(0,yb-bfe,w,bfe+1);
      if(!G.mob){
        var rv=c.createLinearGradient(w-Math.max(90,w*.1),0,w,0);rv.addColorStop(0,A(0));rv.addColorStop(1,A(.85));c.fillStyle=rv;c.fillRect(w-Math.max(90,w*.1),0,Math.max(90,w*.1)+1,h);
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.72,0);lv.addColorStop(0,A(1));lv.addColorStop(.58,A(.94));lv.addColorStop(.82,A(.55));lv.addColorStop(1,A(0));c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.26);tv.addColorStop(0,A(.78));tv.addColorStop(1,A(0));c.fillStyle=tv;c.fillRect(0,0,w,h*.26);
        var bv=c.createLinearGradient(0,h*.64,0,h);bv.addColorStop(0,A(0));bv.addColorStop(1,A(.94));c.fillStyle=bv;c.fillRect(0,h*.64,w,h*.36+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);tv2.addColorStop(0,A(.78));tv2.addColorStop(1,A(0));c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.62,0,G.bh);mv.addColorStop(0,A(0));mv.addColorStop(1,A(1));c.fillStyle=mv;c.fillRect(0,G.bh*.62,w,G.bh*.38+1);
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

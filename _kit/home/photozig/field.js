/* ================= HERO FIELD: real photography of Photozig's subject (HOME_BRIEF update 2b). A caregiver holds the
   hands of an older woman in a wheelchair: the family caregivers of people with dementia whom every Photozig program serves.
   Black-and-white photograph by Jsme MILA on Pexels (pexels.com/photo/16364308, Pexels licence), graded offline to the
   site's teal ink and bone (hero.webp). The hands sit right of centre, clear of the headline (DI); an ink wash from the left
   keeps the H1 side quiet, and every edge of the photo feathers into the ink (DJ). Slow Ken Burns drift, no pointer
   response (CZ). On phones the photo sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1517",IW=2400,IH=1600,HX=.49,HY=.42; /* the clasped hands, as a fraction of the photo */
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.52,w*1.1):h;
    var ih=mob?U*1.08:Math.max(h*1.16,(w*.62)/(IW/IH)*1.0),iw=ih*IW/IH;
    var fx=mob?w*.56:side+cw*.7,fy=mob?U*.5:h*.48;   /* where the hands land on screen */
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,fx:fx,fy:fy,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function feather(x,y,dw,dh,f){
    /* DJ: each image edge that falls inside the canvas dissolves into the ink */
    var g;
    if(x>-1){g=c.createLinearGradient(x,0,x+dw*f,0);g.addColorStop(0,BG);g.addColorStop(1,"rgba(11,21,23,0)");c.fillStyle=g;c.fillRect(x-1,y-1,dw*f+1,dh+2);c.fillStyle=BG;c.fillRect(0,0,Math.max(0,x),h)}
    if(x+dw<w+1){g=c.createLinearGradient(x+dw,0,x+dw-dw*f,0);g.addColorStop(0,BG);g.addColorStop(1,"rgba(11,21,23,0)");c.fillStyle=g;c.fillRect(x+dw-dw*f,y-1,dw*f+1,dh+2);c.fillStyle=BG;c.fillRect(x+dw,0,w,h)}
    if(y>-1){g=c.createLinearGradient(0,y,0,y+dh*f);g.addColorStop(0,BG);g.addColorStop(1,"rgba(11,21,23,0)");c.fillStyle=g;c.fillRect(0,y-1,w,dh*f+1);c.fillStyle=BG;c.fillRect(0,0,w,Math.max(0,y))}
    if(y+dh<h+1){g=c.createLinearGradient(0,y+dh,0,y+dh-dh*f);g.addColorStop(0,BG);g.addColorStop(1,"rgba(11,21,23,0)");c.fillStyle=g;c.fillRect(0,y+dh-dh*f,w,dh*f+1);c.fillStyle=BG;c.fillRect(0,y+dh,w,h)}
  }
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* Ken Burns: a very slow push in (~4%) with a small drift, eased back and forth over ~46s */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.04*k)*(1+.04*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.fx-dw*HX-k*G.iw*.01,y=G.fy-dh*HY-k*G.ih*.008-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      feather(x,y,dw,dh,.14);
      /* a faint teal light breathing over the hands */
      var pu=.5+.5*Math.sin(t*Math.PI*2/12),pr=Math.min(w,h)*.42;
      var rg=c.createRadialGradient(G.fx,G.fy,0,G.fx,G.fy,pr);rg.addColorStop(0,"rgba(120,220,210,"+((.035+.03*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(120,220,210,0)");
      c.fillStyle=rg;c.fillRect(G.fx-pr,G.fy-pr,pr*2,pr*2);
      if(!G.mob){
        /* the headline side stays quiet (DI): a strong ink wash over 0-55%, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(7,14,15,.95)");lv.addColorStop(.6,"rgba(7,14,15,.74)");lv.addColorStop(1,"rgba(7,14,15,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(7,14,15,.7)");tv.addColorStop(1,"rgba(7,14,15,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(11,21,23,0)");bv.addColorStop(1,"rgba(11,21,23,.9)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);tv2.addColorStop(0,"rgba(7,14,15,.78)");tv2.addColorStop(1,"rgba(7,14,15,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.58,0,G.bh);mv.addColorStop(0,"rgba(11,21,23,0)");mv.addColorStop(1,"rgba(11,21,23,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.58,w,G.bh*.42+1);
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
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.fx,G.fy]:[w/2,h/2]}};
})();

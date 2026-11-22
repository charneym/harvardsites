/* ================= HERO FIELD: real photography (HOME_BRIEF update 2b). Pexels photo 4997378, a parent's hand cradling a
   newborn's feet (Pexels License), graded offline by grade.py toward the logo's indigo ink, with long eased fades baked into
   its alpha on the left, top and bottom edges only (no oval, no box). Desktop: the feet sit centred in the open area right of
   the text (~70% of the content width), the photo always runs past the right edge of the viewport, and an ink wash lives
   only on the text side. A slow Ken Burns breath; it moves on its own, so no pointer response (CZ). Phones: the photo sits
   in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#17143a",FX=.50,FY=.53,AR=1900/1451;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;if(G)G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(260,Math.min(ebt-12,h*.5)):h;
    var kx,ky,dh,dw;
    if(!mob){
      kx=side+cw*.73;ky=h*.56;
      dh=Math.min(h*1.0,cw*.66);dw=dh*AR;
      if((1-FX)*dw<w-kx+8){dw=(w-kx+8)/(1-FX);dh=dw/AR}
    }else{
      kx=w*.56;dw=Math.max(w*1.5,(U-40)*AR);dh=dw/AR;ky=58+(U-58)*.56;
    }
    return {mob:mob,side:side,cw:cw,U:U,dw:dw,dh:dh,kx:kx,ky:ky,bh:mob?U:h};
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
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.04*(1-e));
      var dw=G.dw*sc,dh=G.dh*sc,cx=G.kx-k*G.dw*.006,cy=G.ky-k*G.dh*.008-SP.v*G.dh*.05;
      c.globalAlpha=e;c.drawImage(img,cx-dw*FX,cy-dh*FY,dw,dh);c.globalAlpha=1;
      /* the right edge eases into the ink, so the photo never meets the scrollbar gutter as a line (DJ) */
      var rf=Math.min(220,w*.16),rv=c.createLinearGradient(w-rf,0,w,0);rv.addColorStop(0,"rgba(23,20,58,0)");rv.addColorStop(.55,"rgba(23,20,58,.55)");rv.addColorStop(1,"rgba(23,20,58,1)");c.fillStyle=rv;c.fillRect(w-rf,0,rf,h);
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left that eases out well before the feet */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(15,13,41,.94)");lv.addColorStop(.55,"rgba(15,13,41,.55)");lv.addColorStop(1,"rgba(15,13,41,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.24);tv.addColorStop(0,"rgba(15,13,41,.6)");tv.addColorStop(1,"rgba(15,13,41,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.24);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(23,20,58,0)");bv.addColorStop(1,"rgba(23,20,58,.9)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.24);tv2.addColorStop(0,"rgba(15,13,41,.7)");tv2.addColorStop(1,"rgba(15,13,41,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.24);
        var mv=c.createLinearGradient(0,G.bh*.72,0,G.bh);mv.addColorStop(0,"rgba(23,20,58,0)");mv.addColorStop(1,"rgba(23,20,58,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.72,w,G.bh*.28+1);
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

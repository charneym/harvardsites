/* ================= HERO FIELD: the firm's own photography (HOME_BRIEF update 2026-11-20, option a). A.K. TEK's studio shot of
   one of its miniature machined medical components clamped on a measuring stage under a probe stylus
   (ak-tek.de/wp-content/uploads/2023/10/5D4_0392-klein-3-scaled.jpg, 2560×1707), graded offline to a cool graphite (the bright
   wall at the top pulled down, saturation eased) and drawn here never above its native size. The part is centred in the open
   area right of the headline (DO, 62–75% of the width), every image edge that falls inside the viewport is feathered into the
   page ink over a long distance (DJ/DP), and an ink wash covers the headline side (DI). Slow Ken Burns breath, no pointer
   response (CZ). On phones the part sits in its own band below the nav and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#121416",INK="18,20,22";
  /* the photo's subject (the machined part) in image units: centre and width */
  var NW=2560,NH=1707,FX=.545,FY=.40,PW=.30;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861,dw,kx,ky,top,bot;
    if(!mob){
      var A=OA();top=Math.max(108,h*.13);bot=h-Math.max(40,h*.06);
      /* the part fills ~88% of the open half-width on each side, never upscaled past the photo's native size */
      dw=Math.min(NW,Math.max(2*A.half*.88/PW,h*1.02*NW/NH));kx=A.cx;ky=(top+bot)/2+h*.02;
    }else{
      var ey=document.querySelector("#view .hero .eyebrow"),eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
      top=104;bot=Math.max(250,eyT-40);dw=Math.min(NW,Math.min(w*.78,(bot-top)*1.25)/PW);kx=w*.5;ky=(top+bot)/2+8;
    }
    return {mob:mob,side:side,cw:cw,dw:dw,dh:dw*NH/NW,kx:kx,ky:ky,top:top,bh:mob?bot+30:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  /* an ink ramp from opaque at an inside image edge to clear over len px, drawn in from that edge (and solid beyond it) */
  function feather(x0,y0,x1,y1,len){
    var cs=c,g;
    if(x0>0){g=cs.createLinearGradient(x0,0,x0+len,0);g.addColorStop(0,"rgba("+INK+",1)");g.addColorStop(.35,"rgba("+INK+",.62)");g.addColorStop(1,"rgba("+INK+",0)");cs.fillStyle=g;cs.fillRect(x0,0,len,h);cs.fillStyle=BG;cs.fillRect(0,0,x0+1,h)}
    if(x1<w){g=cs.createLinearGradient(x1,0,x1-len,0);g.addColorStop(0,"rgba("+INK+",1)");g.addColorStop(.35,"rgba("+INK+",.62)");g.addColorStop(1,"rgba("+INK+",0)");cs.fillStyle=g;cs.fillRect(x1-len,0,len,h);cs.fillStyle=BG;cs.fillRect(x1-1,0,w-x1+1,h)}
    if(y0>0){g=cs.createLinearGradient(0,y0,0,y0+len);g.addColorStop(0,"rgba("+INK+",1)");g.addColorStop(.35,"rgba("+INK+",.62)");g.addColorStop(1,"rgba("+INK+",0)");cs.fillStyle=g;cs.fillRect(0,y0,w,len);cs.fillStyle=BG;cs.fillRect(0,0,w,y0+1)}
    if(y1<h){g=cs.createLinearGradient(0,y1,0,y1-len);g.addColorStop(0,"rgba("+INK+",1)");g.addColorStop(.35,"rgba("+INK+",.62)");g.addColorStop(1,"rgba("+INK+",0)");cs.fillStyle=g;cs.fillRect(0,y1-len,w,len);cs.fillStyle=BG;cs.fillRect(0,y1-1,w,h-y1+1)}
  }
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~2.5% about the part and drift a touch over ~46s; the intro settles from 4% larger */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.025*k)*(1+.04*(1-e));
      if(G.dw*sc>NW)sc=NW/G.dw;
      var dw=G.dw*sc,dh=G.dh*sc,x=G.kx-dw*FX+k*dw*.004,y=G.ky-dh*FY-k*dh*.006-SP.v*h*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        feather(x,y,x+dw,y+dh,Math.max(140,Math.min(w,h)*.32));
        /* the headline side stays quiet (DI): a long ink wash from the left; a soft top under the nav and a base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.58,0);lv.addColorStop(0,"rgba(11,12,14,.94)");lv.addColorStop(.55,"rgba(11,12,14,.62)");lv.addColorStop(1,"rgba(11,12,14,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.24);tv.addColorStop(0,"rgba(11,12,14,.66)");tv.addColorStop(1,"rgba(11,12,14,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.24);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba("+INK+",0)");bv.addColorStop(1,"rgba("+INK+",.9)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38+1);
      }else{
        feather(x,y,x+dw,y+dh,Math.max(60,w*.18));
        var tv2=c.createLinearGradient(0,0,0,150);tv2.addColorStop(0,"rgba("+INK+",1)");tv2.addColorStop(.46,"rgba("+INK+",1)");tv2.addColorStop(1,"rgba("+INK+",0)");c.fillStyle=tv2;c.fillRect(0,0,w,150);
        var mv=c.createLinearGradient(0,G.bh-110,0,G.bh);mv.addColorStop(0,"rgba("+INK+",0)");mv.addColorStop(1,"rgba("+INK+",1)");c.fillStyle=mv;c.fillRect(0,G.bh-110,w,111);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  try{document.fonts.ready.then(function(){setTimeout(size,60)})}catch(_){}setTimeout(size,1800);setTimeout(size,4200);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

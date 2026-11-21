/* ================= HERO FIELD: a real photograph of the subject (HOME_BRIEF update 2b, preference (b)): Ian Talmacs,
   "White old fabric on dark background" (Unsplash photo-1677285192836-55fcda3b8fba,
   https://unsplash.com/photos/a-close-up-of-a-white-curtain-on-a-black-background-h17PgQfCMqI, Unsplash licence): the cut
   edge of a white woven textile, its loose fibres lit against black. Silver Shell is a finish for exactly these fabrics.
   Portrait crop on the fringe, graded black -> brand navy -> cool white with a little of the original colour kept
   (hero.py), the bright fabric body faded out on the left and an eased elliptical feather on every edge, so no rectangle
   edge exists (DJ/DP). It drifts in a slow Ken Burns breath with no pointer response (CZ). The fibres sit whole, centred
   in the open area right of the text at ~70% of the width (DO/DP), with an ink wash on the text side (DI). On phones
   they sit in the top band and fade into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#07102a",AR=1260/1500;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.06):h;
    /* the fibres: whole in frame, centred in the open area right of the text */
    var ih=mob?Math.min(U-96,w*.98/AR):Math.min(h*.88,cw*.5/AR),iw=ih*AR;
    var kx=mob?w*.56:side+cw*.71,ky=mob?74+(U-74)*.5:h*.53;
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
      /* a very slow breath: in ~3.5% and a touch of drift over ~46s */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.018-SP.v*G.ih*.05;
      /* a deep teal-navy glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.4:h*.5,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(20,44,96,"+(.52*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(10,24,58,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,16,42,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint cool light moving slowly along the fibres */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=x+dw*.6,py=y+dh*(.25+.5*pu),pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(226,240,255,"+(.035+.035*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(226,240,255,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(4,10,29,.96)");lv.addColorStop(.64,"rgba(4,10,29,.62)");lv.addColorStop(1,"rgba(4,10,29,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(4,10,29,.62)");tv.addColorStop(1,"rgba(4,10,29,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(7,16,42,0)");bv.addColorStop(1,"rgba(7,16,42,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.26);tv2.addColorStop(0,"rgba(4,10,29,.72)");tv2.addColorStop(1,"rgba(4,10,29,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(7,16,42,0)");mv.addColorStop(1,"rgba(7,16,42,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

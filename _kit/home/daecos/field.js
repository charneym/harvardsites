/* ================= HERO FIELD: a real photograph of Daecos's setting (HOME_BRIEF update 2b): a bedside patient monitor on its
   arm, waveforms and numerics live on screen, the place where Daecos's decision support lands. Pexels photo 6291261
   (pexels.com/photo/hospital-monitor-displaying-heart-rate-6291261, free licence), graded by grade.py into the logo's
   violet-black with feathered alpha edges (DJ). Here it breathes in a slow Ken Burns drift; it moves on its own, so no
   pointer response (CZ). Desktop: whole and centred in the open area right of the text (DO). Phones: a top band that fades
   into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b0a0f",AR=1500/1539;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.48,w*1.0):h;
    var ih,iw,kx,ky;
    if(mob){ih=Math.min((U-58)*1.06,(w*.94)/AR);iw=ih*AR;kx=w*.5;ky=74+(U-74)*.5}
    else{
      /* open area: from ~52% of the content width to the right margin; the subject sits centred in it (~68%) */
      var x0=side+cw*.5,x1=w-side*.9,ow=x1-x0;
      ih=Math.min(h*.84,ow*1.02/AR);iw=ih*AR;kx=(x0+x1)/2+cw*.02;ky=h*.53;
    }
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
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.01-SP.v*G.ih*.06;
      /* a low violet glow across the whole canvas so the photo's edges never read as a box (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.45:h*.45,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(52,20,74,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(28,14,40,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,10,15,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the screen's own light, breathing faintly like a live trace */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*.48,py=y+dh*.3,pr=dw*.34;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(187,134,212,"+(.03+.035*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(187,134,212,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(6,5,9,.94)");lv.addColorStop(.7,"rgba(6,5,9,.55)");lv.addColorStop(1,"rgba(6,5,9,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.18);tv.addColorStop(0,"rgba(6,5,9,.6)");tv.addColorStop(1,"rgba(6,5,9,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.18);
        var bv=c.createLinearGradient(0,h*.74,0,h);bv.addColorStop(0,"rgba(11,10,15,0)");bv.addColorStop(1,"rgba(11,10,15,.85)");c.fillStyle=bv;c.fillRect(0,h*.74,w,h*.26+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.24);tv2.addColorStop(0,"rgba(6,5,9,.7)");tv2.addColorStop(1,"rgba(6,5,9,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.24);
        var mv=c.createLinearGradient(0,G.bh*.66,0,G.bh);mv.addColorStop(0,"rgba(11,10,15,0)");mv.addColorStop(1,"rgba(11,10,15,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.66,w,G.bh*.34+1);
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

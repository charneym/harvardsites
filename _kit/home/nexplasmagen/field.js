/* ================= HERO FIELD: a crafted render of NexPlasmaGen's own product (HOME_BRIEF update 2c): the handheld
   applicator of the Convertible Plasma Jet, modelled on their Applicator V5.1 render (polished steel body, dark collar with
   the cable exit, nozzle and needle), held point down and releasing a violet cold plasma jet. Ray-marched offline by
   render.py with alpha, baked to hero.webp; here it drifts in a slow Ken Burns breath while the jet's light flickers softly.
   It moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#140a17",TX=.367,TY=.684;   /* the needle tip, as a fraction of the render */
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(260,Math.min(ebt-12,h*.5)):h;
    var ih=mob?(U-58)*1.06:Math.min(h*.9,cw*.5/.8),iw=ih*.8;
    var kx=mob?w*.5:side+cw*.73,ky=mob?58+(U-58)*.53:h*.53;   /* centre of the render, in the open area right of the text */
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
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low violet glow across the WHOLE canvas (never inside the image rect alone), so no edge can read as a box (DJ) */
      var ggx=x+dw*.45,ggy=y+dh*.6,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(52,18,56,"+(.6*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(32,12,36,"+(.32*e).toFixed(3)+")");ag.addColorStop(1,"rgba(20,10,23,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the jet's light flickers softly, as a cold plasma does */
      var fl=.5+.25*Math.sin(t*7.3)+.15*Math.sin(t*12.1+1.3)+.1*Math.sin(t*2.1),px=x+dw*TX,py=y+dh*(TY+.05),pr=dw*.16;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(214,120,226,"+(.05+.07*fl).toFixed(3)+")");rg.addColorStop(1,"rgba(170,60,170,0)");
      c.globalCompositeOperation="lighter";c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalCompositeOperation="source-over";c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(12,6,14,.92)");lv.addColorStop(.6,"rgba(12,6,14,.5)");lv.addColorStop(1,"rgba(12,6,14,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(12,6,14,.55)");tv.addColorStop(1,"rgba(12,6,14,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(20,10,23,0)");bv.addColorStop(1,"rgba(20,10,23,.85)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.2);tv2.addColorStop(0,"rgba(12,6,14,.7)");tv2.addColorStop(1,"rgba(12,6,14,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.2);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(20,10,23,0)");mv.addColorStop(1,"rgba(20,10,23,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

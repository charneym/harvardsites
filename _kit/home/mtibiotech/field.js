/* ================= HERO FIELD: a crafted render of MTI Biotech's subject (HOME_BRIEF update 2c): the pulmonary arterial tree,
   the vessels 2-HOBA is being developed to protect in pulmonary hypertension (NHLBI STTR R42HL158393). The pulmonary trunk
   divides at the hila and branches to the arterioles until the vessels fill both lungs. Grown and shaded offline by
   render.py in the logo green #006a53, baked with alpha to hero.webp (no ground of its own, so no box edge: DJ/DP); here it
   breathes in a slow drift, with a faint glow breathing through the vessels. It moves on its own, so no
   pointer response (CZ). On phones it sits whole in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#06140f",AR=1052/1125;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){
      var U=Math.max(300,h*.44),ih=Math.min(U-78,(w-40)/AR),iw=ih*AR;
      return {mob:mob,side:side,cw:cw,ih:ih,iw:iw,kx:w*.5,ky:72+(U-78)/2,bh:U};
    }
    /* desktop: whole tree centred in the open area right of the text (~72% of the width), clear of the nav (DO/DP) */
    var top=104,ih2=Math.min(h-top-56,cw*.44/AR,1125),iw2=ih2*AR;
    return {mob:mob,side:side,cw:cw,ih:ih2,iw:iw2,kx:side+cw*.735,ky:top+(h-top-56)/2+4,bh:h};
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
      /* a very slow breath: ~2.5% in and out over ~40s, like a lung at rest slowed right down */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2,y=G.ky-dh/2-SP.v*G.ih*.05;
      /* a low green glow across the WHOLE canvas (never inside the image rect alone), long and eased (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.5:G.ky,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(10,58,44,"+(.42*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(8,34,26,"+(.22*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,20,15,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a slow glow breathing through the vessels themselves (the image added onto itself), never a shape of its own */
      if(!RM){var al=.07*(.5-.5*Math.cos(t*Math.PI*2/9));c.save();c.globalCompositeOperation="lighter";c.globalAlpha=e*al;c.drawImage(img,x,y,dw,dh);c.restore()}
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(4,13,10,.9)");lv.addColorStop(.6,"rgba(4,13,10,.5)");lv.addColorStop(1,"rgba(4,13,10,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(4,13,10,.55)");tv.addColorStop(1,"rgba(4,13,10,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(6,20,15,0)");bv.addColorStop(1,"rgba(6,20,15,.8)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.22);tv2.addColorStop(0,"rgba(4,13,10,.6)");tv2.addColorStop(1,"rgba(4,13,10,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.22);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh+24);mv.addColorStop(0,"rgba(6,20,15,0)");mv.addColorStop(1,"rgba(6,20,15,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+25);
        c.fillStyle=BG;c.fillRect(0,G.bh+24,w,h-G.bh);
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

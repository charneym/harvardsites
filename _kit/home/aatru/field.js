/* ================= HERO FIELD: Aatru's own product photograph of npSIMS (aatru.com, Main_Image_npSIMS: the pump unit
   with its activation tabs, tubing and the silicone-gasket dressing), cut out on real alpha, the product logo panel of
   the original removed. Drawn on the page ink (#07163a) with real alpha, so no box edge can show (DJ/DP). Shown whole and
   sharp at or below its native 496x383 px in the open area right of the headline (DO/DP), one calm object (DS), the device
   itself and never a wound (DT). A soft floor shadow and a low cyan glow (npSIMS cyan) sit under it; a very slow drift
   only (Ken Burns), no pointer motion (CZ). On phones it stands in the top band above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#07163a",AR=1,NH=383;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.8):h;
    /* the console stands whole in the open area right of the text, fully below the nav with headroom (DO/DP/DQ) */
    var ih=mob?Math.min(NH,Math.max(150,U-112),w*.82/AR):Math.min(h*.5,NH,cw*.36/AR),iw=ih*AR;
    var kx=mob?w*.5:side+cw*.75,ky=mob?90+ih*.5:Math.max(h*.52,140+ih*.5);
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
      /* a very slow breath: grow ~3% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(.97+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.5:G.ky,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(0,166,206,"+(.13*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(16,39,90,"+(.32*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,22,58,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      if(G.mob){
        /* phones: the glow eases back to the ink over the lower half of the band, under the device, so the canvas mask
           below it never shows a line */
        var mv=c.createLinearGradient(0,G.bh*.45,0,G.bh*.99);[[0,0],[.2,.05],[.4,.18],[.6,.42],[.8,.75],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(7,22,58,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.45,w,G.bh*.54+1);
        c.fillStyle=BG;c.fillRect(0,G.bh*.99,w,h-G.bh*.99+1);
      }
      /* a soft floor shadow under the pump and dressing, an ellipse feathered to nothing */
      var sx=x+dw*.55,sy=y+dh*.985,sr=dw*.62;c.save();c.translate(sx,sy);c.scale(1,.09);
      var sg=c.createRadialGradient(0,0,0,0,0,sr);sg.addColorStop(0,"rgba(2,8,24,"+(.55*e).toFixed(3)+")");sg.addColorStop(.6,"rgba(2,8,24,"+(.2*e).toFixed(3)+")");sg.addColorStop(1,"rgba(2,8,24,0)");
      c.fillStyle=sg;c.fillRect(-sr,-sr,sr*2,sr*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint pale sheen breathing across the console */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.4+.15*pu),py=y+dh*.35,pr=dw*.35;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(220,240,250,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(220,240,250,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);[[0,.95],[.25,.92],[.42,.82],[.56,.62],[.68,.4],[.79,.2],[.89,.07],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(5,15,41,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(5,15,41,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.4,0],[.65,.05],[.85,.18],[1,.4]].forEach(function(q){bv.addColorStop(q[0],"rgba(7,22,58,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(5,15,41,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
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

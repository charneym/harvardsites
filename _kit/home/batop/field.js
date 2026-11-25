/* ================= HERO FIELD: a crafted render of BATOP's own product (HOME_BRIEF update 2c): a 4-inch LT-GaAs wafer
   with customized metal structures (batop.de, Custom devices): a polished single-crystal GaAs disc with its primary flat,
   a grid of dies each carrying gold photoconductive-antenna electrodes, dicing streets and a bare edge ring, lit by a soft
   studio panel and a brand-blue fill. Modelled and rendered offline (render/wafer.html, three.js physical materials,
   matted from black and white backgrounds, render/comp.py), so it sits on the page ink as real alpha with no box (DP/DJ).
   Here it breathes in a very slow drift, with no pointer response. On phones it sits in the top band above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1520",AR=1.5;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    /* the wafer: whole, in the open area right of the text (DO/DP) */
    var iw=mob?Math.min(w*.84,(h*.4-150)*AR):Math.min(cw*.5,h*.62*AR,900),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.73,ky=mob?104+ih*.5:Math.max(h*.53,120+ih*.5);
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
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.73,ggy=G.mob?G.ky:h*.46,ggr=G.mob?G.ih*.85:Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(16,58,96,"+(.42*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(14,34,54,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,21,32,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a soft shadow pool under the wafer, so it rests rather than floats */
      var fx=x+dw*.52,fy=y+dh*.72,fr=dw*.62;c.save();c.translate(fx,fy);c.rotate(.5);c.scale(1,.22);var fg=c.createRadialGradient(0,0,0,0,0,fr);
      fg.addColorStop(0,"rgba(4,9,15,"+(.55*e).toFixed(3)+")");fg.addColorStop(.6,"rgba(6,12,20,"+(.25*e).toFixed(3)+")");fg.addColorStop(1,"rgba(11,21,32,0)");
      c.fillStyle=fg;c.fillRect(-fr,-fr,fr*2,fr*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint blue sheen breathes over the wafer */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*.52,py=y+dh*.5,pr=dw*.34;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(79,176,236,"+(.02+.025*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(79,176,236,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);[[0,.95],[.25,.92],[.42,.82],[.56,.62],[.68,.4],[.79,.2],[.89,.07],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(8,16,25,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(8,16,25,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.025],[.4,.1],[.6,.24],[.8,.48],[1,.85]].forEach(function(q){bv.addColorStop(q[0],"rgba(11,21,32,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(8,16,25,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(11,21,32,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

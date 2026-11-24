/* ================= HERO FIELD: a crafted render of the real mechanism ImmunOs targets: an HLA class I molecule (heavy
   chain pale, beta-2-microglobulin teal) bound by the inhibitory receptor LILRB1 / ILT2 (logo orange), drawn space-filling
   from its published crystal structure (RCSB PDB 1P7Q, chains A, B and D, heavy atoms; render/br.html, three.js), on
   real alpha. IOS-1002 is itself an HLA-based molecule that binds LILRB1, LILRB2 and KIR3DL1. Shown whole and sharp at or
   below its native 1286x1464 px in the open area right of the headline (DO/DP), on the teal ink with a soft orange glow.
   One calm object (DS), no disease imagery (DT). A very slow breath only. On phones it stands in the top band. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#10343a",AR=1;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.8):h;
    /* the console stands whole in the open area right of the text, fully below the nav with headroom (DO/DP/DQ) */
    var ih=mob?Math.max(150,U-118):Math.min(h*.74,1860,cw*.36/AR),iw=ih*AR;
    var kx=mob?w*.5:side+cw*.76,ky=mob?90+ih*.5:Math.max(h*.53,128+ih*.5);
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
      var ggx=G.kx,ggy=G.mob?G.bh*.5:G.ky,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(255,127,0,"+(.2*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(29,74,80,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(16,52,58,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint pale sheen breathing across the console */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.4+.15*pu),py=y+dh*.35,pr=dw*.35;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,236,214,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,236,214,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);[[0,.95],[.25,.92],[.42,.82],[.56,.62],[.68,.4],[.79,.2],[.89,.07],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(11,39,44,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(11,39,44,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.4,0],[.65,.05],[.85,.18],[1,.4]].forEach(function(q){bv.addColorStop(q[0],"rgba(16,52,58,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(11,39,44,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.9,0,G.bh*1.4);[[0,0],[.2,.08],[.4,.26],[.6,.52],[.8,.8],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(16,52,58,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.9,w,G.bh*.5+1);
        c.fillStyle=BG;c.fillRect(0,G.bh*1.4,w,h-G.bh*1.4+1);
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

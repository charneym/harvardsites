/* ================= HERO FIELD: a crafted render of ChromaTwist's real product (HOME_BRIEF update 2c): seven quartz
   cuvettes of their large Stokes shift dyes in solution, all excited by the same UV beam and fluorescing from violet-blue
   to red on a black bench, the subject of the photograph on their own home page. Ray traced offline by render.py on pure
   black and composited additively ("lighter") onto the ink, so the render has no edge that could read as a box (DJ/DP).
   Here it breathes in a slow Ken Burns drift and the fluorescence pulses very gently. It moves on its own, so no pointer
   response (CZ). On phones it sits in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#07070c";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* the subject (the row of cuvettes and their glow) spans x .2-.87, y .23-.82 of the 1500x1125 render; centre (.535,.52) */
  var SCX=.535,SCY=.52,SW=.67,SH=.59;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1600)/2),cw=w-2*side,mob=w<861;
    /* phones: the band between the header and the eyebrow holds the whole row, with room to spare (CW/DO) */
    var eb=$(".hero .eyebrow"),U=h;
    if(mob){U=eb?eb.getBoundingClientRect().top+(window.scrollY||0)-12:h*.36;U=Math.max(U,230)}
    var sw=mob?Math.min(w*.9,(U-80)*1.06/SH*SW):Math.min(cw*.43,(h-170)*.95/SH*SW);
    var iw=sw/SW,ih=iw*.75;
    var kx=mob?w*.5:side+cw*.735,ky=mob?74+(U-74)*.5:h*.55;
    return {mob:mob,side:side,cw:cw,U:U,iw:iw,ih:ih,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.globalCompositeOperation="source-over";c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~3% and drift a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.04*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*SCX,y=G.ky-dh*SCY-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low violet haze over the WHOLE canvas (never the image rect alone), like UV scatter in a dark lab */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.5:G.ky,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(40,22,78,"+(.42*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(20,14,40,"+(.22*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,7,12,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalCompositeOperation="lighter";
      var pu=.5+.5*Math.sin(t*Math.PI*2/9);
      c.globalAlpha=e*(.93+.07*pu);c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      c.globalCompositeOperation="source-over";
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left that eases out over a long distance */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(7,7,12,.92)");lv.addColorStop(.55,"rgba(7,7,12,.55)");lv.addColorStop(1,"rgba(7,7,12,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(7,7,12,.6)");tv.addColorStop(1,"rgba(7,7,12,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(7,7,12,0)");bv.addColorStop(1,"rgba(7,7,12,.85)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.22);tv2.addColorStop(0,"rgba(7,7,12,.7)");tv2.addColorStop(1,"rgba(7,7,12,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.22);
        var mv=c.createLinearGradient(0,G.bh-10,0,G.bh+90);mv.addColorStop(0,"rgba(7,7,12,0)");mv.addColorStop(1,"rgba(7,7,12,1)");c.fillStyle=mv;c.fillRect(0,G.bh-10,w,101);
        c.fillStyle=BG;c.fillRect(0,G.bh+90,w,h);
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

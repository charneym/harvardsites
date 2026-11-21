/* ================= HERO FIELD: Kneevoice's own product (HOME_BRIEF update 2a): the Cartilage Evaluation System console with its
   two knee sensors docked, from the company's own product render (assets on kneevoice.com, real alpha, 374x557). It stands whole
   in the open area right of the headline (DO/DP), never above its native size, on the brand navy sampled from their site, with a
   soft floor shadow and a cool light behind it painted across the WHOLE canvas (no box edge, DJ). It drifts very slowly on its own
   (a gentle float and breath), so no pointer response (CZ). On phones it sits in the top band, clear of the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#081e2e",NW=374,NH=557;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function maxw(){var m=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--maxw"));return m>0?m:1320}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-maxw())/2),cw=w-2*side,mob=w<861;
    var top=mob?80:118,U=mob?h*.44:h;
    /* desktop: the device stands at ~69% of the width, never above native size, with headroom under the nav and a floor below */
    var ih=mob?Math.min(NH*.9,U-top-12):Math.min(NH,(h-top-110)*1,cw*.42/(NW/NH));
    var iw=ih*NW/NH;
    var kx=mob?w*.5:side+cw*.74,ky=mob?top+ih/2+4:Math.max(top+ih/2,h*.52);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U+30:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* a cool light behind the device, over the whole canvas, easing out over a long distance (no line) */
    var ggx=G.kx,ggy=G.ky-G.ih*.08,ggr=Math.max(w,h)*(G.mob?.9:.62);
    var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
    ag.addColorStop(0,"rgba(38,84,112,"+(.62*e).toFixed(3)+")");ag.addColorStop(.3,"rgba(22,58,82,"+(.42*e).toFixed(3)+")");
    ag.addColorStop(.62,"rgba(12,38,56,"+(.18*e).toFixed(3)+")");ag.addColorStop(1,"rgba(8,30,46,0)");
    c.fillStyle=ag;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow float (~9s) and breath (~40s); the drawn size stays at or below native (sharp, never upscaled) */
      var fl=Math.sin(t*Math.PI*2/9),k=.5-.5*Math.cos(t*Math.PI*2/40);
      var sc=(.965+.035*k)*(1-.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2,y=G.ky-dh/2+fl*4-SP.v*G.ih*.08+(1-e)*18;
      /* the floor shadow: a wide soft ellipse under the stand, breathing with the float */
      var fx=G.kx-dw*.06,fy=G.ky+G.ih*.5+6,fr=dw*.62;
      c.save();c.translate(fx,fy);c.scale(1,.16);
      var sg=c.createRadialGradient(0,0,0,0,0,fr);sg.addColorStop(0,"rgba(2,10,18,"+(.75*e*(1-.12*fl)).toFixed(3)+")");sg.addColorStop(.55,"rgba(2,10,18,"+(.32*e).toFixed(3)+")");sg.addColorStop(1,"rgba(2,10,18,0)");
      c.fillStyle=sg;c.fillRect(-fr,-fr,fr*2,fr*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the screen breathes faintly, like a console waiting for the next patient */
      var pu=.5+.5*Math.sin(t*Math.PI*2/6),px=x+dw*.58,py=y+dh*.32,pr=dw*.5;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(207,226,32,"+(.035+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(207,226,32,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!G.mob){
      /* the headline side stays quiet (DI): an ink wash from the left that eases out long before the device */
      var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(5,21,34,.9)");lv.addColorStop(.5,"rgba(5,21,34,.55)");lv.addColorStop(1,"rgba(5,21,34,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(8,30,46,0)");bv.addColorStop(1,"rgba(8,30,46,.8)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
    }else{
      var m0=G.ky+G.ih*.5+12,m1=m0+90;
      var mv=c.createLinearGradient(0,m0,0,m1);mv.addColorStop(0,"rgba(8,30,46,0)");mv.addColorStop(1,"rgba(8,30,46,1)");c.fillStyle=mv;c.fillRect(0,m0,w,m1-m0+1);
      c.fillStyle=BG;c.fillRect(0,m1,w,h);
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

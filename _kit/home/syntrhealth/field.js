/* ================= HERO FIELD: the firm's own product photography (HOME_BRIEF update, option a): Syntr's studio image of the
   SyntrFPU 360, the accessory device that spins the SyntrFuge AdipoSets (syntrhealth.com, SyntrFPU360-Transparent-edit-1.png),
   cut out with real alpha, so it stands on the page ink with no rectangle at all (DP/DJ). Graded slightly down in hero.webp so the
   white housing never glares. It sits whole in the open area right of the headline (~70% of the width, DO), never larger than
   its native 500px (sharp, DP), with a soft teal light from the logo behind it painted across the whole canvas, and a very
   slow Ken Burns breath. It moves on its own, so no pointer response (CZ). On phones it sits in the top band, above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#061520",IW=500,IH=432,ET=0;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    var iw,ih,kx,ky;
    if(mob){var eb=document.querySelector('#hero .eyebrow'),tt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):0;ET=tt;if(!(tt>200))tt=h*.35;
      var top=84,bot=tt-26;ih=Math.min((bot-top)*.94,w*.66*IH/IW);iw=ih*IW/IH;kx=w*.5;ky=(top+bot)/2}
    else{iw=Math.min(IW*.96,cw*.31,h*.5*IW/IH);ih=iw*IH/IW;kx=Math.min(w*.715,w-side-iw*.55);ky=h*.52}
    return {mob:mob,side:side,cw:cw,U:U,iw:iw,ih:ih,kx:kx,ky:ky,bh:mob?U:h};
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
      /* a very slow breath: about 3% over ~40s, eased back and forth (never past the native size) */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2,y=G.ky-dh/2-k*G.ih*.01-SP.v*G.ih*.08;
      /* the logo teal as a soft light behind the device, across the WHOLE canvas, easing out over a long distance */
      var ggx=G.kx,ggy=G.ky-G.ih*.05,ggr=Math.max(w,h)*(G.mob?.9:.62);
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(24,127,147,"+(.34*e).toFixed(3)+")");ag.addColorStop(.3,"rgba(16,84,104,"+(.2*e).toFixed(3)+")");
      ag.addColorStop(.65,"rgba(10,40,56,"+(.08*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,21,32,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a soft pool of light on the floor it stands on */
      c.save();c.translate(G.kx,y+dh*.97);c.scale(1,.16);var fr=dw*.62;
      var fg=c.createRadialGradient(0,0,0,0,0,fr);fg.addColorStop(0,"rgba(92,202,214,"+(.16*e).toFixed(3)+")");fg.addColorStop(1,"rgba(92,202,214,0)");
      c.fillStyle=fg;c.fillRect(-fr,-fr,fr*2,fr*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left that eases out long before the device */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.56,0);lv.addColorStop(0,"rgba(6,21,32,.92)");lv.addColorStop(.6,"rgba(6,21,32,.55)");lv.addColorStop(1,"rgba(6,21,32,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.74,0,h);bv.addColorStop(0,"rgba(6,21,32,0)");bv.addColorStop(1,"rgba(6,21,32,.7)");c.fillStyle=bv;c.fillRect(0,h*.74,w,h*.26+1);
      }else{
        var my=G.ky+G.ih*.58,mv=c.createLinearGradient(0,my,0,my+h*.4);mv.addColorStop(0,"rgba(6,21,32,0)");mv.addColorStop(1,"rgba(6,21,32,.9)");c.fillStyle=mv;c.fillRect(0,my,w,h);
      }
      if(G.mob&&!(ET>200)){G=geo()}
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

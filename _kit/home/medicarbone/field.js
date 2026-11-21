/* ================= HERO FIELD (HOME_BRIEF update, option c: a crafted render of the real product): MediCarbone's intramedullary
   sleeve, a carbon-fibre braid tube (medicarbone.com/our-technology), rendered offline by home/medicarbone/render.py with real
   alpha, so it sits on the page ink with no box or seam (DJ/DP). A faint blue in the braid gaps stands for the diffusive light
   guide used to photocure the resin. Desktop: the whole sleeve stands in the open area right of the text (~70% of the content
   width), below the nav with headroom (DO). Phones: it is turned to lie across the top band, above the text (CW).
   A very slow drift; it moves on its own, so no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#12151c",IW=1300,IH=2000,SUBH=.774;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){
      /* the sleeve turned to ~20deg, its height kept inside the band the template leaves above the text (34svh) */
      var sc=Math.max(.12,Math.min(w*.84/1560,(h*.34-114)/718)),ext=sc*718,ky=76+ext/2+14,ih=IH*sc,iw=IW*sc;
      return {mob:true,side:side,cw:cw,U:ky+ext/2+24,ih:ih,iw:iw,kx:w*.5,ky:ky,rot:53*Math.PI/180,bh:ky+ext/2+24};
    }
    var top=Math.max(118,h*.13),bot=h*.95,sh=Math.min(bot-top,h*.8),ih=sh/SUBH,iw=ih*IW/IH;
    return {mob:false,side:side,cw:cw,U:h,ih:ih,iw:iw,kx:side+cw*.71,ky:top+(bot-top)/2,rot:0,bh:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* a soft rose light behind the sleeve, eased out over a long radius so it never ends on a line */
    var gr=(G.mob?w*.62:G.ih*.5),gx=G.kx,gy=G.ky-SP.v*G.ih*.04;
    var rg=c.createRadialGradient(gx,gy,0,gx,gy,gr);
    rg.addColorStop(0,"rgba(216,178,164,"+(.085*e).toFixed(3)+")");rg.addColorStop(.35,"rgba(216,178,164,"+(.05*e).toFixed(3)+")");
    rg.addColorStop(.7,"rgba(216,178,164,"+(.014*e).toFixed(3)+")");rg.addColorStop(1,"rgba(216,178,164,0)");
    c.fillStyle=rg;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow drift: push in ~3% over ~40s and back, a breath of float, the sleeve kept on its mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.04*(1-e)),fl=Math.sin(t*Math.PI*2/26)*G.ih*.004;
      var dw=G.iw*sc,dh=G.ih*sc;
      c.save();c.translate(G.kx,G.ky+fl-SP.v*G.ih*.04+(1-e)*G.ih*.015);if(G.rot)c.rotate(G.rot);
      c.globalAlpha=e;c.drawImage(img,-dw/2,-dh/2,dw,dh);c.restore();c.globalAlpha=1;
      if(G.mob){
        var mv=c.createLinearGradient(0,G.bh*.93,0,G.bh*1.06);mv.addColorStop(0,"rgba(18,21,28,0)");mv.addColorStop(1,"rgba(18,21,28,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.93,w,G.bh*.13+1);
        c.fillStyle=BG;c.fillRect(0,G.bh*1.06,w,h-G.bh*1.06+1);
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

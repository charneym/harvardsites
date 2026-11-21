/* ================= HERO FIELD: a crafted render of the physics under every UN&UP platform (HOME_BRIEF update 2c): a
   nickel-plated bar magnet on a dark plate, with iron filings tracing its real dipole field ("breakthrough magnetic
   therapeutic and robotic solutions", unandup.com). Rendered offline by render.py (field computed from a two-pole model,
   filings laid in chains along evenly spaced field lines), graded to the site's teal on black, baked with real alpha to
   hero.webp; here it breathes in a slow Ken Burns drift and turns a few degrees, like a plate under a moving light. It moves
   on its own, so no pointer response (CZ). On phones it sits whole in the top band, above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#04080a";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var eb=document.querySelector('.hero .eyebrow'),et=eb?eb.getBoundingClientRect().top+(window.scrollY||0):0;
    var U=mob?Math.max(200,(et>200&&et<h?et:h*.44)-64-16):h;
    /* the render is square, the magnet at its centre; the filings fade out by ~0.45 of its width from the centre */
    var ih=mob?Math.min(U/.84,w*1.04):Math.min(h*.8,cw*.46),iw=ih;
    var kx=mob?w*.5:side+cw*.72,ky=mob?64+U*.5+4:Math.max(h*.54,96+ih*.47);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U+64:h};
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
      /* a very slow breath: push in ~3% and turn ~2 degrees over ~48s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/48),sc=(1+.03*k)*(1+.035*(1-e)),rot=(k-.5)*.035;
      var dw=G.iw*sc,dh=G.ih*sc,yy=G.ky-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low teal glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge can read as a box (DJ) */
      var ggx=G.kx,ggy=yy,ggr=Math.max(w,h)*.6;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(10,52,56,"+(.42*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(6,26,30,"+(.22*e).toFixed(3)+")");ag.addColorStop(1,"rgba(4,8,10,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.save();c.globalAlpha=e;c.translate(G.kx,yy);c.rotate(rot);c.drawImage(img,-dw/2,-dh/2,dw,dh);
      /* a faint cool glint drifting across the plate, like a studio light moving */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=-dw*.18+dw*.36*pu,py=-dh*.12,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(200,240,240,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(200,240,240,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.restore();c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(2,5,6,.92)");lv.addColorStop(.62,"rgba(2,5,6,.5)");lv.addColorStop(1,"rgba(2,5,6,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(2,5,6,.6)");tv.addColorStop(1,"rgba(2,5,6,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(4,8,10,0)");bv.addColorStop(1,"rgba(4,8,10,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,76);tv2.addColorStop(0,"rgba(2,5,6,.7)");tv2.addColorStop(1,"rgba(2,5,6,0)");c.fillStyle=tv2;c.fillRect(0,0,w,76);
        var mv=c.createLinearGradient(0,G.bh*.94,0,G.bh+14);mv.addColorStop(0,"rgba(4,8,10,0)");mv.addColorStop(1,"rgba(4,8,10,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.94,w,G.bh*.06+15);
        c.fillStyle=BG;c.fillRect(0,G.bh+14,w,h-G.bh);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(w)G=geo();if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

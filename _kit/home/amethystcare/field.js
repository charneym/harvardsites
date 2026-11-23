/* ================= HERO FIELD: a crafted render of Amethyst Care's own voice device (HOME_BRIEF update 2c), modelled on
   the product photograph on amethystcare.ie: the round speakerphone with its perforated grille, control icons and green
   LED ring, in three-quarter view on a real alpha channel (render.py), so there is no box edge (DP/DJ). Its LED ring
   breathes slowly, as if listening (led.webp), and the whole drifts in a slow Ken Burns. It moves on its own, so no
   pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#eeedf5",AR=1600/1453,led=new Image(),lok=false;led.decoding="async";led.onload=function(){lok=true};led.src="led.webp";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(260,Math.min(ebt-12,h*.5)):h;
    var iw=mob?Math.min(w*.86,(U-76)*AR*.98):Math.min(cw*.46,h*.74*AR),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.70,ky=mob?72+(U-72)*.5:h*.54;   /* centre of the render, in the open area right of the text */
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
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.04*(1-e)),rt=0;
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky-k*G.ih*.01-SP.v*G.ih*.05;
      c.save();c.translate(cx,cy);c.rotate(rt);c.globalAlpha=e;c.drawImage(img,-dw*.5,-dh*.5,dw,dh);if(lok){c.globalAlpha=e*(.45+.55*(.5-.5*Math.cos(t*Math.PI*2/3.6)));c.drawImage(led,-dw*.5,-dh*.5,dw,dh)}c.restore();c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, eased out well before the console */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.44,0);lv.addColorStop(0,"rgba(238,237,245,.9)");lv.addColorStop(.55,"rgba(238,237,245,.5)");lv.addColorStop(1,"rgba(238,237,245,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);mv.addColorStop(0,"rgba(238,237,245,0)");mv.addColorStop(1,"rgba(238,237,245,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

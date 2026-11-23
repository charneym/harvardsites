/* ================= HERO FIELD: JuneBrain's own product render (HOME_BRIEF update 2a): the Neuro-i SS-OCT base unit with
   its touchscreen and the wearable headset, from junebrain.com. render.py crops it from its studio band, which is a flat
   #edf0f7 (the page ink, so the ground matches exactly), keeps the real soft shadows and feathers every edge into the
   ink (DJ/DP). Drawn at or below its native size, never upscaled; it breathes in a slow Ken Burns drift and the headset's
   light band glows faintly. It moves on its own, so no pointer response (CZ). On phones it sits in the top band (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#edf0f7",NW=940,NH=534;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(250,Math.min(ebt-10,h*.46)):h;
    /* the objects fill ~47% of the render's width and ~75% of its height */
    var sc=mob?Math.min(1,(w*.74)/(NW*.47),(U-96)/(NH*.8)):Math.min(1,(cw*.38)/(NW*.47),(h*.58)/(NH*.75));
    var iw=NW*sc,ih=NH*sc;
    var kx=mob?w*.5:side+cw*.73,ky=mob?88+(U-88)*.5:Math.max(h*.55,110+ih*.42);   /* centre of the objects */
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,sc:sc};
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
      /* slow breath: at most native size (sc<=1 times a 2% swell only when the base scale leaves room) */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),grow=Math.min(1.02,1/G.sc),sc=(1+(grow-1)*k)*(1-.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky-k*G.ih*.008-SP.v*G.ih*.05;
      /* the render's objects are centred at (.49,.5) of the image */
      var x=cx-dw*.49,y=cy-dh*.5;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the headset's light band glows faintly, in the logo's sky blue */
      var pu=.5+.5*Math.sin(t*Math.PI*2/6),gx=x+dw*.575,gy=y+dh*.758,gr=dw*.11;
      var rg=c.createRadialGradient(gx,gy,0,gx,gy,gr);rg.addColorStop(0,"rgba(95,183,231,"+(.05+.06*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(95,183,231,0)");
      c.fillStyle=rg;c.fillRect(gx-gr,gy-gr,gr*2,gr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, eased out well before the device */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(237,240,247,.9)");lv.addColorStop(.55,"rgba(237,240,247,.5)");lv.addColorStop(1,"rgba(237,240,247,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.72,0,G.bh);[[0,0],[.3,.12],[.6,.5],[.85,.88],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(237,240,247,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.72,w,G.bh*.28+1);
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

/* ================= HERO FIELD: OcuSciences' own product image of the OcuMet Beacon (HOME_BRIEF update 2a), from
   ocusciences.com. render.py lifts it off its green wave backdrop and white studio ground onto the page ink #f3f5f9 (so the
   ground matches exactly), keeps the real soft shadow under the base and feathers every edge (DJ/DP). Drawn at or below
   its native size, never upscaled; it breathes in a slow Ken Burns drift and a faint blue light glows at the objective.
   It moves on its own, so no pointer response (CZ). On phones it sits in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#f3f5f9",NW=860,NH=670;
  /* the device fills x .10-.90 and y .06-.91 of the render; its centre sits at (.50,.49) */
  var FX=.80,FY=.85,CX=.50,CY=.49;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(250,Math.min(ebt-10,h*.5)):h;
    /* phones: the whole device sits between the nav (with headroom) and the top of the fade */
    var Hd=U*.74-104;
    var sc=mob?Math.min(1,(w*.72)/(NW*FX),Hd/(NH*FY)):Math.min(1,(cw*.40)/(NW*FX),(h*.6)/(NH*FY));
    var iw=NW*sc,ih=NH*sc;
    var kx=mob?w*.5:side+cw*.71,ky=mob?104+Hd*.5:Math.max(h*.54,120+ih*FY*.5);
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
      var k=.5-.5*Math.cos(t*Math.PI*2/40),grow=Math.min(1.02,1/G.sc),sc=(1+(grow-1)*k)*(1-.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky-k*G.ih*.008-SP.v*G.ih*.05;
      var x=cx-dw*CX,y=cy-dh*CY;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the objective's faint blue light, breathing */
      var pu=.5+.5*Math.sin(t*Math.PI*2/6),gx=x+dw*.265,gy=y+dh*.25,gr=dw*.07;
      var rg=c.createRadialGradient(gx,gy,0,gx,gy,gr);rg.addColorStop(0,"rgba(80,130,210,"+(.06+.08*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(80,130,210,0)");
      c.fillStyle=rg;c.fillRect(gx-gr,gy-gr,gr*2,gr*2);c.globalAlpha=1;
      if(G.mob){
        var mv=c.createLinearGradient(0,G.bh*.72,0,G.bh);[[0,0],[.3,.12],[.6,.5],[.85,.88],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(243,245,249,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.72,w,G.bh*.28+1);
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

/* ================= HERO FIELD: the firm's own photograph (HOME_BRIEF update 2026-11-20, option a). The COPA device held in a hand,
   screen reading DOSE READY / ID FINGER, from berkshirebiomedical.com (img/home-background.jpg), cut out with real alpha so it
   sits on the teal ink with no box edge (DJ/DP); the forearm eases out over a long fade at the foot of the hero, as if the
   hand reaches in from below the frame. Placed in the open area right of the measured headline (>=120px clear), whole and
   below the nav, never upscaled; slow breathing drift, no pointer response (CZ). On phones it sits in the top band below the
   nav and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    /* DP/DO: the photograph lives in the open area right of the measured headline and lede, at least 120px clear of them */
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+120,R=w-side,ox=(L+R)/2,ow=R-L;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#06262d";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/48),cx,top,sc;
      if(!G.mob){var tp=Math.max(118,h*.15);sc=Math.min((h+8-tp)/ih,G.ow*.9/iw,1);cx=G.ox;top=h+8-ih*sc}
      else{sc=Math.min((G.bh-92)/(ih*.7),w*.62/iw,1);cx=w*.5;top=92}
      var s2=(1+.022*k)*(1+.04*(1-e)),dw=iw*sc*s2,dh=ih*sc*s2,x=cx-dw/2-k*dw*.01,y=top-(dh-ih*sc)*.3+(1-e)*24-SP.v*h*.05;
      /* a soft warm light behind the device head (their orange, very low) and a cool teal falloff */
      var gx=cx,gy=y+dh*.24,gr=Math.max(60,Math.min(Math.max(dw*1.5,dh*.62),w-gx-18)),gl=c.createRadialGradient(gx,gy,0,gx,gy,gr);gl.addColorStop(0,"rgba(255,117,70,"+(.075*e)+")");gl.addColorStop(.5,"rgba(111,177,187,"+(.05*e)+")");gl.addColorStop(1,"rgba(6,38,45,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.45,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(3,26,31,.6)");lv.addColorStop(.6,"rgba(3,26,31,.3)");lv.addColorStop(1,"rgba(3,26,31,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(6,38,45,0)");bv.addColorStop(1,"rgba(6,38,45,.6)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.45,0,G.bh);mv.addColorStop(0,"rgba(6,38,45,0)");mv.addColorStop(1,"rgba(6,38,45,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.45,w,G.bh*.55+1);
        c.fillStyle="#06262d";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.ox,G.mob?70+(G.bh-70)*.4:h*.42]:[w/2,h/2]}};
})();

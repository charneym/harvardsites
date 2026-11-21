/* ================= HERO FIELD: IMMA's own product image (HOME_BRIEF update 2026-11-20, option a). The IMMA at-home ultrasound
   device, from imma.health (wp-content/uploads/2025/05/devicemock.png, 521px), cut out along its edges with real alpha so it sits on
   the deep plum ink with no box edge (DJ/DP), drawn at or below native size, over a soft contact shadow and a faint pink glow.
   Placed in the open area right of the measured headline (>=120px clear), whole and below the nav; slow drift and breathing scale,
   no pointer response (CZ). On phones it sits in the top band below the nav and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    /* DP/DO: the molecule lives in the open area right of the measured headline and lede, at least 120px clear of them */
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
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#200b14";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/56),cx,cy,sc;
      if(!G.mob){sc=Math.min(G.ow*.86/iw,(h-170)*.74/ih,.94);cx=G.ox;cy=80+(h-80)*.5}
      else{sc=Math.min(w*.8/iw,(G.bh-78)*.62/ih);cx=w*.5;cy=70+(G.bh-70)*.43}
      sc*=(1+.035*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2-k*dw*.012,y=cy-dh/2+k*dh*.008-SP.v*h*.04;
      /* a faint pink glow behind the device and a soft contact shadow under its base */
      var gl=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(dw,dh)*.8);gl.addColorStop(0,"rgba(254,51,133,"+(.13*e)+")");gl.addColorStop(.55,"rgba(140,16,79,"+(.07*e)+")");gl.addColorStop(1,"rgba(32,11,20,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      var sx=x+dw*.53,sy=y+dh*.885;c.save();c.translate(sx,sy);c.rotate(-.2);c.scale(1,.16);var sh=c.createRadialGradient(0,0,0,0,0,dw*.42);sh.addColorStop(0,"rgba(8,2,5,"+(.85*e)+")");sh.addColorStop(.6,"rgba(8,2,5,"+(.4*e)+")");sh.addColorStop(1,"rgba(8,2,5,0)");
      c.fillStyle=sh;c.beginPath();c.arc(0,0,dw*.42,0,Math.PI*2);c.fill();c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.45,G.ox-G.ow*.5),0);lv.addColorStop(0,"rgba(21,6,12,.7)");lv.addColorStop(.6,"rgba(21,6,12,.35)");lv.addColorStop(1,"rgba(21,6,12,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(32,11,20,0)");bv.addColorStop(1,"rgba(32,11,20,.75)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.6,0,G.bh);mv.addColorStop(0,"rgba(32,11,20,0)");mv.addColorStop(1,"rgba(32,11,20,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.6,w,G.bh*.4+1);
        c.fillStyle="#200b14";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.ox,G.mob?70+(G.bh-70)*.48:80+(h-80)*.5]:[w/2,h/2]}};
})();

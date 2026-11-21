/* ================= HERO FIELD: a crafted render of the real mechanism (HOME_BRIEF update 2026-11-20, option c). The first step
   of the Syracuse Method in an SEM-style view: a track-etched filter with 5 um pores, flattened human epithelial cells (too large
   to pass) resting on it, and rod-shaped bacteria on its surface (US 12,344,834 B2; NIH R42GM140530). Raytraced offline from a
   heightfield (membrane.py: SEM edge brightening, directional light, ambient occlusion, false colour from the palette) with real
   alpha and a long eased radial falloff, so it sits on the ink with no box edge (DP/DJ). Placed in the open area right of the
   copy, at least 100px clear of the measured H1 (DP/DO), ink scrim over the left only (DI); slow drift, no pointer response (CZ).
   On phones it sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  var H1R=0;function h1R(){if(H1R)return H1R;var t=document.getElementById("pageTitle");if(!t)return w*.5;var r=0;
    Array.prototype.forEach.call(t.querySelectorAll(".l"),function(l){var rg=document.createRange();rg.selectNodeContents(l);var b=rg.getBoundingClientRect();if(b.right>r)r=b.right});
    if(r>0)H1R=r;return r||w*.5}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();H1R=0;if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#131512";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/56),cx,cy,sc;
      if(!G.mob){var L0=Math.max(h1R()+115,w*.46),R0=w-G.side*.45;sc=Math.min((R0-L0)/iw,(h-150)/ih);cx=Math.min((L0+R0)/2,L0+iw*sc/2);cy=Math.max(h*.54,96+ih*sc/2)}
      else{sc=Math.min(w*.98/iw,(G.bh-84)/ih);cx=w*.5;cy=84+ih*sc/2}
      sc*=(1+.035*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2-k*dw*.012,y=cy-dh/2+k*dh*.008-SP.v*h*.04;
      /* a soft ember glow under the molecule */
      var gl=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(dw,dh)*.72);gl.addColorStop(0,"rgba(201,162,78,"+(.07*e)+")");gl.addColorStop(.6,"rgba(201,162,78,"+(.02*e)+")");gl.addColorStop(1,"rgba(19,21,18,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(h1R()+40,w*.4),0);lv.addColorStop(0,"rgba(13,15,12,.7)");lv.addColorStop(.6,"rgba(13,15,12,.35)");lv.addColorStop(1,"rgba(13,15,12,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(19,21,18,0)");bv.addColorStop(1,"rgba(19,21,18,.75)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.6,0,G.bh);mv.addColorStop(0,"rgba(19,21,18,0)");mv.addColorStop(1,"rgba(19,21,18,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.6,w,G.bh*.4+1);
        c.fillStyle="#131512";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return [w*.7,h*.54]}};
})();

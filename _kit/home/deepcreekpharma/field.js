/* ================= HERO FIELD: a crafted render of the real molecule (HOME_BRIEF update 2026-11-20, option c). Human
   alpha-thrombin bound to the thrombin-binding aptamer, from its X-ray structure (PDB 4DIH, RCSB): the scaffold of Deep Creek
   Pharma's TBA-EFPREX programme (NCI 1R41CA302074). Rendered offline atom by atom (render.py: sphere shading, depth-based ambient
   occlusion; thrombin in the logo green, the aptamer in the logo blue, the thymidines that FdU replaces picked out pale) on a
   transparent ground, so there is no box edge (DJ). Centred in the open area right of the measured headline, ~62-75% of the
   width (DO), with an ink scrim only behind the copy (DI); slow drift, no pointer response (CZ). Phones: top band, fades to ink. */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function hx(){var r=0;$$("#pageTitle .l").forEach(function(l){var b=l.getBoundingClientRect();if(b.width)r=Math.max(r,b.right)});return r}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0a1612";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/56),cx,cy,sc;
      if(!G.mob){var he=hx()||w*.48,L=Math.max(he+60,w*.47),R=w-G.side;cx=Math.max(w*.62,Math.min(w*.75,(L+R)/2));
        sc=Math.min(Math.max(Math.min(cx-L,R-cx)*2,w*.24)/iw,h*.72/ih);cy=h*.54}
      else{sc=Math.min(w*.84/iw,G.bh*.66/ih);cx=w*.5;cy=G.bh*.58}
      sc*=(1+.035*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2-k*dw*.012,y=cy-dh/2+k*dh*.008-SP.v*h*.04;
      /* a soft ember glow under the molecule */
      var gl=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(dw,dh)*.72);gl.addColorStop(0,"rgba(76,193,142,"+(.13*e)+")");gl.addColorStop(.6,"rgba(61,149,236,"+(.04*e)+")");gl.addColorStop(1,"rgba(10,22,18,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=.94*e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(8,18,15,.7)");lv.addColorStop(.6,"rgba(8,18,15,.35)");lv.addColorStop(1,"rgba(8,18,15,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(10,22,18,0)");bv.addColorStop(1,"rgba(10,22,18,.75)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.6,0,G.bh);mv.addColorStop(0,"rgba(10,22,18,0)");mv.addColorStop(1,"rgba(10,22,18,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.6,w,G.bh*.4+1);
        c.fillStyle="#0a1612";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:w*.68,G.mob?G.bh*.58:h*.53]:[w/2,h/2]}};
})();

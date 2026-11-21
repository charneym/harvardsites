/* ================= HERO FIELD: the firm's own photography (HOME_BRIEF update 2026-11-20, option a). Myogenica's micrograph from
   myogenica.com/science: a muscle cross-section showing donor-derived human muscle fibres expressing dystrophin (white) in a
   transplanted dystrophin-deficient mouse. Cropped at native resolution (800x701 of the 2500x701 original), pre-multiplied
   offline by a long eased radial mask that reaches pure black well inside every edge, and composited with "screen" onto the
   ink, so black adds nothing and no box edge can exist (DP/DJ). Sits whole, centred right of the copy (DO), at or below native
   size; a slow Ken Burns drift, no pointer response (CZ). On phones it sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    return {mob:mob,side:side,cw:cw,bh:mob?Math.min(h*.45,w*1.0):h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function place(){
    var iw=img.naturalWidth||800,ih=img.naturalHeight||701,sc,cx,cy;
    if(!G.mob){sc=Math.min(1,(h-150)*.92/ih,(w*.5)/iw);cx=w*.71;cy=96+(h-96)*.5}
    else{sc=Math.min(1,w*1.22/iw,(G.bh+40)*1.12/ih);cx=w*.5;cy=98+.41*ih*sc}
    return {iw:iw,ih:ih,sc:sc,cx:cx,cy:cy};
  }
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.globalCompositeOperation="source-over";c.fillStyle="#071d2a";c.fillRect(0,0,w,h);
    if(ok){
      var P=place(),k=.5-.5*Math.cos(t*Math.PI*2/60),sc=P.sc*(1-.03*k)*(1-.04*(1-e));
      var dw=P.iw*sc,dh=P.ih*sc,x=P.cx-dw/2+(k-.5)*dw*.016,y=P.cy-dh/2-(k-.5)*dh*.01-SP.v*h*.04;
      /* a faint brand-blue bloom under the field of view */
      var gl=c.createRadialGradient(P.cx,P.cy,0,P.cx,P.cy,dw*.62);gl.addColorStop(0,"rgba(62,106,143,"+(.2*e)+")");gl.addColorStop(.55,"rgba(62,106,143,"+(.07*e)+")");gl.addColorStop(1,"rgba(62,106,143,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalCompositeOperation="screen";c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;c.globalCompositeOperation="source-over";
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,w*.6,0);lv.addColorStop(0,"rgba(4,20,30,.55)");lv.addColorStop(.7,"rgba(4,20,30,.2)");lv.addColorStop(1,"rgba(4,20,30,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.55,0,G.bh+90);mv.addColorStop(0,"rgba(7,29,42,0)");mv.addColorStop(.55,"rgba(7,29,42,.4)");mv.addColorStop(1,"rgba(7,29,42,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.55,w,G.bh*.45+91);
        c.fillStyle="#071d2a";c.fillRect(0,G.bh+90,w,h);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){if(!G)return [w/2,h/2];var P=place();return [P.cx,P.cy]}};
})();

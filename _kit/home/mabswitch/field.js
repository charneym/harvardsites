/* ================= HERO FIELD (HOME_BRIEF update option c, rule DP): a crafted render of the real subject, ab.py:
   a space-filling model of an antibody binding site gripping its antigen, built atom by atom from the crystal structure
   PDB 1VFB (D1.3 Fv with lysozyme) — light chain grey, heavy chain in the Mabswitch red, antigen gold — shaded with
   depth-based ambient occlusion on a transparent ground, so it sits on the page ink with no box edge (DJ).
   geo() measures the H1/lede right edge and fits the model whole between it + 100px and the right content margin, centred
   at 68-72% of the width, never drawn above its native pixels. A very slow drift; no pointer response (CZ). On phones it
   sits in the top band and fades into the ink before the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#121215";var IW=1356,IH=1716,EX=.5,EY=.5;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* the open area right of the measured H1 and lede: the photo is fitted whole between their right edge + 100px and the
     right content margin, centred at ~68-72% of the width, never drawn larger than its native pixels (DO, DI) */
  function textRight(){var r=0;$$(".hero-h .l, .hero .hero-foot .s").forEach(function(el){var g=document.createRange();g.selectNodeContents(el);var rs=g.getClientRects();for(var i=0;i<rs.length;i++)r=Math.max(r,rs[i].right)});return r}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    if(w>=1800){side=Math.max(Math.min(72,w*.042),(w-1600)/2);cw=w-2*side}
    var U=mob?Math.min(h*.52,w*1.0):h;
    if(mob){var mh=U*.8,mw=mh*(IW/IH);return {mob:true,side:side,cw:cw,U:U,ih:mh,iw:mw,kx:w*.5,ky:U*.58,bh:U}}
    var L=(textRight()||side+cw*.45)+100,R=side+cw,cx=Math.min(Math.max((L+R)/2,w*.68),w*.72);
    var half=Math.max(80,Math.min(cx-L,R-cx));
    /* the elliptical feather reaches zero at the box edge, so the box is the visible extent; kept clear of the nav */
    var iw=Math.min(half*2,(h-250)*(IW/IH),IW/Math.min(window.devicePixelRatio||1,2)),ih=iw*IH/IW;
    return {mob:false,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:cx,ky:h*.50+4,bh:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();setTimeout(function(){G=geo();if(!running)frame(true)},1200);if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow drift: push in ~4% over ~40s and back, the tubes kept on their mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*EX-k*G.iw*.01,y=G.ky-dh*EY-SP.v*G.ih*.05;
      /* a quiet ember of the brand red behind the model, eased out over a long distance (no edge) */
      var gcx=x+dw*.5,gcy=y+dh*.5,gl=c.createRadialGradient(gcx,gcy,0,gcx,gcy,Math.max(dw,dh)*.85);
      gl.addColorStop(0,"rgba(232,30,30,"+(.17*e)+")");gl.addColorStop(.5,"rgba(232,30,30,"+(.05*e)+")");gl.addColorStop(1,"rgba(18,18,21,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the photo self-feathers (elliptical mask) and sits clear of the text; only a soft top under the nav */
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(18,18,21,.7)");tv.addColorStop(1,"rgba(18,18,21,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.3);tv2.addColorStop(0,"rgba(18,18,21,.75)");tv2.addColorStop(1,"rgba(18,18,21,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=c.createLinearGradient(0,G.bh*.7,0,G.bh);mv.addColorStop(0,"rgba(18,18,21,0)");mv.addColorStop(1,"rgba(18,18,21,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.7,w,G.bh*.3+1);
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

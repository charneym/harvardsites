/* ================= HERO FIELD: a crafted render of Ension's real mechanism (HOME_BRIEF update 2c): the bearingless motor of
   the pCAS system, as NIH SBIR 5R44HL178134 describes it: a reusable stator with a ring of copper-wound teeth, and the
   single-use impeller, with its iron rotor rim, levitated above the bore (an exploded view; schematic proportions).
   Ray-marched offline by render.py, baked with alpha to hero.webp, so the page ink is the only ground (DJ/DP). A slow
   Ken Burns breath; it moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into
   the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1315";var IW=886,IH=748;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function ez(g,a0,a1,rgb){for(var i=0;i<=10;i++){var t=i/10,k=t*t*(3-2*t);g.addColorStop(t,"rgba("+rgb+","+(a0+(a1-a0)*k).toFixed(3)+")")}return g}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.44:h;
    /* desktop: the subject centred at ~70% of the width, below the nav with headroom (DO) */
    var iw=mob?Math.min(w*.8,(U-104)*IW/IH):Math.min(cw*.44,(h-190)*.86*IW/IH),ih=iw*IH/IW;
    var kx=mob?w*.5:side+cw*.71,ky=mob?96+ih*.5:Math.max(h*.54,96+ih*.5);
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
      /* a very slow breath: push in ~4% and drift up a touch over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low aqua glow from the logo's tint, painted across the WHOLE canvas (never inside the image rect alone), so no
         edge of the baked render can read as a pasted box (DJ) */
      var ggx=G.kx,ggy=G.ky,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(28,58,64,"+(.55*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(18,36,40,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,19,21,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint aqua sheen breathing over the stator bore, like light moving across machined metal */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.46+.08*pu),py=y+dh*.55,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(168,227,234,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(168,227,234,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=ez(c.createLinearGradient(0,0,G.side+G.cw*.58,0),.92,0,"7,13,14");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=ez(c.createLinearGradient(0,0,0,h*.34),.6,0,"7,13,14");c.fillStyle=tv;c.fillRect(0,0,w,h*.34+1);
        var bv=ez(c.createLinearGradient(0,h*.6,0,h),0,.85,"11,19,21");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var tv2=ez(c.createLinearGradient(0,0,0,G.bh*.3),.7,0,"7,13,14");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3+1);
        var mv=ez(c.createLinearGradient(0,G.bh*.74,0,G.bh),0,1,"11,19,21");c.fillStyle=mv;c.fillRect(0,G.bh*.74,w,G.bh*.26+1);
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

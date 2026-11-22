/* ================= HERO FIELD: a render of Parion's own molecule (HOME_BRIEF update 2c, PRINCIPLES DQ): idrevloride
   (P-1037), the inhaled ENaC blocker, as a glossy ball-and-stick model. Atoms and bonds from PubChem CID 71502876, embedded
   in 3D (embed.py) and ray-traced offline (render.py) with shadows, ambient occlusion and a soft depth of field; atom colours
   are the Parion logo's (oxygen coral, nitrogen blue, the chlorine yellow). Baked with alpha to hero.webp; here it turns
   very slowly in a Ken Burns breath. It moves on its own, so no pointer response (CZ). On phones it sits in the top band
   and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1628";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.44+8:h;  /* phones: the band above the hero text (padding-top 44svh) */
    /* the cluster of cells sits at about (0.5, 0.5) of the render, inside a wide transparent margin */
    var ih=mob?Math.min(U-122,w*.84):Math.min(h*.8,cw*.46),iw=ih;
    var kx=mob?w*.5:side+cw*.76,ky=mob?92+(U-122)*.5:h*.55;  /* kx/ky: the molecule's centre, in the open area right of the text */
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
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.76,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(26,52,92,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(16,32,58,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,22,40,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint warm sheen breathing across the model */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.45+.1*pu),py=y+dh*.45,pr=dw*.2;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,214,206,"+(.04+.04*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,214,206,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(7,15,29,.95)");lv.addColorStop(.62,"rgba(7,15,29,.6)");lv.addColorStop(1,"rgba(7,15,29,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(7,15,29,.6)");tv.addColorStop(1,"rgba(7,15,29,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(11,22,40,0)");bv.addColorStop(1,"rgba(11,22,40,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,84);tv2.addColorStop(0,"rgba(7,15,29,.55)");tv2.addColorStop(1,"rgba(7,15,29,0)");c.fillStyle=tv2;c.fillRect(0,0,w,84);
        var mv=c.createLinearGradient(0,G.bh-22,0,G.bh+40);mv.addColorStop(0,"rgba(11,22,40,0)");mv.addColorStop(1,"rgba(11,22,40,1)");c.fillStyle=mv;c.fillRect(0,G.bh-22,w,63);
        c.fillStyle=BG;c.fillRect(0,G.bh+40,w,h-G.bh);
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

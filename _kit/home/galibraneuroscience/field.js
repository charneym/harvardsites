/* ================= HERO FIELD: a crafted render of Galibra's own product (HOME_BRIEF update 2c): one AAV gene therapy
   vector particle — the delivery platform every Galibra programme is built on (galibraneuroscience.com; NIH STTR
   1R41NS145933 for brain-penetrable AAV). Space-filling molecular render of the T=1 icosahedral capsid: the 5-fold
   cylinder and pore, the canyon, the 3-fold protrusions and the 2-fold dimple, coloured by radius from the site's
   deep teal to the logo green, lit with a shadow map and ambient occlusion. Ray-cast offline by render.py and baked with alpha to hero.webp (no ground of its own, DJ); here
   it drifts in a very slow Ken Burns breath. It moves on its own, so no pointer response (CZ). On phones it sits in the
   top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a1b1f";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    /* on phones the art lives in a band between the nav and the eyebrow, whole and clear of every word (CW) */
    var U=mob?Math.min(h*.42,w*.95):h;
    /* phones show the clamped nuclease itself: the source is cropped to the protein and the helix either side of it,
       so the subject reads large in the short band instead of shrinking to a thumbnail (DB) */
    var SX=0,SY=0,SW=1,SH=1;
    var ar=(1100*SW)/(1100*SH);
    var ih=mob?(U-70)*.75:Math.min(h*.74,cw*.54),iw=ih*ar;
    if(mob&&iw>w*.92){iw=w*.92;ih=iw/ar}
    var kx=mob?w*.5:side+cw*.725,ky=mob?58+ih*.5:h*.515;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,sx:SX,sy:SY,sw:SW,sh:SH};
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
      /* a very slow breath: push in ~4% and drift over ~46s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.04*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low blue glow painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(20,68,72,"+(.52*e).toFixed(3)+")");ag.addColorStop(.52,"rgba(13,42,46,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(10,27,31,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;
      c.drawImage(img,G.sx*img.width,G.sy*img.height,G.sw*img.width,G.sh*img.height,x,y,dw,dh);
      /* a faint cool sheen breathing across the protein surface */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=x+dw*(.46+.08*pu),py=y+dh*.5,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(206,240,224,"+(.035+.035*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(206,240,224,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.64,0);lv.addColorStop(0,"rgba(6,18,21,.95)");lv.addColorStop(.6,"rgba(6,18,21,.62)");lv.addColorStop(1,"rgba(6,18,21,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(6,18,21,.66)");tv.addColorStop(1,"rgba(6,18,21,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.78,0,h);bv.addColorStop(0,"rgba(10,27,31,0)");bv.addColorStop(1,"rgba(10,27,31,.82)");c.fillStyle=bv;c.fillRect(0,h*.78,w,h*.22+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.30);tv2.addColorStop(0,"rgba(6,18,21,.58)");tv2.addColorStop(1,"rgba(6,18,21,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.30);
        /* the art dissolves into the page ink over a long distance, and the glow carries on down the canvas,
           so no band edge can appear where the art ends (DJ) */
        var mv=c.createLinearGradient(0,G.ky+G.ih*.42,0,G.bh);mv.addColorStop(0,"rgba(10,27,31,0)");mv.addColorStop(1,"rgba(10,27,31,.96)");c.fillStyle=mv;c.fillRect(0,G.ky+G.ih*.42,w,G.bh-(G.ky+G.ih*.42)+1);
        
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

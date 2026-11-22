/* ================= HERO FIELD: a crafted render of Nanofiber Solutions' own product (HOME_BRIEF update 2c): the
   flexible, corrugated electrospun vascular graft shown on nanofibersolutions.com and described in their co-authored
   papers (Matsushita et al., JVS Vasc Sci 2020 and 2022), bent in a loose arc with an open end turned to the viewer.
   Sphere-traced offline by render.py (matte white PCL/PLCL textile, ribbed wall, fibre micro-texture, soft shadows and
   occlusion, violet rim light) and baked with real alpha to hero.webp, so it has no ground or box edge of its own (DJ,
   DP). Here it drifts in a very slow Ken Burns breath; it moves on its own, so no pointer response (CZ). On phones it
   sits in the band between the nav and the eyebrow and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#150f24";
  img.decoding="async";img.onload=function(){ok=true;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    /* on phones the art lives in a band between the nav and the eyebrow, whole and clear of every word (CW) */
    var U=mob?Math.min(h*.34,w*.74):h;
    /* phones show the clamped nuclease itself: the source is cropped to the protein and the helix either side of it,
       so the subject reads large in the short band instead of shrinking to a thumbnail (DB) */
    var SX=0,SY=0,SW=1,SH=1;
    var ar=ok?img.width/img.height:1043/901;
    /* desktop: the graft sits whole in the open area right of the text, its centre at ~71% of the content width,
       below the nav with headroom (DO/DQ) */
    var ih=mob?(U-112)*.97:Math.min(h*.66,cw*.38/ar),iw=ih*ar;
    if(mob&&iw>w*.86){iw=w*.86;ih=iw/ar}
    var kx=mob?w*.5:side+cw*.73,ky=mob?98+ih*.5:Math.max(h*.53,92+ih*.5+h*.03);
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
      var ggx=G.mob?w*.5:G.side+G.cw*.73,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(58,34,96,"+(.55*e).toFixed(3)+")");ag.addColorStop(.52,"rgba(34,22,58,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(21,15,36,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;
      c.drawImage(img,G.sx*img.width,G.sy*img.height,G.sw*img.width,G.sh*img.height,x,y,dw,dh);
      /* a faint cool sheen breathing across the protein surface */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=x+dw*(.55+.08*pu),py=y+dh*.5,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(235,225,255,"+(.035+.035*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(235,225,255,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(13,9,24,.95)");lv.addColorStop(.6,"rgba(13,9,24,.62)");lv.addColorStop(1,"rgba(13,9,24,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(13,9,24,.66)");tv.addColorStop(1,"rgba(13,9,24,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.68,0,h);bv.addColorStop(0,"rgba(21,15,36,0)");bv.addColorStop(1,"rgba(21,15,36,.88)");c.fillStyle=bv;c.fillRect(0,h*.68,w,h*.32+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.34);tv2.addColorStop(0,"rgba(13,9,24,.78)");tv2.addColorStop(1,"rgba(13,9,24,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.34);
        var mv=c.createLinearGradient(0,G.bh*.9,0,G.bh);mv.addColorStop(0,"rgba(21,15,36,0)");mv.addColorStop(1,"rgba(21,15,36,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.9,w,G.bh*.1+1);
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

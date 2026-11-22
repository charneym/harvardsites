/* ================= HERO FIELD: a crafted render of Ting's own subject (HOME_BRIEF update 2c, PRINCIPLES DQ): the sensory
   hair cells of the cochlea that Ting's drugs protect, seen from above as in a scanning electron micrograph: a row of inner
   hair cells and three rows of outer hair cells, each crowned by its staircase bundle of stereocilia, on the mosaic of
   supporting cells. Rendered offline by render.py in cool SEM greys on Ting's navy ink, one row of outer hair cells in the logo red #bf2227, baked with real alpha to
   hero.webp; here it breathes in a slow Ken Burns drift. It moves on its own, so no pointer response (CZ). On phones it
   sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b0f1a",AR=1400/965;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var iw,ih,kx,ky,U;
    if(mob){U=Math.min(h*.36,w*.78);ih=Math.min(U-96,w*.92/AR);iw=ih*AR;kx=w*.5;ky=84+ih/2}
    else{iw=Math.min(cw*.46,h*.8*AR,1400);ih=iw/AR;kx=side+cw*.76;ky=h*.54}
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
      /* a very slow breath: push in ~3% and drift a touch over ~46s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5+k*G.iw*.01,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.08;
      /* a low oxblood glow across the WHOLE canvas (never only inside the image rect), so no edge can read as a box (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.5:h*.52,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(30,38,56,"+(.45*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(20,26,40,"+(.22*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,15,26,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint sweep of light across the bundles, like the beam passing over the specimen */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=x+dw*(.25+.5*pu),py=y+dh*.5,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(226,232,242,"+(.035+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(226,232,242,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(7,10,18,.94)");lv.addColorStop(.6,"rgba(7,10,18,.5)");lv.addColorStop(1,"rgba(7,10,18,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(7,10,18,.55)");tv.addColorStop(1,"rgba(7,10,18,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.68,0,h);bv.addColorStop(0,"rgba(11,15,26,0)");bv.addColorStop(1,"rgba(11,15,26,.85)");c.fillStyle=bv;c.fillRect(0,h*.68,w,h*.32+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.2);tv2.addColorStop(0,"rgba(7,10,18,.6)");tv2.addColorStop(1,"rgba(7,10,18,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.2);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(11,15,26,0)");mv.addColorStop(1,"rgba(11,15,26,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

/* ================= HERO FIELD: a crafted render of Treysta's subject (HOME_BRIEF update 2c): a block of human skin cut on two
   faces like the classic anatomical skin section (surface with furrows, pores and fine hairs; epidermis and rete ridges;
   papillary and reticular dermis with its collagen weave, follicles, sebaceous and sweat glands, vessels; the lobules of the
   subcutaneous fat), the tissue whose healing TreystaCare guides. Ray-cast offline by render.py in natural tissue colour with a
   teal rim light from the logo's #08a8b8, baked with alpha to hero.webp; the fat falls away into the ink. Here it breathes in a
   slow Ken Burns drift, centred in the open area right of the text (DO/DP). On phones it sits in the top band (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#081316";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* the block inside hero.webp (1400x1120): bbox x .017-.905, y .22-.86 (alpha), its visual centre at (.46,.53) */
  var BX0=.017,BX1=.905,CX=.465,CY=.52,AR=1120/1400;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.42,w*.86):h;
    var sw=mob?w*.78:Math.min(cw*.5,h*.86),iw=sw/(BX1-BX0),ih=iw*AR;
    var kx=mob?w*.5:side+cw*.71,ky=mob?(64+U)/2+U*.02:h*.5;   /* kx/ky: where the block's centre sits */
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
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*CX,y=G.ky-dh*CY-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low teal glow under the block, painted across the WHOLE canvas so no edge of the render can read as a box (DJ) */
      var ggx=G.kx,ggy=G.mob?G.bh*.5:h*.52,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(12,58,64,"+(.55*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(10,36,40,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(8,19,22,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;if(G.mob)c.filter="brightness(1.18) contrast(1.05)";c.drawImage(img,x,y,dw,dh);c.filter="none";
      /* a faint sheen drifting across the skin surface, like light on moist skin */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=x+dw*(.3+.3*pu),py=y+dh*.33,pr=dw*.2;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,236,226,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,236,226,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.44,0);lv.addColorStop(0,"rgba(5,13,15,.9)");lv.addColorStop(.7,"rgba(5,13,15,.5)");lv.addColorStop(1,"rgba(5,13,15,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(5,13,15,.6)");tv.addColorStop(1,"rgba(5,13,15,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(8,19,22,0)");bv.addColorStop(1,"rgba(8,19,22,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(5,13,15,.55)");tv2.addColorStop(1,"rgba(5,13,15,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(8,19,22,0)");mv.addColorStop(1,"rgba(8,19,22,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

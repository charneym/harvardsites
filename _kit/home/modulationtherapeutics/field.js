/* ================= HERO FIELD: a real scanning electron micrograph (HOME_BRIEF update 2b, preference (b)):
   National Cancer Institute on Unsplash, photo-1581594355548-aab613ebdb69, an oral squamous cancer cell (white) being
   attacked by two cytotoxic T cells (red) (https://unsplash.com/photos/white-and-red-flower-in-black-background-kWAPbD_zaEU,
   Unsplash licence). It is Modulation's own subject: MTI-301's NCI award is "Modulation of cancer induced immune
   suppression", and the drug draws activated T cells into the tumour. grade.py turns the SEM's black ground into real
   alpha with a long eased radial feather, so no rectangle edge exists at any width (DJ/DP); the T cells keep their red,
   which is also the logo red. The photo is fitted between the measured end of the H1/lede + 100px and the right content
   margin, centred near 70% of the width, below the nav with headroom, never above native resolution (DO/DP). It drifts in a
   slow Ken Burns breath; it moves on its own, so there is no pointer response (CZ). On phones it sits whole in the top
   band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0f0a0b",NW=1800,NH=1569,AR=NW/NH;
  img.decoding="async";img.onload=function(){ok=true;size()};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* every wash eases out (smoothstep stops), so no gradient ends on a visible line (DP/DJ) */
  function ez(g,rgb,a0,a1){for(var i=0;i<=12;i++){var t=i/12,k=sm(t);g.addColorStop(t,"rgba("+rgb+","+(a0+(a1-a0)*k).toFixed(3)+")")}return g}
  function textRight(side,cw){
    var r=0;try{var els=document.querySelectorAll("#hero .hero-h .l, #hero .hero-foot p.s, #hero .eyebrow");
      for(var i=0;i<els.length;i++){var el=els[i],rg=document.createRange();rg.selectNodeContents(el);var rs=rg.getClientRects();
        for(var j=0;j<rs.length;j++)if(rs[j].width>0)r=Math.max(r,rs[j].right)}}catch(e){}
    return r>0?r:side+cw*.46;
  }
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){
      /* the whole subject sits between the nav (with headroom) and the top of the hero copy */
      var U=Math.max(300,Math.min(h*.46,w*1.06)),iw=Math.min(cw,(U-74)*AR,NW/dpr),ih=iw/AR;
      return {mob:1,side:side,cw:cw,U:U,iw:iw,ih:ih,kx:w*.5,ky:88+ih*.5,bh:U+10};
    }
    var top=104,bot=36,avH=h-top-bot,L=textRight(side,cw)+100,R=w-side;
    /* the visible subject spans ~4%..93% of the image width */
    var iw=Math.min(avH*AR,(R-L)/.9,NW,cw*.56),ih=iw/AR;
    var kx=side+cw*.70,lv=kx-iw*.48,rv=kx+iw*.43;
    if(lv<L)kx+=L-lv;rv=kx+iw*.43;if(rv>R)kx-=rv-R;
    return {mob:0,side:side,cw:cw,iw:iw,ih:ih,kx:kx,ky:top+avH*.5,bh:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      /* a very slow breath: ~2.5% over ~44s; the scale stays at or below native resolution */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(.975+.025*k)*(1+.02*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.05;
      /* a deep oxblood glow across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.45:h*.52,ggr=Math.max(w,h)*.75;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      for(var q=0;q<=12;q++){var tq=q/12,kq=1-sm(tq);ag.addColorStop(tq,"rgba(52,14,16,"+(.5*e*kq).toFixed(3)+")")}
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a slow warm light moving over the T cells */
      var pu=.5+.5*Math.sin(t*Math.PI*2/12),px=x+dw*(.74+.06*pu),py=y+dh*(.36+.06*pu),pr=dw*.18;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,140,130,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,140,130,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left that eases out over a long distance */
        var lv=ez(c.createLinearGradient(0,0,G.side+G.cw*.7,0),"10,6,7",.9,0);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=ez(c.createLinearGradient(0,0,0,h*.3),"10,6,7",.6,0);c.fillStyle=tv;c.fillRect(0,0,w,h*.3);
        var bv=ez(c.createLinearGradient(0,h*.6,0,h),"15,10,11",0,.8);c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var tv2=ez(c.createLinearGradient(0,0,0,G.bh*.3),"10,6,7",.7,0);c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.3);
        var mv=ez(c.createLinearGradient(0,G.bh*.86,0,G.bh),"15,10,11",0,1);c.fillStyle=mv;c.fillRect(0,G.bh*.86,w,G.bh*.14+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;G=geo();running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  /* re-measure once the hero copy and fonts have settled */
  try{document.fonts&&document.fonts.ready.then(function(){setTimeout(size,60)})}catch(e){}
  setTimeout(size,1500);setTimeout(size,4000);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

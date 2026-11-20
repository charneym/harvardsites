/* ================= HERO FIELD: a crafted render of the mPancreas principle (HOME_BRIEF update 2c, DP): a clear microfluidic
   biochip whose channels branch like a capillary bed into a central reservoir of human islets resting on a membrane, with
   biosensor electrodes at the outlet ("channels sealed with semipermeable membranes ... to mimic all-important capillaries",
   Tech Briefs 2020; NSF 2537342). Rendered offline with three.js by render.js on the page's own slate ink (#0b1215), so it has
   no edge (DJ); here it breathes in a slow Ken Burns drift. It moves on its own, so no pointer response (CZ). On phones it
   sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1215";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?h*.41-30:h;
    /* the cut face's centre sits at about (0.55, 0.3) of the render; the bundle's left flank at ~0.15 */
    /* the chip fills ~90% of the render's width; on desktop it sits whole in the open area right of the text, centred at ~71% */
    var iw=mob?Math.min(w*.98,(U-60)*1.392*1.05):Math.min(cw*.53,(h-140)*1.392),ih=iw/1.392;
    var kx=mob?w*.5:side+cw*.715,ky=mob?60+(U-60)*.5:h*.55;
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
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* the render's ground IS the page ink, so the image sits on plain ink; a low teal glow is then SCREENED over the whole
         canvas (inside and outside the image alike), so no edge of the baked render can read as a pasted box (DJ) */
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      var ggx=G.kx,ggy=G.ky,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(10,40,40,"+(.5*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(6,20,22,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(0,0,0,0)");
      c.globalCompositeOperation="screen";c.fillStyle=ag;c.fillRect(0,0,w,h);c.globalCompositeOperation="source-over";c.globalAlpha=e;
      /* a faint cool sheen breathing across the islet chamber, like light moving on the medium */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.48+.06*pu),py=y+dh*.47,pr=dw*.2;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(214,240,236,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(214,240,236,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.52,0);lv.addColorStop(0,"rgba(7,12,14,.9)");lv.addColorStop(.6,"rgba(7,12,14,.45)");lv.addColorStop(1,"rgba(7,12,14,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(7,12,14,.6)");tv.addColorStop(1,"rgba(7,12,14,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(11,18,21,0)");bv.addColorStop(1,"rgba(11,18,21,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(7,12,14,.7)");tv2.addColorStop(1,"rgba(7,12,14,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(11,18,21,0)");mv.addColorStop(1,"rgba(11,18,21,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

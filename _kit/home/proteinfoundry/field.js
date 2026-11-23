/* ================= HERO FIELD: a crafted render of Protein Foundry's own subject (HOME_BRIEF update 2c): the CXCL12
   (SDF-1alpha) dimer with the sulfotyrosine-bearing N-terminus of its receptor CXCR4 docked on each subunit, solution NMR
   structure PDB 2K05 — solved by Veldkamp, Peterson and Volkman (Sci. Signal. 2008), two of them Protein Foundry's founders,
   and CXCL12-alpha is a catalogue protein. The receptor peptide meeting the chemokine is exactly the interaction a native
   N-terminus exists to make. Rendered atom by atom offline by render.py (space-filling, wrap lighting, ambient occlusion,
   depth fog; the two chemokine chains in the logo's red and orange, the receptor peptides in warm grey), baked with alpha to
   hero.webp; here it breathes and drifts slowly. It moves on its own, so no pointer response (CZ). On phones it sits in the
   top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#131110",IW=1200,IH=1476;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    /* the complex fills its render: whole, in the open area right of the text (DO/DP) */
    var ih=mob?Math.min(214,(U-150)*.62,w*.7):Math.min(h*.66,cw*.42*(IH/IW),660),iw=ih*(IW/IH);
    var kx=mob?w*.5:side+cw*.755,ky=mob?88+ih*.5:Math.max(h*.52,80+ih*.56);  /* kx/ky: the complex's centre */
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
      /* a very slow breath: grow ~3% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low ember glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.755,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(78,41,22,"+(.52*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(42,26,18,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(19,17,16,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint warm sheen breathing across the protein */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.42+.14*pu),py=y+dh*.4,pr=dw*.34;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,206,150,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,206,150,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(12,10,9,.95)");lv.addColorStop(.62,"rgba(12,10,9,.6)");lv.addColorStop(1,"rgba(12,10,9,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(12,10,9,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.025],[.4,.1],[.6,.24],[.8,.48],[1,.85]].forEach(function(q){bv.addColorStop(q[0],"rgba(19,17,16,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.6],[.25,.34],[.5,.14],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(12,10,9,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mt=Math.min(G.ky+G.ih*.1,G.bh*.5);var mv=c.createLinearGradient(0,mt,0,G.bh);
        /* a long cubic ease so the wash never ends on a perceptible line (DJ), even at x6 luminance */
        for(var qi=0;qi<=12;qi++){var qt=qi/12;mv.addColorStop(qt,"rgba(19,17,16,"+(qt*qt*qt).toFixed(4)+")")}
        c.fillStyle=mv;c.fillRect(0,mt,w,G.bh-mt+1);
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

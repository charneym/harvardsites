/* ================= HERO FIELD: a crafted render of D4Z4 Medicine's subject (HOME_BRIEF update 2c): a space-filling model
   of B-form DNA (10 bp per turn, major and minor grooves), rendered atom by atom offline by dna.py (sphere shading, depth
   ambient occlusion), backbone in pale steel and bases in the logo's ice blue #cce6f6, with the methyl groups of
   5-methylcytosine at CpG steps lit in the major groove, since the company's assay reads structure and DNA methylation in
   one read. Baked with alpha to hero.webp; here it drifts in a slow Ken Burns breath while a soft "read" of light travels
   along the molecule. It moves on its own, so no pointer response (CZ). On phones it sits in the top band (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),imgM=new Image(),ok=false,okM=false;
  var BG="#0b0f13";
  img.decoding=imgM.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};imgM.onload=function(){okM=true;if(!running)frame(true)};img.src="hero.webp";imgM.src="hero-m.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.1):h,eb=mob&&document.querySelector(".hero .eyebrow");
    if(eb){var et=eb.getBoundingClientRect().top+(window.scrollY||0);if(et>200)U=Math.min(U,et-16)}
    /* phones get the near-horizontal render (hero-m.webp, same model) so the molecule fills the band above the text */
    var AR=mob?1510/780:1154/2074,iw=mob?Math.min(w*.84,(U-84)*.96*AR):0,ih=mob?iw/AR:Math.min(h*.84,cw*.3/AR);if(!mob)iw=ih*AR;
    var kx=mob?w*.5:side+cw*.7,ky=mob?82+(U-82)*.41:h*.545;
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
    var I=G.mob?imgM:img;
    if(G.mob?okM:ok){
      /* a very slow breath: push in ~3% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.01-SP.v*G.ih*.06;
      /* a low blue-black glow over the WHOLE canvas (never a rect of its own), so no edge can read as a box (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.5:h*.5,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(30,58,80,"+(.55*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(18,32,44,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,15,19,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(I,x,y,dw,dh);
      /* the read: a soft ice-blue light that travels along the helix axis (top right to bottom left of the render) */
      var q=(t/16)%1,qq=q*1.3-.15,ax=G.mob?x+dw*(.95-.9*qq):x+dw*(.8-.66*qq),ay=G.mob?y+dh*(.1+.78*qq):y+dh*(.05+.9*qq),pr=dw*.42,pa=Math.sin(Math.PI*Math.min(1,Math.max(0,q*1.15)));
      c.globalCompositeOperation="lighter";
      var rg=c.createRadialGradient(ax,ay,0,ax,ay,pr);rg.addColorStop(0,"rgba(204,230,246,"+(.11*pa).toFixed(3)+")");rg.addColorStop(1,"rgba(204,230,246,0)");
      c.fillStyle=rg;c.fillRect(ax-pr,ay-pr,pr*2,pr*2);c.globalCompositeOperation="source-over";c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(7,10,13,.92)");lv.addColorStop(.6,"rgba(7,10,13,.5)");lv.addColorStop(1,"rgba(7,10,13,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.16);tv.addColorStop(0,"rgba(7,10,13,.55)");tv.addColorStop(1,"rgba(7,10,13,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.16);
        var bv=c.createLinearGradient(0,h*.78,0,h);bv.addColorStop(0,"rgba(11,15,19,0)");bv.addColorStop(1,"rgba(11,15,19,.8)");c.fillStyle=bv;c.fillRect(0,h*.78,w,h*.22+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.2);tv2.addColorStop(0,"rgba(7,10,13,.6)");tv2.addColorStop(1,"rgba(7,10,13,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.2);
        var mv=c.createLinearGradient(0,G.bh*.9,0,G.bh);mv.addColorStop(0,"rgba(11,15,19,0)");mv.addColorStop(1,"rgba(11,15,19,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.9,w,G.bh*.1+1);
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

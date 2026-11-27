/* ================= HERO FIELD: a crafted render of the real mechanism (HOME_BRIEF update 2026-11-20, option c). The DNA duplex from
   the crystal structure of human topoisomerase I in covalent complex with DNA and the indenoisoquinoline MJ-II-38 (PDB 1SC7, RCSB),
   the chemical class of Gibson's LMP744 and LMP400, designed in Mark Cushman's lab at Purdue. Rendered offline atom by atom
   (render.py: sphere shading, depth-based ambient occlusion): sugar-phosphate backbone in bone, bases in the logo's mint, the
   drug in the ribbon's teal with a soft glow where it sits wedged between base pairs at the cleavage site. Transparent ground, so
   no box edge exists at any width (DJ/DP). It drifts and sways very slowly on its own; no pointer response (CZ). Centred in the
   open area right of the text at ~70% width, whole, with an ink wash over the text side (DI/DO). Phones: top band, fading into the
   ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,drew=false;
  var fok=!document.fonts;if(document.fonts)document.fonts.ready.then(function(){fok=true;if(w){G=geo();G._t=performance.now();if(!running)frame(true)}});
  var BG="#07141a";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.06):h,AR=632/1310;
    /* the helix: whole in frame, below the nav with headroom, centred in the open area right of the text */
    var ih=mob?Math.max(150,Math.min(h*.4-96,1310)):Math.min(h*.6,1310,(cw*.26)/AR),iw=ih*AR;
    var kx=mob?w*.5:side+cw*.71,ky=mob?86+ih*.5:Math.max(h*.52,110+ih*.5);
    /* v9 (client: hero composition looked off): on the home hero the helix spans exactly the text block, from the eyebrow's top
       to the buttons' bottom, and is centred in the open area between the text's right edge and the content's right edge */
    /* v10: positions are read from layout, ignoring the entrance transforms (offsetTop chain), so the helix does not move while the
       headline and buttons rise in; the text's right edge comes from its text runs (x is never transformed in the entrance) */
    function rr(el){var m=0,tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n,g=document.createRange();
      while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);var r=g.getBoundingClientRect();if(r.width>0&&r.right>m)m=r.right}return m}
    function oy(el){var y=0;while(el){y+=el.offsetTop;el=el.offsetParent}return y}
    var dom=false;
    if(!mob){var hr=document.querySelector(".hero"),ey=hr&&hr.querySelector(".eyebrow"),ac=hr&&hr.querySelector(".act"),
        h1=hr&&hr.querySelector(".hero-h"),ld=hr&&hr.querySelector(".hero-foot .s");
      if(ey&&ac&&h1){var t=oy(ey),b=oy(ac)+ac.offsetHeight,
          tr=Math.max(rr(h1),ld?rr(ld):0),cr=side+cw;
        if(b-t>160&&cr-tr>120){
          /* all in page coordinates (never the scroll position), so the size and place are fixed while scrolling.
             v11 (client: helix looked small): up to 1.1x the text block's height, centred on it, but never within 140px of the
             top (nav) or 80px of the partner strip's rule */
          var sm=hr.querySelector(".g-hm"),st=sm?oy(sm):h,mid=(t+b)/2,half=Math.max((b-t)*.42,Math.min((b-t)*.55,mid-140,st-80-mid));
          ih=Math.min(half*2,1310,(cr-tr)*.8/AR);iw=ih*AR;ky=mid;kx=(tr+cr)/2;dom=true}}}
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,dom:dom};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0,lastSY=-1;
  function frame(once){
    var now=performance.now();
    var scY=window.scrollY||0;if(!once&&running&&now-lastF<31&&scY===lastSY){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;lastSY=scY;
    if(now-(G&&G._t||0)>500){G=geo();G._t=now}
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* v10: on the desktop home hero, draw the helix only once its place comes from the laid-out text with the real fonts,
       so it never appears at a fallback size and then jumps */
    var want=!G.mob&&!!document.querySelector(".hero .eyebrow");
    if(want&&!G.dom){G=geo();G._t=now}
    if(want&&(!fok||!G.dom)&&now-t0<4000){if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});return}
    /* v12 (client: the helix had no entrance): on the desktop home hero its entrance starts on its first real frame, on every load
       (a reload too, where the template's intro is instant): it rises up to 84px into place and fades in (1.7s), with the headline */
    if(want&&G.dom&&ok&&!drew){drew=true;if(!RM&&window.gsap){IN.v=0;gsap.to(IN,{v:1,duration:1.7,ease:"power3.out"});e=0}}
    if(ok){
      /* a very slow breath and sway: ~2.5% scale and a degree of tilt over ~40s */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),q=Math.sin(t*Math.PI*2/56),sc=(1+.025*k)*(1+.03*(1-e));
      var sY=window.scrollY||0,dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.dom?G.ky-sY-k*G.ih*.012+(1-e)*Math.min(G.ih*.2,84):G.ky-k*G.ih*.012-SP.v*G.ih*.05;  /* v11: on the desktop home hero the helix scrolls with the page */
      /* a deep teal glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.42:G.dom?cy:h*.52,ggr=Math.max(w,h)*.75;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(18,72,84,"+(.5*e).toFixed(3)+")");ag.addColorStop(.45,"rgba(10,40,50,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,20,26,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* the drug's own light, where it sits in the helix (~47% down the render) */
      var dx=cx+dw*.02,dy=cy-dh*.5+dh*.47,dr=dw*.9,pu=.5+.5*Math.sin(t*Math.PI*2/9);
      var dg=c.createRadialGradient(dx,dy,0,dx,dy,dr);dg.addColorStop(0,"rgba(143,227,245,"+((.10+.05*pu)*e).toFixed(3)+")");dg.addColorStop(1,"rgba(143,227,245,0)");
      c.fillStyle=dg;c.fillRect(dx-dr,dy-dr,dr*2,dr*2);
      c.save();c.translate(cx,cy);c.rotate(q*.018);c.globalAlpha=e;c.drawImage(img,-dw*.5,-dh*.5,dw,dh);c.restore();c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.56,0);lv.addColorStop(0,"rgba(5,14,19,.96)");lv.addColorStop(.64,"rgba(5,14,19,.62)");lv.addColorStop(1,"rgba(5,14,19,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(5,14,19,.62)");tv.addColorStop(1,"rgba(5,14,19,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(7,20,26,0)");bv.addColorStop(1,"rgba(7,20,26,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.26);tv2.addColorStop(0,"rgba(5,14,19,.72)");tv2.addColorStop(1,"rgba(5,14,19,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(7,20,26,0)");mv.addColorStop(1,"rgba(7,20,26,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
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

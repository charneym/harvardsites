/* ================= HERO FIELD: a crafted render of the real thing (HOME_BRIEF update 2026-11-20, option c). A DNA aptamer bound to
   its protein target: the crystal structure of human alpha-thrombin with the 27-mer DNA aptamer HD22 at exosite II (PDB 4I7Y,
   RCSB). Rendered offline atom by atom (render.py: sphere shading, depth-based ambient occlusion): the protein in a quiet slate,
   the aptamer's backbone in Aptagen's logo blue and its bases in the gold of their "Use Aptamers!" line. Transparent ground, so
   no box edge exists at any width (DJ/DP). It drifts and sways very slowly on its own; no pointer response (CZ). Centred in the
   open area right of the text at ~72% width, whole, with an ink wash over the text side (DI/DO). Phones: top band, fading into
   the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},HY=0,G=null,img=new Image(),ok=false;
  var BG="#050b16";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.06):h,AR=1010/1176;
    /* the helix: whole in frame, below the nav with headroom, centred in the open area right of the text */
    var ih=mob?Math.max(150,Math.min(h*.4-96,w*.8/AR,1176)):Math.min(h*.6,1176,(cw*.3)/AR),iw=ih*AR;
    var kx=mob?w*.5:side+cw*.74,ky=mob?86+ih*.5:Math.max(h*.5,118+ih*.5);
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
      /* a very slow breath and sway: ~2.5% scale and a degree of tilt over ~40s */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),q=Math.sin(t*Math.PI*2/56),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky-k*G.ih*.012+HY;
      /* a deep teal glow painted across the WHOLE canvas, never inside the image rect alone (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.42:h*.52,ggr=Math.max(w,h)*.75;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(20,70,120,"+(.5*e).toFixed(3)+")");ag.addColorStop(.45,"rgba(10,34,64,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(5,11,22,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.save();c.translate(cx,cy);c.rotate(q*.018);c.globalAlpha=e;c.drawImage(img,-dw*.5,-dh*.5,dw,dh);c.restore();c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.56,0);lv.addColorStop(0,"rgba(5,11,22,.96)");lv.addColorStop(.64,"rgba(5,11,22,.62)");lv.addColorStop(1,"rgba(5,11,22,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(5,11,22,.62)");tv.addColorStop(1,"rgba(5,11,22,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(5,11,22,0)");bv.addColorStop(1,"rgba(5,11,22,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.26);tv2.addColorStop(0,"rgba(5,11,22,.72)");tv2.addColorStop(1,"rgba(5,11,22,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var mv=c.createLinearGradient(0,G.bh*.84,0,G.bh);mv.addColorStop(0,"rgba(5,11,22,0)");mv.addColorStop(1,"rgba(5,11,22,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.84,w,G.bh*.16+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40;var hy=0,hr=G&&!G.mob?document.querySelector("#view #hero"):null;if(hr){var b=hr.getBoundingClientRect();if(b.bottom>0)hy=Math.min(0,b.top)}if(hy!==HY){HY=hy;frame(true)}},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

/* ================= HERO FIELD (HOME_BRIEF update 2026-11-20, option c): a crafted render of the real object Onca Bio's
   libraries are made to find — a macrocyclic peptide bound in a groove on its protein target, drawn atom by atom from the
   2.0 A crystal structure PDB 9Y6C (RCSB): the cyclic peptide Ra30303, closed through a xylene bridge between two cysteines
   and carrying non-natural residues, on the TE domain of human complement C5. Rendered offline (mac.py: sphere shading,
   rim light, depth ambient occlusion) on a transparent ground, so it sits on the page ink with no box edge (DJ/DP).
   Composed in the open area right of the copy (DO), with an ink scrim over the text side only (DI). Slow drift; no pointer
   response (CZ). On phones it sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var maxw=w>=1800?1600:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-maxw)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0a2230";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/58),cx,cy,sc;
      if(!G.mob){
        /* subject centred in the open area right of the text (~68% of the width), whole and clear of the nav */
        sc=Math.min(G.cw*.40/iw,h*.70/ih);cx=G.side+G.cw*.72;cy=h*.56;
      } else {
        sc=Math.min(w*.74/iw,G.bh*.50/ih);cx=w*.5;cy=G.bh*.49;
      }
      sc*=(1+.03*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2-k*dw*.012,y=cy-dh/2+k*dh*.01-SP.v*h*.04;
      /* a soft sky halo under the molecule, eased out over a long distance (no edge) */
      var gl=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(dw,dh)*.80);
      gl.addColorStop(0,"rgba(46,170,255,"+(.13*e)+")");gl.addColorStop(.55,"rgba(95,149,152,"+(.05*e)+")");gl.addColorStop(1,"rgba(10,34,48,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=.96*e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(6,24,34,.74)");lv.addColorStop(.55,"rgba(6,24,34,.38)");lv.addColorStop(1,"rgba(6,24,34,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(10,34,48,0)");bv.addColorStop(1,"rgba(10,34,48,.78)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.74,0,G.bh*1.0);mv.addColorStop(0,"rgba(10,34,48,0)");mv.addColorStop(1,"rgba(10,34,48,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.74,w,G.bh*.30+1);
        c.fillStyle="#0a2230";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.side+G.cw*.72,G.mob?G.bh*.49:h*.56]:[w/2,h/2]}};
})();

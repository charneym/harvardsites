/* ================= HERO FIELD: a crafted render of the real molecule (HOME_BRIEF update 2026-11-20, option c). A space-filling model
   of human Hsp70, the protein Radiance's antibody RB-203 recognizes on the membrane of tumor cells: the Hsp70 ATPase domain with
   bound ADP from its 1.84 A crystal structure (PDB 1S3X, RCSB), rendered offline atom by atom (hsp70.py: sphere shading,
   depth-based ambient occlusion; its four subdomains in tints and shades of the logo blue, ADP in ivory) on a transparent ground,
   so it sits on the ink with no box edge (DJ/DP). Centred right of the copy at ~70% width with an ink scrim over the left (DI/DO);
   slow drift, no pointer response (CZ). On phones it sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
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
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#031f36";c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/56),cx,cy,sc;
      if(!G.mob){sc=Math.min(w*.33/iw,h*.66/ih);cx=w*.705;cy=h*.55}
      else{sc=Math.min(w*.78/iw,G.bh*.62/ih);cx=w*.5;cy=G.bh*.56}
      sc*=(1+.035*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2-k*dw*.012,y=cy-dh/2+k*dh*.008-SP.v*h*.04;
      /* a soft blue glow under the molecule */
      var gl=c.createRadialGradient(cx,cy,0,cx,cy,Math.max(dw,dh)*.72);gl.addColorStop(0,"rgba(36,113,185,"+(.20*e)+")");gl.addColorStop(.6,"rgba(36,113,185,"+(.05*e)+")");gl.addColorStop(1,"rgba(3,31,54,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=.94*e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(2,22,39,.7)");lv.addColorStop(.6,"rgba(2,22,39,.35)");lv.addColorStop(1,"rgba(2,22,39,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(3,31,54,0)");bv.addColorStop(1,"rgba(3,31,54,.75)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.6,0,G.bh);mv.addColorStop(0,"rgba(3,31,54,0)");mv.addColorStop(1,"rgba(3,31,54,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.6,w,G.bh*.4+1);
        c.fillStyle="#031f36";c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:w*.705,G.mob?G.bh*.56:h*.55]:[w/2,h/2]}};
})();

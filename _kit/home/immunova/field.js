/* ================= HERO FIELD: a crafted render of Immunova's own platform (HOME_BRIEF update 2026-11-20, option c). The nanolipogel,
   as the Yale/Immunova patent family describes it (a lipid bilayer surrounding a hydrogel core that holds active agents), and as the
   company's own site shows it ("artist's impression of a nanolipogel 'smart bomb'"): render.py builds the bilayer bead by bead (head
   groups and tails), cuts one octant away, and fills the lumen with a crosslinked hydrogel network holding protein (atoms of human
   IL-2, PDB 1M47, as a representative cytokine) and small-molecule cargo. Illustrative, not to scale. Rendered offline with sphere
   shading and depth AO on a transparent ground, so it sits on the ink with no box edge (DJ, DP). The whole particle sits centred in
   the open area right of the headline (~62-75% of the width), at least 110px past the measured H1 line ends and fully below the nav
   (DO, DP); a long ink scrim keeps the headline side quiet (DI). Slow drift, no pointer response (CZ). On phones it sits whole in
   the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,INK="#101512",S="16,21,18";
  img.decoding="async";img.onload=function(){ok=true;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function h1r(){var e=document.querySelector("#view h1.hero-h")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861,top=mob?90:96,hr=mob?0:h1r();
    if(!mob){
      /* particle diameter: as large as fits between the nav and the bottom, and between the H1 (+110px) and the right edge */
      var D=Math.min((h-top-48)*.92,w*.40),cx=w*.685;
      var lim=hr>0?hr+110:w*.47;
      if(cx-D/2<lim){cx=lim+D/2}
      var rm=w-Math.max(32,side*.6);
      if(cx+D/2>rm){D=Math.min(D,rm-lim);cx=Math.min(Math.max(lim+D/2,w*.66),rm-D/2)}
      var cy=top+(h-top-40)/2;
      return {mob:false,side:side,cw:cw,D:D,cx:cx,cy:cy,bh:h};
    }
    var bh=Math.min(h*.45,w*1.0)+6,D2=Math.min(w*.74,bh-top-18);
    return {mob:true,side:side,cw:cw,D:D2,cx:w*.5,cy:top+(bh-top)*.5-4,bh:bh};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function lg(x0,y0,x1,y1,st){var g=c.createLinearGradient(x0,y0,x1,y1);for(var i=0;i<st.length;i++)g.addColorStop(st[i][0],"rgba("+S+","+st[i][1]+")");return g}
  var lastF=0,regeo=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(now-regeo>1500){regeo=now;G=geo()}   /* the H1 may reflow once fonts load */
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/56);
      var sc=G.D/Math.max(iw,ih)*(1+.025*k)*(1+.04*(1-e)),dw=iw*sc,dh=ih*sc;
      var cx=G.cx-k*G.D*.01,cy=G.cy+k*G.D*.006-SP.v*h*.03,x=cx-dw/2,y=cy-dh/2;
      /* a soft logo-green glow around the particle, easing out over a long distance */
      var R=G.D*.95,gl=c.createRadialGradient(cx,cy,G.D*.2,cx,cy,R);
      gl.addColorStop(0,"rgba(118,182,67,"+(.16*e)+")");gl.addColorStop(.45,"rgba(118,182,67,"+(.07*e)+")");gl.addColorStop(.75,"rgba(118,182,67,"+(.02*e)+")");gl.addColorStop(1,"rgba(118,182,67,0)");
      c.fillStyle=gl;c.fillRect(0,0,w,G.mob?G.bh:h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* headline side stays deep ink; the scrim fades out long before the particle */
        var se=Math.max(80,G.cx-G.D/2-20);
        c.fillStyle=lg(0,0,se,0,[[0,.72],[.45,.5],[.8,.16],[1,0]]);c.fillRect(0,0,se+2,h);
        c.fillStyle=lg(0,h*.72,0,h,[[0,0],[1,.32]]);c.fillRect(0,h*.72,w,h*.28);
      }else{
        c.fillStyle=lg(0,G.bh*.62,0,G.bh,[[0,0],[1,1]]);c.fillRect(0,G.bh*.62,w,G.bh*.38+1);
        c.fillStyle=INK;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.cy]:[w/2,h/2]}};
})();

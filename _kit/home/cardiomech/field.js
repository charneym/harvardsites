/* ================= HERO FIELD: CardioMech's own photograph (cardiomech.com asset A1upBLM7z, 1920x1278): the company's
   founders in scrubs in an interventional suite (HOME_BRIEF update, option a: the firm's own real photography), graded
   to the site ink (grade.py; third-party signage softened). The standing engineer sits at ~62-70% of the width in the
   open area right of the headline, fully below the nav (DO/DP/DQ); a long ink wash keeps the headline side quiet (DI);
   every photo edge inside the viewport fades into the ink (DJ). A very slow Ken Burns drift only. On phones the photo
   stands in a top band above the text, faded into the ink on all sides. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#141113",IW=1920,IH=1278,FX=.64,FY=.42;
  img.decoding="async";img.onload=function(){ok=true;IW=img.naturalWidth;IH=img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    if(mob){
      var U=Math.min(h*.5,w*1.08,470),s=Math.max(.34,U/1100),x0=w*.5-FX*IW*s,y0=Math.round(U*.09);
      return {mob:1,side:side,cw:cw,U:U,s:s,x0:x0,y0:y0,bh:U,fx:w*.5,fy:y0+FY*IH*s*.6};
    }
    var s=Math.max(.97,w/IW,h/(IH*.97)),tx=side+cw*.68,x0=Math.max(tx-FX*IW*s,w-IW*s);x0=Math.min(x0,w*.2);
    var y0=Math.min(0,Math.max(h-IH*s,Math.round(h*.02)-6));
    return {mob:0,side:side,cw:cw,U:h,s:s,x0:x0,y0:y0,bh:h,fx:x0+FX*IW*s,fy:y0+FY*IH*s};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function band(g,stops,col){stops.forEach(function(q){g.addColorStop(q[0],"rgba("+col+","+q[1]+")")});return g}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* slow Ken Burns: ~3% over 48s, anchored on the subject, eased back and forth; a touch of scroll parallax */
      var k=.5-.5*Math.cos(t*Math.PI*2/48),sc=(1+.03*k)*(1+.025*(1-e));
      var dw=IW*G.s*sc,dh=IH*G.s*sc,x=G.fx-(G.fx-G.x0)*sc,y=G.fy-(G.fy-G.y0)*sc-SP.v*dh*.05;
      if(!G.mob){x=Math.min(x,G.x0);x=Math.max(x,w-dw);y=Math.min(y,G.y0);}
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      var ink="20,17,19";
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, easing out by ~62% */
        var lv=c.createLinearGradient(0,0,w*.64,0);band(lv,[[0,.97],[.3,.95],[.5,.9],[.62,.78],[.72,.58],[.8,.36],[.87,.17],[.93,.06],[1,0]],ink);c.fillStyle=lv;c.fillRect(0,0,w,h);
        if(x>0){var le=c.createLinearGradient(x,0,x+180,0);band(le,[[0,1],[.4,.5],[1,0]],ink);c.fillStyle=le;c.fillRect(0,0,x+180,h);c.fillStyle=BG;c.fillRect(0,0,Math.ceil(x),h)}
        var tv=c.createLinearGradient(0,0,0,h*.42);band(tv,[[0,.6],[.2,.4],[.4,.22],[.6,.1],[.8,.03],[1,0]],ink);c.fillStyle=tv;c.fillRect(0,0,w,h*.42);
        var bv=c.createLinearGradient(0,h*.5,0,h);band(bv,[[0,0],[.35,.03],[.6,.12],[.8,.3],[1,.6]],ink);c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
        var rv=c.createLinearGradient(w,0,w-w*.12,0);band(rv,[[0,.35],[.5,.1],[1,0]],ink);c.fillStyle=rv;c.fillRect(w-w*.12,0,w*.12,h);
      }else{
        /* phone band: the photo fades into the ink at the top, the sides and the base before the text */
        if(y>0){c.fillStyle=BG;c.fillRect(0,0,w,Math.ceil(y))}
        var tv2=c.createLinearGradient(0,Math.max(0,y),0,Math.max(0,y)+G.bh*.32);band(tv2,[[0,1],[.2,.62],[.45,.28],[.7,.08],[1,0]],ink);c.fillStyle=tv2;c.fillRect(0,0,w,Math.max(0,y)+G.bh*.32);
        var sl=c.createLinearGradient(0,0,w*.3,0);band(sl,[[0,.55],[.5,.18],[1,0]],ink);c.fillStyle=sl;c.fillRect(0,0,w*.3,G.bh);
        var sr=c.createLinearGradient(w,0,w*.7,0);band(sr,[[0,.55],[.5,.18],[1,0]],ink);c.fillStyle=sr;c.fillRect(w*.7,0,w*.3,G.bh);
        var mv=c.createLinearGradient(0,G.bh*.62,0,G.bh*1.06);band(mv,[[0,0],[.25,.1],[.5,.36],[.75,.74],[1,1]],ink);c.fillStyle=mv;c.fillRect(0,G.bh*.62,w,G.bh*.44+1);
        c.fillStyle=BG;c.fillRect(0,G.bh*1.06,w,h-G.bh*1.06+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.fx,G.fy]:[w/2,h/2]}};
})();

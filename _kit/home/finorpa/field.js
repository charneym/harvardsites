/* ================= HERO FIELD: real photography (HOME_BRIEF update 2026-11-20). Lille's Grand'Place, a few streets from
   Finorpa's office on square Dutilleul: the Vieille Bourse and the belfry of the Chambre de commerce in evening light
   (Unsplash, Tomasz Zielonka: unsplash.com/photos/HMRJlktdVZg), graded offline toward Finorpa's plum (#8f3189 / #1d1230) and
   drawn here with a slow Ken Burns drift. A scrim keeps the headline side quiet; on phones the photo sits in the top band
   and fades into the ink. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.jpg";
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
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#1d1230";c.fillRect(0,0,w,h);
    if(ok){
      var bw=w,bh=G.bh,iw=img.naturalWidth,ih=img.naturalHeight;
      /* Ken Burns: a very slow push in and drift toward the Vieille Bourse, eased back and forth over ~50s */
      var k=.5-.5*Math.cos(t*Math.PI*2/50),sc=Math.max(bw/iw,bh/ih)*(1.04+.07*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,fx=G.mob?.42:.78,fy=G.mob?.7:.62;
      var x=(bw-dw)*fx-k*bw*.012,y=(bh-dh)*fy-k*bh*.01;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* scrims: navy wash, the headline side darkest, the base deepening into the page */
      c.fillStyle="rgba(29,18,48,.22)";c.fillRect(0,0,w,bh);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(20,10,34,.86)");lv.addColorStop(.55,"rgba(20,10,34,.6)");lv.addColorStop(1,"rgba(20,10,34,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(20,10,34,.55)");tv.addColorStop(1,"rgba(20,10,34,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(20,10,34,0)");bv.addColorStop(1,"rgba(20,10,34,.7)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38);
      }else{
        var tv2=c.createLinearGradient(0,0,0,bh*.3);tv2.addColorStop(0,"rgba(20,10,34,.6)");tv2.addColorStop(1,"rgba(20,10,34,0)");c.fillStyle=tv2;c.fillRect(0,0,w,bh*.3);
        var mv=c.createLinearGradient(0,bh*.55,0,bh);mv.addColorStop(0,"rgba(29,18,48,0)");mv.addColorStop(1,"rgba(29,18,48,1)");c.fillStyle=mv;c.fillRect(0,bh*.55,w,bh*.45+1);
        c.fillStyle="#1d1230";c.fillRect(0,bh,w,h-bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[w*.6,G.bh*.62]:[w/2,h/2]}};
})();

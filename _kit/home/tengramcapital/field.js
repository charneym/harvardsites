/* ================= HERO FIELD: real photography (HOME_BRIEF update 2026-11-20, rev3). Tengram backs branded consumer and
   retail companies, so the hero is the firm's subject rather than its town: a boutique storefront at evening, warm light in
   the windows under a navy awning (Pexels, Gizem Erol: pexels.com/photo/elegant-boutique-storefront-at-night-32561585/,
   Pexels License). Prepared offline: the third-party name on the awning removed, the window and door interiors softened to
   a shallow focus so no brand is legible, then graded toward Tengram's navy (#0e1a24). Drawn here with a slow Ken Burns
   drift. On desktop the photo sits on the right and feathers into the ink, so the headline column stays clean; on phones it
   fills the top band and fades into the page. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.jpg";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var g=document.createRange();g.selectNodeContents(e);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}catch(_){}return r}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.42,w*.92):h;
    /* the photo's frame: right of the copy column on desktop, the full top band on phones */
    var rx=mob?0:Math.round(Math.min(w*.66,Math.max(side+cw*.44,h1r()+48))),rw=w-rx,rh=mob?U*1.04:h; /* the photo starts past the H1 line ends, so the lit window never sits behind the headline at any width */
    return {mob:mob,side:side,cw:cw,U:U,rx:rx,rw:rw,rh:rh};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0e1a24";c.fillRect(0,0,w,h);
    if(ok){
      var rx=G.rx,rw=G.rw,rh=G.rh,iw=img.naturalWidth,ih=img.naturalHeight;
      /* Ken Burns: a very slow push in and drift toward the door, eased back and forth over ~48s */
      var k=.5-.5*Math.cos(t*Math.PI*2/48),sc=Math.max(rw/iw,rh/ih)*(1.03+.06*k)*(1+.035*(1-e));
      var dw=iw*sc,dh=ih*sc,fx=G.mob?.5:.66,fy=G.mob?.48:.5;
      var x=rx+(rw-dw)*fx-k*rw*.014,y=(rh-dh)*fy-k*rh*.008;
      c.save();c.beginPath();c.rect(rx,0,rw,rh);c.clip();c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.restore();c.globalAlpha=1;
      /* a light navy wash over the whole photo */
      c.fillStyle="rgba(14,26,36,.16)";c.fillRect(rx,0,rw,rh);
      if(!G.mob){
        /* the photo's left edge feathers into the ink; the copy column stays clean */
        var fe=c.createLinearGradient(rx,0,rx+rw*.34,0);fe.addColorStop(0,"rgba(14,26,36,1)");fe.addColorStop(.45,"rgba(14,26,36,.62)");fe.addColorStop(1,"rgba(14,26,36,0)");c.fillStyle=fe;c.fillRect(rx-1,0,rw*.34+1,h);
        var tv=c.createLinearGradient(0,0,0,h*.24);tv.addColorStop(0,"rgba(9,19,27,.62)");tv.addColorStop(1,"rgba(9,19,27,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.24);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(14,26,36,0)");bv.addColorStop(1,"rgba(14,26,36,.78)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34);
      }else{
        var tv2=c.createLinearGradient(0,0,0,rh*.3);tv2.addColorStop(0,"rgba(9,19,27,.6)");tv2.addColorStop(1,"rgba(9,19,27,0)");c.fillStyle=tv2;c.fillRect(0,0,w,rh*.3);
        var mv=c.createLinearGradient(0,rh*.58,0,rh);mv.addColorStop(0,"rgba(14,26,36,0)");mv.addColorStop(1,"rgba(14,26,36,1)");c.fillStyle=mv;c.fillRect(0,rh*.58,w,rh*.42+1);
        c.fillStyle="#0e1a24";c.fillRect(0,rh,w,h-rh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();setTimeout(size,900);setTimeout(size,2600);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(size);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.rx+G.rw*.5,G.rh*.5]:[w/2,h/2]}};
})();

/* ================= HERO FIELD: the firm's own photography (HOME_BRIEF update 2a): behr's studio photograph of the
   behrotest® S5 fully automatic steam distillation unit (behr-labor.com product page, 960 px original), cut out of its
   white studio ground with real alpha (the third-party titrator beside it removed), graded slightly down, baked to
   hero.webp at native resolution. Here it breathes in a slow Ken Burns drift over a soft graphite glow with a faint warmth
   of the logo red behind it. It moves on its own, so no pointer response (CZ). The headline side stays quiet (DI). On
   phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#18191b";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=535/813;  /* photo aspect (w/h) */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?96:Math.max(112,h*.14),bot=mob?Math.max(230,Math.min(eyT-40,h*.44-66)):h-Math.max(40,h*.06);
    var U=mob?bot+18:h;
    var ih=mob?(bot-top):Math.min((bot-top)*.9,2*A.half/AR*.96),iw=ih*AR;
    var kx=mob?w*.5:A.cx,ky=(top+bot)/2;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~3% and drift up a touch over ~44s, eased back and forth (scaled about the image centre) */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.008-SP.v*G.ih*.05;
      /* a low graphite glow across the WHOLE canvas (never inside the image rect alone), so no edge of the cut-out
         photo can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.45:h*.5,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(62,63,67,"+(.55*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(38,39,42,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(24,25,27,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a faint warmth of the logo red behind the unit, breathing every ~9s */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*.6,py=y+dh*.55,pr=dw*.9;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(226,0,26,"+((.07+.03*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(226,0,26,0)");
      c.fillStyle=rg;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(16,17,18,.95)");lv.addColorStop(.6,"rgba(16,17,18,.55)");lv.addColorStop(1,"rgba(16,17,18,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(16,17,18,.6)");tv.addColorStop(1,"rgba(16,17,18,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.78,0,h);bv.addColorStop(0,"rgba(24,25,27,0)");bv.addColorStop(1,"rgba(24,25,27,.7)");c.fillStyle=bv;c.fillRect(0,h*.78,w,h*.22+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(16,17,18,.6)");tv2.addColorStop(1,"rgba(16,17,18,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-110,0,G.bh);mv.addColorStop(0,"rgba(24,25,27,0)");mv.addColorStop(1,"rgba(24,25,27,1)");c.fillStyle=mv;c.fillRect(0,G.bh-110,w,111);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  try{document.fonts.ready.then(function(){setTimeout(size,60)})}catch(_){}setTimeout(size,1800);setTimeout(size,4200);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

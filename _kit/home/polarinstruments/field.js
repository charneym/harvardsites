/* ================= HERO FIELD: a crafted render of Polar's real subject (HOME_BRIEF update 2c): a section of a multilayer
   controlled-impedance test coupon, the board CGen designs, Speedstack documents and the CITS880s measures. Ray traced
   offline by render.py with real alpha (blue solder mask, ENIG probe pads and an edge-coupled pair on top, the polished
   cut faces showing copper planes and FR-4 glass weave), baked under two positions of the studio strip light
   (hero-a / hero-b). Here the two cross-fade very slowly, so the highlight glides across the solder mask, inside a slow
   Ken Burns drift. It moves on its own: no pointer response (CZ). Desktop: the subject sits centred in the open area
   right of the headline (DO, DP). Phones: a band above the text that fades into the ink well before the eyebrow (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,A=new Image(),B=new Image(),na=0;
  var BG="#0a1228";
  function ld(){na++;if(na>=2&&!running)frame(true)}
  A.decoding=B.decoding="async";A.onload=B.onload=ld;A.src="hero-a.webp";B.src="hero-b.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  function ler(){var r=0;["#view .hero .s","#view .hero .act","#view .hero .eyebrow"].forEach(function(s){var e=document.querySelector(s);if(e){var b=e.getBoundingClientRect();if(b.width&&b.right>r)r=b.right}});return r}
  /* DO: the open area right of the headline and lede; its centre is held at 62-75% of the width */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(112,w*.07),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=878/539; /* render aspect (w/h), cropped close around the board */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var O=mob?null:OA(),top=mob?92:Math.max(118,h*.15),bot=mob?Math.max(230,eyT-50):h-Math.max(56,h*.08);
    var ih=mob?Math.min(bot-top,(w-48)/AR):Math.max(120,Math.min(bot-top,2*O.half/AR*.92)),iw=ih*AR;
    var kx=mob?w*.5:O.cx,ky=(top+bot)/2;
    return {mob:mob,side:side,cw:cw,bh:mob?bot+16:h,ih:ih,iw:iw,kx:kx,ky:ky};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(na>=2){
      /* a very slow breath: push in ~3% and drift up a touch over ~40s */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low navy glow across the WHOLE canvas (never a rect of its own), so nothing reads as a pasted box (DJ) */
      var gx=G.mob?w*.5:G.kx,gy=G.mob?G.bh*.5:h*.5,gr=Math.max(w,h)*.75;
      var ag=c.createRadialGradient(gx,gy,0,gx,gy,gr);
      ag.addColorStop(0,"rgba(22,40,92,"+(.55*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(14,26,62,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(10,18,40,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a faint warm-to-blue spill behind the board, breathing with the strip light (~14s) */
      var m=.5-.5*Math.cos(t*Math.PI*2/14),px=x+dw*.52,py=y+dh*.48,pr=dw*.95;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(236,98,25,"+((.06+.03*m)*e).toFixed(3)+")");rg.addColorStop(.6,"rgba(60,90,180,"+((.06+.02*m)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(60,90,180,0)");
      c.fillStyle=rg;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(A,x,y,dw,dh);
      if(m>.004){c.globalAlpha=e*m;c.drawImage(B,x,y,dw,dh)}
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(7,13,30,.9)");lv.addColorStop(.6,"rgba(7,13,30,.45)");lv.addColorStop(1,"rgba(7,13,30,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(7,13,30,.55)");tv.addColorStop(1,"rgba(7,13,30,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(10,18,40,0)");bv.addColorStop(1,"rgba(10,18,40,.8)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,80);tv2.addColorStop(0,"rgba(7,13,30,.6)");tv2.addColorStop(1,"rgba(7,13,30,0)");c.fillStyle=tv2;c.fillRect(0,0,w,80);
        var mv=c.createLinearGradient(0,G.bh-70,0,G.bh);mv.addColorStop(0,"rgba(10,18,40,0)");mv.addColorStop(1,"rgba(10,18,40,1)");c.fillStyle=mv;c.fillRect(0,G.bh-70,w,71);
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

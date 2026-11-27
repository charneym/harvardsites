/* ================= HERO FIELD: a crafted render of Schüchl's own product (HOME_BRIEF update 2c): an automatic VAKUUM casting
   machine of the UGM series, after the product photos on schuechl.de: the blue chamber door with two chamfered windows in riveted
   frames, lever, light-grey control column; through the windows the lit chamber, the tilted mixing cup and an amber resin stream
   running into the mould's funnel. Raymarched offline by render.js with real alpha, baked to hero.webp; here it holds still with a
   very slow Ken Burns breath, a soft floor shadow (TOP-FIX B: no glow around it). On phones it sits in the top band
   and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},HY=0,G=null,img=new Image(),ok=false;
  var BG="#0a1322";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var r=0;["#view .hero h1","#view .hero .eyebrow","#view .hero-foot p"].forEach(function(q){var e=document.querySelector(q);if(!e)return;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}});return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(124,w*.07),w*.47),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=807/975,LX=.34,LY=.40;  /* render aspect (w/h) */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?96:Math.max(120,h*.15),bot=mob?Math.max(250,eyT-22):h-Math.max(40,h*.06);
    var U=mob?bot+18:h;
    var ih=mob?(bot-top)*.84:Math.min(bot-top,2*A.half/AR*.96)*.84,iw=ih*AR;
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
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.008+HY;
      /* TOP-FIX B 2026-11-27: no glow. A very faint neutral falloff on the ground, up and toward the key (upper left)
         side of the machine, at most ~3% brighter than the ink (no colour, no halo hugging the object) */
      var lx=G.mob?w*.5:x+dw*.40,ly=G.mob?G.bh*.42:y+dh*.32,lr=Math.max(w,h)*.62;
      var fo=c.createRadialGradient(lx,ly,0,lx,ly,lr);fo.addColorStop(0,"rgba(255,255,255,"+(.03*e).toFixed(4)+")");fo.addColorStop(.55,"rgba(255,255,255,"+(.011*e).toFixed(4)+")");fo.addColorStop(1,"rgba(255,255,255,0)");
      c.fillStyle=fo;c.fillRect(0,0,w,h);
      /* a soft floor shadow under the plinth, so the machine stands rather than floats (TOP-FIX B: softer) */
      c.save();c.translate(x+dw*.5,y+dh*.965);c.scale(1,.075);var fs=c.createRadialGradient(0,0,0,0,0,dw*.55);
      fs.addColorStop(0,"rgba(2,5,10,"+(.55*e).toFixed(3)+")");fs.addColorStop(.6,"rgba(2,5,10,"+(.22*e).toFixed(3)+")");fs.addColorStop(1,"rgba(2,5,10,0)");
      c.fillStyle=fs;c.fillRect(-dw,-dw,2*dw,2*dw);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(6,13,24,.95)");lv.addColorStop(.6,"rgba(6,13,24,.55)");lv.addColorStop(1,"rgba(6,13,24,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(6,13,24,.6)");tv.addColorStop(1,"rgba(6,13,24,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.84,0,h);bv.addColorStop(0,"rgba(10,19,34,0)");bv.addColorStop(1,"rgba(10,19,34,.6)");c.fillStyle=bv;c.fillRect(0,h*.84,w,h*.16+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(6,13,24,.6)");tv2.addColorStop(1,"rgba(6,13,24,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-150,0,G.bh);mv.addColorStop(0,"rgba(10,19,34,0)");mv.addColorStop(.5,"rgba(10,19,34,.5)");mv.addColorStop(1,"rgba(10,19,34,1)");c.fillStyle=mv;c.fillRect(0,G.bh-150,w,151);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  /* re-measure the headline once the web fonts and the title reveal have settled, so the 100px clearance holds (DP) */
  try{document.fonts.ready.then(function(){setTimeout(size,60)})}catch(_){}setTimeout(size,2600);setTimeout(size,6500);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=p;
    /* TOP-FIX step 5 (2026-11-27): the object scrolls up 1:1 with the hero on desktop; 0 once the hero has left (footer echo) */
    var hy=0,hr=G&&!G.mob?document.querySelector("#view #hero"):null;
    if(hr){var b=hr.getBoundingClientRect();if(b.bottom>0)hy=Math.min(0,b.top)}
    if(hy!==HY){HY=hy;frame(true)}},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

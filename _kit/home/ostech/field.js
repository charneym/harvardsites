/* ================= HERO FIELD: OsTech's own product photograph (HOME_BRIEF update 2a): the line-up of laser drivers and
   OEM modules from the ostech.de front page (frontpage.jpg, a studio shot on a light grey sweep, cut out to real alpha against
   its own measured background, shadows kept as true alpha), set on the warm graphite ink with a long, low glow behind the
   row so it never reads as a pasted panel (DP/DJ). A very slow Ken Burns breath; no pointer response. Shown at or below its
   native 902 x 281 px. On phones it sits in the top band above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#141518";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=902/281,LX=.28,LY=.5;  /* photo aspect (w/h) */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?100:Math.max(108,h*.13),bot=mob?Math.max(250,eyT-56):h-Math.max(40,h*.06);
    var U=mob?bot+18:h;
    var ih=Math.min(281,mob?Math.min(bot-top,w*.86/AR):Math.min(bot-top,2*A.half/AR*.96)*.97),iw=ih*AR;
    var kx=mob?w*.5:A.cx,ky=(top+bot)/2;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,L0:mob?0:Math.max(HR+Math.max(110,w*.07),w*.47),Rf:w-Math.max(36,w*.02),R0:0};
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
      /* a low warm-graphite glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the
         cut-out photo can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.45:h*.48,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(62,60,58,"+(.8*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(38,37,37,"+(.45*e).toFixed(3)+")");ag.addColorStop(1,"rgba(20,21,24,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a faint glow in the logo teal behind the front panel, breathing every ~9s, and a long soft shadow under them */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*LX,py=y+dh*LY,pr=dw*.75;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(235,137,27,"+((.06+.02*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(235,137,27,0)");
      c.fillStyle=rg;c.fillRect(0,0,w,h);
      var fx=x+dw*.5,fy=y+dh*.985;c.save();c.translate(fx,fy);c.scale(1,.16);var fg=c.createRadialGradient(0,0,0,0,0,dw*.95);
      fg.addColorStop(0,"rgba(0,0,0,"+(.55*e).toFixed(3)+")");fg.addColorStop(.5,"rgba(0,0,0,"+(.2*e).toFixed(3)+")");fg.addColorStop(1,"rgba(0,0,0,0)");c.fillStyle=fg;c.fillRect(-dw*1.2,-dw*1.2,dw*2.4,dw*2.4);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(20,21,24,.95)");lv.addColorStop(.6,"rgba(20,21,24,.55)");lv.addColorStop(1,"rgba(20,21,24,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(20,21,24,.6)");tv.addColorStop(1,"rgba(20,21,24,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.82,0,h);bv.addColorStop(0,"rgba(20,21,24,0)");bv.addColorStop(1,"rgba(20,21,24,.5)");c.fillStyle=bv;c.fillRect(0,h*.82,w,h*.18+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(20,21,24,.6)");tv2.addColorStop(1,"rgba(20,21,24,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-46,0,G.bh);mv.addColorStop(0,"rgba(20,21,24,0)");mv.addColorStop(1,"rgba(20,21,24,1)");c.fillStyle=mv;c.fillRect(0,G.bh-46,w,47);
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

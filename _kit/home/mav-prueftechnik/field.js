/* ================= HERO FIELD: a crafted render of the test MAV PRÜFTECHNIK's machines exist for (HOME_BRIEF update 2c): a
   tin-plated ring cable lug, crimped onto a stranded copper wire, hooked over the steel pin of the measuring-side jaw, its blue
   insulated wire clamped in the pull-side jaw (mav-germany.de > Anwendungsbeispiele, Werkzeuge: Messpunktseite / Abzugseite).
   Ray marched offline by render.py with real alpha, baked to hero.webp; here it breathes in a slow Ken Burns drift, and the
   pull axis is drawn live out of the pull-side jaw, with a short force pulse travelling along it every few seconds.
   No pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a1421";
  /* pull axis in image units (render.py 1600x1146): where the wire leaves the pull-side jaw, and a point further along it */
  var PJ=[.8565,.5629],PF=[1.3435,.6952],PA=[.1652,.3752];
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=1600/1146;  /* render aspect (w/h) */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?100:Math.max(108,h*.13),bot=mob?Math.max(250,eyT-56):h-Math.max(40,h*.06);
    var U=mob?bot+18:h;
    var ih=mob?(bot-top):Math.min(bot-top,2*A.half/AR*.96)*(mob?1.05:1.04),iw=ih*AR;
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
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.53,y=G.ky-dh*.54-k*G.ih*.008-SP.v*G.ih*.05;
      /* a low deep-teal glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the
         baked render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.45:h*.48,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(16,40,70,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(12,30,52,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(10,20,33,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the pull axis: a hairline in the lifted MAV blue out of the pull-side jaw, drawn on once, with a short force pulse
         travelling outwards along it every ~3.2 s (the direction the slide pulls) */
      var bi=e*sm((t-1.0)/1.4);
      if(bi>.01){
        var ax=x+dw*PJ[0],ay=y+dh*PJ[1],bx=x+dw*PF[0],by=y+dh*PF[1],dx=bx-ax,dy=by-ay,Lr=Math.hypot(dx,dy),ux=dx/Lr,uy=dy/Lr;
        var len=Math.min(Lr,Math.max(60,w-ax-24)/Math.max(ux,.2))*.62,ex=ax+ux*len*bi,ey=ay+uy*len*bi;
        c.save();c.lineCap="butt";
        var gl=c.createLinearGradient(ax,ay,ax+ux*len,ay+uy*len);gl.addColorStop(0,"rgba(120,186,240,0)");gl.addColorStop(.12,"rgba(120,186,240,.55)");gl.addColorStop(1,"rgba(120,186,240,0)");
        c.strokeStyle=gl;c.lineWidth=1.2;c.setLineDash([6,7]);c.beginPath();c.moveTo(ax+ux*14,ay+uy*14);c.lineTo(ex,ey);c.stroke();c.setLineDash([]);
        if(bi>.98&&!RM){
          var ph=(t%3.2)/3.2,u2=sm(0,1,ph),px=ax+ux*len*(.08+.8*u2),py=ay+uy*len*(.08+.8*u2),pa=Math.sin(Math.PI*u2)*.7;
          c.globalCompositeOperation="lighter";var pg=c.createRadialGradient(px,py,0,px,py,14);pg.addColorStop(0,"rgba(160,210,250,"+pa.toFixed(3)+")");pg.addColorStop(1,"rgba(61,155,230,0)");
          c.fillStyle=pg;c.beginPath();c.arc(px,py,14,0,Math.PI*2);c.fill();
        }
        c.restore();
      }
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(6,13,22,.95)");lv.addColorStop(.6,"rgba(6,13,22,.55)");lv.addColorStop(1,"rgba(6,13,22,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(6,13,22,.6)");tv.addColorStop(1,"rgba(6,13,22,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(10,20,33,0)");bv.addColorStop(1,"rgba(10,20,33,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(6,13,22,.6)");tv2.addColorStop(1,"rgba(6,13,22,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-46,0,G.bh);mv.addColorStop(0,"rgba(10,20,33,0)");mv.addColorStop(1,"rgba(10,20,33,1)");c.fillStyle=mv;c.fillRect(0,G.bh-46,w,47);
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

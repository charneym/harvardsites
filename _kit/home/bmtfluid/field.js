/* ================= HERO FIELD: a crafted render of BMT's core product class (HOME_BRIEF update 2c): a miniature 2/2-way
   solenoid valve for analytical and medical devices (bmt-industrie.de / pumpen-ventile.de "Miniatur Magnetventile";
   COMPAMED 2026 listing "Micro Solenoid Valves"), unbranded: brushed stainless body, two barbed hose ports, a black coil, an
   armature tube with lock nut and two terminal pins. Rendered offline with three.js physical materials
   (render/valve.html), matted from black/white renders into real alpha (render/comp.py), so there is no box edge (DJ/DP).
   It sits whole in the open area right of the headline (DO), with an ink scrim over the text side (DI), a soft slate halo
   and a faint magenta rim glow from the logo; a slow breathing drift, no pointer response (CZ). On phones it sits in the
   top band and fades into the ink above the eyebrow (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},HY=0,G=null,img=new Image(),ok=false;
  var BG="#161c23";
  img.decoding="async";img.onload=function(){ok=true;size()};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}
    var f=document.querySelector("#view .hero .hero-foot .s");if(f){var b=f.getBoundingClientRect();if(b.width>0&&b.right>r&&b.top<innerHeight)r=b.right}return r}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var HR=0;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var AR=img.naturalWidth&&img.naturalHeight?img.naturalWidth/img.naturalHeight:.93;
    if(!mob){
      /* DO: centre of the open area right of the H1/lede, held at 62-75% of the width; >=110px clear of the text (DP) */
      var L=Math.max(HR+Math.max(120,w*.07),w*.5),R=w-Math.max(56,w*.05),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75),half=Math.min(cx-L,R-cx);
      var top=Math.max(118,h*.15),bot=h-Math.max(56,h*.08);
      var ih=Math.min(bot-top,2*half/AR)*.9,iw=ih*AR;
      return {mob:0,side:side,cw:cw,iw:iw,ih:ih,kx:cx,ky:(top+bot)/2,bh:h};
    }
    var ey=document.querySelector("#view .hero .eyebrow"),eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var t2=92,b2=Math.max(250,eyT-40),ih2=Math.min(b2-t2,w*.86/AR)*.9;
    return {mob:1,side:side,cw:cw,iw:ih2*AR,ih:ih2,kx:w*.5,ky:(t2+b2)/2,bh:b2+30};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      var k=.5-.5*Math.cos(t*Math.PI*2/48),sc=(1+.025*k)*(1+.04*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2,y=G.ky-dh/2-k*G.ih*.01+HY;
      /* a broad slate halo across the WHOLE canvas (never inside the image rect alone), so no edge can read as a box (DJ) */
      var gr=Math.max(w,h)*.75,ag=c.createRadialGradient(G.kx,G.ky,0,G.kx,G.ky,gr);
      ag.addColorStop(0,"rgba(58,72,86,"+(.55*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(38,49,59,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(22,28,35,0)");
      /* ambient glow removed (topfix) */
      /* a faint magenta rim glow behind the right side of the valve, breathing every ~10s */
      var pu=.5+.5*Math.sin(t*Math.PI*2/10),px=x+dw*.72,py=y+dh*.45,pr=dw*.7;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(236,0,140,"+((.10+.04*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(236,0,140,0)");
      /* rim glow removed (topfix) */
      /* a soft contact shadow under the body */
      var sx=x+dw*.5,sy=y+dh*.97,sr=dw*.5;c.save();c.translate(sx,sy);c.scale(1,.16);var sg=c.createRadialGradient(0,0,0,0,0,sr);sg.addColorStop(0,"rgba(5,7,10,"+(.55*e).toFixed(3)+")");sg.addColorStop(1,"rgba(5,7,10,0)");c.fillStyle=sg;c.fillRect(-sr,-sr,sr*2,sr*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left that eases out over a long distance; a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.56,0);lv.addColorStop(0,"rgba(15,20,25,.9)");lv.addColorStop(.55,"rgba(15,20,25,.5)");lv.addColorStop(1,"rgba(15,20,25,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(15,20,25,.55)");tv.addColorStop(1,"rgba(15,20,25,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.66,0,h);bv.addColorStop(0,"rgba(22,28,35,0)");bv.addColorStop(1,"rgba(22,28,35,.8)");c.fillStyle=bv;c.fillRect(0,h*.66,w,h*.34+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,80);tv2.addColorStop(0,"rgba(15,20,25,.6)");tv2.addColorStop(1,"rgba(15,20,25,0)");c.fillStyle=tv2;c.fillRect(0,0,w,80);
        var mv=c.createLinearGradient(0,G.bh-70,0,G.bh);mv.addColorStop(0,"rgba(22,28,35,0)");mv.addColorStop(1,"rgba(22,28,35,1)");c.fillStyle=mv;c.fillRect(0,G.bh-70,w,71);
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
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40;var hy=0,hr=G&&!G.mob?document.querySelector("#view #hero"):null;if(hr){var b=hr.getBoundingClientRect();if(b.bottom>0)hy=Math.min(0,b.top)}if(hy!==HY){HY=hy;frame(true)}},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

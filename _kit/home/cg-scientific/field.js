/* ================= HERO FIELD: a crafted render of CG Scientific's product (HOME_BRIEF update 2026-11-20, option c): a clear
   cyclic-olefin-polymer HEDS chip on a dark bench, whole blood at the inlet, the separation chamber clearing to a pale
   PBMC stream at one outlet and red waste at the other. Baked offline with three.js (render/chip.html, render/bake.js) to
   hero.webp at 3200x1800, lit in the logo's navy, plum and mauve. Drawn cover-fit with a slow Ken Burns drift and a faint
   band of light that travels along the chip in the direction of flow. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[w/2,h/2];
  var FX=.53,FY=.52;
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  img.onload=function(){ok=true;frame(true)};img.src="data:image/webp;base64,__HERO__";
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!ok)return;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var mob=w<861,iw=img.naturalWidth,ih=img.naturalHeight,H=mob?h*.42:h;
    /* slow drift: a 50s breathing zoom with a gentle sideways travel, settling a touch as you scroll */
    var k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/50)),sc=mob?(w/iw)*1.32*(1+.04*k):Math.max(w/iw*1.02,Math.max(w/iw,H/ih)*.9)*(1+.04*k)*(1+.03*SP.v);
    var dw=iw*sc,dh=ih*sc,fx=FX*dw,fy=FY*dh;
    var x=w*(mob?.5:.65)-fx+(RM?0:Math.sin(t*2*Math.PI/70)*w*.01),y=H*(mob?.56:.6)-fy+SP.v*H*.04;
    x=Math.min(0,Math.max(w-dw,x));if(dh>=H)y=Math.min(0,Math.max(H-dh,y));FOC=[x+fx,y+fy*.8];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    /* no visible image edge anywhere: ink outside the render, and a 150px feather from every edge that falls inside the frame */
    (function(){var F=150,K="20,17,42",ed=function(x0,y0,x1,y1,rx,ry,rw,rh){var g2=c.createLinearGradient(x0,y0,x1,y1);g2.addColorStop(0,"rgba("+K+",1)");g2.addColorStop(1,"rgba("+K+",0)");c.fillStyle=g2;c.fillRect(rx,ry,rw,rh)};
      c.fillStyle="rgb("+K+")";
      if(y>0){c.fillRect(0,0,w,y+1);ed(0,y,0,y+F,0,y,w,F)}
      if(y+dh<h){c.fillRect(0,y+dh-1,w,h-y-dh+1);ed(0,y+dh,0,y+dh-F,0,y+dh-F,w,F)}
      if(x>0){c.fillRect(0,0,x+1,h);ed(x,0,x+F,0,x,0,F,h)}
      if(x+dw<w){c.fillRect(x+dw-1,0,w-x-dw+1,h);ed(x+dw,0,x+dw-F,0,x+dw-F,0,F,h)}})();
    /* a soft band of light travels slowly along the chip, inlet to outlets, in the direction of flow */
    if(!RM){var sx=x+dw*(.16+.72*((t/22)%1)),sg=c.createLinearGradient(sx-dw*.09,0,sx+dw*.09,0);c.globalCompositeOperation="soft-light";
      sg.addColorStop(0,"rgba(236,200,226,0)");sg.addColorStop(.5,"rgba(236,200,226,.22)");sg.addColorStop(1,"rgba(236,200,226,0)");c.fillStyle=sg;c.fillRect(x+dw*.14,y+dh*.3,dw*.78,dh*.44);c.globalCompositeOperation="source-over"}
    if(!mob){var lv=c.createLinearGradient(0,0,w*.62,0);lv.addColorStop(0,"rgba(20,17,42,.84)");lv.addColorStop(.5,"rgba(20,17,42,.55)");lv.addColorStop(1,"rgba(20,17,42,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(20,17,42,.55)");tv.addColorStop(1,"rgba(20,17,42,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(20,17,42,0)");bv.addColorStop(1,"rgba(20,17,42,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var tg=c.createLinearGradient(0,0,0,H*.3);tg.addColorStop(0,"rgba(20,17,42,.6)");tg.addColorStop(1,"rgba(20,17,42,0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.3);
      var fg=c.createLinearGradient(0,H*.66,0,H);fg.addColorStop(0,"rgba(20,17,42,0)");fg.addColorStop(1,"rgba(20,17,42,1)");c.fillStyle=fg;c.fillRect(0,H*.66-1,w,H*.34+2);c.fillStyle="#14112a";c.fillRect(0,H-1,w,h-H+2)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return FOC}};
})();

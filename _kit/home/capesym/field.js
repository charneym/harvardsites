/* ================= HERO FIELD: the firm's own photograph of a large-area detector film held in a gloved hand, from the
   CapeSym home page gallery (capesym.com). Graded toward the ink, set on the right with its left edge dissolving into the
   ink behind a strong scrim, so the H1 and lede sit on ink. A slow Ken Burns drift and a faint cool band of light passing
   across the film, as if an inspection lamp were moved over it. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[w/2,h/2];
  var FX=.6,FY=.52;
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
    var k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/50)),sc=Math.max(mob?w/iw:w*.78/iw,H/ih)*(mob?1.04:1.05)*(1+.035*k)*(1+.03*SP.v);
    var dw=iw*sc,dh=ih*sc,fx=FX*dw,fy=FY*dh;
    var x=w*.5-fx,y=H*(mob?.5:.52)-fy+SP.v*H*.04;
    if(!mob)x=w-dw+dw*.022+(RM?0:Math.sin(t*2*Math.PI/70)*dw*.012);
    x=Math.min(mob?0:w*.4,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));FOC=[x+fx,y+fy*.8];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    /* desktop: the photo sits on the right; its left edge dissolves into the ink, so the glove and film start past ~50% width */
    if(!mob&&x>0){c.fillStyle="#0d131a";c.fillRect(0,0,Math.ceil(x)+1,h);var ef=c.createLinearGradient(x,0,x+dw*.22,0);ef.addColorStop(0,"rgba(13,19,26,1)");ef.addColorStop(1,"rgba(13,19,26,0)");c.fillStyle=ef;c.fillRect(x,0,dw*.22+1,h)}
    /* a faint cool band of light passes slowly across the film, as if an inspection lamp were moved over it */
    if(!RM){var sx=x+dw*(.3+.68*((t/30)%1)),sg=c.createLinearGradient(sx-dw*.09,0,sx+dw*.09,0);c.globalCompositeOperation="soft-light";
      sg.addColorStop(0,"rgba(205,228,255,0)");sg.addColorStop(.5,"rgba(205,228,255,.22)");sg.addColorStop(1,"rgba(205,228,255,0)");c.fillStyle=sg;c.fillRect(x+dw*.3,y+dh*.02,dw*.68,dh*.86);c.globalCompositeOperation="source-over"}
    if(!mob){var lv=c.createLinearGradient(0,0,w*.7,0);lv.addColorStop(0,"rgba(13,19,26,.96)");lv.addColorStop(.6,"rgba(13,19,26,.86)");lv.addColorStop(.8,"rgba(13,19,26,.45)");lv.addColorStop(1,"rgba(13,19,26,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(13,19,26,.55)");tv.addColorStop(1,"rgba(13,19,26,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(13,19,26,0)");bv.addColorStop(1,"rgba(13,19,26,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var tg=c.createLinearGradient(0,0,0,H*.3);tg.addColorStop(0,"rgba(13,19,26,.6)");tg.addColorStop(1,"rgba(13,19,26,0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.3);
      var fg=c.createLinearGradient(0,H*.66,0,H);fg.addColorStop(0,"rgba(13,19,26,0)");fg.addColorStop(1,"rgba(13,19,26,1)");c.fillStyle=fg;c.fillRect(0,H*.66-1,w,H*.34+2);c.fillStyle="#0d131a";c.fillRect(0,H-1,w,h-H+2)}
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

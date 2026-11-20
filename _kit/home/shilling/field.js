/* ================= HERO FIELD: a real photograph of a working engineering shop at first light: low sun through the tall
   factory windows, long shadows across the floor and the machines (Cemrecan Yurtman on Unsplash,
   unsplash.com/photos/the-sun-is-shining-through-the-windows-of-a-factory-hwIrgD8FC8M; Unsplash License; source in the
   dossier). Shilling buys established, proven SMEs, most recently a Black Country section and press-brake bending works.
   Mirrored so the windows sit on the right, graded toward the logo's charcoal and warm red at assemble time, drawn
   cover-fit with a slow Ken Burns drift and dust motes turning in the sunbeams. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[w/2,h/2];
  var FX=.8,FY=.3;
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
    var k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/50)),sc=Math.max(w/iw,H/ih)*(mob?1.04:1.03)*(1+.04*k)*(1+.03*SP.v);
    var dw=iw*sc,dh=ih*sc,fx=FX*dw,fy=FY*dh;
    var x=w*(mob?.62:.78)-fx+(RM?0:Math.sin(t*2*Math.PI/70)*w*.01),y=H*(mob?.42:.36)-fy+SP.v*H*.04;
    x=Math.min(0,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));FOC=[x+fx,y+fy*.8];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    /* dust motes drifting in the light from the windows */
    c.globalCompositeOperation="lighter";
    for(var i=0;i<38;i++){var u=(i*.618)%1,v=(i*.377)%1,px=x+dw*(.48+.46*((u+t*.003*(1+i%4))%1)),py=y+dh*(.18+.62*((v+Math.sin(t*.2+i)*.02+t*.0016*(1+i%3))%1)),
      a=.10+.08*Math.sin(t*.9+i*1.3),rr=.8+(i%3)*.6;if(a<=0)continue;c.fillStyle="rgba(255,226,186,"+a.toFixed(3)+")";c.beginPath();c.arc(px,py,rr,0,7);c.fill()}
    c.globalCompositeOperation="source-over";
    if(!mob){var lv=c.createLinearGradient(0,0,w*.62,0);lv.addColorStop(0,"rgba(20,19,21,.84)");lv.addColorStop(.5,"rgba(20,19,21,.55)");lv.addColorStop(1,"rgba(20,19,21,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(20,19,21,.55)");tv.addColorStop(1,"rgba(20,19,21,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(28,27,29,0)");bv.addColorStop(1,"rgba(28,27,29,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var tg=c.createLinearGradient(0,0,0,H*.3);tg.addColorStop(0,"rgba(20,19,21,.6)");tg.addColorStop(1,"rgba(20,19,21,0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.3);
      var fg=c.createLinearGradient(0,H*.66,0,H);fg.addColorStop(0,"rgba(28,27,29,0)");fg.addColorStop(1,"rgba(28,27,29,1)");c.fillStyle=fg;c.fillRect(0,H*.66-1,w,H*.34+2);c.fillStyle="#1c1b1d";c.fillRect(0,H-1,w,h-H+2)}
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

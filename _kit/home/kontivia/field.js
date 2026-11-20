/* ================= HERO FIELD: a real photograph of Zürich, the firm's home, on a clear morning: the Limmat running through
   the old town past the Grossmünster and St. Peter's clock tower to the lake, the Alps on the horizon (Henrique Ferreira,
   unsplash.com/photos/omiTbS-nb_M, Unsplash License; source recorded in the dossier). Graded at build time toward the logo
   navy (#322f55) in the shadows and its gold (#906c1e) in the highlights; drawn cover-fit with a slow Ken Burns drift and a
   soft scrim behind the copy column. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false;
  var FX=.56,FY=.42;
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
    var mob=w<861,iw=img.naturalWidth,ih=img.naturalHeight,H=mob?h*.4:h;
    /* slow drift: a 60s breathing zoom with a gentle sideways travel, settling a touch as you scroll */
    var k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/60)),sc=Math.max(w/iw,H/ih)*(1.05+.05*k)*(1+.03*SP.v)*(1.03-.03*e);
    var dw=iw*sc,dh=ih*sc,fx=FX*dw,fy=FY*dh;
    var x=w*(mob?.5:.6)-fx+(RM?0:Math.sin(t*2*Math.PI/80)*w*.01),y=H*.45-fy+SP.v*H*.04;
    x=Math.min(0,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#2c2a4c";c.fillRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    c.globalAlpha=1;
    if(mob){
      var tg=c.createLinearGradient(0,0,0,H*.3);tg.addColorStop(0,"rgba(24,23,48,.55)");tg.addColorStop(1,"rgba(24,23,48,0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.3);
      var fg=c.createLinearGradient(0,H*.62,0,H);fg.addColorStop(0,"rgba(44,42,76,0)");fg.addColorStop(1,"rgba(44,42,76,1)");c.fillStyle=fg;c.fillRect(0,H*.62-1,w,H*.38+2);c.fillStyle="#2c2a4c";c.fillRect(0,H-1,w,h-H+2)}
    else{
      /* a navy scrim behind the copy column, a light veil overall, and a deeper foot */
      var lv=c.createLinearGradient(0,0,w*.66,0);lv.addColorStop(0,"rgba(24,23,48,.86)");lv.addColorStop(.55,"rgba(24,23,48,.55)");lv.addColorStop(1,"rgba(24,23,48,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      c.fillStyle="rgba(28,27,54,.16)";c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(24,23,48,.5)");tv.addColorStop(1,"rgba(24,23,48,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      var bv=c.createLinearGradient(0,h*.55,0,h);bv.addColorStop(0,"rgba(44,42,76,0)");bv.addColorStop(1,"rgba(44,42,76,.94)");c.fillStyle=bv;c.fillRect(0,h*.55,w,h*.45+1)}
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return [w*.62,h*.4]}};
})();

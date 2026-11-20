/* ================= HERO FIELD: a real photograph of the Seimon Ishibashi, the double-arched stone bridge at the Imperial
   Palace in Chiyoda, with the Fushimi-yagura above it, mirrored in the moat (Julie Anne Garrido on Unsplash,
   unsplash.com/photos/w-HlgSsLZgE; source recorded in the dossier). JPE is in Chiyoda-ku and describes its role as the
   橋渡し役 (bridge between owners and the next management). Graded to sumi ink and washi at assemble time, drawn cover-fit
   with a slow Ken Burns drift and a faint shimmer of light on the water. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[w/2,h/2];
  var FX=.52,FY=.64;
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second (QA-2 framing) */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var r=document.createRange();r.selectNodeContents(L[i]);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}TXc=m}catch(_){}}return TXc}
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
    var x=w*(mob?.5:.66)-fx+(RM?0:Math.sin(t*2*Math.PI/70)*w*.01),y=H*(mob?.58:.6)-fy+SP.v*H*.04;
    x=Math.min(0,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));
    if(!mob)y=Math.min(0,Math.max(H-dh,y*.72)); /* desktop: framed higher so the castle and the treetops keep headroom below the nav (QA-2) */
    FOC=[x+fx,y+fy*.8];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    /* light on the moat: a few soft horizontal glints drifting across the water under the arches */
    var wy=y+dh*.81,wh=dh*.19;c.globalCompositeOperation="lighter";
    for(var i=0;i<14;i++){var gx=x+dw*((i*.137+t*.004*(1+i%3))%1),gy=wy+wh*((i*.29)%1)*.8,gl=dw*(.03+.02*(i%4)),a=.05+.04*Math.sin(t*1.3+i*1.7);
      if(a<=0)continue;var g=c.createLinearGradient(gx,0,gx+gl,0);g.addColorStop(0,"rgba(255,236,206,0)");g.addColorStop(.5,"rgba(255,236,206,"+a.toFixed(3)+")");g.addColorStop(1,"rgba(255,236,206,0)");c.fillStyle=g;c.fillRect(gx,gy,gl,1.4)}
    c.globalCompositeOperation="source-over";
    if(!mob){var TE=Math.max(w*.3,TXR()+140),tg2=c.createLinearGradient(0,0,TE,0);tg2.addColorStop(0,"rgba(16,13,11,.45)");tg2.addColorStop((TE-140)/TE,"rgba(16,13,11,.45)");tg2.addColorStop(1,"rgba(16,13,11,0)");c.fillStyle=tg2;c.fillRect(0,0,TE,h); /* text scrim to the measured end of the H1/lede: the castle's white walls stay quiet behind the words */
      var lv=c.createLinearGradient(0,0,w*.62,0);lv.addColorStop(0,"rgba(16,13,11,.84)");lv.addColorStop(.5,"rgba(16,13,11,.55)");lv.addColorStop(1,"rgba(16,13,11,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(16,13,11,.55)");tv.addColorStop(1,"rgba(16,13,11,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(21,18,15,0)");bv.addColorStop(1,"rgba(21,18,15,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var tg=c.createLinearGradient(0,0,0,H*.3);tg.addColorStop(0,"rgba(16,13,11,.6)");tg.addColorStop(1,"rgba(16,13,11,0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.3);
      var fg=c.createLinearGradient(0,H*.66,0,H);fg.addColorStop(0,"rgba(21,18,15,0)");fg.addColorStop(1,"rgba(21,18,15,1)");c.fillStyle=fg;c.fillRect(0,H*.66-1,w,H*.34+2);c.fillStyle="#15120f";c.fillRect(0,H-1,w,h-H+2)}
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

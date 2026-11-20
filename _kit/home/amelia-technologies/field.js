/* ================= HERO FIELD: the firm's own photograph from amelia-technologies.com (a scientist at an electrophoresis
   set-up in their laboratory, TAE buffer on the bench), graded offline toward the logo-green ink (mostly desaturated,
   green-black shadows, bone highlights). Drawn cover-fit with a slow Ken Burns drift. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[w/2,h/2];
  var FX=.6,FY=.45;
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
    var x=w*(mob?.56:.7)-fx+(RM?0:Math.sin(t*2*Math.PI/70)*w*.01),y=H*(mob?.58:.6)-fy+SP.v*H*.04;
    x=Math.min(0,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));
    if(!mob){y=Math.min(0,Math.max(y,H-dh,(h<1000?118:132)-.08*dh)); /* her head (~8% down hero.webp) keeps headroom below the nav at every desktop size */
      x+=Math.max(0,Math.min(TXR()+40-(x+dw*.5),w-24-(x+dw*.8)));} /* the white coat (~50% across) moves out from behind the H1 and lede, but never so far that she leaves the frame; the strip this opens at the left is ink */
    else y=Math.max(y,46); /* phone: her head drops below the logo row; the strip above is ink under the top scrim */
    FOC=[x+fx,y+fy*.8];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    if(y>0){c.fillStyle="#0e1711";c.fillRect(0,0,w,y+1)}
    if(x>0){c.fillStyle="#0e1711";c.fillRect(0,0,x+1,h);var fe=c.createLinearGradient(x,0,x+220,0);fe.addColorStop(0,"rgba(14,23,17,1)");fe.addColorStop(1,"rgba(14,23,17,0)");c.fillStyle=fe;c.fillRect(x,0,220,h)}
    if(!mob){var TE=Math.max(w*.3,TXR()+150),tg2=c.createLinearGradient(0,0,TE,0);tg2.addColorStop(0,"rgba(14,23,17,.5)");tg2.addColorStop((TE-150)/TE,"rgba(14,23,17,.5)");tg2.addColorStop(1,"rgba(14,23,17,0)");c.fillStyle=tg2;c.fillRect(0,0,TE,h); /* text scrim: holds to the measured end of the H1/lede, so the coat never shows bright behind the words */
      var lv=c.createLinearGradient(0,0,w*.62,0);lv.addColorStop(0,"rgba(14,23,17,.84)");lv.addColorStop(.5,"rgba(14,23,17,.55)");lv.addColorStop(1,"rgba(14,23,17,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(14,23,17,.55)");tv.addColorStop(1,"rgba(14,23,17,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(14,23,17,0)");bv.addColorStop(1,"rgba(14,23,17,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var tg=c.createLinearGradient(0,0,0,H*.3);tg.addColorStop(0,"rgba(14,23,17,.6)");tg.addColorStop(1,"rgba(14,23,17,0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.3);
      var fg=c.createLinearGradient(0,H*.66,0,H);fg.addColorStop(0,"rgba(14,23,17,0)");fg.addColorStop(1,"rgba(14,23,17,1)");c.fillStyle=fg;c.fillRect(0,H*.66-1,w,H*.34+2);c.fillStyle="#0e1711";c.fillRect(0,H-1,w,h-H+2)}
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

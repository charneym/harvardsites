/* ================= HERO FIELD: the firm's own photograph of the hand-wound copper heat exchanger in the vacuum base of a
   Doty ULT (ultra-low-temperature) probe, from the ULT banner on dotynmr.com. Graded toward the ink, drawn cover-fit with
   a slow Ken Burns drift and a soft band of light travelling along the copper. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[w/2,h/2];
  var FX=.44,FY=.5;
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second (QA-2 framing) */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),n;while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
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
    var k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/50)),sc=Math.max(mob?w/iw:w*.7/iw,H/ih)*(mob?1.04:1.03)*(1+.04*k)*(1+.03*SP.v);
    var dw=iw*sc,dh=ih*sc,fx=FX*dw,fy=FY*dh;
    var x=w*(mob?.5:.66)-fx+(RM?0:Math.sin(t*2*Math.PI/70)*w*.01),y=H*(mob?.58:.6)-fy+SP.v*H*.04;
    if(!mob){x=Math.min(0,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));}else{x=Math.min(0,Math.max(w-dw,x));y=Math.min(0,Math.max(H-dh,y));}
    if(!mob){
      /* desktop (QA-2 R2): the whole steel frame (x .04-.84, y .12-.93 of the photo) sits between ~100px past the measured H1/lede end
         and the right content margin, below the nav and above the fold; the photo scales down to fit and its left edge feathers into the ground */
      var CR=w-Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2);try{var he=document.querySelector(".hero");if(he){var hr=he.getBoundingClientRect(),hp=parseFloat(getComputedStyle(he).paddingRight)||0;if(hr.width>0)CR=hr.right-hp}}catch(_){}
      var L0=TXR()+100,T0=110,B0=h-60,s2=Math.min((CR-L0)/(.80*iw),(B0-T0)/(.81*ih))/(1+.04*k)*(1+.04*k);
      dw=iw*s2;dh=ih*s2;x=L0-.04*dw+(CR-L0-.80*dw)/2+(RM?0:Math.sin(t*2*Math.PI/70)*4);y=T0-.12*dh+(B0-T0-.81*dh)/2;
    }
    FOC=[x+fx,y+fy*.8];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    /* desktop: the photo sits on the right; its left edge dissolves into the ink, so the coil bank starts at ~45% width */
    if(!mob){var G0="#121614";c.fillStyle=G0;c.fillRect(0,0,Math.ceil(x)+1,h);
      var ef=c.createLinearGradient(x,0,x+dw*.1,0);ef.addColorStop(0,"rgba(18,22,20,1)");ef.addColorStop(1,"rgba(18,22,20,0)");c.fillStyle=ef;c.fillRect(x,0,dw*.1+1,h);
      var er=c.createLinearGradient(x+dw*.8,0,x+dw*.9,0);er.addColorStop(0,"rgba(18,22,20,0)");er.addColorStop(1,"rgba(18,22,20,1)");c.fillStyle=er;c.fillRect(x+dw*.8,0,dw*.1+1,h);c.fillStyle=G0;c.fillRect(x+dw*.9,0,w,h);
      var et=c.createLinearGradient(0,y,0,y+dh*.11);et.addColorStop(0,"rgba(18,22,20,1)");et.addColorStop(1,"rgba(18,22,20,0)");c.fillStyle=G0;c.fillRect(0,0,w,Math.max(0,y)+1);c.fillStyle=et;c.fillRect(0,y,w,dh*.11);
      var eb=c.createLinearGradient(0,y+dh*.94,0,y+dh);eb.addColorStop(0,"rgba(18,22,20,0)");eb.addColorStop(1,"rgba(18,22,20,1)");c.fillStyle=eb;c.fillRect(0,y+dh*.94,w,dh*.06+1);c.fillStyle=G0;c.fillRect(0,y+dh-1,w,h)}
    /* a soft band of light travels slowly along the copper, as if a lamp were moved across the bench */
    if(!RM){var sx=x+dw*(.08+.84*((t/26)%1)),sg=c.createLinearGradient(sx-dw*.09,0,sx+dw*.09,0);c.globalCompositeOperation="soft-light";
      sg.addColorStop(0,"rgba(255,214,170,0)");sg.addColorStop(.5,"rgba(255,214,170,.32)");sg.addColorStop(1,"rgba(255,214,170,0)");c.fillStyle=sg;c.fillRect(x+dw*.06,y+dh*.16,dw*.66,dh*.7);c.globalCompositeOperation="source-over"}
    if(!mob){var lv=c.createLinearGradient(0,0,w*.7,0);lv.addColorStop(0,"rgba(18,22,20,.96)");lv.addColorStop(.6,"rgba(18,22,20,.86)");lv.addColorStop(.8,"rgba(18,22,20,.45)");lv.addColorStop(1,"rgba(18,22,20,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(18,22,20,.55)");tv.addColorStop(1,"rgba(18,22,20,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
      var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(18,22,20,0)");bv.addColorStop(1,"rgba(18,22,20,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28)}
    else{var tg=c.createLinearGradient(0,0,0,H*.3);tg.addColorStop(0,"rgba(18,22,20,.6)");tg.addColorStop(1,"rgba(18,22,20,0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.3);
      var fg=c.createLinearGradient(0,H*.66,0,H);fg.addColorStop(0,"rgba(18,22,20,0)");fg.addColorStop(1,"rgba(18,22,20,1)");c.fillStyle=fg;c.fillRect(0,H*.66-1,w,H*.34+2);c.fillStyle="#121614";c.fillRect(0,H-1,w,h-H+2)}
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

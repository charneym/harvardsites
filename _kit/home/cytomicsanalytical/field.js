/* ================= HERO FIELD: a crafted render of the real mechanism (HOME_BRIEF update 2026-11-20, option c). A quartz flow
   cell, the heart of every flow cytometer and of the firm's spectral work: a fused-silica block with a square micro-channel,
   fed through a tapered sheath chamber under a steel inlet fitting. Ray traced offline (flowcell.py: Fresnel reflection,
   refraction through quartz and sheath water, total internal reflection, a dark studio whose ground is exactly the page ink)
   and saved with alpha, so there is no box edge (DJ/DP). Live on top: the laser enters the right face and crosses the core
   stream; cells flow down the channel in single file and flash in the logo's green and orange as they cross the beam.
   No pointer response (CZ). On phones the upper half of the cell sits in the top band and fades into the ink. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,FOC=[0,0];
  var INK="#101412";
  /* image-space landmarks from flowcell.json (680 x 990 render) */
  var AX=325,FUN=347,IYI=457.6,BOT=975,ENT=[485.1,456.2],BD=[150,10.6],LFT=[199.8,436.1];
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second (DP framing) */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p,.hero .eyebrow");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),nd;while(nd=tw.nextNode()){if(!nd.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(nd);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  /* phones: top of the hero copy (the art fills the band above it) */
  var TTc=0,TTt=-1e9;function TXT(){var n=performance.now();if(n-TTt>1000||!TTc){TTt=n;try{var el=document.querySelector(".hero .eyebrow");if(el){var r=el.getBoundingClientRect();if(r.height>0)TTc=r.top+(window.scrollY||0)}}catch(_){}}return TTc||h*.4}
  function geo(){var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),mob=w<861;return {mob:mob,side:side,bh:mob?Math.min(h*.5,w*1.15):h}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  /* cells: fixed pseudo-random spacing along the channel, looping */
  var CELLS=[];(function(){var y=0,s=7;for(var i=0;i<14;i++){s=(s*9301+49297)%233280;y+=.045+.075*(s/233280);CELLS.push({o:y,k:i%2,r:.85+.3*((s%97)/97)})}var L=y+.06;CELLS.forEach(function(q){q.o/=L})})();
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok&&G){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=RM?0:.5-.5*Math.cos(t*Math.PI*2/60),s,x,y;
      if(!G.mob){
        /* the block (image x 140-520) centred in the open area right of the text, at least 100px clear of it, inside the right margin */
        var CR=w-G.side,L0=Math.max(TXR()+100,w*.5),T0=64,B0=h+8;
        s=Math.min((B0-T0)/ih,(CR-L0)/(400));s*=(1+.018*k);
        var cxb=Math.max(L0+200*s,Math.min(CR-200*s,(L0+CR)/2+20*s));
        x=cxb-330*s;y=T0+(B0-T0-ih*s)/2-SP.v*h*.03;
      }else{
        /* phones: the funnel, the interrogation point and the upper channel fill the top band */
        var T=TXT();G.bh=T;s=Math.min(w/520,(T*.66-56)/347)*(1+.018*k);x=w*.5-330*s;y=T*.66-IYI*s-SP.v*T*.04;
      }
      var X=function(u){return x+u*s},Y=function(v){return y+v*s};
      FOC=[X(AX),Y(IYI)];
      c.globalAlpha=e;c.drawImage(img,x,y,iw*s,ih*s);
      var ix=X(AX),iy=Y(IYI);
      c.globalCompositeOperation="lighter";
      /* the core stream: a faint bright thread down the channel axis */
      var cs=c.createLinearGradient(0,Y(FUN),0,Y(BOT-60));cs.addColorStop(0,"rgba(200,236,214,0)");cs.addColorStop(.12,"rgba(200,236,214,.16)");cs.addColorStop(.8,"rgba(200,236,214,.10)");cs.addColorStop(1,"rgba(200,236,214,0)");
      c.strokeStyle=cs;c.lineWidth=Math.max(1,1.4*s);c.beginPath();c.moveTo(ix,Y(FUN));c.lineTo(ix,Y(BOT-60));c.stroke();
      /* the laser: from the right, through the right face to the stream; fades out well before the right margin */
      var ex=X(ENT[0]),ey=Y(ENT[1]),bl=Math.hypot(BD[0],BD[1]),ux=BD[0]/bl,uy=BD[1]/bl,run=G.mob?(w-ex):Math.max(40,(w-G.side)-ex-10);
      var ax=ex+ux*run,ay=ey+uy*run,lg=c.createLinearGradient(ex,ey,ax,ay),pulse=.85+.15*Math.sin(t*2.1);
      lg.addColorStop(0,"rgba(110,170,255,"+(.75*pulse)+")");lg.addColorStop(.55,"rgba(110,170,255,"+(.28*pulse)+")");lg.addColorStop(1,"rgba(110,170,255,0)");
      c.strokeStyle=lg;c.lineWidth=Math.max(1.2,2.2*s);c.beginPath();c.moveTo(ex,ey);c.lineTo(ax,ay);c.stroke();
      c.lineWidth=Math.max(4,9*s);lg=c.createLinearGradient(ex,ey,ax,ay);lg.addColorStop(0,"rgba(90,150,255,"+(.16*pulse)+")");lg.addColorStop(1,"rgba(90,150,255,0)");c.strokeStyle=lg;c.beginPath();c.moveTo(ex,ey);c.lineTo(ax,ay);c.stroke();
      /* inside the glass, to the stream, then on to the far face and gone */
      var gg=c.createLinearGradient(ex,ey,X(LFT[0]),Y(LFT[1]));gg.addColorStop(0,"rgba(120,176,255,.62)");gg.addColorStop((ex-ix)/(ex-X(LFT[0])),"rgba(120,176,255,.5)");gg.addColorStop(1,"rgba(120,176,255,0)");
      c.strokeStyle=gg;c.lineWidth=Math.max(1,1.6*s);c.beginPath();c.moveTo(ex,ey);c.lineTo(ix,iy);c.lineTo(X(LFT[0]+30),Y(LFT[1]+2.6));c.stroke();
      /* the interrogation point glows softly all the time */
      var g0=c.createRadialGradient(ix,iy,0,ix,iy,26*s);g0.addColorStop(0,"rgba(140,190,255,.42)");g0.addColorStop(1,"rgba(140,190,255,0)");c.fillStyle=g0;c.fillRect(ix-30*s,iy-30*s,60*s,60*s);
      /* cells in single file: translucent discs; each flashes green or orange as it crosses the beam */
      var span=BOT-80-FUN,sp=RM?0:t*.028;
      for(var i=0;i<CELLS.length;i++){var q=CELLS[i],u=(q.o+sp)%1,vy=FUN+u*span,cy=Y(vy),r=Math.max(2.6,6.2*s*q.r);
        var a=sm(u/.08)*sm((1-u)/.18)*e;if(a<=0)continue;
        var d=(vy-IYI)/11,hit=Math.exp(-d*d);
        c.globalCompositeOperation="source-over";
        c.fillStyle="rgba(214,236,222,"+(.42*a)+")";c.beginPath();c.arc(ix,cy,r,0,6.283);c.fill();
        c.fillStyle="rgba(240,248,242,"+(.55*a)+")";c.beginPath();c.arc(ix-r*.18,cy-r*.12,r*.42,0,6.283);c.fill();c.strokeStyle="rgba(150,220,160,"+(.5*a)+")";c.lineWidth=1;c.beginPath();c.arc(ix,cy,r,0,6.283);c.stroke();
        if(hit>.02){c.globalCompositeOperation="lighter";var col=q.k?"241,67,18":"94,214,86",R=r*(3.4+3*hit);
          var fg=c.createRadialGradient(ix,cy,0,ix,cy,R);fg.addColorStop(0,"rgba("+col+","+(.9*hit*a)+")");fg.addColorStop(.35,"rgba("+col+","+(.35*hit*a)+")");fg.addColorStop(1,"rgba("+col+",0)");
          c.fillStyle=fg;c.fillRect(ix-R,cy-R,2*R,2*R)}
      }
      c.globalCompositeOperation="source-over";c.globalAlpha=1;
      if(!G.mob){
        /* scrim only behind the text; long eased fades, never ending on a line */
        var tx=Math.max(TXR(),w*.3),lv=c.createLinearGradient(0,0,tx+120,0);lv.addColorStop(0,"rgba(16,20,18,.6)");lv.addColorStop(.7,"rgba(16,20,18,.3)");lv.addColorStop(1,"rgba(16,20,18,0)");c.fillStyle=lv;c.fillRect(0,0,tx+121,h);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(16,20,18,0)");bv.addColorStop(1,"rgba(16,20,18,.55)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38+1);
      }else{
        var mb=G.bh-(window.scrollY||0)*0,m0=mb*.78,mv=c.createLinearGradient(0,m0,0,mb);mv.addColorStop(0,"rgba(16,20,18,0)");mv.addColorStop(.6,"rgba(16,20,18,.72)");mv.addColorStop(1,"rgba(16,20,18,1)");c.fillStyle=mv;c.fillRect(0,m0,w,mb-m0+1);
        c.fillStyle=INK;c.fillRect(0,mb,w,h-mb+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return FOC}};
})();

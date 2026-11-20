/* ================= HERO FIELD (HOME_BRIEF UPDATE 2b): a real photograph of the subject. Pexels photo 33764121
   (https://www.pexels.com/photo/modern-hospital-mri-machine-in-black-and-white-33764121/, Pexels licence): an MRI scanner in its
   room, the machine PETcoil's insert is built to slide into. grade.py crops it around the gantry, removes the maker's name and model plate, and
   grades it as a tritone with tonal depth (ink shadows, logo-teal low mids, slate mids, cool highlights), baked to hero.webp.
   Desktop (DP/DO/DI/DJ): the photo carries a long eased superellipse mask (no box edge at any size); the whole masked gantry sits
   between the measured H1/lede end + 100px and the right content margin, centred at ~68-72%, never upscaled; a light ink scrim only
   behind the text. A very slow Ken Burns
   breath; no pointer response (CZ). Phones: the gantry sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0c1619",BGA="rgba(12,22,25,0)";
  /* hero.webp carries its own long eased superellipse alpha mask around the gantry (grade.py), so the photo has no box edge
     at any size; the mask's visible extent is ~.98 of the image on both axes, centred at (.50,.50) */
  var IW=1450,IH=1533,VIS=.98;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),n;while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861,iw,ih,kx,ky,tx=0,dp=Math.min(window.devicePixelRatio||1,2);
    var U=mob?Math.min(h*.45,w*1.0):h;
    var nat=IW/Math.max(1,dp)*1.02; /* never upscale past the source (DP) */
    if(mob){
      ih=Math.min(U-64,w*1.08*IH/IW);iw=Math.min(ih*IW/IH,nat);ih=iw*IH/IW;
      kx=w/2;ky=Math.max(64+ih/2*VIS,U/2+30);
    }else{
      /* DP/DO: first visible pixel >= the measured H1/lede end + 100px; the whole masked photo inside the right content margin;
         centred at ~68-72% of the width; no taller than ~76% of the viewport, clear of the header */
      tx=TXR();var nb=document.querySelector('.nav .btn'),nr=nb&&nb.getBoundingClientRect().width?nb.getBoundingClientRect().right:0;
      var L=Math.max(tx,side+cw*.38)+100,R=nr>w*.6?nr:w-side; /* the real right content margin (fit.js widens the container at large widths) */
      var cx=Math.min(Math.max((L+R)/2,w*.70),w*.73),half=Math.min(cx-L,R-cx);
      iw=Math.min(2*half/VIS,(h*.76)/VIS*IW/IH,nat)/1.04; /* /1.04: room for the breathing zoom */
      ih=iw*IH/IW;kx=cx;ky=Math.max(h*.53,92+ih*VIS/2*1.04);
    }
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,tx:tx};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
    var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~3.5% and drift a touch over ~46s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.03*(1-e));
      if(!G.mob&&Math.abs(TXR()-G.tx)>2)G=geo(); /* re-centre once the hero text has its final width (fonts, reveal) */
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2-k*G.iw*.006,y=G.ky-dh/2-k*G.ih*.006-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet: an ink wash from the left that ends before the gantry, a soft top and base */
        var sx=Math.max(G.tx,G.side+G.cw*.38)+60;
        var lv=c.createLinearGradient(0,0,sx,0);lv.addColorStop(0,"rgba(8,16,19,.6)");lv.addColorStop(1,"rgba(8,16,19,0)");c.fillStyle=lv;c.fillRect(0,0,sx,h);
        var tv=c.createLinearGradient(0,0,0,h*.18);tv.addColorStop(0,"rgba(8,16,19,.6)");tv.addColorStop(1,"rgba(8,16,19,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.18);
        var bv=c.createLinearGradient(0,h*.74,0,h);bv.addColorStop(0,"rgba(12,22,25,0)");bv.addColorStop(1,"rgba(12,22,25,.8)");c.fillStyle=bv;c.fillRect(0,h*.74,w,h*.26+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.26);tv2.addColorStop(0,"rgba(8,16,19,.7)");tv2.addColorStop(1,"rgba(8,16,19,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);mv.addColorStop(0,BGA);mv.addColorStop(1,BG);c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

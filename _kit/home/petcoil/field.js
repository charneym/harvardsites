/* ================= HERO FIELD (HOME_BRIEF UPDATE 2b): a real photograph of the subject. Pexels photo 33764121
   (https://www.pexels.com/photo/modern-hospital-mri-machine-in-black-and-white-33764121/, Pexels licence): an MRI scanner in its
   room, the machine PETcoil's insert is built to slide into. grade.py crops it to the gantry, bore and table head, removes the
   maker's name and model plate, and grades it to the logo (ink -> logo teal #08708a -> pale cyan), baked to hero.webp.
   Desktop (DO/DI/DJ): the whole gantry sits centred in the open area right of the measured H1/lede (centre at no more than ~74%
   of the width), every edge of the photo feathered into the page ink, an ink scrim only behind the text. A very slow Ken Burns
   breath; no pointer response (CZ). Phones: the gantry sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0c1619",BGA="rgba(12,22,25,0)";
  var IW=1540,IH=1433,GX0=.17,GX1=.94,GY0=.06,GY1=.92,GCX=(GX0+GX1)/2,GCY=(GY0+GY1)/2; /* the gantry's box inside the photo */
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),n;while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861,iw,ih,kx,ky,tx=0;
    var U=mob?Math.min(h*.45,w*1.0):h;
    if(mob){
      /* the gantry fills the top band under the header */
      var gh=U-96;iw=Math.min(gh/(GY1-GY0)*(IW/IH),w*1.02/(GX1-GX0)*.92)/1.04;ih=iw*IH/IW;
      kx=w/2;ky=(76+U)/2;
    }else{
      tx=TXR();var L=Math.max(tx,side+cw*.4)+60,R=Math.min(w-56,2*w*.735-L);
      var gw=Math.min(R-L,(h-180)/(GY1-GY0)*(IW/IH)*(GX1-GX0),cw*.56);
      iw=gw/(GX1-GX0)/1.06;ih=iw*IH/IW; /* /1.06: room for the breathing zoom and the intro push */
      kx=(L+R)/2;ky=Math.max(h*.52,96+(GY1-GY0)*ih*.53);
    }
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,tx:tx};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function lg(x0,y0,x1,y1){var g=c.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,BG);g.addColorStop(1,BGA);return g}
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
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*GCX-k*G.iw*.008,y=G.ky-dh*GCY-k*G.ih*.008-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the photo's rectangle dissolves into the ink on every edge (DJ) */
      var fx=dw*.14,fy=dh*.12;
      c.fillStyle=lg(x,0,x+fx,0);c.fillRect(x-1,y-1,fx+1,dh+2);
      c.fillStyle=lg(x+dw,0,x+dw-fx,0);c.fillRect(x+dw-fx,y-1,fx+1,dh+2);
      c.fillStyle=lg(0,y,0,y+fy);c.fillRect(x-1,y-1,dw+2,fy+1);
      c.fillStyle=lg(0,y+dh,0,y+dh-fy);c.fillRect(x-1,y+dh-fy,dw+2,fy+1);
      if(x>0){c.fillStyle=BG;c.fillRect(0,0,Math.ceil(x),h)}
      if(x+dw<w){c.fillStyle=BG;c.fillRect(Math.floor(x+dw),0,w,h)}
      if(y>0){c.fillStyle=BG;c.fillRect(0,0,w,Math.ceil(y))}
      if(y+dh<h){c.fillStyle=BG;c.fillRect(0,Math.floor(y+dh),w,h)}
      if(!G.mob){
        /* the headline side stays quiet: an ink wash from the left that ends before the gantry, a soft top and base */
        var sx=Math.max(G.tx,G.side+G.cw*.4)+40;
        var lv=c.createLinearGradient(0,0,sx,0);lv.addColorStop(0,"rgba(8,16,19,.94)");lv.addColorStop(.72,"rgba(8,16,19,.8)");lv.addColorStop(1,"rgba(8,16,19,0)");c.fillStyle=lv;c.fillRect(0,0,sx,h);
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

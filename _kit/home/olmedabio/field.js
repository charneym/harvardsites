/* ================= HERO FIELD: a crafted render of the subject (HOME_BRIEF 2c): an engraved sagittal section of the human eye,
   cornea to optic nerve, drawn by eye.py in the logo's tree brown (#4c3114) and wordmark sienna (#863e16) with cream tints, and
   baked to hero.webp at 1.6x. The aqueous humor of the anterior chamber is lit (the fluid Olmeda's tests read), with a small
   uveal melanoma dome on the back wall. Drawn here with a slow Ken Burns breath and a faint, slow pulse of light in the
   anterior chamber. It moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the
   ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#1c1209";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second (QA-2 framing) */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),n;while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.45,w*1.0):h;
    /* the globe's centre sits at about (0.543, 0.507) of the render */
    var ih=mob?(U-104)/.667:Math.min(h*1.02,cw*.84),iw=ih*(2240/2400);
    var kx=mob?w/2-.032*iw:side+cw*.79,ky=mob?(84+U)/2+6:h*.52,tx=0;
    if(!mob){
      /* desktop (QA-2 R2): the whole eye, optic nerve included (x .08-1.0, y .17-.84 of the render), sits centred in the open area
         right of the measured H1/lede, its centre at no more than ~74% of the width, with clear room at both sides, under the nav and above the fold */
      tx=TXR();var L=Math.max(tx,side+cw*.4)+64,R=Math.min(w-64,2*w*.74-L);
      iw=Math.min((R-L)/.92,(h-170)/.718,cw*.62)/1.09;ih=iw*(2400/2240); /* /1.09: room for the breathing zoom and the intro push */
      kx=(L+R)/2-.46*iw-.08*iw+.543*iw;ky=Math.max(h*.5,118+.337*ih);
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
      /* a very slow breath: push in ~4% and drift up a touch over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.04*k)*(1+.035*(1-e));
      if(!G.mob&&Math.abs(TXR()-G.tx)>2)G=geo(); /* re-centre once the hero text has its final width (fonts, reveal) */
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.543,y=G.ky-dh*.507-k*G.ih*.012-SP.v*G.ih*.06;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint, slow pulse of light in the anterior chamber, where the aqueous humor is */
      var pu=.5+.5*Math.sin(t*Math.PI*2/7),px=x+dw*(270/1400),py=y+dh*(760/1500),pr=dw*.17;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,214,160,"+(.07+.07*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,214,160,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){ /* the render's rectangle dissolves into the page ground at its left, top and bottom edges */
        var fl=c.createLinearGradient(x,0,x+dw*.1,0);fl.addColorStop(0,BG);fl.addColorStop(1,"rgba(28,18,9,0)");c.fillStyle=fl;c.fillRect(x-1,y-1,dw*.1+1,dh+2);
        var ft=c.createLinearGradient(0,y,0,y+dh*.16);ft.addColorStop(0,BG);ft.addColorStop(1,"rgba(28,18,9,0)");c.fillStyle=ft;c.fillRect(x-1,y-1,dw+2,dh*.16+1);
        var fb=c.createLinearGradient(0,y+dh,0,y+dh*.84);fb.addColorStop(0,BG);fb.addColorStop(1,"rgba(28,18,9,0)");c.fillStyle=fb;c.fillRect(x-1,y+dh*.84,dw+2,dh*.16+1);
      }
      if(!G.mob){
        /* the headline side stays quiet: a navy wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.56,0);lv.addColorStop(0,"rgba(20,12,6,.9)");lv.addColorStop(.6,"rgba(20,12,6,.45)");lv.addColorStop(1,"rgba(20,12,6,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(20,12,6,.6)");tv.addColorStop(1,"rgba(20,12,6,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(28,18,9,0)");bv.addColorStop(1,"rgba(28,18,9,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(20,12,6,.7)");tv2.addColorStop(1,"rgba(20,12,6,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh*.86,0,G.bh);mv.addColorStop(0,"rgba(28,18,9,0)");mv.addColorStop(1,"rgba(28,18,9,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.86,w,G.bh*.14+1);
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

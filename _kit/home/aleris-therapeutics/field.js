/* ================= HERO FIELD (HOME_BRIEF UPDATE 2b): a real scanning electron micrograph of a macrophage, the immune cell at the
   centre of inflammation (National Cancer Institute on Unsplash, Unsplash License: https://unsplash.com/photos/t24JyDUoJEg).
   The greyscale SEM is gradient-mapped from the page ink through warm grey to bone (tonal depth kept, no flat wash), padded and
   radially feathered into the ink, so no edge exists (DJ/DP). The whole cell sits centred in the open area right of the measured
   H1/lede, at least 100px clear of it (DO/DP). Slow Ken Burns breath; it moves on its own, so no pointer response (CZ). On phones
   it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0e1013";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second (QA-2 framing) */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),n;while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861,AR=1765/1700;
    var U=mob?Math.min(h*.46,w*1.02):h,iw,ih,kx,ky,tx=0;
    if(mob){ih=(U-70)/.84;iw=ih/AR;kx=w/2;ky=70+(U-70)/2}
    else{
      /* the cell (x .10-.88, y .09-.88 of the render) centred in the open area right of the measured H1/lede: >=100px clear of the
         text, centre at no more than ~72% of the width, under the nav and above the fold, with room for the breath (DO/DP) */
      tx=TXR();var L=Math.max(tx,side+cw*.38)+100,R=Math.min(w-56,2*w*.72-L);
      iw=Math.min((R-L)/.8,(h-200)/.8/AR,cw*.7)/1.08;ih=iw*AR;
      kx=(L+R)/2;ky=Math.max(h*.52,110+.42*ih);
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
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.49,y=G.ky-dh*.485-k*G.ih*.01-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet: a navy wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(14,16,19,.92)");lv.addColorStop(.7,"rgba(14,16,19,.5)");lv.addColorStop(1,"rgba(14,16,19,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(14,16,19,.6)");tv.addColorStop(1,"rgba(14,16,19,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(14,16,19,0)");bv.addColorStop(1,"rgba(14,16,19,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(14,16,19,.7)");tv2.addColorStop(1,"rgba(14,16,19,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh*.86,0,G.bh);mv.addColorStop(0,"rgba(14,16,19,0)");mv.addColorStop(1,"rgba(14,16,19,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.86,w,G.bh*.14+1);
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

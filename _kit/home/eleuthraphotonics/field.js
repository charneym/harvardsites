/* ================= HERO FIELD (HOME_BRIEF 2a: the firm's own imagery): Eleuthra's own label-free micrograph of freshly excised
   mouse pericardial fat, imaged unstained on Tetraquant(TM) in four nonlinear channels and merged (eleuthra.co/gallery-2, 516 px
   source, lightly desaturated). Shown whole as the microscope's round field of view, centred in the open area right of the
   measured H1/lede (DO), at most at its native pixel size (DP), with a long eased radial alpha falloff to the page ink so no
   edge or box is ever visible (DJ/DP). A very slow Ken Burns breath; it moves on its own, so no pointer response (CZ).
   On phones it sits in the top band above the text and fades into the ink (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,M=null;
  var BG="#110b13",NAT=516;
  img.decoding="async";img.onload=function(){M=mask();ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* the round field of view, baked once with real alpha: opaque to ~46% of the radius, then a long eased falloff to zero at the rim */
  function mask(){var s=NAT,o=document.createElement("canvas");o.width=o.height=s;var g=o.getContext("2d");g.drawImage(img,(s-img.width)/2,(s-img.height)/2);
    g.globalCompositeOperation="destination-in";var r=g.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);
    for(var i=0;i<=24;i++){var u=i/24,a=u<.46?1:1-sm((u-.46)/.54);a=Math.pow(a,1.35);r.addColorStop(u,"rgba(0,0,0,"+a.toFixed(4)+")")}
    g.fillStyle=r;g.fillRect(0,0,s,s);return o}
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p,.hero .eyebrow");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),nd;while(nd=tw.nextNode()){if(!nd.nodeValue.trim())continue;var rg=document.createRange();rg.selectNodeContents(nd);var q=rg.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861,D,kx,ky,tx=0;
    var U=mob?Math.min(h*.45,w*1.0):h;
    if(mob){D=Math.min(NAT/1.05,w*.86,U-96)/.92;kx=w/2;ky=(76+U)/2+4}
    else{
      /* the visible disc (~92% of the baked square) starts >=100px right of the text and stays inside the right margin; its centre at ~62-75% of the width */
      tx=TXR();var L=Math.max(tx,side+cw*.42)+100,R=w-side;
      D=Math.min(NAT/1.05,(R-L)/.92,(h-200)/.92);kx=Math.min(Math.max((L+R)/2,w*.62),w*.75,R-D*.46);kx=Math.max(kx,L+D*.46);ky=Math.max(h*.52,96+D*.5);
    }
    return {mob:mob,side:side,cw:cw,U:U,D:D,kx:kx,ky:ky,bh:mob?U:h,tx:tx};
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
      if(!G.mob&&Math.abs(TXR()-G.tx)>2)G=geo(); /* re-centre once the hero text has its final width */
      /* slow breath: ~4% push and a slight rotation of the field over ~48s; never above the native size */
      var k=.5-.5*Math.cos(t*Math.PI*2/48),sc=(1+.045*k)*(1-.04*(1-e)),D=G.D*sc;
      c.save();c.globalAlpha=e;c.translate(G.kx,G.ky-SP.v*G.D*.08);c.rotate((k-.5)*.035);
      c.imageSmoothingQuality="high";c.drawImage(M,-D/2,-D/2,D,D);c.restore();c.globalAlpha=1;
      if(G.mob){
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);mv.addColorStop(0,"rgba(17,11,19,0)");mv.addColorStop(1,"rgba(17,11,19,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

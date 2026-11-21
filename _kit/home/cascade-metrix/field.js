/* ================= HERO FIELD: an offline three.js render (render.js, graded by grade.py) of a closed-loop flow cell:
   blood drawn from a central line, passed over three whole-blood sensor wells and returned, the AutoPlexer principle as
   Cascade Metrix and its NIH abstract describe it. A generic illustration, not their prototype. The image carries real
   alpha with a long eased radial falloff (DP/DJ), so it sits on the page ink with no edge. Desktop: centred in the open
   area between ~100px past the measured H1/lede and the right content margin, never upscaled past native size; a slow
   breathing drift and a touch of scroll parallax. No pointer response. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[0,0];
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p,.hero-foot .act");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),nd;while(nd=tw.nextNode()){if(!nd.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(nd);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  img.onload=function(){ok=true;frame(true)};img.src="data:image/webp;base64,__HERO__";
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);TXt=-1e9;if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!ok)return;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var mob=w<861,iw=img.naturalWidth,ih=img.naturalHeight,k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/48)),dw,dh,x,y;
    if(!mob){
      var CR=w-Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2);try{var he=document.querySelector(".hero");if(he){var hr=he.getBoundingClientRect(),hp=parseFloat(getComputedStyle(he).paddingRight)||0;if(hr.width>0)CR=hr.right-hp}}catch(_){}
      /* the visible subject spans ~x .07-.95 and y .10-.92 of the image; first pixel lands >=100px past the text */
      var L0=TXR()+100,T0=96,B0=h-40,s2=Math.min((CR-L0)/(.88*iw),(B0-T0)/(.82*ih),1);
      s2*=(1+.025*k);dw=iw*s2;dh=ih*s2;
      x=L0-.07*dw+(CR-L0-.88*dw)/2+(RM?0:Math.sin(t*2*Math.PI/70)*5);
      y=T0-.10*dh+(B0-T0-.82*dh)/2-SP.v*h*.05;
    }else{
      var H=h*.44;dw=Math.min(w*1.18,iw);dh=dw*ih/iw;dw*=(1+.025*k);dh*=(1+.025*k);
      x=(w-dw)/2+w*.04;y=58+(H-58-dh)/2-SP.v*H*.06;
    }
    FOC=[x+dw*.55,y+dh*.5];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
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

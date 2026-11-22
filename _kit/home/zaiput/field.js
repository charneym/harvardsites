/* ================= HERO FIELD: Zaiput's own product photograph (cut out on real alpha, from zaiput.com): a production-scale
   membrane separator with a development-scale separator plumbed in front of it. It floats on the ink in the open area
   right of the headline, whole and in frame, with a slow breathing drift and a soft teal glow beneath. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[0,0];
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p,.hero-foot .act");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),nd;while(nd=tw.nextNode()){if(!nd.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(nd);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  img.onload=function(){ok=true;frame(true)};img.src="data:image/webp;base64,__HERO__";
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!ok)return;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var mob=w<861,iw=img.naturalWidth,ih=img.naturalHeight,k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/40)),fl=RM?0:Math.sin(t*2*Math.PI/14);
    var x,y,dw,dh;
    if(!mob){
      /* the whole object sits between ~110px past the measured text end and the right content margin, well below the nav */
      var CR=w-Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2);try{var he=document.querySelector(".hero");if(he){var hr=he.getBoundingClientRect(),hp=parseFloat(getComputedStyle(he).paddingRight)||0;if(hr.width>0)CR=hr.right-hp}}catch(_){}
      var L0=Math.max(TXR()+110,w*.47),T0=Math.max(130,h*.15),B0=h-Math.max(120,h*.14);
      var s=Math.min((CR-L0)/iw,(B0-T0)/ih,1/dpr*1.4,.62);
      dw=iw*s*(1+.012*k);dh=ih*s*(1+.012*k);
      x=L0+(CR-L0-dw)/2;y=T0+(B0-T0-dh)/2+fl*5-SP.v*40;
    }else{
      var H=h*.40,top=82,s2=Math.min((w-48)/iw,(H-top-10)/ih);
      dw=iw*s2*(1+.012*k);dh=ih*s2*(1+.012*k);x=(w-dw)/2;y=top+(H-top-dh)/2+fl*3-SP.v*30;
    }
    FOC=[x+dw/2,y+dh/2];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    /* a soft pool of teal light behind and under the separator, eased out over a long radius */
    var gx=x+dw*.5,gy=y+dh*.62,gr=Math.max(dw,dh)*.85,g=c.createRadialGradient(gx,gy,0,gx,gy,gr);
    g.addColorStop(0,"rgba(62,196,226,"+(.16+.03*k).toFixed(3)+")");g.addColorStop(.45,"rgba(62,196,226,.06)");g.addColorStop(1,"rgba(62,196,226,0)");
    c.fillStyle=g;c.fillRect(gx-gr,gy-gr,gr*2,gr*2);
    /* contact shadow on the bench */
    c.save();c.translate(x+dw*.52,y+dh*.985);c.scale(1,.12);var sh=c.createRadialGradient(0,0,0,0,0,dw*.5);sh.addColorStop(0,"rgba(3,6,18,.55)");sh.addColorStop(1,"rgba(3,6,18,0)");c.fillStyle=sh;c.beginPath();c.arc(0,0,dw*.5,0,Math.PI*2);c.fill();c.restore();
    c.imageSmoothingQuality="high";c.drawImage(img,x,y,dw,dh);
    if(mob){var fg=c.createLinearGradient(0,h*.40,0,h*.5);fg.addColorStop(0,"rgba(13,20,48,0)");fg.addColorStop(1,"rgba(13,20,48,1)");c.fillStyle=fg;c.fillRect(0,h*.40,w,h*.1+1);c.fillStyle="#0d1430";c.fillRect(0,h*.5,w,h*.5+1)}
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

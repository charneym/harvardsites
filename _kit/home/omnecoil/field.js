/* ================= HERO FIELD: a real photograph of an MRI scanner (Pexels #7089017, MART PRODUCTION, Pexels licence),
   the scanner the OmnEcoil system works inside. Maker lettering removed, toned to the logo navy with depth, and given a long
   eased alpha mask offline (grade.py), so the picture has no edge. Desktop: the whole scanner is fitted between the measured
   H1/lede end + 100px and the right content margin, bore at ~70% of the width; a slow Ken Burns drift about the bore and a
   slowly breathing bore light. Scrim only behind the text. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},img=new Image(),ok=false,FOC=[0,0];
  /* in hero.webp fractions (printed by grade.py): scanner box and bore */
  var BX0=.367,BX1=.842,BY0=.108,BY1=.884,BOX=.567,BOY=.475,IK="13,26,43";
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),nd;while(nd=tw.nextNode()){if(!nd.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(nd);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  img.onload=function(){ok=true;frame(true)};img.src="data:image/webp;base64,__HERO__";
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(!ok)return;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=IN.v<0?0:IN.v>1?1:IN.v;e=e*e*(3-2*e);cv.style.opacity=shown?String(.5+.5*dim):"";
    var mob=w<861,iw=img.naturalWidth,ih=img.naturalHeight,H=mob?h*.44:h;
    var k=RM?0:(.5-.5*Math.cos(t*2*Math.PI/50)),z=1+.025*k+.02*SP.v,x,y,dw,dh,s;
    if(!mob){
      var CR=w-Math.max(16,w*.042);try{var he=document.querySelector(".hero");if(he){var hr=he.getBoundingClientRect(),hp=parseFloat(getComputedStyle(he).paddingRight)||0;if(hr.width>0)CR=hr.right-hp}}catch(_){}
      var L0=TXR()+100,T0=92,B0=h-28;
      s=Math.min((CR-L0)/((BX1-BX0)*iw),(B0-T0)/((BY1-BY0)*ih));
      dw=iw*s;dh=ih*s;x=L0-BX0*dw+(CR-L0-(BX1-BX0)*dw)/2;y=T0-BY0*dh+(B0-T0-(BY1-BY0)*dh)/2;
    }else{
      /* phones: the scanner in a band above the text, bore centred */
      s=Math.max(w*1.05/((BX1-BX0)*iw),H*.95/((BY1-BY0)*ih));s=Math.min(s,H*1.25/((BY1-BY0)*ih));
      dw=iw*s;dh=ih*s;x=w*.5-BOX*dw;y=H*.52-BOY*dh;
    }
    /* Ken Burns: scale about the bore, with a slight drift */
    var bx=x+BOX*dw,by=y+BOY*dh;dw*=z;dh*=z;x=bx-BOX*dw+(RM?0:Math.sin(t*2*Math.PI/70)*4);y=by-BOY*dh+SP.v*H*.03;
    FOC=[bx,by];
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);c.globalAlpha=e;
    c.drawImage(img,x,y,dw,dh);
    /* the light inside the bore breathes slowly */
    if(!RM){var br=dw*.085,pu=.5-.5*Math.cos(t*2*Math.PI/9),bg=c.createRadialGradient(bx,by,0,bx,by,br);c.globalCompositeOperation="screen";
      bg.addColorStop(0,"rgba(180,210,245,"+(.08+.10*pu).toFixed(3)+")");bg.addColorStop(1,"rgba(180,210,245,0)");c.fillStyle=bg;c.fillRect(bx-br,by-br,br*2,br*2);c.globalCompositeOperation="source-over"}
    if(!mob){
      /* scrim behind the text only: it ends where the picture's breathing room begins */
      var se=Math.min(w*.6,TXR()+60),lv=c.createLinearGradient(0,0,se,0);lv.addColorStop(0,"rgba("+IK+",.6)");lv.addColorStop(.7,"rgba("+IK+",.35)");lv.addColorStop(1,"rgba("+IK+",0)");c.fillStyle=lv;c.fillRect(0,0,se,h);
    }else{
      var fg=c.createLinearGradient(0,H*.7,0,H);fg.addColorStop(0,"rgba("+IK+",0)");fg.addColorStop(1,"rgba("+IK+",1)");c.fillStyle=fg;c.fillRect(0,H*.7-1,w,H*.3+2);c.fillStyle="#0d1a2b";c.fillRect(0,H-1,w,h-H+2);
      var tg=c.createLinearGradient(0,0,0,H*.22);tg.addColorStop(0,"rgba("+IK+",.55)");tg.addColorStop(1,"rgba("+IK+",0)");c.fillStyle=tg;c.fillRect(0,0,w,H*.22);
    }
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

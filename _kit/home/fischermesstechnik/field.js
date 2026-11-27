/* ================= HERO FIELD: a crafted render of FISCHER's real product (HOME_BRIEF update 2c): a stainless
   differential-pressure gauge as FISCHER builds them in Bad Salzuflen (white dial, 0 ... 0,6 bar, the FISCHER mark),
   rendered offline by render.py with real alpha and baked to hero.webp. Here the pointer is live: on arrival it sweeps up
   from zero and settles, then reads a calm, slowly varying pressure, as a real gauge does. The glass lies over the pointer
   as a soft sheen. It moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the
   ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},HY=0,G=null,img=new Image(),ok=false,mimg=null;
  var BG="#141518";
  /* dial geometry from render.py (fractions of the image width / height) */
  var GX=.5,GY=.35669,RD=.37723,RB=.44643,A0=-135,SPAN=270,VMAX=.6,WU=2.24; /* WU: image width in render units */
  var AR=1000/1402,MCROP=.70;
  img.decoding="async";img.onload=function(){ok=true;mk();if(!running)frame(true)};img.src="hero.webp";
  /* phones: the gauge alone (cropped through the neck), the neck fading out softly into the ink */
  function mk(){try{var W=img.naturalWidth,H=Math.round(img.naturalHeight*MCROP),o=document.createElement("canvas");o.width=W;o.height=H;var x=o.getContext("2d");x.drawImage(img,0,0,W,H,0,0,W,H);
    x.globalCompositeOperation="destination-out";var g=x.createLinearGradient(0,H*.8,0,H);g.addColorStop(0,"rgba(0,0,0,0)");g.addColorStop(1,"rgba(0,0,0,1)");x.fillStyle=g;x.fillRect(0,H*.8,W,H*.2+1);mimg=o}catch(_){mimg=null}}
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?92:Math.max(116,h*.14),bot=mob?Math.max(250,eyT-40):h-Math.max(24,h*.03);
    var ar=mob?AR/MCROP:AR,ih,iw;
    if(mob){ih=bot-top;iw=ih*ar;if(iw>w*.86){iw=w*.86;ih=iw/ar}}
    else{ih=Math.min(bot-top,2*A.half/ar*.96);iw=ih*ar}
    var kx=mob?w*.5:A.cx,ky=mob?(top+bot)/2:top+ih/2;
    return {mob:mob,side:side,cw:cw,U:mob?bot+18:h,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?bot+18:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  /* the reading: sweep from 0, settle at ~0.36 bar, then a calm slow variation (a few hundredths of a bar) */
  function reading(t,e){var base=.36+.012*Math.sin(t*Math.PI*2/23)+.006*Math.sin(t*Math.PI*2/7.3+1.3);
    var u=sm((t-.4)/2.6),ov=Math.exp(-Math.max(0,t-2.2)*1.6)*Math.sin(Math.max(0,t-2.2)*4.2)*.03;return RM?.36:(base*u+ov*u)*e}
  function needle(cx,cy,R,a,sh){
    var ca=Math.sin(a),sa=-Math.cos(a),px=-sa,py=ca;   /* direction (from centre) and its normal */
    var L=R*.86,T=R*.2,W0=R*.026,W1=R*.005;
    c.beginPath();
    c.moveTo(cx+ca*L+px*W1,cy+sa*L+py*W1);c.lineTo(cx-ca*T+px*W0*1.25,cy-sa*T+py*W0*1.25);
    c.lineTo(cx-ca*T-px*W0*1.25,cy-sa*T-py*W0*1.25);c.lineTo(cx+ca*L-px*W1,cy+sa*L-py*W1);c.closePath();
    if(sh){c.fillStyle="rgba(0,0,0,.22)";c.fill();return}
    var g=c.createLinearGradient(cx+px*W0,cy+py*W0,cx-px*W0,cy-py*W0);g.addColorStop(0,"#d4223f");g.addColorStop(.5,"#ba1532");g.addColorStop(1,"#8a0d23");c.fillStyle=g;c.fill();
  }
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?6:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~2% over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.02*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5+HY;
      var gx=x+dw*GX,gy=y+(G.mob?dh*GY/MCROP:dh*GY),R=dw*RD;
      /* a low warm-graphite glow across the WHOLE canvas (never inside the image rect alone), so no edge can read as a box (DJ) */
      var ggr=Math.max(w,h)*.7,ag=c.createRadialGradient(gx,gy,0,gx,gy,ggr);
      ag.addColorStop(0,"rgba(58,62,70,"+(.55*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(36,39,44,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(20,21,24,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a faint red bloom low behind the gauge, from the FISCHER mark, breathing every ~10s */
      var pu=.5+.5*Math.sin(t*Math.PI*2/10),rg=c.createRadialGradient(gx,gy+R*.3,0,gx,gy+R*.3,dw*.75);
      rg.addColorStop(0,"rgba(186,21,50,"+((.07+.03*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(186,21,50,0)");c.fillStyle=rg;c.fillRect(0,0,w,h);
      c.globalAlpha=e;
      if(G.mob&&mimg)c.drawImage(mimg,x,y,dw,dh);else c.drawImage(img,x,y,dw,dh);
      /* the pointer, its soft shadow (light from upper left), and the hub */
      var v=reading(t,e),a=(A0+SPAN*Math.max(0,Math.min(VMAX,v))/VMAX)*Math.PI/180;
      c.save();c.filter="blur("+Math.max(1,R*.012).toFixed(1)+"px)";needle(gx+R*.025,gy+R*.03,R,a,true);c.restore();
      needle(gx,gy,R,a,false);
      var hr=R*.075,hg=c.createRadialGradient(gx-hr*.35,gy-hr*.35,0,gx,gy,hr);hg.addColorStop(0,"#f2f2f2");hg.addColorStop(.55,"#9a9ca0");hg.addColorStop(1,"#4a4c50");
      c.beginPath();c.arc(gx,gy,hr,0,Math.PI*2);c.fillStyle=hg;c.fill();
      c.beginPath();c.arc(gx,gy,hr*.32,0,Math.PI*2);c.fillStyle="#2a2b2e";c.fill();
      /* the glass: a soft diagonal sheen and a thin crescent of light along the upper left */
      c.save();c.beginPath();c.arc(gx,gy,R*.995,0,Math.PI*2);c.clip();
      var sg=c.createLinearGradient(gx-R,gy-R,gx+R*.3,gy+R*.3);sg.addColorStop(0,"rgba(255,255,255,.16)");sg.addColorStop(.42,"rgba(255,255,255,.05)");sg.addColorStop(.43,"rgba(255,255,255,0)");sg.addColorStop(1,"rgba(255,255,255,0)");
      c.fillStyle=sg;c.fillRect(gx-R,gy-R,2*R,2*R);
      c.lineWidth=Math.max(1.5,R*.018);c.strokeStyle="rgba(255,255,255,.28)";c.beginPath();c.arc(gx,gy,R*.93,Math.PI*1.05,Math.PI*1.42);c.stroke();
      c.restore();
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(13,14,16,.92)");lv.addColorStop(.6,"rgba(13,14,16,.5)");lv.addColorStop(1,"rgba(13,14,16,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(13,14,16,.6)");tv.addColorStop(1,"rgba(13,14,16,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(20,21,24,0)");bv.addColorStop(1,"rgba(20,21,24,.7)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(13,14,16,.6)");tv2.addColorStop(1,"rgba(13,14,16,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-60,0,G.bh);mv.addColorStop(0,"rgba(20,21,24,0)");mv.addColorStop(1,"rgba(20,21,24,1)");c.fillStyle=mv;c.fillRect(0,G.bh-60,w,61);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  try{document.fonts.ready.then(function(){setTimeout(size,60)})}catch(_){}setTimeout(size,1800);setTimeout(size,4200);
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40;var hy=0,hr=G&&!G.mob?document.querySelector("#view #hero"):null;if(hr){var b=hr.getBoundingClientRect();if(b.bottom>0)hy=Math.min(0,b.top)}if(hy!==HY){HY=hy;frame(true)}},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;t0=performance.now();gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

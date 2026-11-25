/* ================= HERO FIELD: a crafted render of CRYSTAL GmbH's real product (HOME_BRIEF update 2c): one polished
   equilateral optical prism, as CRYSTAL makes them in Berlin (crystal-gmbh.com > Optical Components: windows, prisms,
   lenses, mirrors). Ray traced offline by render.py with real alpha, baked to hero.webp; here it breathes in a slow Ken
   Burns drift, and a beam of white light enters its left face and leaves the right face split into its spectrum
   ("Committed to light."), on the geometry render.py printed. It moves on its own, so no pointer response (CZ). The beam
   only starts right of the headline (DI) and fades out long before the right edge. On phones it sits in the top band and
   fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#031b3a";
  /* beam geometry in image units (render.py, cropped 140..880 x 140..800) */
  var P0=[-.4222,.8698],P1=[.287,.5226],P2=[.6759,.4779],PO=[1.2424,.6283];
  var SPEC=["255,70,60","255,150,40","255,225,60","90,220,110","60,170,255","80,90,255","150,70,230"];
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=740/660,LX=.55,LY=.5;  /* render aspect (w/h) */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?100:Math.max(108,h*.13),bot=mob?Math.max(250,eyT-56):h-Math.max(40,h*.06);
    var U=mob?bot+18:h;
    var ih=mob?(bot-top):Math.min(bot-top,2*A.half/AR*.96)*(mob?.92:.8),iw=ih*AR;
    var kx=mob?w*.5:A.cx,ky=(top+bot)/2;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,L0:mob?0:Math.max(HR+Math.max(110,w*.07),w*.47),Rf:w-Math.max(36,w*.02),R0:0};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~3% and drift up a touch over ~44s, eased back and forth (scaled about the image centre) */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.008-SP.v*G.ih*.05;
      /* a low deep-teal glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the
         baked render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.45:h*.48,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(10,60,112,"+(.6*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(6,40,84,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(3,27,58,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a faint cool glow behind the prism, breathing every ~9s */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*LX,py=y+dh*LY,pr=dw*.55;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(43,142,203,"+((.10+.05*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(43,142,203,0)");
      c.fillStyle=rg;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the light: in, through, and out as a spectrum (additive) */
      var be=e*sm((t-.6)/1.6)*(.9+.1*Math.sin(t*Math.PI*2/7));
      if(be>.01){
        var ax=x+dw*P1[0],ay=y+dh*P1[1],bx=x+dw*P2[0],by=y+dh*P2[1];
        var dx=P1[0]-P0[0],dy=P1[1]-P0[1],dl=Math.hypot(dx*dw,dy*dh),ux=dx*dw/dl,uy=dy*dh/dl;
        var sx0=G.mob?-20:G.L0,len=Math.max(40,(ax-sx0)/ux),sx=ax-ux*len,sy=ay-uy*len;
        c.save();c.globalCompositeOperation="lighter";c.lineCap="butt";
        var gi=c.createLinearGradient(sx,sy,ax,ay);gi.addColorStop(0,"rgba(255,255,255,0)");gi.addColorStop(.55,"rgba(235,245,255,"+(.5*be).toFixed(3)+")");gi.addColorStop(1,"rgba(255,255,255,"+(.95*be).toFixed(3)+")");
        var gw=c.createLinearGradient(sx,sy,ax,ay);gw.addColorStop(0,"rgba(120,190,255,0)");gw.addColorStop(1,"rgba(120,190,255,"+(.16*be).toFixed(3)+")");
        c.strokeStyle=gw;c.lineWidth=Math.max(8,dw*.028);c.beginPath();c.moveTo(sx,sy);c.lineTo(ax,ay);c.stroke();
        c.strokeStyle=gi;c.lineWidth=Math.max(1.6,dw*.0045);c.beginPath();c.moveTo(sx,sy);c.lineTo(ax,ay);c.stroke();
        /* inside the glass: a faint path */
        c.strokeStyle="rgba(225,240,255,"+(.38*be).toFixed(3)+")";c.lineWidth=Math.max(1.4,dw*.004);c.beginPath();c.moveTo(ax,ay);c.lineTo(bx,by);c.stroke();
        /* out: the spectrum as a fan of thin wedges, fading out over a long distance */
        var ox=PO[0]-P2[0],oy=PO[1]-P2[1],ol=Math.hypot(ox*dw,oy*dh),a0=Math.atan2(oy*dh,ox*dw)+.05,spread=.24;
        var reach=G.mob?Math.min(dw*.75,(w-bx)*.92):Math.min(dw*.95,Math.max(60,G.Rf-bx));
        for(var i=0;i<SPEC.length;i++){
          var a1=a0-spread/2+spread*i/SPEC.length,a2=a1+spread/SPEC.length;
          var gs=c.createRadialGradient(bx,by,0,bx,by,reach);gs.addColorStop(0,"rgba("+SPEC[i]+","+(.0).toFixed(3)+")");gs.addColorStop(.05,"rgba("+SPEC[i]+","+(.62*be).toFixed(3)+")");gs.addColorStop(.5,"rgba("+SPEC[i]+","+(.34*be).toFixed(3)+")");gs.addColorStop(1,"rgba("+SPEC[i]+",0)");
          c.fillStyle=gs;c.beginPath();c.moveTo(bx,by);c.lineTo(bx+Math.cos(a1)*reach,by+Math.sin(a1)*reach);c.lineTo(bx+Math.cos(a2)*reach,by+Math.sin(a2)*reach);c.closePath();c.fill();
        }
        /* a small bright point where the beam meets each face */
        [[ax,ay,.6],[bx,by,.45]].forEach(function(q){var gg=c.createRadialGradient(q[0],q[1],0,q[0],q[1],dw*.05);gg.addColorStop(0,"rgba(255,255,255,"+(q[2]*be).toFixed(3)+")");gg.addColorStop(1,"rgba(255,255,255,0)");c.fillStyle=gg;c.fillRect(q[0]-dw*.05,q[1]-dw*.05,dw*.1,dw*.1)});
        c.restore();
      }
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(2,16,36,.95)");lv.addColorStop(.6,"rgba(2,16,36,.55)");lv.addColorStop(1,"rgba(2,16,36,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(2,16,36,.6)");tv.addColorStop(1,"rgba(2,16,36,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(3,27,58,0)");bv.addColorStop(1,"rgba(3,27,58,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(2,16,36,.6)");tv2.addColorStop(1,"rgba(2,16,36,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-46,0,G.bh);mv.addColorStop(0,"rgba(3,27,58,0)");mv.addColorStop(1,"rgba(3,27,58,1)");c.fillStyle=mv;c.fillRect(0,G.bh-46,w,47);
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
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

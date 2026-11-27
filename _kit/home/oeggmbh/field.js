/* ================= HERO FIELD: a crafted render of OEG's real measuring principle (HOME_BRIEF update 2c): one sessile drop
   of water on a polished silicon wafer, as OEG's SURFTENS contact-angle instruments measure it (oeggmbh.com > Messgeräte für
   Kontaktwinkel und Oberflächenspannung). Ray traced offline by render.py with real alpha, baked to hero.webp; here it
   breathes in a slow Ken Burns drift, and once it has settled the measurement draws itself on: the baseline through the two
   contact points and the tangent at each, on the geometry render.py printed. No pointer response (CZ). On phones it sits
   in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},HY=0,G=null,img=new Image(),ok=false;
  var BG="#14141a";
  /* contact geometry in image units (render.py 1300x900): contact points and tangent ends */
  var CL=[.2403,.6004],CR=[.7597,.6004],TL=[.2794,.30],TR=[.7206,.30];
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=1300/900,LX=.5,LY=.47;  /* render aspect (w/h) */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?100:Math.max(108,h*.13),bot=mob?Math.max(250,eyT-56):h-Math.max(40,h*.06);
    var U=mob?bot+18:h;
    var ih=mob?(bot-top):Math.min(bot-top,2*A.half/AR*.96)*(mob?.92:1.18),iw=ih*AR;
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
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.008+HY;
      /* a low deep-teal glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the
         baked render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.45:h*.48,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(38,38,48,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(28,28,36,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(20,20,26,0)");
      /* ambient glow removed (topfix) */
      /* a faint cool glow behind the prism, breathing every ~9s */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*LX,py=y+dh*LY,pr=dw*.55;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(150,165,190,"+((.07+.035*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(150,165,190,0)");
      /* rim glow removed (topfix) */
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the measurement: baseline through the contact points, then the tangent at each, drawn on once (additive, faint) */
      var mb=e*sm((t-1.2)/1.2),mt=e*sm((t-2.0)/1.4);
      if(mb>.01){
        var lx=x+dw*CL[0],ly=y+dh*CL[1],rx=x+dw*CR[0],ry=y+dh*CR[1],ext=dw*.13,bw=(rx-lx)+2*ext;
        c.save();c.lineCap="butt";
        var gb=c.createLinearGradient(lx-ext,0,rx+ext,0);gb.addColorStop(0,"rgba(245,244,242,0)");gb.addColorStop(.18,"rgba(245,244,242,"+(.55*mb).toFixed(3)+")");gb.addColorStop(.82,"rgba(245,244,242,"+(.55*mb).toFixed(3)+")");gb.addColorStop(1,"rgba(245,244,242,0)");
        c.strokeStyle=gb;c.lineWidth=Math.max(1,dw*.0016);c.beginPath();c.moveTo(lx-ext,ly);c.lineTo(lx-ext+bw*mb,ly);c.stroke();
        if(mt>.01){
          c.strokeStyle="rgba(255,107,127,"+(.8*mt).toFixed(3)+")";c.lineWidth=Math.max(1.2,dw*.0019);
          [[CL,TL],[CR,TR]].forEach(function(q){var ax=x+dw*q[0][0],ay=y+dh*q[0][1],bx=x+dw*q[1][0],by=y+dh*q[1][1];c.beginPath();c.moveTo(ax,ay);c.lineTo(ax+(bx-ax)*mt,ay+(by-ay)*mt);c.stroke()});
          /* the angle at the right contact point */
          var ar=dw*.045,a1=Math.PI,a2=Math.atan2((TR[1]-CR[1])*dh,(TR[0]-CR[0])*dw);
          c.strokeStyle="rgba(245,244,242,"+(.6*mt).toFixed(3)+")";c.lineWidth=Math.max(1,dw*.0015);c.beginPath();c.arc(rx,ry,ar,a1,a1+(a2+2*Math.PI-a1)%(2*Math.PI)*mt,false);c.stroke();
          [[lx,ly],[rx,ry]].forEach(function(q){c.fillStyle="rgba(255,107,127,"+(.9*mt).toFixed(3)+")";c.beginPath();c.arc(q[0],q[1],Math.max(2,dw*.0035),0,Math.PI*2);c.fill()});
        }
        c.restore();
      }
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(13,13,17,.95)");lv.addColorStop(.6,"rgba(13,13,17,.55)");lv.addColorStop(1,"rgba(13,13,17,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(13,13,17,.6)");tv.addColorStop(1,"rgba(13,13,17,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(20,20,26,0)");bv.addColorStop(1,"rgba(20,20,26,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(13,13,17,.6)");tv2.addColorStop(1,"rgba(13,13,17,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-46,0,G.bh);mv.addColorStop(0,"rgba(20,20,26,0)");mv.addColorStop(1,"rgba(20,20,26,1)");c.fillStyle=mv;c.fillRect(0,G.bh-46,w,47);
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
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

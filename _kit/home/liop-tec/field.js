/* ================= HERO FIELD: a crafted render of LIOP-TEC's real product (HOME_BRIEF update 2c): one STAR-series kinematic
   mirror mount (black anodised front plate, blue anodised back plate and base, fine-thread adjuster behind) on an optical
   breadboard, as on liop-tec.com > Opto-Mechanics. Ray marched offline by render.py with real alpha, baked to hero.webp; here
   it breathes in a slow Ken Burns drift, and a pulsed dye-laser beam at 630 nm (DCM, LiopStar datasheet) comes in from the
   front right, reflects off the mirror and leaves to the right, on the geometry render.py printed. Pulses travel along it.
   No pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},HY=0,G=null,img=new Image(),ok=false;
  var BG="#0e0e1c";
  /* beam geometry in image units (render.py 1500x1072): mirror centre, a point on the incoming beam, a point on the reflected beam */
  var BM=[.4824,.4135],BS=[.6399,.9093],BR=[.8315,.4279];
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=1500/1072,LX=.5,LY=.46;  /* render aspect (w/h) */
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
      ag.addColorStop(0,"rgba(30,30,60,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(22,22,44,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(14,14,28,0)");
      /* ambient glow removed (topfix) */
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the beam: in from the front right, off the mirror, out to the right; faint haze glow plus a thin hot core, drawn on once */
      var bi=0,bo=0; /* beam removed (topfix) */
      var mx=x+dw*BM[0],my=y+dh*BM[1];
      function far(q){var dx=x+dw*q[0]-mx,dy=y+dh*q[1]-my,L=Math.hypot(dx,dy),k=Math.max(w,h)*1.6/L;return [mx+dx*k,my+dy*k,dx/L,dy/L]}
      var FS=far(BS),FR=far(BR),bw=Math.max(1.2,dw*.0022);
      function beam(ax,ay,bx,by,v,a0){
        if(v<.01)return;var ex=ax+(bx-ax)*v,ey=ay+(by-ay)*v;
        c.save();c.globalCompositeOperation="lighter";c.lineCap="round";
        var gl=c.createLinearGradient(ax,ay,bx,by);gl.addColorStop(0,"rgba(255,90,42,"+(.0*a0).toFixed(3)+")");gl.addColorStop(.06,"rgba(255,90,42,"+(.22*a0).toFixed(3)+")");gl.addColorStop(.5,"rgba(255,90,42,"+(.16*a0).toFixed(3)+")");gl.addColorStop(1,"rgba(255,90,42,"+(.22*a0).toFixed(3)+")");
        c.strokeStyle=gl;c.lineWidth=bw*7;c.beginPath();c.moveTo(ax,ay);c.lineTo(ex,ey);c.stroke();
        c.strokeStyle="rgba(255,120,70,"+(.85*a0).toFixed(3)+")";c.lineWidth=bw;c.beginPath();c.moveTo(ax,ay);c.lineTo(ex,ey);c.stroke();
        c.restore();
      }
      /* incoming: from far outside to the mirror (drawn from the far end in), reflected: from the mirror out */
      beam(FS[0],FS[1],mx,my,bi,1);beam(mx,my,FR[0],FR[1],bo,1);
      /* pulses: a short bright packet every ~1.8 s, in along the incoming beam and out along the reflected one */
      if(bo>.98&&!RM){
        var ph=(t%1.8)/1.8,Lin=Math.hypot(FS[0]-mx,FS[1]-my)*.32;
        c.save();c.globalCompositeOperation="lighter";
        [[ph*2,0],[ph*2-1,1]].forEach(function(q){var u=q[0];if(u<0||u>1)return;
          var px,py;if(q[1]===0){px=mx+FS[2]*Lin*(1-u);py=my+FS[3]*Lin*(1-u)}else{px=mx+FR[2]*Lin*u;py=my+FR[3]*Lin*u}
          var a=Math.sin(Math.PI*Math.min(1,u*1.4))*.55,pg=c.createRadialGradient(px,py,0,px,py,bw*9);pg.addColorStop(0,"rgba(255,170,120,"+a.toFixed(3)+")");pg.addColorStop(1,"rgba(255,90,42,0)");
          c.fillStyle=pg;c.beginPath();c.arc(px,py,bw*9,0,Math.PI*2);c.fill()});
        c.restore();
      }
      /* the spot on the mirror */
      if(bi>.9){var sa=e*sm((t-1.6)/.6)*(.85+.15*Math.sin(t*2.1)),sg=c.createRadialGradient(mx,my,0,mx,my,dw*.045);
        sg.addColorStop(0,"rgba(255,210,180,"+(.95*sa).toFixed(3)+")");sg.addColorStop(.25,"rgba(255,110,60,"+(.55*sa).toFixed(3)+")");sg.addColorStop(1,"rgba(255,90,42,0)");
        c.save();c.globalCompositeOperation="lighter";c.fillStyle=sg;c.beginPath();c.arc(mx,my,dw*.045,0,Math.PI*2);c.fill();c.restore()}
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);lv.addColorStop(0,"rgba(8,8,15,.95)");lv.addColorStop(.6,"rgba(8,8,15,.55)");lv.addColorStop(1,"rgba(8,8,15,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(8,8,15,.6)");tv.addColorStop(1,"rgba(8,8,15,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(14,14,28,0)");bv.addColorStop(1,"rgba(14,14,28,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(8,8,15,.6)");tv2.addColorStop(1,"rgba(8,8,15,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-46,0,G.bh);mv.addColorStop(0,"rgba(14,14,28,0)");mv.addColorStop(1,"rgba(14,14,28,1)");c.fillStyle=mv;c.fillRect(0,G.bh-46,w,47);
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

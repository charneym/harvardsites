/* ================= HERO FIELD: a crafted render of KOMLAS' real product (HOME_BRIEF update 2c): one polished KTP crystal
   for frequency doubling at the largest size KOMLAS lists, 12 mm x 12 mm x 22 mm (komlas.de > Optische Komponenten >
   Nichtlinear optische Kristalle). Ray traced offline by render.py with real alpha, baked to hero.webp; here it breathes in
   a slow Ken Burns drift, and once it has settled the beam runs through it on the geometry render.py printed: the infrared
   (1064 nm) enters the hidden end face, turns green inside the crystal as the second harmonic builds up, and leaves the
   front end face as green (532 nm) pulses. No pointer response (CZ). On phones it sits in the top band and fades into the
   ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#070b2a";
  /* beam geometry in image units (render.py 1600x1000): end-face centres and points 3 crystal-lengths/2 beyond */
  var BL=[.2902,.4557],BR=[.74,.5506],BLF=[-.1678,.3591],BRF=[1.6122,.7347];
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function EZ(g,rgb,a0){for(var i=0;i<=12;i++){var u=i/12,v=1-u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a0*v).toFixed(4)+")")}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=1600/1000,LX=.5,LY=.5;  /* render aspect (w/h) */
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
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.008-SP.v*G.ih*.05;
      /* a low navy glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the
         baked render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.45:h*.48,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(16,26,84,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(10,16,56,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,11,42,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a faint cool glow behind the crystal, breathing every ~9s */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*LX,py=y+dh*LY,pr=dw*.55;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(120,140,220,"+((.07+.035*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(120,140,220,0)");
      c.fillStyle=rg;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the beam, drawn on once and then pulsing (additive, never reaching the headline side) */
      var mb=e*sm((t-1.0)/1.4),mo=e*sm((t-2.0)/1.4);
      if(mb>.01){
        var P=function(q){return [x+dw*q[0],y+dh*q[1]]},l=P(BL),r=P(BR),lf=P(BLF),rf=P(BRF);
        var lin=function(a2,b2,f){return [a2[0]+(b2[0]-a2[0])*f,a2[1]+(b2[1]-a2[1])*f]};
        var ia=lin(l,lf,.55),ob=lin(r,rf,.42);
        c.save();c.globalCompositeOperation="lighter";c.lineCap="round";
        /* infrared in: a faint dashed rose line fading in from the left */
        var gi=c.createLinearGradient(ia[0],ia[1],l[0],l[1]);gi.addColorStop(0,"rgba(255,140,160,0)");gi.addColorStop(1,"rgba(255,140,160,"+(.5*mb).toFixed(3)+")");
        c.strokeStyle=gi;c.lineWidth=Math.max(1,dw*.0018);c.setLineDash([dw*.008,dw*.006]);c.lineDashOffset=-t*dw*.02;
        c.beginPath();c.moveTo(ia[0],ia[1]);var ie=lin(ia,l,mb);c.lineTo(ie[0],ie[1]);c.stroke();c.setLineDash([]);
        /* inside the crystal: the second harmonic builds up from rose to green */
        var gc=c.createLinearGradient(l[0],l[1],r[0],r[1]);gc.addColorStop(0,"rgba(255,140,160,"+(.35*mb).toFixed(3)+")");gc.addColorStop(.45,"rgba(120,220,120,"+(.45*mb).toFixed(3)+")");gc.addColorStop(1,"rgba(69,224,79,"+(.95*mb).toFixed(3)+")");
        var ce=lin(l,r,sm((t-1.6)/1.2));
        c.strokeStyle=gc;c.lineWidth=Math.max(1.4,dw*.004);c.beginPath();c.moveTo(l[0],l[1]);c.lineTo(ce[0],ce[1]);c.stroke();
        c.lineWidth=Math.max(4,dw*.014);c.strokeStyle="rgba(69,224,79,"+(.10*mb).toFixed(3)+")";c.beginPath();c.moveTo(l[0],l[1]);c.lineTo(ce[0],ce[1]);c.stroke();
        if(mo>.01){
          /* the green leaves the front end face: a glow on the face, a steady beam fading out, and pulses running along it */
          var pu=.75+.25*Math.sin(t*Math.PI*2/2.6),gr=dw*.05*(.8+.2*pu);
          var gs=c.createRadialGradient(r[0],r[1],0,r[0],r[1],gr);gs.addColorStop(0,"rgba(200,255,200,"+(.85*mo).toFixed(3)+")");gs.addColorStop(.25,"rgba(69,224,79,"+(.45*mo).toFixed(3)+")");gs.addColorStop(1,"rgba(69,224,79,0)");
          c.fillStyle=gs;c.fillRect(r[0]-gr,r[1]-gr,gr*2,gr*2);
          var go=c.createLinearGradient(r[0],r[1],ob[0],ob[1]);go.addColorStop(0,"rgba(69,224,79,"+(.9*mo).toFixed(3)+")");go.addColorStop(.6,"rgba(69,224,79,"+(.3*mo).toFixed(3)+")");go.addColorStop(1,"rgba(69,224,79,0)");
          var oe=lin(r,ob,sm((t-2.0)/1.0));
          c.strokeStyle=go;c.lineWidth=Math.max(1.4,dw*.0035);c.beginPath();c.moveTo(r[0],r[1]);c.lineTo(oe[0],oe[1]);c.stroke();
          for(var k2=0;k2<3;k2++){var f=((t*.32)+k2/3)%1,f2=Math.min(1,f+.05),a3=lin(r,ob,f),b3=lin(r,ob,f2),al=mo*(1-f)*(1-f);
            c.strokeStyle="rgba(170,255,170,"+(.8*al).toFixed(3)+")";c.lineWidth=Math.max(2,dw*.006);c.beginPath();c.moveTo(a3[0],a3[1]);c.lineTo(b3[0],b3[1]);c.stroke()}
        }
        c.restore();
      }
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);EZ(lv,"4,6,28",.92);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.34);EZ(tv,"4,6,28",.6);c.fillStyle=tv;c.fillRect(0,0,w,h*.34+1);
        var bv=c.createLinearGradient(0,h,0,h*.55);EZ(bv,"7,11,42",.85);c.fillStyle=bv;c.fillRect(0,h*.55,w,h*.45+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,74);tv2.addColorStop(0,"rgba(4,6,28,.6)");tv2.addColorStop(1,"rgba(4,6,28,0)");c.fillStyle=tv2;c.fillRect(0,0,w,74);
        var mv=c.createLinearGradient(0,G.bh-46,0,G.bh);mv.addColorStop(0,"rgba(7,11,42,0)");mv.addColorStop(1,"rgba(7,11,42,1)");c.fillStyle=mv;c.fillRect(0,G.bh-46,w,47);
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

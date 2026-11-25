/* ================= HERO FIELD: a crafted render of Biogenera's real mechanism (HOME_BRIEF update 2c): an anti-gene PNA
   (Ag-PNA) bound to one strand of the opened DNA of its target gene, as biogenera.com/mygenera describes it. B-DNA from
   standard helix geometry in pearl, the PNA strand in the Biogenera logo red; over ten base pairs the second DNA strand
   is displaced outward. Rasterised offline by render.py, baked with real alpha to hero.webp (the helix runs out of the dark
   at both ends); here it breathes in a slow Ken Burns drift and the bound PNA glows faintly. It moves on its own, so no
   pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#131116";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width and the subject is sized to fit with room both sides */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(116,w*.06),w*.47),R=w-Math.max(48,w*.045),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  /* scrims ease out with a smoothstep profile (many stops), so no gradient ends on a visible line (DP/DJ) */
  function EZ(g,a,rgb){rgb=rgb||"13,12,16";for(var i=0;i<=12;i++){var t=i/12,u=1-t,v=u*u*(3-2*u);g.addColorStop(t,"rgba("+rgb+","+(a*v).toFixed(4)+")")}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=1400/1028,LX=.517,LY=.497;  /* render aspect; the bound PNA sits at ~(0.52, 0.50) of the image */
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?80:Math.max(108,h*.13),bot=mob?Math.max(250,eyT-22):h-Math.max(40,h*.06);
    var U=mob?bot+18:h;
    var mb=mob?bot-62:bot,ih=mob?Math.max(140,mb-top):Math.min(bot-top,2*A.half/AR*.96),iw=ih*AR;
    var kx=mob?w*.5:A.cx,ky=mob?top+ih/2:(top+bot)/2;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0,lastHR=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    if(now-lastHR>700){lastHR=now;var nh=h1r();if(Math.abs(nh-HR)>2){HR=nh;G=geo()}}
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~3% and drift up a touch over ~44s, eased back and forth (scaled about the image centre) */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.008-SP.v*G.ih*.05;
      /* a low violet-graphite glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the
         baked render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.45:h*.48,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(40,34,48,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(28,24,34,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(19,17,22,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a faint red glow behind the bound PNA, breathing every ~9s */
      var pu=.5+.5*Math.sin(t*Math.PI*2/9),px=x+dw*LX,py=y+dh*LY,pr=dw*.34;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(210,0,25,"+((.09+.05*pu)*e).toFixed(3)+")");rg.addColorStop(1,"rgba(210,0,25,0)");
      c.fillStyle=rg;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.54,0);EZ(lv,.95);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.34);EZ(tv,.6);c.fillStyle=tv;c.fillRect(0,0,w,h*.34);
        var bv=c.createLinearGradient(0,h,0,h*.6);EZ(bv,.85,"19,17,22");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,110);EZ(tv2,.6);c.fillStyle=tv2;c.fillRect(0,0,w,110);
        var mv=c.createLinearGradient(0,G.bh,0,G.bh-130);EZ(mv,1,"19,17,22");c.fillStyle=mv;c.fillRect(0,G.bh-130,w,131);
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

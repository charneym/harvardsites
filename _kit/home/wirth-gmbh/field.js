/* ================= HERO FIELD: WIRTH's own photograph of an OKTOPUS® vacuum lifter, the suction spider on its telescopic arm
   in their Landsberg hall (wirth-gmbh.com/images/wirth/vakuum/slider/slider_01.jpg; the right 1500 x 572 px, graded high-key by
   grade.py so the hall dissolves into the hero ground #eceeef and every edge eases out over a long distance: no box, no oval;
   DP/DJ). The spider is held whole in the open area right of the H1 (DO), never above native size (Ken Burns included); the arm
   eases in from the left and a long ground-coloured wash keeps everything behind the headline quiet (DI). Slow breath only, no
   pointer response (CZ). On phones the spider sits in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#eceeef",BGR="236,238,239";
  var IW=1500,IH=572,SX0=690,SX1=1462,SY0=78,SY1=550,SCX=(SX0+SX1)/2,SCY=(SY0+SY1)/2;  /* the spider's box in the image */
  img.decoding="async";img.onload=function(){ok=true;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}
    [].forEach.call(document.querySelectorAll("#view .hero-foot .s,#view .hero-foot .act .btn"),function(f){var fr=f.getBoundingClientRect();if(fr.width>0&&fr.width<w*.7)r=Math.max(r,fr.right)});return r}
  /* DO: the open area right of the H1; its centre is held at 62-75% of the width */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(140,w*.08),w*.5),R=w-Math.max(48,w*.045,(w-(w>=1800?1600:1320))/2+24),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var mob=w<861;
    if(mob){
      var ey=document.querySelector("#view .hero .eyebrow"),eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
      var top=88,bot=Math.max(250,eyT-40);
      /* the spider and a little of the arm, scaled to the width (never up) */
      var sx0=560,sw=IW-sx0,s=Math.min(.97,(w-8)/sw,(bot-top)/(IH*.94));
      var dw=sw*s,dh=IH*s;
      return {mob:1,sx0:sx0,sw:sw,s:s,x:(w-dw)/2,y:top+(bot-top-dh)/2,bh:bot+18};
    }
    var A=OA(),top=Math.max(108,h*.13),bot=h-Math.max(40,h*.06);
    var s=Math.min(.97,(bot-top)/((SY1-SY0)*1.12),2*A.half/((SX1-SX0)*1.03));
    var ky=(top+bot)/2;
    return {mob:0,s:s,cx:A.cx,ky:ky,x:A.cx-SCX*s,y:ky-SCY*s,L0:HR+110};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=h1r();cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      /* a very slow breath: push in ~2.5% over ~44s about the spider's centre, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.025*k)*(1+.01*(1-e));
      c.globalAlpha=e;
      if(G.mob){
        var dw=G.sw*G.s*sc,dh=IH*G.s*sc,cx=G.x+G.sw*G.s/2,cy=G.y+IH*G.s/2;
        c.drawImage(img,G.sx0,0,G.sw,IH,cx-dw/2,cy-dh/2-SP.v*dh*.04,dw,dh);
        c.globalAlpha=1;
        var lg=c.createLinearGradient(0,0,Math.min(w*.3,120),0);lg.addColorStop(0,"rgba("+BGR+",1)");lg.addColorStop(1,"rgba("+BGR+",0)");c.fillStyle=lg;c.fillRect(0,0,Math.min(w*.3,120),h);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }else{
        var s=G.s*sc,ix=G.cx-SCX*s,iy=G.ky-SCY*s-k*IH*G.s*.006-SP.v*IH*G.s*.05;
        c.drawImage(img,ix,iy,IW*s,IH*s);
        c.globalAlpha=1;
        /* the headline side stays quiet (DI): solid ground to 110px past the text, then a long eased wash that ends before the spider */
        var a0=G.L0-40,a1=G.L0+360;
        var lg2=c.createLinearGradient(a0,0,a1,0);for(var q=0;q<=10;q++){var u=q/10;lg2.addColorStop(u,"rgba("+BGR+","+(1-u*u*(3-2*u)).toFixed(3)+")")}
        c.fillStyle=lg2;c.fillRect(0,0,a1,h);
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
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?(G.mob?[w/2,G.y+IH*G.s/2]:[G.cx,G.ky]):[w/2,h/2]}};
})();

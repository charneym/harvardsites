/* ================= HERO FIELD: Labfacility's own product photograph (HOME_BRIEF update 2a, WAVE_BRIEF brand fidelity):
   their IEC mineral insulated thermocouples with miniature plugs, Types K, J, T and N in the IEC colour codes, shot on
   white (labfacility.com > Temperature Sensors > Thermocouples IEC > Mineral Insulated Thermocouples IEC, category image
   MI_menu_image_wide_K_J_T_N.jpg). The page ground of the hero is the photo's own pure white, so the picture has no edge
   (DP/DJ). Shown at or below its native 1111 x 847 px, centred in the open area right of the text; a very slow breath, no
   pointer response. On phones it takes the top band above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#ffffff";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function h1r(){var e=document.querySelector("#view h1")||document.querySelector("h1"),r=0;if(!e)return 0;try{var tw=document.createTreeWalker(e,4),n,g=document.createRange();while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;g.selectNodeContents(n);[].forEach.call(g.getClientRects(),function(b){if(b.width>0&&b.right>r)r=b.right})}}catch(_){}return r}
  function ledeR(){var r=0;[].forEach.call(document.querySelectorAll("#view .hero-foot .s, #view .hero-foot .act .btn"),function(e){var b=e.getBoundingClientRect();if(b.width>0&&b.right>r)r=b.right});return r}
  /* DO: the open area right of the H1 and lede; its centre is held at 62-75% of the width */
  var HR=0;function OA(){var L=Math.max(HR+Math.max(110,w*.07),w*.48),R=w-Math.max(40,w*.035),cx=Math.min(Math.max((L+R)/2,w*.62),w*.75);return {cx:cx,half:Math.min(cx-L,R-cx)}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var AR=1111/847;
  function geo(){
    var mob=w<861;
    var ey=mob?document.querySelector("#view .hero .eyebrow"):null,eyT=ey?ey.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var A=mob?null:OA(),top=mob?84:Math.max(104,h*.13),bot=mob?Math.max(250,eyT-28):h-Math.max(40,h*.07);
    var ih=Math.max(120,Math.min(847,mob?Math.min(bot-top,(w-24)/AR):Math.min((bot-top),2*A.half/AR))),iw=ih*AR;
    var kx=mob?w*.5:A.cx,ky=(top+bot)/2;
    return {mob:mob,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?bot+20:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;HR=Math.max(h1r(),ledeR());cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: in ~2.5% and back over ~46s, about the image centre */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.025*k)*(1+.03*(1-e))*(1-.04*(1-dim));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-SP.v*G.ih*.05;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(G.mob){c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1)}
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

/* ================= HERO FIELD: a crafted render of Flowpoint's real product (HOME_BRIEF update, option c): the implantable needle
   guide as on flowpointmedical.com and in US 2024/0238575 A1, a fenestrated titanium body with its gold titanium-nitride valve,
   ray-traced offline by _kit/home/flowpointmedical/render.py and saved WITH ALPHA, so it sits on the page ink with no box or
   seam (DP/DJ). Whole and centred in the open area right of the text (~69% on desktop, DO), never upscaled past the render's
   1321 px, a faint long periwinkle glow beneath it, a deep ink wash only on the headline side (DI). It floats and drifts
   very slowly on its own, so no pointer response (CZ). On phones it sits in the top band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a1120",IW=1321,IH=886;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var iw,kx,ky,U=0;
    if(mob){var top=88,bot=Math.max(top+150,h*.42-10);U=bot;var ihh=Math.min(bot-top,w*.86*IH/IW);iw=ihh*IW/IH;kx=w*.5;ky=(top+bot)/2}
    else{iw=Math.min(cw*.52,h*1.15,IW);kx=side+cw*.69;ky=h*.53}
    return {mob:mob,side:side,cw:cw,U:U,iw:iw,ih:iw*IH/IW,kx:kx,ky:ky};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    /* a long, soft periwinkle glow under the device: eases out over a long radius, never ends on a line */
    var gr=Math.max(G.iw*.9,260),gl=c.createRadialGradient(G.kx,G.ky+G.ih*.08,0,G.kx,G.ky+G.ih*.08,gr);
    gl.addColorStop(0,"rgba(120,150,215,"+(.16*e).toFixed(3)+")");gl.addColorStop(.35,"rgba(90,120,190,"+(.08*e).toFixed(3)+")");gl.addColorStop(.7,"rgba(60,85,150,"+(.025*e).toFixed(3)+")");gl.addColorStop(1,"rgba(10,17,32,0)");
    c.fillStyle=gl;c.fillRect(0,0,w,h);
    if(ok){
      /* a slow float and push-in: ~2.5% over ~36s, a few px of rise and fall */
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.025*k)*(1+.03*(1-e)),fy=Math.sin(t*Math.PI*2/9)*G.ih*.008;
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2,y=G.ky-dh/2+fy-SP.v*G.ih*.12+(1-e)*G.ih*.04;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet: an ink wash from the left that eases out long before the device */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(10,17,32,.85)");lv.addColorStop(.6,"rgba(10,17,32,.4)");lv.addColorStop(1,"rgba(10,17,32,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.U+6,0,G.U+90);mv.addColorStop(0,"rgba(10,17,32,0)");mv.addColorStop(1,"rgba(10,17,32,1)");c.fillStyle=mv;c.fillRect(0,G.U+6,w,85);
        c.fillStyle=BG;c.fillRect(0,G.U+90,w,h);
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

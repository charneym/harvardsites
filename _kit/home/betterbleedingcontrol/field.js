/* ================= HERO FIELD: a real photograph of the subject (HOME_BRIEF update 2026-11-20, option b). An open
   bleeding-control kit (combat gauze, compression bandage, tourniquet strap) by an Unsplash contributor
   (https://unsplash.com/photos/nGfxoclUgSI, Unsplash License). Graded offline toward the site's olive-black ink (#0d0e0c),
   exposure lowered, with a long elliptical feather on every edge so it never shows a box or seam (DJ, DP). Composed whole in the
   open area right of the MEASURED headline and lede, at least 120px clear of them (DO, DP), drawn at or below native size,
   with a very slow Ken Burns drift. Nothing bright sits behind the H1 (DI). No pointer response (CZ). On phones it sits in the
   top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,BG="#0d0e0c",TR=0,trN=0;
  img.decoding="async";img.onload=function(){ok=true;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text, measured from the glyphs (not the block boxes) */
  function textRight(){
    var r=0,hero=document.getElementById("hero");if(!hero)return 0;
    $$(".hero-h .l, .hero-foot .s, .hero-foot .act, .hero .eyebrow",hero).forEach(function(el){
      try{var rg=document.createRange();rg.selectNodeContents(el);var rs=rg.getClientRects();for(var i=0;i<rs.length;i++)if(rs[i].width>0)r=Math.max(r,rs[i].right)}catch(e){}});
    return r;
  }
  function geo(){
    var side=w>=1800?Math.max(72,(w-1560)/2):Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.38,w*.9):h,iw=img.naturalWidth||2000,ih=img.naturalHeight||1334;
    var tr=TR||(side+Math.min(cw*.5,w*.46));
    var x0=tr+120,x1=w-side,span=Math.max(260,x1-x0);
    /* the feathered ground is ~12% each side, so the visible subject sits inside ~85% of the drawn width */
    var dw=Math.min(span/.9,iw,h*1.05*iw/ih),dh=dw*ih/iw;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h,iw:iw,ih:ih,dw:dw,dh:dh,cx:mob?w*.5:x0+span/2,cy:h*.53};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);TR=0;trN=0;G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    /* measure the headline once fonts and the intro have settled (and again on resize) */
    if(trN<40&&!G.mob){trN++;if(trN%8===0){var m=textRight();if(m>0&&Math.abs(m-TR)>2){TR=m;G=geo()}}}
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/60),sc,cx,cy,dw,dh;
      if(!G.mob){dw=G.dw;dh=G.dh;cx=G.cx;cy=G.cy}
      else{dw=Math.min(w*1.3,G.iw);dh=dw*G.ih/G.iw;if(dh>G.bh*1.15){dh=G.bh*1.15;dw=dh*G.iw/G.ih}cx=w*.5;cy=G.bh*.52}
      sc=(1+.025*k)*(1+.035*(1-e));dw*=sc;dh*=sc;
      var x=cx-dw/2-k*dw*.008,y=cy-dh/2+k*dh*.005-SP.v*h*.04;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* beyond the photo's own feather: plain ink, so no edge can ever show */
      c.fillStyle=BG;if(x>0)c.fillRect(0,0,Math.ceil(x)+1,h);if(x+dw<w)c.fillRect(Math.floor(x+dw)-1,0,w-x-dw+2,h);if(y>0)c.fillRect(0,0,w,Math.ceil(y)+1);if(y+dh<h)c.fillRect(0,Math.floor(y+dh)-1,w,h-y-dh+2);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,G.cx-G.dw*.3,0);lv.addColorStop(0,"rgba(7,8,6,.6)");lv.addColorStop(.75,"rgba(7,8,6,.25)");lv.addColorStop(1,"rgba(7,8,6,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.55,0,G.bh);mv.addColorStop(0,"rgba(13,14,12,0)");mv.addColorStop(1,"rgba(13,14,12,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.55,w,G.bh*.45+1);
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
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.mob?G.bh*.52:G.cy]:[w/2,h/2]}};
})();

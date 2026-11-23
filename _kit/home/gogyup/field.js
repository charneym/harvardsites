/* ================= HERO FIELD: a crafted render of GogyUp's real product (HOME_BRIEF update 2c): the GogyUp Reader on a
   generic phone (no third-party branding), showing a step from a work instruction set in GogyUp's reader-friendly phrase
   formatting, a tapped word ("inspect") with its pronunciation, contextual definition and word-by-word translation, and a
   no-fail comprehension check, as on gogyup.com's own app screenshots. Rendered offline from HTML/CSS with real alpha to
   hero.webp; here it floats in a very slow drift. It moves on its own, so no pointer response (CZ). On phones it sits in
   the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#11223a",AR=1;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    /* phones: the whole phone sits between the header and the eyebrow (CW), never cut */
    var eb=document.querySelector(".hero .eyebrow"),ebt=0,el=eb;while(el){ebt+=el.offsetTop;el=el.offsetParent}
    if(!(ebt>200))ebt=h*.37;
    var mT=94,mB=ebt-26,U=mob?Math.min(h*.5,mB+20):h;
    /* the phone fills its render: whole, in the open area right of the text (DO/DP) */
    var iw=mob?Math.min(w*.56,(mB-mT)*AR):Math.min(cw*.36,h*.74*AR,560),ih=iw/AR;
    /* the kit's phone mask fades the canvas from 34svh-130px; here it fades only below the phone, above the eyebrow */
    var mk=mob?"linear-gradient(180deg,#000 0,#000 "+Math.round(mB+4)+"px,transparent "+Math.round(mB+80)+"px)":"";
    cv.style.webkitMaskImage=mk;cv.style.maskImage=mk;
    var kx=mob?w*.5:side+cw*.765,ky=mob?(mT+mB)*.5:Math.max(h*.54,110+ih*.5);
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,mB:mB,hasEb:!!eb};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    if(G&&G.mob&&!G.hasEb)G=geo();c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow float: grow ~2% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.02*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.765,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(58,100,148,"+(.5*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(30,58,94,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(17,34,58,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(12,26,45,.95)");lv.addColorStop(.62,"rgba(12,26,45,.6)");lv.addColorStop(1,"rgba(12,26,45,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(12,26,45,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.01],[.4,.03],[.6,.07],[.8,.16],[1,.36]].forEach(function(q){bv.addColorStop(q[0],"rgba(17,34,58,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,90);[[0,.45],[.5,.15],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(12,26,45,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,90);
        var mv=c.createLinearGradient(0,G.mB+8,0,G.bh);[[0,0],[.5,.4],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(17,34,58,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.mB+8,w,G.bh-G.mB-7);
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

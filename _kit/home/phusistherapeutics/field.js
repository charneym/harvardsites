/* ================= HERO FIELD: a crafted render of PHusis's subject (HOME_BRIEF update 2c): an engraved textbook block of
   sun-exposed human skin (surface relief, stratum corneum, epidermis, dermis with capillary loops, follicles, glands and vessels,
   subcutaneous fat) with a thin topical film whose molecules enter only the stratum corneum, as the NCI SBIR abstract describes
   topical PHT-427. Drawn by skin.py in the logo reds (#8b0b04, #c58582) and the site's cream, baked to hero.webp at 1.6x. Here it
   breathes in a slow Ken Burns drift with a faint glow over the film. It moves on its own, so no pointer response (CZ). On phones
   it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#170c0b";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    /* the skin block's centre sits at about (0.5, 0.5) of the render */
    var ih=mob?Math.min(U*1.04,(U-96)/.8):Math.min(h*.98,cw*.8),iw=ih*(2240/2400);
    var kx=mob?w*.5:side+cw*.79,ky=mob?(84+U-12)/2:h*.53;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      /* a very slow breath: push in ~4% and drift up a touch over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.04*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint glow breathing over the topical film */
      var pu=.5+.5*Math.sin(t*Math.PI*2/7),px=x+dw*(870/1400),py=y+dh*(470/1500),pr=dw*.16;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(212,149,141,"+(.10+.08*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(212,149,141,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet: a navy wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.66,0);lv.addColorStop(0,"rgba(16,8,7,.92)");lv.addColorStop(.6,"rgba(16,8,7,.55)");lv.addColorStop(1,"rgba(16,8,7,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(16,8,7,.6)");tv.addColorStop(1,"rgba(16,8,7,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(23,12,11,0)");bv.addColorStop(1,"rgba(23,12,11,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(16,8,7,.7)");tv2.addColorStop(1,"rgba(16,8,7,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh*.62,0,G.bh);mv.addColorStop(0,"rgba(23,12,11,0)");mv.addColorStop(1,"rgba(23,12,11,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.62,w,G.bh*.38+1);
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

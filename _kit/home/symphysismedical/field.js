/* ================= HERO FIELD: SymPhysis Medical's own studio render of the releaze™ Drainage System (unit, line, port
   and app), from symphysismedical.com (HOME_BRIEF update 2a: the firm's own imagery). process_hero.py keeps their real
   blue-grey studio backdrop and floor shadows, extends it, and gives it a long real-alpha falloff that follows the kit's
   own silhouette (no oval, no box edge: DP/DJ), so here it is simply drawn over the ink. The kit sits whole in the open
   area right of the text (DO), the headline side stays deep ink (DI). Slow Ken Burns breath, no pointer response (CZ).
   On phones the kit sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#1d0f2e";
  /* the kit's bounds inside hero.webp (2760x1560): x 515..1730, y 470..1020 */
  var IW=2760,IH=1560,PX0=515,PX1=1730,PY0=470,PY1=1020,PCX=(PX0+PX1)/2,PCY=(PY0+PY1)/2,PW0=PX1-PX0,PH0=PY1-PY0;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(230,Math.min(ebt-12,h*.5)):h;
    var top=mob?70:Math.max(110,h*.14),bot=mob?U-14:h-Math.max(40,h*.06);
    var pw=mob?Math.min(w*.9,(bot-top)*PW0/PH0*1.0):Math.min(cw*.52,(bot-top)*.62*PW0/PH0,1000);
    var s=pw/PW0;
    var kx=mob?w*.5:side+cw*.70,ky=mob?(top+bot)/2:(top+bot)/2+h*.02;
    return {mob:mob,side:side,cw:cw,U:U,s:s,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.globalCompositeOperation="source-over";c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=G.s*(1+.025*k)*(1+.03*(1-e));
      var cx=G.kx+G.s*PW0*.008*Math.sin(t*Math.PI*2/48),cy=G.ky-SP.v*G.s*PH0*.12;
      c.globalAlpha=e;c.drawImage(img,cx-PCX*sc,cy-PCY*sc,IW*sc,IH*sc);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays deep ink (DI): a long wash from the left */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.44,0);lv.addColorStop(0,"rgba(20,10,33,.9)");lv.addColorStop(.55,"rgba(20,10,33,.5)");lv.addColorStop(1,"rgba(20,10,33,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.78,0,G.bh);mv.addColorStop(0,"rgba(29,15,46,0)");mv.addColorStop(1,"rgba(29,15,46,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.78,w,G.bh*.22+1);
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

/* ================= HERO FIELD: real photography (HOME_BRIEF update 2026-11-20 part 2, PRINCIPLES DG/DI/DJ). The trail up to
   the red summit of Redcloud Peak (14,034 ft) in Colorado's San Juan Mountains, September 2018: photograph "Sanjuan14ers-8"
   by Mitchtobin, Wikimedia Commons, CC BY-SA 4.0 (credited in the footer). The firm shares the peak's name and is based in
   Denver. Graded offline by grade.py into a 16:9 ink canvas (hero.jpg, settings in hero_grade.txt): the photo sits right of
   ~30% with its left, top and bottom edges feathered into the page ink, so no seam shows at any width. Drawn here with a
   slow Ken Burns drift; an ink scrim keeps the headline and lede side quiet. On phones the subject sits in the top band
   and fades into the ink before the text. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.jpg";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0,INK="#141213",SR="20,18,19";
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var bw=w,bh=G.bh,iw=img.naturalWidth,ih=img.naturalHeight;
      /* Ken Burns: a very slow push in and drift toward the subject, eased back and forth over ~60s */
      var k=.5-.5*Math.cos(t*Math.PI*2/60),sc=Math.max(bw/iw,bh/ih)*(1.03+.06*k)*(1+.04*(1-e))*(G.mob?1:1);
      var dw=iw*sc,dh=ih*sc,fx=G.mob?0.9:1,fy=G.mob?0.5:0.5;
      var x=(bw-dw)*fx-k*bw*.012,y=(bh-dh)*fy-k*bh*.008;
      x=Math.min(0,Math.max(bw-dw,x));y=Math.min(0,Math.max(bh-dh,y)); /* the drift never opens a gap at an edge (DJ) */
      /* wide screens: shift the art right so its feather midpoint never sits left of ~0.68 of the content (DI); the canvas left of it is ink */
      if(!G.mob)x+=Math.max(0,G.side+G.cw*0.68-(x+dw*0.46));
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* ink scrim over the headline and lede side (0 to ~55%), a light top wash under the nav, the base deepening */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba("+SR+",.9)");lv.addColorStop(.6,"rgba("+SR+",.62)");lv.addColorStop(1,"rgba("+SR+",0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba("+SR+",.5)");tv.addColorStop(1,"rgba("+SR+",0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba("+SR+",0)");bv.addColorStop(1,"rgba("+SR+",.78)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4);
      }else{
        var tv2=c.createLinearGradient(0,0,0,bh*.28);tv2.addColorStop(0,"rgba("+SR+",.6)");tv2.addColorStop(1,"rgba("+SR+",0)");c.fillStyle=tv2;c.fillRect(0,0,w,bh*.28);
        var mv=c.createLinearGradient(0,bh*.62,0,bh);mv.addColorStop(0,"rgba("+SR+",0)");mv.addColorStop(1,INK);c.fillStyle=mv;c.fillRect(0,bh*.62,w,bh*.38+1);
        c.fillStyle=INK;c.fillRect(0,bh,w,h-bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[w*0.75,G.bh*.42]:[w/2,h/2]}};
})();

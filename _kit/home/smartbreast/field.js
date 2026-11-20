/* ================= HERO FIELD: SmartBreast's own Eve Clear Scan™ molecular breast image (smartbreast.com home banner),
   HOME_BRIEF update 2a: the firm's own imagery of its own product. The scan's rainbow colour map is inverted to counts and
   re-graded into the logo violets by grade.py (lesion = warm bone), mirrored so the chest wall anchors the right edge, its
   ground transparent so every inner edge feathers into the ink (DJ). Here it breathes in a slow Ken Burns drift and the
   tracer uptake at the lesion glows softly. It moves on its own, so no pointer response (CZ). The headline side stays ink
   (DI). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#120a16",AR=1400/2200,LX=.71,LY=.275;   /* LX/LY: the lesion's centre in the graded image */
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.52,w*1.1):h;
    var ih,iw,x,y;
    if(mob){ih=Math.max(U*1.18,(w*.62)/AR);iw=ih*AR;x=w-iw*.98;y=58+(U-58)*.5-ih*.4}
    else{ih=Math.max(h*1.06,Math.min(cw*.62,w*.44)/AR*.98);iw=ih*AR;x=w-iw*.985;y=h*.5-ih*.47}
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,x:x,y:y,bh:mob?U:h};
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
      /* a very slow breath: push in ~3.5% about the lesion and drift up a touch over ~46s */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.035*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,ax=G.x+G.iw*LX,ay=G.y+G.ih*LY;
      var x=ax-dw*LX,y=ay-dh*LY-k*G.ih*.01-SP.v*G.ih*.05;
      /* a low violet bloom painted across the WHOLE canvas, so no edge of the image can read as a pasted box (DJ) */
      var ggx=G.mob?w*.7:G.x+G.iw*.62,ggy=G.mob?G.bh*.45:h*.48,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(58,30,70,"+(.42*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(34,18,42,"+(.24*e).toFixed(3)+")");ag.addColorStop(1,"rgba(18,10,22,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the tracer uptake: a soft lilac glow breathing over the lesion */
      var pu=.5+.5*Math.sin(t*Math.PI*2/7),lx=x+dw*LX,ly=y+dh*LY,lr=dw*(.3+.04*pu);
      var rg=c.createRadialGradient(lx,ly,0,lx,ly,lr);rg.addColorStop(0,"rgba(232,196,220,"+(.07+.07*pu).toFixed(3)+")");rg.addColorStop(.5,"rgba(215,163,202,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(215,163,202,0)");
      c.fillStyle=rg;c.fillRect(lx-lr,ly-lr,lr*2,lr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays ink (DI): a wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(11,6,14,.94)");lv.addColorStop(.7,"rgba(11,6,14,.55)");lv.addColorStop(1,"rgba(11,6,14,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(11,6,14,.55)");tv.addColorStop(1,"rgba(11,6,14,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.72,0,h);bv.addColorStop(0,"rgba(18,10,22,0)");bv.addColorStop(1,"rgba(18,10,22,.85)");c.fillStyle=bv;c.fillRect(0,h*.72,w,h*.28+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.26);tv2.addColorStop(0,"rgba(11,6,14,.7)");tv2.addColorStop(1,"rgba(11,6,14,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.26);
        var lv2=c.createLinearGradient(0,0,w*.6,0);lv2.addColorStop(0,"rgba(11,6,14,.5)");lv2.addColorStop(1,"rgba(11,6,14,0)");c.fillStyle=lv2;c.fillRect(0,0,w,G.bh);
        var mv=c.createLinearGradient(0,G.bh*.6,0,G.bh);mv.addColorStop(0,"rgba(18,10,22,0)");mv.addColorStop(1,"rgba(18,10,22,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.6,w,G.bh*.4+1);
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
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.x+G.iw*LX,G.y+G.ih*LY]:[w/2,h/2]}};
})();

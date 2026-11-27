/* ================= HERO FIELD: a crafted render of the firm's own product (HOME_BRIEF update 2c): the Bitmos sat 805 bedside
   pulse oximeter, white housing, black bezel, backlit LCD with the plethysmogram and read-outs, rotary knob. Rendered offline by
   render.py (numpy sphere tracer, real alpha) to hero.webp; here it breathes in a slow drift and a soft refresh sweep crosses the
   trace on the LCD, as on the real monitor. It moves on its own, so no pointer response (CZ). Desktop: centred in the open area
   right of the copy, above the pillar band. Phones: in the top band, fading into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},HY=0,G=null,img=new Image(),ok=false;
  var BG="#071a21";var IW=1014,IH=504;var LCD={tl:[0.1274,0.3579],tr:[0.6931,0.5029],bl:[0.1163,0.5922]};
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    if(mob){var top=92,iw=Math.min(w*.84,560),ih=iw*IH/IW,U=Math.round(top+ih+28);return {mob:1,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:w*.5,ky:top+ih/2+6,bh:U}}
    /* the open area right of the copy: x from 52% to 96% of the content width, y between the nav and the pillar band */
    var y0=Math.max(96,h*.11),y1=h-Math.min(190,Math.max(150,h*.17)),ah=y1-y0,aw=cw*.38;
    var ih=Math.min(ah*.96,aw*IH/IW),iw=ih*IW/IH;
    return {mob:0,side:side,cw:cw,U:h,ih:ih,iw:iw,kx:side+cw*.79,ky:(y0+y1)/2,bh:h};
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
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.025*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012+HY;
      /* a low navy glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.kx,ggy=G.ky,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(16,70,86,"+(.55*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(10,40,50,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,26,33,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint cool sheen breathing across the steel, like studio light moving */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.5+.1*pu),py=y+dh*.3,pr=dw*.26;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(220,240,246,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(210,236,244,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      /* the LCD's refresh sweep: a soft light band crossing the trace every ~4.5s, mapped onto the screen plane */
      if(!RM){var su=((t/4.5)%1)*.62+.03,ax=x+dw*LCD.tl[0],ay=y+dh*LCD.tl[1],ux=dw*(LCD.tr[0]-LCD.tl[0]),uy=dh*(LCD.tr[1]-LCD.tl[1]),vx=dw*(LCD.bl[0]-LCD.tl[0]),vy=dh*(LCD.bl[1]-LCD.tl[1]);
        c.save();c.setTransform(dpr*ux,dpr*uy,dpr*vx,dpr*vy,dpr*ax,dpr*ay);
        var sg=c.createLinearGradient(su-.06,0,su+.01,0);sg.addColorStop(0,"rgba(235,250,245,0)");sg.addColorStop(.85,"rgba(235,250,245,"+(.22*e).toFixed(3)+")");sg.addColorStop(1,"rgba(235,250,245,0)");
        c.fillStyle=sg;c.fillRect(su-.06,.1,.07,.75);c.restore()}
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.56,0);lv.addColorStop(0,"rgba(7,26,33,.95)");lv.addColorStop(.5,"rgba(7,26,33,.7)");lv.addColorStop(.8,"rgba(7,26,33,.22)");lv.addColorStop(1,"rgba(7,26,33,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.12);tv.addColorStop(0,"rgba(7,26,33,.5)");tv.addColorStop(1,"rgba(7,26,33,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.12);
        var bv=c.createLinearGradient(0,h*.8,0,h);bv.addColorStop(0,"rgba(7,26,33,0)");bv.addColorStop(1,"rgba(7,26,33,.7)");c.fillStyle=bv;c.fillRect(0,h*.8,w,h*.2+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.16);tv2.addColorStop(0,"rgba(7,26,33,.5)");tv2.addColorStop(1,"rgba(7,26,33,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.16);
        var mv=c.createLinearGradient(0,G.bh*.7,0,G.bh);mv.addColorStop(0,"rgba(7,26,33,0)");mv.addColorStop(1,"rgba(7,26,33,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.7,w,G.bh*.3+1);
        c.fillStyle=BG;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40;var hy=0,hr=G&&!G.mob?document.querySelector("#view #hero"):null;if(hr){var b=hr.getBoundingClientRect();if(b.bottom>0)hy=Math.min(0,b.top)}if(hy!==HY){HY=hy;frame(true)}},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

/* ================= HERO FIELD: a crafted render of StemBioSys's real product (HOME_BRIEF update 2c): a mesenchymal
   stem cell spread on a CELLvo(TM) Matrix, the cell-derived extracellular matrix left intact as a mesh of fibres
   (stembiosys.com /cellvo-matrix-technology, whose own SEM shows that mesh). Ray-marched offline by render.py and shaded
   like a coloured scanning electron micrograph: silver-blue matrix fibres lit in the logo blue #0070b9, the cell in the
   site's teal #36b3b3, baked with alpha to hero.webp (the mat dissolves at its rim); here it breathes in a slow drift.
   It moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above
   the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#06101c";
  img.decoding="async";img.onload=function(){ok=true;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861,A=ok?img.naturalWidth/img.naturalHeight:1.4;
    var U=mob?Math.min(h*.5,w*1.0):h;
    /* the cell on its matrix stands whole in the open area right of the text, below the header (DO/DQ) */
    var iw=mob?w*.94:Math.min(cw*.6,(h-150)*A*1.0),ih=iw/A;
    var kx=mob?w*.5:side+cw*.71,ky=mob?96+(U-96)*.5:112+(h-112)*.5;
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
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(0,62,110,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(4,30,56,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(6,16,28,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint cool sheen breathing along the fibre */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.5+.1*pu),py=y+dh*.45,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(190,232,236,"+(.04+.04*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(190,232,236,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);for(var li=0;li<=16;li++){var lt=li/16,la=.92*Math.pow(1-lt,1.6)*(1-lt*lt*(3-2*lt))/(1-0)+0;lv.addColorStop(lt,"rgba(3,10,19,"+(.92*(1-lt*lt*(3-2*lt))*(1-.35*lt)).toFixed(3)+")")}c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(3,10,19,.6)");tv.addColorStop(1,"rgba(3,10,19,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(6,16,28,0)");bv.addColorStop(1,"rgba(6,16,28,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.28);tv2.addColorStop(0,"rgba(3,10,19,.7)");tv2.addColorStop(1,"rgba(3,10,19,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=c.createLinearGradient(0,G.bh*.62,0,G.bh);mv.addColorStop(0,"rgba(6,16,28,0)");mv.addColorStop(1,"rgba(6,16,28,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.62,w,G.bh*.38+1);
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

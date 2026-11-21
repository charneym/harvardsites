/* ================= HERO FIELD: a crafted render of Molecular Theranostics' subject (HOME_BRIEF update 2c): a ball-and-stick
   model of an MT218-type agent as the company describes it ("a small peptide of seven amino acids conjugated to a clinical
   macrocyclic MRI contrast agent Gd(HP-DO3A)", mtheranostics.com/mt218): the gadolinium ion glowing in its macrocyclic cage,
   the peptide arm curling below. RDKit geometry, shaded offline by render.py in the logo's blue #48a8e8 and green #4caa5a,
   baked with alpha to hero.webp. It breathes in a slow drift and the gadolinium glow pulses gently; no pointer response (CZ).
   On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#07121b",GX=569/1300,GY=449/1200;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.round(h*.42):h;
    /* never above the render's native 1300 px (DP) */
    var iw=mob?Math.min((U-66)/.68*(1300/1200),w*1.12):Math.min(cw*.5,(h-120)*1.06,1300),ih=iw*(1200/1300);
    var kx=mob?w*.5:side+cw*.74,ky=mob?74+(U-74)/2:Math.max(h*.55,96+ih*.5);
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
      /* a very slow breath: push in ~3% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low blue glow painted across the WHOLE canvas (never inside the image rect alone), so no edge of the render can
         read as a pasted box (DJ/DP) */
      var ggx=G.mob?w*.5:G.kx,ggy=G.mob?G.bh*.45:G.ky,ggr=Math.max(w,h)*.7;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(20,58,88,"+(.42*e).toFixed(3)+")");ag.addColorStop(.5,"rgba(12,34,52,"+(.22*e).toFixed(3)+")");ag.addColorStop(1,"rgba(7,18,27,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the gadolinium glow pulses softly, like signal coming up on a scan */
      var pu=.5+.5*Math.sin(t*Math.PI*2/7),px=x+dw*GX,py=y+dh*GY,pr=dw*.2;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(170,220,255,"+(.05+.06*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(170,220,255,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(4,11,17,.9)");lv.addColorStop(.7,"rgba(4,11,17,.45)");lv.addColorStop(1,"rgba(4,11,17,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(4,11,17,.6)");tv.addColorStop(1,"rgba(4,11,17,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(7,18,27,0)");bv.addColorStop(1,"rgba(7,18,27,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.16);tv2.addColorStop(0,"rgba(4,11,17,.7)");tv2.addColorStop(1,"rgba(4,11,17,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.16);
        var mv=c.createLinearGradient(0,G.bh*.9,0,G.bh+24);mv.addColorStop(0,"rgba(7,18,27,0)");mv.addColorStop(1,"rgba(7,18,27,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.9,w,G.bh*.1+25);
        c.fillStyle=BG;c.fillRect(0,G.bh+24,w,h-G.bh);
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

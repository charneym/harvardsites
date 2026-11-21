/* ================= HERO FIELD: a crafted render of PhotoDynamica's real mechanism (HOME_BRIEF update 2c): PDT light
   delivery, as in their NIH STTR award (a 635 nm laser coupled to a light delivery head) and their site (fibre optic
   technology). A jacketed optical fibre rises out of the dark to a steel ferrule and a frosted cylindrical diffuser glowing
   635 nm red. Sphere-traced offline by render.py and baked with alpha (the glow stored as premultiplied light) to
   hero.webp; here it breathes in a slow drift while the diffuser's light pulses very gently. It moves on its own, so no
   pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0a1712";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function ease(g,a,rgb){for(var i=0;i<=8;i++){var u=i/8,v=1-u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a*v).toFixed(3)+")")}return g}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var eb=document.querySelector(".hero .eyebrow"),et=eb?eb.getBoundingClientRect().top+(window.scrollY||0):0;
    var U=mob?Math.max(200,Math.min(et>120?et-12:h*.34,w*1.0)):h;
    /* the fibre spans x 0.31-0.76, y 0.11-0.90 of the render (alpha bbox); its centre is x .535 */
    var ih=mob?Math.min((U-104)/.8,w*1.1):Math.min(h*.88,cw*.62,1200),iw=ih*(1000/1200);
    var kx=mob?w*.5:side+cw*.72,ky=mob?104+.39*ih:h*.55;  /* kx/ky: the subject centre; the glowing tip sits well below the header */
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
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.535,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low green-ink glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ); it eases out over most of the screen */
      var ggx=G.mob?w*.5:G.side+G.cw*.72,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.8;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(22,52,36,"+(.55*e).toFixed(3)+")");ag.addColorStop(.3,"rgba(17,40,28,"+(.36*e).toFixed(3)+")");ag.addColorStop(.62,"rgba(12,28,21,"+(.14*e).toFixed(3)+")");ag.addColorStop(1,"rgba(10,23,18,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* the diffuser's light pulses very gently, a soft red bloom around the tip (render coords x .41-.54, y .15-.36) */
      var pu=.5+.5*Math.sin(t*Math.PI*2/7),px=x+dw*.475,py=y+dh*.255,pr=dw*.36;
      c.globalCompositeOperation="lighter";
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,52,30,"+(.05+.05*pu).toFixed(3)+")");rg.addColorStop(.5,"rgba(255,52,30,"+(.015+.015*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,52,30,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalCompositeOperation="source-over";c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        /* every wash eases out over a long distance (smoothstep stops), so none ends on a line */
        c.fillStyle=ease(c.createLinearGradient(0,0,G.side+G.cw*.62,0),.9,"6,16,12");c.fillRect(0,0,w,h);
        c.fillStyle=ease(c.createLinearGradient(0,0,0,h*.36),.55,"6,16,12");c.fillRect(0,0,w,h*.36);
        c.fillStyle=ease(c.createLinearGradient(0,h,0,h*.62),.85,"10,23,18");c.fillRect(0,h*.62,w,h*.38+1);
      }else{
        c.fillStyle=ease(c.createLinearGradient(0,0,0,G.bh*.3),.45,"6,16,12");c.fillRect(0,0,w,G.bh*.3);
        c.fillStyle=ease(c.createLinearGradient(0,G.bh,0,G.bh*.55),1,"10,23,18");c.fillRect(0,G.bh*.55,w,G.bh*.45+1);
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

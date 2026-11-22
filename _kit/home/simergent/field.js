/* ================= HERO FIELD: Simergent's own studio photograph of the Archimedes™ APD cycler on its mobile cart
   (HOME_BRIEF update 2a: the firm's own photography). process_hero.py flat-fields the backdrop to exactly white, so here the
   photo is composited with 'multiply' onto a soft studio light pool painted across the whole canvas: the white backdrop
   vanishes into the pool (no rectangle can show, DP/DJ) and only the device and its floor shadow remain, lit as on a stage.
   The pool sits in the open area right of the text (DO), the headline side stays deep ink (DI). Slow Ken Burns breath, no
   pointer response (CZ). On phones the device sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#06143a";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1560:1320))/2),cw=w-2*side,mob=w<861;
    var eb=mob&&document.querySelector(".hero .eyebrow"),ebt=eb?eb.getBoundingClientRect().top+(window.scrollY||0):h*.45;
    var U=mob?Math.max(250,Math.min(ebt-10,h*.5)):h;
    var top=mob?66:Math.max(96,h*.12),bot=mob?U-8:h-Math.max(28,h*.04);
    var ih=Math.min(bot-top,mob?9999:cw*.62),iw=ih*1008/1500;
    if(mob&&iw>w*.8){iw=w*.8;ih=iw*1500/1008}
    var kx=mob?w*.5:side+cw*.73,ky=(top+bot)/2;
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  function pool(cx,cy,rx,ry,e){
    /* elliptical studio light, eased over a long distance so it never ends on a line */
    c.save();c.translate(cx,cy);c.scale(rx/ry,1);
    var g=c.createRadialGradient(0,0,0,0,0,ry),N=24;
    for(var i=0;i<=N;i++){var u=i/N,f=Math.exp(-2.6*u*u)*(1-u*u*u);
      var r=Math.round(6+(236-6)*f*e),gg=Math.round(20+(240-20)*f*e),b=Math.round(58+(248-58)*f*e);g.addColorStop(u,"rgb("+r+","+gg+","+b+")")}
    c.fillStyle=g;c.fillRect(-w*2,-h*2,w*4,h*4);c.restore();
  }
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.globalCompositeOperation="source-over";c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok){
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.02*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,cx=G.kx,cy=G.ky-SP.v*G.ih*.05;
      pool(cx,cy+dh*.04,dh*(G.mob?.7:.82),dh*(G.mob?.8:1.02),e);
      c.globalCompositeOperation="multiply";c.drawImage(img,cx-dw*.5,cy-dh*.5,dw,dh);c.globalCompositeOperation="source-over";
      if(!G.mob){
        /* the headline side stays deep ink (DI): a long wash from the left */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.6,0);lv.addColorStop(0,"rgba(3,12,38,.9)");lv.addColorStop(.55,"rgba(3,12,38,.55)");lv.addColorStop(1,"rgba(3,12,38,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.78,0,G.bh);mv.addColorStop(0,"rgba(6,20,58,0)");mv.addColorStop(1,"rgba(6,20,58,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.78,w,G.bh*.22+1);
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

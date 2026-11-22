/* ================= HERO FIELD: a real photograph of the subject (HOME_BRIEF update 2b): the sun rising over a calm sea
   horizon, its light laid in a path across the water: 2Morrow's own mark is a sun rising over a horizon. Pexels photo 3845506
   (Pexels License), 3000px, shown at or below native up to ~1940px wide viewports. Shadows lightly cooled toward the page
   ink. Full-bleed (no panel edges): the sun sits in the open area right of the text (~70% of the content width) and the
   headline side lies under a long ink wash (DI). A very slow Ken Burns breath; it moves on its own, so no pointer response
   (CZ). On phones the sun sits in the top band and the band eases into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#061722",IW=3000,IH=1686,SX=.516,SY=.508;   /* SX/SY: the sun's centre in the photograph */
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function ez(g,rgb,a0,a1,n){n=n||8;for(var i=0;i<=n;i++){var u=i/n,s=u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a0+(a1-a0)*s).toFixed(3)+")")}return g}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.44,w*.96):h;
    var kx=mob?w*.5:side+cw*.71,ky=mob?92+(U-92)*.5:h*.5;
    /* cover: the photo always reaches past every viewport edge from the sun's position, with a margin for the breath */
    var iw=Math.max(mob?w*2.1:w*1.5,kx/SX*1.06,(w-kx)/(1-SX)*1.06,ky/SY*(IW/IH)*1.06,((mob?U:h)-ky)/(1-SY)*(IW/IH)*1.06);
    return {mob:mob,side:side,cw:cw,U:U,iw:iw,ih:iw*IH/IW,kx:kx,ky:ky,bh:mob?U:h};
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
      /* a very slow breath around the sun: push in ~3% over ~46s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/46),sc=(1+.03*k)*(1+.03*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*SX,y=G.ky-dh*SY-SP.v*G.ih*.04;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): a long ink wash from the left, a soft top under the nav, and a base */
        var lv=ez(c.createLinearGradient(0,0,G.side+G.cw*.6,0),"4,15,23",.94,0,14);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=ez(c.createLinearGradient(0,0,0,h*.4),"4,15,23",.6,0,12);c.fillStyle=tv;c.fillRect(0,0,w,h);
        var bv=ez(c.createLinearGradient(0,h*.55,0,h),"6,23,34",0,.92,14);c.fillStyle=bv;c.fillRect(0,0,w,h);
      }else{
        var tv2=ez(c.createLinearGradient(0,0,0,G.bh*.34),"4,15,23",.6,0,10);c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.34);
        var mv=ez(c.createLinearGradient(0,G.bh*.66,0,G.bh),"6,23,34",0,1,12);c.fillStyle=mv;c.fillRect(0,G.bh*.66,w,G.bh*.34+1);
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

/* Hero canvas plumbing (from the approved engine). gen.js inlines this shell plus the SITE'S OWN hero module
   (_kit/pe/sites/<slug>/hero.js, written fresh for each firm) into the src's field region.
   Module contract (browser side):
     HM.geo(L)            L={W,H,side,cw,mob,foot} -> geometry object G (focal point in G.fx,G.fy)
     HM.build(G,ST,E)     optional: precompute into ST (offscreen layers, particles). Called on resize / per footer size.
     HM.draw(c,S,E)       S={t,e,m:[mx,my],sp,G,w,h,pe,foot,ST}; E={R,sm,P,C,dpr}. C={fg,acc,hi,gr} rgb strings.
     HM.mask              false = the shell does not fade the art over the headline column (art already kept right).
   CU: every module draws a FILLED focal point. CW: on phones the canvas sits in a top band (CSS in the engine);
   geo() puts the focal point inside the top ~30% of the screen when L.mob. Footer bookend (BT/CV): paintTo()
   draws the same module at the footer's own size, so no clipped canvas edge can show. */

var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var m=[0,0],mT=[0,0],IN={v:1},dim=1,dimT=1,SP={v:0},G=null,PA=1,ST={};
  function R(i,k){var x=Math.sin(i*91.7+k*13.3)*43758.5453;return x-Math.floor(x)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function lay(W,H,foot){var side=foot?W*.08:Math.max(Math.min(72,Math.max(16,W*.042)),(W-1320)/2);return {W:W,H:H,side:side,cw:W-2*side,mob:!foot&&W<861,foot:!!foot}}
  function env(foot){return {R:R,sm:sm,P:HERO.params||{},C:foot?HERO.CF:HERO.C,dpr:dpr}}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=HM.geo(lay(w,h));ST={};if(HM.build)HM.build(G,ST,env());if(!running)frame(true)}
  function frame(once){
    var t=RM?12:(performance.now()-t0)/1000;
    m[0]+=(mT[0]-m[0])*.05;m[1]+=(mT[1]-m[1])*.05;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.45+.55*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,w,h);
    var heroOn=window.scrollY<innerHeight*.85?1:0;PA+=(heroOn-PA)*.12;if(once)PA=heroOn;
    HM.draw(c,{t:t,e:e,m:G.mob?[0,0]:m,sp:G.mob?0:SP.v,G:G,w:w,h:h,pe:e*(.35+.65*PA),foot:0,ST:ST},env());
    /* keep the art in its own columns: fade it out over the headline column on desktop */
    if(!G.mob&&HM.mask!==false){var L=lay(w,h);c.globalCompositeOperation="destination-in";var mk=c.createLinearGradient(L.side+L.cw*.36,0,L.side+L.cw*.54,0);mk.addColorStop(0,"rgba(0,0,0,0)");mk.addColorStop(1,"rgba(0,0,0,1)");c.fillStyle=mk;c.fillRect(0,0,w,h);c.globalCompositeOperation="source-over"}
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  addEventListener("pointermove",function(e){mT[0]=(e.clientX/innerWidth-.5);mT[1]=(e.clientY/innerHeight-.5)},{passive:true});
  /* footer bookend (BT): the same module drawn at the footer canvas's own size, centred, quieter */
  var fG=null,fS={},fK="";
  function paintTo(ctx,W,H,d){var k=W+"x"+H;if(k!==fK){fK=k;fG=HM.geo(lay(W,H,1));fS={};if(HM.build)HM.build(fG,fS,env(1))}
    ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,W,H);HM.draw(ctx,{t:RM?12:(performance.now()-t0)/1000+6,e:1,m:[m[0],0],sp:0,G:fG,w:W,h:H,pe:1,foot:1,ST:fS},env(1))}
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=p},paintTo:paintTo,
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.fx,G.fy]:[w/2,h/2]}};
})();

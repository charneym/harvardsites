/* ================= HERO FIELD: a crafted render of Avanti's real target (HOME_BRIEF update 2c, PRINCIPLES DQ): the human DYRK1A
   kinase domain from its crystal structure (RCSB PDB 2VX3), a tube-helix cartoon under a faint glass envelope with the ATP
   site (where a kinase inhibitor binds) in the logo crimson. Rendered offline by render.py with real alpha, baked to hero.webp;
   here it turns very slowly in a Ken Burns drift. It moves on its own, so no pointer response (CZ). It is placed in the open
   area measured to the right of the headline and lede (>=110px clear, DP/DO); on phones it sits in the top band and fades
   into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#141518";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function textRight(){var r=0;["#pageTitle",".hero .hero-foot .s",".hero .eyebrow"].forEach(function(q){var el=document.querySelector(q);if(!el)return;
    var tw=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),n,rg=document.createRange();while((n=tw.nextNode())){if(!n.nodeValue.trim())continue;rg.selectNodeContents(n);var rs=rg.getClientRects();for(var i=0;i<rs.length;i++)if(rs[i].width>1)r=Math.max(r,rs[i].right)}});return Math.min(r,w*.62)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h,AR=1210/1056;
    var ih,iw,kx,ky;
    if(mob){var ey=document.querySelector('.hero .eyebrow'),tp=ey?ey.getBoundingClientRect().top+(window.scrollY||0):U;tp=Math.max(220,Math.min(tp,U));ih=Math.min(tp-104,w*.62/AR);iw=ih*AR;kx=w*.5;ky=86+(tp-86)*.5;U=tp}
    else{var tr=textRight()||side+cw*.5;var L=Math.max(tr+110,side+cw*.5),R=w-Math.max(side*.6,24);
      iw=Math.max(240,Math.min(R-L,h*.66*AR,cw*.5));ih=iw/AR;kx=(L+R)/2;kx=Math.min(kx,R-iw/2);ky=Math.max(h*.54,96+ih/2+24)}
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
      var ggx=G.kx,ggy=G.mob?G.bh*.42:h*.46,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(52,38,42,"+(.55*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(30,26,30,"+(.3*e).toFixed(3)+")");ag.addColorStop(1,"rgba(20,21,24,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint warm sheen breathing across the cells */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.45+.1*pu),py=y+dh*.45,pr=dw*.2;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(255,170,170,"+(.04+.04*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(255,180,180,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,Math.max(G.kx-G.iw*.5,G.side+G.cw*.4),0);lv.addColorStop(0,"rgba(13,14,16,.95)");lv.addColorStop(.62,"rgba(13,14,16,.6)");lv.addColorStop(1,"rgba(13,14,16,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(13,14,16,.6)");tv.addColorStop(1,"rgba(13,14,16,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
        var bv=c.createLinearGradient(0,h*.7,0,h);bv.addColorStop(0,"rgba(20,21,24,0)");bv.addColorStop(1,"rgba(20,21,24,.85)");c.fillStyle=bv;c.fillRect(0,h*.7,w,h*.3+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,80);tv2.addColorStop(0,"rgba(13,14,16,.6)");tv2.addColorStop(1,"rgba(13,14,16,0)");c.fillStyle=tv2;c.fillRect(0,0,w,80);
        var mv=c.createLinearGradient(0,G.bh-26,0,G.bh+4);mv.addColorStop(0,"rgba(20,21,24,0)");mv.addColorStop(1,"rgba(20,21,24,1)");c.fillStyle=mv;c.fillRect(0,G.bh-26,w,31);
        c.fillStyle=BG;c.fillRect(0,G.bh+4,w,h-G.bh);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();[600,1500,3500,9000].forEach(function(d){setTimeout(size,d)});if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){size()});
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

/* ================= HERO FIELD: a crafted render of the real mechanism (HOME_BRIEF update 2026-11-20, option c). The human aryl
   hydrocarbon receptor (AhR) PAS-B ligand-binding domain, the target VN-1032 modulates: residues 271-427 of PDB 7ZUB (cryo-EM,
   indirubin-bound Hsp90-XAP2-AHR complex, Gruszczyk et al. 2022), space-filled offline (_kit/home/vasculonics/render_ahr.py) in the
   logo blue, with a cutaway window onto the ligand pocket (lining residues in the logo red, bound indirubin pale). Real alpha, so
   there is no box edge (DP/DJ). Whole, centred in the open area right of the measured headline and lede (>=120px clear), fully
   below the nav; a slow breathing drift, no pointer response (CZ). Phones: in the top band below the nav, above the text. ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,INK="#0a0d1b";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.36,w*.8):h;
    var tr=0;try{var hh=document.getElementById("pageTitle"),ft=document.querySelector(".hero-foot .s");
      if(hh){var rg=document.createRange();rg.selectNodeContents(hh);tr=Math.max(tr,rg.getBoundingClientRect().right)}
      if(ft){var rg2=document.createRange();rg2.selectNodeContents(ft);tr=Math.max(tr,rg2.getBoundingClientRect().right)}}catch(e){}
    if(!tr||tr>w*.7)tr=side+cw*.5;
    var L=tr+120,R=w-side,ox=(L+R)/2,ow=R-L;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U:h,ox:ox,ow:ow};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;if(now-(G.at||0)>1500){G=geo();G.at=now}dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=INK;c.fillRect(0,0,w,h);
    if(ok){
      var iw=img.naturalWidth,ih=img.naturalHeight,k=.5-.5*Math.cos(t*Math.PI*2/48),cx,cy,sc;
      if(!G.mob){sc=Math.min(G.ow*.86/iw,(h-220)*.9/ih,1.0);cx=G.ox;cy=104+(h-104)*.5}
      else{sc=Math.min(w*.56/iw,(G.bh-112)*.84/ih);cx=w*.5;cy=92+(G.bh-92)*.46}
      sc*=(1+.03*k)*(1+.05*(1-e));
      var dw=iw*sc,dh=ih*sc,x=cx-dw/2-k*dw*.01,y=cy-dh/2+k*dh*.006-SP.v*h*.04;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,Math.max(G.side+G.cw*.48,G.ox-G.ow*.55),0);lv.addColorStop(0,"rgba(6,8,18,.72)");lv.addColorStop(.6,"rgba(6,8,18,.32)");lv.addColorStop(1,"rgba(6,8,18,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(10,13,27,0)");bv.addColorStop(1,"rgba(10,13,27,.7)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38+1);
      }else{
        var mv=c.createLinearGradient(0,G.bh*.9,0,G.bh);mv.addColorStop(0,"rgba(10,13,27,0)");mv.addColorStop(1,"rgba(10,13,27,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.9,w,G.bh*.1+1);
        c.fillStyle=INK;c.fillRect(0,G.bh,w,h-G.bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w/2:G.ox,G.mob?92+(G.bh-92)*.5:104+(h-104)*.5]:[w/2,h/2]}};
})();

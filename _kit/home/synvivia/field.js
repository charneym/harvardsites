/* ================= HERO FIELD (HOME_BRIEF update 2c): a crafted render of Synvivia's own product, a cyclic
   peptide — the molecules their Discovery Library is built from and the thing they deliver to a packaging cell.
   Real conformer: cyclosporin A, the cyclic peptide of the cyclophilin A complex PDB 1CWA (Mikol, Kallen,
   Pflugl, Walkinshaw, 2.1 A), chain C, shown as its macrocycle — backbone ring, carbonyls and first side-chain
   atoms — so the ring reads as one calm object rather than a tangle (DS). Rendered offline by pep.py as a
   glossy ball-and-stick model (sphere-swept bonds, screen-space AO, satin highlight, real alpha) to hero.webp,
   and captioned on the page as illustrative. Tilted well off the ring plane so it reads as a solid object with
   depth, never an empty outline (CU).
   It turns very slowly on its own, so there is no pointer response (CZ). The ground wash is painted across the
   whole canvas, never inside the image rect, so no edge of the baked render can read as a pasted box (DJ/DP).
   On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0b1016",AR=1;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    /* the capsid whole, centred in the open area right of the text (DO/DP) */
    var iw=mob?Math.min(w*.56,(U-120)*.84*AR):Math.min(cw*.345,h*.62*AR,620),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.775,ky=mob?110+ih*.5:Math.max(h*.54,118+ih*.5);
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
      /* a very slow breath: grow ~2.5% and drift a touch over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.025*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.011-SP.v*G.ih*.06;
      /* a low steel glow across the WHOLE canvas, so the baked render has no rectangle of its own (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.775,ggy=G.mob?G.bh*.42:h*.47,ggr=Math.max(w,h)*.80;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(44,70,96,"+(.46*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(20,32,45,"+(.26*e).toFixed(3)+")");ag.addColorStop(1,"rgba(11,16,22,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint pale sheen breathing across the shell */
      var pu=.5+.5*Math.sin(t*Math.PI*2/13),px=x+dw*(.38+.14*pu),py=y+dh*.38,pr=dw*.32;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(212,225,239,"+(.028+.028*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(212,225,239,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base, each eased out over a long distance */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.655,0);lv.addColorStop(0,"rgba(7,11,16,.95)");lv.addColorStop(.62,"rgba(7,11,16,.6)");lv.addColorStop(1,"rgba(7,11,16,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(7,11,16,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.025],[.4,.1],[.6,.24],[.8,.48],[1,.85]].forEach(function(q){bv.addColorStop(q[0],"rgba(11,16,22,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(7,11,16,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.72,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(11,16,22,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.72,w,G.bh*.28+1);
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

/* ================= HERO FIELD: the firm's own photography (HOME_BRIEF update, option a): NeuCyte's confocal image of a 3D brain
   assembloid built from SynFire neurons and astrocytes (TUJ1 / GFAP / DAPI; their Technology page). In hero.webp the black
   microscope ground was converted to real alpha (colour un-premultiplied, alpha from the brightest channel), the scale bar removed and
   a long radial feather laid past the sphere's rim, so the cells sit straight on the page ink with no box or seam (DJ/DP).
   Drawn at or below native size. On desktop the sphere is composed in the open area right of the headline, kept 100px+ clear of the
   measured hero text and below the nav (DO/DP); on phones it sits in the band under the nav, whole. It turns and breathes very slowly on
   its own, so there is no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#05090f",IW=1352,IH=1634,EX=.498,EY=.506,RF=.381,NATR=515;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function textRight(){
    /* the right edge of the inked text (not of the block boxes): measured with a Range over each text element */
    var hero=document.getElementById("hero");if(!hero)return 0;var m=0;
    $$(".eyebrow, .hero-h .l, .hero-foot .s, .hero-foot .act .btn",hero).forEach(function(el){var rg=document.createRange();rg.selectNodeContents(el);
      var rs=rg.getClientRects();for(var i=0;i<rs.length;i++){if(rs[i].width>0&&rs[i].right>m)m=rs[i].right}
      if(el.classList.contains("btn")){var r=el.getBoundingClientRect();if(r.right>m)m=r.right}});
    return m;
  }
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var r,kx,ky;
    if(mob){
      var top=78,U=Math.min(h*.44,w*1.02);
      r=Math.min(w*.38,(U-top)/2-10,NATR);kx=w*.5;ky=top+(U-top)/2;
      return {mob:true,r:r,kx:kx,ky:ky,bh:U};
    }
    var tr=textRight()||(side+cw*.48),L=tr+100,R=w-side;
    var navB=96,avH=h-navB-40;
    r=Math.min(avH*.42,(R-L)/2/1.04,cw*.25,NATR);
    kx=Math.max(L+r*1.04,Math.min(side+cw*.72,R-r*1.04));
    ky=navB+(h-navB)*.47;if(ky-r*1.04<navB+24)ky=navB+24+r*1.04;
    return {mob:false,r:r,kx:kx,ky:ky,bh:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle=BG;c.fillRect(0,0,w,h);
    if(ok&&G){
      /* a very slow breath (about 3% over ~36s) and a slow turn of a few degrees, the sphere kept on its mark */
      var k=.5-.5*Math.cos(t*Math.PI*2/36),sc=(1+.03*k)*(.97+.03*e),rot=Math.sin(t*Math.PI*2/90)*.045;
      var iw=G.r/RF*sc,ih=iw*IH/IW,cy=G.ky-SP.v*G.r*.18;
      c.save();c.globalAlpha=e;c.translate(G.kx,cy);c.rotate(rot);c.drawImage(img,-iw*EX,-ih*EY,iw,ih);c.restore();c.globalAlpha=1;
      if(G.mob){c.fillStyle=BG;var mv=c.createLinearGradient(0,G.bh,0,G.bh+60);mv.addColorStop(0,"rgba(5,9,15,0)");mv.addColorStop(1,"rgba(5,9,15,1)");c.fillStyle=mv;c.fillRect(0,G.bh,w,61);c.fillStyle=BG;c.fillRect(0,G.bh+60,w,h)}
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;G=geo();running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){setTimeout(function(){G=geo();if(!running)frame(true)},60)});
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;G=geo();gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.kx,G.ky]:[w/2,h/2]}};
})();

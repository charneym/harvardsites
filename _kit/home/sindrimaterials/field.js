/* ================= HERO FIELD: a crafted render of the firm's own product (HOME_BRIEF update 2c): a Sindri graphene
   cryo-EM grid as sold, modelled in three.js and baked offline by _kit/home/sindrimaterials/render.js: a 3.05 mm 300-mesh
   gold grid with its solid rim and ~36x36 windows, each spanned by holey carbon carrying monolayer graphene, under studio
   light with a cyan rim from the logo's cube. Real alpha (no box edge, DP/DJ), 1278x1203, never upscaled. It breathes in a
   slow drift and moves on its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink
   above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#081322";
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.webp";
  function ez(g,rgb,a0,a1,n){n=n||8;for(var i=0;i<=n;i++){var u=i/n,s=u*u*(3-2*u);g.addColorStop(u,"rgba("+rgb+","+(a0+(a1-a0)*s).toFixed(3)+")")}return g}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var MW=w>=1800?1560:1320,side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-MW)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.15):h,AR=1278/1203;
    /* the grid disc fills the open area right of the text; its visual centre is the image centre */
    var iw=mob?Math.min((U-150)*AR,w*.86,1278):Math.min(cw*(w>1700?.42:.44),(h-230)*AR,1278),ih=iw/AR;
    var kx=mob?w*.5:side+cw*(w>1700?.72:.735),ky=mob?86+(U-136)*.5:Math.max(h*.53,120+ih*.5);
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
      /* a very slow breath: push in ~3% and drift up a touch over ~44s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/44),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.02-SP.v*G.ih*.06;
      /* a low blue glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.75,ggy=G.mob?G.bh*.46:h*.5,ggr=Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ez(ag,"23,56,99",.55*e,0,12);
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      var hu=.5+.5*Math.sin(t*Math.PI*2/13),hx=x+dw*.62,hy=y+dh*.4,hr=Math.max(w,h)*.5;
      var hg=c.createRadialGradient(hx,hy,0,hx,hy,hr);ez(hg,"0,173,239",(.06+.025*hu)*e,0,12);
      c.fillStyle=hg;c.fillRect(0,0,w,h);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=ez(c.createLinearGradient(G.side,0,G.side+G.cw*.52,0),"5,12,23",.9,0,12);c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=ez(c.createLinearGradient(0,0,0,h*.42),"5,12,23",.5,0,12);c.fillStyle=tv;c.fillRect(0,0,w,h);
        var bv=ez(c.createLinearGradient(0,h*.7,0,h),"8,19,34",0,.7,12);c.fillStyle=bv;c.fillRect(0,0,w,h);
      }else{
        var tv2=ez(c.createLinearGradient(0,0,0,G.bh*.3),"5,12,23",.55,0,10);c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.28);
        var mv=ez(c.createLinearGradient(0,G.bh*.8,0,G.bh),"8,19,34",0,1,10);c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

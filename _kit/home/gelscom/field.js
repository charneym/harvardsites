/* ================= HERO FIELD: a crafted render of Gelscom's real product (HOME_BRIEF update 2c): the sterile glass vial in
   which DiscoGel® is supplied (discogel.com: "un flacon stérile contenant le gel"), holding the grey radiopaque gel (tungsten in
   gelled ethylcellulose), with an aluminium crimp seal and a flip-off cap in the brand green. Modelled and ray-traced offline
   (render/vial.html, three.js physical glass and metal, matted from black and white backgrounds by render/matte.py into real
   alpha), so the glass sits on the page ink with no box (DP/DJ). Here it breathes in a very slow drift, with no pointer
   response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#08150f",AR=1;
  img.decoding="async";img.onload=function(){ok=true;AR=img.naturalWidth/img.naturalHeight;G=geo();if(!running)frame(true)};img.src="hero.webp";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.08):h;
    /* the vial: whole, in the open area right of the text (DO/DP) */
    var iw=mob?Math.min(w*.5,(h*.34-100)*AR):Math.min(cw*.36,h*.68*AR,680),ih=iw/AR;
    var kx=mob?w*.5:side+cw*.765,ky=mob?80+ih*.5:Math.max(h*.54,110+ih*.5);
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
      /* a very slow breath: grow ~3% and drift up a touch over ~40s, eased back and forth */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.035*(1-e));
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw*.5,y=G.ky-dh*.5-k*G.ih*.012-SP.v*G.ih*.06;
      /* a low green glow, painted across the WHOLE canvas (never inside the image rect alone), so no edge of the baked
         render can read as a pasted box (DJ) */
      var ggx=G.mob?w*.5:G.side+G.cw*.765,ggy=G.mob?G.ky:h*.46,ggr=G.mob?Math.max(40,h*.34-G.ky-24):Math.max(w,h)*.78;
      var ag=c.createRadialGradient(ggx,ggy,0,ggx,ggy,ggr);
      ag.addColorStop(0,"rgba(56,92,40,"+(.5*e).toFixed(3)+")");ag.addColorStop(.55,"rgba(20,44,28,"+(.28*e).toFixed(3)+")");ag.addColorStop(1,"rgba(8,21,15,0)");
      c.fillStyle=ag;c.fillRect(0,0,w,h);
      /* a soft lime pool of light under the vial's base, so it stands rather than floats */
      var fx=x+dw*.5,fy=y+dh*.985,fr=dw*.95;c.save();c.translate(fx,fy);c.scale(1,.16);var fg=c.createRadialGradient(0,0,0,0,0,fr);
      fg.addColorStop(0,"rgba(169,196,92,"+(.16*e).toFixed(3)+")");fg.addColorStop(.5,"rgba(120,150,70,"+(.06*e).toFixed(3)+")");fg.addColorStop(1,"rgba(8,21,15,0)");
      c.fillStyle=fg;c.fillRect(-fr,-fr,fr*2,fr*2);c.restore();
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      /* a faint pale sheen breathing across the glass */
      var pu=.5+.5*Math.sin(t*Math.PI*2/11),px=x+dw*(.4+.15*pu),py=y+dh*.4,pr=dw*.3;
      var rg=c.createRadialGradient(px,py,0,px,py,pr);rg.addColorStop(0,"rgba(232,244,214,"+(.03+.03*pu).toFixed(3)+")");rg.addColorStop(1,"rgba(232,244,214,0)");
      c.fillStyle=rg;c.fillRect(px-pr,py-pr,pr*2,pr*2);c.globalAlpha=1;
      if(!G.mob){
        /* the headline side stays quiet (DI): an ink wash from the left, a soft top and base */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.74,0);[[0,.95],[.25,.92],[.42,.82],[.56,.62],[.68,.4],[.79,.2],[.89,.07],[1,0]].forEach(function(q){lv.addColorStop(q[0],"rgba(6,16,11,"+q[1]+")")});c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.5);[[0,.55],[.2,.36],[.4,.2],[.6,.09],[.8,.025],[1,0]].forEach(function(q){tv.addColorStop(q[0],"rgba(6,16,11,"+q[1]+")")});c.fillStyle=tv;c.fillRect(0,0,w,h*.5);
        var bv=c.createLinearGradient(0,h*.5,0,h);[[0,0],[.2,.025],[.4,.1],[.6,.24],[.8,.48],[1,.85]].forEach(function(q){bv.addColorStop(q[0],"rgba(8,21,15,"+q[1]+")")});c.fillStyle=bv;c.fillRect(0,h*.5,w,h*.5+1);
      }else{
        var tv2=c.createLinearGradient(0,0,0,G.bh*.4);[[0,.5],[.25,.22],[.5,.06],[.75,.035],[1,0]].forEach(function(q){tv2.addColorStop(q[0],"rgba(6,16,11,"+q[1]+")")});c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.4);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);[[0,0],[.25,.06],[.5,.25],[.75,.6],[1,1]].forEach(function(q){mv.addColorStop(q[0],"rgba(8,21,15,"+q[1]+")")});c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

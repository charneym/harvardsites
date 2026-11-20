/* ================= HERO FIELD: the firm's own photograph of Flintholm, its seat at Vester Skerninge on South Funen: the
   stone farmhouse under an old beech, the lawn, and the fields beyond (DG: real photography over a drawn scene). The photo
   is graded on canvas toward the logo's steel blue (#42768d) in the shadows and a warm late-summer light in the highlights,
   with a slow drift, dappled light moving across the lawn and a calm scrim on the text side. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false,oG=null,oGrain=null,SPOT=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.round(h*.46):h;
    return {mob:mob,side:side,cw:cw,U:U,hz:U*.72,S:Math.min(w,U*1.6)};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  /* grade once into an offscreen canvas at the cover size (+6% for the drift) */
  function grade(){
    if(!ok)return;var U=G.U,ir=img.width/img.height,k=1.08,W,H;
    if(w/U>ir){W=w*k;H=W/ir}else{H=U*k;W=H*ir}
    var A=mk(W,H),g=A[1];oG={c:A[0],W:W,H:H};
    g.drawImage(img,0,0,W,H);
    /* shadows toward the logo's steel blue, a lifted, slightly warm highlight; lower saturation of the greens */
    g.globalCompositeOperation="color";g.fillStyle="rgba(58,92,84,.16)";g.fillRect(0,0,W,H);
    g.globalCompositeOperation="multiply";g.fillStyle="rgba(196,212,220,.5)";g.fillRect(0,0,W,H);
    g.globalCompositeOperation="soft-light";var wl=g.createLinearGradient(W,0,0,H);wl.addColorStop(0,"rgba(255,214,160,.55)");wl.addColorStop(.6,"rgba(255,226,190,.15)");wl.addColorStop(1,"rgba(40,70,86,.5)");g.fillStyle=wl;g.fillRect(0,0,W,H);
    g.globalCompositeOperation="source-over";
  }
  function grain(){var A=mk(256,256),g=A[1],R=rng(5),d=g.createImageData(Math.round(256*dpr),Math.round(256*dpr));for(var i=0;i<d.data.length;i+=4){var v=R()*255|0;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=10}g.putImageData(d,0,0);oGrain=A[0]}
  function size(){dpr=Math.min(devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);c.setTransform(dpr,0,0,dpr,0,0);
    G=geo();grade();grain();var R=rng(17);SPOT=[];for(var i=0;i<(G.mob?10:22);i++)SPOT.push([R(),.78+R()*.2,.4+R()*.8,R()*6.28,.4+R()*.6]);frame(true)}
  img.onload=function(){ok=true;if(G){grade();frame(true)}};img.src="img/flintholm.jpg";
  function frame(once){
    if(!G)return;var t=(performance.now()-t0)/1000;dim+=(dimT-dim)*.08;var e=IN.v*dim,U=G.U;
    c.globalAlpha=1;c.fillStyle="#12222b";c.fillRect(0,0,w,h);
    if(ok&&oG){
      /* slow drift: a breath of scale and a slight lateral travel; parallax on scroll */
      var s=1+.025*Math.sin(t*.05),dx=(oG.W-w)*(.5+.38*Math.sin(t*.031)),dy=(oG.H-U)*(.55-.25*SP.v);
      c.save();c.globalAlpha=e;c.translate(w/2,U/2);c.scale(s,s);c.translate(-w/2,-U/2);
      c.drawImage(oG.c,-dx,-dy,oG.W,oG.H);c.restore();
      /* dappled sunlight drifting across the lawn under the trees */
      c.globalCompositeOperation="soft-light";
      for(var i=0;i<SPOT.length;i++){var P=SPOT[i],x=((P[0]+t*.004*P[4])%1)*w,y=U*P[1],r=G.S*.05*P[2],a=e*(.25+.2*Math.sin(t*.6*P[4]+P[3]));
        var rg=c.createRadialGradient(x,y,0,x,y,r);rg.addColorStop(0,"rgba(255,236,190,"+a.toFixed(3)+")");rg.addColorStop(1,"rgba(255,236,190,0)");
        c.save();c.translate(x,y);c.scale(1,.32);c.translate(-x,-y);c.fillStyle=rg;c.fillRect(x-r,y-r,r*2,r*2);c.restore()}
      c.globalCompositeOperation="source-over";
      c.globalAlpha=1;c.drawImage(oGrain,0,0,w,U);c.drawImage(oGrain,w/2,0,w/2,U);
    }
    /* scrims: the text side on desktop; a fade into the ink below the photo on phones */
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.72,0);lv.addColorStop(0,"rgba(11,22,28,.74)");lv.addColorStop(.5,"rgba(11,22,28,.4)");lv.addColorStop(1,"rgba(11,22,28,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
      var bv=c.createLinearGradient(0,h*.55,0,h);bv.addColorStop(0,"rgba(18,34,43,0)");bv.addColorStop(1,"rgba(18,34,43,.72)");c.fillStyle=bv;c.fillRect(0,h*.55,w,h*.45);
      var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(11,22,28,.55)");tv.addColorStop(1,"rgba(11,22,28,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22)}
    else{var mv=c.createLinearGradient(0,U*.55,0,U);mv.addColorStop(0,"rgba(18,34,43,0)");mv.addColorStop(1,"rgba(18,34,43,1)");c.fillStyle=mv;c.fillRect(0,U*.55,w,U*.45+1);
      var mt=c.createLinearGradient(0,0,0,U*.3);mt.addColorStop(0,"rgba(11,22,28,.45)");mt.addColorStop(1,"rgba(11,22,28,0)");c.fillStyle=mt;c.fillRect(0,0,w,U*.3)}
    if(dim<.999){c.fillStyle="rgba(11,22,28,"+(1-dim).toFixed(3)+")";c.fillRect(0,0,w,h)}
    if(!shown&&ok){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.mob?w*.7:w*.78,G.U*.55]:[w/2,h/2]}};
})();

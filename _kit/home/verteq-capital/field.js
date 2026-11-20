/* ================= HERO FIELD: the firm's own photograph (DG). VERTEQ's partners at work in their meeting room at
   via Larga 13, the spires of the Duomo and the Torre di San Gottardo in the window, an Epilate map on the wall.
   Graded toward the logo navy, with a refined ink scrim on the text side and a fine grain. It moves on its own, a slow
   breathing drift of a few per cent, and never follows the pointer (CZ). On phones it is a band above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oGrain=null,img=new Image(),ok=false;
  img.onload=function(){ok=true;if(!running)frame(true)};img.src="img/hero.jpg";
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function geo(){var mob=w<861;return {mob:mob,bandH:mob?Math.round(h*.36):h}}
  function grain(){var o=document.createElement("canvas"),S=220;o.width=S;o.height=S;var g=o.getContext("2d"),d=g.createImageData(S,S),R=rng(11);
    for(var i=0;i<d.data.length;i+=4){var v=R()*255;d.data[i]=d.data[i+1]=d.data[i+2]=v;d.data[i+3]=R()<.5?10:0}g.putImageData(d,0,0);return o}
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!oGrain)oGrain=grain();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<40){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    cv.style.opacity=shown?String(.55+.45*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0b0c26";c.fillRect(0,0,w,h);
    if(ok){
      var BH=G.bandH,iw=img.naturalWidth,ih=img.naturalHeight;
      /* intro settles from a hair of scale; then a slow breathing drift */
      var e=IN.v,br=RM?0:(Math.sin(t*.07)*.5+.5),k=Math.max(w/iw,BH/ih)*(1.025+.03*br+.04*(1-e));
      var dw=iw*k,dh=ih*k;
      /* focus: on desktop the room as composed; on phones the three standing partners and the map */
      var fx=G.mob?.6:.5,fy=G.mob?.4:.45;
      var px=G.mob?0:Math.sin(t*.05)*w*.006,py=G.mob?0:-SP.v*h*.08;
      var x=Math.min(0,Math.max(w-dw,w*.5-dw*fx))+px,y=Math.min(0,Math.max(BH-dh,BH*.5-dh*fy))+py;
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      /* the grade: a navy wash, deeper on the text side and at the foot */
      c.fillStyle="rgba(11,12,38,.22)";c.fillRect(0,0,w,BH);
      if(!G.mob){
        var lv=c.createLinearGradient(0,0,w*.7,0);lv.addColorStop(0,"rgba(8,9,30,.9)");lv.addColorStop(.42,"rgba(8,9,30,.66)");lv.addColorStop(1,"rgba(8,9,30,.05)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var bv=c.createLinearGradient(0,h*.55,0,h);bv.addColorStop(0,"rgba(11,12,38,0)");bv.addColorStop(1,"rgba(11,12,38,.78)");c.fillStyle=bv;c.fillRect(0,h*.55,w,h*.45);
        var tv=c.createLinearGradient(0,0,0,h*.2);tv.addColorStop(0,"rgba(8,9,30,.5)");tv.addColorStop(1,"rgba(8,9,30,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.2);
      }else{
        var mv=c.createLinearGradient(0,BH*.45,0,BH);mv.addColorStop(0,"rgba(11,12,38,0)");mv.addColorStop(1,"rgba(11,12,38,.92)");c.fillStyle=mv;c.fillRect(0,BH*.45,w,BH*.55+1);
        var tm=c.createLinearGradient(0,0,0,90);tm.addColorStop(0,"rgba(8,9,30,.6)");tm.addColorStop(1,"rgba(8,9,30,0)");c.fillStyle=tm;c.fillRect(0,0,w,90);
      }
      /* fine grain */
      var pat=c.createPattern(oGrain,"repeat");c.fillStyle=pat;c.fillRect(0,0,w,BH);
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*60)/60},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},
    focus:function(){return G?[G.mob?w*.6:w*.7,G.mob?G.bandH*.4:h*.42]:[w/2,h/2]}};
})();

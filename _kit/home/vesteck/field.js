/* ================= HERO FIELD: the firm's own photography (HOME_BRIEF update 2026-11-20, option a). Two surgeons in
   the cath lab watching an endograft on the fluoroscopy screen, from vesteck.com (home page), graded offline toward
   Vesteck's logo blues (#0a6ca5 / #1e4a7b) and drawn with a slow Ken Burns drift. On desktop the photograph fills the right
   of the frame and feathers into the ink where the headline sits; on phones it sits in the top band and fades into the
   ink. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="hero.jpg";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.5,w*1.02):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h,x0:mob?0:Math.round(w*.36)};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#0c2238";c.fillRect(0,0,w,h);
    if(ok){
      var x0=G.x0,bw=w-x0,bh=G.bh,iw=img.naturalWidth,ih=img.naturalHeight;
      /* Ken Burns: a very slow push toward the fluoroscopy screen, eased back and forth over ~48s */
      var k=.5-.5*Math.cos(t*Math.PI*2/48),sc=Math.max(bw/iw,bh/ih)*(1.03+.06*k)*(1+.035*(1-e));
      var dw=iw*sc,dh=ih*sc,fx=G.mob?.5:.55,fy=G.mob?.3:.38;
      var x=x0+(bw-dw)*fx+k*bw*.01,y=(bh-dh)*fy-k*bh*.008;
      c.save();c.beginPath();c.rect(x0,0,bw,bh);c.clip();c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.restore();c.globalAlpha=1;
      c.fillStyle="rgba(12,34,56,.16)";c.fillRect(x0,0,bw,bh);
      if(!G.mob){
        /* feather: the photograph's left edge dissolves into the ink well before the headline column ends */
        var fw=bw*.46,lv=c.createLinearGradient(x0,0,x0+fw,0);
        lv.addColorStop(0,"rgba(12,34,56,1)");lv.addColorStop(.35,"rgba(12,34,56,.78)");lv.addColorStop(.7,"rgba(12,34,56,.3)");lv.addColorStop(1,"rgba(12,34,56,0)");
        c.fillStyle=lv;c.fillRect(x0-1,0,fw+1,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(8,24,42,.6)");tv.addColorStop(1,"rgba(8,24,42,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.6,0,h);bv.addColorStop(0,"rgba(12,34,56,0)");bv.addColorStop(1,"rgba(12,34,56,.78)");c.fillStyle=bv;c.fillRect(0,h*.6,w,h*.4);
      }else{
        var tv2=c.createLinearGradient(0,0,0,bh*.3);tv2.addColorStop(0,"rgba(8,24,42,.62)");tv2.addColorStop(1,"rgba(8,24,42,0)");c.fillStyle=tv2;c.fillRect(0,0,w,bh*.3);
        var mv=c.createLinearGradient(0,bh*.5,0,bh);mv.addColorStop(0,"rgba(12,34,56,0)");mv.addColorStop(1,"rgba(12,34,56,1)");c.fillStyle=mv;c.fillRect(0,bh*.5,w,bh*.5+1);
        c.fillStyle="#0c2238";c.fillRect(0,bh,w,h-bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[w*.72,G.bh*.4]:[w/2,h/2]}};
})();

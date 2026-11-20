/* ================= HERO FIELD: a crafted render of BioInVision's real mechanism (HOME_BRIEF update 2026-11-20, option c).
   A frozen specimen block sits on the cryostat stage under the CryoViz objective, the microtome knife at its back edge;
   the block face carries the company's own block-face cryo-image of a whole mouse (bioinvision.com, 2DMouse.png),
   re-toned as a fluorescence channel with labelled cells in the logo green. Baked offline with three.js at 3200x1800
   (scratch bake.html), embedded as WebP and drawn with a slow Ken Burns drift. No pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second (QA-2 framing) */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),n;while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.46,w*1.0):h;
    return {mob:mob,side:side,cw:cw,U:U,bh:mob?U*1.06:h};
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?0:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(dpr,0,0,dpr,0,0);c.fillStyle="#11143a";c.fillRect(0,0,w,h);
    if(ok){
      var bw=w,bh=G.bh,iw=img.naturalWidth,ih=img.naturalHeight;
      /* Ken Burns: a very slow push in toward the block face, eased back and forth over ~50s */
      var k=.5-.5*Math.cos(t*Math.PI*2/50),sc=Math.max(bw/iw,bh/ih)*(1.04+.07*k)*(1+.04*(1-e));
      var dw=iw*sc,dh=ih*sc,fx=G.mob?1:.6,fy=G.mob?.42:.5;
      var x=(bw-dw)*fx-k*bw*.012,y=(bh-dh)*fy-k*bh*.01;
      /* wide screens: the block's left face (~57% across the render) moves out from behind the H1/lede, capped so the specimen's tail (~96%) stays in frame; the strip opened at the left is ink (QA-2) */
      if(!G.mob){
        /* desktop (QA-2 R2): the block and specimen (x .57-.97 of the render) sit whole in the open area right of the measured H1/lede,
           centred there with room at both sides; the render shrinks if it must, and its edges feather into the ground */
        var L0=TXR()+90,R0=w-Math.max(90,w*.06),fit=(R0-L0)/.44;
        if(dw>fit){dh*=fit/dw;dw=fit}
        x=(L0+R0)/2-.77*dw;y=(h-dh)*.5-k*h*.01;
      }
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);
      if(x>0){c.fillStyle="#11143a";c.fillRect(0,0,x+1,h);var fe=c.createLinearGradient(x,0,x+200,0);fe.addColorStop(0,"rgba(17,20,58,1)");fe.addColorStop(1,"rgba(17,20,58,0)");c.fillStyle=fe;c.fillRect(x,0,200,h)}
      if(!G.mob&&y>0){var fy1=c.createLinearGradient(0,y,0,y+140);fy1.addColorStop(0,"rgba(17,20,58,1)");fy1.addColorStop(1,"rgba(17,20,58,0)");c.fillStyle="#11143a";c.fillRect(0,0,w,y+1);c.fillStyle=fy1;c.fillRect(0,y,w,140)}
      if(!G.mob&&y+dh<h){var fy2=c.createLinearGradient(0,y+dh-140,0,y+dh);fy2.addColorStop(0,"rgba(17,20,58,0)");fy2.addColorStop(1,"rgba(17,20,58,1)");c.fillStyle=fy2;c.fillRect(0,y+dh-140,w,140);c.fillStyle="#11143a";c.fillRect(0,y+dh-1,w,h-y-dh+2)}
      if(!G.mob&&x+dw<w){var fx2=c.createLinearGradient(x+dw-120,0,x+dw,0);fx2.addColorStop(0,"rgba(17,20,58,0)");fx2.addColorStop(1,"rgba(17,20,58,1)");c.fillStyle=fx2;c.fillRect(x+dw-120,0,120,h);c.fillStyle="#11143a";c.fillRect(x+dw-1,0,w-x-dw+2,h)}
      c.globalAlpha=1;
      /* scrims: navy wash, the headline side darkest, the base deepening into the page */
      c.fillStyle="rgba(17,20,58,.08)";c.fillRect(0,0,w,bh);
      if(!G.mob){
        var TE=Math.max(w*.3,TXR()+140),tg2=c.createLinearGradient(0,0,TE,0);tg2.addColorStop(0,"rgba(10,12,34,.45)");tg2.addColorStop((TE-140)/TE,"rgba(10,12,34,.45)");tg2.addColorStop(1,"rgba(10,12,34,0)");c.fillStyle=tg2;c.fillRect(0,0,TE,h); /* text scrim to the measured end of the H1/lede */
        var lv=c.createLinearGradient(0,0,G.side+G.cw*.62,0);lv.addColorStop(0,"rgba(10,12,34,.7)");lv.addColorStop(.55,"rgba(10,12,34,.35)");lv.addColorStop(1,"rgba(10,12,34,0)");c.fillStyle=lv;c.fillRect(0,0,w,h);
        var tv=c.createLinearGradient(0,0,0,h*.22);tv.addColorStop(0,"rgba(10,12,34,.55)");tv.addColorStop(1,"rgba(10,12,34,0)");c.fillStyle=tv;c.fillRect(0,0,w,h*.22);
        var bv=c.createLinearGradient(0,h*.62,0,h);bv.addColorStop(0,"rgba(10,12,34,0)");bv.addColorStop(1,"rgba(10,12,34,.7)");c.fillStyle=bv;c.fillRect(0,h*.62,w,h*.38);
      }else{
        var tv2=c.createLinearGradient(0,0,0,bh*.3);tv2.addColorStop(0,"rgba(10,12,34,.6)");tv2.addColorStop(1,"rgba(10,12,34,0)");c.fillStyle=tv2;c.fillRect(0,0,w,bh*.3);
        var mv=c.createLinearGradient(0,bh*.55,0,bh);mv.addColorStop(0,"rgba(17,20,58,0)");mv.addColorStop(1,"rgba(17,20,58,1)");c.fillStyle=mv;c.fillRect(0,bh*.55,w,bh*.45+1);
        c.fillStyle="#11143a";c.fillRect(0,bh,w,h-bh+1);
      }
      if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    }
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[w*.68,G.bh*.5]:[w/2,h/2]}};
})();

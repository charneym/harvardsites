/* ================= HERO FIELD: a crafted render of the subject (HOME_BRIEF 2c): a ball-and-stick model of a short peptide chain, the
   form of SP16, in the logo's sky blue with the receptor-binding stretch in the logo's green, echoing the molecule on Serpin Pharma's
   own home page. Ray-traced by mol.py with real alpha (no box edge on the ink), drawn here with a slow drift and breath. It moves on
   its own, so no pointer response (CZ). On phones it sits in the top band and fades into the ink above the text (CW). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,img=new Image(),ok=false;
  var BG="#0e141a",AR=1236/867;
  img.decoding="async";img.onload=function(){ok=true;if(!running)frame(true)};img.src="data:image/webp;base64,__HERO__";
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  /* right edge of the hero text (H1 + lede), measured from the DOM about once a second (QA-2 framing) */
  var TXc=0,TXt=-1e9;function TXR(){var n=performance.now();if(n-TXt>1000){TXt=n;try{var m=0,L=document.querySelectorAll(".hero-h,.hero-foot p");for(var i=0;i<L.length;i++){var tw=document.createTreeWalker(L[i],4),n;while(n=tw.nextNode()){if(!n.nodeValue.trim())continue;var r=document.createRange();r.selectNodeContents(n);var q=r.getClientRects();for(var j=0;j<q.length;j++)if(q[j].width>0)m=Math.max(m,q[j].right)}}TXc=m}catch(_){}}return TXc}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-(w>=1800?1600:1320))/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.45,w*1.0):h,iw,ih,kx,ky,tx=0;
    if(mob){iw=Math.min(w-24,(U-96)*AR);ih=iw/AR;kx=w/2;ky=(84+U)/2+4}
    else{
      /* desktop (DO/DP): the whole model sits centred in the open area right of the measured H1/lede, its centre at no more
         than ~72% of the width, at least 100px clear of the text, under the nav and above the fold */
      tx=TXR();var L=Math.max(tx,side+cw*.42)+110,R=Math.min(w-side*.6,2*w*.74-L);
      iw=Math.min(R-L,(h-230)*AR,cw*.6)/1.08;ih=iw/AR;kx=(L+R)/2;ky=Math.max(h*.52,130+ih*.54);
    }
    return {mob:mob,side:side,cw:cw,U:U,ih:ih,iw:iw,kx:kx,ky:ky,bh:mob?U:h,tx:tx};
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
      /* a very slow breath and drift: push in ~3%, sway a few pixels, over ~40s */
      var k=.5-.5*Math.cos(t*Math.PI*2/40),sc=(1+.03*k)*(1+.03*(1-e));
      if(!G.mob&&Math.abs(TXR()-G.tx)>2)G=geo(); /* re-centre once the hero text has its final width (fonts, reveal) */
      var dw=G.iw*sc,dh=G.ih*sc,x=G.kx-dw/2+Math.sin(t*Math.PI*2/56)*G.iw*.008,y=G.ky-dh/2-k*G.ih*.015-SP.v*G.ih*.06;
      /* a soft cool halo behind the model, so it sits in light rather than on a flat ground */
      var hr=Math.max(dw,dh)*.62,hg=c.createRadialGradient(G.kx,G.ky,0,G.kx,G.ky,hr);hg.addColorStop(0,"rgba(43,184,239,"+(.10*e).toFixed(3)+")");hg.addColorStop(.55,"rgba(43,184,239,"+(.035*e).toFixed(3)+")");hg.addColorStop(1,"rgba(43,184,239,0)");
      c.fillStyle=hg;c.fillRect(G.kx-hr,G.ky-hr,hr*2,hr*2);
      c.globalAlpha=e;c.drawImage(img,x,y,dw,dh);c.globalAlpha=1;
      if(G.mob){
        var tv2=c.createLinearGradient(0,0,0,G.bh*.22);tv2.addColorStop(0,"rgba(14,20,26,.6)");tv2.addColorStop(1,"rgba(14,20,26,0)");c.fillStyle=tv2;c.fillRect(0,0,w,G.bh*.22);
        var mv=c.createLinearGradient(0,G.bh*.8,0,G.bh);mv.addColorStop(0,"rgba(14,20,26,0)");mv.addColorStop(1,"rgba(14,20,26,1)");c.fillStyle=mv;c.fillRect(0,G.bh*.8,w,G.bh*.2+1);
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

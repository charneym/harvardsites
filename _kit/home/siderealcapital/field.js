/* ================= HERO FIELD: the firm's own night photograph. Sidereal means "of the stars", and the firm's site is
   built on astrophotography; its banner of the Milky Way arching over an alpine meadow is used here full-bleed (DG),
   colour-graded toward the logo navy. Above the photograph the night sky continues as a crisp, live starfield that turns
   very slowly about the pole, sidereal time made visible, with stars that scintillate and a rare meteor. It moves on its
   own and never follows the pointer (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oPh=null,ST=[],img=new Image(),ok=false;
  img.onload=function(){ok=true;if(w){build();if(!running)frame(true)}};img.src="@HERO@";
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  var IR=2800/856;
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var PH,PW,fx,sx,by;
    if(mob){PH=Math.max(Math.min(h*.37,w*.82),220);PW=PH*IR;fx=.53;sx=w*.5;by=Math.min(h*.27,PH*.9)+PH*.28}
    else{PH=Math.max(h*.7,w*.84/IR*1.0);PW=Math.max(PH*IR,w*1.25);PH=PW/IR;fx=.52;sx=side+cw*.66;by=h+PH*.04}
    var px=sx-PW*fx;px=Math.min(0,Math.max(w-PW,px));
    return {mob:mob,side:side,cw:cw,PH:PH,PW:PW,px:px,py:by-PH,by:by,pole:[w*.62,-h*.9]};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function build(){
    /* the sky above the photograph: deep navy at the zenith down to the photo's own (graded) sky tone */
    var A=mk(w,h),g=A[1];oSky=A[0];var top=G.py+G.PH*.22;
    var sk=g.createLinearGradient(0,0,0,Math.max(10,top));sk.addColorStop(0,"#040a19");sk.addColorStop(.55,"#0b1428");sk.addColorStop(1,"#141c33");
    g.fillStyle=sk;g.fillRect(0,0,w,h);
    /* a faint band of airglow low over the meadow, then the photograph, feathered into the sky at its top edge */
    if(ok){var B=mk(G.PW,G.PH),pg=B[1];oPh=B[0];pg.drawImage(img,0,0,G.PW,G.PH);
      pg.globalCompositeOperation="destination-in";var fm=pg.createLinearGradient(0,0,0,G.PH);fm.addColorStop(0,"rgba(0,0,0,0)");fm.addColorStop(.2,"rgba(0,0,0,1)");fm.addColorStop(1,"rgba(0,0,0,1)");
      pg.fillStyle=fm;pg.fillRect(0,0,G.PW,G.PH);pg.globalCompositeOperation="source-over";}
    /* stars for the open sky: density and brightness fade out where the photograph's own stars begin */
    var R=rng(7),n=Math.round(w*h/(G.mob?1500:1900));ST=[];
    var lim=G.py+G.PH*.3;
    for(var i=0;i<n;i++){var y=Math.pow(R(),1.15)*lim,x=R()*w*1.3-w*.15;var fade=y>G.py?Math.max(0,1-(y-G.py)/(G.PH*.3)):1;if(R()>fade)continue;
      var m=Math.pow(R(),3.2);ST.push([x,y,.35+m*1.5,.25+m*.75,R()*6.28,.6+R()*2.4,R()<.18?1:0,fade])}
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0,MET={t:-99,x:0,y:0,a:0,l:0};
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* the open-sky stars turn slowly about the celestial pole */
    var ang=t*.0011,ca=Math.cos(ang),sa=Math.sin(ang),P=G.pole;
    for(var i=0;i<ST.length;i++){var s=ST[i],dx=s[0]-P[0],dy=s[1]-P[1],x=P[0]+dx*ca-dy*sa,y=P[1]+dx*sa+dy*ca;
      if(x<-4||x>w+4||y<-4)continue;var lim=G.py+G.PH*.3;if(y>lim)continue;
      var tw=s[6]?(.55+.45*Math.sin(t*s[5]+s[4])):(.85+.15*Math.sin(t*s[5]*.5+s[4])),fd=y>G.py?Math.max(0,1-(y-G.py)/(G.PH*.3)):1,a=s[3]*tw*fd;
      c.fillStyle="rgba(236,232,222,"+a.toFixed(3)+")";var r=s[2];
      if(r<.9)c.fillRect(x-.5,y-.5,1,1);else{c.beginPath();c.arc(x,y,r,0,6.283);c.fill();
        if(r>1.5){c.fillStyle="rgba(236,232,222,"+(a*.35).toFixed(3)+")";c.fillRect(x-r*3,y-.35,r*6,.7);c.fillRect(x-.35,y-r*3,.7,r*6)}}}
    /* the photograph: settles in as the page opens and sinks a little as the page scrolls */
    if(oPh){var sp=SP.v,k=1.02-.02*e,PW=G.PW*k,PH=G.PH*k,px=G.px-(PW-G.PW)*.5,py=G.py-(PH-G.PH)+sp*G.PH*.08;
      c.drawImage(oPh,px,py,PW,PH)}
    /* a rare meteor in the open sky */
    if(!RM&&!once){if(t-MET.t>11){var R=Math.random;MET={t:t,x:w*(.25+R()*.6),y:G.py*(.12+R()*.5),a:2.5+R()*.5,l:Math.min(220,w*.16)}}
      var mt=(t-MET.t)/.9;if(mt>=0&&mt<1){var hx=MET.x+Math.cos(MET.a)*MET.l*mt,hy=MET.y+Math.sin(MET.a)*MET.l*mt*.6,tl=MET.l*.45*Math.sin(mt*Math.PI);
        var mg=c.createLinearGradient(hx,hy,hx-Math.cos(MET.a)*tl,hy-Math.sin(MET.a)*tl*.6);mg.addColorStop(0,"rgba(240,236,226,"+(.55*Math.sin(mt*Math.PI)).toFixed(3)+")");mg.addColorStop(1,"rgba(240,236,226,0)");
        c.strokeStyle=mg;c.lineWidth=1;c.beginPath();c.moveTo(hx,hy);c.lineTo(hx-Math.cos(MET.a)*tl,hy-Math.sin(MET.a)*tl*.6);c.stroke()}}
    /* a quiet scrim on the text side */
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.55,0);lv.addColorStop(0,"rgba(6,12,28,.62)");lv.addColorStop(1,"rgba(6,12,28,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    else{var bv=c.createLinearGradient(0,G.by-G.PH*.2,0,G.by+2);bv.addColorStop(0,"rgba(10,21,48,0)");bv.addColorStop(1,"rgba(10,21,48,1)");c.fillStyle=bv;c.fillRect(0,G.by-G.PH*.2,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},
    focus:function(){return G?[G.px+G.PW*.52,G.py+G.PH*.55]:[w/2,h/2]}};
})();

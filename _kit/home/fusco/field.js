/* ================= HERO FIELD: a sloop under sail at sunrise off the South Florida coast. The firm's logo is two sails,
   one green and one blue, over the line "Stronger Together"; here the jib carries the logo's sea-green and the mainsail
   its blue, backlit by the sun coming up over the Atlantic east of Wilton Manors. It animates on its own (swell, sun
   glitter, a gentle pitch), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oSky=null,oBoat=null,ST=[],GL=[],WV=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.34,w*.74):h;
    var hz=mob?U*.64:h*.63;
    var S=mob?U*.5:Math.min(h*.5,cw*.36);           /* mast height above the waterline */
    var wl=mob?U*.8:hz+h*.075;                         /* the boat's waterline, nearer than the horizon */
    var bx=mob?w*.5:side+cw*.69;
    var sun=mob?w*.8:side+cw*.9;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,wl:wl,bx:bx,sun:sun,wb:mob?U:h};
  }
  function mk(W,H){var o=document.createElement("canvas");o.width=Math.max(1,Math.round(W*dpr));o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(w,hz+2),g=A[1];oSky=A[0];
    /* dawn: navy overhead (the logo's blue, deepened), lifting to a warm gold band on the horizon, brightest where the sun rises */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#08111f");sky.addColorStop(.28,"#13233f");sky.addColorStop(.52,"#2c4672");sky.addColorStop(.72,"#5f7aa2");sky.addColorStop(.86,"#b9a99a");sky.addColorStop(.95,"#e6bf92");sky.addColorStop(1,"#f2cf9e");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+2);
    /* the eastern glow around the sun */
    var R=Math.max(w*.55,S*1.8),sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,R);sg.addColorStop(0,"rgba(255,226,170,.85)");sg.addColorStop(.12,"rgba(250,204,150,.45)");sg.addColorStop(.4,"rgba(214,160,130,.14)");sg.addColorStop(1,"rgba(160,130,140,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.62);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(0,-hz*2,w,hz*4);g.restore();
    /* pre-dawn shade on the west, behind the copy */
    var wg=g.createLinearGradient(0,0,w,0);wg.addColorStop(0,"rgba(8,16,30,.55)");wg.addColorStop(.5,"rgba(8,16,30,.12)");wg.addColorStop(1,"rgba(8,16,30,0)");g.fillStyle=wg;g.fillRect(0,0,w,hz+2);
    /* long thin cloud bands, lit from beneath */
    var Rc=rng(11);for(var i=0;i<(G.mob?7:13);i++){var cy=hz*(.5+Rc()*.42),cx=G.sun+(Rc()-.6)*w*.9,cwid=w*(.08+Rc()*.22),ch=U*(.006+Rc()*.012),near=1-Math.min(1,Math.abs(cx-G.sun)/(w*.6)),a=(.05+Rc()*.09)*(.4+near);
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,"rgba(255,206,170,"+a.toFixed(3)+")");cg.addColorStop(1,"rgba(255,206,170,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* a low cloud bank on the horizon, the sun breaking through its top */
    var Rb=rng(5);g.fillStyle="rgba(120,104,120,.38)";g.beginPath();g.moveTo(0,hz+1);for(var x=0;x<=w+8;x+=8){g.lineTo(x,hz-U*(.006+.008*Math.abs(Math.sin(x*.004+Rb()*.3))))}g.lineTo(w,hz+1);g.closePath();g.fill();
    /* the sun: a soft disc just clearing the horizon */
    var sr=Math.max(10,S*.07),sd=g.createRadialGradient(G.sun,hz-sr*.35,0,G.sun,hz-sr*.35,sr*3.2);sd.addColorStop(0,"rgba(255,248,226,1)");sd.addColorStop(.28,"rgba(255,236,196,.95)");sd.addColorStop(.36,"rgba(255,214,160,.4)");sd.addColorStop(1,"rgba(255,200,150,0)");
    g.fillStyle=sd;g.beginPath();g.arc(G.sun,hz-sr*.35,sr*3.2,0,Math.PI*2);g.fill();
    g.fillStyle="rgba(255,250,236,.96)";g.beginPath();g.arc(G.sun,hz-sr*.35,sr,Math.PI,0);g.lineTo(G.sun+sr,hz);g.lineTo(G.sun-sr,hz);g.closePath();g.fill();
    ST=[];var Rs=rng(3),n=G.mob?24:64;for(var s=0;s<n;s++){var sx=Rs()*w*.7,sy=Math.pow(Rs(),1.6)*hz*.42;ST.push([sx,sy,.4+Rs()*.8,Rs()*6.28,.4+Rs()*1.1,(1-sy/(hz*.42))*(1-sx/(w*.7))])}
    GL=[];var Rg=rng(19);for(var q=0;q<(G.mob?70:190);q++){var gy=Math.pow(Rg(),1.7);GL.push([(Rg()+Rg()+Rg()-1.5)/1.5,gy,Rg()*6.28,.6+Rg()*1.2,Rg()])}
    WV=[];var Rw=rng(29);for(var v=0;v<(G.mob?60:170);v++){WV.push([Rw(),Math.pow(Rw(),1.9),Rw()*6.28,.3+Rw()*.7,Rw()<.5?1:0])}
    buildBoat();
  }
  /* the sloop, drawn once into its own canvas (origin: mast foot on the waterline; x toward the bow, y up negative) */
  function buildBoat(){
    var S=G.S,BW=S*1.0,BH=S*1.12,ox=BW*.5,oy=S*1.03,A=mk(BW,BH),g=A[1];oBoat={c:A[0],w:BW,h:BH,ox:ox,oy:oy};
    function X(u){return ox+u*S}function Y(v){return oy+v*S}
    g.lineJoin="round";g.lineCap="round";
    /* mainsail: luff up the mast, a full roach on the leech, battens and panel seams; the logo's blue, backlit */
    var mh=[.008,-.985],mt=[.008,-.115],mc=[-.4,-.112];
    g.beginPath();g.moveTo(X(mt[0]),Y(mt[1]));g.lineTo(X(mh[0]),Y(mh[1]));g.quadraticCurveTo(X(-.3),Y(-.47),X(mc[0]),Y(mc[1]));g.quadraticCurveTo(X(-.2),Y(-.096),X(mt[0]),Y(mt[1]));g.closePath();
    var mg=g.createLinearGradient(X(-.4),0,X(.02),0);mg.addColorStop(0,"#8fa6cb");mg.addColorStop(.55,"#c3d2ea");mg.addColorStop(1,"#eef3fb");g.fillStyle=mg;g.fill();
    g.save();g.clip();
    var mgl=g.createRadialGradient(X(.05),Y(-.35),0,X(.05),Y(-.35),S*.55);mgl.addColorStop(0,"rgba(255,236,206,.55)");mgl.addColorStop(1,"rgba(255,236,206,0)");g.fillStyle=mgl;g.fillRect(0,0,BW,BH);
    g.strokeStyle="rgba(40,64,110,.22)";g.lineWidth=Math.max(.6,S*.0022);
    for(var k=1;k<9;k++){var yy=-.115-k*.1;g.beginPath();g.moveTo(X(.01),Y(yy+.012));g.lineTo(X(-.42),Y(yy-.02));g.stroke()}
    g.strokeStyle="rgba(30,50,90,.32)";g.lineWidth=Math.max(.8,S*.003);
    [[-.32,-.25,-.37],[-.52,-.45,-.33],[-.72,-.36,-.24]].forEach(function(b){g.beginPath();g.moveTo(X(b[1]+.012),Y(b[0]));g.lineTo(X(b[1]+.11),Y(b[0]+.008));g.stroke()});
    g.restore();
    g.strokeStyle="rgba(255,240,214,.7)";g.lineWidth=Math.max(.7,S*.0026);g.beginPath();g.moveTo(X(mh[0]),Y(mh[1]));g.quadraticCurveTo(X(-.3),Y(-.47),X(mc[0]),Y(mc[1]));g.stroke();
    /* the jib (a genoa overlapping the mast): the logo's sea-green */
    var jh=[.012,-.86],jt=[.41,-.07],jc=[-.05,-.095];
    g.beginPath();g.moveTo(X(jh[0]),Y(jh[1]));g.lineTo(X(jt[0]),Y(jt[1]));g.quadraticCurveTo(X(.18),Y(-.05),X(jc[0]),Y(jc[1]));g.quadraticCurveTo(X(.02),Y(-.47),X(jh[0]),Y(jh[1]));g.closePath();
    var jg=g.createLinearGradient(X(-.05),0,X(.41),0);jg.addColorStop(0,"#92c39b");jg.addColorStop(.5,"#c6e4c9");jg.addColorStop(1,"#f1f8ee");g.fillStyle=jg;g.fill();
    g.save();g.clip();var jgl=g.createRadialGradient(X(.3),Y(-.2),0,X(.3),Y(-.2),S*.45);jgl.addColorStop(0,"rgba(255,232,196,.6)");jgl.addColorStop(1,"rgba(255,232,196,0)");g.fillStyle=jgl;g.fillRect(0,0,BW,BH);
    g.strokeStyle="rgba(40,90,60,.2)";g.lineWidth=Math.max(.6,S*.0022);for(var j=1;j<8;j++){var f=j/8;g.beginPath();g.moveTo(X(jh[0]+(jt[0]-jh[0])*f),Y(jh[1]+(jt[1]-jh[1])*f));g.lineTo(X(jh[0]+(jc[0]-jh[0])*f+.03*Math.sin(f*Math.PI)),Y(jh[1]+(jc[1]-jh[1])*f));g.stroke()}
    g.restore();
    g.strokeStyle="rgba(255,244,222,.8)";g.lineWidth=Math.max(.7,S*.0028);g.beginPath();g.moveTo(X(jh[0]),Y(jh[1]));g.lineTo(X(jt[0]),Y(jt[1]));g.stroke();
    /* spars and standing rigging */
    var dark="#0b1628";g.strokeStyle=dark;
    g.lineWidth=Math.max(1.4,S*.009);g.beginPath();g.moveTo(X(0),Y(-.03));g.lineTo(X(0),Y(-1.0));g.stroke();
    g.lineWidth=Math.max(1.1,S*.007);g.beginPath();g.moveTo(X(0),Y(-.115));g.lineTo(X(-.405),Y(-.108));g.stroke();
    g.lineWidth=Math.max(.6,S*.0022);g.beginPath();g.moveTo(X(0),Y(-.995));g.lineTo(X(-.405),Y(-.05));g.moveTo(X(0),Y(-.86));g.lineTo(X(.415),Y(-.066));
    g.moveTo(X(-.045),Y(-.6));g.lineTo(X(.045),Y(-.6));g.moveTo(X(0),Y(-.94));g.lineTo(X(-.05),Y(-.06));g.stroke();
    /* the burgee at the masthead */
    g.fillStyle="#5ba07e";g.beginPath();g.moveTo(X(0),Y(-1.0));g.lineTo(X(-.07),Y(-1.012));g.lineTo(X(0),Y(-1.026));g.closePath();g.fill();
    /* hull: a low dark topside with a lit sheer line and a green boot stripe on the waterline */
    g.beginPath();g.moveTo(X(-.43),Y(-.05));g.quadraticCurveTo(X(0),Y(-.038),X(.43),Y(-.068));g.lineTo(X(.35),Y(0));g.quadraticCurveTo(X(0),Y(.006),X(-.395),Y(0));g.closePath();
    var hg=g.createLinearGradient(0,Y(-.07),0,Y(0));hg.addColorStop(0,"#1c2d4a");hg.addColorStop(1,"#0a1424");g.fillStyle=hg;g.fill();
    g.strokeStyle="rgba(255,226,186,.75)";g.lineWidth=Math.max(.8,S*.003);g.beginPath();g.moveTo(X(-.43),Y(-.05));g.quadraticCurveTo(X(0),Y(-.038),X(.43),Y(-.068));g.stroke();
    g.strokeStyle="#5ba07e";g.lineWidth=Math.max(1,S*.0045);g.beginPath();g.moveTo(X(-.4),Y(-.008));g.quadraticCurveTo(X(0),Y(-.002),X(.36),Y(-.01));g.stroke();
    /* coachroof and cockpit */
    g.fillStyle="#13213a";g.beginPath();g.moveTo(X(-.16),Y(-.042));g.lineTo(X(-.13),Y(-.068));g.lineTo(X(.1),Y(-.07));g.lineTo(X(.14),Y(-.045));g.closePath();g.fill();
    g.fillStyle="rgba(255,226,186,.5)";for(var p=0;p<3;p++)g.fillRect(X(-.09+p*.065),Y(-.06),S*.03,Math.max(1,S*.006));
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,wb=G.wb,wl=G.wl;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oSky,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    for(var i=0;i<ST.length;i++){var s=ST[i],a=s[5]*(.45+.55*Math.sin(t*s[4]+s[3]))*.6;if(a<.05)continue;c.fillStyle="rgba(240,244,255,"+a.toFixed(3)+")";c.fillRect(s[0],s[1],s[2],s[2])}
    /* the sea: gold under the sun at the horizon, deepening to navy toward the viewer */
    var sg=c.createLinearGradient(0,hz,0,wb);sg.addColorStop(0,"#8c8f9c");sg.addColorStop(.08,"#4d6384");sg.addColorStop(.4,"#1d3150");sg.addColorStop(1,"#0e1a2e");c.fillStyle=sg;c.fillRect(0,hz,w,wb-hz+2);
    var sx=c.createLinearGradient(0,0,w,0);sx.addColorStop(0,"rgba(8,16,30,.45)");sx.addColorStop(.55,"rgba(8,16,30,.08)");sx.addColorStop(1,"rgba(8,16,30,0)");c.fillStyle=sx;c.fillRect(0,hz,w,wb-hz+2);
    var hl=c.createRadialGradient(G.sun,hz,0,G.sun,hz,w*.5);hl.addColorStop(0,"rgba(255,214,160,.5)");hl.addColorStop(.3,"rgba(240,190,150,.12)");hl.addColorStop(1,"rgba(240,190,150,0)");
    c.save();c.translate(G.sun,hz);c.scale(1,.18);c.translate(-G.sun,-hz);c.fillStyle=hl;c.fillRect(0,hz-w*.5,w,w);c.restore();
    /* swell: short dark and light strokes, finer toward the horizon, drifting slowly */
    for(var v=0;v<WV.length;v++){var q=WV[v],dy=q[1],y=hz+dy*(wb-hz)*.96+1,len=(6+dy*S*.22)*q[3],x=((q[0]*w*1.2+t*(4+dy*14)*(q[4]?1:-.6))%(w*1.2))-w*.1,ph=.5+.5*Math.sin(t*.8+q[2]);
      c.fillStyle=q[4]?"rgba(6,14,28,"+((.18+.22*dy)*ph).toFixed(3)+")":"rgba(190,206,230,"+((.05+.06*(1-dy))*ph).toFixed(3)+")";c.fillRect(x,y,len,Math.max(1,dy*2.2))}
    /* the sun's glitter path */
    c.globalCompositeOperation="lighter";
    for(var k=0;k<GL.length;k++){var gq=GL[k],gy=hz+2+gq[1]*(wb-hz)*.92,spread=S*(.05+gq[1]*.75),gx=G.sun+gq[0]*spread+Math.sin(t*.6+gq[2])*3,ga=Math.max(0,Math.sin(t*gq[3]*2.2+gq[2]))*(1-gq[1]*.8)*.55,gl=3+gq[4]*S*.05*(1-gq[1]*.5);
      if(ga<.03)continue;c.fillStyle="rgba(255,226,170,"+ga.toFixed(3)+")";c.fillRect(gx-gl/2,gy,gl,Math.max(1,1+gq[1]*1.4))}
    c.globalCompositeOperation="source-over";
    /* the sloop, pitching gently on the swell, and its broken reflection */
    var pitch=Math.sin(t*.7)*.012,bob=Math.sin(t*.9+1)*S*.004,B=oBoat;
    var rh=Math.min(S*.55,wb-wl-2);c.globalAlpha=e*.32;
    for(var y2=0;y2<rh;y2+=2){var kk=y2/rh,off=Math.sin(y2*.13+t*1.5)*(.8+kk*4)+Math.sin(y2*.05-t*.8)*kk*2.5,fade=1-kk;c.globalAlpha=e*.34*fade*(G.mob?Math.max(0,1-(wl+y2)/(U*.98))*1.4:1);
      if(c.globalAlpha<.01)continue;
      c.drawImage(B.c,0,Math.max(0,Math.round((B.oy-y2-2)*dpr)),B.c.width,Math.round(2*dpr),G.bx-B.ox+off,wl+y2+bob,B.w,2.2)}
    c.globalAlpha=e;
    c.save();c.translate(G.bx,wl+bob);c.rotate(pitch);c.drawImage(B.c,-B.ox,-B.oy,B.w,B.h);c.restore();
    /* foam at the bow and a short wake astern */
    c.fillStyle="rgba(236,242,250,.55)";for(var f=0;f<7;f++){var fx=G.bx+S*(.33+f*.012)+Math.sin(t*2+f)*1.5;c.fillRect(fx,wl+bob-1+f*.6,S*.02*(1-f/8),1.2)}
    c.fillStyle="rgba(210,224,244,.22)";for(var m=0;m<10;m++){var mx=G.bx-S*(.42+m*.045),my=wl+2+m*S*.004;c.fillRect(mx-S*.03,my+Math.sin(t*1.3+m)*.8,S*.04*(1-m/11),1)}
    if(G.mob){var fd=c.createLinearGradient(0,U*.84,0,U);fd.addColorStop(0,"rgba(14,26,46,0)");fd.addColorStop(1,"rgba(14,26,46,1)");c.fillStyle=fd;c.fillRect(0,U*.84,w,U*.16+2);c.fillStyle="#0e1a2e";c.fillRect(0,U,w,h-U)}
    else{var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(8,16,30,.5)");lv.addColorStop(1,"rgba(8,16,30,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.bx,G.wl-G.S*.5]:[w/2,h/2]}};
})();

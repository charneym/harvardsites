/* ================= HERO FIELD: a Chesapeake screwpile lighthouse at first light. JPB is a Maryland firm (Hanover, since
   1995); the hexagonal cottage light standing on iron piles in the bay is the state's most recognisable landmark of the
   kind. The sky runs from the firm's own navy to a pale dawn over the Eastern Shore; the bay mirrors the light, its lantern
   glows, and a skipjack drifts on the horizon. It animates on its own (water, lantern, sail), with no pointer response (CZ). ================= */
var field=(function(){
  var cv=$("#field"),c=cv.getContext("2d"),dpr=1,w=0,h=0,running=false,raf=0,t0=performance.now(),shown=false;
  var IN={v:1},dim=1,dimT=1,SP={v:0},G=null,oTop=null,oLH=null,GL=[],BIRD=[];
  function rng(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function geo(){
    var side=Math.max(Math.min(72,Math.max(16,w*.042)),(w-1320)/2),cw=w-2*side,mob=w<861;
    var U=mob?Math.min(h*.4,w*.86):h;
    var hz=mob?U*.74:h*.6;
    var S=mob?Math.min(U*.68,w*.62):Math.min(h*.56,cw*.42);
    var cx=mob?w*.56:side+cw*.775;
    var yb=mob?hz+U*.07:hz+h*.075;
    return {mob:mob,side:side,cw:cw,U:U,hz:hz,S:S,cx:cx,yb:yb,sun:mob?w*.18:side+cw*.42};
  }
  function mk(H){var o=document.createElement("canvas");o.width=Math.round(w*dpr);o.height=Math.max(1,Math.round(H*dpr));var g=o.getContext("2d");g.setTransform(dpr,0,0,dpr,0,0);return [o,g]}
  function build(){
    var hz=G.hz,U=G.U,S=G.S,A=mk(hz+4),g=A[1];oTop=A[0];
    /* first light: the firm's navy overhead, steel blue, then a pale gold band low over the Eastern Shore */
    var sky=g.createLinearGradient(0,0,0,hz);sky.addColorStop(0,"#06182a");sky.addColorStop(.28,"#0d2e4c");sky.addColorStop(.55,"#2d5579");sky.addColorStop(.76,"#7894ad");sky.addColorStop(.9,"#c9c1b0");sky.addColorStop(1,"#ecd2a6");
    g.fillStyle=sky;g.fillRect(0,0,w,hz+4);
    var sg=g.createRadialGradient(G.sun,hz,0,G.sun,hz,Math.max(w*.45,S*1.4));sg.addColorStop(0,"rgba(255,226,170,.62)");sg.addColorStop(.3,"rgba(246,200,150,.22)");sg.addColorStop(1,"rgba(220,180,150,0)");
    g.save();g.translate(G.sun,hz);g.scale(1,.5);g.translate(-G.sun,-hz);g.fillStyle=sg;g.fillRect(0,0,w,hz*2);g.restore();
    /* the sun's upper limb just clearing the shore */
    var sr=Math.max(6,U*.018);g.fillStyle="rgba(255,240,214,.95)";g.beginPath();g.arc(G.sun,hz-U*.004,sr,Math.PI,0);g.fill();
    /* long, thin dawn clouds catching the light from below */
    var Rc=rng(11);for(var i=0;i<11;i++){var cy=hz*(.3+Rc()*.55),cx=Rc()*w,cwid=w*(.1+Rc()*.22),ch=U*(.01+Rc()*.014),a=.05+Rc()*.08,lit=cy>hz*.6;
      g.save();g.translate(cx,cy);g.scale(1,ch/cwid);var cg=g.createRadialGradient(0,0,0,0,0,cwid);cg.addColorStop(0,lit?"rgba(250,214,176,"+a.toFixed(3)+")":"rgba(176,198,220,"+(a*.8).toFixed(3)+")");cg.addColorStop(1,"rgba(200,200,210,0)");g.fillStyle=cg;g.beginPath();g.arc(0,0,cwid,0,Math.PI*2);g.fill();g.restore()}
    /* the far, low Eastern Shore: a thin wooded line in the haze */
    function shore(base,amp,col,seed,x0,x1){var Rr=rng(seed),y=0,v=0;g.fillStyle=col;g.beginPath();g.moveTo(x0,hz+2);
      for(var x=x0;x<=x1;x+=2){v+=(Rr()-.5)*.5;v*=.93;y+=(v-y)*.12;var e=Math.min(1,(x-x0)/(w*.06),(x1-x)/(w*.06));g.lineTo(x,base-Math.max(0,amp*(.6+y*1.6))*Math.max(0,e))}
      g.lineTo(x1,hz+2);g.closePath();g.fill()}
    shore(hz,U*.014,"rgba(70,96,122,.55)",5,-10,w*.62);
    shore(hz,U*.009,"rgba(54,78,104,.6)",9,w*.7,w+10);
    /* the lighthouse on its own layer, so the bay can mirror it about its own waterline */
    var L=mk(h),lg=L[1];oLH=L[0];lightHouse(lg);
    GL=[];var Rg=rng(19);for(var q=0;q<(G.mob?30:70);q++)GL.push([Rg(),Rg(),Rg()*6.28,.5+Rg()]);
    BIRD=[];var Rb=rng(29);for(var b=0;b<(G.mob?2:4);b++)BIRD.push([Rb(),.25+Rb()*.3,.6+Rb()*.6,Rb()*6.28]);
  }
  function lightHouse(g){
    var S=G.S,x=G.cx,yb=G.yb,dk=yb-S*.3,lw=Math.max(.8,S*.0042),iron="#132536",rim="rgba(255,214,168,.75)";
    g.lineCap="round";g.lineJoin="round";
    function X(u){return x+u*S}function Y(v){return dk-v*S}
    /* screwpile foundation: seven iron piles, battered outward, braced in two tiers */
    var piles=[-.4,-.27,-.13,0,.13,.27,.4];
    g.strokeStyle=iron;g.lineWidth=lw*2.2;g.beginPath();
    piles.forEach(function(u){var ub=u*1.16;g.moveTo(X(u),dk);g.lineTo(X(ub),yb+S*.02)});g.stroke();
    g.lineWidth=lw;g.beginPath();
    for(var i=0;i<piles.length-1;i++){var a=piles[i],b=piles[i+1],m1=.45,ya=dk+(yb-dk)*.08,ym=dk+(yb-dk)*m1,yc=yb-(yb-dk)*.04;
      var ax=function(u,y){return X(u*(1+.16*(y-dk)/(yb-dk)))};
      g.moveTo(ax(a,ya),ya);g.lineTo(ax(b,ym),ym);g.moveTo(ax(b,ya),ya);g.lineTo(ax(a,ym),ym);
      g.moveTo(ax(a,ym),ym);g.lineTo(ax(b,yc),yc);g.moveTo(ax(b,ym),ym);g.lineTo(ax(a,yc),yc)}
    g.moveTo(X(-.46),dk+(yb-dk)*.45);g.lineTo(X(.46),dk+(yb-dk)*.45);g.stroke();
    /* the morning catching the piles on the sun side */
    g.strokeStyle=rim;g.lineWidth=Math.max(.5,lw*.6);g.beginPath();piles.forEach(function(u){var ub=u*1.16;g.moveTo(X(u)-lw*.9,dk+S*.01);g.lineTo(X(ub)-lw*.9,yb)});g.stroke();
    /* deck and gallery railing */
    g.fillStyle="#1b2e40";g.fillRect(X(-.5),dk-S*.012,S,S*.03);g.fillStyle="rgba(255,226,186,.5)";g.fillRect(X(-.5),dk-S*.012,S,Math.max(1,S*.004));
    g.strokeStyle="#22384c";g.lineWidth=lw*.8;g.beginPath();g.moveTo(X(-.49),Y(.06));g.lineTo(X(.49),Y(.06));g.moveTo(X(-.49),Y(.035));g.lineTo(X(.49),Y(.035));
    for(var r=-.49;r<=.495;r+=.035){g.moveTo(X(r),dk-S*.012);g.lineTo(X(r),Y(.06))}g.stroke();
    /* the hexagonal cottage: three faces seen, white clapboard; the west faces lit by the low sun */
    var eave=.23,faces=[[-.36,-.2,"#f0e2cc","#d9c7ad"],[-.2,.2,"#c4ceda","#a9b6c5"],[.2,.36,"#8e9fb3","#7a8ca1"]];
    faces.forEach(function(F){var gr=g.createLinearGradient(0,Y(eave),0,dk);gr.addColorStop(0,F[2]);gr.addColorStop(1,F[3]);g.fillStyle=gr;g.fillRect(X(F[0]),Y(eave),(F[1]-F[0])*S,eave*S-S*.012)});
    g.strokeStyle="rgba(20,40,60,.22)";g.lineWidth=Math.max(.5,lw*.5);g.beginPath();for(var cl=.02;cl<eave;cl+=.018){g.moveTo(X(-.36),Y(cl));g.lineTo(X(.36),Y(cl))}g.stroke();
    g.strokeStyle="rgba(20,40,60,.5)";g.lineWidth=lw*.7;g.beginPath();g.moveTo(X(-.2),Y(eave));g.lineTo(X(-.2),dk);g.moveTo(X(.2),Y(eave));g.lineTo(X(.2),dk);g.stroke();
    /* windows: dark sashes, a warm one where the keeper's room catches the dawn */
    function win(u,v,ww,wh,warm,sk){g.fillStyle=warm?"#3d4a55":"#1b2c3e";g.fillRect(X(u),Y(v),ww*S*sk,wh*S);
      g.fillStyle=warm?"rgba(255,206,140,.55)":"rgba(160,190,220,.18)";g.fillRect(X(u)+S*.004,Y(v)+S*.004,ww*S*sk-S*.008,wh*S*.45);
      g.strokeStyle="#f3efe6";g.lineWidth=Math.max(.6,S*.004);g.strokeRect(X(u),Y(v),ww*S*sk,wh*S);g.beginPath();g.moveTo(X(u),Y(v)+wh*S*.5);g.lineTo(X(u)+ww*S*sk,Y(v)+wh*S*.5);g.stroke()}
    win(-.135,.17,.06,.1,false,1);win(.075,.17,.06,.1,true,1);win(-.305,.17,.06,.1,false,.6);win(.25,.17,.06,.1,false,.6);
    /* the hipped roof, dormers, and the lantern gallery */
    var rt=.4,rp=.1;
    function quad(a,b,c2,d,col){g.fillStyle=col;g.beginPath();g.moveTo(a[0],a[1]);g.lineTo(b[0],b[1]);g.lineTo(c2[0],c2[1]);g.lineTo(d[0],d[1]);g.closePath();g.fill()}
    quad([X(-.395),Y(eave-.005)],[X(-.22),Y(eave-.005)],[X(-.06),Y(rt)],[X(-rp),Y(rt)],"#9a4a3e");
    quad([X(-.22),Y(eave-.005)],[X(.22),Y(eave-.005)],[X(.06),Y(rt)],[X(-.06),Y(rt)],"#6e3430");
    quad([X(.22),Y(eave-.005)],[X(.395),Y(eave-.005)],[X(rp),Y(rt)],[X(.06),Y(rt)],"#4a2626");
    g.strokeStyle="rgba(255,214,168,.55)";g.lineWidth=Math.max(.6,lw*.6);g.beginPath();g.moveTo(X(-.395),Y(eave-.005));g.lineTo(X(-rp),Y(rt));g.stroke();
    g.strokeStyle="rgba(30,20,20,.35)";g.beginPath();g.moveTo(X(-.22),Y(eave-.005));g.lineTo(X(-.06),Y(rt));g.moveTo(X(.22),Y(eave-.005));g.lineTo(X(.06),Y(rt));g.stroke();
    g.fillStyle="#f2ece2";g.fillRect(X(-.4),Y(eave)-S*.004,S*.8,S*.012);
    function dormer(u,sk,col){var dw=.07*sk,db=.27,dt=.33;g.fillStyle=col;g.beginPath();g.moveTo(X(u-dw/2),Y(db));g.lineTo(X(u-dw/2),Y(dt-.02));g.lineTo(X(u),Y(dt+.015));g.lineTo(X(u+dw/2),Y(dt-.02));g.lineTo(X(u+dw/2),Y(db));g.closePath();g.fill();
      g.fillStyle="#1b2c3e";g.fillRect(X(u-dw*.28),Y(dt-.035),dw*.56*S,S*.045);g.strokeStyle="#f3efe6";g.lineWidth=Math.max(.5,S*.003);g.strokeRect(X(u-dw*.28),Y(dt-.035),dw*.56*S,S*.045);
      g.fillStyle="#5a2b2a";g.beginPath();g.moveTo(X(u-dw/2-.008),Y(dt-.02));g.lineTo(X(u),Y(dt+.02));g.lineTo(X(u+dw/2+.008),Y(dt-.02));g.lineTo(X(u+dw/2),Y(dt-.028));g.lineTo(X(u),Y(dt+.008));g.lineTo(X(u-dw/2),Y(dt-.028));g.closePath();g.fill()}
    dormer(0,1,"#d3dbe4");dormer(-.2,.6,"#efe1c9");
    /* lantern: gallery, glazed octagon, domed cap, ventilator ball and rod */
    g.fillStyle="#13202d";g.fillRect(X(-.115),Y(rt)-S*.008,S*.23,S*.016);
    g.strokeStyle="#13202d";g.lineWidth=lw*.7;g.beginPath();g.moveTo(X(-.11),Y(rt+.035));g.lineTo(X(.11),Y(rt+.035));for(var p2=-.11;p2<=.111;p2+=.0275){g.moveTo(X(p2),Y(rt));g.lineTo(X(p2),Y(rt+.035))}g.stroke();
    g.fillStyle="#13202d";g.fillRect(X(-.06),Y(rt+.03),S*.12,S*.03);
    G.lamp=[X(0),Y(rt+.095)];G.lampR=S*.055;
    g.fillStyle="#2b3a48";g.fillRect(X(-.055),Y(rt+.14),S*.11,S*.08);
    g.strokeStyle="#0e1a26";g.lineWidth=Math.max(.6,lw*.8);g.beginPath();for(var m=-.055;m<=.056;m+=.0275){g.moveTo(X(m),Y(rt+.14));g.lineTo(X(m),Y(rt+.06))}g.stroke();
    g.fillStyle="#101c28";g.beginPath();g.moveTo(X(-.07),Y(rt+.14));g.quadraticCurveTo(X(0),Y(rt+.215),X(.07),Y(rt+.14));g.closePath();g.fill();
    g.beginPath();g.arc(X(0),Y(rt+.2),S*.013,0,Math.PI*2);g.fill();g.strokeStyle="#101c28";g.lineWidth=Math.max(.6,lw*.6);g.beginPath();g.moveTo(X(0),Y(rt+.21));g.lineTo(X(0),Y(rt+.25));g.stroke();
    G.top=Y(rt+.25);
  }
  function size(){dpr=Math.min(window.devicePixelRatio||1,2);w=document.documentElement.clientWidth||innerWidth;h=innerHeight;cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);G=geo();build();if(!running)frame(true)}
  var lastF=0;
  function frame(once){
    var now=performance.now();
    if(!once&&running&&now-lastF<31){raf=requestAnimationFrame(function(){frame(false)});return}lastF=now;
    var t=RM?9:(now-t0)/1000;dim+=(dimT-dim)*.08;
    var e=sm(IN.v);cv.style.opacity=shown?String(.5+.5*dim):"";
    var hz=G.hz,U=G.U,S=G.S,yb=G.yb,wb=G.mob?U*1.08:h;
    c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,cv.width,cv.height);c.globalAlpha=e;
    c.drawImage(oTop,0,0);c.setTransform(dpr,0,0,dpr,0,0);
    /* a skipjack on the horizon, drifting west under its raked mast */
    var sx=((G.mob?.08:.06)+((t*.004)%1)*.5)*w,sy=hz+U*.002,ss=Math.max(.7,U*.0016);
    if(sx<G.cx-S*.6||sx>G.cx+S*.6){c.fillStyle="rgba(28,46,66,.85)";c.beginPath();c.moveTo(sx-9*ss,sy-1.5*ss);c.lineTo(sx+9*ss,sy-1.5*ss);c.lineTo(sx+7*ss,sy+.5);c.lineTo(sx-8*ss,sy+.5);c.closePath();c.fill();
      c.fillStyle="rgba(232,226,214,.8)";c.beginPath();c.moveTo(sx-1*ss,sy-2*ss);c.lineTo(sx+1.6*ss,sy-17*ss);c.lineTo(sx+8*ss,sy-2*ss);c.closePath();c.fill();
      c.fillStyle="rgba(212,206,196,.7)";c.beginPath();c.moveTo(sx-2*ss,sy-2*ss);c.lineTo(sx-1*ss,sy-9*ss);c.lineTo(sx-8*ss,sy-2*ss);c.closePath();c.fill()}
    /* the bay: a darker mirror of the sky */
    var wg=c.createLinearGradient(0,hz,0,wb);wg.addColorStop(0,"#8f9fae");wg.addColorStop(.12,"#3f5d7a");wg.addColorStop(.55,"#13304b");wg.addColorStop(1,"#071a2b");
    c.fillStyle=wg;c.fillRect(0,hz,w,wb-hz+2);
    var RH=Math.min(hz,wb-hz),sw=Math.round(w*dpr);c.globalAlpha=e*.42;
    for(var y=0;y<RH;y+=2){var k=y/RH,off=Math.sin(y*.12+t*1.2)*(.6+k*5)+Math.sin(y*.04-t*.6)*(k*3),sy2=Math.max(0,Math.round((hz-y-2)*dpr));
      c.drawImage(oTop,0,sy2,sw,Math.max(1,Math.round(2*dpr)),off,hz+y,w,2.2)}
    c.globalAlpha=e;
    var dkn=c.createLinearGradient(0,hz,0,wb);dkn.addColorStop(0,"rgba(7,26,43,.06)");dkn.addColorStop(.5,"rgba(7,26,43,.42)");dkn.addColorStop(1,"rgba(7,26,43,.82)");c.fillStyle=dkn;c.fillRect(0,hz,w,wb-hz+2);
    /* glints in the sun's path */
    c.globalCompositeOperation="lighter";
    for(var q=0;q<GL.length;q++){var gq=GL[q],gy=hz+Math.pow(gq[1],1.6)*(wb-hz)*.85+2,spread=S*(.25+gq[1]*1.2),gx=G.sun+(gq[0]-.5)*spread*2,ga=(.5+.5*Math.sin(t*gq[3]*1.7+gq[2]))*(1-gq[1])*.22,gl=4+S*.05*(1-gq[1]);
      c.fillStyle="rgba(255,220,170,"+ga.toFixed(3)+")";c.fillRect(gx+Math.sin(t*.5+gq[2])*6,gy,gl,1)}
    c.globalCompositeOperation="source-over";
    /* the light's reflection, broken by ripples, then the light itself */
    var RL=Math.min(yb-G.top,wb-yb);c.globalAlpha=e*.36;
    for(var y2=0;y2<RL;y2+=2){var k2=y2/RL,o2=Math.sin(y2*.16+t*1.5)*(.8+k2*6)+Math.sin(y2*.05-t*.8)*(k2*4),sy3=Math.max(0,Math.round((yb-y2-2)*dpr));
      c.drawImage(oLH,0,sy3,sw,Math.max(1,Math.round(2*dpr)),o2,yb+y2,w,2.2)}
    c.globalAlpha=e;
    /* small wavelets breaking round the piles */
    c.strokeStyle="rgba(230,236,240,.35)";c.lineWidth=1;c.beginPath();
    [-.4,-.27,-.13,0,.13,.27,.4].forEach(function(u,i){var px=G.cx+u*1.16*S,ph=Math.sin(t*1.6+i*1.3)*S*.006;c.moveTo(px-S*.03,yb+S*.02+ph);c.quadraticCurveTo(px,yb+S*.012+ph,px+S*.03,yb+S*.02+ph)});c.stroke();
    c.drawImage(oLH,0,0,w,h);
    /* the lantern: a steady glow that brightens on a slow cycle */
    var L=G.lamp,fl=.55+.45*Math.pow(.5+.5*Math.sin(t*.9),3);
    var lgd=c.createRadialGradient(L[0],L[1],0,L[0],L[1],S*.32);lgd.addColorStop(0,"rgba(255,236,190,"+(.55*fl).toFixed(3)+")");lgd.addColorStop(.25,"rgba(255,214,150,"+(.2*fl).toFixed(3)+")");lgd.addColorStop(1,"rgba(255,200,140,0)");
    c.fillStyle=lgd;c.fillRect(L[0]-S*.32,L[1]-S*.32,S*.64,S*.64);
    c.fillStyle="rgba(255,244,214,"+(.75+.25*fl).toFixed(3)+")";c.fillRect(L[0]-S*.03,L[1]-S*.025,S*.06,S*.05);
    /* two gulls working the shallows */
    c.strokeStyle="rgba(232,236,240,.75)";c.lineWidth=1.1;c.beginPath();
    for(var bi=0;bi<BIRD.length;bi++){var B=BIRD[bi],bx=((B[0]+t*.008*B[2])%1)*w,by=hz*B[1]+Math.sin(t*.4+B[3])*U*.01,fl2=Math.sin(t*3*B[2]+B[3])*3,bs=Math.max(4,U*.008);
      c.moveTo(bx-bs,by-fl2*.4);c.quadraticCurveTo(bx-bs*.4,by-bs*.5-fl2,bx,by);c.quadraticCurveTo(bx+bs*.4,by-bs*.5-fl2,bx+bs,by-fl2*.4)}c.stroke();
    if(!G.mob){var lv=c.createLinearGradient(0,0,G.side+G.cw*.5,0);lv.addColorStop(0,"rgba(5,18,31,.6)");lv.addColorStop(1,"rgba(5,18,31,0)");c.fillStyle=lv;c.fillRect(0,0,w,h)}
    c.globalAlpha=1;
    if(!shown){shown=true;requestAnimationFrame(function(){requestAnimationFrame(function(){cv.classList.add("ready")})})}
    if(!once&&running)raf=requestAnimationFrame(function(){frame(false)});
  }
  function start(){if(running||document.hidden)return;running=true;raf=requestAnimationFrame(function(){frame(false)})}
  function stop(){running=false;cancelAnimationFrame(raf)}
  var rzT;addEventListener("resize",function(){clearTimeout(rzT);rzT=setTimeout(size,120)});size();
  return {start:start,stop:stop,once:function(){frame(true)},setScroll:function(p){SP.v=Math.round(p*40)/40},
    intro:function(d){if(RM){IN.v=1;return}IN.v=0;gsap.to(IN,{v:1,duration:d,ease:"power2.out"})},setDim:function(d){dimT=d},snapDim:function(d){dim=dimT=d},running:function(){return running},focus:function(){return G?[G.cx,G.yb-G.S*.5]:[w/2,h/2]}};
})();

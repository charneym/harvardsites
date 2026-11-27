/* The story scene (BL/BY/DB): one compression spring, "rund um die Feder" as boehmelektronik.de describes the range (Federproduktion,
   Zuführtechnik, Messen und Prüfen). ONE side elevation kept on screen, the spring itself carried through all three steps (no cross-fades):
   1 Winden: wire is drawn in by the feed rolls and wound, coil by coil, into a compression spring.
   2 Zuführen: the finished spring is carried over and set upright on the measuring plate.
   3 Prüfen: the plunger comes down and compresses it; force over travel is drawn as the spring shortens.
   The spring and the scale of the plot are illustrative (no values are shown). */
var BH={cy:270,R:52,P:22,N:8,x0:200,px:470,py:440};
function bhScene(o){
  var g='',mob=o.mob,B=BH,cy=B.cy,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 56 610 450" aria-hidden="true"><defs>'+
     '<linearGradient id="bhW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8ebf2"/><stop offset=".5" stop-color="#a9b0c0"/><stop offset="1" stop-color="#6c7386"/></linearGradient>'+
     '<pattern id="bhHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(243,244,248,.2)" stroke-width="1"/></pattern>'+
     '</defs>';
  /* the plot (step 3), drawn behind everything */
  g+='<g id="bhPl" class="pl"><path class="ax" d="M60 420H300M60 420V176"/><path class="ax" d="M296 416L304 420L296 424M56 180L60 172L64 180"/>'+
     '<text class="t" x="70" y="184">F</text><text class="t" x="290" y="444" text-anchor="end">s</text><path id="bhPk" class="pk" d=""/><circle id="bhPd" class="pd" r="5" cx="60" cy="420"/></g>';
  /* the wire from the reel, and the feed rolls */
  g+='<path id="bhWi" class="wi" d="M44 '+(cy-B.R)+'H'+B.x0+'"/>';
  g+='<g id="bhRo" class="ro"><circle class="blk" cx="120" cy="'+(cy-B.R-29)+'" r="26"/><circle class="blk" cx="120" cy="'+(cy-B.R+29)+'" r="26"/>'+
     '<circle class="hub" cx="120" cy="'+(cy-B.R-29)+'" r="5"/><circle class="hub" cx="120" cy="'+(cy-B.R+29)+'" r="5"/>'+
     '<path id="bhRa" class="spin" d=""/></g>';
  /* the coiling point */
  g+='<g id="bhCp" class="cp"><path class="blk" d="M'+(B.x0-14)+' '+(cy-B.R-60)+'H'+(B.x0+6)+'V'+(cy-B.R-8)+'L'+(B.x0-4)+' '+(cy-B.R+2)+'L'+(B.x0-14)+' '+(cy-B.R-8)+'Z"/></g>';
  /* the measuring plate and stand, and the plunger (step 3) */
  g+='<g id="bhSt" class="st"><rect class="blk" x="'+(B.px-92)+'" y="'+B.py+'" width="184" height="16"/><rect class="hat" x="'+(B.px-92)+'" y="'+B.py+'" width="172" height="16"/>'+
     '<rect class="plt" x="'+(B.px-66)+'" y="'+(B.py-8)+'" width="132" height="8"/></g>';
  g+='<g id="bhPu" class="pu"><rect class="rod" x="'+(B.px-9)+'" y="-260" width="18" height="226"/><rect class="blk" x="'+(B.px-66)+'" y="-34" width="132" height="26"/><rect class="hat" x="'+(B.px-66)+'" y="-34" width="132" height="26"/><rect class="plt" x="'+(B.px-66)+'" y="-8" width="132" height="8"/></g>';
  /* the spring: back half of each turn, then front half */
  g+='<g id="bhSp"><path id="bhSb" class="sb" d=""/><path id="bhSf" class="sf" d=""/></g>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("bhLr",120,cy-B.R-70,mob?"ROLLEN":"EINZUGSROLLEN","middle");
  g+=T("bhLw",44,cy-B.R+40,"DRAHT");
  g+=T("bhLp",B.px,B.py+44,"MESSTELLER","middle");
  g+=T("bhLs",B.px+70,140,"STEMPEL");
  var C=mob?["FEDERWINDEN","FEDERZUFÜHRUNG","FEDERKRAFT MESSEN"]:["FEDERWINDEMASCHINE · VOM DRAHT ZUR FEDER","FEDERZUFÜHRUNG · AUF DEN MESSTELLER","FEDERMESSGERÄT · KRAFT ÜBER DEN WEG"];
  for(i=0;i<3;i++)g+='<text class="t cl cap" id="bhC'+i+'" x="8" y="496">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return bhScene({mob:MOBILE()?1:0})}
function bhE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var B=BH,cy=B.cy,Q=function(s){return svg.querySelector(s)};
  var E={wi:Q("#bhWi"),ro:Q("#bhRo"),ra:Q("#bhRa"),cp:Q("#bhCp"),st:Q("#bhSt"),pu:Q("#bhPu"),sp:Q("#bhSp"),sb:Q("#bhSb"),sf:Q("#bhSf"),pl:Q("#bhPl"),pk:Q("#bhPk"),pd:Q("#bhPd"),
    L:{r:Q("#bhLr"),w:Q("#bhLw"),p:Q("#bhLp"),s:Q("#bhLs")},C:[0,1,2].map(function(k){return Q("#bhC"+k)})};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f1(v){return v.toFixed(1)}
  /* a helix seen from the side, axis along local x from 0 to n*pitch; the turn starts at the top (the wire's height) */
  function helix(n,pitch){var b="",f="",st=.12,t,u,v,d,pf=null,pb=null,T=n*2*Math.PI;
    for(t=0;t<=T+1e-6;t+=st){t=Math.min(t,T);u=t/(2*Math.PI)*pitch;v=-B.R*Math.cos(t);d=Math.sin(t);
      var pt=f1(u)+" "+f1(v);
      if(d>=0){f+=(pf?"L":"M")+pt;pf=1;pb=null}else{b+=(pb?"L":"M")+pt;pb=1;pf=null}
      if(t>=T)break}
    return [b,f]}
  return function(p,bb){
    if(!svg.isConnected)return;
    var s1=bhE(seg(p,.04,.29)),s2=bhE(seg(p,.38,.6)),s3=bhE(seg(p,.7,.95)),cut=seg(p,.3,.34);
    /* 1: coils wound so far; the free length while wound and carried; then compressed by the plunger */
    var n=Math.max(.02,B.N*s1),L0=B.N*B.P,Lc=L0*(1-.38*s3),pitch=s3>0?Lc/B.N:B.P;
    var hx=helix(n,pitch);E.sb.setAttribute("d",hx[0]);E.sf.setAttribute("d",hx[1]);
    /* the spring group: horizontal at the coiling point (growing to the right) -> upright on the measuring plate */
    var ax=B.x0,ay=cy,bx=B.px,by=B.py-8,tx=ax+(bx-ax)*s2,ty=ay+(by-ay)*s2-Math.sin(Math.PI*s2)*60,ang=-90*s2;
    E.sp.setAttribute("transform","translate("+f1(tx)+" "+f1(ty)+") rotate("+f1(ang)+")");op(E.sp,bb);
    /* the wire runs in to the coiling point while winding; after the cut it stays at the rolls */
    op(E.wi,bb*(1-seg(p,.4,.5)));op(E.cp,bb*(1-seg(p,.4,.5)));op(E.ro,bb*(1-seg(p,.4,.5)));
    var ra=s1*720;E.ra.setAttribute("d","M"+f1(120+17*Math.cos(ra*Math.PI/180))+" "+f1(cy-B.R-29+17*Math.sin(ra*Math.PI/180))+"L120 "+(cy-B.R-29));
    op(E.ra,bb*(1-cut));
    /* 2-3: the stand appears as the spring is carried over; the plunger comes down and compresses it */
    op(E.st,bb*seg(p,.36,.44));
    var top=by-L0,pY=by-Lc,pin=bhE(seg(p,.62,.7)),py=(top-90)+(90*pin)+(pY-top);
    E.pu.setAttribute("transform","translate(0 "+f1(py)+")");op(E.pu,bb*seg(p,.6,.66));
    /* the plot: force over travel, a straight rise for a linear spring */
    op(E.pl,bb*seg(p,.66,.72));var cx=60+220*s3,cy2=420-220*s3;
    E.pk.setAttribute("d",s3>0?"M60 420L"+f1(cx)+" "+f1(cy2):"");E.pd.setAttribute("cx",f1(cx));E.pd.setAttribute("cy",f1(cy2));
    /* labels */
    op(E.L.r,bb*(1-seg(p,.26,.3)));op(E.L.w,bb*(1-seg(p,.26,.3)));op(E.L.p,bb*seg(p,.44,.48)*(1-seg(p,.66,.7)));op(E.L.s,bb*seg(p,.66,.7));
    var W=[[0,1/3],[1/3,2/3],[2/3,1.01]];
    E.C.forEach(function(c,k){var A=W[k][0],Z=W[k][1];op(c,bb*(k===0?1:seg(p,A,A+.03))*(k===2?1:(1-seg(p,Z-.03,Z))))});
  };
}

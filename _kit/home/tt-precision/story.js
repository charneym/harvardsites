/* The story scene (WE): a die opening cut on a wire EDM machine, as twohigprecision.com describes its
   "Wire Erosion & Spark Erosion Machining Capabilities" (and the two EXCETEK wire EDM machines added in early 2026).
   ONE plan view (looking down the wire) kept on screen; the wire really follows the profile it cuts:
   1 Hole: a start hole is spark-drilled through the hardened plate, inside the shape to be cut.
   2 Thread: the wire is threaded through the start hole and leads in to the profile.
   3 Cut: the wire travels the profile; the kerf it leaves is drawn behind it, sparks at the gap.
   4 Slug out: the slug drops free and leaves the die opening; a skim pass runs the profile again.
   The part and its sizes are illustrative. */
var WE={sx:300,sy:280,ex:300,ey:196,
  prof:"M300 196H352A84 84 0 0 1 352 364H206V322H246V238H206V196Z"};
function weScene(o){
  var g='',mob=o.mob,W=WE;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 56 610 450" aria-hidden="true"><defs>'+
     '<linearGradient id="weSt" gradientUnits="userSpaceOnUse" x1="96" y1="118" x2="516" y2="442"><stop offset="0" stop-color="#b9bfc4"/><stop offset=".45" stop-color="#d7dbde"/><stop offset="1" stop-color="#8d959c"/></linearGradient>'+
     '<pattern id="weHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(36,33,92,.10)" stroke-width="1"/></pattern>'+
     '<radialGradient id="weGl"><stop offset="0" stop-color="#ffb784" stop-opacity=".95"/><stop offset=".4" stop-color="#f47521" stop-opacity=".55"/><stop offset="1" stop-color="#f47521" stop-opacity="0"/></radialGradient>'+
     '</defs>';
  /* the plate, clamped on the table */
  g+='<g class="wb"><rect class="pl" x="96" y="118" width="420" height="324"/><rect class="hat" x="96" y="118" width="420" height="324"/>'+
     '<rect class="clp" x="70" y="160" width="52" height="34"/><rect class="clp" x="70" y="366" width="52" height="34"/>'+
     '<path class="axl" d="M300 104V456M84 280H530"/></g>';
  /* the opening once the slug is out, the slug itself, the start hole, the kerf, the skim pass */
  g+='<path id="weOp" class="op" d="'+W.prof+'"/>';
  g+='<g id="weSl"><path class="sl" d="'+W.prof+'"/><path class="hat" d="'+W.prof+'"/><circle id="weHo2" class="ho" cx="'+W.sx+'" cy="'+W.sy+'" r="7"/></g>';
  g+='<circle id="weHo" class="ho" cx="'+W.sx+'" cy="'+W.sy+'" r="0"/>';
  g+='<path id="weLi" class="kf" d="M'+W.sx+' '+W.sy+'V'+W.ey+'"/>';
  g+='<path id="weKf" class="kf" d="'+W.prof+'"/>';
  g+='<path id="weSk" class="sk" d="'+W.prof+'"/>';
  /* the spark-drilling electrode (step 1) and the wire, seen end on, with its spark glow */
  g+='<g id="weEl" class="el"><circle r="16" class="elb"/><circle r="5" class="elc"/></g>';
  g+='<g id="weW"><circle id="weG" r="22" fill="url(#weGl)"/><circle r="4.2" class="wi"/><path id="weSp" class="sp" d=""/></g>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("weLp",96,104,mob?"TOOL STEEL":"HARDENED TOOL STEEL PLATE");
  g+=T("weLh",322,mob?300:296,"START HOLE");
  g+=T("weLw",322,mob?300:296,mob?"WIRE":"WIRE · END ON");
  g+=T("weLk",448,mob?186:190,"KERF","middle");
  g+=T("weLs",300,474,mob?"SLUG":"SLUG DROPS FREE","middle");
  g+=T("weLd",448,mob?186:190,mob?"OPENING":"DIE OPENING","middle");
  var C=mob?["SPARK-DRILLED START HOLE","WIRE THREADED, LEAD IN","SPARK EROSION · THE CUT","SLUG OUT · SKIM PASS"]:["SPARK-DRILLED START HOLE · INSIDE THE SHAPE","WIRE THREADED THROUGH · LEAD IN TO THE PROFILE","SPARK EROSION · THE WIRE NEVER TOUCHES THE STEEL","SLUG OUT · SKIM PASS TO FINAL SIZE"];
  for(var i=0;i<4;i++)g+='<text class="t cl cap" id="weC'+i+'" x="8" y="'+(mob?500:496)+'">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return weScene({mob:MOBILE()?1:0})}
function weE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var W=WE,Q=function(s){return svg.querySelector(s)};
  var E={op:Q("#weOp"),sl:Q("#weSl"),ho:Q("#weHo"),li:Q("#weLi"),kf:Q("#weKf"),sk:Q("#weSk"),el:Q("#weEl"),w:Q("#weW"),g:Q("#weG"),sp:Q("#weSp"),
    L:{p:Q("#weLp"),h:Q("#weLh"),w:Q("#weLw"),k:Q("#weLk"),s:Q("#weLs"),d:Q("#weLd")},C:[0,1,2,3].map(function(k){return Q("#weC"+k)}),base:[].slice.call(svg.querySelectorAll(".wb"))};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f1(v){return v.toFixed(1)}
  var L=0,LI=W.sy-W.ey;try{L=E.kf.getTotalLength()}catch(e){L=0}
  if(!L)L=760;
  E.kf.style.strokeDasharray=L+" "+L;E.sk.style.strokeDasharray=L+" "+L;E.li.style.strokeDasharray=LI+" "+LI;
  function at(s){try{return E.kf.getPointAtLength(L*s)}catch(e){return {x:W.ex,y:W.ey}}}
  return function(p,bb){
    if(!svg.isConnected)return;
    E.base.forEach(function(el){op(el,bb)});
    var s1=weE(seg(p,.04,.2)),li=weE(seg(p,.36,.48)),s3=seg(p,.52,.73),out=weE(seg(p,.77,.88)),sk=seg(p,.88,.99);
    /* 1: the electrode comes over the hole position and spark-drills it */
    var eOn=bb*seg(p,.02,.06)*(1-seg(p,.2,.24));
    E.el.setAttribute("transform","translate("+W.sx+" "+W.sy+")");op(E.el,eOn);
    E.ho.setAttribute("r",f1(7*s1));op(E.ho,bb*(s1>0?1:0)*(1-seg(p,.36,.37)));
    /* 2: the wire appears in the hole, then leads in to the profile */
    var wx=W.sx,wy=W.sy-LI*li;
    if(s3>0){var q=at(s3);wx=q.x;wy=q.y}
    if(sk>0){var r=at(sk);wx=r.x;wy=r.y}
    E.w.setAttribute("transform","translate("+f1(wx)+" "+f1(wy)+")");
    op(E.w,bb*seg(p,.27,.32)*(1-seg(p,.74,.77)+seg(p,.87,.89)*(1-seg(p,.985,1))));
    E.li.style.strokeDashoffset=f1(LI*(1-li));op(E.li,bb*(li>0?1:0)*(1-out));
    /* 3: the kerf grows behind the wire; the sparks flicker at the gap while it cuts */
    E.kf.style.strokeDashoffset=f1(L*(1-s3));op(E.kf,bb*(s3>0?1:0)*(1-out));
    var cutting=(li>0&&li<1)||(s3>0&&s3<1)||(sk>0&&sk<1),sp="";
    if(cutting){var ph=Math.floor(p*900);for(var k=0;k<6;k++){var a=(ph*37+k*61)%360*Math.PI/180,r0=7,r1=10+((ph+k*7)%9);sp+="M"+f1(Math.cos(a)*r0)+" "+f1(Math.sin(a)*r0)+"L"+f1(Math.cos(a)*r1)+" "+f1(Math.sin(a)*r1)}}
    E.sp.setAttribute("d",sp);op(E.g,cutting?.7+.3*((Math.floor(p*900)%3)/2):.35);
    /* 4: the slug drops out of the plate (down and away) and the opening shows; a skim pass follows */
    E.sl.setAttribute("transform","translate("+f1(26*out)+" "+f1(46*out)+") scale("+f1(1-.08*out)+")");E.sl.style.transformOrigin="300px 280px";
    op(E.sl,bb*(1-seg(p,.8,.9)));op(E.op,bb*(out>0?1:0));
    E.sk.style.strokeDashoffset=f1(L*(1-sk));op(E.sk,bb*(sk>0?1:0));
    /* labels */
    op(E.L.p,bb*(1-seg(p,.24,.28)));
    op(E.L.h,bb*seg(p,.12,.16)*(1-seg(p,.24,.27)));
    E.L.w.setAttribute("x",f1(wx+22));E.L.w.setAttribute("y",f1(wy+(MOBILE()?28:24)));op(E.L.w,bb*seg(p,.3,.34)*(1-seg(p,.5,.53)));
    op(E.L.k,bb*seg(p,.6,.63)*(1-seg(p,.74,.77)));
    op(E.L.s,bb*seg(p,.8,.83)*(1-seg(p,.88,.9)));
    op(E.L.d,bb*seg(p,.9,.93));
    var Wn=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.C.forEach(function(c,k){var A=Wn[k][0],Z=Wn[k][1];op(c,bb*(k===0?1:seg(p,A,A+.03))*(k===3?1:(1-seg(p,Z-.03,Z))))});
  };
}

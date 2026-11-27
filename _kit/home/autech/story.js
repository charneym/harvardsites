/* The story scene (BL/BY/DB): one tube, cut without chips and end-formed, as autechgmbh.de describes it ("Rohre spanlos trennen und
   umformen", "Trennen und Rollieren in einem Arbeitsgang", AU90 "Aufweiten und Einziehen"). ONE side elevation (tube in section)
   kept on screen, the same tube carried through all three steps (no cross-fades):
   1 Spannen: the tube runs in and the clamping jaws close.
   2 Trennen: the cutting wheel orbits the tube and rolls a groove in, deeper turn by turn, until the length parts: no chips, no burr.
   3 Umformen: on the AU90 a forming mandrel goes into the cut end and expands it.
   Sizes are illustrative. */
var AT={cy:300,ro:42,t:9,xc:250,x0:20,x1:440};
function atScene(o){
  var g='',mob=o.mob,A=AT,cy=A.cy;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 150 520 316" aria-hidden="true"><defs>'+
     '<pattern id="atHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,243,247,.2)" stroke-width="1"/></pattern>'+
     '<linearGradient id="atSt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7f8592"/><stop offset=".25" stop-color="#e7eaf0"/><stop offset=".5" stop-color="#b4bac6"/><stop offset="1" stop-color="#666c78"/></linearGradient></defs>';
  g+='<path class="axl" d="M0 '+cy+'H520"/>';
  /* the tube in section: two walls; the left length (stock) and, after the cut, the parted length on the right */
  g+='<path id="atL" class="tb" d=""/><path id="atR" class="tb" d=""/>';
  /* clamping jaws above and below the stock */
  g+='<g id="atJ"><g id="atJt"><rect class="blk" x="'+(A.xc-150)+'" y="'+(cy-A.ro-44)+'" width="110" height="44"/><rect class="hat" x="'+(A.xc-150)+'" y="'+(cy-A.ro-44)+'" width="110" height="44"/></g>'+
     '<g id="atJb"><rect class="blk" x="'+(A.xc-150)+'" y="'+(cy+A.ro)+'" width="110" height="44"/><rect class="hat" x="'+(A.xc-150)+'" y="'+(cy+A.ro)+'" width="110" height="44"/></g></g>';
  /* the cutting wheel (seen edge-on, it orbits round the tube) */
  g+='<g id="atW"><path class="whl" d="M-16 -70L0 -6L16 -70Z"/><rect class="blk" x="-30" y="-104" width="60" height="34"/><circle class="hub" cx="0" cy="-87" r="6"/></g>';
  /* the forming mandrel (step 3) */
  g+='<g id="atM"><path class="mdr" d=""/><rect class="blk" id="atMb" x="0" y="'+(cy-40)+'" width="70" height="80"/></g>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("atLr",20,cy-A.ro-14,"ROHR");
  g+=T("atLj",A.xc-95,cy+A.ro+66,mob?"SPANNEN":"SPANNBACKEN","middle");
  g+=T("atLw",A.xc+40,cy-A.ro-80,mob?"TRENNROLLE":"TRENNROLLE · UMLAUFEND");
  g+=T("atLm",510,cy-62,mob?"DORN":"UMFORMDORN","end");
  var L=mob?["SPANNEN","SPANLOS TRENNEN","AUFWEITEN"]:["ROHRSCHNEIDEMASCHINE · ROHR EINGESPANNT","TRENNEN UND ROLLIEREN · OHNE SPÄNE, GRATARM","ROHRUMFORMMASCHINE AU90 · AUFWEITEN"];
  for(var i=0;i<3;i++)g+='<text class="t cl cap" id="atC'+i+'" x="8" y="454">'+L[i]+'</text>';
  return g+'</svg>';
}
function scene(){return atScene({mob:MOBILE()?1:0})}
function atE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var A=AT,cy=A.cy,Q=function(s){return svg.querySelector(s)};
  var E={l:Q("#atL"),r:Q("#atR"),j:Q("#atJ"),jt:Q("#atJt"),jb:Q("#atJb"),w:Q("#atW"),m:Q("#atM"),md:Q("#atM .mdr"),mb:Q("#atMb"),
    L:{r:Q("#atLr"),j:Q("#atLj"),w:Q("#atLw"),m:Q("#atLm")},C:[0,1,2].map(function(k){return Q("#atC"+k)})};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f1(v){return v.toFixed(1)}
  /* a tube length in section between xa and xb; a V groove of depth g at xg; the right end flared to radius fr over length fl */
  function walls(xa,xb,xg,g,fr,fl){var R=A.ro,t=A.t,d="";
    [-1,1].forEach(function(s){var o=function(r){return f1(cy+s*r)};
      /* outer contour */
      d+="M"+f1(xa)+" "+o(R);
      if(xg!==null&&g>0){d+="L"+f1(xg-g*1.1)+" "+o(R)+"L"+f1(xg)+" "+o(R-g)+"L"+f1(xg+g*1.1)+" "+o(R)}
      if(fr>R){d+="L"+f1(xb-fl)+" "+o(R)+"L"+f1(xb-fl*.35)+" "+o(fr)+"L"+f1(xb)+" "+o(fr)}else d+="L"+f1(xb)+" "+o(R);
      /* inner contour back */
      if(fr>R){d+="L"+f1(xb)+" "+o(fr-t)+"L"+f1(xb-fl*.35)+" "+o(fr-t)+"L"+f1(xb-fl)+" "+o(R-t)}else d+="L"+f1(xb)+" "+o(R-t);
      if(xg!==null&&g>0){var gi=Math.max(0,g-t);if(gi>0){d+="L"+f1(xg+gi*1.1)+" "+o(R-t)+"L"+f1(xg)+" "+o(R-t-gi)+"L"+f1(xg-gi*1.1)+" "+o(R-t)}}
      d+="L"+f1(xa)+" "+o(R-t)+"Z"});
    return d}
  return function(p,bb){
    if(!svg.isConnected)return;
    /* 1: the tube runs in from the left; the jaws close */
    var s1=atE(seg(p,.03,.2)),jc=atE(seg(p,.2,.3)),front=A.x0+(A.x1-A.x0)*s1;
    E.jt.setAttribute("transform","translate(0 "+f1(-24*(1-jc))+")");E.jb.setAttribute("transform","translate(0 "+f1(24*(1-jc))+")");op(E.j,bb);
    /* 2: the wheel comes down and rolls the groove in; the length parts at full depth and moves off a little */
    var wIn=atE(seg(p,.36,.42)),gd=atE(seg(p,.42,.6)),part=atE(seg(p,.6,.66)),gap=26*part,wOut=atE(seg(p,.62,.68));
    var depth=A.t*1.9*gd,cut=gd>=1;
    var wy=cy-A.ro+depth-(1-wIn)*60-wOut*60,orbit=Math.sin(p*180)*3*(gd>0&&gd<1?1:0);
    E.w.setAttribute("transform","translate("+f1(A.xc+orbit)+" "+f1(wy)+")");op(E.w,bb*seg(p,.33,.38)*(1-seg(p,.66,.7)));
    /* 3: the mandrel comes in from the right and expands the parted end */
    var mIn=atE(seg(p,.72,.8)),ex=atE(seg(p,.8,.94)),fr=A.ro+10*ex,fl=46;
    if(!cut){E.l.setAttribute("d",front>A.x0+2?walls(A.x0,front,front>A.xc+10?A.xc:null,depth,0,0):"");E.r.setAttribute("d","")}
    else{E.l.setAttribute("d",walls(A.x0,A.xc,null,0,0,0));E.r.setAttribute("d",walls(A.xc+gap,A.x1,null,0,fr,fl))}
    op(E.l,bb);op(E.r,bb);
    var mx=A.x1+90-(90+fl*.9)*mIn;E.mb.setAttribute("x",f1(mx+fl*.9));
    E.md.setAttribute("d",mIn>0?"M"+f1(mx+fl*.9)+" "+f1(cy-(A.ro-A.t)-ex*10+1)+"L"+f1(mx+fl*.3)+" "+f1(cy-(A.ro-A.t)-ex*10+1)+"L"+f1(mx)+" "+f1(cy-(A.ro-A.t)+2)+"V"+f1(cy+(A.ro-A.t)-2)+"L"+f1(mx+fl*.3)+" "+f1(cy+(A.ro-A.t)+ex*10-1)+"L"+f1(mx+fl*.9)+" "+f1(cy+(A.ro-A.t)+ex*10-1)+"Z":"");
    op(E.m,bb*seg(p,.7,.74));
    /* labels */
    op(E.L.r,bb*(1-seg(p,.3,.34)));op(E.L.j,bb*seg(p,.22,.26)*(1-seg(p,.34,.38)));op(E.L.w,bb*seg(p,.4,.44)*(1-seg(p,.62,.66)));op(E.L.m,bb*seg(p,.76,.8));
    var W=[[0,1/3],[1/3,2/3],[2/3,1.01]];
    E.C.forEach(function(c,k){var a=W[k][0],z=W[k][1];op(c,bb*(k===0?1:seg(p,a,a+.03))*(k===2?1:(1-seg(p,z-.03,z))))});
  };
}

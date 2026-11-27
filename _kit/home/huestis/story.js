/* The story scene (BL/BY/DB): one Huestis air wipe in section with the wire running through it, as huestis.com explains
   "How an air wipe works". ONE section kept on screen, the same wire and water carried through all four steps (no cross-fades):
   1 Manifold: compressed air enters the body and fills the manifold around the bore.
   2 Jets: a ring of jets meters the air onto the wire, angled against the direction of travel.
   3 Turbulence: the turbulence lifts the water off the surface; the wire leaves the wipe dry.
   4 Venturi: the flow inside the wipe draws in more air at the entry.
   Sizes are illustrative. */
var HU={cy:316,x0:226,x1:336,bh:150,bo:14};
function huScene(o){
  var g='',mob=o.mob,H=HU,cy=H.cy,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 150 520 316" aria-hidden="true"><defs>'+
     '<pattern id="huHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,244,247,.2)" stroke-width="1"/></pattern>'+
     '<marker id="huAr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#7cc4f2"/></marker></defs>';
  /* the wire, running left to right; its travel marks; the water drops on it */
  g+='<path class="wr" d="M0 '+cy+'H520"/><g id="huMv" class="mv"></g><g id="huDr"></g>';
  /* the wipe body in section: upper and lower halves around the bore, with the manifold channel cut in each */
  var t=cy-H.bh/2,b=cy+H.bh/2;
  g+='<g id="huBd"><path class="blk" d="M'+H.x0+' '+t+'H'+H.x1+'V'+(cy-H.bo)+'H'+H.x0+'Z"/><path class="hat" d="M'+H.x0+' '+t+'H'+H.x1+'V'+(cy-H.bo)+'H'+H.x0+'Z"/>'+
     '<path class="blk" d="M'+H.x0+' '+(cy+H.bo)+'H'+H.x1+'V'+b+'H'+H.x0+'Z"/><path class="hat" d="M'+H.x0+' '+(cy+H.bo)+'H'+H.x1+'V'+b+'H'+H.x0+'Z"/>'+
     '<path class="mf" d="M'+(H.x0+30)+' '+(cy-48)+'H'+(H.x1-22)+'V'+(cy-34)+'H'+(H.x0+30)+'Z"/><path class="mf" d="M'+(H.x0+30)+' '+(cy+34)+'H'+(H.x1-22)+'V'+(cy+48)+'H'+(H.x0+30)+'Z"/>'+
     '<path class="mf" d="M'+(H.x1-40)+' '+t+'H'+(H.x1-26)+'V'+(cy-48)+'H'+(H.x1-40)+'Z"/></g>';
  /* the air: supply line into the manifold, flow in the channels, the jets */
  g+='<path id="huIn" class="air" d="M'+(H.x1-33)+' 168V'+(t+4)+'"/>';
  g+='<path id="huMf" class="air" d="M'+(H.x1-33)+' '+(cy-41)+'H'+(H.x0+36)+'M'+(H.x1-33)+' '+(cy+41)+'H'+(H.x0+36)+'"/>';
  g+='<g id="huJt"><path class="jet" d="M'+(H.x0+38)+' '+(cy-34)+'L'+(H.x0+16)+' '+(cy-H.bo-2)+'"/><path class="jet" d="M'+(H.x0+38)+' '+(cy+34)+'L'+(H.x0+16)+' '+(cy+H.bo+2)+'"/></g>';
  g+='<g id="huJf" class="air"><path d="M'+(H.x0+14)+' '+(cy-H.bo)+'L'+(H.x0-30)+' '+(cy-6)+'"/><path d="M'+(H.x0+14)+' '+(cy+H.bo)+'L'+(H.x0-30)+' '+(cy+6)+'"/></g>';
  /* the Venturi intake at the exit side */
  g+='<g id="huVn" class="vn"><path marker-end="url(#huAr)" d="M'+(H.x1+60)+' '+(cy-70)+'Q'+(H.x1+20)+' '+(cy-40)+' '+(H.x1+6)+' '+(cy-10)+'"/><path marker-end="url(#huAr)" d="M'+(H.x1+60)+' '+(cy+70)+'Q'+(H.x1+20)+' '+(cy+40)+' '+(H.x1+6)+' '+(cy+10)+'"/></g>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("huLw",14,cy-20,"WET WIRE");
  g+=T("huLa",H.x1-20,182,mob?"AIR":"COMPRESSED AIR");
  g+=T("huLm",H.x0+70,t-12,"MANIFOLD","middle");
  g+=T("huLj",H.x0-34,cy-58,"JETS","end");
  g+=T("huLd",506,cy-20,"DRY","end");
  g+=T("huLv",H.x1+66,cy-80,"VENTURI");
  var L=mob?["MANIFOLD","JETS","TURBULENCE","VENTURI"]:["AIR MISER™ · AIR INTO THE MANIFOLD","JET ORIFICES · THE LEAST AIR THAT DRIES","TURBULENCE · WATER LIFTED OFF THE WIRE","VENTURI · MORE AIR DRAWN IN"];
  for(i=0;i<4;i++)g+='<text class="t cl cap" id="huC'+i+'" x="8" y="458">'+L[i]+'</text>';
  return g+'</svg>';
}
function scene(){return huScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var H=HU,cy=H.cy,Q=function(s){return svg.querySelector(s)};
  var E={mv:Q("#huMv"),dr:Q("#huDr"),in_:Q("#huIn"),mf:Q("#huMf"),jt:Q("#huJt"),jf:Q("#huJf"),vn:Q("#huVn"),
    L:{w:Q("#huLw"),a:Q("#huLa"),m:Q("#huLm"),j:Q("#huLj"),d:Q("#huLd"),v:Q("#huLv")},C:[0,1,2,3].map(function(k){return Q("#huC"+k)})};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f1(v){return v.toFixed(1)}
  /* water drops: fixed pseudo-random positions along the wire (they travel with it) */
  var D=[];for(var k=0;k<26;k++)D.push({u:k*21+((k*37)%13),s:(k%2?1:-1),r:2.6+(k*7%5)*.45,j:(k*53%17)/17});
  E.dr.innerHTML=D.map(function(d,k){return '<circle class="drop" r="'+d.r.toFixed(1)+'"/>'}).join("");
  var C=[].slice.call(E.dr.children);
  return function(p,bb){
    if(!svg.isConnected)return;
    var run=p*420,m="";for(var k=-1;k<16;k++){var x=((k*36+run)%576)-20;if(x>0&&x<516&&(x<H.x0-4||x>H.x1+4))m+='<path d="M'+f1(x)+' '+(cy-3)+'l5 3l-5 3"/>'}E.mv.innerHTML=m;op(E.mv,bb*.85);
    var a1=seg(p,.05,.18),a2=seg(p,.28,.4),a3=seg(p,.52,.62),a4=seg(p,.78,.88);
    op(E.in_,bb*a1);E.in_.style.strokeDashoffset=String(-run*.6);
    op(E.mf,bb*seg(p,.12,.22));E.mf.style.strokeDashoffset=String(-run*.6);
    op(E.jt,bb*a2);op(E.jf,bb*a2);E.jf.style.strokeDashoffset=String(-run*.6);
    op(E.vn,bb*a4);
    /* drops: carried along by the wire; once the jets run (step 3) any drop reaching the jets' blast is lifted off and blown back */
    C.forEach(function(c,k){var d=D[k],x=((d.u+run)%560)-20,y=cy+d.s*7,o=1;
      if(x>H.x0-30){if(a3>0){var lift=Math.min(1,(x-(H.x0-30))/30);x=H.x0-30-lift*40*(1+d.j);y=cy+d.s*(7+lift*60*(.6+d.j));o=1-lift}else if(x>H.x0-2){o=0}}
      c.setAttribute("cx",f1(x));c.setAttribute("cy",f1(y));c.style.opacity=(bb*o*(x<4?0:1)).toFixed(3)});
    /* labels */
    op(E.L.w,bb*(1-seg(p,.12,.16)));op(E.L.a,bb*seg(p,.06,.1)*(1-seg(p,.24,.28)));op(E.L.m,bb*seg(p,.12,.16)*(1-seg(p,.24,.28)));
    op(E.L.j,bb*seg(p,.32,.36)*(1-seg(p,.48,.52)));op(E.L.d,bb*seg(p,.56,.6)*(1-seg(p,.74,.78)));op(E.L.v,bb*seg(p,.8,.84));
    var W=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.C.forEach(function(c,k){var a=W[k][0],z=W[k][1];op(c,bb*(k===0?1:seg(p,a,a+.03))*(k===3?1:(1-seg(p,z-.03,z))))});
  };
}

/* The story scene (BL/BY/DB): components on Eurospray's online-to-oven line, as eurospray.net describes it ("two of the booths are
   back-to-back online-to-oven, so components are painted, cured, inspected and packed in large volumes"; parts are "wash cleaned,
   chemically stripped or shot blasted before painting"). ONE elevation of the line kept on screen; the same three parts ride the
   overhead conveyor through all four steps (no cross-fades):
   1 Prepare: shot blasted, the bare part takes on a matt texture.
   2 Paint: the spray gun works across each part in the booth; the coat goes on where the gun has passed.
   3 Cure: the painted parts run through the oven.
   4 Inspect: every item is checked by hand on the way out.
   Parts and sizes are illustrative. */
var EU={ry:186,pw:54,ph:96,bx0:44,bx1:120,px0:150,px1:250,ox0:282,ox1:392,ix:452,sp:118};
function euScene(o){
  var g='',mob=o.mob,U=EU,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 150 520 316" aria-hidden="true"><defs>'+
     '<pattern id="euHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,245,249,.2)" stroke-width="1"/></pattern>'+
     '<pattern id="euBl" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r=".9" fill="rgba(20,25,32,.35)"/><circle cx="4.5" cy="4.2" r=".7" fill="rgba(20,25,32,.25)"/></pattern>'+
     '<linearGradient id="euPt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3f97da"/><stop offset=".55" stop-color="#0e71b8"/><stop offset="1" stop-color="#0a4f82"/></linearGradient><clipPath id="euCl"><rect x="0" y="150" width="520" height="316"/></clipPath></defs>';
  /* stations */
  g+='<g class="stn"><rect class="zb" x="'+U.bx0+'" y="'+(U.ry+14)+'" width="'+(U.bx1-U.bx0)+'" height="'+(U.ph+40)+'"/>'+
     '<rect class="zp" x="'+U.px0+'" y="'+(U.ry+14)+'" width="'+(U.px1-U.px0)+'" height="'+(U.ph+40)+'"/>'+
     '<rect class="blk" x="'+U.ox0+'" y="'+(U.ry+8)+'" width="'+(U.ox1-U.ox0)+'" height="'+(U.ph+52)+'"/><rect class="hat" x="'+U.ox0+'" y="'+(U.ry+8)+'" width="'+(U.ox1-U.ox0)+'" height="'+(U.ph+52)+'"/></g>';
  g+='<g id="euHw" class="hw">';for(i=0;i<4;i++){var x=U.ox0+18+i*26;g+='<path d="M'+x+' '+(U.ry+U.ph+48)+'q6 -8 0 -16q-6 -8 0 -16"/>'}g+='</g>';
  /* the overhead conveyor rail */
  g+='<path class="rail" d="M0 '+U.ry+'H520"/>';
  /* three parts on hooks */
  g+='<g clip-path="url(#euCl)">';
  for(i=0;i<3;i++)g+='<g id="euP'+i+'"><path class="hk" d="M0 0V18"/><g transform="translate('+(-U.pw/2)+' 18)">'+
     '<rect class="raw" width="'+U.pw+'" height="'+U.ph+'"/><rect class="bl" width="'+U.pw+'" height="'+U.ph+'"/><rect class="ptc" width="'+U.pw+'" height="'+U.ph+'"/>'+
     '<circle class="hole" cx="'+(U.pw/2)+'" cy="22" r="7"/><rect class="hole" x="12" y="48" width="'+(U.pw-24)+'" height="26"/>'+
     '<path class="ok" d="M'+(U.pw/2-10)+' '+(U.ph+16)+'l7 7l14 -16"/></g></g>';
  g+='</g>';
  /* the spray gun in the booth */
  g+='<g id="euGn"><path class="gun" d="M0 0h-22v10h-14v8h14v4h22z"/><path class="mist" d="M2 2l34 -14M2 6l36 0M2 10l34 14"/></g>';
  var T=function(id,x,y,s,a){return '<text class="t" id="'+id+'" x="'+x+'" y="'+y+'"'+(a?' text-anchor="'+a+'"':'')+'>'+s+'</text>'};
  g+=T("euLb",(U.bx0+U.bx1)/2,U.ry+U.ph+76,mob?"BLAST":"SHOT BLAST","middle");
  g+=T("euLp",(U.px0+U.px1)/2,U.ry+U.ph+76,mob?"BOOTH":"PAINT BOOTH","middle");
  g+=T("euLo",(U.ox0+U.ox1)/2,U.ry+U.ph+76,"OVEN","middle");
  g+=T("euLi",U.ix+10,U.ry+U.ph+76,mob?"CHECK":"INSPECTION","middle");
  var L=mob?["PREPARE","WET PAINT","CURE","INSPECT"]:["PREPARED · SHOT BLASTED BEFORE PAINTING","WET PAINTING · 15 BOOTHS, 20+ PAINTERS","ONLINE-TO-OVEN · PAINTED, THEN CURED","INSPECTED BY HAND · EVERY ITEM"];
  for(i=0;i<4;i++)g+='<text class="t cl cap" id="euC'+i+'" x="8" y="458">'+L[i]+'</text>';
  return g+'</svg>';
}
function scene(){return euScene({mob:MOBILE()?1:0})}
function euE(u){u=u<0?0:u>1?1:u;return u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2}
function storyDraw(svg){
  var U=EU,Q=function(s){return svg.querySelector(s)};
  var P=[0,1,2].map(function(k){var g=Q("#euP"+k);return {g:g,bl:g.querySelector(".bl"),pt:g.querySelector(".ptc"),ok:g.querySelector(".ok")}});
  var E={gn:Q("#euGn"),hw:Q("#euHw"),C:[0,1,2,3].map(function(k){return Q("#euC"+k)})};
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function cl(v){return v<0?0:v>1?1:v}
  return function(p,bb){
    if(!svg.isConnected)return;
    var lead=-30+520*p;
    P.forEach(function(q,i){var x=lead-i*U.sp;
      q.g.setAttribute("transform","translate("+x.toFixed(1)+" "+U.ry+")");op(q.g,bb*(x>-40&&x<560?1:0));
      op(q.bl,cl((x-U.bx0)/(U.bx1-U.bx0)));
      /* paint: covered from the top down as the part crosses the booth */
      var c=cl((x-U.px0)/(U.px1-U.px0));q.pt.setAttribute("height",(U.ph*c).toFixed(1));q.pt.setAttribute("fill","url(#euPt)");op(q.pt,c>0?1:0);
      op(q.ok,cl((x-U.ix)/24))});
    /* the gun: sweeps up and down beside whichever part is in the booth */
    var inB=P.map(function(q,i){return lead-i*U.sp}).filter(function(x){return x>U.px0-10&&x<U.px1+10});
    var gy=U.ry+30+Math.abs(Math.sin(p*60))*(U.ph-20);
    E.gn.setAttribute("transform","translate("+(inB.length?Math.max(U.px0+30,inB[0]-U.pw/2-8).toFixed(1):U.px0+30)+" "+gy.toFixed(1)+")");
    op(E.gn,bb*(inB.length?1:.25));
    var inO=P.some(function(q,i){var x=lead-i*U.sp;return x>U.ox0&&x<U.ox1});op(E.hw,bb*(inO?.9:.25));
    var W=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    E.C.forEach(function(c,k){var a=W[k][0],z=W[k][1];op(c,bb*(k===0?1:seg(p,a,a+.03))*(k===3?1:(1-seg(p,z-.03,z))))});
  };
}

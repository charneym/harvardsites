/* The story scene (DB/BL): Emmecell's own mechanism, Magnetic Cell Delivery of EO2002 (emmecell.com Technology page; the
   EMERALD announcement, 2026-11-18: "The cells are magnetically labeled before injection into the anterior chamber, and a
   magnetic patch placed on the outside of the eye is intended to steer them toward the posterior cornea so more of them attach
   to the endothelial surface"), drawn as ONE fine-line scene that fills the frame: the front of the eye in section (cornea,
   iris, lens, the globe), the patient facing up, a magnetic patch resting over the cornea. Frame 0 is already complete.
   Step 1 (label): a corneal endothelial cell takes up magnetic nanoparticles.
   Step 2 (steer): labelled cells enter the front chamber; the field lines of the patch draw in and the cells rise toward the cornea.
   Step 3 (restore): the cells line the back of the cornea and its haze (the edema) clears.
   Everything is driven by the scrubbed progress. Labels keep >= 8px clear of every stroke (DR3). */
var SCW=760,SCH=560;
var GC=[380,500],GR=300;                       /* the globe */
var CC=[380,360.6],COR_R=200.6,CIN=[380,370.1],CIN_R=192.1;  /* cornea: outer and inner arcs */
var GLOBE="M81.5 470A300 300 0 0 1 212 251 M548 251A300 300 0 0 1 678.5 470";
var CORNEA="M212 251A200.6 200.6 0 0 1 548 251L536 258A192.1 192.1 0 0 0 224 258Z";
var IRIS="M226 264C260 268 296 272 324 277L324 283C296 280 260 276 226 272Z M534 264C500 268 464 272 436 277L436 283C464 280 500 276 534 272Z";
var LENS="M262 330A118 52 0 0 1 498 330A118 52 0 0 1 262 330Z";
function polar(c,r,deg){var a=deg*Math.PI/180;return [c[0]+r*Math.sin(a),c[1]-r*Math.cos(a)]}
function band(c,r0,r1,a0,a1){var p0=polar(c,r1,a0),p1=polar(c,r1,a1),q1=polar(c,r0,a1),q0=polar(c,r0,a0),f=function(p){return p[0].toFixed(1)+" "+p[1].toFixed(1)};
  return "M"+f(p0)+"A"+r1+" "+r1+" 0 0 1 "+f(p1)+"L"+f(q1)+"A"+r0+" "+r0+" 0 0 0 "+f(q0)+"Z"}
/* the magnetic patch over the cornea, in the logo's magnet red with pale tips */
var MAG=band(CC,236,258,-21,21),MAGT=band(CC,236,258,-28,-21)+" "+band(CC,236,258,21,28);
/* field lines from the patch down through the cornea into the chamber */
var FL=[-24,-12,0,12,24].map(function(a){var p=polar(CC,234,a),q=polar(CC,128,a);return "M"+p[0].toFixed(1)+" "+p[1].toFixed(1)+"L"+q[0].toFixed(1)+" "+q[1].toFixed(1)});
/* cells: their place on the back of the cornea, and where they enter and scatter in the chamber */
var NC=13,CELLS=[];
(function(){var sc=[[300,236],[338,250],[372,232],[410,248],[446,236],[478,252],[322,262],[356,262],[392,264],[428,262],[462,264],[400,222],[350,222]];
  for(var i=0;i<NC;i++){var a=-40+i*80/(NC-1),e=polar(CIN,CIN_R-9,a);CELLS.push({end:e,mid:sc[i],a:a})}})();
var CENTRY=[522,262];
/* step 1: one cell, enlarged, takes up nanoparticles */
var BIG=[136,156],BIGR=50;
var NPS=[[-18,-10],[6,-20],[20,4],[-6,14],[14,22],[-24,12],[2,-2],[24,-14]];
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'66 40 628 440':'50 30 664 450')+'" aria-hidden="true">';
  g+='<path class="haze" id="haze" d="'+CORNEA+'"/>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+GLOBE+'"/>';
  g+='<path class="wl sD" d="'+CORNEA+'"/>';
  g+='<path class="wo sD" d="'+IRIS+'"/>';
  g+='<path class="wo sD" d="'+LENS+'"/>';
  g+='</g>';
  g+='<path class="mag" d="'+MAG+'"/><path class="magt" d="'+MAGT+'"/>';
  g+='<g class="fls" id="fls">';FL.forEach(function(d){g+='<path class="fl" d="'+d+'"/>'});g+='</g>';
  /* the enlarged cell (step 1) */
  g+='<g id="bigCell"><circle class="bigc" cx="'+BIG[0]+'" cy="'+BIG[1]+'" r="'+BIGR+'"/><circle class="bigc" cx="'+(BIG[0]+6)+'" cy="'+(BIG[1]+2)+'" r="12"/></g>';
  g+='<g id="nps">';NPS.forEach(function(n,k){g+='<circle class="np" data-k="'+k+'" cx="'+(BIG[0]+n[0])+'" cy="'+(BIG[1]+n[1])+'" r="3.2"/>'});g+='</g>';
  /* the cells in the eye */
  g+='<g class="cells" id="cells">';CELLS.forEach(function(c,k){g+='<g class="cl" data-k="'+k+'"><circle class="cell" r="7"/><circle class="np" r="1.6" cx="-2" cy="-1.5"/><circle class="np" r="1.6" cx="2.4" cy="2"/></g>'});g+='</g>';
  /* labels */
  if(!mob){
    g+='<g id="lCell"><text class="t" x="72" y="72">CORNEAL CELL,</text><text class="t" x="72" y="88">MAGNETIC NANOPARTICLES</text></g>';
    g+='<g id="lMag"><text class="t" x="528" y="112">MAGNETIC PATCH</text></g>';
    g+='<g id="lCor"><text class="t" x="560" y="210">SWOLLEN CORNEA</text></g>';
    g+='<g id="lClr"><text class="t" x="560" y="210">CLEAR CORNEA</text></g>';
  }else{g+='<g id="lCell"></g><g id="lMag"></g><g id="lCor"></g><g id="lClr"></g>'}
  var lx=mob?684:704,ly=mob?72:58;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'" text-anchor="end">LABEL THE CELLS</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'" text-anchor="end">'+(mob?'STEER WITH A MAGNET':'INJECT, THEN STEER WITH A MAGNET')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'" text-anchor="end">'+(mob?'THE CORNEA CLEARS':'CELLS ATTACH, THE CORNEA CLEARS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),haze:$("#haze",svg),fls:$("#fls",svg),big:$("#bigCell",svg),nps:$$("#nps .np",svg),
    cells:$("#cells",svg),cl:$$("#cells .cl",svg),
    lCell:$("#lCell",svg),lMag:$("#lMag",svg),lCor:$("#lCor",svg),lClr:$("#lClr",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 1. the cell takes up nanoparticles: they drift in from the left and settle inside */
    op(E.big,b*seg(p,.03,.1)*(1-seg(p,.34,.42)));
    E.nps.forEach(function(el,k){var f=sm(seg(p,.06+k*.025,.18+k*.025)),dx=-150*(1-f),dy=(k%2?-30:30)*(1-f);
      el.setAttribute("transform","translate("+dx.toFixed(1)+" "+dy.toFixed(1)+")");op(el,b*Math.min(1,f*2.5)*(1-seg(p,.34,.42)))});
    op(E.lCell,b*seg(p,.06,.14)*(1-seg(p,.32,.38)));
    op(E.lMag,b*seg(p,.36,.44)*(1-seg(p,.64,.7)));
    /* 2. cells enter the chamber and scatter, the field draws in, they rise to the back of the cornea */
    op(E.cells,b*seg(p,.36,.42));
    op(E.fls,b*seg(p,.44,.52)*(1-.6*seg(p,.8,.9)));
    E.cl.forEach(function(el,k){var c=CELLS[k],f1=sm(seg(p,.37+k*.006,.5+k*.006)),f2=sm(seg(p,.52+k*.008,.72+k*.008));
      var x=CENTRY[0]+(c.mid[0]-CENTRY[0])*f1,y=CENTRY[1]+(c.mid[1]-CENTRY[1])*f1;x+=(c.end[0]-x)*f2;y+=(c.end[1]-y)*f2;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")});
    /* 3. the layer is restored and the haze of the swollen cornea clears */
    op(E.haze,1-seg(p,.74,.9));
    op(E.lCor,b*seg(p,.06,.14)*(1-seg(p,.7,.76)));op(E.lClr,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}

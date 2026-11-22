/* The story scene (BL/BY/DB): how a JBNp works (eascrabiotech.com home; the 2026-08-27 releases), as ONE continuous fine-line
   scene. Left: a strand of RNA cargo with scattered DNA-inspired Janus base units. Step 1 (assemble): the units gather in a ring
   around the cargo. Step 2 (protect): the shell closes, fully enclosing the cargo (room-temperature stable). Step 3 (deliver):
   the particle shrinks to scale and travels into the dense matrix of articular cartilage (collagen fibres, chondrocytes in their
   lacunae) and reaches a cell, which lights in the brand blue. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var PX=200,PY=258,RR=88;                 /* particle centre at rest, unit ring radius */
var TX=612,TY=292;                        /* the target chondrocyte */
var UNITS=(function(){var s=37,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],n=16,i;
  for(i=0;i<n;i++){var ang=i/n*Math.PI*2,fr=140+R()*45,fa=ang+(R()-.5)*.9;
    a.push({tx:Math.cos(ang)*RR,ty:Math.sin(ang)*RR,ta:ang*180/Math.PI+90,fx:Math.cos(fa)*fr*.98,fy:Math.sin(fa)*fr*.86,fa:R()*360,d:R()*.35})}return a})();
var CELLS=[[478,150,34,20],[662,168,30,19],[540,388,36,21],[694,404,28,18],[TX,TY,34,22]];
function unitG(){return '<g transform="scale(1.25)"><path class="ub" d="M-9 0h18"/><circle class="uc" cx="-9" cy="0" r="5.2"/><circle class="ud" cx="9" cy="0" r="5.2"/><path class="ub" d="M-9 -5.2v-4M9 5.2v4"/></g>'}
function strandPath(){var d='',i;for(i=0;i<=12;i++){var x=-60+i*10,y=Math.sin(i*.95)*11;d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return d}
function strandTicks(){var d='',i;for(i=0;i<=12;i++){var x=-60+i*10,y=Math.sin(i*.95)*11;d+='M'+x.toFixed(1)+' '+y.toFixed(1)+'v'+((i%2)?7:-7)}return d}
function cartScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the cartilage matrix on the right, captions ---- */
  g+='<g id="scBase">';
  g+='<path class="bm sD" d="M408 40C404 160 414 300 404 470"/>';
  for(i=0;i<11;i++){var y=64+i*38,w=(i%2?7:-7);
    g+='<path class="cg sD" d="M418 '+y+'c40 '+w+' 70 '+(-w)+' 110 0s70 '+w+' 110 0 70 '+(-w)+' 102 0"/>';}
  CELLS.forEach(function(c){g+='<ellipse class="lac sD" cx="'+c[0]+'" cy="'+c[1]+'" rx="'+c[2]+'" ry="'+c[3]+'"/><ellipse class="cel sD" cx="'+c[0]+'" cy="'+c[1]+'" rx="'+(c[2]*.62).toFixed(1)+'" ry="'+(c[3]*.6).toFixed(1)+'"/><circle class="nuc" cx="'+(c[0]+3)+'" cy="'+c[1]+'" r="'+(c[3]*.22).toFixed(1)+'"/>'});
  g+='<text class="t" x="430" y="30">ARTICULAR CARTILAGE</text>';
  g+='<text class="t" x="20" y="30">THERAPEUTIC CARGO</text>';
  g+='</g>';
  /* the target cell's glow, lit on arrival */
  g+='<g id="scHit"><circle class="hit" cx="'+TX+'" cy="'+TY+'" r="46"/><ellipse class="hitc" cx="'+TX+'" cy="'+TY+'" rx="21" ry="13.2"/></g>';
  /* the particle's travel trail */
  g+='<path id="scTrail" class="trl" d="M'+PX+' '+PY+'C300 '+(PY-10)+' 380 '+(PY+70)+' 470 '+(PY+52)+'S560 '+(TY-6)+' '+TX+' '+TY+'"/>';
  /* ---- the particle: cargo strand, units, shell ---- */
  g+='<g id="scP" transform="translate('+PX+' '+PY+')">';
  g+='<circle id="scGlow" class="glw" r="'+(RR+26)+'"/>';
  g+='<circle id="scShell" class="shl" r="'+(RR+16)+'"/>';
  g+='<circle id="scShell2" class="shl2" r="'+(RR-17)+'"/>';
  g+='<g id="scCargo"><path class="rna" d="'+strandPath()+'"/><path class="rnt" d="'+strandTicks()+'"/></g>';
  UNITS.forEach(function(u,k){g+='<g class="un" data-k="'+k+'">'+unitG()+'</g>'});
  g+='</g>';
  /* ---- step labels, in the clear band at the foot ---- */
  var ly=SCH-10;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'DNA-INSPIRED UNITS · ASSEMBLE':'DNA-INSPIRED JANUS BASE UNITS · ASSEMBLE ON THE CARGO')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'FULLY ENCAPSULATED · NO COLD CHAIN':'CARGO FULLY ENCAPSULATED · ROOM-TEMPERATURE STABLE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'INTO THE CARTILAGE MATRIX':'THROUGH THE DENSE MATRIX · DELIVERED TO THE CELL')+'</text></g>';
  return g+'</svg>';
}
function scene(){return cartScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .nuc",svg),P:$("#scP",svg),un:$$(".un",svg),
    shell:dl("#scShell")[0],shell2:dl("#scShell2")[0],glow:$("#scGlow",svg),cargo:$("#scCargo",svg),trail:dl("#scTrail")[0],
    hit:$("#scHit",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ez(x){return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var asm=seg(p,.04,.34),cls=seg(p,.38,.58),go=seg(p,.64,.9),hit=seg(p,.86,.96);
    /* units: scattered, then into the ring, tangent to it */
    E.un.forEach(function(el,k){var u=UNITS[k],d=Math.min(1,Math.max(0,(asm-u.d*.6)/(1-u.d*.6))),q=ez(d);
      var x=u.fx+(u.tx-u.fx)*q,y=u.fy+(u.ty-u.fy)*q,a=u.fa+(u.ta-u.fa)*q;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+a.toFixed(1)+")");op(el,b)});
    op(E.cargo,b);
    E.shell[0].style.strokeDashoffset=(E.shell[1]*(1-cls)).toFixed(1);op(E.shell[0],b);
    E.shell2[0].style.strokeDashoffset=(E.shell2[1]*(1-cls)).toFixed(1);op(E.shell2[0],b*.8);
    op(E.glow,b*cls*.9);
    /* travel: along the trail, shrinking to scale */
    var T=E.trail,L=T[1],pt=T[0].getPointAtLength(L*ez(go)),s=1-.68*ez(go);
    E.P.setAttribute("transform","translate("+pt.x.toFixed(1)+" "+pt.y.toFixed(1)+") scale("+s.toFixed(3)+")");
    T[0].style.strokeDashoffset=(L*(1-ez(go))).toFixed(1);op(T[0],b*(go>0?.9:0)*(1-.5*hit));
    op(E.hit,b*hit);
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

/* The story scene (BL/BY/DB): how a polygon scan head works (precisionlaserscanning.com > About, Start-Of-Scan detection,
   Sync laser to polygon, Model A Polygon Scan Head), drawn as ONE fine-line schematic kept on screen for all four steps:
   Step 1 (Beam): the laser beam is sized by a compact beam expander.
   Step 2 (Polygon): the spinning polygon mirror sweeps the beam, facet after facet, at constant speed.
   Step 3 (SOS): before the work area the beam crosses the Start-Of-Scan detector; its pulse starts the clock.
   Step 4 (Line): the F-Theta lens makes a flat, uniform line; the laser fires only on the work. */
var SCW=760,SCH=520;
function oct(cx,cy,r,a0){var d="";for(var i=0;i<8;i++){var a=a0+i*Math.PI/4;d+=(i?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
function plScene(o){
  var g='',mob=o.mob,PX=470,PY=150;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">POLYGON SCAN HEAD, SCHEMATIC</text>';
  /* step 1: the laser, the beam expander (two lenses), the beam to the polygon facet */
  g+='<g id="plB"><path class="edge sL" d="M30 128H130V172H30Z"/>'+
     '<path class="edge sE" d="M196 132Q190 150 196 168Q202 150 196 132Z"/><path class="edge sE" d="M262 122Q252 150 262 178Q272 150 262 122Z"/>'+
     '<path class="beam1 sB" d="M131 150H196M196 150L262 150M262 150H404"/></g>';
  /* step 2: the polygon mirror (rotates with scroll) and its sweep fan */
  g+='<g id="plP"><g id="plPoly"><path class="poly sP" d="'+oct(PX,PY,66,Math.PI/8)+'"/><path class="hub" d="M'+(PX-9)+' '+PY+'a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/></g>'+
     '<path class="fan sF" d="M408 168L250 360"/><path class="fan sF" d="M408 168L420 360"/><path class="fan sF" d="M408 168L590 360"/></g>';
  /* step 3: the Start-Of-Scan detector and its pulse */
  g+='<g id="plS"><path class="ray sS" d="M408 168L196 300"/><path class="edge sD" d="M170 292H206V318H170Z"/>'+
     '<path class="cur sQ" d="M40 452H90V420H100V452H210V420H220V452H330"/></g>';
  /* step 4: the F-Theta lens, the telecentric rays, the uniform line on the work */
  g+='<g id="plL"><path class="edge sT" d="M230 352Q420 334 610 352V382Q420 366 230 382Z"/>'+
     '<path class="fan2 sR" d="M250 382V448M420 382V448M590 382V448"/><path class="work" d="M220 456H620"/><path class="line sW" d="M250 456H590"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="plL1"><text class="t s2" x="30" y="'+(mob?112:114)+'">LASER</text><text class="t" x="196" y="'+(mob?108:112)+'">'+(mob?'EXPANDER':'BEAM EXPANDER')+'</text></g>';
  g+='<g id="plL2"><text class="t s2" x="'+(mob?560:556)+'" y="'+(mob?140:146)+'">POLYGON</text><text class="t" x="'+(mob?560:556)+'" y="'+(mob?172:166)+'">'+(mob?'MIRROR':'MIRROR · CONSTANT SPEED')+'</text></g>';
  g+='<g id="plL3"><text class="t s2" x="40" y="'+(mob?400:404)+'">'+(mob?'SOS PULSE':'START-OF-SCAN PULSE')+'</text><text class="t" x="'+(mob?96:98)+'" y="'+(mob?286:296)+'" text-anchor="end">SOS</text></g>';
  g+='<g id="plL4"><text class="t s2" x="'+(mob?624:622)+'" y="'+(mob?374:372)+'">F-THETA</text><text class="dk" x="630" y="'+(mob?462:460)+'">'+(mob?'UNIFORM':'UNIFORM LINE')+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · BEAM</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · POLYGON</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · START OF SCAN</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · LINE</text></g>';
  return g+'</svg>';
}
function scene(){return plScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={B:$("#plB",svg),bL:dl(".sL"),bE:dl(".sE"),bB:dl(".sB"),
    P:$("#plP",svg),poly:$("#plPoly",svg),pP:dl(".sP"),hub:$("#plPoly .hub",svg),pF:dl(".sF"),
    S:$("#plS",svg),sS:dl(".sS"),sD:dl(".sD"),sQ:dl(".sQ"),
    L:$("#plL",svg),lT:dl(".sT"),lR:dl(".sR"),wk:$("#plL .work",svg),lW:dl(".sW"),
    L1:$("#plL1",svg),L2:$("#plL2",svg),L3:$("#plL3",svg),L4:$("#plL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1: laser box, expander lenses, the beam travels to the polygon */
    op(E.B,b);draw(E.bL,b*seg(p,0,.07));draw(E.bE,b*seg(p,.04,.11));draw(E.bB,b*seg(p,.09,.2));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the polygon draws, then turns with the scroll; the sweep fan opens */
    op(E.P,b);draw(E.pP,b*seg(p,.26,.34));op(E.hub,b*seg(p,.3,.35));draw(E.pF,b*seg(p,.36,.47));
    if(E.poly)E.poly.setAttribute("transform","rotate("+(seg(p,.3,1)*135).toFixed(2)+" 470 150)");
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the ray to the SOS detector, the detector, the pulse train */
    op(E.S,b);draw(E.sS,b*seg(p,.51,.57));draw(E.sD,b*seg(p,.54,.6));draw(E.sQ,b*seg(p,.58,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: the lens, the parallel rays, the work line fills */
    op(E.L,b);draw(E.lT,b*seg(p,.76,.82));draw(E.lR,b*seg(p,.8,.86));op(E.wk,b*seg(p,.78,.82));draw(E.lW,b*seg(p,.84,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

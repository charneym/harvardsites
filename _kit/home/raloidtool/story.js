/* The story scene (BL/BY/DB): how a brake lining is made on Raloid equipment (raloidtool.com > Equipment: positive mould
   and hydraulic presses, batch and conveyor ovens, contour and segment grinders, gaging systems and inspection gauges),
   ONE schematic, a line of four stations:
   Step 1 (Press): the positive mould press with heated platens moulds the lining.
   Step 2 (Cure): the conveyor oven cures it.
   Step 3 (Grind): the contour grinder brings it to size.
   Step 4 (Gauge): the gauge checks it. */
var SCW=760,SCH=520;
function rlScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">FRICTION LINE, SCHEMATIC</text>';
  /* step 1: the press: frame, heated platens, the mould with a lining segment, the ram */
  g+='<g id="rlP"><path class="edge sFr" d="M50 120H180V380H50Z"/><path class="pipe sPl" d="M68 220H162M68 268H162"/>'+
     '<path class="edge sMo" d="M84 232H146V256H84Z"/><path class="rot sRm" d="M115 330V284M107 292L115 284L123 292"/></g>';
  /* step 2: the conveyor oven with heat inside */
  g+='<g id="rlO"><path class="edge sOv" d="M222 200H392V320H222Z"/><path class="pipe sCv" d="M206 334H408"/>'+
     '<path class="heatw sHw" d="M250 300Q258 286 250 272Q242 258 250 244M300 300Q308 286 300 272Q292 258 300 244M350 300Q358 286 350 272Q342 258 350 244"/></g>';
  /* step 3: the contour grinder: wheel, spindle, the lining arc */
  g+='<g id="rlG"><path class="edge sWh" d="M432 236a50 50 0 1 0 100 0a50 50 0 1 0 -100 0"/><path class="pipe sSp" d="M482 236V160"/>'+
     '<path class="mask sLn" d="M432 314Q482 290 532 314L532 326Q482 302 432 326Z"/></g>';
  /* step 4: the gauge: dial and needle on its stand */
  g+='<g id="rlK"><path class="edge sDl" d="M612 236a40 40 0 1 0 80 0a40 40 0 1 0 -80 0"/><path class="rot sNd" d="M652 236L674 214"/>'+
     '<path class="pipe sSt" d="M652 276V330M620 330H684"/></g>';
  /* the line between the stations */
  g+='<g id="rlF"><path class="beam sF1" d="M190 270H214"/><path class="beam sF2" d="M400 270H422"/><path class="beam sF3" d="M542 270H602"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="rlL1"><text class="t s2" x="50" y="'+(mob?100:106)+'">PRESS</text><text class="t" x="50" y="'+(mob?408:402)+'">'+(mob?'MOULD':'HEATED MOULD')+'</text></g>';
  g+='<g id="rlL2"><text class="t s2" x="222" y="'+(mob?182:186)+'">OVEN</text><text class="t" x="222" y="'+(mob?362:356)+'">'+(mob?'CURE':'CONVEYOR CURE')+'</text></g>';
  g+='<g id="rlL3"><text class="t s2" x="'+(mob?440:432)+'" y="'+(mob?150:146)+'">'+(mob?'GRINDER':'CONTOUR GRINDER')+'</text><text class="t" x="432" y="'+(mob?354:350)+'">'+(mob?'TO SIZE':'O.D. TO SIZE')+'</text></g>';
  g+='<g id="rlL4"><text class="t s2" x="612" y="'+(mob?180:182)+'">GAUGE</text><text class="t" x="612" y="'+(mob?358:352)+'">'+(mob?'CHECK':'INSPECTED')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · PRESS</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · CURE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · GRIND</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · GAUGE</text></g>';
  return g+'</svg>';
}
function scene(){return rlScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={P:$("#rlP",svg),fr:dl(".sFr"),pl:dl(".sPl"),mo:dl(".sMo"),rm:dl(".sRm"),
    O:$("#rlO",svg),ov:dl(".sOv"),cv:dl(".sCv"),hw:dl(".sHw"),
    G:$("#rlG",svg),wh:dl(".sWh"),sp:dl(".sSp"),ln:dl(".sLn"),
    K:$("#rlK",svg),dlc:dl(".sDl"),nd:dl(".sNd"),st:dl(".sSt"),
    F:$("#rlF",svg),f1:dl(".sF1"),f2:dl(".sF2"),f3:dl(".sF3"),
    L1:$("#rlL1",svg),L2:$("#rlL2",svg),L3:$("#rlL3",svg),L4:$("#rlL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.F,b);
    /* step 1 */
    op(E.P,b);draw(E.fr,b*seg(p,0,.08));draw(E.pl,b*seg(p,.06,.12));draw(E.mo,b*seg(p,.1,.16));draw(E.rm,b*seg(p,.14,.2));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    draw(E.f1,b*seg(p,.24,.28));op(E.O,b);draw(E.ov,b*seg(p,.27,.35));draw(E.cv,b*seg(p,.32,.38));draw(E.hw,b*seg(p,.36,.46));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    draw(E.f2,b*seg(p,.5,.54));op(E.G,b);draw(E.wh,b*seg(p,.53,.62));draw(E.sp,b*seg(p,.58,.64));draw(E.ln,b*seg(p,.62,.7));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    draw(E.f3,b*seg(p,.75,.79));op(E.K,b);draw(E.dlc,b*seg(p,.78,.86));draw(E.nd,b*seg(p,.84,.9));draw(E.st,b*seg(p,.86,.94));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

/* The story scene (BL/BY/DB): what Surface Engineering does (surfaceengineering.com > Home, "What we do": identify the wear
   (abrasion, erosion, adhesion, surface fatigue), select the material, apply it through thermal spray or hardfacing,
   validate), ONE schematic, a line of four stations:
   Step 1 (Identify): a worn surface, its grooves under a lens.
   Step 2 (Select): rod, wire spool or powder.
   Step 3 (Apply): the torch lays an overlay on the part.
   Step 4 (Validate): a hardness indenter checks the deposit. */
var SCW=760,SCH=520;
function seScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">WEAR SOLUTION, SCHEMATIC</text>';
  /* step 1: a worn part with grooves, a lens over it */
  g+='<g id="seI"><path class="edge sPa" d="M44 270H176V310H44Z"/><path class="rot sGr" d="M60 270L68 280L76 270M92 270L100 282L108 270M124 270L132 278L140 270"/>'+
     '<path class="pipe sLn" d="M96 210a26 26 0 1 0 52 0a26 26 0 1 0 -52 0M140 230L160 256"/></g>';
  /* step 2: the three forms: a rod, a wire spool, a powder heap */
  g+='<g id="seS"><path class="pipe sRd" d="M214 230H330"/><path class="edge sSp" d="M226 262H262V318H226ZM236 262V318M252 262V318"/>'+
     '<path class="mask sPw" d="M282 318L304 282L326 318Z"/></g>';
  /* step 3: the torch, its spray, the part and the overlay */
  g+='<g id="seA"><path class="edge sTc" d="M440 140H500V172H440Z"/><path class="pipe sNz" d="M470 172V196"/>'+
     '<path class="rot sSy" d="M470 200L446 250M470 200L470 250M470 200L494 250"/><path class="edge sBp" d="M410 266H560V306H410Z"/><path class="mask sOv" d="M430 254H530V266H430Z"/></g>';
  /* step 4: the indenter over the coated part, a dial */
  g+='<g id="seV"><path class="edge sB2" d="M600 266H736V306H600Z"/><path class="mask sO2" d="M610 254H726V266H610Z"/>'+
     '<path class="pipe sIn" d="M668 160V238M660 238H676L668 252Z"/><path class="edge sDl" d="M690 150a22 22 0 1 0 44 0a22 22 0 1 0 -44 0"/><path class="rot sNd" d="M712 150L724 138"/></g>';
  /* the line between the stations */
  g+='<g id="seF"><path class="beam sF1" d="M184 290H204"/><path class="beam sF2" d="M372 290H400"/><path class="beam sF3" d="M568 290H590"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="seL1"><text class="t s2" x="44" y="'+(mob?168:172)+'">'+(mob?'WEAR':'WEAR MODE')+'</text><text class="t" x="44" y="'+(mob?342:336)+'">'+(mob?'ABRASION':'ABRASION, EROSION')+'</text></g>';
  g+='<g id="seL2"><text class="t s2" x="214" y="'+(mob?204:208)+'">'+(mob?'ALLOY':'MATERIAL')+'</text><text class="t" x="214" y="'+(mob?350:344)+'">'+(mob?'FORM':'ROD, WIRE, POWDER')+'</text></g>';
  g+='<g id="seL3"><text class="t s2" x="440" y="'+(mob?122:126)+'">'+(mob?'SPRAY':'HVOF · PTA')+'</text><text class="t" x="410" y="'+(mob?338:334)+'">'+(mob?'OVERLAY':'HARD OVERLAY')+'</text></g>';
  g+='<g id="seL4"><text class="t s2" x="600" y="'+(mob?124:118)+'">'+(mob?'TEST':'HARDNESS')+'</text><text class="t" x="600" y="'+(mob?338:334)+'">'+(mob?'HRC':'TO 72 HRC')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · IDENTIFY</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · SELECT</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · APPLY</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · VALIDATE</text></g>';
  return g+'</svg>';
}
function scene(){return seScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={I:$("#seI",svg),pa:dl(".sPa"),gr:dl(".sGr"),ln:dl(".sLn"),
    S:$("#seS",svg),rd:dl(".sRd"),sp:dl(".sSp"),pw:dl(".sPw"),
    A:$("#seA",svg),tc:dl(".sTc"),nz:dl(".sNz"),sy:dl(".sSy"),bp:dl(".sBp"),ov:dl(".sOv"),
    V:$("#seV",svg),b2:dl(".sB2"),o2:dl(".sO2"),inn:dl(".sIn"),dlc:dl(".sDl"),nd:dl(".sNd"),
    F:$("#seF",svg),f1:dl(".sF1"),f2:dl(".sF2"),f3:dl(".sF3"),
    L1:$("#seL1",svg),L2:$("#seL2",svg),L3:$("#seL3",svg),L4:$("#seL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.F,b);
    /* step 1 */
    op(E.I,b);draw(E.pa,b*seg(p,0,.08));draw(E.gr,b*seg(p,.06,.13));draw(E.ln,b*seg(p,.11,.19));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    draw(E.f1,b*seg(p,.24,.28));op(E.S,b);draw(E.rd,b*seg(p,.27,.33));draw(E.sp,b*seg(p,.31,.4));draw(E.pw,b*seg(p,.38,.46));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    draw(E.f2,b*seg(p,.5,.54));op(E.A,b);draw(E.bp,b*seg(p,.52,.58));draw(E.tc,b*seg(p,.55,.6));draw(E.nz,b*seg(p,.58,.62));draw(E.sy,b*seg(p,.61,.67));draw(E.ov,b*seg(p,.65,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    draw(E.f3,b*seg(p,.75,.79));op(E.V,b);draw(E.b2,b*seg(p,.78,.83));draw(E.o2,b*seg(p,.81,.85));draw(E.inn,b*seg(p,.84,.9));draw(E.dlc,b*seg(p,.87,.93));draw(E.nd,b*seg(p,.91,.96));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

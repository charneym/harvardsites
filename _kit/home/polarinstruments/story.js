/* The story scene (BL/BY/DB): one board through Polar's three kinds of tool (polarinstruments.com > Products), drawn
   as ONE bench kept on screen for all three steps, every part outlined from the start so the frame is never empty:
   Step 1 (Stack): Speedstack builds the layer stackup, layer by layer (copper planes, prepreg and core).
   Step 2 (Solve): the field solver's field lines appear around the edge-coupled differential pair on top.
   Step 3 (Test): the CITS trace, impedance against time, runs from the launch into the tolerance band, flat
   across the test window, and up to the open end. Labels keep >= 8px clear of every stroke (DR.3). */
var SCW=760,SCH=520;
function plScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<text class="t" x="20" y="30">'+(mob?"SCHEMATIC":"STACKUP, FIELD AND TDR, SCHEMATIC")+'</text>';
  /* the stackup: [type, y, h] */
  var L=[["dl",96,40],["cu",136,10],["dl",146,58],["cu",204,10],["dl",214,40],["cu",254,10],["dl",264,58],["cu",322,10],["dl",332,40],["cu",372,10]];
  g+='<g id="plLay">';L.forEach(function(r){g+='<rect class="ly '+r[0]+'" x="60" y="'+r[1]+'" width="250" height="'+r[2]+'"/>'});g+='</g>';
  /* buried stripline pairs in the cores */
  g+='<g id="plBur"><rect class="cu" x="130" y="170" width="24" height="9"/><rect class="cu" x="170" y="170" width="24" height="9"/><rect class="cu" x="216" y="288" width="24" height="9"/><rect class="cu" x="256" y="288" width="24" height="9"/></g>';
  g+='<rect class="frm sD" x="60" y="96" width="250" height="286"/>';
  /* the microstrip pair on top */
  g+='<path class="tr" d="M141 96L144 85H166L169 96Z"/><path class="tr" d="M191 96L194 85H216L219 96Z"/>';
  if(!mob)g+='<g id="plSL"><text class="t" x="326" y="121">PREPREG</text><text class="t" x="326" y="146">COPPER</text><text class="t" x="326" y="180">CORE</text></g>';
  /* field lines (step 2) */
  g+='<g id="plFl">'+
    '<path class="fl" d="M166 88C173 76 187 76 194 88"/>'+
    '<path class="fl" d="M166 92C172 101 188 101 194 92"/>'+
    '<path class="fl" d="M146 96C138 108 134 122 132 136"/>'+
    '<path class="fl" d="M157 96C156 110 155 124 155 136"/>'+
    '<path class="fl" d="M203 96C204 110 205 124 205 136"/>'+
    '<path class="fl" d="M214 96C222 108 226 122 228 136"/>'+
    '<path class="fl" d="M142 87C116 86 102 110 98 136"/>'+
    '<path class="fl" d="M218 87C244 86 258 110 262 136"/>'+
   '</g>';
  g+='<g id="plZL"><text class="t s1" x="180" y="60" text-anchor="middle">Z DIFF</text></g>';
  /* the TDR plot (step 3) */
  g+='<path class="ax sD" d="M420 86V382H724"/>';
  g+='<rect class="band" x="420" y="196" width="304" height="44"/>';
  if(!mob)g+='<text class="t" x="432" y="104">IMPEDANCE</text>';
  g+='<text class="t" x="724" y="410" text-anchor="end">TIME</text>';
  g+='<text class="t" x="432" y="184">'+(mob?"± 10%":"TOLERANCE ± 10%")+'</text>';
  g+='<g id="plWin"><path class="win" d="M532 248V372M652 248V372"/><text class="t s1" x="592" y="'+(mob?"440":"410")+'" text-anchor="middle">'+(mob?"WINDOW":"TEST WINDOW")+'</text></g>';
  g+='<path id="plTdr" class="tdr" d="M422 300H470C480 300 484 222 494 218C502 215 508 220 516 218C530 215 545 221 560 218C578 215 596 221 614 218C632 215 646 220 660 218C672 216 676 214 680 196C686 166 690 132 700 124C706 120 714 120 722 120"/>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="490">1 · STACK</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="490">2 · SOLVE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="490">3 · TEST</text></g>';
  return g+'</svg>';
}
function scene(){return plScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fl:dl("#plFl .fl"),tdr:dl("#plTdr"),lay:$$("#plLay .ly",svg),bur:$("#plBur",svg),tr:$$(".tr",svg),
    zl:$("#plZL",svg),win:$("#plWin",svg),band:$(".band",svg),sl:$("#plSL",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),tt:$$("text.t",svg).filter(function(t){return !t.closest("g")})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tt.forEach(function(t){op(t,b)});op(E.band,b);op(E.sl,b)}
    /* step 1: the stack builds, top to bottom */
    E.lay.forEach(function(r,i){op(r,b*(.18+.82*seg(p,.02+i*.024,.06+i*.024)))});
    op(E.bur,b*(.18+.82*seg(p,.22,.28)));E.tr.forEach(function(t){op(t,b*(.25+.75*seg(p,0,.08)))});
    /* step 2: the fields around the pair */
    draw(E.fl,b*seg(p,.38,.56));op(E.zl,b*seg(p,.5,.58));
    /* step 3: the TDR trace through the tolerance band */
    op(E.win,b*(.25+.75*seg(p,.68,.74)));
    draw(E.tdr,b*seg(p,.7,.9));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.31,.36)));op(E.l2,b*seg(p,.36,.44)*(1-seg(p,.63,.68)));op(E.l3,b*seg(p,.68,.76));
  };
}

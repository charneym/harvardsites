/* The story scene (BL/BY/DB): how a worn shaft comes back at Prime (primemachine.com > Laser Tracker Measurements: laser
   trackers, PolyWorks, SolidWorks; Five Axis Machining: bearing fits and throws on the NT/NTX mill/turn lathe; HVOF Metal
   Spraying: "repairing bearing and seal fits on shaft using high velocity oxygen fueled metal spraying"; Millwrights / Laser
   Alignments), ONE schematic, a line of four stations:
   Step 1 (Measure): the laser tracker on its tripod measures the shaft.
   Step 2 (Machine): the mill/turn lathe turns the bearing fit.
   Step 3 (Spray): the HVOF gun builds the fit back up.
   Step 4 (Align): the shaft is coupled on site and aligned with a laser. */
var SCW=760,SCH=520;
function prScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">SHAFT REPAIR, SCHEMATIC</text>';
  /* step 1: tracker head on a tripod, beam to the shaft */
  g+='<g id="prM"><path class="edge sTk" d="M62 196H96V226H62Z"/><path class="pipe sTp" d="M79 226V262M79 262L56 330M79 262L102 330"/>'+
     '<path class="rf sBm" d="M96 210L150 252"/><path class="edge sSh" d="M120 256H176V288H120Z"/></g>';
  /* step 2: the lathe: chuck, shaft, tool */
  g+='<g id="prT"><path class="edge sCk" d="M218 220H252V330H218Z"/><path class="edge sPt" d="M252 256H368V294H252Z"/>'+
     '<path class="rot sTl" d="M330 330L342 306L354 330Z"/><path class="rot sRo" d="M284 238Q308 228 332 238M325 232L332 238L324 242"/></g>';
  /* step 3: the HVOF gun and its spray onto the fit */
  g+='<g id="prS"><path class="edge sGn" d="M440 140H500V172H440Z"/><path class="pipe sNz" d="M470 172V196"/>'+
     '<path class="rot sSp" d="M470 200L446 248M470 200L470 248M470 200L494 248"/><path class="edge sSf" d="M414 256H556V292H414Z"/><path class="mask sCt" d="M440 256H500V266H440Z"/></g>';
  /* step 4: two shaft ends, a coupling, the alignment laser */
  g+='<g id="prA"><path class="edge sS1" d="M598 258H654V290H598Z"/><path class="edge sCp" d="M654 248H672V300H654Z"/><path class="edge sS2" d="M672 258H736V290H672Z"/>'+
     '<path class="rf sLz" d="M598 236H736"/></g>';
  /* the line between the stations */
  g+='<g id="prF"><path class="beam sF1" d="M184 274H210"/><path class="beam sF2" d="M376 274H406"/><path class="beam sF3" d="M564 274H590"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="prL1"><text class="t s2" x="56" y="'+(mob?178:182)+'">'+(mob?'TRACKER':'LASER TRACKER')+'</text><text class="t" x="56" y="'+(mob?362:356)+'">'+(mob?'3D SCAN':'POLYWORKS')+'</text></g>';
  g+='<g id="prL2"><text class="t s2" x="218" y="'+(mob?204:206)+'">'+(mob?'LATHE':'MILL/TURN')+'</text><text class="t" x="218" y="'+(mob?362:356)+'">'+(mob?'FITS':'BEARING FITS')+'</text></g>';
  g+='<g id="prL3"><text class="t s2" x="440" y="'+(mob?122:126)+'">HVOF</text><text class="t" x="414" y="'+(mob?324:320)+'">'+(mob?'TO SIZE':'BUILT TO SIZE')+'</text></g>';
  g+='<g id="prL4"><text class="t s2" x="598" y="'+(mob?218:222)+'">'+(mob?'ALIGN':'LASER ALIGN')+'</text><text class="t" x="598" y="'+(mob?332:326)+'">'+(mob?'ON SITE':'ON SITE')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · MEASURE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · MACHINE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SPRAY</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · ALIGN</text></g>';
  return g+'</svg>';
}
function scene(){return prScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={M:$("#prM",svg),tk:dl(".sTk"),tp:dl(".sTp"),bm:$$(".sBm",svg),sh:dl(".sSh"),
    T:$("#prT",svg),ck:dl(".sCk"),pt:dl(".sPt"),tl:dl(".sTl"),ro:dl(".sRo"),
    S:$("#prS",svg),gn:dl(".sGn"),nz:dl(".sNz"),sp:dl(".sSp"),sf:dl(".sSf"),ct:dl(".sCt"),
    A:$("#prA",svg),s1:dl(".sS1"),cp:dl(".sCp"),s2:dl(".sS2"),lz:$$(".sLz",svg),
    F:$("#prF",svg),f1:dl(".sF1"),f2:dl(".sF2"),f3:dl(".sF3"),
    L1:$("#prL1",svg),L2:$("#prL2",svg),L3:$("#prL3",svg),L4:$("#prL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function opl(list,v){list.forEach(function(el){op(el,v)})}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.F,b);
    /* step 1 */
    op(E.M,b);draw(E.tp,b*seg(p,0,.08));draw(E.tk,b*seg(p,.05,.11));draw(E.sh,b*seg(p,.08,.15));opl(E.bm,b*seg(p,.13,.19));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    draw(E.f1,b*seg(p,.24,.28));op(E.T,b);draw(E.ck,b*seg(p,.27,.33));draw(E.pt,b*seg(p,.31,.38));draw(E.tl,b*seg(p,.36,.42));draw(E.ro,b*seg(p,.4,.46));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    draw(E.f2,b*seg(p,.5,.54));op(E.S,b);draw(E.sf,b*seg(p,.52,.58));draw(E.gn,b*seg(p,.55,.6));draw(E.nz,b*seg(p,.58,.62));draw(E.sp,b*seg(p,.61,.67));draw(E.ct,b*seg(p,.65,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    draw(E.f3,b*seg(p,.75,.79));op(E.A,b);draw(E.s1,b*seg(p,.78,.84));draw(E.cp,b*seg(p,.82,.87));draw(E.s2,b*seg(p,.85,.91));opl(E.lz,b*seg(p,.89,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

/* The story scene (BL/BY/DB): one vacuum soldering cycle (budatec.de > Technologie > Vakuum löten, Plasma; Produkte), drawn as
   ONE fine-line section through a process chamber kept on screen for all four steps, with the process chart beside it
   (temperature and chamber pressure over time, like budatec's own profile plots).
   Step 1 (Bestücken): chip, solder and substrate lie on the heating plate; voids sit in the solder layer; the lid closes.
   Step 2 (Heizen): the plate warms, a reducing gas fills the chamber; the temperature curve climbs to the preheat plateau.
   Step 3 (Vakuum): at liquidus the chamber is pumped down; the voids leave the joint; pressure drops on the chart.
   Step 4 (Kühlen): vented and cooled; the joint is void-free; the temperature curve falls back. */
var SCW=760,SCH=520;
var VOIDS=[[104,340,4.2],[126,342,3],[150,339,5],[178,341,3.4],[202,340,4.4],[220,342,2.6],[140,343,2.4],[192,343,2.2]];
/* chart coordinates: time 350..712, temperature/pressure 150..420 */
function stT(){return "M350 412C372 412 392 318 420 312L500 306C520 306 530 214 552 206L608 204C640 204 670 360 712 404"}
function stP(){return "M350 172H548C556 172 558 412 568 412H604C612 412 614 172 622 172H712"}
function stScene(o){
  var g='',mob=o.mob,i,H=mob?640:SCH;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+H+'" aria-hidden="true">';
  /* phones: the chamber is drawn larger on the left, the chart/inset smaller on the right, captions below (DB) */
  g+='<g'+(mob?' transform="translate(16 122) scale(1.3) translate(-24 -176)"':'')+'>';
  /* the chamber (always on screen): walls, floor, the pump port, the lid */
  g+='<path class="cham" d="M34 196H286V430H34Z"/>';
  g+='<path class="edge sD" d="M34 196V430H286V196"/><path class="in sD" d="M48 208V418H272V208"/>';
  g+='<path class="edge sD" d="M224 430V462H240V430"/>';
  g+='<g id="stLid"><path class="edge" d="M24 184H296V196H24Z"/><path class="in" d="M120 184V176H200V184"/></g>';
  /* the heating plate and its elements */
  g+='<path class="plate" id="stPl" d="M62 370H258V394H62Z"/><path class="edge sD" d="M62 370H258V394H62Z"/>';
  g+='<path class="in" d="M80 382H240"/><path class="in" d="M110 394V418M210 394V418"/>';
  /* substrate, solder layer, chip */
  g+='<path class="sub" d="M86 352H234V370H86Z"/><path class="edge sD" d="M86 352H234V370H86Z"/>';
  g+='<path class="sol" id="stSo" d="M96 334H224V352H96Z"/>';
  g+='<path class="chip" d="M108 300H212V334H108Z"/><path class="edge sD" d="M108 300H212V334H108Z"/><path class="in" d="M120 310H200"/>';
  /* voids in the solder layer */
  g+='<g id="stV">';for(i=0;i<VOIDS.length;i++)g+='<circle class="vd" cx="'+VOIDS[i][0]+'" cy="'+VOIDS[i][1]+'" r="'+VOIDS[i][2]+'"/>';g+='</g>';
  /* step 2: gas in the chamber; heat along the plate */
  g+='<g id="stGas">';[[70,232],[118,250],[168,228],[226,246],[252,282],[84,286],[246,322],[64,330],[200,262],[150,272]].forEach(function(q){g+='<circle class="gas" cx="'+q[0]+'" cy="'+q[1]+'" r="2.4"/>'});g+='</g>';
  g+='<g id="stHt"><path class="heat" d="M70 404H250"/></g>';
  /* step 3: the pump draws the chamber down */
  g+='<g id="stPm"><path class="pump" d="M232 444V484"/><path class="pump" d="M224 476L232 486L240 476"/></g>';
  /* step 1: the joint, marked for the magnified view */
  g+='<g id="stMk"><path class="mk" d="M90 294H230V376H90Z"/></g>';
  g+='</g>';
  g+='<g'+(mob?' transform="translate(392 168) scale(.94) translate(-340 -140)"':'')+'>';
  /* step 1: the joint magnified: chip, solder with its voids, substrate, heating plate */
  g+='<g id="stIn"><path class="edge" d="M360 176H620V412H360Z"/>'+
     '<path class="chip" d="M410 206H570V266H410Z"/><path class="edge" d="M410 206H570V266H410Z"/>'+
     '<path class="sol" d="M396 266H584V304H396Z"/>'+
     '<path class="sub" d="M382 304H598V346H382Z"/><path class="edge" d="M382 304H598V346H382Z"/>'+
     '<path class="plate" d="M368 346H612V380H368Z"/><path class="edge" d="M368 346H612V380H368Z"/>';
  [[426,285,8],[462,289,5.5],[500,284,10],[538,288,6.5],[566,286,5]].forEach(function(q){g+='<circle class="vd" cx="'+q[0]+'" cy="'+q[1]+'" r="'+q[2]+'"/>'});
  g+='<text class="t" x="636" y="240">CHIP</text><text class="t" x="636" y="289">LOT</text><text class="t" x="636" y="329">SUBSTRAT</text><text class="t" x="636" y="367">'+(mob?'PLATTE':'HEIZPLATTE')+'</text></g>';
  /* the chart */
  g+='<g id="stAx"><path class="axis" d="M340 430H720M340 430V140"/></g>';
  g+='<path class="tcur sT" id="stTc" d="'+stT()+'"/>';
  g+='<path class="pcur sP" id="stPc" d="'+stP()+'"/>';
  g+='<g id="stLq"><path class="liq" d="M548 150V420M622 150V420"/></g>';
  g+='<g id="stLg"><text class="t tl" x="340" y="'+(mob?466:460)+'">TEMPERATUR</text><text class="t pl" x="'+(mob?486:476)+'" y="'+(mob?466:460)+'">DRUCK</text><text class="t" x="720" y="'+(mob?466:460)+'" text-anchor="end">ZEIT</text></g>';
  g+='</g>';
  /* labels, per step, in the band above the plot, >= 8px clear of every stroke (DR3) */
  var LX=mob?392:340;
  g+='<g id="stL1"><text class="t s2" x="'+LX+'" y="70">'+(mob?'GELÖTETER AUFBAU':'PROZESSKAMMER, HEIZPLATTE')+'</text><text class="t" x="'+LX+'" y="'+(mob?100:96)+'">'+(mob?'VOIDS IM LOT':'DER AUFBAU VERGRÖSSERT, VOIDS IM LOT')+'</text></g>';
  g+='<g id="stL2"><text class="t s2" x="'+LX+'" y="70">'+(mob?'AUFHEIZEN':'TEMPERATURPROFIL')+'</text><text class="t" x="'+LX+'" y="'+(mob?100:96)+'">'+(mob?'H₂ ODER HCOOH':'H₂ ODER HCOOH IN DER KAMMER')+'</text></g>';
  g+='<g id="stL3"><text class="t s2" x="'+LX+'" y="70">'+(mob?'VAKUUM':'VAKUUM IN DER LIQUIDUSPHASE')+'</text><text class="t" x="'+LX+'" y="'+(mob?100:96)+'">'+(mob?'VOIDS ENTWEICHEN':'VOIDS ENTWEICHEN AUS DEM LOT')+'</text></g>';
  g+='<g id="stL4"><text class="t s2" x="'+LX+'" y="70">'+(mob?'ABKÜHLEN':'BELÜFTEN UND ABKÜHLEN')+'</text><text class="t" x="'+LX+'" y="'+(mob?100:96)+'">'+(mob?'OHNE FEHLSTELLEN':'LÖTVERBUND OHNE FEHLSTELLEN')+'</text></g>';
  /* step captions */
  var CY=mob?620:508;
  g+='<g id="lb1"><text class="a" x="34" y="'+CY+'">1 · BESTÜCKEN</text></g>';
  g+='<g id="lb2"><text class="a" x="34" y="'+CY+'">2 · HEIZEN</text></g>';
  g+='<g id="lb3"><text class="a" x="34" y="'+CY+'">3 · VAKUUM</text></g>';
  g+='<g id="lb4"><text class="a" x="34" y="'+CY+'">4 · KÜHLEN</text></g>';
  return g+'</svg>';
}
function scene(){return stScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),lid:$("#stLid",svg),pl:$("#stPl",svg),so:$("#stSo",svg),v:$("#stV",svg),vs:$$("#stV circle",svg),gas:$("#stGas",svg),gs:$$("#stGas circle",svg),ht:$("#stHt",svg),pm:$("#stPm",svg),
    ax:$("#stAx",svg),lg:$("#stLg",svg),tc:dl(".sT"),tcE:$("#stTc",svg),pc:dl(".sP"),pcE:$("#stPc",svg),lq:$("#stLq",svg),
    In:$("#stIn",svg),Mk:$("#stMk",svg),L1:$("#stL1",svg),L2:$("#stL2",svg),L3:$("#stL3",svg),L4:$("#stL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  /* the share of a curve's length drawn by the time it reaches x, so both curves always sit at the same moment of the process */
  function fx(el,x){if(!el||!el.getTotalLength)return 0;var L=el.getTotalLength(),lo=0,hi=L;for(var k=0;k<24;k++){var m=(lo+hi)/2;if(el.getPointAtLength(m).x<x)lo=m;else hi=m}return lo/L}
  var T2=fx(E.tcE,500),T3=fx(E.tcE,606),P2=fx(E.pcE,500),P3=fx(E.pcE,606);
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: the lid settles onto the chamber */
    var ld=seg(p,.02,.14);if(E.lid)E.lid.setAttribute("transform","translate(0 "+(-34*(1-ld)).toFixed(1)+")");op(E.lid,b*(.35+.65*ld));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    op(E.In,b*seg(p,.03,.1)*(1-seg(p,.22,.25)));op(E.Mk,b*seg(p,.03,.1)*(1-seg(p,.22,.25)));
    /* the chart axes and legend from step 2 */
    op(E.ax,b*seg(p,.26,.3));op(E.lg,b*seg(p,.27,.31));
    /* step 2: heat and gas; the temperature curve climbs to the preheat plateau (about the first 45% of its length) */
    var heat=seg(p,.28,.45)*(1-.7*seg(p,.8,.95));
    if(E.pl)E.pl.style.fill="rgba(240,150,80,"+(.08+.42*heat).toFixed(3)+")";
    op(E.ht,b*heat);
    var gas=seg(p,.29,.36)*(1-seg(p,.53,.6));op(E.gas,b*gas);
    E.gs.forEach(function(c,i){c.setAttribute("transform","translate(0 "+(Math.sin(p*18+i)*3).toFixed(1)+")")});
    op(E.tcE,b*seg(p,.28,.3));
    var tl=T2*seg(p,.3,.46)+(T3-T2)*seg(p,.53,.68)+(1-T3)*seg(p,.78,.92);draw(E.tc,b*tl);
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: vacuum at liquidus; the voids shrink and leave the joint sideways; the pressure curve drops */
    op(E.pm,b*seg(p,.53,.57)*(1-seg(p,.7,.74)));
    op(E.lq,b*seg(p,.54,.58));
    op(E.pcE,b*seg(p,.28,.3));var pl=P2*seg(p,.3,.46)+(P3-P2)*seg(p,.53,.68)+(1-P3)*seg(p,.78,.92);draw(E.pc,b*pl);
    var vv=seg(p,.56,.7);
    E.vs.forEach(function(c,i){var cx=+c.getAttribute("cx"),dx=(cx<160?-1:1)*vv*(cx<160?cx-90:230-cx);c.setAttribute("transform","translate("+dx.toFixed(1)+" 0)");c.style.opacity=(1-vv).toFixed(3)});
    op(E.v,b);
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: vented and cooled */
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

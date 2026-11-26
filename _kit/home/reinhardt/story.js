/* The story scene (BL/BY/DB): one Flachbaugruppe through a REINHARDT test, as the firm describes it (reinhardt-testsystem.de >
   Startseite, Adaption, ATS-SMFT 780 Leistungsmerkmale), drawn as a fine-line side elevation kept on screen for all four steps:
   Step 1 (Adaptieren): the needle-bed fixture draws in: the plate, then the spring-contact probes rise at the CAD positions.
   Step 2 (In-Circuit-Test): the board lowers onto the probes; the contacts light one after another and the readout shows up to 3.840 channels while the bar fills.
   Step 3 (Funktionstest): the board is powered; a stimulus waveform draws in the readout (Feldbus CAN-FD, LIN).
   Step 4 (Auswerten): the fault location is ringed on the board and the readout shows the statistics. Schematic, not to scale. */
var SCW=760,SCH=520,PX0=110,PN=14,PP=40;
function rsScene(o){
  var g='',mob=o.mob,i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* fixture plate and guide pins (drawn with the section reveal) */
  g+='<path class="plf" d="M60 440H700V470H60Z"/><path class="sD" d="M60 440H700V470H60Z"/><path class="sD" d="M86 440V392M674 440V392"/>';
  /* CAD positions: faint guides above each probe (step 1) */
  g+='<g id="cad">';for(i=0;i<PN;i++){x=PX0+i*PP;g+='<path class="gd" d="M'+x+' 250V340"/>'}g+='</g>';
  /* probes: barrel and plunger (drawn in step 1) */
  for(i=0;i<PN;i++){x=PX0+i*PP;g+='<path class="pn" d="M'+(x-5)+' 440V398H'+(x+5)+'V440"/><path class="pn pl" d="M'+x+' 398V350"/>'}
  g+='<g id="xl"><text class="t" x="60" y="'+(mob?96:100)+'">'+(mob?"CAD · BOHRPROGRAMM":"CAD-DATEN · BOHRPROGRAMM")+'</text><text class="a big" x="60" y="'+(mob?138:132)+'">AAE-CNC 500</text></g>';
  /* the board with its parts, lowered onto the probes in step 2 */
  g+='<g id="pcb"><path class="pcbf" d="M80 334H680V348H80Z"/>';
  for(i=0;i<PN;i++){x=PX0+i*PP;g+='<path class="pad" d="M'+(x-6)+' 348H'+(x+6)+'V351H'+(x-6)+'Z"/>'}
  g+='<path class="ic" d="M170 314H290V334H170Z"/><path class="lg" d="M164 330H170M290 330H296"/>'+
     '<path class="ic" d="M380 320H450V334H380Z"/><path class="ic" d="M470 302H540V334H470Z"/><path class="hp" d="M482 302V292M494 302V292M506 302V292M518 302V292M530 302V292"/>'+
     '<path class="cap" d="M572 334V290H612V334"/><path class="capt" d="M572 290H612"/><path class="ic" d="M120 326H140V334H120ZM320 326H340V334H320ZM640 326H656V334H640Z"/></g>';
  /* contact lights at each probe tip (step 2) */
  g+='<g id="tips">';for(i=0;i<PN;i++){x=PX0+i*PP;g+='<circle class="tp" cx="'+x+'" cy="350" r="4"/>'}g+='</g>';
  /* readout panel (top right), three states */
  g+='<g id="rd"><path class="pan" d="M470 30H720V204H470Z"/></g>';
  g+='<g id="r1"><text class="t" x="490" y="'+(mob?66:62)+'">NADELBETT</text><text class="vv" x="490" y="'+(mob?128:120)+'">500–800</text>'+
     '<text class="t" x="490" y="'+(mob?160:150)+'">'+(mob?"EURO NETTO":"EURO NETTO, TYPISCH")+'</text></g>';
  g+='<g id="r2"><text class="t" x="490" y="'+(mob?66:62)+'">'+(mob?"IN-CIRCUIT":"IN-CIRCUIT-TEST")+'</text><text class="vv" id="vv" x="490" y="'+(mob?128:120)+'">3.840</text>'+
     '<text class="t" x="490" y="'+(mob?160:150)+'">MESSKANÄLE</text><path class="pb0" d="M490 180H700"/><path class="pb" id="pb" d="M490 180H700"/></g>';
  g+='<g id="r3"><text class="t" x="490" y="'+(mob?66:62)+'">'+(mob?"FUNKTION":"FUNKTIONSTEST")+'</text><path class="wv" id="wv" d="';
  for(i=0;i<=84;i++){g+=(i?"L":"M")+(490+i*2.5).toFixed(1)+" "+(118-26*Math.sin(i/84*Math.PI*4)).toFixed(1)}
  g+='"/><text class="t" x="490" y="'+(mob?186:182)+'">'+(mob?"CAN-FD · LIN":"CAN-FD · LIN · FLASH")+'</text></g>';
  g+='<g id="r4"><text class="t" x="490" y="'+(mob?66:62)+'">AUSWERTUNG</text>';
  var hb=[22,38,64,80,56,30,16];for(i=0;i<7;i++){g+='<path class="hb" d="M'+(494+i*28)+' 160V'+(160-hb[i])+'H'+(512+i*28)+'V160"/>'}
  g+='<path class="pb0" d="M490 160H700"/><text class="t" x="490" y="'+(mob?190:186)+'">'+(mob?"STATISTIK":"STATISTIK · TRACEABILITY")+'</text></g>';
  /* fault location ring on the board (step 4) */
  g+='<g id="fm"><circle class="fr" cx="415" cy="327" r="34"/><path class="fr2" d="M415 281V289M415 365V373M369 327H377M453 327H461"/></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="60" y="506">1 · ADAPTIEREN</text></g>';
  g+='<g id="lb2"><text class="a" x="60" y="506">2 · IN-CIRCUIT-TEST</text></g>';
  g+='<g id="lb3"><text class="a" x="60" y="506">3 · FUNKTIONSTEST</text></g>';
  g+='<g id="lb4"><text class="a" x="60" y="506">4 · AUSWERTEN</text></g>';
  return g+'</svg>';
}
function scene(){return rsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return svg.querySelector(s)};
  var E={base:dl(".sD"),pins:dl(".pn"),plf:q(".plf"),cad:q("#cad"),xl:q("#xl"),pcb:q("#pcb"),tips:$$(".tp",svg),rd:q("#rd"),r1:q("#r1"),r2:q("#r2"),r3:q("#r3"),r4:q("#r4"),
    vv:q("#vv"),pb:q("#pb"),wv:q("#wv"),fm:q("#fm"),l1:q("#lb1"),l2:q("#lb2"),l3:q("#lb3"),l4:q("#lb4")};
  var PL=210;E.pb.style.strokeDasharray=PL+" "+PL;
  var WL=E.wv.getTotalLength();E.wv.style.strokeDasharray=(WL+4)+" "+(WL+4);
  var lastB=-1,lastV=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,s){if(el)el.setAttribute("transform",s)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.plf,b)}
    /* step 1: CAD guides, then the probes draw up out of the plate (complete within step 1) */
    op(E.cad,b*seg(p,0,.05)*(1-seg(p,.24,.3)));
    var pd=Math.max(b*.35,seg(p,0,.14))*b;if(p>=.14)pd=b;draw(E.pins,pd);
    op(E.xl,b*seg(p,.03,.09)*(1-seg(p,.22,.26)));
    /* step 2: the board lowers onto the probes; contacts light left to right; the channel count runs up */
    var lo=seg(p,.26,.36);op(E.pcb,b*seg(p,.25,.29));tr(E.pcb,"translate(0 "+(-56*(1-lo)).toFixed(1)+")");
    var ct=seg(p,.36,.46);E.tips.forEach(function(c,i){var k=seg(ct,i/PN*.8,i/PN*.8+.2);op(c,b*k*(1-seg(p,.72,.76)*.6))});
    op(E.rd,b*seg(p,.04,.09));op(E.r1,b*seg(p,.06,.11)*(1-seg(p,.23,.27)));
    op(E.r2,b*seg(p,.31,.35)*(1-seg(p,.5,.53)));
    E.pb.style.strokeDashoffset=(PL*(1-ct)).toFixed(1);
    /* step 3: the waveform draws in the readout */
    op(E.r3,b*seg(p,.53,.56)*(1-seg(p,.74,.77)));
    E.wv.style.strokeDashoffset=((WL+4)*(1-seg(p,.55,.68))).toFixed(1);
    /* step 4: statistics and the fault location ring */
    op(E.r4,b*seg(p,.77,.8));op(E.fm,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.04)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.25,.29)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.5,.54)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.75,.79));
  };
}

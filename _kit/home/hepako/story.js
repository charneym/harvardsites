/* The story scene (BL/BY/DB): how HEPAKO makes a precision rubber part (hepako.de > Leistungen, Materialien, Einsatzbereiche > Medizin),
   drawn as ONE fine-line section kept on screen for all four steps:
   Step 1 (Werkstoff): the elastomer, HTV or LSR, from common grades to FKM / FFKM / fluorosilicone (Materialien).
   Step 2 (Werkzeug): the two-part mould, designed and built with HEPAKO's own toolmaking (Leistungen).
   Step 3 (Formgebung): the material runs along the parting line and fills the cavity: compression, transfer or injection moulding.
   Step 4 (Pruefung): the finished part, bore 0.2 mm and wall 0.1 mm (Leistungen: Mikroteile), cleanroom ISO class 7, DIN EN ISO 13485. */
var SCW=760,SCH=520;
function hpScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">FORMTEIL IM SCHNITT, SCHEMATISCH</text>';
  /* step 1: the material in its funnel */
  g+='<g id="hpW"><path class="mat" d="M50 100H150L108 166V206H92V166Z"/><path class="edge sW" d="M40 92H160L114 170V214H86V170Z"/></g>';
  /* step 2: the two mould halves with the cavity of the part (section: a flanged boss with a central bore) */
  g+='<g id="hpT"><path class="edge sT" d="M180 150H520V252H180Z"/><path class="edge sT" d="M180 260H520V362H180Z"/>'+
     '<path class="cav sT" d="M300 248H350V196H372V264H300Z"/><path class="cav sT" d="M388 264V196H410V248H460V264Z"/><path class="pin" d="M380 154V192"/></g>';
  /* step 3: the material flows along the parting line and fills the cavity */
  g+='<g id="hpF"><path class="flow sF" d="M100 214V256H300"/><path class="fill" d="M300 248H350V196H372V264H300Z"/><path class="fill" d="M388 264V196H410V248H460V264Z"/></g>';
  /* step 4: the finished part, with its two dimensions */
  g+='<g id="hpP"><path class="part sP" d="M570 248H620V196H642V264H570Z"/><path class="part sP" d="M658 264V196H680V248H730V264Z"/>'+
     '<path class="dim sD" d="M642 182H658M642 176V188M658 176V188"/><path class="dim sD" d="M742 248V264M736 248H748M736 264H748"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="hpL1"><text class="t s2" x="40" y="74">LSR · HTV</text><text class="t" x="'+(mob?186:182)+'" y="'+(mob?112:108)+'">'+(mob?'FKM · FFKM':'FKM · FFKM · FLUORSILIKON')+'</text></g>';
  g+='<g id="hpL2"><text class="t s2" x="180" y="132">'+(mob?'WERKZEUG':'EIGENER WERKZEUGBAU')+'</text><text class="t" x="534" y="'+(mob?264:260)+'">'+(mob?'TEILUNG':'TRENNEBENE')+'</text></g>';
  g+='<g id="hpL3"><text class="t s2" x="180" y="'+(mob?398:392)+'">'+(mob?'SPRITZGUSS':'COMPRESSION · TRANSFER · INJECTION')+'</text><text class="t" x="180" y="'+(mob?428:416)+'">'+(mob?'AUF DEN ARTIKEL ABGESTIMMT':'DAS VERFAHREN PASST ZUM ARTIKEL')+'</text></g>';
  g+='<g id="hpL4"><text class="t s2" x="570" y="'+(mob?166:164)+'">'+(mob?'Ø 0,2':'Ø 0,2 mm')+'</text><text class="t s2" x="570" y="'+(mob?300:296)+'">'+(mob?'WAND 0,1':'WAND 0,1 mm')+'</text><text class="t" x="570" y="'+(mob?330:320)+'">'+(mob?'ISO 13485':'DIN EN ISO 13485')+'</text><text class="t" x="570" y="'+(mob?360:344)+'">'+(mob?'REINRAUM 7':'REINRAUM ISO-KLASSE 7')+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · WERKSTOFF</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · WERKZEUG</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · FORMGEBUNG</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · PRÜFUNG</text></g>';
  return g+'</svg>';
}
function scene(){return hpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={W:$("#hpW",svg),wE:dl(".sW"),mat:$("#hpW .mat",svg),T:$("#hpT",svg),tE:dl(".sT"),pin:$("#hpT .pin",svg),F:$("#hpF",svg),fl:dl(".sF"),fill:$$("#hpF .fill",svg),
    P:$("#hpP",svg),pE:dl(".sP"),dE:dl(".sD"),
    L1:$("#hpL1",svg),L2:$("#hpL2",svg),L3:$("#hpL3",svg),L4:$("#hpL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1: the funnel draws, then the material settles in it */
    op(E.W,b);draw(E.wE,b*seg(p,0,.1));op(E.mat,b*seg(p,.06,.18));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the two mould halves and the cavity */
    op(E.T,b*seg(p,.25,.29));draw(E.tE,b*seg(p,.26,.4));op(E.pin,b*seg(p,.36,.42));
    op(E.L2,b*seg(p,.32,.38)*(1-seg(p,.47,.5)));
    /* step 3: the material runs in and fills the cavity */
    op(E.F,b*seg(p,.49,.52));draw(E.fl,b*seg(p,.5,.6));E.fill.forEach(function(f){op(f,b*seg(p,.58,.68))});
    op(E.L3,b*seg(p,.53,.59)*(1-seg(p,.72,.75)));
    /* step 4: the finished part and its dimensions */
    op(E.P,b*seg(p,.75,.79));draw(E.pE,b*seg(p,.76,.86));draw(E.dE,b*seg(p,.84,.92));
    op(E.L4,b*seg(p,.84,.9));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

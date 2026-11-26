/* The story scene (BL/BY/DB): BUSCH's precision guarantee (busch-microsystems.de > Unternehmen > Präzisionsgarantie,
   Produkte > Granitbaugruppen, Engineering > Antriebs- & Steuerungstechnik), drawn as ONE fine-line side elevation of a granite
   positioning stage kept on screen for all four steps.
   Step 1 (Granit): the granite base is lapped by hand to a flatness of 2 µm or better.
   Step 2 (Montage): guide rails and the carriage are mounted and aligned exactly parallel.
   Step 3 (Antrieb): the linear-motor track, the cable chain and the EtherCAT controller; the carriage travels.
   Step 4 (Messung): a laser interferometer measures the travel; every delivery ships with its measurement protocol. */
var SCW=760,SCH=520;
function bmScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* always: the floor, the granite block on its two feet */
  g+='<path class="flr sD" d="M6 470H754"/>';
  g+='<path class="gran sD" d="M70 300H630V450H70Z"/>';
  g+='<path class="gran sD" d="M126 450V470H186V450M514 450V470H574V450"/>';
  /* granite grain: a fixed scatter of fine dots inside the block (never near its edges) */
  var gr='',sd=7;function rn(){sd=(sd*9301+49297)%233280;return sd/233280}
  for(i=0;i<110;i++){gr+='<circle cx="'+(86+rn()*528).toFixed(1)+'" cy="'+(316+rn()*120).toFixed(1)+'" r="'+(0.9+rn()*1.1).toFixed(2)+'"/>'}
  g+='<g class="grain" id="bmGrain">'+gr+'</g>';
  /* step 1: the lapping plate with its handle, worked across the top face */
  g+='<g id="bmLap"><path class="tool lD" d="M0 266H170V299H0Z"/><path class="tool lD" d="M85 266V216M60 216H110"/></g>';
  g+='<path id="bmFlat" class="flat" d="M76 297H624"/>';
  /* step 2: two guide rails (the far one as a line) and the carriage with its crossed-roller marks */
  g+='<path class="rail2 rD" d="M96 288H604V300H96Z"/><path class="rail2 rD" d="M96 283H604"/>';
  g+='<g id="bmCar"><path class="car cD" d="M280 222H470V288H280Z"/><path class="car cD" d="M294 276L308 262M308 276L294 262M442 276L456 262M456 276L442 262"/><path class="car cD" d="M280 246H470"/></g>';
  g+='<g id="bmPar"><path class="par" d="M96 276V264M104 276V264M596 276V264M604 276V264"/></g>';
  /* step 3: the magnet track of the linear motor, the cable chain and the controller on the floor */
  var mg='';for(i=0;i<26;i++){mg+='M'+(112+i*19)+' 291V297'}
  g+='<path id="bmMag" class="mag" d="'+mg+'"/>';
  g+='<path id="bmChain" class="chain" d="M470 234H580Q624 234 624 258V280"/>';
  g+='<g id="bmCtl"><path class="ctl tD" d="M648 380H750V470H648Z"/><path class="ctl tD" d="M662 400H736M662 416H708"/><path class="ctl tD" d="M630 320Q699 320 699 380"/></g>';
  g+='<g id="bmLed"><circle class="led" cx="666" cy="446" r="3.2"/><circle class="led" cx="682" cy="446" r="3.2"/></g>';
  /* step 4: the laser interferometer on its stand, the beam to the reflector on the carriage, the measurement protocol */
  g+='<g id="bmIfm"><path class="ifm iD" d="M8 236H62V266H8Z"/><path class="ifm iD" d="M35 266V470M15 470L35 436L55 470"/></g>';
  g+='<path id="bmRef" class="ifm" d="M280 244L266 252L280 260"/>';
  g+='<path id="bmBeam" class="beam" d="M62 252H266"/>';
  g+='<g id="bmSheet"><path class="sheet pD" d="M540 100H740V206H540Z"/><path class="sheet pD" d="M556 118H660M556 132H624"/><path class="grid pD" d="M556 152H724M556 184H724"/><path class="sheet pD" d="M556 194H724"/></g>';
  g+='<path id="bmCurve" class="curve" d="M556 170C574 160 586 178 604 168S636 158 652 170S690 180 724 166"/>';
  /* labels, per step, in the band above the scene: each >= 8px clear of every stroke (DR3) */
  function L(id,cl,a,b){return '<g id="'+id+'"><text class="t '+cl+'" x="20" y="'+(mob?40:36)+'">'+a+'</text><text class="t" x="20" y="'+(mob?72:60)+'">'+b+'</text></g>'}
  g+=mob?L("bmL1","s1","GRANIT, GELÄPPT","EBENHEIT ≤ 2 µm"):L("bmL1","s1","GRANIT, VON HAND GELÄPPT","EBENHEIT 2 µm ODER BESSER · BAUTEILE BIS 8 M UND 60 T");
  g+=mob?L("bmL2","s2","EXAKT PARALLEL","FÜHRUNG · SCHLITTEN"):L("bmL2","s2","FÜHRUNGSSYSTEME UND SCHLITTEN","EXAKT PARALLEL MONTIERT UND JUSTIERT");
  g+=mob?L("bmL3","s1","LINEARMOTOR","ETHERCAT-STEUERUNG"):L("bmL3","s1","LINEARMOTOR UND ETHERCAT-STEUERUNG","KURZE TAKTZEITEN, HOHE WIEDERHOLGENAUIGKEIT");
  g+=mob?L("bmL4","s2","INTERFEROMETER","MIT MESSPROTOKOLL"):L("bmL4","s2","LASER-INTERFEROMETER · AUTOKOLLIMATOR","JEDE LIEFERUNG MIT AUSFÜHRLICHEM MESSPROTOKOLL");
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="506">1 · GRANIT</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="506">2 · MONTAGE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="506">3 · ANTRIEB</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="506">4 · MESSUNG</text></g>';
  return g+'</svg>';
}
function scene(){return bmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),grain:$("#bmGrain",svg),lap:$("#bmLap",svg),lapP:dl(".lD"),flat:$("#bmFlat",svg),rail:dl(".rD"),car:$("#bmCar",svg),carP:dl(".cD"),par:$("#bmPar",svg),
    mag:$("#bmMag",svg),chain:$("#bmChain",svg),ctl:dl(".tD"),led:$("#bmLed",svg),ifm:dl(".iD"),ref:$("#bmRef",svg),beam:$("#bmBeam",svg),sheet:dl(".pD"),curve:$("#bmCurve",svg),
    L1:$("#bmL1",svg),L2:$("#bmL2",svg),L3:$("#bmL3",svg),L4:$("#bmL4",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var cl=E.curve.getTotalLength();E.curve.style.strokeDasharray=cl+" "+cl;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.grain,b*.9)}
    /* step 1: the lapping plate draws in and works across the top face, then leaves; the lapped face line stays */
    var s1=seg(p,.02,.12),out1=seg(p,.24,.3);
    draw(E.lapP,b*s1);
    var lx=265+185*Math.sin(seg(p,.06,.24)*Math.PI*2.5);
    E.lap.setAttribute("transform","translate("+lx.toFixed(1)+" "+(-60*out1).toFixed(1)+")");
    op(E.lap,b*(1-out1));
    op(E.flat,b*seg(p,.1,.2));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: rails, then the carriage, then the parallel marks */
    draw(E.rail,b*seg(p,.28,.38));
    draw(E.carP,b*seg(p,.34,.46));
    op(E.par,b*seg(p,.42,.48));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: magnet track, controller and cable; the carriage travels out and back */
    op(E.mag,b*seg(p,.52,.58));
    draw(E.ctl,b*seg(p,.53,.64));
    op(E.led,b*seg(p,.6,.66));
    var dx=-120*Math.sin(seg(p,.6,.74)*Math.PI)+70*seg(p,.82,.98);
    E.car.setAttribute("transform","translate("+dx.toFixed(1)+" 0)");
    E.chain.setAttribute("d","M"+(470+dx).toFixed(1)+" 234H580Q624 234 624 258V280");
    op(E.chain,b*seg(p,.56,.62));
    op(E.L3,b*seg(p,.56,.62)*(1-seg(p,.72,.75)));
    /* step 4: the interferometer, the reflector and beam riding with the carriage, the protocol and its error curve */
    draw(E.ifm,b*seg(p,.77,.85));
    E.ref.setAttribute("transform","translate("+dx.toFixed(1)+" 0)");op(E.ref,b*seg(p,.8,.84));
    E.beam.setAttribute("d","M62 252H"+(266+dx).toFixed(1));op(E.beam,b*seg(p,.82,.86));
    draw(E.sheet,b*seg(p,.8,.9));
    E.curve.style.strokeDashoffset=(cl*(1-b*seg(p,.86,.98))).toFixed(1);
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

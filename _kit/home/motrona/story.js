/* The story scene (BL/BY/DB): the DS230 certified safety speed monitor as described on motrona.com > Safety Speed Monitors,
   drawn as ONE schematic kept on screen for all three steps:
   Step 1 (Measure): an encoder on the drive shaft sends pulses over two channels to the DS230; the display reads the speed.
   Step 2 (Overspeed): the speed trace crosses the set limit; the forced-guided output relay opens the safety circuit.
   Step 3 (Standstill): the drive runs down; the trace falls to zero and the DS230 signals standstill.
   Schematic, not to scale. */
var SCW=760,SCH=520;
function mtScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* the drive: motor body with cooling fins, shaft, encoder disc */
  g+='<path class="sD" d="M40 320H160V400H40Z"/>';
  for(i=0;i<5;i++){g+='<path class="sD fn" d="M'+(56+i*22)+' 328V392"/>'}
  g+='<path class="sD" d="M160 356H196M160 364H196"/>';
  g+='<circle class="sD" cx="224" cy="360" r="28"/>';
  g+='<g id="enc">';for(i=0;i<12;i++){var an=i*Math.PI/6,x1=224+Math.cos(an)*14,y1=360+Math.sin(an)*14,x2=224+Math.cos(an)*23,y2=360+Math.sin(an)*23;g+='<path class="tk" d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'"/>'}g+='</g>';
  if(!mob){g+='<text class="t" x="52" y="432">DRIVE</text><text class="t" x="196" y="432">ENCODER</text>'}
  /* two channels from the encoder to the monitor */
  g+='<path class="ch" id="chA" d="M212 332V180H330"/><path class="ch" id="chB" d="M236 332V206H330"/>';
  if(!mob)g+='<text class="t" x="70" y="200">TWO CHANNELS</text>';
  /* the DS230 with its BG230 display */
  g+='<path class="ds" d="M330 110H450V290H330Z"/><path class="dsp" d="M344 126H436V198H344Z"/>';
  g+='<text class="rd" id="rd" x="390" y="164" text-anchor="middle">STOP</text><text class="ru" id="ru" x="390" y="186" text-anchor="middle">kHz</text>';
  g+='<path class="kb" d="M350 214H372V232H350ZM408 214H430V232H408ZM379 238H401V256H379Z"/>';
  g+='<circle class="led" id="led" cx="360" cy="274" r="4"/>';
  g+='<text class="t" x="356" y="320">DS230</text>';
  /* the safety relay and the safety circuit back to the drive */
  g+='<path class="sc" d="M450 200H500M560 200H620V470H140V400"/>';
  g+='<g id="ctc">'+(mob?'':'<text class="t" x="480" y="176">SAFETY RELAY</text>')+
     '<circle class="ct" cx="500" cy="200" r="4.5"/><circle class="ct" cx="560" cy="200" r="4.5"/>'+
     '<path class="cb" id="cbar" d="M500 200H560"/></g>';
  if(!mob)g+='<text class="t" x="632" y="340">SAFETY CIRCUIT</text>';
  /* speed over time, with the set limit */
  g+='<path class="sD ax" d="M480 40V150H730"/>';
  g+='<path class="lim" d="M480 70H730"/>';
  g+='<text class="t" x="'+(mob?666:684)+'" y="'+(mob?56:62)+'">LIMIT</text>';
  if(!mob)g+='<text class="t" x="488" y="30">SPEED</text>';
  g+='<path class="tr" id="trc" d="M480 150C492 150 500 102 520 102C540 102 556 102 572 100C590 98 598 60 616 56L626 56C644 58 660 140 684 150L730 150"/>';
  g+='<circle class="trp" id="trp" cx="604" cy="70" r="5"/>';
  /* status, top left */
  g+='<g id="st1"><circle class="dot g" cx="44" cy="70" r="6"/><text class="a" x="60" y="75">MONITORING</text></g>';
  g+='<g id="st2"><circle class="dot r" cx="44" cy="70" r="6"/><text class="a" x="60" y="75">OVERSPEED</text></g>';
  g+='<g id="st3"><circle class="dot g" cx="44" cy="70" r="6"/><text class="a" x="60" y="75">STANDSTILL</text></g>';
  /* step captions */
  var cx=mob?400:480;
  g+='<g id="lb1"><text class="a" x="'+cx+'" y="505">1 · MEASURE</text></g>';
  g+='<g id="lb2"><text class="a" x="'+cx+'" y="505">2 · OVERSPEED</text></g>';
  g+='<g id="lb3"><text class="a" x="'+cx+'" y="505">3 · STANDSTILL</text></g>';
  return g+'</svg>';
}
function scene(){return mtScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return svg.querySelector(s)};
  var E={base:dl(".sD"),chs:dl(".ch"),sc:dl(".sc"),texts:$$("text.t,text.ru",svg).filter(function(t){return !t.closest("g[id]")}),solid:$$(".ds,.dsp,.kb,.led,#enc,.lim,#rd",svg),
    trc:q("#trc"),trp:q("#trp"),enc:q("#enc"),rd:q("#rd"),led:q("#led"),ctc:q("#ctc"),cbar:q("#cbar"),
    s1:q("#st1"),s2:q("#st2"),s3:q("#st3"),l1:q("#lb1"),l2:q("#lb2"),l3:q("#lb3")};
  var TL=E.trc.getTotalLength();E.trc.style.strokeDasharray=(TL+2)+" "+(TL+2);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,s){if(el)el.setAttribute("transform",s)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.texts.forEach(function(e){op(e,b)});E.solid.forEach(function(e){op(e,b)});op(E.ctc,b);draw(E.sc,b)}
    /* step 1: the two channels draw from the encoder to the monitor */
    draw(E.chs,b*seg(p,.02,.14));
    /* the speed trace is drawn with the scroll: running (to ~.3), overspeed past the limit (.38-.5), run-down to zero (.66-.9) */
    var td=.34*seg(p,.04,.3)+.24*seg(p,.38,.5)+.42*seg(p,.66,.9);
    E.trc.style.strokeDashoffset=((TL+2)*(1-td)).toFixed(1);op(E.trc,b);
    /* the trip: the relay opens where the trace crosses the limit and stays open */
    var trip=seg(p,.47,.51);
    op(E.trp,b*trip);
    tr(E.cbar,"rotate("+(28*trip).toFixed(2)+" 500 200)");
    E.led.style.fill=trip>.5?"#e0574b":"#6fd38a";
    /* the display reads the speed; the encoder turns with it */
    var sp=1.234*seg(p,.04,.3)+.246*seg(p,.38,.5)-1.48*seg(p,.66,.9);sp=Math.max(0,sp);
    E.rd.textContent=sp<.0005?"STOP":sp.toFixed(3);var ru=svg.querySelector("#ru");if(ru)ru.style.visibility=sp<.0005?"hidden":"visible";
    var ang=(p*2200*(.15+.85*Math.min(1,sp/1.234)))%360;tr(E.enc,"rotate("+ang.toFixed(1)+" 224 360)");
    op(E.s1,b*seg(p,.14,.2)*(1-seg(p,.46,.5)));op(E.s2,b*seg(p,.48,.52)*(1-seg(p,.86,.9)));op(E.s3,b*seg(p,.9,.94));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.64,.69)));op(E.l3,b*seg(p,.68,.74));
  };
}

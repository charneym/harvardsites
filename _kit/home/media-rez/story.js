/* The story scene (BL/BY/DB/CX): one bedside at night, drawn as ONE continuous engraved scene that stays on screen for all
   three steps. A window with the moon, a bed with its pillow and blanket, and a nightstand holding a phone and a smart
   speaker, with the router on the shelf below. Step 1 the room engraves in and the phone glows: a bright screen at
   bedtime. Step 2 the phone goes dark, the lamp light softens and the speaker talks (voice arcs). Step 3 the moon moves on
   and a plain two-line chart appears above the bed: the Insomnia Severity Index from baseline to week six, program vs
   control, using only the published endpoints (JAMA Network Open, 2024: -8.4 vs -2.6; no invented weekly values).
   Sources: NIH RePORTER 11348878 (More SHEEP: smart speaker, custom lighting, smart router reporting bedtime screen use). */
var SCW=760,SCH=520,NX=120,NT=318,SPX=228,SPY=290,PHX=150,CKX=566,CKY=140;
function bedScene(o){
  var g='',i,f=function(n){return (+n).toFixed(1)};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M18 24H120M740 24H638M18 486H120M740 486H638"/>';
  g+='<text class="t" x="18" y="14">BEDSIDE · NIGHT</text><text class="t" x="742" y="14" text-anchor="end">MORE SHEEP</text></g>';
  /* the room: window and moon, floor line, bed, nightstand */
  g+='<g id="scRoom">';
  g+='<path class="vw sD" d="M44 52H226V214H44Z"/><path class="ec sD" d="M135 52V214M44 133H226"/>';
  g+='<path class="vw sD" d="M30 470H730"/>';
  g+='<path class="vw sD" d="M330 470V250Q330 236 344 236H372Q386 236 386 250V350"/>';
  g+='<path class="vw sD" d="M330 350H730V404H330M352 404V470M708 404V470"/>';
  g+='<path class="ec sD" d="M340 350Q340 330 360 326H470Q492 330 488 350"/>';
  g+='<path class="vw sD" d="M470 352Q520 300 610 312Q690 322 728 350"/><path class="ec sD" d="M500 340Q560 318 640 326M520 350Q590 334 700 342"/>';
  g+='<path class="vw sD" d="M'+(NX-12)+' '+NT+'H'+(NX+186)+'V'+(NT+12)+'H'+(NX-12)+'ZM'+(NX)+' '+(NT+12)+'V470M'+(NX+174)+' '+(NT+12)+'V470M'+NX+' 408H'+(NX+174)+'"/>';
  g+='</g>';
  g+='<g id="scMoon"><circle class="moon" cx="182" cy="96" r="15"/></g>';
  /* lamp light: a soft pool on the wall above the nightstand */
  g+='<ellipse class="glow" id="glow" cx="'+(NX+90)+'" cy="'+(NT-70)+'" rx="150" ry="110"/>';
  /* the phone, flat on the nightstand, with its glare */
  g+='<g id="scPhone"><path class="ph sD" d="M'+(PHX-30)+' '+(NT-3)+'L'+(PHX-24)+' '+(NT-9)+'H'+(PHX+22)+'L'+(PHX+28)+' '+(NT-3)+'Z"/>';
  var rays='';for(i=-3;i<=3;i++){var a=-Math.PI/2+i*.28,R=46+Math.abs(i)%2*14;rays+='M'+f(PHX+Math.cos(a)*16)+' '+f(NT-14+Math.sin(a)*16)+'L'+f(PHX+Math.cos(a)*R)+' '+f(NT-14+Math.sin(a)*R);}
  g+='<path class="ray" id="rays" d="'+rays+'"/></g>';
  /* the smart speaker: a sphere with its grille bands */
  g+='<g id="scSpk"><circle class="sp sD" cx="'+SPX+'" cy="'+SPY+'" r="26"/>';
  g+='<path class="spb sD" d="M'+(SPX-25)+' '+(SPY-5)+'H'+(SPX+25)+'M'+(SPX-24)+' '+(SPY+5)+'H'+(SPX+24)+'M'+(SPX-20)+' '+(SPY+14)+'H'+(SPX+20)+'"/>';
  g+='<ellipse class="spt sD" cx="'+SPX+'" cy="'+(SPY-19)+'" rx="13" ry="3.4"/></g>';
  g+='<g id="scVoice">';for(i=0;i<3;i++){g+='<path class="vc" d="M'+(SPX+36+i*16)+' '+(SPY-22-i*8)+'Q'+(SPX+46+i*20)+' '+SPY+' '+(SPX+36+i*16)+' '+(SPY+22+i*8)+'"/>';}g+='</g>';
  /* the router on the shelf */
  g+='<g id="scRtr"><path class="ec sD" d="M'+(NX+52)+' 408V384H'+(NX+124)+'V408M'+(NX+66)+' 384L'+(NX+58)+' 360M'+(NX+110)+' 384L'+(NX+118)+' 360"/><circle class="led" cx="'+(NX+88)+'" cy="396" r="2.4"/></g>';
  /* a wall clock above the bed: lying awake in the small hours */
  g+='<g id="scClock"><circle class="vw sD" cx="'+CKX+'" cy="'+CKY+'" r="58"/><circle class="ec sD" cx="'+CKX+'" cy="'+CKY+'" r="50"/>';
  var tk='';for(i=0;i<12;i++){var ta=i*Math.PI/6,r0=i%3?44:40;tk+='M'+f(CKX+Math.sin(ta)*r0)+' '+f(CKY-Math.cos(ta)*r0)+'L'+f(CKX+Math.sin(ta)*48)+' '+f(CKY-Math.cos(ta)*48);}
  g+='<path class="ec sD" d="'+tk+'"/><path class="hh" id="hh" d="M0 0V-24"/><path class="mh2" id="mh2" d="M0 0V-38"/><circle class="pole" cx="'+CKX+'" cy="'+CKY+'" r="3"/></g>';
  /* the six-week chart above the bed: endpoints only */
  var CX0=430,CX1=700,CY0=74,CY1=206;
  g+='<g id="scChart"><path class="ax sD" d="M'+CX0+' '+CY0+'V'+CY1+'H'+CX1+'"/>';
  g+='<path class="ln ctl" d="M'+CX0+' 96L'+CX1+' 124"/><path class="ln prg" d="M'+CX0+' 96L'+CX1+' 186"/>';
  g+='<circle class="pt" cx="'+CX0+'" cy="96" r="3"/><circle class="pt ctl" cx="'+CX1+'" cy="124" r="3"/><circle class="pt prg" cx="'+CX1+'" cy="186" r="3.4"/>';
  g+='<text class="t" x="'+CX0+'" y="'+(CY1+20)+'">BASELINE</text><text class="t" x="'+CX1+'" y="'+(CY1+20)+'" text-anchor="end">WEEK 6</text>';
  g+='<text class="t" x="'+(CX0+8)+'" y="'+(CY0-4)+'">INSOMNIA SEVERITY</text>';
  g+='<text class="c2" x="'+(CX1-8)+'" y="108" text-anchor="end">CONTROL −2.6</text><text class="a" x="'+(CX1-8)+'" y="199" text-anchor="end">PROGRAM −8.4</text></g>';
  g+='<g id="lb1"><text class="a" x="18" y="508">A BRIGHT SCREEN AT BEDTIME</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="508">SPOKEN CBT-I · THE SCREEN STAYS DARK</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="508">SIX WEEKS · RANDOMIZED TRIAL, 2024</text></g>';
  return g+'</svg>';
}
function scene(){return bedScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),room:dl("#scRoom .sD"),ph:dl("#scPhone .sD"),spk:dl("#scSpk .sD"),rtr:dl("#scRtr .sD"),
    led:$("#scRtr .led",svg),rays:$("#rays",svg),glow:$("#glow",svg),moon:$("#scMoon .moon",svg),vc:$$("#scVoice .vc",svg),
    ax:dl("#scChart .ax"),ck:dl("#scClock .sD"),ckg:$("#scClock",svg),hh:$("#hh",svg),mh:$("#mh2",svg),ctl:$("#scChart .ln.ctl",svg),prg:$("#scChart .ln.prg",svg),ctxt:$$("#scChart text, #scChart .pt",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.18),dark=seg(p,.3,.42),talk=seg(p,.36,.66),late=seg(p,.66,.8),chart=seg(p,.7,.9);
    var g0=Math.min(1,Math.max(b*b,grow*1.15));
    draw(E.room,g0);draw(E.ph,g0);draw(E.spk,g0);draw(E.rtr,g0);
    op(E.led,b*g0*(.4+.6*talk));
    op(E.rays,b*g0*(1-dark));
    op(E.glow,b*g0*(.55-.25*dark-.2*late));
    var ph=(p*9)%1;E.vc.forEach(function(el,i){var k=(ph+i/3)%1;op(el,b*talk*(1-late)*(1-k)*.95)});
    if(E.moon){E.moon.setAttribute("cx",(182-110*late).toFixed(1));E.moon.setAttribute("cy",(96+50*late).toFixed(1));op(E.moon,b*g0)}
    /* the clock: 1:40 a.m. at the start, the hands run on through the night, then it gives way to the chart */
    draw(E.ck,g0);op(E.ckg,b*(1-seg(p,.64,.72)));
    var mins=100+p*170;if(E.hh){E.hh.setAttribute("transform","translate("+CKX+" "+CKY+") rotate("+(mins/720*360).toFixed(1)+")");E.mh.setAttribute("transform","translate("+CKX+" "+CKY+") rotate("+((mins%60)/60*360).toFixed(1)+")");op(E.hh,b*g0);op(E.mh,b*g0)}
    draw(E.ax,b*chart);
    var ln=b*seg(p,.76,.94);op(E.ctl,ln);op(E.prg,ln);
    E.ctxt.forEach(function(el){op(el,b*seg(p,.8,.94))});
    op(E.l1,b*seg(p,.06,.16)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.88));
  };
}

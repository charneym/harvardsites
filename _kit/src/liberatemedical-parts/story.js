/*<R:story>*//* The story scene (DB/BL/BY/BX): VentFree's own set-up, after the firm's infographic ("VentFree can be applied during
   invasive mechanical ventilation"): ONE calm fine-line picture that fills the frame and stays on screen: the patient's head
   and torso, the endotracheal tube and the ventilator circuit to the ventilator, the VentFree control unit, and the cable
   runs between them. Frame 0 is complete: patient, tube, ventilator and control unit.
   Step 1 (sense): the flow sensor lights between the tube and the Y-piece; its cable draws to the control unit.
   Step 2 (time): the control unit's screen shows the flow trace; exhalation segments light up as stimulation windows.
   Step 3 (stimulate): the electrode cables draw to the two abdominal electrodes; the electrodes fill and contraction arcs show.
   Step 4 (repeat): the session bar on the unit fills (30 minutes, twice a day). Driven by scrubbed progress.
   No dash draws on non-scaling strokes (DR4; nssfix.js is inlined too). Labels keep >=8px clear of every stroke (DR3). */
var LM_TORSO="M312 178C276 186 222 194 206 232C196 300 204 392 216 486M348 178C384 186 438 194 454 232C464 300 456 392 444 486";
function lmF(ph){return ph<.35?Math.sin(ph/.35*Math.PI):-Math.sin((ph-.35)/.65*Math.PI)*.75*Math.exp(-(ph-.35)*1.2)}
function lmPath(u0,u1,n){var d="",x0=60,w=100,y=288;for(var i=0;i<=n;i++){var u=u0+(u1-u0)*i/n,ph=(u*2)%1;if(u>=1)ph=1;d+=(i?"L":"M")+(x0+u*w).toFixed(1)+" "+(y-lmF(ph)*13).toFixed(1)}return d}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'24 30 708 572':'0 22 760 596')+'" aria-hidden="true"><g id="scG">';
  /* patient: head, neck, shoulders and torso */
  g+='<circle class="wl sD" cx="330" cy="124" r="36"/><path class="wl sD" d="M316 159V178M344 159V178"/><path class="wl sD" d="'+LM_TORSO+'"/>';
  g+='<path class="wo sD" d="M262 250C290 262 370 262 398 250"/><circle class="wo" cx="330" cy="372" r="2.4"/>';
  /* endotracheal tube to the Y-piece, the circuit to the ventilator */
  g+='<path class="wl sD" d="M334 140C356 120 384 104 408 98"/><path class="wl sD" d="M436 94H462"/><path class="wl sD" d="M462 94C500 84 548 78 590 90"/><path class="wl sD" d="M462 94C500 112 548 150 590 166"/>';
  g+='<g id="vent"><rect class="wl sD" x="590" y="56" width="118" height="150"/><rect class="wo sD" x="602" y="68" width="94" height="54"/><path class="wo sD" d="M608 106L622 96L634 108L648 88L662 104L676 94L690 100"/><circle class="wo sD" cx="649" cy="164" r="12"/></g>';
  /* the VentFree control unit */
  g+='<g id="unit"><rect class="wl sD" x="44" y="250" width="132" height="96"/><rect class="scr" x="54" y="260" width="112" height="56"/><circle class="wo sD" cx="66" cy="332" r="5"/><circle class="wo sD" cx="154" cy="332" r="5"/></g>';
  /* step 1: the flow sensor and its cable to the unit (down the right, along the foot, up to the unit) */
  g+='<rect class="sen" id="sen" x="408" y="88" width="28" height="16"/>';
  g+='<path class="cb sF" d="M422 104C424 150 548 170 556 220V536C556 548 548 556 536 556H120C108 556 100 548 100 536V346"/>';
  /* step 2: the flow trace on the unit's screen, exhalation windows lit */
  g+='<path class="wv sW" d="'+lmPath(0,1,120)+'"/><path class="ex" d="'+lmPath(.175,.5,30)+'"/><path class="ex" d="'+lmPath(.675,1,30)+'"/>';
  /* step 3: the electrode cables, the two abdominal electrodes and contraction arcs */
  g+='<path class="cb sE" d="M282 452V512C282 524 274 530 262 530H132C124 530 120 526 120 518V346"/><path class="cb sE" d="M378 452V500C378 512 370 518 358 518H152C144 518 140 514 140 506V346"/>';
  g+='<g id="pads"><rect class="pad" x="260" y="388" width="44" height="64"/><rect class="pad" x="356" y="388" width="44" height="64"/></g>';
  g+='<g id="arcs"><path class="arc" d="M244 400C236 412 236 428 244 440"/><path class="arc" d="M232 392C220 410 220 430 232 448"/><path class="arc" d="M416 400C424 412 424 428 416 440"/><path class="arc" d="M428 392C440 410 440 430 428 448"/></g>';
  /* step 4: the session bar on the unit */
  g+='<rect class="bar0" x="60" y="304" width="100" height="5"/><rect class="bar1" id="bar1" x="60" y="304" width="0" height="5"/>';
  g+='</g>';
  if(!mob){g+='<g id="lCh"><text class="t" x="590" y="230">VENTILATOR</text><text class="t" x="44" y="236">VENTFREE UNIT</text></g>'+
    '<g id="lSe"><path class="ld" d="M422 84V56"/><text class="t" x="380" y="46">FLOW SENSOR</text></g>'+
    '<g id="lEl"><text class="t" x="466" y="424">ELECTRODES</text></g>'}
  else{g+='<g id="lCh"></g><g id="lSe"></g><g id="lEl"></g>'}
  var ly=mob?596:610,lx=mob?32:24;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FLOW SENSED, EVERY BREATH':'THE FLOW SENSOR READS EVERY BREATH')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TIMED TO EXHALATION':'STIMULATION TIMED TO EACH EXHALATION')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ABDOMINAL MUSCLES CONTRACT':'THE ABDOMINAL WALL MUSCLES CONTRACT')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'30 MIN, TWICE A DAY':'30 MINUTES, TWICE A DAY, FROM DAY ONE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),sf:dl(".sF"),sw:dl(".sW"),se:dl(".sE"),
    sen:$("#sen",svg),ex:$$(".ex",svg),pads:$$("#pads .pad",svg),arcs:$$("#arcs .arc",svg),bar:$("#bar1",svg),
    lCh:$("#lCh",svg),lSe:$("#lSe",svg),lEl:$("#lEl",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.lCh,b);
    /* step 1: the sensor lights, its cable draws to the unit */
    var s1=sm(seg(p,.02,.1));op(E.sen,b*s1);op(E.lSe,b*s1);draw(E.sf,b*sm(seg(p,.06,.22)));
    /* step 2: the flow trace draws on the screen, then the exhalation windows light */
    draw(E.sw,b*sm(seg(p,.27,.38)));var x2=sm(seg(p,.38,.46));E.ex.forEach(function(e){op(e,b*x2)});
    /* step 3: electrode cables, electrodes, contraction arcs */
    draw(E.se,b*sm(seg(p,.52,.64)));var pd=sm(seg(p,.6,.66));E.pads.forEach(function(e){op(e,b*pd)});op(E.lEl,b*pd);
    var ar=sm(seg(p,.64,.72));E.arcs.forEach(function(e){op(e,b*ar)});
    /* step 4: the session bar fills */
    E.bar.setAttribute("width",(100*sm(seg(p,.78,.95))).toFixed(1));
    op(E.l1,b*(1-seg(p,.2,.25)));op(E.l2,b*seg(p,.28,.34)*(1-seg(p,.45,.5)));op(E.l3,b*seg(p,.53,.59)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.86));
  };
}/*</R:story>*/

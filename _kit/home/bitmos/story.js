/* the story scene (BL/BY/DB): ONE measuring chain drawn as an engraved elevation and kept on screen for all three steps:
   a fingertip in a clip sensor (emitter above, detector below), its cable to the sat 805 monitor (screen and rotary knob),
   and the monitor's remote-alarm line to the nurse call.
   Step 1 (light): red and infrared light pass from the emitter through the fingertip to the detector.
   Step 2 (pulse): the plethysmogram draws across the monitor screen, with the SpO2 and pulse-rate read-outs.
   Step 3 (alarm): the alarm rings at the monitor and travels down the Fernalarm line to the nurse call.
   Sources: bitmos.de sat 805 and sat 801+ pages (Masimo SET, Plethysmogramm, Fernalarm Schwesternruf, analoge Schnittstelle,
   Polysomnographie). Schematic. Driven by the scrubbed story progress. */
function scene(){
  var mob=MOBILE(),g='';
  /* parts are drawn in one coordinate space and placed per layout: desktop runs left to right (sensor, monitor lower right,
     nurse call upper right); phones stack the sensor above the monitor so the drawing fills the frame width (DB) */
  var M=mob?[-260,150]:[0,90],B=mob?[-270,170]:[0,0];
  function tr(p){return ' transform="translate('+p[0]+' '+p[1]+')"'}
  var mx=M[0],my=M[1],bx=B[0],by=B[1];
  var CAB=mob?'M224 300C262 300 262 400 '+(330+mx+110)+' '+(306+my):'M224 300C270 300 280 '+(362+my)+' '+(330+mx)+' '+(362+my);
  var ALM='M'+(640+mx)+' '+(350+my)+'H'+(676+bx)+'V'+(272+by);
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'20 160 420 460':'20 150 700 400')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="btR" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff7b72"/><stop offset="1" stop-color="#c73734" stop-opacity=".2"/></linearGradient>'+
     '<linearGradient id="btI" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cdeaf2"/><stop offset="1" stop-color="#5fb4cc" stop-opacity=".2"/></linearGradient></defs>';
  g+='<g id="scBase">';
  /* fingertip in the clip sensor (emitter above, detector below, hinge at the back) */
  g+='<path class="sD fg" d="M30 224H168C194 224 210 236 210 251C210 266 194 278 168 278H30"/>';
  g+='<path class="sD fgn" d="M176 226C190 228 200 236 202 246"/>';
  g+='<path class="sD clp" d="M100 222V204C100 198 104 194 110 194H214C220 194 224 198 224 204V222Z"/>';
  g+='<path class="sD clp" d="M100 280V298C100 304 104 308 110 308H214C220 308 224 304 224 298V280Z"/>';
  g+='<path class="sD clp" d="M100 204C84 214 84 288 100 298"/>';
  g+='<path class="sD em" d="M150 222V214H170V222"/><path class="sD em" d="M150 280V288H170V280"/>';
  g+='<path class="sD cb" d="'+CAB+'"/>';
  g+='<g'+tr(M)+'><path class="sD mon" d="M346 306H624C634 306 640 312 640 322V404C640 414 634 420 624 420H346C336 420 330 414 330 404V322C330 312 336 306 346 306Z"/>'+
     '<path class="sD scr" d="M348 322H556V404H348Z"/><circle class="sD kn" cx="598" cy="363" r="22"/><circle class="sD kn2" cx="598" cy="363" r="15"/>'+
     '<text class="a" x="485" y="446" text-anchor="middle">SAT 805</text></g>';
  g+='<text class="a" x="160" y="176" text-anchor="middle">SENSOR</text>';
  g+='</g>';
  /* step 1: red and infrared light through the fingertip */
  g+='<g id="st1"><path class="lr" d="M156 224V278"/><path class="li" d="M164 224V278"/>'+
     '<path class="sD1 wv" d="M156 226C152 238 160 246 156 256C152 266 160 272 156 278"/><path class="sD1 wv2" d="M164 226C168 238 160 246 164 256C168 266 160 272 164 278"/>'+
     '<text class="a" x="240" y="214">ROT + INFRAROT</text><text class="a" x="160" y="334" text-anchor="middle">DETEKTOR</text></g>';
  /* step 2: the plethysmogram and the read-outs on the monitor */
  var P='M356 392',x,i;for(i=0;i<5;i++){x=356+i*28;P+='L'+(x+6)+' 392C'+(x+9)+' 392 '+(x+10)+' 340 '+(x+13)+' 340C'+(x+16)+' 340 '+(x+16)+' 372 '+(x+19)+' 368C'+(x+21)+' 366 '+(x+23)+' 380 '+(x+28)+' 392'}
  g+='<g id="st2"><g'+tr(M)+'><path class="sD2 pl" d="'+P+'"/>'+
     '<text class="rd" x="526" y="356" text-anchor="middle">98</text><text class="rd2" x="526" y="392" text-anchor="middle">62</text>'+
     '<text class="a" x="485" y="292" text-anchor="middle">SpO₂ · PULS · PLETH</text></g></g>';
  /* step 3: the alarm, at the monitor and on the nurse call */
  g+='<g id="st3"><path class="sD3 al" d="'+ALM+'"/>'+
     '<g'+tr(B)+'><path class="sD3 bl" d="M664 260C664 244 670 236 676 236C682 236 688 244 688 260L692 266H660Z"/><path class="sD3 bl" d="M672 270C672 274 680 274 680 270"/>'+
     '<path class="sD3 rg" d="M700 238C706 244 706 256 700 262M652 238C646 244 646 256 652 262"/>'+
     '<text class="a" x="'+(mob?706:700)+'" y="212" text-anchor="end">SCHWESTERNRUF</text></g>'+
     '<g'+tr(M)+'><path class="sD3 rg" d="M574 340C566 348 566 378 574 386M622 340C630 348 630 378 622 386"/></g></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),
    c1:dl("#st1 .sD1"),c2:dl("#st2 .sD2"),c3:dl("#st3 .sD3")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the light stays on through the pulse (the measurement continues), then the alarm joins */
    var i1=seg(p,0,.1),i2=seg(p,.35,.5),i3=seg(p,.68,.86);
    op(E.s1,b*i1);draw(E.c1,i1);
    op(E.s2,b*i2);draw(E.c2,i2);
    op(E.s3,b*Math.min(1,i3*6));draw(E.c3,i3);
  };
}

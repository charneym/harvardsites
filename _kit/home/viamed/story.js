/* the story scene (BL/BY/DB): ONE Viamed finger sensor drawn as an engraved technical plate and kept on screen for all three
   steps: a fingertip held between the two jaws of a clip sensor (emitter in the upper jaw, detector in the lower), its lead
   running to a monitor panel on the right.
   Step 1 (light): the emitter lights; red and infrared beams cross the fingertip to the detector.
   Step 2 (pulse): the detector's signal runs to the panel and the plethysmograph wave draws in, beat by beat.
   Step 3 (saturation): the red and infrared pulse amplitudes stand side by side and the SpO2 reading appears.
   Sources: viamed.online SMARTsat OEM page (signal processing, calibration 60–100% SpO2 against CO-oximeter references) and
   the general principle of pulse oximetry. Schematic. Driven by the scrubbed story progress. */
function ppgPath(x0,x1,yb,amp,beats){var f=function(n){return n.toFixed(1)},d='',n=240,i;
  for(i=0;i<=n;i++){var u=i/n,ph=(u*beats)%1,y;
    if(ph<.16)y=Math.pow(ph/.16,1.6);
    else if(ph<.42)y=1-(ph-.16)/.26*.62;
    else if(ph<.5)y=.38+Math.sin((ph-.42)/.08*Math.PI)*.1;
    else y=.38*(1-(ph-.5)/.5);
    d+=(i?'L':'M')+f(x0+(x1-x0)*u)+' '+f(yb-amp*y)}
  return d}
var VJ1='M150 226C150 182 190 166 240 166H362C402 166 424 190 424 220V236H396C388 222 372 212 352 210H222C192 210 172 218 160 230Z';
var VJ2='M150 346C150 390 190 406 240 406H362C402 406 424 382 424 352V336H396C388 350 372 360 352 362H222C192 362 172 354 160 342Z';
function scene(){
  var mob=MOBILE(),g='';
  /* phones: the monitor panel becomes a wide, short strip under the sensor (wave left, reading right) so the plate fills the width (DB) */
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'14 118 436 540':'14 70 730 420')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="vmJaw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a3550"/><stop offset="1" stop-color="#0c1c2c"/></linearGradient>'+
     '<radialGradient id="vmGlowR"><stop offset="0" stop-color="#ff6b6b" stop-opacity=".55"/><stop offset="1" stop-color="#ff6b6b" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="vmGlowI"><stop offset="0" stop-color="#a48bff" stop-opacity=".5"/><stop offset="1" stop-color="#a48bff" stop-opacity="0"/></radialGradient></defs>';
  /* base plate: finger, nail, bone, the two jaws with hinge and lead, the emitter and detector windows, the monitor panel */
  g+='<g id="scBase">';
  g+='<path class="jaw" d="'+VJ1+'"/><path class="jaw" d="'+VJ2+'"/>';
  g+='<path class="sD jedge" d="'+VJ1+'"/><path class="sD jedge" d="'+VJ2+'"/>';
  g+='<path class="sD hinge" d="M156 232C124 252 124 320 156 340"/>';
  g+='<path class="sD lead" d="M150 372C112 398 74 402 30 396"/>';
  g+='<path class="sD fing" d="M30 240C120 234 228 226 318 228C372 230 398 258 398 286C398 316 372 344 318 344C228 346 120 340 30 334"/>';
  g+='<path class="sD nail" d="M300 229C324 220 352 222 374 236"/><path class="sD gd" d="M304 238C328 233 350 236 368 246"/>';
  g+='<path class="sD gd" d="M226 286C226 274 262 268 306 270C346 272 362 280 362 287C362 296 346 302 306 303C262 304 226 298 226 286Z"/>';
  g+='<path class="sD win" d="M280 210H322V218H280Z"/><path class="sD win" d="M280 354H322V362H280Z"/>';
  if(mob)g+='<path class="sD panel" d="M30 452H444V642H30Z"/><path class="sD gd" d="M252 468V626"/><text class="a" x="44" y="478">PLETH</text>';
  else g+='<path class="sD panel" d="M476 116H734V470H476Z"/><path class="sD gd" d="M490 262H720"/><text class="a" x="490" y="140">PLETH</text>';
  g+='<text class="a" x="300" y="150" text-anchor="middle">EMITTER</text>';
  g+='<text class="a" x="'+(mob?236:300)+'" y="434" text-anchor="middle">DETECTOR</text>';
  g+='</g>';
  /* step 1: light, red and infrared, through the fingertip */
  g+='<g id="st1"><circle cx="292" cy="216" r="22" fill="url(#vmGlowR)"/><circle cx="310" cy="216" r="22" fill="url(#vmGlowI)"/>'+
     '<circle class="ledr" cx="292" cy="214" r="3.4"/><circle class="ledi" cx="310" cy="214" r="3.4"/>'+
     '<path class="sD1 rayr" d="M292 220L286 354M292 220L292 354M292 220L298 354"/>'+
     '<path class="sD1 rayi" d="M310 220L304 354M310 220L310 354M310 220L316 354"/>'+
     '<text class="a ar" x="'+(mob?30:40)+'" y="'+(mob?150:196)+'">RED</text><text class="a ai" x="'+(mob?30:40)+'" y="'+(mob?128:176)+'">INFRARED</text></g>';
  /* step 2: the signal runs to the panel; the pleth wave draws beat by beat */
  g+='<g id="st2"><path class="sD2 sig" d="'+(mob?'M330 406C336 432 380 438 396 452':'M340 406C352 446 420 452 476 404')+'"/>'+
     (mob?'<path class="sD2 wave" d="'+ppgPath(44,238,612,92,3)+'"/><text class="a" x="238" y="478" text-anchor="end">75 BPM</text>':
      '<path class="sD2 wave" d="'+ppgPath(492,718,240,82,3)+'"/><text class="a" x="720" y="140" text-anchor="end">75 BPM</text>')+'</g>';
  /* step 3: red and infrared pulse amplitudes and the SpO2 reading */
  if(mob)g+='<g id="st3"><text class="a" x="266" y="478">SPO2</text><text class="big" x="264" y="572">96<tspan class="pc2" dx="6">%</tspan></text>'+
     '<path class="sD3 barr" d="M400 604V574"/><path class="sD3 bari" d="M430 604V540"/>'+
     '<text class="a" x="400" y="628" text-anchor="middle">R</text><text class="a" x="430" y="628" text-anchor="middle">IR</text>'+
     '<text class="a" x="266" y="628">60–100%</text></g>';
  else g+='<g id="st3"><text class="a" x="490" y="296">SPO2</text><text class="big" x="488" y="392">96<tspan class="pc2" dx="6">%</tspan></text>'+
     '<path class="sD3 barr" d="M650 440V392"/><path class="sD3 bari" d="M690 440V352"/>'+
     '<text class="a" x="650" y="458" text-anchor="middle">R</text><text class="a" x="690" y="458" text-anchor="middle">IR</text>'+
     '<text class="a" x="490" y="458">60–100% CAL.</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .jaw",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),
    c1:dl("#st1 .sD1"),c2:dl("#st2 .sD2"),c3:dl("#st3 .sD3")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var i1=seg(p,0,.1),i2=seg(p,.35,.5),i3=seg(p,.68,.82);
    op(E.s1,b*i1);draw(E.c1,i1);
    op(E.s2,b*i2);draw(E.c2,i2);
    op(E.s3,b*Math.min(1,i3*4));draw(E.c3,i3);
  };
}

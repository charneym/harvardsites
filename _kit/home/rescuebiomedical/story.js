/* the story scene (BL/BY/DB): ONE engraved drawing kept on screen throughout: the A2D2 worn on a forearm (side elevation:
   the case on top, the strap around the wrist, the back plate with its electrode pads against the skin underneath) and the
   wearer's breathing drawn as a trace above it. Each step adds one part, as rescuebiomedical.com and the NIH abstracts
   describe A2D2: opioid-induced respiratory depression (the trace slows and flattens); detection by the wearable; naloxone
   from the needle-free injector, and breathing restored; emergency contacts alerted. Proportions and the trace are schematic. */
function scene(){
  var mob=MOBILE(),TY=mob?82:48,B=176;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"30 30 740 500":"0 0 800 560")+'" aria-hidden="true">';
  /* breathing trace: normal, then slower and shallower, then flat (x 70-470), baseline y B */
  var tr='',ph=0,A,f,y,x;
  for(x=70;x<=470;x+=2){A=x<220?40:40*Math.pow(Math.max(0,1-(x-220)/230),1.6);f=x<220?.075:.075*(1-.5*Math.min(1,(x-220)/230));ph+=f*2;y=B-A*Math.sin(ph);tr+=(x===70?'M':'L')+x+' '+y.toFixed(1)}
  var rc='',ph2=0;for(x=522;x<=730;x+=2){A=40*Math.min(1,(x-520)/70);ph2+=.075*2;y=B-A*Math.sin(ph2);rc+='L'+x+' '+y.toFixed(1)}
  /* forearm and hand in side elevation, the wrist under the device */
  var arm='M30 330C170 322 330 318 480 322C580 325 680 336 770 350'+
          'M30 478C170 486 330 488 480 482C580 478 680 468 770 456';
  var hand='M650 340C664 326 690 318 716 322M646 460C668 476 700 484 730 480M716 322C738 324 756 332 770 342M730 480C752 476 766 466 772 456';
  var cnt='M60 352C190 346 330 343 470 346M60 456C190 462 330 464 470 459M520 344C600 348 670 356 740 368';
  var hat='';for(x=70;x<=600;x+=12){var yb=478+8*Math.sin((x-30)/730*Math.PI)-((x>480)?(x-480)*.15:0);hat+='M'+x+' '+(yb-4).toFixed(1)+'L'+(x+7)+' '+(yb-15).toFixed(1)}
  var cse='M236 262H372C382 262 388 268 388 278V306C388 314 382 320 372 320H236C226 320 220 314 220 306V278C220 268 226 262 236 262Z';
  var scr='M240 272H368C372 272 374 274 374 278V304C374 308 372 310 368 310H240C236 310 234 308 234 304V278C234 274 236 272 240 272Z';
  var strap='M232 320C230 330 230 336 232 340M376 320C378 330 378 336 376 340M232 472C230 480 230 486 232 490M376 472C378 480 378 486 376 490';
  var plate='M238 486H370C378 486 384 490 384 498C384 506 378 510 370 510H238C230 510 224 506 224 498C224 490 230 486 238 486Z';
  var pads='M252 486V478H284V486M324 486V478H356V486';
  var tex='';for(x=244;x<=364;x+=8)tex+='M'+x+' 322V328M'+x+' 482V488';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="gl sD" d="M70 '+B+'H730"/>';
  g+='<path class="wl sD" d="'+arm+'"/><path class="wi sD" d="'+cnt+'"/><path class="hh sD" d="'+hat+'"/>';
  g+='<path class="wl sD" d="'+cse+'"/><path class="wi sD" d="'+scr+'"/><path class="wl sD" d="M388 280H394V294H388"/>';
  g+='<circle class="wi sD" cx="268" cy="291" r="9"/><circle class="wi sD" cx="304" cy="291" r="11"/><circle class="wi sD" cx="340" cy="291" r="9"/>';
  g+='<path class="wl sD" d="'+strap+'"/><path class="wi sD" d="'+tex+'"/><path class="wl sD" d="'+plate+'"/><path class="wi sD" d="'+pads+'"/>';
  g+='<text x="70" y="98" class="t">BREATHING</text><text x="96" y="290" class="t">A2D2 ON</text><text x="96" y="306" class="t">THE WRIST</text></g>';
  g+='<g class="tb"><path class="tbl" d="M548 508h228v36h-228Z"/><text x="558" y="530" class="t s">A2D2 · SIDE ELEVATION</text></g>';
  g+='</g>';
  /* 1 breathing slows and flattens */
  g+='<g id="sc1"><path class="trc dr" d="'+tr+'"/><text x="40" y="'+TY+'" class="a">RESPIRATORY DEPRESSION</text></g>';
  /* 2 detection: the pads read the body, the wearable flags the flat trace */
  var arcs='';for(var i=0;i<3;i++){var r=14+i*12;arcs+='M'+(304-r)+' 472A'+r+' '+r+' 0 0 1 '+(304+r)+' 472'}
  g+='<g id="sc2"><path class="sig dr" d="'+arcs+'"/><path class="thr dr" d="M478 124V228"/><circle class="mk" cx="478" cy="'+B+'" r="6"/>'+
     '<path class="ld2 dr" d="M478 228V244H372V256"/><text x="490" y="98" class="t c">OVERDOSE</text><text x="490" y="116" class="t c">DETECTED</text>'+
     '<text x="40" y="'+TY+'" class="a">DETECTION</text></g>';
  /* 3 naloxone from the needle-free injector under the wrist; breathing comes back */
  var ups='';for(var k=0;k<3;k++){var xx=289+k*15;ups+='M'+xx+' 474V452M'+(xx-4)+' 458L'+xx+' 452L'+(xx+4)+' 458'}
  g+='<g id="sc3"><path class="up dr" d="'+ups+'"/><path class="trc2 dr" d="M470 '+B+'H520'+rc+'"/>'+
     '<path class="ld2 dr" d="M224 498H200V522"/><text x="70" y="540" class="t c">NEEDLE-FREE NALOXONE</text>'+
     '<text x="610" y="98" class="t c">BREATHING</text><text x="610" y="116" class="t c">RESTORED</text>'+
     '<text x="40" y="'+TY+'" class="a">NALOXONE</text></g>';
  /* 4 alert: the wearable calls emergency contacts */
  var phn='M688 226H734C738 226 740 228 740 232V300C740 304 738 306 734 306H688C684 306 682 304 682 300V232C682 228 684 226 688 226Z';
  var wv='';for(var j=0;j<3;j++){var rr=16+j*13;wv+='M'+(396+rr*Math.cos(1.1)).toFixed(1)+' '+(276-rr*Math.sin(1.1)).toFixed(1)+'A'+rr+' '+rr+' 0 0 1 '+(396+rr*Math.cos(.3)).toFixed(1)+' '+(276-rr*Math.sin(.3)).toFixed(1)}
  g+='<g id="sc4"><path class="sig dr" d="'+wv+'"/><path class="ld3 dr" d="M452 268H672"/><path class="wl dr" d="'+phn+'"/><path class="wi dr" d="M704 296H718M690 238H732V286H690Z"/>'+
     '<text x="668" y="250" class="t c" text-anchor="end">EMERGENCY CONTACTS</text>'+
     '<text x="40" y="'+TY+'" class="a">ALERT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase text",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var mk=$("#sc2 .mk",svg),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    mk.style.opacity=Math.max(0,s[1]*2-1).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=(b*O(s[1])).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

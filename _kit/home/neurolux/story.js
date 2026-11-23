/* the story scene (BL/BY/DB): ONE engraved plan of a NeuroLux unilateral optogenetic implant, laid flat, kept on screen throughout;
   each step lights one part as neurolux.org describes the system: the implant (a flexible magnetic loop antenna, an electronics
   island, a thin probe carrying a µLED to its tip); wireless power (the cage antenna driven by the PDC Box couples to the loop by
   magnetic near field, field out of the page shown as dot symbols); control (frequency, pulse width and burst set in software);
   light (the µLED at the tip delivers light to the target region). Proportions are schematic. */
function scene(){
  var mob=MOBILE(),CX=230,CY=300;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="nlGlow"><stop offset="0" stop-color="#9fdcff" stop-opacity=".95"/><stop offset=".35" stop-color="#2aa6e6" stop-opacity=".55"/><stop offset="1" stop-color="#2aa6e6" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="nlRay" x1="0" x2="1"><stop offset="0" stop-color="#2aa6e6" stop-opacity=".55"/><stop offset="1" stop-color="#2aa6e6" stop-opacity="0"/></linearGradient></defs>';
  /* the implant: four turns of the loop antenna, the island with its chip and two capacitors, a serpentine interconnect, the probe */
  var coil='';[150,141,132,123].forEach(function(r){coil+='<circle class="wl sD" cx="'+CX+'" cy="'+CY+'" r="'+r+'"/>'});
  var serp='M440 300';for(var i=0;i<6;i++){var x=440+i*10;serp+='C'+(x+2)+' '+(i%2?312:288)+' '+(x+8)+' '+(i%2?312:288)+' '+(x+10)+' 300'}
  g+='<g id="scBase">'+coil+
     '<path class="chp sD" d="M362 272H440V328H362Z"/><path class="wi sD" d="M380 286H410V314H380Z"/><path class="wi sD" d="M418 280H430V292H418ZM418 308H430V320H418Z"/>'+
     '<path class="wl sD" d="'+serp+'"/>'+
     '<path class="chp sD" d="M500 291H664L700 300L664 309H500Z"/><path class="wi sD" d="M500 300H662"/>'+
     '<path class="led sD" d="M676 295H690V305H676Z"/></g>';
  /* 1 the implant: its parts named */
  g+='<g id="sc1"><text x="'+CX+'" y="486" class="t c" text-anchor="middle">LOOP ANTENNA</text>'+
     '<text x="450" y="262" class="t c">ELECTRONICS</text>'+
     '<text x="'+(mob?556:572)+'" y="338" class="t c" text-anchor="middle">PROBE</text>'+
     '<text x="683" y="262" class="t c" text-anchor="middle">µLED</text>'+
     '<text x="40" y="60" class="a">THE IMPLANT</text></g>';
  /* 2 the power: the cage antenna (two turns) and the field through the loop, the loop traces lit */
  var fd='';[[176,232],[284,232],[176,372],[284,372]].forEach(function(q){fd+='<circle class="fld" cx="'+q[0]+'" cy="'+q[1]+'" r="7"/><circle class="fdd" cx="'+q[0]+'" cy="'+q[1]+'" r="1.8"/>'});
  g+='<g id="sc2"><path class="cage dr" d="M20 104H780V520H20Z"/><path class="cage dr" d="M28 112H772V512H28Z"/>'+
     '<circle class="lit dr" cx="'+CX+'" cy="'+CY+'" r="150"/><circle class="lit dr" cx="'+CX+'" cy="'+CY+'" r="123"/>'+fd+
     '<text x="772" y="88" class="t c" text-anchor="end">CAGE ANTENNA · PDC BOX</text>'+
     '<text x="'+CX+'" y="306" class="t c" text-anchor="middle">'+(mob?'NEAR FIELD':'MAGNETIC NEAR FIELD')+'</text>'+
     '<text x="40" y="60" class="a">THE POWER</text></g>';
  /* 3 the control: the µLED drive set in software, with its period and pulse width */
  var tr='M470 440H490',P=44;for(var k=0;k<5;k++){var x0=490+k*P;tr+='V395H'+(x0+14)+'V440H'+(x0+P)}tr=tr.replace(/H(\d+)$/,'H740');
  g+='<g id="sc3"><path class="wi dr" d="M470 440H740"/><path class="trace dr" d="'+tr+'"/>'+
     '<path class="ld2 dr" d="M490 450V462M534 450V462M490 456H534"/><path class="ld2 dr" d="M666 450V462M680 450V462M666 456H680"/>'+
     '<text x="470" y="380" class="t c">µLED DRIVE · SOFTWARE</text>'+
     '<text x="512" y="484" class="t c" text-anchor="middle">FREQUENCY</text>'+
     '<text x="'+(mob?690:673)+'" y="484" class="t c" text-anchor="middle">PULSE WIDTH</text>'+
     '<text x="40" y="60" class="a">THE CONTROL</text></g>';
  /* 4 the light: the µLED glows and its light spreads into the target region ahead of the tip */
  g+='<g id="sc4"><circle class="glw" cx="683" cy="300" r="26"/><path class="ray" d="M700 300L744 284V316Z"/><path class="rayh dr" d="M700 300L744 284M700 300L744 316"/>'+
     '<text x="'+(mob?762:683)+'" y="352" class="t c" text-anchor="'+(mob?'end':'middle')+'">TARGET REGION</text>'+
     '<text x="40" y="60" class="a">THE LIGHT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate in the one booth; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

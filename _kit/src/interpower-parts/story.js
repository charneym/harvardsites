/* the story scene (DB/DR): ONE engraved elevation of an Interpower cord set, kept on screen throughout; each step adds one stage as
   interpower.com and its history describe it: cable extruded on its own line in Lamoni, Iowa (since 2013); the plug and the IEC 60320
   C13 connector molded on, with strain reliefs; every Interpower-manufactured cord and cord set tested; a one-week U.S. manufacturing
   lead time and same day shipments on stock items. Proportions are simplified for legibility. */
function scene(){
  var mob=MOBILE();
  var TX=40,TY=60;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"28 78 760 420":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><pattern id="isHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,244,246,.16)" stroke-width="1"/></pattern></defs>';
  /* base: the run of cable with its three conductors showing faintly through the jacket */
  g+='<g id="scBase">'+(mob?'':'<rect class="neat" x=".5" y=".5" width="799" height="559"/>');
  g+='<path class="wl sD" d="M230 282H560 M230 318H560"/><path class="wi sD" d="M236 292H556 M236 300H556 M236 308H556"/>';
  if(!mob)g+='<g class="tb"><path class="tbl" d="M548 504h228v44h-228Z M548 526h228"/><text x="558" y="520" class="t">ELEVATION · C13 CORD SET</text><text x="558" y="542" class="t s">INTERPOWER · NOT TO SCALE</text></g>';
  g+='</g>';
  /* 1 the cable: its cut end and a section through the jacket and the three insulated conductors */
  var C3=[[200,126],[221,162],[179,162]];
  var cs='M262 150A62 62 0 1 0 138 150A62 62 0 1 0 262 150Z';
  C3.forEach(function(c){cs+='M'+(c[0]+20)+' '+c[1]+'A20 20 0 1 0 '+(c[0]-20)+' '+c[1]+'A20 20 0 1 0 '+(c[0]+20)+' '+c[1]+'Z'});
  var cu='';C3.forEach(function(c){cu+='M'+(c[0]+11)+' '+c[1]+'A11 11 0 1 0 '+(c[0]-11)+' '+c[1]+'A11 11 0 1 0 '+(c[0]+11)+' '+c[1]+'Z'});
  g+='<g id="sc1"><path class="cap wl dr" d="M230 282A8 18 0 0 0 230 318A8 18 0 0 0 230 282Z"/>'+
     '<path class="wl dr" d="'+cs+'"/><path class="cu dr" d="'+cu+'"/><path class="ld dr" d="M206 214L228 276"/>'+
     '<path class="ld2 dr nm" d="M246 106L270 96H282"/><text x="290" y="100" class="t c nm">JACKET</text>'+
     '<path class="ld2 dr nm" d="M240 166L270 150H282"/><text x="290" y="154" class="t c nm">CONDUCTORS</text>'+
     '<text x="395" y="350" class="t c s nm" text-anchor="middle">EXTRUDED IN LAMONI, IOWA</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a nm">THE CABLE</text></g>';
  /* 2 the molding: the NEMA 5-15P plug on the left, the C13 connector on the right, each with its strain relief; the C13 face above */
  var plug='M230 288L192 276V324L230 312 M180 258H112Q100 258 100 270V330Q100 342 112 342H180Q192 342 192 330V270Q192 258 180 258Z'+
           'M100 274H44V282H100 M100 318H44V326H100 M100 296H54A4 4 0 0 0 54 304H100';
  var conn='M560 288L604 276V324L560 312 M616 258H704Q716 258 716 270V330Q716 342 704 342H616Q604 342 604 330V270Q604 258 616 258Z M716 266H742V334H716';
  var face='M631 181V135L648 118H712L729 135V181Z M651 147h8v23h-8Z M701 147h8v23h-8Z M676 126h8v20h-8Z';
  g+='<g id="sc2"><path class="wl dr" d="'+plug+'"/><path class="wl dr" d="'+conn+'"/><path class="wi dr" d="M572 284V316 M584 281V319 M596 278V322 M218 284V316 M206 281V319 M630 272V328 M640 272V328 M650 272V328"/>'+
     '<path class="wl dr" d="'+face+'"/><path class="ld dr" d="M680 188V250"/>'+
     '<text x="146" y="370" class="t c nm" text-anchor="middle">NEMA 5-15P</text>'+
     '<text x="614" y="154" class="t c nm" text-anchor="end">IEC 60320 C13</text>'+
     '<path class="ld2 dr nm" d="M582 330V358"/><text x="582" y="376" class="t c nm" text-anchor="middle">STRAIN RELIEF</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a nm">THE MOLDING</text></g>';
  /* 3 the testing: a continuity loop from the plug to the connector through a check */
  g+='<g id="sc3"><path class="tst dr" d="M146 252V232H386 M414 232H660V252"/><path class="tag dr" d="M414 232A14 14 0 1 0 386 232A14 14 0 1 0 414 232Z"/><path class="awa2 dr" d="M393 232L398 238L408 226"/>'+
     '<text x="400" y="204" class="t c" text-anchor="middle">100% TESTED</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a nm">THE TESTING</text></g>';
  /* 4 the shipping: order to shipment on a one-week line */
  g+='<g id="sc4"><path class="bm dr" d="M120 440H500"/><path class="wl dr" d="M120 432V448 M500 432V448 M490 434L500 440L490 446"/>'+
     '<text x="310" y="424" class="t c" text-anchor="middle">1-WEEK U.S. LEAD TIME</text>'+
     '<text x="120" y="472" class="t c s">ORDER</text><text x="500" y="472" class="t c s" text-anchor="end">SHIPPED</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a nm">THE SHIPPING</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),cap:$("#sc1 .cap",svg),
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
    /* the stages accumulate on the one drawing; earlier labels quieten as the next stage arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* the plug's strain relief takes over the cable's cut end */
    if(E.cap)E.cap.style.opacity=(1-Math.min(1,s[1]*1.6)).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

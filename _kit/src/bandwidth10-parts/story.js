/* the story scene (DB/DR): ONE engraved cross-section of a High Contrast Grating tunable VCSEL, kept on screen throughout; each step
   adds one part exactly as bandwidth10.com/company describes it: the vertical cavity with its active region and bottom DBR mirror;
   the HCG, a single-layer, sub-wavelength grating used as the top mirror; the grating suspended as a tunable mirror, moved by a
   voltage (simple voltage-controlled tuning); and the fast wavelength sweep of a swept source (1060 nm pigtail TO: >200 kHz, >40 nm).
   Proportions are exaggerated for legibility. */
function scene(){
  var mob=MOBILE();
  /* device shapes are drawn in section units inside one transform (x 1.25, raised); labels, leaders, beam and plot in frame units */
  var DV='<g transform="translate(-100 -140) scale(1.25)">',TX=mob?124:40,TY=mob?98:60;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"110 70 680 420":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><pattern id="bwHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(243,242,239,.16)" stroke-width="1"/></pattern></defs>';
  /* base: substrate, bottom DBR stack and the two posts that carry the grating */
  var dbr='';for(var i=0;i<7;i++)dbr+='M236 '+(380+i*8)+'H564';
  g+='<g id="scBase">'+(mob?'':'<rect class="neat" x=".5" y=".5" width="799" height="559"/>')+DV;
  g+='<path class="hatch" d="M200 440H600V488H200Z"/><path class="wl sD" d="M200 440H600V488H200Z"/>';
  g+='<path class="wl sD" d="M230 372H570V436H230Z"/><path class="wi sD" d="'+dbr+'"/>';
  g+='<path class="wl sD" d="M230 350H570V368H230Z"/>';
  g+='<path class="hatch" d="M230 292H272V350H230Z M528 292H570V350H528Z"/><path class="wl sD" d="M230 350V292H272V350 M528 350V292H570V350"/></g>';
  g+='<g class="tb"><path class="tbl" d="M548 504h228v44h-228Z M548 526h228"/><text x="558" y="520" class="t">SECTION · HCG TUNABLE VCSEL</text><text x="558" y="542" class="t s">BANDWIDTH10 · NOT TO SCALE</text></g>';
  g+='</g>';
  /* 1 the cavity: quantum wells in the active region, the oxide aperture; labels for the active region, the bottom mirror, the substrate */
  g+='<g id="sc1">'+DV+'<path class="ld2 dr" d="M314 355H486 M314 359H486 M314 363H486"/><path class="pdt dr" d="M232 370H338 M462 370H568"/></g>'+
     '<path class="ld2 dr nm" d="M186 309H170"/><text x="162" y="313" class="t c nm" text-anchor="end">ACTIVE REGION</text>'+
     '<path class="ld2 dr nm" d="M186 365H170"/><text x="162" y="369" class="t c nm" text-anchor="end">DBR MIRROR</text>'+
     '<path class="ld2 dr nm" d="M149 440H136"/><text x="128" y="444" class="t c nm" text-anchor="end">SUBSTRATE</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE CAVITY</text></g>';
  /* 2 the grating: the suspended membrane with its sub-wavelength bars over the air gap */
  var bars='';for(var b=0;b<12;b++){var bx=306+b*16;bars+='M'+bx+' 280H'+(bx+9)+'V290H'+bx+'Z'}
  g+='<g id="sc2">'+DV+'<path class="chp dr" d="M230 280H300V290H230Z M500 280H570V290H500Z'+bars+'"/><path class="ld dr nm" d="M400 296V346"/></g>'+
     '<path class="ld2 dr nm" d="M296 206L240 170H170"/><text x="162" y="174" class="t c nm" text-anchor="end">HCG TOP MIRROR</text><text x="162" y="192" class="t c s nm" text-anchor="end">SUB-WAVELENGTH</text>'+
     '<path class="ld2 dr nm" d="M274 260H170"/><text x="162" y="264" class="t c nm" text-anchor="end">AIR GAP</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE GRATING</text></g>';
  /* 3 the tuning: a voltage between the grating and the substrate pulls the membrane, shortening the cavity */
  g+='<g id="sc3"><path class="ld2 dr" d="M613 216H700V282 M700 318V440H651"/><circle class="tag" cx="700" cy="300" r="18"/>'+
     '<text x="700" y="304.5" class="t c w" text-anchor="middle">V</text><text x="728" y="304" class="t c nm">VOLTAGE</text>'+DV+
     '<path class="wrapf dr" d="M300 296Q400 304 500 296"/><path class="awa2 dr" d="M352 300V316M346 309L352 317L358 309 M448 300V316M442 309L448 317L454 309"/></g>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE TUNING</text></g>';
  /* 4 the sweep: the beam leaves the top of the chip; its wavelength swept in time */
  g+='<g id="sc4"><path class="bm dr" d="M400 205V96"/><path class="bmg dr" d="M391 205V112 M409 205V112"/>'+
     '<path class="tbl dr" d="M560 96V192H712"/><path class="bm dr" d="M566 182L601 108V182L636 108V182L671 108V182L706 108"/>'+
     '<text x="552" y="108" class="t c" text-anchor="end">λ</text><text x="720" y="196" class="t c">TIME</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE SWEEP</text></g>';
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
    /* the parts accumulate on the one section; earlier labels quieten as the next part arrives */
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
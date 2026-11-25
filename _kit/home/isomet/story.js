/* the story scene (DB/DR): ONE engraved elevation of an acousto-optic modulator, kept on screen throughout; each step adds one
   part of the mechanism exactly as isomet.com/acousto_optics.html describes it: a piezo-electric transducer bonded to one face of
   the crystal, driven by an RF signal; the travelling acoustic wave and its periodic refractive-index change (a grating); laser
   light entering at the Bragg angle; the diffracted first order beside the undiffracted zeroth order, its angle set by the RF
   frequency and its intensity by the RF power. Proportions and the Bragg angle are exaggerated for legibility. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var X0=230,X1=530,Y0=150,Y1=378,PX0=300,PX1=460;
  g+='<defs><pattern id="isHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(242,243,241,.16)" stroke-width="1"/></pattern></defs>';
  /* base: the crystal on its heat-sink block */
  var blk='M280 394H480V446H280Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="xtl" d="M'+X0+' '+Y0+'H'+X1+'V'+Y1+'H'+X0+'Z"/><path class="wl sD" d="M'+X0+' '+Y0+'H'+X1+'V'+Y1+'H'+X0+'Z"/>';
  g+='<path class="wi sD" d="M'+(X0+8)+' '+(Y0+8)+'H'+(X1-8)+'"/>';
  g+='<path class="hatch" d="'+blk+'"/><path class="wl sD" d="'+blk+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">ELEVATION · AO MODULATOR</text><text x="558" y="538" class="t s">TEO₂ CRYSTAL · ISOMET</text></g>';
  g+='</g>';
  /* 1 the transducer: piezo slab and electrode under the crystal, the RF lead out to the SMA input */
  g+='<g id="sc1"><path class="chp" d="M'+PX0+' '+Y1+'H'+PX1+'V'+(Y1+12)+'H'+PX0+'Z"/><rect class="pad" x="'+(PX0-4)+'" y="'+(Y1+12)+'" width="'+(PX1-PX0+8)+'" height="4"/>'+
     '<path class="ld2 dr" d="M'+(PX1+4)+' '+(Y1+14)+'H472V420H480"/><path class="sma" d="M480 410H500V430H480Z M500 414H512V426H500Z"/>'+
     '<path class="ld2 dr nm" d="M'+(PX0+8)+' '+(Y1+8)+'L252 420H160"/><text x="152" y="424" class="t c nm" text-anchor="end">PIEZO TRANSDUCER</text>'+
     '<text x="524" y="424" class="t c">RF DRIVE</text>'+
     '<text x="40" y="60" class="a">THE TRANSDUCER</text></g>';
  /* 2 the grating: acoustic wavefronts rising through the crystal above the transducer */
  var wf='';for(var y=Y1-10;y>Y0+8;y-=12)wf+='M'+(PX0+4)+' '+y+'H'+(PX1-4);
  g+='<g id="sc2"><path class="aw dr" d="'+wf+'"/><path class="awa dr" d="M'+(PX1+16)+' 300V176M'+(PX1+10)+' 186L'+(PX1+16)+' 174L'+(PX1+22)+' 186"/>'+
     '<path class="ld2 dr nm" d="M'+(PX1+22)+' 330H548"/><text x="556" y="334" class="t c nm">ACOUSTIC WAVE</text><text x="556" y="352" class="t c c2 nm">INDEX GRATING</text>'+
     '<text x="40" y="60" class="a">THE GRATING</text></g>';
  /* 3 the light: a laser enters at the Bragg angle */
  g+='<g id="sc3"><path class="bm dr" d="M40 324L'+X0+' 286L380 256"/><path class="ld dr nm" d="M164 286H'+X0+'"/><path class="ld2 dr nm" d="M182 286A48 48 0 0 0 183 295.4"/>'+
     '<text x="40" y="346" class="t c c3">LASER IN</text><text x="214" y="270" class="t c c3 nm" text-anchor="end">BRAGG ANGLE</text>'+
     '<text x="40" y="60" class="a">THE BRAGG ANGLE</text></g>';
  /* 4 the control: the first order leaves at an angle set by the RF frequency, beside the zeroth order */
  g+='<g id="sc4"><path class="bm0 dr" d="M380 256L'+X1+' 226L770 178"/><path class="bm dr" d="M380 256L'+X1+' 196L770 100"/>'+
     '<text x="770" y="88" class="t c c4" text-anchor="end">1ST ORDER</text><text x="770" y="226" class="t c c4" text-anchor="end">0TH ORDER</text>'+
     '<text x="524" y="456" class="t c c4 nm">FREQUENCY SETS THE ANGLE</text><text x="524" y="474" class="t c c4 nm">POWER SETS THE INTENSITY</text>'+
     '<text x="40" y="60" class="a">THE CONTROL</text></g>';
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
    /* the parts accumulate on the one pair of glasses; earlier labels quieten as the next part arrives */
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

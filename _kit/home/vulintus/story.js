/* the story scene (BL/BY/DB): ONE engraved side section of a MotoTrak behavior booth, kept on screen throughout; each step adds
   one part as vulintus.com/mototrak describes it: the clear booth with a reaching slot in its front wall and the rat inside; an
   interchangeable behavior module outside the slot (a pull handle on a force sensor, on its bracket); the trial (the forelimb
   reaches through the slot and pulls, the module cabled to the controller); the data (force recorded continuously on every trial,
   the target raised adaptively as the animal learns). Proportions are schematic. */
function scene(){
  var mob=MOBILE(),R1=452,R2=mob?476:470,R3=mob?500:452;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="vuHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(243,243,241,.16)" stroke-width="1"/></pattern></defs>';
  /* base plate, booth walls (clear acrylic: an outer and inner line), carry handles, perforated floor */
  var holes='';for(var x=92;x<372;x+=22)holes+='M'+x+' 393h12';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" d="M40 400H720V418H40Z"/><path class="wl sD" d="M40 400H720V418H40Z"/>';
  g+='<path class="wl sD" d="M70 400V130H390V300M390 350V400"/>';
  g+='<path class="wi sD" d="M77 400V137H383V300M383 350V400"/>';
  g+='<path class="wl sD" d="M86 130V112H120V130M340 130V112H374V130"/>';
  g+='<path class="wi sD" d="'+holes+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · BEHAVIOR BOOTH</text><text x="558" y="538" class="t s">MOTOTRAK · VULINTUS</text></g>';
  g+='</g>';
  /* 1 the booth: the rat, facing the slot */
  var rat='M372 332C360 312 340 300 318 298C280 282 215 285 185 318C168 340 170 385 195 390L330 390C350 380 362 350 372 332Z';
  g+='<g id="sc1"><path class="rat dr" d="'+rat+'"/><path class="rat dr" d="M322 300C318 284 334 280 338 296"/><path class="rat dr" d="M182 372C140 392 112 380 90 390"/><path class="wi dr" d="M210 388C218 372 236 370 246 389M318 390V374"/>'+
     '<circle class="eye" cx="351" cy="317" r="2.6"/>'+
     '<text x="134" y="124" class="t c">BEHAVIOR BOOTH</text>'+
     '<path class="ld2 dr" d="M392 352L374 440"/><text x="370" y="'+R1+'" class="t c" text-anchor="end">REACHING SLOT</text>'+
     '<text x="40" y="60" class="a">THE BOOTH</text></g>';
  /* 2 the module: a pull handle on a shaft to the force sensor, on its bracket */
  g+='<g id="sc2"><path class="chp" d="M427 312h7v28h-7Z"/><path class="wl dr" d="M434 326H470"/><path class="chp" d="M470 306h70v40h-70Z"/><path class="pd" d="M482 306v40M528 306v40"/>'+
     '<path class="chp" d="M540 400V270H552L610 400Z"/>'+
     '<path class="ld2 dr" d="M431 342V440"/><text x="436" y="'+R1+'" class="t c">PULL HANDLE</text><text x="436" y="'+R2+'" class="t c c2">INTERCHANGEABLE MODULE</text>'+
     '<path class="ld2 dr" d="M505 348L'+(mob?505:560)+' 440"/><text x="'+(mob?436:560)+'" y="'+R3+'" class="t c">FORCE SENSOR</text>'+
     '<text x="40" y="60" class="a">THE MODULE</text></g>';
  /* 3 the trial: the forelimb reaches through the slot and pulls; the module is cabled to the controller */
  g+='<g id="sc3"><path class="limb dr" d="M344 356C366 346 396 332 426 327"/><circle class="pad" cx="428" cy="327" r="3.4"/>'+
     '<path class="cur dr" d="M470 286H422M430 280L422 286L430 292"/>'+
     '<path class="wi dr" d="M552 284C600 296 636 324 650 360"/><path class="chp" d="M620 362h100v38h-100Z"/>'+
     '<text x="670" y="385" class="t c" text-anchor="middle">CONTROLLER</text>'+
     '<text x="196" y="252" class="t c">REACH AND PULL</text>'+
     '<text x="40" y="60" class="a">THE TRIAL</text></g>';
  /* 4 the data: force on every trial; the target steps up as the animal learns */
  var tr='M440 216',TH=[190,190,172,172,172,152,152,134,134,134],PK=[176,198,166,180,160,146,158,128,140,124];
  for(var i=0;i<10;i++){var x0=448+i*31;tr+='H'+x0+'C'+(x0+5)+' 216 '+(x0+6)+' '+PK[i]+' '+(x0+10)+' '+PK[i]+'C'+(x0+14)+' '+PK[i]+' '+(x0+15)+' 216 '+(x0+21)+' 216'}
  tr+='H760';
  g+='<g id="sc4"><path class="wi dr" d="M440 80V218H762"/><path class="thr dr" d="M440 190H510V172H603V152H696V134H762"/><path class="trace dr" d="'+tr+'"/>'+
     '<text x="440" y="64" class="t c">FORCE · EVERY TRIAL</text><text x="770" y="64" class="t c c4" text-anchor="end">ADAPTIVE TARGET</text>'+
     '<text x="40" y="60" class="a">THE DATA</text></g>';
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

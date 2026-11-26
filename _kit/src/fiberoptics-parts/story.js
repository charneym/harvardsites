/* the story scene (DB/DR): ONE engraved elevation of a fiber optic light guide, kept on screen throughout; each step adds one part
   as fiber-optics.com describes it: the drawn glass fiber bundle; the two ends set in ferrules with epoxy and the polished face;
   the sheath and molded silicone boots of a medical guide; and the LED source with its optical coupler, light leaving the far end.
   Proportions are exaggerated for legibility. */
function scene(){
  var mob=MOBILE();
  var TX=mob?40:40,TY=mob?128:60;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"24 96 760 432":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><pattern id="ftHt" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V7" stroke="rgba(243,241,237,.22)" stroke-width="1"/></pattern></defs>';
  /* base: the frame, a faint centre line, the title block */
  g+='<g id="scBase">'+(mob?'':'<rect class="neat" x=".5" y=".5" width="799" height="559"/>')+'<path class="cl sD" d="M28 300H780"/>';
  if(!mob)g+='<g class="tb"><path class="tbl" d="M548 504h228v44h-228Z M548 526h228"/><text x="558" y="520" class="t">ELEVATION · LIGHT GUIDE</text><text x="558" y="542" class="t s">FTI · NOT TO SCALE</text></g>';
  g+='</g>';
  /* 1 the fiber: seven drawn strands in an arch between the two ends */
  var fb='';for(var k=-3;k<=3;k++){var o=k*4.2;fb+='M282 '+(300+o)+'C370 '+(150+o)+' 470 '+(150+o)+' 560 '+(300+o)+' ';}
  g+='<g id="sc1"><path class="fib dr" d="'+fb+'"/>'+
     '<path class="ld2 dr nm" d="M421 155V134"/><text x="421" y="122" class="t c nm" text-anchor="middle">GLASS FIBER BUNDLE</text><text x="421" y="104" class="t c s nm" text-anchor="middle">DRAWN IN-HOUSE</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE FIBER</text></g>';
  /* 2 the ends: input and output ferrules, epoxy fill, the polished output face, and that face enlarged */
  g+='<g id="sc2"><path class="hatch" d="M214 291H280V309H214Z M562 291H636V309H562Z"/>'+
     '<path class="wl dr" d="M190 291H212V286H282V314H212V309H190Z M560 284H640V289H668V311H640V316H560Z"/><path class="face dr" d="M668 289V311"/>'+
     '<circle class="ring dr" cx="400" cy="438" r="58"/><g class="hx"><circle cx="377.2" cy="398.5" r="6.3"/><circle cx="392.4" cy="398.5" r="6.3"/><circle cx="407.6" cy="398.5" r="6.3"/><circle cx="422.8" cy="398.5" r="6.3"/><circle cx="369.6" cy="411.7" r="6.3"/><circle cx="384.8" cy="411.7" r="6.3"/><circle cx="400.0" cy="411.7" r="6.3"/><circle cx="415.2" cy="411.7" r="6.3"/><circle cx="430.4" cy="411.7" r="6.3"/><circle cx="362.0" cy="424.8" r="6.3"/><circle cx="377.2" cy="424.8" r="6.3"/><circle cx="392.4" cy="424.8" r="6.3"/><circle cx="407.6" cy="424.8" r="6.3"/><circle cx="422.8" cy="424.8" r="6.3"/><circle cx="438.0" cy="424.8" r="6.3"/><circle cx="354.4" cy="438.0" r="6.3"/><circle cx="369.6" cy="438.0" r="6.3"/><circle cx="384.8" cy="438.0" r="6.3"/><circle cx="400.0" cy="438.0" r="6.3"/><circle cx="415.2" cy="438.0" r="6.3"/><circle cx="430.4" cy="438.0" r="6.3"/><circle cx="445.6" cy="438.0" r="6.3"/><circle cx="362.0" cy="451.2" r="6.3"/><circle cx="377.2" cy="451.2" r="6.3"/><circle cx="392.4" cy="451.2" r="6.3"/><circle cx="407.6" cy="451.2" r="6.3"/><circle cx="422.8" cy="451.2" r="6.3"/><circle cx="438.0" cy="451.2" r="6.3"/><circle cx="369.6" cy="464.3" r="6.3"/><circle cx="384.8" cy="464.3" r="6.3"/><circle cx="400.0" cy="464.3" r="6.3"/><circle cx="415.2" cy="464.3" r="6.3"/><circle cx="430.4" cy="464.3" r="6.3"/><circle cx="377.2" cy="477.5" r="6.3"/><circle cx="392.4" cy="477.5" r="6.3"/><circle cx="407.6" cy="477.5" r="6.3"/><circle cx="422.8" cy="477.5" r="6.3"/></g>'+
     '<path class="ld2 dr nm" d="M246 284V254"/><text x="246" y="244" class="t c nm" text-anchor="middle">FERRULE · EPOXY</text>'+
     '<path class="ld2 dr nm" d="M668 318V352"/><text x="668" y="368" class="t c nm" text-anchor="middle">POLISHED FACE</text>'+
     '<path class="ld2 dr nm" d="M462 438H500"/><text x="508" y="434" class="t c nm">END FACE</text><text x="508" y="452" class="t c s nm">ENLARGED</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE ENDS</text></g>';
  /* 3 the sheath: an outer jacket over the arch and tapered silicone boots at both ferrules */
  var sh='M296 286C380 120 462 120 546 286 M300 316C382 180 460 180 542 316';
  g+='<g id="sc3"><path class="shx dr" d="'+sh+'"/><path class="boot dr" d="M282 284L306 289V311L282 316Z M560 284L536 289V311L560 316Z"/>'+
     '<path class="ld2 dr nm" d="M300 320V352"/><text x="300" y="368" class="t c nm" text-anchor="middle">SILICONE BOOT</text>'+
     '<path class="ld2 dr nm" d="M500 201L560 196H582"/><text x="590" y="200" class="t c nm">SHEATH</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE SHEATH</text></g>';
  /* 4 the light: LED source with its coupler at the input; light leaving the polished face */
  g+='<g id="sc4"><path class="wl dr" d="M44 254H166V346H44Z"/><path class="led dr" d="M150 290H158V310H150Z"/><path class="cpl dr" d="M176 284Q186 300 176 316 M182 284Q172 300 182 316"/>'+
     '<path class="bm dr" d="M672 300H774 M672 294L770 268 M672 306L770 332"/>'+
     '<path class="ld2 dr nm" d="M105 350V380"/><text x="105" y="396" class="t c nm" text-anchor="middle">LED SOURCE</text><text x="105" y="414" class="t c s nm" text-anchor="middle">WITH COUPLER</text>'+
     '<text x="'+TX+'" y="'+TY+'" class="a">THE LIGHT</text></g>';
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
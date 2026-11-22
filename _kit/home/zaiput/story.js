/* the story scene (DB): ONE engraved schematic of a Zaiput membrane separator, after the firm's own "How it works" figure
   (organic = purple, the wetting phase; aqueous = blue). Step 1 a segmented biphasic stream flows into the feed channel;
   step 2 the hydrophobic membrane's pores fill with organic; step 3 the internal pressure controller (a diaphragm on the
   retentate line) sets a small differential across the membrane; step 4 organic slugs drain through into the permeate
   chamber and out, while the aqueous carries on to the retentate outlet. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><clipPath id="zch"><rect x="44" y="207" width="600" height="66"/></clipPath></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* housing, feed channel, membrane line, permeate chamber, outlets */
  g+='<path class="sD bl" d="M150 168H610V400H150Z"/>';
  g+='<path class="sD kb" d="M44 205H150M44 275H150M610 205H690V150M610 275H720V150"/>';
  g+='<path class="sD kb" d="M164 205H596M164 275H596M164 302H596V386H164Z"/>';
  g+='<path class="sD kb" d="M610 330H760M610 360H760"/>';
  g+='<path class="sD ht" d="M150 168L170 188M590 168L610 188M150 400L170 380M590 400L610 380"/>';
  g+='<text x="44" y="190" class="t">FEED · BIPHASIC</text>';
  g+='<text x="164" y="430" class="t">ZAIPUT SEPARATOR · SCHEMATIC</text>';
  g+='</g>';
  /* the stream: alternating organic / aqueous slugs, moved along by the scroll */
  var sl='';for(var i=0;i<18;i++)sl+='<rect class="'+(i%2?"aq":"og")+'" x="0" y="211" width="40" height="58"/>';
  g+='<g id="slugs" clip-path="url(#zch)">'+sl+'</g>';
  /* membrane and its pores */
  var po='';for(var x=170;x<=590;x+=10)po+='M'+x+' 281V295';
  g+='<path id="mem" class="mem" d="M164 288H596"/>';
  g+='<g id="sc2"><path class="pore dr" d="'+po+'"/><text x="164" y="458" class="a2">HYDROPHOBIC MEMBRANE, WETTED BY ORGANIC</text></g>';
  /* step 3: pressure controller on the retentate line, and the differential across the membrane */
  g+='<g id="sc3"><path class="sD2 dr" d="M664 92H746V150H664Z"/><path class="dia dr" id="dia" d="M668 121Q686 113 705 121T742 121"/>'+
     '<text x="746" y="80" text-anchor="end" class="a">PRESSURE CONTROLLER</text>';
  var ar='';for(var k=0;k<5;k++){var ax=210+k*90;ar+='M'+ax+' 240V318M'+(ax-7)+' 308L'+ax+' 320L'+(ax+7)+' 308'}
  g+='<path class="dp dr" d="'+ar+'"/><text x="44" y="330" class="a">ΔP</text><text x="44" y="350" class="t">BELOW</text><text x="44" y="366" class="t">BREAKTHROUGH</text></g>';
  /* step 4: the permeate fills and leaves; aqueous leaves through the retentate */
  g+='<g id="sc4"><rect id="perm" class="permf" x="165" y="303" width="430" height="82"/>'+
     '<path class="pout dr" d="M612 345H756"/><path class="rout dr" d="M612 240H705V96"/>'+
     '<text x="760" y="392" text-anchor="end" class="a2">PERMEATE · ORGANIC</text><text x="760" y="490" text-anchor="end" class="a">RETENTATE · AQUEOUS ↑</text></g>';
  /* step captions */
  g+='<text id="cap1" x="40" y="58" class="a">A SEGMENTED BIPHASIC STREAM</text>';
  g+='<text id="cap2" x="40" y="58" class="a">ORGANIC WETS THE PORES</text>';
  g+='<text id="cap3" x="40" y="58" class="a">A CONTROLLED DIFFERENTIAL</text>';
  g+='<text id="cap4" x="40" y="58" class="a">TWO CLEAN OUTLETS</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase text",svg),sl:$$("#slugs rect",svg),slg:$("#slugs",svg),mem:$("#mem",svg),
    g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),perm:$("#perm",svg),dia:$("#dia",svg),
    cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1,W=40;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* the slugs travel left to right; in step 4 each organic slug drains downward as it crosses the membrane */
    var off=(p*900)%(2*W);E.slg.style.opacity=(b*Math.max(s1,b)).toFixed(3);
    E.sl.forEach(function(r,i){var x=44-2*W+off+i*W;r.setAttribute("x",x.toFixed(1));
      if(!(i%2)){var f=Math.max(0,Math.min(1,(x+W/2-170)/400))*s4,hh=58*(1-f);r.setAttribute("height",hh.toFixed(1));r.setAttribute("y",(211+58-hh).toFixed(1))}});
    E.mem.style.opacity=b.toFixed(3);E.mem.classList.toggle("wet",s2>.5);
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)*(1-.5*s4)).toFixed(3);draw(E.d3,s3);
    E.dia.setAttribute("transform","translate(0 "+(Math.sin(p*60)*1.5*s3).toFixed(2)+")");
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);E.perm.style.opacity=(.45*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}

/* the story scene (DB): ONE engraved schematic of a Zaiput membrane separator, after the firm's own "How it works" figure
   (organic = purple, the wetting phase; aqueous = blue). Step 1 a segmented biphasic stream flows into the feed channel;
   step 2 the hydrophobic membrane's pores fill with organic; step 3 the internal pressure controller (a diaphragm on the
   retentate line) sets a small differential across the membrane; step 4 organic slugs drain through into the permeate
   chamber and out, while the aqueous carries on to the retentate outlet. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><clipPath id="zch"><rect x="44" y="192" width="600" height="106"/></clipPath></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* housing, feed channel, membrane line, permeate chamber, outlets */
  g+='<path class="sD bl" d="M150 150H610V450H150Z"/>';
  g+='<path class="sD kb" d="M44 190H150M44 300H150M610 190H680V122M610 300H730V122"/>';
  g+='<path class="sD kb" d="M164 190H596M164 300H596M164 336H596V436H164Z"/>';
  g+='<path class="sD kb" d="M610 370H760M610 400H760"/>';
  g+='<path class="sD ht" d="M150 150L170 170M590 150L610 170M150 450L170 430M590 450L610 430"/>';
  g+='<text x="44" y="176" class="t">FEED · BIPHASIC</text>';
  g+='<text x="164" y="478" class="t">ZAIPUT SEPARATOR · SCHEMATIC</text>';
  g+='</g>';
  /* the stream: alternating organic / aqueous slugs, moved along by the scroll */
  var sl='';for(var i=0;i<18;i++)sl+='<rect class="'+(i%2?"aq":"og")+'" x="0" y="194" width="40" height="102"/>';
  g+='<g id="slugs" clip-path="url(#zch)">'+sl+'</g>';
  /* membrane and its pores */
  var po='';for(var x=170;x<=590;x+=10)po+='M'+x+' 310V326';
  g+='<path id="mem" class="mem" d="M164 318H596"/>';
  g+='<g id="sc2"><path class="pore dr" d="'+po+'"/><text x="164" y="500" class="a2">HYDROPHOBIC MEMBRANE, WETTED BY ORGANIC</text></g>';
  /* step 3: pressure controller on the retentate line, and the differential across the membrane */
  g+='<g id="sc3"><path class="sD2 dr" d="M664 64H746V122H664Z"/><path class="dia dr" id="dia" d="M668 93Q686 85 705 93T742 93"/>'+
     '<text x="650" y="98" text-anchor="end" class="a">PRESSURE CONTROLLER</text>';
  var ar='';for(var k=0;k<5;k++){var ax=210+k*90;ar+='M'+ax+' 228V350M'+(ax-7)+' 340L'+ax+' 352L'+(ax+7)+' 340'}
  g+='<path class="dp dr" d="'+ar+'"/><text x="44" y="352" class="a">ΔP</text><text x="44" y="374" class="t">BELOW</text><text x="44" y="390" class="t">BREAKTHROUGH</text></g>';
  /* step 4: the permeate fills and leaves; aqueous leaves through the retentate */
  g+='<g id="sc4"><rect id="perm" class="permf" x="165" y="337" width="430" height="98"/>'+
     '<path class="pout dr" d="M612 385H756"/><path class="rout dr" d="M612 245H705V126"/>'+
     '<text x="628" y="428" class="a2">PERMEATE</text><text x="628" y="452" class="a2">ORGANIC</text><text x="650" y="138" text-anchor="end" class="a">RETENTATE · AQUEOUS</text></g>';
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
      if(!(i%2)){var f=Math.max(0,Math.min(1,(x+W/2-170)/400))*s4,hh=102*(1-f);r.setAttribute("height",hh.toFixed(1));r.setAttribute("y",(194+102-hh).toFixed(1))}});
    E.mem.style.opacity=b.toFixed(3);E.mem.classList.toggle("wet",s2>.5);
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)*(1-.5*s4)).toFixed(3);draw(E.d3,s3);
    E.dia.setAttribute("transform","translate(0 "+(Math.sin(p*60)*1.5*s3).toFixed(2)+")");
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);E.perm.style.opacity=(.45*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}

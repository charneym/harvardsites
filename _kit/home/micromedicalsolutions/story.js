/* the story scene (BL/BY/DB): ONE engraved figure kept on screen throughout, a lower leg seen from the side (patient lying
   on their back, knee left, foot up at right) with the popliteal artery and its three tibial branches drawn inside. Each step
   adds one part as micromedicalsolutions.net describes it: an occluded below-the-knee vessel and the foot at risk (CLTI);
   access with a 4 Fr sheath and an 0.014" guidewire; the braided MicroStent placed across the lesion, with radiopaque markers;
   the permanent scaffold, the lumen open and blood reaching the foot. Proportions are schematic. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"24 116 670 432":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><clipPath id="mmStc"><rect x="392" y="253.6" width="88" height="8.8"/></clipPath><clipPath id="mmDc"><rect x="132" y="430" width="286" height="80"/></clipPath><clipPath id="mmDl"><rect x="48" y="429.5" width="464" height="81"/></clipPath></defs>';
  var leg='M24 214L170 206C190 196 222 194 240 206C320 214 500 228 580 236L600 238C612 226 616 200 618 176L620 150C622 136 640 132 650 140'+
          'C660 150 664 168 663 190C662 214 661 240 660 262C660 290 650 312 628 316C610 318 596 312 582 308C530 328 470 352 400 366'+
          'C340 378 290 374 262 360C240 352 215 350 190 352L24 358';
  var bones='M252 226L588 244M254 246L586 258M266 300L586 284';
  var POP='M24 318C120 320 200 330 262 326';
  var AT='M262 326C282 318 300 290 330 270C345 262 360 258 380 258L490 258C530 258 570 254 596 246C612 240 624 220 630 194';
  var PT='M262 326C290 334 310 336 330 336C420 338 500 316 560 300C600 292 632 296 644 280C650 262 650 232 648 204';
  var PER='M330 336C410 326 500 302 576 282';
  var UP='M24 318C120 320 200 330 262 326C282 318 300 290 330 270C345 262 360 258 380 258L400 258';
  var DOWN='M470 258L490 258C530 258 570 254 596 246C612 240 624 220 630 194';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="lgo2 sD" d="'+leg+'"/><path class="bn" d="'+bones+'"/>';
  g+='<path class="vo sD" d="'+PT+'"/><path class="vo sD" d="'+PER+'"/><path class="vo sD" d="'+POP+'"/><path class="vo sD" d="'+AT+'"/>';
  g+='<path class="vi sD" d="'+PT+'"/><path class="vi sD" d="'+PER+'"/><path class="vi sD" d="'+POP+'"/><path class="vi sD" d="'+AT+'"/>';
  g+='<path class="fl sD" d="'+UP+'"/>';
  g+='<path class="fl2" id="mmDown" d="'+DOWN+'"/>';
  g+='<ellipse class="plq" id="mmPlq" cx="435" cy="258" rx="38" ry="3.4"/>';
  /* detail A: the same tibial artery in section, at the lesion */
  g+='<path class="dpn" d="M40 404H520V540H40Z"/><text x="50" y="396" class="t">DETAIL A · TIBIAL ARTERY IN SECTION</text>';
  g+='<path class="ld3" d="M435 266V404"/>';
  g+='<path class="dwl sD" d="M48 428H512M48 512H512"/>';
  g+='<g clip-path="url(#mmDl)"><path class="dpq" id="mmDq1" d="M120 428C170 430 210 462 290 464C360 466 400 434 440 428Z M150 512C200 510 240 480 300 478C370 476 410 506 450 512Z"/>'+
     '<path class="dpq" id="mmDq2" style="opacity:0" d="M120 428C170 429 210 437 290 438C360 439 400 431 440 428Z M150 512C200 511 240 503 300 502C370 501 410 509 450 512Z"/></g>';
  g+='<path class="dfl sD" d="M48 470H168"/><path class="dfl2" id="mmDf" d="M168 470H512"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">LOWER LEG · SIDE VIEW</text><text x="558" y="538" class="t s">MICRO MEDICAL SOLUTIONS</text></g>';
  g+='</g>';
  /* 1 CLTI: an occluded tibial artery; the foot loses its supply */
  g+='<g id="sc1"><circle class="risk" cx="640" cy="152" r="20"/>'+
     '<path class="ld2 dr" d="M435 250V140"/><text x="443" y="134" class="t c">OCCLUSION</text>'+
     '<path class="ld2 dr" d="M662 146H678"/><text x="686" y="150" class="t c">FOOT AT RISK</text>'+
     '<text x="40" y="60" class="a">ISCHEMIA</text></g>';
  /* 2 access: 4 Fr sheath and 0.014" guidewire, antegrade from above the knee, across the lesion */
  g+='<g id="sc2"><path class="sh dr" d="M24 318C60 318.3 96 318.8 128 319.3"/>'+
     '<path class="gw dr" d="M24 318C120 320 200 330 262 326C282 318 300 290 330 270C345 262 360 258 380 258L524 258"/>'+
     '<path class="gw dr" d="M48 470H496"/>'+
     '<path class="ld2 dr" d="M96 314V164"/><text x="104" y="160" class="t c">4 FR SHEATH</text>'+
     '<path class="ld2 dr" d="M520 252V156H512"/><text x="504" y="160" class="t c" text-anchor="end">0.014″ GUIDEWIRE</text>'+
     '<text x="40" y="60" class="a">ACCESS</text></g>';
  /* 3 deploy: the braided stent across the lesion, with radiopaque markers at each end */
  var mesh='';for(var x=380;x<=484;x+=5.5)mesh+='M'+x+' 253L'+(x+9)+' 263M'+(x+9)+' 253L'+x+' 263';
  var dm='',db='';for(var x=96;x<=430;x+=14){dm+='M'+x+' 432L'+(x+36)+' 508M'+(x+36)+' 432L'+x+' 508';db+='M'+(x+7)+' 432L'+(x+43)+' 508M'+(x+43)+' 432L'+(x+7)+' 508'}
  g+='<g id="sc3"><g clip-path="url(#mmStc)"><path class="msh" d="'+mesh+'"/></g><rect class="mk2" x="389.5" y="252" width="3" height="12"/><rect class="mk2" x="479.5" y="252" width="3" height="12"/>'+
     '<path class="ld2 dr" d="M391 248V140H382"/><text x="374" y="144" class="t c" text-anchor="end">RADIOPAQUE MARKERS</text>'+
     '<g id="mmDs"><g clip-path="url(#mmDc)"><path class="dmb" d="'+db+'"/><path class="dmf" d="'+dm+'"/></g><rect class="mk2" x="129" y="430" width="4" height="80"/><rect class="mk2" x="417" y="430" width="4" height="80"/></g>'+
     '<path class="ld2 dr" d="M450 250V122"/><text x="458" y="126" class="t c">PIN &amp; PULL DELIVERY</text>'+
     
     '<text x="40" y="60" class="a">DEPLOY</text></g>';
  /* 4 scaffold: the lumen held open; blood reaches the foot */
  var dots='';for(var i=0;i<14;i++)dots+='<circle class="ad" r="2.4" cx="24" cy="318"/>';for(var j=0;j<10;j++)dots+='<circle class="ad dd" r="3.2" cx="48" cy="470"/>';
  g+='<g id="sc4"><path class="apath" id="mmFlow" d="'+POP+'C282 318 300 290 330 270C345 262 360 258 380 258L490 258C530 258 570 254 596 246C612 240 624 220 630 194"/>'+dots+
     '<path class="ld2 dr" d="M466 250V86"/><text x="474" y="90" class="t c c4">PERMANENT SCAFFOLD</text>'+
     '<path class="ld2 dr" d="M626 200L612 184H606"/><text x="598" y="188" class="t c c4" text-anchor="end">FLOW TO THE FOOT</text>'+
     '<text x="40" y="60" class="a">SCAFFOLD</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .bn, #scBase .plq",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var down=dl("#mmDown")[0],plq=$("#mmPlq",svg),F=$("#mmFlow",svg),FL=F.getTotalLength(),D=$$("#sc4 .ad:not(.dd)",svg),
      risk=$("#sc1 .risk",svg),dq1=$("#mmDq1",svg),dq2=$("#mmDq2",svg),ds=$("#mmDs",svg),dfl=dl("#mmDf")[0],DD=$$("#sc4 .dd",svg),wire=$$("#sc2 .sh, #sc2 .gw",svg),st3=$$("#sc3 .msh, #sc3 .mk2",svg);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      /* each step's labels leave as the next step's arrive, so no two sets ever share the frame (DR 3) */
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*Math.max(0,1-nx*2);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
      $$(".ld2",E.g[i]).forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* the foot at risk until flow returns; the wire stays through deployment and is withdrawn once the scaffold holds */
    risk.style.opacity=(1-s[3]).toFixed(3);
    wire.forEach(function(el){el.style.opacity=(1-s[3]).toFixed(3)});
    st3.forEach(function(el){el.style.opacity=Math.min(1,s[2]*1.6).toFixed(3)});ds.style.opacity=Math.min(1,s[2]*1.6).toFixed(3);
    plq.style.opacity=(b*(1-.55*s[2])).toFixed(3);plq.setAttribute("ry",(3.4-1.6*s[2]).toFixed(2));
    /* detail: the stent goes in crimped and self-expands across the lesion, pressing the plaque back to the wall */
    var ex=.22+.78*seg(p,.56,.72);ds.setAttribute("transform","translate(0 470) scale(1 "+ex.toFixed(3)+") translate(0 -470)");
    var pq=seg(p,.58,.72);dq1.style.opacity=(1-pq).toFixed(3);dq2.style.opacity=pq.toFixed(3);
    var f=s[3];draw([dfl],f);dfl[0].style.opacity=f.toFixed(3);
    DD.forEach(function(d,k){var u=((k/DD.length)+p*2.4)%1;d.setAttribute("cx",(48+464*u).toFixed(1));d.style.opacity=(f*Math.sin(Math.PI*u)).toFixed(3)});
    draw([down],f);down[0].style.opacity=f.toFixed(3);
    D.forEach(function(d,k){var u=((k/D.length)+p*3)%1,pt=F.getPointAtLength(u*FL);
      d.setAttribute("cx",pt.x.toFixed(1));d.setAttribute("cy",pt.y.toFixed(1));d.style.opacity=(f*Math.sin(Math.PI*u)).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

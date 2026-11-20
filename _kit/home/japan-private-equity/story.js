/* the story scene (BL/BY/DB): ONE engraved elevation of a two-storey machiya shopfront, the kind of long-established
   family business JPE is entrusted with. Each of the four steps of the firm's approach inks one more layer of the same
   drawing: dialogue (the founder's noren, signboard and lantern: the company's own story), entrustment (the survey:
   dimensions, the foundation in section, the plan for what comes next, dashed), refining (the work done with the staff:
   the extension built, the eave renewed, the house cared for), and relay (the house lit, its noren in fresh red, a new
   chapter handed on). */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  function lat(x0,x1,y0,y1,stp){var s='';for(var x=x0;x<=x1;x+=stp)s+='M'+x+' '+y0+'V'+y1;return s}
  function tiles(x0,x1,yT,yB,dx,stp){var s='';for(var x=x0;x<=x1;x+=stp)s+='M'+x+' '+yB+'L'+(x+dx)+' '+yT;return s}
  /* base: neatline, ground, the house itself (ground floor with lattice bays, lower eave, low upper storey, main roof) */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD gr" d="M24 470H776"/><path class="sD kb" d="M24 478H776M24 483H776"/>';
  var hz='';for(var i=0;i<62;i++){var hx=30+i*12;hz+='M'+hx+' 483l-8 8'}g+='<path class="sD ht" d="'+hz+'"/>';
  g+='<path class="sD bl" d="M170 470V330H630V470M260 330V470M540 330V470M340 470V340H460V470M170 452H340M460 452H630"/>';
  g+='<path class="sD lat" d="'+lat(180,250,342,452,7)+lat(550,620,342,452,7)+'M180 342H250M550 342H620M180 398H250M550 398H620"/>';
  g+='<path class="sD bl" d="M148 330H652L628 300H172Z"/><path class="sD ht" d="'+tiles(176,624,302,328,-6,12)+'"/>';
  g+='<path class="sD bl" d="M186 300V212H614V300M230 236H330V276H230ZM350 236H450V276H350ZM470 236H570V276H470Z"/>';
  g+='<path class="sD lat" d="'+lat(238,322,236,276,8)+lat(358,442,236,276,8)+lat(478,562,236,276,8)+'"/>';
  g+='<path class="sD bl" d="M136 212H664L604 150H196Z M190 150V140H610V150 M184 140Q182 128 196 126 M616 140Q618 128 604 126"/><path class="sD ht" d="'+tiles(204,596,152,210,0,12)+'"/>';
  g+='<path class="sD kb" d="M98 470V176M702 470V176M98 176H120M680 176H702"/>';
  g+='<g class="tb"><path class="tbl" d="M548 492h228v52h-228Z M548 518h228"/><text x="558" y="510" class="t">立面図 · 一社の物語</text><text x="558" y="536" class="t s">事業承継 · 中小企業</text></g>';
  g+='</g>';
  /* 1 dialogue: the founder's noren, the vertical signboard and a lantern: the company's own long story */
  g+='<g id="sc1"><path class="nor" d="M344 344H456V392H344Z"/><path class="norl" d="M381 352V392M419 352V392"/>'+
     '<path class="sys" d="M474 346H492V444H474Z"/><path class="lbll" d="M478 360H488M478 376H488M478 392H488M478 408H488M478 424H488"/>'+
     '<path class="fix" d="M298 334V342"/><ellipse class="lant" cx="298" cy="358" rx="12" ry="16"/><path class="lbll" d="M286 352H310M286 364H310"/>'+
     '<text x="44" y="64" class="a">対話 · 志を聴く</text></g>';
  /* 2 entrusted: the survey, the foundation in section, and the plan for the next chapter, drawn as a proposal */
  g+='<g id="sc2"><path class="dim dr" d="M120 470V140M112 470H128M112 330H128M112 212H128M112 140H128M170 508H630M170 500V516M630 500V516M400 500V516"/>'+
     '<path class="sec dr" d="M170 470V488H630V470"/><path class="hat dr" d="'+(function(){var s='';for(var x=178;x<630;x+=10)s+='M'+x+' 488L'+(x+8)+' 472';return s})()+'"/>'+
     '<path class="plan dr" d="M652 470V350H760V470M646 352L668 326H760"/>'+
     '<text x="44" y="64" class="a">承継 · 所有と経営の橋渡し</text></g>';
  /* 3 refining: the extension built, the eave and the upper lattice renewed, a pine set by the door */
  g+='<g id="sc3"><path class="sys dr" d="M652 470V350H760V470Z M646 352L668 326H760 M676 470V398H736V470 M664 372H748"/>'+
     '<path class="frm dr" d="'+lat(684,728,404,466,8)+'"/>'+
     '<path class="pipe dr" d="M150 331H650"/><path class="pipe dr" d="M188 301H612"/>'+
     '<path class="frm dr" d="M146 470V452H166V470M156 452V420M156 432Q140 424 134 430M156 424Q174 414 180 422M156 420Q150 408 160 404"/>'+
     '<text x="44" y="64" class="a">みがきあげ · 企業価値の向上</text></g>';
  /* 4 relay: the house lit for evening, a fresh red noren, and the next chapter handed on */
  g+='<g id="sc4"><path class="lit" d="M230 236H330V276H230ZM350 236H450V276H350ZM470 236H570V276H470Z"/>'+
     '<path class="lit2" d="M180 342H250V452H180ZM550 342H620V452H550ZM676 398H736V470H676Z"/>'+
     '<path class="lit3" d="M344 344H456V392H344Z"/><path class="norl2" d="M381 352V392M419 352V392"/>'+
     '<path class="pipe" d="M24 520H120"/><path class="arr" d="M112 514L122 520L112 526"/>'+
     '<text x="44" y="64" class="a">卒業 · 次の世代へ</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),t:[$("#sc1 text",svg),$("#sc2 text",svg),$("#sc3 text",svg),$("#sc4 text",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    E.g1.style.opacity=(b*Math.max(s1,.55)).toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)*(1-.6*s4)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.g4.style.opacity=(b*s4).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}

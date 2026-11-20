/* the story scene (BL/BY/DB): ONE engraved shop elevation, a display counter with a single product on it, the kind of
   branded consumer good Tengram backs (beauty, wellness, apparel). Each of the firm's four investment principles inks one
   more layer of the same drawing: the brand itself (label, spotlight), risk management (diligence dimensions, the liquid
   level in section, vetted extensions in dashed line), strong management (the designer's sketch and swatches, the
   merchant's shelf light), and kinetic growth (the extensions made real: a full, lit line on both shelves). */
function scene(){
  var mob=MOBILE(),f=function(n){return n.toFixed(1)};
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  /* product outlines */
  function bottle(cx,base,s){var bw=40*s,bh=120*s,nw=12*s,nh=24*s;var top=base-bh;
    return 'M'+f(cx-bw)+' '+f(base)+'V'+f(top+14*s)+'Q'+f(cx-bw)+' '+f(top)+' '+f(cx-bw+14*s)+' '+f(top)+'H'+f(cx-nw)+'V'+f(top-nh)+'H'+f(cx+nw)+'V'+f(top)+'H'+f(cx+bw-14*s)+'Q'+f(cx+bw)+' '+f(top)+' '+f(cx+bw)+' '+f(top+14*s)+'V'+f(base)+'Z'+
      'M'+f(cx-16*s)+' '+f(top-nh)+'V'+f(top-nh-12*s)+'H'+f(cx+16*s)+'V'+f(top-nh)+'Z'+
      'M'+f(cx-9*s)+' '+f(top-nh-12*s)+'V'+f(top-nh-26*s)+'Q'+f(cx)+' '+f(top-nh-40*s)+' '+f(cx+9*s)+' '+f(top-nh-26*s)+'V'+f(top-nh-12*s)}
  function jar(cx,base,s){var w=38*s,hh=40*s;return 'M'+f(cx-w)+' '+f(base)+'V'+f(base-hh)+'H'+f(cx+w)+'V'+f(base)+'Z M'+f(cx-w-3*s)+' '+f(base-hh)+'V'+f(base-hh-16*s)+'H'+f(cx+w+3*s)+'V'+f(base-hh)+'M'+f(cx-w)+' '+f(base-hh*.5)+'H'+f(cx+w)}
  function tube(cx,base,s){var w=16*s,hh=104*s;return 'M'+f(cx-w)+' '+f(base)+'V'+f(base-22*s)+'H'+f(cx+w)+'V'+f(base)+'Z M'+f(cx-w)+' '+f(base-22*s)+'L'+f(cx-w-3*s)+' '+f(base-hh)+'H'+f(cx+w+3*s)+'L'+f(cx+w)+' '+f(base-22*s)+'M'+f(cx-w-3*s)+' '+f(base-hh+8*s)+'H'+f(cx+w+3*s)}
  function box(x,base,w,hh){return 'M'+f(x)+' '+f(base)+'V'+f(base-hh)+'H'+f(x+w)+'V'+f(base)+'Z M'+f(x)+' '+f(base-hh)+'L'+f(x+10)+' '+f(base-hh-8)+'H'+f(x+w+10)+'V'+f(base-8)+'L'+f(x+w)+' '+f(base)+'M'+f(x+w)+' '+f(base-hh)+'L'+f(x+w+10)+' '+f(base-hh-8)}
  var CT=380,SH=150;
  /* base: neatline, floor, the counter and the upper shelf, the hero product, a title block */
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD gr" d="M24 470H776"/><path class="sD kb" d="M24 478H776M24 483H776"/>';
  var hz='';for(var i=0;i<62;i++){var hx=30+i*12;hz+='M'+hx+' 483l-8 8'}g+='<path class="sD ht" d="'+hz+'"/>';
  g+='<path class="sD bl" d="M150 470V'+CT+'H650V470M142 '+CT+'H658V'+(CT+10)+'H142Z M170 470V400H630V470M400 400V470M170 452H630"/>';
  g+='<path class="sD bl" d="M180 '+SH+'H620V'+(SH+8)+'H180Z M210 '+(SH+8)+'L232 '+(SH+34)+'V'+(SH+8)+'M590 '+(SH+8)+'L568 '+(SH+34)+'V'+(SH+8)+'"/>';
  g+='<path class="sD bl" d="'+bottle(400,CT,1)+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 492h228v52h-228Z M548 518h228"/><text x="558" y="510" class="t">ELEVATION · ONE BRAND</text><text x="558" y="536" class="t s">WESTPORT, CONNECTICUT</text></g>';
  g+='</g>';
  /* 1 the brand: its label, and the light it is shown under */
  g+='<g id="sc1"><path class="cone" d="M376 40H424L478 '+CT+'H322Z"/><path class="sD2 fix" d="M370 40H430V30H370Z"/>'+
     '<path class="lbl" d="M366 300H434V350H366Z"/><path class="lbll" d="M376 314H424M376 326H414M376 338H404"/>'+
     '<text x="44" y="64" class="a">THE BRAND</text></g>';
  /* 2 risk management: diligence dimensions, the fill level in section, the extensions drawn as vetted proposals */
  g+='<g id="sc2"><path class="dim dr" d="M474 '+CT+'V196M466 '+CT+'H482M466 196H482M360 '+(CT+28)+'H440"/>'+
     '<path class="sec dr" d="M364 296H436"/><path class="hat dr" d="'+(function(){var s='';for(var y=300;y<376;y+=8)s+='M'+(364)+' '+y+'L'+(372)+' '+(y-8);return s})()+'"/>'+
     '<path class="plan dr" d="'+jar(255,CT,1)+'"/><path class="plan dr" d="'+tube(540,CT,1)+'"/>'+
          '<text x="44" y="64" class="a">DILIGENCE · STRUCTURE</text></g>';
  /* 3 strong management: the designer's sketch on the wall, the merchant's shelf light */
  g+='<g id="sc3"><path class="sys dr" d="M672 190H760V318H672Z"/><path class="frm dr" d="M716 190V180"/>'+
     '<path class="frm dr" d="'+bottle(716,290,.45)+'"/>'+
     '<rect class="sw a1" x="684" y="298" width="14" height="10"/><rect class="sw a2" x="702" y="298" width="14" height="10"/><rect class="sw a3" x="720" y="298" width="14" height="10"/>'+
     '<path class="pipe dr" d="M152 '+(CT+4)+'H648"/><path class="pipe dr" d="M184 '+(SH+11)+'H616"/>'+
     '<text x="44" y="64" class="a">MERCHANTS · DESIGNERS</text></g>';
  /* 4 kinetic growth: the extensions made real, and the line carried onto the upper shelf */
  g+='<g id="sc4"><path class="lit" d="'+jar(255,CT,1)+'"/><path class="lit" d="'+tube(540,CT,1)+'"/>'+
     '<path class="lit" d="'+bottle(258,SH,.58)+'"/><path class="lit2" d="'+box(318,SH,46,60)+'"/><path class="lit" d="'+bottle(460,SH,.58)+'"/><path class="lit2" d="'+jar(536,SH,.78)+'"/>'+
     '<path class="lit3" d="'+bottle(400,CT,1)+'"/>'+
     '<text x="44" y="64" class="a">A LINE THAT GROWS</text></g>';
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
    /* the step labels share one spot: one at a time */
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s2).toFixed(3);
    E.t[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.t[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.t[3].style.opacity=I(s4).toFixed(3);
  };
}

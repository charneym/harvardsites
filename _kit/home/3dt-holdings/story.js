/* the story scene (BL/BY/DB): ONE engraved longitudinal section through a coronary artery, kept on screen throughout; each step adds
   one part of the conductance balloon story as 3DT describes it (NIH RePORTER 1R43HL120517 abstract; 3dtholdings.com R&D):
   an under-deployed stent in a narrowed vessel; the post-dilatation balloon on its catheter; electrodes inside the balloon
   and the current whose voltages give the balloon's cross-sectional area (Ohm's law); the stent expanded and the size read out
   in real time at the bedside. Proportions are schematic; no numbers are shown because none are published. */
function scene(){
  var mob=MOBILE(),LX=mob?600:604;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var X0=24,X1=556,CY=282,RO=132,RI=98,P0=170,P1=430;
  g+='<defs><pattern id="tdHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(243,241,234,.16)" stroke-width="1"/></pattern>'+
     '<pattern id="tdPl" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)"><path d="M0 0V6" stroke="rgba(179,173,85,.35)" stroke-width="1"/></pattern></defs>';
  /* the plaque narrows the lumen between P0 and P1, more on the upper wall */
  function bump(x,amp){if(x<=P0||x>=P1)return 0;var u=(x-P0)/(P1-P0);return amp*Math.pow(Math.sin(Math.PI*u),1.4)}
  function lumen(sign,amp,inset){var d='',n=48;for(var i=0;i<=n;i++){var x=X0+(X1-X0)*i/n,y=CY+sign*(RI-bump(x,amp)-(inset||0));d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return d}
  var UP=46,DN=34;
  /* base: vessel wall (outer and inner surfaces, hatched media) and the frame */
  var wallB='M'+X0+' '+(CY+RO)+'H'+X1+'V'+(CY+RI)+'H'+X0+'Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" d="M'+X0+' '+(CY-RO)+'H'+X1+'V'+(CY-RI)+'H'+X0+'Z"/><path class="hatch" d="'+wallB+'"/>';
  g+='<path class="wl sD" d="M'+X0+' '+(CY-RO)+'H'+X1+'M'+X0+' '+(CY+RO)+'H'+X1+'"/>';
  g+='<path class="wi sD" d="M'+X0+' '+(CY-RI)+'H'+X1+'M'+X0+' '+(CY+RI)+'H'+X1+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · CORONARY ARTERY</text><text x="558" y="538" class="t s">CONDUCTANCE BALLOON · 3DT</text></g>';
  g+='</g>';
  /* 1 the stent: plaque on the wall, the stent struts left narrowed through it */
  function plaque(sign,amp){var d='M'+P0+' '+(CY+sign*RI);for(var i=0;i<=40;i++){var x=P0+(P1-P0)*i/40;d+='L'+x.toFixed(1)+' '+(CY+sign*(RI-bump(x,amp))).toFixed(1)}return d+'Z'}
  function struts(sign,amp,x0,x1,inset){var d='',n=18,w=(x1-x0)/n;for(var i=0;i<=n;i++){var x=x0+w*i,r=RI-bump(x,amp)-inset,y=CY+sign*r,y2=CY+sign*(r-12);d+=(i?'L':'M')+x.toFixed(1)+' '+(i%2?y2:y).toFixed(1)}return d}
  function edge(sign,amp){var d='';for(var i=0;i<=40;i++){var x=P0+(P1-P0)*i/40;d+=(i?'L':'M')+x.toFixed(1)+' '+(CY+sign*(RI-bump(x,amp))).toFixed(1)}return d}
  var S0=150,S1=450;
  g+='<g id="sc1"><path class="pl" d="'+plaque(-1,UP)+'"/><path class="pl" d="'+plaque(1,DN)+'"/>'+
     '<path class="plo dr" d="'+edge(-1,UP)+'"/><path class="plo dr" d="'+edge(1,DN)+'"/>'+
     '<path class="st dr" d="'+struts(-1,UP*1.05,S0,S1,2)+'"/><path class="st dr" d="'+struts(1,DN*1.05,S0,S1,2)+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' '+(CY-RO+10)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(CY-RO+14)+'" class="t c">VESSEL WALL</text>'+
     '<path class="ld2 dr" d="M300 '+(CY-RI+30)+'L'+(X1+20)+' 196H'+(LX-8)+'"/><text x="'+LX+'" y="200" class="t c">PLAQUE</text>'+
     '<path class="ld2 dr" d="M'+(S1-14)+' '+(CY-RI+4)+'L'+(X1+20)+' 238H'+(LX-8)+'"/><text x="'+LX+'" y="242" class="t c">STENT, NARROWED</text>'+
     '<text x="40" y="60" class="a">THE STENT</text></g>';
  /* 2 the balloon: catheter shaft on a guidewire, balloon filling the stent's narrowed waist */
  var B0=190,B1=410,BR=RI-UP-8,bal='M'+B0+' '+(CY-14)+'C'+(B0+14)+' '+(CY-BR)+' '+(B0+30)+' '+(CY-BR)+' '+(B0+44)+' '+(CY-BR)+'H'+(B1-44)+'C'+(B1-30)+' '+(CY-BR)+' '+(B1-14)+' '+(CY-BR)+' '+B1+' '+(CY-14)+
     'V'+(CY+14)+'C'+(B1-14)+' '+(CY+BR)+' '+(B1-30)+' '+(CY+BR)+' '+(B1-44)+' '+(CY+BR)+'H'+(B0+44)+'C'+(B0+30)+' '+(CY+BR)+' '+(B0+14)+' '+(CY+BR)+' '+B0+' '+(CY+14)+'Z';
  g+='<g id="sc2"><path class="sh dr" d="M'+X0+' '+(CY-6)+'H'+B0+'M'+X0+' '+(CY+6)+'H'+B0+'"/><path class="sh dr" d="M'+B0+' '+(CY-3)+'H'+(B1+16)+'M'+B0+' '+(CY+3)+'H'+(B1+16)+'"/>'+
     '<path class="gw dr" d="M'+(B1+16)+' '+CY+'H'+X1+'"/><path class="bal dr" d="'+bal+'"/><path class="balf" d="'+bal+'"/>'+
     '<path class="ld2 dr" d="M'+(B1-24)+' '+(CY+BR-6)+'L'+(X1+20)+' 326H'+(LX-8)+'"/><text x="'+LX+'" y="330" class="t c">BALLOON</text>'+
     '<path class="ld2 dr" d="M'+(X1-12)+' '+CY+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(CY+4)+'" class="t c">GUIDEWIRE</text>'+
     '<text x="40" y="60" class="a">THE BALLOON</text></g>';
  /* 3 the current: electrodes on the inner shaft; current lines through the balloon's fill between the outer pair */
  var EL=[240,280,320,360],cur='';
  [0.42,0.72,1].forEach(function(f){var r=BR*f-6;cur+='M'+(EL[0]+4)+' '+(CY-4)+'C'+(EL[0]+18)+' '+(CY-r)+' '+(EL[3]-18)+' '+(CY-r)+' '+(EL[3]-4)+' '+(CY-4)+'M'+(EL[0]+4)+' '+(CY+4)+'C'+(EL[0]+18)+' '+(CY+r)+' '+(EL[3]-18)+' '+(CY+r)+' '+(EL[3]-4)+' '+(CY+4)});
  g+='<g id="sc3"><path class="cur dr" d="'+cur+'"/>'+EL.map(function(x,i){return '<rect class="'+(i===0||i===3?"ex":"ms")+'" x="'+(x-5)+'" y="'+(CY-6)+'" width="10" height="12"/>'}).join("")+
     '<path class="ld2 dr" d="M'+(EL[3]+6)+' '+(CY+2)+'L'+(X1+20)+' 372H'+(LX-8)+'"/><text x="'+LX+'" y="376" class="t c c3">ELECTRODES</text>'+
     '<path class="ld2 dr" d="M'+((EL[1]+EL[2])/2)+' '+(CY+BR*0.72-10)+'L'+(X1+20)+' 414H'+(LX-8)+'"/><text x="'+LX+'" y="418" class="t c c3">OHM’S LAW</text>'+
     '<text x="40" y="60" class="a">THE CURRENT</text></g>';
  /* 4 the readout: the balloon at the size the stent needs, the stent flush with the wall, its size on the console */
  var BF=RI-20,balF='M'+(B0-10)+' '+(CY-14)+'C'+(B0+6)+' '+(CY-BF)+' '+(B0+26)+' '+(CY-BF)+' '+(B0+44)+' '+(CY-BF)+'H'+(B1-34)+'C'+(B1-16)+' '+(CY-BF)+' '+(B1+4)+' '+(CY-BF)+' '+(B1+20)+' '+(CY-14)+
     'V'+(CY+14)+'C'+(B1+4)+' '+(CY+BF)+' '+(B1-16)+' '+(CY+BF)+' '+(B1-34)+' '+(CY+BF)+'H'+(B0+44)+'C'+(B0+26)+' '+(CY+BF)+' '+(B0+6)+' '+(CY+BF)+' '+(B0-10)+' '+(CY+14)+'Z';
  g+='<g id="sc4"><path class="balx dr" d="'+balF+'"/><path class="stx dr" d="'+struts(-1,0,S0,S1,4)+'"/><path class="stx dr" d="'+struts(1,0,S0,S1,4)+'"/>'+
     '<path class="dim dr" d="M300 '+(CY-BF+6)+'V'+(CY+BF-6)+'M294 '+(CY-BF+14)+'L300 '+(CY-BF+6)+'L306 '+(CY-BF+14)+'M294 '+(CY+BF-14)+'L300 '+(CY+BF-6)+'L306 '+(CY+BF-14)+'"/>'+
     '<path class="con dr" d="M150 452H430V520H150Z"/><path class="conl dr" d="M300 '+(CY+BF+10)+'V452"/>'+
     '<text x="166" y="480" class="t c c4">BALLOON SIZE</text><text x="166" y="504" class="t c4 s">REAL TIME, AT THE BEDSIDE</text>'+
     '<text x="40" y="60" class="a">THE READOUT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)],
    old:$$("#sc1 .st, #sc2 .bal, #sc2 .balf",svg)};
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
    /* at the readout the narrowed stent and the small balloon give way to the expanded ones */
    var q=(1-.8*s[3]).toFixed(3);E.old.forEach(function(el){el.style.opacity=q});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

/* the story scene (BL/BY/DB): ONE engraved section through a stretchable multielectrode array, kept on screen throughout;
   each step adds or moves one part as BMSEED describes it (bmseed.com About Us, sMEA and MEASSuRE pages): microelectrodes
   in a soft, elastically stretchable silicone substrate; cells or tissue grown on the electrodes; the substrate stretched (up
   to 50% strain) with the cells and electrodes stretching together; repeated recording on the same device while a microscope
   images from above. Proportions are schematic. The stretch is one continuous scrubbed motion of the same parts. */
var SC={cx:290,ML:120,MR:460,MY:357,MH:10,EL:[-144,-96,-48,0,48,96,144],CE:[-144,-108,-72,-36,0,36,72,108,144],K:1.4,WT:236};
function scene(){
  var mob=MOBILE(),LX=mob?586:604,cx=SC.cx,MY=SC.MY,MH=SC.MH;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 56 800 472" aria-hidden="true">';
  g+='<defs><pattern id="bmHt" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V9" stroke="rgba(240,237,230,.16)" stroke-width="1"/></pattern></defs>';
  /* the fixed stage under the array */
  g+='<g id="scBase"><rect class="neat" x=".5" y="56.5" width="799" height="471"/>';
  g+='<path class="hatch" d="M40 432H540V460H40Z"/><path class="wl sD" d="M40 432H540"/>';
  /* no title block: the strain arrows run under the stage where it sat */
  g+='</g>';
  /* 1 the array: the silicone substrate between its two grips, gold leads inside, microelectrodes on its face */
  g+='<g id="sc1"><g class="grip" id="gL"><path class="gr" d="M'+(SC.ML-34)+' 338H'+SC.ML+'V432H'+(SC.ML-34)+'Z"/><path class="gi" d="M'+(SC.ML-34)+' '+(MY-3)+'H'+SC.ML+'M'+(SC.ML-34)+' '+(MY+MH+3)+'H'+SC.ML+'"/><path class="wall" d="M'+SC.ML+' '+MY+'V'+SC.WT+'H'+(SC.ML+16)+'V'+MY+'"/></g>'+
     '<g class="grip" id="gR"><path class="gr" d="M'+SC.MR+' 338H'+(SC.MR+34)+'V432H'+SC.MR+'Z"/><path class="gi" d="M'+SC.MR+' '+(MY-3)+'H'+(SC.MR+34)+'M'+SC.MR+' '+(MY+MH+3)+'H'+(SC.MR+34)+'"/><path class="wall" d="M'+SC.MR+' '+MY+'V'+SC.WT+'H'+(SC.MR-16)+'V'+MY+'"/></g>'+
     '<rect class="med" id="med" x="'+(SC.ML+16)+'" y="'+(SC.WT+22)+'" width="'+(SC.MR-SC.ML-32)+'" height="'+(MY-SC.WT-22)+'"/>'+
     '<rect class="mem" id="mem" x="'+SC.ML+'" y="'+MY+'" width="'+(SC.MR-SC.ML)+'" height="'+MH+'"/>'+
     '<path class="lead" id="lead" d="M'+SC.ML+' '+(MY+MH/2)+'H'+SC.MR+'"/>'+
     SC.EL.map(function(o){return '<rect class="el" data-o="'+o+'" x="'+(cx+o-7)+'" y="'+(MY-3)+'" width="14" height="3"/>'}).join("")+
     '<path class="ld2 ldm" id="ldS" d=""/><text x="'+LX+'" y="400" class="t c">SILICONE SUBSTRATE</text>'+
     '<text x="'+LX+'" y="418" class="t c c2">SOFT, STRETCHABLE</text>'+
     '<path class="ld2 ldm" id="ldE" d=""/><text x="'+LX+'" y="344" class="t c">MICROELECTRODES</text>'+
     '<path class="ld2 ldm" id="ldW" d=""/><text x="'+LX+'" y="'+(SC.WT+4)+'" class="t c">CULTURE WELL</text>'+
     '<text x="40" y="96" class="a">THE ARRAY</text></g>';
  /* 2 the tissue: cells sitting on the electrodes, joined by fine processes */
  g+='<g id="sc2"><path class="nr" id="nr" d=""/>'+
     SC.CE.map(function(o){return '<ellipse class="cell" data-o="'+o+'" cx="'+(cx+o)+'" cy="'+(MY-12)+'" rx="15" ry="10"/><circle class="nuc" data-o="'+o+'" cx="'+(cx+o)+'" cy="'+(MY-13)+'" r="3.2"/>'}).join("")+
     '<path class="ld2 ldm" id="ldC" d=""/><text x="'+LX+'" y="284" class="t c">CELLS OR TISSUE</text>'+
     '<text x="40" y="96" class="a">THE TISSUE</text></g>';
  /* 3 the stretch: the grips pull outward and everything on the substrate spreads with it */
  var ax=SC.ML-34-(SC.MR-SC.ML)*(SC.K-1)/2,bx=SC.MR+34+(SC.MR-SC.ML)*(SC.K-1)/2;
  g+='<g id="sc3"><path class="arr dr" d="M'+(ax+50)+' 478H'+ax+'M'+(ax+10)+' 471L'+ax+' 478L'+(ax+10)+' 485"/>'+
     '<path class="arr dr" d="M'+(bx-50)+' 478H'+bx+'M'+(bx-10)+' 471L'+bx+' 478L'+(bx-10)+' 485"/>'+
     '<path class="ld2 dr" d="M'+(bx+6)+' 470L'+(LX-40)+' 452H'+(LX-8)+'"/><text x="'+LX+'" y="456" class="t c c3">UP TO 50% STRAIN</text>'+
     '<text x="40" y="96" class="a">THE STRETCH</text></g>';
  /* 4 the record: the objective images from above; the electrodes read spikes on the same device */
  var sp='M604 176',x=604;[[14,0],[4,-26],[4,34],[5,-8],[22,0],[4,-26],[4,34],[5,-8],[24,0],[4,-26],[4,34],[5,-8],[20,0]].forEach(function(s){x+=s[0];sp+='L'+x+' '+(176+s[1])});
  g+='<g id="sc4"><path class="obj dr" d="M'+(cx-38)+' 70H'+(cx+38)+'V150L'+(cx+20)+' 178H'+(cx-20)+'L'+(cx-38)+' 150Z"/><path class="obj2 dr" d="M'+(cx-38)+' 104H'+(cx+38)+'M'+(cx-38)+' 114H'+(cx+38)+'"/>'+
     '<path class="cone dr" d="M'+(cx-16)+' 182L'+(cx-62)+' 318M'+(cx+16)+' 182L'+(cx+62)+' 318"/>'+
     '<path class="ld2 dr" d="M'+(cx+44)+' 110H'+(LX-8)+'"/><text x="'+LX+'" y="114" class="t c c4">OPTICAL IMAGING</text>'+
     '<path class="spk dr" d="'+sp+'"/><text x="'+LX+'" y="132" class="t c c4">SPIKES, SAME DEVICE</text>'+
     '<text x="40" y="96" class="a">THE RECORD</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t, #sc1 .ldm",svg),$$("#sc2 text.t, #sc2 .ldm",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)],
    els:$$(".el",svg),cells:$$(".cell",svg),nucs:$$(".nuc",svg),mem:$("#mem",svg),lead:$("#lead",svg),gL:$("#gL",svg),gR:$("#gR",svg),nr:$("#nr",svg),
    med:$("#med",svg),ldW:$("#ldW",svg),ldE:$("#ldE",svg),ldC:$("#ldC",svg),ldS:$("#ldS",svg)};
  var LX=svg.classList.contains("mob")?586:604,lastB=-1,lastK=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  /* the one continuous motion: k=1 at rest, SC.K at full stretch; every part on the substrate moves with it */
  function stretch(k){if(Math.abs(k-lastK)<.0005)return;lastK=k;var cx=SC.cx,hw=(SC.MR-SC.ML)/2*k,dx=hw-(SC.MR-SC.ML)/2;
    E.mem.setAttribute("x",(cx-hw).toFixed(2));E.mem.setAttribute("width",(2*hw).toFixed(2));
    E.med.setAttribute("x",(cx-hw+16).toFixed(2));E.med.setAttribute("width",(2*hw-32).toFixed(2));
    E.ldW.setAttribute("d","M"+(cx+hw+2).toFixed(1)+" "+SC.WT+"H"+(LX-8));
    E.lead.setAttribute("d","M"+(cx-hw).toFixed(2)+" "+(SC.MY+SC.MH/2)+"H"+(cx+hw).toFixed(2));
    E.gL.setAttribute("transform","translate("+(-dx).toFixed(2)+" 0)");E.gR.setAttribute("transform","translate("+dx.toFixed(2)+" 0)");
    E.els.forEach(function(r){var o=+r.getAttribute("data-o");r.setAttribute("x",(cx+o*k-7).toFixed(2))});
    var xs=[];E.cells.forEach(function(c,i){var o=+c.getAttribute("data-o"),x=cx+o*k;xs.push(x);c.setAttribute("cx",x.toFixed(2));c.setAttribute("rx",(15*Math.pow(k,.8)).toFixed(2));c.setAttribute("ry",(10/Math.pow(k,.35)).toFixed(2));E.nucs[i].setAttribute("cx",x.toFixed(2))});
    var y=SC.MY-14,d="";for(var i=0;i<xs.length-1;i++){var m=(xs[i]+xs[i+1])/2;d+="M"+(xs[i]+10).toFixed(1)+" "+y+"Q"+m.toFixed(1)+" "+(y-9)+" "+(xs[i+1]-10).toFixed(1)+" "+y}E.nr.setAttribute("d",d);
    /* leaders follow the parts they name; they sit below or above the cell row, never across it */
    var e5=cx+120*k;E.ldE.setAttribute("d","M"+(cx+96*k+8).toFixed(1)+" "+(SC.MY-2)+"L"+e5.toFixed(1)+" "+(SC.MY-2)+"L"+(LX-40)+" 340H"+(LX-8));
    var c6=cx+108*k;E.ldC.setAttribute("d","M"+(c6+6).toFixed(1)+" "+(SC.MY-20)+"L"+(LX-40)+" 280H"+(LX-8));
    var sx=cx+hw-24;E.ldS.setAttribute("d","M"+sx.toFixed(1)+" "+(SC.MY+SC.MH)+"L"+(sx+18).toFixed(1)+" 396H"+(LX-8))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the stretch holds through the record step: the same device, recording after the stretch */
    stretch(1+(SC.K-1)*s[2]);
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=(i===1?b*s[1]:on).toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

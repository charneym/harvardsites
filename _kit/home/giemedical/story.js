/* the story scene (BL/BY/DB): ONE engraved long section of the esophagus (or bowel) kept on screen throughout, with a benign
   stricture in its middle. Each step adds one part, as giemedical.com and its press releases describe ProTractX3: the
   stricture that narrows the lumen and recurs after dilation; the through-the-scope balloon passed down the endoscope's
   working channel and placed across it; the multi-stage balloon inflating to open it; the paclitaxel coating released into
   the stricture with the dilation. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=640,TY=mob?100:60;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"20 40 620 520":"0 0 800 560")+'" aria-hidden="true">';
  /* lumen wall: outer lines straight, inner lines narrowing at the stricture (x 290-510); the dilated inner line opens it */
  function inner(top,d){var y0=top?214:386,s=top?1:-1,yn=y0+s*d;
    return 'M40 '+y0+'H250C290 '+y0+' 300 '+yn+' 340 '+yn+'H460C500 '+yn+' 510 '+y0+' 550 '+y0+'H600'}
  var wallN=inner(1,56)+inner(0,56),wallD=inner(1,14)+inner(0,14);
  function thk(d){return 'M340 '+(214+d)+'H460C500 '+(214+d)+' 510 214 550 214H250C290 214 300 '+(214+d)+' 340 '+(214+d)+'Z M340 '+(386-d)+'H460C500 '+(386-d)+' 510 386 550 386H250C290 386 300 '+(386-d)+' 340 '+(386-d)+'Z'}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="bf" id="gStr" d="'+thk(56)+'"/><path class="bf" id="gStrD" d="'+thk(14)+'" style="opacity:0"/>';
  g+='<path class="wl sD" d="M40 176H600M40 424H600"/>';
  g+='<path class="wl sD" id="gWallN" d="'+wallN+'"/>';
  g+='<path class="wi" id="gWallD" d="'+wallD+'" style="opacity:0"/>';
  g+='<path class="gl sD" d="M40 300H600"/>';
  g+='<g class="tb"><path class="tbl" d="M548 14h228v52h-228Z M548 40h228"/><text x="558" y="32" class="t">ESOPHAGUS · LONG SECTION</text><text x="558" y="58" class="t s">GIE MEDICAL</text></g>';
  g+='</g>';
  /* 1 the stricture */
  g+='<g id="sc1"><path class="ld2 dr" d="M400 266V140H'+(LX-8)+'"/><text x="'+LX+'" y="144" class="t c">BENIGN STRICTURE</text>'+
     '<path class="ld2 dr" d="M570 300H'+(LX-8)+'"/><text x="'+LX+'" y="304" class="t c">NARROWED LUMEN</text>'+
     '<text x="40" y="'+TY+'" class="a">THE STRICTURE</text></g>';
  /* 2 through the scope: the endoscope tip, the catheter from its working channel, the folded balloon across the stricture */
  var scope='M40 262H176Q190 262 190 276V324Q190 338 176 338H40';
  g+='<g id="sc2"><path class="wl dr" d="'+scope+'"/><path class="wi dr" d="M40 300H190"/>'+
     '<path class="cat dr" d="M190 300H560"/>'+
     '<path class="bfold dr" id="gFold" d="M330 300C336 293 344 292 352 292H448C456 292 464 293 470 300C464 307 456 308 448 308H352C344 308 336 307 330 300Z"/>'+
     '<path class="ld2 dr" d="M120 338V470H'+(LX-8)+'"/><text x="'+LX+'" y="474" class="t c">ENDOSCOPE</text>'+
     '<path class="ld2 dr" d="M470 308V444H'+(LX-8)+'"/><text x="'+LX+'" y="448" class="t c">TTS BALLOON</text>'+
     '<text x="40" y="'+TY+'" class="a">THROUGH THE SCOPE</text></g>';
  /* 3 dilation: the balloon inflates and the stricture opens */
  var bal='M296 300C318 300 322 232 346 232H454C478 232 482 300 504 300C482 300 478 368 454 368H346C322 368 318 300 296 300Z';
  g+='<g id="sc3"><path class="bal" id="gBal" d="'+bal+'"/><path class="balo dr" d="'+bal+'"/>'+
          '<path class="ld2 dr" d="M482 262L520 240H'+(LX-8)+'"/><text x="'+LX+'" y="244" class="t c">3-STAGE BALLOON</text>'+
     '<text x="40" y="'+TY+'" class="a">DILATION</text></g>';
  /* 4 paclitaxel: the coating passes into the stricture wall */
  var rnd=function(i){var x=Math.sin(i*12.9898+4.1)*43758.5453;return x-Math.floor(x)},dots='';
  for(var i=0;i<44;i++){var x=346+rnd(i)*108,top=i%2===0,y=top?(196+rnd(i+50)*26):(378+rnd(i+50)*26);dots+='<circle class="px" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="2.3"/>'}
  g+='<g id="sc4">'+dots+
     '<path class="ld2 dr" d="M452 404L520 404H'+(LX-8)+'"/><text x="'+LX+'" y="408" class="t c">PACLITAXEL IN</text><text x="'+LX+'" y="426" class="t c">THE STRICTURE WALL</text>'+
     '<text x="40" y="'+TY+'" class="a">PACLITAXEL</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
  var str=$("#gStr",svg),strD=$("#gStrD",svg),wN=$("#gWallN",svg),wD=$("#gWallD",svg),fold=$("#gFold",svg),bal=$("#gBal",svg),px=$$("#sc4 .px",svg);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* step 1's leaders step back once the scope is in; the stricture opens as the balloon inflates */
    E.g[0].style.opacity=(b*(1-.85*s[1])).toFixed(3);
    var open=s[2];
    wN.style.opacity=(1-open).toFixed(3);wD.style.opacity=open.toFixed(3);
    str.style.opacity=(b*(1-open)).toFixed(3);strD.style.opacity=(b*open).toFixed(3);
    fold.style.opacity=(1-open).toFixed(3);
    bal.style.opacity=(.55*open*(1-.4*s[3])).toFixed(3);
    px.forEach(function(el,k){var d=Math.max(0,Math.min(1,s[3]*1.4-((k*37)%10)/25));el.style.opacity=d.toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

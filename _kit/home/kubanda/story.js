/* the story scene (BL/BY/DB): ONE engraved cross-section through a pet's skin and a subcutaneous mass, kept on screen throughout;
   each step adds one part of the procedure as kubandacryotherapy.com (Vets, Products) describes it: a mass below the skin's surface;
   the cryoprobe inserted into the tumor while the skin is protected against the cold; freezing cycles that kill cells through
   intracellular ice crystals; the tumor shrinking as the frozen tissue dies back. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?586:604,X0=24,X1=556;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="kuHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(243,247,250,.12)" stroke-width="1"/></pattern>'+
     '<pattern id="kuIce" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M11 5v12M5.8 8l10.4 6M5.8 14l10.4-6" stroke="rgba(67,180,227,.55)" stroke-width=".9" fill="none"/></pattern>'+
     '<clipPath id="kuSub"><path d="M'+X0+' 204H'+X1+'V440H'+X0+'Z"/></clipPath></defs>';
  /* skin surface: a gentle wave with fur above it */
  var sk='M'+X0+' 172';for(var x=X0;x<=X1;x+=19){sk+='Q'+(x+9.5)+' '+(x%38?168:176)+' '+(x+19)+' 172'}
  var fur='';for(var f=X0+6;f<X1;f+=13){var a=((f*37)%11)-5;fur+='M'+f+' 170q'+(4+a*.6)+' -14 '+(10+a)+' -26'}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="fur" d="'+fur+'"/>';
  g+='<path class="wl sD" d="'+sk+'"/><path class="wi sD" d="M'+X0+' 204H'+X1+'"/><path class="wi sD" d="M'+X0+' 440H'+X1+'"/>';
  g+='<path class="hatch" d="M'+X0+' 444H'+X1+'V476H'+X0+'Z"/><path class="wi sD" d="M'+X0+' 476H'+X1+'"/>';
  g+='<text x="'+LX+'" y="176" class="t c">SKIN</text><text x="'+LX+'" y="214" class="t">SUBCUTIS</text><text x="'+LX+'" y="462" class="t">MUSCLE</text>';
  g+='<path class="ld2" d="M'+(X1+4)+' 172H'+(LX-8)+'M'+(X1+4)+' 210H'+(LX-8)+'M'+(X1+4)+' 458H'+(LX-8)+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · SKIN AND SUBCUTIS</text><text x="558" y="538" class="t s">CRYODUO · KUBANDA</text></g>';
  g+='</g>';
  /* 1 the mass: a lobulated subcutaneous tumor */
  var TX=290,TY=318;
  function blob(rx,ry){var p='',n=96;for(var i=0;i<=n;i++){var t=i/n*Math.PI*2,r=1+.045*Math.sin(t*5+.6)+.03*Math.cos(t*3);var x=TX+Math.cos(t)*rx*r,y=TY+Math.sin(t)*ry*r;p+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return p+'Z'}
  var lob='';[[-46,-12,28,18],[16,-24,30,19],[-8,20,36,20],[52,12,24,16]].forEach(function(b){lob+='M'+(TX+b[0]-b[2])+' '+(TY+b[1])+'a'+b[2]+' '+b[3]+' 0 1 0 '+(2*b[2])+' 0a'+b[2]+' '+b[3]+' 0 1 0 '+(-2*b[2])+' 0'});
  g+='<g id="sc1"><path class="tum" id="kuTum" d="'+blob(112,74)+'"/><path class="lob dr" d="'+lob+'"/><path class="wl dr" d="'+blob(112,74)+'"/>'+
     '<path class="ld2 dr" d="M'+(TX+112)+' 300L'+(X1+20)+' 290H'+(LX-8)+'"/><text x="'+LX+'" y="294" class="t c">SUBCUTANEOUS MASS</text><text x="'+LX+'" y="312" class="t c c2">BENIGN OR MALIGNANT</text>'+
     '<text x="40" y="60" class="a">THE MASS</text></g>';
  /* 2 the probe: handpiece above the skin, shaft to the centre of the mass, an insulating sleeve where it crosses the skin */
  var PX=520,PY=34,QX=TX+6,QY=TY,ang=Math.atan2(QY-PY,QX-PX),deg=ang*180/Math.PI;
  function at(y){var s=(y-PY)/(QY-PY);return [PX+(QX-PX)*s,y]}
  var s1=at(150),s2=at(214),hp=at(96);
  g+='<g id="sc2"><path class="shaft dr" d="M'+PX+' '+PY+'L'+QX+' '+QY+'"/>'+
     '<path class="tip" d="M'+(QX-1)+' '+(QY-1)+'l'+(Math.cos(ang)*-14).toFixed(1)+' '+(Math.sin(ang)*-14).toFixed(1)+'"/>'+
     '<g transform="translate('+hp[0].toFixed(1)+' '+hp[1].toFixed(1)+') rotate('+deg.toFixed(1)+')"><path class="hand" d="M-96 -12C-70 -14 -50 -24 -24 -22C2 -20 16 -9 30 -5L36 -4V4L30 5C16 9 2 18 -24 20C-50 22 -70 14 -96 12Q-104 0 -96 -12Z"/><path class="band" d="M-12 -21C-4 -12 0 -2 -2 19"/></g>'+
     '<path class="slv" d="M'+s1[0].toFixed(1)+' '+s1[1]+'L'+s2[0].toFixed(1)+' '+s2[1]+'"/>'+
     '<path class="ld2 dr" d="M'+(s1[0]+16).toFixed(1)+' 164L'+(X1+20)+' 134H'+(LX-8)+'"/><text x="'+LX+'" y="132" class="t c">SKIN PROTECTED</text><text x="'+LX+'" y="150" class="t c c2">AGAINST THE COLD</text>'+
     '<path class="ld2 dr" d="M'+(hp[0]+44).toFixed(1)+' '+(hp[1]-14).toFixed(1)+'L'+(X1+20)+' 70H'+(LX-8)+'"/><text x="'+LX+'" y="74" class="t c">CRYOPROBE</text>'+
     '<text x="40" y="60" class="a">THE PROBE</text></g>';
  /* 3 the freeze: an ice ball grows from the tip through the mass; ice crystals form inside the cells */
  g+='<g id="sc3"><g clip-path="url(#kuSub)"><ellipse class="ice" cx="'+QX+'" cy="'+QY+'" rx="122" ry="84"/>'+
     [46,78,108].map(function(r,i){return '<ellipse class="iso dr" cx="'+QX+'" cy="'+QY+'" rx="'+r+'" ry="'+(r*.69).toFixed(1)+'"/>'}).join("")+
     '<ellipse class="iso2 dr" cx="'+QX+'" cy="'+QY+'" rx="122" ry="84"/></g>'+
     '<path class="ld2 dr" d="M'+(QX+118)+' 350L'+(X1+20)+' 370H'+(LX-8)+'"/><text x="'+LX+'" y="368" class="t c c3">ICE BALL</text><text x="'+LX+'" y="386" class="t c c3">FREEZING CYCLES</text>'+
     '<path class="ld2 dr" d="M'+(QX-60)+' '+(QY+30)+'L'+(X0+40)+' 420"/><text x="'+(X0+44)+'" y="424" class="t c c3">INTRACELLULAR ICE</text>'+
     '<text x="40" y="60" class="a">THE FREEZE</text></g>';
  /* 4 the healing: the probe is out, the frozen tissue dies back and the mass shrinks; the skin is intact */
  g+='<g id="sc4"><path class="tum2" d="'+blob(46,30)+'"/><path class="wl dr" d="'+blob(46,30)+'"/>'+
     '<path class="ghost" d="'+blob(112,74)+'"/>'+
     '<path class="ld2 dr" d="M'+(TX+46)+' '+(TY+6)+'L'+(X1+20)+' 330H'+(LX-8)+'"/><text x="'+LX+'" y="334" class="t c c4">TUMOR SHRINKS</text>'+
     '<path class="ld2 dr" d="M410 170L'+(X1+20)+' 100H'+(LX-8)+'"/><text x="'+LX+'" y="104" class="t c c4">SKIN INTACT</text>'+
     '<text x="40" y="60" class="a">THE HEALING</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch, #scBase .fur, #scBase text, #scBase .ld2",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)],
    tum:$("#kuTum",svg),lobs:$$("#sc1 .lob, #sc1 .wl",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* parts accumulate; at the last step the probe and the ice withdraw and the original mass recedes to a ghost outline */
    var out=1-s[3];
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      if(i===1||i===2)on*=out;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    E.lobs.forEach(function(el){el.style.opacity=(1-.85*s[3]).toFixed(3)});
    if(E.tum)E.tum.style.opacity=(1-s[3]).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

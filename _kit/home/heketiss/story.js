/* the story scene (BL/BY/DB): ONE engraved section through the skin at a chronic wound, kept on screen throughout; each step adds
   one part as heketiss.ch ("The unmet medical need", "Our solution") describes it: a wound bed without a functional vascular
   network; TrophiPatch laid on the wound (donor adipose-derived stem cells in an active supporting matrix); the cells' angiogenic
   and regenerative growth factors; new blood vessels forming in the wound bed and new tissue. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=592,X0=24,X1=566,S=200,E=224,D=432,B=476;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"14 36 566 456":"0 0 800 560")+'" aria-hidden="true">';
  var crater='C205 202 208 240 222 270C240 305 350 305 368 270C382 240 385 202 410 200';
  g+='<defs><clipPath id="hkSkin"><path d="M'+X0+' '+S+'H180'+crater+'H'+X1+'V'+D+'H'+X0+'Z"/></clipPath>'+
     '<clipPath id="hkFat"><path d="M'+X0+' '+D+'H'+X1+'V'+B+'H'+X0+'Z"/></clipPath>'+
     '<marker id="hkAr" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M1 1L7 4L1 7" fill="none" stroke="#e85a68" stroke-width="1.2"/></marker></defs>';
  /* base: epidermis cells, dermal fibres, subcutaneous fat (adipocytes) */
  var fib='';for(var y=E+14;y<D-6;y+=14){fib+='M'+X0+' '+y;for(var x=X0;x<=X1;x+=36)fib+='Q'+(x+18)+' '+(y+((x/36)%2?3.5:-3.5))+' '+(x+36)+' '+y}
  var tick='';for(var x2=X0+4;x2<X1;x2+=7){if(x2>186&&x2<404)continue;tick+='M'+x2+' '+(S+4)+'v'+(E-S-8)}
  var fat='';for(var r=0;r<3;r++)for(var c=0;c<30;c++){var cx=X0+10+c*19+(r%2?9:0),cy=D+10+r*15;fat+='<circle cx="'+cx+'" cy="'+cy+'" r="7.2"/>'}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<g class="hatch"><path class="fib" d="'+fib+'" clip-path="url(#hkSkin)"/><path class="tk" d="'+tick+'"/><g class="fat" clip-path="url(#hkFat)">'+fat+'</g></g>';
  g+='<path class="wl sD" d="M'+X0+' '+S+'H180'+crater+'H'+X1+'"/>';
  g+='<path class="wi sD" d="M'+X0+' '+E+'H205M385 '+E+'H'+X1+'M'+X0+' '+D+'H'+X1+'"/>';
  g+='<path class="wl sD" d="M'+X0+' '+B+'H'+X1+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · CHRONIC WOUND</text><text x="558" y="538" class="t s">HEKETISS</text></g>';
  g+='</g>';
  /* 1 the wound: the vessels stop short of the wound bed */
  g+='<g id="sc1"><path class="ves dr" d="M'+X0+' 396C80 386 120 406 168 394C186 390 198 392 206 396"/>'+
     '<path class="ves dr" d="M'+X1+' 392C510 404 470 384 420 396C404 400 394 398 386 396"/>'+
     '<path class="ves th dr" d="M118 398C128 360 116 330 136 300M482 390C470 352 486 322 466 292"/>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' 212H'+(LX-8)+'"/><text x="'+LX+'" y="216" class="t c">EPIDERMIS</text>'+
     '<path class="ld2 dr" d="M360 285L'+(X1+20)+' 284H'+(LX-8)+'"/><text x="'+LX+'" y="288" class="t c c2">WOUND BED</text>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' 330H'+(LX-8)+'"/><text x="'+LX+'" y="334" class="t c">DERMIS</text>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' 404H'+(LX-8)+'"/><text x="'+LX+'" y="408" class="t c">BLOOD VESSELS</text>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' 454H'+(LX-8)+'"/><text x="'+LX+'" y="458" class="t c">FAT TISSUE</text>'+
     '<text x="40" y="60" class="a">THE WOUND</text></g>';
  /* 2 TrophiPatch laid on the wound: a porous matrix carrying donor stem cells */
  var sd=7;function rnd(){sd=(sd*16807)%2147483647;return sd/2147483647}
  var por='',cel='';for(var i=0;i<70;i++){por+='<circle cx="'+(172+rnd()*246).toFixed(1)+'" cy="'+(172+rnd()*22).toFixed(1)+'" r="'+(1.2+rnd()*2.2).toFixed(1)+'"/>'}
  for(var k=0;k<11;k++){var ex=184+k*22.5+(rnd()-.5)*8,ey=177+(k%3)*6+(rnd()-.5)*3,an=(rnd()-.5)*50;
    cel+='<g transform="translate('+ex.toFixed(1)+' '+ey.toFixed(1)+') rotate('+an.toFixed(0)+')"><ellipse class="cel" rx="8" ry="3.6"/><circle class="nuc" r="1.7"/></g>'}
  g+='<g id="sc2"><path class="pat" d="M166 168H424V198H166Z"/><g class="por">'+por+'</g>'+cel+
     '<path class="pato dr" d="M166 168H424V198H166Z"/>'+
     '<path class="ld2 dr" d="M430 174H'+(LX-8)+'"/><text x="'+LX+'" y="170" class="t c c3">TROPHIPATCH</text><text x="'+LX+'" y="186" class="t c c3">DONOR STEM CELLS</text>'+
     '<text x="40" y="60" class="a">THE PATCH</text></g>';
  /* 3 growth factors diffusing from the cells into the wound bed */
  var gf='';sd=11;for(var j=0;j<64;j++){var t=rnd(),yy=206+t*92,half=(1-t*.6)*92,xx=295+(rnd()*2-1)*half*.95;gf+='<circle cx="'+xx.toFixed(1)+'" cy="'+yy.toFixed(1)+'" r="'+(1.3+rnd()*1.1).toFixed(1)+'"/>'}
  g+='<g id="sc3"><g class="gf">'+gf+'</g>'+
     '<path class="arr dr" d="M240 204C238 224 236 240 236 258" marker-end="url(#hkAr)"/><path class="arr dr" d="M295 204V270" marker-end="url(#hkAr)"/><path class="arr dr" d="M350 204C352 224 354 240 354 258" marker-end="url(#hkAr)"/>'+
     '<path class="ld2 dr" d="M376 248H'+(LX-8)+'"/><text x="'+LX+'" y="252" class="t c c4">GROWTH FACTORS</text>'+
     '<text x="40" y="60" class="a">THE SIGNALS</text></g>';
  /* 4 new vessels sprout into the wound bed; new tissue fills it */
  g+='<g id="sc4"><path class="nt" d="M222 270C240 305 350 305 368 270C362 262 228 262 222 270Z"/>'+
     '<path class="nvs dr" d="M206 396C258 410 334 410 386 396"/>'+
     '<path class="nvs dr" d="M206 396C232 380 240 340 250 296M214 398C262 396 280 360 292 306M386 396C360 380 352 340 342 296M378 398C330 398 312 360 300 306"/>'+
     '<path class="nvs th dr" d="M248 340C262 332 270 318 270 300M344 340C330 332 322 318 322 300"/>'+
     '<path class="ld2 dr" d="M352 340L'+(X1+20)+' 360H'+(LX-8)+'"/><text x="'+LX+'" y="364" class="t c c5">NEW VESSELS</text><text x="'+LX+'" y="380" class="t c c5">NEW TISSUE</text>'+
     '<text x="40" y="60" class="a">THE VESSELS</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    f:[[],$$("#sc2 .pat, #sc2 .por, #sc2 g[transform]",svg),$$("#sc3 .gf",svg),$$("#sc4 .nt",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
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
      var fv=Math.max(0,Math.min(1,s[i]*1.6-.3));E.f[i].forEach(function(el){el.style.opacity=fv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

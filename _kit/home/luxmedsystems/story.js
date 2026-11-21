/* the story scene (BL/BY/DB): ONE engraved section through the atrial wall, kept on screen throughout; each step adds one part
   as luxmedsystems.com describes it: a line of ablation lesions with an undetected gap of living muscle; the catheter's optical
   tissue interrogation at the gap; the read-out (a high signal in the green band = active viable muscle, in the yellow band =
   fibrotic scar), seen even in electrically stunned tissue; the gap treated in the same procedure. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=592;
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"14 36 566 440":"0 0 800 560")+'" aria-hidden="true">';
  var X0=24,X1=566,T=318,B=440,GX=310,LC=[78,194,426,542],RW=62;
  g+='<defs><pattern id="lxHt" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="rgba(227,181,74,.34)" stroke-width="1"/></pattern>'+
     '<clipPath id="lxWall"><path d="M'+X0+' '+T+'H'+X1+'V'+B+'H'+X0+'Z"/></clipPath></defs>';
  /* the wall: endocardium on top (blood side), myocardial fibres, epicardium below */
  var fib='';for(var y=T+14;y<B-4;y+=13){fib+='M'+X0+' '+y;for(var x=X0;x<=X1;x+=34)fib+='Q'+(x+17)+' '+(y+((x/34)%2?3:-3))+' '+(x+34)+' '+y}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="fib" d="'+fib+'" clip-path="url(#lxWall)"/>';
  g+='<path class="wl sD" d="M'+X0+' '+T+'H'+X1+'M'+X0+' '+B+'H'+X1+'"/>';
  g+='<path class="wi sD" d="M'+X0+' '+(T-8)+'H'+X1+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">SECTION · ATRIAL WALL</text><text x="558" y="538" class="t s">LUXMED SYSTEMS</text></g>';
  g+='</g>';
  /* 1 the line of lesions, with one gap of living muscle */
  function les(c,cls){return '<path class="'+cls+'" d="M'+(c-RW)+' '+T+'C'+(c-RW)+' '+(B+6)+' '+(c+RW)+' '+(B+6)+' '+(c+RW)+' '+T+'Z"/>'}
  g+='<g id="sc1">'+LC.map(function(c){return les(c,"lz")+les(c,"lzo dr")}).join("")+
     '<path class="gapb dr" d="M'+(GX-48)+' '+(T-22)+'V'+(T-30)+'H'+(GX+48)+'V'+(T-22)+'"/>'+
     '<path class="ld2 dr" d="M'+(X1+2)+' '+(T-30)+'H'+(LX-8)+'"/><text x="'+LX+'" y="'+(T-26)+'" class="t c">BLOOD POOL</text>'+
     '<path class="ld2 dr" d="M'+(LC[3]+20)+' 380L'+(X1+20)+' 388H'+(LX-8)+'"/><text x="'+LX+'" y="392" class="t c">ABLATION LESION</text>'+
     '<path class="ld2 dr" d="M'+(GX+20)+' '+(T+50)+'L'+(GX+70)+' 474H'+(LX-8)+'"/><text x="'+LX+'" y="478" class="t c c2">GAP · LIVING MUSCLE</text>'+
     '<text x="40" y="60" class="a">THE GAP</text></g>';
  /* 2 the catheter on the gap, its window lighting the tissue */
  var cath='<path class="cth" d="M'+(GX-15)+' 96V'+(T-16)+'A15 15 0 0 0 '+(GX+15)+' '+(T-16)+'V96"/>';
  [[T-60,T-49],[T-86,T-75],[T-112,T-101]].forEach(function(r){cath+='<path class="ring" d="M'+(GX-15)+' '+r[0]+'h30v'+(r[1]-r[0])+'h-30Z"/>'});
  cath+='<path class="ring" d="M'+(GX-15)+' '+(T-40)+'V'+(T-16)+'A15 15 0 0 0 '+(GX+15)+' '+(T-16)+'V'+(T-40)+'Z"/>';
  var rays='';[-34,-17,0,17,34].forEach(function(o){rays+='M'+GX+' '+(T-2)+'L'+(GX+o*1.25)+' '+(T+62)});
  g+='<g id="sc2">'+cath+'<path class="win" d="M'+(GX-7)+' '+(T-3)+'H'+(GX+7)+'"/><path class="ray dr" d="'+rays+'"/>'+
     '<path class="ld2 dr" d="M'+(GX+22)+' 124H'+(LX-8)+'"/><text x="'+LX+'" y="128" class="t c">ABLATION CATHETER</text>'+
     '<path class="ld2 dr" d="M'+(GX+18)+' '+(T-4)+'L'+(X1+20)+' 214H'+(LX-8)+'"/><text x="'+LX+'" y="210" class="t c c3">OPTICAL WINDOW</text><text x="'+LX+'" y="228" class="t c c3">LIGHT INTO TISSUE</text>'+
     '<text x="40" y="60" class="a">THE LIGHT</text></g>';
  /* 3 the read-out at the gap: a strong green band (viable muscle), a weak yellow band (scar) */
  var IX=44,IY=96,IW=212,IH=150;
  var curve='M'+(IX+8)+' '+(IY+IH-14);
  [[.12,.86],[.2,.66],[.27,.62],[.34,.74],[.42,.8],[.52,.42],[.6,.18],[.68,.24],[.76,.6],[.86,.8],[.96,.86]].forEach(function(p){curve+='L'+(IX+p[0]*IW).toFixed(1)+' '+(IY+p[1]*IH).toFixed(1)});
  g+='<g id="sc3"><path class="ibox" d="M'+IX+' '+IY+'h'+IW+'v'+IH+'h-'+IW+'Z"/>'+
     '<rect class="bY" x="'+(IX+.18*IW)+'" y="'+(IY+6)+'" width="'+(.14*IW)+'" height="'+(IH-12)+'"/>'+
     '<rect class="bG" x="'+(IX+.5*IW)+'" y="'+(IY+6)+'" width="'+(.2*IW)+'" height="'+(IH-12)+'"/>'+
     '<path class="spec dr" d="'+curve+'"/>'+
     '<text x="'+(IX+.25*IW)+'" y="'+(IY+IH+18)+'" class="t c bl y" text-anchor="middle">SCAR</text><text x="'+(IX+.6*IW)+'" y="'+(IY+IH+18)+'" class="t c bl gr" text-anchor="middle">VIABLE</text>'+
     '<text x="'+IX+'" y="'+(IY-10)+'" class="t c">SPECTRUM AT THE TIP</text>'+
     '<path class="ld dr" d="M'+(IX+IW)+' '+(IY+IH*.5)+'C'+(GX-60)+' '+(IY+IH*.5)+' '+(GX-30)+' '+(T-30)+' '+(GX-17)+' '+(T-20)+'"/>'+
     '<path class="ld2 dr" d="M'+(GX+30)+' '+(T+28)+'L'+(X1+20)+' 340H'+(LX-8)+'"/><text x="'+LX+'" y="336" class="t c c4">STUNNED, STILL VIABLE</text>'+
     '<text x="40" y="60" class="a">THE READING</text></g>';
  /* 4 the gap closed in the same procedure */
  g+='<g id="sc4">'+les(GX,"lz nw")+les(GX,"lzo nwo dr")+
     '<path class="ld2 dr" d="M'+(GX+40)+' '+(T+76)+'L'+(X1+20)+' 432H'+(LX-8)+'"/><text x="'+LX+'" y="436" class="t c c4">GAP CLOSED</text><text x="'+LX+'" y="454" class="t c c4">SAME PROCEDURE</text>'+
     '<text x="40" y="60" class="a">THE CLOSE</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)]};
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
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

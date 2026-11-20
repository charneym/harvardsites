/* the story scene (BL/BY/DB): ONE engraved drawing kept on screen throughout, built up step by step from the NIH and NSF
   records: two headsets (DUET is for pairs, an older adult and the family member who cares for them, on low-cost commercial
   headsets); a networked shared world, drawn as a floating island like the ones in VRTogether's own games; music (singing,
   music therapy, rhythm); and the Phase II study's measures (40 pairs, six months, NIH Toolbox cognition first). */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  function headset(x,y){
    return '<path class="sD hs" d="M'+(x-82)+' '+(y-10)+'C'+(x-82)+' '+(y-38)+' '+(x-66)+' '+(y-44)+' '+(x-40)+' '+(y-44)+'H'+(x+40)+'C'+(x+66)+' '+(y-44)+' '+(x+82)+' '+(y-38)+' '+(x+82)+' '+(y-10)+'V'+(y+10)+'C'+(x+82)+' '+(y+36)+' '+(x+66)+' '+(y+44)+' '+(x+40)+' '+(y+44)+'H'+(x+16)+'C'+(x+8)+' '+(y+44)+' '+(x+6)+' '+(y+28)+' '+x+' '+(y+28)+'C'+(x-6)+' '+(y+28)+' '+(x-8)+' '+(y+44)+' '+(x-16)+' '+(y+44)+'H'+(x-40)+'C'+(x-66)+' '+(y+44)+' '+(x-82)+' '+(y+36)+' '+(x-82)+' '+(y+10)+'Z"/>'+
      '<path class="sD hsi" d="M'+(x-70)+' '+(y-8)+'C'+(x-70)+' '+(y-28)+' '+(x-58)+' '+(y-33)+' '+(x-38)+' '+(y-33)+'H'+(x+38)+'C'+(x+58)+' '+(y-33)+' '+(x+70)+' '+(y-28)+' '+(x+70)+' '+(y-8)+'"/>'+
      '<path class="sD strap" d="M'+(x-80)+' '+(y-24)+'C'+(x-96)+' '+(y-92)+' '+(x+96)+' '+(y-92)+' '+(x+80)+' '+(y-24)+'M'+(x-82)+' '+(y+2)+'L'+(x-104)+' '+(y-6)+'M'+(x+82)+' '+(y+2)+'L'+(x+104)+' '+(y-6)+'"/>'+
      '<circle class="cam" cx="'+(x-58)+'" cy="'+(y-16)+'" r="3.2"/><circle class="cam" cx="'+(x+58)+'" cy="'+(y-16)+'" r="3.2"/><circle class="cam" cx="'+(x-58)+'" cy="'+(y+22)+'" r="3.2"/><circle class="cam" cx="'+(x+58)+'" cy="'+(y+22)+'" r="3.2"/>';
  }
  var A=[170,160],B=[630,160];
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>'+headset(A[0],A[1])+headset(B[0],B[1])+'</g>';
  /* 1 the pair */
  g+='<g id="sc1"><text x="'+A[0]+'" y="'+(A[1]+80)+'" class="t c" text-anchor="middle">CARE PARTNER</text><text x="'+B[0]+'" y="'+(B[1]+80)+'" class="t c" text-anchor="middle">OLDER ADULT</text>'+
     '<path class="ld2 dr" d="M'+(A[0]-50)+' '+(A[1]+92)+'H'+(A[0]+50)+'M'+(B[0]-50)+' '+(B[1]+92)+'H'+(B[0]+50)+'"/>'+
     '<text x="'+A[0]+'" y="'+(A[1]+112)+'" class="t s" text-anchor="middle">AT HOME</text><text x="'+B[0]+'" y="'+(B[1]+112)+'" class="t s" text-anchor="middle">AT HOME</text>'+
     '<text x="40" y="52" class="a">THE PAIR</text></g>';
  /* 2 one shared world: a floating island, two avatars, networked to both headsets */
  var IX=400,IY=330;
  var top='M'+(IX-150)+' '+IY+'C'+(IX-150)+' '+(IY-24)+' '+(IX-80)+' '+(IY-36)+' '+IX+' '+(IY-36)+'C'+(IX+80)+' '+(IY-36)+' '+(IX+150)+' '+(IY-24)+' '+(IX+150)+' '+IY+'C'+(IX+150)+' '+(IY+22)+' '+(IX+80)+' '+(IY+32)+' '+IX+' '+(IY+32)+'C'+(IX-80)+' '+(IY+32)+' '+(IX-150)+' '+(IY+22)+' '+(IX-150)+' '+IY+'Z';
  var rock='M'+(IX-150)+' '+IY+'L'+(IX-128)+' '+(IY+44)+'L'+(IX-96)+' '+(IY+58)+'L'+(IX-70)+' '+(IY+92)+'L'+(IX-30)+' '+(IY+104)+'L'+(IX-4)+' '+(IY+128)+'L'+(IX+22)+' '+(IY+100)+'L'+(IX+64)+' '+(IY+88)+'L'+(IX+92)+' '+(IY+56)+'L'+(IX+126)+' '+(IY+42)+'L'+(IX+150)+' '+IY;
  var strata='M'+(IX-118)+' '+(IY+40)+'L'+(IX-84)+' '+(IY+52)+'M'+(IX-52)+' '+(IY+74)+'L'+(IX-18)+' '+(IY+84)+'M'+(IX+30)+' '+(IY+72)+'L'+(IX+70)+' '+(IY+62)+'M'+(IX-6)+' '+(IY+100)+'L'+(IX+8)+' '+(IY+110)+'M'+(IX+96)+' '+(IY+40)+'L'+(IX+120)+' '+(IY+36);
  function tree(x,y,s){return 'M'+x+' '+(y-34*s)+'L'+(x-13*s)+' '+(y-8*s)+'H'+(x+13*s)+'Z M'+x+' '+(y-22*s)+'L'+(x-16*s)+' '+(y+2*s)+'H'+(x+16*s)+'Z M'+x+' '+(y+2*s)+'V'+(y+10*s)}
  function av(x,y){return '<circle class="avh" cx="'+x+'" cy="'+(y-26)+'" r="7"/><path class="avb" d="M'+(x-11)+' '+y+'C'+(x-11)+' '+(y-12)+' '+(x-6)+' '+(y-16)+' '+x+' '+(y-16)+'C'+(x+6)+' '+(y-16)+' '+(x+11)+' '+(y-12)+' '+(x+11)+' '+y+'Z"/>'}
  g+='<g id="sc2"><path class="rock dr" d="'+rock+'"/><path class="isl" d="'+top+'"/><path class="ht dr" d="'+strata+'"/>'+
     '<path class="tree dr" d="'+tree(IX-104,IY-4,1)+tree(IX+108,IY-6,.85)+tree(IX+128,IY+2,.6)+'"/>'+
     '<path class="gr dr" d="M'+(IX-60)+' '+(IY+12)+'l4 -8 4 8M'+(IX+54)+' '+(IY+16)+'l4 -8 4 8M'+(IX-20)+' '+(IY+22)+'l3 -6 3 6"/>'+
     '<g class="avA">'+av(IX-30,IY+4)+'</g><g class="avB">'+av(IX+30,IY+4)+'</g>'+
     '<path class="net dr" d="M'+A[0]+' '+(A[1]+128)+'C'+A[0]+' '+(IY-20)+' '+(IX-80)+' '+(IY-64)+' '+(IX-32)+' '+(IY-38)+'M'+B[0]+' '+(B[1]+128)+'C'+B[0]+' '+(IY-20)+' '+(IX+80)+' '+(IY-64)+' '+(IX+32)+' '+(IY-38)+'"/>'+
     '<path class="ld2 dr" d="M'+(IX+152)+' '+(IY+30)+'L'+(IX+190)+' '+(IY+62)+'H'+(IX+232)+'"/><text x="'+(IX+240)+'" y="'+(IY+66)+'" class="t c">ONE SHARED WORLD</text>'+
     '<text x="40" y="52" class="a">THE WORLD</text></g>';
  /* 3 the song: a stave arcing between the two headsets, notes rising */
  var st='';for(var i=0;i<5;i++){var yy=150-i*9;st+='M282 '+(yy+16)+'Q400 '+(yy-22)+' 518 '+(yy+16)}
  var notes=[[318,146],[352,128],[388,124],[424,118],[462,130]];
  var nh='',ns='';notes.forEach(function(n){nh+='<ellipse class="note" cx="'+n[0]+'" cy="'+n[1]+'" rx="6.4" ry="4.6" transform="rotate(-20 '+n[0]+' '+n[1]+')"/>';ns+='M'+(n[0]+5.6)+' '+(n[1]-2)+'V'+(n[1]-30)});
  ns+='M'+(notes[0][0]+5.6)+' '+(notes[0][1]-30)+'L'+(notes[1][0]+5.6)+' '+(notes[1][1]-30)+'M'+(notes[3][0]+5.6)+' '+(notes[3][1]-30)+'L'+(notes[4][0]+5.6)+' '+(notes[4][1]-30);
  g+='<g id="sc3"><path class="stf dr" d="'+st+'"/><path class="stem dr" d="'+ns+'"/>'+nh+
     '<text x="400" y="196" class="t c" text-anchor="middle">SINGING · RHYTHM · PLAY</text>'+
     '<text x="40" y="52" class="a">THE SONG</text></g>';
  /* 4 the study: what the six-month Phase II study measures */
  var M=[["COGNITION",150],["DEPRESSION",310],["SLEEP",470],["CARE BURDEN",630]];
  var tk='M110 504H690';M.forEach(function(m){tk+='M'+m[1]+' 496V512'});
  g+='<g id="sc4"><text x="400" y="484" class="t s" text-anchor="middle">40 PAIRS · SIX MONTHS</text><path class="ms dr" d="'+tk+'"/>'+
     M.map(function(m){return '<text x="'+m[1]+'" y="534" class="t c c4" text-anchor="middle">'+m[0]+'</text>'}).join("")+
     '<text x="40" y="52" class="a">THE STUDY</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .cam",svg),
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
    /* the parts accumulate on the one drawing; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*Math.min(1,s[i]*1.6),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

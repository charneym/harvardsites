/* The story scene (BL/BY/DB): ONE tungsten-carbide drawing die in section, kept on screen for all three steps, in the
   fine-line language of an engineering drawing (diequip.com > Die Finishing, Die Finishing Machines, Polishing Wheels):
   Step 1 (Grind): a diamond grinding pin plunges into the carbide nib and grinds the approach angle.
   Step 2 (Polish): a copper bonded pin polishes the ground cone to a mirror finish.
   Step 3 (Draw): wire is drawn through the finished die, reduced in the approach and sized in the bearing.
   Schematic, not to scale, no measured values. */
var SCW=760,SCH=420,VY=80,AY=260;
function dqPts(L,flip){return L.map(function(p){return p[0]+" "+(flip?AY+p[1]:AY-p[1])}).join("L")}
function dqScene(o){
  var g='',mob=o.mob;
  /* profile, as (x, r) pairs: steel case, carbide nib, and the bore (entrance, approach, bearing, back relief) */
  var CASE=[[120,140],[640,140],[640,104],[540,78],[200,78],[120,108]];
  var NIB=[[200,78],[540,78],[540,36],[470,15],[430,15],[268,36],[200,66]];
  var CONE=[[200,66],[268,36],[430,15]];
  var WIRE=[[20,20],[391,20],[430,15],[740,15]];
  function poly(L,flip){return 'M'+dqPts(L,flip)+'Z'}
  function line(L,flip){return 'M'+dqPts(L,flip)}
  function zig(flip){/* the ground surface of the approach cone: a fine tooth line */var s='',n=34;for(var i=0;i<=n;i++){var x=268+(430-268)*i/n,r=36-21*i/n+(i%2?1.4:-1.4);s+=(i?'L':'M')+x.toFixed(1)+' '+(flip?AY+r:AY-r).toFixed(1)}return s}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 '+VY+' '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<pattern id="dqH" patternUnits="userSpaceOnUse" width="9" height="9" patternTransform="rotate(45)"><path d="M0 0V9" stroke="#8db0ea" stroke-width="1" stroke-opacity=".5"/></pattern>'+
    '<linearGradient id="dqN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c7d0de" stop-opacity=".38"/><stop offset="1" stop-color="#7f8ca3" stop-opacity=".2"/></linearGradient>'+
    '<linearGradient id="dqWg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3b48a"/><stop offset=".45" stop-color="#d9895a"/><stop offset="1" stop-color="#8a4a26"/></linearGradient>'+
    '<linearGradient id="dqPin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dfe6f2" stop-opacity=".55"/><stop offset="1" stop-color="#8d9ab0" stop-opacity=".30"/></linearGradient>'+
    '<linearGradient id="dqCu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0a878" stop-opacity=".75"/><stop offset="1" stop-color="#a4592c" stop-opacity=".55"/></linearGradient>'+
    '<clipPath id="dqVB"><rect x="0" y="'+VY+'" width="'+SCW+'" height="'+SCH+'"/></clipPath><clipPath id="dqWc"><rect id="dqWr" x="0" y="0" width="0" height="600"/></clipPath></defs>';
  g+='<text class="t" x="20" y="'+(mob?106:100)+'">'+(mob?"DIE, IN SECTION":"CARBIDE DRAWING DIE, IN SECTION")+'</text>';
  /* the axis */
  g+='<path class="axis sD" d="M20 '+AY+'H740"/>';
  /* case (hatched) and nib (carbide), both halves */
  g+='<path class="hatch" d="'+poly(CASE,0)+poly(CASE,1)+'" fill="url(#dqH)"/>';
  g+='<path class="nibf" d="'+poly(NIB,0)+poly(NIB,1)+'" fill="url(#dqN)"/>';
  /* step 3: the wire, drawn through the die from left to right (reduced in the approach, sized in the bearing) */
  var wp='M'+WIRE.map(function(p){return p[0]+' '+(AY-p[1])}).join('L')+'L'+WIRE.slice().reverse().map(function(p){return p[0]+' '+(AY+p[1])}).join('L')+'Z';
  g+='<g id="dqW" clip-path="url(#dqWc)"><path d="'+wp+'" fill="url(#dqWg)" opacity=".92"/><path id="dqWf" class="wflow" d="M20 '+(AY-6)+'H740"/></g>';
  g+='<path class="body sD" d="'+poly(CASE,0)+'"/><path class="body sD" d="'+poly(CASE,1)+'"/>';
  g+='<path class="body sD" d="'+poly(NIB,0)+'"/><path class="body sD" d="'+poly(NIB,1)+'"/>';
  /* step 1: the ground (toothed) cone, and the diamond grinding pin on its spindle */
  g+='<g id="dqG"><path class="grnd" d="'+zig(0)+'"/><path class="grnd" d="'+zig(1)+'"/></g>';
  var pin='M20 '+(AY-8)+'H290V'+(AY-29)+'L386 '+(AY-17)+'V'+(AY+17)+'L290 '+(AY+29)+'V'+(AY+8)+'H20Z';
  g+='<g clip-path="url(#dqVB)"><g id="dqP1"><path class="pin" d="'+pin+'" style="fill:url(#dqPin)"/><path class="spin" d="M294 '+AY+'H382"/><path class="grit" d="M296 '+(AY-25)+'L382 '+(AY-14)+'M296 '+(AY+25)+'L382 '+(AY+14)+'"/></g></g>';
  /* step 2: the copper bonded polishing pin, and the mirror-polished cone */
  g+='<g clip-path="url(#dqVB)"><g id="dqP2"><path class="pin cu" d="'+pin+'" style="fill:url(#dqCu)"/><path class="spin cu" d="M294 '+AY+'H382"/></g></g>';
  g+='<path id="dqM1" class="mirr" d="'+line(CONE,0)+'"/><path id="dqM2" class="mirr" d="'+line(CONE,1)+'"/>';
  g+='<path id="dqM3" class="mirr" d="M430 '+(AY-15)+'H470"/><path id="dqM4" class="mirr" d="M430 '+(AY+15)+'H470"/>';
  /* zone callouts for step 3, on the row below the die, with leaders up to the bore */
  var Z=mob?[["APPROACH",120,350,25],["BEARING",470,450,15]]:[["ENTRANCE",120,234,51],["APPROACH",290,350,25],["BEARING",440,450,15],["BACK RELIEF",560,505,26]];
  var zy=mob?448:446;
  /* each leader runs from its point on the bore down to just above the start of its own label (>=10px clear of the text) */
  g+='<g id="dqZ">'+Z.map(function(z){return '<path class="ldr" d="M'+z[2]+' '+(AY+z[3]+4)+'L'+(z[1]+8)+' '+(zy-(mob?32:22))+'"/><circle class="dot" cx="'+z[2]+'" cy="'+(AY+z[3])+'" r="2.6"/><text class="t" x="'+z[1]+'" y="'+zy+'">'+z[0]+'</text>'}).join('')+'</g>';
  /* per-step notes */
  g+='<g id="dqL1"><text class="t s1" x="'+(mob?20:120)+'" y="'+zy+'">'+(mob?"PLUNGE GRIND":"PLUNGE GRIND · .020″ PER MINUTE")+'</text></g>';
  g+='<g id="dqL2"><text class="t s2" x="'+(mob?20:120)+'" y="'+zy+'">'+(mob?"MIRROR FINISH":"COPPER BONDED PIN · MIRROR FINISH")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="'+(mob?492:482)+'">1 · GRIND</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+(mob?492:482)+'">2 · POLISH</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+(mob?492:482)+'">3 · DRAW</text></g>';
  return g+'</svg>';
}
function scene(){return dqScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),hatch:$(".hatch",svg),nib:$(".nibf",svg),G:$("#dqG",svg),P1:$("#dqP1",svg),P2:$("#dqP2",svg),
    M:dl("#dqM1,#dqM2,#dqM3,#dqM4"),W:$("#dqW",svg),Wr:$("#dqWr",svg),Wf:$("#dqWf",svg),Z:$("#dqZ",svg),
    spins:$$(".spin",svg),L1:$("#dqL1",svg),L2:$("#dqL2",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tx(el,x){if(el)el.setAttribute("transform","translate("+x.toFixed(1)+" 0)")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.hatch,b);op(E.nib,b)}
    /* the pins spin (a dash running along the pin face) */
    var sp=(p*900)%14;E.spins.forEach(function(s){s.style.strokeDashoffset=sp.toFixed(1)});
    /* step 1: the grinding pin plunges in, the cone shows its ground tooth line */
    var in1=seg(p,.03,.13),out1=seg(p,.34,.40);
    op(E.P1,b*seg(p,.02,.06)*(1-out1));tx(E.P1,-250*(1-in1)-260*out1);
    op(E.G,b*seg(p,.10,.2)*(1-seg(p,.46,.6)));
    op(E.L1,b*seg(p,.08,.16)*(1-seg(p,.31,.35)));
    /* step 2: the copper bonded pin polishes; the cone turns into a bright mirror line */
    var in2=seg(p,.40,.48),out2=seg(p,.66,.72);
    op(E.P2,b*seg(p,.39,.43)*(1-out2));tx(E.P2,-250*(1-in2)-260*out2);
    draw(E.M,b*seg(p,.46,.6));
    op(E.L2,b*seg(p,.44,.52)*(1-seg(p,.64,.68)));
    /* step 3: the wire is drawn through, left to right, and the zones are named */
    var wv=seg(p,.72,.84);E.Wr.setAttribute("width",(20+720*wv).toFixed(1));op(E.W,b*seg(p,.71,.74));
    E.Wf.style.strokeDashoffset=(-(p*2400)%40).toFixed(1);
    op(E.Z,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}

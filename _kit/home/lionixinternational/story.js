/* The story scene (DB/BL): how a TriPleX® chip handles light, as LioniX International describes it (TriPleX® Silicon Nitride
   Waveguides, Photonic IC technology): light from a fibre array couples in through a spot size converter that tapers the
   low-contrast fibre mode into a high-contrast waveguide mode; silicon nitride waveguides route it with ultra-low loss through a
   splitter, a Mach-Zehnder interferometer and ring resonators; on-chip actuators (heaters) tune the rings and the arms.
   Drawn as ONE fine-line plan view of a chip that fills the frame. Frame 0 is complete: the die, both fibre arrays, the taper,
   the circuit, the rings and the electrodes. Step 1: light runs in along the fibre and through the taper (the mode narrows).
   Step 2: it runs both arms of the interferometer, couples into the rings and leaves through the output fibre. Step 3: the
   heaters warm and the upper ring shifts. Driven by scrubbed progress. No stroke uses vector-effect:non-scaling-stroke (DR4). */
var SCW=760,SCH=560;
var YB=300,YU=236,YL=364,X0=150,X1=690;
var RG=[[392,196,30],[498,196,30],[446,404,30]];
function f1(v){return v.toFixed(1)}
function armD(y){return 'M262 '+YB+'C292 '+YB+' 300 '+y+' 330 '+y+'L566 '+y+'C596 '+y+' 604 '+YB+' 634 '+YB}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 120 700 380':'0 40 760 500')+'" aria-hidden="true">';
  /* the die, the two fibre arrays and their fibres */
  g+='<g id="scBase"><rect class="wl sD" x="'+X0+'" y="150" width="'+(X1-X0)+'" height="292"/>'+
     '<rect class="wo sD" x="88" y="258" width="62" height="84"/><rect class="wo sD" x="'+X1+'" y="270" width="48" height="60"/>'+
     [0,1,2,3].map(function(i){var y=270+i*20;return '<path class="wo sD" d="M88 '+y+'H14"/>'}).join("")+
     '<path class="wo sD" d="M738 290H760M738 310H760"/>'+
     /* the spot size converter: a taper from the fibre facet to the waveguide */
     '<path class="wl sD" d="M'+X0+' '+(YB-14)+'L262 '+(YB-2)+'M'+X0+' '+(YB+14)+'L262 '+(YB+2)+'"/>'+
     /* the circuit (unlit): bus, both interferometer arms, output */
     '<path class="wg sD" d="'+armD(YU)+'"/><path class="wg sD" d="'+armD(YL)+'"/><path class="wg sD" d="M634 '+YB+'H'+X1+'"/>'+
     RG.map(function(r){return '<circle class="wg sD" cx="'+r[0]+'" cy="'+r[1]+'" r="'+r[2]+'"/>'}).join("")+
     /* a spiral delay line, as on the firm's chips */
     (function(){var cx=626,cy=402,d='M'+(cx+5)+' '+cy;for(var t=0;t<=Math.PI*2*4;t+=.12){var rr=5+t/(Math.PI*2)*6;d+='L'+f1(cx+Math.cos(t)*rr)+' '+f1(cy+Math.sin(t)*rr*.8)}return '<path class="wg sD" d="'+d+'"/>'})()+
     /* electrodes: heater arcs over the upper rings, traces to the bond pads */
     '<path class="el sD" d="M'+(RG[0][0]-24)+' '+(RG[0][1]-18)+'A30 30 0 0 1 '+(RG[0][0]+24)+' '+(RG[0][1]-18)+'M'+(RG[1][0]-24)+' '+(RG[1][1]-18)+'A30 30 0 0 1 '+(RG[1][0]+24)+' '+(RG[1][1]-18)+'"/>'+
     '<path class="el sD" d="M'+(RG[0][0]-24)+' '+(RG[0][1]-18)+'V172M'+(RG[0][0]+24)+' '+(RG[0][1]-18)+'V172M'+(RG[1][0]-24)+' '+(RG[1][1]-18)+'V172M'+(RG[1][0]+24)+' '+(RG[1][1]-18)+'V172"/>'+
     [0,1,2,3].map(function(i){var x=[RG[0][0]-24,RG[0][0]+24,RG[1][0]-24,RG[1][0]+24][i];return '<rect class="el sD" x="'+(x-7)+'" y="158" width="14" height="14"/>'}).join("")+
     '</g>';
  /* light: the fibre core and the narrowing mode, then the lit circuit */
  g+='<g id="scLit"><path id="lIn" class="lt" d="M14 '+YB+'H262"/>'+
     '<ellipse id="mA" class="md" cx="'+(X0+6)+'" cy="'+YB+'" rx="5" ry="13"/><ellipse id="mB" class="md" cx="256" cy="'+YB+'" rx="3" ry="4"/>'+
     '<path id="lU" class="lt" d="'+armD(YU)+'H'+X1+'"/><path id="lL" class="lt" d="'+armD(YL)+'"/><path id="lOut" class="lt" d="M'+X1+' '+YB+'H760"/>'+
     RG.map(function(r,i){return '<circle id="rg'+i+'" class="rl" cx="'+r[0]+'" cy="'+r[1]+'" r="'+r[2]+'"/>'}).join("")+
     '<path id="htA" class="ht" d="M'+(RG[0][0]-24)+' '+(RG[0][1]-18)+'A30 30 0 0 1 '+(RG[0][0]+24)+' '+(RG[0][1]-18)+'"/>'+
     '<path id="htB" class="ht" d="M'+(RG[1][0]-24)+' '+(RG[1][1]-18)+'A30 30 0 0 1 '+(RG[1][0]+24)+' '+(RG[1][1]-18)+'"/></g>';
  if(!mob){
    /* labels sit outside the die, each on its own leader, never over a stroke */
    g+='<g id="lDie"><path class="ld" d="M'+X1+' 442L'+X1+' 472"/><text class="t" x="'+X1+'" y="488" text-anchor="end">TRIPLEX® CHIP</text></g>';
    g+='<g id="lFa"><path class="ld" d="M60 258V214"/><text class="t" x="20" y="202">FIBRE ARRAY</text></g>';
    g+='<g id="lSs"><path class="ld" d="M206 '+(YB+18)+'V472"/><text class="t" x="206" y="488" text-anchor="middle">SPOT SIZE CONVERTER</text></g>';
    g+='<g id="lRg"><path class="ld" d="M'+RG[2][0]+' '+(RG[2][1]+30)+'V472"/><text class="t" x="'+RG[2][0]+'" y="488" text-anchor="middle">RING RESONATOR</text></g>';
    g+='<g id="lMz"><path class="ld" d="M'+X1+' 150V108"/><text class="t" x="'+X1+'" y="96" text-anchor="end">MACH-ZEHNDER INTERFEROMETER</text></g>';
    g+='<g id="lHt"><path class="ld" d="M'+RG[0][0]+' 158V108"/><text class="t o" x="'+RG[0][0]+'" y="96" text-anchor="middle">HEATERS</text></g>';
  }else{g+='<g id="lDie"></g><g id="lFa"></g><g id="lSs"></g><g id="lRg"></g><g id="lMz"></g><g id="lHt"></g>'}
  var ly=mob?492:SCH-14,lx=mob?50:14;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LIGHT COUPLES IN':'THE FIBRE MODE TAPERS INTO THE WAVEGUIDE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'GUIDED WITH ULTRA-LOW LOSS':'GUIDED THROUGH THE CIRCUIT WITH ULTRA-LOW LOSS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TUNED ON THE CHIP':'HEATERS TUNE THE RINGS, WITH NO MOVING PARTS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),lIn:dl("#lIn")[0],lU:dl("#lU")[0],lL:dl("#lL")[0],lOut:dl("#lOut")[0],mA:$("#mA",svg),mB:$("#mB",svg),
    rg:[0,1,2].map(function(i){return $("#rg"+i,svg)}),htA:$("#htA",svg),htB:$("#htB",svg),
    lDie:$("#lDie",svg),lFa:$("#lFa",svg),lSs:$("#lSs",svg),lRg:$("#lRg",svg),lMz:$("#lMz",svg),lHt:$("#lHt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);a[0].style.opacity=v>0?"1":"0"}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: light runs in along the fibre and through the taper; the mode narrows */
    var a1=sm(seg(p,.05,.26));dr(E.lIn,a1*b);
    op(E.mA,b*sm(seg(p,.1,.18)));op(E.mB,b*sm(seg(p,.2,.28)));
    /* step 2: both arms, the rings, the output */
    var a2=sm(seg(p,.38,.56));dr(E.lU,a2*b);dr(E.lL,a2*b);
    var a3=sm(seg(p,.54,.62));dr(E.lOut,a3*b);
    op(E.rg[0],b*.55*sm(seg(p,.44,.52)));op(E.rg[1],b*.55*sm(seg(p,.48,.56)));op(E.rg[2],b*.55*sm(seg(p,.46,.54)));
    /* step 3: the heaters warm and the upper rings brighten as they are tuned onto resonance */
    var h=sm(seg(p,.72,.84));op(E.htA,b*h);op(E.htB,b*h);
    if(h>0){op(E.rg[0],b*(.55+.45*h));op(E.rg[1],b*(.55+.45*h))}
    op(E.lFa,b*(1-seg(p,.04,.1)));op(E.lDie,b*(1-seg(p,.04,.1)));op(E.lMz,b*(1-seg(p,.04,.1)));
    op(E.lSs,b*seg(p,.14,.2)*(1-seg(p,.32,.36)));
    op(E.lRg,b*seg(p,.48,.54)*(1-seg(p,.64,.68)));
    op(E.lHt,b*seg(p,.76,.82));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}

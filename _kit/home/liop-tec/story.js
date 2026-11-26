/* The story scene (BL/BY/DB): the LiopStar pulsed dye laser seen from above, as a schematic of its beam path, drawn from the
   LIOP-TEC dye laser datasheet (liop-tec.com > Catalog > Dye laser). One housing stays on screen for all three steps:
   Step 1 (Pump): the Nd:YAG pump pulse (532 / 355 nm) enters and is tapped to the dye cells, which light up.
   Step 2 (Tune): in the oscillator, the grating selects one wavelength; the tuned beam forms between grating and coupler.
   Step 3 (Amplify): the beam is folded through the amplifier cell (and the optional third cell of the LiopStar-P) and leaves
   the housing as the tuned output. Schematic: no claims about the exact internal layout. */
var SCW=760,SCH=520;
function lpScene(o){
  var g='',mob=o.mob,T=function(x,y,s,c){return '<text class="t'+(c?" "+c:"")+'" x="'+x+'" y="'+y+'">'+s+'</text>'};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<filter id="lpGl" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2"/></filter></defs>';
  g+=T(40,mob?56:58,mob?"LIOPSTAR":"LIOPSTAR, SCHEMATIC TOP VIEW");
  /* housing */
  g+='<path class="hs sD" d="M40 80H720V440H40Z"/>';
  /* grating (hatched), oscillator cell, output coupler, fold mirrors, amplifier cell, optional third cell, pump splitters */
  var hatch='';for(var i=0;i<6;i++)hatch+='M84 '+(153+i*6.5)+'L94 '+(149+i*6.5);
  g+='<g id="lpG"><path class="gr" d="M84 148H94V192H84Z"/><path class="gh" d="'+hatch+'"/></g>';
  g+='<path class="cell" id="lpC1" d="M186 158H214V182H186Z"/>';
  g+='<path class="opt" d="M280 154V186"/>';
  g+='<path class="opt" d="M350 160L370 180M350 310L370 290"/>';
  g+='<path class="cell" id="lpC2" d="M446 288H474V312H446Z"/>';
  g+='<path class="cell dsh" id="lpC3" d="M586 288H614V312H586Z"/>';
  g+='<path class="opt th" d="M192 418L208 402M452 418L468 402M592 418L608 402"/>';
  /* dye glow in the cells (step 1, brighter in step 3) */
  g+='<g id="lpDy"><rect class="dye" x="188" y="160" width="24" height="20"/><rect class="dye" x="448" y="290" width="24" height="20"/><rect class="dye" x="588" y="290" width="24" height="20"/></g>';
  /* pump beam and taps (step 1) */
  g+='<path id="lpP" class="pump" d="M0 410H600"/>';
  g+='<path id="lpPt" class="pump" d="M200 410V182M460 410V312M600 410V312"/>';
  /* oscillator beam (step 2) */
  g+='<path id="lpOg" class="bmg" d="M94 170H280" filter="url(#lpGl)"/><path id="lpO" class="bm" d="M94 170H280"/>';
  /* amplified beam (step 3) */
  g+='<path id="lpAg" class="bmg w" d="M280 170H360V300H760" filter="url(#lpGl)"/><path id="lpA" class="bm w" d="M280 170H360V300H760"/>';
  /* labels per step */
  g+='<g id="lpL1">'+T(52,394,mob?"PUMP":"PUMP 532 / 355 NM","s1")+(mob?"":T(236,236,"DYE CELLS"))+'</g>';
  g+='<g id="lpL2">'+T(mob?56:70,134,"GRATING","s1")+T(176,140,"OSCILLATOR")+(mob?"":T(70,218,"1800–3000 L/MM"))+'</g>';
  g+='<g id="lpL3">'+T(mob?408:424,272,"AMPLIFIER","s1")+(mob?"":T(548,272,"THIRD CELL, OPTION"))+T(mob?620:630,352,"OUTPUT","s1")+'</g>';
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · PUMP</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="500">2 · TUNE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="500">3 · AMPLIFY</text></g>';
  return g+'</svg>';
}
function scene(){return lpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fix:$$(".cell,.opt,#lpG",svg),dy:$("#lpDy",svg),P:dl("#lpP"),Pt:dl("#lpPt"),O:dl("#lpO,#lpOg"),A:dl("#lpA,#lpAg"),G:$("#lpG",svg),
    L1:$("#lpL1",svg),L2:$("#lpL2",svg),L3:$("#lpL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.fix.forEach(function(el){op(el,b)})}
    /* step 1: the pump pulse enters and lights the dye */
    draw(E.P,b*seg(p,.03,.15));draw(E.Pt,b*seg(p,.13,.24));
    op(E.dy,b*(.55*seg(p,.18,.28)+.45*seg(p,.72,.84)));
    op(E.L1,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));
    /* step 2: the grating selects the wavelength, the oscillator beam forms */
    draw(E.O,b*seg(p,.42,.56));
    E.G.classList.toggle("on",p>.38);
    op(E.L2,b*seg(p,.4,.48)*(1-seg(p,.64,.68)));
    /* step 3: folded through the amplifier and out */
    draw(E.A,b*seg(p,.7,.9));
    op(E.L3,b*seg(p,.76,.86));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}

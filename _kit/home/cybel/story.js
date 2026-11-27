/* The story scene (BL/BY/DB): how a Cybel fiber amplifier / MOPA fiber laser works (cybel-llc.com Fiber Amplifiers and
   Fiber Lasers pages, plus the publication titles on the News page), drawn as ONE fine-line schematic kept on screen:
   Step 1 (Seed): a narrow-linewidth seed, e.g. the ORION-2000 DFB fiber Bragg grating laser (10 kHz).
   Step 2 (Pump): pump light is coupled into the same fiber through a combiner.
   Step 3 (Gain): the coiled doped gain fiber (standard or PM; Tm / Ho for 2 µm) amplifies the signal.
   Step 4 (Output): through the isolator, CW or pulsed output (SKYLINE: >15 W average, >15 kW peak). */
var SCW=760,SCH=520;
function circ(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
function cyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">FIBER AMPLIFIER, SCHEMATIC</text>';
  /* step 1: the seed laser and its fiber to the combiner */
  g+='<g id="cyS"><path class="edge sS" d="M36 196H146V264H36Z"/><path class="grat" d="M60 230H122"/>'+
     '<path class="fib sSf" d="M146 230H290"/><path class="sig sSg" d="M147 230H290"/></g>';
  /* step 2: the pump diode, its fiber, the combiner */
  g+='<g id="cyP"><path class="edge sP" d="M196 352H282V404H196Z"/><path class="fib sPf" d="M282 378H310V246"/>'+
     '<path class="pmp sPl" d="M283 378H310V247"/><path class="edge sPc" d="M290 214H330V246H290Z"/></g>';
  /* step 3: the coiled doped gain fiber, the signal growing along it */
  g+='<g id="cyG"><path class="fib sGf" d="M330 230H380"/><path class="coil sGc" d="'+circ(450,230,70)+'"/><path class="coil sGc" d="'+circ(450,230,61)+'"/>'+
     '<path class="fib sGf" d="M520 230H566"/><path class="sigb sGs" d="M331 230H380A70 70 0 1 1 520 230H566"/></g>';
  /* step 4: the isolator, the output fiber, the light and the pulse train */
  g+='<g id="cyO"><path class="edge sO" d="M566 214H622V246H566Z"/><path class="arr" d="M580 230H608M601 224L608 230L601 236"/>'+
     '<path class="fib sOf" d="M622 230H690"/><path class="sigb sOs" d="M623 230H690"/><path class="beam" id="cyBm" d="M694 230H748"/>'+
     '<path class="cur sOp" d="M440 440H476V372H486V440H522V372H532V440H568V372H578V440H614V372H624V440H660V372H670V440H720"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="cyL1"><text class="t s2" x="36" y="'+(mob?172:178)+'">SEED</text><text class="t" x="36" y="'+(mob?300:292)+'">'+(mob?'DFB-FBG':'DFB FIBER BRAGG GRATING')+'</text><text class="t" x="36" y="'+(mob?328:312)+'">'+(mob?'10 kHz':'LINEWIDTH 10 kHz')+'</text></g>';
  g+='<g id="cyL2"><text class="t s2" x="196" y="'+(mob?444:432)+'">PUMP</text><text class="t" x="290" y="'+(mob?196:200)+'">COMBINER</text></g>';
  g+='<g id="cyL3"><text class="t s2" x="450" y="'+(mob?346:334)+'" text-anchor="middle">'+(mob?'DOPED FIBER':'DOPED GAIN FIBER')+'</text><text class="t" x="450" y="'+(mob?136:146)+'" text-anchor="middle">'+(mob?'STANDARD OR PM':'STANDARD OR PM · Tm / Ho AT 2 µm')+'</text></g>';
  g+='<g id="cyL4"><text class="t s2" x="566" y="'+(mob?196:200)+'">ISOLATOR</text><text class="dk" x="440" y="'+(mob?488:478)+'">'+(mob?'CW OR PULSED':'CW OR PULSED · >15 kW PEAK')+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · SEED</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · PUMP</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · GAIN</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · OUTPUT</text></g>';
  return g+'</svg>';
}
function scene(){return cyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={S:$("#cyS",svg),sE:dl(".sS"),gr:$("#cyS .grat",svg),sF:dl(".sSf"),sG:dl(".sSg"),
    P:$("#cyP",svg),pE:dl(".sP"),pF:dl(".sPf"),pL:dl(".sPl"),pC:dl(".sPc"),
    G:$("#cyG",svg),gF:dl(".sGf"),gC:dl(".sGc"),gS:dl(".sGs"),
    O:$("#cyO",svg),oE:dl(".sO"),ar:$("#cyO .arr",svg),oF:dl(".sOf"),oS:dl(".sOs"),bm:$("#cyBm",svg),oP:dl(".sOp"),
    L1:$("#cyL1",svg),L2:$("#cyL2",svg),L3:$("#cyL3",svg),L4:$("#cyL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1: the seed box and its grating, the fiber, the seed signal travels to the combiner */
    op(E.S,b);draw(E.sE,b*seg(p,0,.08));op(E.gr,b*seg(p,.05,.1));draw(E.sF,b*seg(p,.06,.14));draw(E.sG,b*seg(p,.12,.2));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the pump diode, its fiber, the combiner; pump light flows in */
    op(E.P,b);draw(E.pE,b*seg(p,.26,.33));draw(E.pF,b*seg(p,.3,.37));draw(E.pC,b*seg(p,.32,.38));draw(E.pL,b*seg(p,.38,.47));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the gain fiber coils, the signal grows along it */
    op(E.G,b);draw(E.gF,b*seg(p,.5,.56));draw(E.gC,b*seg(p,.52,.6));draw(E.gS,b*seg(p,.58,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: isolator, output fiber, the beam and the pulse train */
    op(E.O,b);draw(E.oE,b*seg(p,.76,.81));op(E.ar,b*seg(p,.79,.82));draw(E.oF,b*seg(p,.78,.83));draw(E.oS,b*seg(p,.81,.86));op(E.bm,b*seg(p,.85,.88));draw(E.oP,b*seg(p,.84,.94));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

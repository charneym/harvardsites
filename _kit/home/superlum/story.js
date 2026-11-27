/* The story scene (BL/BY/DB): how a Superlum SLD module works (superlumdiodes.com > Drivers: "SLD modules are extremely
   sensitive to surges and spikes of drive current"; SLDs: single transverse mode emitters, SM/PM/MM fibre pigtails;
   Broadband Light Sources: optical isolators against feedback; superlum.ie: DBUT, DIL, miniBUT packages), ONE schematic:
   Step 1 (Drive): the driver and temperature controller feed the module.
   Step 2 (Emit): light is amplified in a single pass along the chip's waveguide.
   Step 3 (Spectrum): a broad, smooth spectrum (low coherence).
   Step 4 (Deliver): through an isolator into the fibre and its connector. */
var SCW=760,SCH=520;
function sdScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">SLD MODULE, SCHEMATIC</text>';
  /* step 1: driver and the drive line */
  g+='<g id="sdD"><path class="edge sDr" d="M60 200H180V300H60Z"/><path class="rf sWi" d="M180 250H230"/></g>';
  /* step 2: the chip, its tilted waveguide and the emitted beam */
  g+='<g id="sdE"><path class="edge sCh" d="M230 220H470V280H230Z"/><path class="wg sWg" d="M242 262L458 238"/><path class="beam sBe" d="M470 250H560"/></g>';
  /* step 3: the spectrum inset */
  g+='<g id="sdS"><path class="ax sAx" d="M520 180H720M520 180V64"/><path class="spec sSp" d="M530 178C588 176 598 80 620 80C642 80 652 176 710 178"/></g>';
  /* step 4: isolator, fibre and connector */
  g+='<g id="sdF"><path class="edge sIs" d="M560 236H610V264H560Z"/><path class="wg2 sAr" d="M570 250H600M594 244L600 250L594 256"/>'+
     '<path class="fib sFi" d="M610 250C650 250 660 330 700 340"/><path class="edge sCo" d="M700 330H730V350H700Z"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="sdL1"><text class="t s2" x="60" y="'+(mob?186:188)+'">'+(mob?'DRIVER':'DRIVER · TEC')+'</text></g>';
  g+='<g id="sdL2"><text class="t s2" x="230" y="'+(mob?206:208)+'">SLD CHIP</text><text class="t" x="230" y="'+(mob?310:306)+'">SINGLE PASS</text></g>';
  g+='<g id="sdL3"><text class="t s2" x="520" y="'+(mob?50:50)+'">'+(mob?'BROAD':'BROAD SPECTRUM')+'</text></g>';
  g+='<g id="sdL4"><text class="t s2" x="560" y="'+(mob?222:224)+'">ISOLATOR</text><text class="t" x="'+(mob?560:600)+'" y="'+(mob?382:376)+'">'+(mob?'FIBRE':'SM · PM · MM FIBRE')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · DRIVE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · EMIT</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SPECTRUM</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · DELIVER</text></g>';
  return g+'</svg>';
}
function scene(){return sdScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={D:$("#sdD",svg),dr:dl(".sDr"),wi:dl(".sWi"),E:$("#sdE",svg),ch:dl(".sCh"),wg:dl(".sWg"),be:dl(".sBe"),
    S:$("#sdS",svg),ax:dl(".sAx"),sp:dl(".sSp"),F:$("#sdF",svg),is:dl(".sIs"),ar:dl(".sAr"),fi:dl(".sFi"),co:dl(".sCo"),
    L1:$("#sdL1",svg),L2:$("#sdL2",svg),L3:$("#sdL3",svg),L4:$("#sdL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1 */
    op(E.D,b);draw(E.dr,b*seg(p,0,.1));draw(E.wi,b*seg(p,.08,.16));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    op(E.E,b);draw(E.ch,b*seg(p,.26,.33));draw(E.wg,b*seg(p,.31,.4));draw(E.be,b*seg(p,.38,.46));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    op(E.S,b);draw(E.ax,b*seg(p,.52,.58));draw(E.sp,b*seg(p,.56,.7));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    op(E.F,b);draw(E.is,b*seg(p,.77,.82));draw(E.ar,b*seg(p,.8,.84));draw(E.fi,b*seg(p,.83,.92));draw(E.co,b*seg(p,.9,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

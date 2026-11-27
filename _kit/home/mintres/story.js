/* The story scene (BL/BY/DB): how a Mintres heat spreader works (mintres.com > Products > Thermal management products:
   heatspreaders "take thermal energy from a concentrated source and spread it out thus reducing the thermal impedance";
   CVD diamond for "devices with small heat sources and high power densities such as Laser Diodes"; gold and AuSn
   coatings for soldering, patterned circuitry; (Opto)-electronics optical beds/packages: die bonders, vacuum soldering,
   optical beds with heatsink), ONE schematic, side view:
   Step 1 (Source): the laser diode chip emits light and heat.
   Step 2 (Spread): the diamond spreader fans the heat out.
   Step 3 (Bond): gold-tin solder layers join chip, spreader and bed.
   Step 4 (Package): the AlN optical bed, its heatsink and the package with its pins. */
var SCW=760,SCH=520;
function mtScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">HEAT SPREADER, SCHEMATIC</text>';
  /* step 1: the laser diode chip and its beam */
  g+='<g id="mtS"><path class="edge sCh" d="M330 250H430V270H330Z"/><path class="beam sBe" d="M430 260H560"/></g>';
  /* step 2: the diamond spreader and the heat fanning out through it */
  g+='<g id="mtP"><path class="edge sSp" d="M280 274H480V300H280Z"/><path class="heat sHt" d="M380 272L300 380M380 272L380 380M380 272L460 380"/></g>';
  /* step 3: the gold-tin solder layers */
  g+='<g id="mtB"><path class="gold sG1" d="M330 270H430V274H330Z"/><path class="gold sG2" d="M280 300H480V304H280Z"/></g>';
  /* step 4: the AlN optical bed, the heatsink, the package walls and pins */
  g+='<g id="mtK"><path class="edge sBd" d="M220 304H540V340H220Z"/><path class="edge sHs" d="M200 340H560V400H200Z"/>'+
     '<path class="gold sPk" d="M160 200V420H600V200"/><path class="pipe sPn" d="M100 250H160M100 290H160M100 330H160M600 250H660M600 290H660M600 330H660"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="mtL1"><text class="t s2" x="330" y="'+(mob?232:238)+'">'+(mob?'LASER':'LASER DIODE')+'</text></g>';
  g+='<g id="mtL2"><text class="t s2" x="490" y="'+(mob?294:292)+'">'+(mob?'DIAMOND':'CVD DIAMOND')+'</text></g>';
  g+='<g id="mtL3"><text class="t s2" x="270" y="'+(mob?288:290)+'" text-anchor="end">'+(mob?'AUSN':'GOLD-TIN')+'</text></g>';
  g+='<g id="mtL4"><text class="t s2" x="160" y="'+(mob?450:446)+'">'+(mob?'OPTICAL BED':'ALN OPTICAL BED · PACKAGE')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · SOURCE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · SPREAD</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · BOND</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · PACKAGE</text></g>';
  return g+'</svg>';
}
function scene(){return mtScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={S:$("#mtS",svg),ch:dl(".sCh"),be:dl(".sBe"),P:$("#mtP",svg),sp:dl(".sSp"),ht:dl(".sHt"),
    B:$("#mtB",svg),g1:dl(".sG1"),g2:dl(".sG2"),K:$("#mtK",svg),bd:dl(".sBd"),hs:dl(".sHs"),pk:dl(".sPk"),pn:dl(".sPn"),
    L1:$("#mtL1",svg),L2:$("#mtL2",svg),L3:$("#mtL3",svg),L4:$("#mtL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1 */
    op(E.S,b);draw(E.ch,b*seg(p,0,.1));draw(E.be,b*seg(p,.08,.18));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    op(E.P,b);draw(E.sp,b*seg(p,.26,.34));draw(E.ht,b*seg(p,.32,.44));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    op(E.B,b);draw(E.g1,b*seg(p,.52,.6));draw(E.g2,b*seg(p,.58,.68));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    op(E.K,b);draw(E.bd,b*seg(p,.77,.82));draw(E.hs,b*seg(p,.8,.86));draw(E.pk,b*seg(p,.84,.92));draw(E.pn,b*seg(p,.9,.96));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

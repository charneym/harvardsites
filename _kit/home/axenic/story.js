/* The story scene (BL/BY/DB): how an aXenic GaAs Mach-Zehnder modulator works (axenic.co.uk > Products: "linear Mach Zehnder
   device ... compact folded-optics configuration, which segregates RF and optical interfacing to opposing ends", "Output
   monitor photodiode", "RF drive voltage less than 5V", "Flat frequency response to 50 GHz"; Technology: GaAs, linear,
   zero-chirp), ONE schematic:
   Step 1 (Split): the waveguide splits the light into two arms.
   Step 2 (Drive): RF electrodes along the arms; the RF signal arrives.
   Step 3 (Combine): the arms rejoin; the output intensity follows the RF.
   Step 4 (Monitor): a tap to the output monitor photodiode. */
var SCW=760,SCH=520;
function mzScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">GAAS MACH-ZEHNDER, SCHEMATIC</text>';
  /* step 1: the chip, the input waveguide and the two arms */
  g+='<g id="mzS"><path class="edge sCh" d="M150 150H590V370H150Z"/><path class="wg sIn" d="M40 260H180"/>'+
     '<path class="wg sAr" d="M180 260C220 260 230 190 270 190H470C510 190 520 260 560 260"/>'+
     '<path class="wg sAr" d="M180 260C220 260 230 330 270 330H470C510 330 520 260 560 260"/></g>';
  /* step 2: the electrodes and the RF signal */
  g+='<g id="mzD"><path class="el sEl" d="M280 164H460V176H280Z"/><path class="el sEl" d="M280 254H460V266H280Z"/><path class="el sEl" d="M280 344H460V356H280Z"/>'+
     '<path class="rf sRf" d="M280 120q15 -16 30 0t30 0t30 0t30 0t30 0t30 0"/></g>';
  /* step 3: the output waveguide and the modulated light */
  g+='<g id="mzC"><path class="wg sOut" d="M560 260H720"/><path class="pul sPu" d="M600 230h10v-30h20v30h10v-30h20v30h10v-30h20v30h10v-30h20v30h10"/></g>';
  /* step 4: the tap and the monitor photodiode */
  g+='<g id="mzM"><path class="wg2 sTp" d="M620 260Q632 292 645 320"/><path class="edge sPd" d="M630 320H660V346H630Z"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="mzL1"><text class="t s2" x="150" y="'+(mob?136:138)+'">'+(mob?'GAAS CHIP':'GAAS WAVEGUIDE CHIP')+'</text><text class="t" x="40" y="'+(mob?240:244)+'">IN</text></g>';
  g+='<g id="mzL2"><text class="t s2" x="472" y="'+(mob?128:124)+'">'+(mob?'RF':'RF ELECTRODES')+'</text></g>';
  g+='<g id="mzL3"><text class="t s2" x="592" y="'+(mob?186:188)+'">'+(mob?'OUTPUT':'OUTPUT FOLLOWS RF')+'</text></g>';
  g+='<g id="mzL4"><text class="t s2" x="600" y="'+(mob?378:372)+'">'+(mob?'MONITOR':'MONITOR PHOTODIODE')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · SPLIT</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · DRIVE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · COMBINE</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · MONITOR</text></g>';
  return g+'</svg>';
}
function scene(){return mzScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={S:$("#mzS",svg),ch:dl(".sCh"),inn:dl(".sIn"),ar:dl(".sAr"),D:$("#mzD",svg),el:dl(".sEl"),rf:dl(".sRf"),
    C:$("#mzC",svg),out:dl(".sOut"),pu:dl(".sPu"),M:$("#mzM",svg),tp:dl(".sTp"),pd:dl(".sPd"),
    L1:$("#mzL1",svg),L2:$("#mzL2",svg),L3:$("#mzL3",svg),L4:$("#mzL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1 */
    op(E.S,b);draw(E.ch,b*seg(p,0,.08));draw(E.inn,b*seg(p,.04,.1));draw(E.ar,b*seg(p,.08,.18));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    op(E.D,b);draw(E.el,b*seg(p,.26,.34));draw(E.rf,b*seg(p,.32,.44));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    op(E.C,b);draw(E.out,b*seg(p,.52,.58));draw(E.pu,b*seg(p,.56,.7));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    op(E.M,b);draw(E.tp,b*seg(p,.78,.84));draw(E.pd,b*seg(p,.82,.9));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

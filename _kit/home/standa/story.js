/* The story scene (BL/BY/DB): how a Standa motorised linear stage moves (standa.lt > Motorized Positioners > Motorized
   Linear Stages: stepper-motor driven, lead screw with a replaceable lead block, 1000 steps/mm and 1 um resolution on the
   8MT167-100, steel guide rails on the 8MT160 delay lines, up to 2800 mm travel on the 8MT295), ONE schematic, side view:
   Step 1 (Motor): the controller drives the stepper motor in steps.
   Step 2 (Screw): the lead screw and its nut turn rotation into travel.
   Step 3 (Guide): the carriage runs on guide rails.
   Step 4 (Travel): the carriage moves the optic to its position. */
var SCW=760,SCH=520;
function stScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">MOTORISED STAGE, SCHEMATIC</text>';
  /* step 1: controller, cable, stepper motor with its rotation mark */
  g+='<g id="stM"><path class="edge sCt" d="M40 330H130V400H40Z"/><path class="rf sCb" d="M130 365H170"/>'+
     '<path class="edge sMo" d="M170 300H250V380H170Z"/><path class="rot sTk" d="M188 340a22 22 0 1 0 44 0a22 22 0 1 0 -44 0"/></g>';
  /* step 2: lead screw, thread marks and the nut */
  g+='<g id="stS"><path class="edge sSc" d="M250 334H690V346H250Z"/>'+
     '<path class="thr sTh" d="M270 334L276 346M300 334L306 346M330 334L336 346M360 334L366 346M390 334L396 346M420 334L426 346M450 334L456 346M480 334L486 346M510 334L516 346M540 334L546 346M570 334L576 346M600 334L606 346M630 334L636 346M660 334L666 346"/>'+
     '<path class="edge sNu" d="M370 322H420V358H370Z"/></g>';
  /* step 3: base, rails, carriage */
  g+='<g id="stG"><path class="edge sBa" d="M250 380H710V420H250Z"/><path class="pipe sRl" d="M260 300H700"/>'+
     '<path class="edge sCa" d="M330 260H460V300H330Z"/></g>';
  /* step 4: the optic on the carriage, the travel arrow and the target mark */
  g+='<g id="stT"><path class="edge sOp" d="M395 260V209M372 200a23 9 0 1 0 46 0a23 9 0 1 0 -46 0"/>'+
     '<path class="beam sAr" d="M470 200H620M608 192L620 200L608 208"/><path class="mask sTg" d="M640 240V170"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="stL1"><text class="t s2" x="40" y="'+(mob?316:318)+'">'+(mob?'DRIVER':'CONTROLLER')+'</text><text class="t" x="170" y="'+(mob?286:288)+'">'+(mob?'MOTOR':'STEPPER MOTOR')+'</text></g>';
  g+='<g id="stL2"><text class="t s2" x="430" y="318">'+(mob?'NUT':'LEAD NUT')+'</text><text class="t" x="460" y="'+(mob?374:370)+'">'+(mob?'SCREW':'LEAD SCREW')+'</text></g>';
  g+='<g id="stL3"><text class="t s2" x="480" y="'+(mob?286:288)+'">'+(mob?'RAILS':'GUIDE RAILS')+'</text><text class="t" x="260" y="'+(mob?450:444)+'">'+(mob?'BASE':'MACHINED BASE')+'</text></g>';
  g+='<g id="stL4"><text class="t s2" x="470" y="'+(mob?178:182)+'">'+(mob?'TRAVEL':'UP TO 2.8 M TRAVEL')+'</text><text class="t" x="'+(mob?530:500)+'" y="'+(mob?236:232)+'">'+(mob?'TARGET':'MICROMETRE STEPS')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · MOTOR</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · SCREW</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · GUIDE</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · TRAVEL</text></g>';
  return g+'</svg>';
}
function scene(){return stScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={M:$("#stM",svg),ct:dl(".sCt"),cb:dl(".sCb"),mo:dl(".sMo"),tk:dl(".sTk"),
    S:$("#stS",svg),sc:dl(".sSc"),th:dl(".sTh"),nu:dl(".sNu"),
    G:$("#stG",svg),ba:dl(".sBa"),rl:dl(".sRl"),ca:dl(".sCa"),
    T:$("#stT",svg),opt:dl(".sOp"),ar:dl(".sAr"),tg:dl(".sTg"),
    L1:$("#stL1",svg),L2:$("#stL2",svg),L3:$("#stL3",svg),L4:$("#stL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1 */
    op(E.M,b);draw(E.ct,b*seg(p,0,.08));draw(E.cb,b*seg(p,.06,.11));draw(E.mo,b*seg(p,.09,.16));draw(E.tk,b*seg(p,.14,.21));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    op(E.S,b);draw(E.sc,b*seg(p,.26,.34));draw(E.th,b*seg(p,.32,.42));draw(E.nu,b*seg(p,.4,.47));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    op(E.G,b);draw(E.ba,b*seg(p,.52,.59));draw(E.rl,b*seg(p,.56,.63));draw(E.ca,b*seg(p,.61,.7));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    op(E.T,b);draw(E.opt,b*seg(p,.77,.83));draw(E.ar,b*seg(p,.81,.9));draw(E.tg,b*seg(p,.88,.94));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

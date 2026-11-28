/* The story scene (BL/BY/DB): how a part is made at GMJ (gmjmachine.com > Home and Who We Are: Mastercam and SolidWorks
   CAD/CAM, CNC milling and turning, CMM inspection, part marking and mil-spec packaging), ONE schematic, four stations:
   Step 1 (Program): the CAD/CAM screen with a toolpath.
   Step 2 (Machine): the spindle and cutter over the block.
   Step 3 (Inspect): the CMM bridge and probe over the part.
   Step 4 (Pack): the marked part in its mil-spec box. */
var SCW=760,SCH=520;
function gmScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">FROM DRAWING TO DELIVERY, SCHEMATIC</text>';
  /* step 1: a screen with a toolpath */
  g+='<g id="gmP"><path class="edge sSc" d="M44 214H176V306H44Z"/><path class="pipe sSt" d="M110 306V326M84 326H136"/>'+
     '<path class="rot sTp" d="M60 288V236H92V270H124V236H158V288"/></g>';
  /* step 2: spindle, cutter, block */
  g+='<g id="gmM"><path class="edge sSp" d="M256 120H296V186H256Z"/><path class="pipe sCt" d="M276 186V240"/>'+
     '<path class="edge sBl" d="M214 254H340V318H214Z"/><path class="mask sPk" d="M252 254H302V274H252Z"/></g>';
  /* step 3: the CMM bridge, probe and part */
  g+='<g id="gmC"><path class="edge sBr" d="M410 330V150H550V330"/><path class="pipe sPr" d="M480 150V268"/>'+
     '<path class="rot sTi" d="M474 268H486L480 278Z"/><path class="edge sPa" d="M440 290H520V330H440Z"/></g>';
  /* step 4: the box, its label, the arrow out */
  g+='<g id="gmD"><path class="edge sBx" d="M604 236H690V318H604Z"/><path class="pipe sTa" d="M604 256H690M647 236V256"/>'+
     '<path class="mask sLb" d="M620 276H674V300H620Z"/><path class="beam sOut" d="M700 277H736M726 267L736 277L726 287"/></g>';
  /* the line between the stations */
  g+='<g id="gmF"><path class="beam sF1" d="M184 286H206"/><path class="beam sF2" d="M350 286H402"/><path class="beam sF3" d="M560 286H596"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="gmL1"><text class="t s2" x="44" y="'+(mob?192:196)+'">CAD/CAM</text><text class="t" x="44" y="'+(mob?356:350)+'">'+(mob?'MASTERCAM':'MASTERCAM · SOLIDWORKS')+'</text></g>';
  g+='<g id="gmL2"><text class="t s2" x="214" y="'+(mob?102:106)+'">CNC</text><text class="t" x="214" y="'+(mob?350:344)+'">'+(mob?'MILL · TURN':'MILLING · TURNING')+'</text></g>';
  g+='<g id="gmL3"><text class="t s2" x="410" y="'+(mob?130:134)+'">CMM</text><text class="t" x="410" y="'+(mob?362:356)+'">AS9100</text></g>';
  g+='<g id="gmL4"><text class="t s2" x="604" y="'+(mob?214:218)+'">'+(mob?'PACK':'MIL-SPEC')+'</text><text class="t" x="604" y="'+(mob?350:344)+'">'+(mob?'MARKED':'MARKED, ON TIME')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · PROGRAM</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · MACHINE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · INSPECT</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · PACK</text></g>';
  return g+'</svg>';
}
function scene(){return gmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={P:$("#gmP",svg),sc:dl(".sSc"),st:dl(".sSt"),tp:dl(".sTp"),
    M:$("#gmM",svg),sp:dl(".sSp"),ct:dl(".sCt"),bl:dl(".sBl"),pk:dl(".sPk"),
    C:$("#gmC",svg),br:dl(".sBr"),pr:dl(".sPr"),ti:dl(".sTi"),pa:dl(".sPa"),
    D:$("#gmD",svg),bx:dl(".sBx"),ta:dl(".sTa"),lb:dl(".sLb"),out:dl(".sOut"),
    F:$("#gmF",svg),f1:dl(".sF1"),f2:dl(".sF2"),f3:dl(".sF3"),
    L1:$("#gmL1",svg),L2:$("#gmL2",svg),L3:$("#gmL3",svg),L4:$("#gmL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.F,b);
    /* step 1 */
    op(E.P,b);draw(E.sc,b*seg(p,0,.08));draw(E.st,b*seg(p,.05,.1));draw(E.tp,b*seg(p,.09,.19));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    draw(E.f1,b*seg(p,.24,.28));op(E.M,b);draw(E.sp,b*seg(p,.27,.33));draw(E.ct,b*seg(p,.31,.36));draw(E.bl,b*seg(p,.34,.41));draw(E.pk,b*seg(p,.4,.46));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    draw(E.f2,b*seg(p,.5,.54));op(E.C,b);draw(E.br,b*seg(p,.53,.61));draw(E.pr,b*seg(p,.59,.65));draw(E.ti,b*seg(p,.63,.67));draw(E.pa,b*seg(p,.65,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    draw(E.f3,b*seg(p,.75,.79));op(E.D,b);draw(E.bx,b*seg(p,.78,.84));draw(E.ta,b*seg(p,.83,.87));draw(E.lb,b*seg(p,.86,.9));draw(E.out,b*seg(p,.89,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

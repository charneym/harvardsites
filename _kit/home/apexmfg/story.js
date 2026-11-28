/* The story scene (BL/BY/DB): how a part is made at APEX (apex-manufacturing.com > About: CAD/CAM programming, Haas and
   Doosan CNC machining and turning centres, MIG welding and support equipment; Home: "Quality Parts, Delivered On Time"),
   ONE schematic, a line of four stations:
   Step 1 (Program): the CAD/CAM screen with a toolpath.
   Step 2 (Machine): the spindle and cutter over the block.
   Step 3 (Weld): the MIG torch lays a bead between two plates.
   Step 4 (Deliver): the boxed part, on its way. */
var SCW=760,SCH=520;
function axScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">FROM DRAWING TO DELIVERY, SCHEMATIC</text>';
  /* step 1: a screen with a toolpath */
  g+='<g id="axP"><path class="edge sSc" d="M44 214H176V306H44Z"/><path class="pipe sSt" d="M110 306V326M84 326H136"/>'+
     '<path class="rot sTp" d="M60 288V236H92V270H124V236H158V288"/></g>';
  /* step 2: spindle, cutter, block */
  g+='<g id="axM"><path class="edge sSp" d="M256 120H296V186H256Z"/><path class="pipe sCt" d="M276 186V240"/>'+
     '<path class="edge sBl" d="M214 254H340V318H214Z"/><path class="mask sPk" d="M252 254H302V274H252Z"/></g>';
  /* step 3: two plates, the torch, the bead */
  g+='<g id="axW"><path class="edge sP1" d="M404 284H478V318H404Z"/><path class="edge sP2" d="M482 284H556V318H482Z"/>'+
     '<path class="pipe sTo" d="M520 170L486 252"/><path class="rot sAr" d="M486 258L472 270M486 258L500 270M486 258V274"/><path class="mask sBd" d="M470 278H494V286H470Z"/></g>';
  /* step 4: the box and the arrow out */
  g+='<g id="axD"><path class="edge sBx" d="M604 236H690V318H604Z"/><path class="pipe sTa" d="M604 256H690M647 236V256"/>'+
     '<path class="beam sOut" d="M700 277H736M726 267L736 277L726 287"/></g>';
  /* the line between the stations */
  g+='<g id="axF"><path class="beam sF1" d="M184 286H206"/><path class="beam sF2" d="M350 286H396"/><path class="beam sF3" d="M564 286H596"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="axL1"><text class="t s2" x="44" y="'+(mob?192:196)+'">CAD/CAM</text><text class="t" x="44" y="'+(mob?356:350)+'">'+(mob?'PROGRAM':'CNC PROGRAM')+'</text></g>';
  g+='<g id="axL2"><text class="t s2" x="214" y="'+(mob?102:106)+'">'+(mob?'CNC':'HAAS · DOOSAN')+'</text><text class="t" x="214" y="'+(mob?350:344)+'">'+(mob?'4/5 AXIS':'4TH AND 5TH AXIS')+'</text></g>';
  g+='<g id="axL3"><text class="t s2" x="404" y="'+(mob?152:156)+'">MIG</text><text class="t" x="404" y="'+(mob?350:344)+'">'+(mob?'WELD':'WELDED')+'</text></g>';
  g+='<g id="axL4"><text class="t s2" x="604" y="'+(mob?214:218)+'">'+(mob?'SHIP':'ON TIME')+'</text><text class="t" x="604" y="'+(mob?350:344)+'">'+(mob?'1-10,000+':'1 TO 10,000+')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · PROGRAM</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · MACHINE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · WELD</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · DELIVER</text></g>';
  return g+'</svg>';
}
function scene(){return axScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={P:$("#axP",svg),sc:dl(".sSc"),st:dl(".sSt"),tp:dl(".sTp"),
    M:$("#axM",svg),sp:dl(".sSp"),ct:dl(".sCt"),bl:dl(".sBl"),pk:dl(".sPk"),
    Wd:$("#axW",svg),p1:dl(".sP1"),p2:dl(".sP2"),to:dl(".sTo"),ar:dl(".sAr"),bd:dl(".sBd"),
    D:$("#axD",svg),bx:dl(".sBx"),ta:dl(".sTa"),out:dl(".sOut"),
    F:$("#axF",svg),f1:dl(".sF1"),f2:dl(".sF2"),f3:dl(".sF3"),
    L1:$("#axL1",svg),L2:$("#axL2",svg),L3:$("#axL3",svg),L4:$("#axL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
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
    draw(E.f2,b*seg(p,.5,.54));op(E.Wd,b);draw(E.p1,b*seg(p,.52,.57));draw(E.p2,b*seg(p,.55,.6));draw(E.to,b*seg(p,.58,.63));draw(E.ar,b*seg(p,.62,.67));draw(E.bd,b*seg(p,.65,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    draw(E.f3,b*seg(p,.75,.79));op(E.D,b);draw(E.bx,b*seg(p,.78,.85));draw(E.ta,b*seg(p,.84,.89));draw(E.out,b*seg(p,.88,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

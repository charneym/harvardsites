/* The story scene (BL/BY/DB): how a part is made at Paramount (paramountmachine.com > Home: "machining from castings,
   forgings, solid stock, plates and weldments"; Equipment: Okuma turning centres up to 21" dia x 50", horizontal and
   vertical machining centres with 4th-axis contouring, Mitutoyo B706 CMM, QA room held to 70F +-2), ONE schematic:
   Step 1 (Stock): bar stock or a casting.
   Step 2 (Turn): the lathe turns it in the chuck.
   Step 3 (Mill): the machining centre's spindle cuts the pockets.
   Step 4 (Inspect): the CMM probes it. */
var SCW=760,SCH=520;
function pmScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">FROM STOCK TO PART, SCHEMATIC</text>';
  /* step 1: bar stock */
  g+='<g id="pmS"><path class="edge sBar" d="M50 250H160M50 300H160M160 250a10 25 0 0 1 0 50M50 250a10 25 0 0 0 0 50"/></g>';
  /* step 2: the lathe: chuck, the part turning, the tool */
  g+='<g id="pmT"><path class="edge sCk" d="M202 220H238V330H202Z"/><path class="edge sPt" d="M238 254H350V296H238Z"/>'+
     '<path class="rot sTl" d="M318 330L330 306L342 330Z"/><path class="rot sRo" d="M270 236Q294 226 318 236M311 230L318 236L310 240"/></g>';
  /* step 3: the machining centre: spindle, cutter, block with its pocket */
  g+='<g id="pmM"><path class="edge sSp" d="M456 110H496V176H456Z"/><path class="pipe sCt" d="M476 176V236"/>'+
     '<path class="edge sBl" d="M400 250H556V318H400Z"/><path class="mask sPk" d="M446 250H506V272H446Z"/></g>';
  /* step 4: the CMM bridge and probe over the finished part */
  g+='<g id="pmC"><path class="edge sBr" d="M604 330V140H736V330"/><path class="pipe sPr" d="M670 140V276"/>'+
     '<path class="edge sPa" d="M630 296H710V330H630Z"/></g>';
  /* the line between the stations */
  g+='<g id="pmF"><path class="beam sF1" d="M172 275H196"/><path class="beam sF2" d="M362 275H392"/><path class="beam sF3" d="M566 284H596"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="pmL1"><text class="t s2" x="44" y="'+(mob?228:232)+'">'+(mob?'STOCK':'BAR OR CASTING')+'</text></g>';
  g+='<g id="pmL2"><text class="t s2" x="202" y="'+(mob?204:206)+'">LATHE</text><text class="t" x="202" y="'+(mob?362:356)+'">'+(mob?'TO 21 IN':'UP TO 21 IN DIA')+'</text></g>';
  g+='<g id="pmL3"><text class="t s2" x="400" y="'+(mob?96:98)+'">'+(mob?'MILL':'MACHINING CENTRE')+'</text><text class="t" x="400" y="'+(mob?346:342)+'">'+(mob?'4TH AXIS':'4TH-AXIS CONTOUR')+'</text></g>';
  g+='<g id="pmL4"><text class="t s2" x="604" y="'+(mob?122:126)+'">CMM</text><text class="t" x="604" y="'+(mob?362:356)+'">'+(mob?'0.0002 IN':'TO 0.0002 IN')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · STOCK</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · TURN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · MILL</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · INSPECT</text></g>';
  return g+'</svg>';
}
function scene(){return pmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={S:$("#pmS",svg),bar:dl(".sBar"),T:$("#pmT",svg),ck:dl(".sCk"),pt:dl(".sPt"),tl:dl(".sTl"),ro:dl(".sRo"),
    M:$("#pmM",svg),sp:dl(".sSp"),ct:dl(".sCt"),bl:dl(".sBl"),pk:dl(".sPk"),C:$("#pmC",svg),br:dl(".sBr"),pr:dl(".sPr"),pa:dl(".sPa"),
    F:$("#pmF",svg),f1:dl(".sF1"),f2:dl(".sF2"),f3:dl(".sF3"),
    L1:$("#pmL1",svg),L2:$("#pmL2",svg),L3:$("#pmL3",svg),L4:$("#pmL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.F,b);
    /* step 1 */
    op(E.S,b);draw(E.bar,b*seg(p,0,.16));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    draw(E.f1,b*seg(p,.24,.28));op(E.T,b);draw(E.ck,b*seg(p,.27,.33));draw(E.pt,b*seg(p,.31,.38));draw(E.tl,b*seg(p,.36,.42));draw(E.ro,b*seg(p,.4,.46));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    draw(E.f2,b*seg(p,.5,.54));op(E.M,b);draw(E.sp,b*seg(p,.53,.59));draw(E.ct,b*seg(p,.57,.62));draw(E.bl,b*seg(p,.6,.67));draw(E.pk,b*seg(p,.65,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    draw(E.f3,b*seg(p,.75,.79));op(E.C,b);draw(E.br,b*seg(p,.78,.86));draw(E.pr,b*seg(p,.84,.9));draw(E.pa,b*seg(p,.88,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

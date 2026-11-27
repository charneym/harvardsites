/* The story scene (BL/BY/DB): coating uniformity inside a Vacuum Innovations e-beam coater (vacuuminnovations.com > Systems:
   precision optical coating e-beam deposition systems; Components: planetary rotation "allows the substrate to move in a
   precise pattern to improve thin film uniformity", rotary crystal heads "four-position head", "horizontal heads mount under
   stationary uniformity masks"), ONE schematic, side view:
   Step 1 (Source): the chamber; the e-beam source evaporates the material into a plume.
   Step 2 (Rotate): the planetary carries the substrates above the plume.
   Step 3 (Mask): a stationary uniformity mask trims the flux.
   Step 4 (Monitor): the crystal head measures the growing film. */
var SCW=760,SCH=520;
function viScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">E-BEAM COATER, SCHEMATIC</text>';
  /* step 1: chamber, crucible, the e-beam and the vapour plume */
  g+='<g id="viS"><path class="edge sCh" d="M140 60H620V460H140Z"/><path class="edge sCr" d="M330 420H430V440H330Z"/>'+
     '<path class="rf sEb" d="M300 440C280 380 340 360 372 416"/>'+
     '<path class="vap sVp" d="M380 418L220 170M380 418L300 162M380 418L380 158M380 418L460 162M380 418L540 170"/></g>';
  /* step 2: the planetary: axis, carrier, three planets */
  g+='<g id="viR"><path class="edge sAx" d="M380 66V110M200 110H560"/>'+
     '<path class="edge sPl" d="M175 140a55 14 0 1 0 110 0a55 14 0 1 0 -110 0M325 140a55 14 0 1 0 110 0a55 14 0 1 0 -110 0M475 140a55 14 0 1 0 110 0a55 14 0 1 0 -110 0"/>'+
     '<path class="edge sSt" d="M230 110V126M380 110V126M530 110V126"/>'+
     '<path class="rot sRo" d="M342 92Q380 80 418 92M410 86L418 92L409 97"/></g>';
  /* step 3: the stationary uniformity mask on its arm from the wall */
  g+='<g id="viM"><path class="edge sAr" d="M140 260H318"/><path class="mask sMk" d="M380 300Q330 244 318 236Q380 222 442 236Q430 244 380 300Z"/></g>';
  /* step 4: the crystal head and its line out of the chamber */
  g+='<g id="viC"><path class="edge sXh" d="M560 190H600V214H560Z"/><path class="pipe sLn" d="M600 202H640"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="viL1"><text class="t s2" x="440" y="'+(mob?412:412)+'">'+(mob?'E-BEAM':'E-BEAM SOURCE')+'</text><text class="t" x="'+(mob?520:440)+'" y="48">'+(mob?'VACUUM':'CHAMBER UNDER VACUUM')+'</text></g>';
  g+='<g id="viL2"><text class="t s2" x="200" y="'+(mob?94:96)+'">'+(mob?'PLANETARY':'PLANETARY ROTATION')+'</text></g>';
  g+='<g id="viL3"><text class="t s2" x="150" y="'+(mob?290:284)+'">'+(mob?'MASK':'UNIFORMITY MASK')+'</text></g>';
  g+='<g id="viL4"><text class="t s2" x="610" y="'+(mob?238:232)+'" text-anchor="end">'+(mob?'CRYSTAL':'CRYSTAL HEAD')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · SOURCE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · ROTATE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · MASK</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · MONITOR</text></g>';
  return g+'</svg>';
}
function scene(){return viScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={S:$("#viS",svg),ch:dl(".sCh"),cr:dl(".sCr"),eb:dl(".sEb"),vp:$("#viS .vap",svg),
    R:$("#viR",svg),ax:dl(".sAx"),pl:dl(".sPl"),st:dl(".sSt"),ro:dl(".sRo"),
    M:$("#viM",svg),ar:dl(".sAr"),mk:dl(".sMk"),C:$("#viC",svg),xh:dl(".sXh"),ln:dl(".sLn"),
    L1:$("#viL1",svg),L2:$("#viL2",svg),L3:$("#viL3",svg),L4:$("#viL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1 */
    op(E.S,b);draw(E.ch,b*seg(p,0,.08));draw(E.cr,b*seg(p,.04,.1));draw(E.eb,b*seg(p,.08,.14));op(E.vp,b*seg(p,.12,.2));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    op(E.R,b);draw(E.ax,b*seg(p,.26,.32));draw(E.st,b*seg(p,.3,.34));draw(E.pl,b*seg(p,.32,.42));draw(E.ro,b*seg(p,.4,.46));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    op(E.M,b);draw(E.ar,b*seg(p,.52,.58));draw(E.mk,b*seg(p,.56,.68));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    op(E.C,b);draw(E.xh,b*seg(p,.78,.84));draw(E.ln,b*seg(p,.82,.88));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

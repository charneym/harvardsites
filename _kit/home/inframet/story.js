/* The story scene (BL/BY/DB): how an Inframet DT system tests a thermal imager (inframet.com > Test systems > Thermal
   imagers: MRTD with "the standard 4-bar target", NETD, MTF, FOV; Test modules > Collimators: off-axis reflective
   collimators "imitate standard targets placed in optical infinity", Newton design with a big parabolic primary;
   Blackbodies: TCB differential blackbodies, 1 mK resolution), ONE schematic, side view:
   Step 1 (Source): the blackbody sets a reference temperature.
   Step 2 (Target): the 4-bar target on the rotary wheel.
   Step 3 (Collimate): the off-axis parabolic mirror sends the target to infinity as a parallel beam.
   Step 4 (Measure): the imager under test views it; the computer measures MRTD, NETD, MTF and FOV. */
var SCW=760,SCH=520;
function imScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">DT TEST SYSTEM, SCHEMATIC</text>';
  /* step 1: the blackbody and its emitting face */
  g+='<g id="imS"><path class="edge sBb" d="M40 330H110V430H40Z"/><path class="rf sEm" d="M118 340V420"/></g>';
  /* step 2: the target wheel with its 4-bar target */
  g+='<g id="imT"><path class="edge sWh" d="M134 380a36 36 0 1 0 72 0a36 36 0 1 0 -72 0"/>'+
     '<path class="thr sBr" d="M156 364V396M165 364V396M174 364V396M183 364V396"/></g>';
  /* step 3: the diverging cone to the off-axis parabolic mirror, and the parallel beam out */
  g+='<g id="imC"><path class="vap sCo" d="M206 380L646 280M206 380L650 362"/><path class="edge sMi" d="M636 150Q676 260 636 372"/>'+
     '<path class="beam sBm" d="M644 172H240M650 236H240"/></g>';
  /* step 4: the imager under test and the computer, cabled to it, with the 4-bar image */
  g+='<g id="imM"><path class="edge sIm" d="M120 160H230V248H120Z"/><path class="edge sLs" d="M230 180H240V228H230Z"/>'+
     '<path class="pipe sCa" d="M175 160V80H300"/><path class="edge sPc" d="M300 50H440V110H300Z"/><path class="thr sPb" d="M354 66V94M364 66V94M374 66V94M384 66V94"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="imL1"><text class="t s2" x="40" y="318">BLACKBODY</text></g>';
  g+='<g id="imL2"><text class="t s2" x="140" y="'+(mob?446:444)+'">'+(mob?'TARGET':'4-BAR TARGET')+'</text></g>';
  g+='<g id="imL3"><text class="t s2" x="'+(mob?460:430)+'" y="'+(mob?140:146)+'">'+(mob?'COLLIMATOR':'OFF-AXIS COLLIMATOR')+'</text><text class="t" x="'+(mob?250:300)+'" y="'+(mob?212:208)+'">'+(mob?'PARALLEL':'PARALLEL BEAM')+'</text></g>';
  g+='<g id="imL4"><text class="t s2" x="120" y="'+(mob?280:272)+'">'+(mob?'IMAGER':'IMAGER UNDER TEST')+'</text><text class="t" x="452" y="'+(mob?90:86)+'">'+(mob?'MRTD':'MRTD · NETD')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · SOURCE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · TARGET</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · COLLIMATE</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · MEASURE</text></g>';
  return g+'</svg>';
}
function scene(){return imScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={S:$("#imS",svg),bb:dl(".sBb"),em:dl(".sEm"),
    T:$("#imT",svg),wh:dl(".sWh"),br:dl(".sBr"),
    C:$("#imC",svg),co:dl(".sCo"),mi:dl(".sMi"),bm:dl(".sBm"),
    M:$("#imM",svg),im:dl(".sIm"),ls:dl(".sLs"),ca:dl(".sCa"),pc:dl(".sPc"),pb:dl(".sPb"),
    L1:$("#imL1",svg),L2:$("#imL2",svg),L3:$("#imL3",svg),L4:$("#imL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1 */
    op(E.S,b);draw(E.bb,b*seg(p,0,.1));draw(E.em,b*seg(p,.08,.18));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    op(E.T,b);draw(E.wh,b*seg(p,.26,.36));draw(E.br,b*seg(p,.34,.44));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    op(E.C,b);draw(E.co,b*seg(p,.52,.6));draw(E.mi,b*seg(p,.56,.64));draw(E.bm,b*seg(p,.62,.71));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    op(E.M,b);draw(E.im,b*seg(p,.77,.82));draw(E.ls,b*seg(p,.8,.84));draw(E.ca,b*seg(p,.82,.89));draw(E.pc,b*seg(p,.87,.92));draw(E.pb,b*seg(p,.9,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

/* The story scene (BL/BY/DB): how FILAR makes a laser rod (filaroptomaterials.com > Nd:YAG: "Ultra-pure gas and superior raw
   material purity ... using only a small portion (about 20%) of the melt ... A very uniform Nd profile is certified for each
   boule ... mapping the boule with double pass interferometer to identify the low stress regions ... In house coating allows a
   short cycle time after end polishing"; Products: rod specifications), ONE schematic:
   Step 1 (Grow): the boule is pulled from the melt in its crucible.
   Step 2 (Map): an interferometer maps the boule; the low-stress region is marked.
   Step 3 (Shape): a rod is cut from that region, chamfered and polished.
   Step 4 (Coat): coating layers on both rod ends; a beam passes through. */
var SCW=760,SCH=520;
function frScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">LASER ROD, SCHEMATIC</text>';
  /* step 1: crucible, melt, the boule on its seed */
  g+='<g id="frG"><path class="edge sCr" d="M110 380V450H310V380"/><path class="melt sMl" d="M114 404H306"/>'+
     '<path class="edge sBo" d="M170 398V190Q170 150 210 136V96H230V136Q270 150 270 190V398"/><path class="edge sSd" d="M220 96V60"/></g>';
  /* step 2: the interferometer, its beams, fringes, the low-stress region */
  g+='<g id="frM"><path class="edge sIf" d="M560 250H680V320H560Z"/><path class="beam sBm" d="M560 270H270M560 300H270"/>'+
     '<path class="frg sFr" d="M176 230Q220 244 264 230M176 270Q220 284 264 270M176 310Q220 324 264 310M176 350Q220 364 264 350"/>'+
     '<path class="zone sZn" d="M184 210H256V370H184Z"/></g>';
  /* step 3: the rod, cut from the low-stress region, chamfered */
  g+='<g id="frR"><path class="cut sCt" d="M256 214Q310 170 368 168"/><path class="edge sRd" d="M386 150H654L660 156V180L654 186H386L380 180V156Z"/></g>';
  /* step 4: coatings on both ends, the beam through the rod */
  g+='<g id="frC">';for(i=0;i<3;i++){g+='<path class="lay sLy" style="stroke:'+(i%2?'#f4f6f6':'#3fd1c4')+'" d="M'+(374-i*4)+' 154V182"/>';g+='<path class="lay sLy" style="stroke:'+(i%2?'#f4f6f6':'#3fd1c4')+'" d="M'+(666+i*4)+' 154V182"/>'}
  g+='<path class="beam2 sB2" d="M290 168H358M682 168H740"/></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="frL1"><text class="t s2" x="290" y="'+(mob?122:120)+'">'+(mob?'BOULE':'BOULE · ~20% OF THE MELT')+'</text><text class="t" x="110" y="'+(mob?482:474)+'">MELT</text></g>';
  g+='<g id="frL2"><text class="t s2" x="560" y="'+(mob?350:342)+'">'+(mob?'INTERFEROMETER':'DOUBLE-PASS INTERFEROMETER')+'</text><text class="t" x="160" y="'+(mob?296:292)+'" text-anchor="end">'+(mob?'LOW STRESS':'LOW-STRESS REGION')+'</text></g>';
  g+='<g id="frL3"><text class="t s2" x="380" y="'+(mob?134:136)+'">'+(mob?'Ø 2–12.7 MM':'Ø 2–12.7 MM · 5–150 MM · λ/10')+'</text></g>';
  g+='<g id="frL4"><text class="t s2" x="380" y="'+(mob?226:222)+'">'+(mob?'AR · HR · PR':'AR · HR · PR COATINGS')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · GROW</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · MAP</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SHAPE</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · COAT</text></g>';
  return g+'</svg>';
}
function scene(){return frScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={G:$("#frG",svg),cr:dl(".sCr"),ml:dl(".sMl"),bo:dl(".sBo"),sd:dl(".sSd"),
    M:$("#frM",svg),inf:dl(".sIf"),bm:dl(".sBm"),fr:$("#frM .frg",svg),zn:$("#frM .zone",svg),
    R:$("#frR",svg),ct:dl(".sCt"),rd:dl(".sRd"),C:$("#frC",svg),ly:dl(".sLy"),b2:dl(".sB2"),
    L1:$("#frL1",svg),L2:$("#frL2",svg),L3:$("#frL3",svg),L4:$("#frL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function stag(list,v){var n=list.length;list.forEach(function(a,i){var w=Math.max(0,Math.min(1,v*n-i));a[0].style.strokeDashoffset=(a[1]*(1-w)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1: crucible and melt, then the boule rises from it; it stays, dimmed, as the source of the rod */
    op(E.G,b*(1-.55*seg(p,.74,.8)));draw(E.cr,b*seg(p,0,.07));draw(E.ml,b*seg(p,.04,.1));draw(E.sd,b*seg(p,.06,.1));draw(E.bo,b*seg(p,.08,.18));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the interferometer, beams, fringes, then the low-stress region */
    op(E.M,b*(1-.85*seg(p,.5,.56)));draw(E.inf,b*seg(p,.26,.32));draw(E.bm,b*seg(p,.3,.37));op(E.fr,seg(p,.34,.4)*(1-seg(p,.48,.52)));op(E.zn,seg(p,.38,.44));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the rod is cut from the region */
    op(E.R,b*seg(p,.52,.56));draw(E.ct,b*seg(p,.52,.58)*(1-seg(p,.76,.8)));draw(E.rd,b*seg(p,.56,.68));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: coatings build on both ends; a beam passes through */
    op(E.C,b);stag(E.ly,b*seg(p,.78,.88));draw(E.b2,b*seg(p,.88,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

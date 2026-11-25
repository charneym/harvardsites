/*<R:story>*//* The story scene (DB/BL/BY): Clear Guide's own workflow (clearguidemedical.com: VisiMARKERs visible in CT/MR register the
   scan automatically in under 10 s; "image lock" keeps an operator-defined target; TipTAGs let the cameras track the
   instrument tip; SCENERGY TP guides transperineal needles through a lettered grid so biopsy and cryoablation fit one
   session), drawn as ONE calm fine-line axial scan slice that fills the frame: body outline, bladder, femoral heads,
   prostate and rectum, the optical camera head above, the grid template below.
   Frame 0 is complete: slice, organs, camera, grid and the target.
   Step 1 (register): two VisiMARKERs sit on the skin; dashed sight lines run from the cameras to them.
   Step 2 (target): the AR target ring locks onto the target; the planned path draws from the grid.
   Step 3 (track): the needle draws in through the grid along the path; its TipTAG lights.
   Step 4 (treat): a second probe follows and a cryoablation zone grows around the target. Driven by scrubbed progress.
   No dash draws on non-scaling strokes (DR4; nssfix.js is inlined too). Labels keep >=8px clear of every stroke (DR3). */
var CG_BODY="M110 290C110 178 208 116 330 116C452 116 550 178 550 290C550 402 462 462 330 462C198 462 110 402 110 290Z";
var CG_HOLES=[276,294,312,330,348,366,384];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'100 24 460 596':'0 22 760 596')+'" aria-hidden="true"><g id="scG">';
  g+='<path class="wl sD" d="'+CG_BODY+'"/>';
  g+='<ellipse class="wo sD" cx="330" cy="206" rx="64" ry="40"/><circle class="wo sD" cx="200" cy="318" r="40"/><circle class="wo sD" cx="460" cy="318" r="40"/>';
  g+='<ellipse class="wl sD" cx="330" cy="314" rx="56" ry="44"/><ellipse class="wo sD" cx="330" cy="404" rx="24" ry="20"/>';
  /* the optical camera head above the patient */
  g+='<g id="cam"><rect class="wl sD" x="296" y="36" width="68" height="20"/><circle class="wl sD" cx="312" cy="46" r="5"/><circle class="wl sD" cx="348" cy="46" r="5"/></g>';
  /* the grid template, seen edge-on below the slice */
  g+='<g id="grid"><rect class="wl sD" x="266" y="494" width="128" height="14"/>';
  CG_HOLES.forEach(function(x){g+='<circle class="hole" cx="'+x+'" cy="501" r="2.4"/>'});g+='</g>';
  /* the target */
  g+='<circle class="tgd" id="tgd" cx="366" cy="300" r="4.5"/>';
  /* step 1: markers on the skin, sight lines from the cameras */
  g+='<g id="vm"><path class="am sV" d="M318 56L252 104"/><path class="am sV" d="M342 56L408 104"/>';
  g+='<rect class="mk" x="240" y="106" width="22" height="16" transform="rotate(-14 251 114)"/><rect class="mkf" x="246" y="110" width="7" height="7" transform="rotate(-14 251 114)"/>';
  g+='<rect class="mk" x="398" y="106" width="22" height="16" transform="rotate(14 409 114)"/><rect class="mkf" x="407" y="110" width="7" height="7" transform="rotate(14 409 114)"/></g>';
  /* step 2: the AR ring locks on, the planned path draws up from the grid */
  g+='<path class="tr sT" d="M366 492L366 316"/>';
  g+='<g id="ring"><circle class="ar" cx="366" cy="300" r="15"/><path class="ar" d="M366 278v8M366 314v8M344 300h8M380 300h8"/></g>';
  /* step 3: the needle and its TipTAG */
  g+='<path class="nd sN" d="M366 566L366 306"/><rect class="hub" id="hub1" x="359" y="566" width="14" height="14"/><rect class="tt" id="tt1" x="362" y="569" width="8" height="8"/>';
  /* step 4: a second probe and the ablation zone */
  g+='<ellipse class="ice" id="ice" cx="374" cy="306" rx="1" ry="1"/>';
  g+='<path class="nd sP" d="M384 566L384 318"/><rect class="hub" id="hub2" x="377" y="566" width="14" height="14"/>';
  g+='</g>';
  if(!mob){g+='<g id="lCh"><path class="ld" d="M372 46H586"/><text class="t" x="596" y="50">OPTICAL CAMERAS</text>'+
    '<path class="ld" d="M402 504H586"/><text class="t" x="596" y="508">SCENERGY TP GRID</text>'+
    '<text class="t" x="24" y="160">MR / CT SLICE</text></g>'+
    '<g id="lVm"><path class="ld" d="M428 114H586"/><text class="t" x="596" y="118">VISIMARKERS</text></g>'+
    '<g id="lTg"><text class="t" x="596" y="304">TARGET, LOCKED</text></g>'+
    '<g id="lTt"><path class="ld" d="M400 573H586"/><text class="t" x="596" y="577">TIPTAG</text></g>'+
    '<g id="lIc"><text class="t" x="596" y="356">CRYOABLATION</text></g>'}
  else{g+='<g id="lCh"></g><g id="lVm"></g><g id="lTg"></g><g id="lTt"></g><g id="lIc"></g>'}
  var ly=mob?610:610,lx=mob?108:24;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'AUTO-REGISTERED, UNDER 10 S':'MARKERS REGISTER THE SCAN IN UNDER 10 SECONDS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TARGET LOCKED':'TARGET LOCKED ON THE SCAN, PATH PLANNED')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE TIP, TRACKED LIVE':'THE TIP, TRACKED LIVE THROUGH THE GRID')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BIOPSY + ABLATION':'BIOPSY AND ABLATION IN ONE SESSION')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),vm:dl(".sV"),tr:dl(".sT"),n1:dl(".sN"),n2:dl(".sP"),
    vg:$("#vm",svg),mk:$$("#vm .mk,#vm .mkf",svg),ring:$("#ring",svg),tgd:$("#tgd",svg),holes:$$("#grid .hole",svg),
    h1:$("#hub1",svg),t1:$("#tt1",svg),h2:$("#hub2",svg),ice:$("#ice",svg),
    lCh:$("#lCh",svg),lVm:$("#lVm",svg),lTg:$("#lTg",svg),lTt:$("#lTt",svg),lIc:$("#lIc",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.tgd,b);E.holes.forEach(function(h){op(h,b)});op(E.lCh,b);
    /* step 1: markers settle on the skin, sight lines draw from the cameras */
    var m=sm(seg(p,.02,.12));E.mk.forEach(function(r){op(r,b*m)});draw(E.vm,b*sm(seg(p,.06,.2)));op(E.lVm,b*m);
    /* step 2: the ring locks on (a slight settle in scale), the planned path draws up from the grid */
    var r=sm(seg(p,.26,.36)),sc=1.5-.5*r;
    E.ring.setAttribute("transform","translate(366 300) scale("+sc.toFixed(3)+") translate(-366 -300)");op(E.ring,b*r);op(E.lTg,b*r);
    draw(E.tr,b*sm(seg(p,.3,.44)));
    /* step 3: the needle advances along the path; its TipTAG lights as it is tracked */
    var n=sm(seg(p,.52,.68));draw(E.n1,b*n);op(E.h1,b*sm(seg(p,.5,.56)));op(E.t1,b*sm(seg(p,.56,.62)));op(E.lTt,b*sm(seg(p,.56,.62)));
    /* step 4: a second probe follows; the ablation zone grows around the target */
    draw(E.n2,b*sm(seg(p,.76,.86)));op(E.h2,b*sm(seg(p,.75,.8)));
    var ic=sm(seg(p,.84,.96));E.ice.setAttribute("rx",(1+38*ic).toFixed(1));E.ice.setAttribute("ry",(1+30*ic).toFixed(1));op(E.ice,b*ic);op(E.lIc,b*ic);
    op(E.l1,b*(1-seg(p,.2,.25)));op(E.l2,b*seg(p,.28,.34)*(1-seg(p,.45,.5)));op(E.l3,b*seg(p,.53,.59)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.86));
  };
}/*</R:story>*/

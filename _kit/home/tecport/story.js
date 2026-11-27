/* The story scene (BL/BY/DB): inside a Tecport box coater (tecportoptics.com > Symphony Precision, Symphony Opus, Our
   Technology / HD plasma, ROCK planetary rotation, Milestones), ONE fine-line schematic kept on screen:
   Step 1 (Vacuum): the chamber is pumped down; Opus runs pumps, cryo regeneration, Polycold and leak-rate checks.
   Step 2 (Source): evaporation sources turn material to vapour; the High Density Plasma source packs the film.
   Step 3 (Rotation): substrates turn on the dome / planetary above the sources for even layers.
   Step 4 (Control): thickness is measured as it grows; block recipes build the stack layer by layer. */
var SCW=760,SCH=520;
function tpScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">BOX COATER, SCHEMATIC</text>';
  /* step 1: the chamber, the pump and its line */
  g+='<g id="tpV"><path class="edge sCh" d="M150 70H560V440H150Z"/><path class="edge sPu" d="M600 330H700V410H600Z"/>'+
     '<path class="edge sPu" d="M650 370m-20 0a20 20 0 1 0 40 0a20 20 0 1 0 -40 0"/><path class="pipe sPi" d="M560 370H600"/></g>';
  /* step 2: two evaporation sources, the HD plasma source, the vapour */
  g+='<g id="tpS"><path class="edge sSr" d="M200 404H264V424H200Z"/><path class="edge sSr" d="M372 404H436V424H372Z"/><path class="edge sSr" d="M294 400H342V424H294Z"/>'+
     '<path class="vap sVp" d="M232 402L200 190M232 402L280 168M404 402L380 168M404 402L470 192"/><path class="pls sPl" d="M318 398V196"/></g>';
  /* step 3: the substrate dome and its rotation */
  g+='<g id="tpR"><path class="edge sDm" d="M190 196Q335 110 480 196"/>';
  var P=[[214,183],[252,164],[294,151],[338,147],[382,151],[424,164],[462,182]];
  for(i=0;i<P.length;i++)g+='<path class="sub" d="M'+(P[i][0]-12)+' '+(P[i][1]-4)+'h24v8h-24z"/>';
  g+='<path class="rot sRo" d="M290 130Q335 114 380 130M372 122L380 130L370 135"/></g>';
  /* step 4: the thickness monitor, the controller and the growing layer stack */
  g+='<g id="tpC"><path class="edge sMo" d="M512 226H536V246H512Z"/><path class="pipe sLk" d="M536 236H620V170"/><path class="edge sCo" d="M580 70H720V170H580Z"/>';
  for(i=0;i<6;i++)g+='<path class="lay sLy" style="stroke:'+(i%2?'#f6f5f2':'#ff5a5f')+'" d="M600 '+(152-i*12)+'H700"/>';
  g+='</g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="tpL1"><text class="t s2" x="600" y="'+(mob?316:318)+'">PUMPS</text><text class="t" x="160" y="'+(mob?470:464)+'">'+(mob?'HIGH VACUUM':'CHAMBER AT HIGH VACUUM')+'</text></g>';
  g+='<g id="tpL2"><text class="t s2" x="200" y="'+(mob?470:466)+'">'+(mob?'SOURCES':'SOURCES · HD PLASMA')+'</text></g>';
  g+='<g id="tpL3"><text class="t s2" x="'+(mob?335:335)+'" y="'+(mob?100:98)+'" text-anchor="middle">'+(mob?'SUBSTRATES':'SUBSTRATES IN ROTATION')+'</text></g>';
  g+='<g id="tpL4"><text class="t s2" x="580" y="'+(mob?56:58)+'">'+(mob?'RECIPE':'RECIPE · LAYER STACK')+'</text><text class="t" x="570" y="'+(mob?262:258)+'">'+(mob?'MONITOR':'THICKNESS MONITOR')+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · VACUUM</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · SOURCE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · ROTATION</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · CONTROL</text></g>';
  return g+'</svg>';
}
function scene(){return tpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={V:$("#tpV",svg),ch:dl(".sCh"),pu:dl(".sPu"),pi:dl(".sPi"),
    S:$("#tpS",svg),sr:dl(".sSr"),vp:$("#tpS .vap",svg),pl:$("#tpS .pls",svg),
    R:$("#tpR",svg),dm:dl(".sDm"),sub:$$("#tpR .sub",svg),ro:dl(".sRo"),
    C:$("#tpC",svg),mo:dl(".sMo"),lk:dl(".sLk"),co:dl(".sCo"),ly:dl(".sLy"),
    L1:$("#tpL1",svg),L2:$("#tpL2",svg),L3:$("#tpL3",svg),L4:$("#tpL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function stag(list,v){var n=list.length;list.forEach(function(a,i){var w=Math.max(0,Math.min(1,v*n-i));a[0].style.strokeDashoffset=(a[1]*(1-w)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1 */
    op(E.V,b);draw(E.ch,b*seg(p,0,.1));draw(E.pu,b*seg(p,.06,.14));draw(E.pi,b*seg(p,.12,.18));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2 */
    op(E.S,b);draw(E.sr,b*seg(p,.26,.34));op(E.vp,b*seg(p,.34,.42));op(E.pl,b*seg(p,.38,.46));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3 */
    op(E.R,b);draw(E.dm,b*seg(p,.5,.57));E.sub.forEach(function(s,i){op(s,b*seg(p,.54+i*.015,.58+i*.015))});draw(E.ro,b*seg(p,.62,.7));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4 */
    op(E.C,b);draw(E.mo,b*seg(p,.76,.8));draw(E.lk,b*seg(p,.78,.83));draw(E.co,b*seg(p,.8,.85));stag(E.ly,b*seg(p,.84,.95));
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

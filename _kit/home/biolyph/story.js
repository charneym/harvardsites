/* the story scene (BL/BY/DB): ONE production line drawn as an engraved elevation and kept on screen for all three steps:
   the dispenser nozzle, the lyophilizer chamber (shelves and condenser) and the low-humidity packaging suite with a tube.
   Step 1 (dispense): a precise aliquot falls from the nozzle and settles as a sphere.
   Step 2 (lyophilize): the spheres sit on the shelves while water vapour leaves them for the condenser.
   Step 3 (package): the LyoSpheres fill a tube inside the packaging suite (<3% RH).
   Sources: biolyph.com Lyophilization Services and LyoSpheres pages (500 nL to 300 µL aliquots, cycle development,
   packaging suites below 3% relative humidity). Schematic. Driven by the scrubbed story progress. */
function scene(){
  var mob=MOBILE(),g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+'20 150 700 410'+'" aria-hidden="true">';
  g+='<defs><radialGradient id="blS" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#bfe8f7"/><stop offset="1" stop-color="#3ab4e8"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* dispenser: feed line and nozzle, and the small tray the sphere settles on */
  g+='<path class="sD ln" d="M110 160V200"/><path class="sD nz" d="M92 200H128V250L116 280H104L92 250Z"/><path class="sD ln2" d="M80 456H140"/>';
  /* lyophilizer chamber: walls, two shelves, condenser coil */
  g+='<path class="sD ch" d="M240 230H470V480H240Z"/><path class="sD sh" d="M256 336H454"/><path class="sD sh" d="M256 426H454"/>';
  var cz='M270 262';for(i=0;i<9;i++){cz+='L'+(282+i*20)+' '+(i%2?262:250)}g+='<path class="sD co" d="'+cz+'"/>';
  /* packaging suite: the tube and its cap */
  g+='<path class="sD tb" d="M600 296V440A20 20 0 0 0 640 440V296"/><path class="sD cp" d="M594 270H646V296H594Z"/>';
  g+='<text class="a" x="110" y="548" text-anchor="middle">DISPENSE</text><text class="a" x="355" y="548" text-anchor="middle">LYOPHILIZE</text><text class="a" x="621" y="548" text-anchor="middle">PACKAGE</text>';
  g+='</g>';
  /* step 1: the aliquot falls and settles as a sphere */
  g+='<g id="st1"><path class="sD1 fl" d="M110 286V302"/><path class="sD1 dr" d="M110 308C116 320 122 328 122 336A12 12 0 0 1 98 336C98 328 104 320 110 308Z"/>'+
     '<path class="sD1 fl" d="M110 356V418"/><circle class="sD1 sp" cx="110" cy="443" r="12"/>'+
     '<text class="a" x="110" y="510" text-anchor="middle">500 nL – 300 µL</text></g>';
  /* step 2: spheres on the shelves, vapour rising to the condenser */
  g+='<g id="st2"><path class="sD2 ar" d="M148 443H230M222 437L230 443L222 449"/>';
  for(i=0;i<6;i++){g+='<circle class="sD2 sp" cx="'+(282+i*32)+'" cy="324" r="11"/><circle class="sD2 sp" cx="'+(282+i*32)+'" cy="414" r="11"/>'}
  for(i=0;i<3;i++){var vx=298+i*58;g+='<path class="sD2 vp" d="M'+vx+' 306C'+(vx-6)+' 296 '+(vx+6)+' 288 '+vx+' 278C'+(vx-5)+' 272 '+(vx+3)+' 268 '+vx+' 266"/>'}
  g+='<text class="a" x="355" y="510" text-anchor="middle">FREEZE-DRY CYCLE</text></g>';
  /* step 3: into the tube, inside the low-humidity suite */
  g+='<g id="st3"><path class="sD3 ar" d="M478 414H556M548 408L556 414L548 420"/><path class="sD3 st" d="M528 236H714V480H528Z"/>';
  var TS=[[620,449],[611,430],[629,418],[611,400],[629,388],[612,370],[628,356],[612,338],[628,324]];
  TS.forEach(function(p){g+='<circle class="sD3 sp" cx="'+p[0]+'" cy="'+p[1]+'" r="9"/>'});
  g+='<text class="a" x="621" y="510" text-anchor="middle">&lt;3% RH</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),
    c1:dl("#st1 .sD1"),c2:dl("#st2 .sD2"),c3:dl("#st3 .sD3")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* each step stays drawn as the line moves on: the drop, then the chamber, then the tube */
    var i1=seg(p,0,.1),i2=seg(p,.35,.5),i3=seg(p,.68,.86);
    op(E.s1,b*i1);draw(E.c1,i1);
    op(E.s2,b*i2);draw(E.c2,i2);
    op(E.s3,b*Math.min(1,i3*6));draw(E.c3,i3);
  };
}

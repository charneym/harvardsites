/* The story scene (BL/BY/DB): why Trestle builds its objective from mirrors, in the terms of its NIH abstracts
   (1R43GM149018: refractive objectives suffer "chromatic aberrations" and "simply cannot be used" with mid-infrared
   excitation; the all-reflective Schwarzschild-Cassegrain objective is "inherently achromatic"; 2R44GM149018: a lens
   "constructed entirely from curved mirrors in a non-concentric geometry", Phase II adds "a liquid immersion").
   ONE figure: a schematic cross-section. Step 1: a glass lens; visible rays focus at two depths. Step 2: mid-infrared
   rays stop at the glass. Step 3: the glass gives way to the mirror pair (concave primary with its central hole, convex
   secondary on the axis); visible and mid-infrared rays share one focus. Step 4: an immersion drop at the focus.
   Schematic only: no dimensions or wavelengths are implied. */
function trScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="trsc'+(mob?' mob':'')+'" viewBox="'+(mob?'120 18 480 472':'20 18 680 472')+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="40" y="40">OBJECTIVE · SCHEMATIC CROSS-SECTION</text>';
  /* the optical axis and the sample plane */
  g+='<path class="ax" d="M360 56V452"/><path class="cs" d="M200 430H520"/><text class="ax2" x="'+(mob?516:526)+'" y="434">SAMPLE</text>';
  /* glass objective */
  g+='<g id="trG"><path class="gl" d="M226 206Q360 150 494 206Q360 262 226 206Z"/><text class="lb" x="'+(mob?446:506)+'" y="'+(mob?250:200)+'">GLASS</text>'+
     '<path class="rv" id="trV0" d="M262 64V196L360 386"/><path class="rv" id="trV1" d="M458 64V196L360 386"/>'+
     '<path class="rv r2" id="trV2" d="M282 64V198L360 414"/><path class="rv r2" id="trV3" d="M438 64V198L360 414"/>'+
     '<circle class="fp" id="trF0" cx="360" cy="386" r="4"/><circle class="fp" id="trF1" cx="360" cy="414" r="4"/>'+
     '<path class="ri" id="trI0" d="M246 64V176"/><path class="ri" id="trI1" d="M474 64V176"/>'+
     '<path class="xx" id="trX" d="M238 168L254 184M254 168L238 184M466 168L482 184M482 168L466 184"/></g>';
  /* mirror objective: concave primary (central hole) and convex secondary on the axis */
  g+='<g id="trM"><path class="mr" d="M206 150Q262 100 338 92"/><path class="mr" d="M382 92Q458 100 514 150"/>'+
     '<path class="mr" d="M326 276Q360 258 394 276"/><path class="hs" d="M326 276H394V290H326Z"/>'+
     '<text class="lb" x="'+(mob?474:522)+'" y="'+(mob?100:134)+'">PRIMARY</text><text class="lb" x="466" y="236">SECONDARY</text>'+
     '<path class="rm" id="trM0" d="M350 56V267L222 137L360 412"/><path class="rm" id="trM1" d="M370 56V267L498 137L360 412"/>'+
     '<path class="rx" id="trM2" d="M354 56V268L232 130L360 412"/><path class="rx" id="trM3" d="M366 56V268L488 130L360 412"/>'+
     '<circle class="fp on" id="trF2" cx="360" cy="412" r="5"/>'+
     '<path class="dr" id="trD" d="M318 430C320 402 338 394 360 394C382 394 400 402 402 430Z"/></g>';
  var C=mob?["GLASS: TWO FOCI","MID-IR: BLOCKED","MIRRORS: ONE FOCUS","IMMERSION: HIGHER NA"]:["GLASS · COLORS FOCUS AT DIFFERENT DEPTHS","GLASS · MID-INFRARED DOES NOT TRANSMIT","MIRRORS · VISIBLE AND MID-IR SHARE ONE FOCUS","PHASE II · LIQUID IMMERSION, HIGHER NA"];
  for(i=0;i<4;i++)g+='<text class="cl" id="trC'+i+'" x="'+(mob?140:40)+'" y="'+(mob?482:480)+'">'+C[i]+'</text>';
  /* legend */
  g+='<g class="lg" id="trL"><path class="rv" d="M'+(mob?140:40)+' '+(mob?64:66)+'h26"/><text class="lb" x="'+(mob?174:74)+'" y="'+(mob?68:70)+'">VISIBLE</text>'+
     '<path class="lgi" d="M'+(mob?140:40)+' '+(mob?88:90)+'h26"/><text class="lb" x="'+(mob?174:74)+'" y="'+(mob?92:94)+'">MID-IR</text></g>';
  return g+'</svg>';
}
function scene(){return trScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var G=q("#trG"),M=q("#trM"),X=q("#trX"),D=q("#trD"),
    V=[0,1,2,3].map(function(k){return q("#trV"+k)}),I=[0,1].map(function(k){return q("#trI"+k)}),
    R=[0,1,2,3].map(function(k){return q("#trM"+k)}),F=[0,1,2].map(function(k){return q("#trF"+k)}),
    cap=[0,1,2,3].map(function(k){return q("#trC"+k)});
  function prep(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;el.style.strokeDashoffset=L;return L}
  var LV=V.map(prep),LR=R.map(prep);
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function draw(el,L,u){el.style.strokeDashoffset=(L*(1-Math.max(0,Math.min(1,u)))).toFixed(1)}
  return function(p,b){
    if(!svg.isConnected)return;
    var gm=seg(p,.48,.56),gl=1-gm;
    op(G,b*gl);op(M,b*gm);
    /* step 1: the visible rays draw through the glass to two foci */
    var v=seg(p,.03,.2);V.forEach(function(el,k){draw(el,LV[k],v);op(el,1)});
    op(F[0],seg(p,.18,.22));op(F[1],seg(p,.18,.22));
    /* step 2: the mid-infrared rays arrive and stop at the glass */
    var ir=seg(p,.27,.4);I.forEach(function(el){el.style.strokeDashoffset="0";op(el,ir)});op(X,seg(p,.38,.44));
    /* step 3: the mirror pair; both bands fold to one focus */
    var m=seg(p,.55,.72);R.forEach(function(el,k){draw(el,LR[k],m)});op(F[2],seg(p,.7,.74));
    /* step 4: the immersion drop */
    op(D,seg(p,.78,.9));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
  };
}

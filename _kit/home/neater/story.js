/* The story scene (BL/BY/DB): how the Neater Eater Robotic serves a meal, as neater.co.uk describes it (plug-and-go set-up;
   switches, touch screen, voice or eye gaze; scooping and plate scraping; the arm bringing the spoon to the user, wiped), drawn as
   ONE side elevation of the device kept on screen for all four steps:
   1 Set up: the base, plate, column, arm and spoon draw in as a line drawing on the floor line, then fill in.
   2 Control: a switch on its cable, the touch screen lighting up and voice waves.
   3 Scoop: the arm lowers and the spoon (kept level by its own joint) takes food from the plate.
   4 To the mouth: the arm lifts the spoon to mouth level. Schematic, not to scale. */
var NP={x:165,y:300},NE={x:332,y:300};
function nArm(){
  return '<g id="nArm"><path class="arm" d="M165 291H332A9 9 0 0 1 332 309H165A9 9 0 0 1 165 291Z"/><path class="sD dw" d="M165 291H332A9 9 0 0 1 332 309H165A9 9 0 0 1 165 291Z"/>'+
   '<g id="nStem"><path class="stm" d="M332 300Q352 302 360 330L372 362"/><path class="grp" d="M342 302Q352 306 356 318"/>'+
   '<path class="spn" d="M364 366C368 360 384 362 390 370C392 376 380 381 370 378C364 376 362 370 364 366Z"/>'+
   '<circle class="fd" id="nBite" cx="378" cy="368" r="5" opacity="0"/></g>'+
   '<circle class="jt" cx="332" cy="300" r="7"/><circle class="jt" cx="165" cy="300" r="11"/></g>';
}
function nScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"30 168 560 424":"20 168 570 444")+'" aria-hidden="true"><defs>'+
    '<linearGradient id="nMag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c0569a"/><stop offset=".5" stop-color="#9b2f78"/><stop offset="1" stop-color="#6e1d58"/></linearGradient>'+
    '<linearGradient id="nBase" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a8387f"/><stop offset="1" stop-color="#5d1749"/></linearGradient>'+
    '<linearGradient id="nPl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d9d3e2"/></linearGradient></defs>';
  /* floor line */
  g+='<path class="sD fl" d="M40 520H560"/>';
  /* the base (filled once drawn), column, plate */
  g+='<g id="nBody" opacity="0"><path class="bse" d="M160 440H470Q490 440 490 460V510Q490 520 480 520H160Q150 520 150 510V450Q150 440 160 440Z"/>'+
     '<path class="col" d="M152 300H178V440H152Z"/>'+
     '<path class="plt" d="M330 438H460L452 446H338Z"/><ellipse class="plt" cx="395" cy="430" rx="92" ry="13"/><ellipse class="plw" cx="395" cy="429" rx="60" ry="7"/></g>';
  g+='<path class="sD dw" d="M160 440H470Q490 440 490 460V510Q490 520 480 520H160Q150 520 150 510V450Q150 440 160 440Z"/>';
  g+='<path class="sD dw" d="M152 440V300H178V440"/>';
  g+='<path class="sD dw" d="M303 430A92 13 0 1 0 487 430A92 13 0 1 0 303 430Z"/>';
  /* food on the plate (step 3) */
  g+='<g id="nFood" opacity="0"><circle class="fd" cx="372" cy="427" r="5"/><circle class="fd" cx="388" cy="425" r="4.4"/><circle class="fd2" cx="408" cy="428" r="5"/><circle class="fd2" cx="420" cy="425" r="4"/></g>';
  /* the touch screen on the front of the base */
  g+='<path class="sD dw" d="M236 466H330V510H236Z"/>';
  g+='<g id="nScr" opacity="0"><path class="scr" d="M240 470H326V506H240Z"/><path class="bt" d="M245 476H268V500H245Z"/><path class="bt" d="M272 476H295V500H272Z"/><path class="bt b2" d="M299 476H322V500H299Z"/></g>';
  /* the arm (rotates about the column top; the spoon keeps level) */
  g+=nArm();
  /* controls (step 2): a switch on its cable, voice waves */
  g+='<g id="nSw" opacity="0"><path class="cbl" d="M104 506Q126 520 150 500"/><circle class="sw" cx="86" cy="506" r="17"/><circle class="swb" cx="86" cy="506" r="9"/></g>';
  g+='<g id="nVo" opacity="0"><path class="vo" d="M506 474Q514 482 506 490"/><path class="vo" d="M516 466Q530 482 516 498"/><path class="vo" d="M526 458Q546 482 526 506"/></g>';
  /* mouth level (step 4) */
  g+='<g id="nMl" opacity="0"><path class="ml" d="M300 262H560"/>'+(mob?'':'<text class="t" x="430" y="248">MOUTH LEVEL</text>')+'</g>';
  if(!mob){
    g+='<g id="nLp" opacity="0"><path class="ld" d="M492 424H512"/><text class="t" x="518" y="428">PLATE</text></g>';
    g+='<g id="nLc" opacity="0"><text class="t" x="58" y="552">SWITCH</text><text class="t" x="232" y="552">TOUCH SCREEN</text><text class="t" x="494" y="552">VOICE</text></g>';
  }
  ["1 · SET UP","2 · CONTROL","3 · SCOOP","4 · TO THE MOUTH"].forEach(function(c,k){g+='<text class="a" id="nC'+k+'" x="'+(mob?50:40)+'" y="'+(mob?572:600)+'" opacity="0">'+c+'</text>'});
  return g+'</svg>';
}
function scene(){return nScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return svg.querySelector(s)};
  var E={base:dl(".sD"),dw:$$(".dw",svg),body:q("#nBody"),arm:q("#nArm"),stem:q("#nStem"),bite:q("#nBite"),food:q("#nFood"),scr:q("#nScr"),
    sw:q("#nSw"),vo:q("#nVo"),ml:q("#nMl"),lp:q("#nLp"),lc:q("#nLc"),C:[0,1,2,3].map(function(k){return q("#nC"+k)}),
    solid:$$("#nArm .arm,#nArm .stm,#nArm .grp,#nArm .spn,#nArm .jt",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.setAttribute("opacity",Math.max(0,Math.min(1,v)).toFixed(3))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var w=[1-seg(p,.23,.27),seg(p,.23,.27)*(1-seg(p,.48,.52)),seg(p,.48,.52)*(1-seg(p,.73,.77)),seg(p,.73,.77)];
    E.C.forEach(function(c,k){op(c,b*w[k])});
    /* 1 set up: the line drawing fills in as the device */
    var fill=seg(p,.06,.2);op(E.body,b*fill);E.solid.forEach(function(s){s.style.opacity=(b*fill).toFixed(3)});
    E.dw.forEach(function(d){d.style.opacity=(1-.6*fill).toFixed(3)});
    op(E.lp,b*seg(p,.1,.18)*(1-seg(p,.26,.3)));
    /* 2 control: switch, screen, voice */
    var ct=seg(p,.28,.38);op(E.sw,b*ct);op(E.scr,b*ct);op(E.vo,b*seg(p,.32,.42)*(1-seg(p,.5,.56)));op(E.lc,b*seg(p,.34,.42)*(1-seg(p,.5,.54)));
    /* 3 scoop: the arm lowers into the plate and lifts a bite; 4: up to mouth level */
    op(E.food,b*seg(p,.48,.54));
    var dn=seg(p,.53,.61),rs=seg(p,.64,.69),up=seg(p,.77,.88);
    var a=17.4*dn*(1-rs)-40*up;
    E.arm.setAttribute("transform","rotate("+a.toFixed(2)+" "+NP.x+" "+NP.y+")");
    E.stem.setAttribute("transform","rotate("+(-a).toFixed(2)+" "+NE.x+" "+NE.y+")");
    op(E.bite,b*seg(p,.6,.63));
    op(E.ml,b*seg(p,.76,.82));
  };
}

/* The story scene (BL/BY/DB): ATN's own process chain "Von Klebepunkt bis Lötstelle" (atn-berlin.de: Dosieren, Bestücken,
   Löten), drawn as ONE side elevation of a circuit-board section kept on screen for all three steps:
   Step 1 (Dosieren): a dispenser sets solder paste on the two pads.
   Step 2 (Bestücken): the INOPLACER placement head brings an SMD chip down onto the paste and lifts away.
   Step 3 (Löten): the LightBeam head focuses short-wave infrared light (~1 µm, atn-berlin.de > Löten) on each joint in turn;
   the paste reflows into a solder fillet. Schematic, not to scale. */
var SCW=760,SCH=520;
function atnScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="atCg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffab2e" stop-opacity=".05"/><stop offset="1" stop-color="#ffbd5a" stop-opacity=".55"/></linearGradient>'+
     '<radialGradient id="atGl"><stop offset="0" stop-color="#ffd08a" stop-opacity=".95"/><stop offset=".4" stop-color="#ffab2e" stop-opacity=".45"/><stop offset="1" stop-color="#ffab2e" stop-opacity="0"/></radialGradient></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"BAUGRUPPE":"BAUGRUPPE, SCHEMATISCH")+'</text>';
  /* the board, its inner layer and the two copper pads */
  g+='<path class="bd sD" d="M40 400H720V432H40Z"/><path class="ly sD" d="M40 416H720"/>';
  g+='<path class="pad" d="M286 394H346V400H286Z"/><path class="pad" d="M414 394H474V400H414Z"/>';
  /* neighbouring parts already on the board (quiet line work): an SOIC with gull-wing legs, a radial capacitor */
  g+='<g class="dc"><path class="sD" d="M92 370H196V390H92Z"/>';
  for(i=0;i<6;i++){var lx=100+i*17;g+='<path class="sD" d="M'+lx+' 390V396H'+(lx+8)+'"/>'}
  g+='</g>';
  if(!mob)g+='<g class="dc"><path class="sD" d="M626 300V394M690 300V394M626 300C626 290 690 290 690 300M626 394H690"/><path class="sD" d="M640 394V400M676 394V400"/></g>';
  g+='<text class="t" x="40" y="462">LEITERPLATTE</text>';
  /* solder paste (step 1) and the solder fillets it reflows into (step 3) */
  g+='<path class="pst" id="pL" d="M290 394C292 382 340 382 342 394Z"/><path class="pst" id="pR" d="M418 394C420 382 468 382 470 394Z"/>';
  g+='<path class="fil" id="fL" d="M280 394Q299 393 300 364V384H330Q341 386 346 394Z"/><path class="fil" id="fR" d="M480 394Q461 393 460 364V384H430Q419 386 414 394Z"/>';
  /* the SMD chip (step 2 on) */
  g+='<g id="chip"><path class="chb" d="M300 358H460V384H300Z"/><path class="trm" d="M300 358H326V384H300Z"/><path class="trm" d="M434 358H460V384H434Z"/></g>';
  /* step 1: the dispenser (barrel, needle, a falling dot) */
  g+='<g id="disp"><path class="tool" d="M-22 70H22V196H-22Z"/><path class="tool" d="M-14 70V52H14V70"/><path class="tool" d="M-8 196L-3 232H3L8 196"/><circle class="drop" id="drop" cx="0" cy="246" r="4"/>'+
     '<text class="t" x="36" y="132">DISPENSER</text></g>';
  g+='<g id="hS1"><text class="t s1" x="'+(mob?486:492)+'" y="'+(mob?352:372)+'">LOTPASTE</text></g>';
  /* step 2: the placement head, its nozzle holding the chip */
  g+='<g id="head"><path class="tool" d="M350 150H410V230H350Z"/><path class="tool" d="M372 230H388V358H372Z"/><text class="t" x="424" y="196">INOPLACER</text></g>';
  g+='<g id="hS2"><text class="t s1" x="'+(mob?476:486)+'" y="'+(mob?340:350)+'">'+(mob?"SMD":"SMD-BAUTEIL")+'</text></g>';
  /* step 3: the LightBeam head, its focused light cone and the glow at the joint */
  g+='<g id="lbh"><path class="cone" id="cone" d="M-26 168H26L0 380Z"/><circle class="glow" id="glow" cx="0" cy="374" r="34"/>'+
     '<path class="tool" d="M-30 60H30V150H-30Z"/><path class="tool" d="M-30 150H30L22 168H-22Z"/><text class="t" x="44" y="104">LIGHTBEAM</text>'+(mob?'':'<text class="t s1" x="44" y="128">IR, CA. 1 µm</text>')+'</g>';
  g+='<g id="hS3"><text class="t s1" x="'+(mob?492:500)+'" y="'+(mob?352:372)+'">'+(mob?"LÖTSTELLE":"LÖTSTELLE")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · DOSIEREN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="500">2 · BESTÜCKEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="500">3 · LÖTEN</text></g>';
  return g+'</svg>';
}
function scene(){return atnScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return svg.querySelector(s)};
  var E={base:dl(".sD"),pads:$$(".pad",svg),texts:$$("text.t",svg).filter(function(t){return !t.closest("g[id]")}),
    disp:q("#disp"),drop:q("#drop"),head:q("#head"),chip:q("#chip"),lbh:q("#lbh"),cone:q("#cone"),glow:q("#glow"),
    pL:q("#pL"),pR:q("#pR"),fL:q("#fL"),fR:q("#fR"),s1:q("#hS1"),s2:q("#hS2"),s3:q("#hS3"),l1:q("#lb1"),l2:q("#lb2"),l3:q("#lb3")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,s){if(el)el.setAttribute("transform",s)}
  function lerp(a,b,t){return a+(b-a)*t}
  function grow(el,cx,v){tr(el,"translate(0 394) scale(1 "+Math.max(.001,v).toFixed(3)+") translate(0 -394)");op(el,v>0.01?1:0)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.pads.forEach(function(e){op(e,b)});E.texts.forEach(function(e){op(e,b)})}
    /* step 1: the dispenser comes in over the left pad, doses, moves right, doses, leaves */
    var dIn=seg(p,0,.05)*(1-seg(p,.3,.36)),dx=lerp(316,444,seg(p,.14,.2));
    op(E.disp,b*dIn);tr(E.disp,"translate("+dx.toFixed(1)+" 0)");
    var dr=(seg(p,.06,.13)>0&&seg(p,.06,.13)<1)?seg(p,.06,.13):((seg(p,.2,.27)>0&&seg(p,.2,.27)<1)?seg(p,.2,.27):0);
    op(E.drop,dr>0?b*(1-dr*.6):0);if(E.drop)E.drop.setAttribute("cy",(246+dr*130).toFixed(1));
    var fl=seg(p,.74,.8),fr=seg(p,.88,.94);
    grow(E.pL,316,b*seg(p,.08,.14)*(1-fl));grow(E.pR,444,b*seg(p,.22,.28)*(1-fr));
    op(E.s1,b*seg(p,.1,.15)*(1-seg(p,.3,.35)));
    /* step 2: head and chip descend together onto the paste; the head lifts away, the chip stays */
    var down=seg(p,.38,.52),up=seg(p,.54,.62);
    op(E.chip,b*seg(p,.36,.4));tr(E.chip,"translate(0 "+(-170*(1-down)).toFixed(1)+")");
    op(E.head,b*seg(p,.36,.4)*(1-seg(p,.6,.66)));tr(E.head,"translate(0 "+(-170*(1-down)-150*up).toFixed(1)+")");
    op(E.s2,b*seg(p,.52,.56)*(1-seg(p,.64,.68)));
    /* step 3: LightBeam over the left joint, light on, reflow; then the right joint */
    var lx=lerp(313,447,seg(p,.82,.88));
    op(E.lbh,b*seg(p,.68,.72));tr(E.lbh,"translate("+lx.toFixed(1)+" 0)");
    var on=b*(seg(p,.72,.75)*(1-seg(p,.8,.82))+seg(p,.86,.88));
    op(E.cone,on);op(E.glow,on*(.55+.45*Math.max(fl*(1-seg(p,.8,.82)),fr)));
    op(E.fL,b*fl);op(E.fR,b*fr);
    op(E.s3,b*seg(p,.78,.82));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.32,.37)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.64,.69)));op(E.l3,b*seg(p,.68,.74));
  };
}

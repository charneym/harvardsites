/* The story scene (BL/BY/DB): how a Dr. Müller biosensor analyser measures (dr-mueller-geraetebau.de, SUPER GL speedy and
   SUPER GL compact product pages), drawn as ONE fine-line schematic kept on screen for all four steps:
   Step 1 (Probe): an end-to-end capillary takes up 10 µl of capillary blood.
   Step 2 (Lösung): the capillary goes into a pre-filled sample cup with 500 µl haemolysing solution; the sample is diluted and haemolysed.
   Step 3 (Sensor): the enzymatic-amperometric biosensor (enzyme membrane on an electrode) turns the glucose into a current signal.
   Step 4 (Ergebnis): the plasma-referenced value on the display (IFCC), controls evaluated per RiLiBÄK. */
var SCW=760,SCH=520;
function circ(cx,cy,r){return "M"+(cx-r)+" "+cy+"a"+r+" "+r+" 0 1 0 "+(2*r)+" 0a"+r+" "+r+" 0 1 0 "+(-2*r)+" 0"}
function dmScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">BIOSENSOR-ANALYSER, SCHEMATISCH</text>';
  /* step 1: the capillary and its fill */
  g+='<g id="dmC"><path class="edge sD" d="M40 96H300V114H40Z"/><path class="fillr sF" d="M44 105H296"/></g>';
  /* step 2: the sample cup, its solution, the capillary inside, the flow to the sensor */
  g+='<g id="dmV"><path class="liq" d="M112 252V380Q112 418 160 418Q208 418 208 380V252Z"/><path class="liq2" id="dmH" d="M112 252V380Q112 418 160 418Q208 418 208 380V252Z"/>'+
     '<path class="edge sV" d="M110 190V380Q110 420 160 420Q210 420 210 380V190"/><path class="edge sV" d="M98 190H222"/>'+
     '<path class="cap sV" d="M146 206L170 340"/><path class="lvl" d="M112 252H208"/></g>';
  g+='<g id="dmFl"><path class="flow sL" d="M222 220H330C384 220 396 160 452 160"/></g>';
  /* step 3: the biosensor (electrode with enzyme membrane) and its current signal */
  g+='<g id="dmS"><path class="edge sS" d="'+circ(520,160,64)+'"/><path class="mem sS" d="'+circ(520,160,48)+'"/><path class="mem2 sS" d="'+circ(520,160,32)+'"/><path class="core" d="'+circ(520,160,12)+'"/></g>';
  g+='<g id="dmI"><path class="axis" d="M440 250V330H720"/><path class="cur sI" d="M440 326H496C536 326 544 264 600 264H720"/></g>';
  /* step 4: the display */
  g+='<g id="dmD"><path class="edge sR" d="M440 372H720V482H440Z"/><text class="dk" x="462" y="408">GLU-P</text><text class="dv" x="700" y="446" text-anchor="end">5.09</text><text class="dk" x="462" y="462">mmol/l</text></g>';
  /* labels, per step, >= 8px clear of every stroke (DR3) */
  g+='<g id="dmL1"><text class="t s2" x="40" y="80">'+(mob?'KAPILLARE':'END-TO-END-KAPILLARE')+'</text><text class="t" x="40" y="'+(mob?146:140)+'">'+(mob?'10 µl BLUT':'10 µl KAPILLARBLUT')+'</text></g>';
  g+='<g id="dmL2"><text class="t s2" x="236" y="'+(mob?304:300)+'">500 µl</text><text class="t" x="236" y="'+(mob?330:322)+'">'+(mob?'LÖSUNG':'HÄMOLYSIERLÖSUNG')+'</text></g>';
  g+='<g id="dmL3"><text class="t s2" x="604" y="'+(mob?146:150)+'">ENZYM</text><text class="t" x="604" y="'+(mob?174:172)+'">MEMBRAN</text><text class="t s1" x="452" y="238">'+(mob?'STROM':'STROMSIGNAL')+'</text></g>';
  g+='<g id="dmL4"><text class="t s2" x="250" y="446">'+(mob?'IFCC':'PLASMABEZOGEN · IFCC')+'</text><text class="t" x="250" y="'+(mob?474:468)+'">'+(mob?'RiLiBÄK':'KONTROLLEN · RiLiBÄK')+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · PROBE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · LÖSUNG</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · BIOSENSOR</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · ERGEBNIS</text></g>';
  return g+'</svg>';
}
function scene(){return dmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={C:$("#dmC",svg),cE:dl("#dmC .sD"),cF:dl(".sF"),V:$("#dmV",svg),vE:dl(".sV"),liq:$$("#dmV .liq,#dmV .lvl",svg),H:$("#dmH",svg),Fl:$("#dmFl",svg),fl:dl(".sL"),
    S:$("#dmS",svg),sE:dl(".sS"),core:$("#dmS .core",svg),I:$("#dmI",svg),cur:dl(".sI"),D:$("#dmD",svg),dE:dl(".sR"),dT:$$("#dmD text",svg),
    L1:$("#dmL1",svg),L2:$("#dmL2",svg),L3:$("#dmL3",svg),L4:$("#dmL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);
    /* step 1: the capillary draws, then fills */
    op(E.C,b);draw(E.cE,b*seg(p,0,.08));draw(E.cF,b*seg(p,.06,.19));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: the cup, the solution, the capillary inside; the solution turns as the sample is haemolysed */
    op(E.V,b);draw(E.vE,b*seg(p,.26,.36));E.liq.forEach(function(t){op(t,b*seg(p,.3,.36))});op(E.H,b*seg(p,.38,.46));
    op(E.Fl,b);draw(E.fl,b*seg(p,.42,.5));
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the sensor, then its current signal */
    op(E.S,b*seg(p,.48,.52));draw(E.sE,b*seg(p,.5,.58));op(E.core,b*seg(p,.56,.6));
    op(E.I,b*seg(p,.55,.58));draw(E.cur,b*seg(p,.58,.7));
    op(E.L3,b*seg(p,.55,.61)*(1-seg(p,.72,.75)));
    /* step 4: the result */
    op(E.D,b);draw(E.dE,b*seg(p,.76,.84));E.dT.forEach(function(t,i){op(t,b*seg(p,.8+i*.02,.84+i*.02))});
    op(E.L4,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

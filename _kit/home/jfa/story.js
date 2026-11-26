/* The story scene (BL/BY/DB): how a JFA Winkelnormal 90° (Rechteckform, three bores, as on jfa.de > Messmittel and their
   start-page banner) is made, from jfa.de > Unternehmensprofil, Lohnfertigung and Kalibrierdienst. ONE granite square
   standing on a surface plate stays on screen for all three steps:
   Step 1 (Bearbeiten): a grinding wheel passes over the top face and the three bores are cut (Bohr-, Fräs-, Schleifzentren).
   Step 2 (Läppen): an exaggerated flatness profile on the measuring face settles flat as a lap works it by hand.
   Step 3 (Kalibrieren): a probe runs down the measuring face against the 90° reference; the result is certified. */
var SCW=760,SCH=520;
function jfScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="jfBd" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3f5f7" stop-opacity=".16"/><stop offset=".5" stop-color="#f3f5f7" stop-opacity=".06"/><stop offset="1" stop-color="#f3f5f7" stop-opacity=".12"/></linearGradient>'+
    '<pattern id="jfSp" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".7" fill="#cfd6de" fill-opacity=".35"/><circle cx="6.5" cy="7" r=".5" fill="#cfd6de" fill-opacity=".25"/></pattern></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"WINKELNORMAL 90°":"WINKELNORMAL 90°, SCHEMATISCH")+'</text>';
  /* the surface plate */
  g+='<rect class="plate" x="110" y="440" width="540" height="30"/><path class="edge sD" d="M110 440H650"/>';
  /* the granite square: body with three bores */
  g+='<path class="body" d="M200 100H380V440H200Z M328 165A38 38 0 1 0 252 165A38 38 0 1 0 328 165Z M328 270A38 38 0 1 0 252 270A38 38 0 1 0 328 270Z M328 375A38 38 0 1 0 252 375A38 38 0 1 0 328 375Z" fill-rule="evenodd"/>';
  g+='<path class="edge sD" d="M200 100H380V440H200Z"/>';
  g+='<g id="jfHo"><circle class="hole" cx="290" cy="165" r="38"/><circle class="hole" cx="290" cy="270" r="38"/><circle class="hole" cx="290" cy="375" r="38"/></g>';
  /* step 1: the grinding wheel */
  g+='<g id="jfWh"><rect class="spin" x="-7" y="-32" width="14" height="22"/><circle class="whl" cx="0" cy="0" r="24"/><circle class="hub" cx="0" cy="0" r="5"/></g>';
  /* step 2: the flatness profile (exaggerated) and the hand lap */
  g+='<path id="jfPr" class="prof" d="M380 100V440"/>';
  g+='<g id="jfLp"><rect class="lap" x="384" y="-26" width="22" height="52"/></g>';
  /* step 3: the probe, the 90° reference, the pass mark */
  g+='<g id="jfPb"><path class="stem" d="M383 0H540"/><circle class="gau" cx="562" cy="0" r="22"/><path class="nd" d="M562 0L574 -10"/></g>';
  g+='<g id="jfAn"><path class="ang" d="M380 414H406V440"/><text class="t s1" x="414" y="432">90°</text></g>';
  g+='<path id="jfOk" class="ok" d="M44 326L58 340L84 312"/>';
  /* labels, per step (kept clear of the wheel, lap and probe paths) */
  g+='<g id="jfL1"><text class="t" x="40" y="250">HARTGESTEIN</text><text class="t s1" x="430" y="130">'+(mob?"FRÄSEN · SCHLEIFEN":"BOHREN · FRÄSEN · SCHLEIFEN")+'</text></g>';
  g+='<g id="jfL2"><text class="t s1" x="430" y="210">'+(mob?"VON HAND":"LÄPPEN VON HAND")+'</text><text class="t" x="430" y="300">'+(mob?"EBENHEIT":"EBENHEIT · GERADHEIT")+'</text></g>';
  g+='<g id="jfL3"><text class="t" x="20" y="230">DAkkS-LABOR</text><text class="t s1" x="20" y="290">'+(mob?"KALIBRIERT":"KALIBRIERSCHEIN")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · BEARBEITEN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · LÄPPEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · KALIBRIEREN</text></g>';
  return g+'</svg>';
}
function scene(){return jfScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),body:$(".body",svg),plate:$(".plate",svg),holes:dl("#jfHo .hole"),ho:$("#jfHo",svg),wh:$("#jfWh",svg),pr:$("#jfPr",svg),lp:$("#jfLp",svg),pb:$("#jfPb",svg),an:$("#jfAn",svg),
    ok:dl("#jfOk"),okEl:$("#jfOk",svg),L1:$("#jfL1",svg),L2:$("#jfL2",svg),L3:$("#jfL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function prof(a){var d="M380 100";for(var i=1;i<=34;i++){var y=100+i*10,x=380+a*(Math.sin(i*.55)*.7+Math.sin(i*1.7+1)*.3);d+="L"+x.toFixed(1)+" "+y}return d}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    op(E.body,b);op(E.plate,b);
    /* step 1: the wheel passes over the top face, the bores are cut */
    var w1=seg(p,.02,.3);
    op(E.wh,b*seg(p,0,.05)*(1-seg(p,.3,.36)));
    E.wh.setAttribute("transform","translate("+(232+116*w1).toFixed(1)+" 72)");
    op(E.ho,b);draw(E.holes,b*seg(p,.06,.28));
    op(E.L1,b*seg(p,.02,.1)*(1-seg(p,.3,.36)));
    /* step 2: the profile settles flat under the lap */
    var fl=seg(p,.42,.62);
    op(E.pr,b*seg(p,.36,.42)*(1-seg(p,.64,.7)));
    E.pr.setAttribute("d",prof(12*(1-fl)));
    op(E.lp,b*seg(p,.38,.44)*(1-seg(p,.62,.66)));
    var ly=270+140*Math.sin(seg(p,.38,.64)*Math.PI*3);
    E.lp.setAttribute("transform","translate(0 "+ly.toFixed(1)+")");
    op(E.L2,b*seg(p,.4,.48)*(1-seg(p,.64,.68)));
    /* step 3: the probe runs down the face against the 90° reference, then the pass mark */
    var pr=seg(p,.7,.88);
    op(E.pb,b*seg(p,.68,.72));
    E.pb.setAttribute("transform","translate(0 "+(130+240*pr).toFixed(1)+")");
    op(E.an,b*seg(p,.7,.76));
    op(E.okEl,b*seg(p,.86,.9));draw(E.ok,b*seg(p,.87,.94));
    op(E.L3,b*seg(p,.72,.8));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}

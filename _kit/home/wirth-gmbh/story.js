/* The story scene (BL/BY/DB/CK): "So hebt OKTOPUS®", ONE fine-line side elevation kept on screen for all four steps:
   a crane block and hook carry an OKTOPUS® vacuum lifter (orange frame, control box with manometer, vacuum reservoir, four
   suction pads) above a glass pane resting on two trestles. Facts from wirth-gmbh.com (Sicherheitsmerkmale, GLASS-Jack pages).
   Step 1 (Saugen): the lifter is lowered onto the pane, the pads seal and the manometer needle rises.
   Step 2 (Sichern): the two vacuum circuits (redundant 2-Kreis-System) and the reservoir light up.
   Step 3 (Heben): the hook lifts lifter and pane clear of the trestles; the pane hangs level under the hook (gravity, CK).
   Step 4 (Drehen): the frame and pane turn 360° about the vertical axis under the hook (foreshortened in elevation). */
var SCW=760,SCH=520,HX=300;
function wScene(o){
  var g='',mob=o.mob,i,P=[160,253,347,440];
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 40 520 460':'0 0 '+SCW+' '+SCH)+'" aria-hidden="true">';
  g+='<g transform="'+(mob?'translate(0 0)':'translate(-40 -8) scale(1.08)')+'">';
  /* floor and the two trestles, always on screen */
  g+='<path class="edge sD" d="M60 470H540"/>';
  g+='<path class="edge sD" d="M150 470L172 412H208L230 470"/><path class="edge sD" d="M370 470L392 412H428L450 470"/>';
  /* the crane rope (its length follows the hook) */
  g+='<path id="wCab" class="cable" d="M'+HX+' -40V180"/>';
  g+='<g id="wLift">';
  g+='<g id="wTurn">';
  /* the pane on the trestles */
  g+='<path id="wPane" class="pane" d="M108 402H492V410H108Z"/>';
  g+='<g id="wHF">';
  /* hoses: circuit 1 (orange) to the left pads, circuit 2 (blue) to the right pads */
  g+='<path id="wC1a" class="h1" d="M262 334C232 350 190 354 '+P[0]+' 374"/><path id="wC1b" class="h1" d="M268 338C266 352 258 362 '+P[1]+' 374"/>';
  g+='<path id="wC2a" class="h2" d="M338 334C368 350 410 354 '+P[3]+' 374"/><path id="wC2b" class="h2" d="M332 338C334 352 342 362 '+P[2]+' 374"/>';
  /* the frame beam, the pads on their stems */
  g+='<path class="frame" d="M120 338H480V348H120Z"/>';
  for(i=0;i<4;i++){var x=P[i];g+='<path class="stem" d="M'+x+' 348V374"/><path class="pad" d="M'+(x-30)+' 400Q'+(x-30)+' 382 '+(x-20)+' 376H'+(x+20)+'Q'+(x+30)+' 382 '+(x+30)+' 400Z"/>'}
  g+='<g id="wSeal">';for(i=0;i<4;i++){g+='<path class="seal" d="M'+(P[i]-27)+' 399H'+(P[i]+27)+'"/>'}g+='</g>';
  /* control box with manometer, the vacuum reservoir */
  g+='<path class="box" d="M256 298H344V338H256Z"/>';
  g+='<circle class="gauge" cx="282" cy="318" r="11"/><path id="wNd" class="needle" d="M282 318L282 309"/>';
  g+='<path class="box" d="M306 310H332M306 318H326M306 326H330"/>';
  g+='<path id="wRes" class="res" d="M360 320H436A9 9 0 0 1 436 338H360A9 9 0 0 1 360 320Z"/>';
  g+='</g></g>';
  /* the hanger: swivel, eye, hook, crane block (does not turn) */
  g+='<g id="wHT"><path class="box" d="M292 290H308V298H292Z"/><path class="stem" d="M'+HX+' 258V290"/><circle class="stem" cx="'+HX+'" cy="250" r="8"/>'+
     '<path class="hook" d="M'+HX+' 222V234C'+HX+' 250 318 252 316 238"/><path class="block" d="M282 180H318V222H282Z"/><circle class="stem" cx="'+HX+'" cy="196" r="9"/></g>';
  g+='</g></g>';
  /* labels, per step: desktop in the right column, phones in the top left; each >= 8px clear of every stroke (DR3) */
  var LX=mob?552:560,Y=mob?[92,120,148]:[226,252,278],AN=mob?' text-anchor="end"':'';
  function L(id,a,b,c,cls){return '<g id="'+id+'"><text class="t '+cls+'"'+AN+' x="'+LX+'" y="'+Y[0]+'">'+a+'</text><text class="t"'+AN+' x="'+LX+'" y="'+Y[1]+'">'+b+'</text>'+(c?'<text class="t"'+AN+' x="'+LX+'" y="'+Y[2]+'">'+c+'</text>':'')+'</g>'}
  g+=L('wL1','VAKUUM AUFGEBAUT',mob?'MANOMETER':'INTEGRIERTES MANOMETER',mob?'':'DRUCKSCHALTERGEREGELT','s1');
  g+=L('wL2','KREIS 1 · KREIS 2',mob?'REDUNDANT':'REDUNDANT, 2-FACH GESICHERT',mob?'':'VAKUUMRESERVOIR','s2');
  g+=L('wL3','BIS 9.000 KG',mob?'DIN EN 13155':'OKTOPUS® GL-M 9000',mob?'':'DIN EN 13155','s1');
  g+=L('wL4','DREHEN 360°',mob?'SCHWENKEN':'SCHWENKEN · KIPPEN',mob?'':'JE NACH GERÄT','s2');
  /* step captions */
  var CX=mob?52:20,CY=mob?72:30;
  g+='<g id="lb1"><text class="a" x="'+CX+'" y="'+CY+'">1 · SAUGEN</text></g>';
  g+='<g id="lb2"><text class="a" x="'+CX+'" y="'+CY+'">2 · SICHERN</text></g>';
  g+='<g id="lb3"><text class="a" x="'+CX+'" y="'+CY+'">3 · HEBEN</text></g>';
  g+='<g id="lb4"><text class="a" x="'+CX+'" y="'+CY+'">4 · DREHEN</text></g>';
  return g+'</svg>';
}
function scene(){return wScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),cab:$("#wCab",svg),lift:$("#wLift",svg),turn:$("#wTurn",svg),hf:$("#wHF",svg),ht:$("#wHT",svg),
    c1:dl("#wC1a,#wC1b"),c2:dl("#wC2a,#wC2b"),seal:$("#wSeal",svg),nd:$("#wNd",svg),res:$("#wRes",svg),
    L1:$("#wL1",svg),L2:$("#wL2",svg),L3:$("#wL3",svg),L4:$("#wL4",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    /* step 1: lower the lifter 40 units onto the pane, the pads seal, the needle swings up */
    var dn=-40*(1-seg(p,.03,.13)),up=-112*seg(p,.53,.66);
    var hang="translate(0 "+dn.toFixed(2)+")";
    E.hf.setAttribute("transform",hang);E.ht.setAttribute("transform",hang);
    E.lift.setAttribute("transform","translate(0 "+up.toFixed(2)+")");
    E.cab.setAttribute("d","M"+HX+" -40V"+(180+dn+up).toFixed(2));
    op(E.seal,b*seg(p,.13,.18));
    var na=-70+120*seg(p,.14,.22);E.nd.setAttribute("transform","rotate("+na.toFixed(1)+" 282 318)");
    op(E.L1,b*seg(p,.08,.14)*(1-seg(p,.22,.25)));
    /* step 2: the two circuits draw and stay; the reservoir fills */
    draw(E.c1,seg(p,.28,.37));draw(E.c2,seg(p,.31,.4));
    op(E.res,.35+.65*seg(p,.37,.43));E.res.classList.toggle("on",p>.4);
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: lifted clear of the trestles */
    op(E.L3,b*seg(p,.56,.62)*(1-seg(p,.72,.75)));
    /* step 4: one full turn about the vertical axis under the hook */
    var th=Math.PI*2*seg(p,.78,.96),sx=Math.cos(th);if(Math.abs(sx)<.04)sx=sx<0?-.04:.04;
    E.turn.setAttribute("transform","translate("+HX+" 0) scale("+sx.toFixed(3)+" 1) translate(-"+HX+" 0)");
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

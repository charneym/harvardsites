/* The story scene (DB/BL): Rarefied's own metaphor (rarefiedbio.com: "Every autoimmune drug today fights the avalanche at
   the bottom of the mountain. We're stopping it at the top."), drawn as ONE continuous fine-line scene that fills the frame:
   their mountain range in engraved line, with the immune signal's CARD11-BCL10-MALT1 complex at the summit (NIH RePORTER
   1R43AI189037: MALT1 is the protease that works in complex with CARD11).
   Frame 0 is already complete. Step 1 (source): the activating signal draws in and the three proteins light up.
   Step 2 (avalanche): the signal pours down the slopes as a growing slide of particles; the drug classes that act at the
   bottom (cytokine blockers, JAK inhibitors, B-cell depletion, from the company's site) are marked along the base.
   Step 3 (re-tune): the inhibitor docks at MALT1, the slide thins out and stops. Everything is driven by the scrubbed
   progress. */
var SCW=760,SCH=560;
var SX=380,SY=118;                                     /* the summit */
var RIDGE="M20 470L118 392L150 404L236 300L262 316L326 200L346 214L"+SX+" "+SY+"L420 186L448 172L476 204L540 276L566 266L640 360L668 352L740 470";
var SHADE=["M"+SX+" "+SY+"L364 196L372 250L352 320","M326 200L318 262L296 330","M236 300L240 352L222 410","M448 172L452 236L470 290","M"+SX+" "+SY+"L404 208L430 262L436 330","M566 266L572 318L596 380","M640 360L642 404"];
var CBM=[[SX-32,SY-26,"CARD11"],[SX,SY-26,"BCL10"],[SX+32,SY-26,"MALT1"]];
/* the slide: paths from just under the summit to the foot of the range */
var SLIDE=[
 "M"+SX+" "+(SY+14)+"C352 190 300 250 270 330S170 420 96 452",
 "M"+SX+" "+(SY+14)+"C366 200 330 280 300 350S236 430 206 452",
 "M"+SX+" "+(SY+14)+"C378 210 372 300 360 360S350 430 340 452",
 "M"+SX+" "+(SY+14)+"C394 200 420 280 452 340S500 420 512 452",
 "M"+SX+" "+(SY+14)+"C400 190 470 240 540 310S640 420 672 452"];
var NP=9;
function storyScene(o){
  var g='',i,mob=o.mob;
  var T=function(cls,x,y,txt,anchor,keep){return (mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="rfg"><stop offset="0" stop-color="#c7dbf9" stop-opacity=".5"/><stop offset="1" stop-color="#c7dbf9" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+RIDGE+'"/>';
  SHADE.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="en sD" d="M20 470H740"/>';
  g+='</g>';
  /* the slide paths and their particles */
  g+='<g id="scSlide">';
  SLIDE.forEach(function(d,j){g+='<path class="sl" data-j="'+j+'" d="'+d+'"/>'});
  g+='</g><g id="scPart">';
  SLIDE.forEach(function(d,j){for(i=0;i<NP;i++)g+='<circle class="pt" data-j="'+j+'" data-i="'+i+'" r="2"/>'});
  g+='</g>';
  /* the activating signal, arriving from the left of the summit */
  g+='<path id="sig" class="sg" d="M'+(mob?150:130)+' '+(SY-26)+'H'+(SX-48)+'"/><path id="sigh" class="sg" d="M'+(SX-55)+' '+(SY-32)+'l7 6-7 6"/>';
  g+='<g id="sigl">'+T('t',mob?150:130,mob?SY-2:SY-8,mob?'SIGNAL':'ACTIVATING SIGNAL','start',1)+'</g>';
  /* the CBM complex at the summit */
  g+='<circle class="halo" id="cbmH" cx="'+SX+'" cy="'+(SY-26)+'" r="'+(mob?40:52)+'" fill="url(#rfg)"/>';
  CBM.forEach(function(c,k){g+='<circle class="cb" id="cb'+k+'" cx="'+c[0]+'" cy="'+c[1]+'" r="12"/>'});
  g+='<g class="cbl">'+T('t',SX,mob?SY-70:SY-58,'CARD11 · BCL10 · MALT1','middle',1)+'</g>';
  /* the inhibitor, docking beside MALT1 */
  g+='<g id="inh"><path class="ih" d="M0 -9L8 -4.5V4.5L0 9L-8 4.5V-4.5Z"/></g>';
  g+='<g id="inhl">'+T('t',SX+76,SY-22,'INHIBITOR','start')+'</g>';
  /* the base: where today's drugs act */
  g+='<g id="base"><path class="br" d="M60 488V496H700V488"/>'+
     T('t',150,518,mob?'CYTOKINES':'CYTOKINE BLOCKERS','middle',1)+T('t',380,518,mob?'JAK':'JAK INHIBITORS','middle',1)+T('t',610,518,mob?'B CELLS':'B-CELL DEPLETION','middle',1)+'</g>';
  var ly=SCH-6;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(mob?'ONE COMPLEX AT THE TOP':'THE SIGNAL RUNS THROUGH ONE COMPLEX AT THE TOP')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(mob?'TODAY&#8217;S DRUGS ACT DOWNHILL':'TODAY&#8217;S DRUGS ACT AT THE BOTTOM OF THE SLOPE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(mob?'STOPPED AT THE SOURCE':'STOPPED AT THE SOURCE · DEFENCES INTACT')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),slide:dl("#scSlide .sl"),sig:dl("#sig, #sigh"),fade:$$(".cbl, #sigl",svg),
    parts:$$("#scPart .pt",svg),cb:$$(".cb",svg),cbH:$("#cbmH",svg),inh:$("#inh",svg),inhl:$("#inhl",svg),basel:$("#base",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var paths=$$("#scSlide .sl",svg),LEN=paths.map(function(p){return p.getTotalLength()});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){op(el,b)})}
    var src=seg(p,.04,.3),av=seg(p,.36,.64),st=seg(p,.68,.94);
    /* 1. the signal draws in and the complex lights (frame 0 already shows it lit) */
    var s1=p<.04?1:src;draw(E.sig,b*s1);
    E.cb.forEach(function(el,k){var t=Math.min(1,Math.max(0,s1*1.6-k*.25));el.style.fillOpacity=(.15+.75*t*(1-.45*st)).toFixed(3)});
    op(E.cbH,b*(.25+.75*s1)*(1-.6*st));
    /* 2. the slide pours down the slopes, growing as it goes; 3. it thins out and stops */
    var run=av*(1-st);
    draw(E.slide.map(function(a){return a}),0);
    E.slide.forEach(function(a,j){var v=Math.min(1,Math.max(0,av*1.25-j*.05));a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1);op(a[0],b*(1-.75*st))});
    E.parts.forEach(function(el){var j=+el.getAttribute("data-j"),i=+el.getAttribute("data-i");
      var reach=Math.min(1,Math.max(0,av*1.25-j*.05));
      var s=((i+.5)/NP)*reach;s=Math.min(.995,s+ (1-reach)*0);var pt=paths[j].getPointAtLength(LEN[j]*s);
      el.setAttribute("cx",pt.x.toFixed(1));el.setAttribute("cy",pt.y.toFixed(1));el.setAttribute("r",(1.6+4.2*s).toFixed(1));
      op(el,b*(reach>0?Math.min(1,reach*3):0)*(1-st))});
    op(E.basel,b*(.35+.65*seg(p,.4,.5))*(1-.5*st));
    /* 3. the inhibitor comes in from the upper right and docks beside MALT1 */
    var d=p<.68?0:st,ix=SX+56+(1-d)*170,iy=SY-26-(1-d)*70;
    if(E.inh){E.inh.setAttribute("transform","translate("+ix.toFixed(1)+" "+iy.toFixed(1)+")");op(E.inh,b*Math.min(1,d*2))}
    op(E.inhl,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

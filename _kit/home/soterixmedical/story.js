/* The story scene (DB/BL): Soterix Medical's own High-Definition tDCS method (soterixmedical.com, About: HD-tDCS "is made
   possible through innovations in electrode design allowing safe and tolerated passage of current through proprietary
   'High-Definition' electrodes, individualized brain current-flow modeling and through patented targeting algorithms
   indicating how to place and energize HD-electrodes on the head"), drawn as ONE fine-line scene that fills the frame:
   a head seen from above (nose up, ears at the sides) with the folded cortex and the midline. Frame 0 is already complete.
   Step 1 (model): the head's layers (skull, fluid, brain) trace in, as in an individualized current-flow model.
   Step 2 (target): a target is set over the left frontal cortex and five HD electrodes take their places, a 4x1 ring.
   Step 3 (stimulate): current flows from the centre electrode to the four around it and gathers at the target.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560,HX=380,HY=286;
function egg(rx,ry){/* a head outline seen from above: narrower at the front (top) */
  var d="",n=96,i,a,x,y;for(i=0;i<=n;i++){a=i/n*Math.PI*2;var s=Math.sin(a),c=Math.cos(a);
    var w=rx*(1-.09*c);x=HX+w*s;y=HY-ry*c;d+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return d+"Z"}
function gyri(){/* cortical folds, one hemisphere at a time: wavy arcs that follow the brain's outline */
  var out=[],side,j,i,n=150;
  for(side=-1;side<=1;side+=2)for(j=0;j<4;j++){var sc=.86-j*.19,d="",ph=j*1.7+(side>0?.9:0);
    for(i=0;i<=n;i++){var t=i/n,a=-Math.PI*.5+t*Math.PI,c=Math.sin(a),s=Math.cos(a);
      var r=1+.07*Math.sin(t*Math.PI*(14-j*2)+ph)*(1-.4*j/3);
      var x=HX+side*(10+(120*sc)*s*r*(1-.06*c)),y=HY+(168*sc)*c*r;
      d+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}out.push(d)}
  return out}
var MID="M380 112C378 150 383 200 379 250C376 300 383 350 379 400C377 430 381 450 380 462";
var NOSE="M362 84C368 60 392 60 398 84";
var EARL="M218 252C200 250 194 276 198 296C202 316 212 324 222 320";
var EARR="M542 252C560 250 566 276 562 296C558 316 548 324 538 320";
/* the target (left frontal cortex) and the 4x1 ring around it */
var TX=318,TY=196,RR=56;
var RING=[[TX,TY-RR],[TX+RR,TY],[TX,TY+RR],[TX-RR,TY]];
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'176 46 408 494':'100 44 592 518')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gfoc"><stop offset="0" stop-color="#59b8e0" stop-opacity=".62"/><stop offset=".55" stop-color="#59b8e0" stop-opacity=".18"/><stop offset="1" stop-color="#59b8e0" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+egg(170,212)+'"/>';
  g+='<path class="wl sD" d="'+NOSE+'"/><path class="wo sD" d="'+EARL+'"/><path class="wo sD" d="'+EARR+'"/>';
  gyri().forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  g+='<path class="wmd sD" d="'+MID+'"/>';
  g+='</g>';
  /* step 1: the model's layers */
  g+='<g id="scLay"><path class="ly" d="'+egg(160,201)+'"/><path class="ly" d="'+egg(151,191)+'"/><path class="ly b" d="'+egg(143,182)+'"/></g>';
  /* step 3 (under the electrodes): the focus, and current paths centre > ring */
  g+='<circle class="halo" id="hFoc" cx="'+TX+'" cy="'+TY+'" r="64" fill="url(#gfoc)"/>';
  g+='<g id="scFlow">';RING.forEach(function(p){var mx=(TX+p[0])/2,my=(TY+p[1])/2,nx=-(p[1]-TY)/RR,ny=(p[0]-TX)/RR;
    [-1,1].forEach(function(sd){var cx=mx+nx*sd*18,cy=my+ny*sd*18;g+='<path class="fl" d="M'+TX+' '+TY+'Q'+cx.toFixed(1)+' '+cy.toFixed(1)+' '+p[0]+' '+p[1]+'"/>'})});g+='</g>';
  /* step 2: the target and the five electrodes */
  g+='<g id="scTgt"><circle class="tg" cx="'+TX+'" cy="'+TY+'" r="24"/><path class="tg" d="M'+(TX-34)+' '+TY+'h14M'+(TX+20)+' '+TY+'h14M'+TX+' '+(TY-34)+'v14M'+TX+' '+(TY+20)+'v14"/></g>';
  g+='<g id="scEl">';
  g+='<g class="el c"><circle cx="'+TX+'" cy="'+TY+'" r="10"/><circle class="in" cx="'+TX+'" cy="'+TY+'" r="3.6"/></g>';
  RING.forEach(function(p){g+='<g class="el"><circle cx="'+p[0]+'" cy="'+p[1]+'" r="9"/><circle class="in" cx="'+p[0]+'" cy="'+p[1]+'" r="3"/></g>'});
  g+='</g>';
  /* labels, each with a leader that stops short of its text (DR) */
  if(!mob){
    g+='<g id="lLay"><path class="ld" d="M540 408L590 440"/><text class="t" x="600" y="446">SCALP</text><text class="t" x="600" y="462">SKULL · FLUID</text><text class="t" x="600" y="478">BRAIN</text></g>';
    g+='<g id="lTgt"><path class="ld" d="M292 180L168 140"/><text class="t" x="158" y="134" text-anchor="end">TARGET</text><text class="t q" x="158" y="150" text-anchor="end">LEFT FRONTAL</text></g>';
    g+='<g id="lEl"><path class="ld" d="M390 196L590 196"/><text class="t" x="600" y="192">HD ELECTRODES</text><text class="t q" x="600" y="208">4×1 RING</text></g>';
    g+='<g id="lFl"><path class="ld" d="M288 228L168 326"/><text class="t" x="158" y="330" text-anchor="end">CURRENT</text><text class="t q" x="158" y="346" text-anchor="end">FOCUSED HERE</text></g>';
  }else{g+='<g id="lLay"></g><g id="lTgt"></g><g id="lEl"></g><g id="lFl"></g>'}
  var ly=mob?532:SCH-4,lx=mob?380:52,ta=mob?' text-anchor="middle"':'';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'"'+ta+'>'+(mob?'A MODEL OF EACH HEAD':'AN INDIVIDUAL MODEL OF HOW CURRENT FLOWS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'"'+ta+'>'+(mob?'FIVE HD ELECTRODES PLACED':'TARGETING SETS FIVE HD ELECTRODES')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'"'+ta+'>'+(mob?'CURRENT REACHES THE TARGET':'CURRENT REACHES THE TARGET REGION')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),lay:dl("#scLay .ly"),flow:dl("#scFlow .fl"),tgt:$("#scTgt",svg),els:$$("#scEl .el",svg),hF:$("#hFoc",svg),
    lLay:$("#lLay",svg),lTgt:$("#lTgt",svg),lEl:$("#lEl",svg),lFl:$("#lFl",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s3=seg(p,.68,.9);
    /* 1. the model's layers trace in; they stay as the model under the later steps */
    draw(E.lay,b*s1);op(E.lLay,b*seg(p,.18,.28)*(1-seg(p,.34,.4)));
    /* 2. the target is set, then the centre electrode and the ring of four drop into place */
    op(E.tgt,b*seg(p,.36,.44));op(E.lTgt,b*seg(p,.38,.46)*(1-seg(p,.64,.7)));
    E.els.forEach(function(el,i){var f=seg(p,.44+i*.03,.52+i*.03);op(el,b*f);el.style.transform="translateY("+((1-f)*-14).toFixed(2)+"px)"});
    op(E.lEl,b*seg(p,.56,.64));
    /* 3. current flows centre > ring; the focus glows at the target */
    draw(E.flow,b*s3);op(E.hF,b*s3);op(E.lFl,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}

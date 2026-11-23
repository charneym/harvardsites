/* The story scene (DB/BL/BY): the ThermoSuit System as ONE continuous fine-line side elevation that fills the frame
   (life-recovery.com, Products and FAQ; PR Newswire release, 2 Mar 2026): a patient lying in the ThermoSuit on a
   conventional gurney, the TSP50 pump on casters beside it, a core-temperature readout and the cooling curve.
   Frame 0 is already a complete picture.
   Step 1 (suit): the patient in the suit on the gurney, the pump connected.
   Step 2 (flow): cold water runs from the pump over the patient and back, cycled continuously; the suit fills.
   Step 3 (target): core temperature falls from 37 to 33 degrees C; the curve draws to its end point; the body cools.
   Step 4 (off): at about 33 degrees C the water is drawn off; the patient is held at target.
   Labels sit in open space with leaders that stop 8px short of the text (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var BODY="M132 312C122 304 122 284 134 276C142 268 156 264 164 266L172 262C176 266 176 270 174 272C178 276 178 282 174 286C182 290 190 290 198 284C214 272 250 264 292 266C330 268 352 276 384 280C420 284 446 278 474 274C496 272 512 282 530 288C540 284 544 270 552 266C558 270 558 290 556 306L556 312Z";
var TUBO="M100 322V306C100 298 106 294 116 294H568C578 294 584 298 584 306V322";
var TUBI="M108 322V311C108 305 112 302 120 302H564C571 302 576 305 576 311V322Z";
var SHEET="M578 298C520 262 460 266 380 260C260 250 160 256 108 300";
var SUP="M632 300C614 300 600 298 580 299";
var RET="M584 316C606 320 612 404 632 404";
var CURVE="M74 60C134 70 190 120 246 148C272 160 296 162 316 160L360 160";
var NFL=16,NHO=5;
function storyScene(o){
  var g='',i,mob=o.mob,rx=mob?400:440;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="tubc"><path d="'+TUBI+'"/></clipPath></defs>';
  /* water inside the suit, under everything else */
  g+='<g clip-path="url(#tubc)"><rect id="wat" class="wat" x="100" y="322" width="480" height="40"/><path id="wln" class="wln" d="M100 322H580"/></g>';
  g+='<path class="bodyf" id="bodyf" d="'+BODY+'"/>';
  g+='<g id="scBase">';
  /* gurney */
  g+='<path class="wl sD" d="M88 322H596"/><path class="wmd sD" d="M100 340H584"/>';
  g+='<path class="wo sD" d="M160 340V448M524 340V448M130 448H554M160 424H524"/>';
  g+='<path class="wmd sD" d="M150 462A10 10 0 1 1 150 461.9M554 462A10 10 0 1 1 554 461.9"/>';
  /* the suit: inflated rim, lining, the patient, the top sheet */
  g+='<path class="wl sD" d="'+TUBO+'"/><path class="wo sD" d="'+TUBI+'"/>';
  g+='<path class="wmd sD" d="'+BODY+'"/>';
  g+='<path class="sht sD" d="'+SHEET+'"/>';
  /* the TSP50 pump on casters, its hoses */
  g+='<path class="wl sD" d="M632 250H716V452H632Z"/><path class="wo sD" d="M640 250V238H708V250M632 344H716"/>';
  g+='<path class="wmd sD" d="M644 264H704V304H644Z"/>';
  g+='<path class="wmd sD" d="M650 474A9 9 0 1 1 650 473.9M716 474A9 9 0 1 1 716 473.9M650 452V465M698 452V465"/>';
  g+='<path class="wmd sD" d="'+SUP+'"/><path class="wmd sD" d="'+RET+'"/>';
  /* chart axes */
  g+='<path class="wo sD" d="M74 48V180H372"/><path class="grd sD" d="M74 160H372M74 60H372"/>';
  g+='</g>';
  g+='<rect class="scr" id="scr" x="645" y="265" width="58" height="38"/>';
  g+='<path class="cv" id="cv" d="'+CURVE+'"/><circle class="cvd" id="cvd" r="4.5" cx="74" cy="60"/>';
  /* flow: along the supply hose, over the patient under the top sheet, back through the return hose */
  g+='<path id="pS" class="gd" d="'+SUP+'"/><path id="pB" class="gd" d="'+SHEET+'"/><path id="pR" class="gd" d="'+RET+'"/>';
  g+='<g id="fl">';for(i=0;i<NFL;i++)g+='<circle class="fd" r="2.6" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="fh">';for(i=0;i<NHO*2;i++)g+='<circle class="fd" r="2.4" cx="0" cy="0"/>';g+='</g>';
  /* readout and labels */
  g+='<text class="t" x="'+rx+'" y="62">CORE TEMPERATURE</text>';
  g+='<text class="rv" id="rv" x="'+rx+'" y="'+(mob?130:122)+'">37.0°C</text>';
  g+='<text class="t" x="'+(mob?16:30)+'" y="'+(mob?66:64)+'">37°</text><text class="t" x="'+(mob?16:30)+'" y="'+(mob?166:164)+'">33°</text>';
  if(!mob){
    g+='<text class="t" x="70" y="200">0 MIN</text><text class="t" x="318" y="200">40 MIN</text>';
    g+='<g id="lSu"><path class="ld" d="M236 238L248 254"/><text class="t" x="168" y="228">THERMOSUIT</text></g>';
    g+='<g id="lWa"><path class="ld" d="M236 238L248 254"/><text class="t a2" x="150" y="228">WATER ON SKIN</text></g>';
    g+='<g id="lPu"><text class="t" x="630" y="224">TSP50 PUMP</text></g>';
    g+='<g id="lGu"><text class="t" x="254" y="398">CONVENTIONAL GURNEY</text></g>';
  }else{
    g+='<g id="lSu"><text class="t" x="150" y="236">THERMOSUIT</text></g>';
    g+='<g id="lWa"><text class="t a2" x="150" y="236">WATER ON SKIN</text></g>';
    g+='<g id="lPu"><text class="t" x="626" y="222">PUMP</text></g><g id="lGu"></g>';
  }
  var ly=SCH-6,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IN THE SUIT, ON A GURNEY':'IN THE THERMOSUIT · ON A CONVENTIONAL GURNEY')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'COLD WATER, CYCLED':'COLD WATER OVER THE SKIN · CYCLED BY THE PUMP')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'37 → 33°C':'CORE TEMPERATURE 37 → 33°C · ABOUT 30–40 MINUTES')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'DRAINED · HELD AT TARGET':'WATER DRAWN OFF · HELD AT TARGET')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fl:$$("#fl .fd",svg),fh:$$("#fh .fd",svg),wat:$("#wat",svg),wln:$("#wln",svg),bodyf:$("#bodyf",svg),
    cvd:$("#cvd",svg),rv:$("#rv",svg),scr:$("#scr",svg),
    lSu:$("#lSu",svg),lWa:$("#lWa",svg),lPu:$("#lPu",svg),lGu:$("#lGu",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var cv=$("#cv",svg),CL=cv.getTotalLength();cv.style.strokeDasharray=CL+" "+CL;
  var pS=$("#pS",svg),pB=$("#pB",svg),pR=$("#pR",svg),LS=pS.getTotalLength(),LB=pB.getTotalLength(),LR=pR.getTotalLength();
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function mix(a,c,k){return a.map(function(x,i){return x+(c[i]-x)*k})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s2=seg(p,.27,.4),s3=seg(p,.5,.72),s4=seg(p,.78,.92);
    /* 2. the suit fills and water flows; 4. it is drawn off */
    var lvl=s2*(1-s4),fy=322-17*lvl;
    E.wat.setAttribute("y",fy.toFixed(1));op(E.wat,b*Math.min(1,lvl*3));E.wln.setAttribute("d","M100 "+fy.toFixed(1)+"H580");op(E.wln,b*Math.min(1,lvl*3));
    var on=seg(p,.25,.32)*(1-seg(p,.76,.84));
    E.fl.forEach(function(el,i){var f=((i/NFL)+p*5)%1,q=pB.getPointAtLength(LB*f);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*on*Math.min(1,f*10)*Math.min(1,(1-f)*10))});
    E.fh.forEach(function(el,i){var sup=i<NHO,k=sup?i:i-NHO,f=((k/NHO)+p*8)%1,P=sup?pS:pR,L=sup?LS:LR,q=P.getPointAtLength(L*f);
      el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*on*Math.min(1,f*6)*Math.min(1,(1-f)*6))});
    op(E.scr,b*.9*seg(p,.24,.3));
    /* 3. core temperature falls; the curve draws to its end point and the marker rides it */
    cv.style.strokeDashoffset=(CL*(1-s3)).toFixed(1);op(cv,b);
    var q=cv.getPointAtLength(CL*s3);E.cvd.setAttribute("cx",q.x.toFixed(1));E.cvd.setAttribute("cy",q.y.toFixed(1));op(E.cvd,b*seg(p,.46,.52));
    var T=37-4*Math.max(0,Math.min(1,(q.y-60)/100));E.rv.textContent=T.toFixed(1)+"°C";op(E.rv,b);
    var c=mix([227,96,84],[98,182,236],s3);E.bodyf.style.fill="rgba("+c.map(Math.round).join(",")+",.2)";op(E.bodyf,b);
    op(E.lSu,b*(1-seg(p,.26,.3)));op(E.lWa,b*seg(p,.3,.36)*(1-seg(p,.76,.82)));op(E.lPu,b);op(E.lGu,b);
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}

/* The story scene (DB/BL): Stasys Medical's own method (stasysmedical.com/how-it-works: "Simply attach a whole blood sample
   syringe to the sensor card, then insert the card into the machine"; "the system reproduces in vivo shear activation
   conditions within seconds"; "As the sample moves through the card, microclots form and the force of the bond is measured";
   "An individual sensor at the micron scale within the card, and the shear gradients that it creates on passing streamlines
   of blood"; Ting et al., Nat Commun 2019: a microfluidic block and micropost), drawn as ONE fine-line scene that fills the
   frame: the single-use card with its syringe on the left, and a magnified view of the sensor in the channel on the right.
   Step 1 (load): the plunger moves and the sample runs through the card to the sensor window.
   Step 2 (shear): streamlines bend around the sensor block, platelets flow and a microclot builds behind it.
   Step 3 (measure): the clot contracts and pulls the post, the force arrow and the force trace draw in.
   Everything is driven by the scrubbed progress. Frame 0 is already complete. */
var SCW=760,SCH=560;
var CARD="M70 132H178V470H70Z M62 132H186";
var WIN="M96 236H156V296H96Z";
var SYR="M190 96H214V418H190Z M184 96H220 M196 418V438H208V418";
var PLG="M202 34V96 M188 34H216";
var CHAN="M202 438V452H126V296";
var WALL="M300 130H730 M300 410H730";
var BLOCK="M455 228H505V312H455Z";
var MAG="M156 236L300 130 M156 296L300 410";
var PX=566,PY=270;
function stream(y0){var d="",k=(y0<270?-1:1),f=1-Math.abs(y0-270)/150,x;for(x=300;x<=730;x+=10){var y=y0+k*60*f*Math.exp(-Math.pow((x-480)/48,2));d+=(x===300?"M":"L")+x+" "+y.toFixed(1)}return d}
var SY=[150,180,210,240,300,330,360,390];
var CLOT=[[520,262,7],[528,276,8],[519,284,6],[536,262,6],[540,280,7],[531,292,5],[548,270,6],[526,250,5],[545,292,5],[552,282,5]];
var TRACE="M300 520C360 519 390 516 420 500C450 482 470 470 500 466C540 462 640 461 730 461";
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 24 700 516':'28 20 716 540')+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+CARD+'"/><path class="wl sD" d="'+WIN+'"/><path class="wl sD" d="'+SYR+'"/>';
  g+='<path class="wo sD" d="'+CHAN+'"/>';
  g+='<path class="wl sD" d="'+WALL+'"/><path class="wl sD" d="'+BLOCK+'"/>';
  g+='</g>';
  g+='<path class="mg" d="'+MAG+'"/>';
  g+='<path class="wl" id="plg" d="'+PLG+'"/>';
  g+='<path class="fl" id="fill" d="'+CHAN+'"/><path class="wfill" id="wfill" d="'+WIN+'"/>';
  g+='<g id="scStream">';SY.forEach(function(y){g+='<path class="sm" d="'+stream(y)+'"/>'});g+='</g>';
  g+='<g id="scDots">';for(i=0;i<16;i++)g+='<circle class="pd" r="2.6" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="scClot">';CLOT.forEach(function(c){g+='<circle class="ck" cx="'+c[0]+'" cy="'+c[1]+'" r="'+c[2]+'"/>'});g+='</g>';
  g+='<g id="post"><circle class="pst" cx="'+PX+'" cy="'+PY+'" r="9"/></g>';
  g+='<g id="farrow"><path class="fa" d="M600 270H632"/><path class="fa" d="M607 263L600 270L607 277"/></g>';
  g+='<path class="ax" d="M300 528H730"/><path class="tr" id="trace" d="'+TRACE+'"/>';
  if(!mob){
    g+='<g id="lCard"><text class="t" x="70" y="496">SINGLE-USE SENSOR CARD</text></g>';
    g+='<g id="lSyr"><text class="t" x="232" y="46">WHOLE BLOOD</text><text class="t" x="232" y="62">SAMPLE SYRINGE</text></g>';
    g+='<g id="lShear"><text class="t" x="300" y="114">SHEAR GRADIENTS AROUND THE SENSOR</text></g>';
    g+='<g id="lClot"><text class="t" x="455" y="434">MICROCLOT FORMS ON THE SENSOR</text></g>';
    g+='<g id="lPull"><text class="t" x="455" y="434">THE CLOT PULLS THE POST: FORCE</text></g>';
  }else{g+='<g id="lCard"></g><g id="lSyr"></g><g id="lShear"></g><g id="lClot"></g><g id="lPull"></g>'}
  var ly=SCH-8,lx=mob?56:70;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LOAD THE CARD':'ATTACH THE SYRINGE, LOAD THE CARD')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SHEAR BUILDS A MICROCLOT':'SHEAR ACTIVATES PLATELETS, A MICROCLOT FORMS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'FORCE IN UNDER 3 MINUTES':'PLATELET FORCE, IN UNDER 3 MINUTES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fill:dl("#fill")[0],trace:dl("#trace")[0],sms:$$("#scStream .sm",svg),dots:$$("#scDots .pd",svg),clot:$$("#scClot .ck",svg),
    clotG:$("#scClot",svg),plg:$("#plg",svg),wfill:$("#wfill",svg),post:$("#post",svg),fa:$("#farrow",svg),mg:$(".mg",svg),ax:$(".ax",svg),
    lCard:$("#lCard",svg),lSyr:$("#lSyr",svg),lShear:$("#lShear",svg),lClot:$("#lClot",svg),lPull:$("#lPull",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var SL=E.sms.map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){if(a)a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    op(E.mg,b);
    /* 1. the plunger travels down and the sample runs through the card into the sensor window */
    var s1=seg(p,.04,.3);
    if(E.plg)E.plg.setAttribute("transform","translate(0 "+(40*s1).toFixed(1)+")");
    draw([E.fill],b*seg(p,.08,.28));op(E.wfill,b*seg(p,.24,.32));
    op(E.lCard,b*seg(p,.04,.12)*(1-seg(p,.34,.4)));op(E.lSyr,b*seg(p,.06,.14)*(1-seg(p,.34,.4)));
    /* 2. streamlines draw around the sensor, platelets flow along them, the microclot builds behind the block */
    SL.forEach(function(a,i){a[0].style.strokeDashoffset=(a[1]*(1-b*seg(p,.3+i*.008,.44+i*.008))).toFixed(1)});
    var flow=seg(p,.36,1);
    E.dots.forEach(function(d,i){var a=SL[i%SL.length],u=((i*.137+flow*2.2)%1),pt=a[0].getPointAtLength(u*a[1]);
      d.setAttribute("cx",pt.x.toFixed(1));d.setAttribute("cy",pt.y.toFixed(1));op(d,b*seg(p,.38,.46)*Math.min(1,Math.sin(u*Math.PI)*3))});
    E.clot.forEach(function(c,i){op(c,b*seg(p,.42+i*.018,.5+i*.018))});
    op(E.lShear,b*seg(p,.36,.44));op(E.lClot,b*seg(p,.46,.54)*(1-seg(p,.64,.7)));
    /* 3. the clot contracts and pulls the post towards the block; the force arrow and the trace draw in */
    var s3=sm(seg(p,.66,.86));
    if(E.post)E.post.setAttribute("transform","translate("+(-9*s3).toFixed(1)+" 0)");
    var cg=1-.06*s3;if(E.clotG)E.clotG.setAttribute("transform","translate("+(536*(1-cg)).toFixed(1)+" "+(272*(1-cg)).toFixed(1)+") scale("+cg.toFixed(3)+")");
    op(E.fa,b*seg(p,.7,.78));op(E.lPull,b*seg(p,.7,.78));
    op(E.ax,b*seg(p,.66,.72));draw([E.trace],b*seg(p,.7,.92));
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}

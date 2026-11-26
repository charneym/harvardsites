/* The story scene (BL/BY/DB): how ENGEL builds a customer-specific drive (engelantriebe.de > Antriebslösungen: "bis hin
   zu exklusiven Antriebssystem mit individuellem elektromagnetischem Motordesign und individuell realisierte Regler-
   Hardware und Software"; home: "inklusive ... der Regeltechnik und der Kommunikation zum übergeordneten System"), drawn
   as ONE synchronous motor kept on screen for all three steps:
   Step 1 (Motor): the stator with its tooth coils draws in, the permanent-magnet rotor appears and turns.
   Step 2 (Regler): the control electronics appear beside it and feed the three phases U, V, W; a Hall signal comes back.
   Step 3 (System): one housing closes round motor and electronics (an integrated drive) and a fieldbus line leaves it. */
var SCW=760,SCH=520;
var MCX=232,MCY=262;
function enArc(r0,r1,a0,a1){var c=Math.cos,s=Math.sin,p=function(r,a){return (MCX+r*c(a)).toFixed(1)+" "+(MCY+r*s(a)).toFixed(1)};
  return "M"+p(r1,a0)+"A"+r1+" "+r1+" 0 0 1 "+p(r1,a1)+"L"+p(r0,a1)+"A"+r0+" "+r0+" 0 0 0 "+p(r0,a0)+"Z"}
function enScene(o){
  var g='',mob=o.mob,i,a,PI=Math.PI;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<text class="t" x="20" y="30">'+(mob?"SYNCHRONMOTOR":"SYNCHRONMOTOR, SCHEMATISCH")+'</text>';
  /* stator: yoke ring and 12 teeth with tooth coils (Zahnspulentechnik) */
  g+='<g id="enSt"><circle class="yk sD" cx="'+MCX+'" cy="'+MCY+'" r="150"/><circle class="yk sD" cx="'+MCX+'" cy="'+MCY+'" r="126"/>';
  for(i=0;i<12;i++){a=i*PI/6-PI/2;var ca=Math.cos(a),sa=Math.sin(a),px=-sa,py=ca;
    var x0=MCX+126*ca,y0=MCY+126*sa,x1=MCX+84*ca,y1=MCY+84*sa,w=9,sh=15;
    g+='<path class="th sD" d="M'+(x0+px*w).toFixed(1)+' '+(y0+py*w).toFixed(1)+'L'+(x1+px*w).toFixed(1)+' '+(y1+py*w).toFixed(1)+'L'+(x1+px*sh).toFixed(1)+' '+(y1+py*sh).toFixed(1)+'M'+(x0-px*w).toFixed(1)+' '+(y0-py*w).toFixed(1)+'L'+(x1-px*w).toFixed(1)+' '+(y1-py*w).toFixed(1)+'L'+(x1-px*sh).toFixed(1)+' '+(y1-py*sh).toFixed(1)+'"/>';
    var cx=MCX+108*ca,cy=MCY+108*sa;
    g+='<rect class="cl c'+(i%3)+'" x="'+(cx-20).toFixed(1)+'" y="'+(cy-6).toFixed(1)+'" width="40" height="12" transform="rotate('+(a*180/PI+90).toFixed(1)+' '+cx.toFixed(1)+' '+cy.toFixed(1)+')"/>';
  }
  g+='</g>';
  /* rotor: 8 alternating permanent magnets on a steel core, with the shaft */
  g+='<g id="enRo"><g id="enRoT"><circle class="rc" cx="'+MCX+'" cy="'+MCY+'" r="66"/>';
  for(i=0;i<8;i++){a=i*PI/4-PI/2;g+='<path class="pm '+(i%2?"s":"n")+'" d="'+enArc(64,78,a+.06,a+PI/4-.06)+'"/>'}
  g+='<circle class="sf" cx="'+MCX+'" cy="'+MCY+'" r="16"/><path class="ky" d="M'+(MCX-4)+' '+(MCY-16)+'h8v7h-8Z"/></g></g>';
  /* the control electronics, the three phases and the Hall feedback */
  g+='<g id="enEl"><rect class="pcb sD" x="476" y="176" width="176" height="172"/>'+
     '<rect class="chip" x="500" y="204" width="54" height="54"/><rect class="chip2" x="572" y="204" width="56" height="22"/><rect class="chip2" x="572" y="236" width="56" height="22"/>'+
     '<path class="tr" d="M500 286H628M500 304H600M500 322H616"/></g>';
  g+='<g id="enPh"><path class="ph p0" d="M476 222H404Q392 222 384 226L374 232"/><path class="ph p1" d="M476 252H386"/><path class="ph p2" d="M476 282H404Q392 282 384 278L374 272"/></g>';
  g+='<path id="enHall" class="hl" d="M476 330H382Q368 330 360 340"/>';
  /* step 3: the housing round both, and the fieldbus */
  g+='<path id="enHs" class="hs sD" d="M64 94H672V430H64Z"/>';
  g+='<path id="enBus" class="bus" d="M672 262H744"/>';
  for(i=0;i<3;i++)g+='<circle class="bp" id="enBp'+i+'" cx="690" cy="262" r="4"/>';
  /* labels, per step (8px+ clear of every stroke) */
  g+='<g id="enL1"><text class="t s1" x="64" y="458">'+(mob?"STATOR · ROTOR":"STATOR MIT ZAHNSPULEN · PM-ROTOR")+'</text></g>';
  g+='<g id="enL2"><text class="t" x="414" y="212">U</text><text class="t" x="414" y="244">V</text><text class="t" x="414" y="274">W</text>'+
     '<text class="t s1" x="476" y="368">'+(mob?"REGLER":"REGLER-HARDWARE · SOFTWARE")+'</text><text class="t" x="476" y="164">'+(mob?"HALL":"HALL-GEBER")+'</text></g>';
  g+='<g id="enL3"><text class="t s1" x="64" y="458">'+(mob?"INTEGRIERT":"INTEGRIERTER ANTRIEB")+'</text><text class="t" x="684" y="244">'+(mob?"BUS":"FELDBUS")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · MOTOR</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · REGLER</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · SYSTEM</text></g>';
  return g+'</svg>';
}
function scene(){return enScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#enSt .sD,#enEl .sD"),hs:dl("#enHs"),ph:dl(".ph"),hall:dl("#enHall"),bus:dl("#enBus"),
    st:$("#enSt",svg),coils:$$(".cl",svg),ro:$("#enRo",svg),rot:$("#enRoT",svg),el:$("#enEl",svg),phG:$("#enPh",svg),hallEl:$("#enHall",svg),hsEl:$("#enHs",svg),busEl:$("#enBus",svg),
    bp:[0,1,2].map(function(k){return $("#enBp"+k,svg)}),
    L1:$("#enL1",svg),L2:$("#enL2",svg),L3:$("#enL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b)}
    /* step 1: the stator draws in, the coils fill, the rotor appears and turns with the scroll */
    draw(E.base.slice(0,E.base.length-1),b*seg(p,.0,.16));
    E.coils.forEach(function(c,k){op(c,b*seg(p,.08+k*.008,.16+k*.008))});
    op(E.ro,b*seg(p,.14,.22));
    E.rot.setAttribute("transform","rotate("+(p*540).toFixed(1)+" "+MCX+" "+MCY+")");
    op(E.L1,b*seg(p,.12,.2)*(1-seg(p,.3,.36)));
    /* step 2: the electronics draw in, the three phases and the Hall line run */
    op(E.el,b*seg(p,.36,.42));draw(E.base.slice(E.base.length-1),b*seg(p,.36,.48));
    op(E.phG,b*seg(p,.42,.46));draw(E.ph,b*seg(p,.44,.56));
    op(E.hallEl,b*seg(p,.5,.54));draw(E.hall,b*seg(p,.52,.62));
    op(E.L2,b*seg(p,.5,.58));
    /* step 3: one housing closes round both and the fieldbus leaves it, with data moving along it */
    op(E.hsEl,b*seg(p,.68,.7));draw(E.hs,b*seg(p,.68,.84));
    op(E.busEl,b*seg(p,.8,.84));draw(E.bus,b*seg(p,.8,.9));
    E.bp.forEach(function(c,k){var q=(p*6+k/3)%1;c.setAttribute("cx",(680+56*q).toFixed(1));op(c,b*seg(p,.86,.92)*(q<.85?1:0))});
    op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}

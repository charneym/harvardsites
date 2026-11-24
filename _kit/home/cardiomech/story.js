/* The story scene (DB/BL/BY): CardioMech's own mechanism (cardiomech.com and CardioMech releases: native chordae tendineae
   break or elongate, a leaflet prolapses and blood flows backwards (degenerative MR); the MVRS is delivered transfemorally
   and transseptally on a beating heart; an artificial chord is anchored at each end, one on the leaflet and one on the
   ventricle wall), drawn as ONE fine-line long-axis view of the left heart that fills the frame.
   Frame 0 is complete: atrium, ventricle, both leaflets closed, chords to the papillary muscles.
   Step 1 (seal): the valve closed, chords intact.
   Step 2 (leak): the posterior chord breaks, the leaflet billows into the atrium, backflow streams up.
   Step 3 (access): a catheter crosses the septum into the atrium and passes the valve.
   Step 4 (repair): a ventricular anchor, the artificial chord drawn up to a leaflet anchor, the leaflet pulled back
   into place, the backflow stops and the catheter withdraws. Driven by scrubbed progress. No dash draws on
   non-scaling strokes (DR4; nssfix.js is inlined too). */
var LA_IN="M300 255C230 240 200 150 260 105C320 62 470 62 530 105C585 150 555 240 480 255";
var LA_OUT="M282 250C205 235 178 140 248 92C315 45 475 45 542 92C602 140 575 235 498 250";
var LV_IN="M300 255C255 300 270 420 390 505C510 420 525 300 480 255";
var LV_OUT="M282 250C225 300 240 440 390 528C540 440 545 300 498 250";
var PM_L="M287 372C305 385 340 400 336 418C332 434 312 440 300 446",PM_R="M493 372C475 385 440 400 444 418C448 434 468 440 480 446";
var CATH="M197 174C203 173 208 172 214 172C290 165 380 186 398 250C410 300 420 400 428 462";
var JETS=["M396 296C394 250 368 200 330 150","M399 296C401 248 400 196 398 128","M402 296C410 250 432 202 466 152"];
var PML=[336,418],PMR=[444,418],VA=[428,470];
function qpt(a,c,b,t){var u=1-t;return [u*u*a[0]+2*u*t*c[0]+t*t*b[0],u*u*a[1]+2*u*t*c[1]+t*t*b[1]]}
function lerp2(a,b,k){return [a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k]}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'170 40 440 520':'40 40 690 530')+'" aria-hidden="true"><g id="scG">';
  [LA_OUT,LV_OUT].forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  [LA_IN,LV_IN,PM_L,PM_R,"M282 250L300 255","M498 250L480 255"].forEach(function(d){g+='<path class="wl sD" d="'+d+'"/>'});
  g+='<g id="scJet">';JETS.forEach(function(d){g+='<path class="jet" d="'+d+'"/>'});
  g+='<path class="jh" d="M324 162L330 150L338 158"/><path class="jh" d="M392 138L398 128L404 138"/><path class="jh" d="M458 156L466 152L466 162"/></g>';
  g+='<g id="scCh"><path class="ch"/><path class="ch"/><path class="ch"/><path class="ch"/><path class="ch"/><path class="ch" id="chT"/><path class="chb" id="chB1"/><path class="chb" id="chB2"/></g>';
  g+='<path class="lf" id="lfA"/><path class="lf" id="lfP"/>';
  g+='<path class="cth o" id="cth1" d="'+CATH+'"/><path class="cth i" id="cth2" d="'+CATH+'"/>';
  g+='<path class="ac" id="acL"/><g id="anV" transform="translate('+VA[0]+' '+VA[1]+')"><path class="an" d="M-7 6L0 -6L7 6Z"/></g><g id="anL"><circle class="an" r="4.2"/></g>';
  g+='</g>';
  if(!mob){g+='<g id="lCh"><text class="t" x="604" y="114">LEFT ATRIUM</text><text class="t" x="562" y="404">LEFT VENTRICLE</text></g>'}else{g+='<g id="lCh"></g>'}
  var ly=556,lx=mob?180:70;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'VALVE CLOSED':'VALVE CLOSED, CHORDS INTACT')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'BROKEN CHORD, BACKFLOW':'BROKEN CHORD, PROLAPSE, BACKFLOW')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TRANSSEPTAL CATHETER':'TRANSSEPTAL CATHETER, BEATING HEART')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ARTIFICIAL CHORD':'ARTIFICIAL CHORD ANCHORED, LEAK REDUCED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),cth:dl(".cth"),jet:$$("#scJet .jet",svg),jg:$("#scJet",svg),ch:$$("#scCh .ch",svg),b1:$("#chB1",svg),b2:$("#chB2",svg),
    lfA:$("#lfA",svg),lfP:$("#lfP",svg),acL:$("#acL",svg),anV:$("#anV",svg),anL:$("#anL",svg),
    lCh:$("#lCh",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  var A0=[300,255],AC=[335,298],AE=[393,318],P0=[480,255],PC1=[452,300],PE1=[387,321],PC2=[468,196],PE2=[402,224];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function M(a,b){return "M"+a[0].toFixed(1)+" "+a[1].toFixed(1)+"L"+b[0].toFixed(1)+" "+b[1].toFixed(1)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* prolapse: the posterior leaflet billows up as its chord breaks (step 2), and is pulled back by the new chord (step 4) */
    var bk=sm(seg(p,.27,.35)),pr=sm(seg(p,.29,.4))*(1-sm(seg(p,.86,.94)));
    var PC=lerp2(PC1,PC2,pr),PE=lerp2(PE1,PE2,pr);
    E.lfA.setAttribute("d","M"+A0+"Q"+AC+" "+AE);E.lfP.setAttribute("d","M"+P0+"Q"+PC+" "+PE);
    op(E.lfA,b);op(E.lfP,b);
    /* native chords: three to the anterior leaflet, three to the posterior (the last one breaks) */
    var tg=[qpt(A0,AC,AE,.5),qpt(A0,AC,AE,.75),qpt(A0,AC,AE,.96),qpt(P0,PC,PE,.45),qpt(P0,PC,PE,.7),qpt(P0,PC,PE,.96)];
    E.ch.forEach(function(el,i){var pm=i<3?PML:PMR;el.setAttribute("d",M(pm,tg[i]));op(el,b*(i===5?1-bk:1))});
    var tip=tg[5],brk=lerp2(PMR,tip,.52-.12*bk);
    E.b1.setAttribute("d",M(PMR,lerp2(brk,[brk[0]+14,brk[1]+10],bk)));E.b2.setAttribute("d",M(tip,[tip[0]+4*bk,tip[1]+16*bk]));
    op(E.b1,b*bk);op(E.b2,b*bk);
    /* backflow: pale streams up into the atrium while the valve leaks */
    var jt=sm(seg(p,.32,.4))*(1-sm(seg(p,.86,.93)));op(E.jg,b*jt);
    E.jet.forEach(function(el,i){el.style.strokeDashoffset=(-(p*900)-i*7).toFixed(1)});
    /* the catheter crosses the septum (step 3) and withdraws once the chord is set (step 4) */
    var cIn=sm(seg(p,.52,.68)),cOut=sm(seg(p,.9,.985));
    E.cth.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-cIn*(1-cOut))).toFixed(1);op(a[0],b*(cIn>0?1:0)*(1-cOut))});
    /* the repair: a ventricular anchor, the artificial chord drawn up to the leaflet, a leaflet anchor */
    var av=sm(seg(p,.76,.8)),cd=sm(seg(p,.79,.86)),al=sm(seg(p,.85,.88));
    var lp=qpt(P0,PC,PE,.9),end=lerp2(VA,lp,cd);
    E.acL.setAttribute("d",M([VA[0],VA[1]-5],end));op(E.acL,b*(cd>0?1:0));
    E.anV.setAttribute("transform","translate("+VA[0]+" "+VA[1]+") scale("+(.4+.6*av).toFixed(3)+")");op(E.anV,b*av);
    E.anL.setAttribute("transform","translate("+lp[0].toFixed(1)+" "+lp[1].toFixed(1)+") scale("+(.4+.6*al).toFixed(3)+")");op(E.anL,b*al);
    op(E.lCh,b);
    op(E.l1,b*(1-seg(p,.2,.25)));op(E.l2,b*seg(p,.3,.36)*(1-seg(p,.45,.5)));op(E.l3,b*seg(p,.55,.61)*(1-seg(p,.7,.75)));op(E.l4,b*seg(p,.86,.92));
  };
}

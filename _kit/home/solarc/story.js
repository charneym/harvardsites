/* The story scene (BL/BY/DB): "Vom Prototyp bis zur Serie" (solarc.de > Über uns, Produkte), drawn as ONE line drawing
   kept on screen for all three steps:
   Step 1 (Entwickeln): a customer-specific crystalline module draws in, cell by cell, with its busbars.
   Step 2 (Prüfen): the electroluminescence test lights the cells; one cell shows a microcrack, which is marked.
   Step 3 (Integrieren): the module is wired to a charge controller, which feeds the storage battery and the load
   (a solar-powered GPS tracker); energy travels along the wires. */
var SCW=760,SCH=520;
function soScene(o){
  var g='',mob=o.mob,i,j;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="16 78 744 440" aria-hidden="true"><defs>'+
    '<linearGradient id="soBd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f4ed" stop-opacity=".12"/><stop offset=".5" stop-color="#f6f4ed" stop-opacity=".04"/><stop offset="1" stop-color="#f6f4ed" stop-opacity=".09"/></linearGradient></defs>';
  g+='<text class="t" x="36" y="98">'+(mob?"SCHEMATISCH":"SOLARC, SCHEMATISCH")+'</text>';
  /* the module: frame and 3 x 4 cells (cell 62, gap 6), x 44..264, y 128..412 */
  var X0=50,Y0=134,C=62,G=6;
  g+='<path class="body" d="M40 124H272V416H40Z"/>';
  g+='<path class="edge sD" d="M40 124H272V416H40Z"/>';
  var cells="",bus="",el="";
  for(j=0;j<4;j++)for(i=0;i<3;i++){var x=X0+i*(C+G),y=Y0+j*(C+G),k=7;
    cells+='<path class="cell sC" d="M'+(x+k)+' '+y+'H'+(x+C-k)+'L'+(x+C)+' '+(y+k)+'V'+(y+C-k)+'L'+(x+C-k)+' '+(y+C)+'H'+(x+k)+'L'+x+' '+(y+C-k)+'V'+(y+k)+'Z"/>';
    el+='<path class="elc" d="M'+(x+k)+' '+y+'H'+(x+C-k)+'L'+(x+C)+' '+(y+k)+'V'+(y+C-k)+'L'+(x+C-k)+' '+(y+C)+'H'+(x+k)+'L'+x+' '+(y+C-k)+'V'+(y+k)+'Z"/>'}
  for(i=0;i<3;i++){var bx=X0+i*(C+G);bus+="M"+(bx+21)+" 130V410M"+(bx+41)+" 130V410"}
  g+='<g id="soEL">'+el+'</g>';
  g+=cells+'<path class="bus sD" d="'+bus+'"/>';
  /* the microcrack, in the middle cell of row 2 */
  g+='<path id="soCrack" class="crk" d="M130 222L141 233L137 240L150 252"/>';
  g+='<circle id="soRing" class="ring" cx="140" cy="237" r="24"/>';
  /* junction box and lead to the controller */
  g+='<path class="edge sD" d="M140 416V432H172V416"/>';
  g+='<path id="soW1" class="wire" d="M172 424H330V270H382"/>';
  /* charge controller */
  g+='<path class="body" d="M382 222H502V318H382Z"/>';
  g+='<path class="edge sD" d="M382 222H502V318H382Z"/><path class="fin sD" d="M396 240H446M396 252H436M396 264H446"/>';
  g+='<g id="soLed"><circle class="led" cx="400" cy="298" r="3.5"/><circle class="led" cx="414" cy="298" r="3.5"/></g>';
  /* battery */
  g+='<path id="soW2" class="wire" d="M502 248H546V170H586"/>';
  g+='<path class="body" d="M586 136H718V204H586Z"/>';
  g+='<path class="edge sD" d="M586 136H718V204H586Z"/><path class="edge sD" d="M606 136V126H626V136M678 136V126H698V136"/>';
  g+='<g id="soCharge"><rect class="chg" x="598" y="150" width="20" height="40"/><rect class="chg" x="624" y="150" width="20" height="40"/><rect class="chg" x="650" y="150" width="20" height="40"/><rect class="chg" x="676" y="150" width="20" height="40"/></g>';
  /* the load: a small solar-powered GPS tracker with its own panel window */
  g+='<path id="soW3" class="wire" d="M502 292H546V350H586"/>';
  g+='<path class="body" d="M586 318H718V390H586Z"/>';
  g+='<path class="edge sD" d="M586 318H718V390H586Z"/><path class="fin sD" d="M600 332H660V376H600Z"/>';
  g+='<g id="soGps"><circle class="rad0" cx="690" cy="354" r="4"/><path class="rad" d="M680 340A14 14 0 0 1 700 340"/><path class="rad" d="M673 332A24 24 0 0 1 707 332"/></g>';
  g+='<circle id="soPk" class="pk" cx="0" cy="0" r="5"/><circle id="soPk2" class="pk" cx="0" cy="0" r="4.5"/>';
  /* labels, per step (clear of every stroke) */
  g+='<g id="soL1"><text class="t" x="40" y="462">'+(mob?"SOLARMODUL":"SOLARMODUL · KRISTALLIN")+'</text><text class="t s1" x="40" y="'+(mob?488:484)+'">'+(mob?"40 mW – 200 W":"NACH MASS · 40 mW – 200 W")+'</text></g>';
  g+='<g id="soL2"><text class="t s1" x="'+(mob?292:292)+'" y="'+(mob?150:146)+'">'+(mob?"EL-TEST":"EL-TEST")+'</text><text class="t" x="292" y="'+(mob?176:168)+'">MICROCRACK</text></g>';
  g+='<g id="soL3"><text class="t" x="382" y="'+(mob?346:340)+'">LADEREGLER</text><text class="t s1" x="586" y="'+(mob?232:226)+'">AKKU</text><text class="t s1" x="586" y="'+(mob?418:412)+'">'+(mob?"GPS":"GPS-TRACKER")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+(mob?412:470)+'" y="508">1 · ENTWICKELN</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?412:470)+'" y="508">2 · PRÜFEN</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?412:470)+'" y="508">3 · INTEGRIEREN</text></g>';
  return g+'</svg>';
}
function scene(){return soScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),cells:dl(".sC"),bodies:$$(".body",svg),el:$$("#soEL .elc",svg),crk:dl("#soCrack"),crkEl:$("#soCrack",svg),ring:dl("#soRing"),ringEl:$("#soRing",svg),
    w1:dl("#soW1"),w1El:$("#soW1",svg),w2:dl("#soW2"),w2El:$("#soW2",svg),w3:dl("#soW3"),w3El:$("#soW3",svg),led:$("#soLed",svg),chg:$$("#soCharge rect",svg),gps:$("#soGps",svg),
    pk:$("#soPk",svg),pk2:$("#soPk2",svg),L1:$("#soL1",svg),L2:$("#soL2",svg),L3:$("#soL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var P1=E.w1El.getTotalLength(),P2=E.w2El.getTotalLength(),P3=E.w3El.getTotalLength(),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function at(el,L,k,pk){var pt=el.getPointAtLength(L*k);pk.setAttribute("cx",pt.x.toFixed(1));pk.setAttribute("cy",pt.y.toFixed(1))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    E.bodies.forEach(function(el){op(el,b)});
    /* step 1: the cells draw in one after another, and stay */
    E.cells.forEach(function(a,n){var v=seg(p,.02+n*.014,.1+n*.014);a[0].style.strokeDashoffset=(a[1]*(1-b*v)).toFixed(1)});
    op(E.L1,b*seg(p,.02,.1));
    /* step 2: electroluminescence lights the cells, the crack shows dark, a ring marks it */
    E.el.forEach(function(el,n){op(el,b*seg(p,.36+n*.008,.44+n*.008)*(1-.75*seg(p,.66,.74)))});
    op(E.crkEl,b*seg(p,.46,.5));draw(E.crk,b*seg(p,.46,.54));
    op(E.ringEl,b*seg(p,.5,.53));draw(E.ring,b*seg(p,.5,.6));
    op(E.L2,b*seg(p,.4,.48));
    /* step 3: the wires draw in, energy travels to the controller, then on to the battery and the tracker */
    op(E.w1El,b*seg(p,.66,.68));draw(E.w1,b*seg(p,.66,.76));
    op(E.led,b*seg(p,.76,.8));
    op(E.w2El,b*seg(p,.78,.8));draw(E.w2,b*seg(p,.78,.86));
    op(E.w3El,b*seg(p,.78,.8));draw(E.w3,b*seg(p,.78,.86));
    at(E.w1El,P1,seg(p,.68,.78),E.pk);op(E.pk,b*seg(p,.68,.7)*(1-seg(p,.77,.79)));
    at(E.w2El,P2,seg(p,.8,.88),E.pk2);op(E.pk2,b*seg(p,.8,.82)*(1-seg(p,.87,.89)));
    E.chg.forEach(function(r,j){op(r,b*seg(p,.84+j*.025,.88+j*.025))});
    op(E.gps,b*seg(p,.86,.92));
    op(E.L3,b*seg(p,.7,.78));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}

/* The story scene (BL/BY/DB): FISCHER's cleanroom solution (fischermesstechnik.de > Solutions > Reinraumtechnik):
   ventilation builds a pressure cascade so air always flows from the cleaner room outward; differential-pressure
   transmitters measure each step; the values go to the building management system as the control variable.
   ONE building section kept on screen for all three steps:
   Step 1 (Kaskade): three rooms, ++ / + / 0, and the air flowing outward through the door gaps.
   Step 2 (Messen): a transmitter on each wall, tubed to both rooms, reading the difference.
   Step 3 (Regeln): signal lines up to the building management system, and the supply air it controls. */
var SCW=760,SCH=520;
function fmScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="fmRm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fb3d2" stop-opacity=".16"/><stop offset="1" stop-color="#6fb3d2" stop-opacity=".04"/></linearGradient>'+
    '<marker id="fmAr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#f2697d"/></marker></defs>';
  /* rooms: floor 440, ceiling 200; walls at 280 and 480 with door gaps 372..440 */
  g+='<path class="rmf r1" d="M40 200H280V440H40Z"/><path class="rmf r2" d="M280 200H480V440H280Z"/><path class="rmf r3" d="M480 200H720V440H480Z"/>';
  g+='<path class="wall sD" d="M40 440V200H720V440"/><path class="wall sD" d="M20 440H740"/>';
  g+='<path class="wall sD" d="M280 200V372"/><path class="wall sD" d="M480 200V372"/>';
  /* room tags */
  g+='<g id="fmTg"><text class="pz" x="160" y="262" text-anchor="middle">++</text><text class="pz" x="380" y="262" text-anchor="middle">+</text><text class="pz" x="600" y="262" text-anchor="middle">±0</text>'+
     '<text class="t" x="160" y="292" text-anchor="middle">REINRAUM</text><text class="t" x="380" y="292" text-anchor="middle">SCHLEUSE</text><text class="t" x="600" y="292" text-anchor="middle">'+(mob?"FLUR":"UMGEBUNG")+'</text></g>';
  /* air flowing outward through the door gaps */
  g+='<g id="fmAir"><path class="air" d="M220 410H330" marker-end="url(#fmAr)"/><path class="air" d="M420 410H530" marker-end="url(#fmAr)"/></g>';
  /* step 2: a transmitter on each wall, with a tube into each neighbouring room */
  function tx(x){return '<path class="tube" d="M'+(x-22)+' 318H'+(x-48)+'V340"/><path class="tube" d="M'+(x+22)+' 318H'+(x+48)+'V340"/>'+
    '<rect class="txb" x="'+(x-22)+'" y="296" width="44" height="44"/><rect class="txd" x="'+(x-15)+'" y="303" width="30" height="17"/><text class="dp" x="'+x+'" y="316" text-anchor="middle">Δp</text>'}
  g+='<g id="fmTx">'+tx(280)+tx(480)+'</g>';
  g+='<g id="fmL2"><text class="t s1" x="'+(mob?186:204)+'" y="372" text-anchor="end">'+(mob?"Δp 1":"Δp REINRAUM")+'</text><text class="t s1" x="'+(mob?574:556)+'" y="372">'+(mob?"Δp 2":"Δp SCHLEUSE")+'</text></g>';
  /* step 3: signal lines up to the building management system, and the supply air into the rooms */
  g+='<path id="fmS1" class="sig" d="M280 296V150"/><path id="fmS2" class="sig" d="M480 296V150"/>';
  g+='<g id="fmGlt"><rect class="glt" x="200" y="96" width="360" height="54"/><text class="t gl" x="380" y="129" text-anchor="middle">'+(mob?"LEITTECHNIK":"GEBÄUDELEITTECHNIK")+'</text></g>';
  g+='<path id="fmDu" class="duct" d="M40 176H720"/>';
  g+='<g id="fmSup"><path class="sup" d="M160 176V196" marker-end="url(#fmAr)"/><path class="sup" d="M380 176V196" marker-end="url(#fmAr)"/><path class="sup" d="M600 176V196" marker-end="url(#fmAr)"/></g>';
  g+='<g id="fmL3"><text class="t s1" x="'+(mob?296:292)+'" y="'+(mob?84:84)+'">'+(mob?"4–20 mA":"4–20 mA · MODBUS")+'</text><text class="t" x="40" y="166">ZULUFT</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · KASKADE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="500">2 · MESSEN</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="500">3 · REGELN</text></g>';
  return g+'</svg>';
}
function scene(){return fmScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),rm:$$(".rmf",svg),tg:$("#fmTg",svg),air:$("#fmAir",svg),tx:$("#fmTx",svg),L2:$("#fmL2",svg),sig:dl("#fmS1,#fmS2"),glt:$("#fmGlt",svg),du:dl("#fmDu"),sup:$("#fmSup",svg),L3:$("#fmL3",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var airP=$$(".air",svg),lastB=-1,t0=performance.now();
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    E.rm.forEach(function(r){op(r,b)});op(E.tg,b*seg(p,0,.06));
    /* step 1: the air moves outward (a travelling dash), always visible once in */
    var fl=((performance.now()-t0)/1000*28)%24;airP.forEach(function(a){a.style.strokeDashoffset=(-fl).toFixed(1)});
    op(E.air,b*seg(p,.02,.1));
    /* step 2: transmitters and their readings */
    op(E.tx,b*seg(p,.36,.44));op(E.L2,b*seg(p,.42,.5)*(1-seg(p,.64,.68)));
    /* step 3: signals up, the control system, the supply air */
    draw(E.sig,b*seg(p,.68,.78));op(E.glt,b*seg(p,.72,.8));draw(E.du,b*seg(p,.76,.86));op(E.sup,b*seg(p,.82,.9));op(E.L3,b*seg(p,.84,.92));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}

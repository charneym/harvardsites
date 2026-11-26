/* The story scene (BL/BY/DB): what a Spitzenberger & Spies 4-quadrant amplifier does for the device under test
   (spitzenberger.de > APS: "Extrem niedriger Klirrfaktor auch bei besonders nichtlinearen Lasten", "Sehr schnelle
   Anstiegszeit >52V/µs bei 230Veff wie von der IEC/EN 61000-4-11 gefordert", "Betrieb als Quelle und Senke"; Versorgungsnetz
   Simulationssysteme: "Spannungsschwankungen ... Störungen und Unterbrechungen"), drawn as ONE voltage/current record
   kept on screen for all three steps:
   Step 1 (Sinus): a clean 50 Hz sine draws across the voltage band.
   Step 2 (Störung): the same supply dips to 40 % for two periods, starting and ending on zero crossings (the norm dip);
   the clean trace swaps for identical pre/post pieces plus a ghost of the undisturbed periods inside the dip.
   Step 3 (Senke): the current band draws in, lagging the voltage; where current and voltage have opposite signs the
   amplifier takes energy back from the device (sink), those stretches of the trace turn orange. */
var SCW=760,SCH=520,X0=40,X1=720,UY=200,UA=104,IY=420,IA=44,PER=136;
function spU(x,dip){var t=(x-X0)/PER,a=UA;if(dip&&t>=2&&t<4)a=UA*.4;return UY-a*Math.sin(t*2*Math.PI)}
function spI(x){var t=(x-X0)/PER;return IY-IA*Math.sin(t*2*Math.PI-Math.PI/3)}
function spPath(f,xa,xb){var d="",x;for(x=xa;x<=xb+.01;x+=2)d+=(d?"L":"M")+x.toFixed(1)+" "+f(x).toFixed(1);return d}
function spScene(o){
  var g='',mob=o.mob,i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<text class="t" x="'+X0+'" y="34">'+(mob?"SPANNUNG U":"SPANNUNG U(t) AM PRÜFLING")+'</text>';
  /* graticule only inside the two bands, so no label ever sits on a line */
  g+='<g class="gr">';
  for(x=X0;x<=X1;x+=PER/2)g+='<path d="M'+x+' 86V314M'+x+' 366V474"/>';
  g+='<path d="M'+X0+' 86H'+X1+'M'+X0+' 314H'+X1+'M'+X0+' 366H'+X1+'M'+X0+' 474H'+X1+'"/></g>';
  g+='<path class="z" d="M'+X0+' '+UY+'H'+X1+'"/><path class="z" id="spIz" d="M'+X0+' '+IY+'H'+X1+'"/>';
  /* step 1: the clean sine; step 2: the dipped record over it */
  g+='<path id="spU" class="u sD" d="'+spPath(function(x){return spU(x,0)},X0,X1)+'"/>';
  g+='<g id="spUs"><path class="u" d="'+spPath(function(x){return spU(x,0)},X0,X0+2*PER)+'"/><path class="u" d="'+spPath(function(x){return spU(x,0)},X0+4*PER,X1)+'"/></g>';
  g+='<path id="spUg" class="ug" d="'+spPath(function(x){return spU(x,0)},X0+2*PER,X0+4*PER)+'"/>';
  g+='<path id="spUd" class="ud sD" d="'+spPath(function(x){return spU(x,1)},X0+2*PER,X0+4*PER)+'"/>';
  g+='<path id="spDip" class="dip" d="M'+(X0+2*PER)+' 86V314H'+(X0+4*PER)+'V86Z"/>';
  /* step 3: the current, with its sink stretches (u and i of opposite sign) picked out */
  g+='<path id="spI" class="i sD" d="'+spPath(spI,X0,X1)+'"/>';
  var sk='';for(i=0;i<10;i++){var xa=X0+i*PER/2,xb=xa+PER/6;if(xb>X1)break;sk+='<path class="sk" d="'+spPath(spI,xa,xb)+'"/>'}
  g+='<g id="spSk">'+sk+'</g>';
  /* labels, per step (8px+ clear of every stroke: above the voltage band, or in the gap between the bands) */
  g+='<g id="spL1"><text class="t s1" x="'+X1+'" y="70" text-anchor="end">230 V · 50 Hz</text></g>';
  g+='<g id="spL2"><text class="t s1" x="'+(X0+3*PER)+'" y="70" text-anchor="middle">'+(mob?"EINBRUCH 40 %":"EINBRUCH AUF 40 % · IEC/EN 61000-4-11")+'</text></g>';
  g+='<g id="spL3"><text class="t" x="'+X0+'" y="346">'+(mob?"STROM I":"STROM I(t)")+'</text><text class="t s1" x="'+X1+'" y="346" text-anchor="end">'+(mob?"SENKE":"ORANGE: SENKE, ENERGIE ZURÜCK")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+X0+'" y="510">1 · SINUS</text></g>';
  g+='<g id="lb2"><text class="a" x="'+X0+'" y="510">2 · STÖRUNG</text></g>';
  g+='<g id="lb3"><text class="a" x="'+X0+'" y="510">3 · QUELLE UND SENKE</text></g>';
  return g+'</svg>';
}
function scene(){return spScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={u:dl("#spU"),ud:dl("#spUd"),i:dl("#spI"),uEl:$("#spU",svg),udEl:$("#spUd",svg),iEl:$("#spI",svg),iz:$("#spIz",svg),us:$("#spUs",svg),ug:$("#spUg",svg),dip:$("#spDip",svg),sk:$("#spSk",svg),
    L1:$("#spL1",svg),L2:$("#spL2",svg),L3:$("#spL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t"),gr:$(".gr",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.t0,b);op(E.gr,b)}
    /* step 1: the clean sine draws across */
    draw(E.u,b*seg(p,.02,.2));op(E.L1,b*seg(p,.14,.2));
    /* step 2: the dipped record draws over it and the clean trace steps back */
    var sw=seg(p,.36,.4);op(E.uEl,b*(1-sw));op(E.us,b*sw);op(E.ug,b*(sw-.75*seg(p,.4,.5)));op(E.udEl,b*seg(p,.38,.4));draw(E.ud,b*seg(p,.4,.56));
    op(E.dip,b*seg(p,.46,.54));op(E.L2,b*seg(p,.48,.56));
    /* step 3: the current band draws in, then its sink stretches light up */
    op(E.iz,b*seg(p,.68,.72));op(E.iEl,b*seg(p,.68,.7));draw(E.i,b*seg(p,.7,.84));
    op(E.sk,b*seg(p,.84,.9));op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}

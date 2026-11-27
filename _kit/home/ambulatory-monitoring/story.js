/* The story scene (BL/BY/DB): how the Motionlogger works (ambulatory-monitoring.com > How it Works, Software), drawn as ONE
   fine-line schematic kept on screen for all four steps: the watch on the left, four rows to its right.
   Step 1 (Sense): the accelerometer generates a voltage each time the actigraph moves (raw signal).
   Step 2 (Filter): the signal is amplified and filtered (conditioned signal).
   Step 3 (Epoch): the derived information accumulates per epoch, typically one minute (bars).
   Step 4 (Score): sleep scoring marks sleep and wake periods (a schematic band, not patient data). */
var SCW=760,SCH=520;
function amRaw(){var d="",x,y;for(x=170;x<=736;x+=3){var t=x-170,act=(t<150||t>470)?1:.18;
  y=118+act*(9*Math.sin(t*.9)+6*Math.sin(t*2.3+1)+4*Math.sin(t*5.1+2))+(1-act)*1.5*Math.sin(t*1.7);d+=(d?"L":"M")+x+" "+y.toFixed(1)}return d}
function amFil(){var d="",x,y;for(x=170;x<=736;x+=3){var t=x-170,act=(t<150||t>470)?1:.18;
  y=226-act*(10+7*Math.sin(t*.11)+4*Math.sin(t*.29+1))-(1-act)*2;d+=(d?"L":"M")+x+" "+y.toFixed(1)}return d}
var AM_EP=[];(function(){for(var i=0;i<24;i++){var t=i*24,act=(t<150||t>470)?1:.15;AM_EP.push(Math.round(8+act*(34+12*Math.sin(i*1.7))))}})();
function amScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">MOTIONLOGGER, SCHEMATIC</text>';
  /* the watch */
  g+='<g id="amW"><path class="edge sW" d="M56 150H112V196M56 150V196M56 324V370H112V324"/>'+
     '<path class="edge sW" d="M44 196H124Q132 196 132 204V316Q132 324 124 324H44Q36 324 36 316V204Q36 196 44 196Z"/>'+
     '<path class="edge sW" d="M84 220A40 40 0 1 0 84 300A40 40 0 1 0 84 220Z"/><path class="lcd sW" d="M66 250H102V270H66Z"/></g>';
  /* the four rows */
  g+='<g id="amR"><path class="sig sR" d="'+amRaw()+'"/></g>';
  g+='<g id="amF"><path class="sig2 sF" d="'+amFil()+'"/><path class="base sF" d="M170 226H736"/></g>';
  g+='<g id="amE">';for(i=0;i<24;i++){var x=170+i*24;g+='<path class="ep" d="M'+x+' 362V'+(362-AM_EP[i])+'H'+(x+18)+'V362"/>'}g+='<path class="base" d="M170 362H736"/></g>';
  g+='<g id="amS"><path class="wake sS" d="M170 420H320"/><path class="sleep sS" d="M320 446H650"/><path class="wake sS" d="M650 420H736"/>'+
     '<path class="tick sS" d="M320 412V454M650 412V454"/></g>';
  /* row labels (>= 8px clear of every stroke, DR3) */
  g+='<g id="amL1"><text class="t s2" x="170" y="'+(mob?84:88)+'">'+(mob?'ACCELEROMETER':'ACCELEROMETER · RAW SIGNAL')+'</text></g>';
  g+='<g id="amL2"><text class="t s2" x="170" y="'+(mob?184:190)+'">'+(mob?'FILTERED':'AMPLIFIED · FILTERED')+'</text></g>';
  g+='<g id="amL3"><text class="t s2" x="170" y="'+(mob?288:292)+'">'+(mob?'1-MIN EPOCHS':'ONE-MINUTE EPOCHS')+'</text></g>';
  g+='<g id="amL4"><text class="t s2" x="'+(mob?340:340)+'" y="'+(mob?484:478)+'">SLEEP</text><text class="t s2" x="170" y="'+(mob?400:404)+'">WAKE</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · SENSE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · FILTER</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · EPOCH</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · SCORE</text></g>';
  return g+'</svg>';
}
function scene(){return amScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={W:$("#amW",svg),wE:dl(".sW"),R:$("#amR",svg),rE:dl(".sR"),F:$("#amF",svg),fE:dl(".sF"),EP:$$("#amE .ep",svg),EB:$("#amE .base",svg),S:$("#amS",svg),sE:dl(".sS"),
    L:[$("#amL1",svg),$("#amL2",svg),$("#amL3",svg),$("#amL4",svg)],l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.W,b);draw(E.wE,b*seg(p,0,.08));
    op(E.R,b);draw(E.rE,b*seg(p,.06,.2));
    op(E.F,b);draw(E.fE,b*seg(p,.3,.44));
    op(E.EB,b*seg(p,.52,.56));E.EP.forEach(function(e,i){op(e,b*seg(p,.54+i*.006,.58+i*.006))});
    op(E.S,b);draw(E.sE,b*seg(p,.78,.9));
    for(var i=0;i<4;i++){var s0=i*.25;op(E.L[i],b*seg(p,s0+.04,s0+.1));op(E.l[i],b*seg(p,s0+(i?.02:0),s0+.07)*(i<3?(1-seg(p,s0+.22,s0+.25)):1))}
  };
}

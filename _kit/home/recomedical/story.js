/* The story scene (BL/BY/DB): how ICP-SENSE changes intracranial pressure monitoring, drawn as ONE cross-section through
   scalp, skull and brain surface, kept on screen for all three steps (recomedical.co.uk products page: wired invasive
   monitoring "comes with risks of serious transcutaneous infections, limited patient mobility..."; ICP-SENSE is "a small
   sensor- implantable via a small incision- and a smartphone-sized reader", quartz sensor, 1 mmHg resolution, minimal
   drift, "real-time streaming of ICP data to clinicians"). Calm line drawing, no blood.
   Step 1: today: a wired catheter crosses the skin and skull, its lead running out to a bedside monitor.
   Step 2: the wire is gone; a small quartz sensor sits under the skull, placed through a small incision.
   Step 3: a wearable reader over the scalp reads it; the pressure trace streams to the clinician. Illustrative. */
var SCW=760,SCH=520;
function rcScene(o){
  var g='',mob=o.mob,i;
  var Y0=150,Y1=196,Y2=250,Y3=300;   /* scalp top, skull top, skull bottom, brain surface */
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 40 760 452" aria-hidden="true">';
  g+='<text class="t" x="30" y="64">'+(mob?"HEAD, CROSS-SECTION":"SCALP, SKULL AND BRAIN, CROSS-SECTION")+'</text>';
  /* layers */
  g+='<path class="ly sD" d="M30 '+Y0+'C250 '+(Y0-8)+' 510 '+(Y0-8)+' 730 '+Y0+'"/>';
  g+='<path class="ly sD" d="M30 '+Y1+'C250 '+(Y1-8)+' 510 '+(Y1-8)+' 730 '+Y1+'"/>';
  g+='<path class="ly sD" d="M30 '+Y2+'C250 '+(Y2-8)+' 510 '+(Y2-8)+' 730 '+Y2+'"/>';
  g+='<path class="br sD" d="M30 '+Y3+'C90 '+(Y3-14)+' 130 '+(Y3+12)+' 190 '+Y3+'S290 '+(Y3+14)+' 350 '+Y3+'S450 '+(Y3-12)+' 510 '+Y3+'S620 '+(Y3+12)+' 730 '+Y3+'"/>';
  g+='<g class="lt"><text class="t" x="'+(mob?520:600)+'" y="'+(Y0+30)+'">SCALP</text><text class="t" x="'+(mob?520:600)+'" y="'+(Y1+34)+'">SKULL</text><text class="t" x="'+(mob?520:600)+'" y="'+(Y3+40)+'">BRAIN</text></g>';
  /* step 1: the wired catheter and its lead out to the monitor */
  g+='<g id="rcW"><path class="wr" d="M200 '+(Y3+26)+'V'+(Y0-6)+'C200 '+(Y0-60)+' 240 '+(Y0-74)+' 300 '+(Y0-74)+'H530"/><rect class="mon" x="530" y="'+(Y0-96)+'" width="70" height="44"/></g>';
  /* step 2: the small sensor under the skull, and the closed incision */
  g+='<g id="rcS"><rect class="sn" x="'+(350-22)+'" y="'+(Y2+10)+'" width="44" height="14" rx="3"/><path class="inc" d="M338 '+(Y0-4)+'L362 '+(Y0-4)+'"/></g>';
  /* step 3: the wearable reader over the scalp, the wireless read (thin arcs, no glow) and the pressure trace */
  g+='<g id="rcR"><rect class="rd" x="'+(350-48)+'" y="'+(Y0-56)+'" width="96" height="40" rx="8"/>'+
     '<path class="wv" d="M330 '+(Y0+16)+'Q350 '+(Y0+4)+' 370 '+(Y0+16)+'M322 '+(Y0+30)+'Q350 '+(Y0+14)+' 378 '+(Y0+30)+'"/></g>';
  var tr='M450 '+(Y0-36);for(i=0;i<9;i++){var x=450+i*30;tr+='C'+(x+8)+' '+(Y0-36)+' '+(x+10)+' '+(Y0-58)+' '+(x+15)+' '+(Y0-58)+'C'+(x+20)+' '+(Y0-58)+' '+(x+22)+' '+(Y0-44)+' '+(x+30)+' '+(Y0-36)}
  g+='<path id="rcT" class="tr" d="'+tr+'"/>';
  /* labels, each clear of every stroke (DR3) */
  g+='<g id="rcL1"><text class="t s1" x="30" y="'+(Y3+64)+'">'+(mob?"WIRED CATHETER":"WIRED CATHETER THROUGH THE SKIN")+'</text><text class="t" x="30" y="'+(Y3+88)+'">'+(mob?"INFECTION RISK":"INFECTION RISK · LIMITED MOBILITY")+'</text></g>';
  g+='<g id="rcL2"><text class="t s1" x="30" y="'+(Y3+64)+'">'+(mob?"QUARTZ SENSOR":"SMALL QUARTZ SENSOR · 1 mmHg")+'</text><text class="t" x="30" y="'+(Y3+88)+'">'+(mob?"SMALL INCISION":"PLACED THROUGH A SMALL INCISION")+'</text></g>';
  g+='<g id="rcL3"><text class="t s1" x="30" y="'+(Y3+64)+'">'+(mob?"WEARABLE READER":"SMARTPHONE-SIZED WEARABLE READER")+'</text><text class="t" x="420" y="'+(Y0-74)+'">'+(mob?"ICP, LIVE":"ICP, STREAMED IN REAL TIME")+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="484">'+(mob?"1 · TODAY":"1 · TODAY: A WIRE")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="484">'+(mob?"2 · IMPLANT":"2 · A SMALL IMPLANT")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="484">'+(mob?"3 · WEAR":"3 · READ BY A WEARABLE")+'</text></g>';
  return g+'</svg>';
}
function scene(){return rcScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),wr:dl("#rcW .wr"),tr:dl("#rcT"),wv:dl("#rcR .wv"),W:$("#rcW",svg),S:$("#rcS",svg),R:$("#rcR",svg),mon:$("#rcW .mon",svg),rd:$("#rcR .rd",svg),lt:$(".lt",svg),
    L1:$("#rcL1",svg),L2:$("#rcL2",svg),L3:$("#rcL3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);op(E.lt,b)}
    /* step 1: the wire is drawn in, then leaves */
    var out=ease(seg(p,.34,.42));
    draw(E.wr,b*ease(seg(p,.04,.2)));op(E.mon,b*seg(p,.16,.22));op(E.W,1-out);
    op(E.L1,b*seg(p,.1,.18)*(1-seg(p,.31,.36)));
    /* step 2: the sensor appears under the skull */
    op(E.S,b*seg(p,.42,.52));
    op(E.L2,b*seg(p,.46,.52)*(1-seg(p,.64,.68)));
    /* step 3: the reader, the wireless read and the streamed trace */
    op(E.R,b*seg(p,.68,.74));op(E.rd,1);draw(E.wv,b*ease(seg(p,.72,.8)));
    draw(E.tr,b*ease(seg(p,.74,.9)));
    op(E.L3,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}

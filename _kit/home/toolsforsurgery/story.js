/* The story scene (DB/BL): the firm's own newest device, the Bariatric Air Syringe (ALT-BA), drawn in fine line as ONE scene
   that fills the frame. Source: toolsforsurgery.com/bariatric-air-syringe ("Controlled insufflation for intraoperative leak
   testing of gastric staple lines and anastomoses", "Controlled pressure delivery", "Integral pressure gauge (20-60 mmHg)",
   "Compact, disposable design") and the product photograph (bulb, clear valve body, dial under the valve, nozzle).
   Step 1 (squeeze): the bulb compresses and air moves through the valve and out of the nozzle.
   Step 2 (read): the needle on the integral gauge climbs from 20 mmHg.
   Step 3 (hold): the 20-60 mmHg band lights on the dial and the needle settles inside it.
   Everything is driven by the scrubbed progress. No text sits on a stroke: labels keep 8px+ clear (DR). */
var SCW=760,SCH=560;
var GC=[262,372],GR=104;
function gPt(v,r){var a=(210-(v-20)/40*240)*Math.PI/180;return [GC[0]+r*Math.cos(a),GC[1]-r*Math.sin(a)]}
function f1(v){return v.toFixed(1)}
function gArc(v0,v1,r){var a=gPt(v0,r),b=gPt(v1,r),large=(v1-v0)/40*240>180?1:0;return "M"+f1(a[0])+" "+f1(a[1])+"A"+r+" "+r+" 0 "+large+" 1 "+f1(b[0])+" "+f1(b[1])}
function circ(r){return "M"+(GC[0]-r)+" "+GC[1]+"A"+r+" "+r+" 0 1 1 "+(GC[0]+r)+" "+GC[1]+"A"+r+" "+r+" 0 1 1 "+(GC[0]-r)+" "+GC[1]+"Z"}
/* bulb outline: an egg from x 352 to 656, centred on y 196, with a nipple at the right end */
var BULB="M352 196C352 150 372 120 410 104C470 80 560 92 612 128C640 148 652 170 656 186L688 184C702 184 708 190 708 196S702 208 688 208L656 206C652 222 640 244 612 264C560 300 470 312 410 288C372 272 352 242 352 196Z";
var NOZ=["M70 176H232","M70 216H232","M70 176C62 176 58 186 58 196S62 216 70 216","M84 182V210"];
var VALVE=["M232 166H352V226H232Z","M246 166V226M338 166V226"];
var NECK=["M244 226V270","M280 226V270"];
function storyScene(o){
  var g='',i,mob=o.mob,v;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'40 50 690 500':'30 40 700 510')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gok"><stop offset="0" stop-color="#b6c5ce" stop-opacity=".22"/><stop offset="1" stop-color="#b6c5ce" stop-opacity="0"/></radialGradient></defs>';
  g+='<circle class="halo" id="hOk" cx="'+GC[0]+'" cy="'+GC[1]+'" r="150" fill="url(#gok)"/>';
  g+='<g id="scBase">';
  g+='<g id="bulbG"><path class="wl sD" d="'+BULB+'"/><path class="wo sD" d="M392 140C430 116 490 110 540 120"/></g>';
  NOZ.forEach(function(d,k){g+='<path class="'+(k==3?'wo':'wl')+' sD" d="'+d+'"/>'});
  VALVE.forEach(function(d,k){g+='<path class="'+(k?'wo':'wl')+' sD" d="'+d+'"/>'});
  NECK.forEach(function(d){g+='<path class="wl sD" d="'+d+'"/>'});
  g+='<path class="wl sD" d="'+circ(GR)+'"/><path class="wo sD" d="'+circ(GR-10)+'"/>';
  for(v=20;v<=60;v+=5){var a=gPt(v,GR-16),b=gPt(v,GR-(v%10?23:28));g+='<path class="'+(v%10?'wo':'wl')+' sD" d="M'+f1(a[0])+' '+f1(a[1])+'L'+f1(b[0])+' '+f1(b[1])+'"/>'}
  g+='</g>';
  g+='<g id="scNum">';for(v=20;v<=60;v+=10){var p=gPt(v,GR-46);g+='<text class="n" x="'+f1(p[0])+'" y="'+f1(p[1]+5)+'" text-anchor="middle">'+v+'</text>'}g+='</g>';
  g+='<path class="band" id="gBand" d="'+gArc(20,60,GR-5)+'"/>';
  g+='<path class="gl" id="gLvl" d="'+gArc(20,60,GR-5)+'"/>';
  g+='<g id="needle"><path class="nd" d="M'+GC[0]+' '+GC[1]+'L'+(GC[0]+38)+' '+GC[1]+'"/><circle class="hub" cx="'+GC[0]+'" cy="'+GC[1]+'" r="7"/></g>';
  g+='<g id="scAir">';for(i=0;i<10;i++)g+='<circle class="air" r="2.6" cx="0" cy="196"/>';g+='</g>';
  if(!mob){
    g+='<text class="t" x="504" y="74" text-anchor="middle">BULB</text>';
    g+='<text class="t" x="66" y="156">NOZZLE</text>';
    g+='<text class="t" x="292" y="150" text-anchor="middle">VALVE</text>';
    g+='<text class="t" x="392" y="380">INTEGRAL GAUGE, mmHg</text>';
    g+='<g id="lR"><text class="t a2" x="392" y="408">20–60 mmHg, CONTROLLED</text></g>';
  }else{g+='<g id="lR"></g>'}
  var ly=mob?536:536,lx=mob?50:40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'AIR FROM THE BULB':'SQUEEZE: AIR FLOWS THROUGH THE VALVE TO THE NOZZLE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE GAUGE READS mmHg':'THE INTEGRAL GAUGE READS THE PRESSURE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'HELD AT 20–60 mmHg':'CONTROLLED DELIVERY, BETWEEN 20 AND 60 mmHg')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var lv=$("#gLvl",svg),LL=lv.getTotalLength();lv.style.strokeDasharray=LL+" "+LL;
  var E={base:dl("#scBase .sD"),air:$$("#scAir .air",svg),bulb:$("#bulbG",svg),nd:$("#needle",svg),num:$("#scNum",svg),band:$("#gBand",svg),
    hOk:$("#hOk",svg),lR:$("#lR",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.num,b);op(E.nd,b)}
    /* 1. the bulb squeezes in three slow pulses; air moves left through the valve and out of the nozzle */
    var sq=Math.max(0,Math.sin(Math.min(p,.6)/.6*Math.PI*3))*(1-sm(seg(p,.55,.6)));
    E.bulb.style.transform="scale("+(1-.06*sq).toFixed(3)+","+(1-.12*sq).toFixed(3)+")";
    var fl=b*(1-seg(p,.66,.76));
    E.air.forEach(function(el,i){var x=640-((i*62+p*2600)%600);el.setAttribute("cx",x.toFixed(1));op(el,fl*.85*(x<64||x>600||(x>232&&x<352)?0:1))});
    /* 2. the needle climbs from 20 mmHg to 44 mmHg; the level arc follows it */
    var val=20+24*sm(seg(p,.3,.62));
    E.nd.style.transform="rotate("+(-(210-(val-20)/40*240)).toFixed(2)+"deg)";
    lv.style.strokeDashoffset=(LL*(1-(val-20)/40)).toFixed(1);op(lv,b*seg(p,.28,.34));
    /* 3. the 20-60 band lights and the needle holds inside it */
    op(E.band,b*sm(seg(p,.7,.82)));op(E.hOk,b*sm(seg(p,.76,.9)));op(E.lR,b*seg(p,.74,.82));
    op(E.l1,b*seg(p,.04,.12)*(1-seg(p,.26,.32)));op(E.l2,b*seg(p,.36,.44)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}

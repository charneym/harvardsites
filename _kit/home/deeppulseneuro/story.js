/* The story scene (BL/BY/DB): DeepPulseNeuro's own endovascular route (deeppulseneuro.com: "by traveling through the
   cerebral vessels, without perforating the skull ... the EEG will be measured deep into the brain, as close as possible
   to the areas responsible for epilepsy"), as ONE continuous scene. A lateral view of the brain (its outline traced from
   the hero photograph), the intact skull around it and a simplified cerebral arterial tree (carotid, middle and anterior
   cerebral arteries). Step 1 the device enters through the neck vessel, the skull untouched. Step 2 it advances through the
   cerebral vessels toward a deep temporal target. Step 3 its contacts record and the intracranial EEG writes out below.
   Schematic, not a clinical image. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var BRAIN="M613.5 208.6L618.2 223.7L619.5 239.1L619.7 254.7L617.4 270.1L601.7 281.2L582.6 289.7L572.8 300.4L556.9 307.1L542.1 312.9L525.1 315.6L513.8 321.3L505.9 329.1L497.5 336.3L491.1 345.9L483.1 353.9L474.6 361.6L462.7 363.4L451.5 365.7L440.6 367.9L429.1 367.4L418.2 367.2L407.5 365.8L397.0 363.1L386.6 352.0L377.6 330.4L369.9 328.6L361.5 334.9L351.4 344.6L335.2 371.8L319.4 386.8L305.7 389.7L291.8 390.5L275.5 393.7L259.3 394.7L247.0 388.1L234.2 381.7L223.2 372.7L211.1 364.8L204.2 351.9L197.6 339.2L188.4 328.6L180.1 317.0L167.6 307.2L157.9 295.4L152.4 281.7L150.0 266.9L153.2 251.3L155.3 236.6L156.4 222.4L157.9 208.5L161.6 195.0L168.2 182.1L177.2 170.4L181.3 158.1L185.9 146.3L192.3 135.2L199.0 124.6L207.3 115.0L215.0 105.5L225.9 98.4L237.5 92.7L244.0 83.2L252.9 75.8L263.1 70.3L273.4 65.3L281.9 57.9L291.2 51.7L301.4 47.0L311.5 42.0L322.0 37.8L332.6 33.6L343.4 29.7L354.6 27.9L365.9 24.8L377.4 24.0L388.9 26.6L400.3 27.7L411.5 30.3L422.9 31.4L434.7 32.4L447.3 32.2L456.6 40.3L469.2 41.7L481.8 44.1L493.8 48.5L505.7 53.5L515.5 61.5L527.0 68.1L538.2 75.5L546.6 85.6L554.3 96.2L561.6 107.3L568.9 118.5L577.0 129.5L583.6 141.5L590.5 153.9L595.2 167.0L599.1 180.6L605.2 194.2Z";
var CATH="M296 520C296 470 300 430 292 400C284 372 270 350 286 330C296 318 300 310 292 302C306 299 322 294 336 289C338 300 339 311 340 322";
var VES=["M296 520C296 470 300 430 292 400C284 372 270 350 286 330C296 318 300 310 292 302",
 "M292 302C320 296 350 284 384 268C410 256 430 240 452 226",
 "M384 268C392 236 400 200 410 160","M452 226C480 206 500 188 520 170","M452 226C482 232 510 240 540 250",
 "M336 289C338 300 339 311 340 322","M410 160C416 130 430 110 452 92","M292 302C276 290 262 274 254 250C246 222 252 186 276 156C300 128 330 112 368 104"];
/* a seeded intracranial EEG: background rhythm, then spike-and-wave discharges toward the end */
var EEG=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},d="M430 470",x=430,y;
  for(var i=1;i<=150;i++){x=430+i*2.04;var k=i/150;y=470+Math.sin(i*.9)*4+Math.sin(i*.37)*3+(R()-.5)*5;
    if(k>.55&&i%14===0)y=470-22-R()*4;else if(k>.55&&i%14===1)y=470+16;
    d+="L"+x.toFixed(1)+" "+y.toFixed(1)}return d})();
function memScene(o){
  var g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="zg"><stop offset="0" stop-color="#8d9fff" stop-opacity=".55"/><stop offset="1" stop-color="#0f00ff" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="'+BRAIN+'" transform="translate(385 210) scale(1.075) translate(-385 -210)"/>';
  g+='<path class="br sD" d="'+BRAIN+'"/>';
  g+='<path class="sl sD" d="M276 290C330 270 400 236 450 221"/><path class="sl sD" d="M427 33C410 90 380 160 357 250"/><path class="sl sD" d="M392 318C450 300 520 292 590 292"/><path class="sl sD" d="M214 150C240 140 262 150 290 136"/><path class="sl sD" d="M196 214C230 200 256 214 300 196"/><path class="sl sD" d="M330 64C326 110 312 150 300 196"/><path class="sl sD" d="M480 70C470 110 476 150 500 180"/><path class="sl sD" d="M520 120C540 150 566 160 596 168"/><path class="sl sD" d="M300 330C330 318 360 312 384 300"/>';
  VES.forEach(function(v){g+='<path class="vs sD" d="'+v+'"/>'});
  g+='<path class="bl sD" d="M430 470H736"/>';
  g+='<text class="t" x="24" y="14">LATERAL VIEW · CEREBRAL VESSELS</text>';
  g+='<text class="t" x="430" y="'+(SCH-6)+'">INTRACRANIAL EEG</text>';
  g+='</g>';
  g+='<g id="zone" opacity="0"><circle cx="340" cy="322" r="46" fill="url(#zg)"/><circle class="zr" cx="340" cy="322" r="20"/><circle class="zr z2" cx="340" cy="322" r="34"/></g>';
  g+='<path id="cath" class="ct" d="'+CATH+'"/>';
  g+='<g id="tip" opacity="0"><rect class="tb" x="-11" y="-3.2" width="22" height="6.4"/><circle class="tc" cx="-6" cy="0" r="1.8"/><circle class="tc" cx="0" cy="0" r="1.8"/><circle class="tc" cx="6" cy="0" r="1.8"/></g>';
  g+='<path id="eeg" class="eg" d="'+EEG+'"/>';
  g+='<g id="lb1"><text class="a" x="430" y="420">SKULL INTACT</text></g>';
  g+='<g id="lb2"><text class="a" x="430" y="420">THROUGH THE VESSELS</text></g>';
  g+='<g id="lb3"><text class="a" x="430" y="420">EEG AT THE SOURCE</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),ct:$("#cath",svg),tip:$("#tip",svg),tc:$$("#tip .tc",svg),zone:$("#zone",svg),eg:$("#eeg",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var CL=E.ct.getTotalLength(),GL=E.eg.getTotalLength(),lastB=-1;
  E.ct.style.strokeDasharray=CL+" "+CL;E.eg.style.strokeDasharray=GL+" "+GL;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the device advances: up the neck vessel to the siphon in step 1, through the middle cerebral artery to the target in step 2 */
    var adv=.56*seg(p,.04,.3)+.44*seg(p,.36,.62),L=Math.max(.01,CL*adv);
    E.ct.style.strokeDashoffset=(CL-L).toFixed(1);op(E.ct,b);
    var a=E.ct.getPointAtLength(L),q=E.ct.getPointAtLength(Math.max(0,L-3)),ang=Math.atan2(a.y-q.y,a.x-q.x)*180/Math.PI;
    E.tip.setAttribute("transform","translate("+a.x.toFixed(1)+" "+a.y.toFixed(1)+") rotate("+ang.toFixed(1)+") translate(-8 0)");op(E.tip,b*seg(p,.02,.06));
    /* step 3: the target zone wakes, the contacts light, the EEG writes out */
    var z=seg(p,.56,.72);op(E.zone,b*z);var on=seg(p,.68,.76);E.tc.forEach(function(c){c.style.fill=on>.5?"#ffffff":"";c.style.opacity=(.55+.45*on).toFixed(2)});
    var w=seg(p,.7,.96);E.eg.style.strokeDashoffset=(GL*(1-w)).toFixed(1);op(E.eg,b*(w>0?1:0));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

/* The story scene (BL/BY/DB): how Vortex make a filter (vortexopticalcoatings.co.uk > Home, Our History, Dicing), drawn
   as ONE bench kept on screen for all three steps, every part outlined from the start so the frame is never empty:
   Step 1 (Design): the customer's spectrum, a passband mask on a 300-6000 nm axis (centre wavelength, bandwidth,
   blocking).  Step 2 (Coat): the sputter target lays down alternating high- and low-index layers on the substrate, and
   the measured transmission curve rises into the mask.  Step 3 (Dice): the coated wafer, seen face-on, is diced into
   1.0 x 1.0 mm parts. Labels keep >= 8px clear of every stroke (DR.3). */
var SCW=760,SCH=520;
function vxScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="vxSp" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7a4fc4"/><stop offset=".05" stop-color="#3b7cf0"/><stop offset=".1" stop-color="#22b4c0"/><stop offset=".14" stop-color="#7fd16a"/><stop offset=".18" stop-color="#f2d15a"/><stop offset=".22" stop-color="#f08a3c"/><stop offset=".27" stop-color="#d8344a"/><stop offset=".4" stop-color="#7a2440"/><stop offset="1" stop-color="#3a2a36"/></linearGradient>'+
    '<radialGradient id="vxWf" cx=".38" cy=".34" r=".8"><stop offset="0" stop-color="#ea8fc8" stop-opacity=".55"/><stop offset=".55" stop-color="#c4338f" stop-opacity=".32"/><stop offset="1" stop-color="#7a4fc4" stop-opacity=".28"/></radialGradient>'+
    '<clipPath id="vxClW"><circle cx="600" cy="392" r="86"/></clipPath></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"SCHEMATIC":"SPECTRUM, COATING AND WAFER, SCHEMATIC")+'</text>';
  /* the chart */
  g+='<path class="ax sD" d="M60 66V230H720"/>';
  g+='<rect class="spb" x="60" y="238" width="660" height="4"/>';
  g+='<text class="t" x="60" y="268">300 nm</text><text class="t" x="720" y="268" text-anchor="end">6000 nm</text>';
  if(!mob)g+='<text class="t" x="74" y="80">TRANSMISSION</text>';
  /* the mask (step 1): blocking either side, the passband window */
  g+='<g id="vxMask"><path class="msk" d="M330 214V96H404V214"/><path class="blk" d="M72 214H322M412 214H712"/>'+
     '<text class="t s1" x="'+(mob?"424":"420")+'" y="112">'+(mob?"CWL":"CENTRE WAVELENGTH")+'</text>'+
     (mob?'':'<text class="t" x="420" y="134">BANDWIDTH · BLOCKING</text>')+'</g>';
  /* the measured curve (step 2) */
  g+='<path id="vxCv" class="cv" d="M62 226C200 226 290 225 318 222C328 220 330 150 336 108C340 98 346 100 352 101C360 102 372 99 382 101C392 103 396 104 398 110C404 150 406 220 416 222C450 226 600 226 718 226"/>';
  /* the cross-section: target, layers, substrate */
  g+='<rect class="tgt sD" x="60" y="300" width="270" height="12"/>';
  g+='<g id="vxDep">';for(i=0;i<9;i++){var x=78+i*30;g+='<path class="dep" d="M'+x+' 320V366"/>'}g+='</g>';
  g+='<g id="vxLay">';for(i=0;i<12;i++){g+='<rect class="ly '+(i%2?"lo":"hi")+'" x="60" y="'+(426-(i+1)*4.5).toFixed(1)+'" width="270" height="4.5"/>'}g+='</g>';
  g+='<rect class="sub sD" x="60" y="426" width="270" height="44"/>';
  if(!mob)g+='<g id="vxXL"><text class="t" x="346" y="310">TARGET</text><text class="t s1" x="346" y="404">LAYERS</text><text class="t" x="346" y="452">SUBSTRATE</text></g>';
  /* the wafer (step 3) */
  g+='<circle class="waf" cx="600" cy="392" r="86"/><circle class="wafe sD" cx="600" cy="392" r="86"/>';
  g+='<g clip-path="url(#vxClW)" id="vxDice">';for(i=0;i<11;i++){var q=514+i*16+4;g+='<path class="dc" d="M'+q+' 300V484"/><path class="dc" d="M508 '+(306+i*16+4)+'H692"/>'}g+='</g>';
  g+='<g id="vxDL"><text class="t s1" x="600" y="'+(mob?"510":"504")+'" text-anchor="middle">1.0 × 1.0 mm</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · DESIGN</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · COAT</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · DICE</text></g>';
  return g+'</svg>';
}
function scene(){return vxScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),cv:dl("#vxCv"),dc:dl("#vxDice .dc"),mask:$("#vxMask",svg),dep:$("#vxDep",svg),lay:$$("#vxLay .ly",svg),
    waf:$(".waf",svg),spb:$(".spb",svg),xl:$("#vxXL",svg),dL:$("#vxDL",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),tt:$$("text.t",svg).filter(function(t){return !t.closest("g")})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tt.forEach(function(t){op(t,b)});op(E.spb,b);op(E.xl,b)}
    /* step 1: the mask */
    op(E.mask,b*(.35+.65*seg(p,.03,.12)));
    /* step 2: deposition, the layers build, the curve rises into the mask */
    op(E.dep,b*seg(p,.36,.42)*(1-seg(p,.62,.68)));
    var n=E.lay.length;E.lay.forEach(function(r,i){op(r,b*(.12+.88*seg(p,.38+i*.018,.41+i*.018)))});
    draw(E.cv,b*seg(p,.4,.62));
    /* step 3: the coated wafer, diced */
    op(E.waf,b*(.3+.7*seg(p,.66,.74)));
    draw(E.dc,b*seg(p,.72,.88));
    op(E.dL,b*seg(p,.84,.92));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.31,.36)));op(E.l2,b*seg(p,.36,.44)*(1-seg(p,.63,.68)));op(E.l3,b*seg(p,.68,.76));
  };
}

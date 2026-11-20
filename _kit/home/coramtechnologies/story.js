/* the story scene (BL/BY/DB): ONE engraved elevation of an MRI suite, drawn in fine line, with an ECG strip beneath it.
   The delay: the patient is in arrest (VF on the strip) and must be taken out of the scanner to a defibrillator outside the
   suite. The device: Coram's non-magnetic defibrillator stands beside the scanner, its pads already on the chest under the
   surface coil. The waveform: the strip draws the ramped kilohertz rHFAC pulse, then the biphasic shock, then sinus rhythm.
   Facts from Coram's case study and the NHLBI STTR abstract. Lines draw on scroll; labels fade in with their step. */
function crmScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,M=o.mob,gy=330;
  g+='<svg class="'+(M?"mob":"")+'" viewBox="'+o.vb+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* room: floor, ceiling line, wall panel seams */
  g+='<path class="sD gr" d="M0 '+gy+'H800"/><path class="sD neat" d="M0 36H800"/>';
  var ps='';for(i=0;i<9;i++){ps+='M'+(12+i*98)+' 40V'+(gy-4)}g+='<path class="sD ht" d="'+ps+'"/>';
  var fh='';for(i=0;i<80;i++){fh+='M'+(6+i*10)+' '+(gy+4)+'l-8 9'}g+='<path class="sD ht" d="'+fh+'"/>';
  /* the scanner gantry, side elevation: rounded shell, the bore as hidden lines, the flared mouth, the teal trim band */
  var gx0=318,gx1=508,gt=72,gb=gy-2,bc=212,br=46;
  g+='<path class="sD bl" d="M'+gx0+' '+(gt+34)+'Q'+gx0+' '+gt+' '+(gx0+34)+' '+gt+'H'+(gx1-34)+'Q'+gx1+' '+gt+' '+gx1+' '+(gt+34)+'V'+gb+'H'+gx0+'V'+(bc+br+16)+'Q'+(gx0+16)+' '+(bc+br)+' '+(gx0+34)+' '+(bc+br)+'M'+gx0+' '+(bc-br-16)+'V'+(gt+34)+'"/>';
  g+='<path class="sD bl" d="M'+gx0+' '+(bc-br-16)+'Q'+(gx0+16)+' '+(bc-br)+' '+(gx0+34)+' '+(bc-br)+'"/>';
  g+='<path class="sD hid" d="M'+(gx0+34)+' '+(bc-br)+'H'+(gx1-26)+'Q'+gx1+' '+(bc-br)+' '+gx1+' '+(bc-br-18)+'M'+(gx0+34)+' '+(bc+br)+'H'+(gx1-26)+'Q'+gx1+' '+(bc+br)+' '+gx1+' '+(bc+br+18)+'"/>';
  g+='<path class="sD ac" d="M'+(gx0+8)+' '+(gt+8)+'V'+(bc-br-22)+'M'+(gx0+8)+' '+(bc+br+22)+'V'+(gb-10)+'"/>';
  g+='<path class="sD kb" d="M'+(gx0+70)+' '+(gt+2)+'V'+(bc-br-2)+'M'+(gx0+70)+' '+(bc+br+2)+'V'+gb+'M'+(gx1-50)+' '+(gt+2)+'V'+(bc-br-2)+'M'+(gx1-50)+' '+(bc+br+2)+'V'+gb+'"/>';
  var gh='';for(i=0;i<14;i++){var hx=gx0+80+i*7.5;gh+='M'+f(hx)+' '+(gt+8)+'l-6 10'}for(i=0;i<14;i++){var hx2=gx0+80+i*7.5;gh+='M'+f(hx2)+' '+(gb-14)+'l-6 10'}g+='<path class="sD ht" d="'+gh+'"/>';
  g+='<rect class="sD kb" x="'+(gx0+20)+'" y="'+(gt+22)+'" width="30" height="10"/>';
  /* the table: top running into the bore, pedestal, foot */
  var ty=bc+18;
  g+='<path class="sD bl" d="M96 '+ty+'H'+(gx1-12)+'M96 '+(ty+10)+'H'+(gx0-2)+'M96 '+ty+'V'+(ty+10)+'"/>';
  g+='<path class="sD bl" d="M150 '+(ty+10)+'V'+(gy-14)+'M272 '+(ty+10)+'V'+(gy-14)+'M126 '+(gy-14)+'H296V'+gy+'M126 '+(gy-14)+'V'+gy+'"/>';
  var th='';for(i=0;i<16;i++){th+='M'+(158+i*7.5)+' '+(ty+16)+'l-6 10'}g+='<path class="sD ht" d="'+th+'"/><path class="sD kb" d="M160 '+(ty+40)+'H262M160 '+(ty+64)+'H262"/>';
  /* the patient, head first into the bore, under a blanket line; the chest coil over the torso */
  var pt=ty-1;
  g+='<path class="sD bl" d="M106 '+pt+'C106 '+(pt-14)+' 112 '+(pt-16)+' 118 '+(pt-12)+'C150 '+(pt-10)+' 190 '+(pt-12)+' 232 '+(pt-16)+'C262 '+(pt-20)+' 290 '+(pt-26)+' 322 '+(pt-26)+'C350 '+(pt-26)+' 372 '+(pt-24)+' 384 '+(pt-18)+'"/>';
  g+='<path class="sD bl" d="M388 '+pt+'C386 '+(pt-24)+' 404 '+(pt-34)+' 420 '+(pt-30)+'C434 '+(pt-27)+' 438 '+(pt-12)+' 434 '+pt+'"/>';
  g+='<path class="sD kb" d="M276 '+(pt-24)+'C292 '+(pt-40)+' 352 '+(pt-40)+' 370 '+(pt-22)+'"/>';
  g+='<text class="t tb" x="0" y="'+(gy+30)+'">ELEVATION · THE MRI SUITE</text><text class="t s tb" x="800" y="'+(gy+30)+'" text-anchor="end">NHLBI STTR · R42 HL166051</text>';
  g+='<text class="t" x="'+(gx0+95)+'" y="'+(gt-12)+'" text-anchor="middle">MAGNET</text>';
  /* the ECG strip: paper grid, a baseline */
  var sy=gy+48,sh=96;
  var gd='';for(i=0;i<=40;i++){gd+='M'+(i*20)+' '+sy+'V'+(sy+sh)}for(i=0;i<=4;i++){gd+='M0 '+(sy+i*24)+'H800'}
  g+='<path class="sD ht" d="'+gd+'"/><path class="sD neat" d="M0 '+sy+'H800M0 '+(sy+sh)+'H800"/>';
  g+='</g>';
  var my=sy+sh/2;
  /* 1 · the delay: VF on the strip; the route out of the scanner to a defibrillator outside the suite */
  g+='<g id="sc1"><g id="sc1v">';
  var vf='M0 '+my;for(i=0;i<=200;i++){var x=i*4,a=14+7*Math.sin(i*.13)+5*Math.sin(i*.41);vf+='L'+x+' '+f(my+Math.sin(i*1.05+Math.sin(i*.31)*1.6)*a)}
  g+='<path class="dr vf" d="'+vf+'"/><text class="t a" x="8" y="'+(sy+14)+'">VENTRICULAR FIBRILLATION</text><text class="t" x="792" y="'+(sy+14)+'" text-anchor="end">−10–12% SURVIVAL PER MINUTE OF DELAY</text></g>';
  g+='<g id="sc1r"><path class="dr rt" d="M120 '+(ty-34)+'C100 '+(ty-90)+' 60 '+(ty-92)+' 40 '+(ty-60)+'"/><path class="dr rt" d="M34 '+(ty-72)+'L40 '+(ty-58)+'L52 '+(ty-68)+'"/>';
  g+='<rect class="dr" x="6" y="'+(ty-46)+'" width="44" height="30"/><path class="dr" d="M12 '+(ty-31)+'h8l4-8l5 14l4-6h11"/>';
  g+='<text class="t a" x="6" y="'+(ty-112)+'">OUT OF THE SCANNER</text><text class="t" x="6" y="'+(ty-98)+'">TO A DEFIBRILLATOR</text>';
  g+='</g></g>';
  /* 2 · the device: the non-magnetic defibrillator on its cart beside the scanner, the RF filter, pads already on */
  var cx=600;
  g+='<g id="sc2">';
  g+='<path class="dr fig" d="M'+cx+' '+(gy-174)+'h112v66h-112z"/><path class="dr kb2" d="M'+(cx+10)+' '+(gy-166)+'h58v44h-58z"/>';
  g+='<path class="dr ecg" d="M'+(cx+12)+' '+(gy-142)+'h12l4-10l5 18l4-8h21"/><circle class="dr acf" cx="'+(cx+90)+'" cy="'+(gy-140)+'" r="9"/><path class="dr kb2" d="M'+(cx+16)+' '+(gy-174)+'v-10h80v10"/>';
  g+='<path class="dr bl2" d="M'+(cx-8)+' '+(gy-108)+'h128M'+(cx+56)+' '+(gy-108)+'V'+(gy-16)+'M'+(cx-4)+' '+(gy-16)+'h120M'+(cx+10)+' '+(gy-62)+'h92v28h-92z"/>';
  g+='<circle class="dr bl2" cx="'+(cx+4)+'" cy="'+(gy-7)+'" r="7"/><circle class="dr bl2" cx="'+(cx+108)+'" cy="'+(gy-7)+'" r="7"/>';
  g+='<path class="dr fig" d="M'+(cx-62)+' '+(gy-12)+'h34v12h-34z"/>';
  g+='<path class="dr cab" d="M'+cx+' '+(gy-150)+'C'+(cx-30)+' '+(gy-150)+' '+(cx-20)+' '+(gy-12)+' '+(cx-28)+' '+(gy-6)+'M'+(cx-62)+' '+(gy-6)+'C'+(cx-140)+' '+(gy-6)+' 330 '+(gy-4)+' 300 '+(gy-6)+'C286 '+(gy-8)+' 290 '+(ty+12)+' 296 '+(ty-6)+'C300 '+(ty-18)+' 306 '+(pt-30)+' 318 '+(pt-27)+'"/>';
  g+='<path class="dr acf" d="M310 '+(pt-31)+'h16v5h-16zM336 '+(pt-30)+'h16v5h-16z"/>';
  g+='<text class="t a" x="796" y="'+(gy-218)+'" text-anchor="end">NON-MAGNETIC DEFIBRILLATOR</text><text class="t" x="796" y="'+(gy-202)+'" text-anchor="end">MRI-CONDITIONAL</text>';
  g+='<text class="t" x="'+(cx-45)+'" y="'+(gy-22)+'" text-anchor="middle">RF FILTER</text>';
  g+='<text class="t a" x="170" y="'+(pt-70)+'">PADS ON</text><text class="t a" x="170" y="'+(pt-56)+'">BEFORE THE SCAN</text></g>';
  /* 3 · the waveform: ramped kHz rHFAC, then the biphasic shock, then sinus rhythm */
  g+='<g id="sc3">';
  var w3='M0 '+my+'H150';for(i=0;i<=240;i++){var x3=150+i*1.25,amp=Math.min(1,i/170)*25;w3+='L'+f(x3)+' '+f(my-Math.sin(i*1.3)*amp)}
  w3+='L452 '+my+'H462V'+(my-38)+'H482V'+(my+30)+'H500V'+my+'H540';
  for(i=0;i<4;i++){var sx=540+i*64;w3+='h10l4-8l4 8h4l3 6l5-38l5 46l4-14h6q8-12 14 0h5'}
  g+='<path class="dr wv" d="'+w3+'"/>';
  g+='<text class="t a" x="150" y="'+(sy+14)+'">rHFAC · RAMPED kHz PULSE</text><text class="t a" x="504" y="'+(sy+14)+'">BIPHASIC</text><text class="t" x="560" y="'+(sy+sh-8)+'">SINUS RHYTHM</text>';
  g+='<path class="dr rlx" d="M6 104H200"/><text class="t" x="6" y="96">MUSCLES RELAXED, LESS MOTION</text></g>';
  g+='</svg>';
  return g;
}
function scene(){
  if(MOBILE())return crmScene({mob:1,vb:"0 20 800 456"});
  return crmScene({vb:"0 20 800 456"});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),g1:$("#sc1",svg),v1:$("#sc1v",svg),r1:$("#sc1r",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.2),s2=seg(p,.34,.58),s3=seg(p,.67,.92);
    E.g1.style.opacity=b.toFixed(3);draw(E.d1,Math.max(s1,.35));
    E.r1.style.opacity=(1-s2).toFixed(3);E.v1.style.opacity=(1-s3).toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
  };
}

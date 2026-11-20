/* the story scene (DB): ONE engraved plate of the three things Friedreich's ataxia damages and what QTE therapy did in
   FRDAkd mice (NIH 1R41NS143585 / 1R21TR005475 abstracts). A mitochondrion in section (outer membrane, cristae), the heart
   with a trace beneath it, and a neuron with its myelinated axon. Step 1 iron builds up in the matrix and only a few target
   proteins remain, heart and neuron dashed (degenerating); step 2 the target proteins return along the inner membrane;
   step 3 the iron clears, the heart outline and its trace draw solid; step 4 the neuron draws solid and a signal runs its axon. */
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var i,x;
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* mitochondrion: outer membrane (capsule), inner membrane, cristae folds alternating from top and bottom */
  g+='<path class="sD mt" d="M180 150H420A100 100 0 0 1 420 350H180A100 100 0 0 1 180 150Z"/>';
  var cr='M186 164H414A86 86 0 0 1 414 336H186A86 86 0 0 1 186 164Z';
  for(x=150;x<=450;x+=50){var top=((x-150)/50)%2===0;
    if(top)cr+='M'+x+' '+(x<170||x>430?190:164)+'V262a9 9 0 0 0 18 0V'+(x<170||x>430?190:164);
    else cr+='M'+x+' '+(x<170||x>430?310:336)+'V238a9 9 0 0 1 18 0V'+(x<170||x>430?310:336)}
  g+='<path class="sD cr" d="'+cr+'"/>';
  g+='<text x="84" y="128" class="t">MITOCHONDRION · NERVE AND HEART CELLS</text>';
  /* matrix stipple */
  var stp='';for(i=0;i<200;i++){var px=110+((i*137)%380),py=178+((i*71)%144);stp+='M'+px+' '+py+'h1.4'}
  g+='<path class="stp" d="'+stp+'"/>';
  /* the heart: dashed (base) */
  var HP='M660 262C598 222 566 180 576 142C586 106 632 100 660 132C688 100 734 106 744 142C754 180 722 222 660 262Z M646 116C640 94 646 78 656 64 M674 114C678 92 692 80 708 76 M628 140C640 170 660 190 690 204';
  g+='<path class="hdsh" d="'+HP+'"/>';
  g+='<text x="580" y="52" class="t">HEART</text>';
  /* the trace under the heart: flat line (base) */
  g+='<path class="hdsh" d="M560 330H780"/>';
  /* the neuron: soma, dendrites, myelinated axon, terminals (dashed base) */
  var NP='M112 470m-16 0a16 16 0 1 0 32 0a16 16 0 1 0 -32 0 M98 460L70 436L58 440M70 436L66 418M100 480L74 500L62 498M74 500L72 516M110 454L106 428L94 418M106 428L118 414 M128 470H760 M760 470L782 452M760 470L784 470M760 470L780 490';
  var MY='';for(x=160;x<720;x+=70)MY+='M'+x+' 462h46v16h-46Z';
  g+='<path class="hdsh" d="'+NP+MY+'"/>';
  g+='<text x="58" y="400" class="t">NEURON</text>';
  g+='<g class="tb"><text x="26" y="540" class="t">QTE THERAPY IN FRDAKD MICE · SCHEMATIC</text>'+
     '<circle class="fe" cx="560" cy="536" r="3.4"/><text x="570" y="540" class="t">IRON</text>'+
     '<path class="fx" d="M640 530l5.2 3v6l-5.2 3l-5.2 -3v-6Z"/><text x="652" y="540" class="t">TARGET PROTEIN</text></g>';
  g+='</g>';
  /* iron in the matrix */
  var fe='';for(i=0;i<40;i++){var fx=118+((i*97)%364),fy=184+((i*53)%132);fe+='<circle class="fe" cx="'+fx+'" cy="'+fy+'" r="3.4"/>'}
  g+='<g id="fe">'+fe+'</g>';
  /* target proteins along the inner membrane */
  var pr='';for(i=0;i<18;i++){var top2=i%2===0,px2=170+i*15.5,py2=top2?171:329;pr+='<path class="fx" d="M'+px2.toFixed(1)+' '+(py2-6)+'l5.2 3v6l-5.2 3l-5.2 -3v-6Z"/>'}
  g+='<g id="fx">'+pr+'</g>';
  /* solid heart, trace, neuron (drawn on later steps) */
  g+='<path id="heartS" class="so dr" d="'+HP+'"/>';
  g+='<path id="ecg" class="so dr" d="M560 330H604l8 -7l7 7H632l6 10l9 -58l9 66l6 -18H694l10 -12l10 12H780"/>';
  g+='<path id="nrS" class="so dr" d="'+NP+MY+'"/>';
  g+='<circle id="spk" class="spk" cx="128" cy="470" r="6"/>';
  /* step captions */
  g+='<text id="cap1" x="26" y="52" class="a">TOO LITTLE FRATAXIN · IRON BUILDS UP</text>';
  g+='<text id="cap2" x="26" y="52" class="a">FRDA TARGET PROTEINS ENHANCED</text>';
  g+='<text id="cap3" x="26" y="52" class="a">LESS IRON · BETTER CARDIAC FUNCTION</text>';
  g+='<text id="cap4" x="26" y="52" class="a">SURVIVAL DRAMATICALLY INCREASED</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase text, #scBase .stp, #scBase .hdsh",svg),
    fe:$$("#fe circle",svg),fx:$$("#fx path",svg),heart:dl("#heartS"),ecg:dl("#ecg"),nr:dl("#nrS"),spk:$("#spk",svg),
    cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 1: iron accumulates in the matrix (staggered); step 3: it clears */
    var n=E.fe.length;E.fe.forEach(function(c,k){var on=Math.min(1,Math.max(0,s1*1.6-k/n*.6)),off=Math.min(1,Math.max(0,s3*1.5-(k%5)*.1));c.style.opacity=(b*(.15+.85*on)*(1-off*.92)).toFixed(3)});
    /* target proteins: a few at first, all of them on step 2 */
    var m=E.fx.length;E.fx.forEach(function(el,k){var base=(k%6===0)?.85:0,up=Math.min(1,Math.max(0,s2*1.5-k/m*.5));el.style.opacity=(b*Math.max(base,up)).toFixed(3)});
    /* step 3: the heart and its trace draw solid */
    draw(E.heart,s3);draw(E.ecg,s3);
    /* step 4: the neuron draws solid, and a signal travels its axon */
    draw(E.nr,s4);var q=(p*6)%1;E.spk.setAttribute("cx",(128+632*q).toFixed(1));E.spk.style.opacity=(s4>.6?Math.sin(Math.PI*q)*(s4-.6)/.4:0).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}

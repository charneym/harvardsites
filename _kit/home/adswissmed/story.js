/* the story scene (BL/BY/DB): ONE schematic of focal vibration, drawn as a fine-line anatomical section and kept on screen for all
   three steps: the Vibra applicator resting on the skin over a muscle belly (fibres converging on their tendons), a muscle spindle
   inside it, and a cross-section of the spinal cord to the right.
   Step 1 (the vibration): vibration rings spread from the applicator through the skin into the muscle.
   Step 2 (the spindle): the spindle lights and its Ia fibre carries the signal to the spinal cord.
   Step 3 (the reflex): the motor nerve answers from the cord to the muscle, and the muscle fibres take up tone.
   Source: adswissmed.com/products/vibra-3.0-physio ("stimulates the Ia fibres of the neuromuscular spindles, inducing a local
   increase in muscle tone (Tonic Vibratory Reflex)"; spasticity "at the levels of both the spine and cortex"). Schematic. */
function scene(){
  var mob=MOBILE(),g='',k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'16 4 704 384':'10 0 720 380')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="adSp" cx="50%" cy="50%" r="60%"><stop offset="0" stop-color="#dadfff"/><stop offset="1" stop-color="#8d97ee" stop-opacity=".25"/></radialGradient></defs>';
  /* base: skin, subcutis, muscle belly with fibres and tendons, spindle outline, spinal cord, applicator */
  var fib='';for(k=-4;k<=4;k++){var d=k*16,e=Math.abs(k)*5;fib+='M'+(64+e)+' 232C160 '+(232+d)+' 420 '+(232+d)+' '+(516-e)+' 232'}
  var MU='M60 232C140 158 430 158 520 232C430 306 140 306 60 232Z';
  var SP='M268 214C284 205 316 205 332 214C316 223 284 223 268 214Z';
  var coil='M288 214';for(k=0;k<6;k++){coil+='c1.5 -7 3.5 -7 4 0'}
  var CO='M640 184C672 184 692 206 692 234C692 262 672 282 640 282C608 282 588 262 588 234C588 206 608 184 640 184Z';
  var GM='M640 228C634 214 626 202 618 194C612 192 610 198 614 206C618 216 620 224 612 232C604 240 604 256 614 264C622 270 632 264 640 250C648 264 658 270 666 264C676 256 676 240 668 232C660 224 662 216 666 206C670 198 668 192 662 194C654 202 646 214 640 228Z';
  g+='<g id="scBase">'+
     '<path class="sD sk" d="M40 122C200 116 380 116 540 122"/><path class="sD sc" d="M40 142C200 137 380 137 540 142"/>'+
     '<path class="sD mu" d="'+MU+'"/><path class="sD mf" d="'+fib+'"/><path class="sD td" d="M28 232H60M520 232H552"/>'+
     '<path class="sD spo" d="'+SP+'"/>'+
     '<path class="sD co" d="'+CO+'"/><path class="sD gm" d="'+GM+'"/>'+
     '<path class="sD ap" d="M222 62L229 112H271L278 62Z"/><path class="sD ap" d="M214 50H286V62H214Z"/><path class="sD tb" d="M250 50C250 26 300 16 380 18"/>'+
     (mob?'<text class="a" x="298" y="72">APPLICATOR</text>':'<text class="a" x="204" y="92" text-anchor="end">APPLICATOR</text>')+
     '<text class="a" x="44" y="106">SKIN</text>'+
     '<text class="a" x="72" y="'+(mob?318:312)+'">MUSCLE</text>'+
     '<text class="a" x="640" y="'+(mob?318:312)+'" text-anchor="middle">SPINAL CORD</text>'+
     '</g>';
  /* step 1: focal vibration rings from the applicator into the tissue */
  var rings='';[16,30,44,58].forEach(function(r){rings+='M'+(250-r)+' 118A'+r+' '+r+' 0 0 0 '+(250+r)+' 118'});
  g+='<g id="st1"><path class="sD1 vr" d="'+rings+'"/>'+
     '<text class="a" x="330" y="104">FOCAL VIBRATION</text></g>';
  /* step 2: the spindle and its Ia fibre to the dorsal horn */
  g+='<g id="st2"><path class="spf" d="'+SP+'"/><path class="sD2 cl" d="'+coil+'"/>'+
     '<path class="sD2 ia" d="M300 210C350 186 430 168 510 172C566 175 600 192 622 212"/>'+
     '<path class="sD2 ld" d="M300 222V'+(mob?326:332)+'"/>'+
     '<text class="a" x="310" y="'+(mob?346:348)+'">MUSCLE SPINDLE</text>'+
     '<text class="a" x="470" y="'+(mob?150:156)+'" text-anchor="middle">Ia FIBRE</text></g>';
  /* step 3: the motor nerve back to the muscle; the fibres take up tone */
  g+='<g id="st3"><path class="mfa" d="'+fib+'"/>'+
     '<path class="sD3 mn" d="M630 256C604 304 520 332 432 324C398 320 380 304 378 276"/><path class="sD3 ep" d="M368 274H388"/>'+
     '<text class="a" x="'+(mob?592:556)+'" y="'+(mob?374:350)+'" text-anchor="middle">MOTOR NERVE</text>'+
     '<text class="a tn" x="72" y="'+(mob?342:334)+'">TONE ↑</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),
    c1:dl("#st1 .sD1"),c2:dl("#st2 .sD2"),c3:dl("#st3 .sD3"),mfa:$("#st3 .mfa",svg),spf:$("#st2 .spf",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the rings stay on through the spindle step (the vibration keeps running), then the reflex completes the loop */
    var i1=seg(p,0,.12),i2=seg(p,.3,.5),i3=seg(p,.64,.86);
    op(E.s1,b*i1);draw(E.c1,i1);
    op(E.s2,b*i2);draw(E.c2,i2);op(E.spf,i2);
    op(E.s3,b*Math.min(1,i3*5));draw(E.c3,i3);op(E.mfa,i3);
  };
}

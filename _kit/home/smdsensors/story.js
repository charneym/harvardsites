/* the story scene (BL/BY/DB): ONE binocular-beam load cell drawn as an engraved side elevation and kept on screen for all three
   steps: the steel element bolted to a support at the left, its twin holes and slot leaving two thin webs, a gauge over each web.
   Step 1 (the load): a force arrow draws onto the free end, the deflected outline is ghosted, tension and compression marked.
   Step 2 (the film): a detail circle shows the sputtered thin-film gauge grid and its pads.
   Step 3 (the bridge): the four gauges as a Wheatstone bridge, excitation in, signal out to a conditioner (4-20 mA, 0-5 V, I2C).
   Sources: smdsensors.com (about-us, investment-and-growth, the strain-gauge blog post, signal conditioning). Schematic.
   Driven by the scrubbed story progress. */
function zig(x0,y0,x1,y1,n,a){var dx=x1-x0,dy=y1-y0,L=Math.sqrt(dx*dx+dy*dy),ux=dx/L,uy=dy/L,nx=-uy,ny=ux,f=function(v){return v.toFixed(1)};
  var s=L*.3,e=L*.7,d='M'+f(x0)+' '+f(y0)+'L'+f(x0+ux*s)+' '+f(y0+uy*s);
  for(var i=1;i<=n;i++){var t=s+(e-s)*(i-.5)/n,k=(i%2?1:-1)*a;d+='L'+f(x0+ux*t+nx*k)+' '+f(y0+uy*t+ny*k)}
  d+='L'+f(x0+ux*e)+' '+f(y0+uy*e)+'L'+f(x1)+' '+f(y1);return d}
function scene(){
  var mob=MOBILE(),g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'50 20 640 500':'20 20 700 500')+'" aria-hidden="true">';
  g+='<defs><clipPath id="smHc"><rect x="70" y="166" width="40" height="148"/></clipPath><clipPath id="smC1"><circle cx="190" cy="96" r="62"/></clipPath></defs>';
  /* base plate: support with hatching, the beam outline, twin holes and slot, mounting bolts (hidden lines), gauge pads, centre line */
  g+='<g id="scBase">';
  var hat='';for(i=-150;i<=40;i+=10)hat+='M'+(70+i)+' 314L'+(70+i+148)+' 166';
  g+='<g clip-path="url(#smHc)"><path class="hat" d="'+hat+'"/></g><path class="sD sp" d="M110 166V314M70 166H110M70 314H110"/>';
  g+='<path class="sD bm" d="M110 200H610V280H110"/>';
  g+='<path class="sD bm" d="M335.04 233A26 26 0 1 0 335.04 247H384.96A26 26 0 1 0 384.96 233Z"/>';
  g+='<path class="sD hid" d="M138 200V280M162 200V280M558 200V280M582 200V280"/>';
  g+='<path class="sD cl" d="M96 240H632"/>';
  g+='<rect class="gpad" x="294" y="195" width="32" height="5"/><rect class="gpad" x="394" y="195" width="32" height="5"/>';
  g+='<rect class="gpad" x="294" y="280" width="32" height="5"/><rect class="gpad" x="394" y="280" width="32" height="5"/>';
  g+='<text class="a" x="'+(mob?520:540)+'" y="318" text-anchor="middle">STEEL ELEMENT</text>';
  var gT=[360,350],gR=[432,418],gB=[360,486],gL=[288,418];
  g+='<g class="ghost"><path d="'+zig(gT[0],gT[1],gR[0],gR[1],6,5)+zig(gR[0],gR[1],gB[0],gB[1],6,5)+zig(gB[0],gB[1],gL[0],gL[1],6,5)+zig(gL[0],gL[1],gT[0],gT[1],6,5)+'"/>'+
     '<path d="M360 350V336H190M360 486V500H190M432 418H520M288 418H262V470H540V444M520 396H664V444H520Z"/><circle cx="190" cy="96" r="62"/></g>';
  g+='</g>';
  /* step 1: the load */
  g+='<g id="st1"><path class="sD1 dfl" d="M110 200C300 202 470 208 610 216V296C470 288 300 282 110 280"/>'+
     '<path class="sD1 ar" d="M570 82V188"/><path class="arh" d="M562 176 570 194 578 176Z"/>'+
     '<text class="a" x="586" y="104">LOAD</text>'+
     '<path class="sD1 tk" d="M290 184H330M290 184l7-5M290 184l7 5M330 184l-7-5M330 184l-7 5"/>'+
     '<path class="sD1 tk" d="M390 179l8 5-8 5M430 179l-8 5 8 5M398 184H406M422 184H414"/>'+
     '<text class="a" x="300" y="158" text-anchor="middle">TENSION</text><text class="a" x="440" y="158" text-anchor="middle">COMPRESSION</text></g>';
  /* step 2: the thin-film gauge, in detail */
  var ser='M150 96V74';for(i=0;i<9;i++){var x0=150+i*10;ser+='H'+(x0+10)+'V'+(i%2?74:118)}ser+='V96';
  ser='M148 96H150V74';for(i=0;i<9;i++){var xa=150+i*10;ser+=(i%2?'V74':'V118')+'H'+(xa+10)}ser+='V96H242';
  g+='<g id="st2"><path class="sD2 cn" d="M238 138L298 192"/>'+
     '<circle class="ring" cx="190" cy="96" r="62"/>'+
     '<g clip-path="url(#smC1)"><rect class="film" x="128" y="34" width="124" height="124"/><path class="sD2 ser" d="'+ser+'"/>'+
     '<rect class="pad2" x="136" y="88" width="12" height="16"/><rect class="pad2" x="242" y="88" width="12" height="16"/></g>'+
     '<text class="a" x="272" y="66">THIN-FILM GAUGE</text><text class="a" x="272" y="88">SPUTTERED ON STEEL</text></g>';
  /* step 3: the Wheatstone bridge and the signal out */
  var T=[360,350],R=[432,418],B=[360,486],L=[288,418];
  g+='<g id="st3"><path class="sD3 br" d="'+zig(T[0],T[1],R[0],R[1],6,5)+'"/><path class="sD3 br" d="'+zig(R[0],R[1],B[0],B[1],6,5)+'"/>'+
     '<path class="sD3 br" d="'+zig(B[0],B[1],L[0],L[1],6,5)+'"/><path class="sD3 br" d="'+zig(L[0],L[1],T[0],T[1],6,5)+'"/>'+
     '<path class="sD3 wr" d="M360 350V336H190M360 486V500H190"/><path class="sD3 wr" d="M432 418H520M288 418H262V460H500V430H520"/>'+
     '<path class="sD3 bx" d="M520 396H664V444H520Z"/>'+
     '<circle class="nd" cx="360" cy="350" r="3.5"/><circle class="nd" cx="432" cy="418" r="3.5"/><circle class="nd" cx="360" cy="486" r="3.5"/><circle class="nd" cx="288" cy="418" r="3.5"/>'+
     '<text class="a" x="190" y="322">EXCITATION</text>'+
     '<text class="a" x="592" y="425" text-anchor="middle">SIGNAL OUT</text>'+
     '<text class="a" x="'+(mob?684:592)+'" y="502" text-anchor="'+(mob?"end":"middle")+'">4–20 mA · 0–5 V · I²C</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .hat, #scBase .gpad, #scBase .ghost",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),
    c1:dl("#st1 .sD1"),c2:dl("#st2 .sD2"),c3:dl("#st3 .sD3")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var i1=seg(p,0,.1),o1=seg(p,.31,.36),i2=seg(p,.35,.45),o2=seg(p,.64,.69),i3=seg(p,.68,.88);
    op(E.s1,b*i1*(1-o1));draw(E.c1,i1);
    op(E.s2,b*i2*(1-o2));draw(E.c2,i2);
    op(E.s3,b*Math.min(1,i3*6));draw(E.c3,i3);
  };
}

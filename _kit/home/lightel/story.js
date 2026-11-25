/* the story scene (BL/BY/DB): ONE fused-coupler workstation drawn as an engraved side elevation and kept on screen for all three
   steps: two stripped fibers held side by side in a clamp at each end, over a micro-nozzle hydrogen torch.
   Step 1 (the flame): the flame rises from the nozzle to the fiber pair.
   Step 2 (the pull): the clamps draw apart and the pair fuses into one biconic taper with a narrow waist.
   Step 3 (the split): light enters one fiber, crosses at the waist and leaves on both; a power meter reads the two outputs.
   Sources: lightel.com/equipment, the CW-7000 and FiberForge pages (hydrogen torch with micro nozzle, pulling motors, 2-channel
   power meter), and /passive-components (FBT couplers, tested before shipment). Schematic. Driven by the scrubbed story progress. */
function scene(){
  var mob=MOBILE(),g='',i;
  /* phones get a tighter elevation (clamps closer in, shorter fiber tails) so the drawing fills the frame (DB) */
  var cl=mob?150:70,cr=mob?530:604,fl=mob?118:40,fr=mob?614:690,bx0=mob?454:540,bx1=mob?614:700,bxc=(bx0+bx1)/2;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'104 150 520 308':'20 140 700 320')+'" aria-hidden="true">';
  g+='<defs><clipPath id="ltC1"><rect x="'+cl+'" y="214" width="46" height="74"/></clipPath><clipPath id="ltC2"><rect x="'+cr+'" y="214" width="46" height="74"/></clipPath>'+
     '<radialGradient id="ltFl" cx="50%" cy="80%" r="70%"><stop offset="0" stop-color="#dcdaff"/><stop offset=".45" stop-color="#8f87f5" stop-opacity=".75"/><stop offset="1" stop-color="#8f87f5" stop-opacity="0"/></radialGradient></defs>';
  /* base: clamps (hatched), the two fibers, the torch nozzle and its gas line, a centre line */
  g+='<g id="scBase">';
  var h1='',h2='';for(i=-80;i<=60;i+=9){h1+='M'+(cl+i)+' 288L'+(cl+i+74)+' 214';h2+='M'+(cr+i)+' 288L'+(cr+i+74)+' 214'}
  g+='<g clip-path="url(#ltC1)"><path class="hat" d="'+h1+'"/></g><g clip-path="url(#ltC2)"><path class="hat" d="'+h2+'"/></g>';
  g+='<path class="sD clp" d="M'+cl+' 214H'+(cl+46)+'V288H'+cl+'Z"/><path class="sD clp" d="M'+cr+' 214H'+(cr+46)+'V288H'+cr+'Z"/>';
  g+='<path class="sD fb" d="M'+fl+' 240H'+fr+'"/><path class="sD fb" d="M'+fl+' 262H'+fr+'"/>';
  g+='<path class="sD nz" d="M346 410V352L352 336H368L374 352V410"/><path class="sD nz" d="M352 336H368"/><path class="sD gs" d="M360 410V440H250"/>';
  g+='<path class="sD cl" d="M360 200V300"/>';
  g+='<text class="a" x="'+(cl+23)+'" y="'+(mob?318:314)+'" text-anchor="middle">CLAMP</text><text class="a" x="'+(cr+23)+'" y="'+(mob?318:314)+'" text-anchor="middle">CLAMP</text>';
  g+='<text class="a" x="332" y="400" text-anchor="end">H₂ TORCH</text>';
  g+='</g>';
  /* step 1: the flame */
  var FL='M360 334C344 318 346 296 352 280C355 272 358 264 360 254C362 264 365 272 368 280C374 296 376 318 360 334Z';
  g+='<g id="st1"><path class="flm" d="'+FL+'"/><path class="sD1 fo" d="'+FL+'"/>'+
     '<text class="a" x="392" y="312">FLAME</text></g>';
  /* step 2: the pull, and the taper */
  g+='<g id="st2"><path class="tpf" d="M220 238C290 238 320 249 360 249C400 249 430 238 500 238V264C430 264 400 253 360 253C320 253 290 264 220 264Z"/>'+
     '<path class="sD2 tp" d="M220 240C290 240 320 249 360 249C400 249 430 240 500 240M220 262C290 262 320 253 360 253C400 253 430 262 500 262"/>'+
     '<path class="sD2 ar" d="M'+(cl+40)+' 192H'+(cl-18)+'"/><path class="arh" d="M'+(cl-10)+' 186 '+(cl-24)+' 192 '+(cl-10)+' 198Z"/>'+
     '<path class="sD2 ar" d="M'+(cr+6)+' 192H'+(cr+64)+'"/><path class="arh" d="M'+(cr+56)+' 186 '+(cr+70)+' 192 '+(cr+56)+' 198Z"/>'+
     '<text class="a" x="'+(cl+10)+'" y="176" text-anchor="middle">PULL</text><text class="a" x="'+(cr+36)+'" y="176" text-anchor="middle">PULL</text>'+
     '<path class="sD2 tk" d="M360 186V232"/><text class="a" x="360" y="172" text-anchor="middle">TAPER WAIST</text></g>';
  /* step 3: light in, light split, the power meter */
  g+='<g id="st3"><path class="sD3 lt" d="M'+fl+' 240H220C290 240 320 249 360 250"/>'+
     '<path class="sD3 lt" d="M360 250C400 249 430 240 500 240H'+fr+'"/><path class="sD3 lt" d="M360 251C400 253 430 262 500 262H'+fr+'"/>'+
     '<path class="sD3 wr" d="M'+(fr-18)+' 240V372M'+(fr-4)+' 262V372"/><path class="sD3 bx" d="M'+bx0+' 372H'+bx1+'V448H'+bx0+'Z"/>'+
     '<text class="a" x="'+(cl+56)+'" y="224">LIGHT IN</text>'+
     '<text class="a" x="'+bxc+'" y="398" text-anchor="middle">POWER METER</text><text class="rd" x="'+bxc+'" y="432" text-anchor="middle">50 : 50</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .hat",svg),s1:$("#st1",svg),s2:$("#st2",svg),s3:$("#st3",svg),
    c1:dl("#st1 .sD1"),c2:dl("#st2 .sD2"),c3:dl("#st3 .sD3")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the flame stays lit through the pull, then gives way to the light */
    var i1=seg(p,0,.1),o1=seg(p,.62,.68),i2=seg(p,.35,.45),i3=seg(p,.68,.88);
    op(E.s1,b*i1*(1-o1));draw(E.c1,i1);
    op(E.s2,b*i2);draw(E.c2,i2);
    op(E.s3,b*Math.min(1,i3*6));draw(E.c3,i3);
  };
}

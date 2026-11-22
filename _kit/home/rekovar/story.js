/* the story scene (BL/BY/DB/CK): how NeoMonki works, drawn in fine line. ONE bedside view stays on screen for all three steps:
   a swaddled newborn in a bassinet wearing the NeoMonki wristband, and the NeoMonki cart beside it with its gooseneck camera and tablet.
   Step 1 Sense: the wristband streams vital signs (a live trace) and the camera watches and listens (its field of view).
   Step 2 Score: both streams flow to the AI, which fills the Eat / Sleep / Console assessment on the tablet.
   Step 3 Support: the tablet shows the infant's trend, shared with the provider portal for the care team.
   Sources: rekovar.com (home, about, NIH grant post), ClinicalTrials.gov NCT06303986 (automated Finnegan/ESC data collection).
   Schematic; proportions are illustrative. Driven by the scrubbed story progress. */
function scene(){
  var mob=MOBILE(),g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="rglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#3fcdb3" stop-opacity=".55"/><stop offset="1" stop-color="#3fcdb3" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="rbg" cx=".5" cy=".55" r=".5"><stop offset="0" stop-color="#1ab9a0" stop-opacity=".1"/><stop offset="1" stop-color="#1ab9a0" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="rcone" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3fcdb3" stop-opacity=".22"/><stop offset="1" stop-color="#3fcdb3" stop-opacity=".02"/></linearGradient></defs>';
  g+='<g id="rBase"><ellipse class="pg" cx="420" cy="330" rx="400" ry="250" fill="url(#rbg)"/>';
  /* bassinet: open basin, rim, mattress, stand and wheels */
  g+='<path class="bas sD" d="M96 296L118 414Q122 430 140 430H500Q518 430 522 414L544 296"/><path class="bas sD" d="M84 296H556"/><path class="mat sD" d="M114 398H526"/>';
  g+='<path class="bas sD" d="M170 430L188 516M470 430L452 516M140 516H500"/><circle class="bas sD" cx="160" cy="526" r="8"/><circle class="bas sD" cx="480" cy="526" r="8"/>';
  /* the swaddled newborn: head and cap, the wrap, one arm out wearing the band */
  g+='<circle class="bab sD" cx="178" cy="366" r="30"/><path class="wrap sD" d="M150 352C156 330 182 326 202 334"/>';
  g+='<path class="bab sD" d="M206 350C240 326 396 322 452 344C484 356 486 390 456 397H212C198 390 196 362 206 350Z"/>';
  g+='<path class="wrap sD" d="M252 332C290 356 316 378 334 397M326 328C364 352 392 376 410 397M400 330C424 348 440 368 450 388"/>';
  g+='<path class="arm sD" d="M286 344C300 326 318 316 338 314"/><circle class="bab sD" cx="346" cy="313" r="8"/>';
  g+='<g id="band"><circle cx="330" cy="316" r="40" fill="url(#rglow)" class="bg"/><rect class="band" x="322" y="306" width="14" height="20" transform="rotate(-14 329 316)"/></g>';
  /* the NeoMonki cart: pole, base, gooseneck camera, tablet */
  g+='<path class="cart sD" d="M690 96V516M640 516H740"/><circle class="cart sD" cx="650" cy="526" r="8"/><circle class="cart sD" cx="730" cy="526" r="8"/>';
  g+='<path class="cart sD" d="M690 96C690 44 560 40 532 92"/><rect class="cam sD" x="512" y="92" width="40" height="24"/><circle class="cam sD" cx="532" cy="116" r="6"/>';
  g+='<rect class="tab sD" x="600" y="176" width="180" height="128"/><rect class="scr sD" x="610" y="186" width="160" height="108"/><path class="cart sD" d="M650 340H730L716 364H664Z"/>';
  g+='<text class="t" x="'+(mob?20:96)+'" y="552">'+(mob?'SCHEMATIC':'BASSINET AND NEOMONKI CART · SCHEMATIC')+'</text></g>';

  /* step 1: sense. A live vital-sign trace from the band; the camera's field of view */
  g+='<g id="s1"><path class="cone" d="M532 122L150 340L470 344Z" fill="url(#rcone)"/><path class="fov" d="M532 122L150 340M532 122L470 344"/>';
  var ED="M354 262H382L388 252L394 272L402 228L410 286L416 262H452L458 252L464 272L472 228L480 286L486 262H520";g+='<path class="ecgb" d="'+ED+'"/><path class="ecg" id="ecg" d="'+ED+'"/>';
  g+='<path class="ldr" d="M330 300V244H'+(mob?40:110)+'"/><text class="a" x="'+(mob?40:110)+'" y="232">'+(mob?'VITALS':'WRISTBAND · VITAL SIGNS')+'</text>';
  g+='<path class="ldr" d="M512 104H'+(mob?380:330)+'"/><text class="a" x="'+(mob?380:330)+'" y="92" text-anchor="'+(mob?'end':'end')+'">'+(mob?'CAMERA':'CAMERA · SIGHT AND SOUND')+'</text></g>';

  /* step 2: score. Both streams flow to the tablet; the AI fills the Eat / Sleep / Console rows */
  g+='<g id="s2"><path class="flow sD2" id="f1" d="M348 304C420 290 520 270 600 252"/><path class="flow sD2" id="f2" d="M552 104C580 110 604 140 620 176"/>';
  g+='<circle class="dot" id="d1" r="4"/><circle class="dot" id="d2" r="4"/>';
  ['EAT','SLEEP','CONSOLE'].forEach(function(k,i){var y=214+i*28;g+='<text class="sl" x="620" y="'+(y+4)+'">'+k+'</text><path class="trk" d="M688 '+y+'H760"/><path class="bar" id="b'+i+'" d="M688 '+y+'H760"/>'});
  g+='<text class="a" x="'+(mob?780:780)+'" y="'+(mob?400:392)+'" text-anchor="end">'+(mob?'AI SCORING':'AI SCORING · FINNEGAN / ESC')+'</text><path class="ldr" d="M690 304V'+(mob?372:376)+'"/></g>';

  /* step 3: support. The trend on the tablet, shared to the provider portal */
  g+='<g id="s3"><path class="trg" d="M620 270H760"/><path class="trend sD3" d="M620 262C640 258 652 222 672 226C692 230 700 252 718 246C734 240 744 216 760 210"/>';
  g+='<text class="sl" x="620" y="206">'+'TREND'+'</text>';
  g+='<path class="wave" d="M786 222A22 22 0 0 1 786 258M790 210A50 50 0 0 1 790 270"/>';
  g+=mob?'<text class="a" x="780" y="160" text-anchor="end">PORTAL</text>':'<text class="a" x="780" y="150" text-anchor="end">TABLET APP + PROVIDER PORTAL</text>';
  g+='</g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#rBase .sD"),fade:$$("#rBase text, #rBase .pg",svg),band:$("#band",svg),
    s1:$("#s1",svg),ecg:$("#ecg",svg),s2:$("#s2",svg),fl:dl("#s2 .sD2"),f:[$("#f1",svg),$("#f2",svg)],d:[$("#d1",svg),$("#d2",svg)],bars:[$("#b0",svg),$("#b1",svg),$("#b2",svg)],
    s3:$("#s3",svg),tr:dl("#s3 .sD3")};
  var lastB=-1,EL=E.ecg.getTotalLength(),FL=E.f.map(function(p){return p.getTotalLength()}),BL=72,FILL=[.78,.56,.68];
  E.ecg.style.strokeDasharray="70 "+(EL+70);
  E.bars.forEach(function(b){b.style.strokeDasharray=BL+" "+BL;b.style.strokeDashoffset=BL});
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the band lights, a vital-sign trace runs, the camera's view opens */
    op(E.band,b*(.35+.65*seg(p,.02,.12)));
    op(E.s1,b*seg(p,.04,.14)*(1-.6*seg(p,.34,.42)));
    E.ecg.style.strokeDashoffset=(-((p*6)%1)*(EL+70)+70).toFixed(1);
    /* step 2: the streams flow to the tablet and the three ESC rows fill */
    op(E.s2,b*seg(p,.34,.42)*(1-seg(p,.66,.72)));draw(E.fl,seg(p,.35,.46));
    var q=seg(p,.42,.6);E.d.forEach(function(d,k){var L=FL[k],pt=E.f[k].getPointAtLength(L*((p*5+k*.4)%1));d.setAttribute("cx",pt.x.toFixed(1));d.setAttribute("cy",pt.y.toFixed(1));d.style.opacity=q>0&&q<1?"1":(q>=1&&p<.68?".8":"0")});
    E.bars.forEach(function(bar,k){bar.style.strokeDashoffset=(BL*(1-FILL[k]*seg(p,.44+k*.05,.58+k*.05))).toFixed(1)});
    /* step 3: the trend draws and goes out to the portal */
    op(E.s3,b*seg(p,.68,.76));draw(E.tr,seg(p,.7,.86));
  };
}

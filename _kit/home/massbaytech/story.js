/* the story scene (BL/BY/DB): ONE engraved drawing kept on screen for all three steps, from wafer to screened part.
   Step 1 a silicon wafer with its die grid (MBT's own fab: diffusion, LPCVD, oxidation, metallisation, photolithography, etching).
   Step 2 one die leaves the wafer and is attached and wire-bonded inside a ceramic pill package (one of MBT's package styles).
   Step 3 the packaged part is swept to 40 GHz and screened (TX, TXV and S levels).
   Sources: Microwave Journal "Fabs & Labs", May 2025; massbaytech.com High Reliability Screening and Package Styles. Schematic. */
var WF=(function(){
  var cx=215,cy=262,R=150,fy=cy+142,p=24,g='',x,y;
  /* die grid inside the wafer: vertical and horizontal streets, clipped by a clipPath */
  for(x=cx-R+11;x<cx+R;x+=p)g+='M'+x+' '+(cy-R)+'V'+(cy+R);
  for(y=cy-R+10;y<cy+R;y+=p)g+='M'+(cx-R)+' '+y+'H'+(cx+R);
  var ax=Math.sqrt(R*R-(fy-cy)*(fy-cy));
  var out='M'+(cx-ax).toFixed(1)+' '+fy+'A'+R+' '+R+' 0 1 1 '+(cx+ax).toFixed(1)+' '+fy+'Z';
  /* the picked die: one grid cell right of and above the centre */
  var dx=cx-R+11+p*6,dy=cy-R+10+p*4;
  return {cx:cx,cy:cy,R:R,out:out,grid:g,die:[dx,dy,p,p]};
})();
var PKD=[546,313,28,17];
function scene(){
  var mob=MOBILE(),g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="40 0 720 540" aria-hidden="true">';
  g+='<defs><clipPath id="wfc"><path d="'+WF.out+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* the wafer: outline with its primary flat, an inner edge-exclusion ring and the die streets */
  g+='<path class="wf sD" d="'+WF.out+'"/>';
  g+='<path class="wg sD" d="'+WF.grid+'" clip-path="url(#wfc)"/>';
  g+='<circle class="wf2 sD" cx="'+WF.cx+'" cy="'+WF.cy+'" r="'+(WF.R-12)+'"/>';
  /* faint guides of what comes next (the package and the sweep axis), so the frame is whole from step 1 */
  g+='<path class="gh" d="M480 330H640V346H480ZM640 336H740V342H640M500 330V236H620V330M494 224H626V236H494ZM494 228H420V232H494"/>';
  g+='<path class="gh" d="M150 500H740"/>';
  g+='</g>';
  g+='<g id="scMove">';
  /* the picked die, highlighted on the wafer (step 1) */
  g+='<rect class="hd" id="hd" x="'+WF.die[0]+'" y="'+WF.die[1]+'" width="'+WF.die[2]+'" height="'+WF.die[3]+'"/>';
  /* the ceramic pill package in elevation, cut away to show the die (step 2) */
  g+='<g id="pkg">'+
     '<path class="pk" d="M480 330H640V346H480Z"/>'+
     '<path class="pk" d="M640 336H740V342H640"/>'+
     '<path class="pk" d="M500 330V236H620V330"/>'+
     '<path class="pk" d="M494 224H626V236H494Z"/>'+
     '<path class="pk" d="M494 228H420V232H494"/>'+
     '<path class="pkc" d="M512 330V248H608V330"/>'+
     '</g>';
  /* the bond wire from the die to the lid */
  g+='<path class="bw" id="bw" d="M560 313C562 286 590 280 584 236"/>';
  /* the moving die */
  g+='<rect class="md" id="md" x="'+WF.die[0]+'" y="'+WF.die[1]+'" width="'+WF.die[2]+'" height="'+WF.die[3]+'"/>';
  /* the 40 GHz sweep (step 3): axis, trace and end ticks */
  g+='<g id="sw"><path class="ax" id="swax" d="M150 500H740M150 494V506M740 494V506"/>'+
     '<path class="tr" id="swtr" d="M150 468C260 466 360 470 450 474S640 484 740 490"/>'+
     '<text class="c" x="150" y="530">0</text><text class="c" x="740" y="530" text-anchor="end">40 GHZ</text></g>';
  g+='</g>';
  /* labels, one set per step, in the clear band above the drawing (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="60" y="44">'+(mob?'OWN WAFER FAB':'SILICON WAFER · OWN FAB')+'</text>'+
     '<path class="ldr" d="M'+(mob?120:130)+' 58L176 122"/>'+
     (mob?'':'<text class="a" x="740" y="44" text-anchor="end">DIFFUSION · LPCVD · LITHOGRAPHY</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="60" y="44">'+(mob?'CERAMIC PILL':'DIE ATTACH · WIRE BOND')+'</text>'+
     (mob?'<path class="ldr" d="M200 58L496 220"/>':'<text class="a" x="740" y="44" text-anchor="end">CERAMIC PILL PACKAGE</text><path class="ldr" d="M650 58L608 218"/>')+'</g>';
  g+='<g id="lb3"><text class="a" x="60" y="44">'+(mob?'TX · TXV · S':'TESTED TO 40 GHZ')+'</text>'+
     (mob?'':'<text class="a" x="740" y="44" text-anchor="end">SCREENED AT TX · TXV · S</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),gh:$$("#scBase .gh",svg),mv:$("#scMove",svg),pk:dl("#pkg .pk"),pkc:$("#pkg .pkc",svg),bw:dl("#bw"),md:$("#md",svg),hd:$("#hd",svg),
    sw:dl("#swax, #swtr"),swt:$$("#sw text",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,A=WF.die,B=PKD;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.mv,b);E.gh.forEach(function(el){op(el,b)})}
    var s1=seg(p,.04,.18),s2=seg(p,.34,.52),mv=seg(p,.4,.58),w2=seg(p,.55,.64),s3=seg(p,.7,.84);
    /* step 1: the picked die lights on the wafer (it stays as the empty site once the die has left) */
    op(E.hd,s1*(1-mv*.7));
    /* step 2: the package draws, the die travels into it, the bond wire follows */
    draw(E.pk,s2);op(E.pkc,s2*.9);
    E.md.setAttribute("x",lerp(A[0],B[0],mv).toFixed(1));E.md.setAttribute("y",lerp(A[1],B[1],mv).toFixed(1));
    E.md.setAttribute("width",lerp(A[2],B[2],mv).toFixed(1));E.md.setAttribute("height",lerp(A[3],B[3],mv).toFixed(1));
    op(E.md,seg(p,.3,.4));
    draw(E.bw,w2);
    /* step 3: the sweep to 40 GHz */
    draw(E.sw,s3);E.swt.forEach(function(t){op(t,s3)});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.27,.33)));op(E.l2,b*seg(p,.4,.47)*(1-seg(p,.63,.69)));op(E.l3,b*seg(p,.74,.82));
  };
}

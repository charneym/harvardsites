/* the story scene (BL/BY/DB): how ViTrack measures blood pressure, drawn in fine engraved line. ONE object stays on screen for all
   three steps: a cross-section of the wrist (palm side up) with the radius, ulna, flexor tendons and the radial artery, ViTrack's
   housing and strap around it, and its optomechanical sensor pad resting on the skin over the artery.
   Step 1 the sensor over the radial artery. Step 2 each beat pushes the artery wall against the tissue: the sensor images that skin
   displacement as a force map (spatiotemporal force distribution). Step 3 the method turns it into the intra-arterial pressure
   waveform: systolic and diastolic pressure for every heartbeat. Sources: dynocardia.care Technology page; NSF award 2423296;
   PR Newswire, Dec 11 2024. Schematic; anatomy simplified and the waveform illustrative, not a patient recording. */
var WR={c:[250,340],rx:196,ry:122,art:[150,246],ar:14};
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,j,C=WR.c;
  function ey(x){var u=(x-C[0])/WR.rx;return C[1]-WR.ry*Math.sqrt(Math.max(0,1-u*u))}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'28 112 450 640':'0 0 800 560')+'" aria-hidden="true">';
  /* phones: the force map and the waveform sit under the wrist instead of beside it, so the drawing fills the width */
  var T=mob?'<g transform="translate(-400 300)">':'<g>';
  g+='<defs><radialGradient id="dglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#82c7eb" stop-opacity=".14"/><stop offset="1" stop-color="#82c7eb" stop-opacity="0"/></radialGradient></defs>';
  /* the wrist in cross-section */
  g+='<g id="scBase"><ellipse cx="'+C[0]+'" cy="'+C[1]+'" rx="260" ry="190" fill="url(#dglow)" class="pg"/>';
  g+='<ellipse class="skin sD" cx="'+C[0]+'" cy="'+C[1]+'" rx="'+WR.rx+'" ry="'+WR.ry+'"/>';
  g+='<ellipse class="fat sD" cx="'+C[0]+'" cy="'+(C[1]+4)+'" rx="'+(WR.rx-16)+'" ry="'+(WR.ry-15)+'"/>';
  /* the strap: a band around the back of the wrist, offset from the skin */
  g+='<path class="strap sD" d="M'+f(C[0]+WR.rx+8)+' '+C[1]+'A'+(WR.rx+8)+' '+(WR.ry+8)+' 0 1 1 '+f(C[0]-WR.rx-8)+' '+C[1]+'"/>';
  g+='<path class="strap2 sD" d="M'+f(C[0]+WR.rx+16)+' '+C[1]+'A'+(WR.rx+16)+' '+(WR.ry+16)+' 0 1 1 '+f(C[0]-WR.rx-16)+' '+C[1]+'"/>';
  /* radius (thumb side, left) and ulna (right), with the marrow drawn in */
  g+='<path class="bone sD" d="M92 336C96 298 138 282 186 290C224 296 246 318 242 346C238 376 204 392 160 388C116 384 88 368 92 336Z"/><path class="bone2 sD" d="M120 338C124 316 150 306 178 310C204 314 218 330 214 348C210 366 186 374 160 370C134 366 116 356 120 338Z"/>';
  g+='<circle class="bone sD" cx="368" cy="356" r="38"/><circle class="bone2 sD" cx="368" cy="356" r="22"/>';
  /* flexor tendons and the median nerve */
  [[228,262],[256,258],[284,262],[240,288],[268,286],[296,282],[312,262]].forEach(function(t){g+='<circle class="ten sD" cx="'+t[0]+'" cy="'+t[1]+'" r="11"/>'});
  g+='<ellipse class="nrv sD" cx="270" cy="236" rx="15" ry="9"/>';
  /* the radial artery, just under the skin on the thumb side, and its companion veins */
  g+='<circle class="art sD" id="artW" cx="'+WR.art[0]+'" cy="'+WR.art[1]+'" r="'+WR.ar+'"/><circle class="art2 sD" cx="'+WR.art[0]+'" cy="'+WR.art[1]+'" r="'+(WR.ar-5)+'"/>';
  g+='<circle class="vn sD" cx="'+(WR.art[0]-24)+'" cy="'+(WR.art[1]+8)+'" r="6"/><circle class="vn sD" cx="'+(WR.art[0]+24)+'" cy="'+(WR.art[1]+6)+'" r="6"/>';
  /* ViTrack: the housing on top of the wrist, and the sensor pad pressed lightly onto the skin over the artery */
  var py=ey(WR.art[0]);
  g+='<path class="hous sD" d="M70 '+f(py-22)+'V'+f(py-92)+'Q70 '+f(py-112)+' 90 '+f(py-112)+'H232Q252 '+f(py-112)+' 252 '+f(py-92)+'V'+f(py-22)+'"/>';
  g+='<path class="hous2 sD" d="M84 '+f(py-30)+'V'+f(py-90)+'Q84 '+f(py-100)+' 94 '+f(py-100)+'H228Q238 '+f(py-100)+' 238 '+f(py-90)+'V'+f(py-30)+'"/>';
  g+='<path class="hous sD" d="M70 '+f(py-22)+'H112M188 '+f(py-22)+'H252"/>';
  g+='<path class="pad sD" id="padW" d="M112 '+f(py-22)+'V'+f(py-2)+'H188V'+f(py-22)+'"/>';
  for(i=0;i<9;i++){var xx=116+i*8.5;g+='<path class="cell sD" d="M'+f(xx)+' '+f(py-17)+'V'+f(py-6)+'"/>'}
  g+='<circle class="led" cx="226" cy="'+f(py-70)+'" r="3"/>';
  if(!mob)g+='<text class="t" x="'+C[0]+'" y="'+(C[1]+WR.ry+58)+'" text-anchor="middle">THE WRIST IN CROSS-SECTION, PALM SIDE UP</text>';g+='</g>';

  /* step 1: labels on the parts that matter */
  var LX=mob?290:470;
  g+='<g id="s1"><path class="ldr" d="M'+(WR.art[0]+WR.ar+2)+' '+WR.art[1]+'L210 '+(WR.art[1]+44)+'H'+LX+'"/><text class="a" x="'+LX+'" y="'+(WR.art[1]+49)+'" dx="10">RADIAL ARTERY</text>';
  g+='<path class="ldr" d="M188 '+f(py-12)+'L300 '+f(py-60)+'H'+LX+'"/><text class="a" x="'+LX+'" y="'+f(py-55)+'" dx="10">'+(mob?'SENSOR':'OPTOMECHANICAL SENSOR')+'</text>';
  if(!mob)g+='<text class="t" x="'+(LX+10)+'" y="'+f(py-32)+'">RESTING ON THE SKIN, NO CUFF</text>';
  if(!mob)g+='<path class="ldr" d="M161 '+f(py-112)+'V'+f(py-140)+'"/><text class="t" x="161" y="'+f(py-150)+'" text-anchor="middle">VITRACK</text>'+
    '<path class="ldr" d="M380 392L420 470"/><text class="t" x="428" y="476">ULNA</text><path class="ldr" d="M130 382L104 466"/><text class="t" x="100" y="484" text-anchor="middle">RADIUS</text>';
  else g+='<path class="ldr" d="M130 382L118 430"/><text class="a" x="118" y="458" text-anchor="middle">RADIUS</text><path class="ldr" d="M372 396L384 430"/><text class="a" x="384" y="458" text-anchor="middle">ULNA</text>';
  g+='</g>';

  /* step 2: the pulse pushes on the tissue; the sensor reads a force map */
  g+='<g id="s2">';
  [-1,0,1].forEach(function(a){var x0=WR.art[0]+a*18,y0=WR.art[1]-WR.ar-3;g+='<path class="push" d="M'+f(x0)+' '+f(y0)+'L'+f(x0+a*4)+' '+f(py+1)+'"/>'});
  g+=T;var M=[640,262];
  for(i=0;i<9;i++){var r1='',r2='';for(j=0;j<9;j++){r1+=(j?'L':'M')+f(M[0]+(i-4)*19+(j-4)*9)+' '+f(M[1]+(j-4)*8.5);r2+=(j?'L':'M')+f(M[0]+(j-4)*19+(i-4)*9)+' '+f(M[1]+(i-4)*8.5)}g+='<path class="msh" data-i="'+i+'" data-d="0" d="'+r1+'"/><path class="msh" data-i="'+i+'" data-d="1" d="'+r2+'"/>'}
  g+='</g>';if(!mob)g+='<path class="ldr" d="M190 '+f(py-12)+'C320 '+f(py-12)+' 440 '+f(py+30)+' 530 '+f(py+30)+'"/>';g+=T;
  g+='<text class="a" x="'+M[0]+'" y="'+(M[1]+92)+'" text-anchor="middle">FORCE MAP</text><text class="t" x="'+M[0]+'" y="'+(M[1]+116)+'" text-anchor="middle">SKIN DISPLACEMENT, EACH BEAT</text></g></g>';

  /* step 3: the intra-arterial pressure waveform, systolic and diastolic for every beat */
  g+='<g id="s3">'+T;
  var X0=510,X1=784,Y=function(v){return 420-(v-50)*2.6};
  g+='<path class="ax" d="M'+X0+' '+f(Y(140))+'V'+f(Y(50))+'H'+X1+'"/>';
  [60,90,120].forEach(function(v){g+='<path class="gtk" d="M'+(X0-6)+' '+f(Y(v))+'H'+X0+'"/><path class="grd" d="M'+(X0+4)+' '+f(Y(v))+'H'+X1+'"/><text class="t" x="'+(X0-12)+'" y="'+f(Y(v)+4)+'" text-anchor="end">'+v+'</text>'});
  g+='<text class="t" x="'+X0+'" y="'+f(Y(140)-14)+'" text-anchor="middle">mmHg</text>';
  var w='',bw=68,x,first=true;
  for(x=X0+8;x<=X1-4;x+=1){var ph=((x-X0-8)%bw)/bw,v;
    if(ph<.16)v=80+40*Math.sin(ph/.16*Math.PI/2);else if(ph<.36)v=120-26*((ph-.16)/.2);else if(ph<.42)v=94+4*Math.sin((ph-.36)/.06*Math.PI);else v=94-14*((ph-.42)/.58);
    w+=(first?'M':'L')+x+' '+f(Y(v));first=false}
  g+='<path class="wave" d="'+w+'"/>';
  var sx=X0+8+bw*2+.16*bw,dx=X0+8+bw*3;
  g+='<circle class="mkr" cx="'+f(sx)+'" cy="'+f(Y(120))+'" r="5"/><circle class="mkr" cx="'+f(dx)+'" cy="'+f(Y(80))+'" r="5"/>';
  g+='<text class="a" x="'+f(sx)+'" y="'+f(Y(120)-18)+'" text-anchor="middle">SYSTOLIC</text><text class="a" x="'+f(dx)+'" y="'+f(Y(80)+30)+'" text-anchor="middle">DIASTOLIC</text>';
  g+='<text class="t" x="'+((X0+X1)/2)+'" y="'+(Y(50)+30)+'" text-anchor="middle">EVERY HEARTBEAT, CONTINUOUSLY</text></g></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .pg, #scBase .led",svg),s1:$("#s1",svg),s2:$("#s2",svg),s3:$("#s3",svg),
    msh:$$("#s2 .msh",svg),push:dl("#s2 .push"),wave:dl("#s3 .wave"),mk:$$("#s3 .mkr, #s3 text.a",svg),art:$("#artW",svg),pad:$("#padW",svg)};
  var lastB=-1,M=[640,262];
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function mesh(k){E.msh.forEach(function(el){var i=+el.getAttribute("data-i"),d=el.getAttribute("data-d"),s='';
    for(var j=0;j<9;j++){var a=d==="0"?i:j,b=d==="0"?j:i,h=k*58*Math.exp(-((a-4)*(a-4)+(b-4)*(b-4))/4.6);s+=(j?'L':'M')+(M[0]+(a-4)*19+(b-4)*9).toFixed(1)+' '+(M[1]+(b-4)*8.5-h).toFixed(1)}
    el.setAttribute("d",s)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    op(E.s1,seg(b,.6,1)*(1-seg(p,.28,.36)));
    var s2=seg(p,.34,.42)*(1-seg(p,.62,.68));op(E.s2,b*s2);
    /* the pulse: the artery swells and the force map rises and falls with it, three beats through step 2 */
    var beat=Math.pow(Math.abs(Math.sin(seg(p,.36,.64)*Math.PI*3)),1.6);
    mesh(.25+.75*beat);draw(E.push,seg(p,.38,.46));
    E.art.setAttribute("r",(WR.ar*(1+.18*beat*s2)).toFixed(1));
    E.pad.classList.toggle("on",p>.34&&p<.68);
    op(E.s3,b*seg(p,.66,.74));draw(E.wave,seg(p,.7,.94));E.mk.forEach(function(el){op(el,seg(p,.8,.88))});
  };
}

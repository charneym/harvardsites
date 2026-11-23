/* The story scene (DB/BY): how the CorNeat KPro works (corneat.com, CorNeat KPro and EverMatrix pages; PR Newswire,
   2 September 2025), as ONE continuous scene in fine line, filling the frame: a side section of the eye, light arriving
   from the left. Frame 0 is already complete: the eye with its scarred, opaque cornea, the light stopping at the scar.
   Step 1 (scarred): the light reaches the scar and stops. Step 2 (implanted): the scar's centre is removed and the KPro,
   optic plus perforated EverMatrix skirt, snaps in, the skirt lying over the eye wall; sutures hold it. Step 3
   (integrated): cells colonise the skirt beneath the conjunctiva and the light passes through the optic to the retina.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var EX=450,EY=280,ER=190;                     /* the eyeball */
var CX=368.1,CR=128.1;                         /* the cornea's outer surface (centre on the axis) */
function ep(r,deg){var t=deg*Math.PI/180;return [(EX+r*Math.cos(t)).toFixed(1),(EY+r*Math.sin(t)).toFixed(1)]}
function cp(r,deg){var t=deg*Math.PI/180;return [(CX+r*Math.cos(t)).toFixed(1),(EY+r*Math.sin(t)).toFixed(1)]}
var RAYS=[262,280,298],FOC=[624,280];
function storyScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,id){return o.mob?'':'<text class="'+cls+'"'+(id?' id="'+id+'"':'')+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  var P1=ep(ER,212),P2=ep(ER,148);
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="'+(o.mob?'24 78 728 432':'0 0 '+SCW+' '+SCH)+'" aria-hidden="true">';
  g+='<defs><radialGradient id="fgl"><stop offset="0" stop-color="#7cc6f2" stop-opacity=".9"/><stop offset=".45" stop-color="#4fb3ef" stop-opacity=".35"/><stop offset="1" stop-color="#4fb3ef" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="scl"><rect x="200" y="214" width="120" height="132"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* sclera (outer wall) and the retina lining it, the cornea in front, iris, lens and the optic nerve behind */
  g+='<path class="wl sD" d="M'+P1+'A'+ER+' '+ER+' 0 1 1 '+P2+'"/>';
  var R1=ep(178,222),R2=ep(178,138);
  g+='<path class="wo sD" d="M'+R1+'A178 178 0 1 1 '+R2+'"/>';
  g+='<path class="wl sD" d="M'+P1+'A'+CR+' '+CR+' 0 0 0 '+P2+'"/>';
  var C1=cp(120,228),C2=cp(120,132);
  g+='<path class="wo sD" d="M'+C1+'A120 120 0 0 0 '+C2+'"/>';
  g+='<path class="wl sD" d="M300 200L305 254"/><path class="wl sD" d="M300 360L305 306"/>';
  g+='<path class="wo sD" d="M326 232C340 248 340 312 326 328C312 312 312 248 326 232Z"/>';
  var N1=ep(ER,-6),N2=ep(ER,6);
  g+='<path class="wl sD" d="M'+N1+'C680 262 704 266 734 262"/><path class="wl sD" d="M'+N2+'C680 298 704 294 734 298"/>';
  /* conjunctiva, the thin membrane over the front of the eye wall */
  var J1=ep(ER+10,208),J2=ep(ER+10,252);
  g+='<path class="cj sD" d="M'+J1+'A'+(ER+10)+' '+(ER+10)+' 0 0 1 '+J2+'"/><path class="cj sD" d="M'+ep(ER+10,152)+'A'+(ER+10)+' '+(ER+10)+' 0 0 0 '+ep(ER+10,108)+'"/>';
  g+=T('t',40,244,'LIGHT');
  g+=T('t',226,150,'CORNEA','end');
  g+=T('t',668,128,'SCLERA');
  g+='</g>';
  /* the scar: the opaque band of the central cornea */
  var Q1=cp(104,226),Q2=cp(104,134);
  g+='<path id="scar" class="scr" clip-path="url(#scl)" d="M'+P1+'A'+CR+' '+CR+' 0 0 0 '+P2+'L'+Q2+'A104 104 0 0 1 '+Q1+'Z"/>';
  /* the KPro: the optic through the trephined centre, the EverMatrix skirt lying over the eye wall (top and its mirror) */
  var S0=cp(131,194.6),S1=cp(131,231.8),S2=ep(194,236);
  var sk='M'+S0+'A131 131 0 0 1 '+S1+'A194 194 0 0 1 '+S2,skm='M'+cp(131,165.4)+'A131 131 0 0 0 '+cp(131,128.2)+'A194 194 0 0 0 '+ep(194,124);
  g+='<g id="kp">';
  g+='<path class="sk" d="'+sk+'"/><path class="sk" d="'+skm+'"/>';
  [cp(131,206),cp(131,219),ep(194,219),ep(194,228)].forEach(function(q){g+='<circle class="hole" cx="'+q[0]+'" cy="'+q[1]+'" r="1.9"/><circle class="hole" cx="'+q[0]+'" cy="'+(2*EY-q[1]).toFixed(1)+'" r="1.9"/>'});
  g+='<path class="opt" d="M234 250Q222 280 234 310H302V250Z"/><path class="kl" d="M248 257Q239 280 248 303"/><path class="kl" d="M262 257V303"/>';
  g+='</g>';
  /* sutures (non-degradable), shown once the KPro has landed */
  g+='<g id="su">';[223,232].forEach(function(d){var a=ep(186,d),b=ep(204,d);g+='<path class="su" d="M'+a+'L'+b+'"/><path class="su" d="M'+a[0]+' '+(2*EY-a[1]).toFixed(1)+'L'+b[0]+' '+(2*EY-b[1]).toFixed(1)+'"/>'});g+='</g>';
  /* cells growing into the skirt */
  g+='<g id="cells">';
  var cs=[];for(i=0;i<9;i++){cs.push(cp(131+((i*37)%5-2)*.9,200+i*3.6))}for(i=0;i<8;i++){cs.push(ep(194+((i*53)%5-2)*.9,214+i*2.9))}
  cs.forEach(function(q,k){g+='<circle class="cel" data-k="'+k+'" cx="'+q[0]+'" cy="'+q[1]+'" r="1.6"/><circle class="cel" data-k="'+k+'" cx="'+q[0]+'" cy="'+(2*EY-q[1]).toFixed(1)+'" r="1.6"/>'});
  g+='</g>';
  /* light: up to the cornea, then (once the KPro is in) through the optic to a focus on the retina */
  g+='<g id="raysA">';RAYS.forEach(function(y){g+='<path class="ray" d="M40 '+y+'H236"/>'});g+='</g>';
  g+='<g id="raysB">';RAYS.forEach(function(y){g+='<path class="ray" d="M236 '+y+'L'+FOC[0]+' '+FOC[1]+'"/>'});g+='</g>';
  g+='<circle id="foc" cx="'+FOC[0]+'" cy="'+FOC[1]+'" r="22" fill="url(#fgl)"/>';
  g+='<g id="kpl">';
  g+=o.mob?'':'<path class="ld" d="M226 360L237 320"/>'+T('t',220,372,'KPRO OPTIC','end')+'<path class="ld" d="M322 90L335 110"/>'+T('t',318,84,'EVERMATRIX SKIRT','end');
  g+='</g>';
  var ly=o.mob?500:SCH-10;
  g+='<g id="lb1"><text class="a" x="'+(o.mob?32:20)+'" y="'+ly+'">'+(o.mob?'A SCAR STOPS THE LIGHT':'AN OPAQUE CORNEA: NO LIGHT REACHES THE RETINA')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(o.mob?32:20)+'" y="'+ly+'">'+(o.mob?'NO DONOR TISSUE NEEDED':'THE KPRO SNAPS IN · NO DONOR TISSUE NEEDED')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(o.mob?32:20)+'" y="'+ly+'">'+(o.mob?'LIGHT REACHES THE RETINA':'TISSUE GROWS IN · LIGHT REACHES THE RETINA')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),scar:$("#scar",svg),kp:$("#kp",svg),su:$("#su",svg),
    cells:$$("#cells .cel",svg),ra:dl("#raysA .ray"),rb:dl("#raysB .ray"),foc:$("#foc",svg),kpl:$("#kpl",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var sc=seg(p,.04,.32),im=seg(p,.36,.64),ig=seg(p,.68,.96);
    /* 1. the light travels in and stops at the scar (frame 0 already shows it there) */
    var ra=p<.04?1:Math.min(1,sc*1.3);E.ra.forEach(function(a,k){a[0].style.strokeDashoffset=(a[1]*(1-Math.min(1,Math.max(0,ra*1.2-k*.1)))).toFixed(1)});op($("#raysA",svg),b);
    op(E.scar,b*(1-.88*im));
    /* 2. the KPro slides in from the front and lands on the eye wall; the sutures follow */
    var k=Math.min(1,im*1.25),ek=1-Math.pow(1-k,3);
    if(E.kp){E.kp.setAttribute("transform","translate("+(-(1-ek)*200).toFixed(1)+" 0)");op(E.kp,b*k)}
    op(E.su,b*seg(im,.75,1));op(E.kpl,b*seg(im,.55,.85));
    /* 3. cells colonise the skirt; the light runs on through the optic and focuses on the retina */
    E.cells.forEach(function(el){var i=+el.getAttribute("data-k");op(el,b*Math.min(1,Math.max(0,ig*2-i*.03)))});
    var rb=Math.min(1,ig*1.8);E.rb.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-rb)).toFixed(1)});op($("#raysB",svg),b*(rb>0?1:0));
    op(E.foc,b*seg(ig,.45,.6));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

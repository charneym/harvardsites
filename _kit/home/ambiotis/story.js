/* the story scene (BL/BY/DB): how inflammation resolves, drawn in fine engraved line. ONE piece of tissue stays on screen for all
   three steps: a blood vessel along the top, the tissue below, a lesion at its surface.
   Step 1 initiation: neutrophils leave the vessel and gather at the lesion.
   Step 2 amplification: more neutrophils arrive; pro-inflammatory mediators (prostaglandins, leukotrienes) spread (coral dots).
   Step 3 resolution: the mediators switch to pro-resolving ones (lipoxins, resolvins, protectins, maresins; sage hexagons), a
   macrophage clears the spent neutrophils by phagocytosis and the tissue closes.
   Source: ambiotis.com, "Programme de R&D sur l'inflammation et sa résolution". Schematic; not to scale. Driven by the scrubbed story progress. */
var NEU=[ /* [start x in the vessel, end x, end y] */
 [150,352,352],[300,438,344],[520,394,322],
 [640,330,312],[90,462,306],[720,420,290]];
var MED=[[338,286],[372,262],[426,258],[468,282],[486,330],[306,334],[296,292],[446,232],[356,226],[404,240],[500,296],[284,356]];
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="aglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#85bba1" stop-opacity=".12"/><stop offset="1" stop-color="#85bba1" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase"><ellipse class="pg" cx="400" cy="330" rx="330" ry="220" fill="url(#aglow)"/>';
  /* the vessel: two walls, the endothelial lining, red blood cells */
  g+='<path class="vw sD" d="M30 64C200 50 600 50 770 64"/><path class="vw sD" d="M30 150C200 164 600 164 770 150"/>';
  for(i=0;i<15;i++){var x=46+i*48;g+='<path class="vl sD" d="M'+x+' '+f(144+4*Math.sin(i*.9))+'h30"/>'}
  [[90,96],[170,116],[250,92],[330,118],[410,100],[490,120],[575,96],[655,114],[728,100]].forEach(function(r,k){
    g+='<g transform="translate('+r[0]+' '+r[1]+') rotate('+(k%2?18:-14)+')"><ellipse class="rbc sD" rx="17" ry="9"/><ellipse class="rbc2 sD" rx="8" ry="3.4"/></g>'});
  /* the tissue: two rows of cells; the cell at the lesion is drawn broken, and its intact outline returns on resolution */
  var cells='',broken='',whole='';
  for(var r=0;r<2;r++)for(i=0;i<9;i++){var cx=48+i*88+(r?44:0),cy=446+r*62;if(cx>760)continue;
    var d='M'+(cx-40)+' '+cy+'C'+(cx-40)+' '+(cy-30)+' '+(cx+40)+' '+(cy-30)+' '+(cx+40)+' '+cy+'C'+(cx+40)+' '+(cy+30)+' '+(cx-40)+' '+(cy+30)+' '+(cx-40)+' '+cy+'Z';
    if(r===0&&i===4){broken+='<path class="cb" d="'+d+'"/>';whole+='<path class="cw" d="'+d+'"/><ellipse class="cn" cx="'+cx+'" cy="'+cy+'" rx="9" ry="7"/>'}
    else cells+='<path class="ce sD" d="'+d+'"/><ellipse class="cn sD" cx="'+cx+'" cy="'+cy+'" rx="9" ry="7"/>'}
  g+=cells+'<text class="t" x="34" y="36">'+(mob?'VAISSEAU':'VAISSEAU SANGUIN')+'</text><text class="t" x="34" y="548">TISSU</text></g>';
  g+='<g id="les">'+broken+'<path class="lx" d="M372 424l12-16 8 12 10-18 8 16 14-10"/></g>';
  g+='<g id="heal">'+whole+'</g>';
  /* mediators: coral dots (pro-inflammatory), sage hexagons (pro-resolving) */
  g+='<g id="mp">';MED.forEach(function(m){g+='<circle class="mpi" cx="'+m[0]+'" cy="'+m[1]+'" r="4.2"/>'});g+='</g>';
  g+='<g id="mr">';MED.forEach(function(m){g+='<path class="mre" d="M'+(m[0]+3)+' '+(m[1]+4)+'l4-7h8l4 7-4 7h-8z"/>'});g+='</g>';
  /* the macrophage: a large cell with pseudopods and a round nucleus */
  g+='<g id="mac"><path class="mc" d="M-46 -8C-52 -34 -22 -50 0 -44C18 -60 50 -42 48 -14C66 0 54 34 30 38C14 56 -20 52 -30 36C-56 32 -62 6 -46 -8Z"/><ellipse class="mn" cx="12" cy="-8" rx="15" ry="12"/></g>';
  /* neutrophils: a round cell with a multilobed nucleus */
  NEU.forEach(function(n,k){g+='<g class="neu"><circle class="nc" r="14"/><circle class="nn" cx="-5.5" cy="-2" r="3.4"/><circle class="nn" cx="0" cy="3.5" r="3.4"/><circle class="nn" cx="5.5" cy="-2" r="3.4"/><path class="nl2" d="M-3 0L-1.5 2M3 0L1.5 2"/></g>'});
  /* labels, one set per step (they never show together) */
  g+='<g id="l1"><path class="ldr" d="M476 306L566 236H760"/><text class="a" x="760" y="222" text-anchor="end">NEUTROPHILES</text></g>';
  g+='<g id="l2"><path class="ldr c" d="M506 296L586 236H760"/><text class="c" x="760" y="222" text-anchor="end">'+(mob?'PGE2 · LTB4':'PROSTAGLANDINES · LEUCOTRIÈNES')+'</text></g>';
  g+='<g id="l3"><path class="ldr" d="M516 296L586 236H760"/><text class="a" x="760" y="222" text-anchor="end">'+(mob?'SPMs':'RÉSOLVINES · PROTECTINES · MARÉSINES')+'</text>'+
    '<path class="ldr" d="M566 340L612 300H760"/><text class="a" x="760" y="288" text-anchor="end">MACROPHAGE</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .pg",svg),les:$("#les",svg),heal:$("#heal",svg),
    mp:$$("#mp circle",svg),mr:$$("#mr path",svg),neu:$$(".neu",svg),mac:$("#mac",svg),l1:$("#l1",svg),l2:$("#l2",svg),l3:$("#l3",svg)};
  var lastB=-1,MC=[520,372];
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ez(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var hl=seg(p,.82,.95);
    op(E.les,b*(1-hl));op(E.heal,hl);
    /* neutrophils: 0-2 migrate in step 1, 3-5 in step 2; the macrophage clears them all in step 3 */
    var cl=seg(p,.76,.94);
    E.neu.forEach(function(el,k){var n=NEU[k],m=k<3?ez(seg(p,.02+k*.05,.2+k*.05)):ez(seg(p,.36+(k-3)*.05,.52+(k-3)*.05));
      var x=n[0]+(n[1]-n[0])*m,y=106+(n[2]-106)*m;
      var c=ez(Math.max(0,Math.min(1,(cl-k*.08)/.5)));x+=(MC[0]-12-x)*c;y+=(MC[1]-6-y)*c;
      var s=1-.7*c;el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale("+s.toFixed(3)+")");
      op(el,b*(k<3?1:seg(p,.33,.37))*(1-seg(c,.6,1)))});
    /* mediators */
    var pi=seg(p,.4,.56)*(1-seg(p,.68,.76)),pr=seg(p,.7,.8);
    E.mp.forEach(function(el,k){op(el,b*seg(pi,k/24,k/24+.5))});
    E.mr.forEach(function(el,k){op(el,b*seg(pr,k/24,k/24+.5))});
    /* the macrophage arrives from the right */
    var ma=ez(seg(p,.68,.8));E.mac.setAttribute("transform","translate("+(MC[0]+240*(1-ma)).toFixed(1)+" "+MC[1]+")");op(E.mac,b*seg(p,.68,.73));
    op(E.l1,b*seg(p,.12,.2)*(1-seg(p,.3,.34)));op(E.l2,seg(p,.44,.52)*(1-seg(p,.64,.68)));op(E.l3,seg(p,.78,.86));
  };
}

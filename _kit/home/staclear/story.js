/* The story scene (BL/BY/DB): inside the syringe barrel (staclear.com home and FAQ), ONE fine-line cross-section kept on
   screen for all four steps: the barrel, the drug, the piston.
   Step 1 (Oil): a generic syringe: a film of liquid silicone oil on the barrel wall.
   Step 2 (Particles): oil droplets leave the wall and float in the drug (schematic).
   Step 3 (Coating): StaClear: the silicone crosslinked and fixed to the wall (TriboLink-Si); the droplets are gone.
   Step 4 (Clean): low particles, every lot tested for USP <789>. */
var SCW=760,SCH=520;
var SC_DROPS=[[210,214],[262,248],[318,226],[372,262],[426,236],[478,272],[236,292],[300,300],[352,288],[412,306],[462,214],[520,250],[196,256],[550,292]];
function scScene(o){
  var g='',mob=o.mob,i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="20" y="30">SYRINGE BARREL, CROSS-SECTION</text>';
  /* the barrel, the needle hub at left, the piston and plunger at right */
  g+='<g id="scB"><path class="edge sB" d="M150 170H640M150 350H640"/><path class="edge sB" d="M150 170V214L104 246V274L150 306V350"/>'+
     '<path class="edge sB" d="M104 260H40"/><path class="pis sB" d="M600 176H624V344H600Z"/><path class="edge sB" d="M624 260H736M716 218V302"/></g>';
  /* step 1: the liquid oil film on both walls */
  var f1='',f2='';for(x=154;x<=596;x+=6){f1+=(f1?"L":"M")+x+" "+(180+2*Math.sin(x*.21)).toFixed(1);f2+=(f2?"L":"M")+x+" "+(340+2*Math.sin(x*.21+1)).toFixed(1)}
  g+='<g id="scO"><path class="oil sO" d="'+f1+'"/><path class="oil sO" d="'+f2+'"/></g>';
  /* step 2: droplets in the drug */
  g+='<g id="scD">';SC_DROPS.forEach(function(d,i){g+='<circle class="drop" cx="'+d[0]+'" cy="'+d[1]+'" r="'+(3+i%3)+'"/>'});g+='</g>';
  /* step 3: the anchored coating: a solid, hatched layer bonded to the wall */
  var h='';for(x=156;x<=594;x+=10)h+='M'+x+' 171L'+(x+6)+' 177M'+x+' 343L'+(x+6)+' 349';
  g+='<g id="scC"><path class="coat sC" d="M152 177H598M152 343H598"/><path class="hatch" d="'+h+'"/></g>';
  /* step 4: the check */
  g+='<g id="scK"><path class="chk sK" d="M352 260L372 280L410 238"/></g>';
  /* labels (>= 8px clear of every stroke, DR3) */
  g+='<g id="scL1"><text class="t s2" x="150" y="'+(mob?150:154)+'">'+(mob?'LIQUID SILICONE OIL':'GENERIC · LIQUID SILICONE OIL')+'</text></g>';
  g+='<g id="scL2"><text class="t s2" x="150" y="'+(mob?394:384)+'">'+(mob?'PARTICLES IN THE DRUG':'OIL DROPLETS IN THE DRUG')+'</text></g>';
  g+='<g id="scL3"><text class="t s2" x="150" y="'+(mob?150:154)+'">'+(mob?'TRIBOLINK-Si':'STACLEAR · TRIBOLINK-Si, FIXED')+'</text></g>';
  g+='<g id="scL4"><text class="t s2" x="150" y="'+(mob?394:384)+'">'+(mob?'USP <789> TESTED':'LOW PARTICLES · USP <789> EVERY LOT')+'</text></g>';
  g+='<g id="scL0"><text class="t" x="604" y="'+(mob?394:384)+'">'+(mob?'PISTON':'RUBBER PISTON')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="20" y="508">1 · OIL</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">2 · PARTICLES</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">3 · COATING</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="508">4 · CLEAN</text></g>';
  return g.replace(/USP <789>/g,"USP &lt;789&gt;")+'</svg>';
}
function scene(){return scScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={B:$("#scB",svg),bE:dl(".sB"),O:$("#scO",svg),oE:dl(".sO"),D:$$("#scD circle",svg),C:$("#scC",svg),cE:dl(".sC"),H:$("#scC .hatch",svg),K:$("#scK",svg),kE:dl(".sK"),
    L:[$("#scL1",svg),$("#scL2",svg),$("#scL3",svg),$("#scL4",svg)],L0:$("#scL0",svg),l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],t0:svg.querySelector("text.t")};
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(E.t0,b);op(E.B,b);draw(E.bE,b*seg(p,0,.1));op(E.L0,b*seg(p,.06,.12));
    /* the oil film draws in, and gives way to the coating in step 3 */
    op(E.O,b*(1-seg(p,.5,.58)));draw(E.oE,b*seg(p,.08,.2));
    /* droplets appear in step 2, gone in step 3 */
    E.D.forEach(function(d,i){op(d,b*seg(p,.28+i*.012,.34+i*.012)*(1-seg(p,.52,.6)))});
    op(E.C,b);draw(E.cE,b*seg(p,.54,.66));op(E.H,b*seg(p,.6,.7));
    op(E.K,b);draw(E.kE,b*seg(p,.8,.9));
    for(var i=0;i<4;i++){var s0=i*.25;op(E.L[i],b*seg(p,s0+.05,s0+.11)*(i<3?(1-seg(p,s0+.22,s0+.25)):1));op(E.l[i],b*seg(p,s0+(i?.02:0),s0+.07)*(i<3?(1-seg(p,s0+.22,s0+.25)):1))}
  };
}

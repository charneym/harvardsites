/* The story scene (BL/BY/DB): how an OZ Optics polarization maintaining patchcord keeps its polarization, drawn as ONE
   magnified end face of a PANDA-type PM fiber inside its connector, kept on screen for all three steps (OZ Optics
   datasheet DTS0071 "Polarization maintaining fiber patchcords and connectors" and the V-groove datasheet: OZ Optics uses
   PANDA-structure PM fiber; the polarization axis is aligned with the connector key by rotating the fiber or the connector
   frame until it is in line with the keyway, then fixed with epoxy; pre-aligned patchcords have the slow axis aligned to
   the key and maintain polarization to better than 20 dB, with extinction ratios of 20 dB up to 40 dB).
   Step 1: the fiber end face (cladding, core, two stress rods, the slow axis through them), off the key.
   Step 2: the connector key appears; the fiber turns until its slow axis lines up with the keyway.
   Step 3: it is locked (an epoxy ring) and linearly polarized light along the slow axis is measured. */
var SCW=760,SCH=520,OZ_CX=380,OZ_CY=262,OZ_R=170,OZ_A0=40;
function ozScene(o){
  var g='',mob=o.mob,cx=OZ_CX,cy=OZ_CY;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<radialGradient id="ozGl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#5d8de8" stop-opacity=".22"/><stop offset="1" stop-color="#5d8de8" stop-opacity=".04"/></radialGradient>'+
    '<radialGradient id="ozCo"><stop offset="0" stop-color="#ffffff"/><stop offset=".5" stop-color="#ffeb4d"/><stop offset="1" stop-color="#ffe500" stop-opacity="0"/></radialGradient></defs>';
  g+='<text class="t" x="20" y="30">'+(mob?"PM FIBER END FACE":"PANDA PM FIBER, END FACE (MAGNIFIED)")+'</text>';
  /* the connector around it: reference circle and key (step 2) */
  g+='<g id="ozKey"><circle class="ref" cx="'+cx+'" cy="'+cy+'" r="214"/><rect class="key" x="'+(cx-14)+'" y="24" width="28" height="22"/>'+
     '<path class="kl" d="M'+cx+' 52V472"/><text class="t s2" x="'+(cx+30)+'" y="40">CONNECTOR KEY</text></g>';
  /* the fiber: one group that turns about the core */
  g+='<g id="ozFib" transform="rotate('+OZ_A0+' '+cx+' '+cy+')">'+
     '<circle class="clad sD" cx="'+cx+'" cy="'+cy+'" r="'+OZ_R+'"/>'+
     '<circle class="rod sD" cx="'+cx+'" cy="'+(cy-92)+'" r="42"/><circle class="rod sD" cx="'+cx+'" cy="'+(cy+92)+'" r="42"/>'+
     '<path class="ax" d="M'+cx+' '+(cy-196)+'V'+(cy+196)+'"/>'+
     '<g id="ozPol"><path class="pol" d="M'+cx+' '+(cy-130)+'V'+(cy+130)+'M'+(cx-9)+' '+(cy-116)+'L'+cx+' '+(cy-132)+'L'+(cx+9)+' '+(cy-116)+'M'+(cx-9)+' '+(cy+116)+'L'+cx+' '+(cy+132)+'L'+(cx+9)+' '+(cy+116)+'"/></g>'+
     '<circle class="core" cx="'+cx+'" cy="'+cy+'" r="10"/>'+
   '</g>';
  g+='<circle id="ozCoG" cx="'+cx+'" cy="'+cy+'" r="26" fill="url(#ozCo)"/>';
  /* step 3: the epoxy lock ring */
  g+='<circle id="ozLock" class="lock" cx="'+cx+'" cy="'+cy+'" r="'+(OZ_R+8)+'"/>';
  /* step 1 labels (for the fiber at its starting angle) */
  var a=OZ_A0*Math.PI/180,rx=cx+92*Math.sin(a),ry=cy-92*Math.cos(a);
  var lx=592,ly=118,dx=lx-6-rx,dy=ly-rx*0+0-ry,dl=Math.sqrt(dx*dx+dy*dy),ex=rx+dx/dl*46,ey=ry+dy/dl*46;
  g+='<g id="ozL1"><path class="ld" d="M'+ex.toFixed(1)+' '+ey.toFixed(1)+'L'+(lx-8)+' '+ly+'"/><text class="t" x="'+lx+'" y="'+(ly+5)+'">STRESS RODS</text>'+
     '<path class="ld" d="M'+(cx-14)+' '+cy+'H204"/><text class="t" x="196" y="'+(cy+5)+'" text-anchor="end">CORE</text>'+
     '<text class="t s1" x="242" y="440" text-anchor="end">SLOW AXIS</text></g>';
  /* step 2 / 3 labels (fiber aligned) */
  g+='<g id="ozL2"><text class="t s1" x="'+(cx+14)+'" y="508">'+(mob?"SLOW AXIS = KEY":"SLOW AXIS IN LINE WITH THE KEY")+'</text></g>';
  g+='<g id="ozL3"><text class="t s1" x="576" y="'+(cy-6)+'">EXTINCTION RATIO</text><text class="t" x="576" y="'+(cy+18)+'">'+(mob?"20 TO 40 dB":"20 dB UP TO 40 dB")+'</text>'+
     '<text class="t" x="'+(mob?20:30)+'" y="'+(cy+5)+'">'+(mob?"LOCKED":"FIXED IN PLACE")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="508">'+(mob?"1 · PANDA FIBER":"1 · PANDA-TYPE PM FIBER")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="508">'+(mob?"2 · ALIGN":"2 · ALIGNED TO THE KEY")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="508">'+(mob?"3 · LOCK":"3 · LOCKED AND MEASURED")+'</text></g>';
  return g+'</svg>';
}
function scene(){return ozScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),fib:$("#ozFib",svg),ax:$("#ozFib .ax",svg),core:$("#ozFib .core",svg),coG:$("#ozCoG",svg),key:$("#ozKey",svg),pol:$("#ozPol",svg),lock:$("#ozLock",svg),
    L1:$("#ozL1",svg),L2:$("#ozL2",svg),L3:$("#ozL3",svg),rods:$$("#ozFib .rod",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),t0:$("svg>text.t",svg)||svg.querySelector("text.t")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b)}
    E.rods.forEach(function(r){r.style.fillOpacity=(.9*b).toFixed(3)});
    op(E.ax,b);op(E.core,b);op(E.coG,b*(.55+.45*seg(p,.7,.8)));
    /* step 1 labels, gone before the fiber turns */
    op(E.L1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));
    /* step 2: the key, then the turn */
    op(E.key,b*seg(p,.36,.44));
    var r=OZ_A0*(1-ease(seg(p,.44,.6)));
    E.fib.setAttribute("transform","rotate("+r.toFixed(2)+" "+OZ_CX+" "+OZ_CY+")");
    op(E.L2,b*seg(p,.58,.64));
    /* step 3: locked, then polarized light along the slow axis */
    op(E.lock,b*seg(p,.68,.76));
    var pu=.65+.35*Math.sin(p*Math.PI*18);
    op(E.pol,b*seg(p,.74,.82)*pu);
    op(E.L3,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.33,.38)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.78));
  };
}

/* the story scene (BL/BY/DB): how an Immundnz study runs, drawn in fine engraved line inside ONE culture well that stays put.
   Step 1 Model: monocytes in the well differentiate into macrophages, polarised to inflammatory M1 (crimson) or regulatory M2 (blue).
   Step 2 Challenge: an antibody-coated target cell enters; the nearest macrophage binds it through Fc receptors and engulfs it (ADCP).
   Step 3 Read out: a flow cytometry dot plot separates the phagocytosed from the non-phagocytosed population and gates it.
   Sources: immundnz.com assay pages (M1/M2 polarisation, ADCP, flow cytometry readouts). Schematic; positions and dot clouds are
   illustrative, not a real result. Driven by the scrubbed story progress. */
var WEL={c:[290,282],R:226};
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,C=WEL.c;
  function pol(r,a,cx,cy){a=a*Math.PI/180;return [(cx==null?C[0]:cx)+r*Math.cos(a),(cy==null?C[1]:cy)+r*Math.sin(a)]}
  function arc(r,a0,a1,sw){var p0=pol(r,a0),p1=pol(r,a1);return 'M'+f(p0[0])+' '+f(p0[1])+'A'+r+' '+r+' 0 0 '+(sw==null?1:sw)+' '+f(p1[0])+' '+f(p1[1])}
  function blob(cx,cy,r,ph,k){var d='',n=72,j;for(j=0;j<=n;j++){var t=j/n*Math.PI*2,rr=r*(1+k*Math.sin(5*t+ph)+k*.45*Math.sin(9*t+ph*1.7)+k*.25*Math.sin(3*t-ph));d+=(j?'L':'M')+f(cx+rr*Math.cos(t))+' '+f(cy+rr*Math.sin(t))}return d+'Z'}
  function rnd(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="iglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#5cb6ee" stop-opacity=".10"/><stop offset="1" stop-color="#5cb6ee" stop-opacity="0"/></radialGradient></defs>';
  /* the well: rim, inner wall, engraved graduation */
  g+='<g id="scBase"><circle cx="'+C[0]+'" cy="'+C[1]+'" r="'+(WEL.R+30)+'" fill="url(#iglow)" class="pg"/>';
  g+='<circle class="rim sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+WEL.R+'"/><circle class="rim2 sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+(WEL.R-14)+'"/>';
  for(i=0;i<72;i++){var a=i*5,p0=pol(WEL.R-14,a),p1=pol(WEL.R-(i%6?20:28),a);g+='<path class="hat sD" d="M'+f(p0[0])+' '+f(p0[1])+'L'+f(p1[0])+' '+f(p1[1])+'"/>'}
  g+='<text class="t" x="'+C[0]+'" y="'+(C[1]+WEL.R+36)+'" text-anchor="middle">'+(mob?'ONE WELL':'ONE WELL · HUMAN CELLS IN CULTURE')+'</text></g>';

  /* step 1: six monocytes become macrophages, three M1 (crimson) and three M2 (blue) */
  var CELLS=[[20,1],[80,0],[140,1],[200,0],[260,1],[320,0]];
  g+='<g id="md">';
  CELLS.forEach(function(q,k){var p=pol(138,q[0]),cl=q[1]?'m1':'m2',x=p[0],y=p[1];
    g+='<g class="cell '+cl+'">'+
      '<g class="mono"><circle class="mo" cx="'+f(x)+'" cy="'+f(y)+'" r="17"/><path class="nu" d="M'+f(x-8)+' '+f(y-4)+'C'+f(x-6)+' '+f(y-12)+' '+f(x+8)+' '+f(y-11)+' '+f(x+8)+' '+f(y-2)+'C'+f(x+8)+' '+f(y+6)+' '+f(x+1)+' '+f(y+2)+' '+f(x-2)+' '+f(y+6)+'C'+f(x-6)+' '+f(y+9)+' '+f(x-10)+' '+f(y+3)+' '+f(x-8)+' '+f(y-4)+'Z"/></g>'+
      '<g class="mac"><path class="mc" d="'+blob(x,y,34,k*1.3,.11)+'"/><path class="mc2" d="'+blob(x,y,24,k*1.3+.6,.07)+'"/><circle class="nu2" cx="'+f(x-4)+'" cy="'+f(y+2)+'" r="9"/></g></g>'});
  var lg=[566,96];
  g+='<g class="lgd"><circle class="d1c" cx="'+lg[0]+'" cy="'+lg[1]+'" r="6"/><text class="a" x="'+(lg[0]+16)+'" y="'+(lg[1]+5)+'">'+(mob?'M1':'M1 · INFLAMMATORY')+'</text>'+
    '<circle class="d2c" cx="'+lg[0]+'" cy="'+(lg[1]+(mob?40:30))+'" r="6"/><text class="b" x="'+(lg[0]+16)+'" y="'+(lg[1]+(mob?45:35))+'">'+(mob?'M2':'M2 · REGULATORY')+'</text></g>';
  g+='</g>';

  /* step 2: the antibody-coated target cell in the centre; the M1 macrophage at 20 degrees binds and engulfs it */
  g+='<g id="ch"><path class="tgt" d="'+blob(C[0],C[1],50,2.2,.05)+'"/><path class="tgt2" d="'+blob(C[0],C[1],38,4.1,.06)+'"/><circle class="tnu" cx="'+(C[0]+4)+'" cy="'+(C[1]-3)+'" r="16"/>';
  for(i=0;i<12;i++){var aa=i*30+8,b0=pol(53,aa),b1=pol(63,aa),l=pol(70,aa-9),r2=pol(70,aa+9);
    g+='<path class="ab" d="M'+f(b0[0])+' '+f(b0[1])+'L'+f(b1[0])+' '+f(b1[1])+'M'+f(l[0])+' '+f(l[1])+'L'+f(b1[0])+' '+f(b1[1])+'L'+f(r2[0])+' '+f(r2[1])+'"/>'}
  /* two pseudopods start at the macrophage side (20 deg) and wrap around the target in opposite directions */
  g+='<path class="eng" d="'+arc(80,20,-70,0)+'"/><path class="eng" d="'+arc(80,20,110,1)+'"/>';
  var tx=mob?24:30;
  g+='<path class="ldr" d="M'+f(C[0]-40)+' '+f(C[1]-40)+'L'+(C[0]-120)+' 62H'+tx+'"/><text class="a" x="'+tx+'" y="50">'+(mob?'TARGET CELL':'TARGET CELL · ANTIBODY-COATED')+'</text>';
  var e0=pol(138,20);
  g+='<path class="ldr" d="M'+f(e0[0]+20)+' '+f(e0[1]+28)+'L520 470H'+(mob?600:640)+'"/><text class="a" x="'+(mob?600:640)+'" y="458" text-anchor="end">'+(mob?'ADCP':'ADCP · Fc–FcR')+'</text></g>';

  /* step 3: the flow cytometry dot plot, two populations and the gate */
  var P={x:566,y:170,w:210,h:240},rn=rnd(7);
  g+='<g id="ro"><path class="ax" d="M'+P.x+' '+P.y+'V'+(P.y+P.h)+'H'+(P.x+P.w)+'"/>';
  for(i=1;i<5;i++){g+='<path class="gtk" d="M'+(P.x+i*P.w/5)+' '+(P.y+P.h)+'v6M'+P.x+' '+(P.y+P.h-i*P.h/5)+'h-6"/>'}
  for(i=0;i<110;i++){var u1=rn(),u2=rn(),u3=rn(),u4=rn(),z=Math.sqrt(-2*Math.log(u1+1e-6))*Math.cos(2*Math.PI*u2),z2=Math.sqrt(-2*Math.log(u3+1e-6))*Math.cos(2*Math.PI*u4);
    var hi=i<46,cx=P.x+(hi?.7:.27)*P.w+z*(hi?17:22),cy=P.y+(hi?.3:.72)*P.h+z2*(hi?19:22);
    cx=Math.max(P.x+6,Math.min(P.x+P.w-4,cx));cy=Math.max(P.y+4,Math.min(P.y+P.h-6,cy));
    g+='<circle class="dot '+(hi?'dh':'dl')+'" cx="'+f(cx)+'" cy="'+f(cy)+'" r="2.6"/>'}
  g+='<path class="gate" d="M'+(P.x+.47*P.w)+' '+(P.y+.06*P.h)+'H'+(P.x+.95*P.w)+'V'+(P.y+.53*P.h)+'H'+(P.x+.47*P.w)+'Z"/>';
  g+='<text class="a" x="'+(P.x+.47*P.w)+'" y="'+(P.y-14)+'">'+(mob?'ENGULFED':'PHAGOCYTOSED')+'</text>';
  g+='<text class="t" x="'+(P.x+P.w)+'" y="'+(P.y+P.h+30)+'" text-anchor="end">TARGET DYE →</text>';
  g+='<text class="t" x="'+(P.x-16)+'" y="'+(P.y+P.h)+'" transform="rotate(-90 '+(P.x-16)+' '+(P.y+P.h)+')">'+(mob?'MACROPHAGE →':'MACROPHAGE MARKER →')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .pg",svg),md:$("#md",svg),cells:$$("#md .cell",svg),lgd:$("#md .lgd",svg),
    ch:$("#ch",svg),tg:dl("#ch .tgt, #ch .tgt2"),ab:$$("#ch .ab",svg),eng:dl("#ch .eng"),chl:$$("#ch .ldr, #ch text",svg),
    ro:$("#ro",svg),ax:dl("#ro .ax"),dots:$$("#ro .dot",svg),gate:dl("#ro .gate"),rot:$$("#ro text",svg)};
  E.cells.forEach(function(c){c._mo=$(".mono",c);c._mc=$(".mac",c)});
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: monocytes in, then each turns into a macrophage; the legend comes in with the colour */
    op(E.md,seg(b,.5,1));
    E.cells.forEach(function(c,k){var q=seg(p,.04+k*.025,.16+k*.025);op(c._mo,1-q);op(c._mc,q);c.classList.toggle("pol",seg(p,.18,.26)>.5)});
    op(E.lgd,seg(p,.18,.26));
    /* step 2: the target arrives, antibodies coat it, the M1 macrophage engulfs it; the other cells step back */
    var s2=seg(p,.36,.44);op(E.ch,b*s2);draw(E.tg,s2);
    E.ab.forEach(function(el,k){op(el,seg(p,.42+k*.006,.48+k*.006))});
    draw(E.eng,seg(p,.5,.62));E.chl.forEach(function(el){op(el,seg(p,.44,.5)*(1-seg(p,.66,.72)))});
    E.cells.forEach(function(c,k){if(k)c.style.opacity=(1-.5*seg(p,.5,.6)).toFixed(3)});
    /* the engulfing macrophage closes in on the target (138 -> 110 from the well centre, along 20 degrees) */
    var mvq=seg(p,.44,.54),dx=-28*Math.cos(Math.PI/9)*mvq,dy=-28*Math.sin(Math.PI/9)*mvq;E.cells[0].setAttribute("transform","translate("+dx.toFixed(1)+" "+dy.toFixed(1)+")");
    /* step 3: the plot draws, dots land population by population, the gate closes on the phagocytosed cells */
    var s3=seg(p,.68,.74);op(E.ro,b*s3);draw(E.ax,s3);
    E.dots.forEach(function(el,k){var o=k<46?seg(p,.78+k*.0016,.82+k*.0016):seg(p,.72+(k-46)*.0012,.76+(k-46)*.0012);el.style.opacity=o.toFixed(2)});
    draw(E.gate,seg(p,.86,.95));E.rot.forEach(function(el,k){op(el,k?s3:seg(p,.9,.96))});
  };
}

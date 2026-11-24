/* The story scene (DB/BL/BY): how the MIRACLE breast coil works, as WaveTronica describes it (wavetronica.com, MIRACLE:
   "a plug-and-play add on for existing MRI machines"; "high-field strength (7T) phosphorus signal detection"; their figure
   "standard: low resolution, single peak / MIRACLE: high resolution, several biomarker peaks"; "determines the efficacy of
   chemotherapy ... after one to two round[s] ... In current practice patients receive six rounds"). ONE fine-line drawing:
   a 7T scanner in side view with its table; 1) the coil rides the table into the bore; 2) RF arcs (the logo's own arcs)
   and the phosphorus spectrum: one broad standard peak, then several resolved MIRACLE peaks; 3) six chemotherapy rounds,
   with the MIRACLE read after round two. Driven by the scrubbed progress. */
function wtPath(a){var d="";for(var i=0;i<a.length;i++)d+=(i?"L":"M")+a[i][0].toFixed(1)+" "+a[i][1].toFixed(1);return d}
function wtCurve(f){var a=[];for(var x=60;x<=600;x+=2)a.push([x,440-f(x)]);return wtPath(a)}
function wtG(x,c,s,h){var d=(x-c)/s;return h*Math.exp(-d*d*.5)}
function storyScene(o){
  var mob=o.mob,g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 640 472" aria-hidden="true">',i;
  /* the scanner, side view: housing, bore, table, floor */
  g+='<g id="wtBase"><path class="wl sD" d="M326 40H474Q500 40 500 66V300H300V66Q300 40 326 40Z"/>';
  g+='<path class="wo sD" d="M300 118H500M300 232H500"/><ellipse class="wl sD" cx="300" cy="175" rx="16" ry="57"/>';
  g+='<path class="wo sD" d="M40 300H600"/><path class="wl sD" d="M40 214H600"/><path class="wo sD" d="M70 222H270M120 222V300M220 222V300"/></g>';
  /* the coil: a slab with two cups and its cable, riding the table */
  g+='<g id="wtCoil"><path class="cl" d="M0 214V198Q0 194 4 194H106Q110 194 110 198V214Z"/><path class="cu" d="M16 194Q34 180 52 194M58 194Q76 180 94 194"/><path class="cb" d="M0 206Q-30 206 -52 212"/></g>';
  /* RF arcs over the coil, inside the bore (step 2) */
  g+='<g id="wtArc">';for(i=0;i<3;i++){var r=14+i*12;g+='<path class="ar" d="M'+(400-r)+' 180A'+r+' '+r+' 0 0 1 '+(400+r)+' 180"/>'}g+='</g>';
  /* the phosphorus spectrum (step 2) */
  var std=wtCurve(function(x){return wtG(x,330,70,44)});
  var mir=wtCurve(function(x){return wtG(x,150,7,46)+wtG(x,214,6,34)+wtG(x,262,8,58)+wtG(x,330,6,84)+wtG(x,392,7,40)+wtG(x,470,6,66)+wtG(x,520,9,28)});
  g+='<g id="wtSpec"><path class="wo" d="M60 440H600"/><path class="sd" id="wtStd" d="'+std+'"/><path class="sp" id="wtMir" d="'+mir+'"/></g>';
  /* six chemotherapy rounds (step 3) */
  g+='<g id="wtTl"><path class="wo" d="M80 404H520"/>';for(i=0;i<6;i++)g+='<circle class="rd" cx="'+(80+i*88)+'" cy="404" r="10"/>';g+='<circle class="rg" id="wtRg" cx="168" cy="404" r="17"/></g>';
  /* labels, each clear of every stroke (DR3) */
  if(mob){
    g+='<g id="lb1"><text class="a" x="40" y="30">7 T MRI</text><text class="t" x="40" y="166">BREAST COIL</text></g>';
    g+='<g id="lb2"><text class="t" x="60" y="336">1 PEAK</text><text class="a" x="600" y="336" text-anchor="end">SEVERAL PEAKS</text></g>';
    g+='<g id="lb3"><text class="t" x="60" y="336">CHEMO ROUNDS</text><text class="a" x="60" y="464">AFTER 1–2</text><text class="t" x="600" y="464" text-anchor="end">TODAY · AFTER 6</text></g>';
  }else{
    g+='<g id="lb1"><text class="a" x="400" y="26" text-anchor="middle">7 TESLA MRI SCANNER</text><text class="t" x="40" y="170">PLUG-AND-PLAY COIL</text></g>';
    g+='<g id="lb2"><text class="t" x="60" y="336">STANDARD · ONE PEAK</text><text class="a" x="600" y="336" text-anchor="end">MIRACLE · SEVERAL BIOMARKER PEAKS</text></g>';
    g+='<g id="lb3"><text class="t" x="60" y="336">CHEMOTHERAPY ROUNDS</text><text class="a" x="80" y="452">MIRACLE · AFTER 1–2</text><text class="t" x="560" y="452" text-anchor="end">TODAY · AFTER 6</text></g>';
  }
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#wtBase .sD"),std:dl("#wtStd")[0],mir:dl("#wtMir")[0],coil:$("#wtCoil",svg),arcs:$$("#wtArc .ar",svg),spec:$("#wtSpec",svg),tl:$("#wtTl",svg),rds:$$("#wtTl .rd",svg),rg:$("#wtRg",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 1. the coil rides the table into the bore */
    var mv=seg(p,.06,.27);E.coil.setAttribute("transform","translate("+(70+275*mv).toFixed(1)+" 0)");op(E.coil,b);
    op(E.l1,b*seg(p,.03,.09)*(1-seg(p,.29,.33)));
    /* 2. RF arcs pulse over the coil; the spectrum: the broad standard peak, then the resolved MIRACLE peaks */
    var on2=seg(p,.33,.38)*(1-seg(p,.64,.68)),ph=p*14;
    E.arcs.forEach(function(a,i){var f=((ph-i*.33)%1+1)%1;op(a,b*on2*(.25+.75*(1-f)))});
    op(E.spec,b*seg(p,.34,.38)*(1-seg(p,.64,.68)));dr(E.std,seg(p,.36,.44));dr(E.mir,seg(p,.43,.58));
    op(E.l2,b*seg(p,.46,.52)*(1-seg(p,.62,.66)));
    /* 3. six rounds of chemotherapy; MIRACLE reads the response after round two */
    op(E.tl,b*seg(p,.68,.72));
    E.rds.forEach(function(c,i){c.classList.toggle("on",p>.72+i*.035)});
    op(E.rg,seg(p,.8,.85));
    op(E.l3,b*seg(p,.74,.8));
  };
}

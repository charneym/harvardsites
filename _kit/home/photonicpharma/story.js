/* The story scene (DB/BL): how Photonic Pharma's platform works (photonicpharma.com About: three critical steps), as ONE
   continuous scene in fine line, filling the frame: a living HEK293 cell carrying the FRET biosensor (the target protein in
   its membrane with a green donor and a red acceptor tag); the 1536-well plate read well by well by the fluorescence
   lifetime plate reader's laser; and the lifetime decay that separates a hit from the rest.
   Step 1 (engineer): the two tags light and the FRET coupling between them shows. Step 2 (read): the laser head scans
   the plate band by band, and the reference decay is traced. Step 3 (confirm): the wells whose lifetime shifted light
   orange and the hit's decay separates from the reference. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var CX=152,CY=206,CR=118;                        /* the cell */
var SX=206,SY=124;                               /* the biosensor in the membrane */
var PX=316,PY=96,PW=420,PH=250,NC=48,NR=32;      /* the 1536-well plate (48 x 32) */
var GX=330,GY=394,GW=396,GH=112;
var MX=150,MY=488;                               /* the magnified biosensor */                 /* the decay plot */
var HITS=[[7,5],[19,11],[31,4],[40,20],[12,24],[26,27],[44,9]];
function wx(c){return PX+18+c*((PW-36)/(NC-1))}
function wy(r){return PY+18+r*((PH-36)/(NR-1))}
function decay(tau){var d='',i;for(i=0;i<=60;i++){var t=i/60,x=GX+t*GW,y=GY+8+(GH-16)*(1-Math.exp(-t*4.2/tau));d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return d}
function vesScene(o){
  var g='',i,r,c;
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="scScanClip"><rect id="scScanR" x="'+PX+'" y="'+PY+'" width="0" height="'+PH+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* ---- the living cell: membrane, nucleus, ER folds ---- */
  g+='<path class="wl sD" d="M'+(CX-CR)+' '+CY+'C'+(CX-CR)+' '+(CY-CR*.8)+' '+(CX-CR*.5)+' '+(CY-CR*1.02)+' '+CX+' '+(CY-CR)+'C'+(CX+CR*.62)+' '+(CY-CR*.98)+' '+(CX+CR*1.04)+' '+(CY-CR*.58)+' '+(CX+CR)+' '+CY+'C'+(CX+CR*.96)+' '+(CY+CR*.7)+' '+(CX+CR*.5)+' '+(CY+CR*1.04)+' '+CX+' '+(CY+CR)+'C'+(CX-CR*.6)+' '+(CY+CR*.96)+' '+(CX-CR)+' '+(CY+CR*.62)+' '+(CX-CR)+' '+CY+'Z"/>';
  g+='<path class="wo sD" d="M'+(CX-CR+10)+' '+CY+'C'+(CX-CR+10)+' '+(CY-CR*.74)+' '+(CX-CR*.46)+' '+(CY-CR*.92)+' '+CX+' '+(CY-CR+10)+'"/>';
  g+='<circle class="wl sD" cx="'+(CX-24)+'" cy="'+(CY+34)+'" r="40"/>';
  g+='<circle class="en sD" cx="'+(CX-30)+'" cy="'+(CY+28)+'" r="11"/>';
  for(i=0;i<4;i++){var oy=CY-58+i*15;
    g+='<path class="en sD" d="M'+(CX-74+i*6)+' '+oy+'c18-12 34 12 52 0s34-12 52 0s30 10 46-2"/>'}
  g+='<path class="en sD" d="M'+(CX-60)+' '+(CY+94)+'c26 12 66 10 92-12"/>';
  /* the biosensor: the target pump in the membrane (TM helices + cytoplasmic headpiece) */
  g+='<path class="wl sD" d="M'+(SX-14)+' '+(SY+38)+'v-26M'+(SX-5)+' '+(SY+40)+'v-28M'+(SX+4)+' '+(SY+40)+'v-28M'+(SX+13)+' '+(SY+38)+'v-26"/>';
  g+='<path class="wl sD" d="M'+(SX-22)+' '+(SY+12)+'c-6-20 6-36 20-38c18-2 30 14 26 38"/>';
  g+=T('t',22,64,o.mob?'LIVING CELL':'LIVING HUMAN CELL · HEK293',null,1);
  /* ---- the biosensor, magnified: membrane bilayer, TM helix bundle, cytoplasmic headpiece ---- */
  g+='<path class="wo sD" d="M'+(SX-6)+' '+(SY+44)+'L'+(MX-60)+' '+(MY-118)+'M'+(SX+10)+' '+(SY+44)+'L'+(MX+70)+' '+(MY-118)+'"/>';
  g+='<path class="en sD" d="M24 '+(MY+6)+'H282M24 '+(MY+34)+'H282"/>';
  for(i=0;i<6;i++){var hx=MX-30+i*12;g+='<path class="wl sD" d="M'+hx+' '+(MY+46)+'c-5-6 5-10 0-16s5-10 0-16s5-10 0-16"/>'}
  g+='<path class="wl sD" d="M'+(MX-40)+' '+(MY-2)+'c-14-30 -6-62 22-74c22-10 40-6 54 8c18 18 18 48 2 66"/>';
  g+='<path class="en sD" d="M'+(MX-10)+' '+(MY-60)+'c10 6 20 6 30-4M'+(MX-20)+' '+(MY-30)+'c14 8 30 6 40-6"/>';
  g+=T('t',24,MY+62,'TARGET PROTEIN AS BIOSENSOR',null,1);
  /* ---- cells dispensed into the plate ---- */
  g+='<path class="wo sD" d="M'+(CX+CR-6)+' '+(CY-40)+'C'+(CX+CR+40)+' '+(CY-60)+' '+(PX-30)+' '+(PY+PH*.42)+' '+(PX-4)+' '+(PY+PH*.42)+'"/>';
  /* ---- the 1536-well plate ---- */
  g+='<path class="wl sD" d="M'+(PX+10)+' '+PY+'H'+(PX+PW)+'V'+(PY+PH)+'H'+PX+'V'+(PY+10)+'Z"/>';
  g+='<path class="wo sD" d="M'+(PX+6)+' '+(PY+8)+'H'+(PX+PW-6)+'V'+(PY+PH-6)+'H'+(PX+6)+'Z"/>';
  var wells='';for(r=0;r<NR;r++)for(c=0;c<NC;c++)wells+='M'+(wx(c)-1.5).toFixed(1)+' '+wy(r).toFixed(1)+'a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0';
  g+='<path class="wells" d="'+wells+'"/>';
  g+='<path class="wells lit" clip-path="url(#scScanClip)" d="'+wells+'"/>';
  g+=T('t',PX+PW,PY-16,'1536-WELL PLATE','end',1);
  /* ---- the decay plot: lifetime read from every well ---- */
  g+='<path class="wl sD" d="M'+GX+' '+(GY-4)+'V'+(GY+GH)+'H'+(GX+GW)+'"/>';
  g+=T('t',GX,GY-14,o.mob?'LIFETIME DECAY':'FLUORESCENCE LIFETIME DECAY',null,1);
  g+=T('t',GX+GW,GY+GH+24,'TIME (NS)','end');
  g+='</g>';
  /* ---- the two tags on the sensor and the FRET coupling ---- */
  g+='<g id="scTag"><g class="md tg gfp" transform="translate('+(MX-74)+' '+(MY-42)+') scale(1.6)"><path d="M-10 -12h20v24h-20Z"/><path class="cd" d="M-5 -12v24M0 -12v24M5 -12v24"/></g>'+
     '<g class="md tg rfp" transform="translate('+(MX+66)+' '+(MY-92)+') scale(1.6) rotate(18)"><path d="M-10 -12h20v24h-20Z"/><path class="cd" d="M-5 -12v24M0 -12v24M5 -12v24"/></g>'+
     '<path class="fret" d="M'+(MX-70)+' '+(MY-66)+'Q'+(MX-20)+' '+(MY-138)+' '+(MX+46)+' '+(MY-104)+'"/></g>';
  /* ---- the reader's laser head ---- */
  g+='<g id="scHead"><path class="wl" d="M-16 -30h32v18h-32Z"/><path class="beam" d="M0 -12V0"/><circle class="spot" r="4"/></g>';
  /* ---- hit wells ---- */
  g+='<g id="scHit">';HITS.forEach(function(h,k){g+='<circle class="hw" data-k="'+k+'" cx="'+wx(h[0]).toFixed(1)+'" cy="'+wy(h[1]).toFixed(1)+'" r="5"/>'});g+='</g>';
  /* ---- decay curves: reference and the hit ---- */
  g+='<path id="scRef" class="dc" d="'+decay(1)+'"/>';
  g+='<path id="scHitC" class="dc hc" d="'+decay(1.75)+'"/>';
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="'+GX+'" y="'+ly+'">'+(o.mob?'TWO TAGS · ONE TARGET':'GREEN DONOR · RED ACCEPTOR · ONE TARGET')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+GX+'" y="'+ly+'">'+(o.mob?'LIFETIME READ, WELL BY WELL':'LIFETIME READ WELL BY WELL · HIGH THROUGHPUT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+GX+'" y="'+ly+'">'+(o.mob?'HITS CONFIRMED':'LIFETIME SHIFTS · HITS TO FUNCTIONAL ASSAYS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return vesScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .wells",svg),tag:$$("#scTag .tg",svg),fret:$("#scTag .fret",svg),
    head:$("#scHead",svg),scan:$("#scScanR",svg),hit:$$("#scHit .hw",svg),ref:dl("#scRef"),hc:dl("#scHitC"),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var eng=seg(p,.04,.28),read=seg(p,.34,.66),conf=seg(p,.68,.94);
    /* 1. the tags light on the target and couple */
    E.tag.forEach(function(el,k){op(el,b*(.4+.6*Math.min(1,Math.max(0,eng*1.6-k*.3))));el.classList.toggle("on",eng>.45)});
    op(E.fret,b*seg(p,.16,.28));
    /* 2. the head scans the plate band by band; the read wells brighten */
    var s=Math.min(1,read),band=Math.min(3,Math.floor(s*4)),u=s*4-band,
      hx=PX+18+(PW-36)*(band%2?1-u:u),hy=PY+40+band*((PH-80)/3);
    if(s>=1){hx=PX+PW-18;hy=PY+PH-40}
    E.head.setAttribute("transform","translate("+hx.toFixed(1)+" "+hy.toFixed(1)+")");
    op(E.head,b*seg(p,.3,.36)*(1-.7*seg(p,.88,.96)));
    E.scan.setAttribute("width",(PW*Math.min(1,read*1.05+conf)).toFixed(1));
    draw(E.ref,b);
    /* 3. the shifted wells light and the hit's decay separates from the reference */
    E.hit.forEach(function(el,k){var t=Math.min(1,Math.max(0,conf*1.6-k*.09));op(el,b*t);el.classList.toggle("on",t>.6)});
    draw(E.hc,b*conf);
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

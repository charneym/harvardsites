/* The story scene (DB/BY): Aelis Farma's own mechanism (aelisfarma.com, Science: "The previous generation of CB1 antagonists
   block not only a pathological hyperactivity but the entire activity of the CB1 receptor ... CB1-SSi do not block all of
   the cellular activities of the CB1, but inhibit selectively a subset of the cellular activity of the CB1 leaving the others
   undisturbed"), drawn as ONE fine-line scene that fills the frame: a stretch of cell membrane (lipid heads and tails), the
   CB1 receptor's seven helices spanning it, an agonist in its pocket, and three signalling paths running down into the cell.
   Frame 0 is already complete: the receptor is hyperactive and every path carries signal, the one behind the pathology
   (right, in the Aelis orange) carrying the most.
   Step 2 (blocked): an antagonist takes the pocket; every path goes quiet, normal functions included.
   Step 3 (selective): the antagonist leaves, the agonist returns, a CB1-SSi (logo cyan) seats on the receptor; only the
   pathological path goes quiet. Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
function bzp(P,t){var u=1-t;return [u*u*u*P[0]+3*u*u*t*P[2]+3*u*t*t*P[4]+t*t*t*P[6],u*u*u*P[1]+3*u*u*t*P[3]+3*u*t*t*P[5]+t*t*t*P[7]]}
function f1(v){return v.toFixed(1)}
var MT=176,MB=244;              /* membrane head rows */
var RX=[314,336,358,380,402,424,446]; /* helix centres */
var PATHS=[[362,282,362,360,180,350,180,448],[380,282,380,340,380,400,380,448],[398,282,398,360,580,350,580,448]];
var POCK=[380,138],SSI=[470,258];
function cpath(x,y,r){return 'M'+f1(x-r)+' '+f1(y)+'a'+r+' '+r+' 0 1 0 '+f1(2*r)+' 0a'+r+' '+r+' 0 1 0 '+f1(-2*r)+' 0'}
function storyScene(o){
  var g='',mob=o.mob,i,x;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="20 64 720 530" aria-hidden="true">';
  g+='<defs><radialGradient id="gHot"><stop offset="0" stop-color="#e38a3a" stop-opacity=".5"/><stop offset="1" stop-color="#e38a3a" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gOk"><stop offset="0" stop-color="#4cc2de" stop-opacity=".55"/><stop offset="1" stop-color="#4cc2de" stop-opacity="0"/></radialGradient></defs>';
  /* glows behind the end nodes */
  g+='<g id="scGlow">';PATHS.forEach(function(P,k){g+='<circle class="glow" cx="'+P[6]+'" cy="'+(P[7]+20)+'" r="46" fill="url(#'+(k==2?'gHot':'gOk')+')"/>'});g+='</g>';
  g+='<g id="scBase">';
  /* membrane: two leaflets of lipid heads with their tails, interrupted by the receptor */
  for(x=40;x<=720;x+=16){if(x>296&&x<486)continue;
    g+='<path class="wo sD" d="'+cpath(x,MT,5)+'"/><path class="wo sD" d="'+cpath(x,MB,5)+'"/>';
    g+='<path class="wt sD" d="M'+(x-2)+' '+(MT+5)+'L'+(x-2)+' '+(MT+27)+'M'+(x+2)+' '+(MT+5)+'L'+(x+2)+' '+(MT+25)+'M'+(x-2)+' '+(MB-5)+'L'+(x-2)+' '+(MB-27)+'M'+(x+2)+' '+(MB-5)+'L'+(x+2)+' '+(MB-25)+'"/>'}
  /* the receptor: seven helices spanning the membrane, joined by loops alternately outside and inside the cell */
  RX.forEach(function(cx,k){var t=150+(k%2?6:0),b=270-(k%2?0:6);
    g+='<path class="wl sD" d="M'+(cx-9)+' '+(t+9)+'L'+(cx-9)+' '+(b-9)+'A9 9 0 0 0 '+(cx+9)+' '+(b-9)+'L'+(cx+9)+' '+(t+9)+'A9 9 0 0 0 '+(cx-9)+' '+(t+9)+'"/>';
    if(k<6){var nx=RX[k+1];g+=k%2?'<path class="wl sD" d="M'+(cx+4)+' '+(b-2)+'C'+(cx+6)+' '+(b+14)+' '+(nx-6)+' '+(b+14)+' '+(nx-4)+' '+(b-4)+'"/>':'<path class="wl sD" d="M'+(cx+4)+' '+(t+2)+'C'+(cx+6)+' '+(t-14)+' '+(nx-6)+' '+(t-14)+' '+(nx-4)+' '+(t+4)+'"/>'}});
  /* signalling paths into the cell, and their end nodes */
  PATHS.forEach(function(P,k){g+='<path class="pth sD'+(k==2?' hot':'')+'" d="M'+P[0]+' '+P[1]+'C'+P[2]+' '+P[3]+' '+P[4]+' '+P[5]+' '+P[6]+' '+P[7]+'"/>'+
    '<path class="nd sD'+(k==2?' hot':'')+'" d="'+cpath(P[6],P[7]+20,14)+'"/>'});
  g+='</g>';
  /* state layers: lit paths (cyan / orange), pulses, ligands */
  g+='<g id="scLit">';PATHS.forEach(function(P,k){g+='<path class="lit'+(k==2?' hot':'')+'" d="M'+P[0]+' '+P[1]+'C'+P[2]+' '+P[3]+' '+P[4]+' '+P[5]+' '+P[6]+' '+P[7]+'"/><circle class="ndf'+(k==2?' hot':'')+'" cx="'+P[6]+'" cy="'+(P[7]+20)+'" r="6"/>'});g+='</g>';
  g+='<g id="scPul">';PATHS.forEach(function(P,k){for(i=0;i<(k==2?5:3);i++)g+='<circle class="pul'+(k==2?' hot':'')+'" data-k="'+k+'" data-i="'+i+'" r="'+(k==2?3.6:3.2)+'" cx="'+P[0]+'" cy="'+P[1]+'"/>'});g+='</g>';
  g+='<circle class="ago" id="scAgo" cx="'+POCK[0]+'" cy="'+POCK[1]+'" r="9"/>';
  g+='<rect class="ant" id="scAnt" x="'+(POCK[0]-10)+'" y="'+(POCK[1]-10)+'" width="20" height="20"/>';
  g+='<rect class="ssi" id="scSsi" x="'+(SSI[0]-7)+'" y="'+(SSI[1]-7)+'" width="14" height="14" transform="rotate(45 '+SSI[0]+' '+SSI[1]+')"/>';
  /* labels, each leader stopping short of its text (DR) */
  g+='<g id="lMem"><text class="t" x="40" y="150">CELL MEMBRANE</text></g>';
  g+='<g id="lRec"><path class="ld" d="M452 150L474 128"/><text class="t" x="482" y="126">CB1 RECEPTOR</text></g>';
  g+='<g id="lAgo"><path class="ld" d="M368 132L318 112"/><text class="t" x="310" y="110" text-anchor="end">AGONIST</text></g>';
  g+='<g id="lAnt"><path class="ld" d="M368 132L318 112"/><text class="t" x="310" y="110" text-anchor="end">ANTAGONIST</text></g>';
  g+='<g id="lSsi"><path class="ld" d="M479 268L490 280"/><text class="t s" x="496" y="296">CB1-SSi</text></g>';
  g+='<g id="lNor"><path class="ld" d="M180 494V500H380V494"/><text class="t" x="280" y="524" text-anchor="middle">NORMAL FUNCTIONS</text></g>';
  g+='<g id="lHyp"><path class="ld hot" d="M556 494V500H604V494"/><text class="t h" x="580" y="524" text-anchor="middle">HYPERACTIVITY</text></g>';
  var ly=584,lx=40;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'AN OVERACTIVE CB1':'AN OVERACTIVE CB1 RECEPTOR DRIVES DISEASE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ALL ACTIVITY BLOCKED':'ANTAGONISTS SHUT DOWN ALL CB1 ACTIVITY')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ONLY THE EXCESS INHIBITED':'CB1-SSI INHIBIT ONLY THE EXCESS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),lit:$$("#scLit .lit",svg),ndf:$$("#scLit .ndf",svg),pul:$$("#scPul .pul",svg),glow:$$("#scGlow .glow",svg),
    ago:$("#scAgo",svg),ant:$("#scAnt",svg),ssi:$("#scSsi",svg),
    lMem:$("#lMem",svg),lRec:$("#lRec",svg),lAgo:$("#lAgo",svg),lAnt:$("#lAnt",svg),lSsi:$("#lSsi",svg),lNor:$("#lNor",svg),lHyp:$("#lHyp",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function grow(el,x,y,v){el.setAttribute("transform","translate("+x+" "+y+") scale("+(.4+.6*v).toFixed(3)+") translate("+(-x)+" "+(-y)+")"+(el===E.ssi?" rotate(45 "+x+" "+y+")":""))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var blk=sm(seg(p,.36,.5))*(1-sm(seg(p,.66,.78))),sel=sm(seg(p,.7,.84));
    /* activity of the normal paths (0,1) and of the pathological path (2) */
    var aN=1-blk,aH=(1-blk)*(1-sel);
    E.lit.forEach(function(el,k){op(el,b*(k==2?aH:aN))});
    E.ndf.forEach(function(el,k){op(el,b*(k==2?aH:aN))});
    E.glow.forEach(function(el,k){op(el,b*(k==2?aH:aN*.7))});
    /* pulses run down each path as the reader scrolls */
    E.pul.forEach(function(el){var k=+el.getAttribute("data-k"),i=+el.getAttribute("data-i"),n=k==2?5:3,P=PATHS[k];
      var t=((p*(k==2?9:6)+i/n)%1),q=bzp(P,t);el.setAttribute("cx",f1(q[0]));el.setAttribute("cy",f1(q[1]));
      op(el,b*(k==2?aH:aN)*sm(t/.12)*sm((1-t)/.12))});
    op(E.ago,b*(1-blk));op(E.ant,b*blk);grow(E.ant,POCK[0],POCK[1],blk);
    op(E.ssi,b*sel);grow(E.ssi,SSI[0],SSI[1],sel);
    op(E.lMem,b);op(E.lRec,b);
    op(E.lAgo,b*(1-seg(p,.36,.41))*1+b*seg(p,.74,.8)*seg(p,.36,.41));op(E.lAnt,b*seg(p,.43,.5)*(1-seg(p,.66,.71)));op(E.lSsi,b*sel);
    op(E.lNor,b);op(E.lHyp,b);
    op(E.l1,b*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.76,.84));
  };
}

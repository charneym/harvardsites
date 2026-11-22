/* The story scene (DB/BL): how an InCeRT implant works (theranano.com; NIH STTR R42CA224646 abstract; Prostate Cancer and
   Prostatic Diseases, 2026), as ONE continuous scene in fine line, filling the frame: a sagittal view of the prostate,
   the urethra running through it and the rectum beneath, with the brachytherapy template at the left.
   Frame 0 is already complete. Step 1 (place): four needle strands slide in through the template, laying titanium seeds
   and InCeRT spacers in alternation. Step 2 (release): docetaxel spreads from each spacer into the gland.
   Step 3 (sensitise): the seeds' dose fields grow and overlap the drug, and the tumour inside the gland shrinks.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var PX=420,PY=262,PRX=226,PRY=168;            /* the prostate */
var TPX=96;                                   /* the template grid, left of the gland (perineum side) */
var ROWS=[176,232,292,348];                   /* needle rows */
var SEED=30,SPC=40,GAP=8;                     /* lengths along a strand */
var PIECES=(function(){var a=[],r,k,x;for(r=0;r<ROWS.length;r++){x=PX-PRX+46+(r%2?18:0);
  for(k=0;k<7;k++){var sp=k%2===1,L=sp?SPC:SEED;if(x+L>PX+PRX*Math.sqrt(Math.max(0,1-Math.pow((ROWS[r]-PY)/PRY,2)))-30)break;
    a.push({r:r,x:x,L:L,sp:sp});x+=L+GAP}}return a})();
var TUM="M362 214c34-18 92-12 118 18c24 28 18 74-10 96c-30 24-86 26-116 2c-28-22-30-62-12-86c6-12 12-22 20-30Z";
function storyScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep){return (o.mob&&!keep)?'':'<text class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="dgl"><stop offset="0" stop-color="#a8cc62" stop-opacity=".55"/><stop offset=".6" stop-color="#a8cc62" stop-opacity=".18"/><stop offset="1" stop-color="#a8cc62" stop-opacity="0"/></radialGradient>'+
     '<clipPath id="pcl"><ellipse cx="'+PX+'" cy="'+PY+'" rx="'+(PRX-3)+'" ry="'+(PRY-3)+'"/></clipPath></defs>';
  g+='<g id="scBase">';
  /* the gland: capsule, inner zone, urethra through it, bladder neck above, rectum beneath */
  g+='<ellipse class="wl sD" cx="'+PX+'" cy="'+PY+'" rx="'+PRX+'" ry="'+PRY+'"/>';
  g+='<ellipse class="wo sD" cx="'+(PX+10)+'" cy="'+(PY-8)+'" rx="'+(PRX-40)+'" ry="'+(PRY-38)+'"/>';
  g+='<path class="wo sD" d="M'+(PX-PRX-30)+' '+(PY-6)+'C'+(PX-120)+' '+(PY-2)+' '+(PX+40)+' '+(PY-24)+' '+(PX+PRX+40)+' '+(PY-96)+'"/>';
  g+='<path class="wo sD" d="M'+(PX-PRX-30)+' '+(PY+8)+'C'+(PX-120)+' '+(PY+12)+' '+(PX+40)+' '+(PY-10)+' '+(PX+PRX+46)+' '+(PY-82)+'"/>';
  g+='<path class="wl sD" d="M'+(PX+80)+' '+(PY-PRY-4)+'C'+(PX+130)+' 30 '+(PX+300)+' 40 '+(PX+330)+' 120"/>';
  g+='<path class="wl sD" d="M'+(PX-PRX-10)+' '+(PY+PRY+50)+'C'+(PX-60)+' '+(PY+PRY+20)+' '+(PX+140)+' '+(PY+PRY+16)+' '+(PX+PRX+60)+' '+(PY+PRY+40)+'"/>';
  g+='<path class="wo sD" d="M'+(PX-PRX-10)+' '+(PY+PRY+78)+'C'+(PX-60)+' '+(PY+PRY+48)+' '+(PX+140)+' '+(PY+PRY+44)+' '+(PX+PRX+60)+' '+(PY+PRY+68)+'"/>';
  /* the template grid the needles pass through */
  g+='<path class="wl sD" d="M'+(TPX-8)+' 140V384h16V140Z"/>';
  ROWS.forEach(function(y){g+='<path class="en sD" d="M'+(TPX-14)+' '+y+'h28"/>'});
  /* the tumour, hatched inside the gland */
  g+='<path id="tum" class="tu sD" d="'+TUM+'"/>';
  g+=T('t',PX,PY-PRY-22,'PROSTATE','middle',1);
  g+=T('t',PX+PRX+44,PY-108,'URETHRA','end');
  g+=T('t',PX+40,PY+PRY+100,'RECTUM','middle');
  g+=T('t',TPX,o.mob?120:124,'TEMPLATE','middle',1);
  g+=T('t',PX+6,PY+15,'TUMOUR','middle');
  g+='</g>';
  /* drug halos and dose rings (clipped to the gland) */
  g+='<g id="scHalo" clip-path="url(#pcl)">';
  PIECES.forEach(function(p,k){if(p.sp)g+='<circle class="hl" data-k="'+k+'" cx="'+(p.x+p.L/2)+'" cy="'+ROWS[p.r]+'" r="44" fill="url(#dgl)"/>'});
  g+='</g><g id="scDose" clip-path="url(#pcl)">';
  PIECES.forEach(function(p,k){if(!p.sp)g+='<circle class="ds" data-k="'+k+'" cx="'+(p.x+p.L/2)+'" cy="'+ROWS[p.r]+'" r="10"/>'});
  g+='</g>';
  /* the strands: seeds (filled capsules) and InCeRT spacers (outlined capsules) */
  g+='<g id="scStr">';
  ROWS.forEach(function(y,r){g+='<g class="strand" data-r="'+r+'">';
    PIECES.forEach(function(p){if(p.r!==r)return;
      g+=p.sp?'<rect class="spc" x="'+p.x+'" y="'+(y-6)+'" width="'+p.L+'" height="12"/>':'<rect class="sd" x="'+p.x+'" y="'+(y-5)+'" width="'+p.L+'" height="10" rx="5"/>'});
    g+='<path class="ndl" d="M'+(TPX+8)+' '+y+'H'+(PX-PRX+40)+'"/></g>'});
  g+='</g>';
  g+='<g class="leg">'+(o.mob?'':'<rect class="sd" x="24" y="432" width="26" height="9" rx="4.5"/>'+T('t',60,441,'TITANIUM SEED')+'<rect class="spc" x="24" y="456" width="26" height="11"/>'+T('t',60,466,'INCeRT SPACER'))+'</g>';
  var ly=SCH-10;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'IN WITH THE SEEDS':'IN THE STRAND, IN AN INERT SPACER&#8217;S PLACE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'DOCETAXEL, RELEASED LOCALLY':'DOCETAXEL RELEASED INSIDE THE GLAND')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'DRUG + DOSE, TOGETHER':'RADIOSENSITISED · CHEMO AND DOSE TOGETHER')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, .leg",svg),str:$$("#scStr .strand",svg),
    halo:$$("#scHalo .hl",svg),dose:$$("#scDose .ds",svg),tum:$("#tum",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var place=seg(p,.04,.32),rel=seg(p,.36,.64),sens=seg(p,.68,.96);
    /* frame 0 already shows the implant in place; step 1 replays it: each strand slides in from the template */
    E.str.forEach(function(el,r){var t=Math.min(1,Math.max(0,place*1.5-r*.16)),s=p<.04?1:t;
      el.setAttribute("transform","translate("+(-(1-s)*240).toFixed(1)+" 0)");op(el,b*(.15+.85*s))});
    /* 2. docetaxel spreads out of each spacer */
    E.halo.forEach(function(el,k){var t=Math.min(1,Math.max(0,rel*1.3-(k%5)*.06));el.setAttribute("r",(10+46*t).toFixed(1));op(el,b*t*(1-sens*.25))});
    /* 3. the seeds' dose fields grow and overlap; the tumour shrinks (the canine study saw a 38-45% volume reduction) */
    E.dose.forEach(function(el,k){var t=Math.min(1,Math.max(0,sens*1.3-(k%4)*.07));el.setAttribute("r",(10+52*t).toFixed(1));op(el,b*t*.9)});
    if(E.tum){var sc=1-.24*sens,cx=PX+6,cy=PY+8;E.tum.setAttribute("transform","translate("+cx+" "+cy+") scale("+sc.toFixed(3)+") translate("+(-cx)+" "+(-cy)+")")}
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

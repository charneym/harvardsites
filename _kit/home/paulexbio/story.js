/* The story scene (DB/BY): how PAL-119 is designed to work, from paulexbio.com (Science: "Unlocking Beta Cell Regeneration",
   "DYRK1 Inhibitor") and the November 2026 press releases, as ONE continuous scene in fine line: a human beta cell with its
   nucleus, insulin granules, the kinase DYRK1A and the transcription factor NFAT. Frame 0 is already a complete picture.
   Step 1 (brake): DYRK1A phosphorylates NFAT and keeps it outside the nucleus. Step 2 (release): an oral PAL-119 molecule
   enters and docks in DYRK1A's cleft; NFAT loses its phosphate tags and moves into the nucleus, where the chromatin lights
   up. Step 3 (regenerate): the cell divides, a second beta cell draws in beside it, and both release insulin granules.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=560;
var CAX=290,CAY=262,CARX=186,CARY=158;          /* the beta cell */
var NX=318,NY=244,NRX=84,NRY=72;                 /* its nucleus */
var CBX=612,CBY=300,CBRX=118,CBRY=102;           /* the new beta cell */
var NBX=616,NBY=292,NBRX=46,NBRY=40;
var KX=300,KY=360;                               /* DYRK1A, below the nucleus */
var MOL0=[62,440],MOLD=[KX-30,KY+2];             /* PAL-119 path: from outside to the kinase cleft */
var NFO=[[170,234],[452,292],[404,326]],NFI=[[290,232],[340,224],[326,268]];
var ZA='translate(380 268) scale(1.18) translate(-290 -262)';
function inEl(x,y,cx,cy,rx,ry){var a=(x-cx)/rx,b=(y-cy)/ry;return a*a+b*b}
var GRA=(function(){var s=41,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],t=0;
  while(a.length<46&&t<4000){t++;var x=CAX+(R()*2-1)*CARX*.9,y=CAY+(R()*2-1)*CARY*.9;
    if(inEl(x,y,CAX,CAY,CARX-20,CARY-20)>1)continue;if(inEl(x,y,NX,NY,NRX+14,NRY+14)<1)continue;
    if(Math.hypot(x-KX,y-KY)<48)continue;if(x>326&&x<408&&y>344&&y<388)continue;if(x>262&&x<374&&y>136&&y<176)continue;
    var bad=false;NFO.concat([[170,206],[150,206],[190,206]]).forEach(function(q){if(Math.hypot(x-q[0],y-q[1])<24)bad=true});if(bad)continue;
    if(a.some(function(g){return Math.hypot(g.x-x,g.y-y)<17}))continue;
    a.push({x:x,y:y,r:2.6+R()*1.4})}return a})();
var GRB=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],t=0;
  while(a.length<18&&t<3000){t++;var x=CBX+(R()*2-1)*CBRX*.9,y=CBY+(R()*2-1)*CBRY*.9;
    if(inEl(x,y,CBX,CBY,CBRX-16,CBRY-16)>1)continue;if(inEl(x,y,NBX,NBY,NBRX+12,NBRY+12)<1)continue;
    if(a.some(function(g){return Math.hypot(g.x-x,g.y-y)<16}))continue;a.push({x:x,y:y,r:2.6+R()*1.2})}return a})();
/* granules released at the base of each cell (exocytosis) */
var REL=[[250,416,244,462],[330,418,338,466],[410,392,428,452],[566,398,560,456],[640,400,652,462],[700,370,722,428]];
function blob(cx,cy,rx,ry,amp,ph){var d='',n=72,i;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,k=1+amp*Math.sin(a*3+ph)+amp*.6*Math.sin(a*5+ph*2);
  d+=(i?'L':'M')+(cx+rx*k*Math.cos(a)).toFixed(1)+' '+(cy+ry*k*Math.sin(a)).toFixed(1)}return d+'Z'}
function mol(){/* three fused rings (a beta-carboline-like scaffold), drawn about 0,0 */
  var s=7,h=s*Math.sqrt(3)/2,ring=function(ox,oy){var d='',i;for(i=0;i<=6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?'L':'M')+(ox+s*Math.cos(a)).toFixed(1)+' '+(oy+s*Math.sin(a)).toFixed(1)}return d};
  return '<path d="'+ring(-2*h,0)+ring(0,0)+ring(2*h,0)+'M'+(2*h+h).toFixed(1)+' '+(-s/2).toFixed(1)+'l7 -5"/>'}
function cellScene(o){
  var g='',i;
  var T=function(cls,x,y,txt,anchor,keep,id){return (o.mob&&!keep)?'':'<text'+(id?' id="'+id+'"':'')+' class="'+cls+'"'+(anchor?' text-anchor="'+anchor+'"':'')+' x="'+x+'" y="'+y+'">'+txt+'</text>'};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scA" transform="'+ZA+'"><g id="scBase">';
  /* the beta cell: a bilayer membrane, the nuclear envelope, chromatin, insulin granules */
  g+='<path class="wl sD" d="'+blob(CAX,CAY,CARX,CARY,.018,.4)+'"/>';
  g+='<path class="wo sD" d="'+blob(CAX,CAY,CARX-7,CARY-7,.018,.4)+'"/>';
  g+='<path class="wl sD" d="'+blob(NX,NY,NRX,NRY,.012,1.3)+'"/>';
  g+='<path class="wo sD" d="'+blob(NX,NY,NRX-6,NRY-6,.012,1.3)+'"/>';
  g+='<g id="scChr">';
  [[262,222,300,250,342,214,370,240],[268,276,300,256,336,290,376,262],[286,300,316,286,344,306,362,292]].forEach(function(c){
    g+='<path class="chr" d="M'+c[0]+' '+c[1]+'C'+c[2]+' '+c[3]+' '+c[4]+' '+c[5]+' '+c[6]+' '+c[7]+'"/>'});
  g+='</g>';
  g+='<g id="scGra" class="gra">';GRA.forEach(function(q){g+='<circle class="gm" cx="'+q.x.toFixed(1)+'" cy="'+q.y.toFixed(1)+'" r="'+(q.r+2.4).toFixed(1)+'"/><circle class="gc" cx="'+q.x.toFixed(1)+'" cy="'+q.y.toFixed(1)+'" r="'+q.r.toFixed(1)+'"/>'});g+='</g>';
  /* DYRK1A: a bilobed kinase, the N-lobe above the C-lobe, the cleft between them */
  g+='<g id="scKin" class="kin"><path d="M'+(KX-20)+' '+(KY-6)+'C'+(KX-24)+' '+(KY-24)+' '+(KX+10)+' '+(KY-28)+' '+(KX+16)+' '+(KY-10)+'C'+(KX+12)+' '+(KY-2)+' '+(KX-12)+' '+(KY+2)+' '+(KX-20)+' '+(KY-6)+'Z"/>'+
    '<path d="M'+(KX-22)+' '+(KY+6)+'C'+(KX-10)+' '+(KY+1)+' '+(KX+14)+' '+(KY+2)+' '+(KX+20)+' '+(KY+8)+'C'+(KX+26)+' '+(KY+30)+' '+(KX-24)+' '+(KY+34)+' '+(KX-22)+' '+(KY+6)+'Z"/></g>';
  g+=T('t',104,96,'BETA CELL','start',1);
  g+=T('t',NX,160,'NUCLEUS','middle');
  g+=T('t',338,368,'DYRK1A','start',1);
  g+='</g>';
  /* dynamic: phosphorylation arrows, NFAT with its phosphate tags, PAL-119, the new cell, released insulin */
  g+='<g id="scArr">';NFO.forEach(function(q){var dx=q[0]-KX,dy=q[1]-KY,L=Math.hypot(dx,dy),ux=dx/L,uy=dy/L;
    g+='<path class="am" d="M'+(KX+ux*30).toFixed(1)+' '+(KY+uy*30).toFixed(1)+'L'+(q[0]-ux*16).toFixed(1)+' '+(q[1]-uy*16).toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scNf">';NFO.forEach(function(q,k){g+='<g class="nf"><rect x="-5.5" y="-5.5" width="11" height="11" transform="rotate(45)"/><circle class="ph" cx="9" cy="-9" r="3.4"/></g>'});g+='</g>';
  g+=T('t',170,206,'NFAT','middle',0,'scNfL');
  g+='<g id="scMol" class="mol">'+mol()+'</g>';
  g+=T('t',40,476,'PAL-119, BY MOUTH','start',0,'scMolL');
  g+='</g>';
  g+='<g id="scB"><path class="wl bD" d="'+blob(CBX,CBY,CBRX,CBRY,.02,2.1)+'"/><path class="wo bD" d="'+blob(CBX,CBY,CBRX-7,CBRY-7,.02,2.1)+'"/>'+
    '<path class="wl bD" d="'+blob(NBX,NBY,NBRX,NBRY,.015,.7)+'"/><path class="chr on" d="M'+(NBX-26)+' '+(NBY-4)+'C'+(NBX-8)+' '+(NBY-22)+' '+(NBX+6)+' '+(NBY+18)+' '+(NBX+28)+' '+(NBY-2)+'"/></g>';
  g+='<g id="scGrB" class="gra">';GRB.forEach(function(q){g+='<circle class="gm" cx="'+q.x.toFixed(1)+'" cy="'+q.y.toFixed(1)+'" r="'+(q.r+2.4).toFixed(1)+'"/><circle class="gc" cx="'+q.x.toFixed(1)+'" cy="'+q.y.toFixed(1)+'" r="'+q.r.toFixed(1)+'"/>'});g+='</g>';
  g+=T('t a',CBX,176,'NEW BETA CELL','middle',1,'scBL');
  g+='<g id="scRel">';REL.forEach(function(){g+='<circle class="rl" r="3.4"/>'});g+='</g>';
  g+=T('t a',476,502,'INSULIN, ON GLUCOSE','start',0,'scInL');
  /* step labels, in the clear band under the scene */
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'DYRK1A KEEPS NFAT OUT':'DYRK1A KEEPS NFAT OUT OF THE NUCLEUS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'PAL-119 BLOCKS DYRK1A':'PAL-119 BLOCKS DYRK1A, NFAT GOES HOME')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'BETA CELLS DIVIDE AGAIN':'BETA CELLS DIVIDE AND RELEASE INSULIN')+'</text></g>';
  return g+'</svg>';
}
function scene(){return cellScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={A:$("#scA",svg),base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .kin, #scBase .gra, #scBase .chr",svg),chr:$$("#scChr .chr",svg),kin:$("#scKin",svg),
    arr:$$("#scArr .am",svg),nf:$$("#scNf .nf",svg),ph:$$("#scNf .ph",svg),nfl:$("#scNfL",svg),mol:$("#scMol",svg),moll:$("#scMolL",svg),
    bd:dl("#scB .bD"),bchr:$("#scB .chr",svg),grb:$("#scGrB",svg),bl:$("#scBL",svg),rel:$$("#scRel .rl",svg),inl:$("#scInL",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var mv=seg(p,.36,.48),dock=seg(p,.46,.52),go=seg(p,.5,.62),lit=seg(p,.56,.64),div=seg(p,.68,.8),rel=seg(p,.84,.96);
    /* 1. the brake: DYRK1A active, arrows to NFAT, phosphate tags on */
    E.kin.classList.toggle("on",dock<.5);op(E.kin,b*(1-.55*dock));
    E.arr.forEach(function(el){op(el,b*seg(p,.06,.16)*(1-seg(p,.3,.36))*.9)});
    E.nf.forEach(function(el,k){var x=lerp(NFO[k][0],NFI[k][0],go),y=lerp(NFO[k][1],NFI[k][1],go);el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b)});
    E.ph.forEach(function(el){op(el,1-seg(p,.46,.54))});
    op(E.nfl,b*(1-seg(p,.44,.5)));
    /* 2. PAL-119 travels in and docks in the cleft; NFAT moves into the nucleus and the chromatin lights */
    var mx=lerp(MOL0[0],MOLD[0],mv),my=lerp(MOL0[1],MOLD[1],mv)-Math.sin(mv*Math.PI)*40;
    var z=1+.18*(1-div),zx=380*(1-div)+290*div,zy=268*(1-div)+262*div;E.A.setAttribute("transform","translate("+zx.toFixed(1)+" "+zy.toFixed(1)+") scale("+z.toFixed(4)+") translate(-290 -262)");
    E.mol.setAttribute("transform","translate("+mx.toFixed(1)+" "+my.toFixed(1)+") rotate("+(-24+24*mv).toFixed(1)+")");op(E.mol,b);
    op(E.moll,b*(1-seg(p,.36,.42)));
    E.chr.forEach(function(el){el.classList.toggle("on",lit>.5)});
    /* 3. the cell divides: the new beta cell draws in beside it, both release insulin */
    draw(E.bd,div);op(E.bchr,div);op(E.grb,seg(p,.76,.86));op(E.bl,seg(p,.8,.86));
    E.rel.forEach(function(el,k){var r=REL[k],t=Math.min(1,Math.max(0,rel*1.3-k*.06));el.setAttribute("cx",lerp(r[0],r[2],t).toFixed(1));el.setAttribute("cy",lerp(r[1],r[3],t).toFixed(1));op(el,t>0?Math.min(1,t*4):0)});
    op(E.inl,seg(p,.9,.95));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.28,.33)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.67)));op(E.l3,b*seg(p,.76,.84));
  };
}

/* The story scene (BL/BY/DB, DR, DT): ONE fine-line drawing of skin in section, kept on screen for all three steps: the epidermis
   with one shallow acne scar, the dermis with its collagen fibres, and the subcutaneous adipose tissue below. Steps follow
   linio-biotech.com (Science, Tience) and ClinicalTrials.gov NCT07368764 (intradermal injections of the cell-free allogeneic adipose
   tissue product into acne scars): 1 adipose tissue and its bioactive substances; 2 Tience, cell-free, injected intradermally under the
   scar; 3 the skin's own repair: new collagen draws in and the scar levels. Calm and clinical: no wound, no blood (DT).
   Driven by the scrubbed progress. */
var LN={sx:430,sw:34,d0:14,d1:1.5};
function lnRand(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function lnS(x,d){return 112+4*Math.sin(x/70)+d*Math.exp(-Math.pow((x-LN.sx)/LN.sw,2))}
function lnB(x){return 288+5*Math.sin(x/55+1)}
function lnBand(f1,f2){var a=[],x;for(x=0;x<=700;x+=7)a.push(x+' '+f1(x).toFixed(1));for(x=700;x>=0;x-=7)a.push(x+' '+f2(x).toFixed(1));return 'M'+a.join('L')+'Z'}
function lnLine(fn,x0,x1){var s='',x;for(x=x0;x<=x1;x+=7)s+=(s?'L':'M')+x+' '+fn(x).toFixed(1);return s}
var LN_CELLS=(function(){var R=lnRand(7),C=[],sp=31,row=0,y,x;for(y=0;y<200;y+=sp*.87,row++){for(x=168+(row%2)*sp/2;x<700+sp;x+=sp){
  var cx=x+(R()-.5)*7,cy=312+y+(R()-.5)*5,r=sp*.5-2.2+(R()-.5)*2;if(cy-r<lnB(cx)+4||cy+r>441||cx+r>697||cx-r<160)continue;C.push([cx,cy,r])}}return C})();
function lnCell(c,R){var d='',i,n=14;for(i=0;i<=n;i++){var a=i/n*Math.PI*2,k=1+.07*Math.sin(a*3+c[0])+.04*Math.cos(a*5+c[1]),x=c[0]+Math.cos(a)*c[2]*k,y=c[1]+Math.sin(a)*c[2]*k*.9;d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return d+'Z'}
function lnFib(R,x,y,L){var a=(R()-.5)*.5,d='M'+x.toFixed(1)+' '+y.toFixed(1),i,px=x,py=y;for(i=1;i<=4;i++){var nx=x+Math.cos(a)*L*i/4,ny=y+Math.sin(a)*L*i/4+(i%2?3.2:-3.2);d+='Q'+((px+nx)/2).toFixed(1)+' '+(py+(i%2?-4:4)).toFixed(1)+' '+nx.toFixed(1)+' '+ny.toFixed(1);px=nx;py=ny}return d}
function lnScene(mob){
  var g='',R=lnRand(11),i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'0 0 700 520':'0 0 700 460')+'" aria-hidden="true">';
  /* tissue tints, eased out at both ends */
  g+='<defs><linearGradient id="lnFd" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".16" stop-color="#fff"/><stop offset=".84" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><mask id="lnMk" maskContentUnits="userSpaceOnUse"><rect x="0" y="0" width="700" height="520" fill="url(#lnFd)"/></mask></defs><g mask="url(#lnMk)">';
  g+='<path class="tf2" d="'+lnLine(function(x){return lnB(x)},0,700)+'L700 446L0 446Z"/>';
  g+='<path class="tf1" id="lnDerm" d="M0 0"/><path class="tf0" id="lnEpi" d="M0 0"/></g>';
  g+='<g id="lnBase">';
  g+='<path class="ws sD" id="lnSurf" d="'+lnLine(function(x){return lnS(x,LN.d0)},0,700)+'"/>';
  g+='<path class="wl sD" id="lnBas" d="'+lnLine(function(x){return lnS(x,LN.d0*.8)+20},0,700)+'"/>';
  g+='<path class="wl sD" d="'+lnLine(lnB,0,700)+'"/>';
  g+='<path class="wb sD" d="M0 446H700"/>';
  g+='</g>';
  /* dermis: long wavy collagen bundles, sparse and broken under the scar */
  var FY=[156,172,188,204,220,236,252,268];
  g+='<g id="lnFib">';FY.forEach(function(y,k){var ph=k*1.7,amp=2.6+(k%3);
    [[168,LN.sx-70-(k%2)*14],[LN.sx+58+(k%3)*12,694]].forEach(function(r){var d='',x;for(x=r[0];x<=r[1];x+=4)d+=(d?'L':'M')+x+' '+(y+amp*Math.sin(x/17+ph)+(y<190?3*Math.exp(-Math.pow((x-LN.sx)/60,2)):0)).toFixed(1);g+='<path class="fb" d="'+d+'"/>'})});g+='</g>';
  /* new collagen, drawn in across the gap during repair */
  g+='<g id="lnNew">';FY.forEach(function(y,k){var ph=k*1.7,amp=2.6+(k%3),d='',x,x0=LN.sx-84-(k%2)*14,x1=LN.sx+72+(k%3)*12;for(x=x0;x<=x1;x+=4)d+=(d?'L':'M')+x+' '+(y+amp*Math.sin(x/17+ph)).toFixed(1);g+='<path class="fn" d="'+d+'"/>'});g+='</g>';
  /* adipose tissue: the lobule of fat cells */
  g+='<g id="lnFat">';LN_CELLS.forEach(function(c){g+='<path class="ac" d="'+lnCell(c)+'"/>'});g+='</g>';
  /* bioactive substances among the fat cells (step 1) */
  g+='<g id="lnBio">';var RB=lnRand(23);for(i=0;i<40;i++){var c=LN_CELLS[(i*7)%LN_CELLS.length],a=RB()*Math.PI*2,rr=c[2]+3;g+='<circle class="bio" r="3.2" cx="'+(c[0]+Math.cos(a)*rr).toFixed(1)+'" cy="'+(c[1]+Math.sin(a)*rr).toFixed(1)+'" data-k="'+(i/40).toFixed(2)+'"/>'}g+='</g>';
  /* Tience, released from the needle tip into the dermis under the scar (step 2) */
  g+='<g id="lnTi">';var RT=lnRand(31);for(i=0;i<40;i++){var a2=RT()*Math.PI*2,rad=Math.sqrt(RT());g+='<circle class="ti" r="3" cx="0" cy="0" data-a="'+a2.toFixed(3)+'" data-r="'+rad.toFixed(3)+'"/>'}g+='</g>';
  /* the needle */
  g+='<g id="lnNd"><path class="nd" d="M0 0"/><path class="nh" d="M0 0"/></g>';
  /* labels: layers on the left (desktop), one step label in the clear band */
  if(!mob){
    g+='<text class="t" x="16" y="88">EPIDERMIS</text><text class="t" x="16" y="214">DERMIS</text><text class="t" x="16" y="372">ADIPOSE</text><text class="t" x="16" y="388">TISSUE</text>';
    g+='<text class="t" id="lnScar" x="'+LN.sx+'" y="66" text-anchor="middle">ACNE SCAR</text>';
  }
  var lx=mob?350:16,ly=mob?500:34,an=mob?'middle':'start';
  (mob?["BIOACTIVE SUBSTANCES","TIENCE®, INTRADERMAL","SKIN REPAIR AND RENEWAL"]:["ADIPOSE TISSUE AND ITS BIOACTIVE SUBSTANCES","TIENCE®, CELL-FREE, INTRADERMAL","SKIN REPAIR AND RENEWAL"]).forEach(function(s,j){g+='<text class="a" id="lnL'+j+'" x="'+lx+'" y="'+ly+'" text-anchor="'+an+'">'+s+'</text>'});
  return g+'</svg>';
}
function scene(){return lnScene(MOBILE()?1:0)}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#lnBase .sD"),nw:dl("#lnNew .fn"),fib:$("#lnFib",svg),fat:$("#lnFat",svg),cells:$$("#lnFat .ac",svg),bio:$$("#lnBio .bio",svg),ti:$$("#lnTi .ti",svg),
    nd:$("#lnNd .nd",svg),nh:$("#lnNd .nh",svg),surf:$("#lnSurf",svg),bas:$("#lnBas",svg),epi:$("#lnEpi",svg),derm:$("#lnDerm",svg),scar:$("#lnScar",svg),
    tints:$$(".tf2",svg),L:[0,1,2].map(function(j){return $("#lnL"+j,svg)})};
  var lastB=-1,lastD=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function f(n){return n.toFixed(1)}
  var TIP=[LN.sx+16,lnS(LN.sx+16,0)+82],ST=[668,18],NL=Math.hypot(TIP[0]-ST[0],TIP[1]-ST[1]),ux=(TIP[0]-ST[0])/NL,uy=(TIP[1]-ST[1])/NL;
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tints.forEach(function(t){op(t,b)})}
    var s1=seg(p,.04,.24),ins=seg(p,.38,.46),rel=seg(p,.44,.6),out=seg(p,.6,.66),rep=seg(p,.7,.9);
    /* the scar levels as the skin repairs */
    var d=LN.d0+(LN.d1-LN.d0)*rep;
    if(Math.abs(d-lastD)>.01){lastD=d;
      var top=lnLine(function(x){return lnS(x,d)},0,700),bas=lnLine(function(x){return lnS(x,d*.8)+20},0,700);
      E.surf.setAttribute("d",top);E.bas.setAttribute("d",bas);
      E.epi.setAttribute("d",lnBand(function(x){return lnS(x,d)},function(x){return lnS(x,d*.8)+20}));
      E.derm.setAttribute("d",lnBand(function(x){return lnS(x,d*.8)+20},lnB))}
    op(E.epi,b);op(E.derm,b);
    op(E.fib,b);
    /* 1. the fat cells warm and their bioactive substances appear */
    E.cells.forEach(function(c){c.classList.toggle("on",s1>.5&&p<.36)});op(E.fat,b);
    E.bio.forEach(function(c){var k=+c.getAttribute("data-k");op(c,b*seg(p,.06+k*.12,.12+k*.12)*(1-seg(p,.3,.38)))});
    /* 2. the needle enters the dermis under the scar, releases Tience, and withdraws */
    var reach=ins*(1-out),tl=190+(NL-190)*reach,tx=ST[0]+ux*tl,ty=ST[1]+uy*tl;
    E.nd.setAttribute("d","M"+f(tx-ux*150)+" "+f(ty-uy*150)+"L"+f(tx)+" "+f(ty));E.nh.setAttribute("d","M"+f(tx-ux*190)+" "+f(ty-uy*190)+"L"+f(tx-ux*150)+" "+f(ty-uy*150));
    var nv=b*seg(p,.35,.4)*(1-seg(p,.64,.68));op(E.nd,nv);op(E.nh,nv);
    E.ti.forEach(function(c){var a=+c.getAttribute("data-a"),r=+c.getAttribute("data-r"),sp=rel*(1+.25*rep);
      c.setAttribute("cx",f(TIP[0]-10+Math.cos(a)*r*80*sp));c.setAttribute("cy",f(TIP[1]+Math.sin(a)*r*26*sp));op(c,b*seg(p,.44+r*.05,.5+r*.05)*(1-seg(p,.84,.94)))});
    /* 3. new collagen draws in under the scar */
    draw(E.nw,rep);
    op(E.scar,b*(1-seg(p,.8,.88)));
    op(E.L[0],b*seg(p,.04,.1)*(1-seg(p,.28,.33)));op(E.L[1],b*seg(p,.37,.43)*(1-seg(p,.62,.67)));op(E.L[2],b*seg(p,.7,.76));
  };
}

/* the story scene (BL/BY/DB): ONE engraved cross-section of a collecting-duct principal cell, urine on the left, blood on
   the right, kept on screen for all three steps. Vasopressin: the nine-bead hormone docks on the V2 receptor, the cAMP/PKA
   node lights, aquaporin-2 vesicles move to the urine-side membrane and water crosses to the blood. X-linked NDI: the
   receptor is marked as mutated, PKA goes dark, the channels fall back into their vesicles, water stays in the urine.
   AMPK: NDI-5001 enters, AMPK lights, the channels return and water crosses again. Sources: NIH RePORTER abstract
   2R44DK127798-02 (V2R mutations prevent cAMP/PKA activation) and Klein et al., JCI Insight 2021 (AMPK phosphorylates
   aquaporin-2 independently of PKA). Everything is driven by the scrubbed story progress. */
var CELL={ax:232,bx:568,top:78,bot:404};
var VES=[[330,150,1],[318,226,1],[332,300,1],[300,372,1]];         /* vesicle rest positions inside the cell */
var CH=[[CELL.ax,138],[CELL.ax,206],[CELL.ax,274],[CELL.ax,342]];  /* channel positions in the apical membrane */
var DROPS=[[70,128],[132,180],[88,236],[150,290],[64,340],[118,388],[178,120],[46,200]];
function cellScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,ax=CELL.ax,bx=CELL.bx,T=CELL.top,B=CELL.bot;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="'+o.vb+'" aria-hidden="true">';
  g+='<defs><radialGradient id="nuc" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#1d4f8f"/><stop offset="1" stop-color="#12305f"/></radialGradient>'+
     '<radialGradient id="glw" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#70c8e0" stop-opacity=".55"/><stop offset="1" stop-color="#70c8e0" stop-opacity="0"/></radialGradient></defs>';
  /* ---- base: lumen, cell, neighbours, capillary, labels ---- */
  g+='<g id="scBase">';
  g+='<rect class="lum" x="10" y="'+(T-46)+'" width="'+(ax-14)+'" height="'+(B-T+92)+'"/>';
  g+='<rect class="cyt" x="'+(ax+4)+'" y="'+T+'" width="'+(bx-ax-8)+'" height="'+(B-T)+'"/>';
  /* membranes as double lines with a gentle wave */
  var wv=function(x,dx){var s='M'+f(x+dx)+' '+(T-46);for(var y=T-46;y<=B+46;y+=6)s+='L'+f(x+dx+Math.sin(y*.09)*1.6)+' '+y;return s};
  g+='<path class="mem sD" d="'+wv(ax,-3)+'"/><path class="mem sD" d="'+wv(ax,3)+'"/>';
  g+='<path class="mem sD" d="'+wv(bx,-3)+'"/><path class="mem sD" d="'+wv(bx,3)+'"/>';
  /* tight junctions and neighbouring cells, above and below */
  g+='<path class="mem sD" d="M'+(ax+3)+' '+T+'H'+(bx-3)+'M'+(ax+3)+' '+(T-5)+'H'+(bx-3)+'M'+(ax+3)+' '+B+'H'+(bx-3)+'M'+(ax+3)+' '+(B+5)+'H'+(bx-3)+'"/>';
  var hz='';for(i=0;i<22;i++){var hx=ax+12+i*15;hz+='M'+hx+' '+(T-12)+'l-9 -22M'+hx+' '+(B+40)+'l-9 -22'}g+='<path class="ht sD" d="'+hz+'"/>';
  /* nucleus with chromatin hatching */
  g+='<ellipse class="nucl sD" cx="452" cy="318" rx="66" ry="44" fill="url(#nuc)"/>';
  var ch='';for(i=0;i<9;i++){var cx0=402+i*12;ch+='M'+cx0+' '+(300+Math.sin(i)*6)+'q6 10 14 6'}g+='<path class="ht2 sD" d="'+ch+'"/>';
  /* capillary on the blood side: two walls and a red-cell-free plasma stream, drawn in navy line */
  g+='<path class="cap sD" d="M'+(bx+128)+' '+(T-46)+'V'+(B+46)+'M'+(bx+186)+' '+(T-46)+'V'+(B+46)+'"/>';
  var cp='';for(i=0;i<14;i++){var cy0=T-30+i*28;cp+='M'+(bx+134)+' '+cy0+'h10M'+(bx+170)+' '+(cy0+14)+'h10'}g+='<path class="ht sD" d="'+cp+'"/>';
  /* water drops waiting in the urine */
  DROPS.forEach(function(d){g+='<path class="drop dpw" d="'+dropD(d[0],d[1],9)+'"/>'});
  /* region labels */
  g+='<text class="t" x="18" y="'+(T-58)+'">URINE · TUBULE LUMEN</text>';
  g+='<text class="t" x="'+((ax+bx)/2)+'" y="'+(T-58)+'" text-anchor="middle">COLLECTING DUCT CELL</text>';
  g+='<text class="t" x="'+(bx+157)+'" y="'+(T-58)+'" text-anchor="middle">BLOOD</text>';
  g+='<text class="t s" x="452" y="380" text-anchor="middle">NUCLEUS</text>';
  /* the V2 receptor: seven passes through the blood-side membrane */
  var rx=bx,ry=150,rp='M'+(rx+26)+' '+(ry-8);
  for(i=0;i<7;i++){var y0=ry+i*9;rp+=(i%2===0?'L'+(rx-22)+' '+y0+'Q'+(rx-30)+' '+(y0+4.5)+' '+(rx-22)+' '+(y0+9):'L'+(rx+22)+' '+y0+'Q'+(rx+30)+' '+(y0+4.5)+' '+(rx+22)+' '+(y0+9))}
  g+='<path class="rec sD" d="'+rp+'L'+(rx-30)+' '+(ry+70)+'"/>';
  /* PKA and AMPK nodes, unlit */
  g+='<circle class="node sD" cx="472" cy="190" r="17"/><text class="nl" x="472" y="194" text-anchor="middle">PKA</text>';
  g+='<circle class="node sD" cx="420" cy="104" r="19"/><text class="nl" x="420" y="108" text-anchor="middle">AMPK</text>';
  g+='</g>';
  /* ---- moving parts (always present, state set by storyDraw) ---- */
  g+='<g id="scMove">';
  g+='<circle class="glow" id="gPKA" cx="472" cy="190" r="46" fill="url(#glw)"/><circle class="glow" id="gAMPK" cx="420" cy="104" r="50" fill="url(#glw)"/>';
  /* signalling paths */
  g+='<path class="sig" id="sigV" d="M'+(bx-24)+' '+(ry+30)+'Q520 172 489 186"/>';
  g+='<path class="sig" id="sigP" d="M456 198Q400 220 352 226"/>';
  g+='<path class="sig s3" id="sigA" d="M402 114Q360 132 346 148"/>';
  /* vasopressin: nine beads */
  g+='<g id="avp">';for(i=0;i<9;i++){var a=i*.62;g+='<circle class="avp" cx="'+f(Math.cos(a)*9+i*4.2)+'" cy="'+f(Math.sin(a)*7)+'" r="3.4"/>'}g+='</g>';
  /* the mutation mark on the receptor */
  g+='<g id="mut"><circle class="mutc" cx="'+(rx+44)+'" cy="'+(ry+26)+'" r="13"/><path class="mutx" d="M'+(rx+38)+' '+(ry+20)+'l12 12M'+(rx+50)+' '+(ry+20)+'l-12 12"/></g>';
  /* NDI-5001: a small ring molecule */
  g+='<g id="ndi"><path class="ndi" d="M0 -10L8.7 -5V5L0 10L-8.7 5V-5Z"/><path class="ndi" d="M8.7 -5L18 -10M-8.7 5L-16 11"/><circle class="ndid" cx="18" cy="-10" r="2.6"/></g>';
  /* aquaporin-2: four vesicle-borne channels */
  VES.forEach(function(v,j){g+='<g class="aq" id="aq'+j+'"><circle class="ves" r="15"/><rect class="chn" x="-5" y="-10" width="10" height="20"/><path class="chl" d="M0 -10V10"/></g>'});
  /* water crossing: three streams of drops, one per open channel pair */
  for(i=0;i<9;i++)g+='<path class="drop flow" id="fw'+i+'" d="'+dropD(0,0,7)+'"/>';
  g+='</g>';
  /* ---- step labels (fade with their step) ---- */
  g+='<g id="lb1"><text class="a" x="'+(bx+14)+'" y="'+(ry+96)+'">V2 RECEPTOR</text><text class="a" x="'+(bx+14)+'" y="'+(ry-34)+'">VASOPRESSIN</text><text class="a" x="'+(ax+16)+'" y="'+(B-8)+'">AQUAPORIN-2</text></g>';
  g+='<g id="lb2"><text class="a w" x="'+(bx+14)+'" y="'+(ry+96)+'">MUTATED V2R</text><text class="a w" x="18" y="'+(B+64)+'">DILUTE URINE</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(bx+14)+'" y="'+(T-24)+'">NDI-5001</text><text class="a" x="'+(ax+16)+'" y="'+(B-8)+'">AQUAPORIN-2</text></g>';
  return g+'</svg>';
}
function dropD(x,y,r){return 'M'+x+' '+(y-r*1.5)+'C'+(x+r*.5)+' '+(y-r*.7)+' '+(x+r)+' '+(y-r*.1)+' '+(x+r)+' '+(y+r*.35)+'A'+r+' '+r+' 0 0 1 '+(x-r)+' '+(y+r*.35)+'C'+(x-r)+' '+(y-r*.1)+' '+(x-r*.5)+' '+(y-r*.7)+' '+x+' '+(y-r*1.5)+'Z'}
function scene(){
  if(MOBILE())return cellScene({mob:1,vb:"0 0 760 520"});
  return cellScene({vb:"0 0 760 520"});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .lum, #scBase .cyt, #scBase .dpw",svg),
    gP:$("#gPKA",svg),gA:$("#gAMPK",svg),sV:dl("#sigV"),sP:dl("#sigP"),sA:dl("#sigA"),avp:$("#avp",svg),mut:$("#mut",svg),ndi:$("#ndi",svg),
    aq:VES.map(function(v,j){return $("#aq"+j,svg)}),fw:$$(".flow",svg),dpw:$$("#scBase .dpw",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),mv:$("#scMove",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=v.toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var dock=seg(p,0,.12),s2=seg(p,.36,.5),s3=seg(p,.68,.8),a3=seg(p,.74,.86);
    /* channels open in step 1, close in step 2, reopen in step 3 */
    var open=Math.max(seg(p,.08,.24)*(1-s2),a3);
    /* vasopressin docks, then drifts off the broken receptor */
    var ax=lerp(720,CELL.bx+34,dock),ay=lerp(70,170,dock);ax=lerp(ax,724,s2);ay=lerp(ay,120,s2);
    E.avp.setAttribute("transform","translate("+ax.toFixed(1)+" "+ay.toFixed(1)+")");op(E.avp,b*(1-.55*s2));
    var pka=dock*(1-s2);op(E.gP,b*pka);draw(E.sV,dock*(1-s2));draw(E.sP,seg(p,.04,.16)*(1-s2));
    op(E.mut,b*s2);
    /* NDI-5001 arrives from the blood and reaches AMPK */
    var nx=lerp(720,446,s3),ny=lerp(40,96,s3);E.ndi.setAttribute("transform","translate("+nx.toFixed(1)+" "+ny.toFixed(1)+") rotate("+(s3*120).toFixed(1)+")");op(E.ndi,b*seg(p,.66,.72));
    op(E.gA,b*a3);draw(E.sA,a3);
    E.aq.forEach(function(el,j){var v=VES[j],c=CH[j],t=open;el.setAttribute("transform","translate("+lerp(v[0],c[0],t).toFixed(1)+" "+lerp(v[1],c[1],t).toFixed(1)+")");
      el.querySelector(".ves").style.opacity=(1-t).toFixed(3)});
    /* water: drops cross through the open channels, moving with the scroll */
    E.fw.forEach(function(el,i){var ch=CH[i%4],u=((p*3.2)+i*.137)%1,x=lerp(150,CELL.bx+150,u),y=ch[1]+Math.sin(u*6+i)*10;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*open*Math.min(1,Math.sin(u*Math.PI)*2))});
    /* drops pile up in the urine while the channels are shut */
    E.dpw.forEach(function(el,i){op(el,b*(.35+.65*(1-open)))});
    op(E.l1,b*(1-seg(p,.26,.35)));op(E.l2,b*s2*(1-seg(p,.64,.72)));op(E.l3,b*seg(p,.7,.8));
  };
}

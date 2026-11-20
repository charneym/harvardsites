/* the story scene (BL/BY/DB): ONE schematic bench, kept on screen for all four steps, drawn in fine lines in the logo's
   ink, white and cyan. Step 1 the FFPE block with its core needle biopsy lights. Step 2 probe pairs descend onto the
   biopsy's RNA and are chemically joined where both match (CLPA). Step 3 the joined probes are copied and flow to the
   readout, whose trace draws a peak per gene. Step 4 the locked classifier's bars grow and one subtype is called.
   Sources: NIH RePORTER abstract of 1R44CA310364-01 (CLPA, FFPE core needle biopsies, locked ML algorithm, presence and
   subtype, subtypes DLBCL / FL / HL / CLL/SLL) and Valvert et al., Blood Advances 2021 (PCR, capillary electrophoresis).
   Everything is driven by the scrubbed story progress. */
var GENES=[300,388,476];          /* x of the three probe sites on the RNA strand */
var RNA_Y=250;
function rnaPath(){var s='',i;for(i=0;i<=60;i++){var x=262+i*4.6,y=RNA_Y+Math.sin(i*.55)*3.2;s+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return s}
function trace(){ /* a readout trace: baseline with one peak per gene (schematic) */
  var pk=[[624,62],[664,104],[700,44],[736,86],[762,58]],s='M590 300',x;
  for(x=590;x<=780;x+=2){var y=300;pk.forEach(function(p){y-=p[1]*Math.exp(-Math.pow((x-p[0])/5.5,2))});s+='L'+x+' '+y.toFixed(1)}
  return s}
var SUB=["DLBCL","FL","HL","CLL/SLL"],SUBW=[.9,.22,.12,.08];
function scene(){
  var mob=MOBILE(),g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><linearGradient id="pfg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9dcc0" stop-opacity=".2"/><stop offset="1" stop-color="#e9dcc0" stop-opacity=".07"/></linearGradient>'+
     '<radialGradient id="cg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#00aeef" stop-opacity=".5"/><stop offset="1" stop-color="#00aeef" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the cassette, its slotted lid, the paraffin block and the core needle biopsy inside it */
  g+='<path class="cas sD" d="M40 120H224V420H40Z"/><path class="cas2 sD" d="M52 132H212V408H52Z"/>';
  var sl='';for(i=0;i<9;i++){sl+='M64 '+(150+i*12)+'H200'}g+='<path class="slot sD" d="'+sl+'"/>';
  g+='<rect class="par" x="68" y="268" width="128" height="128"/><path class="par2 sD" d="M68 268H196V396H68Z"/>';
  g+='<path class="core sD" d="M88 340C110 330 140 336 176 322"/>';
  g+='<path class="ht sD" d="M74 384L94 364M90 390L118 362M112 392L140 364M136 392L164 364M160 392L190 362"/>';
  /* zoom lines from the core to the strand */
  g+='<path class="zm sD" d="M176 322L262 200M176 322L262 300"/><path class="zf sD" d="M262 200V300"/>';
  /* the RNA strand */
  g+='<path class="rna sD" d="'+rnaPath()+'"/>';
  /* the readout: axes */
  g+='<path class="ax sD" d="M590 160V300H784"/>';
  g+='<path class="tr sD" id="trc" d="'+trace()+'"/>';
  /* the classifier: one bar row per subtype */
  for(i=0;i<4;i++){var y=414+i*30;g+='<text class="sb" x="'+(mob?262:330)+'" y="'+(y+5)+'" text-anchor="end">'+SUB[i]+'</text><path class="bt sD" d="M'+(mob?276:344)+' '+y+'H780"/>'}
  g+='<text class="t" x="784" y="546" text-anchor="end">SCHEMATIC · NOT PATIENT DATA</text>';
  g+='</g>';
  /* moving parts */
  g+='<g id="scMove">';
  g+='<circle id="cglow" cx="132" cy="330" r="80" fill="url(#cg)"/>';
  /* probe pairs: a left (white) and a right (cyan) half that meet on the strand; a spark at each junction */
  GENES.forEach(function(x,k){g+='<g class="pp" data-k="'+k+'"><path class="pl" d="M'+(x-30)+' 0H'+(x-1)+'"/><path class="pr" d="M'+(x+1)+' 0H'+(x+30)+'"/><circle class="spk" cx="'+x+'" cy="0" r="9" fill="url(#cg)"/></g>'});
  /* amplified copies travelling to the readout */
  for(i=0;i<12;i++)g+='<g class="cp"><path class="pl" d="M-9 0H-1"/><path class="pr" d="M1 0H9"/></g>';
  for(i=0;i<4;i++){var yb=414+i*30;g+='<rect class="bar'+(i?'':' win')+'" x="'+(mob?276:344)+'" y="'+(yb-5)+'" width="0" height="10"/>'}
  g+='</g>';
  /* labels, one set per step (leader lines end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="40" y="'+(mob?96:104)+'">'+(mob?'FFPE BIOPSY':'FFPE CORE NEEDLE BIOPSY')+'</text>'+(mob?'':'<text class="t" x="40" y="446">IN ITS PARAFFIN BLOCK</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?262:300)+'" y="'+(mob?150:156)+'">'+(mob?'CLPA PROBES':'PROBE PAIRS, JOINED ON MATCH')+'</text><text class="t" x="560" y="'+(RNA_Y+30)+'" text-anchor="end">'+(mob?'':'TUMOR RNA')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?780:590)+'" y="'+(mob?136:142)+'"'+(mob?' text-anchor="end"':'')+'>'+(mob?'READOUT':'ONE PEAK PER GENE')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+(mob?276:344)+'" y="'+(mob?386:392)+'">'+(mob?'SUBTYPE CALLED':'LOCKED CLASSIFIER · SUBTYPE CALLED')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD:not(.tr)"),fade:$$("#scBase text, #scBase .par",svg),mv:$("#scMove",svg),cg:$("#cglow",svg),pp:$$(".pp",svg),
    cp:$$(".cp",svg),bars:$$("#scMove rect",svg),tr:dl("#trc")[0],l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)],core:$("#scBase .core",svg),
    rna:$("#scBase .rna",svg),sb:$$("#scBase .sb",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.12),s2=seg(p,.27,.42),s3=seg(p,.52,.68),s4=seg(p,.77,.92);
    /* step 1: the core glows; it settles once the story moves on */
    op(E.cg,b*(.3+.7*s1)*(1-.55*s2));
    E.core.style.stroke="rgba(0,174,239,"+(.5+.5*s1-.25*s2).toFixed(3)+")";
    /* step 2: probe pairs descend onto the strand, halves meet, a spark at each join */
    E.pp.forEach(function(el,k){var u=seg(p,.25+k*.035,.38+k*.035),y=RNA_Y-6-(1-u)*90,gap=(1-u)*14;
      el.setAttribute("transform","translate(0 "+y.toFixed(1)+")");
      el.children[0].setAttribute("transform","translate("+(-gap).toFixed(1)+" 0)");el.children[1].setAttribute("transform","translate("+gap.toFixed(1)+" 0)");
      op(el,b*seg(p,.2,.27));op(el.children[2],u>=.98?(1-seg(p,.46,.56)):0)});
    E.rna.style.stroke="rgba(243,245,246,"+(.45+.4*s2).toFixed(3)+")";
    /* step 3: copies stream from the strand to the readout; the trace draws */
    E.cp.forEach(function(el,i){var u=((p*3.2)+i/12)%1,x=300+u*290+Math.sin(u*8+i)*4,y=RNA_Y-6+(-60*Math.sin(u*Math.PI))+(i%3-1)*10;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*s3*(1-s4*.85)*Math.min(1,Math.sin(u*Math.PI)*2.4))});
    if(E.tr){E.tr[0].style.strokeDashoffset=(E.tr[1]*(1-seg(p,.54,.72))).toFixed(1);op(E.tr[0],b)}
    /* step 4: the classifier's bars grow; the winning subtype in cyan */
    var full=mob4()?504:436;
    E.bars.forEach(function(r,i){r.setAttribute("width",(full*SUBW[i]*seg(p,.76+i*.02,.9+i*.02)).toFixed(1))});
    E.sb.forEach(function(t,i){t.style.fill=i===0&&s4>.5?"#00aeef":""});
    op(E.l[0],b*(1-seg(p,.2,.26)));op(E.l[1],b*s2*(1-seg(p,.46,.52)));op(E.l[2],b*s3*(1-seg(p,.72,.77)));op(E.l[3],b*s4);
  };
}
function mob4(){return MOBILE()}

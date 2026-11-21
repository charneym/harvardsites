/* The story scene (BL/BY/DB): NuPeak's own four-part approach (nupeak-therapeutics.com, Fig. 4 "A multi-disciplinary
   approach delivers a new inhaled product"), drawn as ONE continuous engraved cross-section of the airway wall: the lumen
   above, the mucus layer, the epithelium (ciliated and goblet cells), the basal-epithelial stem cells on the basement
   membrane, and the submucosa below with its immune cells.
   Step 1 (Target): MAPK13 lights up in the basal-epithelial stem cells; goblet cells swell, mucus thickens, immune cells
   gather (airway inflammation and mucus production). Step 2 (Design): a small-molecule kinase inhibitor is drawn in by
   structure-based design. Step 3 (Inhale): it becomes a dry powder that falls through the lumen onto the lining.
   Step 4 (Modify): the inhibitor binds at the stem cells, which calm; mucus thins, goblet cells settle, immune cells clear.
   Every element is driven by the scrubbed story progress. The molecule is a generic illustration, not NuPeak's structure. */
var SCW=760,SCH=450;
var SR=(function(){var s=4013;return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}})();
var EPI=(function(){var a=[],n=16,x0=24,x1=736,cw=(x1-x0)/n;
  for(var i=0;i<n;i++){var x=x0+i*cw;a.push({x:x,w:cw,gob:i%3===1,top:190+SR()*4,nu:282+SR()*14})}return a})();
var STEM=(function(){var a=[];for(var i=1;i<EPI.length;i+=2){a.push({x:EPI[i].x+(SR()-.5)*6,y:344})}return a})();
var IMM=(function(){var a=[];for(var i=0;i<13;i++){a.push({x:40+i*53+(SR()-.5)*22,y:386+SR()*40,r:8+SR()*4,a:SR()*6.28})}return a})();
var PART=(function(){var a=[];for(var i=0;i<46;i++){a.push({x:30+SR()*700,y0:-20-SR()*110,d:SR()*.35,r:1.4+SR()*2})}return a})();
function f1(n){return (+n).toFixed(1)}
function cellPath(c,sw){/* a columnar cell; a goblet cell bulges into a cup under the surface */
  var l=c.x+2,r=c.x+c.w-2,t=c.top,b=330,m=(l+r)/2;
  if(!c.gob)return 'M'+f1(l)+' '+f1(t+4)+'Q'+f1(l)+' '+f1(t)+' '+f1(l+4)+' '+f1(t)+'H'+f1(r-4)+'Q'+f1(r)+' '+f1(t)+' '+f1(r)+' '+f1(t+4)+'V'+b+'H'+f1(l)+'Z';
  var k=sw*7;return 'M'+f1(m-5)+' '+b+'C'+f1(m-6)+' 300 '+f1(l-k)+' 262 '+f1(l-k*.6)+' '+f1(t+14)+'Q'+f1(l)+' '+f1(t)+' '+f1(m)+' '+f1(t)+'Q'+f1(r)+' '+f1(t)+' '+f1(r+k*.6)+' '+f1(t+14)+'C'+f1(r+k)+' 262 '+f1(m+6)+' 300 '+f1(m+5)+' '+b+'Z'}
function mucusPath(th,t){/* the mucus blanket over the epithelium; th = thickness */
  var d='M24 '+f1(190),i,x;for(i=0;i<=48;i++){x=24+i*712/48;var y=188-th*(.75+.25*Math.sin(i*.9+t*.0)+.18*Math.sin(i*2.3));d+='L'+f1(x)+' '+f1(y)}
  return d+'L736 190Z'}
function molecule(){/* a generic small-molecule kinase-inhibitor scaffold, skeletal formula: two fused rings, a pyrimidine-like ring, side chains */
  var cx=560,cy=96,R=22,g='',hex=function(ox,oy,rot){var p=[];for(var k=0;k<6;k++){var a=rot+k*Math.PI/3;p.push(f1(ox+R*Math.cos(a))+' '+f1(oy+R*Math.sin(a)))}return 'M'+p.join('L')+'Z'};
  var dx=R*Math.sqrt(3);
  g+='<path class="mol sD" d="'+hex(cx,cy,Math.PI/6)+'"/>';
  g+='<path class="mol sD" d="'+hex(cx+dx,cy,Math.PI/6)+'"/>';
  g+='<path class="mol sD" d="'+hex(cx-dx*1.5-14,cy+R*1.5,Math.PI/6)+'"/>';
  g+='<path class="mol sD" d="M'+f1(cx-dx/2)+' '+f1(cy+R/2)+'L'+f1(cx-dx-14+dx/2)+' '+f1(cy+R)+'"/>';
  g+='<path class="mol sD" d="M'+f1(cx+dx+dx/2)+' '+f1(cy-R/2)+'L'+f1(cx+dx*2+12)+' '+f1(cy-R*1.2)+'L'+f1(cx+dx*2+34)+' '+f1(cy-R*.6)+'"/>';
  g+='<path class="mol sD" d="M'+f1(cx)+' '+f1(cy-R)+'L'+f1(cx)+' '+f1(cy-R*2)+'M'+f1(cx-4)+' '+f1(cy-R*2)+'H'+f1(cx+4)+'"/>';
  g+='<path class="mol sD" d="M'+f1(cx+dx-6)+' '+f1(cy-R*.5+3)+'L'+f1(cx+dx-6)+' '+f1(cy+R*.5-3)+'M'+f1(cx-dx*1.5-14-dx/2+5)+' '+f1(cy+R*1.5-R*.5+3)+'L'+f1(cx-dx*1.5-14-dx/2+5)+' '+f1(cy+R*1.5+R*.5-3)+'"/>';
  g+='<circle class="molN" cx="'+f1(cx-dx*1.5-14)+'" cy="'+f1(cy+R*.5)+'" r="3"/><circle class="molN" cx="'+f1(cx+dx*2+34)+'" cy="'+f1(cy-R*.6)+'" r="3"/>';
  return g}
function airScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="aclip"><rect x="24" y="30" width="712" height="404"/></clipPath><radialGradient id="glow"><stop offset="0" stop-color="#ff8582" stop-opacity=".55"/><stop offset="1" stop-color="#ff8582" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M24 30H736"/><path class="bm sD" d="M24 362H736"/>';
  g+='<text class="t" x="24" y="18">AIRWAY LUMEN</text>';
  g+='<text class="t" x="24" y="'+(SCH-4)+'">SUBMUCOSA</text>';
  g+='</g>';
  g+='<g clip-path="url(#aclip)">';
  /* mucus */
  g+='<path id="mucus" class="muc" d="'+mucusPath(10,0)+'"/>';
  /* epithelium: one group per cell (body, nucleus, cilia or mucus granules) */
  g+='<g id="epi">';
  EPI.forEach(function(c,k){
    g+='<g class="ce'+(c.gob?' gob':'')+'" data-k="'+k+'"><path class="cb" d="'+cellPath(c,1)+'"/>';
    g+='<ellipse class="nu" cx="'+f1(c.x+c.w/2)+'" cy="'+f1(c.nu+(c.gob?18:0))+'" rx="6" ry="9"/>';
    if(c.gob){g+='<g class="gr">';for(var j=0;j<7;j++){g+='<circle cx="'+f1(c.x+c.w/2+(j%3-1)*8+(j>5?4:0))+'" cy="'+f1(c.top+14+Math.floor(j/3)*9)+'" r="3.4"/>'}g+='</g>'}
    else{g+='<path class="ci" d="';for(var q=0;q<5;q++){var cx=c.x+7+q*(c.w-14)/4;g+='M'+f1(cx)+' '+f1(c.top)+'q2 -7 '+f1((q%2?-1:1)*2)+' -12'}g+='"/>'}
    g+='</g>'});
  g+='</g>';
  /* basal-epithelial stem cells on the basement membrane, each with its MAPK13 glow and a binding mark */
  g+='<g id="stem">';
  STEM.forEach(function(s,k){
    g+='<g class="sc" data-k="'+k+'"><circle class="hl" cx="'+f1(s.x)+'" cy="'+f1(s.y)+'" r="26" fill="url(#glow)"/>';
    g+='<path class="sb" d="M'+f1(s.x-17)+' 360Q'+f1(s.x-14)+' 330 '+f1(s.x)+' 328Q'+f1(s.x+14)+' 330 '+f1(s.x+17)+' 360Z"/>';
    g+='<circle class="sn" cx="'+f1(s.x)+'" cy="347" r="4.6"/>';
    g+='<path class="bd" d="M'+f1(s.x+10)+' 331l5 -3l5 3v6l-5 3l-5 -3z"/></g>'});
  g+='</g>';
  /* immune cells in the submucosa */
  g+='<g id="imm">';
  IMM.forEach(function(m,k){g+='<g class="im" data-k="'+k+'" transform="translate('+f1(m.x)+' '+f1(m.y)+')"><circle class="ib" r="'+f1(m.r)+'"/><path class="in" d="M'+f1(-m.r*.45)+' 0a'+f1(m.r*.22)+' '+f1(m.r*.22)+' 0 1 1 '+f1(m.r*.45)+' 0a'+f1(m.r*.22)+' '+f1(m.r*.22)+' 0 1 1 '+f1(m.r*.45)+' 0" transform="rotate('+f1(m.a*57)+')"/></g>'});
  g+='</g>';
  /* the inhibitor: drawn by design, then inhaled as dry powder */
  g+='<g id="mol">'+molecule()+'</g>';
  g+='<g id="pw">';PART.forEach(function(p,k){g+='<circle class="pp" data-k="'+k+'" cx="'+f1(p.x)+'" cy="'+f1(p.y0)+'" r="'+f1(p.r)+'"/>'});g+='</g>';
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="24" y="60">MAPK13 · BASAL-EPITHELIAL STEM CELLS</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="60">STRUCTURE-BASED DRUG DESIGN</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="60">NuP-4B · DRY POWDER INHALATION</text></g>';
  g+='<g id="lb4"><text class="a" x="24" y="60">INFLAMMATION AND MUCUS RESOLVED</text></g>';
  return g+'</svg>';
}
function scene(){return airScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mol:dl("#mol .sD"),molN:$$("#mol .molN",svg),
    mucus:$("#mucus",svg),
    ce:$$(".ce",svg).map(function(el){var k=+el.getAttribute("data-k");return {el:el,c:EPI[k],k:k,cb:$(".cb",el),gr:$(".gr",el),ci:$(".ci",el)}}),
    sc:$$(".sc",svg).map(function(el){return {el:el,hl:$(".hl",el),sb:$(".sb",el),bd:$(".bd",el)}}),
    im:$$(".im",svg),pp:$$(".pp",svg).map(function(el){return {el:el,p:PART[+el.getAttribute("data-k")]}}),
    l:[$("#lb1",svg),$("#lb2",svg),$("#lb3",svg),$("#lb4",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.12),dis=seg(p,.04,.2),des=seg(p,.27,.42),inh=seg(p,.5,.72),mod=seg(p,.74,.94);
    /* the lining engraves in cell by cell */
    E.ce.forEach(function(C,i){var gi=Math.min(1,Math.max(0,grow*1.9-i*.05));op(C.el,b*gi);
      /* goblet cells swell with disease and settle with treatment; half of them return to ciliated cells */
      if(C.c.gob){var sw=.35+.65*dis*(1-.85*mod);C.cb.setAttribute("d",cellPath(C.c,sw));op(C.gr,.25+.75*dis*(1-.75*mod))}});
    /* mucus thickens with disease, thins with treatment */
    E.mucus.setAttribute("d",mucusPath(4+22*dis*(1-.8*mod),0));op(E.mucus,b*(.3+.7*dis));
    /* stem cells: MAPK13 glows in step 1, the inhibitor binds in step 4, and they calm */
    E.sc.forEach(function(S,i){var gi=Math.min(1,Math.max(0,grow*1.9-i*.1-.2));op(S.el,b*gi);
      var pulse=.6+.4*Math.sin(p*60+i);op(S.hl,dis*(1-mod)*pulse);S.el.classList.toggle("hot",dis>.5&&mod<.6);
      op(S.bd,seg(p,.74+i*.012,.84+i*.012))});
    /* immune cells gather with disease and clear with treatment */
    E.im.forEach(function(el,i){var gi=Math.min(1,Math.max(0,dis*1.6-i*.05));op(el,b*gi*(1-Math.min(1,mod*1.3-(i%4)*.06)))});
    /* the molecule draws in, then gives way to the powder */
    draw(E.mol,des);var mo=b*(1-seg(p,.52,.62));E.mol.forEach(function(a){op(a[0],mo)});E.molN.forEach(function(el){op(el,des*mo)});
    E.pp.forEach(function(P){var q=Math.min(1,Math.max(0,(inh-P.p.d)/(1-P.p.d+.0001)));
      var y=P.p.y0+(186-P.p.y0)*q*q;P.el.setAttribute("cy",y.toFixed(1));op(P.el,b*(q>0?1:0)*(1-seg(q,.92,1)))});
    op(E.l[0],b*seg(p,.08,.16)*(1-seg(p,.22,.26)));op(E.l[1],b*seg(p,.29,.35)*(1-seg(p,.46,.5)));
    op(E.l[2],b*seg(p,.53,.59)*(1-seg(p,.7,.74)));op(E.l[3],b*seg(p,.8,.88));
  };
}

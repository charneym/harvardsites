/* The story scene (BL/BY/DB): how a Bone Solutions magnesium bone void filler works, as ONE continuous fine-line drawing:
   a cut-away bone end (cortical shell, trabecular lattice) with a void in the metaphysis. Step 1: the pre-measured powder
   and solution are mixed in the syringe; a 30-second ring closes. Step 2: the material is delivered through a cannula into
   the void and sets in place. Step 3: over about a year it is resorbed and replaced with new trabecular bone.
   Driven by the scrubbed progress. Sources: bonesolutions.net (home, technology, Mg OSTEOCRETE and Mg OSTEOINJECT pages). */
function bsRand(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function bsHW(y){/* half-width of the bone section at height y (matches OUT) */
  var P=[[60,128],[100,138],[150,128],[200,104],[240,82],[290,66],[340,60],[520,60]],i;
  for(i=1;i<P.length;i++)if(y<=P[i][0]){var a=P[i-1],b=P[i],t=(y-a[0])/(b[0]-a[0]);return a[1]+(b[1]-a[1])*t}return 60}
var BVX=196,BVY=170,BVR=[62,44];
function bsScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="40 20 640 500" aria-hidden="true">',i,r=bsRand(7);
  var OUT='M150 520V340C150 300 146 268 128 240C98 196 74 150 74 104C74 74 120 58 210 58C300 58 346 74 346 104C346 150 322 196 292 240C274 268 270 300 270 340V520';
  var VOID='M136 170C134 140 160 124 194 126C230 128 258 146 256 174C254 202 226 216 192 214C158 212 138 198 136 170Z';
  g+='<defs><clipPath id="bsVc"><path d="'+VOID+'"/></clipPath><clipPath id="bsBc"><path d="'+OUT+'Z"/></clipPath><clipPath id="bsRise"><rect id="bsRr" x="120" y="216" width="150" height="0"/></clipPath><clipPath id="bsSyc"><rect x="441" y="179" width="158" height="24"/></clipPath></defs>';
  /* the bone: section fill, cortical shell, medullary canal, trabecular lattice */
  g+='<g id="bsBn"><path class="bf" d="'+OUT+'Z"/><path class="md" d="M172 520V350C172 318 182 300 210 300C238 300 248 318 248 350V520Z"/>';
  g+='<g clip-path="url(#bsBc)">';
  for(var y=78;y<=330;y+=17)for(var x=60;x<=360;x+=19){
    var px=x+(r()-.5)*9+((y/17)%2?9:0),py=y+(r()-.5)*8,hw=bsHW(py)-15;
    if(Math.abs(px-210)>hw)continue;
    if(py>292&&Math.abs(px-210)<44)continue;
    var dx=(px-BVX)/(BVR[0]+12),dy=(py-BVY)/(BVR[1]+12);if(dx*dx+dy*dy<1)continue;
    g+='<ellipse class="tb sD" cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" rx="'+(5+r()*3.4).toFixed(1)+'" ry="'+(4+r()*3).toFixed(1)+'" transform="rotate('+((r()-.5)*70).toFixed(0)+' '+px.toFixed(1)+' '+py.toFixed(1)+')"/>';
  }
  g+='</g><path class="w sD" d="'+OUT+'"/><path class="w2 sD" d="M162 520V346C162 306 158 272 142 246C114 202 88 154 88 106C88 84 128 72 210 72C292 72 332 84 332 106C332 154 306 202 278 246C262 272 258 306 258 346V520"/>';
  g+='<path class="vd" d="'+VOID+'"/></g>';
  /* the filler rising in the void (step 2) */
  g+='<g clip-path="url(#bsVc)"><g clip-path="url(#bsRise)" id="bsFi"><rect class="fi" x="120" y="110" width="150" height="120"/>';
  r=bsRand(31);for(i=0;i<70;i++)g+='<circle class="fd" cx="'+(132+r()*128).toFixed(1)+'" cy="'+(124+r()*94).toFixed(1)+'" r="'+(.8+r()*1.1).toFixed(1)+'"/>';
  g+='</g></g>';
  /* new trabecular bone in the void (step 3) */
  g+='<g id="bsNb" clip-path="url(#bsVc)">';r=bsRand(53);
  for(var yy=132;yy<=212;yy+=15)for(var xx=134;xx<=262;xx+=17){var qx=xx+(r()-.5)*7+((yy/15)%2?8:0),qy=yy+(r()-.5)*6;
    g+='<ellipse class="nb" cx="'+qx.toFixed(1)+'" cy="'+qy.toFixed(1)+'" rx="'+(4.6+r()*3).toFixed(1)+'" ry="'+(3.8+r()*2.6).toFixed(1)+'" transform="rotate('+((r()-.5)*70).toFixed(0)+' '+qx.toFixed(1)+' '+qy.toFixed(1)+')"/>'}
  g+='</g><path class="ve" d="'+VOID+'"/>';
  /* step 1: powder pouch and solution vial pour into the mixing syringe; the 30-second ring */
  g+='<g id="bsMx"><path class="pk" d="M470 74H534V132H470Z M470 86H534"/><path class="pk" d="M566 92H590V132H566Z M564 84H592V92H564Z"/>';
  g+='<path class="dr" id="bsDr" d="M502 140V168M578 140V168"/></g>';
  g+='<g id="bsSy"><path class="sy" d="M440 178H600V204H440Z"/><path class="sy2" d="M600 172V210M600 191H640M640 180V202"/><path class="sy2" d="M440 186H426V196H440"/>';
  g+='<g clip-path="url(#bsSyc)"><rect class="fi" id="bsSf" x="442" y="180" width="0" height="22"/></g></g>';
  g+='<g id="bsTm"><circle class="rg0" cx="600" cy="300" r="34"/><circle class="rg" id="bsRg" cx="600" cy="300" r="34" transform="rotate(-90 600 300)"/><text class="n" x="600" y="306" text-anchor="middle">30 s</text></g>';
  /* step 2: the cannula from the syringe into the void */
  g+='<path class="cn" id="bsCn" d="M426 191H258"/>';
  /* step 3: one year of remodelling */
  g+='<g id="bsYr"><path class="tl" d="M440 444H640"/><path class="tk" d="M440 436V452M640 436V452"/><path class="tlp" id="bsTl" d="M440 444H640"/><circle class="dt" id="bsDt" cx="440" cy="444" r="5"/></g>';
  /* labels, each clear of every stroke (DR3) */
  if(o.mob){
    g+='<g id="bl1"><text class="a" x="440" y="52">MIX</text><text class="t" x="440" y="372">READY IN 30 S</text></g>';
    g+='<g id="bl2"><text class="a" x="440" y="262">SETS</text><text class="t" x="440" y="288">IN PLACE</text></g>';
    g+='<g id="bl3"><text class="a" x="440" y="410">NEW BONE</text><text class="t" x="640" y="484" text-anchor="end">1 YEAR</text></g>';
  }else{
    g+='<g id="bl1"><text class="a" x="470" y="56">POWDER + SOLUTION</text><text class="t" x="440" y="372">READY TO IMPLANT</text><text class="t" x="440" y="392">IN 30 SECONDS</text></g>';
    g+='<g id="bl2"><text class="a" x="440" y="252">SETS IN PLACE</text><text class="t" x="440" y="274">ADHESIVE · RADIOPAQUE</text></g>';
    g+='<g id="bl3"><text class="a" x="440" y="410">REPLACED WITH BONE</text><text class="t" x="440" y="478">IMPLANT</text><text class="t" x="640" y="478" text-anchor="end">1 YEAR</text></g>';
  }
  return g+'</svg>';
}
function scene(){return bsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#bsBn .sD"),rg:dl("#bsRg")[0],cn:dl("#bsCn")[0],tl:dl("#bsTl")[0],dr:dl("#bsDr")[0],
    rr:$("#bsRr",svg),fi:$("#bsFi",svg),nb:$$("#bsNb .nb",svg),mx:$("#bsMx",svg),sy:$("#bsSy",svg),sf:$("#bsSf",svg),tm:$("#bsTm",svg),yr:$("#bsYr",svg),dt:$("#bsDt",svg),
    l1:$("#bl1",svg),l2:$("#bl2",svg),l3:$("#bl3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function dr(a,v){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* step 1: pouch and vial pour into the syringe; it fills and the 30 s ring closes */
    var s1=seg(p,.02,.08),mx=seg(p,.06,.2),out=seg(p,.62,.7);
    op(E.mx,b*s1*(1-seg(p,.34,.4)));dr(E.dr,seg(p,.06,.14));op(E.sy,b*s1*(1-out));
    E.sf.setAttribute("width",(156*mx).toFixed(1));
    dr(E.rg,seg(p,.1,.28));op(E.tm,b*s1*(1-seg(p,.34,.4)));
    /* step 2: the cannula reaches the void, the filler rises and sets */
    dr(E.cn,seg(p,.38,.46));op(svg.querySelector("#bsCn"),b*seg(p,.37,.38)*(1-out));
    var fl=seg(p,.44,.58);E.rr.setAttribute("y",(216-100*fl).toFixed(1));E.rr.setAttribute("height",(100*fl).toFixed(1));
    /* step 3: the filler is resorbed while new trabeculae form, over a year */
    var rm=seg(p,.7,.92);op(E.fi,1-.9*rm);
    E.nb.forEach(function(n,j){op(n,seg(rm,(j%9)/14,(j%9)/14+.45))});
    op(E.yr,b*seg(p,.68,.72));dr(E.tl,rm);E.dt.setAttribute("cx",(440+200*rm).toFixed(1));
    op(E.l1,b*seg(p,.12,.18)*(1-seg(p,.31,.35)));op(E.l2,b*seg(p,.5,.56)*(1-seg(p,.64,.67)));op(E.l3,b*seg(p,.76,.82));
  };
}

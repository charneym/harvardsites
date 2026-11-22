/* the story scene (BL/BY/DB): ONE engraved figure, kept on screen for all three steps. Two peptide fragments (bead chains, drawn
   in the logo's cyan and magenta) sit either side of the engraved ligase; as the story scrubs they dock into its cleft, the new
   peptide bond forms there in amber, and then the enzyme releases a single continuous chain that sweeps across the frame with no
   linker at the junction. Sources: enzytag.com (Technology, Proposition), Schmidt et al., Curr. Opin. Chem. Biol. 2017 and
   Adv. Synth. Catal. 2016/2017. Schematic; geometry is illustrative. Driven by the scrubbed story progress. */
var EZX=(function(){
  var C=[404,296],N=7;
  return {C:C,N:N};
})();
function scene(){
  var mob=MOBILE(),g='',i,C=EZX.C,N=EZX.N,f=function(n){return (+n).toFixed(1)};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"40 10 720 500":"52 20 700 560")+'" aria-hidden="true">';
  g+='<defs><radialGradient id="ezg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffa737" stop-opacity=".55"/><stop offset=".55" stop-color="#ffa737" stop-opacity=".14"/><stop offset="1" stop-color="#ffa737" stop-opacity="0"/></radialGradient>'+
    '<radialGradient id="ezb" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#4cc7e6" stop-opacity=".3"/><stop offset=".7" stop-color="#4cc7e6" stop-opacity=".08"/><stop offset="1" stop-color="#4cc7e6" stop-opacity="0"/></radialGradient></defs>';
  /* guide paths: the three layouts the chain moves between (never stroked) */
  var GD={
    a1:"M72 128C150 142 226 160 292 196",
    b1:"M736 128C658 142 582 160 516 196",
    a2:"M120 300C196 286 286 250 392 214",
    b2:"M688 300C612 286 522 250 416 214",
    fin:"M74 452C214 500 318 404 404 352C494 298 568 224 734 172"};
  g+='<g id="gds" opacity="0">';
  for(var k in GD)g+='<path id="gd_'+k+'" d="'+GD[k]+'" fill="none"/>';
  g+='</g>';
  /* the engraved ligase: body, inner contours and the active-site cleft */
  var body="M404 146C486 146 556 190 556 282C556 376 492 436 404 436C316 436 252 376 252 282C252 190 322 146 404 146Z";
  g+='<g id="enz"><circle cx="'+C[0]+'" cy="'+C[1]+'" r="196" fill="url(#ezb)" class="ebg"/>'+
     '<path class="ez sD" d="'+body+'"/>';
  for(i=1;i<=3;i++){var s=1-i*.17;g+='<path class="ez2 sD" transform="translate('+f(C[0]*(1-s))+' '+f(C[1]*(1-s))+') scale('+s.toFixed(3)+')" d="'+body+'"/>'}
  /* the cleft: two lips meeting at the catalytic centre */
  g+='<path class="cl sD" d="M330 168C356 206 380 216 404 216C428 216 452 206 478 168"/>'+
     '<circle class="cgl" cx="404" cy="214" r="78" fill="url(#ezg)"/>'+
     '<circle class="cat" cx="404" cy="214" r="7"/>'+
     '<text class="t" id="ezl" x="404" y="410" text-anchor="middle">PEPTILIGASE</text></g>';
  /* ripples: water, where the bond is made */
  for(i=0;i<3;i++)g+='<circle class="rp" data-k="'+i+'" cx="404" cy="214" r="20"/>';
  /* the two fragment chains */
  g+='<g id="chains"><polyline class="bk a" id="lnA" points=""/><polyline class="bk b" id="lnB" points=""/>'+
     '<path class="bond" id="bond" d=""/>';
  for(i=0;i<N;i++)g+='<circle class="bd a" data-k="'+i+'" r="9"/>';
  for(i=0;i<N;i++)g+='<circle class="bd b" data-k="'+i+'" r="9"/>';
  g+='<circle class="jn" id="jn" r="13"/></g>';
  g+='<text class="t" x="16" y="546">CHEMO-ENZYMATIC PEPTIDE LIGATION · SCHEMATIC</text>';
  /* labels, one set per step (leaders end at the thing they name; on phones the labels sit clear of the figure, no leaders) */
  var x0=mob?48:28;
  g+='<g id="lb1"><text class="a" x="'+x0+'" y="'+(mob?42:50)+'">'+(mob?'FRAGMENT 1':'FRAGMENT 1 \u00b7 ACTIVATED C-TERMINUS')+'</text>'+
     (mob?'':'<path class="ldr" d="M150 64L250 176"/>')+
     '<text class="a" x="'+(mob?744:548)+'" y="'+(mob?42:50)+'" text-anchor="'+(mob?'end':'start')+'">'+(mob?'FRAGMENT 2':'FRAGMENT 2 \u00b7 FREE N-TERMINUS')+'</text>'+
     (mob?'':'<path class="ldr" d="M660 64L556 176"/>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+x0+'" y="'+(mob?42:50)+'">'+(mob?'BOND FORMED IN WATER':'A NEW PEPTIDE BOND, FORMED IN WATER')+'</text>'+
     (mob?'':'<path class="ldr" d="M336 58L430 192"/><text class="t" x="28" y="72">NEAR-NEUTRAL PH \u00b7 REGIO- AND STEREOSELECTIVE</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="'+x0+'" y="'+(mob?42:50)+'">'+(mob?'ONE CONTINUOUS CHAIN':'ONE CONTINUOUS CHAIN, NO LINKER LEFT')+'</text>'+
     '<text class="a jl" x="'+(mob?48:452)+'" y="'+(mob?492:442)+'">TRACELESS JUNCTION</text>'+
     (mob?'':'<path class="ldr" d="M446 430L410 374"/>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var N=EZX.N;
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var G={};["a1","b1","a2","b2","fin"].forEach(function(k){var p=$("#gd_"+k,svg);G[k]=[p,p.getTotalLength()]});
  var E={ez:dl("#enz .sD"),ebg:$(".ebg",svg),cgl:$(".cgl",svg),cat:$(".cat",svg),rp:$$(".rp",svg),
    lnA:$("#lnA",svg),lnB:$("#lnB",svg),bond:$("#bond",svg),jn:$("#jn",svg),
    bdA:$$(".bd.a",svg),bdB:$$(".bd.b",svg),t:$$("#enz text, svg > text",svg),
    ezl:$("#ezl",svg),b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg)};
  var lastB=-1;
  function at(k,u){var p=G[k];return p[0].getPointAtLength(p[1]*Math.max(0,Math.min(1,u)))}
  function lerp(a,b,t){return {x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t}}
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.t.forEach(function(el){if(el!==E.ezl)op(el,b)})}
    var dock=seg(p,.30,.56),bond=seg(p,.56,.66),out=seg(p,.70,.94),lit=seg(p,.34,.52);
    /* the ligase is engraved in from the start; its cleft lights while the bond is made, then settles back */
    draw(E.ez,b);op(E.ebg,b*(.4+.6*lit));op(E.cgl,b*(.1+.9*seg(p,.42,.62)*(1-.55*out)));op(E.cat,b*(.4+.6*lit));
    op(svg.getElementById("enz"),b*(1-.45*out));op(E.ezl,b*(1-seg(p,.66,.78)));
    E.rp.forEach(function(el,k){var ph=(bond*1.6+k/3)%1,on=b*seg(p,.54,.6)*(1-seg(p,.68,.76));
      el.setAttribute("r",(16+ph*120).toFixed(1));op(el,on*(1-ph)*.7)});
    /* bead positions: apart -> docked in the cleft -> one chain sweeping the frame */
    var ptsA=[],ptsB=[],i,q,pt;
    for(i=0;i<N;i++){
      q=i/(N-1);
      pt=lerp(lerp(at("a1",q),at("a2",q),dock),at("fin",(i/(2*N-1))*.98),out);
      ptsA.push(pt);E.bdA[i].setAttribute("cx",pt.x.toFixed(1));E.bdA[i].setAttribute("cy",pt.y.toFixed(1));
      op(E.bdA[i],b*seg(p,.02+i*.012,.1+i*.012));
      pt=lerp(lerp(at("b1",q),at("b2",q),dock),at("fin",((2*N-1-i)/(2*N-1))*.98+.02),out);
      ptsB.push(pt);E.bdB[i].setAttribute("cx",pt.x.toFixed(1));E.bdB[i].setAttribute("cy",pt.y.toFixed(1));
      op(E.bdB[i],b*seg(p,.02+i*.012,.1+i*.012));
    }
    E.lnA.setAttribute("points",ptsA.map(function(o){return o.x.toFixed(1)+","+o.y.toFixed(1)}).join(" "));
    E.lnB.setAttribute("points",ptsB.map(function(o){return o.x.toFixed(1)+","+o.y.toFixed(1)}).join(" "));
    op(E.lnA,b*seg(p,.04,.16));op(E.lnB,b*seg(p,.04,.16));
    /* the new bond: it draws between the two terminal beads, then simply becomes part of the chain */
    var a=ptsA[N-1],c=ptsB[N-1],t=Math.max(bond,out);
    E.bond.setAttribute("d","M"+a.x.toFixed(1)+" "+a.y.toFixed(1)+"L"+(a.x+(c.x-a.x)*t).toFixed(1)+" "+(a.y+(c.y-a.y)*t).toFixed(1));
    op(E.bond,b*seg(p,.56,.62));
    E.jn.setAttribute("cx",((a.x+c.x)/2).toFixed(1));E.jn.setAttribute("cy",((a.y+c.y)/2).toFixed(1));
    op(E.jn,b*seg(p,.58,.66)*(1-seg(p,.86,.96)));
    op(E.b1,b*(1-seg(p,.26,.32)));op(E.b2,b*seg(p,.38,.46)*(1-seg(p,.64,.7)));op(E.b3,b*seg(p,.74,.84));
  };
}

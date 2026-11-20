/* The story scene (BL/BY/DB): catestatin from protein to medicine, as ONE continuous scene. Top: chromogranin A drawn as its
   439-residue chain with residue ticks; the CST segment (352–372) lights in the accent and lifts down into a 21-bead chain
   with its real sequence (SSMKLSFRARAYGFRGPGPQL). Step 2: from that chain, lines reach the systems CST acts on in their
   preclinical studies (gut motility, metabolism, blood pressure, brain). Step 3: the chain turns retro-inverso (the sequence
   reads backwards and each bead becomes a D-amino acid, ringed), and below it a protease cuts a native chain apart while
   the RI-CST chain stays whole. Every element is driven by the scrubbed story progress. Sources: cgatherapeuticals.com
   (/pipeline, /therapeutic-application, /leadership), RCSB PDB 1LV4. */
var SCW=760,SCH=520;
var CST="SSMKLSFRARAYGFRGPGPQL".split("");
var CX0=52,CDX=(708-52)/20;
function chainY(i){return 214+Math.sin(i*.62)*9}
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  var bx=function(r){return 40+(r-1)/(439-1)*680};
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><g transform="translate(0 30)">';
  /* ---- base: chromogranin A, its ticks and captions ---- */
  g+='<g id="scBase">';
  g+='<text class="t" x="40" y="30">CHROMOGRANIN A · 439 AMINO ACIDS</text>';
  g+='<path class="frm sD" d="M40 52H720V72H40Z"/>';
  for(i=1;i<=439;i+=12){var x=bx(i);g+='<path class="tk sD" d="M'+f(x)+' 72V77"/>'}
  g+='<text class="t" x="40" y="96">1</text><text class="t" x="720" y="96" text-anchor="end">439</text>';
  g+='</g>';
  /* the CST segment and its residue numbers */
  g+='<rect id="scSeg" class="seg" x="'+f(bx(352))+'" y="52" width="'+f(bx(372)-bx(352))+'" height="20"/>';
  g+='<g id="scSegL"><text class="t a" x="'+f(bx(352)-4)+'" y="44" text-anchor="end">352</text><text class="t a" x="'+f(bx(372)+4)+'" y="44">372</text></g>';
  /* the lift: two lines from the segment ends fanning out to the chain ends */
  g+='<path id="scFanA" class="fan" d="M'+f(bx(352))+' 72L'+CX0+' '+f(chainY(0)-22)+'"/>';
  g+='<path id="scFanB" class="fan" d="M'+f(bx(372))+' 72L708 '+f(chainY(20)-22)+'"/>';
  /* ---- the 21-bead chain: bond line, beads, letters (native and retro) ---- */
  var bond='M'+CST.map(function(c,k){return f(CX0+k*CDX)+' '+f(chainY(k))}).join('L');
  g+='<path id="scBond" class="bond" d="'+bond+'"/>';
  g+='<g id="scBeads">';
  CST.forEach(function(c,k){var x=CX0+k*CDX,y=chainY(k),rv=CST[20-k];
    g+='<g class="bd" data-k="'+k+'" transform="translate('+f(x)+' '+f(y)+')"><circle class="bc" r="13.5"/><circle class="dr" r="17"/>'+
      '<text class="ln" y="4.6" text-anchor="middle">'+c+'</text><text class="lr" y="4.6" text-anchor="middle">'+rv+'</text></g>'});
  g+='</g>';
  g+='<text id="lbNat" class="t" x="52" y="262">CATESTATIN · NATIVE SEQUENCE</text>';
  g+='<text id="lbRi" class="t a" x="52" y="262">RI-CST · REVERSED SEQUENCE · D-AMINO ACIDS</text>';
  /* ---- step 2: the systems it acts on ---- */
  var SYS=[["GUT MOTILITY","gastroparesis",130],["METABOLISM","insulin · glucose · lipids",300],["BLOOD PRESSURE","heart and vessels",470],["BRAIN","tau · amyloid",630]];
  g+='<g id="scSys">';
  SYS.forEach(function(s,k){var sx=s[2],src=CX0+(4+k*4)*CDX;
    g+='<path class="sl" d="M'+f(src)+' '+f(chainY(4+k*4)+18)+'C'+f(src)+' 330 '+f(sx)+' 330 '+f(sx)+' 384"/>';
    g+='<circle class="sn" cx="'+sx+'" cy="392" r="7"/>';
    g+='<text class="a" x="'+sx+'" y="428" text-anchor="middle">'+s[0]+'</text><text class="t" x="'+sx+'" y="450" text-anchor="middle">'+s[1].toUpperCase()+'</text>'});
  g+='</g>';
  /* ---- step 3: protease test, native vs RI-CST ---- */
  g+='<g id="scPro">';
  var rows=[[340,"NATIVE CST","nat"],[430,"RI-CST","ri"]];
  rows.forEach(function(r){var y=r[0];
    g+='<text class="t'+(r[2]==="ri"?" a":"")+'" x="52" y="'+(y-24)+'">'+r[1]+'</text>';
    g+='<g class="mini '+r[2]+'">';
    for(var k=0;k<21;k++){var x=CX0+12+k*((708-CX0-24)/20);g+='<circle class="mb" data-k="'+k+'" cx="'+f(x)+'" cy="'+y+'" r="8"/>'}
    g+='</g>'});
  /* the protease: a pair of blades closing across the native chain */
  var px=CX0+12+13.5*((708-CX0-24)/20);
  g+='<g id="scBl" transform="translate('+f(px)+' 340)"><g class="bl1"><path d="M-22 -44L5 8"/><circle class="rg" cx="-25" cy="-51" r="6.5"/></g><g class="bl2"><path d="M22 -44L-5 8"/><circle class="rg" cx="25" cy="-51" r="6.5"/></g><circle class="pv" cx="0" cy="-18" r="2.6"/></g>';
  g+='<text id="lbCut" class="t" x="708" y="'+(340-24)+'" text-anchor="end">PROTEASE · CUT</text>';
  g+='<text id="lbOk" class="t a" x="708" y="'+(430-24)+'" text-anchor="end">INTACT</text>';
  g+='</g>';
  return g+'</g></svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),seg:$("#scSeg",svg),segL:$("#scSegL",svg),
    fan:dl("#scFanA,#scFanB"),bond:dl("#scBond"),
    bd:$$(".bd",svg).map(function(el){return {el:el,k:+el.getAttribute("data-k"),ln:$(".ln",el),lr:$(".lr",el),dr:$(".dr",el)}}),
    nat:$("#lbNat",svg),ri:$("#lbRi",svg),sys:$("#scSys",svg),sl:dl("#scSys .sl"),sysT:$$("#scSys text,#scSys circle",svg),
    pro:$("#scPro",svg),nb:$$(".mini.nat .mb",svg),rb:$$(".mini.ri .mb",svg),bl:$("#scBl",svg),b1:$("#scBl .bl1",svg),b2:$("#scBl .bl2",svg),cut:$("#lbCut",svg),ok:$("#lbOk",svg)};
  var CXS=E.nb.map(function(c){return +c.getAttribute("cx")});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the segment lights, then lifts into the chain */
    var lit=seg(p,0,.1),lift=seg(p,.06,.22),bead=seg(p,.1,.3);
    op(E.seg,b*lit);op(E.segL,b*lit);draw(E.fan,b*lift);draw(E.bond,b*bead);
    /* step 3: the chain turns retro-inverso */
    var ri=seg(p,.68,.8);
    E.bd.forEach(function(B){var gi=Math.min(1,Math.max(0,bead*1.9-B.k*.045));
      op(B.el,b*gi);B.el.setAttribute("transform",B.el.getAttribute("transform").replace(/ scale\([^)]*\)/,"")+" scale("+(.6+.4*gi).toFixed(3)+")");
      var flip=Math.min(1,Math.max(0,ri*1.6-Math.abs(B.k-10)*.03));
      op(B.ln,1-flip);op(B.lr,flip);op(B.dr,flip)});
    op(E.nat,b*seg(p,.22,.3)*(1-seg(p,.64,.69)));op(E.ri,b*seg(p,.72,.8));
    /* step 2: lines reach the systems; they give way to step 3 */
    var sIn=seg(p,.36,.5),sOut=seg(p,.62,.7);
    op(E.sys,b*(1-sOut));draw(E.sl,b*sIn);E.sysT.forEach(function(el){op(el,seg(p,.42,.52))});
    /* step 3: protease test */
    var pIn=seg(p,.72,.8),close=seg(p,.8,.9);
    op(E.pro,b*pIn);
    E.bl.setAttribute("transform",E.bl.getAttribute("transform").replace(/ rotate\([^)]*\)/,""));
    E.b1.setAttribute("transform","rotate("+(-18*(1-close)).toFixed(2)+" 0 -18)");E.b2.setAttribute("transform","rotate("+(18*(1-close)).toFixed(2)+" 0 -18)");
    var spread=seg(p,.86,.97);
    /* the native chain is cut where the blades close: its two halves part and fade */
    E.nb.forEach(function(c,k){var d=k<=13?-1:1,cx=CXS[k]+d*20*spread;c.setAttribute("cx",cx.toFixed(1));op(c,1-.5*spread)});
    op(E.cut,seg(p,.88,.95));op(E.ok,seg(p,.9,.97));
  };
}

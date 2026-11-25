/* The story scene (BL/BY/DB): how PAX-001 works, drawn as ONE continuous close-up of a repaired tendon, kept on screen for
   all three steps (paxtherapeutics.com home, /the-science, /our-pipeline). Step 1: a tendon after repair surgery, its two
   ends held by a suture; with surgery alone the gap fills first with disordered Type 3 (scar) collagen. Step 2: PAX-001 is
   injected at the repair during the same surgery; AAV2 vector particles reach the tendon's own cells, which light up and
   make the growth factor (VEGF) locally. Step 3: the scar mesh gives way to aligned Type 1 collagen bridging the repair.
   Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
function pxHex(cx,cy,r){var d="",i;for(i=0;i<6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?"L":"M")+(cx+r*Math.cos(a)).toFixed(1)+" "+(cy+r*Math.sin(a)).toFixed(1)}return d+"Z"}
var PXF=[];(function(){for(var i=0;i<22;i++)PXF.push(120+i*9.5)})();
var PXCELL=[[200,150],[262,196],[228,246],[272,290],[140,272],[496,160],[548,214],[520,262],[604,300],[650,190]];
var PXVEC=[[330,170],[362,236],[404,196],[432,282],[384,304],[286,220],[474,236],[414,150]];
function pxWave(x0,x1,y,amp,ph){var d="M"+x0+" "+y.toFixed(1),x;for(x=x0+6;x<=x1;x+=6){d+="L"+x+" "+(y+amp*Math.sin(x*.21+ph)).toFixed(1)}return d}
function pxScene(o){
  var g='',i,mob=o.mob,r=37;
  function rnd(){r=(r*9301+49297)%233280;return r/233280}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the two tendon ends (fascicle fibres with a fine crimp) and the repair suture, drawn in with the section ---- */
  g+='<g id="scBase">';
  PXF.forEach(function(y,k){var e1=300+Math.round((rnd()-.5)*14),s2=460+Math.round((rnd()-.5)*14);
    g+='<path class="fib sD" d="'+pxWave(30,e1,y,1.1,k*.9)+'"/><path class="fib sD" d="'+pxWave(s2,730,y,1.1,k*.9+2)+'"/>'});
  g+='<path class="sut sD" d="M250 166H510V274H250Z"/>';
  g+='<text class="t" x="30" y="100">'+(mob?"TENDON":"TENDON, AFTER REPAIR SURGERY")+'</text>';
  g+='<text class="t" x="250" y="'+(mob?352:346)+'">SUTURE</text>';
  g+='</g>';
  /* ---- Type 3 scar collagen: a disordered mesh filling the gap ---- */
  var sc=[];for(i=0;i<64;i++){var x=314+rnd()*132,y=138+rnd()*162,a=rnd()*Math.PI*2,l=12+rnd()*14;
    sc.push("M"+x.toFixed(1)+" "+y.toFixed(1)+"q"+(l*.5*Math.cos(a+.8)).toFixed(1)+" "+(l*.5*Math.sin(a+.8)).toFixed(1)+" "+(l*Math.cos(a)).toFixed(1)+" "+(l*Math.sin(a)).toFixed(1))}
  g+='<g id="scar">'+sc.map(function(d){return '<path class="scar" d="'+d+'"/>'}).join("")+'</g>';
  /* ---- Type 1 collagen: aligned fibres bridging the repair ---- */
  g+='<g id="t1">'+PXF.map(function(y,k){return '<path class="t1" d="'+pxWave(294,466,y,1.1,k*.9+1)+'"/>'}).join("")+'</g>';
  /* ---- the tendon's own cells (tenocytes), which light up once the vector reaches them, and the growth factor they make ---- */
  g+='<g id="cells">'+PXCELL.map(function(c){return '<ellipse class="cell" cx="'+c[0]+'" cy="'+c[1]+'" rx="9" ry="3.4"/>'}).join("")+'</g>';
  g+='<g id="vegf">'+PXCELL.map(function(c,k){return '<circle class="gf" cx="'+(c[0]+(k%2?13:-13))+'" cy="'+(c[1]-6)+'" r="2.2"/><circle class="gf" cx="'+(c[0]+(k%2?-6:8))+'" cy="'+(c[1]+7)+'" r="1.8"/>'}).join("")+'</g>';
  /* ---- AAV2 vector particles (small icosahedral capsids, drawn as hexagons) ---- */
  g+='<g id="vecs">'+PXVEC.map(function(v,k){return '<path class="vec" id="vc'+k+'" d="'+pxHex(0,0,5.2)+'"/>'}).join("")+'</g>';
  /* ---- the injection: a needle and syringe barrel, tip at (0,0), coming in from the upper right ---- */
  g+='<g id="ndl"><path class="ndl" d="M0 0L70 -58"/><path class="brl" d="M75.8 -51.1L64.2 -64.9L144.2 -130.9L155.8 -117.1Z"/><path class="brl" d="M144 -142L168 -113"/>'+
    '<text class="t a2" x="182" y="-118">PAX-001 · AAV2</text></g>';
  /* ---- the state of the repair, under the tendon ---- */
  g+='<g id="m1"><text class="t s3" x="380" y="'+(mob?396:388)+'" text-anchor="middle">'+(mob?"TYPE 3 SCAR COLLAGEN":"DISORDERED TYPE 3 SCAR COLLAGEN")+'</text></g>';
  g+='<g id="m2"><text class="t s2" x="380" y="'+(mob?396:388)+'" text-anchor="middle">'+(mob?"CELLS MAKE VEGF":"TENDON CELLS MAKE THE GROWTH FACTOR VEGF")+'</text></g>';
  g+='<g id="m3"><text class="t s1" x="380" y="'+(mob?396:388)+'" text-anchor="middle">'+(mob?"ALIGNED TYPE 1 COLLAGEN":"ALIGNED TYPE 1 COLLAGEN BRIDGES THE REPAIR")+'</text></g>';
  /* ---- step captions, in the clear band under the scene ---- */
  g+='<g id="lb1"><text class="a" x="30" y="470">'+(mob?"SURGERY ALONE: SCAR FIRST":"SURGERY ALONE: SCAR COLLAGEN COMES FIRST")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="30" y="470">'+(mob?"ONE INJECTION, LOCAL":"ONE LOCAL INJECTION DURING THE REPAIR")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="30" y="470">'+(mob?"STRONGER, FASTER HEALING":"STRONGER HEALING, FROM THE START")+'</text></g>';
  return g+'</svg>';
}
function scene(){return pxScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),t1:dl("#t1 .t1"),scar:dl("#scar .scar"),scarG:$("#scar",svg),cells:$$("#cells .cell",svg),gf:$("#vegf",svg),
    vec:$$("#vecs .vec",svg),ndl:$("#ndl",svg),m1:$("#m1",svg),m2:$("#m2",svg),m3:$("#m3",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function tf(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  function mix(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the scar mesh fills the gap; step 3: it gives way */
    var scIn=seg(p,.03,.22),scOut=seg(p,.7,.86);
    var nS=E.scar.length;E.scar.forEach(function(a,k){var v=Math.min(1,Math.max(0,scIn*1.6-k/nS*.6));a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)});op(E.scarG,b*(1-.92*scOut));
    /* step 2: the needle comes in to the repair site, the vector spreads to the cells, the needle withdraws */
    var nIn=seg(p,.35,.45),nOut=seg(p,.58,.66);
    tf(E.ndl,mix(500,380,nIn)+nOut*110,mix(150,205,nIn)-nOut*60);op(E.ndl,b*seg(p,.34,.38)*(1-nOut));
    var vs=seg(p,.44,.58);
    E.vec.forEach(function(v,k){var t=PXVEC[k];tf(v,mix(380,t[0],vs),mix(205,t[1],vs));op(v,b*seg(p,.43,.46)*(1-.75*seg(p,.62,.72)))});
    var glow=seg(p,.5,.6);
    E.cells.forEach(function(c){c.style.fillOpacity=(.12+.88*glow).toFixed(3)});
    op(E.gf,b*seg(p,.54,.64));
    /* step 3: aligned Type 1 fibres draw across the repair */
    draw(E.t1,seg(p,.68,.88));
    op(E.m1,b*seg(p,.1,.18)*(1-seg(p,.3,.34)));op(E.m2,b*seg(p,.52,.58)*(1-seg(p,.64,.68)));op(E.m3,b*seg(p,.82,.88));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.8,.88));
  };
}

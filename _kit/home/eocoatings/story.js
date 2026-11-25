/* The story scene (BL/BY/DB): how EO Coatings make a coating (eocoatings.com: "vacuum evaporated optical coatings",
   the Infra-red page's witness-piece tests), drawn as ONE bench kept on screen for all three steps, every part outlined
   from the start so the frame is never empty:
   Step 1 (Load): the optics on the domed workholder of a vacuum box coater.  Step 2 (Evaporate): the source glows, the
   vapour rises to the optics and the film builds, layer on layer (magnified at right).  Step 3 (Test): the witness
   piece's reflectance falls across the 8-12 um band, and the MIL-C-48497A tests are named. Labels keep >= 8px clear of
   every stroke (DR.3). */
var SCW=760,SCH=520;
function qb(t){var u=1-t;return [u*u*70+2*u*t*210+t*t*350,u*u*170+2*u*t*50+t*t*170]}
function eoScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><defs>'+
    '<linearGradient id="eoSp" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5a4ac0"/><stop offset=".18" stop-color="#2a7fe0"/><stop offset=".34" stop-color="#16b0d0"/><stop offset=".5" stop-color="#2cc07a"/><stop offset=".66" stop-color="#d8e03a"/><stop offset=".82" stop-color="#f2a31f"/><stop offset="1" stop-color="#ea3628"/></linearGradient>'+
    '<radialGradient id="eoGl"><stop offset="0" stop-color="#ffe9a8" stop-opacity=".95"/><stop offset=".45" stop-color="#f2a31f" stop-opacity=".45"/><stop offset="1" stop-color="#f2a31f" stop-opacity="0"/></radialGradient></defs>';
  /* the chamber */
  g+='<path class="ch sD" d="M30 40H390V470H30Z"/>';
  g+='<text class="t" x="46" y="66">'+(mob?"VACUUM":"VACUUM CHAMBER")+'</text>';
  g+='<path class="sh sD" d="M210 40V110"/>';
  g+='<path class="wh sD" d="M70 170Q210 50 350 170"/>';
  g+='<text class="t" x="240" y="92">WORKHOLDER</text>';
  /* the optics on the workholder, each with its coating face */
  var pts=[.1,.24,.38,.62,.76,.9],P=[];
  g+='<g id="eoOpt">';pts.forEach(function(t){var p=qb(t),u=1-t,dx=2*u*(210-70)+2*t*(350-210),dy=2*u*(50-170)+2*t*(170-50),a=Math.atan2(dy,dx)*180/Math.PI;P.push(p);
    g+='<g transform="translate('+p[0].toFixed(1)+' '+(p[1]+9).toFixed(1)+') rotate('+a.toFixed(1)+')"><rect class="op" x="-15" y="-5" width="30" height="10"/><rect class="oc" x="-15" y="5" width="30" height="3"/></g>'});g+='</g>';
  /* the source and its vapour */
  g+='<path class="src sD" d="M178 440H242L232 452H188Z"/>';
  g+='<circle id="eoGlow" cx="210" cy="436" r="34" fill="url(#eoGl)"/>';
  g+='<g id="eoDep">';P.forEach(function(p){g+='<path class="dep" d="M210 430L'+p[0].toFixed(1)+' '+(p[1]+24).toFixed(1)+'"/>'});g+='</g>';
  g+='<text class="t" x="256" y="449">SOURCE</text>';
  /* the film, magnified */
  if(!mob)g+='<text class="t" x="440" y="62">ONE OPTIC, MAGNIFIED</text>';
  g+='<rect class="sub sD" x="440" y="190" width="290" height="40"/>';
  g+='<text class="t" x="454" y="216">SUBSTRATE</text>';
  g+='<g id="eoLay">';for(i=0;i<8;i++){g+='<rect class="ly '+(i%2?"lo":"hi")+'" x="440" y="'+(190-(i+1)*9)+'" width="290" height="9"/>'}g+='</g>';
  g+='<text class="t s1" id="eoLL" x="440" y="'+(mob?"98":"104")+'">'+(mob?"LAYERS":"THIN-FILM LAYERS")+'</text>';
  /* the witness piece's reflectance, 2-14 um */
  g+='<path class="ax sD" d="M440 290V440H730"/>';
  g+='<rect id="eoBand" class="band" x="585" y="300" width="97" height="140"/>';
  g+='<path class="ref" d="M442 330H728"/>';
  g+='<text class="t" x="452" y="318">UNCOATED</text>';
  g+='<path id="eoCv" class="cv" d="M442 378C500 380 545 396 575 424C590 434 600 433 633 433C660 433 676 434 690 424C708 410 718 392 728 378"/>';
  g+='<text class="t" x="440" y="462">2 µm</text><text class="t" x="730" y="462" text-anchor="end">14 µm</text>';
  g+='<g id="eoBL"><text class="t s1" x="633" y="284" text-anchor="middle">8–12 µm</text></g>';
  g+='<g id="eoTL"><text class="t s1" x="440" y="'+(mob?"266":"262")+'">'+(mob?"MIL-C-48497A":"ADHESION · HUMIDITY · ABRASION")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="30" y="508">1 · LOAD</text></g>';
  g+='<g id="lb2"><text class="a" x="30" y="508">2 · EVAPORATE</text></g>';
  g+='<g id="lb3"><text class="a" x="30" y="508">3 · TEST</text></g>';
  return g+'</svg>';
}
function scene(){return eoScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),cv:dl("#eoCv"),opt:$("#eoOpt",svg),oc:$$(".oc",svg),dep:$("#eoDep",svg),glow:$("#eoGlow",svg),lay:$$("#eoLay .ly",svg),
    ll:$("#eoLL",svg),band:$("#eoBand",svg),bl:$("#eoBL",svg),tl:$("#eoTL",svg),ref:$(".ref",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),tt:$$("text.t",svg).filter(function(t){return !t.closest("g")&&t.id!=="eoLL"})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tt.forEach(function(t){op(t,b)});op(E.ref,b)}
    /* step 1: the optics on the workholder */
    op(E.opt,b*(.35+.65*seg(p,.03,.14)));
    /* step 2: the source glows, vapour rises, the film builds */
    var s2=seg(p,.36,.42)*(1-seg(p,.62,.68));
    op(E.glow,b*s2);op(E.dep,b*s2);
    E.oc.forEach(function(r){op(r,b*(.15+.85*seg(p,.4,.6)))});
    E.lay.forEach(function(r,i){op(r,b*(.12+.88*seg(p,.38+i*.025,.42+i*.025)))});
    op(E.ll,b*(.4+.6*seg(p,.4,.5)));
    /* step 3: the witness piece's reflectance falls across the band */
    op(E.band,b*seg(p,.66,.74));op(E.bl,b*seg(p,.7,.78));
    draw(E.cv,b*seg(p,.68,.88));
    op(E.tl,b*seg(p,.8,.9));
    op(E.l1,b*seg(p,0,.06)*(1-seg(p,.31,.36)));op(E.l2,b*seg(p,.36,.44)*(1-seg(p,.63,.68)));op(E.l3,b*seg(p,.68,.76));
  };
}

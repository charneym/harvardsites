/* The story scene (BL/BY/DB): one cable assembly as NIES electronic describes its Kabelkonfektion (nies-electronic.de > Kabelkonfektion),
   drawn as a fine-line side elevation kept on screen for all four steps:
   Step 1 (Beraten): the cable draws in, with its cross-section (jacket, braid shield, five cores) and the range NIES processes, 0.08 to 185 mm².
   Step 2 (Anschließen): the jacket and shield end, the cores fan out and take crimp contacts (one of the techniques listed).
   Step 3 (Montieren): the connector (overmould and knurled coupling nut) slides on over the contacts: in-house plug assembly.
   Step 4 (Prüfen): a test pulse runs the assembly, the readout counts to 1500 V and the order reads 100 % geprüft. Schematic, not to scale. */
var SCW=760,SCH=520;
var CORE=["#a7764f","#e8ecf1","#2a8ad6","#3a4250","#8a939b"];
function nsScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* cross-section A–A (top left) */
  g+='<g id="xs"><circle class="sD" cx="150" cy="128" r="70"/><circle class="sD sh" cx="150" cy="128" r="61"/>';
  var cp=[[150,128],[124,102],[176,102],[124,154],[176,154]];
  for(i=0;i<5;i++){g+='<circle class="cr" cx="'+cp[i][0]+'" cy="'+cp[i][1]+'" r="15" style="fill:'+CORE[(i+2)%5]+'"/><circle class="cu" cx="'+cp[i][0]+'" cy="'+cp[i][1]+'" r="7"/>'}
  g+='</g>';
  g+='<path class="sD ld" d="M150 206V300"/>';
  g+='<g id="xl"><text class="t" x="240" y="'+(mob?100:104)+'">'+(mob?"QUERSCHNITT":"QUERSCHNITT A–A")+'</text><text class="a big" x="240" y="'+(mob?142:136)+'">0,08–185 mm²</text></g>';
  /* the cable, side elevation */
  g+='<path class="cabf" id="cabf" d="M40 308H404V352H40Z"/><path class="cab" id="cab" d="M40 308H404V352H40"/>';
  g+='<path class="sD" d="M40 308C30 316 30 344 40 352"/>';
  /* step 2: braid stub, cores fanning out, crimp contacts */
  g+='<g id="cores"><path class="br" d="M404 312H418V348H404Z"/>';
  var ys=[300,315,330,345,360];
  for(i=0;i<5;i++){var y0=318+i*6;g+='<path class="core" style="stroke:'+CORE[i]+'" d="M418 '+y0+'C446 '+y0+' 452 '+ys[i]+' 480 '+ys[i]+'H500"/>'}
  g+='</g><g id="crimp">';
  for(i=0;i<5;i++){g+='<path class="cc" d="M500 '+(ys[i]-4)+'H530L536 '+ys[i]+'L530 '+(ys[i]+4)+'H500Z"/>'}
  g+='</g>';
  g+='<g id="cl"><text class="t" x="'+(mob?260:330)+'" y="430">'+(mob?"CRIMPEN · LÖTEN":"CRIMPEN · LÖTEN · KLEMMEN")+'</text></g>';
  /* step 3: the connector (overmould with grip ribs, knurled coupling nut), slid on from the right */
  g+='<defs><clipPath id="nsNut"><path d="M590 286H660V374H590Z"/></clipPath></defs>';
  g+='<g id="con"><path class="body" d="M440 314L470 292H590V368H470L440 346Z"/>';
  for(i=0;i<6;i++){g+='<path class="rib" d="M'+(482+i*18)+' 298V362"/>'}
  g+='<path class="nut" d="M590 286H656L660 290V370L656 374H590Z"/><g clip-path="url(#nsNut)">';
  for(i=-6;i<12;i++){g+='<path class="kn" d="M'+(560+i*9)+' 374L'+(648+i*9)+' 286M'+(560+i*9)+' 286L'+(648+i*9)+' 374"/>'}
  g+='</g><path class="face" d="M660 300V360"/></g>';
  g+='<g id="mlb"><text class="t" x="'+(mob?440:470)+'" y="262">STECKERMONTAGE</text></g>';
  /* step 4: test readout (top right) and the pulse along the assembly */
  g+='<g id="rd"><path class="pan" d="M470 40H720V226H470Z"/><text class="t" x="490" y="'+(mob?78:72)+'">'+(mob?"PRÜFUNG":"FUNKTIONSPRÜFUNG")+'</text>'+
     '<text class="vv" id="vv" x="490" y="'+(mob?140:132)+'">0 V</text><path class="pb0" d="M490 162H700"/><path class="pb" id="pb" d="M490 162H700"/></g>';
  g+='<circle class="pls" id="pls" cx="40" cy="330" r="6"/>';
  g+='<g id="ok"><path class="okm" d="M490 '+(mob?196:198)+'L498 '+(mob?204:206)+'L512 '+(mob?188:190)+'"/><text class="a" x="'+(mob?522:524)+'" y="'+(mob?205:204)+'">'+(mob?"100 %":"100 % GEPRÜFT")+'</text></g>';
  /* step captions */
  g+='<g id="lb1"><text class="a" x="40" y="500">1 · BERATEN</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="500">2 · ANSCHLIESSEN</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="500">3 · MONTIEREN</text></g>';
  g+='<g id="lb4"><text class="a" x="40" y="500">4 · PRÜFEN</text></g>';
  return g+'</svg>';
}
function scene(){return nsScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var q=function(s){return svg.querySelector(s)};
  var E={base:dl(".sD"),cores:dl(".core"),xs:q("#xs"),xl:q("#xl"),cab:q("#cab"),cabf:q("#cabf"),cg:q("#cores"),crimp:q("#crimp"),cl:q("#cl"),
    con:q("#con"),mlb:q("#mlb"),rd:q("#rd"),vv:q("#vv"),pb:q("#pb"),pls:q("#pls"),ok:q("#ok"),
    l1:q("#lb1"),l2:q("#lb2"),l3:q("#lb3"),l4:q("#lb4")};
  var CL=E.cab.getTotalLength();E.cab.style.strokeDasharray=(CL+20)+" "+(CL+20);
  var PL=210;E.pb.style.strokeDasharray=PL+" "+PL;
  var lastB=-1,lastV=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,s){if(el)el.setAttribute("transform",s)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.xs,b)}
    /* step 1: the cable draws in with the section reveal and is complete early in step 1; its fill follows, the section reads out */
    var cd=Math.max(b*.5,seg(p,0,.1))*b;if(p>=.1)cd=b;
    E.cab.style.strokeDashoffset=((CL+20)*(1-cd)).toFixed(1);op(E.cab,b);op(E.cabf,b*Math.max(.0,seg(p,.04,.12)));
    op(E.xl,b*seg(p,.04,.1));
    /* step 2: braid stub and cores fan out, crimp contacts land */
    op(E.cg,b*seg(p,.26,.3));draw(E.cores,seg(p,.27,.37));op(E.crimp,b*seg(p,.35,.41));op(E.cl,b*seg(p,.37,.43));
    /* step 3: the connector slides on over the contacts */
    var sl=seg(p,.51,.64);op(E.con,b*seg(p,.5,.55));tr(E.con,"translate("+(150*(1-sl)).toFixed(1)+" 0)");op(E.mlb,b*seg(p,.62,.67));
    /* step 4: the pulse runs the assembly, the readout counts up to 1500 V, then 100 % geprüft */
    op(E.rd,b*seg(p,.76,.8));
    var tv=seg(p,.78,.9),v=Math.round(tv*150)*10;if(v!==lastV){lastV=v;E.vv.textContent=(v>=1000?String(v).replace(/(\d)(\d{3})$/,"$1.$2"):v)+" V"}
    E.pb.style.strokeDashoffset=(PL*(1-tv)).toFixed(1);
    var pr=seg(p,.78,.92);op(E.pls,b*seg(p,.78,.8)*(1-seg(p,.92,.95)));E.pls.setAttribute("cx",(40+620*pr).toFixed(1));
    op(E.ok,b*seg(p,.9,.94));
    op(E.l1,b*seg(p,0,.04)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.25,.29)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.5,.54)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.75,.79));
  };
}

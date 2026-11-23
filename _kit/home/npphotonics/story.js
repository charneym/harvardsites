/* The story scene (DB): NP Photonics' own core technology (npphotonics.com, Core Technologies: silica dopants cluster at
   high concentration; phosphate glass takes up to 100x the dopant with no loss of gain, typically 5 dB/cm; a <2 cm fiber
   cavity gives single-frequency lasers with linewidths below 500 Hz), drawn as ONE continuous fine-line scene: a length
   of optical fiber in side section (cladding and core) across the frame. Frame 0 is already complete.
   Step 1 (silica): sparse rare-earth ions in the core, some clustered (ringed).
   Step 2 (phosphate): the long silica fiber gives way to a 2 cm phosphate segment, densely doped, its core brightening
   along its length (gain), with a centimetre ruler beneath.
   Step 3 (cavity): reflectors at both ends form the cavity; pump light enters, a single-frequency beam leaves (logo
   yellow), and its spectrum below shows one narrow line. Everything is driven by the scrubbed progress. */
var SCW=660,SCH=540;
var FY=250,CL=34,CO=10,XA=30,XB=230,XC=430,XD=630;
function fpiece(a,b){return ['M'+a+' '+(FY-CL)+'H'+b,'M'+a+' '+(FY+CL)+'H'+b,'M'+a+' '+(FY-CO)+'H'+b,'M'+a+' '+(FY+CO)+'H'+b]}
var SIL=[[60,0],[104,1],[109,0],[160,-2],[205,2],[252,-3],[258,1],[263,-2],[318,2],[372,-1],[420,2],[468,-2],[473,2],[530,0],[585,-2],[590,2]];
var CLU=[[106,250,11],[258,249,13],[471,250,11],[588,250,11]];
var DEN=[];(function(){var r=7;function rnd(){r=(r*9301+49297)%233280;return r/233280}for(var i=0;i<78;i++)DEN.push([234+192*(i/77)+(rnd()-.5)*3,FY+(rnd()-.5)*15])})();
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'180 176 460 370':'0 176 660 370')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="gGain" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#3fb2e8" stop-opacity="0"/><stop offset=".6" stop-color="#3fb2e8" stop-opacity=".35"/><stop offset="1" stop-color="#bfe9ff" stop-opacity=".85"/></linearGradient>'+
     '<filter id="fGlow" x="-20%" y="-300%" width="140%" height="700%"><feGaussianBlur stdDeviation="3"/></filter></defs>';
  g+='<g id="scL">';fpiece(XA,XB).forEach(function(d,k){g+='<path class="'+(k<2?'wl':'wo')+' sD" d="'+d+'"/>'});g+='</g>';
  g+='<g id="scR">';fpiece(XC,XD).forEach(function(d,k){g+='<path class="'+(k<2?'wl':'wo')+' sD" d="'+d+'"/>'});g+='</g>';
  g+='<g id="scM">';fpiece(XB,XC).forEach(function(d,k){g+='<path class="'+(k<2?'wl':'wo')+' sD" d="'+d+'"/>'});g+='</g>';
  /* gain: the core brightens along the phosphate segment */
  g+='<rect id="gain" x="'+XB+'" y="'+(FY-CO)+'" width="'+(XC-XB)+'" height="'+(2*CO)+'" fill="url(#gGain)"/>';
  /* silica ions, and the clusters ringed */
  g+='<g id="scSil">';SIL.forEach(function(s){g+='<circle class="io" r="3" cx="'+s[0]+'" cy="'+(FY+s[1])+'"/>'});g+='</g>';
  g+='<g id="scClu">';CLU.forEach(function(c){g+='<circle class="cl" r="'+c[2]+'" cx="'+c[0]+'" cy="'+c[1]+'"/>'});g+='</g>';
  /* dense phosphate ions */
  g+='<g id="scDen">';DEN.forEach(function(d){g+='<circle class="dn" r="2" cx="'+d[0].toFixed(1)+'" cy="'+d[1].toFixed(1)+'"/>'});g+='</g>';
  /* the cavity reflectors at both ends of the segment */
  g+='<g id="scGr">';for(i=0;i<6;i++){g+='<path class="gr" d="M'+(236+i*4)+' '+(FY-CO+1)+'V'+(FY+CO-1)+'"/><path class="gr" d="M'+(404+i*4)+' '+(FY-CO+1)+'V'+(FY+CO-1)+'"/>'}g+='</g>';
  /* the centimetre ruler */
  g+='<g id="scRul"><path class="ru" d="M'+XB+' 300H'+XC+'M'+XB+' 294V306M330 296V304M'+XC+' 294V306"/>'+
     '<text class="t" x="'+XB+'" y="'+(mob?334:326)+'" text-anchor="middle">0</text><text class="t" x="330" y="'+(mob?334:326)+'" text-anchor="middle">1</text><text class="t" x="'+XC+'" y="'+(mob?334:326)+'" text-anchor="middle">2 CM</text></g>';
  /* pump in, beam out */
  g+='<path id="pump" class="pm" d="M70 '+FY+'H226"/>';
  g+='<g id="beam"><path class="bmG" d="M434 '+FY+'H636" filter="url(#fGlow)"/><path class="bm" d="M434 '+FY+'H636"/></g>';
  /* the output spectrum: one narrow line */
  var pk='M470 460';for(var x=472;x<=630;x+=2){var dx=(x-550)/3.2;pk+='L'+x+' '+(460-96/(1+dx*dx)).toFixed(1)}
  g+='<g id="spec"><path class="ax" d="M470 460H630"/><path class="pk" d="'+pk+'"/></g>';
  /* labels, each clear of every stroke (DR) */
  g+='<g id="lSil"><text class="t" x="'+(mob?190:XA)+'" y="202">SILICA FIBER</text></g>';
  g+='<g id="lClu"><text class="t q" x="'+(mob?190:XA)+'" y="'+(mob?316:306)+'">'+(mob?'CLUSTERED':'CLUSTERED IONS')+'</text></g>';
  g+='<g id="lPho"><text class="t" x="330" y="202" text-anchor="middle">'+(mob?'PHOSPHATE':'PHOSPHATE FIBER · 5 dB/CM')+'</text></g>';
  g+='<g id="lDbr"><text class="t" x="330" y="202" text-anchor="middle">'+(mob?'CAVITY &lt; 2 CM':'FIBER CAVITY &lt; 2 CM')+'</text></g>';
  g+='<g id="lPump">'+(mob?'':'<text class="t" x="70" y="232">PUMP</text>')+'</g>';
  g+='<g id="lOut"><text class="t" x="630" y="'+(mob?226:232)+'" text-anchor="end">OUTPUT</text></g>';
  g+='<g id="lHz"><text class="t a2" x="'+(mob?532:536)+'" y="384" text-anchor="end">&lt; 500 Hz</text><text class="t q" x="'+(mob?532:536)+'" y="'+(mob?410:402)+'" text-anchor="end">LINEWIDTH</text></g>';
  var ly=SCH-6,lx=mob?190:XA;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SILICA: IONS CLUSTER':'IN SILICA, RARE-EARTH DOPANTS CLUSTER')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PHOSPHATE: 100× DOPANT':'PHOSPHATE GLASS: UP TO 100× THE DOPANT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ONE NARROW LINE OUT':'A SINGLE-FREQUENCY LASER UNDER 2 CM')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),gr:dl("#scGr .gr"),pump:dl("#pump"),beam:dl("#beam path"),spec:dl("#spec path"),
    L:$("#scL",svg),R:$("#scR",svg),gain:$("#gain",svg),sil:$("#scSil",svg),clu:$("#scClu",svg),den:$$("#scDen .dn",svg),rul:$("#scRul",svg),
    lSil:$("#lSil",svg),lClu:$("#lClu",svg),lPho:$("#lPho",svg),lDbr:$("#lDbr",svg),lPump:$("#lPump",svg),lOut:$("#lOut",svg),lHz:$("#lHz",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(2)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s2=seg(p,.4,.6),out=seg(p,.36,.48);
    /* 1. silica: sparse ions, the clusters ringed */
    op(E.L,1-out);op(E.R,1-out);
    op(E.sil,b*(1-seg(p,.34,.44)));op(E.clu,b*seg(p,.06,.16)*(1-seg(p,.34,.42)));
    op(E.lSil,b*(1-seg(p,.32,.4)));op(E.lClu,b*seg(p,.08,.18)*(1-seg(p,.32,.4)));
    /* 2. phosphate: dense ions fill the 2 cm segment, gain brightens along it */
    E.den.forEach(function(el,i){op(el,b*seg(p,.4+i*.0018,.48+i*.0018))});
    op(E.gain,b*s2);op(E.rul,b*seg(p,.46,.56));
    op(E.lPho,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));
    /* 3. cavity: reflectors, pump in, single-frequency beam out, one narrow spectral line */
    var gv=seg(p,.68,.76);E.gr.forEach(function(a){a[0].style.opacity=gv.toFixed(3)});draw(E.gr,gv);
    draw(E.pump,seg(p,.72,.8));draw(E.beam,seg(p,.78,.88));draw(E.spec,seg(p,.82,.94));
    op(E.lDbr,b*seg(p,.72,.8));op(E.lPump,b*seg(p,.74,.8));op(E.lOut,b*seg(p,.84,.9));op(E.lHz,b*seg(p,.9,.96));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

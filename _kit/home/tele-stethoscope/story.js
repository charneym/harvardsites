/* the story scene (BL/BY/DB): one engraved composition kept on screen for all three steps, drawn from TSI's own description of its
   method (tele-stethoscope.com home, about and app pages; 2026 publications). Step 1 an ordinary phone records heart sounds and the
   phonocardiogram (S1/S2 beats) draws across the top. Step 2 the same signal is reconstructed in state space (a delay embedding:
   x(t) against x(t+tau)), the "computational nonlinear dynamics" TSI applies. Step 3 the markers read out against the gold standards
   TSI's studies use: echocardiography, spirometry, CT/MRI and blood labs. Schematic; the signal is synthetic and illustrative.
   Driven by the scrubbed story progress. */
var PCG=(function(){
  function sig(t){var v=0,beat=.83,ph=t%beat,c,w,f,a,k,P=[[.06,.028,46,1],[.37,.02,70,.72]];
    for(k=0;k<2;k++){c=P[k][0];w=P[k][1];f=P[k][2];a=P[k][3];var e=Math.exp(-Math.pow((ph-c)/w,2));v+=a*e*Math.sin(2*Math.PI*f*(ph-c))}return v}
  /* the trace: 3 beats */
  var tr='',i,n=900,x0=214,x1=772,y0=150,A=46;
  for(i=0;i<n;i++){var t=i/(n-1)*2.49;tr+=(i?'L':'M')+(x0+(x1-x0)*i/(n-1)).toFixed(1)+' '+(y0-sig(t)*A).toFixed(1)}
  /* the delay embedding of one beat */
  var em='',m=1600,lag=9,cx=430,cy=372,R=128,started=false;
  for(i=0;i<m-lag;i++){var ta=i/m*.83,tb=(i+lag)/m*.83,a=sig(ta),b=sig(tb);if(Math.abs(a)<.008&&Math.abs(b)<.008){started=false;continue}
    em+=(started?'L':'M')+(cx+a*R).toFixed(1)+' '+(cy-b*R).toFixed(1);started=true}
  return {tr:tr,em:em,cx:cx,cy:cy,R:R,x0:x0,x1:x1,y0:y0,A:A};
})();
/* the readouts (step 3): gold standards named in TSI's clinical study list */
var RO=[["ECHOCARDIOGRAM","EF · E/A · E/e′","ECHO"],["SPIROMETRY","FEV1/FVC","SPIRO"],["CT AND MRI","CAROTID STENOSIS","CT/MRI"],["BLOOD LABS","Hb · WBC · TROPONIN","LABS"]];
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,P=PCG;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="tsg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#4fd6f5" stop-opacity=".16"/><stop offset="1" stop-color="#4fd6f5" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the phone: body, screen, camera, side keys, a small trace on its screen */
  g+='<rect class="ph sD" x="40" y="120" width="140" height="290" rx="20"/>';
  g+='<rect class="ph2 sD" x="49" y="129" width="122" height="272" rx="14"/>';
  g+='<path class="ph2 sD" d="M180 178v28M180 218v42"/>';
  g+='<circle class="nt" cx="110" cy="142" r="3.4"/>';
  var mini='';for(i=0;i<=60;i++){var tt=i/60*.83,xx=62+96*i/60;mini+=(i?'L':'M')+f(xx)+' '+f(250-12*Math.sin(tt*46*2*Math.PI)*Math.exp(-Math.pow((tt-.06)/.03,2))-9*Math.sin(tt*70*2*Math.PI)*Math.exp(-Math.pow((tt-.37)/.022,2)))}
  g+='<path class="ms sD" d="'+mini+'"/>';
  g+='<path class="ph2 sD" d="M62 372h96"/>';
  /* sound arcs leaving the phone's microphone toward the trace */
  g+='<path class="arc sD" d="M190 140q14 10 0 20M198 132q24 18 0 36M206 124q34 26 0 52"/>';
  /* the trace's grid and axis */
  var gr='';for(i=0;i<=12;i++){var gx=P.x0+(P.x1-P.x0)*i/12;gr+='M'+f(gx)+' '+(P.y0-58)+'V'+(P.y0+58)}
  g+='<path class="gr sD" d="'+gr+'M'+P.x0+' '+P.y0+'H'+P.x1+'"/>';
  /* state-space axes */
  g+='<path class="ax sD" d="M'+(P.cx-P.R*1.25)+' '+P.cy+'H'+(P.cx+P.R*1.25)+'M'+P.cx+' '+(P.cy+P.R*1.12)+'V'+(P.cy-P.R*1.12)+'"/>';
  g+='<text class="t" x="'+(P.cx+P.R*1.25)+'" y="'+(P.cy+20)+'" text-anchor="end">x(t)</text><text class="t" x="'+(P.cx+10)+'" y="'+(P.cy-P.R*1.12+4)+'">x(t+τ)</text>';
  g+='<text class="t" x="784" y="548" text-anchor="end">'+(mob?'SCHEMATIC':'SCHEMATIC · SIGNAL ILLUSTRATIVE')+'</text>';
  g+='</g>';
  g+='<g id="scMove">';
  g+='<path class="tr" id="scTr" d="'+P.tr+'"/>';
  g+='<line class="head" id="scHead" x1="0" y1="'+(P.y0-62)+'" x2="0" y2="'+(P.y0+62)+'"/>';
  g+='<circle cx="'+P.cx+'" cy="'+P.cy+'" r="'+(P.R*1.5)+'" fill="url(#tsg)" id="scGlow"/>';
  g+='<path class="em" id="scEm" d="'+P.em+'"/>';
  /* readouts: leaders from the attractor's right edge to a stacked column */
  RO.forEach(function(r,j){var ly=258+j*76,lx=mob?606:624;
    g+='<g class="ro" id="ro'+j+'"><path class="ldr" d="M'+(P.cx+P.R*.72)+' '+f(P.cy-60+j*40)+'C'+(P.cx+P.R*1.25)+' '+f(P.cy-60+j*40)+' '+(lx-40)+' '+(ly-5)+' '+(lx-8)+' '+(ly-5)+'"/>'+
      '<circle class="dot" cx="'+(lx-8)+'" cy="'+(ly-5)+'" r="3"/>'+
      '<text class="a" x="'+lx+'" y="'+ly+'">'+(mob?r[2]:r[0])+'</text>'+(mob?'':'<text class="t" x="'+lx+'" y="'+(ly+20)+'">'+r[1]+'</text>')+'</g>'});
  g+='</g>';
  /* labels, one set per step */
  g+='<g id="lb1"><text class="a" x="'+P.x0+'" y="'+(mob?72:78)+'">'+(mob?'HEART SOUNDS':'HEART SOUNDS · S1 AND S2')+'</text>'+
     '<text class="a" x="110" y="'+(mob?458:448)+'" text-anchor="middle">'+(mob?'A PHONE':'AN ORDINARY PHONE')+'</text>'+(mob?'':'<text class="t" x="110" y="468" text-anchor="middle">NO EXTRA HARDWARE, NO GELS</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+P.cx+'" y="'+(mob?540:536)+'" text-anchor="middle">'+(mob?'STATE SPACE':'STATE-SPACE RECONSTRUCTION')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?606:624)+'" y="'+(mob?206:214)+'">'+(mob?'READS OUT':'READ AGAINST')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .nt",svg),mv:$("#scMove",svg),tr:dl("#scTr"),em:dl("#scEm"),head:$("#scHead",svg),glow:$("#scGlow",svg),
    ro:$$(".ro",svg),rol:$$(".ro .ldr",svg).map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;return [p,L]}),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-Math.max(0,Math.min(1,v)))).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.26),s2=seg(p,.34,.6),s3=seg(p,.68,.9);
    /* step 1: the trace records left to right; the playhead rides its tip */
    var tv=Math.max(.04,s1);draw(E.tr,tv);
    var hx=PCG.x0+(PCG.x1-PCG.x0)*tv;E.head.setAttribute("x1",hx.toFixed(1));E.head.setAttribute("x2",hx.toFixed(1));op(E.head,b*(1-s2)*.9);
    op(E.tr[0][0],b*(1-.55*s2));
    /* step 2: the embedding draws */
    draw(E.em,s2);op(E.em[0][0],b);op(E.glow,b*s2);
    /* step 3: readouts, one after another */
    E.ro.forEach(function(el,j){var v=seg(p,.68+j*.04,.8+j*.04);op(el,b*v);draw([E.rol[j]],v)});
    op(E.l1,b*(1-seg(p,.3,.36)));op(E.l2,b*s2*(1-seg(p,.64,.7)));op(E.l3,b*s3);
  };
}

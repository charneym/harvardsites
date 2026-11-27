/* The story scene (BL/BY/DB): calibration verification with an AUDIT linearity set and Auditor QC, in the terms of
   auditmicro.com (linearity materials "simulate human patient samples ... for determining linearity, calibration
   verification and verification of reportable range"; Auditor QC: "real-time data reduction ... linearity graphs and peer
   group analysis", reports "in an inspector friendly format" stored online). ONE figure: a linearity chart.
   Step 1: five vials A-E drop their results onto the expected axis. Step 2: the points land as entered results.
   Step 3: the fitted line draws and the peer-group band appears. Step 4: the report stamp. Values are illustrative. */
var AX=[150,262,374,486,598],AY=[390,318,250,178,110],AE=[0,-6,5,-4,3];
function auScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="ausc'+(mob?' mob':'')+'" viewBox="'+(mob?'100 18 540 492':'20 18 680 492')+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="40" y="40">AUDITOR QC · LINEARITY GRAPH · ILLUSTRATIVE</text>';
  g+='<path class="axl" d="M120 70V430H630"/><text class="ax" x="630" y="420" text-anchor="end">EXPECTED</text><text class="ax" x="128" y="66">MEASURED</text>';
  for(i=0;i<5;i++)g+='<path class="gl" d="M'+AX[i]+' 430V70"/>';
  g+='<path class="band" id="auBand" d="M120 418L630 60L630 92L120 446Z"/><text class="bl" id="auBl" x="600" y="'+(mob?236:180)+'" text-anchor="end">PEER GROUP</text>';
  g+='<path class="fit" id="auFit" d="M130 404L620 90"/>';
  for(i=0;i<5;i++){var L="ABCDE"[i];
    g+='<g id="auV'+i+'"><rect class="vb" x="'+(AX[i]-13)+'" y="446" width="26" height="30" rx="3"/><rect class="vc" x="'+(AX[i]-11)+'" y="438" width="22" height="9"/><circle class="vl" cx="'+AX[i]+'" cy="462" r="9"/><text class="vt" x="'+AX[i]+'" y="466" text-anchor="middle">'+L+'</text></g>'+
       '<path class="drop" id="auD'+i+'" d="M'+AX[i]+' 434V'+(AY[i]+AE[i])+'"/><circle class="pt" id="auP'+i+'" cx="'+AX[i]+'" cy="'+(AY[i]+AE[i])+'" r="7"/>'}
  g+='<g id="auR"><rect class="rp" x="'+(mob?430:470)+'" y="300" width="150" height="96" rx="4"/><text class="rt" x="'+(mob?505:545)+'" y="338" text-anchor="middle">REPORT</text><text class="rs" x="'+(mob?505:545)+'" y="364" text-anchor="middle">STORED ONLINE</text></g>';
  var C=mob?["RUN LEVELS A–E","ENTER IN AUDITOR QC","LINE AND PEER GROUP","INSTANT REPORT"]:["RUN FIVE LEVELS ACROSS THE RANGE","RESULTS ENTERED IN AUDITOR QC","LINEARITY GRAPH AND PEER GROUP","INSPECTOR-FRIENDLY REPORT, STORED ONLINE"];
  for(i=0;i<4;i++)g+='<text class="cl" id="auC'+i+'" x="'+(mob?110:40)+'" y="502">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return auScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var fit=q("#auFit"),band=q("#auBand"),bl=q("#auBl"),R=q("#auR"),V=[],D=[],P=[],i;
  for(i=0;i<5;i++){V.push(q("#auV"+i));D.push(q("#auD"+i));P.push(q("#auP"+i))}
  var cap=[0,1,2,3].map(function(k){return q("#auC"+k)});
  var LF=fit.getTotalLength();fit.style.strokeDasharray=LF+" "+LF;
  var LD=D.map(function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;return L});
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    V.forEach(function(el,k){op(el,b*seg(p,.02+k*.03,.08+k*.03))});
    D.forEach(function(el,k){var u=seg(p,.26+k*.035,.34+k*.035);el.style.strokeDashoffset=(LD[k]*(1-u)).toFixed(1);op(el,b*(1-seg(p,.55,.62))*.9)});
    P.forEach(function(el,k){op(el,b*seg(p,.32+k*.035,.36+k*.035))});
    fit.style.strokeDashoffset=(LF*(1-seg(p,.53,.68))).toFixed(1);op(fit,b*seg(p,.52,.54));
    op(band,b*seg(p,.62,.72)*.9);op(bl,b*seg(p,.64,.72));
    op(R,b*seg(p,.8,.9));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
  };
}

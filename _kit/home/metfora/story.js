/* The story scene (BL/BY/DB): how Metfora's test works (metfora.com Technology and Providers; NSF SBIR award 2212865), as ONE
   continuous scene drawn in fine line: a centrifuged blood tube (left), a coiled gas-chromatography column over the rods of
   a mass spectrometer (centre), and the chromatogram the instrument writes (right).
   Step 1 (sample): the tube draws in; metabolites shimmer in the plasma.
   Step 2 (measure): metabolites leave the plasma, run through the column and the rods; the trace is written peak by peak.
   Step 3 (read): a panel of peaks lights in the brand orange and condenses into a fingerprint, which is matched against the
   four chronic lung diseases of the first test. Schematic; no result is implied. Driven by the scrubbed story progress. */
var SCW=760,SCH=468;
var TX=96,TW=46,TY0=54,TY1=330,YAIR=118,YPL=214,YRBC=222;
var MET=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<22;i++)a.push({x:TX-TW/2+8+R()*(TW-16),y:YAIR+10+R()*(YPL-YAIR-18),d:R()*.5,r:1.8+R()*1.4});return a})();
var CX=338,CY=150;
var GX0=486,GX1=736,GY=300,GH=196;
var PK=(function(){var s=5,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<30;i++)a.push({x:GX0+12+R()*(GX1-GX0-24),h:.12+Math.pow(R(),1.8)*.88,w:1.6+R()*2.2});return a.sort(function(p,q){return p.x-q.x})})();
var SEL=[2,6,9,13,17,21,24,27];
function trace(){var d="",x;for(x=GX0;x<=GX1;x+=1.5){var y=.02+.012*Math.sin(x*.07);PK.forEach(function(p){var u=(x-p.x)/p.w;y+=p.h*Math.exp(-u*u*.5)});d+=(x===GX0?"M":"L")+x.toFixed(1)+" "+(GY-Math.min(y,1.05)*GH).toFixed(1)}return d}
function pathAt(t){/* metabolite route: tube mouth -> column inlet -> coil -> rods -> detector -> trace */
  var P=[[TX+14,TY0+6],[TX+70,44],[CX-90,CY-52],[CX,CY-34],[CX+64,CY-18],[CX-64,CY],[CX+64,CY+18],[CX-30,CY+40],[CX-70,256],[CX+90,256],[GX0-8,256]];
  var n=P.length-1,f=Math.min(n-1e-6,Math.max(0,t*n)),i=Math.floor(f),u=f-i;return [P[i][0]+(P[i+1][0]-P[i][0])*u,P[i][1]+(P[i+1][1]-P[i][1])*u]}
function tubeScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';g+='<text class="t" x="'+GX0+'" y="364">METABOLIC FINGERPRINT</text>';
  /* tube: glass, cap ribs, layer lines */
  var L=TX-TW/2,Rr=TX+TW/2;
  g+='<path class="sgl sD" d="M'+L+' '+TY0+'V'+(TY1-TW/2)+'a'+(TW/2)+' '+(TW/2)+' 0 0 0 '+TW+' 0V'+TY0+'"/>';
  g+='<path class="scp sD" d="M'+(L-6)+' '+(TY0+16)+'V'+(TY0-34)+'h'+(TW+12)+'V'+(TY0+16)+'z"/>';
  for(i=1;i<9;i++)g+='<path class="srb sD" d="M'+(L-6+i*(TW+12)/9).toFixed(1)+' '+(TY0-28)+'v38"/>';
  g+='<path class="sly sD" d="M'+(L+3)+' '+YAIR+'q'+(TW/2-3)+' 6 '+(TW-6)+' 0"/>';
  g+='<path class="sly sD" d="M'+(L+3)+' '+YPL+'h'+(TW-6)+'M'+(L+3)+' '+YRBC+'h'+(TW-6)+'"/>';
  g+='<path class="slb sD" d="M'+(Rr+1)+' '+(TY0+34)+'V'+(TY1-40)+'"/>';
  /* GC column: a coiled capillary */
  for(i=0;i<6;i++){var y=CY-36+i*14;g+='<ellipse class="sco sD" cx="'+CX+'" cy="'+y+'" rx="72" ry="17"/>'}
  g+='<path class="sco sD" d="M'+(CX-72)+' '+(CY-36)+'V'+(CY+34)+'M'+(CX+72)+' '+(CY-36)+'V'+(CY+34)+'"/>';
  /* mass spectrometer: four quadrupole rods and a detector plate */
  for(i=0;i<4;i++){var ry=240+i*9;g+='<path class="srq sD" d="M'+(CX-80)+' '+ry+'h170"/>'}
  g+='<path class="srq sD" d="M'+(CX+104)+' '+232+'v46"/>';
  /* chromatogram axes */
  g+='<path class="sax sD" d="M'+GX0+' '+(GY-GH-14)+'V'+GY+'H'+GX1+'"/>';
  for(i=0;i<6;i++){var tx=GX0+i*(GX1-GX0)/5;g+='<path class="stk sD" d="M'+tx.toFixed(1)+' '+GY+'v5"/>'}
  g+='<text class="t" x="'+(L-8)+'" y="'+(TY1+30)+'">BLOOD SAMPLE</text>';
  g+='<text class="t" x="'+(Rr+10)+'" y="'+(YAIR+40)+'">PLASMA</text>';
  g+='<text class="t" x="'+(Rr+10)+'" y="'+(YRBC+50)+'">RED CELLS</text>';
  g+='<text class="t" x="'+(CX-72)+'" y="'+(CY-64)+'">GC COLUMN</text>';
  g+='<text class="t" x="'+(CX-80)+'" y="'+(300)+'">MASS SPECTROMETER</text>';
  g+='<text class="t" x="'+GX0+'" y="'+(GY+28)+'">RETENTION TIME</text>';
  g+='<text class="t" x="'+GX0+'" y="'+(GY-GH-24)+'">ABUNDANCE</text>';
  g+='</g>';
  g+='<path id="scTr" class="str" d="'+trace()+'"/>';
  /* metabolites (dots) in the plasma and on their way */
  g+='<g id="scMet">';MET.forEach(function(m,k){g+='<circle class="smt" data-k="'+k+'" r="'+m.r.toFixed(1)+'" cx="'+m.x.toFixed(1)+'" cy="'+m.y.toFixed(1)+'"/>'});g+='</g>';
  /* selected peaks and the fingerprint they condense into */
  g+='<g id="scSel">';SEL.forEach(function(k,j){var p=PK[k],y=GY-Math.min(p.h+.03,1.05)*GH;g+='<g class="ssp" data-j="'+j+'"><circle class="spm" cx="'+p.x.toFixed(1)+'" cy="'+(y-7).toFixed(1)+'" r="3.4"/><path class="spl" d="M'+p.x.toFixed(1)+' '+(y-2).toFixed(1)+'V'+GY+'"/></g>'});g+='</g>';
  var FX0=GX0,FY=372,FW=(GX1-GX0)/SEL.length;
  g+='<g id="scFp">';SEL.forEach(function(k,j){var p=PK[k],bh=8+p.h*44,x=FX0+j*FW+FW*.22;g+='<rect class="sfb" data-j="'+j+'" x="'+x.toFixed(1)+'" y="'+(FY+52-bh).toFixed(1)+'" width="'+(FW*.56).toFixed(1)+'" height="'+bh.toFixed(1)+'"/>'});
  g+='</g>';
  g+='<g id="scSlot">';SEL.forEach(function(k,j){var x=FX0+j*FW+FW*.22;g+='<path class="sslot" d="M'+x.toFixed(1)+' '+(FY+52)+'h'+(FW*.56).toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scCls">';["COPD","ASTHMA","PH","ILD"].forEach(function(c,j){var cw=(GX1-GX0)/4,x=FX0+j*cw+cw/2;g+='<path class="scb" d="M'+(x-cw/2+5).toFixed(1)+' '+(FY+66)+'h'+(cw-10).toFixed(1)+'"/><text class="scl" text-anchor="middle" x="'+x.toFixed(1)+'" y="'+(FY+86)+'">'+c+'</text>'});g+='</g>';
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'ONE BLOOD DRAW · PLASMA METABOLITES':'ONE BLOOD DRAW · METABOLITES IN THE PLASMA')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'GC-MS · EACH PEAK A METABOLITE':'GC-MS SEPARATES AND MEASURES · EACH PEAK A METABOLITE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'ML · DISEASE-SPECIFIC PATTERN':'MACHINE LEARNING · A DISEASE-SPECIFIC PATTERN')+'</text></g>';
  return g+'</svg>';
}
function scene(){return tubeScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var tr=$("#scTr",svg),TL=tr.getTotalLength();tr.style.strokeDasharray=TL+" "+TL;
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    mt:$$(".smt",svg).map(function(el){var m=MET[+el.getAttribute("data-k")];return {el:el,m:m}}),
    sp:$$(".ssp",svg),fb:$$(".sfb",svg),cl:$$("#scCls .scl",svg),slot:$("#scSlot",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var run=seg(p,.28,.62),wr=seg(p,.36,.66),sel=seg(p,.68,.8),fp=seg(p,.76,.9),cls=seg(p,.84,.96);
    tr.style.strokeDashoffset=(TL*(1-wr)).toFixed(1);op(tr,b);
    E.mt.forEach(function(M,k){var m=M.m,q=sm((run-m.d*.5)/.5);
      if(q<=0){var sh=.75+.25*Math.sin(p*40+k);M.el.setAttribute("cx",m.x.toFixed(1));M.el.setAttribute("cy",(m.y+Math.sin(p*18+k)*1.5).toFixed(1));op(M.el,b*sm(seg(p,.02,.14))*sh)}
      else{var xy=pathAt(q);M.el.setAttribute("cx",xy[0].toFixed(1));M.el.setAttribute("cy",xy[1].toFixed(1));op(M.el,b*(1-sm((q-.9)/.1)))}});
    E.sp.forEach(function(el,j){op(el,b*sm((sel-j*.06)/.58))});
    E.fb.forEach(function(el,j){var q=sm((fp-j*.05)/.65);op(el,b*q);el.style.transform="scaleY("+(.2+.8*q).toFixed(3)+")"});
    
    E.cl.forEach(function(el,j){op(el,b*(.38+.62*sm((cls-j*.08)/.76)))});op(E.slot,b*.7);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.26,.32)));op(E.l2,b*seg(p,.36,.44)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.74,.82));
  };
}

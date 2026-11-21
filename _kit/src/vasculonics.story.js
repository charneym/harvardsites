/* the story scene: one tumour microenvironment, engraved like a plate. A cancer cell (nucleus, IDO, the aryl hydrocarbon receptor),
   CD8+ T cells and Tregs beside it. Step 1 IDO makes kynurenine, which activates AhR; step 2 AhR drives PD-L1, exhausts the CD8+
   T cells and enriches Tregs; step 3 VN-1032, a selective AhR modulator, reaches the receptor; step 4 the cytotoxic T cells
   re-engage the cancer cell (compatible with PD-1 inhibitors). Schematic, from the Science section of vasculonics.com. */
var VC=[250,290],VR=160,VAHR=[318,236];
function vBump(cx,cy,r,a,n,ph){var d="";for(var i=0;i<=n;i++){var t=i/n*Math.PI*2,rr=r+a*Math.sin(t*Math.round(n/9)+ph)+a*.6*Math.sin(t*Math.round(n/5)+ph*2);d+=(i?"L":"M")+(cx+Math.cos(t)*rr).toFixed(1)+" "+(cy+Math.sin(t)*rr).toFixed(1)}return d+"Z"}
var VKYN=[[300,222],[336,224],[330,256],[302,254],[438,236],[452,318],[428,388],[200,150]];
var VCD8=[[528,176],[552,300],[522,424]];
var VTREG=[[612,236],[610,372]];
var VDRUG=[[602,58],[548,36],[624,124],[492,72]];
var VDRUGT=[[318,236],[286,206],[352,270],[284,262]];
function scene(){
  var mob=MOBILE(),fs=mob?20:11.5,cs=mob?22:12.5;
  var caps=["IDO → KYNURENINE → AhR","PD-L1 · T-CELL EXHAUSTION · TREGS","VN-1032 · SELECTIVE AhR MODULATOR","CYTOTOXIC T CELLS · PD-1 COMBINATIONS"];
  var s='<svg viewBox="40 20 600 530" role="img" aria-label="Engraved diagram of a cancer cell with the aryl hydrocarbon receptor, CD8 T cells and Tregs, and VN-1032 modulating the receptor">';
  var g='';for(var gx=60;gx<=620;gx+=40)g+='<path class="vg" d="M'+gx+' 30V500"/>';for(var gy=30;gy<=500;gy+=40)g+='<path class="vg" d="M50 '+gy+'H630"/>';
  s+='<g>'+g+'</g>';
  /* the cancer cell: bumpy membrane, two engraved offsets, nucleus with stippled chromatin */
  s+='<path class="vh" d="'+vBump(VC[0],VC[1],VR-14,3,140,1.3)+'"/><path class="vh" d="'+vBump(VC[0],VC[1],VR-28,2.5,130,2.1)+'"/>';
  s+='<path id="vsMem" class="vm" d="'+vBump(VC[0],VC[1],VR,5,180,.4)+'"/>';
  var st='';for(var i=0;i<70;i++){var a=i*2.39996,rr=Math.sqrt((i+.5)/70)*46;st+='<circle class="vst" cx="'+(222+Math.cos(a)*rr).toFixed(1)+'" cy="'+(318+Math.sin(a)*rr).toFixed(1)+'" r="1.3"/>'}
  s+='<circle class="vn" cx="222" cy="318" r="56"/><g>'+st+'</g>';
  s+='<text x="90" y="112" style="font-size:'+fs+'px">CANCER CELL</text><text x="222" y="392" text-anchor="middle" style="font-size:'+fs+'px">NUCLEUS</text>';
  /* IDO */
  s+='<g id="vsIdo"><rect class="vido" x="164" y="202" width="22" height="22"/><text x="150" y="196" text-anchor="middle" style="font-size:'+fs+'px">IDO</text></g>';
  /* PD-L1 stalks on the membrane, facing the T cells */
  var pd='';[-52,-26,0,26,52].forEach(function(dg){var t=dg*Math.PI/180,x1=VC[0]+Math.cos(t)*(VR+3),y1=VC[1]+Math.sin(t)*(VR+3),x2=VC[0]+Math.cos(t)*(VR+18),y2=VC[1]+Math.sin(t)*(VR+18);
    pd+='<path class="vpd" d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'"/><circle class="vpdk" cx="'+x2.toFixed(1)+'" cy="'+y2.toFixed(1)+'" r="4"/>'});
  s+='<g id="vsPd">'+pd+'<text class="xa" x="372" y="140" style="font-size:'+fs+'px">PD-L1</text></g>';
  /* the receptor */
  s+='<g id="vsAhr" transform="translate('+VAHR[0]+' '+VAHR[1]+')"><path class="vahr" d="M-14 -6A14 14 0 1 0 14 -6L6 -6L6 2L-6 2L-6 -6Z"/><text x="0" y="34" text-anchor="middle" style="font-size:'+fs+'px">AhR</text></g>';
  /* kynurenine */
  s+='<g id="vsKyn">'+VKYN.map(function(k,i){return '<path class="vky" data-i="'+i+'" d="M0 -5L5 0L0 5L-5 0Z"/>'}).join("")+'<text id="vsKynT" class="xa" x="96" y="486" style="font-size:'+fs+'px">KYNURENINE</text></g>';
  /* T cells and Tregs */
  s+='<g id="vsT">'+VCD8.map(function(p,i){return '<g class="vcd" transform="translate('+p[0]+' '+p[1]+')"><path class="vcdf" d="'+vBump(0,0,24,2.4,60,i)+'"/><circle class="vcdn" cx="-3" cy="2" r="12"/></g>'}).join("")+
    '<text x="532" y="132" text-anchor="middle" style="font-size:'+fs+'px">CD8⁺ T CELLS</text><text id="vsEx" class="vex" x="532" y="470" text-anchor="middle" style="font-size:'+fs+'px">EXHAUSTED</text><text id="vsEn" class="xa" x="440" y="486" text-anchor="middle" style="font-size:'+fs+'px">ENGAGED</text></g>';
  s+='<g id="vsTreg">'+VTREG.map(function(p){return '<g transform="translate('+p[0]+' '+p[1]+')"><circle class="vtr" r="20"/><circle class="vtr2" r="14"/></g>'}).join("")+'<text class="vb" x="611" y="310" text-anchor="middle" style="font-size:'+fs+'px">TREGS</text></g>';
  /* VN-1032 */
  var hx='M0 -8L7 -4L7 4L0 8L-7 4L-7 -4Z';
  s+='<g id="vsDrug">'+VDRUG.map(function(){return '<path class="vdr" d="'+hx+'"/>'}).join("")+'<text class="vb" x="470" y="44" text-anchor="end" style="font-size:'+fs+'px">VN-1032</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="vsC'+i+'" x="340" y="536" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+'</svg>';
}
function storyDraw(svg){
  var E={mem:$("#vsMem",svg),ido:$("#vsIdo",svg),pd:$("#vsPd",svg),ahr:$("#vsAhr",svg),kyn:[].slice.call(svg.querySelectorAll(".vky")),kynT:$("#vsKynT",svg),
    cd:[].slice.call(svg.querySelectorAll(".vcd")),ex:$("#vsEx",svg),en:$("#vsEn",svg),treg:$("#vsTreg",svg),drug:[].slice.call(svg.querySelectorAll(".vdr")),drugG:$("#vsDrug",svg),
    cap:[0,1,2,3].map(function(i){return $("#vsC"+i,svg)})};
  var ML=E.mem.getTotalLength();
  var CDT=VCD8.map(function(p){var a=Math.atan2(p[1]-VC[1],p[0]-VC[0]),d=VR+28;return [VC[0]+Math.cos(a)*d,VC[1]+Math.sin(a)*d]});
  return function(p,b){
    if(!E.mem.isConnected)return;
    var s1=seg(p,.02,.17),s2=seg(p,.27,.45),s3=seg(p,.53,.7),s4=seg(p,.78,.94);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    E.mem.style.opacity=(.45+.55*Math.min(1,s1*1.6)).toFixed(3);
    /* kynurenine travels from IDO to the receptor and out into the microenvironment; dims as VN-1032 takes the receptor */
    E.kyn.forEach(function(el,i){var q=seg(p,.03+i*.012,.15+i*.012),T=VKYN[i],x=175+(T[0]-175)*q,y=213+(T[1]-213)*q-Math.sin(q*Math.PI)*30;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");el.style.opacity=(Math.min(1,q*3)*(1-.75*s3)).toFixed(3)});
    E.kynT.style.opacity=(s1*(1-s2)).toFixed(3);
    E.ahr.classList.toggle("on",s1>.6&&s3<.6);E.ahr.classList.toggle("mod",s3>=.6);
    /* PD-L1 rises with AhR signalling, falls back once modulated */
    E.pd.style.opacity=(s2*(1-.7*s3)).toFixed(3);
    /* T cells: exhausted (dashed, dim) in step 2, re-armed and in contact in step 4 */
    E.cd.forEach(function(el,i){var P=VCD8[i],T=CDT[i],x=P[0]+(T[0]-P[0])*s4,y=P[1]+(T[1]-P[1])*s4;el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
      el.classList.toggle("ex",s2>.5&&s4<.5);el.classList.toggle("go",s4>=.5);el.style.opacity=(.35+.65*Math.min(1,s1*2+s4)-.25*s2*(1-s4)).toFixed(3)});
    E.ex.style.opacity=(s2*(1-s3)).toFixed(3);E.en.style.opacity=s4.toFixed(3);
    E.treg.style.opacity=(s2*(1-.8*s4)).toFixed(3);
    /* VN-1032 arrives at the receptor */
    E.drug.forEach(function(el,i){var q=seg(p,.53+i*.025,.66+i*.025),S=VDRUG[i],T=VDRUGT[i],x=S[0]+(T[0]-S[0])*q,y=S[1]+(T[1]-S[1])*q;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");el.style.opacity=(Math.min(1,seg(p,.5,.56)*1)*(i===0?1:1-.5*s4)).toFixed(3)});
    E.drugG.querySelector("text").style.opacity=(seg(p,.5,.56)*(1-.6*s4)).toFixed(3);
    var W=[[0,0,.23,.25],[.25,.28,.48,.5],[.5,.53,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a2=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);el.style.opacity=(b*a2*(1-o)).toFixed(3)});
  };
}

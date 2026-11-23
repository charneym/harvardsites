/* The story scene (BL/BY/DB/DR): how NeuroEvidence works (walnot.health; NIH STTR R41MH139347 abstract; npj Digital
   Medicine 8:271, 2025), as ONE continuous fine-line cross-section of the forehead: scalp, skull, CSF and the folded
   prefrontal cortex, with the headband's sensor housing above.
   Step 1 (set up): the band comes down onto the skin while AR corner brackets close around it and the signal check ticks.
   Step 2 (record): near-infrared light leaves the source, arcs through the cortex to the detector (banana paths, drawn to
   their real end points), and an oxy-haemoglobin trace draws at top right.
   Step 3 (repeat): the trace gives way to the reliability of ten home sessions, climbing to 0.92 (npj Digital Medicine).
   Schematic. Labels live in their own clear zones (>=8px from any stroke); on phones the layer labels except CORTEX drop. */
var SCW=600,SCH=520;
function skinY(x,b){var u=(x-300)/300;return b+18*u*u}
function arc(b,x0,x1){x0=x0||0;x1=x1||600;var d='',n=30;for(var i=0;i<=n;i++){var x=x0+(x1-x0)*i/n;d+=(i?'L':'M')+x.toFixed(1)+' '+skinY(x,b).toFixed(1)}return d}
function gyri(b,a){a=a||10;var d='',n=120;for(var i=0;i<=n;i++){var x=600*i/n;var y=skinY(x,b)+a*Math.sin(x/600*Math.PI*9.5+(a<10?.6:0))+a*.3*Math.sin(x/600*Math.PI*23);d+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}return d}
var ARC=[[124,246,1,1],[476,246,-1,1],[124,314,1,-1],[476,314,-1,-1]];
var REL=[.55,.66,.73,.78,.82,.85,.87,.89,.905,.92];
var SRC=210,DET=390,BAND0=290,PH=[440,478,505];
function bandPath(){/* the sensor housing, following the skin curve between x 150 and 450, 22 tall, rounded ends */
  var d='',n=24,i,x,T=function(x){return skinY(x,BAND0)-24},Bt=function(x){return skinY(x,BAND0)-2};
  for(i=0;i<=n;i++){x=158+284*i/n;d+=(i?'L':'M')+x.toFixed(1)+' '+T(x).toFixed(1)}
  d+='C450 '+T(442).toFixed(1)+' 450 '+Bt(442).toFixed(1)+' 442 '+Bt(442).toFixed(1);
  for(i=n;i>=0;i--){x=158+284*i/n;d+='L'+x.toFixed(1)+' '+Bt(x).toFixed(1)}
  return d+'C150 '+Bt(158).toFixed(1)+' 150 '+T(158).toFixed(1)+' 158 '+T(158).toFixed(1)+'Z'}
function walnotScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="'+arc(290)+'"/>';
  g+='<path class="bn sD" d="'+arc(322)+'"/><path class="bn sD" d="'+arc(372)+'"/>';
  for(i=0;i<8;i++){var hx=110+i*60;g+='<path class="hz sD" d="M'+hx+' '+(skinY(hx,334)).toFixed(1)+'l14 26"/>'}
  g+='<path class="cs sD" d="'+arc(386)+'"/>';
  g+='<path class="cx sD" d="'+gyri(414)+'"/><path class="gw sD" d="'+gyri(470,9)+'"/>';
  if(!mob)g+='<text class="t" x="6" y="326">SCALP</text><text class="t" x="6" y="368">SKULL</text><text class="t" x="6" y="466">CORTEX</text>';
  g+='</g>';
  /* photon paths (drawn under the band) */
  g+='<g id="scPh">';PH.forEach(function(c,k){var y0=skinY(SRC,BAND0).toFixed(1);g+='<path class="ph" data-k="'+k+'" d="M'+SRC+' '+y0+'C'+(SRC+34)+' '+c+' '+(DET-34)+' '+c+' '+DET+' '+y0+'"/>'});
  for(i=0;i<3;i++)g+='<circle class="pd" r="3.2" cx="0" cy="0"/>';g+='</g>';
  /* the band: housing, source and detector */
  g+='<g id="scBand"><path class="hb" d="'+bandPath()+'"/>';
  g+='<circle class="src" cx="'+SRC+'" cy="'+(skinY(SRC,BAND0)-4).toFixed(1)+'" r="5"/>';
  g+='<rect class="det" x="'+(DET-5)+'" y="'+(skinY(DET,BAND0)-9).toFixed(1)+'" width="10" height="10"/>';
  g+='<g id="scSD"><text class="t" x="'+SRC+'" y="'+(skinY(SRC,BAND0)-36).toFixed(1)+'" text-anchor="middle">'+(mob?'LIGHT':'NIR SOURCE')+'</text><text class="t" x="'+DET+'" y="'+(skinY(DET,BAND0)-36).toFixed(1)+'" text-anchor="middle">DETECTOR</text></g>';
  g+='</g>';
  /* AR guide: four corner brackets that close in around the band, and the signal check */
  /* the tablet: the participant's own camera view, a head with the band across the forehead, framed by the guide */
  g+='<g id="scTab"><rect class="tb" x="20" y="64" width="130" height="152"/><path class="tb" d="M20 196h130"/>'+
    '<path class="hd2" d="M58 182c-4-26 2-62 27-64s33 36 28 64"/><path class="bd2" d="M60 142q25-12 50 0"/>'+
    '<path class="ar2" d="M52 128v-8h8M118 128v-8h-8M52 156v8h8M118 156v8h-8"/></g>';
  g+='<g id="scAR">';ARC.forEach(function(c,k){g+='<path class="ar" data-k="'+k+'" d="M'+c[0]+' '+(c[1]+c[3]*22)+'V'+c[1]+'H'+(c[0]+c[2]*22)+'"/>'});
  g+='<path class="ck" d="M'+(mob?250:262)+' 206l8 8 16-16"/><text class="a" id="scCkT" x="'+(mob?290:300)+'" y="'+(mob?216:212)+'">'+(mob?'SIGNAL OK':'SIGNAL CHECKED')+'</text>';
  g+='</g>';
  /* oxy-haemoglobin trace (top right) */
  var tr='',n=90;for(i=0;i<=n;i++){var x=330+260*i/n,u=i/n;var blk=(u>.2&&u<.45)||(u>.65&&u<.9)?1:0;
    var y=150-24*Math.sin(Math.min(1,Math.max(0,((u>.65?u-.65:u-.2)/.25)))*Math.PI)*blk-3*Math.sin(u*40)-2*Math.sin(u*97);tr+=(i?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}
  g+='<g id="scTr"><path class="ax" d="M330 170H590"/><rect class="blk" x="382" y="96" width="65" height="74"/><rect class="blk" x="499" y="96" width="65" height="74"/><path class="tr" d="'+tr+'"/><text class="t" x="330" y="'+(mob?70:78)+'">'+(mob?'OXY-HB':'OXY-HB · TASK BLOCKS')+'</text></g>';
  /* reliability over ten sessions (top right, step 3) */
  var rl='',dots='';REL.forEach(function(r,k){var x=336+k*27.5,y=190-r*140;rl+=(k?'L':'M')+x.toFixed(1)+' '+y.toFixed(1);dots+='<circle class="rd" data-k="'+k+'" cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="4"/>'});
  g+='<g id="scRel"><path class="ax" d="M330 190H596"/><path class="rl" d="'+rl+'"/>'+dots+'<text class="a" x="596" y="44" text-anchor="end">0.92</text><text class="t" x="330" y="'+(mob?222:214)+'">'+(mob?'10 SESSIONS':'RELIABILITY · 10 SESSIONS')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="6" y="30">'+(mob?'SET UP':'SET UP · AR-GUIDED')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="6" y="30">'+(mob?'RECORD':'RECORD · LIGHT IN, LIGHT OUT')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="6" y="30">'+(mob?'REPEAT':'REPEAT · RELIABILITY BUILDS')+'</text></g>';
  return g+'</svg>';
}
function scene(){return walnotScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+(L+2);return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),band:$("#scBand",svg),sd:$("#scSD",svg),
    ph:dl("#scPh .ph"),pd:$$("#scPh .pd",svg),ar:$$("#scAR .ar",svg),ckt:$("#scCkT",svg),tab:$("#scTab",svg),arg:$("#scAR",svg),ck:dl("#scAR .ck"),
    tr:$("#scTr",svg),trl:dl("#scTr .tr"),rel:$("#scRel",svg),rl:dl("#scRel .rl"),rd:$$("#scRel .rd",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var phP=$$("#scPh .ph",svg),lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(v>=.999?0:a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: band down, brackets close, check */
    var down=seg(p,.02,.2),close=seg(p,.04,.22),chk=seg(p,.2,.28),arOut=seg(p,.34,.42);
    E.band.setAttribute("transform","translate(0 "+(-110*(1-down)).toFixed(1)+")");op(E.band,b*Math.min(1,down*3));
    E.ar.forEach(function(el,k){var c=ARC[k],s=1+.2*(1-close);var cx=300,cy=280;
      el.setAttribute("transform","translate("+(cx+(c[0]-cx)*s-c[0]).toFixed(1)+" "+(cy+(c[1]-cy)*s-c[1]).toFixed(1)+")")});
    op(E.arg,b*Math.min(1,close*2.5)*(1-arOut));draw(E.ck,chk);op(E.ckt,sm(chk*1.4));op(E.tab,b*seg(p,0,.06)*(1-seg(p,.34,.42)));
    /* step 2: light paths and trace */
    var ph=seg(p,.38,.56),trv=seg(p,.42,.62),sd=seg(p,.36,.44)*(1-seg(p,.66,.72)),trOut=seg(p,.66,.72);
    draw(E.ph,ph);op(E.sd,b*sd);
    E.pd.forEach(function(el,k){var on=ph>=.999&&p<.7;var L=E.ph[k][1];var t=((p-.56)*6+k*.33)%1;if(t<0)t+=1;
      if(on){var pt=phP[k].getPointAtLength(t*L);el.setAttribute("cx",pt.x.toFixed(1));el.setAttribute("cy",pt.y.toFixed(1))}op(el,on?b*sm(seg(p,.56,.6))*(1-seg(p,.66,.7)):0)});
    $$("#scPh .ph",svg).forEach(function(el){el.style.opacity=(b*(1-.6*seg(p,.7,.8))).toFixed(3)});
    op(E.tr,b*seg(p,.4,.46)*(1-trOut));draw(E.trl,trv);
    /* step 3: reliability builds */
    var rv=seg(p,.74,.92);op(E.rel,b*seg(p,.72,.76));draw(E.rl,rv);
    E.rd.forEach(function(el,k){op(el,b*sm((rv*10-k)*1.2))});
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.72,.8));
  };
}

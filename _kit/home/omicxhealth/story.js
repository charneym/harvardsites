/* the story scene (BL/BY/DB): ONE engraved cell-free DNA fragment (a double helix with its fragment ends), kept on screen for all
   three steps, with the read of its sequence beneath it. Step 1: the fragment, as collected from one blood draw (fragment ends
   marked). Step 2: whole-genome bisulfite sequencing: methyl marks light at the CpG sites (filled = methylated, open = not), and
   in the read every unmethylated C turns into T while methylated CpG cytosines stay C. Step 3: the same read feeds three signals
   (methylation, fragment length, copy number) and per-cancer models. Sources: omicxhealth.com (how it works; epigenetics), the
   company one-pager (multiple orthogonal signals from a single WGBS run) and the NIH RePORTER abstract of 1R43CA310377-01A1.
   Schematic; the sequence and methylation pattern are illustrative. Driven by the scrubbed story progress. */
var SEQ="ACGTTCGGACGATCCGTACGGTCA";
var SEQM="TCGACGTACGGATCCG";
function seqModel(){
  var mob=MOBILE(),s=mob?SEQM:SEQ,n=s.length,sp=mob?44:27,x0=400-(n-1)*sp/2,out=[],k=0,pat=[1,0,1,1,0,1];
  for(var i=0;i<n;i++){var cpg=s[i]==="C"&&s[i+1]==="G",m=cpg?pat[(k++)%pat.length]:0;
    out.push({ch:s[i],x:x0+i*sp,cpg:cpg,m:m,to:(s[i]==="C"&&!m)?"T":s[i]})}
  return {L:out,sp:sp,x0:x0,x1:x0+(n-1)*sp};
}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,S=seqModel(),HY=mob?196:206,A=mob?48:50,lam=mob?170:170,
      X0=S.x0-22,X1=S.x1+22,ph=2.35;
  function sy(x,o){return HY+A*Math.sin((x-X0)/lam*Math.PI*2+o)}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="mg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#6aa6f5" stop-opacity=".6"/><stop offset="1" stop-color="#6aa6f5" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the double helix: two antiparallel strands, offset so the major and minor grooves alternate; base-pair rungs between them */
  var p1='',p2='',x;for(x=X0;x<=X1+.01;x+=4){p1+=(x===X0?'M':'L')+f(x)+' '+f(sy(x,0));p2+=(x===X0?'M':'L')+f(x)+' '+f(sy(x,ph))}
  var rg='';for(x=X0+6;x<X1-3;x+=(mob?13:11)){var a=sy(x,0),b=sy(x,ph);if(Math.abs(a-b)>8)rg+='M'+f(x)+' '+f(a+(b>a?3:-3))+'L'+f(x)+' '+f(b+(b>a?-3:3))}
  g+='<path class="bp sD" d="'+rg+'"/>';
  g+='<path class="bb sD" d="'+p1+'"/><path class="bb b2 sD" d="'+p2+'"/>';
  /* fragment ends */
  g+='<path class="fe sD" d="M'+f(X0-10)+' '+f(HY-A-12)+'V'+f(HY+A+12)+'M'+f(X1+10)+' '+f(HY-A-12)+'V'+f(HY+A+12)+'"/>';
  /* the read: one letter per base, at the CpG columns the methyl marks stand over */
  var RY=mob?356:360;
  g+='<path class="rdl sD" d="M'+f(S.x0-20)+' '+f(RY+16)+'H'+f(S.x1+20)+'"/>';
  S.L.forEach(function(o,j){g+='<text class="sq'+(o.cpg?' cg':'')+(o.m?' me':'')+'" x="'+f(o.x)+'" y="'+RY+'" text-anchor="middle"><tspan class="q0">'+o.ch+'</tspan></text>'});
  g+='<text class="t" x="'+f(S.x0-20)+'" y="'+(RY-34)+'">'+(mob?'THE READ':'THE READ · 5′ TO 3′')+'</text>';
  if(!mob)g+='<text class="t" x="784" y="556" text-anchor="end">cfDNA FRAGMENT · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* bisulfite read: converted letters (unmethylated C reads as T), drawn over the originals */
  S.L.forEach(function(o){if(o.to!==o.ch)g+='<text class="sq cv" x="'+f(o.x)+'" y="'+RY+'" text-anchor="middle">'+o.to+'</text>'});
  /* methyl marks over the CpG sites: stems up from the helix, filled head = methylated, open = unmethylated */
  S.L.forEach(function(o){if(!o.cpg)return;var top=HY-A-14,hy=top-(mob?42:38);
    g+='<g class="mtk'+(o.m?' on':'')+'"><path class="ms" d="M'+f(o.x)+' '+f(top)+'V'+f(hy+7)+'"/>'+(o.m?'<circle cx="'+f(o.x)+'" cy="'+f(hy)+'" r="16" fill="url(#mg)"/>':'')+'<circle class="mhd" cx="'+f(o.x)+'" cy="'+f(hy)+'" r="'+(mob?8:7)+'"/></g>'});
  /* step 3: three signals from the same read, then the per-cancer models */
  var SY=mob?456:462,cx=[mob?140:190,400,mob?660:610],lab=mob?['METHYL','LENGTH','COPY NO.']:['METHYLATION','FRAGMENT LENGTH','COPY NUMBER'];
  g+='<g id="sig">';
  cx.forEach(function(c,j){g+='<path class="sl" d="M400 '+(RY+22)+'C400 '+(RY+60)+' '+c+' '+(SY-62)+' '+c+' '+(SY-14)+'"/><circle class="sn" cx="'+c+'" cy="'+SY+'" r="'+(mob?9:7)+'"/>'+
    '<text class="a" x="'+c+'" y="'+(SY+(mob?44:32))+'" text-anchor="middle">'+lab[j]+'</text>'});
  g+='<text class="t" x="400" y="'+(SY+(mob?82:64))+'" text-anchor="middle">'+(mob?'MODELS: LIVER · LUNG · MORE':'MODELS: LIVER · LUNG · ESOPHAGUS · MORE AS UPDATES')+'</text>';
  g+='</g>';
  g+='</g>';
  /* labels, one per step (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="'+f(X0-10)+'" y="'+f(HY-A-(mob?70:62))+'">'+(mob?'cfDNA FROM ONE DRAW':'CELL-FREE DNA, FROM ONE BLOOD DRAW')+'</text>'+
     '<path class="ldr" d="M'+f(X0-10)+' '+f(HY-A-(mob?56:52))+'V'+f(HY-A-16)+'"/>'+(mob?'':'<text class="t" x="'+f(X0+4)+'" y="'+f(HY-A-34)+'">FRAGMENT END</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?400:400)+'" y="'+(mob?412:416)+'" text-anchor="middle">'+(mob?'METHYLATED C STAYS C':'BISULFITE: METHYLATED C STAYS C · UNMETHYLATED C READS AS T')+'</text>'+
     '<g class="lg"><circle class="mhd on" cx="'+(mob?250:262)+'" cy="'+(mob?20:40)+'" r="6"/><text class="t" x="'+(mob?264:276)+'" y="'+(mob?27:45)+'">METHYLATED</text><circle class="mhd" cx="'+(mob?470:430)+'" cy="'+(mob?20:40)+'" r="6"/><text class="t" x="'+(mob?484:444)+'" y="'+(mob?27:45)+'">UNMETHYLATED</text></g></g>';
  g+='<g id="lb3"></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),q0:$$(".q0",svg),cv:$$(".cv",svg),mk:$$(".mtk",svg),
    sig:$("#sig",svg),sl:dl("#sig .sl"),fe:$$(".fe",svg),cg:$$(".sq.me",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,S=seqModel();
  var conv=S.L.map(function(o){return o.to!==o.ch});
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.36,.52),s3=seg(p,.68,.86);
    /* step 1: fragment ends bright; step 2: methyl marks rise, letters convert left to right; step 3: signals draw */
    E.fe.forEach(function(el){el.style.opacity=(b*(.45+.55*s1*(1-s2*.6))).toFixed(3)});
    E.mk.forEach(function(el,i){var t=seg(s2,i*.08,i*.08+.4);op(el,b*t);el.style.transform="translateY("+((1-t)*10).toFixed(1)+"px)"});
    var ci=0;S.L.forEach(function(o,i){if(!conv[i])return;var t=seg(s2,(i/S.L.length)*.6,(i/S.L.length)*.6+.3);op(E.q0[i],b*(1-t));op(E.cv[ci],b*t);ci++});
    E.cg.forEach(function(el){el.classList.toggle("hl",s2>.6)});
    op(E.sig,b*s3);draw(E.sl,s3);
    op(E.l1,b*s1*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,0);
  };
}

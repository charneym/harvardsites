/* The story scene (BL/BY/DB): D4Z4 Medicine's long-read assay, as ONE continuous scene (NIH RePORTER 1R41TR005388-01:
   "long-read sequencing-based assays that can be used to determine structural variations and DNA methylation in one assay",
   and "a bioinformatics pipeline for analyzing long-read sequencing data containing D4Z4 repeat sequences").
   Top: an engraved double helix with the tandem D4Z4 repeat units bracketed above it (chromosome 4q35), kept for all steps.
   Step 1: one long read is drawn beneath, end to end across the whole array (structure). Step 2: on that same read the CpG
   sites appear as lollipops, filled where methylated (methylation). Step 3: the units are counted and the methylation of each
   unit rises as a bar profile (the report). Illustrative, not patient data. Every element follows the scrubbed progress. */
var SCW=760,SCH=520,NU=8,UX0=72,UX1=688;
var CPG=(function(){var s=4335,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],uw=(UX1-UX0)/NU;
  for(var u=0;u<NU;u++)for(var j=0;j<3;j++)a.push({x:UX0+uw*u+uw*(.22+.28*j)+(R()-.5)*6,u:u,m:R()<.62});return a})();
function dnaScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,uw=(UX1-UX0)/NU;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* ---- base: the helix, the repeat-unit brackets and captions ---- */
  g+='<g id="scBase">';
  var s1='',s2='',rg='',cy=150,A=24,P=64;
  for(i=0;i<=712;i+=4){var x=24+i,y1=cy+A*Math.sin(i/P*2*Math.PI),y2=cy+A*Math.sin(i/P*2*Math.PI+2.3);s1+=(i?'L':'M')+f(x)+' '+f(y1);s2+=(i?'L':'M')+f(x)+' '+f(y2)}
  for(i=4;i<712;i+=8){var xr=24+i,a1=cy+A*Math.sin(i/P*2*Math.PI),a2=cy+A*Math.sin(i/P*2*Math.PI+2.3);rg+='M'+f(xr)+' '+f(a1)+'V'+f(a2)}
  g+='<path class="rung sD" d="'+rg+'"/><path class="hx sD" d="'+s1+'"/><path class="hx h2 sD" d="'+s2+'"/>';
  var br='';for(i=0;i<NU;i++){var x0=UX0+uw*i+3,x1=UX0+uw*(i+1)-3,xm=(x0+x1)/2;br+='M'+f(x0)+' 106V98H'+f(x1)+'V106M'+f(xm-4)+' 88l6 4-6 4'}
  g+='<path class="unit sD" d="'+br+'"/>';
  g+='<path class="bl sD" d="M24 490H736"/>';
  g+='<text class="t" x="24" y="12">CHROMOSOME 4q35 · D4Z4 REPEAT ARRAY</text>';
  g+='<text class="t" x="24" y="'+(SCH-6)+'">METHYLATION BY REPEAT UNIT</text>';
  g+='</g>';
  /* ---- step 1: the long read ---- */
  g+='<path id="scRead" class="rd" d="M24 262H736"/><circle id="scHead" class="hd" cx="24" cy="262" r="5"/>';
  /* ---- step 2: CpG lollipops on the same read ---- */
  g+='<g id="scLp">';
  CPG.forEach(function(c){g+='<g class="lp'+(c.m?' m':'')+'"><path d="M'+f(c.x)+' 262V282"/><circle cx="'+f(c.x)+'" cy="289" r="'+(o.mob?7:5.5)+'"/></g>'});
  g+='</g>';
  /* ---- step 3: unit numbers and the per-unit methylation profile ---- */
  g+='<g id="scNum">';for(i=0;i<NU;i++)g+='<text class="n" x="'+f(UX0+uw*(i+.5))+'" y="222" text-anchor="middle">'+(i+1)+'</text>';g+='</g>';
  g+='<g id="scBars">';for(i=0;i<NU;i++){var m=CPG.filter(function(c){return c.u===i&&c.m}).length/3;g+='<rect class="br" data-v="'+m.toFixed(3)+'" x="'+f(UX0+uw*i+uw*.2)+'" y="490" width="'+f(uw*.6)+'" height="0"/>'}g+='</g>';
  g+='<g id="lb1"><text class="a" x="24" y="344">ONE LONG READ · THE WHOLE ARRAY</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="344">CpG METHYLATION · SAME READ</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="344">STRUCTURE + METHYLATION · ONE REPORT</text></g>';
  return g+'</svg>';
}
function scene(){return dnaScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var rd=$("#scRead",svg),RL=712;rd.style.strokeDasharray=RL+" "+RL;
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),hd:$("#scHead",svg),
    lp:$$("#scLp .lp",svg),num:$$("#scNum text",svg),br:$$("#scBars rect",svg).map(function(r){return {el:r,v:+r.getAttribute("data-v")}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: the read runs end to end across the array */
    var r=seg(p,.06,.3);rd.style.strokeDashoffset=(RL*(1-r)).toFixed(1);op(rd,b*(r>0?1:0));
    E.hd.setAttribute("cx",(24+712*r).toFixed(1));op(E.hd,b*(r>0&&r<1?1:0)*(1-seg(p,.3,.34)));
    /* step 2: CpG sites appear on the same read, left to right */
    var m=seg(p,.38,.6);
    E.lp.forEach(function(el,i){var gi=Math.min(1,Math.max(0,m*1.6-i*.025));op(el,b*gi)});
    /* step 3: units counted, methylation per unit rises */
    var n=seg(p,.68,.8),h=seg(p,.74,.92);
    E.num.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,n*1.8-i*.1)))});
    E.br.forEach(function(rr,i){var gi=Math.min(1,Math.max(0,h*1.6-i*.075)),H=110*Math.max(.12,rr.v)*gi;rr.el.setAttribute("y",(490-H).toFixed(1));rr.el.setAttribute("height",H.toFixed(1));op(rr.el,b)});
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

/* the story scene (BL/BY/DB): ONE engraved colorectal cancer cell (membrane, nucleus with its DNA, two thymidylate synthase
   enzymes), kept on screen for all three steps. Step 1: free 5-FU molecules arrive; most are broken down outside the cell and
   only a few reach it (company technology page: ~80-85% catabolized, ~1-3% anabolic). Step 2: CF10 arrives as one strand of
   linked FdUMP nucleotides (NIH RePORTER R41CA254834 abstract: ssDNA polymer of FdUMP, chemically modified for stability).
   Step 3: inside, the nucleotides are released: thymidylate synthase is inhibited and topoisomerase 1 is trapped on the DNA
   (Cancers 2025 17:2739; Cancers 2024 16:1360). Schematic; counts and positions are illustrative. */
var CELL={c:[520,286],rx:248,ry:214},NUC={c:[580,300],rx:104,ry:84};
var TSE=[{c:[420,178],r:34,s:1},{c:[432,404],r:30,s:2}];
var FU=(function(){var a=[],i,r=function(k){var x=Math.sin(k*91.7+3.1)*43758.5453;return x-Math.floor(x)};
  for(i=0;i<20;i++)a.push({x:40+r(i)*190,y:70+r(i+40)*420,ok:(i===6||i===13),k:i});return a})();
var STR=(function(){var a=[],i;for(i=0;i<10;i++)a.push([i*20,Math.sin(i*.9)*9]);return a})();
function eblob(r,s,k){var d='',i,n=60;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,rr=r*k*(1+.09*Math.sin(3*t+s)+.06*Math.sin(5*t+s*2)+.04*Math.cos(7*t+s));
  d+=(i?'L':'M')+(rr*Math.cos(t)).toFixed(1)+' '+(rr*Math.sin(t)).toFixed(1)}return d+'Z'}
function hexp(r){var d='',i;for(i=0;i<6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}return d+'Z'}
function ell(c,rx,ry,k){return 'M'+(c[0]-rx*k)+' '+c[1]+'a'+(rx*k)+' '+(ry*k)+' 0 1 0 '+(2*rx*k)+' 0a'+(rx*k)+' '+(ry*k)+' 0 1 0 '+(-2*rx*k)+' 0Z'}
function scene(){
  var mob=MOBILE(),g='',i,f=function(n){return (+n).toFixed(1)};
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="dcg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#3d95ec" stop-opacity=".7"/><stop offset="1" stop-color="#3d95ec" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="mb sD" d="'+ell(CELL.c,CELL.rx,CELL.ry,1)+'"/><path class="mb2 sD" d="'+ell(CELL.c,CELL.rx,CELL.ry,.965)+'"/>';
  g+='<path class="nu sD" d="'+ell(NUC.c,NUC.rx,NUC.ry,1)+'"/><path class="nu2 sD" d="'+ell(NUC.c,NUC.rx,NUC.ry,.94)+'"/>';
  /* DNA in the nucleus: a short double helix with rungs */
  var s1='',s2='',rg='';for(i=0;i<=40;i++){var x=510+i*3.5,y=300,a=i*.42;s1+=(i?'L':'M')+f(x)+' '+f(y+14*Math.sin(a));s2+=(i?'L':'M')+f(x)+' '+f(y-14*Math.sin(a));
    if(i%3===1)rg+='M'+f(x)+' '+f(y+14*Math.sin(a)*.82)+'L'+f(x)+' '+f(y-14*Math.sin(a)*.82)}
  g+='<path class="dna sD" d="'+s1+'"/><path class="dna sD" d="'+s2+'"/><path class="rung sD" d="'+rg+'"/>';
  TSE.forEach(function(e,j){g+='<g class="ts" id="ts'+j+'" transform="translate('+e.c[0]+' '+e.c[1]+')"><path class="eo sD" d="'+eblob(e.r,e.s,1)+'"/><path class="ei sD" d="'+eblob(e.r,e.s,.66)+'"/><path class="ei2 sD" d="'+eblob(e.r,e.s,.34)+'"/></g>'});
  g+='<text class="t" x="784" y="546" text-anchor="end">COLORECTAL CANCER CELL · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* top1 on the DNA (lights in step 3) */
  g+='<g id="top1" transform="translate(580 300)"><circle r="26" fill="url(#dcg)"/><path class="t1" d="'+eblob(17,4,1)+'"/></g>';
  /* free 5-FU molecules */
  FU.forEach(function(m,j){g+='<g class="fu" id="fu'+j+'" transform="translate('+f(m.x)+' '+f(m.y)+')"><path d="'+hexp(9)+'"/><path class="fl" d="M0 -9V-16"/></g>'});
  /* the CF10 strand: linked nucleotides */
  var bb='';STR.forEach(function(q,j){bb+=(j?'L':'M')+f(q[0])+' '+f(q[1])});
  g+='<g id="cf"><path class="cb" d="'+bb+'"/>';
  STR.forEach(function(q,j){g+='<g class="nt" id="nt'+j+'" transform="translate('+f(q[0])+' '+f(q[1])+')"><circle r="6.2"/><path d="M0 6V15"/></g>'});
  g+='</g></g>';
  /* labels, one set per step (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="36" y="40">'+(mob?'~80–85% BROKEN DOWN':'5-FU · ~80–85% BROKEN DOWN')+'</text>'+
     '<text class="a" x="'+(mob?520:470)+'" y="'+(mob?545:56)+'"'+(mob?' text-anchor="middle"':'')+'>~1–3% ACTIVE</text></g>';
  g+='<g id="lb2"><text class="a" x="36" y="40">'+(mob?'CF10 · FdUMP STRAND':'CF10 · ONE STRAND OF FdUMP')+'</text>'+(mob?'':'<text class="t" x="36" y="62">THE ACTIVE METABOLITE, LINKED AND STABILIZED</text>')+'</g>';
  g+='<g id="lb3">'+(mob?'<text class="a" x="36" y="40">TS INHIBITED</text><text class="a" x="764" y="545" text-anchor="end">TOP1 TRAPPED</text>':
     '<text class="a" x="36" y="122">THYMIDYLATE SYNTHASE</text><text class="t" x="36" y="142">INHIBITED BY FdUMP</text><path class="ldr" d="M232 128L384 168"/>'+
     '<text class="a" x="784" y="40" text-anchor="end">TOPOISOMERASE 1</text><text class="t" x="784" y="60" text-anchor="end">TRAPPED ON THE DNA</text><path class="ldr" d="M700 70L596 280"/>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),fu:$$(".fu",svg),cf:$("#cf",svg),nt:$$("#cf .nt",svg),cb:$("#cf .cb",svg),
    ts:$$(".ts",svg),t1:$("#top1",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,x,y,s){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(s?" scale("+s.toFixed(3)+")":""))}
  var TGT=[[TSE[0].c[0]+4,TSE[0].c[1]],[TSE[1].c[0]+4,TSE[1].c[1]],[580,300]];
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.2),s2=seg(p,.34,.56),s3=seg(p,.66,.88),out=seg(p,.3,.4);
    /* step 1: 5-FU drifts toward the cell; most are broken down and sink away, two get in */
    E.fu.forEach(function(el,j){var m=FU[j];
      if(m.ok){var tx=j===6?TGT[0]:TGT[1],x=m.x+(tx[0]-m.x)*s1,y=m.y+(tx[1]-m.y)*s1;tr(el,x,y);el.classList.toggle("in",s1>.9);op(el,b*(1-out))}
      else{var x2=m.x+60*s1,y2=m.y+s1*s1*40;tr(el,x2,y2,1-.35*s1);el.classList.toggle("lost",s1>.35);op(el,b*(1-.75*s1)*(1-out))}});
    /* step 2: the CF10 strand slides in through the membrane; step 3: it comes apart onto its targets */
    var sx=-60+(284-(-60))*s2,sy=296;op(E.cf,b*seg(p,.3,.42));op(E.cb,1-s3);tr(E.cb,sx,sy);
    E.nt.forEach(function(el,j){var q=STR[j],x=sx+q[0],y=sy+q[1]+Math.sin(p*30+j)*2*(1-s3),t=TGT[j%3],k=seg(s3,j*.05,.5+j*.05);
      tr(el,x+(t[0]+((j*7)%13-6)-x)*k,y+(t[1]+((j*11)%15-7)-y)*k);el.classList.toggle("on",s3>.5)});
    E.ts.forEach(function(el){el.classList.toggle("held",s3>.6)});
    op(E.t1,b*s3);
    op(E.l1,b*s1*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.74,.86));
  };
}

/* the story scene (BL/BY/DB): ONE engraved cross-section of the Syracuse Method's first steps, kept on screen for all three
   steps. A suspended sample above a 5 um filter (drawn as a membrane with pores); large human cells (nucleus, irregular outline)
   and small rod-shaped bacteria. Step 1 everything is mixed in suspension. Step 2 the cells settle on the filter, too large to
   pass, while the bacteria drop through the pores into their own fraction below. Step 3 each fraction is lysed with its own
   buffer and its DNA released (engraved strands): host DNA above, microbial DNA below. Sources: US 12,344,834 B2 (5 um
   size-exclusion filtration before lysis; lysozyme / SDS differential lysis) and the NIH RePORTER abstracts of R42GM140530.
   Schematic, not to scale. Driven by the scrubbed story progress. */
var MEM=300,PORES=[];(function(){for(var x=86;x<=714;x+=52)PORES.push(x)})();
var HC=[{x:170,y:120,r:50,s:1,ex:150},{x:395,y:84,r:58,s:2,ex:400},{x:620,y:132,r:52,s:3,ex:640},{x:282,y:196,r:40,s:4,ex:275},{x:520,y:206,r:42,s:5,ex:525}];
var BAC=(function(){var r=[],i,sd=7,guard=0;function rnd(){sd=(sd*9301+49297)%233280;return sd/233280}
  for(i=0;i<34&&guard<2000;guard++){var x=60+rnd()*680,y=36+rnd()*230,ok=true;HC.forEach(function(c){if(Math.hypot(x-c.x,y-c.y)<c.r+12)ok=false});if(!ok)continue;
    var pi=0,bd=1e9;PORES.forEach(function(p,k){var d=Math.abs(p-x);if(d<bd){bd=d;pi=k}});
    r.push({x:x,y:y,a:rnd()*180,p:PORES[pi],ex:60+rnd()*680,ey:350+rnd()*150,ea:rnd()*180,dl:rnd()*.35});i++}return r})();
function cellPath(c,k){var s='',i,n=60;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,r=c.r*k*(1+.09*Math.sin(3*t+c.s)+.05*Math.sin(5*t+c.s*2)+.03*Math.cos(7*t+c.s));
  s+=(i?'L':'M')+(r*Math.cos(t)).toFixed(1)+' '+(r*Math.sin(t)*.86).toFixed(1)}return s+'Z'}
function helix(cx,cy,w,ph){var a='',b='',i,n=40;for(i=0;i<=n;i++){var u=i/n,x=cx-w/2+u*w,y1=cy+7*Math.sin(u*Math.PI*4+ph),y2=cy-7*Math.sin(u*Math.PI*4+ph);
  a+=(i?'L':'M')+x.toFixed(1)+' '+y1.toFixed(1);b+=(i?'L':'M')+x.toFixed(1)+' '+y2.toFixed(1)}
  var r='';for(i=1;i<16;i++){var u2=i/16,x2=cx-w/2+u2*w,yy=7*Math.sin(u2*Math.PI*4+ph);r+='M'+x2.toFixed(1)+' '+(cy+yy).toFixed(1)+'L'+x2.toFixed(1)+' '+(cy-yy).toFixed(1)}
  return [a,b,r]}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="sbg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#c9a24e" stop-opacity=".14"/><stop offset="1" stop-color="#c9a24e" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the filter: two engraved faces of a membrane, broken by its pores, with fine hatching through its thickness */
  var top='',bot='',hat='',x0=40;PORES.forEach(function(p){top+='M'+x0+' '+MEM+'L'+(p-9)+' '+MEM;bot+='M'+x0+' '+(MEM+16)+'L'+(p-9)+' '+(MEM+16);
    for(var hx=x0+4;hx<p-12;hx+=7)hat+='M'+hx+' '+(MEM+3)+'L'+(hx+6)+' '+(MEM+13);
    hat+='M'+(p-9)+' '+MEM+'L'+(p-9)+' '+(MEM+16)+'M'+(p+9)+' '+MEM+'L'+(p+9)+' '+(MEM+16);x0=p+9});
  top+='M'+x0+' '+MEM+'L760 '+MEM;bot+='M'+x0+' '+(MEM+16)+'L760 '+(MEM+16);for(var hx2=x0+4;hx2<756;hx2+=7)hat+='M'+hx2+' '+(MEM+3)+'L'+(hx2+6)+' '+(MEM+13);
  g+='<path class="mb sD" d="'+top+bot+'"/><path class="mhat sD" d="'+hat+'"/>';
  g+='<path class="lr sD" d="M40 30V530M760 30V530"/>';
  g+='<text class="t" x="784" y="552" text-anchor="end">'+(mob?'SCHEMATIC':'CROSS-SECTION · SCHEMATIC, NOT TO SCALE')+'</text>';
  g+='<text class="t" x="52" y="'+(MEM+36)+'">5 µm FILTER</text>';
  g+='</g>';
  g+='<g id="scMove">';
  HC.forEach(function(c,j){g+='<g class="hc" id="hc'+j+'"><circle r="'+(c.r*1.25)+'" fill="url(#sbg)"/><path class="co" d="'+cellPath(c,1)+'"/><path class="ci" d="'+cellPath(c,.82)+'"/>'+
    '<ellipse class="nu" cx="'+f(c.r*.08)+'" cy="'+f(-c.r*.04)+'" rx="'+f(c.r*.3)+'" ry="'+f(c.r*.25)+'"/></g>'});
  BAC.forEach(function(b,j){g+='<rect class="ba" id="ba'+j+'" x="-8" y="-3.4" width="16" height="6.8" rx="3.4"/>'});
  /* released DNA (step 3): host strands above the filter, microbial strands below */
  HC.forEach(function(c,j){var h=helix(c.ex,MEM-30-(j%2)*44,c.r*1.5,j);g+='<g class="dna dh"><path d="'+h[0]+'"/><path d="'+h[1]+'"/><path class="rg" d="'+h[2]+'"/></g>'});
  [[180,392],[420,410],[650,396],[290,470],[560,476],[700,500],[150,500]].forEach(function(q,j){var h=helix(q[0],q[1],90,j*1.3);g+='<g class="dna dm"><path d="'+h[0]+'"/><path d="'+h[1]+'"/><path class="rg" d="'+h[2]+'"/></g>'});
  g+='</g>';
  /* labels, one set per step */
  g+='<g id="lb1"><text class="a" x="56" y="28">'+(mob?'MIXED SAMPLE':'MIXED METAGENOMIC SAMPLE')+'</text>'+(mob?'':'<text class="t" x="56" y="46">HUMAN CELLS AND BACTERIA IN SUSPENSION</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="744" y="28" text-anchor="end">'+(mob?'CELLS HELD':'HUMAN CELLS HELD BACK')+'</text><text class="a" x="744" y="'+(MEM+40)+'" text-anchor="end">'+(mob?'BACTERIA PASS':'BACTERIA PASS THROUGH')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="56" y="28">HOST DNA</text>'+(mob?'':'<text class="t" x="56" y="46">LYSED IN ITS OWN BUFFER</text>')+'<text class="a" x="744" y="'+(MEM+40)+'" text-anchor="end">MICROBIAL DNA</text>'+(mob?'':'<text class="t" x="744" y="'+(MEM+58)+'" text-anchor="end">LYSED IN ITS OWN BUFFER</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),mv:$("#scMove",svg),hc:$$(".hc",svg),ba:$$(".ba",svg),dh:$$(".dh",svg),dm:$$(".dm",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var dna=$$(".dna path",svg).map(function(p){var L=p.getTotalLength();p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  function ez(t){t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.34,.6),s3=seg(p,.68,.88);
    /* human cells: drift in suspension, then settle onto the filter (too large for the pores), then open (step 3) */
    E.hc.forEach(function(el,j){var c=HC[j],dr=(1-s2)*6*Math.sin(p*14+j*1.7),y=lerp(c.y,MEM-c.r*.86-2,ez(s2))+dr,x=lerp(c.x,c.ex,ez(s2));
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*(1-.78*s3))});
    /* bacteria: drift, then each drops through its nearest pore into the fraction below */
    E.ba.forEach(function(el,j){var q=BAC[j],t=ez((s2-q.dl*.6)/(1-q.dl*.6)),x,y,a;
      if(t<.5){var u=t*2;x=lerp(q.x,q.p,u);y=lerp(q.y,MEM-12,u);a=lerp(q.a,90,u)}else{var v=(t-.5)*2;x=lerp(q.p,q.ex,v*v);y=lerp(MEM-12,q.ey,v);a=lerp(90,q.ea,v)}
      x+=(1-s2)*4*Math.sin(p*20+j);el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+a.toFixed(0)+")");op(el,b*(1-.72*s3))});
    /* DNA strands draw in for both fractions */
    draw(dna,s3);E.dh.concat(E.dm).forEach(function(el){op(el,b*Math.min(1,s3*2))});
    op(E.l1,b*s1*(1-seg(p,.26,.34)));op(E.l2,b*seg(p,.5,.6)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.78,.88));
  };
}

/* the story scene (BL/BY/DB): ONE engraved double helix kept on screen for all three steps. Step 1 the helix draws across the
   frame and a short tandem repeat lights in it (six CAG units, alternating magenta and orchid, the sequence spelled beneath).
   Step 2 the helix lifts and a genome track draws below: STR lengths rise as bars at loci along it and SNPs mark the track as
   dots. Step 3 an engraved pair of lungs with an indeterminate nodule draws on the right, and a single blood draw on the left
   connects to it: OrbiSeq-L's question, benign or malignant. Sources: orbitgenomics.com Science & Technology and Product
   Pipeline pages, the May 2026 poster news item. Schematic; driven by the scrubbed story progress. */
var OGX=(function(){
  var f=function(n){return +(+n).toFixed(1)};
  var X0=40,X1=760,Y=270,A=80,WL=240,N=36;
  function y1(x){return Y+A*Math.sin((x-X0)/WL*Math.PI*2)}
  function y2(x){return Y-A*Math.sin((x-X0)/WL*Math.PI*2)}
  function strand(fn){var d='',x;for(x=X0;x<=X1;x+=6)d+=(x===X0?'M':'L')+f(x)+' '+f(fn(x));return d}
  var rungs=[],i;for(i=0;i<N;i++){var x=X0+10+i*20;rungs.push({x:x,a:y1(x),b:y2(x),rep:i>=7&&i<25?(Math.floor((i-7)/3)%2?2:1):0})}
  var loci=[];for(i=0;i<46;i++){var lx=60+i*15.2;loci.push({x:f(lx),h:f(22+((i*37)%11)*7+((i*13)%5)*4),snp:(i*7)%5===2})}
  return {X0:X0,X1:X1,Y:Y,s1:strand(y1),s2:strand(y2),rungs:rungs,loci:loci,TY:470};
})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,T=OGX.TY;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"20 20 760 540":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><radialGradient id="ogg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d68cdc" stop-opacity=".5"/><stop offset=".6" stop-color="#d68cdc" stop-opacity=".12"/><stop offset="1" stop-color="#d68cdc" stop-opacity="0"/></radialGradient></defs>';
  /* the helix: two backbones and the base-pair rungs */
  g+='<g id="hx"><g id="hxIn">';
  OGX.rungs.forEach(function(r){g+='<path class="rn'+(r.rep?' rp r'+r.rep:'')+'" d="M'+f(r.x)+' '+f(r.a)+'L'+f(r.x)+' '+f(r.b)+'"/>'});
  g+='<path class="bb sD" d="'+OGX.s1+'"/><path class="bb2 sD" d="'+OGX.s2+'"/>';
  /* sequence beneath the helix, CAG units coloured */
  var seq='TTGACGT'+'CAGCAGCAGCAGCAGCAG'+'GTCATGCAGTC',sx=OGX.X0+10;
  g+='<g id="sq">';for(i=0;i<36;i++){var rep=i>=7&&i<25,u=Math.floor((i-7)/3)%2;g+='<text class="bs'+(rep?(u?' u2':' u1'):'')+'" x="'+f(sx+i*20)+'" y="'+(OGX.Y+122)+'" text-anchor="middle">'+seq[i]+'</text>'}g+='</g>';
  g+='<path class="brk" d="M'+f(sx+7*20-8)+' '+(OGX.Y-98)+'v-10H'+f(sx+24*20+8)+'v10"/>';
  /* labels for step 1 ride with the helix */
  g+='<g id="lb1"><text class="a" x="'+f(sx+15.5*20)+'" y="'+(OGX.Y-118)+'" text-anchor="middle">'+(mob?'CAG × 6':'SHORT TANDEM REPEAT · CAG × 6')+'</text>'+
     '<text class="t" x="400" y="'+(OGX.Y+150)+'" text-anchor="middle">ONE TO SIX BASES, REPEATED IN TANDEM</text></g>';
  g+='</g></g>';
  /* genome track with STR length bars and SNP dots (step 2) */
  g+='<g id="gt"><path class="trk sD" d="M50 '+T+'H750"/>';
  OGX.loci.forEach(function(l,k){g+='<path class="bar" data-k="'+k+'" d="M'+l.x+' '+T+'V'+f(T-l.h)+'"/>';if(l.snp)g+='<circle class="snp" cx="'+f(+l.x+7.6)+'" cy="'+T+'" r="3.6"/>'});
  g+='</g>';
  /* lungs, nodule, blood draw (step 3) */
  var L='M592 196C566 184 528 196 512 236C494 280 486 344 490 396C494 430 520 444 550 432C574 422 590 412 592 384Z';
  var R='M608 196C634 184 672 196 688 236C706 280 714 344 710 396C706 430 680 444 650 432C626 422 610 412 608 384Z';
  g+='<g id="lg" transform="translate(600 300) scale(1.3) translate(-600 -300)"><path class="lu sD" d="'+L+'"/><path class="lu sD" d="'+R+'"/>'+
     '<path class="br sD" d="M600 104V200M600 200C588 214 572 226 556 240M556 240C546 262 538 290 534 318M556 240C540 252 524 268 514 290M600 200C612 214 628 226 644 240M644 240C654 262 662 290 666 318M644 240C660 252 676 268 686 290M534 318C530 346 532 372 538 398M666 318C670 346 668 372 662 398"/>'+
     '<circle cx="530" cy="300" r="40" fill="url(#ogg)" class="ndg"/><circle class="nd" cx="530" cy="300" r="9"/>'+
     '</g><g id="bd"><path class="dr sD" d="M170 250C152 286 132 312 132 342A38 38 0 0 0 208 342C208 312 188 286 170 250Z"/>'+
     '<path class="pth sD" id="pth" d="M220 330C300 318 380 302 460 300"/></g>';
  g+='<g id="pk">';for(i=0;i<6;i++)g+='<circle class="pk" data-k="'+i+'" r="3.2"/>';g+='</g>';
  g+='<g id="lb2"><text class="a" x="50" y="'+(T+34)+'">'+(mob?'STRS ACROSS THE GENOME':'STR LENGTHS ACROSS THE GENOME')+'</text>'+
     '<text class="b" x="750" y="'+(T+34)+'" text-anchor="end">+ SNPS</text>'+
     (mob?'':'<text class="t" x="50" y="'+(T+54)+'">~1 MILLION STRS · READ WITH AI-ENABLED ORBISEQ™</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="170" y="222" text-anchor="middle">ONE BLOOD DRAW</text>'+
     '<text class="a" x="'+(mob?540:600)+'" y="522" text-anchor="middle">'+(mob?'BENIGN OR MALIGNANT?':'INDETERMINATE PULMONARY NODULE')+'</text>'+
     '<path class="ldr" d="M562 502L514 316"/>'+
     (mob?'':'<text class="t" x="600" y="542" text-anchor="middle">96% PPV · 99% NPV · PROTOTYPE TEST SET</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={bb:dl("#hx .sD"),rn:$$("#hx .rn",svg),sq:$$("#sq text",svg),brk:$("#hx .brk",svg),hx:$("#hxIn",svg),
    trk:dl("#gt .trk"),trkEl:$("#gt .trk",svg),bars:$$("#gt .bar",svg),snp:$$("#gt .snp",svg),lg:dl("#lg .sD, #bd .sD"),nd:$("#lg .nd",svg),ndg:$("#lg .ndg",svg),
    pth:$("#pth",svg),pk:$$("#pk .pk",svg),b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg)};
  var PL=E.pth.getTotalLength();
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    var lit=seg(p,.03,.16),s2=seg(p,.34,.56),out2=seg(p,.64,.72),s3=seg(p,.68,.86),fl=seg(p,.74,.98);
    /* step 1: helix present on arrival; the repeat lights */
    draw(E.bb,b);
    E.rn.forEach(function(el){op(el,b*(el.classList.contains("rp")?(.3+.7*lit):.85))});
    E.sq.forEach(function(el,k){op(el,b*(k>=7&&k<25?(.35+.65*lit):.55))});op(E.brk,b*lit*(1-s2));
    /* step 2: helix lifts, track and bars rise; step 3: the genome view recedes */
    E.hx.setAttribute("transform","translate(0 "+(-150*s2).toFixed(1)+")");
    op(E.hx,1-.92*out2);
    draw(E.trk,b*s2);op(E.trkEl,b*(1-out2));
    E.bars.forEach(function(el,k){var a=k/E.bars.length*.6,q=seg(s2,a,a+.4);el.style.transform="scaleY("+q.toFixed(3)+")";op(el,b*q*(1-out2))});
    E.snp.forEach(function(el,k){op(el,b*seg(s2,.5+k*.02,.7+k*.02)*(1-out2))});
    draw(E.lg,b*s3);op(E.nd,b*seg(s3,.6,1));op(E.ndg,b*seg(fl,.4,1));
    E.pk.forEach(function(el,k){var q=seg(fl,k*.09,k*.09+.5),pt=E.pth.getPointAtLength(PL*q);
      el.setAttribute("transform","translate("+pt.x.toFixed(1)+" "+pt.y.toFixed(1)+")");op(el,b*seg(q,0,.12)*(1-seg(q,.86,1)))});
    op(E.b1,b*(1-seg(p,.28,.33)));op(E.b2,b*seg(p,.42,.5)*(1-seg(p,.62,.67)));op(E.b3,b*seg(p,.76,.86));
  };
}

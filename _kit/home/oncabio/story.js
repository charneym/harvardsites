/* The story scene (DB/CX): ONE engraved composition that stays on screen for all three steps — a macrocyclic peptide ring
   of fifteen residues drawn above the mRNA message that encodes it, codon by codon.
   Step 1: the two residues every standard library has to fix (a chloroacetyl and a thiol amino acid) are marked, and the
   thioether bridge that closes the ring is drawn between them.
   Step 2: the message is bracketed into three segments, each with its own codon assignment, and each segment lights the
   arc of the ring it writes.
   Step 3: the two fixed positions open — they take varied residues like every other, and the whole ring lights.
   Source: the NIH RePORTER abstract of 1R43TR005911-01 (precursor peptides synthesised with two fixed residues, a
   chloroacetyl and a thiol amino acid, that spontaneously react to form cycles, giving libraries with zero diversity at
   two positions; SIVT reassigns mRNA codons to different amino acids multiple times within a single transcript, so the
   codon table is defined locally by position). Schematic; residue count and positions are illustrative.
   Driven by the scrubbed story progress. */
var RING=(function(){
  var n=15,C=[430,210],R=150,P=[],i;
  for(i=0;i<n;i++){var a=(-90+i*(360/n))*Math.PI/180;P.push([C[0]+R*Math.cos(a),C[1]+R*Math.sin(a)])}
  return {n:n,C:C,R:R,P:P,FIX:[0,7]};
})();
var MSG=(function(){
  var n=15,x0=70,w=44,y=478,P=[],i;
  for(i=0;i<n;i++)P.push([x0+i*w,y]);
  return {n:n,x0:x0,w:w,y:y,P:P};
})();
var SEGS=[[0,4,"TABLE A"],[5,9,"TABLE B"],[10,14,"TABLE C"]];
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,j;
  var RP=RING.P,MP=MSG.P;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="rg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#2eaaff" stop-opacity=".30"/><stop offset=".55" stop-color="#2eaaff" stop-opacity=".07"/><stop offset="1" stop-color="#2eaaff" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="pg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#2eaaff" stop-opacity=".8"/><stop offset="1" stop-color="#2eaaff" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the ring backbone, closed */
  var bb='';for(i=0;i<RING.n;i++)bb+=(i?'L':'M')+f(RP[i][0])+' '+f(RP[i][1]);bb+='Z';
  g+='<path class="sbb sD" d="'+bb+'"/>';
  /* a faint engraved circle behind the ring */
  g+='<circle class="ghost sD" cx="'+RING.C[0]+'" cy="'+RING.C[1]+'" r="'+(RING.R+34)+'"/>';
  /* the mRNA message under it, and a leader from each codon up to its residue */
  g+='<path class="mrna sD" d="M'+(MSG.x0-22)+' '+MSG.y+'H'+f(MP[MSG.n-1][0]+22)+'"/>';
  g+='</g>';
  g+='<g id="scMove">';
  /* the halo behind the ring */
  g+='<circle class="glow" id="ringGlow" cx="'+RING.C[0]+'" cy="'+RING.C[1]+'" r="'+(RING.R+92)+'" fill="url(#rg)"/>';
  /* segment brackets under the message, each with its own codon table tag */
  SEGS.forEach(function(s,k){
    var a=MP[s[0]][0]-14,b=MP[s[1]][0]+14,mid=(a+b)/2;
    g+='<g class="seg" id="seg'+k+'">'+
       '<rect class="sh" x="'+f(a)+'" y="'+f(MSG.y-26)+'" width="'+f(b-a)+'" height="52"/>'+
       '<path class="sl" d="M'+f(a)+' '+f(MSG.y+34)+'v10h'+f(b-a)+'v-10"/>'+
       '<text class="a" x="'+f(mid)+'" y="'+f(MSG.y+66)+'" text-anchor="middle">'+s[2]+'</text></g>';
  });
  /* residues: a bead per position, with the codon that encodes it on the message below */
  for(i=0;i<RING.n;i++){
    g+='<circle class="lit" id="lit'+i+'" cx="'+f(RP[i][0])+'" cy="'+f(RP[i][1])+'" r="23" fill="url(#pg)"/>';
    g+='<circle class="res" cx="'+f(RP[i][0])+'" cy="'+f(RP[i][1])+'" r="12"/>';
  }
  for(i=0;i<MSG.n;i++)for(j=0;j<3;j++)g+='<circle class="cod" cx="'+f(MP[i][0]-12+j*12)+'" cy="'+f(MSG.y)+'" r="3.6"/>';
  /* the two positions a standard library has to fix, and the bridge that closes the ring between them */
  RING.FIX.forEach(function(k){
    g+='<circle class="fixm" id="fx'+k+'" cx="'+f(RP[k][0])+'" cy="'+f(RP[k][1])+'" r="21"/>';
    g+='<circle class="fixc" id="fc'+k+'" cx="'+f(RP[k][0])+'" cy="'+f(RP[k][1])+'" r="6"/>';
  });
  var A=RP[RING.FIX[0]],B=RP[RING.FIX[1]],mx=(A[0]+B[0])/2,my=(A[1]+B[1])/2;
  var bx=mx+(RING.C[0]-mx)*0.30,by=my+(RING.C[1]-my)*0.30;
  var bd='M'+f(A[0])+' '+f(A[1])+'Q'+f(bx)+' '+f(by)+' '+f(B[0])+' '+f(B[1]);
  g+='<path class="brg" id="brg" d="'+bd+'"/><path class="brgO" id="brgO" d="'+bd+'"/>';
  g+='</g>';
  /* labels, one set per step; each leader ends on the thing it names */
  var F0=RP[RING.FIX[0]];
  g+='<g id="lb1"><text class="e" x="'+(mob?16:18)+'" y="'+(mob?62:58)+'">'+(mob?'FIXED: TWO RESIDUES':'FIXED: CHLOROACETYL + THIOL')+'</text>'+
     '<text class="t" x="'+(mob?16:18)+'" y="'+(mob?100:96)+'">'+(mob?'ZERO DIVERSITY':'ZERO DIVERSITY AT BOTH POSITIONS')+'</text>'+
     '<path class="ldr" d="M'+(mob?300:250)+' '+(mob?56:58)+'L'+f(F0[0]-24)+' '+f(F0[1]-2)+'"/></g>';
  g+='<g id="lb2"><text class="a" x="788" y="'+(mob?44:40)+'" text-anchor="end">'+(mob?'SEGMENTED TRANSLATION':'SEGMENTED IN VITRO TRANSLATION')+'</text>'+
     '<text class="t" x="788" y="'+(mob?82:78)+'" text-anchor="end">'+(mob?'A CODON TABLE PER SEGMENT':'THE CODON TABLE IS SET BY POSITION')+'</text>'+
     '<path class="ldr" d="M'+(mob?700:664)+' '+(mob?96:92)+'L'+f(MP[MSG.n-1][0]+6)+' '+f(MSG.y-34)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?16:18)+'" y="'+(mob?330:322)+'">'+(mob?'EVERY POSITION VARIED':'EVERY POSITION VARIED')+'</text>'+
     '<text class="t" x="'+(mob?16:18)+'" y="'+(mob?366:344)+'">RING INCLUDED</text>'+
     '<path class="ldr" d="M'+(mob?330:214)+' '+(mob?324:316)+'L'+f(RP[10][0]-16)+' '+f(RP[10][1]-6)+'"/></g>';
  g+='<text class="t" x="'+(MSG.x0-12)+'" y="'+(MSG.y-34)+'">5\u2032 mRNA</text>';
  g+='<text class="t" x="18" y="16">MACROCYCLIC PEPTIDE \u00b7 SCHEMATIC</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, .res, .cod",svg),mv:$("#scMove",svg),
    lit:$$(".lit",svg),fixm:$$(".fixm",svg),fixc:$$(".fixc",svg),seg:$$(".seg",svg),
    brg:$("#brg",svg),brgO:$("#brgO",svg),glow:$("#ringGlow",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var FIX=RING.FIX,lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.36,.52),s3=seg(p,.68,.86);
    /* step 1: the two fixed positions are marked and the bridge is drawn; step 3: they open */
    var fixOn=b*s1*(1-s3),openOn=b*s3;
    E.fixm.forEach(function(el,i){op(el,fixOn*(.6+.4*Math.sin(p*26+i*1.7)))});
    E.fixc.forEach(function(el){op(el,fixOn)});
    op(E.brg,b*s1*(1-s3)*.95);op(E.brgO,openOn*.9);
    /* step 2: the message is bracketed into segments, one codon table each, lighting the arc it writes */
    E.seg.forEach(function(el,k){var d=seg(p,.36+k*.05,.48+k*.05);op(el,b*d*(1-seg(p,.74,.86)*.45))});
    /* residues light: in step 2 by segment, in step 3 all of them, the two former fixed positions included */
    E.lit.forEach(function(el,i){
      var k=i<5?0:i<10?1:2,byseg=seg(p,.38+k*.05,.5+k*.05)*(1-s3*.2),
          isFix=FIX.indexOf(i)>=0,v=Math.max(isFix?byseg*s3:byseg,s3*(.72+.28*Math.sin(p*30+i)));
      op(el,b*v*(isFix?s3:1))});
    op(E.glow,b*(s3*.9+s2*.25));
    op(E.l1,b*s1*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.72,.82));
  };
}

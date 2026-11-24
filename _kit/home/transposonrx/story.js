/* The story scene (BL/BY/DB): how TPN-⁠101 works, from transposonrx.com/science and Transposon's releases ("Abnormal proteins
   ... such as tau and TDP-43, can increase the expression of these LINE-1 elements"; "LINE-1 reverse transcriptase drives the
   overproduction of LINE-1 DNA, triggering innate immune responses"; "TPN-⁠101 specifically inhibits the LINE-1 reverse
   transcriptase"), as ONE continuous scene kept on screen for all three steps: a neuron's cell body with its nucleus; in the
   nucleus a strand of DNA with a LINE-1 element; in the cytoplasm the LINE-1 reverse transcriptase. Step 1: LINE-1 is held
   silent (closed brackets around it). Step 2: the brackets open, LINE-1 RNA (violet) runs to the reverse transcriptase, which
   turns it into LINE-1 DNA (cyan), and an innate immune alarm radiates. Step 3: TPN-⁠101 docks in the enzyme's active site;
   the DNA and the alarm fade. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
function wig(x0,y0,x1,y1,a,ph){var d="M"+x0+" "+y0,n=Math.max(6,Math.round(Math.hypot(x1-x0,y1-y0)/3)),i,dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L;
  for(i=1;i<=n;i++){var t=i/n,s=a*Math.sin(i*.9+ph);d+="L"+(x0+dx*t+nx*s).toFixed(1)+" "+(y0+dy*t+ny*s).toFixed(1)}return d}
function tpScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the neuron's cell body (soma) with two dendrites and the axon leaving at right */
  g+='<path class="mem sD" d="M118 250C118 150 210 70 360 70C510 70 640 140 640 250C640 360 510 430 360 430C210 430 118 350 118 250Z"/>';
  g+='<path class="mem2 sD" d="M130 250C130 160 216 82 360 82C504 82 628 150 628 250C628 350 504 418 360 418C216 418 130 340 130 250Z"/>';
  g+='<path class="den sD" d="M150 175C118 150 84 140 40 146M168 330C130 362 96 380 46 384M640 250H744"/>';
  g+='<path class="nuc sD" d="M168 260A112 112 0 1 1 392 260A112 112 0 1 1 168 260Z"/>';
  var s1="M190 300",s2="M190 300";for(i=1;i<=36;i++){var x=190+i*5;s1+="L"+x+" "+(300+6*Math.sin(i*.5)).toFixed(1);s2+="L"+x+" "+(300-6*Math.sin(i*.5)).toFixed(1)}
  g+='<path class="dna sD" d="'+s1+'"/><path class="dna sD" d="'+s2+'"/>';
  g+='<text class="t" x="24" y="24">NEURON · LINE-1 ACTIVITY</text>';
  if(!mob){g+='<text class="t" x="236" y="340">LINE-1</text>';g+='<text class="t" x="438" y="176">LINE-1 RT</text>'}
  g+='</g>';
  /* the LINE-1 element on the DNA, and the brackets that hold it silent */
  g+='<rect id="gL1" class="gn" x="236" y="293" width="56" height="14"/>';
  g+='<g id="lock"><path class="lk" d="M230 282h-8v36h8M298 282h8v36h-8"/></g>';
  /* LINE-1 RNA from the element out of the nucleus to the reverse transcriptase */
  g+='<path id="rna" class="rna" d="'+wig(264,286,446,222,2.4,0)+'"/>';
  /* the reverse transcriptase (a hand shape with its active-site notch) */
  g+='<path id="rt" class="rt" d="M450 196H492V202Q492 210 500 210H512Q520 210 520 202V196H540Q552 196 552 208V240Q552 252 540 252H450Q438 252 438 240V208Q438 196 450 196Z"/>';
  /* LINE-1 DNA made by the enzyme: three strands spilling into the cytoplasm */
  g+='<g id="cd">'+[[470,256,452,350],[495,256,500,362],[520,256,552,342]].map(function(c,k){return '<path class="cdna" d="'+wig(c[0],c[1],c[2],c[3],2.4,k*1.3)+'"/>'}).join("")+'</g>';
  /* the innate immune alarm: rings radiating from a sensor beside the DNA */
  g+='<g id="alarm"><circle class="sn" cx="580" cy="318" r="6"/>'+[12,20,28].map(function(r,k){return '<circle class="ring" data-k="'+k+'" cx="580" cy="318" r="'+r+'"/>'}).join("")+'</g>';
  /* TPN-⁠101 (enters from above right, docks in the notch) */
  g+='<g id="dTT"><path class="tt" d="M0 -8L7 -4V4L0 8L-7 4V-4Z"/></g>';
  /* step captions, in the clear band under the cell */
  g+='<g id="lb1"><text class="a" x="24" y="494">LINE-1 IS HELD SILENT</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="494">LINE-1 DNA TRIGGERS INFLAMMATION</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="494">TPN-⁠101 BLOCKS LINE-1 RT</text></g>';
  return g+'</svg>';
}
function scene(){return tpScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),gL1:$("#gL1",svg),lock:$("#lock",svg),rt:$("#rt",svg),alarm:$("#alarm",svg),rings:$$("#alarm .ring",svg),
    alT:$("#alT",svg),dTT:$("#dTT",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var rna=dl("#rna"),cd=dl("#cd .cdna");
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mv(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var inn=seg(p,0,.12),act=seg(p,.34,.46),blk=seg(p,.69,.84);
    /* step 1: LINE-1 dim, held by its brackets; step 2: brackets open, the element lights */
    op(E.gL1,b*inn);E.gL1.style.fillOpacity=(.12+.78*act).toFixed(3);
    op(E.lock,b*inn*(1-act));mv(E.lock,0,-10*act);
    op(E.rt,b*inn);E.rt.classList.toggle("on",act>.5&&blk<.5);
    /* the RNA runs out to the enzyme, then the enzyme spins out DNA */
    var r=seg(p,.36,.46);rna.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-r)).toFixed(1);a[0].style.opacity=(b*(r>0?1:0)*(1-.75*blk)).toFixed(3)});
    var c=seg(p,.44,.56);cd.forEach(function(a,k){var ci=Math.min(1,Math.max(0,c*1.5-k*.25));a[0].style.strokeDashoffset=(a[1]*(1-ci)).toFixed(1);a[0].style.opacity=(b*(ci>0?1:0)*(1-blk)).toFixed(3)});
    /* the alarm rises after the DNA, and quiets when TPN-⁠101 blocks the enzyme */
    var al=seg(p,.5,.6)*(1-blk);op(E.alarm,b*al);op(E.alT,b*al);
    E.rings.forEach(function(el,k){el.style.opacity=(.85-.25*k).toFixed(2)});
    /* step 3: TPN-⁠101 docks in the active-site notch (506, 203) */
    mv(E.dTT,700+(506-700)*blk,60+(203-60)*blk);op(E.dTT,b*seg(p,.66,.71));
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.62,.66)));op(E.l3,b*seg(p,.74,.82));
  };
}

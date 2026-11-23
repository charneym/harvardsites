/* The story scene (DB/BL/BY): MasterSwitch's mechanism (NIDDK award summary: "re-expressing HNF4alpha using
   nucleotide-lipid nanoparticle (LNP) delivery significantly improves hepatocyte function"; HNF4alpha drives the
   hepatocyte-specific transcriptional networks), drawn as ONE continuous fine-line scene that fills the frame: a liver
   sinusoid (blood) beside a hepatocyte, with its nucleus, DNA, ER and mitochondria. Frame 0 is already complete, with
   the nanoparticle in the blood.
   Step 1 (deliver): the LNP travels down the sinusoid, through the endothelial gap, into the hepatocyte, and opens.
   Step 2 (translate): the HNF4alpha mRNA uncoils, ribosomes bind it, and new HNF4alpha protein gathers by the nucleus.
   Step 3 (restore): HNF4alpha passes into the nucleus and binds the DNA in pairs, new transcripts rise from the
   switched-on genes, and the cell's outline brightens. Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var SIN=["M40 40C44 160 36 300 42 520","M100 40C102 100 101 150 100 170","M100 210C99 290 98 400 102 520"];
var CELL="M150 100C240 74 330 58 420 56C520 56 620 72 680 106C716 170 728 250 722 320C716 400 690 460 648 498C540 520 440 526 340 522C260 518 196 486 150 442C138 330 138 210 150 100Z";
var NUC=[480,292,142,112];
function ell(cx,cy,rx,ry){return "M"+(cx-rx)+" "+cy+"A"+rx+" "+ry+" 0 1 0 "+(cx+rx)+" "+cy+"A"+rx+" "+ry+" 0 1 0 "+(cx-rx)+" "+cy+"Z"}
var ER=["M636 150C664 192 674 246 670 300C666 352 652 396 630 430","M656 140C686 186 698 246 694 304C690 360 674 408 650 444","M598 446C566 468 528 480 486 484","M612 462C574 486 530 498 482 502"];
var MITO=[[370,112,20,8,-6],[610,470,0,0,0],[226,480,18,7,18],[566,112,18,7,8]];
var LNP0=[70,96],LNPW=[[70,96],[70,190],[100,190],[150,198],[206,232]];
var MR0=[192,252],MR1=[300,420];
var RIB=[.22,.46,.7,.9];
var SITES=[414,436,470,492,536,558],SY=282;
var CLU=[[292,236],[314,250],[296,264],[318,274],[288,290],[312,302]];
var NPR=6;
function mrnaD(){var d="",n=60;for(var i=0;i<=n;i++){var t=i/n,x=MR0[0]+(MR1[0]-MR0[0])*t,y=MR0[1]+(MR1[1]-MR0[1])*t,dx=MR1[0]-MR0[0],dy=MR1[1]-MR0[1],L=Math.hypot(dx,dy),o=7*Math.sin(t*Math.PI*7);x+=-dy/L*o;y+=dx/L*o;d+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return d}
function mrnaP(t){var x=MR0[0]+(MR1[0]-MR0[0])*t,y=MR0[1]+(MR1[1]-MR0[1])*t,dx=MR1[0]-MR0[0],dy=MR1[1]-MR0[1],L=Math.hypot(dx,dy),o=7*Math.sin(t*Math.PI*7);return [x-dy/L*o,y+dx/L*o]}
function dnaD(ph){var d="";for(var x=372;x<=588;x+=3){var y=300+11*Math.sin((x-372)/54*Math.PI*2+ph);d+=(x>372?"L":"M")+x+" "+y.toFixed(1)}return d}
function rungs(){var d="";for(var x=378;x<=584;x+=9){var a=11*Math.sin((x-372)/54*Math.PI*2);if(Math.abs(a)<2.5)continue;d+="M"+x+" "+(300+a).toFixed(1)+"L"+x+" "+(300-a).toFixed(1)}return d}
function txD(x){return "M"+x+" "+(SY-10)+"C"+(x-8)+" "+(SY-22)+" "+(x+8)+" "+(SY-34)+" "+x+" "+(SY-46)+"C"+(x-8)+" "+(SY-56)+" "+(x+6)+" "+(SY-64)+" "+(x-2)+" "+(SY-72)}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="msg"><stop offset="0" stop-color="#a9bfdf" stop-opacity=".5"/><stop offset="1" stop-color="#a9bfdf" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  SIN.forEach(function(d){g+='<path class="wl sD" d="'+d+'"/>'});
  g+='<path class="wl sD" id="cell" d="'+CELL+'"/>';
  g+='<path class="wmd sD" d="'+ell(NUC[0],NUC[1],NUC[2],NUC[3])+'"/><path class="wo sD" d="'+ell(NUC[0],NUC[1],NUC[2]-8,NUC[3]-8)+'"/>';
  ER.forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  MITO.forEach(function(m){if(!m[2])return;g+='<path class="wmd sD" transform="rotate('+m[4]+' '+m[0]+' '+m[1]+')" d="'+ell(m[0],m[1],m[2],m[3])+'"/><path class="wo sD" transform="rotate('+m[4]+' '+m[0]+' '+m[1]+')" d="M'+(m[0]-m[2]+6)+' '+m[1]+'C'+(m[0]-6)+' '+(m[1]-6)+' '+(m[0]+2)+' '+(m[1]+6)+' '+(m[0]+m[2]-6)+' '+m[1]+'"/>'});
  g+='<path class="dna sD" d="'+dnaD(0)+'"/><path class="dna sD" d="'+dnaD(Math.PI)+'"/><path class="wo sD" d="'+rungs()+'"/>';
  g+='</g>';
  g+='<path class="lit" id="cellLit" d="'+CELL+'"/>';
  /* the mRNA, its ribosomes, the new protein, the transcripts */
  g+='<path id="mrna" class="mr" d="'+mrnaD()+'"/>';
  g+='<g id="ribs">';RIB.forEach(function(t){var q=mrnaP(t);g+='<g class="rb"><circle class="rb1" cx="'+(q[0]+5).toFixed(1)+'" cy="'+(q[1]-4).toFixed(1)+'" r="7"/><circle class="rb2" cx="'+(q[0]-3).toFixed(1)+'" cy="'+(q[1]+5).toFixed(1)+'" r="4.5"/></g>'});g+='</g>';
  g+='<g id="tx">';SITES.forEach(function(x,i){if(i%2)return;g+='<path class="txp" d="'+txD(x+11)+'"/>'});g+='</g>';
  g+='<g id="prot">';for(i=0;i<NPR;i++)g+='<circle class="pr" r="6.5" cx="'+CLU[i][0]+'" cy="'+CLU[i][1]+'"/>';g+='</g>';
  /* the nanoparticle: a lipid shell with its mRNA cargo */
  g+='<g id="lnp" transform="translate('+LNP0[0]+' '+LNP0[1]+')"><circle class="lnp" r="15"/><circle class="lnpi" r="11"/><path class="lnpc" d="M-7 0c2-4 4-4 5 0s3 4 5 0 3-4 4 0"/></g>';
  /* labels, each clear of every stroke (DR) */
  if(!mob){
    g+='<g id="lSin"><text class="t" x="24" y="28">SINUSOID · BLOOD</text></g>';
    g+='<g id="lLnp"><path class="ld" d="M188 154L201 212"/><text class="t" x="164" y="146">LIPID NANOPARTICLE</text></g>';
    g+='<g id="lMr"><path class="ld" d="M314 437L303 427"/><text class="t" x="318" y="448">HNF4α mRNA · RIBOSOMES</text></g>';
    g+='<g id="lPr"><text class="t" x="228" y="212">NEW HNF4α PROTEIN</text></g>';
    g+='<g id="lNuc"><path class="ld" d="M566 164L548 196"/><text class="t" x="556" y="156">NUCLEUS</text></g>';
    g+='<g id="lDna"><text class="t" x="410" y="352">HNF4α BINDS THE DNA</text></g>';
  }else{
    g+='<g id="lSin"><text class="t" x="20" y="28">BLOOD</text></g>';
    g+='<g id="lLnp"><path class="ld" d="M196 160L203 210"/><text class="t" x="162" y="150">LNP</text></g>';
    g+='<g id="lMr"><text class="t" x="314" y="456">mRNA</text></g>';
    g+='<g id="lPr"><text class="t" x="210" y="212">HNF4α</text></g>';
    g+='<g id="lNuc"><text class="t" x="548" y="164">NUCLEUS</text></g>';
    g+='<g id="lDna"><text class="t" x="414" y="360">BINDS DNA</text></g>';
  }
  var ly=SCH-6,lx=mob?150:140;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'INTO THE LIVER CELL':'FROM THE BLOOD INTO THE LIVER CELL')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'mRNA BECOMES HNF4α':'RIBOSOMES READ THE mRNA AND BUILD HNF4α')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'LIVER GENES BACK ON':'THE HEPATOCYTE GENE PROGRAM SWITCHES BACK ON')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),mrna:dl("#mrna"),tx:dl("#tx .txp"),
    lnp:$("#lnp",svg),ribs:$$("#ribs .rb",svg),prot:$$("#prot .pr",svg),lit:$("#cellLit",svg),
    lSin:$("#lSin",svg),lLnp:$("#lLnp",svg),lMr:$("#lMr",svg),lPr:$("#lPr",svg),lNuc:$("#lNuc",svg),lDna:$("#lDna",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var RP=RIB.map(function(t){return mrnaP(t)});
  /* the LNP's route: a polyline, walked by length */
  var segL=[],tot=0;for(var k=1;k<LNPW.length;k++){var l=Math.hypot(LNPW[k][0]-LNPW[k-1][0],LNPW[k][1]-LNPW[k-1][1]);segL.push(l);tot+=l}
  function lnpAt(f){var d=f*tot;for(var k=0;k<segL.length;k++){if(d<=segL[k]||k===segL.length-1){var u=Math.min(1,d/segL[k]);return [LNPW[k][0]+(LNPW[k+1][0]-LNPW[k][0])*u,LNPW[k][1]+(LNPW[k+1][1]-LNPW[k][1])*u]}d-=segL[k]}}
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.28),r1=seg(p,.26,.36),s2=seg(p,.38,.64),s3=seg(p,.68,.94);
    /* 1. the LNP travels to the cell and opens */
    var q=lnpAt(ease(s1));E.lnp.setAttribute("transform","translate("+q[0].toFixed(1)+" "+q[1].toFixed(1)+") scale("+(1+.35*r1).toFixed(3)+")");
    op(E.lnp,b*(1-r1));
    op(E.lLnp,b*seg(p,.18,.26)*(1-seg(p,.3,.36)));op(E.lSin,b*(1-seg(p,.3,.4)));
    /* 2. the mRNA uncoils, ribosomes bind it, protein appears and gathers by the nucleus */
    draw(E.mrna,b*Math.max(r1,0)*1);
    var rs=seg(p,.4,.52);E.ribs.forEach(function(el,i){op(el,b*seg(rs,i*.18,i*.18+.4)*(1-.5*s3))});
    var pm=seg(p,.48,.64);
    E.prot.forEach(function(el,i){var src=RP[i%RIB.length],c=CLU[i],t=ease(seg(pm,i*.08,i*.08+.6)),x=src[0]+(c[0]-src[0])*t,y=src[1]+(c[1]-src[1])*t;
      /* 3. into the nucleus, through its left side, onto the DNA */
      var u=ease(seg(s3,i*.05,i*.05+.55)),sx=SITES[i],gx=338,gy=292;
      if(u>0){if(u<.4){var v=u/.4;x=c[0]+(gx-c[0])*v;y=c[1]+(gy-c[1])*v}else{var w=(u-.4)/.6;x=gx+(sx-gx)*w;y=gy+(SY-gy)*w}}
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*(t>0?Math.min(1,t*4):0))});
    op(E.lMr,b*seg(p,.42,.5)*(1-seg(p,.66,.72)));
    op(E.lPr,b*seg(p,.56,.63)*(1-seg(p,.68,.72)));
    op(E.lNuc,b*seg(p,.04,.12));
    /* transcripts rise from the bound genes; the cell outline brightens */
    draw(E.tx,b*seg(p,.84,.96));op(E.lit,b*seg(p,.86,.96)*.9);
    op(E.lDna,b*seg(p,.8,.86));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

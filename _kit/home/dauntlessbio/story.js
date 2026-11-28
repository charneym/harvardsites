/* The story scene: the mechanism of their ADC, in the terms of NIH 1R43CA306683 (the antigen "suppresses
   anti-tumour immunity through multiple checkpoint pathways ... delivers tumour-directed cytotoxicity while restoring
   anti-tumour immunity"; "sub-nanomolar potency in vitro"; "induced tumour regression in breast cancer xenograft models").
   ONE figure: a tumour cell on the left, an immune cell on the right, the antigen between them.
   Their site keeps the antigen undisclosed, so the labels here say ANTIGEN and CHECKPOINT rather than naming either.
   Step 1: the antigen on the tumour surface reaches across to the checkpoint receptor on the immune cell; that cell dims.
   Step 2: the antibody arrives and takes that site, so the reach is broken.
   Step 3: the payload travels down the antibody into the tumour cell.
   Step 4: the tumour cell breaks up and the immune cell lights up again. Schematic, not to scale. */
function dlScene(o){
  var g='',mob=o.mob;
  g+='<svg class="dlsc'+(mob?' mob':'')+'" viewBox="'+(mob?'40 0 560 520':'0 0 640 520')+'" aria-hidden="true">';
  if(!mob)g+='<text class="t" x="16" y="26">MECHANISM · SCHEMATIC, NOT TO SCALE</text>';
  /* tumour cell (left) */
  g+='<g id="dlTum"><path class="cell tum" d="M60 300m-96 0a96 100 0 1 0 192 0a96 100 0 1 0-192 0"/>'+
     '<circle class="nuc" cx="46" cy="300" r="34"/>'+
     '<path class="frag" id="dlFr1" d="M18 232L-10 196"/><path class="frag" id="dlFr2" d="M92 376L124 414"/><path class="frag" id="dlFr3" d="M10 372L-20 404"/></g>';
  /* immune cell (right) */
  g+='<g id="dlImm"><path class="cell imm" d="M560 300m-76 0a76 78 0 1 0 152 0a76 78 0 1 0-152 0"/>'+
     '<circle class="nuc im" cx="572" cy="300" r="26"/></g>';
  /* the antigen on the tumour (three stacked domains, the binding one at the tip) and the checkpoint receptor */
  g+='<g id="dlCd"><rect class="dom d3d" x="150" y="286" width="42" height="28" rx="6"/>'+
     '<rect class="dom d2d" x="196" y="286" width="42" height="28" rx="6"/>'+
     '<rect class="dom d1d" x="242" y="282" width="46" height="36" rx="8"/>'+
     '<text class="cd" x="163" y="266">ANTIGEN</text></g>';
  g+='<g id="dlTig"><path class="rec" d="M484 300h-60"/><rect class="dom tig" x="400" y="284" width="30" height="32" rx="7"/>'+
     '<text class="cd tg" x="415" y="266" text-anchor="middle">CHECKPOINT</text></g>';
  g+='<path class="link" id="dlLink" d="M288 300H400"/>';
  /* the antibody: a Y that comes down onto the D1 domain */
  g+='<g id="dlAb"><path class="ab" d="M300 150v44M300 150l-30-34M300 150l30-34"/><circle class="abn" cx="300" cy="196" r="7"/>'+
     '<circle class="pay p1" cx="270" cy="116" r="8"/><circle class="pay p2" cx="330" cy="116" r="8"/></g>'+
     '<text class="cd adcl" id="dlAbL" x="300" y="92" text-anchor="middle">ADC</text>';
  g+='<path class="drop" id="dlDrop" d="M300 206V282"/><circle class="pay moving" id="dlPay" cx="300" cy="206" r="8"/>';
  var C=mob?["THE ANTIGEN HOLDS THE CELL OFF","THE ANTIBODY TAKES THE SITE","THE PAYLOAD GOES IN","TUMOUR KILLED, BRAKES OFF"]
           :["THE ANTIGEN ENGAGES THE CHECKPOINT AND THE IMMUNE CELL STANDS DOWN","THE ANTIBODY OCCUPIES THE SITE AND BREAKS THE REACH",
             "THE CONJUGATED PAYLOAD IS CARRIED INTO THE TUMOUR CELL","DIRECT KILLING, AND THE IMMUNE SUPPRESSION REVERSED"];
  for(var i=0;i<4;i++)g+='<text class="cl" id="dlC'+i+'" x="'+(mob?56:16)+'" y="506">'+C[i]+'</text>';
  return g+'</svg>';
}
function scene(){return dlScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var q=function(s){return svg.querySelector(s)};
  var tum=q("#dlTum"),imm=q("#dlImm"),cd=q("#dlCd"),tig=q("#dlTig"),link=q("#dlLink"),ab=q("#dlAb"),
      drop=q("#dlDrop"),pay=q("#dlPay"),abl=q("#dlAbL"),fr=[q("#dlFr1"),q("#dlFr2"),q("#dlFr3")];
  var cap=[0,1,2,3].map(function(k){return q("#dlC"+k)});
  var LL=link.getTotalLength();link.style.strokeDasharray=LL+" "+LL;
  var LD=drop.getTotalLength();drop.style.strokeDasharray=LD+" "+LD;drop.style.strokeDashoffset=LD;
  var LF=fr.map(function(el){var L=el.getTotalLength();el.style.strokeDasharray=L+" "+L;el.style.strokeDashoffset=L;return L});
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    op(tum,b*seg(p,.02,.10));
    op(imm,b*seg(p,.04,.12));
    op(cd,b*seg(p,.08,.16));op(tig,b*seg(p,.10,.18));
    /* the reach: drawn in step 1, cut in step 2 */
    var on=seg(p,.16,.24),off=seg(p,.34,.42);
    link.style.strokeDashoffset=(LL*(1-on)).toFixed(1);op(link,b*on*(1-off));
    /* the immune cell dims while it is held, and comes back at the end */
    imm.style.setProperty("--dim",(1-0.55*on*(1-seg(p,.80,.90))).toFixed(3));
    /* the antibody comes down and sits on D1 */
    var ad=seg(p,.28,.40);
    ab.style.transform="translateY("+(-120*(1-ad)).toFixed(1)+"px)";op(ab,b*seg(p,.26,.34));
    op(abl,b*seg(p,.34,.42));
    /* the payload runs down into the tumour cell */
    var pd=seg(p,.52,.68);
    drop.style.strokeDashoffset=(LD*(1-pd)).toFixed(1);op(drop,b*seg(p,.50,.54)*(1-seg(p,.72,.80)));
    pay.setAttribute("cy",(206+(94)*pd).toFixed(1));op(pay,b*seg(p,.50,.54)*(1-seg(p,.68,.74)));
    /* the tumour cell breaks up */
    fr.forEach(function(el,k){var u=seg(p,.76+k*.03,.86+k*.03);el.style.strokeDashoffset=(LF[k]*(1-u)).toFixed(1);op(el,b*u)});
    tum.style.setProperty("--dim",(1-0.45*seg(p,.76,.92)).toFixed(3));
    var w=[[0,.25],[.25,.5],[.5,.75],[.75,1.01]];
    cap.forEach(function(cp,k){op(cp,b*(k===0?1:seg(p,w[k][0],w[k][0]+.04))*(k===3?1:(1-seg(p,w[k][1]-.04,w[k][1]))))});
  };
}

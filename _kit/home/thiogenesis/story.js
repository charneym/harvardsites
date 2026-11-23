/* The story scene (DB/BL/BY): Thiogenesis's mechanism as ONE continuous fine-line cell that fills the frame (thiogenesis.com,
   Science and Pipeline; news release 22 Oct 2026): the lysosome with its cystinosin exporters, cystine stored inside, the
   nucleus and a mitochondrion. Frame 0 is already a complete picture.
   Step 1 (trapped): cystinosin is defective (CTNS mutations), cystine accumulates in the lysosome.
   Step 2 (released): TTI-0102 is converted in the gut into cysteamine (and vitamin B5); cysteamine arrives as a steady,
     evenly spaced stream, not a spike, and enters the lysosome.
   Step 3 (cleared): the stored cystine is depleted and leaves the lysosome.
   Step 4 (restored): cysteine feeds glutathione; taurine and coenzyme A; the mitochondrion lights.
   Labels sit in open space with leaders that stop 8px short of the text (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560;
var CELL="M124 58C300 22 520 30 698 70C744 150 742 330 726 430C702 500 520 522 330 514C180 508 88 500 64 420C48 330 62 220 78 140C84 98 100 70 124 58Z";
var LY=[290,300,120],NU=[606,152,74],MI=[578,372];
var MITO="M470 404C452 382 470 338 520 322C572 304 640 300 676 322C704 340 698 378 660 398C620 418 552 432 506 426C490 424 478 416 470 404Z";
var CRIS="M492 404C500 384 506 372 514 382S522 404 530 400 538 352 548 362 552 404 562 398 568 346 578 352 584 398 594 392 600 342 610 346 616 392 626 386 632 340 642 344 648 384 658 376 664 346 676 350";
var EXIT="M402 332C430 352 452 366 478 380";
var CY=[[250,270,7,.2],[300,250,6,.9],[330,290,8,.4],[270,330,7,1.1],[318,340,6,.1],[240,312,5,.7],[350,320,6,1.3],[288,292,5,.5],[262,236,6,.3],[340,256,5,1.0],[230,350,6,.6],[300,372,7,.2],[350,360,5,.8],[214,284,5,.4],[276,214,5,1.2],[372,290,5,.9]];
var TP=[-50,-12,28,70,130,175,215,255];
var NCE=12,NEX=8,NGS=7;
function hexp(x,y,r,a){var s="";for(var k=0;k<6;k++){var t=a+k*Math.PI/3;s+=(k?"L":"M")+(x+r*Math.cos(t)).toFixed(1)+" "+(y+r*Math.sin(t)).toFixed(1)}return s+"Z"}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="mglow"><stop offset="0" stop-color="#f2645b" stop-opacity=".5"/><stop offset="1" stop-color="#f2645b" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+CELL+'"/>';
  g+='<path class="wmd sD" d="M'+(LY[0]+LY[2])+' '+LY[1]+'A'+LY[2]+' '+LY[2]+' 0 1 1 '+(LY[0]+LY[2]-.01)+' '+(LY[1]-.5)+'"/>';
  g+='<path class="wo sD" d="M'+(LY[0]+LY[2]-7)+' '+LY[1]+'A'+(LY[2]-7)+' '+(LY[2]-7)+' 0 1 1 '+(LY[0]+LY[2]-7.01)+' '+(LY[1]-.5)+'"/>';
  g+='<path class="wmd sD" d="M'+(NU[0]+NU[2])+' '+NU[1]+'A'+NU[2]+' '+NU[2]+' 0 1 1 '+(NU[0]+NU[2]-.01)+' '+(NU[1]-.5)+'"/>';
  g+='<path class="wmd sD" d="'+MITO+'"/><path class="wo sD" id="cris" d="'+CRIS+'"/>';
  g+='</g>';
  g+='<path class="mf" id="mf" d="'+MITO+'"/>';
  /* cystinosin exporters across the lysosomal membrane */
  g+='<g id="tps">';TP.forEach(function(d){var t=d*Math.PI/180,x=LY[0]+(LY[2]-3.5)*Math.cos(t),y=LY[1]+(LY[2]-3.5)*Math.sin(t);
    g+='<rect class="tp off" x="-4.5" y="-8" width="9" height="16" transform="translate('+x.toFixed(1)+' '+y.toFixed(1)+') rotate('+(d+90)+')"/>'});g+='</g>';
  /* stored cystine */
  g+='<g id="cys">';CY.forEach(function(c,k){g+='<path class="cy" data-k="'+k+'" d="'+hexp(c[0],c[1],c[2],c[3])+'"/>'});g+='</g>';
  /* the cysteamine stream, the exit stream, glutathione around the mitochondrion */
  g+='<path id="inP" class="gd" d="M0 300L'+(LY[0]-LY[2]+4)+' 300"/>';
  g+='<g id="ce">';for(i=0;i<NCE;i++)g+='<circle class="ce" r="3.2" cx="0" cy="300"/>';g+='</g>';
  g+='<path id="exP" class="gd" d="'+EXIT+'"/>';
  g+='<g id="ex">';for(i=0;i<NEX;i++)g+='<circle class="xo" r="2.6" cx="402" cy="332"/>';g+='</g>';
  g+='<circle class="halo" id="mh" cx="'+MI[0]+'" cy="'+MI[1]+'" r="150" fill="url(#mglow)"/>';
  g+='<g id="gs">';[[488,300],[536,292],[690,306],[712,360],[672,424],[600,446],[520,446]].forEach(function(q){g+='<circle class="gsh" r="4" cx="'+q[0]+'" cy="'+q[1]+'"/>'});g+='</g>';
  /* labels */
  if(!mob){
    g+='<g id="lLy"><path class="ld" d="M207 216L168 160"/><text class="t" x="104" y="148">LYSOSOME</text></g>';
    g+='<g id="lTp"><path class="ld" d="M367 206L388 120"/><text class="t" x="330" y="108">CYSTINOSIN (CTNS)</text></g>';
    g+='<g id="lCy"><path class="ld" d="M236 356L170 444"/><text class="t" x="104" y="462">CYSTINE</text></g>';
    g+='<g id="lNu"><text class="t" x="572" y="156">NUCLEUS</text></g>';
    g+='<g id="lMi"><path class="ld" d="M506 428L496 448"/><text class="t" x="420" y="468">MITOCHONDRION</text></g>';
    g+='<g id="lCe"><text class="t a2" x="74" y="280">CYSTEAMINE</text></g>';
    g+='<g id="lGs"><text class="t a2" x="440" y="270">GLUTATHIONE</text></g>';
  }else{
    g+='<g id="lLy"><path class="ld" d="M207 216L176 170"/><text class="t" x="96" y="150">LYSOSOME</text></g>';
    g+='<g id="lTp"></g><g id="lCy"></g><g id="lNu"></g>';
    g+='<g id="lMi"><path class="ld" d="M506 428L494 446"/><text class="t" x="330" y="470">MITOCHONDRION</text></g>';
    g+='<g id="lCe"></g><g id="lGs"></g>';
  }
  var ly=SCH-6,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CYSTINE BUILDS UP':'CYSTINOSIN FAILS · CYSTINE BUILDS UP IN THE LYSOSOME')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A STEADY SUPPLY':'TTI-0102 → TWO CYSTEAMINE + VITAMIN B5 · A STEADY SUPPLY')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CYSTINE DEPLETED':'STORED CYSTINE DEPLETED AND CARRIED OUT')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'GLUTATHIONE RESTORED':'CYSTEINE → GLUTATHIONE · TAURINE · COENZYME A')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),cys:$$("#cys .cy",svg),tps:$$("#tps .tp",svg),ce:$$("#ce .ce",svg),ex:$$("#ex .xo",svg),gs:$$("#gs .gsh",svg),
    mf:$("#mf",svg),mh:$("#mh",svg),cris:$("#cris",svg),
    lLy:$("#lLy",svg),lTp:$("#lTp",svg),lCy:$("#lCy",svg),lNu:$("#lNu",svg),lMi:$("#lMi",svg),lCe:$("#lCe",svg),lGs:$("#lGs",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var inP=$("#inP",svg),IL=inP.getTotalLength(),exP=$("#exP",svg),XL=exP.getTotalLength();
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.02,.2),s2=seg(p,.27,.45),s3=seg(p,.52,.72),s4=seg(p,.77,.95);
    /* 1. cystine accumulates: half is there from the start, the rest builds up; the exporters read as failed */
    E.cys.forEach(function(el,k){var show=k<8?1:seg(p,.02+.012*(k-8),.1+.012*(k-8));
      var gone=seg(p,.52+.012*(k%8),.62+.012*(k%8));var sc=1-gone*.9,c=CY[k];
      el.setAttribute("transform","translate("+c[0]+" "+c[1]+") scale("+sc.toFixed(3)+") translate("+(-c[0])+" "+(-c[1])+")");
      op(el,b*show*(1-gone))});
    E.tps.forEach(function(el){op(el,b)});
    op(E.lLy,b);op(E.lTp,b*(1-seg(p,.27,.33)));op(E.lCy,b*(1-seg(p,.55,.62)));op(E.lNu,b);op(E.lMi,b);
    /* 2. a steady, evenly spaced stream of cysteamine enters the lysosome (no spike) */
    var on2=seg(p,.25,.33)*(1-seg(p,.72,.8));
    E.ce.forEach(function(el,i){var f=((i/NCE)+p*7)%1;var q=inP.getPointAtLength(IL*f);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*on2*Math.min(1,f*8)*Math.min(1,(1-f)*8))});
    op(E.lCe,b*seg(p,.3,.38)*(1-seg(p,.72,.78)));
    /* 3. cystine is depleted and carried out of the lysosome */
    var on3=seg(p,.52,.58)*(1-seg(p,.9,.98));
    E.ex.forEach(function(el,i){var f=((i/NEX)+p*6)%1;var q=exP.getPointAtLength(XL*f);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*on3*Math.min(1,f*6)*Math.min(1,(1-f)*6))});
    /* 4. glutathione, taurine and CoA: the mitochondrion lights */
    op(E.mf,b*.85*s4);op(E.mh,b*s4);if(E.cris)E.cris.classList.toggle("lit",p>.8);
    E.gs.forEach(function(el,i){op(el,b*seg(p,.78+.02*i,.86+.02*i))});
    op(E.lGs,b*seg(p,.8,.88));
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}

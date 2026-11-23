/* The story scene (DB/BL/BY): VAR 200's mechanism as ONE continuous fine-line drawing that fills the frame
   (zyversa.com, Renal Lipids and Cholesterol Efflux Mediator VAR 200): a podocyte of the kidney's filter, its foot
   processes standing on the glomerular basement membrane over a capillary. Frame 0 is already a complete picture.
   Step 1 (trapped): cholesterol builds up in the podocyte (ABCA1/ABCG1 reduced); foot processes efface; protein leaks.
   Step 2 (arrives): VAR 200 rings arrive in a steady stream at the cell membrane.
   Step 3 (carried out): the rings leave carrying cholesterol, to HDL; the droplets are depleted.
   Step 4 (protected): the foot processes stand again and the leak stops.
   Labels sit in open space with leaders that stop short of the text (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=600;
var CELL="M150 330C120 250 130 140 210 92C290 46 470 40 560 88C640 130 660 250 620 330";
var NU=[470,176,60,42],HDL=[694,72,26];
var CH=[[226,160,8],[262,132,6],[250,200,9],[300,168,7],[214,246,7],[286,232,8],[330,210,6],[262,282,7],[316,276,6],[350,250,7],[236,118,5],[372,290,6],[196,200,6],[340,140,6]];
var TPF=[.84,.88,.92];
var NFT=14,FX0=158,FX1=622,FT=330,FB=387;
var NIN=4,NOUT=6,NLK=5,NAL=10;
var INP="M-6 200L128 200",OUTP="M392 44C470 14 590 12 664 56";
var LK=["M96 486L96 300","M664 486L664 300"];
function ring(){/* a small truncated cone, the cyclodextrin, drawn about 0,0 */
  return '<ellipse class="rg" cx="0" cy="-5" rx="9" ry="3"/><path class="rg" d="M-9 -5L-5.5 6M9 -5L5.5 6"/><path class="rg" d="M-5.5 6A5.5 1.8 0 0 0 5.5 6"/>'}
function feet(e){/* e=0 healthy interdigitating foot processes with slits; e=1 effaced into one flattened sheet */
  var w=(FX1-FX0)/NFT,gap=6*(1-e)+1,bot=FB,d="";
  for(var i=0;i<NFT;i++){var x0=FX0+i*w+gap/2,x1=FX0+(i+1)*w-gap/2,r=7;
    d+="M"+x0.toFixed(1)+" "+FT+"C"+x0.toFixed(1)+" "+(FT+18)+" "+x0.toFixed(1)+" "+(bot-r).toFixed(1)+" "+(x0+r).toFixed(1)+" "+bot.toFixed(1)+
       "L"+(x1-r).toFixed(1)+" "+bot.toFixed(1)+"C"+x1.toFixed(1)+" "+(bot-r).toFixed(1)+" "+x1.toFixed(1)+" "+(FT+18)+" "+x1.toFixed(1)+" "+FT}
  return d}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+CELL+'"/>';
  g+='<path class="wmd sD" d="M'+(NU[0]+NU[2])+' '+NU[1]+'A'+NU[2]+' '+NU[3]+' 0 1 1 '+(NU[0]+NU[2]-.01)+' '+(NU[1]-.5)+'"/>';
  g+='<path class="wo sD" d="M40 388H720M40 402H720"/>';                         /* glomerular basement membrane */
  g+='<path class="wmd sD" d="M40 440H720M40 528H720"/>';                         /* capillary walls */
  g+='<path class="wmd sD" d="M'+(HDL[0]+HDL[2])+' '+HDL[1]+'A'+HDL[2]+' '+HDL[2]+' 0 1 1 '+(HDL[0]+HDL[2]-.01)+' '+(HDL[1]-.5)+'"/>';
  g+='</g>';
  g+='<path class="ft" id="ft" d="'+feet(0)+'"/>';
  g+='<circle class="hf" id="hf" cx="'+HDL[0]+'" cy="'+HDL[1]+'" r="'+(HDL[2]-6)+'"/>';
  /* ABCA1 / ABCG1 transporters on the membrane (placed on the path in storyDraw) */
  g+='<g id="tps">';TPF.forEach(function(f){g+='<rect class="tp off" data-f="'+f+'" x="-4.5" y="-8" width="9" height="16"/>'});g+='</g>';
  /* stored cholesterol */
  g+='<g id="chs">';CH.forEach(function(c,k){g+='<circle class="chl" data-k="'+k+'" cx="'+c[0]+'" cy="'+c[1]+'" r="'+c[2]+'"/>'});g+='</g>';
  /* albumin in the capillary, and the leak */
  g+='<g id="al">';for(i=0;i<NAL;i++)g+='<circle class="alb" r="3.4" cx="0" cy="484"/>';g+='</g>';
  LK.forEach(function(d,j){g+='<path id="lk'+j+'" class="gd" d="'+d+'"/>'});
  g+='<g id="lks">';for(i=0;i<NLK*2;i++)g+='<circle class="alb lkd" r="3" cx="96" cy="480"/>';g+='</g>';
  /* VAR 200 rings: in to the membrane, out to HDL carrying cholesterol */
  g+='<path id="inP" class="gd" d="'+INP+'"/><path id="outP" class="gd" d="'+OUTP+'"/>';
  g+='<g id="vin">';for(i=0;i<NIN;i++)g+='<g class="vr" transform="translate(-20 200)">'+ring()+'</g>';g+='</g>';
  g+='<g id="vout">';for(i=0;i<NOUT;i++)g+='<g class="vr" transform="translate(392 44)">'+ring()+'<circle class="cin" cx="0" cy="0" r="2.6"/></g>';g+='</g>';
  /* labels */
  if(!mob){
    g+='<g id="lPo"><path class="ld" d="M130 92L168 116"/><text class="t" x="56" y="86">PODOCYTE</text></g>';
    g+='<g id="lNu"><text class="t" x="438" y="180">NUCLEUS</text></g>';
    g+='<g id="lCh"><text class="t a2" x="196" y="318">CHOLESTEROL</text></g>';
    g+='<g id="lTp"><text class="t" x="664" y="218">ABCA1</text><text class="t" x="664" y="234">ABCG1</text></g>';
    g+='<g id="lGb"><text class="t" x="440" y="426">BASEMENT MEMBRANE</text></g>';
    g+='<g id="lCa"><text class="t" x="40" y="554">CAPILLARY</text></g>';
    g+='<g id="lHd"><text class="t" x="680" y="120">HDL</text></g>';
    g+='<g id="lVr"><text class="t a2" x="16" y="180">VAR 200</text></g>';
  }else{
    g+='<g id="lPo"><text class="t" x="20" y="60">PODOCYTE</text></g>';
    g+='<g id="lNu"></g><g id="lCh"></g><g id="lTp"></g><g id="lGb"></g>';
    g+='<g id="lCa"></g>';
    g+='<g id="lHd"><text class="t" x="664" y="134">HDL</text></g>';
    g+='<g id="lVr"></g>';
  }
  var ly=SCH-6,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CHOLESTEROL BUILDS UP':'ABCA1 / ABCG1 REDUCED · CHOLESTEROL BUILDS UP · PROTEIN LEAKS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'VAR 200 ARRIVES':'VAR 200 REACHES THE PODOCYTE MEMBRANE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CHOLESTEROL TO HDL':'CHOLESTEROL TAKEN INTO THE RING · HANDED TO HDL')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PROTEINURIA REDUCED':'FOOT PROCESSES PROTECTED · PROTEINURIA REDUCED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var cell=$("#scBase .wl",svg),CL=cell.getTotalLength();
  $$("#tps .tp",svg).forEach(function(r){var f=+r.getAttribute("data-f"),q=cell.getPointAtLength(CL*f),q2=cell.getPointAtLength(CL*f+1),a=Math.atan2(q2.y-q.y,q2.x-q.x)*180/Math.PI;
    r.setAttribute("transform","translate("+q.x.toFixed(1)+" "+q.y.toFixed(1)+") rotate("+(a+90).toFixed(1)+")")});
  var E={base:dl("#scBase .sD"),chs:$$("#chs .chl",svg),tps:$$("#tps .tp",svg),al:$$("#al .alb",svg),lks:$$("#lks .lkd",svg),
    vin:$$("#vin .vr",svg),vout:$$("#vout .vr",svg),ft:$("#ft",svg),hf:$("#hf",svg),
    lPo:$("#lPo",svg),lNu:$("#lNu",svg),lCh:$("#lCh",svg),lTp:$("#lTp",svg),lGb:$("#lGb",svg),lCa:$("#lCa",svg),lHd:$("#lHd",svg),lVr:$("#lVr",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var inP=$("#inP",svg),IL=inP.getTotalLength(),outP=$("#outP",svg),OL=outP.getTotalLength(),LP=[$("#lk0",svg),$("#lk1",svg)],LL=LP[0].getTotalLength();
  var lastB=-1,lastE=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function at(el,x,y){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s4=seg(p,.77,.92);
    /* foot processes: efface during step 1, stand again in step 4 */
    var e=seg(p,.04,.2)*(1-s4);e=Math.round(e*60)/60;if(e!==lastE){lastE=e;E.ft.setAttribute("d",feet(e))}
    op(E.ft,b);
    /* 1. cholesterol accumulates (half there from the start); 3. it is depleted */
    E.chs.forEach(function(el,k){var show=k<6?1:seg(p,.03+.014*(k-6),.1+.014*(k-6));var gone=seg(p,.52+.014*(k%9),.6+.014*(k%9));
      var c=CH[k];el.setAttribute("r",(c[2]*(1-gone*.85)).toFixed(2));op(el,b*show*(1-gone))});
    E.tps.forEach(function(el){op(el,b)});
    op(E.lPo,b);op(E.lNu,b);op(E.lCh,b*(1-seg(p,.54,.62)));op(E.lTp,b);op(E.lGb,b);op(E.lCa,b);op(E.lHd,b);
    /* albumin drifts in the capillary; while the filter is damaged some leaks up through it */
    E.al.forEach(function(el,i){var f=((i/NAL)+p*2.2)%1,x=40+680*f,y=470+((i*37)%40);el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*Math.min(1,f*10)*Math.min(1,(1-f)*10))});
    var leak=seg(p,.1,.2)*(1-seg(p,.8,.9));
    E.lks.forEach(function(el,i){var j=i%2,f=((Math.floor(i/2)/NLK)+p*5)%1,q=LP[j].getPointAtLength(LL*f);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*leak*Math.min(1,f*6)*Math.min(1,(1-f)*5))});
    /* 2. a steady stream of VAR 200 rings reaches the membrane */
    var on2=seg(p,.25,.33)*(1-seg(p,.7,.78));
    E.vin.forEach(function(el,i){var f=((i/NIN)+p*6)%1,q=inP.getPointAtLength(IL*f);at(el,q.x,q.y);op(el,b*on2*Math.min(1,f*8)*Math.min(1,(1-f)*6))});
    op(E.lVr,b*seg(p,.28,.36)*(1-seg(p,.72,.78)));
    /* 3. rings leave carrying cholesterol to HDL, which fills */
    var on3=seg(p,.52,.58)*(1-seg(p,.86,.94));
    E.vout.forEach(function(el,i){var f=((i/NOUT)+p*5)%1,q=outP.getPointAtLength(OL*f);at(el,q.x,q.y);op(el,b*on3*Math.min(1,f*6)*Math.min(1,(1-f)*5))});
    op(E.hf,b*.9*seg(p,.56,.74));
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}

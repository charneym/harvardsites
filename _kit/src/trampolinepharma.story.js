/* The story scene: an engraved lab plate in two halves. Left, the contact between one engineered T cell and one tumor cell, drawn
   in section at cell scale: the T cell membrane above with its cytoplasm, the tumor cell membrane below, an MHC molecule
   presenting a tumor antigen, the T cell receptor that reads it, then the CD8a co-receptor binding the same MHC, then the MyD88
   signalling domain fused to its tail switching on inside the T cell. Right, the consequence the company reports, drawn
   qualitatively with no numbers: antitumor activity over time for unmodified TILs and for engineered ones.
   Facts: TrAMPoline's NIH Phase II abstract and their own site. */
var TP_T0=148,TP_T1=404,TP_X0=52,TP_X1=432;
function tpMem(y,amp,ph){var d="M"+TP_X0+" "+y;for(var x=TP_X0;x<=TP_X1;x+=8)d+="L"+x+" "+(y+amp*Math.sin(x/30+ph)).toFixed(1);return d}
function tpCurve(x0,x1,base,peak,decay){var d="";if(x1<=x0+1)x1=x0+1;for(var x=x0;x<=x1;x+=4){var u=(x-x0)/(x1-x0);
  var y=peak*(1-Math.exp(-u*7))*Math.exp(-u*decay);d+=(x===x0?"M":"L")+x+" "+(base-y).toFixed(1)}return d}
function scene(){
  var mob=MOBILE(),fs=mob?22:12,cs=mob?15:13;
  /* phones get the same plate stacked into a near-square frame: the synapse on top, the plot below it (DB, CW) */
  var VB=mob?"0 0 560 726":"0 0 800 500";
  var SW=mob?' transform="translate(120,6) scale(.66)"':"",PT=mob?' transform="translate(-403.2,263.4) scale(.9)"':"";
  var caps=["TUMOR ANTIGEN ON MHC · READ BY THE T CELL RECEPTOR","CD8α · BINDS THE SAME MHC, TIGHTENING THE GRIP",
            "MyD88 · FUSED INSIDE, SWITCHED ON ONLY BY THAT CONTACT","ACTIVITY THAT LASTS · LESS EXHAUSTION, LESS IL-2"];
  var s='<svg viewBox="'+VB+'" role="img" aria-label="Lab plate: a tumor antigen on MHC read by a T cell receptor, the CD8-alpha co-receptor binding the same molecule, a fused MyD88 domain switching on inside the T cell, and a qualitative curve of antitumor activity over time">';
  var GW=mob?540:780,GH=mob?688:452,g="";
  for(var gx=40;gx<=GW;gx+=37)g+='<path class="gd" d="M'+gx+' 24V'+GH+'"/>';
  for(var gy=24;gy<=GH;gy+=36)g+='<path class="gd" d="M40 '+gy+'H'+GW+'"/>';s+=g;
  /* --- the two cells in section --- */
  s+='<g id="tpSynW"'+SW+'>';
  s+='<g id="tpSyn"><path class="mb" d="'+tpMem(TP_T0,6,0)+'"/><path class="mb2" d="'+tpMem(TP_T0-13,6,0)+'"/>';
  s+='<path class="mb" d="'+tpMem(TP_T1,6,2.1)+'"/><path class="mb2" d="'+tpMem(TP_T1+13,6,2.1)+'"/>';
  /* cytoplasm texture, well away from every label */
  var cy="";for(var i=0;i<9;i++){var x=TP_X0+18+i*42;cy+='M'+x+' 56C'+(x+14)+' 44 '+(x+26)+' 66 '+(x+40)+' 54'}
  s+='<path class="mb2" d="'+cy+'"/>';
  var cy2="";for(var j=0;j<6;j++){var x2=TP_X0+186+j*42;cy2+='M'+x2+' 452C'+(x2+14)+' 440 '+(x2+26)+' 462 '+(x2+40)+' 450'}
  s+='<path class="mb2" d="'+cy2+'"/>';
  s+='<text class="nm2" x="'+TP_X0+'" y="'+(TP_T0-30)+'" style="font-size:'+fs+'px">T CELL</text>';
  s+='<text class="nm2" x="'+TP_X0+'" y="'+(TP_T1+34+fs)+'" style="font-size:'+fs+'px">TUMOR CELL</text></g>';
  /* --- MHC presenting the antigen, on the tumor cell --- */
  s+='<g id="tpMhc"><path class="sk" d="M180 '+TP_T1+'V332"/><path class="sk" d="M216 '+TP_T1+'V332"/>';
  s+='<path class="dom" d="M164 332H232V296H164Z"/><path class="ant" d="M178 296H218"/>';
  s+='<text class="a" x="152" y="294" text-anchor="end" style="font-size:'+fs+'px">ANTIGEN</text>';
  s+='<text x="152" y="'+(294+fs*1.7)+'" text-anchor="end" style="font-size:'+fs+'px">MHC</text></g>';
  /* --- the T cell receptor reaching down to it --- */
  s+='<g id="tpTcr"><path class="sk" d="M176 '+TP_T0+'V204"/><path class="sk" d="M220 '+TP_T0+'V204"/>';
  s+='<path class="dom" d="M160 204H236V256H160Z"/><path class="read" d="M198 256V292"/>';
  s+='<text x="248" y="234" style="font-size:'+fs+'px">TCR</text></g>';
  /* --- CD8a co-receptor, binding the same MHC (step 2) --- */
  s+='<g id="tpCd8"><path class="sk" d="M312 '+TP_T0+'V250"/><path class="dom a2" d="M284 250H344V300H284Z"/>';
  s+='<path class="bind" d="M284 300C268 320 248 326 234 322"/>';
  s+='<text class="a" x="358" y="280" style="font-size:'+fs+'px">CD8α</text></g>';
  /* --- MyD88 fused to its intracellular tail (step 3) --- */
  s+='<g id="tpMyd"><path class="sk" d="M312 '+(TP_T0-13)+'V116"/><path class="dom a2" d="M282 72H342V116H282Z"/>';
  s+='<text class="a" x="356" y="98" style="font-size:'+fs+'px">MyD88</text>';
  s+='<g id="tpSig"><circle class="pulse" cx="312" cy="94" r="38"/><circle class="pulse" cx="312" cy="94" r="64"/>';
  s+='<path class="sigl" d="M312 46V28M268 58L254 42M356 58L370 42"/></g></g>';
  s+='</g>';
  /* --- right: antitumor activity over time (qualitative, no values) --- */
  s+='<g id="tpPlot"'+PT+'><path class="ax" d="M488 404H772M488 404V112"/>';
  s+='<text x="488" y="94" style="font-size:'+fs+'px">ANTITUMOR ACTIVITY</text>';
  s+='<text x="772" y="'+(404+fs*(mob?2.6:2.2))+'" text-anchor="end" style="font-size:'+fs+'px">TIME AFTER TRANSFER</text>';
  s+='<path id="tpC0" class="cv0" d=""/><path id="tpC1" class="cv1" d=""/>';
  s+='<text id="tpL0" x="612" y="378" style="font-size:'+fs+'px">UNMODIFIED TIL</text>';
  s+='<text id="tpL1" class="a" x="588" y="166" style="font-size:'+fs+'px">ENGINEERED TIL</text></g>';
  caps.forEach(function(t,i){s+='<text class="cap" id="tpC'+(i+2)+'" x="'+(mob?280:400)+'" y="'+(mob?716:492)+'" text-anchor="middle" style="font-size:'+cs+'px">'+t+'</text>'});
  return s+"</svg>";
}
function storyDraw(svg){
  var E={syn:$("#tpSyn",svg),mhc:$("#tpMhc",svg),tcr:$("#tpTcr",svg),cd8:$("#tpCd8",svg),myd:$("#tpMyd",svg),sig:$("#tpSig",svg),
    plot:$("#tpPlot",svg),c0:$("#tpC0",svg),c1:$("#tpC1",svg),l0:$("#tpL0",svg),l1:$("#tpL1",svg),
    cap:[0,1,2,3].map(function(i){return $("#tpC"+(i+2),svg)})};
  return function(p,b){
    if(!E.c0.isConnected)return;
    var s1=seg(p,.02,.14),s2=seg(p,.26,.40),s3=seg(p,.50,.64),s4=seg(p,.74,.88);
    svg.style.opacity=(.3+.7*b).toFixed(3);
    E.syn.style.opacity=b.toFixed(3);
    E.mhc.style.opacity=(b*s1).toFixed(3);E.tcr.style.opacity=(b*s1).toFixed(3);
    E.cd8.style.opacity=(b*s2).toFixed(3);E.myd.style.opacity=(b*s3).toFixed(3);
    /* the signal only pulses once MyD88 is on */
    var pu=.4+.6*(.5-.5*Math.cos(p*34));E.sig.style.opacity=(b*s3*pu).toFixed(3);
    /* the plot stands as the right half of the plate from the start, and fills in over steps 3-4 */
    E.plot.style.opacity=(b*(.3+.7*s4)).toFixed(3);
    var x1=488+284*Math.max(s3*.22,s4);
    E.c0.setAttribute("d",tpCurve(488,x1,404,142,3.4));
    E.c1.setAttribute("d",tpCurve(488,x1,404,246,.42));
    E.l0.style.opacity=(b*s4).toFixed(3);E.l1.style.opacity=(b*s4).toFixed(3);
    var W=[[0,0,.24,.26],[.26,.29,.49,.51],[.51,.54,.73,.75],[.75,.78,2,2]];
    E.cap.forEach(function(el,k){var a=k===0?1:seg(p,W[k][0],W[k][1]),o=k===3?0:seg(p,W[k][2],W[k][3]);
      el.style.opacity=(b*a*(1-o)).toFixed(3)});
  };
}

/* The story scene (BL/BY/DB): Rittinghaus's "Reinraum-im-Grauraum" concept (rittinghaus-gmbh.de > Medizintechnik >
   Reinraumkonzept / Reinraumproduktion / Produktsicherheit), drawn as ONE fine-line elevation kept on screen for all four steps.
   Step 1 (Grauraum): the injection moulding machine stands OUTSIDE the cleanroom, so tool changes and maintenance never
     contaminate it.
   Step 2 (Übergabe): an enclosed conveyor carries the parts from the opening mould through the wall; cleanroom air streams out
     through it the whole time.
   Step 3 (Reinraum): the cleanroom, DIN ISO 14644 class 7: filtered air from the ceiling; temperature, humidity and pressure
     controlled and documented.
   Step 4 (Charge): packed in the cleanroom; every batch is built by barcode scan and linked to its SPC data. */
var SCW=760,SCH=520;
function rhScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  /* the grey-room hall (always) */
  g+='<path class="hall sD" d="M20 90H740V452H20Z"/>';
  g+='<text class="t" x="36" y="'+(mob?124:118)+'">GRAURAUM</text>';
  /* step 1: the machine: hopper, barrel, fixed platen, mould, moving platen, clamp, tie bars, cabinet */
  g+='<g id="rhMac"><path class="mac mD" d="M50 280H70V310H50Z"/><path class="mac mD" d="M70 286H200V304H70Z"/>'+
     '<path class="mac mD" d="M90 226H130L118 286H102Z"/>'+
     '<path class="mac mD" d="M200 244H214V344H200Z"/><path class="mac mD" d="M250 244H264V344H250Z"/>'+
     '<path class="mac mD" d="M214 256H330M214 332H330"/><path class="mac mD" d="M264 276H340V312H264Z"/>'+
     '<path class="mac mD" d="M50 352H214V392H50Z"/><path class="mac mD" d="M262 352H344V392H262Z"/><path class="mac mD" d="M64 366H140M64 378H112"/></g>';
  g+='<path id="rhTool" class="tool" d="M214 262H232V326H214ZM232 262H250V326H232Z"/>';
  /* step 2: the chute and the enclosed conveyor through the wall, with cleanroom air streaming out through it */
  g+='<g id="rhTun"><path class="tun cD" d="M228 336V404M244 336V404"/><path class="tun cD" d="M244 404H568M228 440H568M228 404V440"/><path class="tun cD" d="M568 404V412M568 432V440"/></g>';
  g+='<g id="rhAir">';for(i=0;i<5;i++){var ax=530-i*64;g+='<path class="air" d="M'+ax+' 413H'+(ax-12)+'M'+(ax-7)+' 409L'+(ax-12)+' 413L'+(ax-7)+' 417"/>'}g+='</g>';
  var parts='';for(i=0;i<6;i++){parts+='<path class="part" id="rhP'+i+'" d="M-7 -5H7V5H-7Z"/>'}
  g+='<g id="rhParts">'+parts+'</g>';
  /* the cleanroom inside the hall (always), its wall leaving a passage for the conveyor */
  g+='<path class="wall sD" d="M380 452V440M380 404V150H720V452"/>';
  g+='<text class="t" x="392" y="140">REINRAUM</text>';
  /* step 3: filter ceiling, filtered air downwards */
  g+='<g id="rhFfu"><path class="ffu fD" d="M380 150H720V174H380Z"/>';for(i=0;i<11;i++){g+='<path class="ffu fD" d="M'+(396+i*30)+' 174L'+(412+i*30)+' 150"/>'}g+='</g>';
  var fl='';[420,470,520,610,660,700].forEach(function(x){var y1=x<580?392:348;fl+='<path class="flow" d="M'+x+' 186V'+y1+'"/><path class="flow" d="M'+(x-5)+' '+(y1-7)+'L'+x+' '+y1+'L'+(x+5)+' '+(y1-7)+'"/>'});
  g+='<g id="rhFlow">'+fl+'</g>';
  /* step 4: the box in the cleanroom, the barcode batch label */
  g+='<g id="rhBox"><path class="box xD" d="M588 372V452H688V372"/><path class="box xD" d="M588 372L576 362M688 372L700 362"/></g>';
  var bc='';[0,3,5,9,11,14,18,20,23,27,29,33,36,38,42,45,48,50].forEach(function(dx,j){bc+='M'+(612+dx)+' 388V'+(j%3?410:414)});
  g+='<g id="rhBar"><path class="lbl" d="M604 380H672V420H604Z"/><path class="bar" d="'+bc+'"/></g>';
  /* labels, per step, in the band above the hall: each >= 8px clear of every stroke (DR3) */
  function L(id,cl,a,b){return '<g id="'+id+'"><text class="t '+cl+'" x="20" y="'+(mob?40:36)+'">'+a+'</text><text class="t" x="20" y="'+(mob?72:60)+'">'+b+'</text></g>'}
  g+=mob?L("rhL1","s1","MASCHINE IM GRAURAUM","WARTUNG AUSSERHALB"):L("rhL1","s1","DIE SPRITZGIESSMASCHINE STEHT IM GRAURAUM","WERKZEUGWECHSEL UND WARTUNG AUSSERHALB DES REINRAUMS");
  g+=mob?L("rhL2","s2","GEKAPSELTES BAND","MIT REINRAUMLUFT UMSPÜLT"):L("rhL2","s2","GEKAPSELTES TRANSPORTBAND DURCH DIE WAND","PERMANENT UMSPÜLT VON AUSSTRÖMENDER REINRAUMLUFT");
  g+=mob?L("rhL3","s1","ISO 14644 · KLASSE 7","KLIMA GEREGELT"):L("rhL3","s1","REINRAUM NACH DIN ISO 14644, KLASSE 7","TEMPERATUR, LUFTFEUCHTE UND DRÜCKE GEREGELT UND DOKUMENTIERT");
  g+=mob?L("rhL4","s2","CHARGE PER BARCODE","RÜCKVERFOLGBAR"):L("rhL4","s2","VERPACKT IM REINRAUM, CHARGE PER BARCODE-SCAN","SPC-DATEN JE CHARGE, LÜCKENLOS RÜCKVERFOLGBAR");
  /* step captions */
  g+='<g id="lb1"><text class="a" x="20" y="500">1 · GRAURAUM</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="500">2 · ÜBERGABE</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="500">3 · REINRAUM</text></g>';
  g+='<g id="lb4"><text class="a" x="20" y="500">4 · CHARGE</text></g>';
  return g+'</svg>';
}
function scene(){return rhScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),mac:dl(".mD"),tool:$("#rhTool",svg),tun:dl(".cD"),air:$("#rhAir",svg),airs:$$("#rhAir path",svg),parts:$$(".part",svg),ffu:dl(".fD"),flow:$("#rhFlow",svg),
    box:dl(".xD"),bar:$("#rhBar",svg),L1:$("#rhL1",svg),L2:$("#rhL2",svg),L3:$("#rhL3",svg),L4:$("#rhL4",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg),tt:[].slice.call(svg.children).filter(function(n){return n.tagName==="text"})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.tt.forEach(function(t){op(t,b)})}
    /* step 1: the machine draws in; the mould shows in the accent */
    draw(E.mac,b*seg(p,.02,.16));
    op(E.tool,b*seg(p,.1,.18));
    op(E.L1,b*seg(p,.04,.1)*(1-seg(p,.22,.25)));
    /* step 2: chute + tunnel, air streaming out (to the left), parts travelling in */
    draw(E.tun,b*seg(p,.27,.36));
    op(E.air,b*seg(p,.32,.38)*(1-.6*seg(p,.75,.8)));
    var ap=(p*9)%1;E.airs.forEach(function(a){a.setAttribute("transform","translate("+(-ap*64).toFixed(1)+" 0)")});
    E.parts.forEach(function(pt,i){
      var a0=.34+i*.025,s=seg(p,a0+.03,a0+.16),x=236+(560-236)*s,y=426;
      if(p<a0+.03){y=332+94*seg(p,a0,a0+.03)}
      var d=seg(p,.78+i*.015,.85+i*.015);if(d>0){x=560+(614+(i%3)*22-560)*d;y=426+(444-(i>2?10:0)-426)*d}
      pt.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");
      op(pt,b*seg(p,a0,a0+.02)*(1-seg(p,.88,.92)));
    });
    op(E.L2,b*seg(p,.3,.36)*(1-seg(p,.47,.5)));
    /* step 3: the filter ceiling and the filtered air coming down */
    draw(E.ffu,b*seg(p,.52,.6));
    op(E.flow,b*seg(p,.56,.64));
    op(E.L3,b*seg(p,.56,.62)*(1-seg(p,.72,.75)));
    /* step 4: the box, the parts dropping in, the barcode */
    draw(E.box,b*seg(p,.77,.84));
    op(E.bar,b*seg(p,.88,.95));
    op(E.L4,b*seg(p,.79,.85));
    op(E.l1,b*seg(p,0,.05)*(1-seg(p,.22,.25)));op(E.l2,b*seg(p,.27,.32)*(1-seg(p,.47,.5)));op(E.l3,b*seg(p,.52,.57)*(1-seg(p,.72,.75)));op(E.l4,b*seg(p,.77,.82));
  };
}

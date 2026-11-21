/* The story scene (BL/BY/DB): ONE engraved scene kept on screen for all four steps. An antibody binding site drawn as its two
   protein domains (light chain in bone, heavy chain in the Mabswitch red) hinged at the bottom, gripping its antigen (gold) in the
   cleft between their loops. Step 2 the UNASMA switch module is inserted between the two domains. Step 3 a small-molecule trigger
   docks into the module. Step 4 the module changes the geometry of the binding site, the domains splay and the antigen is released.
   Sources: mabswitch.com (Technology: UNASMA™ — Universal Allosteric-linker and Switch Module for Antibodies). Schematic, not to
   scale. Driven by the scrubbed story progress. */
var GS={HX:400,HY:486,DOF:108,TIP:-340,AG:[400,136],AR:70};
function gsRuff(cx,cy,r,k,ph){var s='',i,n=96;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,rr=r*(1+k*Math.sin(11*t+ph)+k*.6*Math.sin(7*t+ph*2));
  s+=(i?'L':'M')+(cx+rr*Math.cos(t)).toFixed(1)+' '+(cy+rr*Math.sin(t)).toFixed(1)}return s+'Z'}
/* one immunoglobulin domain, drawn around its own hinge at (0,0) and reaching up to GS.TIP: an engraved beta sandwich with
   three loops at the top (the CDRs that touch the antigen) */
function gsDom(cls,sg){var T=GS.TIP,w=56,tw=40,s='<g class="dm '+cls+'">';
  /* an immunoglobulin domain: a barrel that swells at mid-height and tapers to the loops at the tip */
  s+='<path class="do sD" d="M'+(-w*.72)+' -18C'+(-w-4)+' -70 '+(-w)+' -170 '+(-tw-6)+' '+(T+56)+
     'C'+(-tw-2)+' '+(T+12)+' '+(tw+2)+' '+(T+12)+' '+(tw+6)+' '+(T+56)+
     'C'+w+' -170 '+(w+4)+' -70 '+(w*.72)+' -18C'+(w*.44)+' -2 '+(-w*.44)+' -2 '+(-w*.72)+' -18Z"/>';
  /* beta strands running the length of the barrel */
  [-30,-10,10,30].forEach(function(x,i){var top=T+70+Math.abs(x)*.7;
    s+='<path class="ds sD" d="M'+(x*.86)+' -34C'+(x-8*sg)+' -140 '+(x+7*sg)+' -236 '+(x*.52)+' '+top.toFixed(0)+'"/>'});
  /* the loops at the tip: the part that touches the antigen */
  [[-22,12],[0,14],[22,12]].forEach(function(l){
    s+='<path class="dl sD" d="M'+(l[0]-l[1])+' '+(T+58)+'A'+l[1]+' '+(l[1]*1.35)+' 0 0 1 '+(l[0]+l[1])+' '+(T+58)+'"/>'});
  /* the hinge end, where the switch module is inserted */
  s+='<path class="dh sD" d="M'+(-w*.5)+' -10L'+(w*.5)+' -10"/>';
  return s+'</g>'}
/* the UNASMA switch module: an engraved barrel between the two domains, with a socket on its lower face */
function gsMod(){var s='<g class="mod" id="mod">';
  s+='<path class="mo" d="M-76 -40H76A12 12 0 0 1 88 -28V28A12 12 0 0 1 76 40H-76A12 12 0 0 1 -88 28V-28A12 12 0 0 1 -76 -40Z"/>';
  s+='<path class="mi" d="M-64 -26H64M-64 0H64M-64 26H64"/>';
  [-48,-18,18,48].forEach(function(x){s+='<path class="mh" d="M'+x+' -38C'+(x+16)+' -14 '+(x-16)+' 14 '+x+' 38"/>'});
  s+='<path class="ms" d="M-18 40V54A18 18 0 0 0 18 54V40"/>';
  return s+'</g>'}
/* the small-molecule trigger: an engraved hexagon with a tail */
function gsTrig(){var p='',i;for(i=0;i<6;i++){var a=(i*60-30)*Math.PI/180;p+=(i?'L':'M')+(21*Math.cos(a)).toFixed(1)+' '+(21*Math.sin(a)).toFixed(1)}
  return '<g class="trg" id="trg"><circle class="tg0" r="40"/><path class="tg1" d="'+p+'Z"/><path class="tg2" d="M0 -21V21M-18.2 -10.5L18.2 10.5"/><circle class="tg3" cy="-21" r="5"/></g>'}
function scene(){
  var mob=MOBILE(),g='',A=GS.AG;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="agg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#dea840" stop-opacity=".3"/><stop offset="1" stop-color="#dea840" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="rdg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff3b35" stop-opacity=".22"/><stop offset="1" stop-color="#ff3b35" stop-opacity="0"/></radialGradient>'+
     '<linearGradient id="bfd" gradientUnits="userSpaceOnUse" x1="0" y1="20" x2="0" y2="660"><stop offset="0" stop-color="#f3f1ee" stop-opacity=".25"/><stop offset=".3" stop-color="#f3f1ee"/><stop offset=".85" stop-color="#f3f1ee"/><stop offset="1" stop-color="#f3f1ee" stop-opacity=".2"/></linearGradient>'+
     '<linearGradient id="rfd" gradientUnits="userSpaceOnUse" x1="0" y1="20" x2="0" y2="660"><stop offset="0" stop-color="#ff3b35" stop-opacity=".25"/><stop offset=".3" stop-color="#ff3b35"/><stop offset=".85" stop-color="#ff3b35"/><stop offset="1" stop-color="#ff3b35" stop-opacity=".2"/></linearGradient></defs>';
  g+='<g id="scBase">';
  g+='<circle class="halo" cx="'+GS.HX+'" cy="310" r="280" fill="url(#rdg)"/>';
  g+='<g id="dL" class="lt">'+gsDom("l",1)+'</g><g id="dH" class="hv">'+gsDom("h",-1)+'</g>';
  g+='</g>';
  g+='<g id="scMove">';
  g+='<g id="ag"><circle class="agl" cx="'+A[0]+'" cy="'+A[1]+'" r="104" fill="url(#agg)"/>'+
     '<path class="ago" d="'+gsRuff(A[0],A[1],GS.AR,.05,.6)+'"/><path class="agi" d="'+gsRuff(A[0],A[1],GS.AR*.64,.04,2.1)+'"/>'+
     '<circle class="agc" cx="'+(A[0]-8)+'" cy="'+(A[1]+5)+'" r="16"/></g>';
  g+=gsMod()+gsTrig();
  g+='</g>';
  /* labels, one set per step; placed in the empty margins so no leader crosses the figure (CY) */
  var LX=mob?24:36,BY=mob?534:532,BY2=mob?556:550;
  g+='<g id="lb1"><text class="a gd" x="'+LX+'" y="'+(mob?44:40)+'">ANTIGEN</text>'+
     '<path class="ldr" d="M'+(mob?210:130)+' '+(mob?36:34)+'L'+(GS.AG[0]-GS.AR-6)+' '+(GS.AG[1]-18)+'"/>'+
     '<text class="a" x="400" y="'+BY+'" text-anchor="middle">BINDING SITE \u00b7 TWO PROTEIN DOMAINS</text>'+
     (mob?'':'<text class="t" x="400" y="'+BY2+'" text-anchor="middle">ONE FROM THE LIGHT CHAIN, ONE FROM THE HEAVY CHAIN</text>')+'</g>';
  g+='<g id="lb2"><text class="a rd" x="'+LX+'" y="'+(mob?300:296)+'">UNASMA\u2122 SWITCH MODULE</text>'+
     (mob?'':'<text class="t" x="'+LX+'" y="316">AN ALLOSTERIC MODULATOR DOMAIN</text>')+
     '<path class="ldr" d="M'+(mob?250:230)+' '+(mob?316:330)+'L'+(GS.HX-96)+' '+(GS.HY-92)+'"/></g>';
  g+='<g id="lb3"><text class="a gd" x="400" y="'+BY+'" text-anchor="middle">SMALL-MOLECULE TRIGGER</text>'+
     (mob?'':'<text class="t" x="400" y="'+BY2+'" text-anchor="middle">ADDED OR REMOVED AT PHYSIOLOGICAL CONDITIONS</text>')+'</g>';
  g+='<g id="lb4"><text class="a rd" x="'+LX+'" y="'+(mob?44:40)+'">AFFINITY SWITCHED OFF</text>'+
     (mob?'':'<text class="t" x="'+LX+'" y="60">THE BINDING SITE OPENS \u00b7 THE TARGET IS RELEASED</text>')+'</g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),halo:$(".halo",svg),mv:$("#scMove",svg),
    dL:$("#dL",svg),dH:$("#dH",svg),mod:$("#mod",svg),trg:$("#trg",svg),ag:$("#ag",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.halo,b);op(E.mv,b)}
    var ins=seg(p,.22,.40),dock=seg(p,.50,.66),flip=seg(p,.70,.86),rel=seg(p,.76,.96);
    /* the two domains hinge apart as the switch changes the geometry of the binding site */
    var th=10-17*flip,lift=10*ins;
    E.dL.setAttribute("transform","translate("+(GS.HX-GS.DOF)+" "+(GS.HY+lift)+") rotate("+th.toFixed(2)+")");
    E.dH.setAttribute("transform","translate("+(GS.HX+GS.DOF)+" "+(GS.HY+lift)+") rotate("+(-th).toFixed(2)+")");
    /* the switch module slides up between them */
    var my=GS.HY-92+170*(1-ins);
    E.mod.setAttribute("transform","translate("+GS.HX+" "+my.toFixed(1)+") scale("+(.82+.18*ins).toFixed(3)+")");
    op(E.mod,b*ins);
    E.mod.classList.toggle("lit",flip>.35);
    /* the trigger drifts in from the left and docks into the socket */
    var tx=140+(GS.HX-140)*dock,ty=508-(508-(my+66))*dock;
    E.trg.setAttribute("transform","translate("+tx.toFixed(1)+" "+ty.toFixed(1)+") rotate("+(140*(1-dock)).toFixed(1)+")");
    op(E.trg,b*seg(p,.46,.56));
    E.trg.classList.toggle("lit",dock>.9);
    /* the antigen is held in the cleft, then lifts away as the site opens */
    var ax=GS.HX+170*rel,ay=GS.AG[1]-96*rel;
    E.ag.setAttribute("transform","translate("+(ax-GS.HX).toFixed(1)+" "+(ay-GS.AG[1]+lift*.5).toFixed(1)+")");
    op(E.ag,b*(1-.75*rel));
    op(E.l1,b*seg(p,.02,.1)*(1-seg(p,.18,.24)));
    op(E.l2,b*seg(p,.24,.32)*(1-seg(p,.44,.5)));
    op(E.l3,b*seg(p,.5,.58)*(1-seg(p,.68,.74)));
    op(E.l4,b*seg(p,.78,.86));
  };
}

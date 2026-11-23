/* The story scene (DB/BL/BY): GlycoTherapeutics' mechanism as ONE fine-line picture that fills the frame
   (glycotherapeutics.eu; Radboudumc news, 26 Apr 2023): a tumour cell whose surface glycans are capped with sialic acid
   (diamonds, the SNFG symbol) and fucose (triangles), its Golgi and nucleus, and a T cell beside it. Frame 0 is complete.
   Step 1 (coated): the caps fill in.  Step 2 (hidden): the immune cell is held off (an inhibition bar).
   Step 3 (blocked): the inhibitor enters and the sugar caps are lost.  Step 4 (exposed): the T cell engages the tumour.
   Labels sit in open space with >=8px clear (DR3). Driven by the scrubbed progress. */
var SCW=760,SCH=560,TC=[300,282],TR=196,TX0=680,TX1=606,TY=282,TRR=60;
function trad(t){return TR*(1+.04*Math.cos(2*t+.5)+.025*Math.cos(3*t-1))}
function tpath(){var s="",n=144;for(var i=0;i<=n;i++){var t=i/n*Math.PI*2,r=trad(t);s+=(i?"L":"M")+(TC[0]+r*Math.cos(t)).toFixed(1)+" "+(TC[1]+r*Math.sin(t)).toFixed(1)}return s+"Z"}
var GLY=(function(){var a=[],k=0;for(var d=0;d<360;d+=12){if(d>=186&&d<=244)continue;a.push([d,k++%3===2?1:0])}return a})();
function gp(d,o){var t=d*Math.PI/180,r=trad(t)+o;return [TC[0]+r*Math.cos(t),TC[1]+r*Math.sin(t)]}
function storyScene(o){
  var g='',mob=o.mob,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="tglow"><stop offset="0" stop-color="#4fd0d4" stop-opacity=".45"/><stop offset="1" stop-color="#4fd0d4" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+tpath()+'"/>';
  /* Golgi stack: four nested arcs */
  for(i=0;i<4;i++){var R=20+i*7;g+='<path class="wo sD" d="M'+(222-R*.87).toFixed(1)+' '+(204+R*.5).toFixed(1)+'A'+R+' '+R+' 0 0 1 '+(222+R*.87).toFixed(1)+' '+(204+R*.5).toFixed(1)+'"/>'}
  g+='<path class="wmd sD" d="M402 318A70 66 0 1 1 401.99 317.5"/>';
  g+='<path class="wo sD" d="M368 300C350 316 352 344 372 352M300 296C316 286 334 292 336 306"/>';
  /* glycan stalks: two core sugars each */
  GLY.forEach(function(q){var a=gp(q[0],0),b=gp(q[0],20);g+='<path class="wo sD" d="M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'L'+b[0].toFixed(1)+' '+b[1].toFixed(1)+'"/>'});
  g+='</g>';
  g+='<g id="core">';GLY.forEach(function(q){[8,16].forEach(function(o){var p=gp(q[0],o);g+='<circle class="cs" r="2.9" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'"/>'})});g+='</g>';
  /* caps: sialic acid (filled diamond) or fucose (outlined triangle) */
  g+='<g id="caps">';GLY.forEach(function(q,k){var p=gp(q[0],29),x=p[0].toFixed(1),y=p[1].toFixed(1);
    g+='<path class="'+(q[1]?'fu':'sa')+'" data-k="'+k+'" transform="translate('+x+' '+y+') rotate('+q[0]+')" d="'+(q[1]?'M7 0L-5 -6.4L-5 6.4Z':'M7 0L0 -7L-7 0L0 7Z')+'"/>'});g+='</g>';
  /* the inhibitor stream into the Golgi */
  g+='<path id="inP" class="gd" d="M0 128C80 128 160 160 214 196"/>';
  g+='<g id="dr">';for(i=0;i<10;i++)g+='<rect class="dq" x="-3" y="-3" width="6" height="6" transform="translate(0 128)"/>';g+='</g>';
  /* inhibition bar between tumour and T cell (step 2) */
  g+='<g id="hb"><path class="hb" d="M556 282H588M588 266V298"/></g>';
  /* the T cell, which moves in at step 4 */
  g+='<g id="tc" transform="translate('+TX0+' '+TY+')">';
  g+='<circle class="tglow" r="120" fill="url(#tglow)" id="tg"/>';
  g+='<circle class="wl tcell" r="'+TRR+'"/><circle class="wo" r="28" cx="6" cy="4"/>';
  [150,170,190,210].forEach(function(d){var t=d*Math.PI/180,x=TRR*Math.cos(t),y=TRR*Math.sin(t),x2=(TRR+9)*Math.cos(t),y2=(TRR+9)*Math.sin(t);
    g+='<path class="wmd" d="M'+x.toFixed(1)+' '+y.toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'M'+(x2+4*Math.cos(t+1.2)).toFixed(1)+' '+(y2+4*Math.sin(t+1.2)).toFixed(1)+'L'+x2.toFixed(1)+' '+y2.toFixed(1)+'L'+(x2+4*Math.cos(t-1.2)).toFixed(1)+' '+(y2+4*Math.sin(t-1.2)).toFixed(1)+'"/>'});
  g+=mob?'<text class="t" x="-38" y="102">T CELL</text>':'<text class="t" x="-26" y="92">T CELL</text>';
  g+='</g>';
  /* granules released into the tumour at contact (step 4) */
  g+='<g id="gr">';[[512,262],[504,286],[514,306],[490,274],[492,298]].forEach(function(q){g+='<circle class="gr" r="3" cx="'+q[0]+'" cy="'+q[1]+'"/>'});g+='</g>';
  if(!mob){
    g+='<g id="lTu"><text class="t" x="40" y="56">TUMOUR CELL</text></g>';
    g+='<g id="lLg"><path class="sa" d="M556 62L561 57L566 62L561 67Z"/><text class="t" x="576" y="66">SIALIC ACID</text><path class="fu" d="M566 90L557.4 85.4L557.4 94.6Z"/><text class="t" x="576" y="94">FUCOSE</text></g>';
    g+='<g id="lGo"><text class="t" x="196" y="266">GOLGI</text></g>';
    g+='<g id="lDr"><text class="t a2" x="14" y="110">INHIBITOR</text></g>';
  }else{
    g+='<g id="lTu"></g><g id="lLg"></g><g id="lGo"></g><g id="lDr"></g>';
  }
  var ly=SCH-6,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SUGAR-CAPPED GLYCANS':'GLYCANS CAPPED WITH SIALIC ACID AND FUCOSE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'IMMUNE CELL HELD BACK':'THE SUGAR COAT HOLDS THE IMMUNE CELL BACK')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SUGAR CAPS LOST':'SUGAR PRODUCTION BLOCKED · CAPS LOST')+'</text></g>';
  g+='<g id="lb4"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TUMOUR EXPOSED':'TUMOUR EXPOSED · THE T CELL ENGAGES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),caps:$$("#caps path",svg),core:$("#core",svg),dr:$$("#dr .dq",svg),hb:$("#hb",svg),tc:$("#tc",svg),tg:$("#tg",svg),gr:$$("#gr .gr",svg),
    lTu:$("#lTu",svg),lLg:$("#lLg",svg),lGo:$("#lGo",svg),lDr:$("#lDr",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),l4:$("#lb4",svg)};
  var inP=$("#inP",svg),IL=inP.getTotalLength(),N=E.caps.length;
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s4=seg(p,.77,.92);
    op(E.core,b);
    /* 1. caps: most are there from frame 0, the rest fill in; 3. they are lost one after another */
    E.caps.forEach(function(el,k){var show=k%3?1:seg(p,.03+.1*(k/N),.1+.1*(k/N));var gone=seg(p,.55+.14*((k*7)%N)/N,.6+.14*((k*7)%N)/N);op(el,b*show*(1-gone))});
    op(E.lTu,b);op(E.lLg,b*(1-seg(p,.6,.68)));op(E.lGo,b);
    /* 2. held back */
    op(E.hb,b*seg(p,.28,.36)*(1-seg(p,.52,.58)));
    if(E.tc){E.tc.style.opacity=(b*(1-.45*seg(p,.28,.36)*(1-seg(p,.72,.8)))).toFixed(3);
      E.tc.setAttribute("transform","translate("+(TX0+(TX1-TX0)*s4).toFixed(1)+" "+TY+")")}
    /* 3. the inhibitor arrives as an even stream */
    var on3=seg(p,.5,.56)*(1-seg(p,.74,.8));
    E.dr.forEach(function(el,i){var f=((i/E.dr.length)+p*6)%1;var q=inP.getPointAtLength(IL*f);el.setAttribute("transform","translate("+q.x.toFixed(1)+" "+q.y.toFixed(1)+") rotate(45)");op(el,b*on3*Math.min(1,f*8)*Math.min(1,(1-f)*6))});
    op(E.lDr,b*on3);
    /* 4. contact */
    op(E.tg,b*seg(p,.84,.92));
    E.gr.forEach(function(el,i){op(el,b*seg(p,.86+.02*i,.92+.02*i))});
    op(E.l1,b*seg(p,.03,.1)*(1-seg(p,.22,.27)));op(E.l2,b*seg(p,.29,.36)*(1-seg(p,.47,.52)));op(E.l3,b*seg(p,.54,.6)*(1-seg(p,.72,.77)));op(E.l4,b*seg(p,.8,.87));
  };
}

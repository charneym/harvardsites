/* The story scene (BL/BY/DB): how DLB Oberviechtach makes a strand (image brochure, Fertigung: Grobzuganlage,
   Mehrfachdrahtziehanlagen, galvanische Oberflächenbeschichtungsanlage zur Drahtverzinnung, Einbügel-, Verlitz- und
   Verseilmaschinen, Spulen nach DIN 46391/46397), drawn as ONE production line kept on screen for all three steps:
   Step 1 (Ziehen): three copper wires run in from the left through two drawing dies and come out thinner.
   Step 2 (Verzinnen): the tinning bath fills; the wires leave it tinned (silver).
   Step 3 (Verlitzen): the wires close into one strand at the stranding head, which winds onto a flanged spool.
   Schematic, not to scale, no measured values. */
var SCW=760,SCH=520,VY=80;
var WY=[262,332,402];
function dlbScene(o){
  var g='',mob=o.mob;
  function P(d,c,id){return '<path'+(id?' id="'+id+'"':'')+' class="'+c+'" d="'+d+'"/>'}
  function R(x0,y0,x1,y1){return 'M'+x0+' '+y0+'H'+x1+'V'+y1+'H'+x0+'Z'}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 '+VY+' '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<text class="t" x="20" y="'+(mob?112:108)+'">'+(mob?"DRAHT ZUR LITZE":"ZIEHEN, VERZINNEN, VERLITZEN · SCHEMATISCH")+'</text>';
  /* drawing dies: two holders, one conical die per wire, the second one tighter */
  var dies='';
  [[112,150,9,4.5],[196,232,6.5,3]].forEach(function(d){
    dies+=P(R(d[0]-6,WY[0]-40,d[1]+6,WY[2]+40),"body sD");
    WY.forEach(function(y){dies+=P('M'+d[0]+' '+(y-16)+'L'+(d[1]-10)+' '+(y-d[3])+'H'+d[1]+'V'+(y+d[3])+'H'+(d[1]-10)+'L'+d[0]+' '+(y+16)+'Z',"die")+P('M'+d[0]+' '+(y-16)+'L'+(d[1]-10)+' '+(y-d[3])+'H'+d[1]+'M'+d[1]+' '+(y+d[3])+'H'+(d[1]-10)+'L'+d[0]+' '+(y+16),"body sD")});
  });
  g+='<g id="dDie">'+dies+'</g>';
  /* tinning bath */
  g+='<rect id="dLiq" class="liq" x="312" y="'+(WY[0]-36)+'" width="156" height="'+(WY[2]+48-(WY[0]-36))+'"/>';
  g+=P('M306 '+(WY[0]-52)+'V'+(WY[2]+54)+'H474V'+(WY[0]-52),"body sD");
  /* stranding head (closing die) and the spool */
  g+=P('M586 '+(WY[1]-26)+'L612 '+(WY[1]-7)+'H622V'+(WY[1]+7)+'H612L586 '+(WY[1]+26)+'Z',"die");
  g+=P('M586 '+(WY[1]-26)+'L612 '+(WY[1]-7)+'H622V'+(WY[1]+7)+'H612L586 '+(WY[1]+26)+'Z',"body sD");
  var SX0=664,SX1=736,SC=WY[1];
  g+='<g id="dWnd"><rect class="wnd" x="'+(SX0+4)+'" y="'+(SC-92)+'" width="'+(SX1-SX0-8)+'" height="184"/>';
  for(var k=0;k<11;k++){var yy=SC-86+k*17.2;g+='<path class="wl" d="M'+(SX0+4)+' '+yy.toFixed(1)+'H'+(SX1-4)+'"/>'}
  g+='</g>';
  g+=P(R(SX0+4,SC-24,SX1-4,SC+24),"body sD");
  g+=P(R(SX0-4,SC-150,SX0+4,SC+150)+R(SX1-4,SC-150,SX1+4,SC+150),"flange");
  g+=P(R(SX0-4,SC-150,SX0+4,SC+150)+R(SX1-4,SC-150,SX1+4,SC+150),"body sD");
  /* the wires: copper in, thinner through each die, through the bath; tinned out; closing into the strand */
  var wc='',ws='',wv='';
  WY.forEach(function(y){
    wc+='<path class="w w1" d="M24 '+y+'H124"/><path class="w w2" d="M150 '+y+'H208"/><path class="w w3" d="M232 '+y+'H468"/>';
    ws+='<path class="w w3 tn" d="M474 '+y+'H540"/>';
    wv+='<path class="w w3 tn" d="M540 '+y+'C562 '+y+' 566 '+(WY[1]+(y-WY[1])*.18).toFixed(1)+' 600 '+(WY[1]+(y-WY[1])*.12).toFixed(1)+'"/>';
  });
  g+='<g id="dWc">'+wc+'</g><g id="dWs">'+ws+'</g><g id="dWv">'+wv+'</g>';
  /* the closed strand: two wires crossing on a short lay, from the head onto the spool */
  var s1='M622 '+SC,s2='M622 '+SC;
  for(var x=622;x<SX0-4;x+=7){var a=(x-622)/14*Math.PI;s1+='L'+(x+7)+' '+(SC+5*Math.sin(a+Math.PI/2)).toFixed(1);s2+='L'+(x+7)+' '+(SC-5*Math.sin(a+Math.PI/2)).toFixed(1)}
  g+='<g id="dSt"><path class="w w3 tn" d="'+s1+'"/><path class="w w3 tn" d="'+s2+'"/></g>';
  /* labels, each clear of every stroke (8px+) */
  var lt=WY[0]-70,lb=WY[2]+92;
  if(mob){
    g+='<g id="dN1"><text class="t" x="172" y="'+lt+'" text-anchor="middle">ZIEHEN</text></g>';
    g+='<g id="dN2"><text class="t" x="390" y="'+(lt-12)+'" text-anchor="middle">ZINN</text></g>';
    g+='<g id="dN3"><text class="t" x="604" y="'+(lb+6)+'" text-anchor="middle">LITZE</text><text class="t" x="700" y="'+(SC-176)+'" text-anchor="middle">SPULE</text></g>';
  }else{
    g+='<g id="dN1"><text class="t" x="172" y="'+lt+'" text-anchor="middle">ZIEHSTEINE</text><text class="t s1" x="172" y="'+lb+'" text-anchor="middle">Ø WIRD ENGER</text></g>';
    g+='<g id="dN2"><text class="t" x="390" y="'+(lt-12)+'" text-anchor="middle">ZINNBAD</text><text class="t s3" x="390" y="'+(lb+6)+'" text-anchor="middle">VERZINNT</text></g>';
    g+='<g id="dN3"><text class="t" x="578" y="'+(lb-24)+'" text-anchor="middle">VERLITZKOPF</text><text class="t" x="700" y="'+(SC-170)+'" text-anchor="middle">SPULE</text></g>';
  }
  g+='<g id="lb1"><text class="a" x="740" y="108" text-anchor="end">'+(mob?"":"1 · ZIEHEN")+'</text></g>';
  g+='<g id="lb2"><text class="a" x="740" y="108" text-anchor="end">'+(mob?"":"2 · VERZINNEN")+'</text></g>';
  g+='<g id="lb3"><text class="a" x="740" y="108" text-anchor="end">'+(mob?"":"3 · VERLITZEN")+'</text></g>';
  return g+'</svg>';
}
function scene(){return dlbScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var q=function(s){return $(s,svg)};
  var E={base:dl(".sD"),fills:$$(".die,.flange",svg),Wc:dl("#dWc .w"),Ws:dl("#dWs .w"),Wv:dl("#dWv .w"),St:dl("#dSt .w"),
    Liq:q("#dLiq"),Wnd:q("#dWnd"),N1:q("#dN1"),N2:q("#dN2"),N3:q("#dN3"),l1:q("#lb1"),l2:q("#lb2"),l3:q("#lb3"),t0:svg.querySelector("text.t"),dies:q("#dDie")};
  var lastB=-1,LH=+E.Liq.getAttribute("height"),LY=+E.Liq.getAttribute("y");
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.t0,b);E.fills.forEach(function(c){op(c,b)})}
    /* step 1: the copper wires run in through both dies (already complete at the start of the step) */
    draw(E.Wc,b);
    op(E.N1,b*seg(p,.06,.14));
    /* step 2: the bath fills, the wires leave it tinned */
    var lq=seg(p,.36,.5);E.Liq.setAttribute("height",(LH*lq).toFixed(1));E.Liq.setAttribute("y",(LY+LH*(1-lq)).toFixed(1));op(E.Liq,b);
    draw(E.Ws,b*seg(p,.48,.6));
    op(E.N2,b*seg(p,.42,.5));
    /* step 3: the wires close into the strand, which winds onto the spool */
    draw(E.Wv,b*seg(p,.7,.78));draw(E.St,b*seg(p,.76,.86));
    op(E.Wnd,b*seg(p,.82,.92));
    op(E.N3,b*seg(p,.84,.92));
    op(E.l1,b*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.36,.42)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.7,.76));
  };
}

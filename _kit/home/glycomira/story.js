/* The story scene (BL/BY/DB): how GM-1111 works in radiation-induced oral mucositis (glycomira.com Supportive Care and
   Technology pages; Pulsipher et al., PLoS One 2021), as ONE continuous scene: a cross-section of the lining of the mouth,
   an epithelium of cells over a basement membrane, with innate immune receptors on the cells and a blood vessel below.
   Step 1 (damage): radiation passes through; damaged cells release molecules (danger signals) toward the receptors.
   Step 2 (amplify): the receptors activate, inflammatory cells leave the vessel, and the lining breaks into a lesion.
   Step 3 (block): GM-1111, a glycosaminoglycan chain (sulfate groups in the brand yellow), binds the receptors at the
   earliest stage; activation stops, the immune cells withdraw and the lining stays whole. Schematic. Every element is
   driven by the scrubbed story progress. */
var SCW=760,SCH=468;
var SURF=112,BM=236,VY=402;
var CELLS=(function(){var a=[],r,i;for(r=0;r<3;r++)for(i=0;i<11;i++){var w=56,x=150+i*w+(r%2?w/2:0);if(x>724)continue;
  a.push({x:x,y:SURF+22+r*38,rx:24,ry:15,r:r,ctr:Math.abs(x-445)<92&&r<2})}return a})();
var REC=[190,262,334,406,478,550,622,694];
var DNG=(function(){var s=37,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i;
  for(i=0;i<30;i++){var t=REC[i%REC.length];a.push({fx:300+R()*300,fy:SURF+30+R()*70,tx:t+(R()-.5)*16,ty:BM+16+R()*8,d:R()*.45})}return a})();
var IMM=[{x:300,y:VY-8,tx:330,ty:BM+70},{x:410,y:VY-8,tx:420,ty:BM+56},{x:520,y:VY-8,tx:500,ty:BM+74},{x:600,y:VY-8,tx:585,ty:BM+60}];
function recPath(x){var y=BM+4;return 'M'+x+' '+(y)+'V'+(y+16)+'M'+x+' '+(y+16)+'L'+(x-7)+' '+(y+27)+'M'+x+' '+(y+16)+'L'+(x+7)+' '+(y+27)}
function chain(x,y,ang){var g='',k,ca=Math.cos(ang),sa=Math.sin(ang);
  for(k=0;k<6;k++){var px=x+ca*k*10.5,py=y+sa*k*10.5+(k%2?2.5:-2.5);g+='<circle class="'+(k%2?'gs':'gc')+'" cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="'+(k%2?4.4:5.4)+'"/>'}return g}
function mucosaScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="sk sD" d="M140 '+SURF+'C260 '+(SURF-4)+' 330 '+(SURF+4)+' 445 '+SURF+'S640 '+(SURF-4)+' 740 '+SURF+'"/>';
  g+='<path class="bm sD" d="M140 '+BM+'C180 '+(BM-10)+' 220 '+(BM+10)+' 260 '+BM+'S340 '+(BM-10)+' 380 '+BM+'S460 '+(BM+10)+' 500 '+BM+'S580 '+(BM-10)+' 620 '+BM+'S700 '+(BM+10)+' 740 '+BM+'"/>';
  for(i=0;i<4;i++){var y=BM+60+i*34;if(Math.abs(y-VY)<30)continue;g+='<path class="cg sD" d="M150 '+y+'c40 -8 70 8 110 0s70 -8 110 0 70 8 110 0 70 -8 110 0 70 8 110 0"/>'}
  g+='<path class="vs sD" d="M140 '+(VY-16)+'C300 '+(VY-22)+' 560 '+(VY-10)+' 740 '+(VY-16)+'"/><path class="vs sD" d="M140 '+(VY+16)+'C300 '+(VY+10)+' 560 '+(VY+22)+' 740 '+(VY+16)+'"/>';
  g+='<text class="t" x="20" y="'+(SURF+50)+'">EPITHELIUM</text>';
  g+='<text class="t" x="20" y="'+(BM+70)+'">SUBMUCOSA</text>';
  g+='<text class="t" x="20" y="'+(VY+5)+'">BLOOD</text><text class="t" x="20" y="'+(VY+21)+'">VESSEL</text>';
  g+='<text class="t" x="20" y="'+(SURF-14)+'">ORAL CAVITY</text>';
  g+='</g>';
  /* epithelial cells: whole, damaged (glow), lost in the lesion */
  g+='<g id="scCel">';
  CELLS.forEach(function(c,k){g+='<g class="cel" data-k="'+k+'"><ellipse class="ce" cx="'+c.x+'" cy="'+c.y+'" rx="'+c.rx+'" ry="'+c.ry+'"/><circle class="cn" cx="'+c.x+'" cy="'+c.y+'" r="4.2"/><ellipse class="cd" cx="'+c.x+'" cy="'+c.y+'" rx="'+(c.rx-3)+'" ry="'+(c.ry-3)+'"/></g>'});
  g+='</g>';
  /* the lesion floor: an open wound where the lining has broken down */
  g+='<path id="scUlc" class="ul" d="M362 '+SURF+'C380 '+(SURF+58)+' 510 '+(SURF+58)+' 528 '+SURF+'"/>';
  /* radiation */
  g+='<g id="scRad">';for(i=0;i<5;i++){var x0=300+i*70;g+='<path class="rd" d="M'+(x0+90)+' 0L'+(x0-40)+' '+(BM-20)+'"/>'}g+='</g>';
  /* receptors on the basal cells, with their activation glow */
  g+='<g id="scRec">';REC.forEach(function(x){g+='<circle class="rg" cx="'+x+'" cy="'+(BM+22)+'" r="14"/><path class="rc" d="'+recPath(x)+'"/>'});g+='</g>';
  /* danger signals released by damaged cells */
  g+='<g id="scDng">';DNG.forEach(function(m,k){g+='<circle class="dg" data-k="'+k+'" r="2.8" cx="0" cy="0"/>'});g+='</g>';
  /* inflammatory immune cells leaving the vessel */
  g+='<g id="scImm">';IMM.forEach(function(m,k){g+='<g class="im" data-k="'+k+'"><circle class="ic" r="13" cx="0" cy="0"/><path class="in" d="M-5 -3c3 -5 9 -2 7 3s-9 6 -7 -3"/></g>'});g+='</g>';
  /* GM-1111: short glycosaminoglycan chains that dock on the receptors */
  g+='<g id="scGm">';REC.forEach(function(x,k){g+='<g class="gm" data-k="'+k+'">'+chain(-26,0,0)+'</g>'});g+='</g>';
  var ly=SCH-8;
  g+='<g id="lb1"><text class="a" x="20" y="'+ly+'">'+(o.mob?'RADIATION · DANGER SIGNALS RELEASED':'RADIATION · DAMAGED CELLS RELEASE DANGER SIGNALS')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="'+ly+'">'+(o.mob?'RECEPTORS ACTIVATED · LESION FORMS':'INNATE IMMUNE RECEPTORS ACTIVATED · A LESION FORMS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="'+ly+'">'+(o.mob?'GM-1111 · ACTIVATION INHIBITED':'GM-1111 · RECEPTOR ACTIVATION INHIBITED EARLY')+'</text></g>';
  return g+'</svg>';
}
function scene(){return mucosaScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    cel:$$(".cel",svg).map(function(el){var c=CELLS[+el.getAttribute("data-k")];return {el:el,c:c,cd:el.querySelector(".cd")}}),
    ulc:$("#scUlc",svg),rad:$$("#scRad .rd",svg),rg:$$("#scRec .rg",svg),rc:$$("#scRec .rc",svg),
    dg:$$(".dg",svg).map(function(el){return {el:el,m:DNG[+el.getAttribute("data-k")]}}),
    im:$$(".im",svg).map(function(el){return {el:el,m:IMM[+el.getAttribute("data-k")]}}),
    gm:$$(".gm",svg).map(function(el){return {el:el,k:+el.getAttribute("data-k")}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var rad=seg(p,.03,.12)*(1-seg(p,.3,.4)),dmg=seg(p,.08,.24),rel=seg(p,.1,.36),act=seg(p,.3,.44),amp=seg(p,.38,.6),
        blk=seg(p,.62,.8),heal=seg(p,.72,.92);
    var on=act*(1-blk), lesion=amp*(1-heal);
    E.rad.forEach(function(el,i){op(el,b*rad*.75);el.style.strokeDashoffset=(-p*1400-i*31).toFixed(1)});
    E.cel.forEach(function(C){var c=C.c,hurt=c.ctr?dmg*(1-heal):dmg*.5*(1-blk);
      op(C.cd,b*hurt*.9);op(C.el,b*(c.ctr?1-.88*lesion:1))});
    op(E.ulc,b*lesion);
    E.rg.forEach(function(el,i){op(el,b*on*(.55+.3*Math.sin(p*36+i)))});
    E.rc.forEach(function(el){el.classList.toggle("on",on>.5);op(el,b)});
    E.dg.forEach(function(D){var m=D.m,d=Math.min(1,Math.max(0,(rel-m.d*.5)/(1-m.d*.5))),q=d*d*(3-2*d);
      D.el.setAttribute("cx",(m.fx+(m.tx-m.fx)*q).toFixed(1));D.el.setAttribute("cy",(m.fy+(m.ty-m.fy)*q).toFixed(1));
      op(D.el,b*sm(rel*4)*(1-blk))});
    E.im.forEach(function(I,k){var m=I.m,q=sm((amp-k*.08)/(1-k*.08))*(1-heal);
      I.el.setAttribute("transform","translate("+(m.x+(m.tx-m.x)*q).toFixed(1)+" "+(m.y+(m.ty-m.y)*q).toFixed(1)+")");
      op(I.el,b*sm(q*3))});
    E.gm.forEach(function(G){var k=G.k,x=REC[k],q=sm((blk-k*.03)/.79),sx=x-120+k*6,sy=VY-40;
      var gx=sx+(x+0-sx)*q,gy=sy+(BM+34-sy)*q;G.el.setAttribute("transform","translate("+gx.toFixed(1)+" "+gy.toFixed(1)+") rotate("+(-24*(1-q)).toFixed(1)+")");
      op(G.el,b*sm(blk*3))});
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.72,.8));
  };
}

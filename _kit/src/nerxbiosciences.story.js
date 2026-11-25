/* the story scene (BL/BY/DB/DR): ONE stretch of DNA, drawn once and kept on screen for all four steps: a double helix (two
   backbones and their base pairs) with a damaged stretch in the middle, where one strand is broken away and the other is left
   single-stranded, its bases exposed.
   Step 1 (damage): the exposed single strand is lit.
   Step 2 (sense): RPA, a DNA damage sensor, binds and coats the single strand (two RPA molecules).
   Step 3 (signal): the sensors recruit the DDR kinases, which start repair.
   Step 4 (block): NĒRx-329 sits in RPA's DNA-binding site; RPA cannot hold the strand and lifts off; the kinases never arrive.
   Source: nerxbiosciences.com (Research & Development; NĒRx-329: "a competitive inhibitor of DNA binding"; "intervening
   upstream of the DDR kinases"). Schematic. Driven by the scrubbed story progress. */
var DX={x0:40,x1:740,y0:300,A:42,P:170,g0:210,g1:550,ys:296};
function dxT(x){return DX.y0+DX.A*Math.sin(2*Math.PI*(x-DX.x0)/DX.P)}
function dxB(x){return DX.y0+DX.A*Math.sin(2*Math.PI*(x-DX.x0)/DX.P+2.4)}
function dxWave(fn,a,b){var f=function(n){return (+n).toFixed(1)},d='',x;for(x=a;x<=b+.01;x+=4)d+=(d?'L':'M')+f(x)+' '+f(fn(x));return d}
function dxSS(){var D=DX,f=function(n){return (+n).toFixed(1)};
  return 'M'+D.g0+' '+f(dxT(D.g0))+'C'+(D.g0+16)+' '+f(dxT(D.g0)-14)+' '+(D.g0+22)+' '+D.ys+' '+(D.g0+40)+' '+D.ys+'L'+(D.g1-40)+' '+D.ys+'C'+(D.g1-22)+' '+D.ys+' '+(D.g1-16)+' '+f(dxT(D.g1)-14)+' '+D.g1+' '+f(dxT(D.g1))}
function dxRPA(cx,cy){/* a sensor protein: a rounded body with the DNA-binding cleft open at its base */
  var f=function(n){return (cx+((+n)-cx)*1.3).toFixed(1)},F=function(n){return (cy+((+n)-cy)*1.3).toFixed(1)};
  return 'M'+f(cx-20)+' '+F(cy+26)+'C'+f(cx-44)+' '+F(cy+26)+' '+f(cx-48)+' '+F(cy+8)+' '+f(cx-46)+' '+F(cy-6)+'C'+f(cx-42)+' '+F(cy-30)+' '+f(cx-18)+' '+F(cy-34)+' '+cx+' '+F(cy-30)+
    'C'+f(cx+18)+' '+F(cy-34)+' '+f(cx+42)+' '+F(cy-30)+' '+f(cx+46)+' '+F(cy-6)+'C'+f(cx+48)+' '+F(cy+8)+' '+f(cx+44)+' '+F(cy+26)+' '+f(cx+20)+' '+F(cy+26)+
    'C'+f(cx+12)+' '+F(cy+26)+' '+f(cx+10)+' '+F(cy+12)+' '+cx+' '+F(cy+12)+'C'+f(cx-10)+' '+F(cy+12)+' '+f(cx-12)+' '+F(cy+26)+' '+f(cx-20)+' '+F(cy+26)+'Z'}
function dxHex(cx,cy,r){var d='',i;for(i=0;i<6;i++){var a=Math.PI/6+i*Math.PI/3;d+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return d+'Z'}
function scene(){
  var mob=MOBILE(),D=DX,f=function(n){return (+n).toFixed(1)},g='',x,i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'150 30 460 380':'20 30 740 370')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="nxg" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#6f9fd8"/><stop offset=".5" stop-color="#a77fb0"/><stop offset="1" stop-color="#e45a62"/></linearGradient></defs>';
  /* the double helix: backbones, broken at the damage; base pairs between them */
  g+='<g id="dxBase">';
  var rg='';for(x=D.x0+6;x<=D.x1-6;x+=12){if(x>D.g0-4&&x<D.g1+4)continue;var a=dxT(x),b=dxB(x);if(Math.abs(a-b)<8)continue;rg+='M'+x+' '+f(Math.min(a,b)+3)+'L'+x+' '+f(Math.max(a,b)-3)}
  g+='<path class="bp sD" d="'+rg+'"/>';
  g+='<path class="bb2 sD" d="'+dxWave(dxB,D.x0,D.g0-8)+'"/><path class="bb2 sD" d="'+dxWave(dxB,D.g1+8,D.x1)+'"/>';
  g+='<path class="bb sD" d="'+dxWave(dxT,D.x0,D.g0)+'"/><path class="bb sD" id="dxSS" d="'+dxSS()+'"/><path class="bb sD" d="'+dxWave(dxT,D.g1,D.x1)+'"/>';
  g+='<circle class="brk" cx="'+(D.g0-8)+'" cy="'+f(dxB(D.g0-8))+'" r="3.2"/><circle class="brk" cx="'+(D.g1+8)+'" cy="'+f(dxB(D.g1+8))+'" r="3.2"/>';
  var ex='';for(x=D.g0+46;x<=D.g1-46;x+=14)ex+='M'+x+' '+(D.ys+3)+'L'+x+' '+(D.ys+14);
  g+='<path class="bp ex sD" d="'+ex+'"/>';
  g+='<text class="t" x="'+(mob?162:D.x0)+'" y="'+(mob?392:384)+'">'+(mob?'TUMOR DNA':'DNA IN A TUMOR CELL, AFTER DNA-DAMAGING THERAPY')+'</text>';
  g+='</g>';
  /* step 1: the exposed single strand, lit */
  g+='<path class="hot" id="dxHot" d="M'+(D.g0+40)+' '+D.ys+'L'+(D.g1-40)+' '+D.ys+'"/>';
  /* step 2: two RPA sensors on the single strand (cleft around the strand); step 4: the inhibitor in each cleft */
  var rx=[D.g0+92,D.g1-92],ry=D.ys-16;
  g+='<g id="rpa">';rx.forEach(function(c,k){g+='<g class="rp" data-k="'+k+'"><path class="rpb" d="'+dxRPA(c,ry)+'"/><path class="inh" d="'+dxHex(c,ry+23,8)+'"/></g>'});g+='</g>';
  /* step 3: a DDR kinase recruited by the sensors, and the repair signal */
  var kx=(rx[0]+rx[1])/2,ky=146;
  g+='<g id="kin"><ellipse class="kb" cx="'+kx+'" cy="'+ky+'" rx="74" ry="38"/>'+
     '<path class="lk" id="lk1" d="M'+f(kx-36)+' '+(ky+33)+'L'+f(rx[0]+8)+' '+(ry-42)+'"/><path class="lk" id="lk2" d="M'+f(kx+36)+' '+(ky+33)+'L'+f(rx[1]-8)+' '+(ry-42)+'"/>'+
     '<text class="a b" x="'+(mob?kx-84:kx+90)+'" y="'+(ky+5)+'"'+(mob?' text-anchor="end"':'')+'>'+(mob?'KINASE':'DDR KINASE')+'</text></g>';
  /* labels, one per step, in the clear band at the top */
  var lx=mob?380:D.x0,ly=66,an=mob?' text-anchor="middle"':'';
  g+='<g id="lb0"><text class="a r" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'SINGLE STRAND EXPOSED':'DAMAGE · A STRETCH OF SINGLE-STRANDED DNA EXPOSED')+'</text></g>';
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'RPA SENSOR BINDS':'RPA, A DNA DAMAGE SENSOR, COATS THE SINGLE STRAND')+'</text></g>';
  g+='<g id="lb2"><text class="a b" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'KINASES RECRUITED':'THE SENSOR RECRUITS THE DDR KINASES · REPAIR')+'</text></g>';
  g+='<g id="lb3"><text class="a r" x="'+lx+'" y="'+ly+'"'+an+'>'+(mob?'NĒRx-329 BLOCKS RPA':'NĒRx-329 BLOCKS RPA FROM BINDING DNA · NO REPAIR')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#dxBase .sD"),fade:$$("#dxBase text,#dxBase .brk",svg),hot:$("#dxHot",svg),rpa:$("#rpa",svg),rp:$$("#rpa .rp",svg),inh:$$("#rpa .inh",svg),
    kin:$("#kin",svg),lk:dl("#kin .lk"),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var r1=seg(p,.26,.38),k1=seg(p,.51,.62),k0=seg(p,.77,.86),lift=seg(p,.8,.93),ih=seg(p,.76,.86);
    /* the exposed strand glows while it is bare (step 1), and again once the sensors are pushed off it (step 4) */
    op(E.hot,b*Math.max(1-r1,seg(p,.86,.95)));
    op(E.rpa,b*r1);
    E.rp.forEach(function(g,k){g.setAttribute("transform","translate(0 "+(-(1-r1)*18-lift*44).toFixed(1)+")")});
    E.inh.forEach(function(h){h.style.opacity=ih.toFixed(3)});
    op(E.kin,b*k1*(1-k0));draw(E.lk,seg(p,.56,.68));
    op(E.l0,b*(1-seg(p,.2,.26)));op(E.l1,b*seg(p,.27,.33)*(1-seg(p,.45,.51)));op(E.l2,b*seg(p,.52,.58)*(1-seg(p,.7,.76)));op(E.l3,b*seg(p,.77,.83));
  };
}

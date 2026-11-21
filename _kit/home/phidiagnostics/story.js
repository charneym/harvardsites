/* The story scene (BL/BY/DB): the Circle-DNA test as ONE continuous engraved scene, from phi-dx.com and the CORDIS record of
   EIC project 101213445. A field of cell-free DNA from a plasma sample: many short linear fragments (pale double strands)
   with circles of DNA among them (double rings, gold). Step 1: the fragments drift in. Step 2: purification: the linear
   fragments are removed (they shrink and fade) and the circles remain. Step 3: each circle travels down to its place on a
   genome ideogram (22 autosomes + X), the per-chromosome counts rise as a map, and a classifier bracket reads it.
   Every element follows the scrubbed story progress. */
var SCW=760,SCH=540,GY=466;
function rnd(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
var LIN=[],CIR=[],CHR=[];
(function(){var i;
  for(i=0;i<40;i++){LIN.push({x:36+rnd(i*3+1)*688,y:64+rnd(i*3+2)*330,a:(rnd(i*3+3)-.5)*2.6,l:30+rnd(i+90)*40})}
  for(i=0;i<15;i++){CIR.push({x:60+rnd(i*5+201)*640,y:84+rnd(i*5+202)*290,r:10+rnd(i*5+203)*13})}
  var L=[248,242,198,190,181,171,159,145,138,134,135,133,114,107,102,90,83,80,59,64,47,51,156],tot=0;L.forEach(function(v){tot+=v});
  var x=40,span=680-22*3;L.forEach(function(v,j){var w=v/tot*span;CHR.push({x:x,w:w,n:j<22?String(j+1):"X"});x+=w+3});
  /* each circle lands on a chromosome (an illustrative profile, not data) */
  var land=[0,1,1,2,4,6,7,7,7,9,11,12,16,16,18];
  CIR.forEach(function(c,j){var ch=CHR[land[j]];c.tx=ch.x+ch.w*(.3+.4*rnd(j+400));c.ch=land[j]});
})();
function dsLine(l){var dx=Math.cos(l.a)*l.l/2,dy=Math.sin(l.a)*l.l/2,nx=-Math.sin(l.a)*3.2,ny=Math.cos(l.a)*3.2;
  return 'M'+(-dx+nx).toFixed(1)+' '+(-dy+ny).toFixed(1)+'L'+(dx+nx).toFixed(1)+' '+(dy+ny).toFixed(1)+'M'+(-dx-nx).toFixed(1)+' '+(-dy-ny).toFixed(1)+'L'+(dx-nx).toFixed(1)+' '+(dy-ny).toFixed(1)}
function circScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><text class="t" x="736" y="'+(GY+58)+'" text-anchor="end">GENOME MAP · CHROMOSOMES 1–22, X</text></g>';
  g+='<g id="scLin">'+LIN.map(function(l,i){return '<path class="ln" data-i="'+i+'" d="'+dsLine(l)+'"/>'}).join("")+'</g>';
  g+='<g id="scChr">'+CHR.map(function(c,j){return '<g class="chr"><rect class="cb" x="'+c.x.toFixed(1)+'" y="'+GY+'" width="'+c.w.toFixed(1)+'" height="14"/>'+
     '<path class="cm" d="M'+(c.x+c.w*.38).toFixed(1)+' '+GY+'v14"/>'+((j%2===0||j===22)&&j<21||j===22?'<text class="t" x="'+(c.x+c.w/2).toFixed(1)+'" y="'+(GY+32)+'" text-anchor="middle">'+c.n+'</text>':'')+'</g>'}).join("")+'</g>';
  var cnt={};CIR.forEach(function(c){cnt[c.ch]=(cnt[c.ch]||0)+1});
  g+='<g id="scBar">'+CHR.map(function(c,j){var n=cnt[j]||0,h=n?34+n*58:6;return '<rect class="br" data-h="'+h+'" x="'+(c.x+1).toFixed(1)+'" y="'+GY+'" width="'+Math.max(2,c.w-2).toFixed(1)+'" height="0"/>'}).join("")+'</g>';
  g+='<g id="scCir">'+CIR.map(function(c,i){return '<g class="ci" data-i="'+i+'"><circle class="co" r="'+c.r.toFixed(1)+'"/><circle class="cn" r="'+(c.r-3.6).toFixed(1)+'"/></g>'}).join("")+'</g>';
  g+='<g id="scCls"><path class="bk2" d="M40 '+(GY-232)+'v-12H720v12"/><text class="a" x="380" y="'+(GY-256)+'" text-anchor="middle">MACHINE-LEARNING CLASSIFIER</text></g>';
  var ly=o.mob?26:22;
  g+='<g id="lb1"><text class="a" x="24" y="'+ly+'">PLASMA · LINEAR AND CIRCULAR DNA</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+ly+'">PURIFIED · CIRCULAR DNA ONLY</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="'+ly+'">SEQUENCED · MAPPED · CLASSIFIED</text></g>';
  return g+'</svg>';
}
function scene(){return circScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var E={fade:$$("#scBase text",svg),ln:$$("#scLin .ln",svg),ci:$$("#scCir .ci",svg),chr:$("#scChr",svg),br:$$("#scBar .br",svg),cls:$("#scCls",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(v){return v<0?0:v>1?1:v}
  return function(p,b){
    if(!svg.isConnected)return;
    var din=seg(p,0,.22),pur=seg(p,.36,.56),map=seg(p,.66,.86),bars=seg(p,.78,.94),cls=seg(p,.88,.98);
    E.ln.forEach(function(el,i){var l=LIN[i],gi=cl(din*1.8-rnd(i+50)*.8),drift=(1-gi)*18,k=1-pur*.7;
      el.setAttribute("transform","translate("+l.x.toFixed(1)+" "+(l.y+drift).toFixed(1)+") scale("+k.toFixed(3)+")");op(el,b*gi*(1-cl(pur*1.4-rnd(i+70)*.4))*.95)});
    E.ci.forEach(function(el,i){var c=CIR[i],gi=cl(din*1.8-rnd(i+20)*.8),drift=(1-gi)*18;
      var m=cl(map*1.5-i*.033),ty=GY-16-c.r*.3;
      var x=c.x+(c.tx-c.x)*m,y=c.y+drift+(ty-c.y)*m,sc=(1+.18*pur*(1-m))*(1-.45*m);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") scale("+sc.toFixed(3)+")");op(el,b*gi*(1-.75*bars))});
    op(E.chr,b*seg(p,.5,.7));
    E.br.forEach(function(el){var h=+el.getAttribute("data-h")*bars;el.setAttribute("y",(GY-2-h).toFixed(1));el.setAttribute("height",h.toFixed(1));op(el,b*Math.min(1,bars*3))});
    op(E.cls,b*cls);E.fade.forEach(function(el){op(el,b*seg(p,.5,.7))});
    op(E.l1,b*seg(p,.08,.16)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}

/* the story scene (BL/BY/DB): how LFD-200 works, drawn in fine engraved line. ONE immune cell stays in frame for all three steps.
   Step 1 LFD-200 conjugates (antibody + glucocorticoid payload dots) dock onto VISTA on the cell surface.
   Step 2 VISTA internalizes: the conjugates are drawn into vesicles (lysosomes) and the payload is released inside the cell.
   Step 3 serum vs tissue: the ADC leaves serum in ~30 hours while free payload persists in tissue for 2 weeks or more.
   Sources: lifordi.com Technology (LFD-200, Pipeline) and the 2026-11-09 press release. Schematic; the curves are illustrative
   shapes, not plotted data. Driven by the scrubbed story progress. */
var CEL={c:[290,292],R:188};
var RC=[-84,-62,-40,-18,4];       /* VISTA receptor angles on the upper right of the membrane */
var DK=[-62,-18,-84];            /* the three receptors that get a conjugate */
function adcG(cls){
  /* one antibody, Fc along local +y, arms up; payload dots in gold */
  return '<g class="'+cls+'"><ellipse class="ab" cx="0" cy="13" rx="5.4" ry="12"/><ellipse class="ab" cx="-9" cy="-9" rx="5" ry="11.5" transform="rotate(38 -9 -9)"/><ellipse class="ab" cx="9" cy="-9" rx="5" ry="11.5" transform="rotate(-38 9 -9)"/>'+
    [[-6,4],[6,4],[-5,17],[5,17],[-14,-4],[14,-4],[-8,-16],[8,-16]].map(function(d){return '<circle class="py" cx="'+d[0]+'" cy="'+d[1]+'" r="2.2"/>'}).join("")+'</g>';
}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,C=CEL.c,R=CEL.R;
  function pol(r,a){a=a*Math.PI/180;return [C[0]+r*Math.cos(a),C[1]+r*Math.sin(a)]}
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"64 40 572 520":"70 34 730 510")+'" aria-hidden="true">';
  g+='<defs><radialGradient id="lglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#8fa3e6" stop-opacity=".14"/><stop offset="1" stop-color="#8fa3e6" stop-opacity="0"/></radialGradient></defs>';
  /* the immune cell: double membrane, engraved cytoplasm hatching, nucleus with chromatin */
  g+='<g id="cell"><circle cx="'+C[0]+'" cy="'+C[1]+'" r="'+(R+50)+'" fill="url(#lglow)" class="pg"/>';
  g+='<circle class="mem sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+R+'"/><circle class="mem2 sD" cx="'+C[0]+'" cy="'+C[1]+'" r="'+(R-7)+'"/>';
  for(i=0;i<60;i++){var a=i*6,p0=pol(R-12,a),p1=pol(R-24,a+2);g+='<path class="hat sD" d="M'+f(p0[0])+' '+f(p0[1])+'L'+f(p1[0])+' '+f(p1[1])+'"/>'}
  g+='<path class="nuc sD" d="M206 318C200 262 246 232 290 240C318 245 330 266 352 262C384 256 404 286 396 322C388 362 344 384 298 380C250 376 210 360 206 318Z"/>';
  g+='<path class="nuc2 sD" d="M222 318C218 274 252 254 288 258C312 261 324 280 348 278C374 276 386 298 380 324C374 352 340 366 300 364C258 362 226 350 222 318Z"/>';
  [[262,300],[300,292],[336,306],[280,336],[320,342],[352,330],[248,326]].forEach(function(q,k){g+='<path class="chr sD" d="M'+(q[0]-9)+' '+q[1]+'q4 -6 9 0t9 0"/>'});
  /* organelles: a few engraved mitochondria */
  [[176,228,30],[214,426,-20],[392,416,40]].forEach(function(m){g+='<g transform="translate('+m[0]+' '+m[1]+') rotate('+m[2]+')"><ellipse class="org sD" rx="20" ry="9"/><path class="org2 sD" d="M-14 0q3.5 -6 7 0t7 0t7 0t7 0"/></g>'});
  /* VISTA on the surface */
  RC.forEach(function(a){var s0=pol(R,a),s1=pol(R+16,a),hd=pol(R+21,a);g+='<path class="rcp sD" d="M'+f(s0[0])+' '+f(s0[1])+'L'+f(s1[0])+' '+f(s1[1])+'"/><circle class="rch sD" cx="'+f(hd[0])+'" cy="'+f(hd[1])+'" r="5"/>'});
  var vl=pol(R+30,4);
  g+='<text class="t" x="'+C[0]+'" y="'+(C[1]+R+38)+'" text-anchor="middle">'+(mob?'IMMUNE CELL':'IMMUNE CELL · VISTA+')+'</text>';
  g+='<text class="t" x="'+C[0]+'" y="'+(C[1]+8)+'" text-anchor="middle" id="nlab">NUCLEUS</text>';
  var vw=mob?18:40;g+='<path class="ldr" d="M'+f(vl[0]+4)+' '+f(vl[1])+'H'+f(vl[0]+4+vw)+'"/><text class="a" x="'+f(vl[0]+10+vw)+'" y="'+f(vl[1]+(mob?8:4))+'">VISTA</text></g>';
  /* lysosomes (step 2) */
  g+='<g id="lys">';DK.forEach(function(a,k){var q=pol(R-58,a);g+='<circle class="ly" data-k="'+k+'" cx="'+f(q[0])+'" cy="'+f(q[1])+'" r="0"/>'});
  var ql=pol(R-58,-62);g+=mob?'<path class="ldr" d="M'+f(ql[0]+22)+' '+f(ql[1]-22)+'L'+f(ql[0]+60)+' 74"/><text class="a" x="'+f(ql[0]+66)+'" y="80">LYSOSOME</text></g>':'<path class="ldr" d="M'+f(ql[0]+30)+' '+f(ql[1]+12)+'L574 '+f(ql[1]+60)+'"/><text class="a" x="580" y="'+f(ql[1]+64)+'">LYSOSOME · PAYLOAD RELEASED</text></g>';
  /* free glucocorticoid payload, released toward the nucleus (step 2) */
  g+='<g id="fp">';for(i=0;i<24;i++)g+='<circle class="pf" r="2.6"/>';g+='</g>';
  /* the conjugates */
  g+='<g id="adcs">';DK.forEach(function(a,k){g+=adcG("adc")});g+='<text class="a" id="alab" x="'+(mob?420:560)+'" y="'+(mob?80:70)+'">'+(mob?'LFD-200':'LFD-200 · 8 PAYLOADS')+'</text></g>';
  /* step 3: serum vs tissue, illustrative curves */
  var X0=mob?150:540,Y0=mob?470:430,XW=mob?340:230,YH=mob?300:250;
  g+='<g id="pk"><path class="ax" d="M'+X0+' '+(Y0-YH)+'V'+Y0+'H'+(X0+XW)+'"/>';
  g+='<path class="cv1" d="M'+X0+' '+(Y0-YH+20)+'C'+(X0+18)+' '+(Y0-YH+150)+' '+(X0+40)+' '+(Y0-20)+' '+(X0+90)+' '+(Y0-6)+'S'+(X0+180)+' '+(Y0-2)+' '+(X0+XW)+' '+(Y0-1)+'"/>';
  g+='<path class="cv2" d="M'+X0+' '+(Y0-30)+'C'+(X0+20)+' '+(Y0-150)+' '+(X0+50)+' '+(Y0-160)+' '+(X0+100)+' '+(Y0-150)+'S'+(X0+190)+' '+(Y0-120)+' '+(X0+XW)+' '+(Y0-96)+'"/>';
  g+='<text class="t" x="'+(X0+XW)+'" y="'+(Y0+26)+'" text-anchor="end">TIME →</text>';
  g+='<text class="a w" x="'+(X0+18)+'" y="'+(Y0-YH+14)+'">'+(mob?'ADC IN SERUM':'ADC IN SERUM · ~30 H')+'</text>';
  g+='<text class="a" x="'+(X0+70)+'" y="'+(Y0-176)+'">'+(mob?'PAYLOAD IN TISSUE':'PAYLOAD IN TISSUE · 2 WKS+')+'</text></g>';
  g+='</svg>';
  return g;
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#cell .sD"),fade:$$("#cell text, #cell .pg, #cell .ldr",svg),cell:$("#cell",svg),ad:$$("#adcs .adc",svg),al:$("#alab",svg),
    ly:$$("#lys .ly",svg),lyg:$("#lys",svg),fp:$$("#fp .pf",svg),pk:$("#pk",svg),c1:dl("#pk .cv1"),c2:dl("#pk .cv2"),ax:dl("#pk .ax")};
  var C=CEL.c,R=CEL.R,lastB=-1;
  function pol(r,a){a=a*Math.PI/180;return [C[0]+r*Math.cos(a),C[1]+r*Math.sin(a)]}
  /* payload targets: scattered around the nucleus, seeded */
  var T=[];for(var i=0;i<24;i++){var an=i*137.5,rr=70+(i*29%40);T.push([C[0]+rr*Math.cos(an*Math.PI/180)*1.1,C[1]+20+rr*Math.sin(an*Math.PI/180)*.8])}
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(x){x=Math.max(0,Math.min(1,x));return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: conjugates fly in from the upper right and dock onto VISTA */
    var dock=[seg(p,.02,.2),seg(p,.07,.25),seg(p,.12,.3)],inn=[seg(p,.36,.5),seg(p,.4,.54),seg(p,.44,.58)];
    var s3=seg(p,.68,.8);
    E.ad.forEach(function(el,k){var a=DK[k],d=ease(dock[k]),m=ease(inn[k]);
      var st=[700-k*30,40+k*70],dk=pol(R+44,a),ins=pol(R-58,a);
      var x=st[0]+(dk[0]-st[0])*d,y=st[1]+(dk[1]-st[1])*d;x+=(ins[0]-dk[0])*m;y+=(ins[1]-dk[1])*m;
      var rot=(a-90)*d+(-30+k*20)*(1-d);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+rot.toFixed(1)+") scale("+(1.35*(1-.2*m)).toFixed(3)+")");
      op(el,b*Math.min(1,dock[k]*4)*(1-.75*seg(p,.5+k*.03,.62+k*.03))*(1-s3*.9))});
    op(E.al,b*seg(p,.02,.1)*(1-seg(p,.28,.36)));
    /* step 2: vesicles form around them, payload released toward the nucleus */
    op(E.lyg,b*(1-s3*.85));
    E.ly.forEach(function(el,k){el.setAttribute("r",(30*ease(seg(p,.38+k*.04,.52+k*.04))).toFixed(1))});
    $$("text,.ldr",E.lyg).forEach(function(el){op(el,seg(p,.5,.56)*(1-seg(p,.64,.7)))});
    E.fp.forEach(function(el,k){var v=k%3,o=pol(R-58,DK[v]),q=ease(seg(p,.52+v*.03+(k%8)*.006,.66+v*.03+(k%8)*.006));
      el.setAttribute("cx",(o[0]+(T[k][0]-o[0])*q).toFixed(1));el.setAttribute("cy",(o[1]+(T[k][1]-o[1])*q).toFixed(1));
      op(el,b*Math.min(1,q*5)*(1-s3*.5))});
    /* step 3: the cell recedes, the curves draw */
    op(E.cell,1-(MOBILE()?.8:.45)*s3);
    op(E.pk,b*s3);draw(E.ax,s3);draw(E.c1,seg(p,.72,.86));draw(E.c2,seg(p,.78,.96));
  };
}

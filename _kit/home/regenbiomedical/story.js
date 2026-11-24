/* The story scene (DB/BL): ReGEN Biomedical's own production chain (regenbiomedical.com: cells expanded in small-scale
   stirred tank bioreactors; large amounts of robust, reproducible micro-tissues; micro-tissues assembled into functional
   macro-tissues, on automated platforms with offline and inline quality control), drawn as ONE fine-line scene that fills
   the frame: a stirred tank bioreactor, a microwell plate in section, and a macro-tissue construct. Calm (DT).
   Frame 0 is complete: all three stations drawn, cells turning slowly in the bioreactor.
   Step 1 (expand): the impeller turns and the cell suspension multiplies.
   Step 2 (form): cells are dispensed into the microwells and each well grows one spheroid.
   Step 3 (assemble): spheroids travel to the construct and pack into a macro-tissue, its outline drawing in the logo coral.
   Driven by scrubbed progress. No dash draws on non-scaling strokes (DR4). */
var SCW=760,SCH=560;
var TR1="M232 404C266 404 262 262 300 262H486";
var TR2="M488 330C522 330 532 330 560 330";
var BLOB="M630 258C674 258 704 290 704 330C704 374 670 402 630 402C588 402 556 374 556 330C556 288 586 258 630 258Z";
var WELLS=[318,354,390,426,462];
var CLU=(function(){var o=[];for(var r=-4;r<=4;r++){var y=330+r*16.5;for(var c=-5;c<=5;c++){var x=630+c*19+(r%2?9.5:0);var dx=(x-630)/62,dy=(y-330)/60;if(dx*dx+dy*dy<.86)o.push([x,y])}}
  o.sort(function(a,b){return (Math.hypot(a[0]-630,a[1]-330))-(Math.hypot(b[0]-630,b[1]-330))});return o})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'50 90 670 400':'40 70 690 470')+'" aria-hidden="true"><g id="scArt">';
  /* bioreactor: headplate, hub, open glass vessel, probes, liquid level, shaft */
  g+='<path class="wl sD" d="M66 158H244V170H66Z"/><path class="wo sD" d="M140 158V138H170V158"/><path class="wo sD" d="M98 158V146H108V158M204 158V148H214V158"/>';
  g+='<path class="wl sD" d="M80 170V398C80 420 94 432 116 432H194C216 432 230 420 230 398V170"/>';
  g+='<path class="wo sD" d="M103 170V318M210 170V292"/><path class="lq sD" d="M82 228C122 222 188 234 228 228"/><path class="wo sD" d="M155 170V384"/>';
  g+='</g><g id="scImp"><path class="im" d="M127 380L183 390M127 390L183 380"/><circle class="im" cx="155" cy="385" r="4"/></g>';
  /* transfer lines and the microwell plate in section */
  g+='<g id="scArt2"><path class="tl sD" d="'+TR1+'"/><path class="tl sD" d="'+TR2+'"/>';
  g+='<path class="wl sD" d="M296 300H484V352H296Z"/>';
  WELLS.forEach(function(x){g+='<path class="wo sD" d="M'+(x-13)+' 300V316A13 13 0 0 0 '+(x+13)+' 316V300"/>'});
  g+='</g>';
  /* the macro-tissue construct: outline in coral, drawn in step 3 */
  g+='<path class="ol" id="scOl" d="'+BLOB+'"/><path class="og" d="'+BLOB+'"/>';
  g+='<g id="scCu">';CLU.forEach(function(q,i){g+='<circle class="mt" cx="'+q[0].toFixed(1)+'" cy="'+q[1].toFixed(1)+'" r="8.6" data-i="'+i+'"/>'});g+='</g>';
  g+='<g id="scSp">';WELLS.forEach(function(x,i){g+='<circle class="sp" cx="'+x+'" cy="318" r="0" data-i="'+i+'"/>'});g+='</g>';
  g+='<g id="scCe">';for(var i=0;i<18;i++)g+='<circle class="ce" r="2.6" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="scTd">';for(var k=0;k<8;k++)g+='<circle class="ce" r="2.4" cx="0" cy="0"/>';g+='</g>';
  g+='<g id="scTs">';for(var m=0;m<4;m++)g+='<circle class="sp2" r="7" cx="0" cy="0"/>';g+='</g>';
  g+='<path id="scTr1" d="'+TR1+'" fill="none" stroke="none"/><path id="scTr2" d="'+TR2+'" fill="none" stroke="none"/>';
  if(!mob){
    g+='<g id="lRe"><text class="t" x="155" y="112" text-anchor="middle">BIOREACTOR</text></g>';
    g+='<g id="lMw"><text class="t" x="390" y="234" text-anchor="middle">MICROWELLS</text></g>';
    g+='<g id="lMt"><text class="t o" x="630" y="236" text-anchor="middle">MACRO-TISSUE</text></g>';
  }else{g+='<g id="lRe"></g><g id="lMw"></g><g id="lMt"></g>'}
  var ly=mob?478:500,lx=mob?70:80;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CELLS EXPANDED IN A BIOREACTOR':'CELLS EXPANDED IN A STIRRED TANK BIOREACTOR')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ONE MICRO-TISSUE PER WELL':'EACH MICROWELL FORMS ONE MICRO-TISSUE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ASSEMBLED INTO A MACRO-TISSUE':'MICRO-TISSUES ASSEMBLED INTO A MACRO-TISSUE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var OL=$("#scOl",svg),OLL=OL.getTotalLength();OL.style.strokeDasharray=OLL+" "+OLL;
  var P1=$("#scTr1",svg),P2=$("#scTr2",svg);
  var E={base:dl(".sD"),imp:$("#scImp",svg),ce:$$("#scCe .ce",svg),td:$$("#scTd .ce",svg),ts:$$("#scTs .sp2",svg),sp:$$("#scSp .sp",svg),mt:$$("#scCu .mt",svg),og:$(".og",svg),
    lRe:$("#lRe",svg),lMw:$("#lMw",svg),lMt:$("#lMt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function at(p,u){return p.getPointAtLength(Math.max(0,Math.min(1,u))*p.getTotalLength())}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.92);
    /* impeller: turns with the scroll, seen edge-on */
    var th=p*42,k=Math.cos(th);E.imp.setAttribute("transform","translate(155 0) scale("+(Math.abs(k)<.08?(k<0?-.08:.08):k).toFixed(3)+" 1) translate(-155 0)");op(E.imp,b);
    /* cells circulating in the vessel; the suspension grows denser in step 1 */
    var n=7+Math.round(11*sm(s1));
    E.ce.forEach(function(el,i){var a=(i/18)*Math.PI*2+p*9*(i%2?1:-.8),rx=44+(i%5)*6,ry=70+(i%4)*12;
      var x=155+Math.cos(a)*rx,y=332+Math.sin(a)*ry*.85;y=Math.max(244,Math.min(420,y));
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*(i<n?.9:0))});
    /* step 2: cells dispensed along the line into the wells; one spheroid grows in each well */
    var dsp=sm(seg(p,.36,.44))*(1-sm(seg(p,.6,.66)));
    E.td.forEach(function(el,i){var u=((i/8)+p*3.2)%1,q=at(P1,u);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*dsp*Math.min(1,(1-u)*8))});
    E.sp.forEach(function(el,i){var g=sm(seg(p,.4+.035*i,.56+.02*i));el.setAttribute("r",(9*g).toFixed(2));op(el,b*g)});
    /* step 3: spheroids carried to the construct and packed into the macro-tissue */
    var car=sm(seg(p,.68,.74))*(1-sm(seg(p,.9,.95)));
    E.ts.forEach(function(el,i){var u=((i/4)+p*2.4)%1,q=at(P2,u);el.setAttribute("cx",q.x.toFixed(1));el.setAttribute("cy",q.y.toFixed(1));op(el,b*car*Math.min(1,(1-u)*6,u*6))});
    var N=E.mt.length;E.mt.forEach(function(el,i){var g=sm(seg(p,.68+.2*i/N,.71+.2*i/N));op(el,b*g)});
    OL.style.strokeDashoffset=(OLL*(1-sm(s3))).toFixed(1);op(OL,b);op(E.og,b*(1-sm(s3)));
    op(E.lRe,b);op(E.lMw,b);op(E.lMt,b);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

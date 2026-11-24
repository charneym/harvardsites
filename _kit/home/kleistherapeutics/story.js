/* The story scene (DB/BL): Kleis's own mechanism (kleistherapeutics.co.uk and UKRI GtR 10145223: TG2 crosslinks matrix
   proteins like a glue; crosslinked tissue resists natural breakdown and builds up as fibrosis; Kleis's oral small-molecule
   TG2 inhibitors aim to stop this at its source), drawn as ONE fine-line scene that fills the frame, in the language of
   the firm's own matrix diagram: wavy matrix fibres, with TG2 crosslinks as small magenta zigzags.
   Frame 0 is complete: the matrix drawn, with fragments of healthy turnover drifting off it.
   Step 1 (renew): fragments break off and drift away as the matrix turns over.
   Step 2 (crosslink): magenta crosslinks draw in between the fibres, the matrix tightens and turnover stops.
   Step 3 (inhibit): small inhibitor molecules dock at each site, the crosslinks dissolve and the matrix relaxes and
   renews again. Driven by scrubbed progress. No dash draws on non-scaling strokes (DR4; nssfix.js is inlined too). */
var SCW=760,SCH=560;
var FIB=(function(){var o=[];for(var i=0;i<9;i++){var y0=140+i*41,amp=7+(i*7%5)*1.5,per=150+(i*37%4)*26,ph=i*53%120;o.push({y0:y0,amp:amp,per:per,ph:ph})}return o})();
function fy(f,x){return f.y0+f.amp*Math.sin((x+f.ph)/f.per*Math.PI*2)}
function fpath(f,x0,x1){var d="";for(var x=x0;x<=x1;x+=6)d+=(x===x0?"M":"L")+x+" "+fy(f,x).toFixed(1);return d}
var CROSS=['M120 470C170 380 190 250 260 150','M330 476C390 400 430 300 470 210S540 150 560 128','M520 472C560 410 600 330 690 250'];
var XL=(function(){var o=[],xs=[110,170,236,300,362,428,494,556,620,672];for(var i=0;i<8;i++){for(var k=0;k<2;k++){var x=xs[(i*3+k*5)%xs.length]+(k?12:-6);o.push([i,x])}}return o})();
function xlPath(i,x){var a=fy(FIB[i],x)+3.5,b=fy(FIB[i+1],x)-3.5,n=4,h=(b-a)/n,d="M"+x+" "+a.toFixed(1);for(var k=1;k<=n;k++)d+="L"+(x+(k%2?4.5:-4.5)).toFixed(1)+" "+(a+h*(k-.5)).toFixed(1)+"L"+x+" "+(a+h*k).toFixed(1);return d}
function hexPath(r){var d="";for(var k=0;k<6;k++){var a=Math.PI/6+k*Math.PI/3;d+=(k?"L":"M")+(Math.cos(a)*r).toFixed(2)+" "+(Math.sin(a)*r).toFixed(2)}return d+"Z"}
var FR=(function(){var o=[];for(var i=0;i<26;i++){var f=FIB[1+(i*5)%8],x=96+((i*97)%560);o.push([x,fy(f,x),(i*0.137)%1,i%3])}return o})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'50 110 670 440':'40 70 690 470')+'" aria-hidden="true"><g id="scG">';
  FIB.forEach(function(f,i){g+='<path class="'+(i%3===1?'wo':'wl')+' sD fb" d="'+fpath(f,70,700)+'"/>'});
  CROSS.forEach(function(d){g+='<path class="wo sD fb" d="'+d+'"/>'});
  g+='<g id="scXl">';XL.forEach(function(q){g+='<path class="xl" d="'+xlPath(q[0],q[1])+'"/>'});g+='</g>';
  g+='<g id="scIn">';XL.forEach(function(q){var cy=(fy(FIB[q[0]],q[1])+fy(FIB[q[0]+1],q[1]))/2;g+='<path class="inh" d="'+hexPath(6.5)+'" data-x="'+q[1]+'" data-y="'+cy.toFixed(1)+'"/>'});g+='</g>';
  g+='</g><g id="scFr">';FR.forEach(function(){g+='<circle class="fr" r="2.6" cx="0" cy="0"/>'});g+='</g>';
  if(!mob){g+='<g id="lMx"><text class="t" x="70" y="102">EXTRACELLULAR MATRIX</text></g>'}else{g+='<g id="lMx"></g>'}
  var ly=mob?535:522,lx=70;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'HEALTHY TURNOVER':'HEALTHY TURNOVER OF THE MATRIX')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TG2 CROSSLINKS BUILD UP':'TG2 CROSSLINKS BUILD UP INTO FIBROSIS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'TG2 INHIBITED':'TG2 INHIBITED, TURNOVER RESUMES')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),xl:dl("#scXl .xl"),inh:$$("#scIn .inh",svg),fr:$$("#scFr .fr",svg),G:$("#scG",svg),
    lMx:$("#lMx",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var N=E.xl.length,lastB=-1,CY=304;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* the matrix tightens while crosslinked, and relaxes once TG2 is inhibited */
    var comp=sm(seg(p,.4,.62))*(1-sm(seg(p,.8,.94))),k=1-.13*comp;
    E.G.setAttribute("transform","translate(0 "+(CY*(1-k)).toFixed(2)+") scale(1 "+k.toFixed(4)+")");
    /* crosslinks draw in through step 2 and dissolve as inhibitors dock in step 3 */
    E.xl.forEach(function(a,i){var t=i/N,d=sm(seg(p,.38+.16*t,.45+.16*t)),gone=sm(seg(p,.74+.12*t,.8+.12*t));
      a[0].style.strokeDashoffset=(a[1]*(1-d)).toFixed(1);op(a[0],b*(d>0?1:0)*(1-gone))});
    E.inh.forEach(function(el,i){var t=i/N,a=sm(seg(p,.68+.12*t,.76+.12*t)),x=+el.getAttribute("data-x"),y=+el.getAttribute("data-y");
      el.setAttribute("transform","translate("+(x+40*(1-a)).toFixed(1)+" "+(y-14*(1-a)).toFixed(1)+") rotate("+(90*(1-a)).toFixed(1)+")");op(el,b*a)});
    /* healthy turnover: fragments break off the fibres and drift away; they stop while the matrix is crosslinked */
    var act=Math.max(1-sm(seg(p,.36,.46)),sm(seg(p,.82,.94)));
    E.fr.forEach(function(el,i){var q=FR[i],u=(q[2]+p*3.4)%1,x=q[0]+(q[3]-1)*14*u,y=q[1]-6-34*u;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*act*.85*Math.min(1,u*6,(1-u)*3))});
    op(E.lMx,b);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}

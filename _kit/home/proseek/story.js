/* The story scene (BL/BY/DB): how OC-Triage works, after Proseek's own five-step workflow (Investor and Clinical laboratory
   pages: blood draw, Proseek reagent kit, clinical LC-MS (MRM), glycan + protein signals, clinical report) and their LeMBA
   method (lectin magnetic bead array). ONE scene in fine line, kept on screen throughout: a lectin-coated magnetic bead in a
   drop of serum full of glycoproteins, with the lab's mass-spec trace and the report card drawn faintly from the start.
   Step 1 (sample): glycoproteins drift in the serum. Step 2 (capture): the disease-specific glycoforms (rose-tipped glycans)
   dock on the bead's lectins; the rest drift off. Step 3 (measure): the captured proteins travel to the LC-MS and the MRM
   trace draws its peaks. Step 4 (report): the card lights and gives a likelihood result. Driven by the scrubbed progress. */
var SCW=760,SCH=520,BX=210,BY=285,BR=104;
var PSG=(function(){var s=11,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],i,t=0;
  /* free positions in the serum, clear of the bead, the labels and the instrument column */
  for(i=0;i<400&&a.length<17;i++){var x=40+R()*360,y=60+R()*440;
    if(Math.hypot(x-BX,y-BY)<BR+62)continue;if(x>380)continue;if(y<74&&x<230)continue;if(y>470)continue;
    if(a.some(function(b){return Math.hypot(b.x-x,b.y-y)<58}))continue;
    a.push({x:x,y:y,r:R()*360,tg:false})}
  /* the captured glycoforms: the six nearest the bead's right and upper face */
  var ang=[-150,-115,-80,-45,-10,25],used={};
  ang.forEach(function(A,k){var best=-1,bd=1e9;a.forEach(function(g,j){if(used[j])return;var d=Math.hypot(g.x-(BX+Math.cos(A*Math.PI/180)*200),g.y-(BY+Math.sin(A*Math.PI/180)*200));if(d<bd){bd=d;best=j}});
    used[best]=1;var g=a[best],u=[Math.cos(A*Math.PI/180),Math.sin(A*Math.PI/180)];g.tg=true;g.dx=BX+u[0]*(BR+50);g.dy=BY+u[1]*(BR+50);g.dr=Math.atan2(u[0],-u[1])*180/Math.PI+180;g.k=k});
  return a})();
var LEC=(function(){var a=[],i;for(i=0;i<18;i++)a.push(i/18*360+5);return a})();
function psGp(g){/* one glycoprotein: a folded protein with a branched glycan; target glycoforms carry rose terminal sugars */
  var t=g.tg?' tg':'';
  return '<g class="gp'+t+'"><path class="pr" d="M-13 2C-15-8-6-13 2-11C11-10 15-3 13 5C11 13 2 14-4 12C-10 11-12 7-13 2Z"/><path class="pr2" d="M-7 0c3-4 7 3 11-1M-6 6c4-2 6 1 10-1"/>'+
    '<path class="gl" d="M0-11V-21M0-21L-7-29M0-21L7-29M-7-29V-36M7-29V-36"/><rect class="sq" x="-2.6" y="-18.6" width="5.2" height="5.2"/><circle class="ci" cx="0" cy="-23" r="2.7"/>'+
    '<circle class="ci" cx="-7" cy="-29" r="2.7"/><circle class="ci" cx="7" cy="-29" r="2.7"/><path class="'+(g.tg?'dm':'ci')+'" d="M-7 -40l3 3.4-3 3.4-3-3.4zM7 -40l3 3.4-3 3.4-3-3.4z"/></g>'}
function psScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  /* the serum drop */
  g+='<path class="drop sD" d="M30 60H392M30 500H392"/>';
  /* the bead: a polymer shell around an iron-oxide core */
  g+='<circle class="bd sD" cx="'+BX+'" cy="'+BY+'" r="'+BR+'"/><circle class="bd2 sD" cx="'+BX+'" cy="'+BY+'" r="'+(BR-9)+'"/>';
  var hat='';for(i=-7;i<=7;i++){var y=BY+i*12,hw=Math.sqrt(Math.max(0,(BR-16)*(BR-16)-(i*12)*(i*12)));hat+='M'+(BX-hw).toFixed(1)+' '+y+'L'+(BX+hw).toFixed(1)+' '+y}
  g+='<path class="bh sD" d="'+hat+'"/>';
  LEC.forEach(function(A){var c=Math.cos(A*Math.PI/180),s=Math.sin(A*Math.PI/180),px=-s,py=c,x0=BX+c*BR,y0=BY+s*BR,x1=BX+c*(BR+10),y1=BY+s*(BR+10);
    g+='<path class="lc sD" d="M'+x0.toFixed(1)+' '+y0.toFixed(1)+'L'+x1.toFixed(1)+' '+y1.toFixed(1)+'M'+(x1+px*5).toFixed(1)+' '+(y1+py*5).toFixed(1)+'Q'+(x1+c*6).toFixed(1)+' '+(y1+s*6).toFixed(1)+' '+(x1-px*5).toFixed(1)+' '+(y1-py*5).toFixed(1)+'"/>'});
  /* the instrument column: MRM trace and the report card, faint until their step */
  g+='</g><g id="scMs"><path class="ax" d="M450 300V462H736"/><path class="tick" d="M450 462v5M520 462v5M590 462v5M660 462v5M730 462v5"/></g>';
  g+='<path class="tr" id="scTr" d="M452 458C470 458 478 456 486 450C490 446 492 380 496 380C500 380 502 452 508 456C520 460 530 458 540 452C545 448 546 330 552 330C558 330 560 450 566 455C580 460 592 458 604 450C608 444 610 404 614 404C618 404 620 452 626 456C640 459 652 456 662 446C666 440 668 352 674 352C680 352 682 450 688 455C702 459 716 458 734 458"/>';
  g+='<g id="scRp"><rect class="card" x="450" y="78" width="286" height="150"/><path class="cl" d="M470 168H716"/><path class="ckl" d="M470 162v12M716 162v12"/></g>';
  g+='<g id="scRpOn"><rect class="card2" x="450" y="78" width="286" height="150"/><path class="cl2" d="M470 168H716"/><path class="mk" id="scMk" d="M0 -9l7 -9h-14z"/><circle class="mkd" id="scMkd" r="4"/></g>';
  g+='<g id="scTx"><text class="t" x="34" y="44">SERUM · 10 µL</text>';
  g+='<text class="t" x="'+BX+'" y="'+(BY+5)+'" text-anchor="middle" id="tBead">LECTIN BEAD</text>';
  g+='<text class="t" x="450" y="286">LC-MS · MRM</text><text class="t" x="736" y="488" text-anchor="end">TIME</text>';
  g+='<text class="t" x="470" y="110">OC-TRIAGE REPORT</text><text class="t" x="470" y="200">LOW</text><text class="t" x="716" y="200" text-anchor="end">HIGH</text></g>';
  g+='<g id="scRpT"><text class="w" x="470" y="139">LOW LIKELIHOOD</text></g>';
  g+='<g id="scPep">';for(i=0;i<12;i++)g+='<circle class="pep" r="3"/>';g+='</g>';
  g+='<g id="scGp">';PSG.forEach(function(p){g+=psGp(p)});g+='</g>';
  return g+'</svg>';
}
function scene(){return psScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),tx:$("#scTx",svg),ms:$("#scMs",svg),tr:dl("#scTr")[0],rp:$("#scRp",svg),rpOn:$("#scRpOn",svg),rpT:$("#scRpT",svg),mk:$("#scMk",svg),mkd:$("#scMkd",svg),
    gp:$$("#scGp .gp",svg),pep:$$("#scPep .pep",svg)};
  var lastB=-1,TG=PSG.filter(function(g){return g.tg});
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.tx,b);op(E.ms,b*.9);op(E.rp,b*.9)}
    var drift=p*16,cap=sm2(seg(p,.25,.4)),meas=seg(p,.5,.66),rep=seg(p,.75,.8),mv=sm2(seg(p,.77,.88));
    /* glycoproteins: all drift gently; the target glycoforms dock on the lectins, the rest fade back */
    PSG.forEach(function(g,i){var el=E.gp[i],x=g.x+Math.sin(i*1.7+drift*.3)*6,y=g.y+Math.cos(i*1.3+drift*.25)*5,r=g.r+drift*(i%2?1:-1)*2;
      if(g.tg){x+=(g.dx-x)*cap;y+=(g.dy-y)*cap;var d=g.dr-r;d=((d%360)+540)%360-180;r=r+d*cap}
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+r.toFixed(1)+")");
      op(el,b*(g.tg?1:1-.62*cap))});
    /* captured proteins go to the LC-MS as peptides, and the MRM trace draws */
    E.pep.forEach(function(el,i){var g=TG[i%TG.length],q=sm2(Math.max(0,Math.min(1,(meas-i*.035)/.5))),x0=g.dx,y0=g.dy,x1=470+i*22,y1=452,
      x=x0+(x1-x0)*q,y=y0+(y1-y0)*q-Math.sin(q*Math.PI)*70;el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*(q>0&&q<1?1:0))});
    if(E.tr){E.tr[0].style.strokeDashoffset=(E.tr[1]*(1-sm2(seg(p,.54,.68)))).toFixed(1);op(E.tr[0],b)}
    op(E.ms,b*(.55+.45*seg(p,.5,.56)));
    /* the report */
    op(E.rpOn,b*rep);op(E.rpT,b*seg(p,.85,.9));var mx=716+(500-716)*mv;E.mk.setAttribute("transform","translate("+mx.toFixed(1)+" 168)");E.mkd.setAttribute("cx",mx.toFixed(1));E.mkd.setAttribute("cy","168");
  };
}
function sm2(x){return x*x*(3-2*x)}

/* The story scene (BL/BY/DB): inside the CapioCyte flow chamber, after Capio's own description and figure (Our Technology:
   biomimetic cell rolling and dendrimer-mediated cell capture), as ONE continuous scene in fine line. A long section of
   the chamber fills the frame: the chip floor below, carpeted with dendrimers carrying Y-shaped capture antibodies, blood
   cells streaming over it. Step 1 (roll): a tumour cell sinks to the chip and rolls along it, slowing. Step 2 (capture):
   it stops; antibodies on the dendrimers reach up and bind it many times over, while rolling leukocytes are washed away.
   Step 3 (analyse): the held cell is stained (DAPI nucleus, cytokeratin cytoplasm, CD45 negative) and can be recovered
   for RNA-Seq, FISH and NGS. Driven by the scrubbed progress. */
var SCW=760,SCH=490,FY=404,TY=64,CR=62,CX=410,CYY=FY-50-CR;
function capRnd(seed){var s=seed;return function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff}}
var CPB=(function(){var R=capRnd(9),a=[],i;for(i=0;i<16;i++){a.push({x:R()*760,y:TY+50+R()*96,k:R()<.7?'rbc':'wbc',v:.7+R()*.6,r:R()*180})}return a})();
var CPD=(function(){var a=[],x;for(x=30;x<=740;x+=26)a.push(x);return a})();
function capCell(r,n){var d='',i;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,rr=r+(i%2?3.2:-1.2)+Math.sin(i*1.7)*1.4;d+=(i?'L':'M')+(Math.cos(t)*rr).toFixed(1)+' '+(Math.sin(t)*rr).toFixed(1)}return d+'Z'}
function capScene(o){
  var g='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">',i;
  g+='<g id="scBase">';
  g+='<path class="wall sD" d="M10 '+TY+'H750"/><path class="wall2 sD" d="M10 '+(TY-8)+'H750"/>';
  g+='<path class="chip sD" d="M10 '+FY+'H750"/><path class="chip2 sD" d="M10 '+(FY+44)+'H750"/>';
  var hat='';for(i=0;i<37;i++){var x=18+i*20;hat+='M'+x+' '+(FY+44)+'l18 -40'}g+='<path class="hat sD" d="'+hat+'"/>';
  g+='<path class="flow sD" d="M40 '+(TY+30)+'H150M140 '+(TY+24)+'l10 6-10 6"/>';
  g+='<text class="t" x="166" y="'+(TY+34)+'">BLOOD FLOW, AT A CONTROLLED RATE</text>';
  g+='<text class="t" x="740" y="'+(FY+70)+'" text-anchor="end">CAPIOCYTE CHIP · DENDRIMER-COATED</text>';
  g+='<text class="t" x="20" y="'+(TY-20)+'">FLOW CHAMBER</text>';
  g+='</g>';
  g+='<g id="scCarpet">';CPD.forEach(function(x){
    g+='<g class="dd" data-x="'+x+'" transform="translate('+x+' '+FY+')"><circle class="den" cy="-6" r="6"/><circle class="den2" cy="-6" r="2.2"/>'+
      '<path class="abd" d="M0 -12V-21M0 -21l-5 -7M0 -21l5 -7"/></g>'});
  g+='</g>';
  g+='<defs><clipPath id="capCh"><rect x="10" y="'+TY+'" width="740" height="'+(FY-TY)+'"/></clipPath></defs>';
  g+='<g id="scBlood" clip-path="url(#capCh)">';CPB.forEach(function(c){g+=c.k==='rbc'?'<g class="bc"><ellipse class="rbc" rx="13" ry="6"/><ellipse class="rbc2" rx="6" ry="2.2"/></g>':'<g class="bc"><circle class="wbc" r="15"/><path class="wbn" d="M-7 -2c3-6 8-6 9 0s6 6 7 0"/></g>'});g+='</g>';
  g+='<g id="scW" clip-path="url(#capCh)"><g class="lw"><circle class="wbc" r="17"/><path class="wbn" d="M-8 -2c3-6 8-6 9 0s6 6 7 0"/></g><g class="lw"><circle class="wbc" r="17"/><path class="wbn" d="M-8 -2c3-6 8-6 9 0s6 6 7 0"/></g></g>';
  g+='<g id="scLinks"></g>';
  g+='<g id="scCtc"><path class="ctc" d="'+capCell(CR,64)+'"/><circle class="ck" r="'+(CR-6)+'"/><circle class="nu" r="25"/><circle class="dapi" r="25"/><path class="mark" d="M0 -'+(CR-12)+'V-'+(CR-26)+'"/></g>';
  g+='<g id="lb1"><text class="a" x="'+(CX+96)+'" y="'+(CYY-20)+'">CELL ROLLING</text><text x="'+(CX+96)+'" y="'+CYY+'">SLOWS AND ENRICHES CTCs</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(CX-96)+'" y="'+(FY-170)+'" text-anchor="end">MULTIVALENT CAPTURE</text><text x="'+(CX-96)+'" y="'+(FY-150)+'" text-anchor="end">ANTIBODIES ON DENDRIMERS</text><path class="lead" d="M'+(CX-100)+' '+(FY-142)+'L'+(CX-40)+' '+(FY-34)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="'+(CX+92)+'" y="'+(CYY-50)+'">DAPI+ · CK+ · CD45−</text><text x="'+(CX+92)+'" y="'+(CYY-30)+'">COUNTED AS A CTC</text>'+
    '<path class="lead" d="M'+CX+' '+(CYY-CR-14)+'V'+(TY+66)+'M'+(CX-6)+' '+(TY+74)+'l6 -8 6 8"/><text class="a" x="'+(CX-16)+'" y="'+(CYY-104)+'" text-anchor="end">OR RECOVERED FOR</text><text x="'+(CX-16)+'" y="'+(CYY-84)+'" text-anchor="end">RNA-SEQ · FISH · NGS</text></g>';
  return g+'</svg>';
}
function scene(){return capScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),carpet:$("#scCarpet",svg),dd:$$("#scCarpet .dd",svg),bc:$$("#scBlood .bc",svg),lw:$$("#scW .lw",svg),
    links:$("#scLinks",svg),ctc:$("#scCtc",svg),ck:$("#scCtc .ck",svg),dapi:$("#scCtc .dapi",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var NS="http://www.w3.org/2000/svg",LK=[];
  CPD.forEach(function(x){if(Math.abs(x-CX)<CR*.8){var p=document.createElementNS(NS,"path");p.setAttribute("class","lnk");E.links.appendChild(p);LK.push([p,x])}});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function tr(el,x,y,r){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(r?" rotate("+r.toFixed(1)+")":""))}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.carpet,b)}
    var sink=sm2(seg(p,.02,.16)),roll=seg(p,.1,.36),bind=sm2(seg(p,.4,.56)),wash=sm2(seg(p,.46,.66)),stain=sm2(seg(p,.7,.86));
    /* rolling decelerates into the capture point */
    var rq=1-(1-roll)*(1-roll),x=70+(CX-70)*rq,y=150+(CYY-150)*sink;
    tr(E.ctc,x,y,(x-70)/CR*57.3);op(E.ctc,b);
    /* the blood stream keeps moving with the scroll */
    E.bc.forEach(function(el,i){var c=CPB[i],xx=((c.x+p*900*c.v)%820)-30;tr(el,xx,c.y,c.r+p*200);op(el,b*.75*(1-.85*stain))});
    E.lw.forEach(function(el,i){var bx=i?600:150,xx=bx+p*90+wash*520*(i?1.2:1);tr(el,xx,FY-35,(p*90)/17*57.3);op(el,b*(1-wash))});
    /* antibodies reach up to the membrane and hold the cell */
    LK.forEach(function(a){var dx=a[1]-CX,top=CYY+Math.sqrt(Math.max(CR*CR-dx*dx,0))-2,y0=FY-21,yy=y0+(top-y0)*bind;
      a[0].setAttribute("d","M"+a[1]+" "+y0+"L"+(a[1]+dx*.06*bind).toFixed(1)+" "+yy.toFixed(1));op(a[0],b*bind)});
    E.dd.forEach(function(el){var dx=+el.getAttribute("data-x")-CX;el.classList.toggle("on",bind>.5&&Math.abs(dx)<CR*.8)});
    op(E.ck,stain*.9);op(E.dapi,stain);
    op(E.l1,b*seg(p,.12,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}
function sm2(x){return x*x*(3-2*x)}

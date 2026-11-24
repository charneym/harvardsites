/* The story scene (BL/BY/DB): Neovia's mechanism, from neoviaoncology.net and the release of 2 September 2026 ("Many
   established topoisomerase-directed therapies act as interfacial poisons, trapping enzyme-DNA cleavage complexes and
   generating DNA damage" / NEV-801 "combines novel analogs related to irinotecan and etoposide in a plasma-stable
   architecture engineered for controlled release in tumor microenvironments" / "Rather than trapping the DNA cleavage
   complex, NEV-801 inhibits catalytic turnover" of Top1 and Top2α). ONE continuous scene on screen for all three steps:
   a DNA double helix with Topoisomerase I (a ring clamp) and Topoisomerase II alpha (a two-lobed dimer) working on it,
   their turnover drawn as circling arcs. Step 1: a conventional poison docks on Top2 at the DNA; the cleavage complex is
   trapped and a break flares. Step 2: the break clears; the NEV-801 conjugate (an irinotecan-related hexagon and an
   etoposide-related ring joined by a linker) drifts in and the linker releases the two analogs. Step 3: each analog seats
   on its enzyme; the turnover arcs stop and fade, and the DNA stays whole. Every element is driven by the scrubbed story
   progress. Labels sit in clear bands below the enzymes and under the DNA (DR). */
var SCW=760,SCH=480,CY=250,T1={x:220,rx:70,ry:94},T2={x:530,rx:86,ry:108};
function nvHelix(){var a="",b="",r="",x,n=0,A=34,P=150;for(x=24;x<=736;x+=4){var ph=(x-24)/P*Math.PI*2,y1=CY+A*Math.sin(ph),y2=CY-A*Math.sin(ph);a+=(n?"L":"M")+x+" "+y1.toFixed(1);b+=(n?"L":"M")+x+" "+y2.toFixed(1);n++}
  for(x=30;x<=732;x+=12){var p2=(x-24)/P*Math.PI*2,u=CY+A*Math.sin(p2),d=CY-A*Math.sin(p2);if(Math.abs(u-d)>8)r+="M"+x+" "+u.toFixed(1)+"V"+d.toFixed(1)}
  return {a:a,b:b,r:r}}
function arcP(cx,cy,rx,ry,a0,a1){var p=function(a){return (cx+rx*Math.cos(a)).toFixed(1)+" "+(cy+ry*Math.sin(a)).toFixed(1)};return "M"+p(a0)+"A"+rx+" "+ry+" 0 0 1 "+p(a1)}
function ell(cx,cy,rx,ry){return "M"+(cx-rx)+" "+cy+"A"+rx+" "+ry+" 0 1 1 "+(cx+rx)+" "+cy+"A"+rx+" "+ry+" 0 1 1 "+(cx-rx)+" "+cy+"Z"}
/* the Top2 dimer outline, drawn on a unit frame and mapped to its place (uniform stroke, no scaled transform) */
function top2(){var sx=T2.rx/68,sy=T2.ry/72,f=function(x,y){return (T2.x+(x-520)*sx).toFixed(1)+" "+(CY+(y-262)*sy).toFixed(1)};
  return "M"+f(520,190)+"C"+f(540,190)+" "+f(552,204)+" "+f(556,218)+"C"+f(578,222)+" "+f(588,242)+" "+f(588,262)+"C"+f(588,300)+" "+f(560,334)+" "+f(520,334)+"C"+f(480,334)+" "+f(452,300)+" "+f(452,262)+"C"+f(452,242)+" "+f(462,222)+" "+f(484,218)+"C"+f(488,204)+" "+f(500,190)+" "+f(520,190)+"Z"}
function nvScene(o){
  var g='',mob=o.mob,H=nvHelix();
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="rung sD" d="'+H.r+'"/><path class="dna sD" d="'+H.a+'"/><path class="dna sD" d="'+H.b+'"/>';
  /* Topoisomerase I: a ring clamp around the duplex, its inner domain contour */
  g+='<path class="enz sD" d="'+ell(T1.x,CY,T1.rx,T1.ry)+'"/><path class="enz2 sD" d="'+ell(T1.x,CY,T1.rx-14,T1.ry-16)+'"/>';
  /* Topoisomerase II alpha: a two-lobed dimer around the duplex, the gate seam top and bottom */
  g+='<path class="enz sD" d="'+top2()+'"/><path class="enz2 sD" d="M'+T2.x+' '+(CY-T2.ry+8)+'V'+(CY-48)+'M'+T2.x+' '+(CY+48)+'V'+(CY+T2.ry-6)+'"/>';
  g+='<text class="t" x="24" y="22">DNA · TOPOISOMERASE I AND II</text>';
  g+='<text class="t lb" x="'+T1.x+'" y="'+(CY+T1.ry+28)+'" text-anchor="middle">TOP1</text><text class="t lb" x="'+T2.x+'" y="'+(CY+T2.ry+28)+'" text-anchor="middle">TOP2α</text>';
  g+='</g>';
  /* catalytic turnover: two arcs circling each enzyme */
  g+='<g id="act1" class="act"><path d="'+arcP(T1.x,CY,T1.rx+16,T1.ry+16,Math.PI*1.08,Math.PI*1.42)+'"/><path d="'+arcP(T1.x,CY,T1.rx+16,T1.ry+16,Math.PI*1.58,Math.PI*1.92)+'"/></g>';
  g+='<g id="act2" class="act"><path d="'+arcP(T2.x,CY,T2.rx+16,T2.ry+14,Math.PI*1.08,Math.PI*1.42)+'"/><path d="'+arcP(T2.x,CY,T2.rx+16,T2.ry+14,Math.PI*1.58,Math.PI*1.92)+'"/></g>';
  /* step 1: a conventional poison wedged into the Top2 cleavage complex, and the DNA break it causes */
  g+='<g id="poi"><path class="dt" d="M0 -12L12 0L0 12L-12 0Z"/></g>';
  var X=T2.x,u=CY-46,d=CY+46;
  g+='<g id="brk" class="brk"><path d="M'+X+' '+u+'V'+(u-14)+'M'+(X+20)+' '+(u+6)+'L'+(X+30)+' '+(u-4)+'M'+(X-20)+' '+(u+6)+'L'+(X-30)+' '+(u-4)+'M'+X+' '+d+'V'+(d+14)+'M'+(X+20)+' '+(d-6)+'L'+(X+30)+' '+(d+4)+'M'+(X-20)+' '+(d-6)+'L'+(X-30)+' '+(d+4)+'"/></g>';
  /* steps 2-3: the NEV-801 conjugate, two analogs joined by a linker; they separate and seat on their enzymes */
  g+='<path id="lnk" class="ln" d="M0 0H10"/>';
  g+='<g id="hA"><path class="tt" d="M0 -12L10.4 -6V6L0 12L-10.4 6V-6Z"/></g>';
  g+='<g id="hB"><circle class="tt" r="11"/><circle class="tti" r="4"/></g>';
  g+='<g id="lb1"><text class="a" x="24" y="'+(SCH-14)+'">POISONS TRAP THE CLEAVAGE COMPLEX</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="'+(SCH-14)+'">NEV-801 RELEASES TWO ANALOGS</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="'+(SCH-14)+'">TOP1 AND TOP2α TURNOVER STOPS</text></g>';
  return g+'</svg>';
}
function scene(){return nvScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),a1:$("#act1",svg),a2:$("#act2",svg),poi:$("#poi",svg),brk:$("#brk",svg),
    lnk:$("#lnk",svg),hA:$("#hA",svg),hB:$("#hB",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),enz:$$("#scBase .enz",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function mv(el,x,y,r){el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")"+(r?" rotate("+r.toFixed(1)+")":""))}
  function L(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var inn=seg(p,0,.1);
    /* step 1: the poison docks on Top2 at the DNA; Top2's turnover freezes there and the break flares */
    var d1=seg(p,.05,.2),clr=seg(p,.34,.42);
    mv(E.poi,L(700,T2.x,d1),L(70,CY,d1),d1*90);op(E.poi,b*seg(p,.04,.09)*(1-clr));
    op(E.brk,b*seg(p,.18,.26)*(1-clr));
    /* steps 2-3: the conjugate drifts in, the linker releases, each analog seats on its enzyme */
    var c2=seg(p,.4,.55),sp=seg(p,.56,.66),dk=seg(p,.7,.84);
    var cx=L(690,375,c2),cy=L(46,70,c2);
    var ax=L(cx-24-sp*26,T1.x,dk),ay=L(cy,CY-T1.ry-4,dk),bx=L(cx+24+sp*26,T2.x,dk),by=L(cy,CY-T2.ry-4,dk);
    mv(E.hA,ax,ay,c2*60);mv(E.hB,bx,by,0);var on=b*seg(p,.38,.44);op(E.hA,on);op(E.hB,on);
    E.lnk.setAttribute("d","M"+(cx-14-sp*26).toFixed(1)+" "+cy.toFixed(1)+"H"+(cx+14+sp*26).toFixed(1));op(E.lnk,on*(1-sp));
    /* turnover arcs spin while the enzymes work; Top2's stalls under the poison, both stop under NEV-801 */
    var stall2=Math.max(seg(p,.12,.2)*(1-clr),dk),stall1=dk;
    E.a1.setAttribute("transform","rotate("+(p*720).toFixed(1)+" "+T1.x+" "+CY+")");E.a2.setAttribute("transform","rotate("+(-p*560).toFixed(1)+" "+T2.x+" "+CY+")");
    op(E.a1,b*inn*(1-.92*stall1));op(E.a2,b*inn*(1-.92*stall2));
    E.enz.forEach(function(el,k){el.classList.toggle("off",k==0?dk>.5:(stall2>.5))});
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.34)));op(E.l2,b*seg(p,.44,.5)*(1-seg(p,.64,.68)));op(E.l3,b*seg(p,.78,.86));
  };
}

/* The story scene (BL/BY/DB/CX): Annate's platform as described on annatebitherapeutics.com/approach, drawn as ONE
   continuous engraved scene that stays on screen for all three steps. Right: a target cell in section, with its membrane,
   nucleus, organelles and the surface antigens that face the blood. Left: HDL particles carrying ApoL1, drifting in the
   circulation. Step 1 the cell and the particles engrave in. Step 2 bispecific antibodies dock on the antigens, one arm on
   the antigen and the teal arm reaching out, and each catches an HDL particle. Step 3 the complexes travel inward to the
   lysosome, which lights up as the delivery endpoint. */
var SCW=760,SCH=520,CX=516,CY=258,CR=188,LX=448,LY=300,LR=25;
var AGS=(function(){var d=[130,148,164,180,196,212,232],ab=[0,1,1,1,1,1,0],a=[];
  d.forEach(function(g,i){a.push({th:g*Math.PI/180,ab:!!ab[i],d:(i%3)*.05})});return a})();
var HDL=(function(){var p=[[74,96],[158,152],[48,236],[142,300],[86,382],[196,74],[182,430],[30,154],[108,462],[242,230],[254,370]],a=[],j=0;
  p.forEach(function(q,i){var t=null;if(i<5){while(!AGS[j].ab)j++;t=j;j++}a.push({x:q[0],y:q[1],tgt:t,ph:i*1.3,r:13+(i%3)*1.5})});return a})();
function cellScene(o){
  var f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">APOL1 · BISPECIFIC DELIVERY</text>';
  g+='<text class="t tr" x="742" y="14" text-anchor="end">ANN-01M</text>';
  g+='</g>';
  g+='<g id="scFlow"><path class="flw sD" d="M8 108C88 76 176 96 268 150"/><path class="flw sD" d="M4 268C96 250 190 268 272 320"/><path class="flw sD" d="M12 430C104 418 192 404 266 362"/></g>';
  g+='<g id="scCell"><circle class="gfill" cx="'+CX+'" cy="'+CY+'" r="'+CR+'"/>';
  g+='<circle class="gr sD" cx="'+CX+'" cy="'+CY+'" r="'+CR+'"/><circle class="gr2 sD" cx="'+CX+'" cy="'+CY+'" r="'+(CR-7)+'"/>';
  g+='<circle class="lm sD" cx="562" cy="236" r="62"/><circle class="lm sD" cx="562" cy="236" r="56"/><circle class="lm sD" cx="576" cy="224" r="12"/>';
  g+='<path class="lm sD" d="M524 322c22 13 50 15 74 2M516 338c26 17 62 19 92 0M612 178c9 17 11 34 5 51"/>';
  g+='<circle class="lm sD" cx="552" cy="346" r="11"/><circle class="lm sD" cx="614" cy="308" r="9"/><circle class="lm sD" cx="478" cy="190" r="10"/>';
  g+='</g>';
  g+='<g id="scLys"><circle class="lys" cx="'+LX+'" cy="'+LY+'" r="'+LR+'"/><circle class="lysi" cx="'+LX+'" cy="'+LY+'" r="'+(LR-7)+'"/></g>';
  g+='<g id="scAg">';
  AGS.forEach(function(A){var c=Math.cos(A.th),s=Math.sin(A.th);
    g+='<g class="ag"><path class="lm sD" d="M'+f(CX+CR*c)+' '+f(CY+CR*s)+'L'+f(CX+(CR+11)*c)+' '+f(CY+(CR+11)*s)+'"/><circle class="agh" cx="'+f(CX+(CR+14)*c)+'" cy="'+f(CY+(CR+14)*s)+'" r="3.2"/></g>'});
  g+='</g>';
  g+='<g id="scAb">';
  AGS.forEach(function(A,k){if(!A.ab)return;
    g+='<g class="ab" data-k="'+k+'"><path class="abs" d="M0 0H20M20 0L33 11"/><path class="aba" d="M20 0L33 -11"/></g>'});
  g+='</g>';
  g+='<g id="scHdl">';
  HDL.forEach(function(H,k){g+='<g class="cp" data-k="'+k+'"><circle class="ch" r="'+H.r+'"/><circle class="chi" r="'+f(H.r*.56)+'"/><path class="cf" d="M'+f(-H.r*.34)+' '+f(H.r*.3)+'L'+f(H.r*.34)+' '+f(-H.r*.3)+'"/></g>'});
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="18" y="514">APOL1 IN CIRCULATING HDL</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">BISPECIFIC · ANTIGEN + APOL1 COMPLEX</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">DELIVERED TO THE LYSOSOME</text></g>';
  return g+'</svg>';
}
function scene(){return cellScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),flow:dl("#scFlow .flw"),
    cell:dl("#scCell .sD"),fill:$("#scCell .gfill",svg),
    ag:$$(".ag",svg),agh:$$(".agh",svg),
    ab:$$(".ab",svg).map(function(el){return {el:el,A:AGS[+el.getAttribute("data-k")]}}),
    hdl:$$(".cp",svg).map(function(el){return {el:el,H:HDL[+el.getAttribute("data-k")]}}),
    lys:$("#scLys .lys",svg),lysi:$("#scLys .lysi",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var grow=seg(p,0,.18),flow=seg(p,.02,.3),dock=seg(p,.3,.56),carry=seg(p,.62,.92),lys=seg(p,.72,.96);
    draw(E.flow,b*flow);
    draw(E.cell,Math.min(1,Math.max(b*b,grow*1.2)));
    op(E.fill,b*(.45+.55*lys));
    E.ag.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,(grow*1.5-i*.08))))});
    E.agh.forEach(function(el,i){el.style.fill=dock>.5?"":""});
    /* the antibodies dock on the antigens, their reaching arm turned outward */
    E.ab.forEach(function(B,i){
      var t=Math.min(1,Math.max(0,(dock-B.A.d)*1.6)),c=Math.cos(B.A.th),s=Math.sin(B.A.th);
      var r=CR+15+(1-t)*26;
      B.el.setAttribute("transform","translate("+(CX+r*c).toFixed(1)+" "+(CY+r*s).toFixed(1)+") rotate("+(B.A.th*180/Math.PI+180).toFixed(1)+")");
      op(B.el,b*t);
    });
    /* the HDL particles drift, are caught by the antibody arms, then travel inward to the lysosome */
    E.hdl.forEach(function(P,i){
      var H=P.H,x=H.x,y=H.y,sc=1;
      var dr=Math.sin((p*4+H.ph))*4;
      if(H.tgt!==null){
        var A=AGS[H.tgt],c=Math.cos(A.th),s=Math.sin(A.th);
        var gx=CX+(CR+56)*c,gy=CY+(CR+56)*s;
        var t=Math.min(1,Math.max(0,(dock-A.d)*1.5));
        x=x+(gx-x)*t;y=y+(gy-y)*t;
        var u=Math.min(1,Math.max(0,(carry-A.d*.6)*1.4));
        if(u>0){x=x+(LX-x)*u;y=y+(LY-y)*u;sc=1-.55*u}
        op(P.el,b*(1-Math.max(0,(u-.82)/.18)));
      }else{y=y+dr;op(P.el,b*.55*(1-lys*.4))}
      P.el.setAttribute("transform","translate("+x.toFixed(1)+" "+(y+(H.tgt===null?0:dr*.3)).toFixed(1)+") scale("+sc.toFixed(3)+")");
    });
    if(E.lys){op(E.lys,b*(.3+.7*lys));E.lys.setAttribute("r",(LR+6*lys).toFixed(1))}
    if(E.lysi)op(E.lysi,b*lys*.9);
    op(E.l1,b*seg(p,.06,.16)*(1-seg(p,.28,.34)));op(E.l2,b*seg(p,.38,.46)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.78,.88));
  };
}
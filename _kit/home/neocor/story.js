/* The story scene (BL/BY/DB): Neocor's gene therapy, as ONE continuous scene driven by the scrubbed story progress.
   A strip of myocardium: rows of cardiomyocytes joined end to end at intercalated discs, one central nucleus each, and a
   capillary running beneath them. Step 1: after a heart attack, or in dilated cardiomyopathy, a patch of cardiomyocytes
   dies and stiff scar tissue (fibrosis) fills the gap. Step 2: a viral vector, given as a single intravenous injection,
   reaches the heart through the circulation and delivers the gene for the protein Neocor's founders identified and patented.
   Step 3: the protein protects the surviving cells, reactivates their ability to divide, and keeps scar tissue from forming:
   new cardiomyocytes refill the patch and the fibrosis recedes. Sources: Neocor i-Lab 2025 press release (15 Oct 2025),
   neocor.fr ("Promoting cardiomyocyte renewal", "Preventing cardiac fibrosis"). */
var SCW=760,SCH=640;
var CELLS=(function(){
  var s=2023,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},out=[],rows=4,X0=24,X1=736,Y0=42,rh=72,gap=12;
  for(var j=0;j<rows;j++){
    var x=X0-(j%2?44:0)+R()*10,y=Y0+j*(rh+gap);
    while(x<X1){var w=96+R()*44,x2=Math.min(x+w,X1),xa=Math.max(x,X0);
      if(x2-xa>34){var cx=(xa+x2)/2,cy=y+rh/2;
        /* the injured patch: an ellipse around the middle of the strip */
        var dx=(cx-392)/170,dy=(cy-208)/128,inj=dx*dx+dy*dy<1;
        out.push({x:xa,y:y,w:x2-xa,h:rh-4+R()*6,cx:cx,cy:cy,inj:inj,t:R(),na:(R()-.5)*.3})}
      x=x2+gap*.6}
  }
  return out})();
var VEC=(function(){var a=[],s=7;for(var i=0;i<14;i++){s=(s*1103515245+12345)&0x7fffffff;a.push({d:i/14,o:(s/0x7fffffff)})}return a})();
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='';
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><pattern id="fzp" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(38)"><path d="M0 0V9" class="fzl"/></pattern>'+
     '<clipPath id="myoclip"><rect x="24" y="30" width="712" height="358"/></clipPath></defs>';
  g+='<g id="scBase"><path class="frm sD" d="M24 30H736M24 388H736"/>';
  g+='<path class="cap sD" d="M24 522C150 502 250 542 392 522S640 502 736 522"/><path class="cap sD" d="M24 566C150 546 250 586 392 566S640 546 736 566"/>';
  g+='<text class="t" x="24" y="20">MYOCARDIUM · CARDIOMYOCYTES</text><text class="t" x="24" y="'+(SCH-14)+'">CIRCULATION</text></g>';
  g+='<g clip-path="url(#myoclip)"><ellipse id="fz" cx="392" cy="208" rx="0" ry="0" fill="url(#fzp)" class="fz"/></g>';
  g+='<g id="scCells" clip-path="url(#myoclip)">';
  CELLS.forEach(function(c,k){
    var hw=c.w/2,hh=c.h/2;
    g+='<g class="cm'+(c.inj?' inj':'')+(c.t<.33?' c1':c.t<.66?' c2':' c3')+'" data-k="'+k+'" transform="translate('+f(c.cx)+' '+f(c.cy)+')">'+
      '<rect class="cb" x="'+f(-hw)+'" y="'+f(-hh)+'" width="'+f(c.w)+'" height="'+f(c.h)+'" rx="10"/>'+
      '<path class="ic" d="M'+f(-hw+4)+' '+f(-hh+7)+'h5v'+f(hh*.8)+'h-4v'+f(hh*.9)+'M'+f(hw-4)+' '+f(-hh+7)+'h-5v'+f(hh*.9)+'h4v'+f(hh*.8)+'"/>'+
      '<ellipse class="nu" cx="0" cy="0" rx="13" ry="6.5" transform="rotate('+f(c.na*57)+')"/>'+
      '<circle class="gx" cx="0" cy="0" r="3.6"/></g>';
  });
  g+='</g>';
  g+='<g id="scVec">';VEC.forEach(function(v,i){g+='<path class="vc" data-i="'+i+'" d="M0 -7L6.1 -3.5L6.1 3.5L0 7L-6.1 3.5L-6.1 -3.5Z"/>'});g+='</g>';
  g+='<g id="lb1"><text class="a" x="24" y="436">CARDIOMYOCYTES LOST · SCAR TISSUE FORMS</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="436">VIRAL VECTOR · ONE INTRAVENOUS INJECTION</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="436">CELLS PROTECTED · RENEWED · NO SCAR</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),fz:$("#fz",svg),
    cm:$$(".cm",svg).map(function(el){var k=+el.getAttribute("data-k");return {el:el,c:CELLS[k],gx:$(".gx",el),k:k}}),
    vc:$$(".vc",svg).map(function(el){return {el:el,v:VEC[+el.getAttribute("data-i")]}}),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var path=$$("#scBase .cap",svg)[0],PL=path&&path.getTotalLength?path.getTotalLength():0,lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var grow=seg(p,0,.14),die=seg(p,.14,.32),fzI=seg(p,.2,.36),dlv=seg(p,.4,.64),heal=seg(p,.7,.92);
    E.cm.forEach(function(F){
      var gi=Math.min(1,Math.max(0,grow*1.8-(F.c.cx-24)/712*.6)),sc=1,o=gi,dead=0;
      if(F.c.inj){
        var dd=Math.min(1,Math.max(0,die*1.4-F.c.t*.4));
        var hh=Math.min(1,Math.max(0,heal*1.5-F.c.t*.5));
        dead=dd*(1-hh);sc=1-.4*dead;o=gi*(1-.8*dead);
      }
      F.el.setAttribute("transform","translate("+F.c.cx.toFixed(1)+" "+F.c.cy.toFixed(1)+") scale("+(sc*(.94+.06*gi)).toFixed(4)+")");
      F.el.classList.toggle("dead",dead>.5);
      op(F.el,b*o);
      op(F.gx,b*gi*Math.min(1,Math.max(0,dlv*1.6-(F.c.inj?.3:.5)-F.c.t*.25)));
    });
    var fr=fzI*(1-heal);if(E.fz){E.fz.setAttribute("rx",(170*fr).toFixed(1));E.fz.setAttribute("ry",(128*fr).toFixed(1));op(E.fz,b*Math.min(1,fr*1.4))}
    E.vc.forEach(function(V){var u=dlv*1.5-V.v.d*.5;
      if(!(u>0&&u<1.05)||!PL){op(V.el,0);return}
      var x,y,stop=.3+V.v.o*.4;
      if(u<.6){var pt=path.getPointAtLength(PL*stop*(u/.6));x=pt.x;y=pt.y-14}
      else{var k=Math.min(1,(u-.6)/.4),pt2=path.getPointAtLength(PL*stop);x=pt2.x+(V.v.o-.5)*120*k;y=pt2.y-14-(pt2.y-14-(120+V.v.o*170))*k}
      V.el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+(u*120).toFixed(0)+")");
      op(V.el,b*Math.min(1,u*8)*(1-seg(u,.86,1.04)))});
    op(E.l1,b*seg(p,.18,.26)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.78,.86));
  };
}

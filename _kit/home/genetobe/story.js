/* The story scene (DB): GeneToBe's own MiCas9 mechanism, drawn as ONE continuous engraved scene and scrubbed by the
   pinned story. A B-DNA duplex runs the full width of the frame; the bilobed Cas9 nuclease — hatched like an engraving —
   is clamped on the target site, with the Brex27 peptide drawn as its tail. Step 1: the nuclease cuts both strands and
   the duplex parts. Step 2: Brex27 recruits RAD51, which assembles as a filament along the resected ends. Step 3:
   homology-directed repair writes the donor in, the duplex closes, and the outcome bars below swing: more precise
   knock-in, fewer unwanted indels. Sources: genetobe.com/science and Ma, Ruan, Song et al., "MiCas9 increases large size
   gene knock-in rates and reduces undesirable on-target and off-target indel edits", Nat Commun 11, 6082 (2020). No
   invented numbers: the bars are labelled directions, not values. */
var SCW=760,SCH=548;
var CY=228,AMP=66,PER=210,X0=20,X1=740,CUT=388;
function hx(x,ph){return CY+AMP*Math.sin((x-X0)/PER*Math.PI*2+ph)}
function strand(ph,a,b){var d="",n=0,x;for(x=a;x<=b+.4;x+=4){d+=(n++?"L":"M")+x.toFixed(1)+" "+hx(x,ph).toFixed(1)}return d}
function rungList(a,b){var R=[],x;for(x=X0+8;x<=X1-4;x+=13){if(x<a||x>b)continue;R.push([x,hx(x,0),hx(x,Math.PI)])}return R}
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="casclip"><ellipse cx="368" cy="158" rx="130" ry="84" transform="rotate(-7 368 158)"/><ellipse cx="406" cy="300" rx="114" ry="70" transform="rotate(5 406 300)"/></clipPath></defs>';
  g+='<g id="scBase">';
  g+='<path class="frm sD" d="M20 44H740"/><path class="frm sD" d="M20 398H740"/>';
  g+='<text class="t" x="20" y="34">TARGET LOCUS · DOUBLE-STRANDED DNA</text>';
  g+='</g>';
  /* the nuclease: a hatched engraved body clamped on the site, with the Brex27 peptide reaching out of it */
  g+='<g id="scCas">';
  g+='<ellipse class="nuc" cx="368" cy="158" rx="130" ry="84" transform="rotate(-7 368 158)"/>';
  g+='<ellipse class="nuc" cx="406" cy="300" rx="114" ry="70" transform="rotate(5 406 300)"/>';
  g+='<g clip-path="url(#casclip)">';
  for(i=0;i<44;i++){var yy=52+i*8;g+='<path class="hat" d="M230 '+yy+'L540 '+(yy-34)+'"/>'}
  g+='</g>';
  g+='<path class="brx" d="M498 326c28 6 48 18 62 36"/>';
  g+='<circle class="brxd" cx="566" cy="368" r="5.5"/>';
  g+='<text class="t bx" x="578" y="372">BREX27</text>';
  g+='<text class="t nl" x="20" y="92">MICAS9 NUCLEASE · REC AND NUC LOBES</text>';
  g+='</g>';
  /* the duplex, in two halves that part at the cut */
  g+='<g id="scL"><path class="bb" d="'+strand(0,X0,CUT)+'"/><path class="bb2" d="'+strand(Math.PI,X0,CUT)+'"/>';
  rungList(X0,CUT).forEach(function(r){g+='<path class="rg" d="M'+f(r[0])+' '+f(r[1])+'L'+f(r[0])+' '+f(r[2])+'"/>'});
  g+='</g>';
  g+='<g id="scR"><path class="bb" d="'+strand(0,CUT,X1)+'"/><path class="bb2" d="'+strand(Math.PI,CUT,X1)+'"/>';
  rungList(CUT,X1).forEach(function(r){g+='<path class="rg" d="M'+f(r[0])+' '+f(r[1])+'L'+f(r[0])+' '+f(r[2])+'"/>'});
  g+='</g>';
  g+='<g id="scDon">';
  for(i=-4;i<=4;i++){x=CUT+i*13;g+='<path class="dn" data-i="'+(i+4)+'" d="M'+f(x)+' '+f(hx(x,0))+'L'+f(x)+' '+f(hx(x,Math.PI))+'"/>'}
  g+='</g>';
  g+='<g id="scFil">';
  for(i=0;i<16;i++){var side=i<8?-1:1,k=i%8,xx=CUT+side*(20+k*17),yy2=hx(xx,k%2?Math.PI:0);
    g+='<circle class="bd" data-i="'+i+'" cx="'+f(xx)+'" cy="'+f(yy2)+'" r="8"/>'}
  g+='</g>';
  /* outcomes, as the two horizontal bars of a result chart: direction only, no invented values */
  g+='<g id="scBar">';
  g+='<text class="t" x="20" y="456">ON-TARGET OUTCOMES, MICAS9 VS CONVENTIONAL CAS9</text>';
  g+='<text class="t lbk" x="20" y="490">PRECISE KNOCK-IN</text>';
  g+='<text class="t lbi" x="20" y="534">UNWANTED INDELS</text>';
  g+='<path class="bl sD" d="M236 468V546"/>';
  g+='<rect class="bk" x="236" y="474" width="0" height="22"/>';
  g+='<rect class="bi" x="236" y="518" width="0" height="22"/>';
  g+='</g>';
  g+='<g id="lb1"><text class="a" x="20" y="422">DOUBLE-STRAND BREAK AT THE TARGET SITE</text></g>';
  g+='<g id="lb2"><text class="a" x="20" y="422">BREX27 RECRUITS AND STABILISES RAD51</text></g>';
  g+='<g id="lb3"><text class="a" x="20" y="422">HOMOLOGY-DIRECTED REPAIR · DONOR INSTALLED</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD").concat(dl("#scBar .sD")),
    fade:$$("#scBase text",svg),barTx:$$("#scBar text",svg),
    bbL:dl("#scL .bb,#scL .bb2"),bbR:dl("#scR .bb,#scR .bb2"),
    hat:$$(".hat",svg),rg:$$(".rg",svg),dn:$$(".dn",svg),bd:$$(".bd",svg),
    gL:$("#scL",svg),gR:$("#scR",svg),cas:$("#scCas",svg),
    bk:$(".bk",svg),bi:$(".bi",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,BW=460;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var ink=seg(p,0,.12);
    draw(E.bbL,Math.min(1,ink*1.1));draw(E.bbR,Math.min(1,ink*1.1));
    E.rg.forEach(function(r,i){op(r,b*Math.min(1,Math.max(0,ink*2-(i%28)*.04)))});
    var cut=seg(p,.12,.3),heal=seg(p,.72,.9),gapv=(1-heal)*cut;
    E.gL.setAttribute("transform","translate("+(-24*gapv).toFixed(2)+" 0)");
    E.gR.setAttribute("transform","translate("+(24*gapv).toFixed(2)+" 0)");
    op(E.gL,b);op(E.gR,b);
    var casIn=seg(p,.02,.16),casOut=seg(p,.76,.94);
    op(E.cas,b*casIn*(1-casOut));
    E.cas.setAttribute("transform","translate(0 "+(-20*(1-casIn)+30*casOut).toFixed(1)+")");
    E.hat.forEach(function(hh,i){op(hh,b*Math.min(1,Math.max(0,casIn*1.6-i*.02))*(1-casOut))});
    var fil=seg(p,.36,.6),filOut=seg(p,.8,.95);
    E.bd.forEach(function(c,i){var k=i%8,gi=Math.min(1,Math.max(0,fil*1.9-k*.15));
      op(c,b*gi*(1-filOut));c.setAttribute("r",(8*(.5+.5*gi)).toFixed(2))});
    var don=seg(p,.66,.88);
    E.dn.forEach(function(d,i){var k=Math.abs(i-4),gi=Math.min(1,Math.max(0,don*2-k*.2));op(d,b*gi)});
    var bar=seg(p,.78,.98);
    E.bk.setAttribute("width",(BW*bar).toFixed(1));
    E.bi.setAttribute("width",(BW*.24*bar).toFixed(1));
    op(E.bk,b);op(E.bi,b);
    E.barTx.forEach(function(el){op(el,b*(el.classList.contains('lbk')||el.classList.contains('lbi')?.55+.45*bar:1))});
    op(E.l1,b*seg(p,.18,.26)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.86));
  };
}

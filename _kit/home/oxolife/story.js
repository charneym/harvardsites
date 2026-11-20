/* The story scene (BL/BY/DB): why IVF fails and where OXO-001 acts, as ONE continuous engraved scene.
   Below: a cross-section of the uterine lining (the endometrium): a row of epithelial cells on the surface, stroma and
   glands beneath. Above: a day-5 blastocyst (zona, trophectoderm ring, inner cell mass). Step 1: the embryo arrives but
   most rounds of IVF/ICSI still fail because a viable embryo does not implant. Step 2: OXO-001, an oral non-hormonal
   tablet, acts directly on the endometrium to improve its receptivity; the lining warms in the accent. Step 3: the
   embryo settles into the lining, and the OXOART2 Phase II figures rise: live birth 42.6% vs 35.7% placebo.
   Sources: Oxolife/ESHRE 2024 releases (Clinical Trials Arena, Femtech Insider, 8 and 11 July 2024), Rutgers 2021,
   PR Newswire 9 April 2025. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var SURF=function(x){return 312+9*Math.sin(x/68+.6)+5*Math.sin(x/29+1.9)};
var EPI=(function(){var a=[],x=24;while(x<736){var w=17+((x*7)%5);a.push([x,Math.min(736,x+w)]);x+=w}return a})();
var STR=(function(){var s=7,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<70;i++){var x=40+R()*680,y=SURF(x)+44+R()*(470-SURF(x)-50);a.push([x,y,R()*Math.PI])}return a})();
var GLAND=[150,300,520,650];
var BX=300,BY0=150,BY1=236,BR=84;
function oxScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="oxclip"><rect x="24" y="0" width="712" height="490"/></clipPath></defs>';
  /* ---- base: the frame rules and captions ---- */
  g+='<g id="oxBase">';
  g+='<path class="frm sD" d="M24 490H736"/>';
  g+='<text class="t" x="24" y="'+(SCH-8)+'">UTERINE LINING · ENDOMETRIUM · SCHEMATIC</text>';
  g+='</g>';
  /* ---- the lining: surface, epithelial cells, glands, stromal cells ---- */
  g+='<g id="oxLin" clip-path="url(#oxclip)">';
  var sd='M24 '+f(SURF(24));for(var x=30;x<=736;x+=6)sd+='L'+x+' '+f(SURF(x));
  g+='<path class="ls sD" d="'+sd+'"/>';
  g+='<path class="lw" d="'+sd+'L736 490L24 490Z"/>';
  EPI.forEach(function(c,k){var a=c[0],b=c[1],m=(a+b)/2,ya=SURF(a),yb=SURF(b),ym=SURF(m);
    g+='<path class="ec sD" data-k="'+k+'" d="M'+f(a)+' '+f(ya)+'L'+f(a)+' '+f(ya+30)+'Q'+f(m)+' '+f(ym+34)+' '+f(b)+' '+f(yb+30)+'"/>';
    g+='<ellipse class="en" data-k="'+k+'" cx="'+f(m)+'" cy="'+f(ym+18)+'" rx="3.4" ry="6"/>'});
  GLAND.forEach(function(x){var y=SURF(x)+30;
    g+='<path class="gl sD" d="M'+(x-9)+' '+f(y)+'C'+(x-12)+' '+f(y+60)+' '+(x+8)+' '+f(y+90)+' '+(x-4)+' '+f(y+140)+'M'+(x+9)+' '+f(y)+'C'+(x+6)+' '+f(y+60)+' '+(x+26)+' '+f(y+90)+' '+(x+14)+' '+f(y+140)+'"/>'});
  STR.forEach(function(p,k){g+='<ellipse class="sc" data-k="'+k+'" cx="'+f(p[0])+'" cy="'+f(p[1])+'" rx="4.2" ry="2.2" transform="rotate('+f(p[2]*57.3)+' '+f(p[0])+' '+f(p[1])+')"/>'});
  g+='</g>';
  /* ---- the blastocyst: zona, trophectoderm ring with nuclei, inner cell mass ---- */
  g+='<g id="oxEmb" transform="translate('+BX+' '+BY0+')">';
  g+='<circle class="zb" r="'+(BR+11)+'"/><circle class="zo sD" r="'+(BR+11)+'"/><circle class="zo sD" r="'+(BR+1)+'"/>';
  g+='<circle class="te sD" r="'+(BR-8)+'"/>';
  for(i=0;i<22;i++){var a=i/22*Math.PI*2,ca=Math.cos(a),sa=Math.sin(a);
    g+='<path class="te sD" d="M'+f(ca*(BR-8))+' '+f(sa*(BR-8))+'L'+f(ca*(BR+1))+' '+f(sa*(BR+1))+'"/>';
    var b=a+Math.PI/22;g+='<ellipse class="tn" cx="'+f(Math.cos(b)*(BR-3.5))+'" cy="'+f(Math.sin(b)*(BR-3.5))+'" rx="6.5" ry="2.3" transform="rotate('+f(b*57.3+90)+' '+f(Math.cos(b)*(BR-3.5))+' '+f(Math.sin(b)*(BR-3.5))+')"/>'}
  var IC=[[-30,-50],[-12,-58],[8,-56],[26,-48],[-40,-34],[-22,-38],[-3,-40],[16,-38],[34,-30],[-30,-20],[-11,-22],[8,-22],[26,-16],[-18,-6],[2,-6],[18,-2]];
  IC.forEach(function(c){g+='<circle class="ic" cx="'+c[0]+'" cy="'+c[1]+'" r="11"/>'});
  g+='</g>';
  /* ---- the OXO-001 cue (step 2) and the OXOART2 bars (step 3), right of the embryo ---- */
  g+='<g id="oxRes">';
  g+='<text class="t" x="470" y="70">LIVE BIRTH RATE · OXOART2</text>';
  g+='<text class="rv" x="470" y="116">OXO-001</text><rect class="rb a" x="470" y="126" width="0" height="12"/><text class="rn a" x="736" y="116" text-anchor="end">42.6%</text>';
  g+='<text class="rv" x="470" y="178">Placebo</text><rect class="rb" x="470" y="188" width="0" height="12"/><text class="rn" x="736" y="178" text-anchor="end">35.7%</text>';
  g+='</g>';
  /* ---- step labels, all in one slot top-left so they never collide (CY) ---- */
  g+='<g id="lb1"><text class="a" x="24" y="24">DAY-5 BLASTOCYST · READY TO IMPLANT</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="24">OXO-001 · DIRECT ACTION ON THE ENDOMETRIUM</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="24">IMPLANTATION · PREGNANCY</text></g>';
  return g+'</svg>';
}
function scene(){return oxScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#oxBase .sD"),fade:$$("#oxBase text",svg),lin:dl("#oxLin .sD"),lw:$("#oxLin .lw",svg),
    en:$$("#oxLin .en",svg),sc:$$("#oxLin .sc",svg),emb:$("#oxEmb",svg),zb:$("#oxEmb .zb",svg),ed:dl("#oxEmb .sD"),tn:$$("#oxEmb .tn",svg),ic:$$("#oxEmb .ic",svg),
    res:$("#oxRes",svg),rb:$$("#oxRes .rb",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,W=[266*.426/.426,266*.357/.426];
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* the lining engraves in, then the embryo; step 2 the lining warms (receptive); step 3 the embryo settles in */
    var lIn=seg(p,0,.12),eIn=seg(p,.02,.13),warm=seg(p,.38,.56),dock=seg(p,.68,.86),rIn=seg(p,.74,.92);
    draw(E.lin,lIn*b);E.en.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,lIn*1.6-i*.012)))});
    E.sc.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,lIn*1.5-(i%20)*.02))*.85)});
    op(E.lw,b*warm*.55);svg.classList.toggle("warm",warm>.5);
    draw(E.ed,eIn*b);op(E.zb,b*eIn);E.tn.forEach(function(el){op(el,b*eIn)});E.ic.forEach(function(el,i){op(el,b*Math.min(1,Math.max(0,eIn*1.6-i*.05)))});
    var y=BY0+(BY1-BY0)*dock+Math.sin(p*14)*2*(1-dock);
    E.emb.setAttribute("transform","translate("+BX+" "+y.toFixed(1)+")");
    op(E.res,b*rIn);E.rb.forEach(function(r,i){r.setAttribute("width",(W[i]*Math.min(1,Math.max(0,rIn*1.4-i*.2))).toFixed(1))});
    op(E.l1,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.4,.48)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

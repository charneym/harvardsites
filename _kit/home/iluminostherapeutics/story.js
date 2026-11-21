/* The story scene (BL/BY/DB/CX): Iluminos's own mechanism, drawn as ONE continuous engraved scene that stays on screen
   for all three steps. Left: three copies of chromosome 21 (small acrocentric chromosomes with banding), the DYRK1A
   locus at 21q22 marked on each. Centre: the Dyrk1a kinase domain drawn as its two lobes (beta-sheet N-lobe, helical
   C-lobe) around the ATP pocket at the hinge. Right: a tau strand with phosphorylation sites.
   Step 1 the chromosomes engrave in and the third copy lifts; step 2 the kinase draws, expression flows from the loci
   and phosphates gather on tau one by one; step 3 the inhibitor travels into the ATP pocket and the phosphates fall away.
   Sources: NIH RePORTER R42/R44NS129400 (Dyrk1a on chromosome 21, overexpressed in all DS patients) and the 2026 DYR533
   preprints (PMID 41648480, 42687920: tau and APP phosphorylation, autophosphorylation blocked, tau pT217/pT181/pS396
   reduced). Schematic, not to scale. */
var SCW=760,SCH=520;
var CHR=[{x:92,d:0},{x:146,d:.06},{x:200,d:.12}];
var KX=378,KY=252,KS=1.3,CS=1.22;
function cxy(x,y){return [146+(x-146)*CS,250+(y-250)*CS]}
var TAU=(function(){var a=[],i,n=7;for(i=0;i<n;i++){var t=(i+.5)/n;a.push({t:t,d:i*.07,side:(i%2?1:-1)})}return a})();
function tauPt(t){var y=92+t*330;return [664+Math.sin(t*Math.PI*3.2)*28,y]}
function chrom(x,y){
  /* an acrocentric chromosome: satellite and stalk, short p-arm, centromere, long q-arm, all as fine line */
  var g='';
  g+='<circle class="ch sD" cx="'+x+'" cy="'+(y-118)+'" r="7"/>';
  g+='<path class="ch sD" d="M'+x+' '+(y-111)+'V'+(y-98)+'"/>';
  g+='<path class="ch sD" d="M'+(x-13)+' '+(y-86)+'a13 13 0 0 1 26 0V'+(y-58)+'q0 6-6 9q6 3 6 9V'+(y+92)+'a13 13 0 0 1-26 0V'+(y-40)+'q0-6 6-9q-6-3-6-9Z"/>';
  /* bands */
  var b='',k,ys=[-76,-66,-26,-8,12,30,48,66];
  for(k=0;k<ys.length;k++)b+='M'+(x-13)+' '+(y+ys[k])+'H'+(x+13);
  g+='<path class="bd sD" d="'+b+'"/>';
  /* the DYRK1A locus at 21q22 */
  g+='<rect class="lc" x="'+(x-13)+'" y="'+(y+74)+'" width="26" height="9"/>';
  return g;
}
function kinase(){
  var x=KX,y=KY,g='';
  /* N-lobe: a rounded lobe of beta strands */
  g+='<path class="kn sD" d="M'+(x-92)+' '+(y-28)+'C'+(x-104)+' '+(y-92)+' '+(x-40)+' '+(y-138)+' '+(x+14)+' '+(y-128)+'C'+(x+76)+' '+(y-118)+' '+(x+104)+' '+(y-70)+' '+(x+86)+' '+(y-22)+'C'+(x+70)+' '+(y-4)+' '+(x+46)+' '+(y-24)+' '+(x+22)+' '+(y-32)+'"/>';
  var s='',k;for(k=0;k<5;k++){var yy=y-108+k*18;s+='M'+(x-64+k*4)+' '+yy+'l'+(84-k*6)+' 6l-8 -6';}
  g+='<path class="kl sD" d="'+s+'"/>';
  /* hinge and C-lobe: a larger helical lobe */
  g+='<path class="kn sD" d="M'+(x-92)+' '+(y-28)+'C'+(x-112)+' '+(y+26)+' '+(x-96)+' '+(y+120)+' '+(x-16)+' '+(y+136)+'C'+(x+60)+' '+(y+150)+' '+(x+118)+' '+(y+100)+' '+(x+112)+' '+(y+30)+'C'+(x+108)+' '+(y+2)+' '+(x+70)+' '+(y+10)+' '+(x+22)+' '+(y+16)+'"/>';
  var hx='';for(k=0;k<4;k++){var y2=y+30+k*24,x0=x-70+k*6,w=120-k*14,c='';for(var j=0;j<6;j++)c+='q'+(w/12).toFixed(1)+' '+(j%2?7:-7)+' '+(w/6).toFixed(1)+' 0';hx+='M'+x0+' '+y2+c;}
  g+='<path class="kl sD" d="'+hx+'"/>';
  /* the ATP pocket at the hinge */
  g+='<path class="pk sD" d="M'+(x-40)+' '+(y-26)+'C'+(x-20)+' '+(y-40)+' '+(x+6)+' '+(y-40)+' '+(x+22)+' '+(y-32)+'M'+(x-40)+' '+(y+4)+'C'+(x-20)+' '+(y+20)+' '+(x+6)+' '+(y+22)+' '+(x+22)+' '+(y+16)+'"/>';
  g+='<path class="pkf" d="M'+(x-40)+' '+(y-26)+'C'+(x-20)+' '+(y-40)+' '+(x+6)+' '+(y-40)+' '+(x+22)+' '+(y-32)+'L'+(x+22)+' '+(y+16)+'C'+(x+6)+' '+(y+22)+' '+(x-20)+' '+(y+20)+' '+(x-40)+' '+(y+4)+'Z"/>';
  return g;
}
function ring(cx,cy,r){var p='',i;for(i=0;i<6;i++){var a=Math.PI/6+i*Math.PI/3;p+=(i?'L':'M')+(cx+r*Math.cos(a)).toFixed(1)+' '+(cy+r*Math.sin(a)).toFixed(1)}return p+'Z'}
function inhib(){
  /* a small fused-ring molecule glyph: two fused rings, a pendant ring and a short chain */
  var g='',r=9;
  g+='<path d="'+ring(0,0,r)+'"/><path d="'+ring(r*1.732,0,r)+'"/><path d="M'+(r*2.6)+' 0L'+(r*3.6)+' 0"/><path d="'+ring(r*4.6,0,r)+'"/><path d="M'+(-r*0.87)+' '+(-r*0.5)+'L'+(-r*1.9)+' '+(-r*1.1)+'"/>';
  return g;
}
function mechScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<g id="scBase"><path class="frm sD" d="M18 24H120M740 24H638M18 496H120M740 496H638"/>';
  g+='<text class="t" x="18" y="14">TRISOMY 21 · DYRK1A · TAU</text><text class="t" x="742" y="14" text-anchor="end">DYR533</text></g>';
  g+='<g id="scChr" transform="translate(146 250) scale('+CS+') translate(-146 -250)">';CHR.forEach(function(c,k){g+='<g class="cr" data-k="'+k+'">'+chrom(c.x,250)+'</g>'});
  g+='</g><text id="tChr" class="t" x="146" y="418" text-anchor="middle">CHR 21 ×3</text>';
  /* expression: three lines from the loci into the kinase */
  g+='<g id="scExp">';CHR.forEach(function(c,k){var a=cxy(c.x+13,328),ex=KX-100*KS,ey=KY+44*KS;g+='<path class="ex sD" d="M'+a[0].toFixed(1)+' '+a[1].toFixed(1)+'C'+(a[0]+60).toFixed(1)+' '+(a[1]+10).toFixed(1)+' '+(ex-50).toFixed(1)+' '+(ey+30).toFixed(1)+' '+ex.toFixed(1)+' '+ey.toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scKin" transform="translate('+KX+' '+KY+') scale('+KS+') translate('+(-KX)+' '+(-KY)+')">'+kinase()+'</g><text id="tKin" class="t" x="'+KX+'" y="'+(KY+200)+'" text-anchor="middle">DYRK1A KINASE</text>';
  /* tau strand and its phosphorylation sites */
  var tp='',k;for(k=0;k<=60;k++){var q=tauPt(k/60);tp+=(k?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)}
  g+='<g id="scTau"><path class="tu sD" d="'+tp+'"/><text class="t" x="664" y="452" text-anchor="middle">TAU</text></g>';
  g+='<g id="scPh">';TAU.forEach(function(s,k){var q=tauPt(s.t),dx=s.side*24;g+='<g class="ph" data-k="'+k+'" transform="translate('+(q[0]+dx).toFixed(1)+' '+q[1].toFixed(1)+')"><path class="pl" d="M'+(-dx*.42).toFixed(1)+' 0L'+(-dx*.62).toFixed(1)+' 0"/><circle r="8.5"/><text class="pp" y="3.6" text-anchor="middle">P</text></g>'});g+='</g>';
  /* the kinase acting on tau */
  g+='<path id="scAct" class="act sD" d="M'+(KX+100*KS)+' '+(KY-50*KS)+'C'+(KX+128*KS)+' '+(KY-80*KS)+' 600 '+(KY-80)+' 624 '+(KY-60)+'"/>';
  g+='<g id="scInh" class="ih">'+inhib()+'</g>';
  g+='<g id="lb1"><text class="a" x="18" y="514">AN EXTRA COPY · DYRK1A OVEREXPRESSED</text></g>';
  g+='<g id="lb2"><text class="a" x="18" y="514">DYRK1A PHOSPHORYLATES TAU</text></g>';
  g+='<g id="lb3"><text class="a" x="18" y="514">DYR533 IN THE ATP POCKET · PHOSPHATES FALL</text></g>';
  return g+'</svg>';
}
function scene(){return mechScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),
    chr:$$(".cr",svg).map(function(el,k){return {el:el,p:dl('.cr[data-k="'+k+'"] .sD'),lc:$(".lc",el)}}),chrT:$("#tChr",svg),
    exp:dl("#scExp .sD"),kin:dl("#scKin .sD"),kinT:$("#tKin",svg),pk:$$("#scKin .pk",svg),kf:$$("#scKin .kn",svg),pkf:$("#scKin .pkf",svg),
    tau:dl("#scTau .sD"),tauT:$("#scTau text",svg),
    ph:$$(".ph",svg).map(function(el){return {el:el,s:TAU[+el.getAttribute("data-k")]}}),
    act:dl("#scAct"),inh:$("#scInh",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    draw(E.base,b);
    var c1=seg(p,0,.2),third=seg(p,.12,.3),kin=seg(p,.3,.48),ex=seg(p,.36,.56),ph=seg(p,.44,.66),inh=seg(p,.68,.86),off=seg(p,.78,.98);
    /* the chromosomes engrave in; the third copy rises in tone */
    E.chr.forEach(function(C,k){var v=Math.min(1,Math.max(b*b,(c1*1.3-C.el.getAttribute("data-k")*.12)));draw(C.p,v);
      op(C.el,b*(k===2?(.55+.45*third):1));op(C.lc,b*Math.min(1,v*1.2)*(k===2?(.5+.5*third):1))});
    op(E.chrT,b*c1);
    /* the kinase draws; expression flows from the loci */
    draw(E.kin,Math.min(1,Math.max(b*b*.18,kin)));op(E.kinT,b*kin);
    E.kf.forEach(function(el){el.style.fillOpacity=(b*kin).toFixed(3)});op(E.pkf,b*kin);
    draw(E.exp,ex*(1-off*.7));E.exp.forEach(function(a){a[0].style.opacity=(b*(1-off*.6)).toFixed(3)});
    /* tau and the phosphates it gathers */
    draw(E.tau,Math.min(1,Math.max(b*b*.18,seg(p,.34,.52))));op(E.tauT,b*seg(p,.34,.52));
    draw(E.act,ph*(1-off));E.act.forEach(function(a){a[0].style.opacity=(b*(1-off)).toFixed(3)});
    E.ph.forEach(function(P,i){var on=Math.min(1,Math.max(0,(ph-P.s.d)*2.4)),gone=Math.min(1,Math.max(0,(off-P.s.d*.9)*2.2));op(P.el,b*on*(1-gone))});
    /* the inhibitor travels in and seats in the ATP pocket */
    if(E.inh){var sx=SCW*.5,sy=486,tx=KX-34*KS,ty=KY-8*KS,e=inh*inh*(3-2*inh);
      E.inh.setAttribute("transform","translate("+(sx+(tx-sx)*e).toFixed(1)+" "+(sy+(ty-sy)*e).toFixed(1)+") rotate("+(-24+24*e).toFixed(1)+") scale(1.08)");
      op(E.inh,b*Math.min(1,inh*3));}
    E.pk.forEach(function(el){el.style.opacity=(b*(.6+.4*inh)).toFixed(3)});
    op(E.l1,b*seg(p,.08,.18)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.9));
  };
}

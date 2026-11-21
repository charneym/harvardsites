/* The story scene (BL/BY/DB): ONE engraved drawing of a platelet's membrane, kept on screen for all three steps and filling
   the frame. Across the top: the lipid bilayer, with the αIIbβ3 integrin spanning it, its headpiece holding fibrinogen above
   and its β3 tail reaching into the cytoplasm below, where Gα13 docks on the tail and the outside-in signal runs down into
   the actin cytoskeleton. Step 1: a high-loading peptide nanoparticle reaches the membrane and releases its ExE peptides into
   the cytoplasm. Step 2: the peptides bind Gα13 and hold it off the β3 tail. Step 3: the outside-in signal fades and the
   cytoskeleton relaxes, so the platelet does not spread and the clot does not build. Sources: dupagemt.com (About Us),
   Sci Transl Med 2020 (PMC8061427), Nat Commun 2021 (PMC8159967), Nat Commun 2023 (PMC10432399). Schematic; geometry is
   illustrative. Driven by the scrubbed story progress. */
var MEM=(function(){
  var Y=206, GAP=58, STEP=31, X0=-24, X1=824, IX=372;
  var TY=Y+GAP+14, GX=IX+92, GY=TY+118;
  return {Y:Y,GAP:GAP,STEP:STEP,X0:X0,X1:X1,IX:IX,TY:TY,GX:GX,GY:GY};
})();
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,k,M=MEM,IX=M.IX;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="pgl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e4573f" stop-opacity=".55"/><stop offset="1" stop-color="#e4573f" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* --- the bilayer --- */
  var heads='',tails='';
  for(var x=M.X0;x<=M.X1;x+=M.STEP){
    if(Math.abs(x-IX)<72)continue;
    heads+='<circle cx="'+f(x)+'" cy="'+f(M.Y)+'" r="11"/><circle cx="'+f(x)+'" cy="'+f(M.Y+M.GAP)+'" r="11"/>';
    for(k=-1;k<2;k+=2){
      tails+='<path d="M'+f(x+k*4)+' '+f(M.Y+11)+'q'+f(k*5)+' 10 0 17"/>';
      tails+='<path d="M'+f(x+k*4)+' '+f(M.Y+M.GAP-11)+'q'+f(k*5)+' -10 0 -17"/>';
    }
  }
  g+='<g class="mem">'+tails+'</g><g class="memh">'+heads+'</g>';
  /* --- the integrin αIIbβ3 --- */
  g+='<path class="mb sD" d="M'+f(IX-34)+' '+f(M.TY+4)+'V'+f(M.Y-10)+'q0 -30 -14 -50l-16 -24"/>';
  g+='<path class="mb sD" d="M'+f(IX+26)+' '+f(M.TY+4)+'V'+f(M.Y-10)+'q0 -32 12 -52l14 -22"/>';
  /* β-propeller (α subunit head) and βI domain, drawn as two lobed domains */
  function lobe(cx,cy,r,sq,n,seed){var s='';for(var i2=0;i2<=52;i2++){var a=i2/52*Math.PI*2,rr=r+r*.10*Math.sin(a*n+seed)+r*.06*Math.sin(a*(n+2)+seed*1.7);s+=(i2?'L':'M')+f(cx+rr*Math.cos(a))+' '+f(cy+rr*sq*Math.sin(a))}return s+'Z'}
  g+='<path class="my sD" d="'+lobe(IX-66,M.Y-104,50,.84,6,.5)+'"/>';
  g+='<path class="my sD" d="'+lobe(IX+54,M.Y-106,42,.9,5,2.2)+'"/>';
  for(i=0;i<7;i++){var aa=i/7*Math.PI*2;g+='<path class="mb2 sD" d="M'+f(IX-66+16*Math.cos(aa))+' '+f(M.Y-104+13*Math.sin(aa))+'L'+f(IX-66+44*Math.cos(aa))+' '+f(M.Y-104+36*Math.sin(aa))+'"/>'}
  /* fibrinogen bridging two heads, outside */
  g+='<path class="fib sD" d="M'+f(IX-118)+' '+f(M.Y-150)+'q54 -30 112 -10q56 20 112 -6"/>';
  g+='<ellipse class="fibn" cx="'+f(IX-118)+'" cy="'+f(M.Y-150)+'" rx="20" ry="14"/><ellipse class="fibn" cx="'+f(IX+106)+'" cy="'+f(M.Y-166)+'" rx="20" ry="14"/><ellipse class="fibn" cx="'+f(IX-8)+'" cy="'+f(M.Y-166)+'" rx="16" ry="11"/>';
  g+='<text class="t" x="'+f(IX+140)+'" y="'+f(M.Y-162)+'">FIBRINOGEN</text>';
  g+='<text class="t" x="18" y="'+f(M.Y-96)+'">INTEGRIN αIIbβ3</text>';
  g+='<text class="t" x="18" y="'+f(M.Y-24)+'">OUTSIDE THE PLATELET</text>';
  g+='<text class="t" x="18" y="'+f(M.Y+M.GAP+40)+'">CYTOPLASM</text>';
  /* cytoplasmic tails: α short, β3 long and in the accent */
  g+='<path class="mb2 sD" d="M'+f(IX-34)+' '+f(M.TY)+'q-6 36 -28 56"/>';
  g+='<path class="tail sD" d="M'+f(IX+26)+' '+f(M.TY)+'q10 54 '+f(M.GX-IX-34)+' '+f(M.GY-M.TY-48)+'"/>';
  g+='<text class="t" x="'+f(IX-16)+'" y="'+f(M.TY+104)+'">β3 TAIL</text>';
  /* --- the actin cytoskeleton the signal drives: engraved paired filaments across the lower band --- */
  var fil='';
  for(i=0;i<6;i++){
    var y0=M.GY+44+i*15, x0=44+((i*61)%90), x1=712-((i*47)%110), bow=(i%2?1:-1)*(5+(i%3)*3);
    fil+='<path class="ac" data-i="'+i+'" d="M'+f(x0)+' '+f(y0)+'Q'+f((x0+x1)/2)+' '+f(y0+bow)+' '+f(x1)+' '+f(y0)+'"/>';
    fil+='<path class="ac2" data-i="'+i+'" d="M'+f(x0+14)+' '+f(y0+5)+'Q'+f((x0+x1)/2)+' '+f(y0+5+bow)+' '+f(x1-14)+' '+f(y0+5)+'"/>';
  }
  g+='<g id="acto">'+fil+'</g><text class="t" x="18" y="'+f(M.GY+28)+'">ACTIN CYTOSKELETON</text>';
  /* --- Gα13 --- */
  g+='<g id="g13" transform="translate('+f(M.GX)+' '+f(M.GY)+')"><path class="g13 sD" d="'+lobe(0,0,46,.86,4,.9)+'"/><path class="g13i sD" d="M-20 -8q18 -14 38 4"/><text class="gl" x="0" y="6" text-anchor="middle">Gα13</text></g>';
  /* the outside-in signal: from the tail down into the cytoskeleton */
  g+='<path class="sig" d="M'+f(M.GX+32)+' '+f(M.GY+36)+'q22 26 26 54"/>';
  g+='<path class="sig" d="M'+f(M.GX+58)+' '+f(M.GY+90)+'l-13 -9m13 9l4 -15"/>';
  g+='<text class="a" id="sigl" x="'+f(M.GX+126)+'" y="'+f(M.GY+6)+'">OUTSIDE-IN SIGNAL</text>';
  /* --- the nanoparticle --- */
  var np='';
  for(i=0;i<44;i++){var a2=i/44*Math.PI*2;np+='<circle cx="'+f(74*Math.cos(a2))+'" cy="'+f(74*Math.sin(a2))+'" r="9.5"/>'}
  var cargo='',CG=[[-26,-16],[8,-30],[30,6],[-8,24],[-42,14],[18,32],[0,-4],[-24,-38],[40,-18],[-44,-8],[22,-12]];
  CG.forEach(function(c){var s='';for(k=0;k<4;k++)s+=(k?'L':'M')+f(c[0]+k*9)+' '+f(c[1]+(k%2?5:0));cargo+='<path class="pep" d="'+s+'"/>'});
  g+='<g id="np" transform="translate(660 70)"><circle class="npg" r="118" fill="url(#pgl)"/><g class="nph">'+np+'</g><g class="npc">'+cargo+'</g></g>';
  /* free peptides */
  for(i=0;i<8;i++){var s2='';for(k=0;k<4;k++)s2+=(k?'L':'M')+f(k*10)+' '+f(k%2?5:0);g+='<g class="fp" data-i="'+i+'"><path class="pep" d="'+s2+'"/></g>'}
  g+='<g class="bp" id="bp"><path class="pep" d="M0 0L10 5L20 0L30 5"/></g>';
  g+='<text class="a" id="lb1" x="18" y="552">HIGH-LOADING PEPTIDE NANOPARTICLE</text>';
  g+='<text class="a" id="lb2" x="18" y="552">ExE PEPTIDE BINDS Gα13</text>';
  g+='<text class="a" id="lb3" x="18" y="552">OUTSIDE-IN SIGNALING BLOCKED</text>';
  g+='</g></svg>';
  return g;
}
function storyDraw(svg){
  var M=MEM,IX=M.IX;
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),ac:dl("#acto path"),
    fade:$$("#scBase text, #scBase .mem path, #scBase .memh circle, #scBase .fibn",svg),
    np:$("#np",svg),fp:$$(".fp",svg),bp:$("#bp",svg),g13:$("#g13",svg),acto:$("#acto",svg),
    sig:$$(".sig",svg),sigl:$("#sigl",svg),tail:$(".tail",svg),
    b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg)};
  var sigL=E.sig.map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]});
  var lastB=-1;
  var FPA=[[-96,46],[-34,78],[36,54],[-140,96],[72,96],[6,122],[-64,138],[110,52]];
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function lerp(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t]}
  function ez(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.ac,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var ar=seg(p,.02,.20), rel=seg(p,.19,.32), mv=seg(p,.34,.52), bnd=seg(p,.52,.64), off=seg(p,.68,.88);
    var a=ez(ar), np=lerp([660,70],[IX+176,M.Y-84],a);
    E.np.setAttribute("transform","translate("+np[0].toFixed(1)+" "+np[1].toFixed(1)+") scale("+(1-.22*a-.55*ez(rel)).toFixed(3)+")");
    op(E.np,b*Math.min(1,ar*4)*(1-ez(rel)));
    E.fp.forEach(function(el,i){
      var d=i*.045, t=ez(seg(rel,d,d+.7)), q=lerp([IX+174,M.Y-70],[IX+FPA[i][0],M.TY+FPA[i][1]],t);
      var t2=ez(seg(mv,i*.05,i*.05+.7));
      if(t2>0)q=lerp(q,[M.GX-62+i*3,M.GY-54+i*2],t2);
      el.setAttribute("transform","translate("+q[0].toFixed(1)+" "+q[1].toFixed(1)+") rotate("+(i*37%60-30)+")");
      op(el,b*Math.min(1,t*5)*(1-seg(bnd,.3+i*.03,.8+i*.03)));
    });
    var gs=ez(bnd);
    E.bp.setAttribute("transform","translate("+(M.GX-26+gs*44).toFixed(1)+" "+(M.GY-32+gs*14).toFixed(1)+") rotate(-12)");
    op(E.bp,b*seg(bnd,.3,1));
    E.g13.setAttribute("transform","translate("+(M.GX+gs*44).toFixed(1)+" "+(M.GY+gs*14).toFixed(1)+")");
    E.g13.classList.toggle("blocked",bnd>.6);
    if(E.tail)E.tail.classList.toggle("off",off>.5);
    if(E.acto)E.acto.classList.toggle("calm",off>.5);
    draw(sigL,seg(p,.06,.3)*(1-off));
    op(E.sigl,b*seg(p,.1,.24)*(1-seg(off,.1,.6)));
    E.sig.forEach(function(el){el.classList.toggle("off",off>.4)});
    op(E.b1,b*seg(p,.02,.08)*(1-seg(p,.3,.36)));op(E.b2,b*seg(p,.4,.46)*(1-seg(p,.64,.69)));op(E.b3,b*seg(p,.7,.78));
  };
}

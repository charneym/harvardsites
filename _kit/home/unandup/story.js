/* The story scene (BL/BY/DB): how TheraLode™ works, as ONE continuous engraved scene, every element driven by the scrubbed
   story progress. Sources: unandup.com/theralode and the NIH RePORTER abstract of R44NS132605 ("Low-Dose Magneto-Thrombolysis
   to Expand Stroke Care"): restrictive hemodynamics keep alteplase from the occlusion; a portable magnet system conveys
   alteplase-conjugated magnetic nanoparticles to the clot's surface more than 350x faster than diffusion and mixes alteplase
   there, with a dose nearly 250x lower than approved. Schematic, not to scale.
   Top: the portable magnet above an artery. Middle: the artery, blood stalled against the clot. Bottom: two scales, time to
   reach the clot (diffusion vs magnetic) and alteplase dose (approved vs TheraLode). */
var SCW=760,SCH=520,YC=262,LR=56,FACE=548,CL=FACE,CR=626,MX=330,MY=92;
function yC(x){return YC+10*Math.sin((x-24)/712*Math.PI*1.3)}
var RB=(function(){var s=771,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<46;i++)a.push({u:R(),v:R()*2-1,j:R()});return a})();
var NP=(function(){var s=2026,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<13;i++)a.push({u:R(),v:R()*2-1,ph:R()});return a})();
var TP=(function(){var s=350,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[];
  for(var i=0;i<16;i++)a.push({u:R(),v:R()*2-1,ph:R()});return a})();
function clotPath(){var f=function(n){return (+n).toFixed(1)},pts=[],i,n=14;
  /* left face irregular, right side flat against the vessel wall's narrowing */
  for(i=0;i<=n;i++){var t=i/n,y=YC-LR+2+t*(2*LR-4),x=CL+10*Math.sin(t*9.3)+7*Math.sin(t*23.1+1)+(t<.12||t>.88?14:0);pts.push([x,y])}
  var d='M'+f(CR)+' '+f(YC-LR+2)+'L'+pts.map(function(p){return f(p[0])+' '+f(p[1])}).join('L')+'L'+f(CR)+' '+f(YC+LR-2)+'Z';return d}
function memScene(o){
  var f=function(n){return (+n).toFixed(1)},g='',i,x;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="lumen"><path d="M24 '+(YC-LR)+'H736V'+(YC+LR)+'H24Z"/></clipPath><clipPath id="clotc"><path d="'+clotPath()+'"/></clipPath></defs>';
  /* ---- base: the artery walls (double engraved line with hatching), captions ---- */
  g+='<g id="scBase">';
  var top='',bot='',topO='',botO='';
  for(x=24;x<=736;x+=8){var c=yC(x)-YC;top+=(x===24?'M':'L')+x+' '+f(YC-LR+c*0);bot+=(x===24?'M':'L')+x+' '+f(YC+LR);topO+=(x===24?'M':'L')+x+' '+f(YC-LR-16);botO+=(x===24?'M':'L')+x+' '+f(YC+LR+16)}
  g+='<path class="wl sD" d="'+top+'"/><path class="wl sD" d="'+bot+'"/><path class="wo sD" d="'+topO+'"/><path class="wo sD" d="'+botO+'"/>';
  var h='';for(x=30;x<736;x+=7){h+='M'+x+' '+(YC-LR-15)+'l5 13M'+x+' '+(YC+LR+2)+'l5 13'}
  g+='<path class="ht sD" d="'+h+'"/>';
  g+='<path class="frm sD" d="M24 404H736"/>';
  g+='<text class="t" x="24" y="'+(YC-LR-28)+'">ARTERY · ACUTE ISCHEMIC STROKE</text>';
  g+='<text class="t" x="'+(CL-6)+'" y="'+(YC-LR-28)+'">CLOT</text>';
  g+='<text class="t" x="24" y="428">TIME FOR ALTEPLASE TO REACH THE CLOT</text>';
  g+='<text class="t" x="24" y="484">ALTEPLASE DOSE</text>';
  g+='</g>';
  /* ---- blood cells and alteplase in the lumen ---- */
  g+='<g clip-path="url(#lumen)" id="scFlow">';
  RB.forEach(function(r,k){g+='<circle class="rb" r="'+(3+r.j*1.6).toFixed(1)+'" cx="0" cy="0"/>'});
  TP.forEach(function(r,k){g+='<path class="tp" d="M-3 0h6M0 -3v6"/>'});
  g+='</g>';
  /* ---- the clot: engraved fill, crosshatched fibrin; erodes from its face in step 3 ---- */
  g+='<g id="scClot"><path class="ct" d="'+clotPath()+'"/><g clip-path="url(#clotc)">';
  var hh='';for(i=-12;i<16;i++){hh+='M'+(CL-30+i*8)+' '+(YC-LR)+'l'+(2*LR*.55).toFixed(0)+' '+(2*LR)+'M'+(CL-30+i*8)+' '+(YC+LR)+'l'+(2*LR*.55).toFixed(0)+' -'+(2*LR)}
  g+='<path class="cth" d="'+hh+'"/></g></g>';
  /* ---- nanoparticle chains (5 particles each), aligned to the field ---- */
  g+='<g id="scNP">';
  NP.forEach(function(){g+='<g class="np">';for(var q=0;q<5;q++)g+='<circle r="2.7" cx="'+((q-2)*6.2)+'" cy="0"/>';g+='</g>'});
  g+='</g>';
  /* ---- the portable magnet above the vessel, with its field lines; it turns in step 2 ---- */
  g+='<g id="scMag" transform="translate('+MX+' '+MY+')"><g id="mgR">';
  g+='<g class="fl" id="mgF">';
  [34,52,74].forEach(function(k){g+='<path d="M-62 0C-62 '+(-k*1.2)+' 62 '+(-k*1.2)+' 62 0M-62 0C-62 '+(k*1.2)+' 62 '+(k*1.2)+' 62 0"/>'});
  g+='</g>';
  g+='<rect class="mg" x="-70" y="-17" width="140" height="34"/><path class="mgh" d="M0 -17V17'+(function(){var s='';for(var k=4;k<70;k+=6)s+='M'+k+' -17l-0 34';return s})()+'"/>';
  g+='</g></g>';
  g+='<text class="t" x="'+(MX+96)+'" y="'+(MY-34)+'" id="mgL">PORTABLE MAGNET SYSTEM</text>';
  /* ---- the two scales ---- */
  g+='<g id="scBars">';
  g+='<rect class="bA" id="b1" x="24" y="438" width="0" height="9"/><rect class="bB" id="b2" x="24" y="452" width="0" height="9"/>';
  g+='<text class="s" id="b1t" x="24" y="0">DIFFUSION · HOURS</text><text class="s a2" id="b2t" x="40" y="460">MAGNETIC · MORE THAN 350× FASTER</text>';
  g+='<rect class="bA" id="b3" x="24" y="493" width="0" height="9"/><rect class="bB" id="b4" x="24" y="506" width="0" height="9"/>';
  g+='<text class="s" id="b3t" x="24" y="0">APPROVED DOSE</text><text class="s a2" id="b4t" x="40" y="514">THERALODE · NEARLY 250× LOWER</text>';
  g+='</g>';
  /* ---- step labels, in the clear band between the artery and the scales ---- */
  g+='<g id="lb1"><text class="a" x="24" y="380">FLOW STALLS · ALTEPLASE DIFFUSES SLOWLY</text></g>';
  g+='<g id="lb2"><text class="a" x="24" y="380">THE FIELD TURNS · PARTICLES CONVEY ALTEPLASE</text></g>';
  g+='<g id="lb3"><text class="a" x="24" y="380">LYSIS IN MINUTES · FLOW RETURNS</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),rb:$$(".rb",svg),tp:$$(".tp",svg),np:$$(".np",svg),
    clot:$("#scClot",svg),mag:$("#scMag",svg),mgR:$("#mgR",svg),mgF:$("#mgF",svg),mgL:$("#mgL",svg),
    b1:$("#b1",svg),b2:$("#b2",svg),b3:$("#b3",svg),b4:$("#b4",svg),b1t:$("#b1t",svg),b2t:$("#b2t",svg),b3t:$("#b3t",svg),b4t:$("#b4t",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,BW=470;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function fr(v){return v-Math.floor(v)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.18),s2=seg(p,.36,.62),heal=seg(p,.7,.9);
    /* the clot erodes from its face (scaled about its right edge) */
    var cs=1-.92*heal;E.clot.setAttribute("transform","translate("+CR+" 0) scale("+cs.toFixed(4)+" 1) translate("+(-CR)+" 0)");
    op(E.clot,b*(1-.75*heal)*s1*1.2);
    var face=CR-(CR-FACE)*cs;
    /* blood cells: stalled and crowding the clot's face, then flowing through once it clears */
    E.rb.forEach(function(el,i){var r=RB[i];
      var crowd=70+(face-84-70)*Math.sqrt(r.u)+Math.sin(p*24+r.j*9)*2.2;
      var flow=30+fr(r.u+p*2.6)*720;
      var xx=crowd*(1-heal)+flow*heal,yy=YC+r.v*(LR-7)+Math.sin(p*13+r.u*20)*1.5;
      el.setAttribute("cx",xx.toFixed(1));el.setAttribute("cy",yy.toFixed(1));op(el,b*Math.min(1,s1*1.6-r.j*.3+.2))});
    /* alteplase alone: a slow drift from the left (step 1); in step 2 it rides on the particles, so these fade */
    E.tp.forEach(function(el,i){var r=TP[i];var xx=40+r.u*170+p*70+Math.sin(p*17+r.ph*9)*4,yy=YC+r.v*(LR-9)+Math.cos(p*15+r.ph*7)*4;
      el.setAttribute("transform","translate("+xx.toFixed(1)+" "+yy.toFixed(1)+")");op(el,b*seg(p,.04,.16)*(1-seg(p,.4,.52)))});
    /* the magnet turns with the scroll from step 2; the field lines turn with it */
    var th=(seg(p,.34,1)*720)%360;E.mgR.setAttribute("transform","rotate("+th.toFixed(1)+")");
    op(E.mag,b*seg(p,.02,.14));op(E.mgL,b*seg(p,.06,.16));op(E.mgF,b*(.25+.75*s2)*(1-.4*heal));
    /* particle chains: they enter, roll along the vessel toward the clot (aligned to the turning field) and gather at its face */
    var ang=th*Math.PI/180;
    E.np.forEach(function(el,i){var r=NP[i];
      var phi=2*Math.PI*(r.ph+p*5),adv=s2;
      var cx0=90+r.u*140,cx1=face-18-r.u*46;
      var xx=cx0+(cx1-cx0)*adv+18*Math.cos(phi),yy=YC+r.v*(LR-16)*(.75+.25*Math.sin(phi))+14*Math.sin(phi)*(1-.5*adv);
      if(heal>0){xx+=heal*fr(r.u+p*2)*140}
      el.setAttribute("transform","translate("+xx.toFixed(1)+" "+yy.toFixed(1)+") rotate("+(th+r.v*12).toFixed(1)+")");
      op(el,b*seg(p,.36,.46)*(1-.45*seg(p,.86,1)))});
    /* scales: time (step 1 full diffusion bar; step 2 the tiny magnetic one), dose (step 3) */
    function bar(el,w){el.setAttribute("width",Math.max(0,w).toFixed(1))}
    var t1=seg(p,.08,.26),t2=seg(p,.44,.56),d1=seg(p,.66,.76),d2=seg(p,.78,.88);
    bar(E.b1,BW*t1);bar(E.b2,Math.max(2.4,BW/350)*(t2>0?1:0));op(E.b2,b*t2);
    E.b1t.setAttribute("x",(24+BW*t1+10).toFixed(1));E.b1t.setAttribute("y","447");op(E.b1t,b*seg(p,.2,.28));op(E.b2t,b*t2);
    bar(E.b3,BW*d1);bar(E.b4,Math.max(2.4,BW/250)*(d2>0?1:0));op(E.b4,b*d2);
    E.b3t.setAttribute("x",(24+BW*d1+10).toFixed(1));E.b3t.setAttribute("y","502");op(E.b3t,b*seg(p,.72,.78));op(E.b4t,b*d2);
    op(E.b1,b);op(E.b3,b);
    op(E.l1,b*seg(p,.14,.22)*(1-seg(p,.34,.4)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.8,.88));
  };
}

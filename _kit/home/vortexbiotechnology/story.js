/* the story scene (BL/BY/DB): ONE engraved messenger RNA (5' cap, coding strand, poly(A) tail), kept on screen for all three
   steps, with the decapping scaffold EDC3 at its cap and a two-lobed Pim kinase.
   Step 1: Pim docks on EDC3 and phosphate groups light on it; the cap stays on. Step 2: VBT-34 (schematic small molecule)
   settles into a pocket on Pim; Pim lets go of EDC3 and the phosphates fade. Step 3: EDC3 settles on the cap, the cap comes off
   and the RNA is degraded from its 5' end. Source: NIH RePORTER abstract of 1R43CA281394-01A1 (Pim-1/3 phosphorylate EDC3 and
   inhibit decapping; VBT-34 fits a newly identified pocket in Pim-1/3 and blocks EDC3:Pim binding; specific RNAs are destroyed).
   Schematic; shapes and positions are illustrative. Driven by the scrubbed story progress. */
var MR=(function(){
  var N=[],i,x0=196,x1=724;
  for(i=0;i<=44;i++){var x=x0+(x1-x0)*i/44;N.push([x,410+14*Math.sin(i*.42)])}
  return {N:N,cap:[164,410],tail:[x1,410]};
})();
var EDC={c:[262,270],r:56};                  /* EDC3 docked above the cap */
var PIM={c:[420,178],away:[590,120]};        /* Pim kinase: docked on EDC3, and the place it drifts back to */
function lobe(cx,cy,rx,ry,s,k){var p='',i,n=64;for(i=0;i<=n;i++){var t=i/n*Math.PI*2,r=1+.07*Math.sin(3*t+s)+.04*Math.sin(5*t+s*2);
  p+=(i?'L':'M')+(cx+rx*k*r*Math.cos(t)).toFixed(1)+' '+(cy+ry*k*r*Math.sin(t)).toFixed(1)}return p+'Z'}
function hexr(cx,cy,r,a){var p='',i;for(i=0;i<6;i++){var t=a+i*Math.PI/3;p+=(i?'L':'M')+(cx+r*Math.cos(t)).toFixed(1)+' '+(cy+r*Math.sin(t)).toFixed(1)}return p+'Z'}
function scene(){
  var mob=MOBILE(),N=MR.N,f=function(n){return (+n).toFixed(1)},g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="30 50 750 500" aria-hidden="true">';
  g+='<defs><radialGradient id="vglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#4fb8ee" stop-opacity=".22"/><stop offset="1" stop-color="#4fb8ee" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="vlig" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#9ad8f8" stop-opacity=".55"/><stop offset="1" stop-color="#9ad8f8" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the RNA: backbone, one base tick per nucleotide, the poly(A) tail */
  var bb='M'+f(MR.cap[0]+14)+' '+f(MR.cap[1]);for(i=0;i<N.length;i++)bb+='L'+f(N[i][0])+' '+f(N[i][1]);
  g+='<path class="rb sD" d="'+bb+'"/>';
  for(i=0;i<N.length;i++)g+='<path class="nt" data-i="'+i+'" d="M'+f(N[i][0])+' '+f(N[i][1])+'L'+f(N[i][0])+' '+f(N[i][1]+(i%2?18:13))+'"/>';
  g+='<text class="t" x="'+f(MR.tail[0]-6)+'" y="'+f(MR.tail[1]+50)+'" text-anchor="end">AAAA… 3′</text>';
  g+='<text class="t" x="48" y="540">mRNA · SCHEMATIC</text>';
  g+='</g>';
  /* the 5' cap (moves away in step 3) */
  g+='<g id="cap" transform="translate('+MR.cap[0]+' '+MR.cap[1]+')"><circle class="cp" r="15"/><circle class="cpi" r="8"/></g>';
  /* EDC3: an engraved protein with contour lines */
  g+='<g id="edc" transform="translate('+EDC.c[0]+' '+EDC.c[1]+')"><circle r="'+(EDC.r*1.6)+'" fill="url(#vglow)"/>'+
     '<path class="po" d="'+lobe(0,0,EDC.r,EDC.r*.86,1,1)+'"/><path class="pi" d="'+lobe(0,0,EDC.r,EDC.r*.86,1,.72)+'"/><path class="pi2" d="'+lobe(0,0,EDC.r,EDC.r*.86,1,.44)+'"/>'+
     [[-36,-38],[4,-54],[42,-30]].map(function(q){return '<g class="ph" transform="translate('+q[0]+' '+q[1]+')"><circle r="10"/><text y="4" text-anchor="middle">P</text></g>'}).join("")+'</g>';
  /* Pim kinase: two lobes (N-lobe over C-lobe) with the pocket between them */
  g+='<g id="pim" transform="translate('+PIM.c[0]+' '+PIM.c[1]+')"><circle r="96" fill="url(#vglow)"/>'+
     '<g transform="scale(1.22)"><path class="ko" d="'+lobe(-6,-30,52,36,2,1)+'"/><path class="ki" d="'+lobe(-6,-30,52,36,2,.62)+'"/>'+
     '<path class="ko" d="'+lobe(8,34,62,44,4,1)+'"/><path class="ki" d="'+lobe(8,34,62,44,4,.66)+'"/><path class="ki2" d="'+lobe(8,34,62,44,4,.34)+'"/>'+
     '<path class="pk" d="M44 2q14 0 20 6"/></g></g>';
  /* VBT-34: a schematic two-ring small molecule (not its real structure) */
  g+='<g id="lig" transform="translate(700 70)"><circle r="34" fill="url(#vlig)"/><path class="lg" d="'+hexr(-12,0,14,0)+hexr(12,0,14,0)+'"/><path class="lg" d="M26 0h14"/></g>';
  /* labels, one set per step (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="'+(mob?40:48)+'" y="'+(mob?100:120)+'">'+(mob?'PIM KINASE':'PIM-1/3 KINASE')+'</text><path class="ldr" d="M'+(mob?240:150)+' '+(mob?110:130)+'L'+(PIM.c[0]-70)+' '+(PIM.c[1]-46)+'"/>'+
     '<text class="a" x="'+(mob?40:48)+'" y="'+(mob?300:268)+'">EDC3</text><path class="ldr" d="M'+(mob?150:100)+' '+(mob?290:263)+'L'+(EDC.c[0]-60)+' '+(EDC.c[1])+'"/>'+
     (mob?'':'<text class="t" x="48" y="288">PHOSPHORYLATED</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+(mob?776:760)+'" y="'+(mob?262:256)+'" text-anchor="end">'+(mob?'VBT-34':'VBT-34 · IN A NEW POCKET')+'</text><path class="ldr" d="M'+(mob?720:720)+' '+(mob?240:240)+'L'+(PIM.away[0]+76)+' '+(PIM.away[1]+16)+'"/>'+
     (mob?'':'<text class="t" x="760" y="274" text-anchor="end">EDC3 RELEASED</text>')+'</g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?24:40)+'" y="'+(mob?520:500)+'">'+(mob?'CAP OFF · RNA DEGRADED':'CAP REMOVED · RNA DEGRADED 5′ → 3′')+'</text></g>';
  g+='<text class="t" id="lb0" x="'+f(MR.cap[0]-8)+'" y="'+f(MR.cap[1]+46)+'">5′ CAP</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),nt:$$("#scBase .nt",svg),cap:$("#cap",svg),edc:$("#edc",svg),pim:$("#pim",svg),lig:$("#lig",svg),
    ph:$$(".ph",svg),l0:$("#lb0",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg),rb:$("#scBase .rb",svg)};
  var lastB=-1,n=E.nt.length;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.14),s2=seg(p,.36,.54),s3=seg(p,.68,.9);
    /* Pim: docks onto EDC3 in step 1, released to its resting place in step 2 */
    var dock=s1*(1-s2),px=lerp(PIM.away[0],PIM.c[0],dock),py=lerp(PIM.away[1],PIM.c[1],dock);
    E.pim.setAttribute("transform","translate("+px.toFixed(1)+" "+py.toFixed(1)+")");op(E.pim,b);
    /* VBT-34 flies into the pocket on the right of Pim (local +54,+4) during step 2 and stays */
    var lx=lerp(740,px+66,s2),ly=lerp(70,py+5,s2);E.lig.setAttribute("transform","translate("+lx.toFixed(1)+" "+ly.toFixed(1)+")");op(E.lig,b*s2);
    /* phosphates on EDC3 while Pim is docked */
    E.ph.forEach(function(el,i){op(el,b*seg(p,.04+i*.03,.14+i*.03)*(1-s2))});
    /* EDC3 comes down to the cap in step 3 */
    var ex=EDC.c[0]+(-80)*s3,ey=EDC.c[1]+76*s3;E.edc.setAttribute("transform","translate("+ex.toFixed(1)+" "+ey.toFixed(1)+")");op(E.edc,b);
    E.edc.classList.toggle("act",s3>.4);
    /* the cap comes off and drifts down-left; the RNA then decays from its 5' end */
    var cOff=seg(p,.78,.9);E.cap.setAttribute("transform","translate("+(MR.cap[0]-40*cOff).toFixed(1)+" "+(MR.cap[1]+70*cOff).toFixed(1)+")");op(E.cap,b*(1-cOff*.85));
    var dec=seg(p,.84,1);E.nt.forEach(function(el,i){op(el,b*(1-seg(dec,i/n*.8,i/n*.8+.2)*.92))});
    E.rb.style.opacity=(b*(1-dec*.75)).toFixed(3);
    op(E.l0,b*(1-cOff));
    op(E.l1,b*s1*(1-seg(p,.28,.36)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.8,.9));
  };
}

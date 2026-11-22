/* The story scene (BL/BY/DB): how IP-to-MS works, as ONE continuous fine-line scene. A capture bead (engraved sphere)
   sits left of centre among natively expressed proteins from a cell lysate. Step 1 (capture): the patient's antibodies,
   drifting free, dock on the bead by their stems. Step 2 (pull down): only the proteins the antibodies recognise (gold)
   move in and bind at the antibody tips; the others stay where they are. Step 3 (identify): the bound antigens are
   released and a mass spectrum draws on the right, its tall gold peaks the identified antigens. Driven by the scrubbed
   progress. Facts: impactproteomics.com (/ip-to-ms, /technology), JPR 2025 announcement. */
var SCW=760,SCH=520,BX=226,BY=262,BR=88;
var IPAB=[-150,-114,-78,-42,-6,30,66,102,138,174];      /* antibody angles (deg, svg coords) */
var IPAG=[[1,1],[3,0],[4,1],[6,0],[8,1]];                 /* antigen docking: [antibody index, arm 0/1] */
var IPPR=[[66,96],[392,92],[426,344],[372,440],[262,446],[64,430],[36,286],[126,40],[300,30]]; /* other lysate proteins, outside every label box */
function ipRad(a){return a*Math.PI/180}
function ipPt(a,r){return [BX+r*Math.cos(ipRad(a)),BY+r*Math.sin(ipRad(a))]}
function ipTip(i,arm){var a=IPAB[i],s=ipPt(a,BR+3+26),aa=a+(arm?32:-32);return [s[0]+30*Math.cos(ipRad(aa)),s[1]+30*Math.sin(ipRad(aa)),aa]}
function ipBlob(cx,cy,r,seed){var s=seed*9301+49297,R=function(){s=(s*9301+49297)%233280;return s/233280},n=7,P=[],i;
  for(i=0;i<n;i++){var t=i/n*Math.PI*2,rr=r*(.78+R()*.4);P.push([cx+rr*Math.cos(t),cy+rr*Math.sin(t)])}
  var d='',k=.36;for(i=0;i<n;i++){var p0=P[(i-1+n)%n],p1=P[i],p2=P[(i+1)%n],p3=P[(i+2)%n];
    if(!i)d+='M'+p1[0].toFixed(1)+' '+p1[1].toFixed(1);
    d+='C'+(p1[0]+(p2[0]-p0[0])*k/2).toFixed(1)+' '+(p1[1]+(p2[1]-p0[1])*k/2).toFixed(1)+' '+(p2[0]-(p3[0]-p1[0])*k/2).toFixed(1)+' '+(p2[1]-(p3[1]-p1[1])*k/2).toFixed(1)+' '+p2[0].toFixed(1)+' '+p2[1].toFixed(1)}
  return d+'Z'}
function ipY(i){var a=IPAB[i],b=ipPt(a,BR+3),s=ipPt(a,BR+3+26),t0=ipTip(i,0),t1=ipTip(i,1);
  return 'M'+b[0].toFixed(1)+' '+b[1].toFixed(1)+'L'+s[0].toFixed(1)+' '+s[1].toFixed(1)+'M'+t0[0].toFixed(1)+' '+t0[1].toFixed(1)+'L'+s[0].toFixed(1)+' '+s[1].toFixed(1)+'L'+t1[0].toFixed(1)+' '+t1[1].toFixed(1)}
/* where each antigen docks (just beyond its arm tip) and where it starts in the lysate */
function ipDock(k){var t=ipTip(IPAG[k][0],IPAG[k][1]);return [t[0]+13*Math.cos(ipRad(t[2])),t[1]+13*Math.sin(ipRad(t[2]))]}
function ipStart(k){var t=ipTip(IPAG[k][0],IPAG[k][1]),a=t[2]+(k%2?14:-14);return [t[0]+70*Math.cos(ipRad(a)),t[1]+70*Math.sin(ipRad(a))]}
/* the spectrum: axes and peaks; gold peaks are the five antigens */
var SPX0=480,SPX1=728,SPY0=388,SPYT=150;
var IPPK=[[494,.16,0],[508,.3,0],[521,.58,1],[537,.2,0],[552,.12,0],[566,.42,0],[581,.86,1],[597,.24,0],[611,.5,1],[628,.14,0],[642,.34,0],[657,.72,1],[673,.18,0],[688,.28,0],[702,.64,1],[716,.1,0]];
function ipScene(o){
  var g='',i,k;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true"><g id="scBase">';
  /* the bead: an engraved sphere (outline, three shading arcs, a highlight) */
  g+='<circle class="bd sD" cx="'+BX+'" cy="'+BY+'" r="'+BR+'"/>';
  [10,22,36].forEach(function(o){var cx=BX-o*.7,cy=BY-o*.7,r=BR-o,a0=ipRad(-20),a1=ipRad(110);
    g+='<path class="bh sD" d="M'+(cx+r*Math.cos(a0)).toFixed(1)+' '+(cy+r*Math.sin(a0)).toFixed(1)+'A'+r+' '+r+' 0 0 1 '+(cx+r*Math.cos(a1)).toFixed(1)+' '+(cy+r*Math.sin(a1)).toFixed(1)+'"/>'});
  g+='<path class="bl sD" d="M'+(BX-56)+' '+(BY-34)+'A64 64 0 0 1 '+(BX-24)+' '+(BY-62)+'"/>';
  /* other lysate proteins (grey) */
  IPPR.forEach(function(p,j){if(o.mob&&p[1]>420)return;g+='<path class="pr sD" d="'+ipBlob(p[0],p[1],9+(j%3)*2,j+3)+'"/>'});
  g+='<path class="ax sD" d="M'+SPX0+' '+SPYT+'L'+SPX0+' '+SPY0+'L'+SPX1+' '+SPY0+'"/>';
  if(!o.mob)g+='<text class="t" x="40" y="'+(SCH-20)+'">IMMUNOPRECIPITATION · SCHEMATIC</text><text class="t" x="'+((SPX0+SPX1)/2)+'" y="'+(SPY0+34)+'" text-anchor="middle">MASS SPECTRUM · m/z</text>';
  g+='</g>';
  /* antibodies: each a Y, docked by its stem; drift in from outside during step 1 */
  g+='<g id="ipAbs">';for(i=0;i<IPAB.length;i++)g+='<g class="abg" data-a="'+IPAB[i]+'"><path class="ab" d="'+ipY(i)+'"/></g>';g+='</g>';
  /* antigens (gold): start in the lysate, bind at the tips in step 2, released in step 3 */
  g+='<g id="ipAgs">';for(k=0;k<IPAG.length;k++){var d=ipDock(k);g+='<g class="agg"><path class="ag" d="'+ipBlob(d[0],d[1],11,k+11)+'"/></g>'}g+='</g>';
  /* the spectrum */
  g+='<g id="ipSpec">';
  IPPK.forEach(function(p){var h=(SPY0-SPYT-14)*p[1];g+='<path class="pk'+(p[2]?' on':'')+'" d="M'+p[0]+' '+SPY0+'L'+p[0]+' '+(SPY0-h).toFixed(1)+'"/>'});
  g+='</g>';
  if(o.mob){
    g+='<g id="lb1"><text x="380" y="500" text-anchor="middle">ANTIBODIES ON A BEAD</text></g>';
    g+='<g id="lb2"><text x="380" y="500" text-anchor="middle">ONLY ANTIGENS BIND</text></g>';
    g+='<g id="lb3"><text x="380" y="500" text-anchor="middle">IDENTIFIED BY MASS SPEC</text></g>';
  }else{
    var a1=ipTip(7,1);   /* lower-left antibody tip */
    g+='<g id="lb1"><path class="ld" d="M'+(a1[0]-4).toFixed(1)+' '+(a1[1]+8).toFixed(1)+'L104 446"/><text x="40" y="462">PATIENT ANTIBODIES</text></g>';
    var d2=ipDock(2);
    g+='<g id="lb2"><path class="ld" d="M'+(d2[0]+12).toFixed(1)+' '+(d2[1]-10).toFixed(1)+'L470 66"/><text x="478" y="70">NATIVE ANTIGENS BOUND</text></g>';
    g+='<g id="lb3"><text x="'+(SPX0)+'" y="'+(SPYT-22)+'">ANTIGENS IDENTIFIED</text></g>';
  }
  return g+'</svg>';
}
function scene(){return ipScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(list){return list.map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl($$("#scBase .sD",svg)),fade:$$("#scBase text",svg),abs:$$("#ipAbs .abg",svg),abp:dl($$("#ipAbs .ab",svg)),ags:$$("#ipAgs .agg",svg),agp:dl($$("#ipAgs .ag",svg)),
    pk:dl($$("#ipSpec .pk",svg)),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  var ST=[];for(var k=0;k<IPAG.length;k++){var s=ipStart(k),d=ipDock(k);ST.push([s[0]-d[0],s[1]-d[1]])}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.abp,b);draw(E.agp,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var cap=sm2(seg(p,.04,.26)),pull=sm2(seg(p,.36,.6)),rel=sm2(seg(p,.68,.8)),spec=seg(p,.7,.94);
    /* step 1: antibodies drift in and dock on the bead by their stems */
    E.abs.forEach(function(gr,i){var a=+gr.getAttribute("data-a"),off=34*(1-cap),rt=(i%2?16:-16)*(1-cap);
      var c=ipPt(a,BR+30);gr.setAttribute("transform","translate("+(off*Math.cos(ipRad(a))).toFixed(1)+" "+(off*Math.sin(ipRad(a))).toFixed(1)+") rotate("+rt.toFixed(1)+" "+c[0].toFixed(1)+" "+c[1].toFixed(1)+")")});
    /* step 2: the antigens move in from the lysate and bind; step 3: released toward the spectrum and fade */
    E.ags.forEach(function(gr,k){var x=ST[k][0]*(1-pull),y=ST[k][1]*(1-pull),d=ipDock(k);x+=(SPX0-20-d[0])*rel*.35;y+=(SPY0-60-d[1])*rel*.1;
      gr.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(gr,b*(1-rel))});
    /* the spectrum draws: axes first, then every peak reaches its full height */
    draw(E.pk,sm2(seg(spec,.1,1)));
    op(E.l1,b*seg(p,.16,.24)*(1-seg(p,.32,.38)));op(E.l2,b*seg(p,.5,.58)*(1-seg(p,.66,.72)));op(E.l3,b*seg(p,.84,.92));
  };
}
function sm2(x){return x*x*(3-2*x)}

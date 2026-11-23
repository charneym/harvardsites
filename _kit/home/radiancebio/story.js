/* the story scene (BL/BY/DB): ONE engraved tumor cell, kept on screen for all three steps, with a healthy cell and a blood vessel.
   Step 1 Hsp70 lights on the tumor cell's membrane; the healthy cell stays bare. Step 2 exosomes carrying Hsp70 bud off the tumor
   and drift into the blood, where the companion blood test measures them. Step 3 RB-203 antibodies arrive and dock on the membrane
   Hsp70 only. Sources: radiancebio.com (RB-203 page; Advisors: Multhoff's ELISA test for exosomal tumor-derived Hsp70).
   Schematic; positions are illustrative. Driven by the scrubbed story progress. */
var TC={c:[290,290],r:200};
var HC={c:[655,166],r:90};
var HANG=[-60,-36,-12,12,36,60,84,108,132,156,180,204];   /* membrane Hsp70 positions (deg; upper-left kept clear for labels) */
var EXO=[[30,[540,522],0],[44,[556,517],.12],[58,[530,528],.24],[20,[548,519],.36],[70,[522,531],.18]];  /* [membrane angle, vessel entry, delay] */
function rnd(s){return function(){s=(s*16807)%2147483647;return (s-1)/2147483646}}
function AB(s){return '<path d="M39.5 104V37L7 12M52.5 104V37L85 12" transform="translate('+(-46*s).toFixed(2)+' 0) scale('+s+')" class="abs"/>'+
  '<path d="M17.5 5.5L35.5 19.2M74.5 5.5L56.5 19.2" transform="translate('+(-46*s).toFixed(2)+' 0) scale('+s+')" class="abs abl"/>'}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,R=rnd(7);
  var cx=TC.c[0],cy=TC.c[1],r=TC.r;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="hsg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#6ea9df" stop-opacity=".5"/><stop offset="1" stop-color="#6ea9df" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="tcg" cx=".45" cy=".42" r=".6"><stop offset="0" stop-color="#2471b9" stop-opacity=".16"/><stop offset="1" stop-color="#2471b9" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* blood vessel along the bottom right: two walls and a few red cells, engraved */
  g+='<path class="vw sD" d="M478 560C520 520 570 500 640 497L800 497"/><path class="vw sD" d="M600 560C630 546 680 539 740 539L800 539"/>';
  [[690,518,13],[760,520,12],[652,526,11]].forEach(function(q){g+='<ellipse class="rbc" cx="'+q[0]+'" cy="'+q[1]+'" rx="'+q[2]+'" ry="'+(q[2]*.42).toFixed(1)+'"/>'});
  /* tumor cell: double membrane, cytoplasm stipple, organelles, nucleus with nucleolus */
  g+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="url(#tcg)"/>';
  g+='<circle class="mb sD" cx="'+cx+'" cy="'+cy+'" r="'+r+'"/><circle class="mb2 sD" cx="'+cx+'" cy="'+cy+'" r="'+(r-7)+'"/>';
  var st='';for(i=0;i<420;i++){var a=R()*Math.PI*2,d=Math.sqrt(R())*(r-16);var x=cx+d*Math.cos(a),y=cy+d*Math.sin(a);if(Math.hypot(x-272,y-298)<92)continue;st+='M'+f(x)+' '+f(y)+'h.1'}
  g+='<path class="stp" d="'+st+'"/>';
  var nuc='';for(i=0;i<=72;i++){var t=i/72*Math.PI*2,rr=84*(1+.05*Math.sin(3*t+1)+.03*Math.cos(5*t));nuc+=(i?'L':'M')+f(272+rr*Math.cos(t))+' '+f(298+rr*Math.sin(t))}
  g+='<path class="nu sD" d="'+nuc+'Z"/>';
  g+='<circle class="nu2 sD" cx="252" cy="282" r="22"/><circle class="nu3 sD" cx="252" cy="282" r="12"/>';
  [[400,206,22,9,-30],[180,420,20,8,40],[396,384,18,8,60],[170,196,20,8,-50]].forEach(function(m){g+='<ellipse class="og sD" cx="'+m[0]+'" cy="'+m[1]+'" rx="'+m[2]+'" ry="'+m[3]+'" transform="rotate('+m[4]+' '+m[0]+' '+m[1]+')"/>'});
  /* healthy cell, bare membrane */
  g+='<circle class="mb sD" cx="'+HC.c[0]+'" cy="'+HC.c[1]+'" r="'+HC.r+'"/><circle class="mb2 sD" cx="'+HC.c[0]+'" cy="'+HC.c[1]+'" r="'+(HC.r-6)+'"/>';
  g+='<circle class="nu sD" cx="'+(HC.c[0]-8)+'" cy="'+(HC.c[1]+4)+'" r="34"/><circle class="nu2 sD" cx="'+(HC.c[0]-16)+'" cy="'+(HC.c[1]-4)+'" r="9"/>';
  g+='<text class="hl" x="784" y="40" text-anchor="end">'+(mob?'HEALTHY CELL':'HEALTHY CELL · NO MEMBRANE Hsp70')+'</text>';
  if(!mob)g+='<text class="t" x="16" y="548">TUMOR CELL · SCHEMATIC</text>';
  g+='</g>';
  g+='<g id="scMove">';
  /* membrane Hsp70: a two-lobed protein on a short stalk, pointing out of the membrane */
  HANG.forEach(function(a){var x=cx+r*Math.cos(a*Math.PI/180),y=cy+r*Math.sin(a*Math.PI/180);
    g+='<g class="hs" transform="translate('+f(x)+' '+f(y)+') rotate('+(a+90)+')"><circle cy="-11" r="17" fill="url(#hsg)" class="hsg"/><path class="hst" d="M0 0V-5"/>'+
      '<ellipse class="hsl" cx="-4.2" cy="-11" rx="5.4" ry="6.6"/><ellipse class="hsl" cx="4.6" cy="-12" rx="5" ry="6.2"/></g>'});
  /* exosomes: small vesicles each carrying a fleck of Hsp70 */
  EXO.forEach(function(e,j){g+='<g class="ex" id="ex'+j+'"><circle class="exm" r="9"/><circle class="exh" cx="0" cy="-9" r="3.4"/></g>'});
  /* RB-203: the antibody, drawn as the Radiance mark, docking arms-first on each membrane Hsp70 */
  HANG.forEach(function(a,j){g+='<g class="ab" id="ab'+j+'">'+AB(.36)+'</g>'});
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  var p0=[cx+(r+16)*Math.cos(-60*Math.PI/180),cy+(r+16)*Math.sin(-60*Math.PI/180)];
  g+='<g id="lb1"><text class="a" x="24" y="40">MEMBRANE Hsp70</text>'+(mob?'':'<text class="t" x="24" y="60">ON MOST TUMORS, NOT ON HEALTHY CELLS</text>')+
     '<path class="ldr" d="M'+(mob?250:200)+' '+(mob?56:70)+'L'+f(p0[0]-12)+' '+f(p0[1]-14)+'"/></g>';
  g+='<g id="lb2"><text class="a" x="784" y="'+(mob?352:340)+'" text-anchor="end">'+(mob?'EXOSOMES':'EXOSOMES CARRY Hsp70')+'</text>'+(mob?'':'<text class="t" x="784" y="360" text-anchor="end">FROM THE TUMOR INTO THE BLOOD</text>')+
     (mob?'':'<text class="a" x="784" y="474" text-anchor="end">COMPANION BLOOD TEST</text>')+'</g>';
  var q=[cx+(r+52)*Math.cos(-60*Math.PI/180),cy+(r+52)*Math.sin(-60*Math.PI/180)];
  g+='<g id="lb3"><text class="a" x="24" y="40">RB-203 BOUND</text>'+(mob?'':'<text class="t" x="24" y="60">ONLY WHERE Hsp70 SITS ON THE MEMBRANE</text>')+
     '<path class="ldr" d="M'+(mob?250:200)+' '+(mob?56:70)+'L'+f(q[0]-14)+' '+f(q[1]-4)+'"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .rbc, #scBase .stp",svg),mv:$("#scMove",svg),hs:$$(".hs",svg),ex:$$(".ex",svg),ab:$$(".ab",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,cx=TC.c[0],cy=TC.c[1],r=TC.r;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,.02,.18),s2=seg(p,.36,.6),s3=seg(p,.68,.9);
    /* membrane Hsp70 lights in step 1 and stays */
    E.hs.forEach(function(el,j){op(el,b*seg(s1,j/HANG.length*.6,j/HANG.length*.6+.4))});
    /* exosomes bud from the membrane, travel to the vessel, then drift right with the blood */
    E.ex.forEach(function(el,j){var e=EXO[j],a=e[0]*Math.PI/180,t=seg(p,.38+e[2]*.3,.58+e[2]*.3),u=seg(p,.58+e[2]*.3,.66+e[2]*.3);
      var x0=cx+(r+12)*Math.cos(a),y0=cy+(r+12)*Math.sin(a),x=lerp(x0,e[1][0],t),y=lerp(y0,e[1][1],t);x+=u*(150+j*24);
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*seg(p,.36+e[2]*.3,.42+e[2]*.3)*(1-seg(p,.7,.78)))});
    /* antibodies arrive from outside and dock arms-first on the membrane Hsp70 */
    E.ab.forEach(function(el,j){var a=HANG[j],ar=a*Math.PI/180,t=seg(s3,j%4*.12,j%4*.12+.64),d=r+19+(1-t)*110;
      el.setAttribute("transform","translate("+(cx+d*Math.cos(ar)).toFixed(1)+" "+(cy+d*Math.sin(ar)).toFixed(1)+") rotate("+(a-90)+")");op(el,b*t*1.4)});
    op(E.l1,b*s1*(1-seg(p,.28,.36)));op(E.l2,b*seg(p,.42,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.78,.88));
  };
}

/* the story scene (BL/BY/DB): ONE engraved cochlea, coiled (small, top left) and unrolled (the long strip), kept on screen for
   all three steps. The strip is the organ of Corti from the base (high pitch, at the round window) to the apex (low pitch),
   with three rows of outer hair cells and one row of inner hair cells.
   Step 1 (deliver): a dose reaches the round window and spreads along the strip from base toward apex (Drug pharmacokinetics,
   FluidSim). Step 2 (measure): an ABR threshold curve is drawn above the strip, each test tone dropping to its place on it
   (Audiometric testing: tones from low to high pitch, quiet to loud). Step 3 (count): hair cells near the base fade as lost and a
   cytocochleogram (hair cell loss, %) is drawn beneath (Cytocochleogram). Sources: turnerscientific.com service pages.
   Schematic; curves and positions are illustrative. Driven by the scrubbed story progress. */
var CO={x0:150,x1:730,top:300,rows:[311,321,331],ihc:347,n:36,rw:[118,326],ch:{x0:232,x1:730,y0:112,y1:250},cc:{y0:440,y1:508}};
function coB(x){return 356+20*(x-CO.x0)/(CO.x1-CO.x0)}
function coX(i){return CO.x0+12+i*(CO.x1-CO.x0-24)/(CO.n-1)}
/* ABR threshold (dB SPL) along the strip: left = base/high pitch, right = apex/low pitch; illustrative U-shape */
function coThr(u){return 22+46*Math.pow(1-Math.min(1,u/.55),2.2)+30*Math.pow(Math.max(0,(u-.62)/.38),1.8)}
function coLoss(u){var v=1-u/.34;return v<=0?0:Math.pow(v,1.25)}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,r,C=CO,ch=C.ch,cc=C.cc;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="30 50 750 500" aria-hidden="true">';
  g+='<defs><linearGradient id="tdrug" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#e58ea3" stop-opacity=".55"/><stop offset=".55" stop-color="#e58ea3" stop-opacity=".22"/><stop offset="1" stop-color="#e58ea3" stop-opacity="0"/></linearGradient>'+
     '<clipPath id="tstrip"><path d="M'+C.x0+' '+C.top+'L'+C.x1+' '+C.top+'L'+C.x1+' '+f(coB(C.x1))+'L'+C.x0+' '+f(coB(C.x0))+'Z"/></clipPath>'+
     '<radialGradient id="tglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e58ea3" stop-opacity=".35"/><stop offset="1" stop-color="#e58ea3" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  /* the coiled cochlea: an engraved spiral of two and a half turns */
  var sp='',k,n=150,cx=104,cy=140;for(k=0;k<=n;k++){var t=k/n*Math.PI*5,rr=50*Math.exp(-.155*t);sp+=(k?'L':'M')+f(cx+rr*Math.cos(t+Math.PI))+' '+f(cy+rr*.86*Math.sin(t+Math.PI))}
  g+='<path class="rb sD" d="'+sp+'"/>';
  var sp2='';for(k=0;k<=n;k++){var t2=k/n*Math.PI*4.4,r2=40*Math.exp(-.155*t2);sp2+=(k?'L':'M')+f(cx+r2*Math.cos(t2+Math.PI))+' '+f(cy+r2*.86*Math.sin(t2+Math.PI))}
  g+='<path class="nt sD" d="'+sp2+'"/>';
  g+='<path class="ldr sD" d="M'+f(cx-50)+' '+f(cy+12)+'C'+f(cx-56)+' 240 '+f(C.rw[0]-30)+' 290 '+f(C.rw[0]-12)+' '+f(C.rw[1]-6)+'" stroke-dasharray="3 5"/>';
  /* the unrolled strip: outline, scala lines and hair cell rows */
  g+='<path class="rb sD" d="M'+C.x0+' '+C.top+'L'+C.x1+' '+C.top+'L'+C.x1+' '+f(coB(C.x1))+'L'+C.x0+' '+f(coB(C.x0))+'Z"/>';
  g+='<rect id="drug" x="'+C.x0+'" y="'+C.top+'" width="0" height="80" fill="url(#tdrug)" clip-path="url(#tstrip)"/>';
  g+='<path class="pi2 sD" d="M'+C.x0+' 339L'+C.x1+' 339"/>';
  for(i=0;i<C.n;i++){var x=coX(i);for(r=0;r<3;r++)g+='<circle class="hc o" data-i="'+i+'" cx="'+f(x+(r%2?2.5:0))+'" cy="'+C.rows[r]+'" r="2.9"/>';
    g+='<path class="hc i" data-i="'+i+'" d="M'+f(x-2.6)+' '+C.ihc+'l2.6-4.2 2.6 4.2z"/>'}
  /* round window */
  g+='<ellipse class="rw" cx="'+C.rw[0]+'" cy="'+C.rw[1]+'" rx="8" ry="15"/>';
  /* axis labels under the strip */
  g+='<text class="t" x="'+C.x0+'" y="'+(mob?408:398)+'">'+(mob?'BASE · HIGH':'BASE · HIGH PITCH')+'</text>';
  g+='<text class="t" x="'+C.x1+'" y="'+(mob?408:404)+'" text-anchor="end">'+(mob?'APEX · LOW':'APEX · LOW PITCH')+'</text>';
  g+='<text class="t" x="48" y="'+(mob?246:224)+'">'+(mob?'COCHLEA':'COCHLEA, UNROLLED')+'</text>';
  g+='</g>';
  /* step 1: the dose */
  g+='<g id="dose"><circle r="22" fill="url(#tglow)"/><path class="lg" d="M0 -13C5 -5 8 -1 8 4a8 8 0 0 1-16 0c0-5 3-9 8-17z"/></g>';
  /* step 2: the ABR chart */
  g+='<g id="abr"><path class="ax" d="M'+ch.x0+' '+ch.y0+'L'+ch.x0+' '+ch.y1+'L'+ch.x1+' '+ch.y1+'"/>';
  var cv='',m=60;for(k=0;k<=m;k++){var u=k/m,X=C.x0+12+u*(C.x1-C.x0-24);if(X<ch.x0+4)continue;var Y=ch.y1-(coThr(u)-10)*1.4;cv+=(cv?'L':'M')+f(X)+' '+f(Y)}
  g+='<path class="cvA" id="abrC" d="'+cv+'"/>';
  [.2,.38,.56,.74,.92].forEach(function(u){var X=C.x0+12+u*(C.x1-C.x0-24),Y=ch.y1-(coThr(u)-10)*1.4;
    g+='<g class="tone"><path class="drop" d="M'+f(X)+' '+f(Y+6)+'L'+f(X)+' '+(C.top-4)+'"/><circle class="tp" cx="'+f(X)+'" cy="'+f(Y)+'" r="4.5"/></g>'});
  g+='</g>';
  /* step 3: the cytocochleogram */
  g+='<g id="cyto"><path class="ax" d="M'+C.x0+' '+cc.y0+'L'+C.x0+' '+cc.y1+'L'+C.x1+' '+cc.y1+'"/>';
  var lc='';for(k=0;k<=m;k++){var u3=k/m,X3=C.x0+12+u3*(C.x1-C.x0-24),Y3=cc.y1-coLoss(u3)*(cc.y1-cc.y0-6);lc+=(k?'L':'M')+f(X3)+' '+f(Y3)}
  g+='<path class="cvA" id="ccC" d="'+lc+'"/></g>';
  /* labels, one set per step (leaders end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="48" y="'+(mob?274:282)+'">'+'ROUND WINDOW'+'</text>'+
     '<text class="a" x="'+C.x1+'" y="'+(mob?274:286)+'" text-anchor="end">'+(mob?'DOSE SPREADS':'DOSE SPREADS BASE TO APEX')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+(ch.x0+14)+'" y="'+(mob?106:104)+'">'+(mob?'ABR THRESHOLD':'ABR THRESHOLD · dB SPL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+(C.x0+14)+'" y="'+(mob?540:536)+'">'+(mob?'HAIR CELL LOSS':'HAIR CELL LOSS, % · CYTOCOCHLEOGRAM')+'</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .rw",svg),hc:$$("#scBase .hc",svg),drug:$("#drug",svg),dose:$("#dose",svg),
    abr:$("#abr",svg),abrC:dl("#abrC"),tones:$$(".tone",svg),cyto:$("#cyto",svg),ccC:dl("#ccC"),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,N=CO.n;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),sp=seg(p,.1,.32),s2=seg(p,.36,.6),s3=seg(p,.68,.92);
    /* the dose falls to the round window, then fades as the drug spreads along the strip */
    var dy=-150+150*s1;E.dose.setAttribute("transform","translate("+CO.rw[0]+" "+(CO.rw[1]-26+dy).toFixed(1)+")");op(E.dose,b*s1*(1-sp*.85));
    E.drug.setAttribute("width",((CO.x1-CO.x0)*sp).toFixed(1));op(E.drug,b*(1-s3*.6));
    /* ABR: curve draws, tones drop onto the strip one by one */
    op(E.abr,b*Math.min(1,s2*3));draw(E.abrC,s2);
    E.tones.forEach(function(t,i){op(t,b*seg(p,.4+i*.035,.46+i*.035))});
    /* hair cells near the base are lost (outer rows first), and the loss curve draws */
    E.hc.forEach(function(el){var i=+el.getAttribute("data-i"),u=i/(N-1),l=coLoss(u)*(el.classList.contains("i")?.55:1);
      var gone=l>0?seg(s3,(1-l)*.5,(1-l)*.5+.5)*l:0;op(el,b*(1-gone*.88));el.classList.toggle("lost",gone>.45)});
    op(E.cyto,b*Math.min(1,s3*3));draw(E.ccC,s3);
    op(E.l1,b*s1*(1-seg(p,.3,.38)));op(E.l2,b*s2*(1-seg(p,.62,.7)));op(E.l3,b*seg(p,.76,.9));
  };
}

/* The story scene (DB/BY): Stellular Bio's own science (stellularbio.com Science; Series 1 release, Jan 2026), drawn as ONE
   fine-line picture that fills the frame and stays on screen: at left a platelet-progenitor cell (a megakaryocyte, with its
   lobed nucleus) extending beaded proplatelet strands; in the middle the platelets themselves; at right a section of the
   ocular surface (tear film over the corneal epithelium, the stroma behind). Frame 0 is already complete.
   Step 1 (platelets): the platelets light and release their many active substances (small gold dots).
   Step 2 (source): the progenitor cell lights and new platelets bud along its strands: made from stem cells, not donors.
   Step 3 (eye): the substances drift to the ocular surface and its epithelial cells light, many at once.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var CX=900,CY=270;                       /* centre of the corneal curvature (off the right edge) */
function arcP(R,deg){var a=deg*Math.PI/180;return [CX-R*Math.cos(a),CY+R*Math.sin(a)]}
function arcD(R,a0,a1){var p0=arcP(R,a0),p1=arcP(R,a1);return 'M'+f1(p0[0])+' '+f1(p0[1])+'A'+R+' '+R+' 0 0 0 '+f1(p1[0])+' '+f1(p1[1])}
var MK=[150,270,96];
var PLT=[[402,172,-18],[474,150,12],[444,228,-6],[514,214,20],[398,300,8],[470,292,-14],[424,372,16],[502,360,-8]];
var STR=[[[236,226],[272,196],[300,186],[334,180]],[[246,272],[284,268],[316,276],[350,272]],[[236,318],[272,350],[300,362],[334,366]]];
var NF=32;
function f1(v){return v.toFixed(1)}
function bz(P,t){var u=1-t;return [u*u*u*P[0][0]+3*u*u*t*P[1][0]+3*u*t*t*P[2][0]+t*t*t*P[3][0],u*u*u*P[0][1]+3*u*u*t*P[1][1]+3*u*t*t*P[2][1]+t*t*t*P[3][1]]}
function rnd(i){var x=Math.sin(i*127.1+311.7)*43758.5453;return x-Math.floor(x)}
function blob(cx,cy,r,a,b,ph,n){var d='';for(var i=0;i<=n;i++){var t=i/n*Math.PI*2,rr=r+a*Math.sin(3*t+ph)+b*Math.sin(5*t+ph*2);d+=(i?'L':'M')+f1(cx+rr*Math.cos(t))+' '+f1(cy+rr*Math.sin(t))}return d+'Z'}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'24 40 724 520':'10 30 740 532')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gMk"><stop offset="0" stop-color="#f3a000" stop-opacity=".22"/><stop offset="1" stop-color="#f3a000" stop-opacity="0"/></radialGradient></defs>';
  /* the progenitor cell: membrane, lobed nucleus, granules, and three beaded proplatelet strands */
  g+='<g id="scMk"><circle id="mkGlow" cx="'+MK[0]+'" cy="'+MK[1]+'" r="128" fill="url(#gMk)"/>';
  g+='<path class="wl sD mkm" d="'+blob(MK[0],MK[1],MK[2],2.6,1.8,.7,96)+'"/>';
  g+='<path class="wo sD mkn" d="'+blob(MK[0]-8,MK[1]-6,40,9,5,1.9,80)+'"/>';
  for(var i=0;i<16;i++){var a=rnd(i)*Math.PI*2,r=52+rnd(i+40)*32;g+='<circle class="gr" cx="'+f1(MK[0]+r*Math.cos(a))+'" cy="'+f1(MK[1]+r*Math.sin(a))+'" r="1.9"/>'}
  STR.forEach(function(P){g+='<path class="wl sD st" d="M'+P[0][0]+' '+P[0][1]+'C'+P[1][0]+' '+P[1][1]+' '+P[2][0]+' '+P[2][1]+' '+P[3][0]+' '+P[3][1]+'"/>';
    [.42,.7,1].forEach(function(t){var q=bz(P,t);g+='<ellipse class="bd" cx="'+f1(q[0])+'" cy="'+f1(q[1])+'" rx="6" ry="4"/>'})});
  g+='<g id="scBud">';STR.forEach(function(){for(var k=0;k<3;k++)g+='<ellipse class="bud" rx="6" ry="4" cx="0" cy="0"/>'});g+='</g></g>';
  /* the platelets: small discs seen at a slant, each with a few granules */
  g+='<g id="scPl">';PLT.forEach(function(q,k){g+='<g class="pl" transform="translate('+q[0]+' '+q[1]+') rotate('+q[2]+')"><ellipse class="pd" rx="17" ry="9"/>'+
    '<circle class="pg" cx="-6" cy="-1" r="1.7"/><circle class="pg" cx="2" cy="2" r="1.7"/><circle class="pg" cx="7" cy="-2" r="1.7"/></g>'});g+='</g>';
  /* the ocular surface: tear film, the corneal epithelium as cells, the stroma behind */
  g+='<g id="scEye">';
  for(var j=-9;j<9;j++){var a0=j*4.5,a1=a0+4.5,p0=arcP(292,a0),p1=arcP(292,a1),p2=arcP(262,a1),p3=arcP(262,a0),pm0=arcP(277,a0),pm1=arcP(277,a1);
    g+='<path class="cell" data-a="'+(a0+2.25)+'" d="M'+f1(p0[0])+' '+f1(p0[1])+'A292 292 0 0 0 '+f1(p1[0])+' '+f1(p1[1])+'L'+f1(p2[0])+' '+f1(p2[1])+'A262 262 0 0 1 '+f1(p3[0])+' '+f1(p3[1])+'Z"/>'+
      '<path class="cw" d="M'+f1(pm0[0])+' '+f1(pm0[1])+'A277 277 0 0 0 '+f1(pm1[0])+' '+f1(pm1[1])+'"/>'}
  g+='<path class="wl sD" d="'+arcD(292,-40.5,40.5)+'"/><path class="wl sD" d="'+arcD(262,-40.5,40.5)+'"/>';
  g+='<path class="tf sD" id="tear" d="'+arcD(301,-40.5,40.5)+'"/>';
  [248,236,224,212].forEach(function(R,k){g+='<path class="wo sD" d="'+arcD(R,-40.5,40.5)+'"/>'});
  g+='</g>';
  /* the active substances, released from the platelets */
  g+='<g id="scF">';for(var m=0;m<NF;m++)g+='<circle class="fa" r="2.3" cx="0" cy="0"/>';g+='</g>';
  if(!mob){
    g+='<g id="lMk"><text class="t" x="'+MK[0]+'" y="398" text-anchor="middle">PLATELET PROGENITOR</text><text class="t q" x="'+MK[0]+'" y="414" text-anchor="middle">FROM STEM CELLS</text></g>';
    g+='<g id="lPl"><text class="t" x="458" y="112" text-anchor="middle">PLATELETS</text></g>';
    g+='<g id="lEye"><text class="t" x="676" y="500" text-anchor="middle">OCULAR SURFACE</text><text class="t q" x="676" y="516" text-anchor="middle">TEAR FILM · EPITHELIUM</text></g>';
  }else{g+='<g id="lMk"></g><g id="lPl"></g><g id="lEye"></g>'}
  var ly=mob?548:554,lx=mob?34:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SIGNALS IN EVERY PLATELET':'HUNDREDS OF ACTIVE SUBSTANCES IN EVERY PLATELET')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MADE FROM STEM CELLS':'MADE FROM PLATELET-PROGENITOR STEM CELLS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ACTING ACROSS THE EYE’S SURFACE':'MANY CELL AND TISSUE TYPES, AT ONCE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),mk:$("#scMk",svg),glow:$("#mkGlow",svg),bud:$$("#scBud .bud",svg),pl:$$("#scPl .pl",svg),cells:$$("#scEye .cell",svg),tear:$("#tear",svg),
    fa:$$("#scF .fa",svg),lMk:$("#lMk",svg),lPl:$("#lPl",svg),lEye:$("#lEye",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  /* each substance: its platelet, a release offset, and a landing point just outside the tear film */
  var FA=E.fa.map(function(el,i){var k=i%PLT.length,a=rnd(i+7)*Math.PI*2,r=24+rnd(i+70)*16,deg=-34+68*((i*7)%NF)/(NF-1),land=arcP(305,deg);
    return {k:k,ox:Math.cos(a)*r,oy:Math.sin(a)*r*.8,land:land,d:rnd(i+3)*.3}});
  var CA=E.cells.map(function(el){return Math.abs(+el.getAttribute("data-a"))});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1: the platelets light and release their substances */
    E.pl.forEach(function(el){el.classList.toggle("on",s1>.25)});
    /* 2: the progenitor lights; new platelets bud and travel out along its strands */
    E.mk.classList.toggle("on",s2>.2&&s3<.5);
    op(E.glow,b*sm(s2*1.6)*(1-.6*sm(s3)));
    E.bud.forEach(function(el,i){var P=STR[(i/3)|0],ph=((p*5+(i%3)/3)%1),q=bz(P,ph);el.setAttribute("cx",q[0].toFixed(1));el.setAttribute("cy",q[1].toFixed(1));
      op(el,b*sm(s2*2)*(1-sm(s3*2))*Math.min(1,Math.sin(ph*Math.PI)*2.5))});
    /* 3: the substances drift to the ocular surface; its cells light from the centre outwards */
    E.fa.forEach(function(el,i){var f=FA[i],P=PLT[f.k],rel=sm((s1-f.d*.5)/.6),x0=P[0]+f.ox*rel,y0=P[1]+f.oy*rel,m=sm((s3-f.d)/.62),
      x=x0+(f.land[0]-x0)*m,y=y0+(f.land[1]-y0)*m-Math.sin(m*Math.PI)*14;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*Math.min(1,rel*3)*(1-.85*sm((m-.82)/.18)))});
    E.cells.forEach(function(el,j){op(el,b*sm((s3-.32-CA[j]/40*.42)/.22))});
    op(E.tear,b*(.55+.45*sm((s3-.25)/.4)));
    op(E.lMk,b);op(E.lEye,b);op(E.lPl,b*(1-seg(p,.66,.72)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

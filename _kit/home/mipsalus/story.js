/* The story scene (DB/BL): MipSalus' own process (mipsalus.dk, Technology: "a solution of a specific template molecule
   and selected functional monomers is produced, and the monomers organize around the template molecule. Subsequently,
   polymerization is initiated ... the polymer is mechanically down-sized into small MIP particles and washed in order to
   remove the template molecules. This leaves cavities ... complementary to the template molecule ... the MIP particles are
   capable of interacting with the template molecule, while other molecules closely related in structure are left
   untouched"), drawn as ONE fine-line scene that fills the frame: a milled polymer particle, its strands parting around
   five phenylalanine templates (a benzene ring and its side chain, in the logo amber). Frame 0 is already complete.
   Step 1 (imprint): the monomers settle round each template and the strands lock (cross-links appear).
   Step 2 (wash): the templates leave the particle; each leaves an amber-rimmed cavity.
   Step 3 (bind): phenylalanine from food drifts in and seats in the cavities; other molecules pass by.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
function f1(v){return v.toFixed(1)}
/* the particle: a milled, irregular rounded outline */
var PC=[410,282],PRX=300,PRY=228;
var PPTS=(function(){var a=[1,.94,1.02,.97,1.04,.95,.99,1.03,.93,1.01,.98,1.05],out=[];for(var i=0;i<12;i++){var t=i/12*Math.PI*2-.2;out.push([PC[0]+Math.cos(t)*PRX*a[i],PC[1]+Math.sin(t)*PRY*a[i]])}return out})();
function closedCR(P){var n=P.length,d="M"+f1(P[0][0])+" "+f1(P[0][1]);for(var i=0;i<n;i++){var p0=P[(i-1+n)%n],p1=P[i],p2=P[(i+1)%n],p3=P[(i+2)%n];
  d+="C"+f1(p1[0]+(p2[0]-p0[0])/6)+" "+f1(p1[1]+(p2[1]-p0[1])/6)+" "+f1(p2[0]-(p3[0]-p1[0])/6)+" "+f1(p2[1]-(p3[1]-p1[1])/6)+" "+f1(p2[0])+" "+f1(p2[1])}return d+"Z"}
var PPATH=closedCR(PPTS);
/* imprint sites */
var ST=[[262,196],[470,150],[612,262],[412,318],[240,388],[538,420]];
var SR=46;
/* phenylalanine glyph (benzene ring + side chain), centred on (0,0) */
function pheD(){var r=13,cx=-12,cy=3,d="",i,a;for(i=0;i<6;i++){a=(i*60-90)*Math.PI/180;d+=(i?"L":"M")+f1(cx+Math.cos(a)*r)+" "+f1(cy+Math.sin(a)*r)}d+="Z";
  var v=[cx+Math.cos(-30*Math.PI/180)*r,cy+Math.sin(-30*Math.PI/180)*r];
  d+="M"+f1(v[0])+" "+f1(v[1])+"L"+f1(v[0]+11)+" "+f1(v[1]+6)+"L"+f1(v[0]+22)+" "+f1(v[1])+"L"+f1(v[0]+33)+" "+f1(v[1]+6);
  d+="M"+f1(v[0]+22)+" "+f1(v[1])+"L"+f1(v[0]+22)+" "+f1(v[1]-12);
  /* inner ring line (aromatic) */
  var ri=8.2;d+="M"+f1(cx+Math.cos(-150*Math.PI/180)*ri)+" "+f1(cy+Math.sin(-150*Math.PI/180)*ri);for(i=1;i<=3;i++){a=(-150+i*60)*Math.PI/180;d+="L"+f1(cx+Math.cos(a)*ri)+" "+f1(cy+Math.sin(a)*ri)}
  return d}
var PHE=pheD();
/* other molecules from food (they pass): a small ring with a short tail, a branched chain, a pair */
var OTH=["M-8 0a7 7 0 1 0 0.1 0M6 0L16 -6L26 0","M-14 4L-4 -4L6 4L16 -4M-4 -4L-4 -15","M-10 0L0 0M10 0a5 5 0 1 0 0.1 0M-10 0a5 5 0 1 0 0.1 0"];
/* polymer strands, deflected round each site */
function strands(){var out=[],j,x,y,k;for(j=0;j<10;j++){var y0=52+j*50,pts=[];
  for(x=96;x<=726;x+=6){y=y0+7*Math.sin(x/57+j*1.7)+3*Math.sin(x/23+j);
    for(k=0;k<ST.length;k++){var dx=x-ST[k][0],dy=y-ST[k][1];if(Math.abs(dx)<SR+18){var tgt=Math.sqrt(Math.max(0,SR*SR-dx*dx)),s=dy>=0?1:-1,ad=Math.abs(dy);
      var m=Math.log(Math.exp(ad/6)+Math.exp(tgt/6))*6;y=ST[k][1]+s*m}}
    pts.push([x,y])}
  out.push(pts)}return out}
var STR=strands();
function polyD(pts){return "M"+pts.map(function(q){return f1(q[0])+" "+f1(q[1])}).join("L")}
/* cross-links: short ties between neighbouring strands, away from the sites */
var XL=(function(){var out=[],j,i;for(j=0;j<STR.length-1;j++){for(i=5+(j*7)%11;i<STR[j].length-4;i+=17+((i*13+j*5)%15)){var a=STR[j][i],b=STR[j+1][i];
  var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,ok=ST.every(function(s){return Math.hypot(mx-s[0],my-s[1])>SR+10});if(ok&&b[1]-a[1]<64)out.push([a,b])}}return out})();
/* monomers round each site (settled position) and their scattered start */
var MO=(function(){var out=[];ST.forEach(function(s,k){for(var i=0;i<6;i++){var a=(i*60+k*17)*Math.PI/180,r=SR-6;out.push({x:s[0]+Math.cos(a)*r,y:s[1]+Math.sin(a)*r,ox:Math.cos(a*3+k)*26,oy:Math.sin(a*2+k)*22})}});return out})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="64 24 700 536" aria-hidden="true">';
  g+='<defs><clipPath id="mpClip"><path d="'+PPATH+'"/></clipPath>'+
     '<radialGradient id="mpGlow"><stop offset="0" stop-color="#fbb85f" stop-opacity=".5"/><stop offset="1" stop-color="#fbb85f" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="pf" d="'+PPATH+'"/>';
  g+='<path class="wl sD" d="'+PPATH+'"/>';
  g+='<g clip-path="url(#mpClip)" id="scStr">';STR.forEach(function(s){g+='<path class="ws sD" d="'+polyD(s)+'"/>'});g+='</g>';
  g+='</g>';
  g+='<g id="scXl" clip-path="url(#mpClip)">';XL.forEach(function(l){g+='<path class="xl" d="M'+f1(l[0][0])+' '+f1(l[0][1])+'L'+f1(l[1][0])+' '+f1(l[1][1])+'"/>'});g+='</g>';
  /* cavities: the rim of a fat stroke of the glyph (amber), its inside in ink */
  g+='<g id="scCav">';ST.forEach(function(s){g+='<g class="cav" transform="translate('+s[0]+' '+s[1]+')"><path class="cr" d="'+PHE+'"/><path class="ci" d="'+PHE+'"/></g>'});g+='</g>';
  g+='<g id="scGlow">';ST.forEach(function(s){g+='<circle class="gl" cx="'+s[0]+'" cy="'+s[1]+'" r="40" fill="url(#mpGlow)"/>'});g+='</g>';
  g+='<g id="scMo">';MO.forEach(function(m){g+='<circle class="mo" cx="'+f1(m.x)+'" cy="'+f1(m.y)+'" r="3.4"/>'});g+='</g>';
  /* templates (step 1-2) and phenylalanine from food (step 3) */
  g+='<g id="scTp">';ST.forEach(function(s){g+='<g class="ph" transform="translate('+s[0]+' '+s[1]+')"><path d="'+PHE+'"/></g>'});g+='</g>';
  g+='<g id="scFd">';ST.forEach(function(s){g+='<g class="ph" transform="translate('+s[0]+' '+s[1]+')"><path d="'+PHE+'"/></g>'});g+='</g>';
  g+='<g id="scOt">';[0,1,2,0,1].forEach(function(t){g+='<g class="ot"><path d="'+OTH[t]+'"/></g>'});g+='</g>';
  /* labels, each with a leader that stops short of its text (DR) */
  if(!mob){
    var L0=(ST[2][0]+14)+' '+(ST[2][1]-26),L1='704 128';
    g+='<g id="lTp"><path class="ld" d="M'+L0+'L'+L1+'"/><text class="t" x="758" y="98" text-anchor="end">TEMPLATE</text><text class="t q" x="758" y="114" text-anchor="end">PHENYLALANINE</text></g>';
    g+='<g id="lCav"><path class="ld" d="M'+L0+'L'+L1+'"/><text class="t" x="758" y="98" text-anchor="end">IMPRINTED</text><text class="t q" x="758" y="114" text-anchor="end">CAVITY</text></g>';
    g+='<g id="lOt"><text class="t" x="96" y="'+(SCH-30)+'">OTHER MOLECULES PASS</text></g>';
  }else{g+='<g id="lTp"></g><g id="lCav"></g><g id="lOt"></g>'}
  var ly=SCH-6,lx=96;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE POLYMER FORMS':'MONOMERS LOCK ROUND THE TEMPLATES')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'CAVITIES REMAIN':'WASHED OUT, THE CAVITIES REMAIN')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PHENYLALANINE IS BOUND':'PHENYLALANINE IS BOUND IN THE GUT')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),xl:$$("#scXl .xl",svg),cav:$$("#scCav .cav",svg),gl:$$("#scGlow .gl",svg),mo:$$("#scMo .mo",svg),tp:$$("#scTp .ph",svg),fd:$$("#scFd .ph",svg),ot:$$("#scOt .ot",svg),
    str:$$("#scStr .ws",svg),lTp:$("#lTp",svg),lCav:$("#lCav",svg),lOt:$("#lOt",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function tr(el,x,y,r){el.setAttribute("transform","translate("+f1(x)+" "+f1(y)+")"+(r?" rotate("+f1(r)+")":""))}
  /* entry/exit points for templates and food molecules */
  var OUT=[790,300],IN=[40,280];
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.38,.62),s3=seg(p,.7,.94);
    /* 1. monomers settle, strands firm up, cross-links appear */
    E.mo.forEach(function(el,i){var m=MO[i],k=1-sm(s1*1.15-(i%6)*.02);tr(el,m.ox*k,m.oy*k);op(el,b*(.85-.55*s2))});
    E.str.forEach(function(el){el.style.strokeOpacity=(.5+.5*s1).toFixed(3)});
    E.xl.forEach(function(el,i){op(el,b*seg(s1,.3+(i%7)*.06,.6+(i%7)*.06))});
    /* 2. templates leave the particle (washed out); the cavities' amber rims appear */
    E.tp.forEach(function(el,i){var f=sm((s2-i*.07)/.6),s=ST[i],x=s[0]+(OUT[0]-s[0])*f,y=s[1]+(OUT[1]-s[1])*f*.9;tr(el,x,y,f*40);op(el,b*(1-f))});
    E.cav.forEach(function(el,i){op(el,b*seg(s2,.15+i*.07,.55+i*.07))});
    /* 3. phenylalanine from food drifts in and seats; other molecules pass by */
    E.fd.forEach(function(el,i){var f=sm((s3-i*.08)/.6),s=ST[i],x=IN[0]+(s[0]-IN[0])*f,y=IN[1]+(s[1]-IN[1])*f-Math.sin(f*Math.PI)*40;tr(el,x,y,(1-f)*-60);op(el,b*Math.min(1,f*4))});
    E.gl.forEach(function(el,i){op(el,b*seg(s3,.55+i*.06,.75+i*.06))});
    E.ot.forEach(function(el,i){var f=(s3*1.25-i*.1),y=SCH-92-(i%2)*24+(i>2?-14:0),x=60+f*720;tr(el,x,y,0);op(el,b*(f>0&&f<1?Math.min(1,f*6,(1-f)*6):0))});
    op(E.lTp,b*(1-seg(p,.3,.38)));
    op(E.lCav,b*seg(p,.5,.58)*(1-seg(p,.86,.92)));
    op(E.lOt,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

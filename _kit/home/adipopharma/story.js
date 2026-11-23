/* The story scene (DB/BL): AdipoPharma's own mechanism (adipopharma.com, PATAS: "PATAS is an innovative peptide that
   targets a specific protein-protein interaction of ALMS1 in the adipocyte. PATAS has been successfully shown in
   pre-clinical studies to trigger insulin-independent glucose absorption in the adipocyte"; Home: "restore healthy lipid
   biosynthesis in the diseased adipocyte leading to reduction of unhealthy lipids like the ceramides"), drawn as ONE
   continuous fine-line scene that fills the frame: white adipose tissue, a central adipocyte with its large lipid droplet,
   the thin rim of cytoplasm and the flattened nucleus, neighbouring adipocytes fading out at the edges, and glucose in the
   space outside. Frame 0 is already complete (the cell, as it stands in insulin resistance).
   Step 1 (resist): glucose waits outside the membrane; ceramides crowd the rim (logo orange).
   Step 2 (bind): PATAS, the stapled peptide (logo magenta), docks on ALMS1 inside the rim.
   Step 3 (restore): glucose crosses into the cell, the ceramides fade and the droplet lights softly.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var CC=[440,262],CR=172,DC=[458,254],DR=148;
function f1(v){return v.toFixed(1)}
function pol(c,r,a){a=a*Math.PI/180;return [c[0]+Math.cos(a)*r,c[1]+Math.sin(a)*r]}
/* a gently irregular closed outline (a living membrane, never a perfect circle) */
function blob(c,r,k,ph){var s="",i,a,rr,p;for(i=0;i<=72;i++){a=i/72*360;rr=r*(1+k*Math.sin((a*3+ph)*Math.PI/180)+k*.6*Math.sin((a*5+ph*2)*Math.PI/180));p=pol(c,rr,a);s+=(i?"L":"M")+f1(p[0])+" "+f1(p[1])}return s+"Z"}
/* neighbouring adipocytes on the right and above (the open space on the left is the interstitium the glucose arrives through), packed around the centre one (they fade out under a radial mask) */
var NB=[[-92,324,158],[-34,328,162],[26,332,160]];
/* ALMS1 sites in the cytoplasm rim, on the side facing the glucose */
var AL=[158,184,210];
/* glucose: resting positions outside the cell (desktop and phone share them) */
var GL=[[214,330],[176,282],[238,388],[168,360],[226,232],[196,428],[150,318],[252,456]];
/* ceramide specks in the rim and droplet edge */
var CE=[[296,236],[288,280],[300,322],[318,190],[314,360],[334,396],[350,150],[372,420],[330,170],[304,300]];
function hexP(x,y,r){var s="",i,a;for(i=0;i<6;i++){a=(60*i+30)*Math.PI/180;s+=(i?"L":"M")+f1(x+Math.cos(a)*r)+" "+f1(y+Math.sin(a)*r)}return s+"Z"}
/* PATAS glyph: a short helical coil with its hydrocarbon staple arching over it */
function patasP(){return 'M-13 0q3.25-6 6.5 0t6.5 0t6.5 0t6.5 0M-8.5-3.5Q0-12 8.5-3.5'}
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="64 24 700 536" aria-hidden="true">';
  g+='<defs><radialGradient id="gFade" cx="'+CC[0]+'" cy="'+CC[1]+'" r="330" gradientUnits="userSpaceOnUse"><stop offset=".5" stop-color="#fff"/><stop offset=".72" stop-color="#fff" stop-opacity=".5"/><stop offset=".86" stop-color="#fff" stop-opacity=".14"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>'+
     '<mask id="mFade" maskUnits="userSpaceOnUse" x="-200" y="-200" width="1200" height="1000"><rect x="-200" y="-200" width="1200" height="1000" fill="url(#gFade)"/></mask>'+
     '<radialGradient id="gDrop"><stop offset="0" stop-color="#f25ca5" stop-opacity=".22"/><stop offset=".6" stop-color="#f25ca5" stop-opacity=".08"/><stop offset="1" stop-color="#f25ca5" stop-opacity="0"/></radialGradient></defs>';
  /* the whole scene (not the captions) at 1.18x about the cell centre, so it fills the frame (DB) */
  g+='<g transform="matrix(1.18 0 0 1.18 '+f1(-CC[0]*.18)+' '+f1(-CC[1]*.18)+')">';
  g+='<circle class="halo" id="hDrop" cx="'+DC[0]+'" cy="'+DC[1]+'" r="'+(DR-4)+'" fill="url(#gDrop)"/>';
  g+='<g id="scBase">';
  /* neighbouring cells, each with its own droplet line, under the soft radial mask */
  g+='<g mask="url(#mFade)">';NB.forEach(function(n,i){var c=pol(CC,n[1],n[0]);
    g+='<path class="wl sD" d="'+blob(c,n[2],.018,i*47)+'"/><path class="wo sD" d="'+blob([c[0]+8,c[1]-6],n[2]-24,.012,i*31)+'"/>'});g+='</g>';
  /* the central adipocyte: membrane, lipid droplet, nucleus crescent in the rim */
  g+='<path class="wl sD" d="'+blob(CC,CR,.012,20)+'"/>';
  g+='<path class="wm sD" d="'+blob(DC,DR,.008,70)+'"/>';
  var n0=pol(CC,CR-12,-128),n1=pol(CC,CR-12,-104),nm=pol(CC,CR-30,-116);
  g+='<path class="wm sD" d="M'+f1(n0[0])+' '+f1(n0[1])+'Q'+f1(nm[0])+' '+f1(nm[1])+' '+f1(n1[0])+' '+f1(n1[1])+'Q'+f1(pol(CC,CR-6,-116)[0])+' '+f1(pol(CC,CR-6,-116)[1])+' '+f1(n0[0])+' '+f1(n0[1])+'"/>';
  g+='</g>';
  /* ALMS1: small paired marks in the rim */
  g+='<g id="scAl">';AL.forEach(function(a){var p=pol(CC,CR-20,a),t=a*Math.PI/180,tx=-Math.sin(t),ty=Math.cos(t);
    g+='<path class="al" d="M'+f1(p[0]-tx*6)+' '+f1(p[1]-ty*6)+'L'+f1(p[0]+tx*6)+' '+f1(p[1]+ty*6)+'"/><circle class="alc" cx="'+f1(p[0]-tx*6)+'" cy="'+f1(p[1]-ty*6)+'" r="2.6"/><circle class="alc" cx="'+f1(p[0]+tx*6)+'" cy="'+f1(p[1]+ty*6)+'" r="2.6"/>'});g+='</g>';
  /* ceramides, glucose, PATAS */
  g+='<g id="scCe">';CE.forEach(function(c){g+='<circle class="ce" cx="'+c[0]+'" cy="'+c[1]+'" r="3.4"/>'});g+='</g>';
  g+='<g id="scGl">';GL.forEach(function(c){g+='<path class="gl" data-x="'+c[0]+'" data-y="'+c[1]+'" d="'+hexP(0,0,7.5)+'" transform="translate('+c[0]+' '+c[1]+')"/>'});g+='</g>';
  g+='<g id="scPa">';AL.forEach(function(a){var p=pol(CC,CR-20,a);g+='<path class="pa" d="'+patasP()+'" transform="translate('+f1(p[0])+' '+f1(p[1])+')"/>'});g+='</g>';
  /* labels, each with a leader that stops short of its text (DR) */
  if(!mob){
    var m=pol(CC,CR+2,-40);
    g+='<g id="lAd"><path class="ld" d="M'+f1(m[0]+6)+' '+f1(m[1]-6)+'L'+f1(m[0]+40)+' '+f1(m[1]-40)+'"/><text class="t" x="'+f1(m[0]+48)+'" y="'+f1(m[1]-42)+'">ADIPOCYTE</text></g>';
    g+='<g id="lDr"><text class="t" x="'+(DC[0]+10)+'" y="'+(DC[1]+4)+'" text-anchor="middle">LIPID DROPLET</text></g>';
    g+='<g id="lGl"><text class="t" x="150" y="200">GLUCOSE</text></g>';
    g+='<g id="lCe"><path class="ld" d="M'+(CE[7][0]+2)+' '+(CE[7][1]+10)+'L'+(CE[7][0]+18)+' 470"/><text class="t" x="'+(CE[7][0]+26)+'" y="482">CERAMIDES</text></g>';
    var q=pol(CC,CR-20,210);
    g+='<g id="lPa"><path class="ld" d="M'+f1(q[0]-10)+' '+f1(q[1]-12)+'L'+f1(q[0]-46)+' 104"/><text class="t" x="'+f1(q[0]-46)+'" y="92" text-anchor="middle">PATAS ON ALMS1</text></g>';
  }else{
    g+='<g id="lAd"></g><g id="lDr"></g><g id="lGl"></g><g id="lCe"></g><g id="lPa"></g>';
  }
  g+='</g>';
  var ly=SCH-6,lx=76;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'GLUCOSE STAYS OUTSIDE':'INSULIN RESISTANCE: GLUCOSE STAYS OUTSIDE')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PATAS BINDS ALMS1':'PATAS TARGETS ALMS1 IN THE ADIPOCYTE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'GLUCOSE ENTERS, CERAMIDES FALL':'GLUCOSE ENTERS, CERAMIDES FALL')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),al:$("#scAl",svg),ce:$$("#scCe .ce",svg),gl:$$("#scGl .gl",svg),pa:$$("#scPa .pa",svg),hD:$("#hDrop",svg),
    lAd:$("#lAd",svg),lDr:$("#lDr",svg),lGl:$("#lGl",svg),lCe:$("#lCe",svg),lPa:$("#lPa",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  /* where each glucose ends up inside the cell (the rim, past the membrane) */
  var GT=GL.map(function(c,i){var a=Math.atan2(c[1]-CC[1],c[0]-CC[0])*180/Math.PI;return pol(CC,CR-24-(i%3)*6,a+(i%2?4:-4))});
  /* PATAS starts outside, beyond the glucose, and drifts in to its site */
  var PS=AL.map(function(a){return pol(CC,CR+150,a+8)}),PT=AL.map(function(a){return pol(CC,CR-20,a)});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s2=seg(p,.36,.62),s3=seg(p,.68,.92);
    op(E.al,b);
    /* glucose: a slow drift outside, then into the cell */
    E.gl.forEach(function(el,i){var c=GL[i],t=GT[i],w=Math.sin(p*9+i*1.7)*3*(1-s3),f=sm((s3-i*.04)/.68);
      var x=c[0]+(t[0]-c[0])*f+w,y=c[1]+(t[1]-c[1])*f-w*.6;el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")");op(el,b*(1-sm((f-.72)/.28)))});
    /* ceramides: present, then fading as healthy lipid synthesis returns */
    E.ce.forEach(function(el,i){op(el,b*(1-seg(p,.74+i*.01,.86+i*.01)))});
    /* PATAS docks on ALMS1 */
    E.pa.forEach(function(el,i){var f=sm((s2-i*.08)/.84),a=PS[i],t=PT[i],x=a[0]+(t[0]-a[0])*f,y=a[1]+(t[1]-a[1])*f;
      el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+") rotate("+((1-f)*-30).toFixed(1)+")");op(el,b*Math.min(1,s2*4))});
    op(E.hD,b*s3);
    op(E.lAd,b*(1-seg(p,.06,.14)));
    op(E.lDr,b*(1-seg(p,.06,.14)));
    op(E.lGl,b*seg(p,.08,.16)*(1-seg(p,.34,.4)));
    op(E.lCe,b*seg(p,.14,.22)*(1-seg(p,.34,.4)));
    op(E.lPa,b*seg(p,.5,.58)*(1-seg(p,.66,.72)));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

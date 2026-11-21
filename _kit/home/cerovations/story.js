/* the story scene (BL/BY/DB): ONE engraved coronal section through the head, kept on screen throughout; each step adds one
   part of OsmoFlo as the sources describe it (cerovations.com /osmoflo; NIH RePORTER U44NS121557 abstract): cerebral edema
   (excess fluid in the tissue) raising intracranial pressure; a catheter placed in a ventricle like a standard EVD, with
   permeable membrane fibres; dry air sweeping water vapour out of the CSF (pervaporation); CSF osmolarity rising so water
   moves from the tissue into the ventricles. Proportions are schematic. */
function scene(){
  var mob=MOBILE(),LX=mob?526:566,cx=270,cy=300,P=Math.PI;
  var f=function(n){return n.toFixed(1)};
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><pattern id="crHt" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V7" stroke="rgba(243,244,248,.2)" stroke-width="1"/></pattern></defs>';
  /* skull: outer and inner table, open at the base (foramen magnum) */
  function arc(rx,ry,a0,a1){var d='',n=90;for(var i=0;i<=n;i++){var a=a0+(a1-a0)*i/n;d+=(i?'L':'M')+f(cx+rx*Math.cos(a))+' '+f(cy+ry*Math.sin(a))}return d}
  var A0=P*.62,A1=P*2.38;
  var sk=arc(205,228,A0,A1),ski=arc(191,214,A0,A1);
  var skb=sk+'L'+f(cx+191*Math.cos(A1))+' '+f(cy+214*Math.sin(A1))+arc(191,214,A1,A0).replace(/^M/,'L')+'Z';
  /* brain: two hemispheres with a gyral edge, a midline fissure on top and a notch for the brainstem below */
  /* sulci: narrow inward folds at irregular angles (mirrored left/right with small offsets), gentle gyral crowns between them */
  var SU=[];[[-1.32,.11],[-1.12,.08],[-.92,.12],[-.7,.07],[-.5,.1],[-.27,.12],[-.05,.08],[.17,.11],[.4,.09],[.62,.12],[.86,.07],[1.1,.06]].forEach(function(q,k){
    SU.push([q[0],q[1]]);SU.push([P-q[0]+(k%2?.03:-.025),q[1]*(k%3?1:.85)])});
  function rb(a){var aa=Math.atan2(Math.sin(a),Math.cos(a)),r=1,j;
    for(j=0;j<SU.length;j++){var d=Math.atan2(Math.sin(aa-SU[j][0]),Math.cos(aa-SU[j][0]));r-=SU[j][1]*Math.exp(-Math.pow(d/.022,2))}
    var top=Math.exp(-Math.pow((aa+P/2)/.03,2)),bot=Math.exp(-Math.pow((aa-P/2)/.2,2)),sylv=Math.exp(-Math.pow((Math.abs(aa-P/2)-.95)/.05,2));
    return r-.02*Math.cos(aa*20)-.3*top-.13*bot-.1*sylv}
  var br='',N=900;for(var i=0;i<=N;i++){var a=-P/2+2*P*i/N,r=rb(a);br+=(i?'L':'M')+f(cx+184*r*Math.cos(a))+' '+f(cy+8+202*r*Math.sin(a))}br+='Z';
  var wm='';for(i=0;i<=240;i++){a=-P/2+2*P*i/240;var aa2=Math.atan2(Math.sin(a),Math.cos(a));r=.74-.04*Math.cos(aa2*9)-.12*Math.exp(-Math.pow((aa2+P/2)/.08,2))-.1*Math.exp(-Math.pow((aa2-P/2)/.25,2));wm+=(i?'L':'M')+f(cx+184*r*Math.cos(a))+' '+f(cy+14+202*r*Math.sin(a))}wm+='Z';
  /* each fold continues inward as a fine engraved line into the white matter */
  var sul='';SU.forEach(function(q){var a=q[0],r0=rb(a),x=cx+184*r0*Math.cos(a),y=cy+8+202*r0*Math.sin(a),L=10+q[1]*90,nx=-Math.cos(a),ny=-Math.sin(a);
    sul+='M'+f(x)+' '+f(y)+'Q'+f(x+nx*L*.5+ny*3)+' '+f(y+ny*L*.5-nx*3)+' '+f(x+nx*L)+' '+f(y+ny*L)});
  var stem='M'+(cx-30)+' '+(cy+176)+'C'+(cx-26)+' '+(cy+206)+' '+(cx-22)+' '+(cy+232)+' '+(cx-20)+' 556M'+(cx+30)+' '+(cy+176)+'C'+(cx+26)+' '+(cy+206)+' '+(cx+22)+' '+(cy+232)+' '+(cx+20)+' 556';
  /* ventricles: two lateral ventricles either side of the midline, the third below */
  function lv(s){return 'M'+(cx+s*10)+' '+(cy-62)+'C'+(cx+s*46)+' '+(cy-70)+' '+(cx+s*74)+' '+(cy-46)+' '+(cx+s*72)+' '+(cy-18)+'C'+(cx+s*70)+' '+(cy-4)+' '+(cx+s*56)+' '+(cy-8)+' '+(cx+s*48)+' '+(cy-20)+'C'+(cx+s*38)+' '+(cy-34)+' '+(cx+s*22)+' '+(cy-22)+' '+(cx+s*10)+' '+(cy-14)+'Z'}
  var v3='M'+(cx-4)+' '+(cy+4)+'C'+(cx-7)+' '+(cy+30)+' '+(cx-5)+' '+(cy+52)+' '+cx+' '+(cy+64)+'C'+(cx+5)+' '+(cy+52)+' '+(cx+7)+' '+(cy+30)+' '+(cx+4)+' '+(cy+4)+'Z';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="hatch" d="'+skb+'"/><path class="wl sD" d="'+sk+'"/><path class="wi sD" d="'+ski+'"/>';
  g+='<path class="tis" d="'+br+'"/><path class="wl sD" d="'+br+'"/><path class="wm sD" d="'+wm+'"/><path class="wi sD" d="'+sul+'"/><path class="wi sD" d="'+stem+'"/>';
  g+='<path class="csf" d="'+lv(-1)+lv(1)+v3+'"/><path class="vw sD" d="'+lv(-1)+lv(1)+v3+'"/>';
  g+='<g class="tb"><path class="tbl" d="M548 494h228v52h-228Z M548 520h228"/><text x="558" y="512" class="t">CORONAL SECTION · HEAD</text><text x="558" y="538" class="t s">OSMOFLO · CEROVATIONS</text></g>';
  g+='</g>';
  /* 1 the swelling: excess water in the tissue, pressure against the skull */
  var wat='',seed=7;function rnd(){seed=(seed*9301+49297)%233280;return seed/233280}
  for(i=0;i<70;i++){var aa=-P/2+2*P*rnd(),rr=.25+.62*Math.sqrt(rnd()),x2=cx+178*rr*Math.cos(aa),y2=cy+8+198*rr*Math.sin(aa);
    if(Math.abs(x2-cx)<84&&y2>cy-78&&y2<cy+70)continue;if(y2>cy+150&&Math.abs(x2-cx)<50)continue;wat+='<circle class="wat" cx="'+f(x2)+'" cy="'+f(y2)+'" r="2.1"/>'}
  var pr='';[-2.3,-1.9,-1.25,-.85,-.2,.25,2.55,2.95].forEach(function(a){var x=cx+168*Math.cos(a),y=cy+8+186*Math.sin(a),X=cx+184*Math.cos(a),Y=cy+8+204*Math.sin(a),u=Math.cos(a),v=Math.sin(a);
    pr+='M'+f(x)+' '+f(y)+'L'+f(X)+' '+f(Y)+'M'+f(X-6*u-4*v)+' '+f(Y-6*v+4*u)+'L'+f(X)+' '+f(Y)+'L'+f(X-6*u+4*v)+' '+f(Y-6*v-4*u)});
  g+='<g id="sc1"><g class="wats">'+wat+'</g><path class="prs dr" d="'+pr+'"/>'+
     '<path class="ld2 dr" d="M'+(cx+150)+' '+(cy+60)+'L'+(LX-40)+' 380H'+(LX-8)+'"/><text x="'+LX+'" y="384" class="t c">CEREBRAL EDEMA</text>'+
     '<path class="ld2 dr" d="M'+f(cx+184*Math.cos(-.2))+' '+f(cy+8+204*Math.sin(-.2))+'L'+(LX-40)+' 250H'+(LX-8)+'"/><text x="'+LX+'" y="254" class="t c">INTRACRANIAL PRESSURE</text>'+
     '<path class="ld2 dr" d="M'+(cx+60)+' '+(cy-30)+'L'+(cx+150)+' 330"/>'+
     '<text x="34" y="44" class="a">THE SWELLING</text></g>';
  /* 2 the catheter: through a burr hole into the right lateral ventricle, membrane fibres along its tip */
  var tx0=372,ty0=8,tx1=cx+44,ty1=cy-34,dx=tx1-tx0,dy=ty1-ty0,dl=Math.hypot(dx,dy),ux=dx/dl,uy=dy/dl,px=-uy,py=ux;
  function pt(t,o){return f(tx0+dx*t+px*o)+' '+f(ty0+dy*t+py*o)}
  var tube='M'+pt(0,-5)+'L'+pt(1,-5)+'Q'+pt(1.03,0)+' '+pt(1,5)+'L'+pt(0,5);
  var fib='';[-2.4,0,2.4].forEach(function(o){fib+='M'+pt(.8,o)+'L'+pt(.995,o)});
  var hole='M'+pt(.33,-13)+'L'+pt(.33,13)+'M'+pt(.38,-13)+'L'+pt(.38,13);
  g+='<g id="sc2"><path class="tubef" d="'+tube+'"/><path class="tube dr" d="'+tube+'"/><path class="fib dr" d="'+fib+'"/><path class="ld dr" d="'+hole+'"/>'+
     '<path class="ld2 dr" d="M'+pt(.55,8)+'L'+(LX-40)+' 130H'+(LX-8)+'"/><text x="'+LX+'" y="134" class="t c">OSMOFLO CATHETER</text><text x="'+LX+'" y="152" class="t c c2">PLACED LIKE A STANDARD EVD</text>'+
     '<path class="ld2 dr" d="M'+pt(.9,7)+'L'+(LX-40)+' 196H'+(LX-8)+'"/><text x="'+LX+'" y="200" class="t c">MEMBRANE FIBRES</text>'+
     '<path class="ld2 dr" d="M'+(cx+62)+' '+(cy-14)+'L'+(LX-40)+' 440H'+(LX-8)+'"/><text x="'+LX+'" y="444" class="t c">LATERAL VENTRICLE</text>'+
     '<text x="34" y="44" class="a">THE CATHETER</text></g>';
  /* 3 the vapour: dry air down one side of the fibres, water vapour carried back out */
  var dn='',up='';for(i=0;i<5;i++){var t=.08+i*.19;dn+='M'+pt(t-.025,-2.2-4)+'L'+pt(t,-2.2)+'L'+pt(t-.025,-2.2+4);up+='M'+pt(t+.025,2.2-4)+'L'+pt(t,2.2)+'L'+pt(t+.025,2.2+4)}
  var vap='';[[.86,-14],[.92,13],[.97,-12],[.83,15]].forEach(function(b,k){var p=pt(b[0],b[1]).split(' ');vap+='<circle class="vap" cx="'+p[0]+'" cy="'+p[1]+'" r="'+(2.2-k*.2)+'"/>'});
  g+='<g id="sc3"><path class="air dr" d="'+dn+'"/><path class="vout dr" d="'+up+'"/>'+vap+
     '<path class="ld2 dr" d="M'+pt(.08,-9)+'L'+(tx0-70)+' 40H'+(tx0-96)+'"/><text x="'+(tx0-102)+'" y="44" class="t c e c3">DRY AIR IN</text>'+
     '<path class="ld2 dr" d="M'+pt(.06,9)+'L'+(LX-40)+' 60H'+(LX-8)+'"/><text x="'+LX+'" y="64" class="t c c3">WATER VAPOUR OUT</text>'+
     '<text x="34" y="44" class="a">THE VAPOUR</text></g>';
  /* 4 the gradient: water drawn from the tissue into the ventricles */
  var ar='';[[-1,-118,-74],[-1,-112,6],[-1,-60,-108],[1,128,-70],[1,122,8],[1,70,-112],[-1,-46,62],[1,46,62]].forEach(function(q){
    var sx=cx+q[1],sy=cy+q[2],ex=cx+q[0]*(q[2]>40?12:46),ey=cy+(q[2]>40?32:-34),vx=ex-sx,vy=ey-sy,vl=Math.hypot(vx,vy),k=(vl-22)/vl;
    var X=sx+vx*k,Y=sy+vy*k,ux2=vx/vl,uy2=vy/vl;
    ar+='M'+f(sx+vx*.18)+' '+f(sy+vy*.18)+'L'+f(X)+' '+f(Y)+'M'+f(X-7*ux2-4*uy2)+' '+f(Y-7*uy2+4*ux2)+'L'+f(X)+' '+f(Y)+'L'+f(X-7*ux2+4*uy2)+' '+f(Y-7*uy2-4*ux2)});
  g+='<g id="sc4"><path class="flow dr" d="'+ar+'"/>'+
     '<path class="ld2 dr" d="M'+(cx+128)+' '+(cy-70)+'L'+(LX-40)+' 316H'+(LX-8)+'"/><text x="'+LX+'" y="320" class="t c c4">WATER DRAWN</text><text x="'+LX+'" y="338" class="t c c4">FROM THE TISSUE</text>'+
     '<text x="34" y="44" class="a">THE GRADIENT</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .hatch, #scBase .tis, #scBase .csf",svg),
    g:[$("#sc1",svg),$("#sc2",svg),$("#sc3",svg),$("#sc4",svg)],
    d:[dl("#sc1 .dr"),dl("#sc2 .dr"),dl("#sc3 .dr"),dl("#sc4 .dr")],
    c:[$$("#sc1 text.t",svg),$$("#sc2 text.t",svg),$$("#sc3 text.t",svg),$$("#sc4 text.t",svg)],
    t:[$("#sc1 text.a",svg),$("#sc2 text.a",svg),$("#sc3 text.a",svg),$("#sc4 text.a",svg)],
    w:$("#sc1 .wats",svg),fill:$$("#sc2 .tubef, #sc3 .vap",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s=[Math.max(seg(p,0,.16),.55),seg(p,.25,.44),seg(p,.5,.69),seg(p,.75,.94)];
    /* the parts accumulate on the one section; earlier labels quieten as the next part arrives */
    for(var i=0;i<4;i++){
      var on=i===0?b:b*(s[i]>0?1:0),nx=i<3?s[i+1]:0;
      E.g[i].style.opacity=on.toFixed(3);draw(E.d[i],i===0?b*s[0]:s[i]);
      var lv=(i===0?b:Math.max(0,Math.min(1,s[i]*2-1)))*(1-.5*nx);
      E.c[i].forEach(function(el){el.style.opacity=lv.toFixed(3)});
    }
    /* as water is drawn out, the edema thins */
    E.w.style.opacity=(1-.6*s[3]).toFixed(3);
    E.fill.forEach(function(el){el.style.opacity=(el.classList.contains("vap")?s[2]:s[1]).toFixed(3)});
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.t[0].style.opacity=O(s[1]).toFixed(3);
    E.t[1].style.opacity=(I(s[1])*O(s[2])).toFixed(3);E.t[2].style.opacity=(I(s[2])*O(s[3])).toFixed(3);E.t[3].style.opacity=I(s[3]).toFixed(3);
  };
}

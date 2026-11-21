/* the story scene (BL/BY/DB): ONE engraved cancer cell, kept on screen for all three steps (membrane, nucleus, endoplasmic
   reticulum, mitochondria, the Akt/mTOR node under the membrane). Step 1 ibrilatazar molecules cross the membrane into the nucleus
   and the PPARα and PPARγ receptors light. Step 2 the ER cisternae light in the alarm red (ER stress) while an inhibition bar from
   the nucleus reaches Akt and the Akt -> mTOR link dims (blockade). Step 3 double-membrane autophagosomes close around the cell's
   own contents (a mitochondrion, cytoplasm) and the cell fades: cytotoxic autophagy. Source: abilitypharmaceuticals.com, R&D >
   ABTL0812 (mechanism of action; Clinical Cancer Research 2016, Autophagy 2020). Schematic. Driven by the scrubbed story progress. */
var CEL=(function(){
  var f=function(n){return +(+n).toFixed(1)};
  function blob(cx,cy,rx,ry,k,n){var p=[],i;for(i=0;i<n;i++){var a=i/n*Math.PI*2,m=1+k*(Math.sin(3*a+.6)*.6+Math.cos(5*a+1.1)*.4);p.push([cx+rx*m*Math.cos(a),cy+ry*m*Math.sin(a)])}return p}
  function smooth(p,closed){var d='M'+f(p[0][0])+' '+f(p[0][1]),n=p.length,i;for(i=0;i<(closed?n:n-1);i++){var p0=p[(i-1+n)%n],p1=p[i],p2=p[(i+1)%n],p3=p[(i+2)%n];
    if(!closed){p0=p[Math.max(0,i-1)];p3=p[Math.min(n-1,i+2)]}
    d+='C'+f(p1[0]+(p2[0]-p0[0])/6)+' '+f(p1[1]+(p2[1]-p0[1])/6)+' '+f(p2[0]-(p3[0]-p1[0])/6)+' '+f(p2[1]-(p3[1]-p1[1])/6)+' '+f(p2[0])+' '+f(p2[1])}
    return d+(closed?'Z':'')}
  function arc(cx,cy,rx,ry,a0,a1,wav,n){var p=[],i;for(i=0;i<=n;i++){var a=(a0+(a1-a0)*i/n)*Math.PI/180,m=1+wav*Math.sin(i*1.9);p.push([cx+rx*m*Math.cos(a),cy+ry*m*Math.sin(a)])}return smooth(p,false)}
  var C=[400,285],N=[482,300];
  return {f:f,blob:blob,smooth:smooth,arc:arc,C:C,N:N,
    RC:[[452,286,"α"],[508,318,"γ"]],
    AK:[214,186],MT:[276,150],RM:[160,170],
    DR:[[[72,236],[130,258],[300,262],[452,286]],[[84,330],[140,318],[320,330],[508,318]],[[66,284],[126,290],[310,296],[480,300]]],
    MI:[[618,412,18],[262,402,-24],[612,176,-34]],
    AP:[[618,412,46,1],[232,292,30,0],[372,424,28,0],[340,176,24,0]]};
})();
function scene(){
  var mob=MOBILE(),f=CEL.f,g='',i,C=CEL.C,N=CEL.N;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?"50 28 732 512":"0 0 800 560")+'" aria-hidden="true">';
  g+='<defs><radialGradient id="rcg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d8282a" stop-opacity=".55"/><stop offset=".6" stop-color="#d8282a" stop-opacity=".14"/><stop offset="1" stop-color="#d8282a" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="ceg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#245a9b" stop-opacity=".34"/><stop offset=".7" stop-color="#245a9b" stop-opacity=".1"/><stop offset="1" stop-color="#245a9b" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<ellipse class="ceg" cx="'+C[0]+'" cy="'+C[1]+'" rx="330" ry="250" fill="url(#ceg)"/>';
  /* membrane (double line), nucleus envelope (double line) with chromatin, ER cisternae wrapping the nucleus */
  var mem=CEL.blob(C[0],C[1],292,212,.035,40);
  g+='<path class="mb sD" d="'+CEL.smooth(mem,true)+'"/><path class="mb2 sD" d="'+CEL.smooth(CEL.blob(C[0],C[1],282,202,.035,40),true)+'"/>';
  g+='<path class="nu sD" d="'+CEL.smooth(CEL.blob(N[0],N[1],96,80,.03,28),true)+'"/><path class="nu2 sD" d="'+CEL.smooth(CEL.blob(N[0],N[1],88,72,.03,28),true)+'"/>';
  g+='<path class="nc sD" d="M'+(N[0]-50)+' '+(N[1]-30)+'c14 -16 30 8 44 -6s26 -14 36 2M'+(N[0]-58)+' '+(N[1]+26)+'c18 10 28 -12 44 0s30 14 46 -2M'+(N[0]+18)+' '+(N[1]+48)+'c10 -8 22 4 30 -6"/>';
  g+='<g id="er">';for(i=0;i<4;i++){g+='<path class="er sD" d="'+CEL.arc(N[0],N[1],118+i*20,100+i*18,118-i*4,262+i*3,.03,14)+'"/>'}
  for(i=0;i<2;i++){g+='<path class="er sD" d="'+CEL.arc(N[0],N[1],120+i*20,102+i*18,292,340,.03,6)+'"/>'}g+='</g>';
  /* mitochondria with cristae */
  CEL.MI.forEach(function(m){var x=m[0],y=m[1];g+='<g class="mi" transform="translate('+x+' '+y+') rotate('+m[2]+')"><rect class="mio sD" x="-30" y="-13" width="60" height="26" rx="13"/><path class="mic sD" d="M-20 -8L-14 8L-6 -8L2 8L10 -8L18 8"/></g>'});
  /* Akt and mTOR under the membrane, fed by a membrane receptor */
  var RM=CEL.RM,AK=CEL.AK,MT=CEL.MT;
  g+='<path class="pw sD" d="M'+RM[0]+' '+RM[1]+'L'+AK[0]+' '+AK[1]+'"/><path class="pw sD" id="akmt" d="M'+AK[0]+' '+AK[1]+'L'+MT[0]+' '+MT[1]+'"/>';
  g+='<rect class="rmb" x="'+(RM[0]-8)+'" y="'+(RM[1]-14)+'" width="16" height="28" transform="rotate(-52 '+RM[0]+' '+RM[1]+')"/>';
  g+='<g id="akg"><circle class="ak" cx="'+AK[0]+'" cy="'+AK[1]+'" r="17"/><text class="nd" x="'+AK[0]+'" y="'+(AK[1]+4)+'" text-anchor="middle">AKT</text></g>';
  g+='<g id="mtg"><circle class="ak" cx="'+MT[0]+'" cy="'+MT[1]+'" r="17"/><text class="nd" x="'+MT[0]+'" y="'+(MT[1]+4)+'" text-anchor="middle">mTOR</text></g>';
  g+='</g>';
  g+='<g id="scMove">';
  /* PPAR receptors in the nucleus */
  CEL.RC.forEach(function(r,k){g+='<circle class="rcg" data-k="'+k+'" cx="'+r[0]+'" cy="'+r[1]+'" r="40" fill="url(#rcg)"/>'});
  CEL.RC.forEach(function(r){g+='<g class="rc"><rect class="rcb" x="'+(r[0]-14)+'" y="'+(r[1]-11)+'" width="28" height="22"/><text class="nd" x="'+r[0]+'" y="'+(r[1]+4)+'" text-anchor="middle">'+r[2]+'</text></g>'});
  /* inhibition bar from the nucleus to Akt (step 2) */
  g+='<path class="inh" id="inh" d="M'+(N[0]-92)+' '+(N[1]-46)+'C'+(N[0]-150)+' '+(N[1]-110)+' '+(AK[0]+90)+' '+(AK[1]+60)+' '+(AK[0]+22)+' '+(AK[1]+12)+'"/>';
  g+='<path class="inhT" id="inhT" d="M'+(AK[0]+12)+' '+(AK[1]+26)+'L'+(AK[0]+32)+' '+(AK[1]-2)+'"/>';
  /* autophagosomes: two concentric membranes that close around cargo (step 3) */
  CEL.AP.forEach(function(a,k){var x=a[0],y=a[1],r=a[2];g+='<g class="ap" data-k="'+k+'">'+(a[3]?'':'<circle class="apc" cx="'+(x-6)+'" cy="'+(y-4)+'" r="4"/><circle class="apc" cx="'+(x+7)+'" cy="'+(y+5)+'" r="3"/><circle class="apc" cx="'+(x+2)+'" cy="'+(y-10)+'" r="2.4"/>')+
    '<circle class="apo" cx="'+x+'" cy="'+y+'" r="'+r+'" transform="rotate(-90 '+x+' '+y+')"/><circle class="api" cx="'+x+'" cy="'+y+'" r="'+(r-6)+'" transform="rotate(-90 '+x+' '+y+')"/></g>'});
  /* ibrilatazar molecules on their way in (step 1): a bent chain with its red hydroxy-acid head */
  CEL.DR.forEach(function(d,k){g+='<g class="dg" data-k="'+k+'"><path class="dgc" d="M-2 0L-8 -5L-14 0L-20 -5L-25 1L-31 -3"/><circle class="dgh" cx="1" cy="0" r="3.6"/></g>'});
  g+='</g>';
  /* labels, one set per step (leaders end at the thing they name) */
  var x0=mob?62:24;
  g+='<g id="lb1"><text class="a" x="'+x0+'" y="52">'+(mob?'IBRILATAZAR ENTERS':'IBRILATAZAR ENTERS THE CELL')+'</text>'+
     (mob?'':'<text class="t" x="24" y="72">ORAL, FIRST IN CLASS</text>')+
     '<text class="a" x="'+(mob?500:600)+'" y="'+(mob?150:120)+'">PPARα · PPARγ</text><path class="ldr" d="M'+(mob?580:640)+' '+(mob?160:132)+'L'+f(CEL.RC[1][0]+16)+' '+f(CEL.RC[1][1]-14)+'"/>'+
     (mob?'':'<text class="t" x="600" y="140">NUCLEAR RECEPTORS</text>')+'</g>';
  g+='<g id="lb2"><text class="a" x="'+x0+'" y="52">'+(mob?'AKT BLOCKED':'AKT / mTOR BLOCKED')+'</text><path class="ldr" d="M'+(mob?110:80)+' 64L'+f(AK[0]-12)+' '+f(AK[1]-14)+'"/>'+
     (mob?'':'<text class="t" x="24" y="72">PI3K/AKT/mTOR GROWTH PATHWAY</text>')+
     '<text class="a" x="'+(mob?420:470)+'" y="'+(mob?534:528)+'">ER STRESS</text><path class="ldr" d="M'+(mob?460:500)+' '+(mob?510:512)+'L'+f(N[0]-40)+' '+f(N[1]+112)+'"/></g>';
  g+='<g id="lb3"><text class="a" x="'+(mob?420:470)+'" y="'+(mob?534:528)+'">AUTOPHAGOSOMES</text><path class="ldr" d="M'+(mob?520:560)+' '+(mob?510:512)+'L'+f(CEL.AP[0][0]-14)+' '+f(CEL.AP[0][1]+44)+'"/>'+
     '<text class="a" x="'+x0+'" y="52">'+(mob?'CANCER CELL DEATH':'CYTOTOXIC AUTOPHAGY')+'</text>'+(mob?'':'<text class="t" x="24" y="72">THE CANCER CELL DIGESTS ITSELF AND DIES</text>')+'</g>';
  g+='<text class="t" x="'+(mob?62:24)+'" y="'+(mob?534:548)+'" id="sctag">'+(mob?'SCHEMATIC':'A CANCER CELL · SCHEMATIC')+'</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),er:$$("#er .er",svg),ceg:$(".ceg",svg),nodes:$$("#akg,#mtg,.rmb",svg),akmt:$("#akmt",svg),mtg:$("#mtg",svg),
    mv:$("#scMove",svg),rc:$$(".rc",svg),rcg:$$(".rcg",svg),dg:$$(".dg",svg),ap:$$(".ap",svg),inh:dl("#inh"),inhT:$("#inhT",svg),
    b1:$("#lb1",svg),b2:$("#lb2",svg),b3:$("#lb3",svg),tag:$("#sctag",svg),mi:$$(".mi",svg)};
  E.ap.forEach(function(g){g._c=$$("circle.apo,circle.api",g).map(function(c){var L=2*Math.PI*(+c.getAttribute("r"));c.style.strokeDasharray=L+" "+L;return [c,L]});g._k=$$(".apc",g)});
  var lastB=-1;
  function draw(list,v){v=Math.max(0,Math.min(1,v));list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function bez(P,t){var u=1-t;return [u*u*u*P[0][0]+3*u*u*t*P[1][0]+3*u*t*t*P[2][0]+t*t*t*P[3][0],u*u*u*P[0][1]+3*u*u*t*P[1][1]+3*u*t*t*P[2][1]+t*t*t*P[3][1]]}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);op(E.mv,b);E.nodes.forEach(function(el){op(el,b)});op(E.ceg,b);op(E.tag,b)}
    var s1=seg(p,0,.26),s2=seg(p,.36,.6),s3=seg(p,.68,.94),fade=seg(p,.84,1);
    /* step 1: molecules travel in; receptors light as they arrive */
    E.dg.forEach(function(el,k){var q=seg(s1,k*.12,k*.12+.7),pt=bez(CEL.DR[k],q),pn=bez(CEL.DR[k],Math.min(1,q+.02)),an=Math.atan2(pn[1]-pt[1],pn[0]-pt[0])*180/Math.PI;
      el.setAttribute("transform","translate("+pt[0].toFixed(1)+" "+pt[1].toFixed(1)+") rotate("+an.toFixed(1)+")");op(el,b*(.25+.75*seg(q,0,.15))*(1-.6*s3))});
    var lit=seg(p,.12,.3);
    E.rc.forEach(function(el){op(el,b*(.45+.55*lit));el.classList.toggle("on",lit>.5)});
    E.rcg.forEach(function(el,k){op(el,b*lit*(1-.5*s3)*(.8+.2*Math.sin(p*30+k)))});
    /* step 2: ER stress and Akt blockade */
    E.er.forEach(function(el,k){var on=s2*(1-.4*s3);el.style.stroke="rgba("+Math.round(156+(236-156)*on)+","+Math.round(192+(82-192)*on)+","+Math.round(238+(84-238)*on)+","+(.42+.4*on).toFixed(2)+")";
      el.setAttribute("transform",on>0?"translate("+(Math.sin(p*60+k*1.7)*1.6*on).toFixed(2)+" 0)":"")});
    draw(E.inh,b*seg(p,.38,.54));op(E.inhT,b*seg(p,.52,.58));
    op(E.akmt,b*(1-.75*s2));op(E.mtg,b*(1-.6*s2));
    /* step 3: autophagosomes close around cargo, then the cell fades */
    E.ap.forEach(function(g,k){var q=seg(s3,k*.1,k*.1+.55);draw(g._c,b*q);g._k.forEach(function(c){op(c,b*seg(s3,k*.1,k*.1+.2))});op(g,b)});
    E.mi.forEach(function(m,k){if(k===0)op(m,b*(1-.45*seg(s3,.35,.7)))});
    op(E.mv,b);svg.style.opacity=(1-.32*fade).toFixed(3);
    op(E.b1,b*(1-seg(p,.3,.35)));op(E.b2,b*seg(p,.38,.46)*(1-seg(p,.63,.68)));op(E.b3,b*seg(p,.72,.82));
  };
}

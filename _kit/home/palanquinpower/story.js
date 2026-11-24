/* The story scene (DB): Palanquin Power's differential power processing, as described in NSF SBIR 2528149 (abstract and
   outcomes report): servers in a rack are connected in series across a 400/800 V DC bus, so each sees about 50 V, and small
   differential converters with local controllers process only the mismatch between neighbouring server loads.
   Drawn as ONE fine-line rack that fills the frame: the DC bus pair at the left, six servers in the rack.
   Step 1 (convert): every server is fed through its own full converter; power runs through all six.
   Step 2 (stack): the converters fade, the servers join in series from the + bus to the return; each shows ~50 V.
   Step 3 (balance): five differential converters (accent) appear between neighbours; only small currents run through them. */
var SCW=760,SCH=560;
var SV=[0,1,2,3,4,5].map(function(i){return 58+i*72});   /* server tops; each 54 tall */
var SH=54,RX0=250,RX1=560,BP=122,BN=90,CV0=162,CV1=206,DX=600;
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'66 6 600 556':'50 6 720 556')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gHeat"><stop offset="0" stop-color="#8aa4ff" stop-opacity=".5"/><stop offset="1" stop-color="#8aa4ff" stop-opacity="0"/></radialGradient></defs>';
  /* bus pair */
  g+='<g id="scBus"><path class="wl sD" d="M'+BP+' 40V512"/><path class="wo sD" d="M'+BN+' 40V512"/></g>';
  /* rack and servers */
  g+='<g id="scRack"><path class="wl sD" d="M'+RX0+' 40H'+RX1+'V512H'+RX0+'Z"/><path class="wo sD" d="M'+(RX0+8)+' 48V504M'+(RX1-8)+' 48V504"/>';
  SV.forEach(function(y,i){var x0=RX0+14,x1=RX1-14;
    g+='<g class="sv"><path class="wl sD" d="M'+x0+' '+y+'H'+x1+'V'+(y+SH)+'H'+x0+'Z"/>';
    for(var k=0;k<(mob?6:8);k++){var bx=x0+12+k*17;g+='<path class="wo" d="M'+bx+' '+(y+12)+'h11v30h-11z"/>'}
    g+='<circle class="md" cx="'+(x1-14)+'" cy="'+(y+14)+'" r="2.6"/>';
    g+='<text class="t v50" x="'+(x1-14)+'" y="'+(y+38)+'" text-anchor="end">≈50 V</text></g>'});
  g+='</g>';
  /* step 1: one converter per server, fed from the + bus */
  g+='<g id="scCv">';SV.forEach(function(y){var m=y+SH/2;
    g+='<g class="cv"><circle class="heat" cx="'+((CV0+CV1)/2)+'" cy="'+m+'" r="26" fill="url(#gHeat)"/><path class="wl" d="M'+BP+' '+m+'H'+CV0+'M'+CV1+' '+m+'H'+(RX0+14)+'"/><path class="cb" d="M'+CV0+' '+(m-14)+'h44v28h-44z"/><path class="wo" d="M'+(CV0+7)+' '+(m+6)+'l8-12 8 12 8-12 8 12"/></g>'});g+='</g>';
  /* step 2: the series chain, + bus to the first server, server to server, last server to the return */
  var ch='M'+BP+' 30H'+(RX0+30)+'V'+SV[0];SV.forEach(function(y,i){if(i<5)ch+='M'+(RX0+30)+' '+(y+SH)+'V'+SV[i+1]});ch+='M'+(RX0+30)+' '+(SV[5]+SH)+'V528H'+BN+'V512';
  g+='<path class="chain" id="scChain" d="'+ch+'"/>';
  /* step 3: differential converters between neighbours, on the right */
  g+='<g id="scDp">';for(var i=0;i<5;i++){var m1=SV[i]+SH/2,m2=SV[i+1]+SH/2,c=(m1+m2)/2;
    g+='<g class="dp"><path class="dl" d="M'+(RX1-14)+' '+m1+'H'+(DX-26)+'L'+DX+' '+(c-8)+'M'+(RX1-14)+' '+m2+'H'+(DX-26)+'L'+DX+' '+(c+8)+'"/><path class="db" d="M'+DX+' '+(c-12)+'h30v24h-30z"/><path class="dw" d="M'+(DX+6)+' '+(c+4)+'l6-8 6 8 6-8"/></g>'}
  g+='</g>';
  g+='<g id="scPk"></g>';
  /* labels */
  if(!mob){
    g+='<text class="t" id="lBus" x="'+(BN-4)+'" y="20">400/800 V DC BUS</text>';
    g+='<g id="lV"></g>';
    g+='<g id="lDp"><text class="t o" x="'+(DX+44)+'" y="'+(SV[2]+SH+4)+'">DIFFERENTIAL</text><text class="t o" x="'+(DX+44)+'" y="'+(SV[2]+SH+22)+'">CONVERTERS</text></g>';
    g+='<g id="lCv"><text class="t q" x="'+((CV0+CV1)/2)+'" y="'+(SV[0]-8)+'" text-anchor="middle">CONVERTERS</text></g>';
  }else{g+='<g id="lDp"></g><g id="lCv"></g><g id="lBus"></g><g id="lV"></g>'}
  var ly=SCH-4,lx=mob?84:84;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'EVERY WATT CONVERTED':'FULL POWER THROUGH EVERY CONVERTER')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'SERVERS IN SERIES':'SERVERS IN SERIES; THE STACK DIVIDES THE VOLTAGE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'ONLY THE DIFFERENCE':'ONLY THE MISMATCH IS PROCESSED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var NS="http://www.w3.org/2000/svg",pk=$("#scPk",svg);
  /* power packets: six on the converter branches (step 1), six on the chain (step 2-3), ten on the differential links (step 3) */
  function mk(n){var a=[];for(var i=0;i<n;i++){var c=document.createElementNS(NS,"circle");c.setAttribute("r","2.8");c.setAttribute("class","pkt");pk.appendChild(c);a.push(c)}return a}
  var P1=mk(12),P2=mk(8),P3=mk(10);
  var E={base:dl(".sD"),cv:$$("#scCv .cv",svg),heat:$$("#scCv .heat",svg),chain:dl("#scChain")[0],dp:$$("#scDp .dp",svg),dlk:dl("#scDp .dl"),
    md:$$(".md",svg),v50:$$(".v50",svg),lDp:$("#lDp",svg),lCv:$("#lCv",svg),lV:$("#lV",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var chP=$("#scChain",svg),chL=E.chain[1];
  var dlP=$$("#scDp .dl",svg);
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  function at(path,L,f){var q=path.getPointAtLength(L*f);return q}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.62),s3=seg(p,.68,.92);
    var cvOn=b*(1-sm(s2*1.4));
    E.cv.forEach(function(el){op(el,cvOn)});
    E.heat.forEach(function(el,i){op(el,.35+.65*Math.abs(Math.sin(p*18+i)))});
    op(E.lCv,cvOn*(1-seg(p,.3,.36)));
    E.md.forEach(function(el){el.classList.toggle("on",p>.06&&b>.5)});
    /* step 1 packets: along each branch bus -> converter -> server */
    P1.forEach(function(c,i){var k=i%6,m=SV[k]+SH/2,f=(p*5+(i>5?.5:0)+k*.13)%1,x=BP+(RX0+14-BP)*f;
      c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",m);op(c,cvOn*Math.min(1,Math.sin(f*Math.PI)*3))});
    /* step 2: the chain draws */
    E.chain[0].style.strokeDashoffset=(chL*(1-sm(s2))).toFixed(1);
    E.v50.forEach(function(el,i){op(el,b*sm((s2-.4-i*.06)/.3))});
    op(E.lV,b*sm((s2-.3)/.3));
    P2.forEach(function(c,i){var f=(p*2.2+i/8)%1;var q=at(chP,chL,f);c.setAttribute("cx",q.x.toFixed(1));c.setAttribute("cy",q.y.toFixed(1));op(c,b*sm((s2-.8)/.2))});
    /* step 3: differential converters and their small currents */
    E.dp.forEach(function(el,i){op(el,b*sm((s3-i*.08)/.4))});
    E.dlk.forEach(function(a,i){a[0].style.strokeDashoffset=(a[1]*(1-sm((s3-(i>>0)*.04)/.5))).toFixed(1)});
    P3.forEach(function(c,i){var path=dlP[i>>1],L=E.dlk[i>>1][1],f=(p*4+(i%2)*.5)%1;var q=at(path,L,f);c.setAttribute("cx",q.x.toFixed(1));c.setAttribute("cy",q.y.toFixed(1));c.setAttribute("r","2");op(c,b*sm((s3-.5)/.3)*Math.min(1,Math.sin(f*Math.PI)*3))});
    op(E.lDp,b*sm((s3-.3)/.3));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

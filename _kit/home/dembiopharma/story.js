/* The story scene (DB/BL): DEM BioPharma's own mechanism (dembiopharma.com Pipeline; press release of January 6, 2026:
   DEM-TXX, a plasma membrane glycoprotein identified as a "don't eat me" signal in a CRISPRa screen of tumor cells, with
   roles in cell adhesion and myeloid cell suppression; DEM301, an afucosylated anti-DEM-TXX antibody conjugated to a
   clinically validated linker-payload, with direct cytotoxic delivery and immune-mediated mechanisms; the site's DEM301
   figure shows the afucosylated Fc engaging FcgRIIIa), drawn as ONE continuous fine-line scene: a tumor cell with
   DEM-TXX on its membrane, facing a myeloid immune cell. Frame 0 is already complete.
   Step 1 (signal): "don't eat me" waves run from DEM-TXX toward the myeloid cell, which holds back.
   Step 2 (target): DEM301 antibodies fly in and dock on DEM-TXX.
   Step 3 (attack): payloads travel into the tumor cell to its nucleus, while the myeloid cell reaches in and its
   FcgRIIIa engages the antibody's Fc. Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
var TC=[286,292],TR=160,MC=[668,292],MR=92,RA=[-60,-40,-20,0,20,40,60],AB=[1,2,3,4,5];
function blobPath(cx,cy,r,amp,seed,n){
  n=n||40;var P=[],i;for(i=0;i<n;i++){var t=i/n*Math.PI*2,rr=r*(1+amp*(Math.sin(3*t+seed)*.5+Math.sin(5*t+seed*1.7)*.3+Math.sin(2*t+seed*.6)*.4));P.push([cx+rr*Math.cos(t),cy+rr*Math.sin(t)])}
  var d="M"+P[0][0].toFixed(1)+" "+P[0][1].toFixed(1);
  for(i=0;i<n;i++){var p0=P[(i-1+n)%n],p1=P[i],p2=P[(i+1)%n],p3=P[(i+2)%n];
    d+="C"+(p1[0]+(p2[0]-p0[0])/6).toFixed(1)+" "+(p1[1]+(p2[1]-p0[1])/6).toFixed(1)+" "+(p2[0]-(p3[0]-p1[0])/6).toFixed(1)+" "+(p2[1]-(p3[1]-p1[1])/6).toFixed(1)+" "+p2[0].toFixed(1)+" "+p2[1].toFixed(1)}
  return d+"Z";
}
/* tumor membrane radius at angle a (deg): the same formula as blobPath (amp .028, seed 1.3) */
function rOf(a){var t=a*Math.PI/180;return TR*(1+.028*(Math.sin(3*t+1.3)*.5+Math.sin(5*t+1.3*1.7)*.3+Math.sin(2*t+1.3*.6)*.4))}
function pol(a,r){var t=a*Math.PI/180;return [TC[0]+r*Math.cos(t),TC[1]+r*Math.sin(t)]}
function f1(p){return p[0].toFixed(1)+" "+p[1].toFixed(1)}
/* an antibody bound at angle a: the arm tips on the receptor tip, the Fc stem pointing outward; two payload beads */
function adcG(a){
  var r=rOf(a),H=pol(a,r+30),T=pol(a,r+58),L=pol(a-6.2,r+15),R=pol(a+6.2,r+15);
  var pa=pol(a-3.6,r+35),pb=pol(a+3.6,r+35);
  return '<g class="adc"><path class="ab" d="M'+f1(T)+"L"+f1(H)+"L"+f1(L)+"M"+f1(H)+"L"+f1(R)+'"/>'+
    '<circle class="py" cx="'+pa[0].toFixed(1)+'" cy="'+pa[1].toFixed(1)+'" r="2.6"/><circle class="py" cx="'+pb[0].toFixed(1)+'" cy="'+pb[1].toFixed(1)+'" r="2.6"/></g>';
}
function storyScene(o){
  var g='',i,mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><radialGradient id="dsg"><stop offset="0" stop-color="#2bc0ca" stop-opacity=".55"/><stop offset="1" stop-color="#2bc0ca" stop-opacity="0"/></radialGradient></defs>';
  g+='<g id="scBase">';
  g+='<path class="wl sD" d="'+blobPath(TC[0],TC[1],TR,.028,1.3,48)+'"/>';
  g+='<path class="wo sD" d="'+blobPath(TC[0],TC[1],TR-9,.03,1.3,48)+'"/>';
  g+='<path class="wmd sD" d="'+blobPath(TC[0]-14,TC[1]+8,58,.05,2.1,32)+'"/>';
  g+='<path class="wo sD" d="'+blobPath(TC[0]-22,TC[1]+2,15,.08,.4,20)+'"/>';
  ["M176 236C190 222 210 218 228 222","M178 352C192 372 214 382 238 384","M336 222C352 224 366 234 374 248","M352 382C370 374 384 360 392 342"].forEach(function(d){g+='<path class="wo sD" d="'+d+'"/>'});
  RA.forEach(function(a){var r=rOf(a);g+='<path class="rc sD" d="M'+f1(pol(a,r))+"L"+f1(pol(a,r+13))+'"/>'});
  g+='</g>';
  RA.forEach(function(a){var p1=pol(a,rOf(a)+13);g+='<circle class="rh" cx="'+p1[0].toFixed(1)+'" cy="'+p1[1].toFixed(1)+'" r="3"/>'});
  g+='<circle class="halo" id="hNuc" cx="'+(TC[0]-14)+'" cy="'+(TC[1]+8)+'" r="80" fill="url(#dsg)"/>';
  /* the myeloid cell, moved as one group */
  g+='<g id="myel"><path class="wl sM" d="'+blobPath(MC[0],MC[1],MR,.06,4.2,40)+'"/>';
  g+='<path class="wmd sM" d="M646 266C632 288 640 318 664 324C686 330 704 314 698 296C694 284 680 284 674 294C668 304 656 298 660 284C664 272 672 262 658 258C652 257 648 261 646 266Z"/>';
  for(i=-1;i<=1;i++){var y=MC[1]+i*22,x=MC[0]-Math.sqrt(MR*MR-(i*22)*(i*22))+6;g+='<g class="fcr"><path d="M'+(x-1)+' '+y+'L'+(x-9)+' '+y+'"/><ellipse cx="'+(x-13)+'" cy="'+(y-3.6)+'" rx="4" ry="2.5"/><ellipse cx="'+(x-13)+'" cy="'+(y+3.6)+'" rx="4" ry="2.5"/></g>'}
  g+='<circle class="halo" id="hFc" cx="'+(MC[0]-MR-10)+'" cy="'+MC[1]+'" r="34" fill="url(#dsg)"/></g>';
  /* step 1: the "don't eat me" waves */
  g+='<g id="waves">';[208,226,244].forEach(function(r){g+='<path class="wv" d="M'+f1(pol(-22,r))+'A'+r+' '+r+' 0 0 1 '+f1(pol(22,r))+'"/>'});g+='</g>';
  /* step 2: DEM301 antibodies, each flown in by a transform */
  g+='<g id="adcs">';AB.forEach(function(k){g+='<g class="adcw" data-a="'+RA[k]+'">'+adcG(RA[k])+'</g>'});g+='</g>';
  /* step 3: payloads travelling into the cell */
  g+='<g id="pays">';AB.forEach(function(k){g+='<circle class="pyt" r="3" cx="0" cy="0" data-a="'+RA[k]+'"/>'});g+='</g>';
  /* labels, each clear of every stroke (DR) */
  if(!mob){
    g+='<g id="lT"><path class="ld" d="M178 178L140 128"/><text class="t" x="40" y="116">TUMOR CELL</text></g>';
    g+='<g id="lR"><path class="ld" d="M396 446L426 484"/><text class="t" x="432" y="502">DEM-TXX</text></g>';
    g+='<g id="lM"><path class="ld" d="M676 192L676 168"/><text class="t" x="626" y="156">MYELOID CELL</text></g>';
    g+='<g id="lA"><path class="ld" d="M452 156L474 120"/><text class="t" x="446" y="106">DEM301</text></g>';
    g+='<g id="lP"><text class="t" x="206" y="196">PAYLOAD IN</text></g>';
    g+='<g id="lF"><path class="ld" d="M556 330L574 428"/><text class="t" x="552" y="448">FcγRIIIa</text></g>';
  }else{
    g+='<g id="lT"><text class="t" x="24" y="96">TUMOR</text></g>';
    g+='<g id="lR"><path class="ld" d="M396 446L416 476"/><text class="t" x="414" y="506">DEM-TXX</text></g>';
    g+='<g id="lM"><text class="t" x="604" y="162">MYELOID</text></g>';
    g+='<g id="lA"><path class="ld" d="M452 156L466 124"/><text class="t" x="430" y="108">DEM301</text></g>';
    g+='<g id="lP"><text class="t" x="190" y="196">PAYLOAD</text></g>';
    g+='<g id="lF"><text class="t" x="574" y="470">FcγRIIIa</text></g>';
  }
  var ly=SCH-4,lx=mob?24:20;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'“DON’T EAT ME”':'DEM-TXX TELLS MYELOID CELLS “DON’T EAT ME”')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'DEM301 BINDS DEM-TXX':'DEM301 BINDS DEM-TXX ON THE TUMOR CELL')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'PAYLOAD + IMMUNE ATTACK':'PAYLOAD DELIVERED · IMMUNE CELLS ENGAGED')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),myl:dl("#myel .sM"),myel:$("#myel",svg),waves:$$("#waves .wv",svg),adc:$$("#adcs .adcw",svg),pay:$$("#pays .pyt",svg),
    rh:$$(".rh",svg),fcr:$$(".fcr",svg),hNuc:$("#hNuc",svg),hFc:$("#hFc",svg),
    lT:$("#lT",svg),lR:$("#lR",svg),lM:$("#lM",svg),lA:$("#lA",svg),lP:$("#lP",svg),lF:$("#lF",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.myl,b)}
    var s1=seg(p,.04,.3),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    E.rh.forEach(function(el){op(el,b)});
    /* 1. the waves pulse outward from DEM-TXX; the myeloid cell holds back */
    var w1=Math.min(1,s1*4)*(1-seg(p,.32,.42));
    E.waves.forEach(function(el,i){var ph=((s1*2.2-i*.18)%1+1)%1;op(el,b*w1*(.35+.65*(1-Math.abs(ph-.5)*2)))});
    var dx=14*ease(s1)*(1-ease(s3))-40*ease(s3);
    if(E.myel)E.myel.setAttribute("transform","translate("+dx.toFixed(1)+" 0)");
    op(E.lT,b);op(E.lR,b);op(E.lM,b*(1-seg(p,.33,.37)));
    /* 2. DEM301 flies in along each receptor's normal and docks */
    E.adc.forEach(function(el,i){var a=+el.getAttribute("data-a")*Math.PI/180,q=seg(s2,i*.08,.62+i*.08),e=ease(q),d=(1-e)*150;
      el.setAttribute("transform","translate("+(Math.cos(a)*d).toFixed(1)+" "+(Math.sin(a)*d-(1-e)*40).toFixed(1)+")");op(el,b*Math.min(1,q*3))});
    op(E.lA,b*seg(p,.52,.62));
    /* 3. payloads travel to the nucleus; the myeloid cell reaches the Fc and its FcgRIIIa lights */
    E.pay.forEach(function(el,i){var a=+el.getAttribute("data-a"),q=seg(s3,i*.06,.7+i*.06),e=ease(q);
      var st=pol(a+(i%2?3.6:-3.6),rOf(a)+35),en=[TC[0]-14+[22,-8,30,2,-22][i],TC[1]+8+[-26,-10,8,24,12][i]];
      el.setAttribute("cx",(st[0]+(en[0]-st[0])*e).toFixed(1));el.setAttribute("cy",(st[1]+(en[1]-st[1])*e).toFixed(1));op(el,b*(q>0?Math.min(1,q*4):0))});
    op(E.hNuc,b*seg(p,.84,.94));op(E.hFc,b*seg(p,.8,.92));
    E.fcr.forEach(function(el){el.classList.toggle("on",p>.8&&b>0)});
    op(E.lP,b*seg(p,.78,.86));op(E.lF,b*seg(p,.84,.9));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

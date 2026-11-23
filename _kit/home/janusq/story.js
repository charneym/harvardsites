/* The story scene (DB): JanusQ's own mechanism, from its NIH SBIR abstract (1R43AG097351): "during the stress of AD,
   ATAD3A oligomerizes and inappropriately binds Drp1 (the mitochondrial-fission GTPase), causing mitochondrial
   fragmentation"; "DA1 ... prevents ATAD3A oligomerization and association with Drp1, reduces mitochondrial
   fragmentation". Drawn as ONE fine-line mitochondrion that fills the frame: outer membrane, inner membrane and cristae.
   Step 1 (energy): the whole mitochondrion, labelled.
   Step 2 (stress): ATAD3A (pale green) gathers at the waist, Drp1 (blue) closes in around it, and the mitochondrion
   gives way to two fragments.
   Step 3 (protect): the peptide (bright rings) caps each ATAD3A site, Drp1 drifts off, and the mitochondrion is whole.
   Everything is driven by the scrubbed progress. */
var SCW=760,SCH=560;
function capsule(cx,cy,rx,ry,rot,n,cls){
  var P=2.6,i,pts=[],ipts=[],c=Math.cos(rot*Math.PI/180),s=Math.sin(rot*Math.PI/180);
  function tr(x,y){var dx=x-cx,dy=y-cy;return [(cx+dx*c-dy*s).toFixed(1),(cy+dx*s+dy*c).toFixed(1)]}
  function sx(t){var v=Math.cos(t);return (v<0?-1:1)*Math.pow(Math.abs(v),2/P)}
  function sy(t){var v=Math.sin(t);return (v<0?-1:1)*Math.pow(Math.abs(v),2/P)}
  for(i=0;i<96;i++){var t=i/96*Math.PI*2;pts.push(tr(cx+rx*sx(t),cy+ry*sy(t)).join(" "));ipts.push(tr(cx+(rx-13)*sx(t),cy+(ry-13)*sy(t)).join(" "))}
  /* inner wall height at x (inner superellipse) */
  function wall(x){var u=Math.min(1,Math.abs((x-cx)/(rx-13)));return (ry-13)*Math.pow(1-Math.pow(u,P),1/P)}
  var g='<path class="wl '+cls+'" d="M'+pts.join("L")+'Z"/><path class="wmd '+cls+'" d="M'+ipts.join("L")+'Z"/>';
  for(i=0;i<n;i++){
    var x=cx-(rx-13)*.8+(rx-13)*1.6*(n<2?.5:i/(n-1)),h=wall(x),up=i%2===0,y0=up?cy-h:cy+h,tip=up?cy-h+2*h*.66:cy+h-2*h*.66,k=up?1:-1,w=Math.min(7,(rx/n)*.22+3);
    var d="M"+tr(x-w,y0-k*1).join(" ")+"C"+tr(x-w-3,y0+k*(Math.abs(tip-y0)*.5)).join(" ")+" "+tr(x-w+1,tip).join(" ")+" "+tr(x,tip).join(" ")+
          "C"+tr(x+w-1,tip).join(" ")+" "+tr(x+w+3,y0+k*(Math.abs(tip-y0)*.5)).join(" ")+" "+tr(x+w,y0-k*1).join(" ");
    g+='<path class="wcr '+cls+'" d="'+d+'"/>';
  }
  return g;
}
/* the whole mitochondrion: centre 380,280; the waist (x=380) is where ATAD3A and Drp1 meet */
var MX=380,MY=280,MRX=272,MRY=112;
function mTop(x){var u=Math.min(1,Math.abs((x-MX)/MRX));return MY-MRY*Math.pow(1-Math.pow(u,2.6),1/2.6)}
function mBot(x){return 2*MY-mTop(x)}
var ATS=[[372,mTop(372)+15],[388,mTop(388)+15],[372,mBot(372)-15],[388,mBot(388)-15]];
var DRP=[];(function(){for(var i=0;i<5;i++){var x=356+i*12;DRP.push([x,mTop(x)-8,x+(i-2)*34,mTop(x)-70]);DRP.push([x,mBot(x)+8,x+(i-2)*34,mBot(x)+70])}})();
function storyScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'60 76 640 488':'64 24 660 536')+'" aria-hidden="true">';
  g+='<defs><radialGradient id="gcalm"><stop offset="0" stop-color="#a8d48c" stop-opacity=".26"/><stop offset="1" stop-color="#a8d48c" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="gstress"><stop offset="0" stop-color="#e9b07a" stop-opacity=".22"/><stop offset="1" stop-color="#e9b07a" stop-opacity="0"/></radialGradient></defs>';
  g+='<ellipse class="halo" id="hCalm" cx="'+MX+'" cy="'+MY+'" rx="330" ry="170" fill="url(#gcalm)"/>';
  g+='<ellipse class="halo" id="hInf" cx="'+MX+'" cy="'+MY+'" rx="150" ry="160" fill="url(#gstress)"/>';
  g+='<g id="scBase">'+capsule(MX,MY,MRX,MRY,0,11,"sD")+'</g>';
  g+='<g id="scFrag"><g>'+capsule(236,292,118,92,-7,4,"")+'</g><g>'+capsule(526,268,118,92,6,4,"")+'</g></g>';
  g+='<g id="scAt">';ATS.forEach(function(p){g+='<circle class="pp" r="4.2" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scInh">';ATS.forEach(function(p){g+='<circle class="ih" r="8" cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'"/>'});g+='</g>';
  g+='<g id="scDrp">';DRP.forEach(function(p){g+='<circle class="dp" r="4.6" cx="'+p[2].toFixed(1)+'" cy="'+p[3].toFixed(1)+'"/>'});g+='</g>';
  if(!mob){
    var t1=mTop(214),b1=mBot(560);
    g+='<g id="lMem"><path class="ld" d="M214 '+(t1-10).toFixed(1)+'L214 100"/><text class="t" x="214" y="88" text-anchor="middle">OUTER MEMBRANE</text></g>';
    g+='<g id="lCri"><path class="ld" d="M560 '+(b1+10).toFixed(1)+'L560 462"/><text class="t" x="560" y="484" text-anchor="middle">CRISTAE</text></g>';
    g+='<g id="lDrp"><path class="ld" d="M432 '+(mTop(432)-18).toFixed(1)+'L540 88"/><text class="t" x="548" y="80">DRP1 BINDS ATAD3A</text></g>';
    g+='<g id="lPep"><path class="ld" d="M380 '+(mBot(380)+22).toFixed(1)+'L380 462"/><text class="t" x="380" y="484" text-anchor="middle">PEPTIDE BLOCKS THE BOND</text></g>';
  }else{g+='<g id="lMem"></g><g id="lCri"></g><g id="lDrp"></g><g id="lPep"></g>'}
  var ly=SCH-6,lx=mob?78:76;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A WHOLE, WORKING MITOCHONDRION':'A WHOLE MITOCHONDRION POWERS THE NEURON')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'DRP1 SPLITS IT IN TWO':'ATAD3A BINDS DRP1 AND THE MITOCHONDRION FRAGMENTS')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'THE PEPTIDE KEEPS IT WHOLE':'THE PEPTIDE BLOCKS THE BOND AND IT STAYS WHOLE')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),whole:$("#scBase",svg),frag:$("#scFrag",svg),fr:$$("#scFrag>g",svg),at:$$("#scAt .pp",svg),inh:$$("#scInh .ih",svg),drp:$$("#scDrp .dp",svg),
    hC:$("#hCalm",svg),hI:$("#hInf",svg),lMem:$("#lMem",svg),lCri:$("#lCri",svg),lDrp:$("#lDrp",svg),lPep:$("#lPep",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s3=seg(p,.68,.94);
    /* 1. the whole mitochondrion */
    op(E.lMem,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.lCri,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));
    /* 2. ATAD3A gathers at the waist, Drp1 closes in, the organelle gives way to two fragments */
    var at=seg(p,.36,.44),fin=sm(seg(p,.36,.5)),fout=sm(seg(p,.72,.84)),split=sm(seg(p,.5,.62))*(1-sm(seg(p,.78,.9)));
    E.at.forEach(function(el){op(el,b*at)});
    E.drp.forEach(function(el,i){var d=DRP[i],k=fin*(1-fout),x=d[2]+(d[0]-d[2])*k,y=d[3]+(d[1]-d[3])*k;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));op(el,b*seg(p,.36,.42)*(1-fout))});
    op(E.whole,1-split);op(E.frag,b*split);
    E.fr.forEach(function(el,i){var dx=(i?1:-1)*10*(1-split);el.setAttribute("transform","translate("+dx.toFixed(1)+" 0)")});
    op(E.hI,b*seg(p,.44,.56)*(1-seg(p,.72,.82)));
    op(E.lDrp,b*seg(p,.42,.5)*(1-seg(p,.64,.7)));
    /* 3. the peptide caps each ATAD3A site; the mitochondrion is whole again */
    E.inh.forEach(function(el,i){var f=seg(p,.68+i*.012,.78+i*.012);op(el,b*f);el.setAttribute("r",(14-6*f).toFixed(2))});
    op(E.hC,b*s3);
    op(E.lPep,b*seg(p,.76,.84));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}

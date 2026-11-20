/* the story scene (BL/BY/DB): ONE engraved section of inflamed tissue, kept on screen for all three steps. A vessel runs across the
   top; immune cells (macrophages, drawn with their filopodia) have gathered in the tissue and keep sending out inflammatory
   signals; the tissue under them is inflamed. Step 2: today's standards of care lay a broad wash over the whole frame, so the
   signals ease but the healthy tissue dims too (the side effects). Step 3: the wash lifts; a focused ring forms around the immune
   cells only, the signals go quiet and the tissue recovers. A schematic of the stated aim only (Dealroom / CUREator+: novel
   anti-inflammatory mechanisms designed to avoid the side effects of current standards of care); no mechanism is claimed.
   Everything is driven by the scrubbed story progress. */
var MAC=[[500,262,30],[584,246,27],[532,334,32],[616,318,26],[452,322,24]];
var CLU=[536,292];
function rng(s){s=(s*7919+104729)%2147483647;var n=function(){s=(s*16807)%2147483647;return (s-1)/2147483646};n();n();n();return n}
function scene(){
  var mob=MOBILE(),f=function(n){return (+n).toFixed(1)},g='',i,j,R=rng(7);
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  g+='<defs><radialGradient id="ig" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d1a676" stop-opacity=".5"/><stop offset="1" stop-color="#d1a676" stop-opacity="0"/></radialGradient>'+
     '<radialGradient id="wg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#8e9aa6" stop-opacity=".36"/><stop offset=".55" stop-color="#8e9aa6" stop-opacity=".24"/><stop offset=".86" stop-color="#8e9aa6" stop-opacity="0"/></radialGradient><radialGradient id="tg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#d1a676" stop-opacity=".3"/><stop offset="1" stop-color="#d1a676" stop-opacity="0"/></radialGradient><clipPath id="scClip"><rect x="0" y="0" width="800" height="560"/></clipPath></defs>';
  g+='<g id="scBase"><g id="tis">';
  /* the vessel across the top, with red cells inside */
  var vy=function(x,o){return 66+o+14*Math.sin(x/130)};
  var v0='',v1='';for(i=0;i<=40;i++){var x=i*20;v0+=(i?'L':'M')+x+' '+f(vy(x,-22));v1+=(i?'L':'M')+x+' '+f(vy(x,22))}
  g+='<path class="vsl sD" d="'+v0+'"/><path class="vsl sD" d="'+v1+'"/>';
  var vh='';for(i=0;i<80;i++){var x2=i*10+4;vh+='M'+x2+' '+f(vy(x2,-26))+'l4 -6M'+x2+' '+f(vy(x2,26))+'l4 6'}
  g+='<path class="ht sD" d="'+vh+'"/>';
  for(i=0;i<9;i++){var rx=40+i*86+R()*30;g+='<ellipse class="rbc fd" cx="'+f(rx)+'" cy="'+f(vy(rx,(R()-.5)*16))+'" rx="11" ry="5.5" transform="rotate('+f((R()-.5)*40)+' '+f(rx)+' '+f(vy(rx,0))+')"/>'}
  /* extracellular matrix: fine fibres */
  var fb='';for(i=0;i<46;i++){var x0=R()*800,y0=120+R()*250,a=(R()-.5)*1.2,l=30+R()*60;fb+='M'+f(x0)+' '+f(y0)+'q'+f(l*.5)+' '+f(l*Math.sin(a)*.6+8)+' '+f(l*Math.cos(a))+' '+f(l*Math.sin(a))}
  g+='<path class="ecm sD" d="'+fb+'"/>';
  /* the tissue: a row of columnar cells on a basement membrane */
  var top=function(x){return 412+8*Math.sin(x/95+1)},n=13,cw=800/n,tc='',nu='';
  for(i=0;i<n;i++){var xa=i*cw+2,xb=(i+1)*cw-2;
    tc+='<path class="tc sD" d="M'+f(xa)+' 516V'+f(top(xa)+6)+'Q'+f(xa)+' '+f(top(xa))+' '+f(xa+6)+' '+f(top(xa))+'H'+f(xb-6)+'Q'+f(xb)+' '+f(top(xb))+' '+f(xb)+' '+f(top(xb)+6)+'V516"/>';
    nu+='<ellipse class="nuc fd" cx="'+f((xa+xb)/2)+'" cy="'+f(474+R()*10)+'" rx="'+f(cw*.2)+'" ry="12"/>'}
  g+='<g id="tcs">'+tc+'</g>'+nu;
  g+='<path class="bm sD" d="M0 518H800"/><path class="bm2 sD" d="M0 524H800"/>';
  g+='<ellipse id="infl" cx="'+CLU[0]+'" cy="450" rx="330" ry="110" fill="url(#tg)" class="inf"/>';
  g+='</g>';
  /* immune cells: glow, body, filopodia, nucleus */
  g+='<g id="macs">';
  MAC.forEach(function(m,k){var fp='',q=rng(31+k);
    for(j=0;j<34;j++){var a=j/34*Math.PI*2+q()*.15,l=6+q()*12,b=a+(q()-.5)*.5;fp+='M'+f(m[0]+Math.cos(a)*m[2])+' '+f(m[1]+Math.sin(a)*m[2])+'Q'+f(m[0]+Math.cos(a)*(m[2]+l*.6))+' '+f(m[1]+Math.sin(a)*(m[2]+l*.6))+' '+f(m[0]+Math.cos(b)*(m[2]+l))+' '+f(m[1]+Math.sin(b)*(m[2]+l))}
    g+='<circle class="mglow" cx="'+m[0]+'" cy="'+m[1]+'" r="'+f(m[2]*2.6)+'" fill="url(#ig)"/>';
    g+='<circle class="mac sD" cx="'+m[0]+'" cy="'+m[1]+'" r="'+m[2]+'"/><path class="fil sD" d="'+fp+'"/>';
    g+='<path class="mnu sD" d="M'+f(m[0]-m[2]*.45)+' '+f(m[1]-m[2]*.1)+'q'+f(m[2]*.2)+' '+f(-m[2]*.45)+' '+f(m[2]*.6)+' '+f(-m[2]*.3)+'q'+f(m[2]*.4)+' '+f(m[2]*.2)+' '+f(m[2]*.25)+' '+f(m[2]*.55)+'q'+f(-m[2]*.25)+' '+f(m[2]*.3)+' '+f(-m[2]*.6)+' '+f(m[2]*.1)+'z"/>'});
  g+='</g>';
  if(!mob)g+='<text class="t fd" x="790" y="552" text-anchor="end">SECTION OF INFLAMED TISSUE · SCHEMATIC</text>';
  g+='</g>';
  /* moving parts: signals, the broad wash, the focused ring */
  g+='<g id="scMove" clip-path="url(#scClip)">';
  for(i=0;i<40;i++)g+='<circle class="sig" r="'+(i%3?2.6:3.4)+'"/>';
  g+='<rect id="wash" class="wash" x="-40" y="-40" width="880" height="640"/>';
  g+='<circle id="ring" class="ring" cx="'+CLU[0]+'" cy="'+CLU[1]+'" r="128"/><circle id="ring2" class="ring2" cx="'+CLU[0]+'" cy="'+CLU[1]+'" r="138"/>';
  g+='</g>';
  /* labels, one set per step (leader lines end at the thing they name) */
  g+='<g id="lb1"><text class="a" x="790" y="148" text-anchor="end">IMMUNE CELLS</text><path class="ldr" d="M'+(mob?660:700)+' 160L604 222"/>'+
     '<text class="a" x="10" y="'+(mob?220:236)+'">'+(mob?'SIGNALS':'INFLAMMATORY SIGNALS')+'</text><path class="ldr" d="M'+(mob?90:120)+' '+(mob?236:248)+'L360 292"/>'+
     '<text class="a" x="10" y="548">INFLAMED TISSUE</text></g>';
  g+='<g id="lb2"><text class="a" x="790" y="148" text-anchor="end">STANDARD OF CARE</text>'+
     '<text class="a" x="10" y="548">'+(mob?'SIDE EFFECTS':'SIDE EFFECTS BEYOND THE DISEASE')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="790" y="148" text-anchor="end">'+(mob?'NEW MECHANISM':'A NOVEL MECHANISM · THE AIM')+'</text><path class="ldr" d="M'+(mob?700:720)+' 160L640 214"/>'+
     '<text class="a" x="10" y="548">TISSUE SPARED</text></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .fd",svg),mv:$("#scMove",svg),tis:$("#tis",svg),infl:$("#infl",svg),glow:$$(".mglow",svg),
    sig:$$(".sig",svg),wash:$("#wash",svg),ring:$("#ring",svg),ring2:$("#ring2",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var RL=2*Math.PI*128;E.ring.style.strokeDasharray=RL+" "+RL;
  var SG=E.sig.map(function(el,i){var q=rng(101+i);return {a:q()*Math.PI*2,sp:.6+q()*.8,o:q(),r0:40+q()*30}});
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)});op(E.mv,b)}
    var s1=seg(p,0,.14),s2=seg(p,.34,.5),s3=seg(p,.66,.84),hot=(.4+.6*s1)*(1-.45*s2)*(1-s3);
    /* step 1: the immune cells glow and the tissue under them is inflamed */
    E.glow.forEach(function(el){op(el,b*hot)});
    op(E.infl,b*hot);
    /* signals stream out from the cluster; fewer under the wash, none once the focused mechanism acts */
    E.sig.forEach(function(el,i){var s=SG[i],u=((p*2.2*s.sp)+s.o)%1,r=s.r0+u*260,x=CLU[0]+Math.cos(s.a)*r*1.15,y=CLU[1]+Math.sin(s.a)*r*.7;
      el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));
      var vis=(i<20?1:1-s2)*(1-s3);op(el,b*vis*Math.min(1,Math.sin(u*Math.PI)*2))});
    /* step 2: a broad wash over everything; the healthy tissue dims with it */
    var wv=s2*(1-s3);op(E.wash,b*wv);op(E.tis,1-.5*wv);
    /* step 3: a focused ring around the immune cells only */
    E.ring.style.strokeDashoffset=(RL*(1-s3)).toFixed(1);op(E.ring,b*(s3>0?1:0));op(E.ring2,b*s3*.6);
    op(E.l1,b*(1-seg(p,.26,.34)));op(E.l2,b*s2*(1-seg(p,.6,.66)));op(E.l3,b*seg(p,.72,.82));
  };
}

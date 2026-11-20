/* the story scene (BL/BY/DB): ONE engraved elevation of a culture well, drawn in fine line, following ImmunoBlue's IB-T
   process as the NIH STTR abstract describes it. Surgery: the patient's tumour cells sit in the well. Light: Prussian blue
   nanoparticles among them are struck by the laser; the heated cells release antigens. Expand: the antigens, presented by
   dendritic cells, expand tumour-specific T cells. Return: a pipette collects the IB-T cells for the patient. Lines draw on
   scroll; labels fade in with their step. */
function ibScene(o){
  var f=function(n){return (+n).toFixed(1)},gy=392,top=104,L=34,R=766,g='',i,M=o.mob,s=11;
  var rnd=function(){s=(s*16807)%2147483647;return (s-1)/2147483646};
  function blob(cx,cy,r,k){var d='',n=28;for(var j=0;j<=n;j++){var a=j/n*Math.PI*2,rr=r*(1+.1*Math.sin(a*3+k)+.06*Math.sin(a*5+k*2));d+=(j?'L':'M')+f(cx+Math.cos(a)*rr)+' '+f(cy+Math.sin(a)*rr*.86)}return d+'Z'}
  g+='<svg class="'+(M?"mob":"")+'" viewBox="'+o.vb+'" aria-hidden="true">';
  /* ---- base: the well, its medium, the bench hatching, title block, the tumour cells ---- */
  g+='<g id="scBase">';
  g+='<path class="sD gr" d="M'+L+' '+top+'V'+(gy-14)+'Q'+L+' '+gy+' '+(L+14)+' '+gy+'H'+(R-14)+'Q'+R+' '+gy+' '+R+' '+(gy-14)+'V'+top+'"/>';
  g+='<path class="sD kb" d="M'+(L+8)+' '+top+'V'+(gy-16)+'Q'+(L+8)+' '+(gy-8)+' '+(L+16)+' '+(gy-8)+'H'+(R-16)+'Q'+(R-8)+' '+(gy-8)+' '+(R-8)+' '+(gy-16)+'V'+top+'"/>';
  g+='<path class="sD kb" d="M'+(L-10)+' '+top+'H'+(L+18)+'M'+(R-18)+' '+top+'H'+(R+10)+'"/>';
  var md='M'+(L+8)+' '+(top+30);for(i=1;i<=36;i++){var x=L+8+i*(R-L-16)/36;md+='L'+f(x)+' '+f(top+30+Math.sin(i*.9)*1.6)}g+='<path class="sD ht" d="'+md+'"/>';
  var ht='';for(i=0;i<78;i++){var hx=L+6+i*9.6;ht+='M'+f(hx)+' '+(gy+6)+'l-8 10'}g+='<path class="sD ht" d="'+ht+'"/>';
  g+='<path class="sD neat" d="M0 '+(gy+24)+'H800"/>';
  g+='<text class="t tb" x="0" y="'+(gy+48)+'">ELEVATION · CULTURE WELL</text><text class="t s tb" x="800" y="'+(gy+48)+'" text-anchor="end">SURGERY · LIGHT · EXPANSION · RETURN</text>';
  /* tumour cells, piled on the floor of the well (left half) */
  var TC=[[96,354,26],[148,360,24],[200,356,27],[252,360,24],[300,358,22],[122,314,24],[174,318,25],[226,316,24],[276,322,21],[150,276,22],[202,280,23],[250,286,19],[178,244,18]],tc='',nu='';
  TC.forEach(function(c,j){tc+=blob(c[0],c[1],c[2],j*1.7);nu+=blob(c[0]+3,c[1]+2,c[2]*.34,j)});
  g+='<path class="sD cel" d="'+tc+'"/><path class="sD ht" d="'+nu+'"/>';
  g+='</g>';
  /* ---- step 1: the patient's cells, labelled ---- */
  g+='<g id="sc1"><path class="lit2" d="'+tc+'"/><path class="dim" d="M178 222V'+(M?184:196)+'"/><text class="a" x="178" y="'+(M?174:186)+'" text-anchor="middle">'+o.l1+'</text></g>';
  /* ---- step 2: nanoparticles, the laser, heat and released antigens ---- */
  g+='<g id="sc2">';
  var np='';for(i=0;i<26;i++){var c=TC[i%TC.length],a=rnd()*6.28,rr=c[2]*(1.02+rnd()*.25),nx=c[0]+Math.cos(a)*rr,ny=c[1]+Math.sin(a)*rr*.86,q=3.2;np+='M'+f(nx)+' '+f(ny-q)+'l'+q+' '+q+'l-'+q+' '+q+'l-'+q+' -'+q+'z'}
  g+='<path class="pb" d="'+np+'"/>';
  g+='<path class="lz dr" d="M'+(M?120:96)+' 40L196 300"/><path class="lzg dr" d="M'+(M?120:96)+' 40L196 300"/>';
  var hr='';[34,52,70].forEach(function(r){hr+='M'+f(196-r)+' 300A'+r+' '+(r*.8)+' 0 0 1 '+f(196+r)+' 300'});g+='<path class="heat dr" d="'+hr+'"/>';
  var ag='';for(i=0;i<16;i++){var ax=226+rnd()*170,ay=196+rnd()*120;ag+='M'+f(ax)+' '+f(ay)+'m-2.6 0a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0 -5.2 0'}
  g+='<path class="ag" d="'+ag+'"/>';
  g+='<path class="dim" d="M330 230V'+(M?184:196)+'"/><text class="a" x="330" y="'+(M?174:186)+'" text-anchor="'+(M?"middle":"start")+'">'+o.l2+'</text></g>';
  /* ---- step 3: a dendritic cell presents the antigens; tumour-specific T cells multiply ---- */
  g+='<g id="sc3">';
  var dx=468,dy=336,dc='M'+dx+' '+dy;var den='';
  [[-1.2,62],[-.6,70],[0,58],[.5,66],[1.1,54],[2.2,48],[2.8,56],[3.6,50],[-2.2,44]].forEach(function(q,j){var a=q[0]-1.57,ex=dx+Math.cos(a)*q[1],ey=dy+Math.sin(a)*q[1]*.8,mx=dx+Math.cos(a+.25)*q[1]*.55,my=dy+Math.sin(a+.25)*q[1]*.5;
    den+='M'+f(dx+Math.cos(a)*20)+' '+f(dy+Math.sin(a)*16)+'Q'+f(mx)+' '+f(my)+' '+f(ex)+' '+f(ey);if(j<6)den+='m-2.4 0a2.4 2.4 0 1 0 4.8 0a2.4 2.4 0 1 0 -4.8 0'});
  g+='<path class="cel dr" d="'+blob(dx,dy,22,2)+'"/><path class="dc dr" d="'+den+'"/>';
  var T=[[560,362],[598,364],[636,362],[674,364],[712,362],[579,328],[617,330],[655,328],[693,330],[598,294],[636,296],[674,294],[617,260],[655,262]],tcell='';
  T.forEach(function(p,j){tcell+='<g class="tc" style="opacity:0"><circle class="tcl" cx="'+p[0]+'" cy="'+p[1]+'" r="16"/><circle class="tcn" cx="'+(p[0]+2)+'" cy="'+(p[1]+1)+'" r="9"/></g>'});
  g+=tcell+'<path class="dim" d="M636 244V'+(M?184:196)+'"/><text class="a" x="636" y="'+(M?174:186)+'" text-anchor="middle">'+o.l3+'</text></g>';
  /* ---- step 4: a pipette collects the expanded cells for the patient ---- */
  g+='<g id="sc4"><g class="pip">';
  g+='<path class="van dr" d="M628 '+(M?40:44)+'H644V218L638 248H634L628 218Z"/><path class="kbs dr" d="M622 '+(M?40:44)+'H650M628 120H644M628 170H644"/>';
  g+='<circle class="tcl" cx="636" cy="206" r="5"/><circle class="tcl" cx="636" cy="190" r="5"/><circle class="tcl" cx="636" cy="174" r="5"/></g>';
  g+='<path class="dim" d="M660 '+(M?62:66)+'H'+(M?690:700)+'"/><text class="a" x="'+(M?696:706)+'" y="'+(M?70:70)+'">'+o.l4+'</text></g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return ibScene({mob:1,vb:"20 20 770 450",l1:"TUMOR CELLS",l2:"LASER",l3:"T CELLS",l4:"IB-T"});
  return ibScene({vb:"0 24 800 436",l1:"TUMOR CELLS FROM SURGERY",l2:"PHOTOTHERMAL THERAPY",l3:"TUMOR-SPECIFIC T CELLS",l4:"IB-T CELLS"});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),tc:$$("#sc3 .tc",svg),ag:$("#sc2 .ag",svg),pb:$("#sc2 .pb",svg),pip:$("#sc4 .pip",svg),l3:$("#sc3 text.a",svg),l1:$("#sc1 text.a",svg),k1:$("#sc1 .dim",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.42),s3=seg(p,.5,.67),s4=seg(p,.75,.92);
    E.g1.style.opacity=(b*(.3+.7*s1)*(1-.55*s2)).toFixed(3);E.l1.style.opacity=(1-s2).toFixed(3);E.k1.style.opacity=(1-s2).toFixed(3);
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);E.pb.style.opacity=Math.min(1,s2*2.5).toFixed(3);E.ag.style.opacity=seg(s2,.5,1).toFixed(3);
    E.ag.style.transform="translate("+(seg(s2,.5,1)*10).toFixed(1)+"px,"+(-seg(s2,.5,1)*8).toFixed(1)+"px)";
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);E.l3.style.opacity=(1-s4).toFixed(3);draw(E.d3,s3);
    var n=E.tc.length;E.tc.forEach(function(t,j){t.style.opacity=seg(s3,.25+j/n*.6,.3+j/n*.6+.12).toFixed(3)});
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);E.pip.style.transform="translateY("+((1-s4)*-60).toFixed(1)+"px)";
  };
}

/* the story scene (DB: one continuous plate that fills its frame): the FACTORIAL™ mechanism as Attagene's Technology page
   describes it. Library: eight reporter transcription units, each with its own TF-specific promoter and the identical reporter,
   tagged by an HpaI site at a different position. Signal: transcription factors bind and each reporter is transcribed in
   proportion to activity. Digest: HpaI cuts every reporter; the labelled fragments differ only in length and separate in the
   capillary. Profile: the electropherogram peaks become the radial ATTAGRAPH™. Activities are illustrative. */
var ATF=["NF-κB","AP-1","CRE","p53","STAT","HSE","ARE","TCF/LEF"],ACT=[.42,.92,.5,.24,.78,.33,.64,.5];
function atgScene(o){
  var f=function(n){return (+n).toFixed(1)},M=o.mob,g='',i,n=ATF.length;
  var X0=o.x0,PW=o.pw,BX=X0+PW+8,BW=o.bw,Y0=o.y0,DY=o.dy,BH=o.bh,LX=o.lx,LY0=Y0-14,LY1=Y0+DY*(n-1)+BH+14,GX=o.gx,GY=o.gy,GR=o.gr,TY=o.ty,TX0=o.tx0,TX1=o.tx1,TH=o.th;
  function cut(i){return BX+BW*.16+i*BW*.1}
  function bandY(i){var L=cut(i)-BX,Lmax=cut(n-1)-BX,Lmin=cut(0)-BX;return LY1-14-(1-(L-Lmin)/(Lmax-Lmin))*(LY1-LY0-28)}
  function peakX(i){return TX0+(TX1-TX0)*(.1+.8*i/(n-1))}
  g+='<svg class="'+(M?"mob":"")+'" viewBox="'+o.vb+'" aria-hidden="true">';
  g+='<defs><linearGradient id="atgLane" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="rgba(152,55,149,.05)"/><stop offset="1" stop-color="rgba(152,55,149,.22)"/></linearGradient></defs>';
  /* ---- base: everything faintly, so the frame is never empty ---- */
  g+='<g id="scBase">';
  for(i=0;i<n;i++){var y=Y0+i*DY;g+='<path class="sD kb" d="M'+X0+' '+y+'h'+PW+'v'+BH+'h-'+PW+'z"/><path class="sD kb" d="M'+BX+' '+y+'h'+BW+'v'+BH+'h-'+BW+'z"/>'}
  g+='<path class="sD kb" d="M'+(LX-14)+' '+LY0+'H'+(LX+14)+'V'+LY1+'H'+(LX-14)+'Z"/>';
  for(var r=1;r<=4;r++)g+='<circle class="sD ht" cx="'+GX+'" cy="'+GY+'" r="'+f(GR*r/4)+'"/>';
  var sp='';for(i=0;i<n;i++){var a=-Math.PI/2+i*2*Math.PI/n;sp+='M'+GX+' '+GY+'L'+f(GX+Math.cos(a)*GR)+' '+f(GY+Math.sin(a)*GR)}g+='<path class="sD ht" d="'+sp+'"/>';
  g+='<path class="sD gr" d="M'+TX0+' '+TY+'H'+TX1+'"/>';
  var nz='M'+TX0+' '+(TY-3);for(var xn=TX0;xn<=TX1;xn+=6){nz+='L'+xn+' '+f(TY-3-2.2*Math.abs(Math.sin(xn*.37)*Math.sin(xn*.113)))}g+='<path class="sD ht" d="'+nz+'"/>';
  var gu='';for(i=0;i<n;i++){var gx2=peakX(i);gu+='M'+f(gx2)+' '+(TY-TH*1.02)+'V'+(TY-8)}g+='<path class="sD gd" d="'+gu+'"/>';
  var tk='';for(i=0;i<=20;i++){var tx=TX0+(TX1-TX0)*i/20;tk+='M'+f(tx)+' '+TY+'v5'}g+='<path class="sD ht" d="'+tk+'"/>';
  g+='<text class="t" x="'+X0+'" y="'+(Y0-22)+'">REPORTER TRANSCRIPTION UNITS</text>';
  g+='<text class="t" x="'+LX+'" y="'+(LY0-12)+'" text-anchor="middle">CE</text>';
  g+='<text class="t" x="'+GX+'" y="'+f(GY-GR-28)+'" text-anchor="middle">ATTAGRAPH™</text>';
  g+='<text class="t tb" x="'+TX0+'" y="'+(TY+26)+'">FRAGMENT LENGTH →</text><text class="t s tb" x="'+TX1+'" y="'+(TY+26)+'" text-anchor="end">FACTORIAL™ · ONE WELL · ONE READOUT</text>';
  g+='</g>';
  /* ---- 1 library: promoters (labelled) and identical reporters with the HpaI tag stepping along ---- */
  g+='<g id="sc1">';var pr='',hp='';
  for(i=0;i<n;i++){var y1=Y0+i*DY;pr+='M'+X0+' '+y1+'h'+PW+'v'+BH+'h-'+PW+'zM'+BX+' '+y1+'h'+BW+'v'+BH+'h-'+BW+'z';hp+='M'+f(cut(i))+' '+(y1-4)+'v'+(BH+8)}
  g+='<path class="bl dr" d="'+pr+'"/><path class="hp dr" d="'+hp+'"/>';
  for(i=0;i<n;i++)g+='<text class="tf" x="'+(X0+PW/2)+'" y="'+f(Y0+i*DY+BH/2+4)+'" text-anchor="middle">'+ATF[i]+'</text>';
  g+='<text class="a" x="'+f(cut(0))+'" y="'+(Y0-6)+'" text-anchor="middle">HpaI</text>';
  g+='</g>';
  /* ---- 2 signal: TFs dock on their promoters; each reporter lights in proportion to activity ---- */
  g+='<g id="sc2">';
  for(i=0;i<n;i++){var y2=Y0+i*DY;g+='<rect class="rna" x="'+BX+'" y="'+y2+'" width="'+BW+'" height="'+BH+'" data-a="'+ACT[i]+'"/>';
    g+='<ellipse class="tfp" cx="'+f(X0+PW*.5)+'" cy="'+f(y2-3)+'" rx="'+f(PW*.36)+'" ry="5" data-a="'+ACT[i]+'"/>';
    g+='<path class="arw dr" d="M'+(BX+2)+' '+f(y2+BH/2)+'h'+f(BW*.06)+'m-5 -4l5 4l-5 4"/>'}
  g+='</g>';
  /* ---- 3 digest: the cut fragments, their leaders into the capillary, and the bands they become ---- */
  g+='<g id="sc3">';var fr='',ld='';
  for(i=0;i<n;i++){var y3=Y0+i*DY+BH/2;fr+='M'+BX+' '+f(y3)+'H'+f(cut(i));ld+='M'+f(BX+BW+6)+' '+f(y3)+'C'+f(BX+BW+40)+' '+f(y3)+' '+f(LX-50)+' '+f(bandY(i))+' '+(LX-16)+' '+f(bandY(i))}
  g+='<path class="frg dr" d="'+fr+'"/><path class="ldr dr" d="'+ld+'"/>';
  g+='<rect class="lane" x="'+(LX-14)+'" y="'+LY0+'" width="28" height="'+(LY1-LY0)+'"/>';
  for(i=0;i<n;i++)g+='<rect class="band" x="'+(LX-11)+'" y="'+f(bandY(i)-2.5)+'" width="22" height="5" data-a="'+ACT[i]+'"/>';
  g+='</g>';
  /* ---- 4 profile: the electropherogram, then the radial ATTAGRAPH ---- */
  g+='<g id="sc4">';
  var tr='M'+TX0+' '+TY;for(var x=TX0;x<=TX1;x+=3){var yv=0;for(i=0;i<n;i++){var d=(x-peakX(i))/((TX1-TX0)*.012);yv+=ACT[i]*Math.exp(-d*d)}tr+='L'+f(x)+' '+f(TY-yv*TH)}
  g+='<path class="trc dr" d="'+tr+'"/>';
  var pl='',dots='';for(i=0;i<=n;i++){var j=i%n,a5=-Math.PI/2+j*2*Math.PI/n,rv=GR*(.18+.82*ACT[j]),px=GX+Math.cos(a5)*rv,py=GY+Math.sin(a5)*rv;pl+=(i?'L':'M')+f(px)+' '+f(py);if(i<n)dots+='<circle class="pd" cx="'+f(px)+'" cy="'+f(py)+'" r="3"/>'}
  g+='<path class="prf dr" d="'+pl+'Z"/>'+dots;
  for(i=0;i<n;i++){var a6=-Math.PI/2+i*2*Math.PI/n,lx=GX+Math.cos(a6)*(GR+16),ly=GY+Math.sin(a6)*(GR+16)+4;g+='<text class="gl" x="'+f(lx)+'" y="'+f(ly)+'" text-anchor="'+(Math.abs(Math.cos(a6))<.2?"middle":Math.cos(a6)>0?"start":"end")+'">'+ATF[i]+'</text>'}
  g+='</g>';
  return g+'</svg>';
}
function scene(){
  if(MOBILE())return atgScene({mob:1,vb:"0 34 800 600",x0:10,pw:128,bw:322,y0:74,dy:44,bh:26,lx:530,gx:680,gy:220,gr:96,ty:600,tx0:10,tx1:790,th:150});
  return atgScene({vb:"0 36 800 520",x0:10,pw:88,bw:296,y0:72,dy:40,bh:18,lx:466,gx:652,gy:206,gr:122,ty:520,tx0:10,tx1:790,th:120});
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text",svg),g1:$("#sc1",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d1:dl("#sc1 .dr"),d2:dl("#sc2 .dr"),d3:dl("#sc3 .dr"),d4:dl("#sc4 .dr"),rna:$$("#sc2 .rna",svg),tfp:$$("#sc2 .tfp",svg),band:$$("#sc3 .band",svg),pd:$$("#sc4 .pd, #sc4 .gl",svg),t1:$$("#sc1 text",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.18),s2=seg(p,.26,.44),s3=seg(p,.51,.7),s4=seg(p,.76,.95);
    E.g1.style.opacity=b.toFixed(3);draw(E.d1,.35+.65*s1);E.t1.forEach(function(t){t.style.opacity=(.3+.7*s1).toFixed(3)});
    E.g2.style.opacity=(b*(s2>0?1:0)).toFixed(3);draw(E.d2,s2);
    E.rna.forEach(function(r){r.style.opacity=(s2*(+r.getAttribute("data-a"))*(1-.55*s3)).toFixed(3)});
    E.tfp.forEach(function(r,i){r.style.opacity=(s2*(.35+.65*(+r.getAttribute("data-a")))).toFixed(3);r.style.transform="translateY("+((1-s2)*-14).toFixed(1)+"px)"});
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    E.band.forEach(function(r){r.style.opacity=(seg(s3,.55,1)*(.25+.75*(+r.getAttribute("data-a")))).toFixed(3)});
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);draw(E.d4,s4);E.pd.forEach(function(d){d.style.opacity=seg(s4,.6,1).toFixed(3)});
  };
}

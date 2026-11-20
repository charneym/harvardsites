/* the story scene (DB): ONE engraved side-view schematic of stigmatic ion imaging, after Steam's NSF Phase I outcomes report.
   Step 1 ions leave a point source (a needle-sharp tip behind an extraction aperture) in a diverging beam; step 2 the
   dilemma: a long flight path resolves mass but much of the beam misses a standard-sized detector, while a detector moved
   close (dashed) catches every ion at the cost of mass resolution; step 3 the ion lens stack draws in and the beam is
   bent so that every ion lands on the far detector; step 4 three ion species fly in the logo's three colours, the lighter
   ones arriving first: arrival time gives mass (the spectrum inset), arrival position gives the image. */
var SX=110,SY=280,DXP=700,NR=13,TM=.62;
function rayY(t,x,s){var st=SY+t*(x-SX);if(s<=0||x<=250)return st;
  var r0=t*140,r1=t*142.8,rD=t/TM*115,m0=t,m1=(rD-r1)/(DXP-450),ln;
  if(x<450){var u=(x-250)/200,h00=2*u*u*u-3*u*u+1,h10=u*u*u-2*u*u+u,h01=-2*u*u*u+3*u*u,h11=u*u*u-u*u;ln=SY+h00*r0+h10*m0*200+h01*r1+h11*m1*200}
  else ln=SY+r1+m1*(x-450);
  return st*(1-s)+ln*s}
function rayD(t,s,x1){var d='';for(var i=0;i<=56;i++){var x=SX+(x1-SX)*i/56;d+=(i?'L':'M')+x.toFixed(1)+' '+rayY(t,x,s).toFixed(1)}return d}
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true"><defs><clipPath id="rclip"><rect x="1" y="1" width="798" height="558"/></clipPath></defs>';
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  /* optical axis */
  g+='<path class="sD ax" d="M24 '+SY+'H776"/>';
  /* the specimen: holder and needle-sharp tip */
  g+='<path class="sD bl" d="M22 262H62V298H22Z"/><path class="sD bl" d="M62 271L'+(SX-2)+' '+(SY-.6)+'L'+(SX-2)+' '+(SY+.6)+'L62 289Z"/>';
  g+='<path class="ht" d="M26 298l10 -10M36 298l10 -10M46 298l10 -10M56 298l6 -6M26 288l10 -10M26 278l10 -10M26 268l6 -6"/>';
  /* the extraction aperture */
  g+='<path class="sD bl" d="M132 266L156 226H168M132 294L156 334H168"/>';
  /* the detector, side view, with its flange */
  g+='<path class="sD bl" d="M'+DXP+' 158H714V402H'+DXP+'Z"/><path class="sD kb" d="M714 146H730V414H714"/>';
  g+='<g class="tb"><text x="24" y="540" class="t">STIGMATIC ION IMAGING · SCHEMATIC</text><text x="776" y="540" text-anchor="end" class="t s">NOT TO SCALE</text></g>';
  g+='</g>';
  /* the beam */
  g+='<g id="rays" clip-path="url(#rclip)">';for(var k=0;k<NR;k++)g+='<path class="ray" d="M'+SX+' '+SY+'"/>';g+='</g>';
  /* step 2: a detector moved close catches everything but blurs the masses */
  g+='<g id="sc2"><path class="ghost" d="M330 200H340V360H330Z"/></g>';
  /* step 3: the ion lens stack, five ring electrodes in section, on ceramic posts */
  var pl='';[250,300,350,400,450].forEach(function(x){pl+='<path class="pl dr" d="M'+(x-5)+' 112H'+(x+5)+'V182H'+(x-5)+'ZM'+(x-5)+' 378H'+(x+5)+'V448H'+(x-5)+'Z"/>'});
  g+='<g id="sc3">'+pl+'<path class="cer dr" d="M236 124H464M236 436H464"/></g>';
  /* step 4: ions in flight, hits on the detector, the mass spectrum inset */
  var io='',hi='';for(var k=0;k<NR;k++){var c=["r","g","b"][k%3];io+='<circle class="ion '+c+'" r="'+(mob?7:4.2)+'" cx="'+SX+'" cy="'+SY+'"/>';hi+='<circle class="hit '+c+'" r="'+(mob?7:4.5)+'" cx="'+(DXP-6)+'" cy="'+(SY+(k/(NR-1)*2-1)*115).toFixed(1)+'"/>'}
  g+='<g id="sc4"><g id="ions">'+io+'</g><g id="hits">'+hi+'</g>'+
     '<path class="tbl" d="M470 462H776V522H470Z"/><path class="kb" d="M482 512H764"/>'+
     '<path id="pk0" class="pk r" d="M482 512"/><path id="pk1" class="pk g" d="M482 512"/><path id="pk2" class="pk b" d="M482 512"/></g>';
  g+='<text id="cap1" x="40" y="58" class="a">IONS FROM A POINT</text>';
  g+='<text id="cap2" x="40" y="58" class="a">LONG FLIGHT: IONS LOST</text>';
  g+='<text id="cap3" x="40" y="58" class="a">ION OPTICS BRING THEM HOME</text>';
  g+='<text id="cap4" x="40" y="58" class="a">TIME: MASS · PLACE: IMAGE</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase .tb, #scBase .ht",svg),rays:$$("#rays .ray",svg),g2:$("#sc2",svg),g3:$("#sc3",svg),g4:$("#sc4",svg),
    d3:dl("#sc3 .dr"),ions:$$("#ions circle",svg),hits:$$("#hits circle",svg),pk:[$("#pk0",svg),$("#pk1",svg),$("#pk2",svg)],
    cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1,lastK="",T=[];for(var k=0;k<NR;k++)T.push((k/(NR-1)*2-1)*TM);
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function peak(i,v){var cx=[.22,.5,.78][i],hh=[38,30,42][i],d='';for(var j=0;j<=40;j++){var x=j/40,y=hh*v*Math.exp(-Math.pow((x-.5)/.16,2));d+=(j?'L':'M')+(482+(cx-.06+x*.12)*282).toFixed(1)+' '+(512-y).toFixed(1)}return d}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s1=seg(p,0,.16),s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* the beam runs out from the tip as the drawing arrives, straight until the lens bends it in step 3 */
    var reach=Math.min(1,.15+.85*Math.max(b,s1)),x1=SX+4+(DXP-SX-4)*reach,key=x1.toFixed(1)+"|"+s3.toFixed(4);
    if(key!==lastK){lastK=key;E.rays.forEach(function(el,k){el.setAttribute("d",rayD(T[k],s3,x1))})}
    E.rays.forEach(function(el,k){var miss=Math.abs(T[k]*(DXP-SX))>118;el.style.opacity=(b*(miss?1-.65*s2*(1-s3):1)).toFixed(3)});
    /* step 2: the short-flight detector, dashed */
    E.g2.style.opacity=(b*s2*(1-s3)).toFixed(3);
    /* step 3: the lens stack draws in */
    E.g3.style.opacity=(b*(s3>0?1:0)).toFixed(3);draw(E.d3,s3);
    /* step 4: three ion species fly; lighter ones arrive first */
    E.g4.style.opacity=(b*(s4>0?1:0)).toFixed(3);
    var sp=[1.7,1.38,1.15];
    E.ions.forEach(function(el,k){var c=k%3,f=Math.min(1,s4*sp[c]),x=SX+(DXP-6-SX)*f;el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",rayY(T[k],x,s3).toFixed(1));el.style.opacity=(f>0&&f<1?1:0).toFixed(2)});
    E.hits.forEach(function(el,k){el.style.opacity=(s4*sp[k%3]>=1?1:0).toFixed(2)});
    for(var i=0;i<3;i++){var a0=1/sp[i];E.pk[i].setAttribute("d",peak(i,s4>=a0?seg(s4,a0,a0+.12):0))}
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}

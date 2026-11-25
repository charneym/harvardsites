/* the story scene (BL/BY/DB): ONE analyzer light path drawn as an engraved technical plate and kept on screen for all three
   steps: a light source, a square cuvette of K-ASSAY reagent, a detector, and an absorbance trace above the beam.
   Step 1 (the reagent): antibody-coated latex particles, dispersed; the beam passes the cuvette at full strength.
   Step 2 (the reaction): the target (yellow) arrives and the particles gather into clumps around it.
   Step 3 (the reading): the clumps scatter light, the transmitted beam dims, and the absorbance trace rises.
   Sources: k-assay.com (immunoturbidimetric, latex-enhanced RF (Ver.2), liquid ready-to-use reagents, chemistry analyzers).
   Schematic. Driven by the scrubbed story progress. */
var KP=(function(){
  /* dispersed (x,y) and clustered (x,y) positions for 14 particles, four clumps */
  var D=[[296,182],[352,176],[388,214],[318,232],[372,262],[292,288],[346,306],[392,330],[306,350],[362,372],[292,404],[340,412],[392,404],[330,262]];
  var C=[[310,214],[328,228],[306,236],[364,282],[382,296],[362,302],[384,276],[312,350],[330,364],[308,372],[366,398],[384,410],[364,416],[326,206]];
  var A=[[[318,221],[310,186]],[[317,233],[400,190]],[[373,289],[300,262]],[[373,279],[388,240]],[[320,357],[352,340]],[[319,368],[284,330]],[[375,404],[398,370]],[[374,413],[340,436]]];
  return {D:D,C:C,A:A};
})();
function kpar(i){var f=function(n){return n.toFixed(1)},g='<g class="kp" data-i="'+i+'"><circle class="kpc" r="9"/>';
  for(var k=0;k<5;k++){var a=(k*72+i*23)*Math.PI/180,x1=9*Math.cos(a),y1=9*Math.sin(a),x2=14*Math.cos(a),y2=14*Math.sin(a),
    xa=x2+3.2*Math.cos(a+.9),ya=y2+3.2*Math.sin(a+.9),xb=x2+3.2*Math.cos(a-.9),yb=y2+3.2*Math.sin(a-.9);
    g+='<path class="kab" d="M'+f(x1)+' '+f(y1)+'L'+f(x2)+' '+f(y2)+'M'+f(x2)+' '+f(y2)+'L'+f(xa)+' '+f(ya)+'M'+f(x2)+' '+f(y2)+'L'+f(xb)+' '+f(yb)+'"/>'}
  return g+'</g>'}
function scene(){
  var mob=MOBILE(),g='',i;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'30 40 720 450':'20 40 720 460')+'" aria-hidden="true">';
  g+='<defs><linearGradient id="kGlass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f6f3ef" stop-opacity=".10"/><stop offset=".5" stop-color="#f6f3ef" stop-opacity=".03"/><stop offset="1" stop-color="#f6f3ef" stop-opacity=".09"/></linearGradient>'+
     '<clipPath id="kIn"><path d="M271 151H409V431H271Z"/></clipPath></defs>';
  /* base plate: source, beam in, cuvette with its liquid, beam out, detector, the trace's axes */
  g+='<g id="scBase">';
  g+='<path class="sD kfr" d="M50 236H120V284H50Z"/><path class="sD kfr" d="M120 244V276M62 236V284"/>';
  g+='<path class="sD kbeam" d="M124 254H262M124 260H262M124 266H262"/>';
  g+='<path class="kglass" d="M262 110H418V440H262Z"/>';
  g+='<path class="sD kfr" d="M262 110V440H418V110M270 110V432H410V110"/>';
  g+='<path class="sD kliq" d="M271 151C300 147 380 147 409 151"/>';
  g+='<path class="sD kfr" d="M588 226H640V294H588Z"/><path class="sD kfr" d="M596 236V284"/>';
  g+='<path class="sD kax" d="M460 70V190H676"/>';
  g+='<text class="a" x="'+(mob?40:85)+'" y="316" text-anchor="'+(mob?"start":"middle")+'">LIGHT SOURCE</text>';
  g+='<text class="a" x="340" y="474" text-anchor="middle">CUVETTE</text>';
  g+='<text class="a" x="614" y="326" text-anchor="middle">DETECTOR</text>';
  g+='<text class="a" x="460" y="56" text-anchor="start">ABSORBANCE</text>';
  g+='<text class="a" x="684" y="'+(mob?197:194)+'" text-anchor="start">TIME</text>';
  g+='</g>';
  /* the beam out of the cuvette: full at rest, dims in step 3 */
  g+='<g id="kOut"><path class="sD kbeam" d="M418 254H588M418 260H588M418 266H588"/></g>';
  /* the particles (always in the cuvette once the plate is drawn) and the target that arrives in step 2 */
  g+='<g id="kPar" clip-path="url(#kIn)">';
  for(i=0;i<KP.D.length;i++)g+=kpar(i);
  for(i=0;i<KP.A.length;i++)g+='<circle class="kag" r="4" data-a="'+i+'"/>';
  g+='</g>';
  /* step 3: scatter from the clumps, and the absorbance trace */
  g+='<g id="st3"><path class="sD3 ksc" d="M296 200L282 186M340 214L356 198M398 286L404 272M350 292L336 280M296 346L284 336M342 350L358 340M392 420L402 426M352 392L338 380"/>'+
     '<path class="sD3 ktr" d="M464 184C520 183 548 178 572 160S628 96 668 84"/></g>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .kglass",svg),out:dl("#kOut .sD"),outG:$("#kOut",svg),par:$$(".kp",svg),ag:$$(".kag",svg),
    pg:$("#kPar",svg),s3:$("#st3",svg),sc:dl("#st3 .sD3")};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function ease(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);draw(E.out,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var i2=ease(seg(p,.36,.6)),ia=seg(p,.34,.46),i3=seg(p,.68,.9);
    op(E.pg,b);
    E.par.forEach(function(el,k){var d=KP.D[k],c=KP.C[k],x=d[0]+(c[0]-d[0])*i2,y=d[1]+(c[1]-d[1])*i2;el.setAttribute("transform","translate("+x.toFixed(1)+" "+y.toFixed(1)+")")});
    E.ag.forEach(function(el,k){var a=KP.A[k],x=a[1][0]+(a[0][0]-a[1][0])*i2,y=a[1][1]+(a[0][1]-a[1][1])*i2;el.setAttribute("cx",x.toFixed(1));el.setAttribute("cy",y.toFixed(1));el.style.opacity=ia.toFixed(3)});
    op(E.outG,1-.62*i3);
    op(E.s3,b*Math.min(1,i3*6));draw(E.sc,i3);
  };
}

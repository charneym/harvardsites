/* The story scene (BL/BY/DB): how PDT treats an oral lesion, as ONE continuous scene, drawn in fine engraved line.
   A cross-section of the oral mucosa stays on screen for all three steps: the surface, the layered epithelium with a
   lesion of enlarged, irregular cells at its centre, the basement membrane and capillary loops beneath.
   Step 1 (Drug): ALA is applied; it soaks into the tissue and the lesion cells turn it into the photosensitizer PpIX
     (they fill with a red tint, the healthy cells stay clear).
   Step 2 (Light): a fibre-optic diffuser above the mucosa glows with 635 nm light; light waves travel down into the
     tissue and the loaded cells light up.
   Step 3 (Singlet oxygen): the activated PpIX makes singlet oxygen inside the lesion cells; the PpIX photobleaches
     (the image-guided system watches this fade), the lesion cells go and healthy mucosa closes over the site.
   Sources: photodynamica.com (About PDT, PDT Applications: drug, light, singlet oxygen) and the NIH STTR abstract for
   1R41CA302359 (ALA, PpIX, 635 nm, photobleaching monitoring). Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=620;
var SY=262,BM=396;          /* the mucosal surface and the basement membrane */
var LX=380,LW=128;          /* the lesion's centre and half-width */
function surfY(x){return SY+Math.sin(x*.021)*5+Math.sin(x*.057+1)*2}
function bmY(x){return BM+Math.sin(x*.033+.6)*9}
var CELLS=(function(){
  var s=7193,R=function(){s=(s*1103515245+12345)&0x7fffffff;return s/0x7fffffff},a=[],r,x,top,y;
  for(r=0;r<4;r++){for(x=10+(r%2)*15;x<760;x+=30){
    top=surfY(x)+16+r*29+(R()-.5)*3;if(top>bmY(x)-12)continue;
    var les=Math.abs(x-LX)<LW-(r===0?18:0);
    a.push({x:x+(R()-.5)*4,y:top,les:les,r:r,k:R()})}}
  return a})();
var ALA=(function(){var a=[],i;for(i=0;i<22;i++)a.push({x:150+i*21+((i*37)%11),o:(i*.37)%1});return a})();
function pdScene(o){
  var g='',i;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><linearGradient id="pdtis" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2f3ed" stop-opacity=".1"/><stop offset="1" stop-color="#f2f3ed" stop-opacity="0"/></linearGradient>'+
     '<radialGradient id="pdglow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ff3b24" stop-opacity=".55"/><stop offset=".45" stop-color="#ff3b24" stop-opacity=".16"/><stop offset="1" stop-color="#ff3b24" stop-opacity="0"/></radialGradient></defs>';
  /* ---- the tissue ---- */
  var sp='M0 '+surfY(0).toFixed(1),bp='M0 '+bmY(0).toFixed(1),k;
  for(k=10;k<=760;k+=10){sp+='L'+k+' '+surfY(k).toFixed(1);bp+='L'+k+' '+bmY(k).toFixed(1)}
  g+='<g id="pdT"><path class="tf" d="'+sp+'L760 '+SCH+'L0 '+SCH+'Z"/>';
  g+='<path class="sf" d="'+sp+'"/><path class="bmL" d="'+bp+'"/>';
  /* capillary loops in the connective tissue */
  for(i=0;i<7;i++){var cx=60+i*108,cy=bmY(cx)+30;g+='<path class="cap2" d="M'+(cx-14)+' '+(cy+120)+'C'+(cx-14)+' '+(cy+40)+' '+(cx-10)+' '+cy+' '+cx+' '+cy+'S'+(cx+14)+' '+(cy+40)+' '+(cx+14)+' '+(cy+120)+'"/>'}
  /* collagen strands */
  for(i=0;i<5;i++){var y=bmY(0)+70+i*30;g+='<path class="col" d="M0 '+y+'C190 '+(y-12)+' 380 '+(y+14)+' 760 '+(y-6)+'"/>'}
  g+='<text class="t" x="0" y="'+(SCH-8)+'">ORAL MUCOSA · CROSS-SECTION</text></g>';
  /* ---- the cells: healthy everywhere, the lesion's enlarged cells at the centre (with healthy ones waiting under them) ---- */
  g+='<g id="pdC">';
  CELLS.forEach(function(c,j){
    if(c.les){
      g+='<g class="hz" data-j="'+j+'"><ellipse class="ce" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" rx="13" ry="10"/><circle class="cn" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" r="3"/></g>';
      var rx=15+c.k*3,ry=12+c.k*2;
      g+='<g class="lz" data-j="'+j+'"><ellipse class="le" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" rx="'+rx.toFixed(1)+'" ry="'+ry.toFixed(1)+'" transform="rotate('+((c.k-.5)*30).toFixed(1)+' '+c.x.toFixed(1)+' '+c.y.toFixed(1)+')"/><circle class="ln3" cx="'+(c.x+(c.k-.5)*4).toFixed(1)+'" cy="'+c.y.toFixed(1)+'" r="'+(5.5+c.k*2).toFixed(1)+'"/></g>';
    }else g+='<g class="nz"><ellipse class="ce" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" rx="13" ry="10"/><circle class="cn" cx="'+c.x.toFixed(1)+'" cy="'+c.y.toFixed(1)+'" r="3"/></g>';
  });
  g+='</g>';
  g+='<text class="t lt" id="pdLes" x="'+LX+'" y="'+(BM+44)+'" text-anchor="middle">LESION</text>';
  /* ---- ALA drops ---- */
  g+='<g id="pdA">';ALA.forEach(function(a,j){g+='<circle class="al" r="3.4" cx="'+a.x+'" cy="0"/>'});g+='</g>';
  /* ---- the light: the fibre diffuser above the surface, its glow and the light waves ---- */
  g+='<g id="pdL"><ellipse class="gl" cx="'+LX+'" cy="150" rx="320" ry="150" fill="url(#pdglow)"/>';
  for(i=0;i<6;i++){g+='<path class="wv" data-i="'+i+'" d=""/>'}
  g+='<path class="fj" d="M760 112H'+(LX+176)+'"/><rect class="ff" x="'+(LX+152)+'" y="103" width="24" height="18"/>'+
     '<rect class="fd" x="'+(LX-170)+'" y="105" width="322" height="14" rx="7"/><rect class="fdc" x="'+(LX-164)+'" y="110" width="310" height="4" rx="2"/></g>';
  /* ---- singlet oxygen bursts inside the lesion cells ---- */
  g+='<g id="pdO">';CELLS.forEach(function(c,j){if(!c.les)return;
    g+='<g class="ox" data-j="'+j+'" transform="translate('+c.x.toFixed(1)+' '+c.y.toFixed(1)+')"><path d="M-7 0H7M0 -7V7M-5 -5L5 5M-5 5L5 -5"/></g>'});g+='</g>';
  /* ---- step labels, along the top, clear of the fibre ---- */
  g+='<g id="pdl1"><text class="a" x="0" y="22">ALA APPLIED · LESION CELLS MAKE PpIX</text></g>';
  g+='<g id="pdl2"><text class="a" x="0" y="22">635 nm LIGHT · DELIVERED BY FIBRE</text></g>';
  g+='<g id="pdl3"><text class="a" x="0" y="22">¹O₂ · LESION CLEARED · MUCOSA HEALS</text></g>';
  return g+'</svg>';
}
function scene(){return pdScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var E={T:$("#pdT",svg),nz:$$(".nz",svg),hz:$$(".hz",svg),lz:$$(".lz",svg),le:$$(".lz .le",svg),al:$$(".al",svg),
    L:$("#pdL",svg),gl:$("#pdL .gl",svg),wv:$$(".wv",svg),fd:$("#pdL .fd",svg),ox:$$(".ox",svg),les:$("#pdLes",svg),
    l1:$("#pdl1",svg),l2:$("#pdl2",svg),l3:$("#pdl3",svg)};
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  function lerp(a,b,t){return a+(b-a)*t}
  return function(p,b){
    if(!svg.isConnected)return;
    var drop=seg(p,.03,.24)*(1-seg(p,.26,.34)),up=seg(p,.12,.32),lit=seg(p,.4,.52)*(1-seg(p,.86,.96)),
        burst=seg(p,.7,.78)*(1-seg(p,.88,.95)),bleach=seg(p,.72,.9),heal=seg(p,.8,.96);
    op(E.T,b);E.nz.forEach(function(el){op(el,b)});
    /* lesion cells: PpIX tint grows with uptake, brightens under the light, bleaches as singlet oxygen is made */
    var tint=up*(1-bleach)*(.55+.45*lit);
    E.le.forEach(function(el){el.style.fill="rgba(255,59,36,"+(.08+.5*tint).toFixed(3)+")"});
    E.lz.forEach(function(el){op(el,b*(1-heal))});
    E.hz.forEach(function(el){op(el,b*heal)});
    op(E.les,b*(1-heal)*.9);
    /* ALA drops fall onto the surface and soak in */
    E.al.forEach(function(el,k){var a=ALA[k],ph=(a.o+p*4)%1,y=lerp(40,surfY(a.x)+40,ph);el.setAttribute("cy",y.toFixed(1));
      var vis=y<surfY(a.x)?1:Math.max(0,1-(y-surfY(a.x))/40);op(el,b*drop*vis)});
    /* the fibre comes in with step 2 and stays for step 3 */
    var fin=seg(p,.36,.46);op(E.L,b*fin);E.gl.style.opacity=(lit).toFixed(3);
    E.fd.style.fill="rgba(255,59,36,"+(.18+.72*lit).toFixed(3)+")";
    E.wv.forEach(function(el,i){var ph=(i/6+p*3)%1,y=128+ph*(BM-120),w=150+ph*90,d='M'+(LX-w)+' '+y.toFixed(1);
      for(var x=-w;x<=w;x+=12)d+='L'+(LX+x)+' '+(y+Math.sin(x*.12+ph*20)*3).toFixed(1);el.setAttribute("d",d);op(el,lit*(1-ph)*.9)});
    E.ox.forEach(function(el,k){var ph=(k*.23+p*7)%1;el.setAttribute("transform",el.getAttribute("transform").replace(/ scale\([^)]*\)/,"")+" scale("+(0.6+ph*.8).toFixed(2)+")");op(el,b*burst*(1-ph*.6))});
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.74,.82));
  };
}

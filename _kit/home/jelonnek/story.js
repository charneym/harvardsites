/* The story scene (BL/BY/DB): a Jelonnek single-phase transformer on an EI core, front view, as jelonnek-trafo.com describes it
   (Produkte > Einphasentransformatoren; Technik > Draht, Spulenkörper, Verguss und Vergussmassen): data calculated with their own
   program, copper enamelled wire wound on a glass-fibre polyamide bobbin, the laminations stacked into the core, vacuum
   impregnation, connection to transformer terminals. ONE elevation kept on screen for all four steps.
   1 Berechnen: the core outline and its dimensions draw in, the calculation fills in on the panel.
   2 Wickeln: the bobbin appears, the primary layers wind on turn by turn, an insulating tape, then the secondary.
   3 Kern: the E laminations come down into the bobbin, the I laminations slide in to close the core.
   4 Tränken: varnish soaks the winding under vacuum (air leaves as bubbles), the leads run up to the terminal block. */
var JX=[340,332,324,311,303,296],JTAPE=318,JY0=184,JN=15,JDY=8.2;
function jlScene(o){
  var g='',mob=o.mob,i,k;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="8 22 588 400" aria-hidden="true"><defs>'+
     '<linearGradient id="jlFe" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5d6b78"/><stop offset=".45" stop-color="#93a2b0"/><stop offset="1" stop-color="#46525e"/></linearGradient>'+
     '<radialGradient id="jlCu" cx=".38" cy=".35" r=".7"><stop offset="0" stop-color="#f4b27c"/><stop offset=".55" stop-color="#c8743a"/><stop offset="1" stop-color="#7c3f18"/></radialGradient></defs>';
  /* 1: the calculation panel */
  g+='<text class="t" id="jlLc" x="20" y="46">BERECHNUNG</text>';
  g+='<rect class="scr" x="20" y="60" width="150" height="140"/>';
  for(i=0;i<4;i++)g+='<rect class="bar0" x="36" y="'+(82+i*28)+'" width="118" height="6"/><rect class="bar1" id="jlB'+i+'" x="36" y="'+(82+i*28)+'" width="0" height="6"/>';
  /* the core outline (ghost) and its dimensions */
  g+='<path class="ln sD" d="M230 110H550V370H230ZM290 170H350V310H290ZM430 170H490V310H430Z"/>';
  g+='<g id="jlDim"><path class="dim" d="M230 92H550M230 84V100M550 84V100M572 110V370M564 110H580M564 370H580"/><path class="dimA" d="M238 88L230 92L238 96M542 88L550 92L542 96M568 118L572 110L576 118M568 362L572 370L576 362"/></g>';
  /* 3: the laminations, E from above and I from below */
  g+='<g id="jlE"><path class="fe" d="M230 110H550V310H490V170H430V310H350V170H290V310H230Z"/><circle class="hole" cx="250" cy="130" r="5"/><circle class="hole" cx="530" cy="130" r="5"/></g>';
  g+='<g id="jlI"><rect class="fe" x="230" y="310" width="320" height="60"/><circle class="hole" cx="250" cy="350" r="5"/><circle class="hole" cx="530" cy="350" r="5"/></g>';
  /* 2: the bobbin (glass-fibre polyamide) and the winding */
  g+='<g id="jlBob"><rect class="bob" x="344" y="171" width="6" height="138"/><rect class="bob" x="430" y="171" width="6" height="138"/>'+
     '<rect class="bob" x="292" y="170" width="196" height="6"/><rect class="bob" x="292" y="304" width="196" height="6"/></g>';
  g+='<g id="jlTape"><rect class="tape" x="'+(JTAPE-2)+'" y="178" width="4" height="124"/><rect class="tape" x="'+(780-JTAPE-2)+'" y="178" width="4" height="124"/></g>';
  g+='<g id="jlW">';
  for(k=0;k<JX.length;k++){g+='<g class="ly">';for(i=0;i<JN;i++){var y=(JY0+i*JDY).toFixed(1);g+='<circle class="cu" cx="'+JX[k]+'" cy="'+y+'" r="3.3"/><circle class="cu" cx="'+(780-JX[k])+'" cy="'+y+'" r="3.3"/>'}g+='</g>'}
  g+='</g>';
  /* 4: varnish under vacuum, bubbles, leads and the terminal block */
  g+='<g id="jlVar"><rect class="var" x="292" y="176" width="58" height="128"/><rect class="var" x="430" y="176" width="58" height="128"/></g>';
  g+='<g id="jlBu">';for(i=0;i<10;i++)g+='<circle class="bub" r="2.4" cx="0" cy="0"/>';g+='</g>';
  g+='<path class="lead" d="M303 196C303 150 318 120 326 84"/><path class="lead" d="M332 196C332 156 346 126 358 84"/><path class="lead" d="M448 196C448 156 434 126 422 84"/><path class="lead" d="M477 196C477 150 462 120 454 84"/>';
  g+='<g id="jlTb"><rect class="tb" x="306" y="56" width="168" height="30"/>';for(i=0;i<6;i++)g+='<rect class="tbs" x="'+(314+i*26.5)+'" y="62" width="20" height="18"/><circle class="hub" cx="'+(324+i*26.5)+'" cy="71" r="3"/>';g+='</g>';
  g+='<text class="cl" id="jlLt" x="390" y="38" text-anchor="middle">'+(mob?"KLEMMEN":"TRAFOKLEMMEN")+'</text>';
  /* step captions under the drawing, one at a time */
  g+='<text class="cl" id="jlL2" x="390" y="408" text-anchor="middle">'+(mob?"WICKLUNG":"KUPFERLACKDRAHT AUF DEM SPULENKÖRPER")+'</text>';
  g+='<text class="cl" id="jlL3" x="390" y="408" text-anchor="middle">'+(mob?"BLECHKERN":"E- UND I-BLECHE")+'</text>';
  g+='<text class="ok" id="jlL4" x="390" y="408" text-anchor="middle">'+(mob?"VAKUUMGETRÄNKT":"VAKUUM-TRÄNKUNG")+'</text>';
  return g+'</svg>';
}
function scene(){return jlScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),leads:dl(".lead"),bars:[0,1,2,3].map(function(k){return $("#jlB"+k,svg)}),dim:$("#jlDim",svg),bob:$("#jlBob",svg),tape:$("#jlTape",svg),
    ly:$$("#jlW .ly",svg),fe:$("#jlE",svg),fi:$("#jlI",svg),vr:$("#jlVar",svg),bu:$$("#jlBu circle",svg),tb:$("#jlTb",svg),
    Lc:$("#jlLc",svg),Lt:$("#jlLt",svg),L2:$("#jlL2",svg),L3:$("#jlL3",svg),L4:$("#jlL4",svg)};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=(+v).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    /* 1: calculation fills in, the dimensions are set */
    E.bars.forEach(function(r,k){r.setAttribute("width",(118*[.72,.38,.86,.55][k]*seg(p,.03+k*.045,.1+k*.045)).toFixed(1))});
    op(E.Lc,b);op(E.dim,b*seg(p,.04,.1)*(1-seg(p,.24,.28)));
    /* 2: the bobbin, then each layer winds on turn by turn (left and right window together), tape between primary and secondary */
    op(E.bob,b*seg(p,.25,.29));
    var wv=seg(p,.29,.52)*(JX.length+.6);
    E.ly.forEach(function(l,k){var v=wv-(k>=3?k+.6:k);v=v<0?0:v>1?1:v;var cs=l.children,n=cs.length/2;
      for(var i=0;i<n;i++){var on=v*n>i?1:0;op(cs[2*i],b*on);op(cs[2*i+1],b*on)}});
    op(E.tape,b*(wv>=3.05?1:0));
    op(E.L2,b*seg(p,.3,.34)*(1-seg(p,.5,.53)));
    /* 3: E down, I up */
    var ev=seg(p,.55,.66),iv=seg(p,.62,.72);
    E.fe.setAttribute("transform","translate(0,"+(-150*(1-ev)).toFixed(1)+")");op(E.fe,b*seg(p,.54,.58));
    E.fi.setAttribute("transform","translate("+(140*(1-iv)).toFixed(1)+",0)");op(E.fi,b*seg(p,.6,.64));
    op(E.L3,b*seg(p,.57,.61)*(1-seg(p,.74,.77)));
    /* 4: varnish soaks in, air leaves as bubbles, then the leads run up to the terminal block */
    op(E.vr,b*.42*seg(p,.78,.86));
    E.bu.forEach(function(c,i){var q=((p-.78)/.1*1.6+i/10)%1;if(q<0)q+=1;var x=(i%2?430:292)+8+((i*23)%44),y=300-q*120;
      c.setAttribute("cx",x.toFixed(1));c.setAttribute("cy",y.toFixed(1));op(c,b*(p>.78&&p<.88?(1-q)*.9:0))});
    op(E.L4,b*seg(p,.79,.83));
    op(E.tb,b*seg(p,.86,.9));var lv=seg(p,.88,.97);draw(E.leads,b*lv);E.leads.forEach(function(a){op(a[0],b*(lv>0?1:0))});op(E.Lt,b*seg(p,.9,.94));
  };
}

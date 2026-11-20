/* the story scene (DB): ONE engraved schematic of how SpermQT reads sperm DNA (Path Fertility launch release, 2021; pathfertility.com).
   Step 1 the double helix of sperm DNA draws in; step 2 methyl marks appear at CpG sites over the three gene groups the test reads;
   step 3 the methylation level at each site rises as bars and is compared with a reference pattern; step 4 a dotted path, as on the
   Path kit, leads from the result to the treatment choice (IUI or IVF). */
var HX={x0:40,x1:760,cy:196,A:58,P:180};
function hy(x,s){return HX.cy+s*HX.A*Math.sin(2*Math.PI*(x-HX.x0)/HX.P)}
var CPG=[78,118,168,214,262,318,352,404,446,500,548,596,634,690,724];
var MET=[1,1,0,1,1,0,1,1,1,0,1,0,1,1,0];
var BARS=(function(){var a=[];for(var i=0;i<24;i++){var v=.35+.5*Math.abs(Math.sin(i*1.37+.6))*(.6+.4*Math.cos(i*.53));a.push(Math.min(.95,v))}return a})();
function scene(){
  var mob=MOBILE();
  var g='<svg class="'+(mob?"mob":"")+'" viewBox="0 0 800 560" aria-hidden="true">';
  var x,s1='',s2='',r='';
  for(x=HX.x0;x<=HX.x1;x+=4){s1+=(x===HX.x0?'M':'L')+x+' '+hy(x,1).toFixed(1);s2+=(x===HX.x0?'M':'L')+x+' '+hy(x,-1).toFixed(1)}
  for(x=HX.x0+7;x<HX.x1;x+=15){var a=hy(x,1),b=hy(x,-1);if(Math.abs(a-b)<10)continue;r+='M'+x+' '+a.toFixed(1)+'V'+b.toFixed(1)}
  g+='<g id="scBase"><rect class="neat" x=".5" y=".5" width="799" height="559"/>';
  g+='<path class="sD rung" d="'+r+'"/><path class="sD str" d="'+s1+'"/><path class="sD str s2" d="'+s2+'"/>';
  g+='<text x="26" y="546" class="t s">SPERM DNA · SCHEMATIC</text>';
  g+='</g>';
  /* methyl marks at CpG sites (filled = methylated) */
  var mk='';CPG.forEach(function(cx,k){var y=hy(cx,1),up=y<HX.cy,dy=up?-20:20;
    mk+='<g class="mt'+(MET[k]?' on':'')+'"><path class="stem" d="M'+cx+' '+y.toFixed(1)+'v'+dy+'"/><circle cx="'+cx+'" cy="'+(y+dy+(up?-5:5)).toFixed(1)+'" r="5"/></g>'});
  g+='<g id="met">'+mk+'</g>';
  g+='<path id="metL" class="ld" d="M318 '+(hy(318,1)-32).toFixed(0)+'V74H352"/><text id="metT" x="358" y="78" class="w">CH₃ · METHYL MARK</text>';
  /* the three gene groups the test reads */
  var GR=[[52,280,"SPERM PRODUCTION"],[292,520,"SPERM MATURATION"],[532,748,"EMBRYO DEVELOPMENT"]],gr='';
  GR.forEach(function(q){gr+='<path class="br" d="M'+q[0]+' 290v8H'+q[1]+'v-8"/><text x="'+((q[0]+q[1])/2)+'" y="322" class="t" text-anchor="middle">'+q[2]+'</text>'});
  g+='<g id="grp">'+gr+'</g>';
  /* methylation level per site, and the reference pattern */
  var bx0=64,bs=(736-bx0)/23,bb='',ref='';
  BARS.forEach(function(v,k){var bx=bx0+k*bs,h=(110*v).toFixed(1);bb+='<rect class="bar" x="'+(bx-7.5).toFixed(1)+'" y="'+(500-110*v).toFixed(1)+'" width="15" height="'+h+'" data-h="'+h+'"/>';
    var rv=Math.max(.15,Math.min(.98,v+.16*Math.sin(k*2.1+1)));ref+=(k?'L':'M')+bx.toFixed(1)+' '+(500-110*rv).toFixed(1)});
  g+='<g id="bars">'+bb+'</g><path id="ref" class="ref" d="'+ref+'"/>';
  g+='<path class="base" id="bbase" d="M48 500.5H752"/>';
  g+='<text id="barT" x="26" y="526" class="o">METHYLATION · SITE BY SITE</text><text id="refT" x="774" y="526" class="i" text-anchor="end">REFERENCE PATTERN</text>';
  /* the path: dotted, as on the Path kit, forking to the treatment choice */
  var pa='M110 430H380C440 430 470 392 530 386H690',pb='M380 430C440 430 470 470 530 476H690';
  g+='<g id="path"><path class="pth" d="'+pa+'"/><path class="pth" d="'+pb+'"/><circle class="pd" cx="110" cy="430" r="6"/><circle class="pe" cx="696" cy="386" r="6"/><circle class="pe" cx="696" cy="476" r="6"/></g>';
  g+='<text id="pT0" x="110" y="410" class="w" text-anchor="middle">RESULT</text><text id="pT1" x="714" y="390" class="v">IUI</text><text id="pT2" x="714" y="480" class="v">IVF</text>';
  g+='<text id="pT3" x="774" y="526" class="t" text-anchor="end">TO THE PHYSICIAN WITHIN TWO WEEKS</text>';
  /* step captions */
  g+='<text id="cap1" x="26" y="40" class="a">DNA FROM THE SPERM</text>';
  g+='<text id="cap2" x="26" y="40" class="a">METHYLATION AT GENES FOR SPERM FUNCTION</text>';
  g+='<text id="cap3" x="26" y="40" class="a">COMPARED WITH OUTCOME PATTERNS</text>';
  g+='<text id="cap4" x="26" y="40" class="a">A RESULT THAT GUIDES TREATMENT</text>';
  return g+'</svg>';
}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var Lg=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=Lg+" "+Lg;return [p,Lg]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase .neat, #scBase text",svg),
    met:$$("#met .mt",svg),metL:$("#metL",svg),metT:$("#metT",svg),grp:$("#grp",svg),
    bars:$$("#bars .bar",svg),ref:dl("#ref"),refEl:$("#ref",svg),bbase:$("#bbase",svg),barT:$("#barT",svg),refT:$("#refT",svg),
    path:$$("#path .pth",svg),pd:$("#path .pd",svg),pe:$$("#path .pe",svg),pT:[$("#pT0",svg),$("#pT1",svg),$("#pT2",svg),$("#pT3",svg)],
    cap:[$("#cap1",svg),$("#cap2",svg),$("#cap3",svg),$("#cap4",svg)]};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function cl(v){return v<0?0:v>1?1:v}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b);E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    var s2=seg(p,.25,.44),s3=seg(p,.5,.69),s4=seg(p,.75,.94);
    /* step 2: methyl marks appear left to right (methylated ones fill); the gene groups draw beneath */
    E.met.forEach(function(el,k){var q=cl(s2*1.7-k*.05);el.style.opacity=(b*(.12+.88*q)).toFixed(3);el.setAttribute("transform","translate(0 "+(4*(1-q)).toFixed(1)+")")});
    E.metL.style.opacity=E.metT.style.opacity=(b*cl(s2*2-.4)*(1-s3)).toFixed(3);
    E.grp.style.opacity=(b*(.15+.85*s2)*(1-.55*s4)).toFixed(3);
    /* step 3: each site's level rises as a bar, then the reference pattern draws across them; they step back for step 4 */
    var bo=1-s4;
    E.bars.forEach(function(el,k){var q=cl(s3*1.6-k*.025),h=+el.getAttribute("data-h"),sy=.3+.7*q;el.setAttribute("transform","translate(0 "+(500*(1-sy)).toFixed(1)+") scale(1 "+sy.toFixed(3)+")");el.style.opacity=(b*(.22+.68*q)*(.14+.86*bo)).toFixed(3)});
    E.bbase.style.opacity=(b*(.45+.55*s3)*(.3+.7*bo)).toFixed(3);
    draw(E.ref,cl(s3*1.4-.35));E.refEl.style.opacity=(b*bo).toFixed(3);
    E.barT.style.opacity=E.refT.style.opacity=(b*s3*bo).toFixed(3);
    /* step 4: the dotted path runs from the result and forks to the treatment choice */
    E.path.forEach(function(el,k){var q=cl(s4*1.5-k*.15);el.style.clipPath="inset(0 "+((1-q)*100).toFixed(1)+"% 0 0)";el.style.opacity=(b*(q>0?1:0)).toFixed(3)});
    E.pd.style.opacity=E.pT[0].style.opacity=(b*cl(s4*3)).toFixed(3);
    E.pe.forEach(function(el){el.style.opacity=(b*cl(s4*2-1)).toFixed(3)});
    E.pT[1].style.opacity=E.pT[2].style.opacity=E.pT[3].style.opacity=(b*cl(s4*2-1)).toFixed(3);
    var I=function(v){return Math.max(0,v*2-1)},O=function(v){return 1-Math.min(1,v*2)};
    E.cap[0].style.opacity=(b*O(s2)).toFixed(3);E.cap[1].style.opacity=(I(s2)*O(s3)).toFixed(3);E.cap[2].style.opacity=(I(s3)*O(s4)).toFixed(3);E.cap[3].style.opacity=I(s4).toFixed(3);
  };
}

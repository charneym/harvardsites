/* The story scene (BL/BY/DB, DR): ONE fine-line cutaway of a TITAN-PORT in side elevation, the product PakuMed shows on every
   product page (Titan-Gehäuse, Silikon-Membran, Katheter), kept for all four steps:
   1 the pure-titanium housing with its flange and suture holes, cut open to show the chamber;
   2 the self-sealing silicone membrane seated in the top;
   3 the outlet, the screw connector and the catheter with its length scale;
   4 a bent SFN® port needle punctures the membrane, its tip in the chamber.
   Captions sit in the clear band under the port on desktop; on phones one caption under the drawing. */
function pkScene(mob){
  var g='';
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'128 48 616 440':'130 62 600 420')+'" aria-hidden="true">';
  /* 1: housing (flange + body), chamber cut open */
  var body='M150 380H450L440 350H400V240L386 228H214L200 240V350H160Z';
  g+='<g id="pkHo"><path class="fh" d="'+body+'"/><rect class="fr" x="236" y="262" width="128" height="74"/></g>';
  g+='<g id="pkHoL"><path class="ln sD" d="'+body+'"/><path class="ln sD" d="M236 262H364V336H236Z"/><path class="ln sD" d="M200 350H400"/>'+
     '<path class="ln sD" d="M179 365a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/><path class="ln sD" d="M409 365a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"/></g>';
  /* 2: membrane */
  var mem='M222 262V238Q300 210 378 238V262Z';
  g+='<g id="pkMe"><path class="fm" d="'+mem+'"/></g>';
  g+='<g id="pkMeL"><path class="lm sD" d="'+mem+'"/><path class="lm sD" d="M230 250Q300 228 370 250"/></g>';
  /* 3: outlet, screw connector, catheter with scale */
  var cat='M500 292H698Q718 292 722 300Q718 308 698 308H500Z';
  g+='<g id="pkCa"><rect class="fh" x="400" y="290" width="50" height="20"/><rect class="fk" x="450" y="282" width="50" height="36"/><path class="fc" d="'+cat+'"/></g>';
  var rid='';for(var q=0;q<6;q++)rid+='M'+(457+q*7)+' 284V316';
  var tk='';for(var t=0;t<6;t++){var tx=528+t*28;tk+='M'+tx+' 292V'+(t%5===0?305:300)}
  g+='<g id="pkCaL"><path class="ln sD" d="M364 296H450M364 304H450"/><path class="ln sD" d="M450 282H500V318H450Z"/><path class="ln sD" d="'+rid+'"/>'+
     '<path class="lc sD" d="'+cat+'"/><path class="mk sD" d="'+tk+'"/></g>';
  /* 4: the bent SFN needle with its wings and line, tip in the chamber */
  g+='<g id="pkNe"><path class="fw" d="M262 96H338L330 110H270Z"/></g>';
  g+='<g id="pkNeL"><path class="nd sD" d="M300 103V302"/><path class="nd sD" d="M300 103H372"/><path class="lt sD" d="M372 103C424 103 440 78 540 76"/><path class="ln sD" d="M262 96H338L330 110H270Z"/></g>';
  if(mob){
    var CM=["1 · TITAN-GEHÄUSE","2 · SILIKONMEMBRAN","3 · KATHETER MIT SKALIERUNG","4 · STANZFREIE SFN®-KANÜLE"];
    CM.forEach(function(c,k){g+='<text class="a gl" id="pkG'+k+'" x="436" y="452" text-anchor="middle">'+c+'</text>'});
  }else{
    var CAP=[["TITAN-GEHÄUSE","REINTITAN · NAHTLÖCHER ZUR FIXIERUNG"],["SILIKONMEMBRAN","SELBSTSCHLIESSEND · BIS ZU 3.000 PUNKTIONEN"],["KATHETER","DREH-SCHRAUBVERBINDUNG · LÄNGENSKALIERUNG"],["SFN®-PORTKANÜLE","SPEZIALSCHLIFF · STANZFREI"]];
    CAP.forEach(function(c,k){g+='<g class="gl" id="pkG'+k+'"><text class="a" x="150" y="440">'+c[0]+'</text><text class="t" x="150" y="464">'+c[1]+'</text></g>'});
  }
  return g+'</svg>';
}
function scene(){return pkScene(MOBILE()?1:0)}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={hoL:dl("#pkHoL .sD"),meL:dl("#pkMeL .sD"),caL:dl("#pkCaL .sD"),neL:dl("#pkNeL .sD"),
    ho:$("#pkHo",svg),me:$("#pkMe",svg),ca:$("#pkCa",svg),ne:$("#pkNe",svg),meLG:$("#pkMeL",svg),caLG:$("#pkCaL",svg),neLG:$("#pkNeL",svg),
    cap:[0,1,2,3].map(function(j){return $("#pkG"+j,svg)})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.hoL,b)}
    var g=seg(b,.35,1);
    op(E.ho,g);
    op(E.meLG,seg(p,.26,.27));op(E.me,g*seg(p,.26,.34));draw(E.meL,seg(p,.26,.42));
    op(E.caLG,seg(p,.5,.51));op(E.ca,g*seg(p,.5,.58));draw(E.caL,seg(p,.5,.68));
    op(E.neLG,seg(p,.76,.77));op(E.ne,g*seg(p,.76,.82));draw(E.neL,seg(p,.76,.92));
    var W=[[0,0,.25],[1,.25,.5],[2,.5,.75],[3,.75,1.01]];
    W.forEach(function(w){var i=w[0],a=w[1],z=w[2],v=(i?seg(p,a,a+.05):1)*(i<3?1-seg(p,z-.03,z+.02):1);op(E.cap[i],g*v)});
  };
}

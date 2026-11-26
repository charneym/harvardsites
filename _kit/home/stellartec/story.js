/* The story scene (DB, DR): ONE fine-line longitudinal section through the esophagus, for Stellartech's esophageal ablation case
   study (stellartec.com > Case Studies), kept on screen for all four steps:
   1 the wall, its thin lining (under 700 microns) over the deeper layers;
   2 the balloon catheter enters and inflates against the lining, with its bipolar electrode band;
   3 the generator sends a rapid burst of RF energy: the lining under the band is treated, deeper layers spared;
   4 the balloon deflates: a new outpatient procedure (MDEA Gold 2007).
   Labels sit in clear space: desktop captions top-left above the drawing; on phones one caption under the drawing. */
function stScene(mob){
  var g='',X0=150,X1=590;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'16 104 586 466':'16 14 586 470')+'" aria-hidden="true">';
  function wall(y0,y1,y2,y3){
    return '<rect class="ln" x="'+X0+'" y="'+Math.min(y2,y3)+'" width="'+(X1-X0)+'" height="'+Math.abs(y3-y2)+'"/>'+
      '<path class="wm sD" d="M'+X0+' '+y0+'H'+X1+'"/><path class="wl sD" d="M'+X0+' '+y1+'H'+X1+'"/><path class="wl sD" d="M'+X0+' '+y2+'H'+X1+'"/><path class="ws sD" d="M'+X0+' '+y3+'H'+X1+'"/>'}
  var hatch='';for(var x=X0+10;x<X1-8;x+=16){hatch+='<path class="ht sD" d="M'+x+' 134L'+(x+8)+' 154M'+x+' 396L'+(x+8)+' 416"/>'}
  g+='<g id="stWall">'+wall(128,160,176,186)+wall(422,390,374,364)+hatch+'</g>';
  g+='<g id="stTreat"><rect class="tr" x="300" y="176" width="180" height="10"/><rect class="tr" x="300" y="364" width="180" height="10"/></g>';
  g+='<g id="stCath"><path class="sh sD" d="M110 275H556"/><path class="tp sD" d="M556 270A5 5 0 0 1 556 280"/></g>';
  g+='<g id="stGen"><path class="cb sD" d="M110 275C74 275 82 330 82 398"/><path class="gb sD" d="M30 400H134V470H30Z"/><path class="gd sD" d="M44 414H102V434H44Z"/><circle class="kn" cx="118" cy="424" r="6"/><path class="gb sD" d="M44 452H74M84 452H102"/></g>';
  g+='<g id="stWave"><path class="wv sD" d="M47 424H56L58 417L60 431L62 417L64 431L66 417L68 431L70 424H99"/></g>';
  var el='';for(var ex=316;ex<=464;ex+=8){el+='<path class="'+((ex/8)%2?'ea':'eb')+'" d="M'+ex+' 189V361"/>'}
  g+='<g id="stBal" transform="translate(0 275) scale(1 .12) translate(0 -275)"><path class="bl" d="M250 275C262 275 270 190 300 187H480C510 190 518 275 530 275C518 275 510 360 480 363H300C270 360 262 275 250 275Z"/>'+
     '<g id="stBand">'+el+'<path class="bs" d="M312 189H468M312 361H468"/></g></g>';
  g+='<g id="stPulse"><path class="pu" d="M330 168Q345 160 360 168M376 168Q391 160 406 168M422 168Q437 160 452 168M330 382Q345 390 360 382M376 382Q391 390 406 382M422 382Q437 390 452 382"/></g>';
  if(mob){
    var CM=["1 · LINING UNDER 700 µm","2 · ELECTRODE BAND ON A BALLOON","3 · A RAPID RF BURST","4 · NEW OUTPATIENT PROCEDURE"];
    CM.forEach(function(c,k){g+='<text class="a gl" id="stG'+k+'" x="310" y="540" text-anchor="middle">'+c+'</text>'});
  }else{
    var CAP=[["LINING UNDER 700 µm","DEEPER LAYERS MUST BE SPARED"],["BIPOLAR ELECTRODE BAND","ON A BALLOON CATHETER"],["RAPID RF BURST","SEVERAL CENTIMETRES IN SECONDS"],["MDEA GOLD AWARD 2007","A NEW OUTPATIENT PROCEDURE"]];
    CAP.forEach(function(c,k){g+='<g class="gl" id="stG'+k+'"><text class="a" x="150" y="62">'+c[0]+'</text><text class="t" x="150" y="86">'+c[1]+'</text></g>'});
  }
  return g+'</svg>';
}
function scene(){return stScene(MOBILE()?1:0)}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={wall:dl("#stWall .sD"),cath:dl("#stCath .sD"),gen:dl("#stGen .sD"),wave:dl("#stWave .sD"),
    lnf:$$("#stWall .ln",svg),cathG:$("#stCath",svg),genG:$("#stGen",svg),kn:$("#stGen .kn",svg),bal:$("#stBal",svg),band:$("#stBand",svg),treat:$("#stTreat",svg),pulse:$("#stPulse",svg),
    gl:[0,1,2,3].map(function(j){return $("#stG"+j,svg)})};
  var lastB=-1;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.wall,b)}
    var g=seg(b,.35,1);
    E.lnf.forEach(function(r){op(r,g)});
    op(E.cathG,g*seg(p,.24,.26));draw(E.cath,seg(p,.25,.36));
    var inf=seg(p,.34,.46)*(1-seg(p,.8,.9));
    op(E.bal,g*seg(p,.3,.34));E.bal.setAttribute("transform","translate(0 275) scale(1 "+(.12+.88*inf).toFixed(3)+") translate(0 -275)");
    op(E.band,seg(p,.4,.47));
    op(E.genG,g*seg(p,.5,.52));draw(E.gen,seg(p,.51,.62));op(E.kn,seg(p,.58,.62));
    draw(E.wave,seg(p,.62,.68));op(E.pulse,g*seg(p,.64,.67)*(1-seg(p,.76,.8)));
    op(E.treat,g*seg(p,.65,.72));
    var W=[[0,0,.25],[1,.25,.5],[2,.5,.75],[3,.75,1.01]];
    W.forEach(function(w){var i=w[0],a=w[1],z=w[2],v=(i?seg(p,a,a+.05):1)*(i<3?1-seg(p,z-.03,z+.02):1);op(E.gl[i],g*v)});
  };
}

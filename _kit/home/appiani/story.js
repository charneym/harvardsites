/* The story scene (BL/BY/DB): an Appiani reel in side section, as appianigroup.com > Prodotti describes the range
   (bobine per steel cord / saw wire / cavo / fibre ottiche; bobine tornite "bilanciate dinamicamente secondo G16 ISO1940
   per alte velocità di processo"; attrezzature speciali: sollevatori, ribaltatori; "macchine riflangiatrici che provvedono
   al ricondizionamento delle bobine B-type danneggiate mediante il ripristino delle loro dimensioni originali").
   ONE reel kept on screen:
   Step 1 (Avvolgimento): wire layers wind onto the barrel, above and below the axis.
   Step 2 (Bilanciatura): the reel spins about its axis; a turning arrow and the G16 tag.
   Step 3 (Movimentazione): a lifter comes down, its pins enter the bore, and the full reel lifts.
   Step 4 (Ricondizionamento): the reel comes back empty with one flange bent; the reflanging restores it, dimension shown. */
var SCW=760,SCH=520,AX=250,FL=230,FR=530,FT=14,FH=168,BR=66,NL=9;
function apScene(o){
  var g='',mob=o.mob;
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="130 0 560 '+SCH+'" aria-hidden="true">';
  /* the reel: barrel, then the wound layers, then both flanges (drawn last so their edges stay crisp) */
  g+='<g id="apReel">';
  g+='<g class="barrel"><rect x="'+(FL+FT)+'" y="'+(AX-BR)+'" width="'+(FR-FL-FT)+'" height="'+(2*BR)+'"/></g>';
  var ly='';for(var k=0;k<NL;k++){var d=BR+7+k*9;ly+='<path class="wl" d="M'+(FL+FT+6)+' '+(AX-d)+'H'+(FR-6)+'M'+(FL+FT+6)+' '+(AX+d)+'H'+(FR-6)+'"/>'}
  g+='<g id="apWire">'+ly+'</g>';
  g+='<path class="axis" d="M'+(FL-60)+' '+AX+'H'+(FR+FT+60)+'"/>';
  function flange(x,id){return '<g id="'+id+'" class="fl"><path d="M'+x+' '+(AX-FH)+'h'+FT+'V'+(AX-14)+'h-'+FT+'ZM'+x+' '+(AX+14)+'h'+FT+'V'+(AX+FH)+'h-'+FT+'Z"/><path class="rimr" d="M'+(x-3)+' '+(AX-FH)+'h'+(FT+6)+'M'+(x-3)+' '+(AX+FH)+'h'+(FT+6)+'"/></g>'}
  g+=flange(FL,"apFlL")+flange(FR,"apFlR");
  g+='</g>';
  /* step 2: the turning arrow round the axis, right of the reel */
  g+='<g id="apSpin"><path class="spin" d="M612 '+(AX-56)+'A30 56 0 1 1 590 '+(AX+52)+'"/><path class="spinh" d="M598 '+(AX+40)+'L588 '+(AX+53)+'L604 '+(AX+57)+'"/></g>';
  /* step 3: the lifter (sollevatore): a crossbar on a hook, two arms outside the flanges, pins into the bore */
  g+='<g id="apLift" class="lift"><path d="M380 30V52M'+(FL-26)+' 52H'+(FR+FT+26)+'M'+(FL-26)+' 52V'+AX+'H'+(FL+8)+'M'+(FR+FT+26)+' 52V'+AX+'H'+(FR+FT-8)+'"/><circle cx="380" cy="30" r="5"/></g>';
  /* step 4: the dimension line of the restored flange, right of the reel */
  g+='<g id="apDim" class="dim"><path d="M'+(FR+FT+38)+' '+(AX-FH)+'V'+(AX+FH)+'M'+(FR+FT+30)+' '+(AX-FH)+'h16M'+(FR+FT+30)+' '+(AX+FH)+'h16"/></g>';
  /* labels, all in the free band below the drawing (8px+ clear of every stroke) */
  var Y=488;
  g+='<g id="apS1"><text class="ok" x="680" y="'+Y+'" text-anchor="end">'+(mob?"FILO, CAVO":"FILO, CAVO, FUNI")+'</text></g>';
  g+='<g id="apS2"><text class="ok" x="680" y="'+Y+'" text-anchor="end">G16 · ISO 1940</text></g>';
  g+='<g id="apS3"><text class="ok" x="680" y="'+Y+'" text-anchor="end">'+(mob?"SOLLEVATORE":"SOLLEVATORE ATSOL")+'</text></g>';
  g+='<g id="apS4"><text class="ok" x="680" y="'+Y+'" text-anchor="end">'+(mob?"RIPRISTINATA":"MISURE ORIGINALI")+'</text></g>';
  var L=mob?["1 · AVVOLGERE","2 · BILANCIARE","3 · SOLLEVARE","4 · RIFLANGIARE"]:["1 · AVVOLGIMENTO","2 · BILANCIATURA","3 · MOVIMENTAZIONE","4 · RICONDIZIONAMENTO"];
  L.forEach(function(t,k){g+='<g id="lb'+(k+1)+'"><text class="a" x="140" y="'+Y+'">'+t+'</text></g>'});
  return g+'</svg>';
}
function scene(){return apScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var E={reel:$("#apReel",svg),wire:$$("#apWire .wl",svg),flR:$("#apFlR",svg),spin:$("#apSpin",svg),spinP:$("#apSpin .spin",svg),lift:$("#apLift",svg),dim:$("#apDim",svg),
    S:[1,2,3,4].map(function(k){return $("#apS"+k,svg)}),lb:[1,2,3,4].map(function(k){return $("#lb"+k,svg)})};
  var LEN=FR-6-(FL+FT+6);
  E.wire.forEach(function(el){el.style.strokeDasharray=LEN+" "+LEN});
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;op(E.reel,b)}
    /* 1: the layers wind on, inner to outer (each one a full draw left to right); 4: the reel comes back empty */
    var wind=seg(p,.03,.22),empty=seg(p,.74,.79);
    E.wire.forEach(function(el,k){var q=Math.min(1,Math.max(0,wind*NL-k));el.style.strokeDashoffset=(LEN*(1-q)).toFixed(1);op(el,b*(1-empty))});
    /* 2: the turning arrow sweeps round (dash flow) */
    op(E.spin,b*seg(p,.27,.32)*(1-seg(p,.47,.51)));if(E.spinP)E.spinP.style.strokeDashoffset=(-p*900).toFixed(1);
    /* 3: the lifter drops onto the bore (fading in, never outside the frame), then reel and lifter rise together; it fades before step 4 */
    var dn=seg(p,.51,.6),up=seg(p,.62,.7)*(1-seg(p,.74,.78)),gone=seg(p,.74,.78);
    E.lift.setAttribute("transform","translate(0 "+(-(1-dn)*20-up*14).toFixed(1)+")");op(E.lift,b*seg(p,.51,.57)*(1-gone));
    E.reel.setAttribute("transform","translate(0 "+(-up*14).toFixed(1)+")");
    /* 4: the right flange arrives bent outwards and is brought back square; the dimension line confirms it */
    var bent=seg(p,.77,.8)*(1-seg(p,.84,.94));
    E.flR.setAttribute("transform","rotate("+(7*bent).toFixed(2)+" "+(FR+FT/2)+" "+(AX+FH)+")");
    op(E.dim,b*seg(p,.92,.97));
    op(E.S[0],b*seg(p,.04,.08)*(1-seg(p,.22,.25)));op(E.S[1],b*seg(p,.28,.32)*(1-seg(p,.47,.5)));
    op(E.S[2],b*seg(p,.53,.57)*(1-seg(p,.72,.75)));op(E.S[3],b*seg(p,.92,.96));
    for(var k=0;k<4;k++)op(E.lb[k],b*seg(p,k*.25,k*.25+.05)*(k<3?(1-seg(p,(k+1)*.25-.03,(k+1)*.25+.01)):1));
  };
}

/* The story scene (BL/BY/DB): how NANUQ cryocools a crystal, as ONE continuous fine-line scene, from
   mitegen.com/nanuqtm-cryocooling-device ("HOW IT WORKS"). A dewar in section with liquid nitrogen and the cold-gas layer
   above it; a mounted crystal on its pin; a magnified view of the drop on the right.
   Step 1: hand plunging, the sample lingers in the cold gas and crystalline ice nucleates and grows in the drop.
   Step 2: NANUQ removes the gas layer and plunges fast, straight into the liquid; the drop stays clear.
   Step 3: the solvent is trapped as amorphous ice and the sample is placed automatically into a Unipuck; the
   magnified view shows sharp diffraction spots. Every element is driven by the scrubbed story progress. */
var SCW=760,SCH=520;
var DW={x0:110,x1:430,top:150,bot:470,ln:300,gas:226};
var SCN=0;
function star(cx,cy,r){var d='',i;for(i=0;i<3;i++){var a=i*Math.PI/3,dx=Math.cos(a)*r,dy=Math.sin(a)*r;d+='M'+(cx-dx).toFixed(1)+' '+(cy-dy).toFixed(1)+'L'+(cx+dx).toFixed(1)+' '+(cy+dy).toFixed(1)}
  for(i=0;i<6;i++){var b=i*Math.PI/3,px=cx+Math.cos(b)*r*.55,py=cy+Math.sin(b)*r*.55,l=r*.28;
    d+='M'+px.toFixed(1)+' '+py.toFixed(1)+'L'+(px+Math.cos(b+.6)*l).toFixed(1)+' '+(py+Math.sin(b+.6)*l).toFixed(1)+'M'+px.toFixed(1)+' '+py.toFixed(1)+'L'+(px+Math.cos(b-.6)*l).toFixed(1)+' '+(py+Math.sin(b-.6)*l).toFixed(1)}
  return d}
function memScene(o){
  var u='m'+(++SCN),g='',i,cx=(DW.x0+DW.x1)/2;
  g+='<svg class="'+(o.mob?"mob":"")+'" viewBox="0 0 '+SCW+' '+SCH+'" aria-hidden="true">';
  g+='<defs><clipPath id="dc'+u+'"><rect x="'+(DW.x0+8)+'" y="'+DW.top+'" width="'+(DW.x1-DW.x0-16)+'" height="'+(DW.bot-DW.top-8)+'"/></clipPath>'+
     '<clipPath id="ic'+u+'"><circle cx="600" cy="230" r="118"/></clipPath>'+
     '<linearGradient id="lg'+u+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2695cc" stop-opacity=".26"/><stop offset="1" stop-color="#2695cc" stop-opacity=".07"/></linearGradient></defs>';
  /* ---- base: the dewar (double wall), liquid nitrogen, the magnifier ring ---- */
  g+='<g id="scBase">';
  g+='<path class="dm sD" d="M'+DW.x0+' '+DW.top+'V'+DW.bot+'H'+DW.x1+'V'+DW.top+'"/>';
  g+='<path class="tb sD" d="M'+(DW.x0+8)+' '+DW.top+'V'+(DW.bot-8)+'H'+(DW.x1-8)+'V'+DW.top+'"/>';
  g+='<path class="tb sD" d="M'+(DW.x0-14)+' '+DW.top+'H'+(DW.x0+8)+'M'+(DW.x1-8)+' '+DW.top+'H'+(DW.x1+14)+'"/>';
  g+='<rect id="ln2" x="'+(DW.x0+8)+'" y="'+DW.ln+'" width="'+(DW.x1-DW.x0-16)+'" height="'+(DW.bot-DW.ln-8)+'" fill="url(#lg'+u+')"/>';
  g+='<path class="lnS sD" d="M'+(DW.x0+8)+' '+DW.ln+'H'+(DW.x1-8)+'"/>';
  for(i=0;i<5;i++){var yy=DW.ln+26+i*30;g+='<path class="hz" d="M'+(DW.x0+30+(i%2)*24)+' '+yy+'h'+(DW.x1-DW.x0-80)+'"/>'}
  /* the Unipuck in section at the bottom of the dewar, with its sample slots */
  g+='<path class="pk sD" d="M'+(cx-92)+' '+(DW.bot-12)+'V'+(DW.bot-64)+'H'+(cx+92)+'V'+(DW.bot-12)+'"/>';
  for(i=0;i<5;i++){var sx=cx-72+i*36;g+='<path class="pks sD" d="M'+(sx-7)+' '+(DW.bot-64)+'V'+(DW.bot-30)+'H'+(sx+7)+'V'+(DW.bot-64)+'"/>'}
  g+='<circle class="tb sD" cx="600" cy="230" r="118"/>';
  g+='<text class="t" x="'+DW.x0+'" y="'+(DW.top-18)+'">DEWAR</text>';
  g+='<text class="t" x="'+(DW.x0+22)+'" y="'+(DW.bot-80)+'">LIQUID NITROGEN</text>';
  g+='<text class="t" x="'+(cx+102)+'" y="'+(DW.bot-34)+'">UNIPUCK</text>';
  g+='<text class="t" x="482" y="378">THE DROP, MAGNIFIED</text>';
  g+='</g>';
  /* ---- the cold-gas layer above the liquid: drifting dotted strata ---- */
  g+='<g id="scGas" clip-path="url(#dc'+u+')">';
  for(i=0;i<4;i++){var gy=DW.gas+10+i*17,d='M'+(DW.x0+8)+' '+gy;for(var x=DW.x0+8;x<=DW.x1;x+=40)d+='q10 -5 20 0t20 0';g+='<path class="gs" d="'+d+'"/>'}
  g+='</g>';
  g+='<text class="t gst" id="gasT" x="'+(DW.x0+22)+'" y="'+(DW.gas-4)+'">COLD GAS</text>';
  /* ---- the sample: goniometer base, pin and mount, moved as one ---- */
  g+='<g id="smp"><g transform="translate('+cx+' 0)">'+
     '<rect class="sb" x="-15" y="-150" width="30" height="26"/><path class="dm" d="M0 -124V-22"/>'+
     '<path class="mt" d="M-2.5 -22C-3 -14 -9 -10 -9 -3A9 9 0 0 0 9 -3C9 -10 3 -14 2.5 -22Z"/><circle class="ap" cx="0" cy="-3" r="4.2"/>'+
     '<path id="spd" class="sp" d="M-22 -150V-40M22 -150V-40M-34 -120V-60M34 -120V-60"/></g></g>';
  /* ---- magnified drop: film ring, the drop, the crystal; ice stars; diffraction spots ---- */
  g+='<g clip-path="url(#ic'+u+')">';
  g+='<circle class="film" cx="600" cy="230" r="96"/><circle class="drop" id="drop" cx="600" cy="230" r="64"/>';
  g+='<path class="xtal" d="M600 188L634 222L620 268L580 268L566 222Z"/><path class="xtl" d="M600 188L600 268M566 222L634 222"/>';
  var IC=[[560,200,13],[642,206,11],[625,258,14],[572,262,10],[606,176,9],[548,236,8],[650,240,9],[596,286,8],[580,226,6],[618,232,6]];
  g+='<g id="ice">';IC.forEach(function(c,k){g+='<path class="ic" data-k="'+k+'" d="'+star(c[0],c[1],c[2])+'"/>'});g+='</g>';
  g+='<g id="dif">';var seed=3,R=function(){seed=(seed*16807)%2147483647;return seed/2147483647};
  [34,56,78,100].forEach(function(r,j){var n=8+j*6;for(i=0;i<n;i++){var a=(i/n)*Math.PI*2+R()*.3;g+='<circle class="ds" data-j="'+j+'" cx="'+(600+Math.cos(a)*r).toFixed(1)+'" cy="'+(230+Math.sin(a)*r).toFixed(1)+'" r="'+(2.6-j*.4).toFixed(1)+'"/>'}});
  g+='<circle class="bs" cx="600" cy="230" r="9"/></g>';
  g+='</g>';
  /* ---- step labels, in the clear band under the drawing ---- */
  g+='<g id="lb1"><text class="a" x="40" y="508">SLOW COOLING IN GAS · ICE GROWS</text></g>';
  g+='<g id="lb2"><text class="a" x="40" y="508">GAS REMOVED · INTO THE LIQUID</text></g>';
  g+='<g id="lb3"><text class="a" x="40" y="508">GLASSY ICE · SHARP DIFFRACTION</text></g>';
  return g+'</svg>';
}
function scene(){return memScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;p.style.strokeDashoffset=L;return [p,L]})};
  var E={base:dl("#scBase .sD"),fade:$$("#scBase text, #scBase .hz, #ln2",svg),gas:$$(".gs",svg),gasT:$$(".gst",svg),
    smp:$("#smp",svg),spd:$("#spd",svg),ice:$$(".ic",svg),drop:$("#drop",svg),
    ds:$$(".ds",svg).map(function(c){return {el:c,j:+c.getAttribute("data-j")}}),bs:$(".bs",svg),xt:$$(".xtal,.xtl",svg),
    l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1;
  function op(el,v){if(el)el.style.opacity=v.toFixed(3)}
  function cl(x){return x<0?0:x>1?1:x}
  function ez(x){return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;E.base.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-b)).toFixed(1)});E.fade.forEach(function(el){el.style.opacity=b.toFixed(3)})}
    /* step 1: slow descent into the gas layer and a long pause there; ice grows in the drop */
    var lower=ez(seg(p,.02,.16)),ice=seg(p,.12,.3),sweep=seg(p,.36,.46),plunge=seg(p,.46,.54),thaw=seg(p,.4,.5),seat=ez(seg(p,.7,.8)),dif=seg(p,.78,.92);
    /* tip y: 96 (above the dewar) -> 262 (in the gas) -> 392 (in the liquid) -> 446 (seated in the slot) */
    var tip=96+166*lower+130*(plunge*plunge)+54*seat;
    if(E.smp)E.smp.setAttribute("transform","translate(0 "+tip.toFixed(1)+")");
    op(E.spd,b*Math.sin(Math.PI*plunge)*.9);
    E.gas.forEach(function(el,k){op(el,b*(1-cl(sweep*1.6-k*.15)));el.style.transform="translateX("+(-30*sweep).toFixed(1)+"px)"});
    E.gasT.forEach(function(el){op(el,b*(1-sweep))});
    /* the old ice belongs to the hand plunge only: with NANUQ the same drop is shown clear */
    E.ice.forEach(function(el,k){var v=cl(ice*1.8-k*.08);op(el,b*v*(1-thaw));el.style.transformOrigin="center";el.style.transformBox="fill-box";el.style.transform="scale("+(.3+.7*v).toFixed(3)+")"});
    if(E.drop){E.drop.style.fillOpacity=(.1+.16*ice*(1-thaw)).toFixed(3)}
    E.xt.forEach(function(el){op(el,b*(1-.75*dif))});
    E.ds.forEach(function(D){op(D.el,b*cl(dif*2.4-D.j*.35))});op(E.bs,b*dif);
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.44,.52)*(1-seg(p,.64,.7)));op(E.l3,b*seg(p,.82,.9));
  };
}

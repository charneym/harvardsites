/* The story scene (DB/BL): Sutra Medical's own account of the Hemi-Valve (sutramedical.com, Clinical Need and Our TMVR
   Technology: the native mitral valve with its anterior leaflet and P1–P3 posterior scallops; a nature-inspired posterior
   leaflet replacement on a crescent frame with three prosthetic leaflets, anchored supra-annularly; coapting with the
   native anterior leaflet, eliminating MR while preserving left ventricular outflow), drawn in fine line as ONE mitral
   valve seen from the atrium.
   Frame 0 is complete: the annulus and both native leaflets.
   Step 1 (the leak): the gap between the leaflets glows as the regurgitant orifice.
   Step 2 (replace): the native posterior leaflet quietens; the crescent frame draws along the posterior annulus and the
   three prosthetic leaflets open in.
   Step 3 (coapt): the prosthetic leaflets rise to meet the anterior leaflet, the gap closes, the outflow arrow shows.
   Everything is driven by the scrubbed progress. No dash-drawn path uses non-scaling-stroke (DR.4). */
var CX=380,CY=262,RX=245,RY=172,CM=.223;
function f1(v){return v.toFixed(1)}
function ep(t,dr){return [CX+(RX+dr)*Math.cos(t),CY+(RY+dr)*Math.sin(t)]}
function arc(a,b,dr,n,mv){var s='',i;for(i=0;i<=n;i++){var p=ep(a+(b-a)*i/n,dr);s+=(i||!mv?'L':'M')+f1(p[0])+' '+f1(p[1])}return s}
function storyScene(o){
  var g='',mob=o.mob,i;
  var R=ep(CM,0),L=ep(Math.PI-CM,0),RS=f1(R[0])+' '+f1(R[1]),LS=f1(L[0])+' '+f1(L[1]);
  g+='<svg class="'+(mob?"mob":"")+'" viewBox="'+(mob?'56 14 648 548':'20 14 720 548')+'" aria-hidden="true">';
  g+='<g transform="translate(380 262) scale(1.22) translate(-380 -262)">';
  /* the annulus */
  g+='<path class="sAn sD" d="'+arc(0,Math.PI*2,0,120,1)+'Z"/>';
  /* the regurgitant orifice between the two free edges */
  g+='<path id="scOr" class="sOr" d="M'+RS+'Q'+CX+' 224 '+LS+'Q190 290 255 326Q380 282 505 326Q570 290 '+RS+'Z"/>';
  /* the native anterior leaflet (top): the anterior annulus, then its free edge */
  g+='<path class="sAl sD" d="M'+LS+arc(Math.PI-CM,Math.PI*2+CM,0,70)+'Q'+CX+' 224 '+LS+'"/>';
  /* the native posterior leaflet (bottom), with its P1–P3 scallops */
  g+='<g id="scNp"><path class="sPl sD" d="M'+RS+arc(CM,Math.PI-CM,0,60)+'Q190 290 255 326Q380 282 505 326Q570 290 '+RS+'"/>';
  g+='<path class="sSc sD" d="M255 326L238 412M505 326L522 412"/></g>';
  /* the crescent frame: an outer rail and a zigzag along the posterior annulus */
  var zz='',n=16;for(i=0;i<=n;i++){var t=.08+(Math.PI-.16)*i/n,p=ep(t,i%2?-6:16);zz+=(i?'L':'M')+f1(p[0])+' '+f1(p[1])}
  g+='<g id="scFr"><path class="sFr" d="'+arc(.08,Math.PI-.08,16,60,1)+'"/><path class="sFz" d="'+zz+'"/></g>';
  /* the three prosthetic leaflets, hinged on the posterior annulus */
  g+='<g id="scPr"><path class="sPr" d="M'+RS+arc(CM,Math.PI-CM,0,60)+'Q185 268 255 278Q380 240 505 278Q575 268 '+RS+'Z"/>';
  g+='<path class="sPs" d="M255 278L240 414M505 278L520 414"/></g>';
  /* the outflow arrow, anterior to the anterior leaflet */
  g+='<g id="scOf"><path class="sOf" d="M300 128L236 66"/><path class="sOf" d="M236 66l3 13M236 66l13 3"/></g>';
  g+='</g>';
  if(!mob){
    g+='<g id="lAl"><path class="ld" d="M492 112L556 54"/><text class="t" x="564" y="50">ANTERIOR LEAFLET</text></g>';
    g+='<g id="lPl"><path class="ld" d="M300 446L264 512"/><text class="t" x="80" y="522">POSTERIOR LEAFLET</text></g>';
    g+='<g id="lFr"><path class="ld" d="M612 440L616 506"/><text class="t o" x="606" y="522" text-anchor="end">CRESCENT FRAME</text></g>';
    g+='<g id="lOf"><text class="t o" x="40" y="44">OUTFLOW OPEN</text></g>';
  }else{g+='<g id="lAl"></g><g id="lPl"></g><g id="lFr"></g><g id="lOf"></g>'}
  var ly=mob?550:552,lx=mob?70:34;
  g+='<g id="lb1"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'MITRAL REGURGITATION':'MITRAL REGURGITATION: BLOOD LEAKS BACK')+'</text></g>';
  g+='<g id="lb2"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'A NEW POSTERIOR LEAFLET':'A NEW POSTERIOR LEAFLET ON A CRESCENT FRAME')+'</text></g>';
  g+='<g id="lb3"><text class="a" x="'+lx+'" y="'+ly+'">'+(mob?'COAPTED, OUTFLOW OPEN':'COAPTED WITH THE NATIVE ANTERIOR LEAFLET')+'</text></g>';
  return g+'</svg>';
}
function scene(){return storyScene({mob:MOBILE()?1:0})}
function storyDraw(svg){
  var dl=function(sel){return $$(sel,svg).map(function(p){var L=p.getTotalLength?p.getTotalLength():0;p.style.strokeDasharray=L+" "+L;return [p,L]})};
  var E={base:dl(".sD"),or:$("#scOr",svg),np:$("#scNp",svg),fr:dl("#scFr path"),frg:$("#scFr",svg),pr:$("#scPr",svg),of:$("#scOf",svg),
    lAl:$("#lAl",svg),lPl:$("#lPl",svg),lFr:$("#lFr",svg),lOf:$("#lOf",svg),l1:$("#lb1",svg),l2:$("#lb2",svg),l3:$("#lb3",svg)};
  var lastB=-1,BY=CY+RY;
  function draw(list,v){list.forEach(function(a){a[0].style.strokeDashoffset=(a[1]*(1-v)).toFixed(1)})}
  function op(el,v){if(el)el.style.opacity=Math.max(0,Math.min(1,v)).toFixed(3)}
  function sm(x){x=x<0?0:x>1?1:x;return x*x*(3-2*x)}
  return function(p,b){
    if(!svg.isConnected)return;
    if(b!==lastB){lastB=b;draw(E.base,b)}
    var s1=seg(p,.04,.32),s2=seg(p,.36,.64),s3=seg(p,.68,.94);
    /* 1: the orifice glows (and closes in 3) */
    op(E.or,b*(.15+.85*sm(s1))*(1-sm(s3/.8)));
    /* 2: the native posterior leaflet quietens; the frame draws; the prosthetic leaflets open in */
    op(E.np,1-.8*sm(s2));
    op(E.frg,b*Math.min(1,s2*8));draw(E.fr,sm(s2/.7));
    var open=sm((s2-.35)/.65),close=sm(s3/.75),sy=.62+.38*close;
    op(E.pr,b*open);
    E.pr.setAttribute("transform","translate(0 "+f1(BY*(1-sy))+") scale(1 "+sy.toFixed(3)+")");
    /* 3: the outflow arrow */
    op(E.of,b*sm((s3-.45)/.4));
    op(E.lAl,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));op(E.lPl,b*seg(p,.1,.18)*(1-seg(p,.3,.36)));
    op(E.lFr,b*seg(p,.48,.56)*(1-seg(p,.64,.7)));
    op(E.lOf,b*seg(p,.84,.9));
    op(E.l1,b*seg(p,.06,.14)*(1-seg(p,.3,.36)));op(E.l2,b*seg(p,.42,.5)*(1-seg(p,.62,.68)));op(E.l3,b*seg(p,.76,.84));
  };
}
